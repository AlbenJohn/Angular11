import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainscreenRoutingModule } from './mainscreen-routing.module';
import { MainscreenComponent } from './mainscreen.component';
import { SidenavbarModule } from '../sidenavbar/sidenavbar.module';
import { CenterpaneModule } from '../centerpane/centerpane.module';
import {NavbarModule} from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module'

@NgModule({
  declarations: [MainscreenComponent],
  imports: [
    CommonModule,
    MainscreenRoutingModule,
    SidenavbarModule,
    CenterpaneModule,
    NavbarModule,
    FooterModule
  ]
})
export class MainscreenModule { }
