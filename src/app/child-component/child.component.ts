import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html' 
})
export class ChildComponent implements OnInit {
    @Input() childMessage: string | undefined;
    
    constructor(){}
    ngOnInit () {
        console.log('===', this.childMessage)
    }
}