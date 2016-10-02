"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var base_url_services_1 = require("./base-url.services");
var authentication_services_1 = require("../authentication.services");
var CromProjectService = (function () {
    function CromProjectService(http, baseUrl, authService) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.authService = authService;
    }
    CromProjectService.prototype.getProjects = function (page) {
        var params = new http_1.URLSearchParams();
        params.set("page", page.toString());
        return this.http.get(this.baseUrl.createFullUrl("/api/v1/projects"), { search: params })
            .toPromise()
            .then(function (response) { return response.json().projectDetails.map(function (detail) { return detail.name; }); })
            .catch(CromProjectService.handleError);
    };
    CromProjectService.prototype.getProjectDetails = function (name) {
        var headers = this.authService.addAuthHeaders(new http_1.Headers());
        return this.http.get(this.baseUrl.createFullUrl("/api/v1/project/" + name), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(CromProjectService.handleError);
    };
    CromProjectService.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CromProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, base_url_services_1.BaseUrlService, authentication_services_1.AuthenticationService])
    ], CromProjectService);
    return CromProjectService;
}());
exports.CromProjectService = CromProjectService;
var ProjectDescription = (function () {
    function ProjectDescription() {
    }
    return ProjectDescription;
}());
//# sourceMappingURL=crom-project.services.js.map