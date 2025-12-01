"use strict";
(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([["src_app_products-fallback_module_ts"],{

/***/ 8529:
/*!*********************************************!*\
  !*** ./src/app/products-fallback.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsFallbackComponent: () => (/* binding */ ProductsFallbackComponent),
/* harmony export */   ProductsFallbackModule: () => (/* binding */ ProductsFallbackModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 8992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 1108);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class ProductsFallbackComponent {
  static {
    this.ɵfac = function ProductsFallbackComponent_Factory(t) {
      return new (t || ProductsFallbackComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductsFallbackComponent,
      selectors: [["ng-component"]],
      decls: 12,
      vars: 0,
      consts: [[2, "padding", "20px", "border", "2px dashed #ccc", "text-align", "center", "margin", "20px"], [2, "border", "1px dashed #999", "padding", "10px", "min-height", "500px", "margin-top", "15px"], ["src", "https://orange-train-ppx9xvjx4xrf94gj-4201.app.github.dev/", "width", "100%", "height", "500", "id", "products-iframe", 2, "border", "none"], [2, "margin-top", "10px", "font-size", "0.9rem", "color", "#555"]],
      template: function ProductsFallbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Products Microfrontend (fallback)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " The shell attempted to load the Products microfrontend via Module Federation. Due to a runtime incompatibility, it is now embedding the running Products app directly from ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "http://localhost:4201");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "iframe", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " If Module Federation is fixed in the future, this fallback will no longer be needed, but it ensures users still see the Products table inside the Shell. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
}
class ProductsFallbackModule {
  static {
    this.ɵfac = function ProductsFallbackModule_Factory(t) {
      return new (t || ProductsFallbackModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ProductsFallbackModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild([{
        path: '',
        component: ProductsFallbackComponent
      }])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductsFallbackModule, {
    declarations: [ProductsFallbackComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_products-fallback_module_ts.js.map