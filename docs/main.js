(self["webpackChunkpokeapi"] = self["webpackChunkpokeapi"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5758);
/* harmony import */ var _components_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pokemon-details/pokemon-details.component */ 3831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/pokemon.service */ 5608);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6410);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search.component */ 9055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/loading/loading.component */ 8424);
/* harmony import */ var _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pokemon-list/pokemon-list.component */ 3407);
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search-result/search-result.component */ 1728);












function AppComponent_loading_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "loading");
} }
function AppComponent_pokemon_list_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "pokemon-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onDetailsPokemon", function AppComponent_pokemon_list_6_Template_pokemon_list_onDetailsPokemon_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.onDetail($event); })("onNextPage", function AppComponent_pokemon_list_6_Template_pokemon_list_onNextPage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.nextPage($event); })("onPrevPage", function AppComponent_pokemon_list_6_Template_pokemon_list_onPrevPage_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.prevPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pokemonsList", ctx_r1.pokemonsList);
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "search-result", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("searchPokemon", ctx_r2.searchPokemon);
} }
class AppComponent {
    constructor(pokemonService, bottomSheet, snackBar) {
        this.pokemonService = pokemonService;
        this.bottomSheet = bottomSheet;
        this.snackBar = snackBar;
        this.title = 'pokeapi';
        this.pokemonsList = [];
        this.loading = false;
        this.isLastPage = false;
        this.isSearching = false;
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
        this.offset = 0;
    }
    ngOnInit() {
        this.getPage(this.offset);
        console.log(this.isLastPage);
    }
    getPage(offset) {
        this.loading = true;
        this.pokemonService.getPokemons(offset).subscribe((data) => {
            if (data) {
                const { results } = data;
                if (results.length === 0)
                    this.isLastPage = true;
                if (!this.isLastPage)
                    this.getPokemons(results);
            }
        });
    }
    prevPage(count) {
        this.offset = count;
        this.getPage(this.offset);
    }
    nextPage(count) {
        this.offset = count;
        this.getPage(this.offset);
    }
    getPrincipalType(list) {
        var _a;
        return (_a = list.filter((x) => x.slot === 1)[0]) === null || _a === void 0 ? void 0 : _a.type.name;
    }
    onSearchPokemonOutput(name) {
        const value = name;
        if (value === '') {
            this.isSearching = false;
        }
        else {
            this.isSearching = true;
            this.loading = true;
            this.pokemonService.getPokemonDetail(value).subscribe((pokemon) => {
                this.searchPokemon = pokemon;
                this.loading = false;
            }, (error) => {
                this.loading = false;
                if (error.status === 404) {
                    this.snackBar.open('Sorry, Pokemon not found', 'Ok', {
                        duration: 5000,
                    });
                }
            });
        }
    }
    onDetail(pokemon) {
        this.bottomSheet.open(_components_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_0__.PokemonDetailsComponent, {
            data: { pokemon },
        });
    }
    getPokemons(list) {
        const arr = [];
        list.map((val) => {
            arr.push(this.pokemonService.getPokemonDetail(val.name));
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([...arr]).subscribe((pokemons) => {
            this.pokemonsList = [...pokemons];
            this.offset += 20;
            this.loading = false;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__.PokemonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 3, consts: [[1, "container"], [1, "row", "header"], [1, "title", "col-sm-12", "col-md-12", "col-lg-3", "col-xl-3"], [3, "onSearchPokemon"], [4, "ngIf"], [3, "pokemonsList", "onDetailsPokemon", "onNextPage", "onPrevPage", 4, "ngIf"], ["class", "pokemon__list", 4, "ngIf"], [3, "pokemonsList", "onDetailsPokemon", "onNextPage", "onPrevPage"], [1, "pokemon__list"], [3, "searchPokemon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Pokedex");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSearchPokemon", function AppComponent_Template_search_onSearchPokemon_4_listener($event) { return ctx.onSearchPokemonOutput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AppComponent_loading_5_Template, 1, 0, "loading", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AppComponent_pokemon_list_6_Template, 1, 1, "pokemon-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isSearching);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSearching);
    } }, directives: [_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_4__.PokemonListComponent, _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__.SearchResultComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _components_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pokemon-details/pokemon-details.component */ 3831);
/* harmony import */ var _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pokemon-list/pokemon-list.component */ 3407);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ 9055);
/* harmony import */ var _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search-result/search-result.component */ 1728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_4__.PokemonDetailsComponent, _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_5__.PokemonListComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__.SearchComponent, _components_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__.SearchResultComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 3831:
/*!*************************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonDetailsComponent": () => (/* binding */ PokemonDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/progress-bar/progress-bar.component */ 8632);





function PokemonDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-tab-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Height:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Weight:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Abilities:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "HP:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "app-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Attack:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "app-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Defense:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "app-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Sp. Attack:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "app-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Sp. Defense:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "app-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Speed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "app-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://projectpokemon.org/images/normal-sprite/", ctx_r0.pokemonDetails.name, ".gif", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", ctx_r0.pokemonDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pokemonDetails.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pokemonDetails.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getAbilities());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.getPrincipalType(ctx_r0.pokemonDetails.types))("value", ctx_r0.pokemonDetails.stats[5].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.getPrincipalType(ctx_r0.pokemonDetails.types))("value", ctx_r0.pokemonDetails.stats[4].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.getPrincipalType(ctx_r0.pokemonDetails.types))("value", ctx_r0.pokemonDetails.stats[3].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.getPrincipalType(ctx_r0.pokemonDetails.types))("value", ctx_r0.pokemonDetails.stats[2].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.getPrincipalType(ctx_r0.pokemonDetails.types))("value", ctx_r0.pokemonDetails.stats[1].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.getPrincipalType(ctx_r0.pokemonDetails.types))("value", ctx_r0.pokemonDetails.stats[0].base_stat);
} }
class PokemonDetailsComponent {
    constructor(data) {
        this.data = data;
        this.pokemonDetails = data['pokemon'];
        console.log(data);
    }
    ngOnInit() { }
    getAbilities() {
        return this.pokemonDetails.abilities
            .map((x) => x.ability.name)
            .join(', ');
    }
    getPrincipalType(list) {
        var _a;
        return (_a = list.filter((x) => x.slot === 1)[0]) === null || _a === void 0 ? void 0 : _a.type.name;
    }
}
PokemonDetailsComponent.ɵfac = function PokemonDetailsComponent_Factory(t) { return new (t || PokemonDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.MAT_BOTTOM_SHEET_DATA)); };
PokemonDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PokemonDetailsComponent, selectors: [["app-pokemon-details"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "sheet__img"], [3, "src", "alt"], [1, "sheet"], ["label", "About"], [1, "sheet__tab"], [1, "sheet__item"], [1, "color-gray", "sheet__item_label"], ["label", "Base Stats"], [1, "sheet__item", "w-100"], [1, "sheet__progress", "w-100"], [1, "w-20", "color-gray", "sheet__item_label"], [1, "w-80"], [3, "color", "value"]], template: function PokemonDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PokemonDetailsComponent_div_0_Template, 53, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pokemonDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__.ProgressBarComponent], styles: ["sheet[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n\n.sheet__img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n.sheet__tab[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  margin-left: 20px;\n}\n\n.sheet__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.sheet__item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.sheet__progress[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.sheet__progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.sheet__item_label[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFGRTtFQUNFLGdCQUFBO0FBSUo7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBSEU7RUFDRSxnQkFBQTtBQUtKOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUtGIiwiZmlsZSI6InBva2Vtb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNoZWV0IHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuLnNoZWV0X19pbWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaGVldF9fdGFiIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zaGVldF9faXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG4uc2hlZXRfX3Byb2dyZXNzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG4uc2hlZXRfX2l0ZW1fbGFiZWwge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3407:
/*!*******************************************************************!*\
  !*** ./src/app/components/pokemon-list/pokemon-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonListComponent": () => (/* binding */ PokemonListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _shared_directives_set_color_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/set-color.directive */ 3238);





function PokemonListComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const pokemon_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("types", pokemon_r1.types)("isLight", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r3.type.name);
} }
function PokemonListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PokemonListComponent_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const pokemon_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onDetail(pokemon_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PokemonListComponent_div_1_span_6_Template, 2, 3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("types", pokemon_r1.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pokemon_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", pokemon_r1.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://projectpokemon.org/images/normal-sprite/", pokemon_r1.name, ".gif", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", pokemon_r1.name);
} }
class PokemonListComponent {
    constructor() {
        this.count = 0;
        this.onDetailsPokemon = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onNextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onPrevPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.count = 0;
    }
    onDetail(pokemon) {
        this.onDetailsPokemon.emit(pokemon);
    }
    prevPage() {
        this.count = this.count === 0 ? 0 : (this.count += 20);
        this.onNextPage.emit(this.count);
    }
    nextPage() {
        this.count += 20;
        this.onPrevPage.emit(this.count);
    }
}
PokemonListComponent.ɵfac = function PokemonListComponent_Factory(t) { return new (t || PokemonListComponent)(); };
PokemonListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PokemonListComponent, selectors: [["pokemon-list"]], inputs: { pokemonsList: "pokemonsList" }, outputs: { onDetailsPokemon: "onDetailsPokemon", onNextPage: "onNextPage", onPrevPage: "onPrevPage" }, decls: 7, vars: 3, consts: [[1, "row", "pokemon__list"], ["class", "col-sm-6 col-md-6 col-lg-4 col-xl-4", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "disabled", "click"], [1, "col-sm-6", "col-md-6", "col-lg-4", "col-xl-4"], ["SetColor", "", 1, "card", 3, "types", "click"], ["src", "https://berrones-edwin.github.io/pokedex/assets/images/pokeball-background.png", "alt", "pokeball-card", 1, "card__bg"], [1, "card__info"], [1, "color-white"], ["class", "color-white", "SetColor", "", 3, "types", "isLight", 4, "ngFor", "ngForOf"], [1, "card__img"], [3, "src", "alt"], ["SetColor", "", 1, "color-white", 3, "types", "isLight"]], template: function PokemonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PokemonListComponent_div_1_Template, 9, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PokemonListComponent_Template_button_click_3_listener() { return ctx.prevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PokemonListComponent_Template_button_click_5_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pokemonsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.count === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.pokemonsList.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _shared_directives_set_color_directive__WEBPACK_IMPORTED_MODULE_0__.SetColorDirective], styles: [".bg-color-grass[_ngcontent-%COMP%] {\n  background-color: #3e9709 !important;\n}\n\n.bg-color-grass-light[_ngcontent-%COMP%] {\n  background-color: #7eb95b !important;\n}\n\n.bg-color-fire[_ngcontent-%COMP%] {\n  background-color: #fc0c0b !important;\n}\n\n.bg-color-fire-light[_ngcontent-%COMP%] {\n  background-color: #fd5d5c !important;\n}\n\n.bg-color-water[_ngcontent-%COMP%] {\n  background-color: #0a7abc !important;\n}\n\n.bg-color-water-light[_ngcontent-%COMP%] {\n  background-color: #5ba6d2 !important;\n}\n\n.bg-color-normal[_ngcontent-%COMP%] {\n  background-color: #ccc9aa !important;\n}\n\n.bg-color-normal-light[_ngcontent-%COMP%] {\n  background-color: #dddbc6 !important;\n}\n\n.bg-color-flying[_ngcontent-%COMP%] {\n  background-color: #5eb9b2 !important;\n}\n\n.bg-color-flying-light[_ngcontent-%COMP%] {\n  background-color: #93d0cb !important;\n}\n\n.bg-color-bug[_ngcontent-%COMP%] {\n  background-color: #91ba2e !important;\n}\n\n.bg-color-bug-light[_ngcontent-%COMP%] {\n  background-color: #bddd6e !important;\n}\n\n.bg-color-poison[_ngcontent-%COMP%] {\n  background-color: #a819d7 !important;\n}\n\n.bg-color-poison-light[_ngcontent-%COMP%] {\n  background-color: #c565e4 !important;\n}\n\n.bg-color-electric[_ngcontent-%COMP%] {\n  background-color: #fffa24 !important;\n}\n\n.bg-color-electric-light[_ngcontent-%COMP%] {\n  background-color: #fffb6d !important;\n}\n\n.bg-color-ground[_ngcontent-%COMP%] {\n  background-color: #e1d158 !important;\n}\n\n.bg-color-ground-light[_ngcontent-%COMP%] {\n  background-color: #ede293 !important;\n}\n\n.bg-color-fighting[_ngcontent-%COMP%] {\n  background-color: #e81319 !important;\n}\n\n.bg-color-fighting-light[_ngcontent-%COMP%] {\n  background-color: #ef6165 !important;\n}\n\n.bg-color-psychic[_ngcontent-%COMP%] {\n  background-color: #ec0e63 !important;\n}\n\n.bg-color-psychic-light[_ngcontent-%COMP%] {\n  background-color: #f55792 !important;\n}\n\n.bg-color-rock[_ngcontent-%COMP%] {\n  background-color: #776a3e !important;\n}\n\n.bg-color-rock-light[_ngcontent-%COMP%] {\n  background-color: #94834f !important;\n}\n\n.bg-color-ice[_ngcontent-%COMP%] {\n  background-color: #1995a1 !important;\n}\n\n.bg-color-ice-light[_ngcontent-%COMP%] {\n  background-color: #65b8c0 !important;\n}\n\n.bg-color-ghost[_ngcontent-%COMP%] {\n  background-color: #8e55a4 !important;\n}\n\n.bg-color-ghost-light[_ngcontent-%COMP%] {\n  background-color: #b38dc2 !important;\n}\n\n.bg-color-dragon[_ngcontent-%COMP%] {\n  background-color: #8a55fd !important;\n}\n\n.bg-color-dragon-light[_ngcontent-%COMP%] {\n  background-color: #b18dfd !important;\n}\n\n.bg-color-dark[_ngcontent-%COMP%] {\n  background-color: #5f4632 !important;\n}\n\n.bg-color-dark-light[_ngcontent-%COMP%] {\n  background-color: #916852 !important;\n}\n\n.bg-color-steel[_ngcontent-%COMP%] {\n  background-color: #7b8e8a !important;\n}\n\n.bg-color-steel-light[_ngcontent-%COMP%] {\n  background-color: #bbc5c4 !important;\n}\n\n.bg-color-fairy[_ngcontent-%COMP%] {\n  background-color: #ffa0c2 !important;\n}\n\n.bg-color-fairy-light[_ngcontent-%COMP%] {\n  background-color: #fdd1e0 !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 150px;\n  display: flex;\n  align-items: center;\n}\n\n.bg__pokeball[_ngcontent-%COMP%] {\n  height: 120px;\n  position: absolute;\n  top: -20px;\n  right: -15px;\n  color: #e4e5e2;\n  z-index: -1;\n}\n\n.pokemon__list[_ngcontent-%COMP%] {\n  height: 70vh;\n  overflow-y: scroll;\n}\n\n.pokemon__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: green;\n  border-radius: 50px;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  background-color: #00e600;\n  border-radius: 20px;\n  height: 200px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.card__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  right: 10%;\n  color: #FFF;\n  height: 130px;\n  z-index: 1;\n}\n\n.card__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  text-transform: capitalize;\n}\n\n.card__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica ;Neue\", sans-serif;\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: black;\n}\n\n.card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  text-align: center;\n  margin-top: 5px;\n}\n\n.card__img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 3rem;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwicG9rZW1vbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVERTtFQUNFLG9DQUFBO0FDdERKOztBRHFERTtFQUNFLG9DQUFBO0FDbERKOztBRGlERTtFQUNFLG9DQUFBO0FDOUNKOztBRDZDRTtFQUNFLG9DQUFBO0FDMUNKOztBRHlDRTtFQUNFLG9DQUFBO0FDdENKOztBRHFDRTtFQUNFLG9DQUFBO0FDbENKOztBRGlDRTtFQUNFLG9DQUFBO0FDOUJKOztBRDZCRTtFQUNFLG9DQUFBO0FDMUJKOztBRHlCRTtFQUNFLG9DQUFBO0FDdEJKOztBRHFCRTtFQUNFLG9DQUFBO0FDbEJKOztBRGlCRTtFQUNFLG9DQUFBO0FDZEo7O0FEYUU7RUFDRSxvQ0FBQTtBQ1ZKOztBRFNFO0VBQ0Usb0NBQUE7QUNOSjs7QURLRTtFQUNFLG9DQUFBO0FDRko7O0FEQ0U7RUFDRSxvQ0FBQTtBQ0VKOztBREhFO0VBQ0Usb0NBQUE7QUNNSjs7QURQRTtFQUNFLG9DQUFBO0FDVUo7O0FEWEU7RUFDRSxvQ0FBQTtBQ2NKOztBRGZFO0VBQ0Usb0NBQUE7QUNrQko7O0FEbkJFO0VBQ0Usb0NBQUE7QUNzQko7O0FEdkJFO0VBQ0Usb0NBQUE7QUMwQko7O0FEM0JFO0VBQ0Usb0NBQUE7QUM4Qko7O0FEL0JFO0VBQ0Usb0NBQUE7QUNrQ0o7O0FEbkNFO0VBQ0Usb0NBQUE7QUNzQ0o7O0FEdkNFO0VBQ0Usb0NBQUE7QUMwQ0o7O0FEM0NFO0VBQ0Usb0NBQUE7QUM4Q0o7O0FEL0NFO0VBQ0Usb0NBQUE7QUNrREo7O0FEbkRFO0VBQ0Usb0NBQUE7QUNzREo7O0FEdkRFO0VBQ0Usb0NBQUE7QUMwREo7O0FEM0RFO0VBQ0Usb0NBQUE7QUM4REo7O0FEL0RFO0VBQ0Usb0NBQUE7QUNrRUo7O0FEbkVFO0VBQ0Usb0NBQUE7QUNzRUo7O0FEdkVFO0VBQ0Usb0NBQUE7QUMwRUo7O0FEM0VFO0VBQ0Usb0NBQUE7QUM4RUo7O0FEL0VFO0VBQ0Usb0NBQUE7QUNrRko7O0FEbkZFO0VBQ0Usb0NBQUE7QUNzRko7O0FBNUlBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQStJRjs7QUE1SUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBK0lGOztBQTFJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQTZJRjs7QUE1SUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBOElKOztBQTFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUE2SUY7O0FBMUlBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQTZJRjs7QUExSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUE2SUY7O0FBNUlFO0VBQ0UsbUJBQUE7RUFDQSx5SUFBQTtFQUVBLGdDQUFBO0VBQ0EsZ0NBQUE7QUE2SUo7O0FBM0lFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE2SUo7O0FBeklBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBNElGIiwiZmlsZSI6InBva2Vtb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmFzczogIzNlOTcwOTtcbiRncmFzcy1saWdodDogIzdlYjk1YjtcbiRmaXJlOiAjZmMwYzBiO1xuJGZpcmUtbGlnaHQ6ICNmZDVkNWM7XG4kd2F0ZXI6ICMwYTdhYmM7XG4kd2F0ZXItbGlnaHQ6ICM1YmE2ZDI7XG4kbm9ybWFsOiAjY2NjOWFhO1xuJG5vcm1hbC1saWdodDogI2RkZGJjNjtcbiRmbHlpbmc6ICM1ZWI5YjI7XG4kZmx5aW5nLWxpZ2h0OiAjOTNkMGNiO1xuJGJ1ZzogIzkxYmEyZTtcbiRidWctbGlnaHQ6ICNiZGRkNmU7XG4kcG9pc29uOiAjYTgxOWQ3O1xuJHBvaXNvbi1saWdodDogI2M1NjVlNDtcbiRlbGVjdHJpYzogI2ZmZmEyNDtcbiRlbGVjdHJpYy1saWdodDogI2ZmZmI2ZDtcbiRncm91bmQ6ICNlMWQxNTg7XG4kZ3JvdW5kLWxpZ2h0OiAjZWRlMjkzO1xuJGZpZ2h0aW5nOiAjZTgxMzE5O1xuJGZpZ2h0aW5nLWxpZ2h0OiAjZWY2MTY1O1xuJHBzeWNoaWM6ICNlYzBlNjM7XG4kcHN5Y2hpYy1saWdodDogI2Y1NTc5MjtcbiRyb2NrOiAjNzc2YTNlO1xuJHJvY2stbGlnaHQ6ICM5NDgzNGY7XG4kaWNlOiAjMTk5NWExO1xuJGljZS1saWdodDogIzY1YjhjMDtcbiRnaG9zdDogIzhlNTVhNDtcbiRnaG9zdC1saWdodDogI2IzOGRjMjtcbiRkcmFnb246ICM4YTU1ZmQ7XG4kZHJhZ29uLWxpZ2h0OiAjYjE4ZGZkO1xuJGRhcms6ICM1ZjQ2MzI7XG4kZGFyay1saWdodDogIzkxNjg1MjtcbiRzdGVlbDogIzdiOGU4YTtcbiRzdGVlbC1saWdodDogI2JiYzVjNDtcbiRmYWlyeTogI2ZmYTBjMjtcbiRmYWlyeS1saWdodDogI2ZkZDFlMDtcblxuJGdlbmVyYWw6IChcImdyYXNzXCIsICRncmFzcyksIChcImdyYXNzLWxpZ2h0XCIsICRncmFzcy1saWdodCksIChcImZpcmVcIiwgJGZpcmUpLFxuICAoXCJmaXJlLWxpZ2h0XCIsICRmaXJlLWxpZ2h0KSwgKFwid2F0ZXJcIiwgJHdhdGVyKSwgKFwid2F0ZXItbGlnaHRcIiwgJHdhdGVyLWxpZ2h0KSxcbiAgKFwibm9ybWFsXCIsICRub3JtYWwpLCAoXCJub3JtYWwtbGlnaHRcIiwgJG5vcm1hbC1saWdodCksIChcImZseWluZ1wiLCAkZmx5aW5nKSxcbiAgKFwiZmx5aW5nLWxpZ2h0XCIsICRmbHlpbmctbGlnaHQpLCAoXCJidWdcIiwgJGJ1ZyksIChcImJ1Zy1saWdodFwiLCAkYnVnLWxpZ2h0KSxcbiAgKFwicG9pc29uXCIsICRwb2lzb24pLCAoXCJwb2lzb24tbGlnaHRcIiwgJHBvaXNvbi1saWdodCksIChcImVsZWN0cmljXCIsICRlbGVjdHJpYyksXG4gIChcImVsZWN0cmljLWxpZ2h0XCIsICRlbGVjdHJpYy1saWdodCksIChcImdyb3VuZFwiLCAkZ3JvdW5kKSxcbiAgKFwiZ3JvdW5kLWxpZ2h0XCIsICRncm91bmQtbGlnaHQpLCAoXCJmaWdodGluZ1wiLCAkZmlnaHRpbmcpLFxuICAoXCJmaWdodGluZy1saWdodFwiLCAkZmlnaHRpbmctbGlnaHQpLCAoXCJwc3ljaGljXCIsICRwc3ljaGljKSxcbiAgKFwicHN5Y2hpYy1saWdodFwiLCAkcHN5Y2hpYy1saWdodCksIChcInJvY2tcIiwgJHJvY2spLFxuICAoXCJyb2NrLWxpZ2h0XCIsICRyb2NrLWxpZ2h0KSwgKFwiaWNlXCIsICRpY2UpLCAoXCJpY2UtbGlnaHRcIiwgJGljZS1saWdodCksXG4gIChcImdob3N0XCIsICRnaG9zdCksIChcImdob3N0LWxpZ2h0XCIsICRnaG9zdC1saWdodCksIChcImRyYWdvblwiLCAkZHJhZ29uKSxcbiAgKFwiZHJhZ29uLWxpZ2h0XCIsICRkcmFnb24tbGlnaHQpLCAoXCJkYXJrXCIsICRkYXJrKSwgKFwiZGFyay1saWdodFwiLCAkZGFyay1saWdodCksXG4gIChcInN0ZWVsXCIsICRzdGVlbCksIChcInN0ZWVsLWxpZ2h0XCIsICRzdGVlbC1saWdodCksIChcImZhaXJ5XCIsICRmYWlyeSksXG4gIChcImZhaXJ5LWxpZ2h0XCIsICRmYWlyeS1saWdodCk7XG5cbkBlYWNoICRjb2xvciBpbiAkZ2VuZXJhbCB7XG4gICRuYW1lOiBudGgoJGNvbG9yLCAxKTtcbiAgJHZhbHVlOiBudGgoJGNvbG9yLCAyKTtcbiAgLmJnLWNvbG9yLSN7JG5hbWV9IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsdWUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLmJnLWNvbG9yLWdyYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOTcwOSAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZ3Jhc3MtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ViOTViICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1maXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjMGMwYiAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZmlyZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDVkNWMgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLXdhdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhN2FiYyAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3Itd2F0ZXItbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJhNmQyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1ub3JtYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOWFhICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1ub3JtYWwtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkYmM2ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1mbHlpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWViOWIyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1mbHlpbmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkMGNiICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1idWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFiYTJlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1idWctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkZDZlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1wb2lzb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTgxOWQ3ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1wb2lzb24tbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU2NWU0ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1lbGVjdHJpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZhMjQgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWVsZWN0cmljLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmI2ZCAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZDE1OCAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZ3JvdW5kLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZTI5MyAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZmlnaHRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgxMzE5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1maWdodGluZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjYxNjUgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLXBzeWNoaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMwZTYzICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1wc3ljaGljLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NTc5MiAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3Itcm9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzZhM2UgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLXJvY2stbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ4MzRmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1pY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk5NWExICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1pY2UtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjViOGMwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1naG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZTU1YTQgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWdob3N0LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzOGRjMiAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZHJhZ29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhNTVmZCAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZHJhZ29uLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxOGRmZCAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjQ2MzIgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWRhcmstbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE2ODUyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1zdGVlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjhlOGEgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLXN0ZWVsLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYzVjNCAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZmFpcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMGMyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1mYWlyeS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGQxZTAgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iZ19fcG9rZWJhbGwge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiAtMTVweDtcbiAgY29sb3I6ICNlNGU1ZTI7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucG9rZW1vbl9fbGlzdCB7XG4gIGhlaWdodDogNzB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnBva2Vtb25fX2xpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGU2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkX19iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG4gIHJpZ2h0OiAxMCU7XG4gIGNvbG9yOiAjRkZGO1xuICBoZWlnaHQ6IDEzMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2FyZF9faW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FyZF9faW5mbyBoMiB7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSA7TmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogYmxhY2s7XG59XG4uY2FyZF9faW5mbyBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jYXJkX19pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB6LWluZGV4OiAxMDtcbn0iXX0= */"] });


