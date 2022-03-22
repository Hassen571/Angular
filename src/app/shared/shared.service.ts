import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   message : string;
   items : any = JSON.parse(localStorage.getItem('list') || '[]' );
   arr : any =[];
  constructor() { }
  setMessage(data){
    this.message=data;
  }
  getMessage(){
    return this.message;
  }
  setItems(obj: any) {
    this.items = this.items.concat(obj);
    localStorage.setItem('list', JSON.stringify(this.items));
  }
  getItems() {
    return this.items;
    
  }
  delateItems(id : number){
    this.items = this.items.filter(obj => obj?.id !== id);
    localStorage.setItem('list', JSON.stringify(this.items));
  }
}
