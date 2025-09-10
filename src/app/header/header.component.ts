import { Component,Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
    @Input() childtitle :string = '';
    
    @Input() D1 :any =[];

    @Output() customeven = new EventEmitter();
    
    childmessage = "Data From child to parent "

    PassToParent(){
      this.customeven.emit(this.childmessage)
    }
// Day-25 {{ Child ==>  Parent Communication }} [[ using #TempRefVariable]]  ((Child  ==> Parent ))
    TempData :string =" this is Template Reference Variable Data "
    // Day-26 @view-child
    viewchild_data:string = "this is view child data"

}