/***/ }),

/***/ 1728:
/*!*********************************************************************!*\
  !*** ./src/app/components/search-result/search-result.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultComponent": () => (/* binding */ SearchResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_directives_set_color_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/set-color.directive */ 3238);




function SearchResultComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("types", ctx_r1.searchPokemon.types)("isLight", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r2.type.name);
} }
function SearchResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SearchResultComponent_div_0_span_6_Template, 2, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("types", ctx_r0.searchPokemon.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.searchPokemon.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.searchPokemon.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://projectpokemon.org/images/normal-sprite/", ctx_r0.searchPokemon.name, ".gif", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", ctx_r0.searchPokemon.name);
} }
class SearchResultComponent {
    constructor() {
        this.getTypes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    getPrincipalType(types) {
        this.getTypes.emit(types);
    }
}
SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) { return new (t || SearchResultComponent)(); };
SearchResultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchResultComponent, selectors: [["search-result"]], inputs: { searchPokemon: "searchPokemon" }, outputs: { getTypes: "getTypes" }, decls: 1, vars: 1, consts: [["class", "col-sm-6 col-md-6 col-lg-4 col-xl-4", 4, "ngIf"], [1, "col-sm-6", "col-md-6", "col-lg-4", "col-xl-4"], ["SetColor", "", 1, "card", 3, "types"], ["src", "https://berrones-edwin.github.io/pokedex/assets/images/pokeball-background.png", "alt", "pokeball-card", 1, "card__bg"], [1, "card__info"], [1, "color-white"], ["class", "color-white", "SetColor", "", 3, "types", "isLight", 4, "ngFor", "ngForOf"], [1, "card__img"], [3, "src", "alt"], ["SetColor", "", 1, "color-white", 3, "types", "isLight"]], template: function SearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SearchResultComponent_div_0_Template, 9, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchPokemon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_directives_set_color_directive__WEBPACK_IMPORTED_MODULE_0__.SetColorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".bg-color-grass[_ngcontent-%COMP%] {\n  background-color: #3e9709 !important;\n}\n\n.bg-color-grass-light[_ngcontent-%COMP%] {\n  background-color: #7eb95b !important;\n}\n\n.bg-color-fire[_ngcontent-%COMP%] {\n  background-color: #fc0c0b !important;\n}\n\n.bg-color-fire-light[_ngcontent-%COMP%] {\n  background-color: #fd5d5c !important;\n}\n\n.bg-color-water[_ngcontent-%COMP%] {\n  background-color: #0a7abc !important;\n}\n\n.bg-color-water-light[_ngcontent-%COMP%] {\n  background-color: #5ba6d2 !important;\n}\n\n.bg-color-normal[_ngcontent-%COMP%] {\n  background-color: #ccc9aa !important;\n}\n\n.bg-color-normal-light[_ngcontent-%COMP%] {\n  background-color: #dddbc6 !important;\n}\n\n.bg-color-flying[_ngcontent-%COMP%] {\n  background-color: #5eb9b2 !important;\n}\n\n.bg-color-flying-light[_ngcontent-%COMP%] {\n  background-color: #93d0cb !important;\n}\n\n.bg-color-bug[_ngcontent-%COMP%] {\n  background-color: #91ba2e !important;\n}\n\n.bg-color-bug-light[_ngcontent-%COMP%] {\n  background-color: #bddd6e !important;\n}\n\n.bg-color-poison[_ngcontent-%COMP%] {\n  background-color: #a819d7 !important;\n}\n\n.bg-color-poison-light[_ngcontent-%COMP%] {\n  background-color: #c565e4 !important;\n}\n\n.bg-color-electric[_ngcontent-%COMP%] {\n  background-color: #fffa24 !important;\n}\n\n.bg-color-electric-light[_ngcontent-%COMP%] {\n  background-color: #fffb6d !important;\n}\n\n.bg-color-ground[_ngcontent-%COMP%] {\n  background-color: #e1d158 !important;\n}\n\n.bg-color-ground-light[_ngcontent-%COMP%] {\n  background-color: #ede293 !important;\n}\n\n.bg-color-fighting[_ngcontent-%COMP%] {\n  background-color: #e81319 !important;\n}\n\n.bg-color-fighting-light[_ngcontent-%COMP%] {\n  background-color: #ef6165 !important;\n}\n\n.bg-color-psychic[_ngcontent-%COMP%] {\n  background-color: #ec0e63 !important;\n}\n\n.bg-color-psychic-light[_ngcontent-%COMP%] {\n  background-color: #f55792 !important;\n}\n\n.bg-color-rock[_ngcontent-%COMP%] {\n  background-color: #776a3e !important;\n}\n\n.bg-color-rock-light[_ngcontent-%COMP%] {\n  background-color: #94834f !important;\n}\n\n.bg-color-ice[_ngcontent-%COMP%] {\n  background-color: #1995a1 !important;\n}\n\n.bg-color-ice-light[_ngcontent-%COMP%] {\n  background-color: #65b8c0 !important;\n}\n\n.bg-color-ghost[_ngcontent-%COMP%] {\n  background-color: #8e55a4 !important;\n}\n\n.bg-color-ghost-light[_ngcontent-%COMP%] {\n  background-color: #b38dc2 !important;\n}\n\n.bg-color-dragon[_ngcontent-%COMP%] {\n  background-color: #8a55fd !important;\n}\n\n.bg-color-dragon-light[_ngcontent-%COMP%] {\n  background-color: #b18dfd !important;\n}\n\n.bg-color-dark[_ngcontent-%COMP%] {\n  background-color: #5f4632 !important;\n}\n\n.bg-color-dark-light[_ngcontent-%COMP%] {\n  background-color: #916852 !important;\n}\n\n.bg-color-steel[_ngcontent-%COMP%] {\n  background-color: #7b8e8a !important;\n}\n\n.bg-color-steel-light[_ngcontent-%COMP%] {\n  background-color: #bbc5c4 !important;\n}\n\n.bg-color-fairy[_ngcontent-%COMP%] {\n  background-color: #ffa0c2 !important;\n}\n\n.bg-color-fairy-light[_ngcontent-%COMP%] {\n  background-color: #fdd1e0 !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 150px;\n  display: flex;\n  align-items: center;\n}\n\n.bg__pokeball[_ngcontent-%COMP%] {\n  height: 120px;\n  position: absolute;\n  top: -20px;\n  right: -15px;\n  color: #e4e5e2;\n  z-index: -1;\n}\n\n.pokemon__list[_ngcontent-%COMP%] {\n  height: 70vh;\n  overflow-y: scroll;\n}\n\n.pokemon__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: green;\n  border-radius: 50px;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  background-color: #00e600;\n  border-radius: 20px;\n  height: 200px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.card__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  right: 10%;\n  color: #FFF;\n  height: 130px;\n  z-index: 1;\n}\n\n.card__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  text-transform: capitalize;\n}\n\n.card__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica ;Neue\", sans-serif;\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: black;\n}\n\n.card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  text-align: center;\n  margin-top: 5px;\n}\n\n.card__img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 3rem;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwic2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsIi4uXFxwb2tlbW9uLWxpc3RcXHBva2Vtb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1REU7RUFDRSxvQ0FBQTtBQ3RESjs7QURxREU7RUFDRSxvQ0FBQTtBQ2xESjs7QURpREU7RUFDRSxvQ0FBQTtBQzlDSjs7QUQ2Q0U7RUFDRSxvQ0FBQTtBQzFDSjs7QUR5Q0U7RUFDRSxvQ0FBQTtBQ3RDSjs7QURxQ0U7RUFDRSxvQ0FBQTtBQ2xDSjs7QURpQ0U7RUFDRSxvQ0FBQTtBQzlCSjs7QUQ2QkU7RUFDRSxvQ0FBQTtBQzFCSjs7QUR5QkU7RUFDRSxvQ0FBQTtBQ3RCSjs7QURxQkU7RUFDRSxvQ0FBQTtBQ2xCSjs7QURpQkU7RUFDRSxvQ0FBQTtBQ2RKOztBRGFFO0VBQ0Usb0NBQUE7QUNWSjs7QURTRTtFQUNFLG9DQUFBO0FDTko7O0FES0U7RUFDRSxvQ0FBQTtBQ0ZKOztBRENFO0VBQ0Usb0NBQUE7QUNFSjs7QURIRTtFQUNFLG9DQUFBO0FDTUo7O0FEUEU7RUFDRSxvQ0FBQTtBQ1VKOztBRFhFO0VBQ0Usb0NBQUE7QUNjSjs7QURmRTtFQUNFLG9DQUFBO0FDa0JKOztBRG5CRTtFQUNFLG9DQUFBO0FDc0JKOztBRHZCRTtFQUNFLG9DQUFBO0FDMEJKOztBRDNCRTtFQUNFLG9DQUFBO0FDOEJKOztBRC9CRTtFQUNFLG9DQUFBO0FDa0NKOztBRG5DRTtFQUNFLG9DQUFBO0FDc0NKOztBRHZDRTtFQUNFLG9DQUFBO0FDMENKOztBRDNDRTtFQUNFLG9DQUFBO0FDOENKOztBRC9DRTtFQUNFLG9DQUFBO0FDa0RKOztBRG5ERTtFQUNFLG9DQUFBO0FDc0RKOztBRHZERTtFQUNFLG9DQUFBO0FDMERKOztBRDNERTtFQUNFLG9DQUFBO0FDOERKOztBRC9ERTtFQUNFLG9DQUFBO0FDa0VKOztBRG5FRTtFQUNFLG9DQUFBO0FDc0VKOztBRHZFRTtFQUNFLG9DQUFBO0FDMEVKOztBRDNFRTtFQUNFLG9DQUFBO0FDOEVKOztBRC9FRTtFQUNFLG9DQUFBO0FDa0ZKOztBRG5GRTtFQUNFLG9DQUFBO0FDc0ZKOztBQzVJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUQrSUY7O0FDNUlBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRCtJRjs7QUMxSUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUQ2SUY7O0FDNUlFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBRDhJSjs7QUMxSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FENklGOztBQzFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUQ2SUY7O0FDMUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FENklGOztBQzVJRTtFQUNFLG1CQUFBO0VBQ0EseUlBQUE7RUFFQSxnQ0FBQTtFQUNBLGdDQUFBO0FENklKOztBQzNJRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FENklKOztBQ3pJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBRDRJRiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyYXNzOiAjM2U5NzA5O1xuJGdyYXNzLWxpZ2h0OiAjN2ViOTViO1xuJGZpcmU6ICNmYzBjMGI7XG4kZmlyZS1saWdodDogI2ZkNWQ1YztcbiR3YXRlcjogIzBhN2FiYztcbiR3YXRlci1saWdodDogIzViYTZkMjtcbiRub3JtYWw6ICNjY2M5YWE7XG4kbm9ybWFsLWxpZ2h0OiAjZGRkYmM2O1xuJGZseWluZzogIzVlYjliMjtcbiRmbHlpbmctbGlnaHQ6ICM5M2QwY2I7XG4kYnVnOiAjOTFiYTJlO1xuJGJ1Zy1saWdodDogI2JkZGQ2ZTtcbiRwb2lzb246ICNhODE5ZDc7XG4kcG9pc29uLWxpZ2h0OiAjYzU2NWU0O1xuJGVsZWN0cmljOiAjZmZmYTI0O1xuJGVsZWN0cmljLWxpZ2h0OiAjZmZmYjZkO1xuJGdyb3VuZDogI2UxZDE1ODtcbiRncm91bmQtbGlnaHQ6ICNlZGUyOTM7XG4kZmlnaHRpbmc6ICNlODEzMTk7XG4kZmlnaHRpbmctbGlnaHQ6ICNlZjYxNjU7XG4kcHN5Y2hpYzogI2VjMGU2MztcbiRwc3ljaGljLWxpZ2h0OiAjZjU1NzkyO1xuJHJvY2s6ICM3NzZhM2U7XG4kcm9jay1saWdodDogIzk0ODM0ZjtcbiRpY2U6ICMxOTk1YTE7XG4kaWNlLWxpZ2h0OiAjNjViOGMwO1xuJGdob3N0OiAjOGU1NWE0O1xuJGdob3N0LWxpZ2h0OiAjYjM4ZGMyO1xuJGRyYWdvbjogIzhhNTVmZDtcbiRkcmFnb24tbGlnaHQ6ICNiMThkZmQ7XG4kZGFyazogIzVmNDYzMjtcbiRkYXJrLWxpZ2h0OiAjOTE2ODUyO1xuJHN0ZWVsOiAjN2I4ZThhO1xuJHN0ZWVsLWxpZ2h0OiAjYmJjNWM0O1xuJGZhaXJ5OiAjZmZhMGMyO1xuJGZhaXJ5LWxpZ2h0OiAjZmRkMWUwO1xuXG4kZ2VuZXJhbDogKFwiZ3Jhc3NcIiwgJGdyYXNzKSwgKFwiZ3Jhc3MtbGlnaHRcIiwgJGdyYXNzLWxpZ2h0KSwgKFwiZmlyZVwiLCAkZmlyZSksXG4gIChcImZpcmUtbGlnaHRcIiwgJGZpcmUtbGlnaHQpLCAoXCJ3YXRlclwiLCAkd2F0ZXIpLCAoXCJ3YXRlci1saWdodFwiLCAkd2F0ZXItbGlnaHQpLFxuICAoXCJub3JtYWxcIiwgJG5vcm1hbCksIChcIm5vcm1hbC1saWdodFwiLCAkbm9ybWFsLWxpZ2h0KSwgKFwiZmx5aW5nXCIsICRmbHlpbmcpLFxuICAoXCJmbHlpbmctbGlnaHRcIiwgJGZseWluZy1saWdodCksIChcImJ1Z1wiLCAkYnVnKSwgKFwiYnVnLWxpZ2h0XCIsICRidWctbGlnaHQpLFxuICAoXCJwb2lzb25cIiwgJHBvaXNvbiksIChcInBvaXNvbi1saWdodFwiLCAkcG9pc29uLWxpZ2h0KSwgKFwiZWxlY3RyaWNcIiwgJGVsZWN0cmljKSxcbiAgKFwiZWxlY3RyaWMtbGlnaHRcIiwgJGVsZWN0cmljLWxpZ2h0KSwgKFwiZ3JvdW5kXCIsICRncm91bmQpLFxuICAoXCJncm91bmQtbGlnaHRcIiwgJGdyb3VuZC1saWdodCksIChcImZpZ2h0aW5nXCIsICRmaWdodGluZyksXG4gIChcImZpZ2h0aW5nLWxpZ2h0XCIsICRmaWdodGluZy1saWdodCksIChcInBzeWNoaWNcIiwgJHBzeWNoaWMpLFxuICAoXCJwc3ljaGljLWxpZ2h0XCIsICRwc3ljaGljLWxpZ2h0KSwgKFwicm9ja1wiLCAkcm9jayksXG4gIChcInJvY2stbGlnaHRcIiwgJHJvY2stbGlnaHQpLCAoXCJpY2VcIiwgJGljZSksIChcImljZS1saWdodFwiLCAkaWNlLWxpZ2h0KSxcbiAgKFwiZ2hvc3RcIiwgJGdob3N0KSwgKFwiZ2hvc3QtbGlnaHRcIiwgJGdob3N0LWxpZ2h0KSwgKFwiZHJhZ29uXCIsICRkcmFnb24pLFxuICAoXCJkcmFnb24tbGlnaHRcIiwgJGRyYWdvbi1saWdodCksIChcImRhcmtcIiwgJGRhcmspLCAoXCJkYXJrLWxpZ2h0XCIsICRkYXJrLWxpZ2h0KSxcbiAgKFwic3RlZWxcIiwgJHN0ZWVsKSwgKFwic3RlZWwtbGlnaHRcIiwgJHN0ZWVsLWxpZ2h0KSwgKFwiZmFpcnlcIiwgJGZhaXJ5KSxcbiAgKFwiZmFpcnktbGlnaHRcIiwgJGZhaXJ5LWxpZ2h0KTtcblxuQGVhY2ggJGNvbG9yIGluICRnZW5lcmFsIHtcbiAgJG5hbWU6IG50aCgkY29sb3IsIDEpO1xuICAkdmFsdWU6IG50aCgkY29sb3IsIDIpO1xuICAuYmctY29sb3ItI3skbmFtZX0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2YWx1ZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIuYmctY29sb3ItZ3Jhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U5NzA5ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1ncmFzcy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWI5NWIgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWZpcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmMwYzBiICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1maXJlLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkNWQ1YyAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3Itd2F0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE3YWJjICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci13YXRlci1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmE2ZDIgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLW5vcm1hbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M5YWEgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLW5vcm1hbC1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRiYzYgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWZseWluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZWI5YjIgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWZseWluZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2QwY2IgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWJ1ZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWJhMmUgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWJ1Zy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGRkNmUgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLXBvaXNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhODE5ZDcgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLXBvaXNvbi1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTY1ZTQgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWVsZWN0cmljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmEyNCAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZWxlY3RyaWMtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYjZkICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1ncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkMTU4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1ncm91bmQtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlMjkzICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1maWdodGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODEzMTkgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWZpZ2h0aW5nLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNjE2NSAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItcHN5Y2hpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzBlNjMgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLXBzeWNoaWMtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU1NzkyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1yb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NmEzZSAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3Itcm9jay1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDgzNGYgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTk1YTEgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWljZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NWI4YzAgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWdob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlNTVhNCAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZ2hvc3QtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjM4ZGMyICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1kcmFnb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE1NWZkICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1kcmFnb24tbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjE4ZGZkICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmNDYzMiAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItZGFyay1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTY4NTIgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLXN0ZWVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiOGU4YSAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3Itc3RlZWwtbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJjNWM0ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1mYWlyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwYzIgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLWZhaXJ5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDFlMCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJnX19wb2tlYmFsbCB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjBweDtcbiAgcmlnaHQ6IC0xNXB4O1xuICBjb2xvcjogI2U0ZTVlMjtcbiAgei1pbmRleDogLTE7XG59XG5cbi5wb2tlbW9uX19saXN0IHtcbiAgaGVpZ2h0OiA3MHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ucG9rZW1vbl9fbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZTYwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmRfX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbiAgcmlnaHQ6IDEwJTtcbiAgY29sb3I6ICNGRkY7XG4gIGhlaWdodDogMTMwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jYXJkX19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jYXJkX19pbmZvIGgyIHtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIDtOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBibGFjaztcbn1cbi5jYXJkX19pbmZvIHNwYW4ge1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNhcmRfX2ltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHotaW5kZXg6IDEwO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iZ19fcG9rZWJhbGwge1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgcmlnaHQ6IC0xNXB4O1xyXG4gIGNvbG9yOiAjZTRlNWUyO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5cclxuXHJcbi5wb2tlbW9uX19saXN0IHtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihncmVlbiwgMjAlKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkX19iZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTUlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2FyZF9faW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBoMiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbixcclxuICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIDtOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjVweDtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZF9faW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9055:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 3166);






