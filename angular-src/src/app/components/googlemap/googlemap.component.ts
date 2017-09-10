import { Component, OnInit } from '@angular/core';
import {HutsService} from '../../services/huts.service';
import {HutModel} from '../../Models/hutModel';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  huts:Array<HutModel>;
  reviews: Array<any>;
  zoom: number = 15;
  lat: number = 24.860170;
  lng: number = 66.863662;
  images: Array<any>;
  private map: any;
  locations:Array<any> = []
  public pac: any;
  spinner: boolean = true;

  constructor(private hutService: HutsService) {
    this.hutService.fetchHuts().subscribe(huts=>{
      console.log(huts)
      this.huts = huts.hut
    })

    setTimeout(()=> {
      this.spinner = false
    }, 3000);
  }

  ngOnInit() {
  }
  clickedMarker(id){
    // console.log('mapMarker')
    this.hutService.getReviews(id).subscribe(reviews =>{
      console.log(reviews);
      this.reviews = reviews.data;
      this.images = reviews.imgArray
    })
  }
  submitReview(message, id){
    // console.log('review submitted', message.value, id);
    this.hutService.submitReviews(message.value, id).subscribe(reviews =>{
      console.log(reviews)
      this.reviews.push(message.value)
    });
  }

}
