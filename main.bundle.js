webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, ".panel-body {\n  height: calc(100vh - 200px);\n  padding: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav>\n  <div class=\"nav-wrapper layout-margin\" style='background-color: #26a69a'>\n    <a ui-sref=\"base.default\" href=\"/\">\n      <span class=\"gen-title\" style=\"font-size: 18px\">Genialis Demo: Metabolic pathways visualizer</span>\n    </a>\n    <br>\n  </div>\n</nav>\n<div>\n  <p></p><br>\n</div>\n\n<!-- Content -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <!-- map content -->\n    <div class=\"col-md-9\">\n      <mymap-component></mymap-component>\n    </div>\n\n    <!-- analyse list -->\n    <div class=\"col-md-3\">\n      <analyse-list></analyse-list>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n  <div class=\"panel panel-default\">\r\n\r\n\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">NODE TYPES</h3>\r\n    </div>\r\n    \r\n    <div class=\"panel-body\">\r\n      <ul *ngFor=\"let node of nodes\">\r\n        {{ node.typeName }}:  <span style=\"float:right\"><b>{{ node.numberOfType }}</b></span>\r\n      </ul>\r\n    </div>\r\n    \r\n\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">GENES FOR MORE THAN ONE REACTION</h3>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n      <ul *ngFor=\"let gene of genes\" style=\"margin-bottom:0\">\r\n        {{ gene.geneName }} <span style=\"float:right\"><b>{{ gene.numberOfReactions }}</b></span>\r\n        <hr style=\"margin:2px\">\r\n      </ul>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\" style=\"padding-top: 20px; padding-bottom:1px\">\n    <div class=\"row\">\n\n\n      <!-- load file-->\n      <div class=\"col-md-6\">\n        <label class=\"btn btn-default btn-primary pull-left\">\n          <input type=\"file\" class=\"form-control-file pull-left\" id=\"jsondata\" (change)=\"readFile()\" style=\"display:none;\">\n          Load JSON Map\n        </label>\n      </div>\n      <div class=\"col-md-6\">\n\n\n        <!-- Switch Schema-->\n        <div class=\"switch\">\n\n          <label style=\"float:right\">\n    Schemes<br>\n    Default\n    <input type=\"checkbox\" (click)=\"switchscheme($event.target.checked)\">\n    <span class=\"lever\"></span>\n    Green\n    </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- map content-->\n  <div class=\"panel-body\">\n    <div style=\"height:100%; width: 100%;\">\n      <div class=\"escher-container\" id=\"map_box\" style=\"height:100%; width: 100%\"></div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n\n    <label style=\"color:red\">\n              {{selectedPath}}\n            </label>\n\n\n\n  </div>\n  <label style=\"float:right\">\n              NOTE: zoom in and select a connection.\n            </label>\n\n</div>"

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_genes__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_nodes__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataAnalyse; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DataAnalyse = (function () {
    function DataAnalyse() {
        //basic setting of the map.
        this.options = {
            menu: 'zoom',
            scroll_behavior: 'zoom',
            enable_tooltips: false
        };
        this.nodesObject = {};
        //store the nodeTypes.
        this.nodes = [];
        this.genesObject = {};
        //store the genes that are part of more than one action.
        this.genes = [];
    }
    DataAnalyse.prototype.getFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var fileReader = new FileReader();
                        fileReader.readAsBinaryString(file);
                        fileReader.onload = function (event) {
                            var data = JSON.parse(fileReader.result);
                            //buildmap
                            _this.showMap(data);
                            //list the node types
                            _this.listNodes();
                            //list the genes that are in more than one reaction.
                            _this.listGenes();
                            //analyse the connection.
                            _this.AnalyseConnetion();
                            resolve(data);
                        };
                    })];
            });
        });
    };
    // show map.
    DataAnalyse.prototype.showMap = function (data) {
        this.pathwayMap = escher.Builder(data, null, null, __WEBPACK_IMPORTED_MODULE_3_d3__["select"]('#map_box'), this.options);
        console.log("showing map");
    };
    // Get click on segment group and List the connection of both end nodes.
    DataAnalyse.prototype.AnalyseConnetion = function () {
        var _this = this;
        // MouseOver and out tips.
        var selection = __WEBPACK_IMPORTED_MODULE_3_d3__["selectAll"]('path.segment');
        selection.on("mouseover", function (data, event) {
            selection.style('stroke-width', '15px');
        });
        selection.on("mouseout", function (data) {
            selection.style('stroke-width', '10px');
        });
        // Click on the path.
        selection.on("click", function (data) {
            // nodeNameFrom and nodeNameTo, some nodes have no name, but all nodes has property of node_type.
            var nodeNameFrom = _this.pathwayMap.map.nodes[data.from_node_id].node_type;
            var nodeNameTo = _this.pathwayMap.map.nodes[data.to_node_id].node_type;
            if (_this.pathwayMap.map.nodes[data.from_node_id].name != undefined) {
                nodeNameFrom = _this.pathwayMap.map.nodes[data.from_node_id].name;
            }
            if (_this.pathwayMap.map.nodes[data.to_node_id].name != undefined) {
                nodeNameTo = _this.pathwayMap.map.nodes[data.to_node_id].name;
            }
            _this.selectedPath = "From " + nodeNameFrom + ", to " + nodeNameTo;
        });
    };
    //list nodetypes.
    DataAnalyse.prototype.listNodes = function () {
        this.nodes = [];
        this.nodesObject = {};
        for (var i in this.pathwayMap.map.nodes) {
            if (this.nodesObject[this.pathwayMap.map.nodes[i].node_type] != null) {
                this.nodesObject[this.pathwayMap.map.nodes[i].node_type]++;
            }
            else {
                this.nodesObject[this.pathwayMap.map.nodes[i].node_type] = 1;
            }
        }
        for (var i in this.nodesObject) {
            var newNodes = new __WEBPACK_IMPORTED_MODULE_2__models_nodes__["a" /* Nodes */](i, this.nodesObject[i]);
            this.nodes.push(newNodes);
        }
        return this.nodes;
    };
    // list Genes That Are In More Than One Reaction.
    DataAnalyse.prototype.listGenes = function () {
        if (this.genes.length > 0) {
            this.genes = [];
            this.genesObject = {};
        }
        for (var i in this.pathwayMap.map.reactions) {
            for (var j in this.pathwayMap.map.reactions[i].genes) {
                if (this.genesObject[this.pathwayMap.map.reactions[i].genes[j].name] != null) {
                    this.genesObject[this.pathwayMap.map.reactions[i].genes[j].name]++;
                }
                else {
                    this.genesObject[this.pathwayMap.map.reactions[i].genes[j].name] = 1;
                }
            }
        }
        for (var i in this.genesObject) {
            if (this.genesObject[i] > 1) {
                var newGeneType = new __WEBPACK_IMPORTED_MODULE_1__models_genes__["a" /* Genes */](i, this.genesObject[i]);
                this.genes.push(newGeneType);
            }
        }
        //sort the genes.
        sortByKey(this.genes, 'numberOfReactions');
        function sortByKey(array, key) {
            return array.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            });
        }
        return this.genes;
    };
    return DataAnalyse;
}());
DataAnalyse = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataAnalyse);

