import { Injectable } from '@angular/core';
import { Genes } from '../models/genes';
import { Nodes } from '../models/nodes';
import * as d3 from 'd3';

// for highting the selected connetion.
declare var jQuery: any;
declare var escher: any;

@Injectable()
export class DataAnalyse {
  //basic setting of the map.
  options = {
    menu: 'zoom',
    scroll_behavior: 'zoom',
    enable_tooltips: false
  }
  pathwayMap: any;
  nodesObject = {};
  newNodes: Nodes;
  //store the nodeTypes.
  nodes: Nodes[] = [];
  genesObject = {};
  newGenes: Genes;
  //store the genes that are part of more than one action.
  genes: Genes[] = [];
  // selectedPath return back to the map.
  selectedPath: string;

  constructor() { }

  async getFile(file) {
    return new Promise((resolve, reject) => {
      var fileReader = new FileReader();
      fileReader.readAsBinaryString(file);
      fileReader.onload = (event: any) => {
        var data = JSON.parse(fileReader.result);
        //buildmap
        this.showMap(data);
        //list the node types
        this.listNodes();
        //list the genes that are in more than one reaction.
        this.listGenes();
        //analyse the connection.
        this.AnalyseConnetion();
        resolve(data);
      }
    });
  }

  // show map.
  showMap(data) {
    this.pathwayMap = escher.Builder(data, null, null, d3.select('#map_box'), this.options);
    console.log("showing map");
  }

  // Get click on segment group and List the connection of both end nodes.
  AnalyseConnetion() {
    // MouseOver and out tips.
    let selection = d3.selectAll('path.segment');
    selection.on("mouseover", (data, event) => {
      selection.style('stroke-width', '15px');
    });
    selection.on("mouseout", (data) => {
      selection.style('stroke-width', '10px');
    });
    // Click on the path.
    selection.on("click", (data) => {
      // nodeNameFrom and nodeNameTo, some nodes have no name, but all nodes has property of node_type.
      let nodeNameFrom = this.pathwayMap.map.nodes[data.from_node_id].node_type;
      let nodeNameTo = this.pathwayMap.map.nodes[data.to_node_id].node_type;

      if (this.pathwayMap.map.nodes[data.from_node_id].name != undefined) {
        nodeNameFrom = this.pathwayMap.map.nodes[data.from_node_id].name;
      }
      if (this.pathwayMap.map.nodes[data.to_node_id].name != undefined) {
        nodeNameTo = this.pathwayMap.map.nodes[data.to_node_id].name;
      }
      this.selectedPath = `From ${nodeNameFrom}, to ${nodeNameTo}`;
    });
  }
  //list nodetypes.
  listNodes() {
    this.nodes = [];
    this.nodesObject = {};

    for (let i in this.pathwayMap.map.nodes) {
      if (this.nodesObject[this.pathwayMap.map.nodes[i].node_type] != null) {
        this.nodesObject[this.pathwayMap.map.nodes[i].node_type]++;
      } else {
        this.nodesObject[this.pathwayMap.map.nodes[i].node_type] = 1;
      }
    }

    for (let i in this.nodesObject) {
      let newNodes = new Nodes(i, this.nodesObject[i]);
      this.nodes.push(newNodes);
    }

    return this.nodes;
  }
  // list Genes That Are In More Than One Reaction.
  listGenes() {
    if (this.genes.length > 0) {
      this.genes = [];
      this.genesObject = {};
    }

    for (var i in this.pathwayMap.map.reactions) {
      for (var j in this.pathwayMap.map.reactions[i].genes) {

        if (this.genesObject[this.pathwayMap.map.reactions[i].genes[j].name] != null) {
          this.genesObject[this.pathwayMap.map.reactions[i].genes[j].name]++;
        } else {
          this.genesObject[this.pathwayMap.map.reactions[i].genes[j].name] = 1;
        }

      }
    }

    for (var i in this.genesObject) {
      if (this.genesObject[i] > 1) {
        var newGeneType = new Genes(i, this.genesObject[i]);
        this.genes.push(newGeneType);
      }
    }
    //sort the genes.
    sortByKey(this.genes, 'numberOfReactions');
    function sortByKey(array, key) {
      return array.sort((a, b)=>{
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      });
    }

    return this.genes;
  }

}
