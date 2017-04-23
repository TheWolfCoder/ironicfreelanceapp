"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Freelance Dashboard";
        this.documents = [
            {
                title: "My First Doc",
                description: "afdasdf l;akdjas;fjd",
                file_url: "http://google.com",
                updated_at: '11/11/16',
                image_url: "https://cdn.pixabay.com/photo/2014/09/24/14/29/mac-459196_960_720.jpg",
            },
            {
                title: "My Second Doc",
                description: "afdasdf l;akdjas;fjd",
                file_url: "http://google.com",
                updated_at: '11/11/16',
                image_url: "https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_960_720.jpg",
            },
            {
                title: "My Last Doc",
                description: "afdasdf l;akdjas;fjd",
                file_url: "http://google.com",
                updated_at: '11/11/16',
                image_url: "https://cdn.pixabay.com/photo/2015/01/01/23/04/mouse-586244_960_720.jpg",
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map