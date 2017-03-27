var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input } from '@angular/core';
import { Http } from '@angular/http';
export let ngInclude = class ngInclude {
    constructor(element, http) {
        this.element = element;
        this.http = http;
    }
    parseTemplate(res) {
        if (this.type == 'template') {
            this.element.nativeElement.innerHTML = res.text();
        }
        else if (this.type == 'style') {
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.type = 'text/css';
            style.appendChild(document.createTextNode(res.text()));
            head.appendChild(style);
        }
    }
    handleTempalteError(err) {
    }
    ngOnInit() {
        this.
            http.
            get(this.templateUrl).
            map(res => this.parseTemplate(res)).
            catch(this.handleTempalteError.bind(this)).subscribe(res => {
            console.log(res);
        });
    }
};
__decorate([
    Input('src'), 
    __metadata('design:type', String)
], ngInclude.prototype, "templateUrl", void 0);
__decorate([
    Input('type'), 
    __metadata('design:type', String)
], ngInclude.prototype, "type", void 0);
ngInclude = __decorate([
    Directive({ selector: 'ngInclude' }), 
    __metadata('design:paramtypes', [ElementRef, Http])
], ngInclude);
//# sourceMappingURL=extension.directive.js.map