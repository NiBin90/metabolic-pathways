import { Component, DoCheck } from '@angular/core';

import { DataAnalyse } from '../services/data-analyse.service';

import * as d3 from 'd3';

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
    let selection = d3.selectAll('path.segment')
    if (checked) {
      selection.style('stroke', '#2bbbad');
    }
    else {
      selection.style('stroke', '#334E75');
    }

  }
}
