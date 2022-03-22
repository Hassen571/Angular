import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-favoritelist',
  templateUrl: './favoritelist.component.html',
  styleUrls: ['./favoritelist.component.css']
})
export class FavoritelistComponent implements OnInit {
  items : any ;
  message : any;
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.message=this.shared.getMessage();
    this.items=this.shared.getItems();
  }
  Delete(id){
    this.shared.delateItems(id);
    this.items=this.shared.getItems();
    
  }

}
