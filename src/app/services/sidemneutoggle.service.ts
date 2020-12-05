import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidemneutoggleService {
      toggleMenu = new BehaviorSubject<boolean>(true)

  constructor() {

   }

   settogglemenu(v:boolean){
     this.toggleMenu.next(v)
   }
}
