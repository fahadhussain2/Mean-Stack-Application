import { Component, OnInit } from '@angular/core';
import {HutsService} from '../../services/huts.service';
import {HutModel} from '../../Models/hutModel';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router, NavigationExtras} from '@angular/router';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  huts: HutModel;
  filterBy : any = 'Filter By';
  photo = 'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg';
  searchString: string;

  constructor(private authService: AuthService, private getHuts: HutsService, private flashMessages: FlashMessagesService, private route: Router) {
    getHuts.fetchHuts().subscribe(data => {
      if(data.success){
        this.huts = data.hut;
        console.log('agaya data', data.hut)

      }
      else{
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger' , timeout:3000})
      }
    })
  }

  ngOnInit() {
  }

  navigate(hut,index){
    // console.log('shaka',hut);
    let images = hut.base64Img.toString();
    let dates = hut.bookedDates.toString();
        // console.log('stringify',dates);
    let navigationExtras: NavigationExtras = {                            // passing this object in query params
      queryParams:{
        id: hut.id,
        name: hut.name,
        unit: hut.unit,
        rooms: hut.rooms,
        maxPersonAllowed: hut.maxPersonAllowed,
        address: hut.address,
        location: hut.location,
        latitude: hut.latitude,
        longitude: hut.longitude,
        rent: hut.rent,
        description: hut.description,
        bookedDates: dates
      }

    }
    console.log(navigationExtras);
    this.route.navigate(['hutdetails', index+1], navigationExtras);
    // console.log('navigate', hut);

  }

  // check(){
  //   let a = {
  //     id: 'sssa',
  //     date: '12345',
  //     isBooke: true
  //   }
  //   this.getHuts.bookReservation(a)
  // }

  search(){
    console.log('asas', this.searchString);
    this.getHuts.searchByName(this.searchString, this.filterBy).subscribe(huts =>{
      if(huts.success){
        console.log('no err', huts)
        this.huts = huts.hut;
      }
      else{
        console.log('err', huts.msg);
        this.huts = huts.hut;
        this.flashMessages.show(huts.msg,{cssClass: 'alert-danger', timeout:4000});
      }
    })
  }

  changeName(filter){
    this.filterBy = filter;
  }

}