class SearchComponent {
    constructor() {
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl();
        this.onSearchPokemon = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    searchPokemon() {
        setTimeout(() => {
            this.onSearchPokemon.emit(this.search.value);
        }, 1500);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["search"]], outputs: { onSearchPokemon: "onSearchPokemon" }, decls: 4, vars: 1, consts: [["floatLabel", "always", 1, "search", "col-sm-12", "col-md-12", "col-lg-8", "col-xl-8"], ["matInput", "", "placeholder", "Enter name pokemon", "autocomplete", "off", 3, "formControl", "keyup"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Pokemon name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_3_listener() { return ctx.searchPokemon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.search);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective], styles: [".search[_ngcontent-%COMP%] {\n  width: 70vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG59Il19 */"] });


/***/ }),

/***/ 5608:
/*!**************************************************!*\
  !*** ./src/app/core/services/pokemon.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonService": () => (/* binding */ PokemonService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);


class PokemonService {
    constructor(_http) {
        this._http = _http;
        this.baseURL = 'https://pokeapi.co/api/v2/pokemon';
    }
    getPokemons(offset, limit = 20) {
        return this._http.get(`${this.baseURL}?offset=${offset}&limit=${limit}`);
    }
    getPokemonDetail(name) {
        return this._http.get(`${this.baseURL}/${name}`);
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PokemonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);









const COMPONENTS = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule,
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__.MatProgressBarModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBarModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule,
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[...COMPONENTS], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__.MatProgressBarModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__.MatProgressBarModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__.MatProgressBarModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule] }); })();


