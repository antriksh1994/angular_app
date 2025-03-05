import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { ChildComponent } from "../child-component/child.component";

@Component ({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent implements AfterViewInit {
// parent to child comm starts
    parentMessage = "this message is from Parent"
// parent to child comm ends
constructor(private cdRef: ChangeDetectorRef) {}

// child to parent comm starts
@ViewChild(ChildComponent) child: any
message: string | undefined;
ngAfterViewInit(): void {
    this.message = this.child.message
    this.cdRef.detectChanges();
}
// child to parent comm ends
}