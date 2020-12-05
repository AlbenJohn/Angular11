import { Component, OnInit } from '@angular/core';
import { SidemneutoggleService } from '../services/sidemneutoggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menutoggel:boolean = true;
  constructor(public sidemenutoggle:SidemneutoggleService) { }

  ngOnInit(): void {
  }
  sidemenuClicked()
  {
    this.menutoggel = !this.menutoggel;
      this.sidemenutoggle.settogglemenu(this.menutoggel)
  }
}