/***/ }),

/***/ 8424:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);


class LoadingComponent {
    constructor() { }
    ngOnInit() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["loading"]], decls: 5, vars: 0, consts: [[1, "row", "justify-content-center"], [1, "col-4"], ["mode", "indeterminate"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading.... please wait!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__.MatProgressBar], styles: [""] });


/***/ }),

/***/ 8632:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/progress-bar/progress-bar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ProgressBarComponent {
    constructor() {
        this.color = 'bug';
        this.value = 0;
        this.height = 20;
    }
    ngOnInit() {
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["app-progress-bar"]], inputs: { color: "color", value: "value", height: "height" }, decls: 3, vars: 8, consts: [[1, "progress"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("progress__value bg-color-", ctx.color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.value, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3238:
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/set-color.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetColorDirective": () => (/* binding */ SetColorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class SetColorDirective {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.types = [];
        this.isLight = true;
    }
    ngOnInit() {
        let bgClass = `bg-color-${this.getPrincipalType()}${this.isLight ? '-light' : ''}`;
        this.renderer.addClass(this.hostElement.nativeElement, bgClass);
    }
    getPrincipalType() {
        var _a;
        return (_a = this.types.filter((x) => x.slot === 1)[0]) === null || _a === void 0 ? void 0 : _a.type.name;
    }
}
SetColorDirective.ɵfac = function SetColorDirective_Factory(t) { return new (t || SetColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
SetColorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SetColorDirective, selectors: [["", "SetColor", ""]], inputs: { types: "types", isLight: "isLight" } });


/***/ }),

