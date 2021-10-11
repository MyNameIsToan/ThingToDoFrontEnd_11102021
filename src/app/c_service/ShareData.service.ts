import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
SharedID : string;
SharedContent : string ;
constructor() {
  this.SharedID = '';
  this.SharedContent = '';
}

}
