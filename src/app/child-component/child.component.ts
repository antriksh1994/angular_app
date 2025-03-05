import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html' 
})
export class ChildComponent implements OnInit {
// <!-- parent to child comm starts -->
    @Input() childMessage: string | undefined;
    constructor(){}
    ngOnInit () {
        console.log('===', this.childMessage)
    }
// <!-- parent to child comm starts -->

// <!-- child to parent comm starts -->
    message = "This message is from child"
}