//# sourceMappingURL=data-analyse.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 75;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(89);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(145),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_mymap_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_analyse_list_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_analyse_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_mymap_component__["a" /* MyMapComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_analyse_list_component__["a" /* AnalyseListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_data_analyse_service__["a" /* DataAnalyse */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_analyse_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyseListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyseListComponent = (function () {
    function AnalyseListComponent(dataAnalyse) {
        this.dataAnalyse = dataAnalyse;
        this.genes = [];
        this.nodes = [];
    }
    AnalyseListComponent.prototype.ngDoCheck = function () {
        if (this.dataAnalyse.pathwayMap != undefined && this.dataAnalyse.pathwayMap.map.map_name != this.mapName) {
            this.mapName = this.dataAnalyse.pathwayMap.map.map_name;
            this.genes = this.dataAnalyse.genes;
            this.nodes = this.dataAnalyse.nodes;
        }
    };
    return AnalyseListComponent;
}());
AnalyseListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'analyse-list',
        template: __webpack_require__(146)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_analyse_service__["a" /* DataAnalyse */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_analyse_service__["a" /* DataAnalyse */]) === "function" && _a || Object])
], AnalyseListComponent);

var _a;
//# sourceMappingURL=analyse-list.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_analyse_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MyMapComponent = (function () {
    function MyMapComponent(dataLoader) {
        this.dataLoader = dataLoader;
        this.file = null;
    }
    MyMapComponent.prototype.ngDoCheck = function () {
        if (this.selectedPath != this.dataLoader.selectedPath) {
            this.selectedPath = this.dataLoader.selectedPath;
        }
    };
    MyMapComponent.prototype.readFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.file = document.getElementById("jsondata").files[0];
                        return [4 /*yield*/, this.dataLoader.getFile(this.file)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // switch scheme 
    MyMapComponent.prototype.switchscheme = function (checked) {
        var selection = __WEBPACK_IMPORTED_MODULE_2_d3__["selectAll"]('path.segment');
        if (checked) {
            selection.style('stroke', '#2bbbad');
        }
        else {
            selection.style('stroke', '#334E75');
        }
    };
    return MyMapComponent;
}());
MyMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'mymap-component',
        template: __webpack_require__(147),
        styles: [__webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_analyse_service__["a" /* DataAnalyse */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_analyse_service__["a" /* DataAnalyse */]) === "function" && _a || Object])
], MyMapComponent);

var _a;
//# sourceMappingURL=mymap.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genes; });
var Genes = (function () {
    function Genes(geneName, numberOfReactions) {
        this.geneName = geneName;
        this.numberOfReactions = numberOfReactions;
    }
    return Genes;
}());

//# sourceMappingURL=genes.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nodes; });
var Nodes = (function () {
    function Nodes(typeName, numberOfType) {
        this.typeName = typeName;
        this.numberOfType = numberOfType;
    }
    return Nodes;
}());

//# sourceMappingURL=nodes.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[172]);
//# sourceMappingURL=main.bundle.js.map