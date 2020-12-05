import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterpaneComponent } from './centerpane.component';



@NgModule({
  declarations: [CenterpaneComponent],
  imports: [
    CommonModule
  ],
  exports:[CenterpaneComponent]
})
export class CenterpaneModule { }
