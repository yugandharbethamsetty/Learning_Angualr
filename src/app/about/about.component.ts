import { Component ,OnInit} from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  {
  constructor(public tss :TestService){
    console.log(tss.SrMobiles)
  }
  additeminservice(){
    this.tss.SrMobiles.push("Redmi");
  }
 ngOnInit(): void {
   
  }
}
