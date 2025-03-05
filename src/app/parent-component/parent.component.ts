import { Component } from "@angular/core";

@Component ({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent {
    parentMessage = "this message is from Parent"

    constructor() {}
}