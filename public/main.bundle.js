webpackJsonp([1,4],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_huts_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddhutsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddhutsComponent = (function () {
    function AddhutsComponent(addhut, route, flashMessages, _formBuilder) {
        this.addhut = addhut;
        this.route = route;
        this.flashMessages = flashMessages;
        this._formBuilder = _formBuilder;
        this.images = [];
        this.upload = false;
        this.zoom = 15;
        this.lat = 24.860170;
        this.lng = 66.863662;
        this.spinner = false;
        this.addHutForm = this._formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            unit: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            rooms: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            maxPersonAllowed: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            location: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            rent: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required]
        });
    }
    AddhutsComponent.prototype.ngOnInit = function () {
    };
    AddhutsComponent.prototype.clickedMarker = function (marker, index) {
        console.log('clicked Marker', marker.name + 'at index' + index);
    };
    AddhutsComponent.prototype.mapClicked = function ($event) {
        if (!this.mapMarker) {
            var newMarker = {
                name: this.name,
                lat: $event.coords.lat,
                lng: $event.coords.lng,
                draggable: true
            };
            this.mapMarker = newMarker;
            console.log(this.mapMarker);
        }
        else {
            // console.log('you already have a marker')
            alert('you already have a marker');
        }
    };
    AddhutsComponent.prototype.markerDragEnd = function (marker, $event) {
        // console.log('dragEnd', marker, $event);
        var updMarker = {
            name: marker.name,
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        };
        this.mapMarker = updMarker;
        console.log('updated', this.mapMarker);
    };
    AddhutsComponent.prototype.addHut = function () {
        var _this = this;
        // console.log(this.addHutForm.value);
        this.spinner = true;
        this.addhut.addHut(this.addHutForm.value, this.mapMarker).subscribe(function (data) {
            if (data.success) {
                _this.addhut.imgPaths = [];
                setTimeout(function () {
                    _this.spinner = false;
                    _this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                }, 2500);
            }
            else {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    // upload(progress,img){
    //       // this.addhut.storeImage(progress,img.files[0])
    //       this.addhut.uploadImage(this.imagesToUpload);
    // }
    AddhutsComponent.prototype.onChange = function (images) {
        // console.log('change',images.target.files);
        // this.imagesToUpload = <Array<any>>images.target.files;
        this.upload = true;
        this.addhut.uploadImage(images.target.files);
        // console.log(images.target.files[0]['name']);
    };
    AddhutsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addhuts',
            template: __webpack_require__(718),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_huts_service__["a" /* HutsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_huts_service__["a" /* HutsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === 'function' && _d) || Object])
    ], AddhutsComponent);
    return AddhutsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/addhuts.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookedhutsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookedhutsComponent = (function () {
    function BookedhutsComponent() {
    }
    BookedhutsComponent.prototype.ngOnInit = function () {
    };
    BookedhutsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bookedhuts',
            template: __webpack_require__(719),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [])
    ], BookedhutsComponent);
    return BookedhutsComponent;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/bookedhuts.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(720),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_huts_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglemapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GooglemapComponent = (function () {
    function GooglemapComponent(hutService) {
        var _this = this;
        this.hutService = hutService;
        this.zoom = 15;
        this.lat = 24.860170;
        this.lng = 66.863662;
        this.locations = [];
        this.spinner = true;
        this.hutService.fetchHuts().subscribe(function (huts) {
            console.log(huts);
            _this.huts = huts.hut;
        });
        setTimeout(function () {
            _this.spinner = false;
        }, 3000);
    }
    GooglemapComponent.prototype.ngOnInit = function () {
    };
    GooglemapComponent.prototype.clickedMarker = function (id) {
        var _this = this;
        // console.log('mapMarker')
        this.hutService.getReviews(id).subscribe(function (reviews) {
            console.log(reviews);
            _this.reviews = reviews.data;
            _this.images = reviews.imgArray;
        });
    };
    GooglemapComponent.prototype.submitReview = function (message, id) {
        var _this = this;
        // console.log('review submitted', message.value, id);
        this.hutService.submitReviews(message.value, id).subscribe(function (reviews) {
            console.log(reviews);
            _this.reviews.push(message.value);
        });
    };
    GooglemapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-googlemap',
            template: __webpack_require__(721),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_huts_service__["a" /* HutsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_huts_service__["a" /* HutsService */]) === 'function' && _a) || Object])
    ], GooglemapComponent);
    return GooglemapComponent;
    var _a;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/googlemap.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_huts_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(authService, getHuts, flashMessages, route) {
        var _this = this;
        this.authService = authService;
        this.getHuts = getHuts;
        this.flashMessages = flashMessages;
        this.route = route;
        this.filterBy = 'Filter By';
        this.photo = 'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg';
        getHuts.fetchHuts().subscribe(function (data) {
            if (data.success) {
                _this.huts = data.hut;
                console.log('agaya data', data.hut);
            }
            else {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.navigate = function (hut, index) {
        // console.log('shaka',hut);
        var images = hut.base64Img.toString();
        var dates = hut.bookedDates.toString();
        // console.log('stringify',dates);
        var navigationExtras = {
            queryParams: {
                id: hut.id,
                name: hut.name,
                unit: hut.unit,
                rooms: hut.rooms,
                maxPersonAllowed: hut.maxPersonAllowed,
                address: hut.address,
                location: hut.location,
                latitude: hut.latitude,
                longitude: hut.longitude,
                rent: hut.rent,
                description: hut.description,
                bookedDates: dates
            }
        };
        console.log(navigationExtras);
        this.route.navigate(['hutdetails', index + 1], navigationExtras);
        // console.log('navigate', hut);
    };
    // check(){
    //   let a = {
    //     id: 'sssa',
    //     date: '12345',
    //     isBooke: true
    //   }
    //   this.getHuts.bookReservation(a)
    // }
    HomeComponent.prototype.search = function () {
        var _this = this;
        console.log('asas', this.searchString);
        this.getHuts.searchByName(this.searchString, this.filterBy).subscribe(function (huts) {
            if (huts.success) {
                console.log('no err', huts);
                _this.huts = huts.hut;
            }
            else {
                console.log('err', huts.msg);
                _this.huts = huts.hut;
                _this.flashMessages.show(huts.msg, { cssClass: 'alert-danger', timeout: 4000 });
            }
        });
    };
    HomeComponent.prototype.changeName = function (filter) {
        this.filterBy = filter;
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(722),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_huts_service__["a" /* HutsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_huts_service__["a" /* HutsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/home.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_huts_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HutdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HutdetailsComponent = (function () {
    function HutdetailsComponent(route, hutService) {
        var _this = this;
        this.route = route;
        this.hutService = hutService;
        this.imgURI = [];
        this.flag = true;
        this.route.params.subscribe(function (params) {
            // thaais.id = params['id'];
        });
        // let params = this.route.snapshot.queryParams[0];
        // console.log('params', Params);
        this.route.queryParams.subscribe(function (params) {
            _this.hutObj = params;
            console.log('fahad', params || 0);
            _this.id = params['id'];
            setTimeout(function () {
                _this.hutService.getImages(params['id']).subscribe(function (images) {
                    console.log(images.base64);
                    _this.imgURI = images.base64;
                });
            }, 3000);
            if (params['bookedDates']) {
                // console.log('booking exist');
                var dateSplit = params['bookedDates'].split(",");
                _this.reservedDates = dateSplit;
            }
            // console.log('yayy',this.reservedDates)
            // setTimeout(()=> {
            //   console.log('images',this.imgURI);
            // }, 4000);
        });
    }
    HutdetailsComponent.prototype.ngOnInit = function () {
    };
    HutdetailsComponent.prototype.onChange = function (event) {
        var _this = this;
        if (this.reservedDates) {
            this.reservedDates.forEach(function (reserveDate) {
                if (reserveDate === event.target.value) {
                    _this.flag = false;
                    console.log('reserved');
                }
                else {
                    _this.flag = true;
                    console.log('not reserved');
                }
            });
        }
    };
    HutdetailsComponent.prototype.bookReservation = function (date) {
        if (date.value) {
            console.log('yes');
        }
        var bookingDetails = {
            id: this.id,
            date: date.value,
        };
        console.log('book', date.value, bookingDetails);
        this.hutService.bookReservation(bookingDetails).subscribe(function (data) {
            console.log(data);
        });
        console.log(this.hutObj._id);
    };
    HutdetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hutdetails',
            template: __webpack_require__(723),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_huts_service__["a" /* HutsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_huts_service__["a" /* HutsService */]) === 'function' && _b) || Object])
    ], HutdetailsComponent);
    return HutdetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/hutdetails.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(route, _formBuilder, authService, flashmessages) {
        this.route = route;
        this._formBuilder = _formBuilder;
        this.authService = authService;
        this.flashmessages = flashmessages;
        this.userForm = this._formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{4,13}$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            password: ['', passvalidator]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.authenticateUser(this.userForm.value).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashmessages.show('you are logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.route.navigate(['home']);
            }
            else {
                _this.flashmessages.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        console.log(this.userForm.value);
    };
    LoginComponent.prototype.firebaseLogin = function () {
        console.log('firebase');
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(724),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
function passvalidator(control) {
    if (!control.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)) {
        return { invalidPassword: true };
    }
}
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/login.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_huts_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyhutsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyhutsComponent = (function () {
    function MyhutsComponent(router, hutService, route, flashMessages) {
        var _this = this;
        this.router = router;
        this.hutService = hutService;
        this.route = route;
        this.flashMessages = flashMessages;
        this.imgURI = [];
        hutService.getUserHuts().subscribe(function (huts) {
            console.log('my huts', huts.myHut);
            if (huts.success) {
                _this.myHuts = huts.myHut;
                _this.flashMessages.show('you have posted ' + _this.myHuts.length + ' hut', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessages.show(huts.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.router.queryParams.subscribe(function (params) {
            _this.hutService.getImages(params['id']).subscribe(function (images) {
                console.log(images.base64);
                _this.imgURI = images.base64;
            });
        });
    }
    MyhutsComponent.prototype.ngOnInit = function () {
    };
    MyhutsComponent.prototype.delete = function (hut, index) {
        this.hutService.deleteHut(hut).subscribe(function (x) {
            console.log('fahad', x);
        });
        this.myHuts.splice(index, 1);
    };
    MyhutsComponent.prototype.update = function (hut, index) {
        var dates = hut.bookedDates.toString();
        var navigationExtras = {
            queryParams: {
                id: hut.id,
                name: hut.name,
                unit: hut.unit,
                rooms: hut.rooms,
                maxPersonAllowed: hut.maxPersonAllowed,
                address: hut.address,
                location: hut.location,
                latitude: hut.latitude,
                longitude: hut.longitude,
                rent: hut.rent,
                description: hut.description,
                bookedDates: dates
            }
        };
        this.route.navigate(['update', index + 1], navigationExtras);
    };
    MyhutsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myhuts',
            template: __webpack_require__(725),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_huts_service__["a" /* HutsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_huts_service__["a" /* HutsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], MyhutsComponent);
    return MyhutsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/myhuts.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(route, _formBuilder, authService, flashMessage) {
        this.route = route;
        this._formBuilder = _formBuilder;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.userForm = this._formBuilder.group({
            fname: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(10)]],
            lname: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(10)]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{4,13}$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            passwordfields: this._formBuilder.group({
                pass: ['', passvalidator],
                cpass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required])],
            }, { validator: matchingPasswords('pass', 'cpass') }),
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.registerUser(this.userForm.value).subscribe(function (data) {
            if (data.success) {
                // console.log(data.success);
                _this.flashMessage.show('Registration Successfull! You can login now', { cssClass: 'alert-success', timeout: 3000 });
                setTimeout(function () {
                    _this.route.navigate(['/login']);
                }, 3000);
            }
            else if (data.msg === 'User already exist') {
                _this.flashMessage.show(data.msg + ' please use another email', { cssClass: 'alert-danger', timeout: 3000 });
                _this.route.navigate(['/register']);
            }
            else {
                _this.flashMessage.show('Registration Unsuccessfull', { cssClass: 'alert-danger', timeout: 3000 });
                _this.route.navigate(['/register']);
            }
        });
        // console.log(this.userForm.value)
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(727),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
function passvalidator(control) {
    if (!control.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)) {
        return { invalidPassword: true };
    }
}
function matchingPasswords(passwordKey, confirmPasswordKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return { mismatchedPasswords: true };
        }
    };
}
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/register.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_huts_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateComponent = (function () {
    function UpdateComponent(route, _formBuilder, hutService, router, flashMessages) {
        var _this = this;
        this.route = route;
        this._formBuilder = _formBuilder;
        this.hutService = hutService;
        this.router = router;
        this.flashMessages = flashMessages;
        this.imgURI = [];
        this.route.queryParams.subscribe(function (params) {
            console.log('query params', params);
            _this.hut = params;
            _this.route.queryParams.subscribe(function (params) {
                _this.id = params['id'];
                _this.hutService.getImages(params['id']).subscribe(function (images) {
                    console.log(images.base64);
                    _this.imgURI = images.base64;
                });
            });
            _this.updateForm = _this._formBuilder.group({
                name: [params['name'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
                rooms: [params['rooms'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
                maxPersonAllowed: [params['maxPersonAllowed'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
                rent: [params['rent'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
                location: [params['location'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
                description: [params['description'], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
            });
        });
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.updateHut = function () {
        var _this = this;
        console.log('form', this.updateForm.value);
        this.hutService.updateHut(this.updateForm.value, this.hut.id).subscribe(function (data) {
            console.log(data.msg);
            _this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            // setTimeout(()=> {
            //   this.router.navigate(['/home'])
            // }, 2000);
        });
    };
    UpdateComponent.prototype.deleteImg = function (imgPath) {
        this.hutService.deleteImg(imgPath, this.id).subscribe(function (res) {
            console.log('res', res);
        });
    };
    UpdateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(728),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_huts_service__["a" /* HutsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_huts_service__["a" /* HutsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object])
    ], UpdateComponent);
    return UpdateComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/update.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(route, authService) {
        this.route = route;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.route.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 420;


/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(538);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/main.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(717),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/app.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_router__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_google_maps_core__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_huts_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_addhuts_addhuts_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_bookedhuts_bookedhuts_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_googlemap_googlemap_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_hutdetails_hutdetails_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_myhuts_myhuts_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_navbar_navbar_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_update_update_component__ = __webpack_require__(355);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_addhuts_addhuts_component__["a" /* AddhutsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_bookedhuts_bookedhuts_component__["a" /* BookedhutsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_googlemap_googlemap_component__["a" /* GooglemapComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_hutdetails_hutdetails_component__["a" /* HutdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_myhuts_myhuts_component__["a" /* MyhutsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_update_update_component__["a" /* UpdateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_router__["a" /* router */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDexhSSI1G2t2T1uik9XzOWXEi8bhqVPJ4'
                }),
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["HashLocationStrategy"] }, __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__services_huts_service__["a" /* HutsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/app.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_addhuts_addhuts_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_bookedhuts_bookedhuts_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_hutdetails_hutdetails_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_myhuts_myhuts_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_update_update_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_googlemap_googlemap_component__ = __webpack_require__(349);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });












var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addhuts', component: __WEBPACK_IMPORTED_MODULE_5__components_addhuts_addhuts_component__["a" /* AddhutsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bookedhuts', component: __WEBPACK_IMPORTED_MODULE_6__components_bookedhuts_bookedhuts_component__["a" /* BookedhutsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'hutdetails/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_hutdetails_hutdetails_component__["a" /* HutdetailsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'myhuts', component: __WEBPACK_IMPORTED_MODULE_9__components_myhuts_myhuts_component__["a" /* MyhutsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'update/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_update_update_component__["a" /* UpdateComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_11__components_googlemap_googlemap_component__["a" /* GooglemapComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] }
];
var router = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/app.router.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessages, route) {
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.route = route;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.flashMessages.show('you are logged out', { cssClass: 'alert-danger', timeout: 3000 });
        this.route.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(726),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAhV7dSydK_7Tn8v55Bt4vKleiwjyZImqM",
        authDomain: "form-validation-9ac0d.firebaseapp.com",
        databaseURL: "https://form-validation-9ac0d.firebaseio.com",
        projectId: "form-validation-9ac0d",
        storageBucket: "form-validation-9ac0d.appspot.com",
        messagingSenderId: "346773147049"
    }
};
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/environment.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HutsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HutsService = (function () {
    function HutsService(http) {
        this.http = http;
        this.imgPaths = [];
        this.newHut = {
            email: String,
            name: String,
            unit: String,
            rooms: Number,
            maxPersonAllowed: Number,
            address: String,
            location: String,
            latitude: Number,
            longitude: Number,
            rent: Number,
            description: String,
            imgPath: Array,
            bookedDates: Array,
        };
        // console.log('local',JSON.parse(localStorage.getItem('user')));
    }
    HutsService.prototype.addHut = function (hutDetails, locObj) {
        // console.log('location obj', locObj);
        // console.log('location',hutDetails.location)
        var user = JSON.parse(localStorage.getItem('user'));
        this.newHut = {
            email: user.email,
            name: hutDetails.name,
            unit: hutDetails.unit,
            rooms: hutDetails.rooms,
            maxPersonAllowed: hutDetails.maxPersonAllowed,
            address: hutDetails.address,
            location: hutDetails.location,
            latitude: locObj.lat,
            longitude: locObj.lng,
            rent: hutDetails.rent,
            description: hutDetails.description,
            imgPath: this.imgPaths,
            bookedDates: [],
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('post/addhut', this.newHut, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService.prototype.fetchHuts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('get/fetchhuts', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // getdata(){
    //   // let headers = new Headers();
    //   // headers.append('Content-Type', 'application/json');
    //   return this.http.get('http://localhost:3000/get/fetchhuts').map(res => res.json()).subscribe(data=>{
    //     this.data = data;
    //   });
    // }
    //   storeImage(progress,img){
    //   var imgFile = img;
    //         var storageRef= firebase.storage().ref('images/' + imgFile.name);
    //         var task= storageRef.put(imgFile);
    //         task.on('state_changed',
    //         (snapshot)=>{
    //         progress.value = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    //         if(progress.value == 100){
    //           console.log('hurrah');
    //            const storageRef =  firebase.storage().ref().child('images/' + imgFile.name);
    //            storageRef.getDownloadURL().then(url => this.imgUrl.push(url));
    //         }
    //         },
    //         (err) =>{console.log(err)},
    //         )
    // }
    HutsService.prototype.uploadImage = function (image) {
        var _this = this;
        // console.log(image[0]);
        var formData = new FormData();
        // let images: Array<any> = imagesArray
        formData.append('uploads', image[0]);
        // console.log('data', formData.get('uploads'));
        // console.log('dataa',formData.get('uploads'))
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // headers.append('Content-Type', 'application/json');
        return this.http.post('uploads/hutimages', formData)
            .map(function (res) { return res.json(); }).subscribe(function (imgData) {
            _this.imgPaths.push(imgData.path);
        });
    };
    HutsService.prototype.bookReservation = function (hutInfo) {
        // console.log('aaa',hutInfo)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('post/book', hutInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService.prototype.getUserHuts = function () {
        var userinfo = JSON.parse(localStorage.getItem('user'));
        var user = {
            email: userinfo.email
        };
        // console.log(email)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('get/getuserhuts/' + user.email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService.prototype.deleteHut = function (hutInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('delete/' + hutInfo.id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService.prototype.getImages = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('get/images/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService.prototype.updateHut = function (updatedData, id) {
        console.log('id', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('update/hut/' + id, updatedData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService.prototype.submitReviews = function (message, id) {
        var reviews = {
            message: message,
            id: id
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('post/reviews', reviews, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService.prototype.getReviews = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('get/fetchreviews/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService.prototype.deleteImg = function (imgPath, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('delete/imgUpdate/uploads/' + imgPath + '/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService.prototype.searchByName = function (name, filterBy) {
        var filter = {
            name: name,
            filterby: filterBy
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('get/search', filter, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HutsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], HutsService);
    return HutsService;
    var _a;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/huts.service.js.map

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.info p {\r\n  text-align:center;\r\n  color: #999;\r\n  text-transform:none;\r\n  font-weight:600;\r\n  font-size:15px;\r\n  margin-top:2px\r\n}\r\n\r\n.info i {\r\n  color:#F6AA93;\r\n}\r\nform h1 {\r\n  font-size: 18px;\r\n  padding: 22px 25px;\r\n  border-radius: 5px 5px 0px 0px;\r\n  margin: 0 auto;\r\n  text-shadow: none; \r\n  text-align:center\r\n}\r\n\r\nform {\r\n  border-radius: 5px;\r\n  max-width:700px;\r\n  width:100%;\r\n  margin: 5% auto;\r\n  background-color: #FFFFFF;\r\n  overflow: hidden;\r\n}\r\n\r\np span {\r\n  color: #F00;\r\n}\r\n\r\np {\r\n  margin: 0px;\r\n  font-weight: 500;\r\n  line-height: 2;\r\n  color:#333;\r\n}\r\n\r\nh1 {\r\n  text-align:center; \r\n  color: #666;\r\n  text-shadow: 1px 1px 0px #FFF;\r\n  margin:50px 0px 0px 0px\r\n}\r\n\r\ninput {\r\n  border-radius: 0px 5px 5px 0px;\r\n  border: 1px solid #eee;\r\n  margin-bottom: 15px;\r\n  width: 75%;\r\n  height: 40px;\r\n  float: left;\r\n  padding: 0px 15px;\r\n}\r\n\r\na {\r\n  text-decoration:inherit\r\n}\r\n\r\ntextarea {\r\n  border-radius: 0px 5px 5px 0px;\r\n  border: 1px solid #EEE;\r\n  margin: 0;\r\n  width: 75%;\r\n  height: 130px; \r\n  float: left;\r\n  padding: 0px 15px;\r\n}\r\n\r\n.form-group {\r\n  overflow: hidden;\r\n  clear: both;\r\n}\r\n\r\n.icon-case {\r\n  width: 35px;\r\n  float: left;\r\n  border-radius: 5px 0px 0px 5px;\r\n  background:#eeeeee;\r\n  height:42px;\r\n  position: relative;\r\n  text-align: center;\r\n  line-height:40px;\r\n}\r\n\r\ni {\r\n  color:#555;\r\n}\r\n\r\n.contentform {\r\n  padding: 40px 30px;\r\n}\r\n\r\n.bouton-contact{\r\n  background-color: #81BDA4;\r\n  color: #FFF;\r\n  text-align: center;\r\n  width: 100%;\r\n  border:0;\r\n  padding: 17px 25px;\r\n  border-radius: 0px 0px 5px 5px;\r\n  cursor: pointer;\r\n  margin-top: 40px;\r\n  font-size: 18px;\r\n}\r\n\r\n.leftcontact {\r\n  width:49.5%; \r\n  float:left;\r\n  border-right: 1px dotted #CCC;\r\n  box-sizing: border-box;\r\n  padding: 0px 15px 0px 0px;\r\n}\r\n\r\n.rightcontact {\r\n  width:49.5%;\r\n  float:right;\r\n  box-sizing: border-box;\r\n  padding: 0px 0px 0px 15px;\r\n}\r\n\r\n.validation {\r\n  display:block;\r\n  margin: 0 0 10px;\r\n  font-weight:400;\r\n  font-size:13px;\r\n  color: #DE5959;\r\n}\r\n\r\n#sendmessage {\r\n  border:1px solid #fff;\r\n  display:none;\r\n  text-align:center;\r\n  margin:10px 0;\r\n  font-weight:600;\r\n  margin-bottom:30px;\r\n  background-color: #EBF6E0;\r\n  color: #5F9025;\r\n  border: 1px solid #B3DC82;\r\n  padding: 13px 40px 13px 18px;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.03);\r\n}\r\n\r\n#sendmessage.show,.show  {\r\n  display:block;\r\n}\r\n\r\ninput[type=\"button\"]:disabled{\r\n    color:#000;\r\n}\r\n\r\n.sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n\r\n#map {\r\n        height: 400px;\r\n        width: 100%;\r\n       }\r\n\r\n       .heading h2{\r\n        text-align: center;\r\n        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n      }\r\n\r\n\r\n\r\n\r\n\r\n\r\n      #loading {\r\n        background: #f4f4f2 url(\"img/page-bg.png\") repeat scroll 0 0;\r\n        height: 100%;\r\n        left: 0;\r\n        margin: auto;\r\n        position: fixed;\r\n        top: 0;\r\n        width: 100%;\r\n    }\r\n    .bokeh {\r\n        border: 0.01em solid rgba(150, 150, 150, 0.1);\r\n        border-radius: 50%;\r\n        font-size: 100px;\r\n        height: 1em;\r\n        list-style: outside none none;\r\n        margin: 0 auto;\r\n        position: relative;\r\n        top: 35%;\r\n        width: 1em;\r\n        z-index: 2147483647;\r\n    }\r\n    .bokeh li {\r\n        border-radius: 50%;\r\n        height: 0.2em;\r\n        position: absolute;\r\n        width: 0.2em;\r\n    }\r\n    .bokeh li:nth-child(1) {\r\n        -webkit-animation: 1.13s linear 0s normal none infinite running rota, 3.67s ease-in-out 0s alternate none infinite running opa;\r\n                animation: 1.13s linear 0s normal none infinite running rota, 3.67s ease-in-out 0s alternate none infinite running opa;\r\n        background: #00c176 none repeat scroll 0 0;\r\n        left: 50%;\r\n        margin: 0 0 0 -0.1em;\r\n        top: 0;\r\n        -webkit-transform-origin: 50% 250% 0;\r\n                transform-origin: 50% 250% 0;\r\n    }\r\n    .bokeh li:nth-child(2) {\r\n        -webkit-animation: 1.86s linear 0s normal none infinite running rota, 4.29s ease-in-out 0s alternate none infinite running opa;\r\n                animation: 1.86s linear 0s normal none infinite running rota, 4.29s ease-in-out 0s alternate none infinite running opa;\r\n        background: #ff003c none repeat scroll 0 0;\r\n        margin: -0.1em 0 0;\r\n        right: 0;\r\n        top: 50%;\r\n        -webkit-transform-origin: -150% 50% 0;\r\n                transform-origin: -150% 50% 0;\r\n    }\r\n    .bokeh li:nth-child(3) {\r\n        -webkit-animation: 1.45s linear 0s normal none infinite running rota, 5.12s ease-in-out 0s alternate none infinite running opa;\r\n                animation: 1.45s linear 0s normal none infinite running rota, 5.12s ease-in-out 0s alternate none infinite running opa;\r\n        background: #fabe28 none repeat scroll 0 0;\r\n        bottom: 0;\r\n        left: 50%;\r\n        margin: 0 0 0 -0.1em;\r\n        -webkit-transform-origin: 50% -150% 0;\r\n                transform-origin: 50% -150% 0;\r\n    }\r\n    .bokeh li:nth-child(4) {\r\n        -webkit-animation: 1.72s linear 0s normal none infinite running rota, 5.25s ease-in-out 0s alternate none infinite running opa;\r\n                animation: 1.72s linear 0s normal none infinite running rota, 5.25s ease-in-out 0s alternate none infinite running opa;\r\n        background: #88c100 none repeat scroll 0 0;\r\n        margin: -0.1em 0 0;\r\n        top: 50%;\r\n        -webkit-transform-origin: 250% 50% 0;\r\n                transform-origin: 250% 50% 0;\r\n    }\r\n    @-webkit-keyframes opa {\r\n    12% {\r\n        opacity: 0.8;\r\n    }\r\n    19.5% {\r\n        opacity: 0.88;\r\n    }\r\n    37.2% {\r\n        opacity: 0.64;\r\n    }\r\n    40.5% {\r\n        opacity: 0.52;\r\n    }\r\n    52.7% {\r\n        opacity: 0.69;\r\n    }\r\n    60.2% {\r\n        opacity: 0.6;\r\n    }\r\n    66.6% {\r\n        opacity: 0.52;\r\n    }\r\n    70% {\r\n        opacity: 0.63;\r\n    }\r\n    79.9% {\r\n        opacity: 0.6;\r\n    }\r\n    84.2% {\r\n        opacity: 0.75;\r\n    }\r\n    91% {\r\n        opacity: 0.87;\r\n    }\r\n    }\r\n    @keyframes opa {\r\n    12% {\r\n        opacity: 0.8;\r\n    }\r\n    19.5% {\r\n        opacity: 0.88;\r\n    }\r\n    37.2% {\r\n        opacity: 0.64;\r\n    }\r\n    40.5% {\r\n        opacity: 0.52;\r\n    }\r\n    52.7% {\r\n        opacity: 0.69;\r\n    }\r\n    60.2% {\r\n        opacity: 0.6;\r\n    }\r\n    66.6% {\r\n        opacity: 0.52;\r\n    }\r\n    70% {\r\n        opacity: 0.63;\r\n    }\r\n    79.9% {\r\n        opacity: 0.6;\r\n    }\r\n    84.2% {\r\n        opacity: 0.75;\r\n    }\r\n    91% {\r\n        opacity: 0.87;\r\n    }\r\n    }\r\n    \r\n    @-webkit-keyframes rota {\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n    }\r\n    \r\n    @keyframes rota {\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n    }\r\n    \r\n  "

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\r\n  height: 400px;\r\n}\r\n\r\n.heading h2{\r\n  text-align: center;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.container{\r\n  margin-left: -15px;\r\n}\r\n\r\n\r\n\r\n\r\n#loading {\r\n  /* background: #f4f4f2 url(\"img/page-bg.png\") repeat scroll 0 0; */\r\n  height: 100%;\r\n  left: 0;\r\n  margin: auto;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n.bokeh {\r\n  border: 0.01em solid rgba(150, 150, 150, 0.1);\r\n  border-radius: 50%;\r\n  font-size: 100px;\r\n  height: 1em;\r\n  list-style: outside none none;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  top: 35%;\r\n  width: 1em;\r\n  z-index: 2147483647;\r\n}\r\n.bokeh li {\r\n  border-radius: 50%;\r\n  height: 0.2em;\r\n  position: absolute;\r\n  width: 0.2em;\r\n}\r\n.bokeh li:nth-child(1) {\r\n  -webkit-animation: 1.13s linear 0s normal none infinite running rota, 3.67s ease-in-out 0s alternate none infinite running opa;\r\n          animation: 1.13s linear 0s normal none infinite running rota, 3.67s ease-in-out 0s alternate none infinite running opa;\r\n  background: #00c176 none repeat scroll 0 0;\r\n  left: 50%;\r\n  margin: 0 0 0 -0.1em;\r\n  top: 0;\r\n  -webkit-transform-origin: 50% 250% 0;\r\n          transform-origin: 50% 250% 0;\r\n}\r\n.bokeh li:nth-child(2) {\r\n  -webkit-animation: 1.86s linear 0s normal none infinite running rota, 4.29s ease-in-out 0s alternate none infinite running opa;\r\n          animation: 1.86s linear 0s normal none infinite running rota, 4.29s ease-in-out 0s alternate none infinite running opa;\r\n  background: #ff003c none repeat scroll 0 0;\r\n  margin: -0.1em 0 0;\r\n  right: 0;\r\n  top: 50%;\r\n  -webkit-transform-origin: -150% 50% 0;\r\n          transform-origin: -150% 50% 0;\r\n}\r\n.bokeh li:nth-child(3) {\r\n  -webkit-animation: 1.45s linear 0s normal none infinite running rota, 5.12s ease-in-out 0s alternate none infinite running opa;\r\n          animation: 1.45s linear 0s normal none infinite running rota, 5.12s ease-in-out 0s alternate none infinite running opa;\r\n  background: #fabe28 none repeat scroll 0 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin: 0 0 0 -0.1em;\r\n  -webkit-transform-origin: 50% -150% 0;\r\n          transform-origin: 50% -150% 0;\r\n}\r\n.bokeh li:nth-child(4) {\r\n  -webkit-animation: 1.72s linear 0s normal none infinite running rota, 5.25s ease-in-out 0s alternate none infinite running opa;\r\n          animation: 1.72s linear 0s normal none infinite running rota, 5.25s ease-in-out 0s alternate none infinite running opa;\r\n  background: #88c100 none repeat scroll 0 0;\r\n  margin: -0.1em 0 0;\r\n  top: 50%;\r\n  -webkit-transform-origin: 250% 50% 0;\r\n          transform-origin: 250% 50% 0;\r\n}\r\n@-webkit-keyframes opa {\r\n12% {\r\n  opacity: 0.8;\r\n}\r\n19.5% {\r\n  opacity: 0.88;\r\n}\r\n37.2% {\r\n  opacity: 0.64;\r\n}\r\n40.5% {\r\n  opacity: 0.52;\r\n}\r\n52.7% {\r\n  opacity: 0.69;\r\n}\r\n60.2% {\r\n  opacity: 0.6;\r\n}\r\n66.6% {\r\n  opacity: 0.52;\r\n}\r\n70% {\r\n  opacity: 0.63;\r\n}\r\n79.9% {\r\n  opacity: 0.6;\r\n}\r\n84.2% {\r\n  opacity: 0.75;\r\n}\r\n91% {\r\n  opacity: 0.87;\r\n}\r\n}\r\n@keyframes opa {\r\n12% {\r\n  opacity: 0.8;\r\n}\r\n19.5% {\r\n  opacity: 0.88;\r\n}\r\n37.2% {\r\n  opacity: 0.64;\r\n}\r\n40.5% {\r\n  opacity: 0.52;\r\n}\r\n52.7% {\r\n  opacity: 0.69;\r\n}\r\n60.2% {\r\n  opacity: 0.6;\r\n}\r\n66.6% {\r\n  opacity: 0.52;\r\n}\r\n70% {\r\n  opacity: 0.63;\r\n}\r\n79.9% {\r\n  opacity: 0.6;\r\n}\r\n84.2% {\r\n  opacity: 0.75;\r\n}\r\n91% {\r\n  opacity: 0.87;\r\n}\r\n}\r\n\r\n@-webkit-keyframes rota {\r\n100% {\r\n  -webkit-transform: rotate(360deg);\r\n          transform: rotate(360deg);\r\n}\r\n}\r\n\r\n@keyframes rota {\r\n100% {\r\n  -webkit-transform: rotate(360deg);\r\n          transform: rotate(360deg);\r\n}\r\n}\r\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "/*@import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css);*/\r\n\r\n\r\n.col-item\r\n{\r\n    border: 1px solid #E1E1E1;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n}\r\n.col-item:hover\r\n{ \r\n  box-shadow: 0px 2px 5px -1px #000;\r\n  -moz-box-shadow: 0px 2px 5px -1px #000;\r\n  -webkit-box-shadow: 0px 2px 5px -1px #000;\r\n  border-radius: 10px;\r\n  transition: all 0.3s ease-in-out;   \r\n  /*border-bottom:2px solid #52A1D5;        */\r\n}\r\n.col-item .photo img\r\n{\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    padding: 1px;\r\n    border-radius: 10px 10px 0 0 ;\r\n}\r\n\r\n.col-item .info\r\n{\r\n    padding: 10px;\r\n    border-radius: 0 0 5px 5px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.col-item .price\r\n{\r\n    /*width: 50%;*/\r\n    float: left;\r\n    margin-top: 5px;\r\n}\r\n\r\n.col-item .price h5\r\n{\r\n    line-height: 20px;\r\n    margin: 0;\r\n}\r\n\r\n.price-text-color\r\n{\r\n    color: #219FD1;\r\n}\r\n\r\n.col-item .info .rating\r\n{\r\n    color: #777;\r\n}\r\n\r\n.col-item .rating\r\n{\r\n    /*width: 50%;*/\r\n    float: left;\r\n    font-size: 17px;\r\n    text-align: right;\r\n    line-height: 52px;\r\n    margin-bottom: 10px;\r\n    height: 52px;\r\n}\r\n\r\n.col-item .separator\r\n{\r\n    border-top: 1px solid #E1E1E1;\r\n}\r\n\r\n.clear-left\r\n{\r\n    clear: left;\r\n}\r\n\r\n.col-item .separator p\r\n{\r\n    line-height: 20px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.col-item .separator p i\r\n{\r\n    margin-right: 5px;\r\n}\r\n.col-item .btn-add\r\n{\r\n    width: 50%;\r\n    float: left;\r\n}\r\n\r\n.col-item .btn-add\r\n{\r\n    border-right: 1px solid #E1E1E1;\r\n    \r\n}\r\n\r\n.col-item .btn-details\r\n{\r\n    width: 50%;\r\n    float: left;\r\n    padding-left: 10px;\r\n}\r\n.controls\r\n{\r\n    margin-top: 20px;\r\n}\r\n[data-slide=\"prev\"]\r\n{\r\n    margin-right: 10px;\r\n}\r\n\r\n/*\r\nHover the image\r\n*/\r\n.post-img-content\r\n{\r\n    height: 196px;\r\n    position: relative;\r\n}\r\n.post-img-content img\r\n{\r\n    position: absolute;\r\n    padding: 1px;\r\n    border-radius: 10px 10px 0 0 ;\r\n}\r\n.post-title{\r\n    display: table-cell;\r\n    vertical-align: bottom;\r\n    /*z-index: 2;*/\r\n    position: relative;\r\n}\r\n.post-title b{\r\n    background-color: rgba(51, 51, 51, 0.58);\r\n    display: inline-block;\r\n    margin-bottom: 5px;\r\n    margin-left: 2px;\r\n    color: #FFF;\r\n    padding: 10px 15px;\r\n    margin-top: 10px;\r\n    font-size: 12px;\r\n}\r\n.post-title b:first-child{\r\n    font-size: 14px;\r\n}\r\n.round-tag{\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50% 50% 50% 0;\r\n    border: 4px solid #FFF;\r\n    background: #37A12B;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    padding: 15px 6px;\r\n    font-size: 17px;\r\n    color: #FFF;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\nbody {\r\n    padding-top: 50px;\r\n}\r\n.dropdown.dropdown-lg .dropdown-menu {\r\n    margin-top: -1px;\r\n    padding: 6px 20px;\r\n}\r\n.input-group-btn .btn-group {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n}\r\n.btn-group .btn {\r\n    border-radius: 0;\r\n    margin-left: -1px;\r\n}\r\n.btn-group .btn:last-child {\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}\r\n.btn-group .form-horizontal .btn[type=\"submit\"] {\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.form-horizontal .form-group {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n   \r\n}\r\n.form-group .form-control:last-child {\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    #adv-search {\r\n        width: 500px;\r\n        margin: 0 auto;\r\n    }\r\n    .dropdown.dropdown-lg {\r\n        position: static !important;\r\n    }\r\n    .dropdown.dropdown-lg .dropdown-menu {\r\n        min-width: 500px;\r\n    }\r\n}\r\n\r\n\r\n\r\n.bs-slider{\r\n    overflow: hidden;\r\n    max-height: 700px;\r\n    position: relative;\r\n    background: #000000;\r\n}\r\n.bs-slider:hover {\r\n    cursor: -webkit-grab;\r\n}\r\n.bs-slider:active {\r\n    cursor: -webkit-grabbing;\r\n}\r\n.bs-slider .bs-slider-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.40);\r\n}\r\n.bs-slider > .carousel-inner > .item > img,\r\n.bs-slider > .carousel-inner > .item > a > img {\r\n    margin: auto;\r\n    width: 100% !important;\r\n}\r\n\r\n/********************\r\n*****Slide effect\r\n**********************/\r\n\r\n.fade {\r\n    opacity: 1;\r\n}\r\n.fade .item {\r\n    top: 0;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0 !important;\r\n    display: block !important;\r\n    transition: opacity ease-in-out 1s;\r\n}\r\n.fade .item:first-child {\r\n    top: auto;\r\n    position: relative;\r\n}\r\n.fade .item.active {\r\n    opacity: 1;\r\n    z-index: 2;\r\n    transition: opacity ease-in-out 1s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*---------- LEFT/RIGHT ROUND CONTROL ----------*/\r\n.control-round .carousel-control {\r\n    top: 47%;\r\n    opacity: 0;\r\n    width: 45px;\r\n    height: 45px;\r\n    z-index: 100;\r\n    color: #ffffff;\r\n    display: block;\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    line-height: 43px;\r\n    text-shadow: none;\r\n    position: absolute;\r\n    font-weight: normal;\r\n    background: transparent;\r\n    border-radius: 100px;\r\n}\r\n.control-round:hover .carousel-control{\r\n    opacity: 1;\r\n}\r\n.control-round .carousel-control.left {\r\n    left: 1%;\r\n}\r\n.control-round .carousel-control.right {\r\n    right: 1%;\r\n}\r\n.control-round .carousel-control.left:hover,\r\n.control-round .carousel-control.right:hover{\r\n    color: #fdfdfd;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    border: 0px transparent;\r\n}\r\n.control-round .carousel-control.left>span:nth-child(1){\r\n    left: 45%;\r\n}\r\n.control-round .carousel-control.right>span:nth-child(1){\r\n    right: 45%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*---------- INDICATORS CONTROL ----------*/\r\n.indicators-line > .carousel-indicators{\r\n    right: 45%;\r\n    bottom: 3%;\r\n    left: auto;\r\n    width: 90%;\r\n    height: 20px;\r\n    font-size: 0;\r\n    overflow-x: auto;\r\n    text-align: right;\r\n    overflow-y: hidden;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 1px;\r\n    white-space: nowrap;\r\n}\r\n.indicators-line > .carousel-indicators li{\r\n    padding: 0;\r\n    width: 15px;\r\n    height: 15px;\r\n    border: 1px solid rgb(158, 158, 158);\r\n    text-indent: 0;\r\n    overflow: hidden;\r\n    text-align: left;\r\n    position: relative;\r\n    letter-spacing: 1px;\r\n    background: rgb(158, 158, 158);\r\n    -webkit-font-smoothing: antialiased;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n    transition: all 0.5s cubic-bezier(0.22,0.81,0.01,0.99);\r\n    z-index: 10;\r\n    cursor:pointer;\r\n}\r\n.indicators-line > .carousel-indicators li:last-child{\r\n    margin-right: 0;\r\n}\r\n.indicators-line > .carousel-indicators .active{\r\n    margin: 1px 5px 1px 1px;\r\n    box-shadow: 0 0 0 2px #fff;\r\n    background-color: transparent;\r\n    position: relative;\r\n    transition: box-shadow 0.3s ease;\r\n    transition: background-color 0.3s ease;\r\n\r\n}\r\n.indicators-line > .carousel-indicators .active:before{\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    background-color: #fff;\r\n    content:\"\";\r\n    position: absolute;\r\n    left:-1px;\r\n    top:-1px;\r\n    width:15px;\r\n    height: 15px;\r\n    border-radius: 50%;\r\n    transition: background-color 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*---------- SLIDE CAPTION ----------*/\r\n.slide_style_left {\r\n    text-align: left !important;\r\n}\r\n.slide_style_right {\r\n    text-align: right !important;\r\n}\r\n.slide_style_center {\r\n    text-align: center !important;\r\n}\r\n\r\n.slide-text {\r\n    left: 0;\r\n    top: 25%;\r\n    right: 0;\r\n    margin: auto;\r\n    padding: 10px;\r\n    position: absolute;\r\n    text-align: left;\r\n    padding: 10px 85px;\r\n    \r\n}\r\n\r\n.slide-text > h1 {\r\n    \r\n    padding: 0;\r\n    color: #ffffff;\r\n    font-size: 70px;\r\n    font-style: normal;\r\n    line-height: 84px;\r\n    margin-bottom: 30px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    -webkit-animation-delay: 0.7s;\r\n    animation-delay: 0.7s;\r\n}\r\n.slide-text > p {\r\n    padding: 0;\r\n    color: #ffffff;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    font-weight: 300;\r\n    margin-bottom: 40px;\r\n    letter-spacing: 1px;\r\n    -webkit-animation-delay: 1.1s;\r\n    animation-delay: 1.1s;\r\n}\r\n.slide-text > a.btn-default{\r\n    color: #000;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    line-height: 15px;\r\n    margin-right: 10px;\r\n    text-align: center;\r\n    padding: 17px 30px;\r\n    white-space: nowrap;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    -webkit-animation-delay: 2s;\r\n    animation-delay: 2s;\r\n    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;\r\n\r\n}\r\n.slide-text > a.btn-primary{\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    line-height: 15px;\r\n    margin-left: 10px;\r\n    text-align: center;\r\n    padding: 17px 30px;\r\n    white-space: nowrap;\r\n    letter-spacing: 1px;\r\n    background: #00bfff;\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    border: none;\r\n    -webkit-animation-delay: 2s;\r\n    animation-delay: 2s;\r\n    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;\r\n}\r\n.slide-text > a:hover,\r\n.slide-text > a:active {\r\n    color: #ffffff;\r\n    background: #222222;\r\n    transition: background 0.5s ease-in-out, color 0.5s ease-in-out;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*------------------------------------------------------*/\r\n/* RESPONSIVE\r\n/*------------------------------------------------------*/\r\n\r\n@media (max-width: 991px) {\r\n    .slide-text h1 {\r\n        font-size: 40px;\r\n        line-height: 50px;\r\n        margin-bottom: 20px;\r\n    }\r\n    .slide-text > p {\r\n\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n\r\n/*---------- MEDIA 480px ----------*/\r\n@media  (max-width: 768px) {\r\n    .slide-text {\r\n        padding: 10px 50px;\r\n    }\r\n    .slide-text h1 {\r\n        font-size: 30px;\r\n        line-height: 40px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .slide-text > p {\r\n        font-size: 14px;\r\n        line-height: 20px;\r\n        margin-bottom: 20px;\r\n    }\r\n    .control-round .carousel-control{\r\n        display: none;\r\n    }\r\n\r\n}\r\n@media  (max-width: 480px) {\r\n    .slide-text {\r\n        padding: 10px 30px;\r\n    }\r\n    .slide-text h1 {\r\n        font-size: 20px;\r\n        line-height: 25px;\r\n        margin-bottom: 5px;\r\n    }\r\n    .slide-text > p {\r\n        font-size: 12px;\r\n        line-height: 18px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .slide-text > a.btn-default, \r\n    .slide-text > a.btn-primary {\r\n        font-size: 10px;\r\n        line-height: 10px;\r\n        margin-right: 10px;\r\n        text-align: center;\r\n        padding: 10px 15px;\r\n    }\r\n    .indicators-line > .carousel-indicators{\r\n        display: none;\r\n    }\r\n\r\n}\r\n\r\n.description{\r\n    text-align: center\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "* {box-sizing:border-box}\r\n\r\n/* Slideshow container */\r\n.slideshow-container {\r\n  max-width: 1000px;\r\n  position: relative;\r\n  margin: auto;\r\n}\r\n\r\n.mySlides {\r\n    display: none;\r\n}\r\n\r\n/* Next & previous buttons */\r\n.prev, .next {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: auto;\r\n  margin-top: -22px;\r\n  padding: 16px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  transition: 0.6s ease;\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n\r\n/* Position the \"next button\" to the right */\r\n.next {\r\n  right: 0;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n/* On hover, add a black background color with a little bit see-through */\r\n.prev:hover, .next:hover {\r\n  background-color: rgba(0,0,0,0.8);\r\n}\r\n\r\n/* Caption text */\r\n.text {\r\n  color: #f2f2f2;\r\n  font-size: 15px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  bottom: 8px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n/* Number text (1/3 etc) */\r\n.numbertext {\r\n  color: #f2f2f2;\r\n  font-size: 12px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n/* The dots/bullets/indicators */\r\n.dot {\r\n  cursor:pointer;\r\n  height: 13px;\r\n  width: 13px;\r\n  margin: 0 2px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  transition: background-color 0.6s ease;\r\n}\r\n\r\n.active, .dot:hover {\r\n  background-color: #717171;\r\n}\r\n\r\n/* Fading animation */\r\n.fade {\r\n  -webkit-animation-name: fade;\r\n  -webkit-animation-duration: 1.5s;\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n  from {opacity: .4} \r\n  to {opacity: 1}\r\n}\r\n\r\n@keyframes fade {\r\n  from {opacity: .4} \r\n  to {opacity: 1}\r\n}"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "\r\n/*\r\n    Note: It is best to use a less version of this file ( see http://css2less.cc\r\n    For the media queries use @screen-sm-min instead of 768px.\r\n    For .omb_spanOr use @body-bg instead of white.\r\n*/\r\n\r\n@media (min-width: 768px) {\r\n    .omb_row-sm-offset-3 div:first-child[class*=\"col-\"] {\r\n        margin-left: 25%;\r\n    }\r\n}\r\n\r\n.omb_login .omb_authTitle {\r\n    text-align: center;\r\n\tline-height: 300%;\r\n}\r\n\t\r\n.omb_login .omb_socialButtons a {\r\n\tcolor: white; // In yourUse @body-bg \r\n\topacity:0.9;\r\n}\r\n.omb_login .omb_socialButtons a:hover {\r\n    color: white;\r\n\topacity:1;    \t\r\n}\r\n.omb_login .omb_socialButtons .omb_btn-facebook {background: #3b5998;}\r\n.omb_login .omb_socialButtons .omb_btn-twitter {background: #00aced;}\r\n.omb_login .omb_socialButtons .omb_btn-google {background: #c32f10;}\r\n\r\n\r\n.omb_login .omb_loginOr {\r\n\tposition: relative;\r\n\tfont-size: 1.5em;\r\n\tcolor: #aaa;\r\n\tmargin-top: 1em;\r\n\tmargin-bottom: 1em;\r\n\tpadding-top: 0.5em;\r\n\tpadding-bottom: 0.5em;\r\n}\r\n.omb_login .omb_loginOr .omb_hrOr {\r\n\tbackground-color: #cdcdcd;\r\n\theight: 1px;\r\n\tmargin-top: 0px !important;\r\n\tmargin-bottom: 0px !important;\r\n}\r\n.omb_login .omb_loginOr .omb_spanOr {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: -0.6em;\r\n\tmargin-left: -1.5em;\r\n\tbackground-color: white;\r\n\twidth: 3em;\r\n\ttext-align: center;\r\n}\t\t\t\r\n\r\n.omb_login .omb_loginForm .input-group.i {\r\n\twidth: 2em;\r\n}\r\n.omb_login .omb_loginForm  .help-block {\r\n    color: red;\r\n}\r\n\r\n\t\r\n@media (min-width: 768px) {\r\n    .omb_login .omb_forgotPwd {\r\n        text-align: right;\r\n\t\tmargin-top:10px;\r\n \t}\t\t\r\n}"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ".heading h2{\r\n    text-align: center;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  }"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<br><br><br><br>\n<div class=\"container\">\n    \n<router-outlet></router-outlet>\n</div>\n\n <!-- Footer -->\n        <div class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container\">\n      <p class=\"navbar-text pull-left\">© 2017 - Site Built By Fahad\n           <a href=\"http://tinyurl.com/tbvalid\" target=\"_blank\" ></a>\n      </p>\n      \n      <a href=\"http://youtu.be/zJahlKPCL9g\" class=\"navbar-btn btn-danger btn pull-right\">\n      <span class=\"glyphicon glyphicon-star\"></span>  Subscribe on YouTube</a>\n    </div>\n    \n    \n  </div>\n\n  <br><br><br><br>    "

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\">\n\t<h2>Add Your Hut</h2>\n</div>\n<hr>\n\n<form [formGroup]=\"addHutForm\" (ngSubmit)=\"addHut()\">\n\n\n\n\t<div class=\"leftcontact\">\n\t\t<div class=\"form-group\">\n\t\t\t<p>Hut Name<span>*</span></p>\n\t\t\t<span class=\"icon-case\"><i class=\"fa fa-male\"></i></span>\n\t\t\t<input type=\"text\" name=\"nom\" id=\"nom\" data-rule=\"required\" [(ngModel)]=\"name\" formControlName=\"name\" />\n\n\t\t</div>\n\t\t<div class=\"validation\">\n\t\t\t<div *ngIf=\"addHutForm.controls['name'].hasError('required') && addHutForm.controls['name'].touched\" class=\"alert alert-danger\">\n\t\t\t\t<span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter your Hut name </strong>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<p>Unit<span>*</span></p>\n\t\t\t<span class=\"icon-case\"><i class=\"fa fa-user\"></i></span>\n\t\t\t<input type=\"text\" name=\"prenom\" id=\"prenom\" data-rule=\"required\" formControlName=\"unit\" />\n\t\t\t<div class=\"validation\"></div>\n\t\t</div>\n\t\t<div class=\"validation\">\n\t\t\t<div *ngIf=\"addHutForm.controls['unit'].hasError('required') && addHutForm.controls['unit'].touched\" class=\"alert alert-danger\">\n\t\t\t\t<span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter your Unit no </strong>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<p>Rooms <span>*</span></p>\n\t\t\t<span class=\"icon-case\"><i class=\"fa fa-envelope-o\"></i></span>\n\t\t\t<input type=\"number\" min=\"1\" max=\"5\" name=\"email\" id=\"email\" data-rule=\"email\" formControlName=\"rooms\" />\n\t\t\t<div class=\"validation\"></div>\n\t\t</div>\n\t\t<div class=\"validation\">\n\t\t\t<div *ngIf=\"addHutForm.controls['rooms'].hasError('required') && addHutForm.controls['rooms'].touched\" class=\"alert alert-danger\">\n\t\t\t\t<span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter no of rooms </strong>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<p>Max person allowed <span>*</span></p>\n\t\t\t<span class=\"icon-case\"><i class=\"fa fa-home\"></i></span>\n\t\t\t<input type=\"number\" min=\"1\" max=\"100\" name=\"persons\" id=\"society\" data-rule=\"required\" formControlName=\"maxPersonAllowed\"\n\t\t\t/>\n\t\t\t<div class=\"validation\"></div>\n\t\t</div>\n\t\t<div class=\"validation\">\n\t\t\t<div *ngIf=\"addHutForm.controls['maxPersonAllowed'].hasError('required') && addHutForm.controls['maxPersonAllowed'].touched\" class=\"alert alert-danger\">\n\t\t\t\t<span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter allowed no of persons </strong>\n\t\t\t</div>\n\t\t</div>\n\n\n\n\n\t</div>\n\n\t<div class=\"rightcontact\">\n\n\t\t<div class=\"form-group\">\n\t\t\t<p> Address <span>*</span></p>\n\t\t\t<span class=\"icon-case\"><i class=\"fa fa-location-arrow\"></i></span>\n\t\t\t<input type=\"text\" name=\"adresse\" id=\"adresse\" data-rule=\"required\" formControlName=\"address\" />\n\t\t</div>\n\t\t\t<div *ngIf=\"addHutForm.controls['address'].hasError('required') && addHutForm.controls['address'].touched\" class=\"alert alert-danger\">\n\t\t\t\t<span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter address </strong>\n\t\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<p>Location <span>*</span></p>\n\t\t\t<span class=\"icon-case\"><i class=\"fa fa-building-o\"></i></span>\n\t\t\t<input type=\"text\" name=\"location\" id=\"ville\" data-rule=\"required\" formControlName=\"location\" />\n\t\t</div>\n\t\t\t<div *ngIf=\"addHutForm.controls['location'].hasError('required') && addHutForm.controls['location'].touched\" class=\"alert alert-danger\">\n\t\t\t\t<span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter location </strong>\n\t\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<p>Rent<span>*</span></p>\n\t\t\t<span class=\"icon-case\"><i class=\"fa fa-building-o\"></i></span>\n\t\t\t<input type=\"number\" name=\"rent\" id=\"ville\" data-rule=\"required\" formControlName=\"rent\" />\n\t\t</div>\n\t\t<div class=\"validation\">\n\t\t\t<div *ngIf=\"addHutForm.controls['rent'].hasError('required') && addHutForm.controls['rent'].touched\" class=\"alert alert-danger\">\n\t\t\t\t<span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter price </strong>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<p>Package Description <span>*</span></p>\n\t\t\t<span class=\"icon-case\"><i class=\"fa fa-comments-o\"></i></span>\n\t\t\t<textarea name=\"message\" rows=\"14\" data-rule=\"required\" formControlName=\"description\"></textarea>\n\t\t</div>\n\t\t<div class=\"validation\">\n\t\t\t<div *ngIf=\"addHutForm.controls['description'].hasError('required') && addHutForm.controls['description'].touched\" class=\"alert alert-danger\">\n\t\t\t\t<span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter package description </strong>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<hr>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label><span>Choose Image</span><input type=\"file\" id=\"myFile\" (change)=\"onChange($event)\"></label>\n\t\t</div>\n\t\t<div class=\"validation\">\n\t\t\t<div *ngIf=\"!upload\">\n\t\t\t\t<span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please upload 1 image atleast </strong>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t\n\t\t<!--<div>\n    <button type=\"button\" (click)=\"upload(progress,img)\">Upload Picture</button>\n</div>-->\n\t\t<!--<div><img src=\"{{img}}\" alt=\"no img\" width=\"200px\" height=\"300px\"></div>-->\n\n\t\t<!--<div>\n      <progress value=\"0\" max=\"100\" #progress>\n</progress>\n</div>-->\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"true\" (mapClick)=\"mapClicked($event)\">\n\n\t\t\t<sebm-google-map-marker *ngIf=\"mapMarker\" (markerClick)=\"clickedMarker(mapMarker)\" [latitude]=\"mapMarker.lat\" [longitude]=\"mapMarker.lng\"\n\t\t\t [markerDraggable]=\"mapMarker.draggable\" (dragEnd)=\"markerDragEnd(mapMarker, $event)\">\n\n\t\t\t\t<sebm-google-map-info-window>\n\t\t\t\t\t<strong>{{name}}</strong>\n\t\t\t\t</sebm-google-map-info-window>\n\n\t\t\t</sebm-google-map-marker>\n\t\t</sebm-google-map>\n\t</div>\n\n\t<button *ngIf=\"addHutForm.valid && mapMarker && upload\" type=\"submit\" class=\"btn btn-sm btn-success btn-block\">ADD</button>\n\t<button *ngIf=\"!addHutForm.valid || !mapMarker || !upload\" type=\"submit\" class=\"btn btn-sm btn-default btn-block\" disabled>ADD</button>\n\t\n<br>\n\t<div>\n\t\t<flash-messages></flash-messages>\n\t\t\n</div>\n\n\n</form>\n\n<div *ngIf=\"spinner\" class=\"container\">\n\t<div class=\"row\">\n            <div id=\"loading\">\n                <ul class=\"bokeh\">\n                    <li></li>\n                    <li></li>\n                    <li></li>\n                </ul>\n            </div>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<p>\n  bookedhuts works!\n</p>\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\">\n  <h2 >Google Map</h2>\n</div>\n\n<hr> <br>\n\n<div *ngIf=\"!spinner\" class=\"container\">\n\t\t<sebm-google-map #gm\n[latitude]=\"lat\" \n[longitude]=\"lng\"\n[zoom]=\"zoom\"\n[disableDefaultUI]=\"false\"\n[zoomControl]=\"true\"\n>\n\n  <sebm-google-map-marker *ngFor=\"let hut of huts; let i=index\"\n  (markerClick)=\"clickedMarker(hut.id);gm.lastOpen?.close(); gm.lastOpen = infoWindow\" \n  [latitude]=\"hut.latitude\" \n  [longitude]=\"hut.longitude\"\n  [markerDraggable]=\"false\">\n\n  <sebm-google-map-info-window #infoWindow>\n    <h1>Beach huts</h1>\n    <label>Name:</label>  {{hut.name}} <br>\n    <label>Unit:</label>  {{hut.unit}} <br>\n    <label>Rooms:</label>  {{hut.rooms}} <br>\n    <label>Desciption:</label>  {{hut.description}} <br>\n    <label>Rent:</label>  {{hut.rent}} <br>\n\n    <form>\n    <button class=\"btn btn-primary btn-sm\" (click)=\"flag = true\">Write a review</button> <br><br>\n      <div *ngIf=\"flag === true\" class=\"col-lg-10 form-group\">\n        <textarea class=\"form-control\" rows=\"3\" id=\"textArea\" #message></textarea>\n      <div><button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"submitReview(message, hut.id)\">Submit Review</button></div>\n        \n      </div>\n\n    </form>\n    <div>\n     <!--<img src=\"https://cdn.pixabay.com/photo/2016/10/07/13/00/yucca-plant-1721515__340.jpg\" class=\"img-responsive img-circle\"  alt=\"John Doe\" width=\"40px\" height=\"35px\">-->\n     <div  *ngFor=\"let review of reviews; let i=index\">\n       <p>{{review}}</p>\n       <hr>\n     </div>\n\n      </div> \n\n      <!--<h5>Images</h5>-->\n      <!--<div>\n        <img *ngFor=\"let img of images; let i=index\" src=\"data:image/jpeg;base64,{{img}}\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"80\" height=\"50\"> \n        </div> -->\n  </sebm-google-map-info-window>\n  \n  </sebm-google-map-marker>\n</sebm-google-map>\n  </div>\n\n\n  <div *ngIf=\"spinner\" class=\"container\">\n    <div class=\"row\">\n              <div id=\"loading\">\n                  <ul class=\"bokeh\">\n                      <li></li>\n                      <li></li>\n                      <li></li>\n                  </ul>\n              </div>\n    </div>\n  </div>\n  \n\n\n  \n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = " <!-- Add this css File in head tag-->\n        <link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" media=\"all\">\n        <link href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\" rel=\"stylesheet\" media=\"all\">\n\n        \n        \n        <div id=\"bootstrap-touch-slider\" class=\"carousel bs-slider fade  control-round indicators-line\" data-ride=\"carousel\" data-pause=\"hover\" data-interval=\"5000\" >\n\n            <!-- Indicators -->\n            <ol class=\"carousel-indicators\">\n                <li data-target=\"#bootstrap-touch-slider\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#bootstrap-touch-slider\" data-slide-to=\"1\"></li>\n                <li data-target=\"#bootstrap-touch-slider\" data-slide-to=\"2\"></li>\n            </ol>\n\n            <!-- Wrapper For Slides -->\n            <div class=\"carousel-inner\" role=\"listbox\">\n\n                <!-- Third Slide -->\n                <div class=\"item active\">\n\n                    <!-- Slide Background -->\n                    <img src=\"https://i.imgur.com/mytusV1.jpg\" alt=\"Bootstrap Touch Slider\"  class=\"slide-image\"/>\n                    <div class=\"bs-slider-overlay\"></div>\n\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <!-- Slide Text Layer -->\n                            <div class=\"slide-text slide_style_left\">\n                                <h1 data-animation=\"animated zoomInRight\">Hut Reservation</h1>\n                                <p data-animation=\"animated fadeInLeft\">We provide premium beach huts on rent at hawksbay , sandspit and turtle beach. You can select a hut from given below links</p>\n                                <a *ngIf=\"!authService.tokenNotExpired\" [routerLink]=\"['/login']\" class=\"btn btn-danger btn-lg\" data-animation=\"animated fadeInLeft\">login</a>\n                                <a *ngIf=\"!authService.tokenNotExpired\" [routerLink]=\"['/register']\" class=\"btn btn-primary\" data-animation=\"animated fadeInRight\">Sign up</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End of Slide -->\n\n                <!-- Second Slide -->\n                <div class=\"item\">\n\n                    <!-- Slide Background -->\n                    <img src=\"http://i63.tinypic.com/2hozrtk.jpg\" alt=\"Bootstrap Touch Slider\"  class=\"slide-image\"/>\n                    <div class=\"bs-slider-overlay\"></div>\n                    <!-- Slide Text Layer -->\n                    <div class=\"slide-text slide_style_center\">\n                        <h1 data-animation=\"animated flipInX\">Karachi Beach Huts</h1>\n                        <p data-animation=\"animated lightSpeedIn\">We provide the best services to our customers</p>\n                        <a [routerLink]=\"['/map']\" target=\"_blank\" class=\"btn btn-primary\" data-animation=\"animated fadeInUp\">View on Google Map</a>\n                    </div>\n                </div>\n                <!-- End of Slide -->\n\n                <!-- Third Slide -->\n                <div class=\"item\">\n\n                    <!-- Slide Background -->\n                    <img src=\"http://i64.tinypic.com/rartcg.jpg\" alt=\"Bootstrap Touch Slider\"  class=\"slide-image\"/>\n                    <div class=\"bs-slider-overlay\"></div>\n                    <!-- Slide Text Layer -->\n                    <div class=\"slide-text slide_style_right\">\n                        <h1 data-animation=\"animated zoomInLeft\">Reserve Your Hut Now</h1>\n                        <p data-animation=\"animated fadeInRight\">Lots of luxurious beach huts with cool and awesome facilities .</p>\n                        <!-- <a href=\"http://bootstrapthemes.co/\" target=\"_blank\" class=\"btn btn-default\" data-animation=\"animated fadeInLeft\">select one</a>\n                        <a href=\"http://bootstrapthemes.co/\" target=\"_blank\" class=\"btn btn-primary\" data-animation=\"animated fadeInRight\">select two</a> -->\n                    </div>\n                </div>\n                <!-- End of Slide -->\n\n\n            </div><!-- End of Wrapper For Slides -->\n\n            <!-- Left Control -->\n            <a class=\"left carousel-control\" href=\"#bootstrap-touch-slider\" role=\"button\" data-slide=\"prev\">\n                <span class=\"fa fa-angle-left\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n\n            <!-- Right Control -->\n            <a class=\"right carousel-control\" href=\"#bootstrap-touch-slider\" role=\"button\" data-slide=\"next\">\n                <span class=\"fa fa-angle-right\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n\n        </div> <!-- End  bootstrap-touch-slider Slider -->\n        \n                  \n\n\n<br><br><br>\n<div>\n<div class=\"container\">\n    <div class=\"row\">    \n        <div class=\"col-xs-8 col-xs-offset-2\">\n\t\t    <div class=\"input-group\">\n                <div class=\"input-group-btn search-panel\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                    \t<span id=\"search_concept\">{{filterBy}}</span> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" role=\"menu\">\n                      <li><a (click)=\"changeName('Name')\">Name</a></li>\n                      <li><a (click)=\"changeName('Price')\">Price</a></li>\n                      <li><a (click)=\"changeName('Location')\">Location</a></li>                      \n                    </ul>\n                </div>\n                <input type=\"hidden\" name=\"search_param\" value=\"all\" id=\"search_param\">         \n                <input *ngIf=\"filterBy == 'Filter By'\" type=\"text\" class=\"form-control\" name=\"x\" placeholder=\"Search term...\" [(ngModel)]=\"searchString\">\n                <input *ngIf=\"filterBy == 'Name'\" type=\"text\" class=\"form-control\" name=\"x\" placeholder=\"Search by hut name...\" [(ngModel)]=\"searchString\">               \n                <input *ngIf=\"filterBy == 'Price'\" type=\"text\" class=\"form-control\" name=\"x\" placeholder=\"Search by price eg: 40000-50000\" [(ngModel)]=\"searchString\">\n                <input *ngIf=\"filterBy == 'Location'\" type=\"text\" class=\"form-control\" name=\"x\" placeholder=\"Search by location eg: hawksbay etc\" [(ngModel)]=\"searchString\">                \n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" type=\"button\" (click)=\"search()\"><span class=\"glyphicon glyphicon-search\"></span></button>\n                </span>\n            </div>\n        </div>\n\t</div>\n</div>\n\n\n\n\n\n\n<div class=\"container\" style=\"margin-top:50px;\">\n\t<div class=\"row\">\n\n        <div class=\"col-xs-12 col-sm-6 col-md-3\" *ngFor=\"let huts of huts; let i=index\">\n            <div class=\"col-item\">\n                <div class=\"post-img-content\">\n                    <img src=\"data:image/jpeg;base64,{{huts.base64Img[0]}}\" class=\"img-responsive\" alt=\"a\" />\n                    <span class=\"post-title\">\n                        <b>{{huts.name}}</b><br>\n                        <b>{{huts.unit}}</b>\n                    </span>\n                    <span class=\"round-tag\" *ngIf=\"huts.bookedDates.length > 1\">Booked</span>\n                </div>\n                <div class=\"info\">\n                    <div class=\"row\">\n                        <div class=\"price col-md-6\">\n                            <h5 class=\"price-text-color\">{{huts.rent}} Rs.</h5>\n                        </div>\n                        <div class=\"rating hidden-sm col-md-6\">\n                            <i class=\"price-text-color fa fa-star\"></i><i class=\"price-text-color fa fa-star\">\n                            </i><i class=\"price-text-color fa fa-star\"></i><i class=\"price-text-color fa fa-star\">\n                            </i><i class=\"fa fa-star\"></i>\n                        </div>\n                    </div>\n                    <p class=\"description\">{{huts.description}}</p>                    \n                    <div class=\"separator clear-left\">\n                        <!--<p class=\"btn-add\">\n                            <i class=\"fa fa-shopping-cart\"></i><a href=\"http://www.jquery2dotnet.com\" class=\"hidden-sm\">Add to cart</a></p>-->\n                        <p class=\"btn-details\">\n                            <i class=\"fa fa-list\"></i><a (click)=\"navigate(huts,i)\" class=\"hidden-sm\">Reservation</a></p>\n                            <p class=\"btn-details\">\n                            <i class=\"fa fa-list\"></i><a [routerLink]=\"['/map']\" class=\"hidden-sm\">View on map</a></p>\n                            \n                    </div>\n                    <div class=\"clearfix\">\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"i >= 3\"><br><br></div>\n        </div>\n        \n\t</div>\n</div>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    \n</div>\n</div>\n\n\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n\n        <!-- Portfolio Item Heading -->\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">{{hutObj.name}}\n                    <small><strong>{{hutObj.rent}}</strong> Rs</small>\n                </h1>\n            </div>\n        </div>\n        <!-- /.row -->\n\n        <!-- Portfolio Item Row -->\n        <div class=\"row\">\n\n            <div class=\"col-md-8\">\n                <img *ngIf=\"imgURI[0]\" class=\"img-responsive\" [src]=\"'data:image/jpeg;base64,'+imgURI[0].base64\" alt=\"a\">\n            </div>\n\n            <div class=\"col-md-4\">\n       \n\n      <div class=\"list-group\">\n  <a class=\"list-group-item\">\n    <label>Name: </label><span>{{hutObj.name}}</span>\n  </a>\n  <a class=\"list-group-item\">\n      <label>Unit: </label><span>{{hutObj.unit}}</span>\n  </a>\n  <a class=\"list-group-item\">\n      <label>Rooms: </label><span>{{hutObj.rooms}}</span>\n  </a>\n  <a class=\"list-group-item\">\n      <label>max person allowed: </label><span>{{hutObj.maxPersonAllowed}}</span>\n  </a>\n  <a class=\"list-group-item\">\n      <label>address: </label><span>{{hutObj.address}}</span>\n  </a>\n  <a class=\"list-group-item\">\n      <label>location: </label><span>{{hutObj.location}}</span>\n  </a>\n  <a class=\"list-group-item\">\n      <label>rent: </label><span>{{hutObj.rent}}</span><br>\n  </a>\n  <a class=\"list-group-item\">\n      <label>description: </label><span>{{hutObj.description}}</span>\n  </a>\n    \n    \n  </div>\n\n            </div>\n\n        </div>\n        <hr>\n        <div class=\"col-lg-12\">\n            <div>\n                <input type=\"date\" name=\"booking\" (change)=\"onChange($event)\" #date>              \n                <button  class=\"btn btn-primary btn-sm\" (click)=\"bookReservation(date)\" [disabled]=\"!flag\">Book</button>\n            </div>\n        </div> \n            \n        <!-- /.row -->\n\n        <!-- Related Projects Row -->\n        <div class=\"row\">\n\n            <div class=\"col-lg-12\">\n                <h3 class=\"page-header\">Images</h3>\n            </div>\n\n            <div class=\"col-sm-3 col-xs-6\" *ngFor=\"let images of imgURI; let i=index\">\n                <a>\n                    <img class=\"img-responsive portfolio-item\" [src]=\"'data:image/jpeg;base64,'+images.base64\" alt=\"\">\n                </a>\n            </div>\n\n\n        </div>\n </div>\n\n <br><br><br>"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    \n\n    <div class=\"omb_login\">\n    \t<h3 class=\"omb_authTitle\">Login or <a [routerLink]=\"['/register']\">Sign up</a></h3>\n\t\t<div class=\"row omb_row-sm-offset-3 omb_socialButtons\">\n    \t    <div class=\"col-xs-4 col-sm-2\">\n\t\t        <a href=\"#\" class=\"btn btn-lg btn-block omb_btn-facebook\" (click)=\"firebaseLogin()\">\n\t\t\t        <i class=\"fa fa-facebook visible-xs\"></i>\n\t\t\t        <span class=\"hidden-xs\">Facebook</span>\n\t\t        </a>\n\t        </div>\n        \t<div class=\"col-xs-4 col-sm-2\">\n\t\t        <a href=\"#\" class=\"btn btn-lg btn-block omb_btn-twitter\">\n\t\t\t        <i class=\"fa fa-twitter visible-xs\"></i>\n\t\t\t        <span class=\"hidden-xs\">Twitter</span>\n\t\t        </a>\n\t        </div>\t\n        \t<div class=\"col-xs-4 col-sm-2\">\n\t\t        <a href=\"#\" class=\"btn btn-lg btn-block omb_btn-google\">\n\t\t\t        <i class=\"fa fa-google-plus visible-xs\"></i>\n\t\t\t        <span class=\"hidden-xs\">Google+</span>\n\t\t        </a>\n\t        </div>\t\n\t\t</div>\n\n\t\t<div class=\"row omb_row-sm-offset-3 omb_loginOr\">\n\t\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t\t<hr class=\"omb_hrOr\">\n\t\t\t\t<span class=\"omb_spanOr\">or</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row omb_row-sm-offset-3\">\n\t\t\t<div class=\"col-xs-12 col-sm-6\">\t\n\t\t\t    <form class=\"omb_loginForm\" action=\"\" autocomplete=\"off\" method=\"POST\" \n          [formGroup]=\"userForm\"\n          (ngSubmit)=\"login()\">\n\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"email address\" formControlName=\"email\">\n\t\t\t\t\t</div>\n          <div *ngIf=\"userForm.controls['email'].hasError('pattern')\" class=\"alert alert-danger\">\n     <span class=\"glyphicon glyphicon-warning-sign\"></span> <strong> Please enter correct email address</strong>\n    </div>\n\t\t\t\t\t<span class=\"help-block\"></span>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n\t\t\t\t\t\t<input  type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n\t\t\t\t\t</div>\n          <div *ngIf=\"userForm.controls['password'].hasError('invalidPassword') && userForm.controls['password'].dirty\" class=\"alert alert-danger\">\n      <span class=\"glyphicon glyphicon-warning-sign\"></span> <strong> Please enter Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character:</strong>\n    </div>\n    <br><br>\n                    \n          \n\t\t\t\t\t<button *ngIf=\"userForm.valid\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n\n          <button *ngIf=\"!userForm.valid\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" disabled>Login</button>\n\t\t\t\t</form>\n\t\t\t</div>\n    \t</div>\n\t\t<div class=\"row omb_row-sm-offset-3\">\n\t\t\t<div class=\"col-xs-12 col-sm-3\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-3\">\n\t\t\t\t<p class=\"omb_forgotPwd\">\n\t\t\t\t\t<a href=\"#\">Forgot password?</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\t    \t\n\t</div>\n\n\n\n        </div>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <flash-messages></flash-messages>\n</div>\n\n<div class=\"row\">\n            <div class=\"heading\">\n                <h2>My Huts</h2>\n            </div>\n        </div>\n        <hr>\n        <!-- /.row -->\n\n        <!-- Page Features -->\n        <div class=\"row text-center\">\n\n            <div class=\"col-md-3 col-sm-6 hero-feature\" *ngFor=\"let myhuts of myHuts; let i=index\">\n                <div class=\"thumbnail\">\n                    <img [src]=\"'data:image/jpeg;base64,'+myhuts.base64Img[0]\" height=\"800\" width=\"500\">\n                    <div class=\"caption\">\n                        <h3>{{myhuts.name}}</h3>\n                        <label>Unit: </label><span>{{myhuts.unit}}</span> <br>\n                        <label>Description: </label><span>{{myhuts.description}}</span>\n                        <p>\n                            <a class=\"btn btn-danger\" (click)=\"delete(myhuts, i)\">Delete</a>\n                            <a class=\"btn btn-default\"(click)=\"update(myhuts, i)\">Edit</a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            \n\n        </div>  "

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n                        <!--<a *ngIf=\"authService.loggedIn()\" class=\"navbar-brand\" id=\"menu-toggle\" (click)=\"sidebar()\"><span class=\"glyphicon glyphicon-list\" aria-hidden=\"true\"></span></a>-->\n\n          <a href=\"\" class=\"navbar-brand\">Hut Booking System</a>\n          <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n        </div>\n        <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\n          <ul class=\"nav navbar-nav\">\n            \n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" >\n              <a [routerLink]=\"['/home']\" ><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Home</a>\n            </li>\n            <li>\n              <!--<a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"  [routerLink]=\"['/']\"> About</a>-->\n            </li>\n            <!-- <li class=\"dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" >\n              <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"download\">Our huts <span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\" aria-labelledby=\"download\">\n                <li><a href=\"\">All</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"\">Hawksbay</a></li>\n                <li><a href=\"\">Sandspit</a></li>\n                <li><a href=\"\">Turtle Beach</a></li>\n              </ul>\n            </li> -->\n            <li *ngIf=\"authService.tokenNotExpired\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" ><a [routerLink]=\"['/addhuts']\">Add Hut</a></li>\n            <li *ngIf=\"authService.tokenNotExpired\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" ><a [routerLink]=\"['/myhuts']\">My Huts</a></li>\n            <li *ngIf=\"authService.tokenNotExpired\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" ><a [routerLink]=\"['/map']\">Map</a></li>            \n          </ul>\n\n          \n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li  *ngIf=\"!authService.tokenNotExpired\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" ><a [routerLink]=\"['/login']\">Login</a></li>\n            <li  *ngIf=\"!authService.tokenNotExpired\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" ><a [routerLink]=\"['/register']\">Register</a></li>\n            <li  *ngIf=\"authService.tokenNotExpired\" class=\"dropdown\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" >\n    <a href=\"#\" class=\"dropdown-toggle profile-image\" data-toggle=\"dropdown\">\n        <!--<span class=\"user-avatar pull-left\" style=\"margin-right:8px; margin-top:-5px;\">\n                                        <img class=\"img-responsive img-circle\"  alt=\"John Doe\" width=\"40px\" height=\"35px\">\n                                    </span>-->\n                                    \n         {{authService.getUsername()}} <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\">\n                    <!-- <li><a><i class=\"fa fa-cog\"></i> My profile</a></li> -->\n                    <!-- <li class=\"divider\"></li> -->\n                    <li><a href=\"#\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span> Logout</a></li>\n                </ul>\n</li>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n\n\n\n    <!--<app-sidebar></app-sidebar>-->"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n\t\t<form role=\"form\"\n\t\t[formGroup]=\"userForm\"\n\t\t(ngSubmit)=\"register()\">\n\t\t\t<h3>Please Sign Up <small>It's free and always will be.</small></h3>\n\t\t\t<hr class=\"colorgraph\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n                        <input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control input-md\" placeholder=\"First Name\" formControlName=\"fname\" tabindex=\"1\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t<div *ngIf=\"userForm.controls['fname'].hasError('required') && userForm.controls['fname'].touched\" class=\"alert alert-danger\">\n     <span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter your first name </strong>    \n    </div>\n\n\t<div *ngIf=\"userForm.controls['fname'].hasError('minlength')\" class=\"alert alert-danger\">\n      <span class=\"glyphicon glyphicon-warning-sign\"></span> <strong> provide atleast 5 characters </strong>\n    </div>\n\n    <div *ngIf=\"userForm.controls['fname'].hasError('maxlength')\" class=\"alert alert-danger\">\n      <span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please do not exceed 10 characters</strong>\n    </div>\n\n\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" name=\"last_name\" id=\"last_name\" class=\"form-control input-md\" placeholder=\"Last Name\" formControlName=\"lname\" tabindex=\"2\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t</div>\n\t\t\t\t<div *ngIf=\"userForm.controls['lname'].hasError('required') && userForm.controls['lname'].touched\" class=\"alert alert-danger\">\n     <span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please enter your last name </strong>    \n    </div>\n\n\t<div *ngIf=\"userForm.controls['lname'].hasError('minlength')\" class=\"alert alert-danger\">\n      <span class=\"glyphicon glyphicon-warning-sign\"></span> <strong> provide atleast 5 characters </strong>\n    </div>\n\n    <div *ngIf=\"userForm.controls['lname'].hasError('maxlength')\" class=\"alert alert-danger\">\n      <span class=\"glyphicon glyphicon-warning-sign\"></span><strong> Please do not exceed 10 characters</strong>\n    </div>\n\t\t\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-md\" placeholder=\"Email Address\" formControlName=\"email\" tabindex=\"4\" #emailid>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"userForm.controls['email'].hasError('pattern')\" class=\"alert alert-danger\">\n     <span class=\"glyphicon glyphicon-warning-sign\"></span> <strong> Please enter correct email address</strong>\n    </div>\n\t<div formGroupName=\"passwordfields\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-md\" placeholder=\"Password\" formControlName=\"pass\" tabindex=\"5\" #pass>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t<div *ngIf=\"userForm.controls['passwordfields'].controls['pass'].hasError('invalidPassword') && userForm.controls['passwordfields'].controls['pass'].dirty\" class=\"alert alert-danger\">\n      <span class=\"glyphicon glyphicon-warning-sign\"></span> <strong> Please enter Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character:</strong>\n    </div>\n\n\n\n\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-md\" placeholder=\"Confirm Password\" formControlName=\"cpass\" tabindex=\"6\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div *ngIf=\"userForm.controls['passwordfields'].hasError('mismatchedPasswords')\" class=\"alert alert-danger\">\n      <span class=\"glyphicon glyphicon-warning-sign\"></span> <strong> does not match </strong>\n    </div>\n\n\t</div>\n\t\t\t<!--<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-4 col-sm-3 col-md-3\">\n\t\t\t\t\t<span class=\"button-checkbox\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn\" data-color=\"info\" tabindex=\"7\">I Agree</button>\n                        <input type=\"checkbox\" name=\"t_and_c\" id=\"t_and_c\" class=\"hidden\" value=\"1\">\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-8 col-sm-9 col-md-9\">\n\t\t\t\t\t By clicking <strong class=\"label label-primary\">Register</strong>, you agree to the <a href=\"#\" data-toggle=\"modal\" data-target=\"#t_and_c_m\">Terms and Conditions</a> set out by this site, including our Cookie Use.\n\t\t\t\t</div>\n\t\t\t</div>-->\n\n<!--<div class=\"row\">\n\t<div class=\"col-md-6\">\n    <div class=\"form-group\">\n        <label>Upload Profile Pic</label>\n        <div class=\"input-group\">\n            <span class=\"input-group-btn\">\n                <span class=\"btn btn-default btn-file\">\n                    Browse… <input type=\"file\" id=\"imgInp\" (change)=\"upload($event,profilepic,progress)\" #profilepic>\n                </span>\n            </span>\n            <input type=\"text\" class=\"form-control\" >\n       \n</div>\n</div>\n\t</div>\n</div>-->\n\n<!--<div class=\"row\">\n\t<div>\n      <progress value=\"0\" max=\"100\" #progress>\n</progress>\n</div>\n</div>-->\n\t\t\t\n\t\t\t\n\t\t\t<!--<hr class=\"colorgraph\">-->\n\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t<div *ngIf=\"userForm.valid\" class=\"col-xs-12 col-md-12\"><button type=\"submit\" value=\"Register\" class=\"btn btn-primary btn-block btn-md\" tabindex=\"7\" >Register </button></div>\n\t\t\t\t<div *ngIf=\"!userForm.valid\" class=\"col-xs-12 col-md-12\"><button type=\"submit\" value=\"Register\" class=\"btn btn-primary btn-block btn-md\" tabindex=\"7\" disabled >Register</button></div><br><br><br>\n\t\t\t\t\n\t\t\t\t<!--<div class=\"col-xs-12 col-md-12\"><button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"navigate()\"><span class=\"glyphicon glyphicon-arrow-left\"></span>Back to login</button></div>-->\n\t\t\t\t\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<flash-messages></flash-messages>\n\t\t\t</div>\n      \n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    \n            \n    <div id=\"signupbox\" style=\" margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">Update</div>\n                <!-- <div style=\"float:right; font-size: 85%; position: relative; top:-10px\"><a id=\"signinlink\" href=\"/accounts/login/\">Sign In</a></div> -->\n            </div>  \n            <div class=\"panel-body\" >\n\n\n                            \n\n                    <form  class=\"form-horizontal\" \n                    [formGroup]=\"updateForm\"\n                    (ngSubmit)=\"updateHut()\" >\n\n\n                        <div id=\"div_id_username\" class=\"form-group required\">\n                            <label for=\"id_username\" class=\"control-label col-md-4  requiredField\">Unit: <span class=\"asteriskField\">*</span> </label>\n                            <div class=\"controls col-md-8 \">\n                                <input class=\"input-md  textinput textInput form-control\" disabled [value]=\"hut.unit\" maxlength=\"30\" name=\"unit\" placeholder=\"Choose your hut unit\" style=\"margin-bottom: 10px\" type=\"text\" />\n                            </div>\n                        </div>\n                        <div id=\"div_id_email\" class=\"form-group required\">\n                            <label for=\"id_email\" class=\"control-label col-md-4  requiredField\">Name: <span class=\"asteriskField\">*</span> </label>\n                            <div class=\"controls col-md-8 \">\n                                <input class=\"input-md emailinput form-control\" [value]=\"hut.name\" name=\"name\" placeholder=\"Your hut name\" style=\"margin-bottom: 10px\" type=\"text\" formControlName=\"name\" />\n                            </div>     \n                        </div>\n                        <div id=\"div_id_password1\" class=\"form-group required\">\n                            <label for=\"id_password1\" class=\"control-label col-md-4  requiredField\">Rooms: <span class=\"asteriskField\">*</span> </label>\n                            <div class=\"controls col-md-8 \"> \n                                <input type=\"number\" min=\"1\" max=\"5\" class=\"input-md textinput textInput form-control\" [value]=\"hut.rooms\" name=\"rooms\" placeholder=\"Create a password\" style=\"margin-bottom: 10px\" formControlName=\"rooms\" />\n                            </div>\n                        </div>\n                        <div id=\"div_id_password2\" class=\"form-group required\">\n                             <label for=\"id_password2\" class=\"control-label col-md-4  requiredField\"> Max. Persons Allowed<span class=\"asteriskField\">*</span> </label>\n                             <div class=\"controls col-md-8 \">\n                                <input class=\"input-md textinput textInput form-control\" [value]=\"hut.maxPersonAllowed\" name=\"maxPersonAllowed\" placeholder=\"Confirm your password\" style=\"margin-bottom: 10px\" type=\"text\" formControlName=\"maxPersonAllowed\" />\n                            </div>\n                        </div>\n                        <div id=\"div_id_name\" class=\"form-group required\"> \n                            <label for=\"id_name\" class=\"control-label col-md-4  requiredField\"> Location: <span class=\"asteriskField\">*</span> </label> \n                            <div class=\"controls col-md-8 \"> \n                                <input class=\"input-md textinput textInput form-control\" [value]=\"hut.location\" name=\"location\" placeholder=\"Your Frist name and Last name\" style=\"margin-bottom: 10px\" type=\"text\" formControlName=\"location\"/>\n                            </div>\n                        </div>\n                      \n                        <div id=\"div_id_company\" class=\"form-group required\"> \n                            <label for=\"id_company\" class=\"control-label col-md-4  requiredField\"> Rent<span class=\"asteriskField\">*</span> </label>\n                            <div class=\"controls col-md-8 \"> \n                                 <input class=\"input-md textinput textInput form-control\" [value]=\"hut.rent\" name=\"rent\" placeholder=\"your company name\" style=\"margin-bottom: 10px\" type=\"number\" formControlName=\"rent\"/>\n                            </div>\n                        </div> \n                        <div id=\"div_id_catagory\" class=\"form-group required\">\n                            <label for=\"id_catagory\" class=\"control-label col-md-4  requiredField\"> Description<span class=\"asteriskField\">*</span> </label>\n                            <div class=\"controls col-md-8 \"> \n                                 <input class=\"input-md textinput textInput form-control\" [value]=\"hut.description\" name=\"description\" placeholder=\"skills catagory\" style=\"margin-bottom: 10px\" type=\"text\" formControlName=\"description\"/>\n                            </div>\n                        </div> \n\n                        <div class=\"form-group\"> \n                            <div class=\"aab controls col-md-4 \"></div>\n                            <div class=\"controls col-md-8 \">\n                                 <input type=\"submit\" value=\"Update\" class=\"btn btn btn-primary\" id=\"button-id-signup\" />\n                            </div>\n                        </div> \n                            \n                    </form>\n                    <flash-messages></flash-messages>\n                    \n\n                \n            </div>\n        </div>\n    </div> \n</div>\n    \n<br>\n\n<!-- <div class=\"row\">\n\n            <div class=\"col-lg-12\">\n                <h3 class=\"page-header\">Images</h3>\n            </div>\n\n            <div class=\"col-sm-3 col-xs-6\" *ngFor=\"let images of imgURI; let i=index\">\n                <a>\n                    <img class=\"img-responsive portfolio-item\" [src]=\"'data:image/jpeg;base64,'+images.base64\" alt=\"\">\n                </a>\n                <button class=\"btn btn-primary btn-xs\" (click)=\"deleteImg(images.imgPath)\">Delete</button>\n            </div>\n\n\n        </div> -->\n        <br><br><br><br><br><br>"

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(421);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.loggedIn();
    }
    AuthService.prototype.registerUser = function (user) {
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        // this.setCookie('token', token);
        // this.setCookie('user', JSON.stringify(user))
        console.log(token, user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.User = user;
    };
    //   setCookie(cname,token) {
    //     document.cookie = cname + "=" + token + ";";
    // }
    //  getCookie(cname) {
    //     var name = cname + "=";
    //     var decodedCookie = decodeURIComponent(document.cookie);
    //     var ca = decodedCookie.split(';');
    //     for(var i = 0; i < ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }
    // deleteCookie(){
    //   document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // }
    AuthService.prototype.loggedIn = function () {
        // console.log(tokenNotExpired());
        this.tokenNotExpired = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
        console.log(true);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
        // var token = localStorage.getItem('token');
        // console.log(
        //   this.jwtHelper.decodeToken(token),
        //   this.jwtHelper.getTokenExpirationDate(token),
        //   this.jwtHelper.isTokenExpired(token)
        // );
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.User = null;
        this.tokenNotExpired = false;
        localStorage.clear();
    };
    AuthService.prototype.getUsername = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        // console.log(user.fname)
        return user.fname;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=E:/projects/Hut Booking App/angular-src/src/auth.service.js.map

/***/ })

},[751]);
//# sourceMappingURL=main.bundle.map