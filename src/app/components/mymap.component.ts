import { Component, DoCheck } from '@angular/core';

import { DataAnalyse } from '../services/data-analyse.service';

import * as d3 from 'd3';

declare var jQuery: any;

@Component({
  selector: 'mymap-component',
  templateUrl: './mymap.component.html',
  styleUrls: ['./mymap.component.css']
})
export class MyMapComponent implements DoCheck {

  pathwayMap: any;
  file: any = null;
  selectedPath: string;

  constructor(private dataLoader: DataAnalyse) { }

  ngDoCheck() {
    if (this.selectedPath != this.dataLoader.selectedPath) {
      this.selectedPath = this.dataLoader.selectedPath;
    }
  }

  async readFile() {
    this.file = (<HTMLInputElement>document.getElementById("jsondata")).files[0];
    await this.dataLoader.getFile(this.file);
  }
  // switch scheme 
  switchscheme(checked: boolean) {

    if (checked) {
      //segment change.
      jQuery("svg.escher-svg .segment").css('stroke', '#2bbbad');
      //arrowhead change.
      jQuery("svg.escher-svg .arrowhead").css('stroke', '#2bbbad');
    }
    else {
      //segment recover.
      jQuery("svg.escher-svg .segment").css('stroke', '#334E75');
      //arrowhead recover.
      jQuery("svg.escher-svg .arrowhead").css('stroke', '#334E75');
    }

  }
}
