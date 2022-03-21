import { Component, OnInit } from '@angular/core';
import imagesData from '../../assets/images.json';
import {SharedService } from '../shared/shared.service';

interface Image {
  id: Number;
  photo: String;
  author: String;
  text: String;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  searchedKeyword: string;
  im : Image;
  LikeButtonClick(image :Image){
    this.im =image;
    this.shared.setMessage(this.im);
  }
  message = "like this";
  constructor(private shared:SharedService) { }
  ngOnInit(): void {

  }
  likes :number =0;


   searchText:any;
  images: Image[] = imagesData;


}
