import { Component, OnInit } from '@angular/core';
import Parameter from '../Parameter';
import { ActivatedRoute, Router } from '@angular/router';
import { ParameterService } from '../parameter.service';
import { OptionService } from '../../option/option.service';

@Component({
  selector: 'app-parameter-get',
  templateUrl: './parameter-get.component.html',
  styleUrls: ['./parameter-get.component.css']
})
export class ParameterGetComponent implements OnInit {
  parameters: Parameter[];
  selectedParameter: Parameter;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: ParameterService,
    private os: OptionService
    ) { }

  ngOnInit() {
    this.ps
      .getParameters()
      .subscribe((data: Parameter[]) => {
        this.parameters = data;
    });
  }

  deleteCategory(id, catName) {
    this.ps.deleteParameter(id).subscribe(res => {
      this.ps.getParameters()
      .subscribe((data: Parameter[]) => {
        if(this.selectedParameter.name == catName){
          this.selectedParameter = null;
        }
      });
    });
  }

  deleteOption(id) {
    this.os.deleteOption(id).subscribe(res => {
      var selectedParameterName = this.selectedParameter.name;
      this.parameters = null;
      this.ps.getParameters()
      .subscribe((data: Parameter[]) => {
        this.parameters = data;
        var selectedPar = this.parameters.filter(parameter => {
          return parameter.name === selectedParameterName
        })[0];
        this.selectedParameter = selectedPar;
      });
    });
  }

  onSelect(parameter: Parameter): void {
    if(this.selectedParameter == parameter){
      this.selectedParameter = null;
      return;
    }
    this.selectedParameter = parameter;
    return;
  }

}
