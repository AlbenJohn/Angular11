import { Component, OnInit } from '@angular/core';
import { SidemneutoggleService } from '../services/sidemneutoggle.service';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent implements OnInit {

  sidetoggle:boolean= true;
  constructor(public sidetoggleservice:SidemneutoggleService) { }

  ngOnInit(): void {
      this.sidetoggleservice.toggleMenu.subscribe(data=>{
        this.sidetoggle = data;
      })
  }

}
