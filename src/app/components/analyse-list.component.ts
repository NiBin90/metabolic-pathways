import { Component, DoCheck } from '@angular/core';
import {DataAnalyse} from '../services/data-analyse.service';
import { Genes } from '../models/genes';
import { Nodes } from '../models/nodes';
@Component({
  selector: 'analyse-list',
  templateUrl: './analyse-list.component.html'
})
export class AnalyseListComponent implements DoCheck {

  mapName:string;
  genes: Genes[] = [];
  nodes: Nodes[] = [];
  
  
  constructor(private dataAnalyse: DataAnalyse) {}

  ngDoCheck() {
    if(this.dataAnalyse.pathwayMap != undefined && this.dataAnalyse.pathwayMap.map.map_name != this.mapName){
      this.mapName = this.dataAnalyse.pathwayMap.map.map_name;
      this.genes = this.dataAnalyse.genes;
      this.nodes = this.dataAnalyse.nodes;

    }
  }

}