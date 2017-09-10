import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {HutsService} from '../../services/huts.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-hutdetails',
  templateUrl: './hutdetails.component.html',
  styleUrls: ['./hutdetails.component.css']
})
export class HutdetailsComponent implements OnInit {

    id:string;
  hutObj: any;
  imgURI: Array<any> = [];
  reservedDates: Array<any>;
  flag: boolean = true;
  constructor(private route: ActivatedRoute, private hutService: HutsService) {

    this.route.params.subscribe((params: Params)=>{
      // thaais.id = params['id'];
      
      
    });

    // let params = this.route.snapshot.queryParams[0];
    // console.log('params', Params);
    this.route.queryParams.subscribe((params:any) =>{
      this.hutObj = params;
      console.log('fahad',params || 0);
      this.id = params['id'];
      setTimeout(()=> {
        this.hutService.getImages(params['id']).subscribe(images=>{
        console.log(images.base64)
        this.imgURI = images.base64;
      })
      }, 3000);
      
      if(params['bookedDates']){
        // console.log('booking exist');
        let dateSplit = params['bookedDates'].split(",")
        this.reservedDates = dateSplit;
      }
      
      // console.log('yayy',this.reservedDates)

// setTimeout(()=> {
//   console.log('images',this.imgURI);
// }, 4000);
      
    })
    
    
  }

  ngOnInit() {
  }

   onChange(event){
    if(this.reservedDates){
      this.reservedDates.forEach(reserveDate => {
      if(reserveDate === event.target.value){
        this.flag = false
        console.log('reserved')
      }
      else{
        this.flag = true;
        console.log('not reserved')        
      }
      
    });
    }
    
  }

  bookReservation(date){

    if(date.value){
      console.log('yes')
    }
    let bookingDetails = {
      id: this.id,
      date: date.value,
    }

    console.log('book',date.value, bookingDetails)
    this.hutService.bookReservation(bookingDetails).subscribe(data =>{
      console.log(data);
    })
    console.log(this.hutObj._id)
  }

  // fetchHuts(){
  //   this.hutService.fetchHuts().subscribe(data => {
  //     data.hut.forEach(hut => {
  //       if(hut._id === this.id){
  //         console.log(hut);
  //         this.hutObj = hut;
  //       }
  //     });
  //   })
  // }

}