/***/ 8439:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/get-type.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetTypePipe": () => (/* binding */ GetTypePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class GetTypePipe {
    transform(list, ...args) {
        var _a;
        let type = (_a = list.filter((x) => x.slot === 1)[0]) === null || _a === void 0 ? void 0 : _a.type.name;
        let response = `bg-color-${type}-light`;
        return response;
    }
}
GetTypePipe.ɵfac = function GetTypePipe_Factory(t) { return new (t || GetTypePipe)(); };
GetTypePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "Type", type: GetTypePipe, pure: true });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pipes_get_type_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/get-type.pipe */ 8439);
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/progress-bar/progress-bar.component */ 8632);
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loading/loading.component */ 8424);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ 3806);
/* harmony import */ var _directives_set_color_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/set-color.directive */ 3238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);







class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_get_type_pipe__WEBPACK_IMPORTED_MODULE_0__.GetTypePipe,
        _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__.ProgressBarComponent,
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent,
        _directives_set_color_directive__WEBPACK_IMPORTED_MODULE_4__.SetColorDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule], exports: [_pipes_get_type_pipe__WEBPACK_IMPORTED_MODULE_0__.GetTypePipe,
        _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_1__.ProgressBarComponent,
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent,
        _directives_set_color_directive__WEBPACK_IMPORTED_MODULE_4__.SetColorDirective] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map