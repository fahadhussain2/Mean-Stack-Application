import { Component, OnInit } from '@angular/core';
import {HutsService} from '../../services/huts.service';
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-myhuts',
  templateUrl: './myhuts.component.html',
  styleUrls: ['./myhuts.component.css']
})
export class MyhutsComponent implements OnInit {

  myHuts: Array<any>;
  imgURI: Array<any> = [];
  spinner: boolean = true;

  constructor(private router: ActivatedRoute, private hutService: HutsService, private route: Router, public flashMessages: FlashMessagesService) {
    hutService.getUserHuts().subscribe(huts => {
        console.log('my huts', huts.myHut)
        if(huts.success){
          this.myHuts = huts.myHut;
          this.spinner = false;
          this.flashMessages.show('you have posted ' + this.myHuts.length + ' hut' , {cssClass: 'alert-success', timeout:3000 });
        }
        else{
          this.flashMessages.show(huts.msg , {cssClass: 'alert-danger', timeout:3000 });          
        }
    })
    this.router.queryParams.subscribe((params: any)=>{
      this.hutService.getImages(params['id']).subscribe(images=>{
        console.log(images.base64)
        this.imgURI = images.base64;
      })
    })    
  }

  ngOnInit() {
  }


    delete(hut, index){
    this.hutService.deleteHut(hut).subscribe(x =>{
      console.log('fahad',x)
    });
    this.myHuts.splice(index, 1);
  }

  update(hut, index){
    let dates = hut.bookedDates.toString();
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

    this.route.navigate(['update', index+1],navigationExtras)
  }

}
