import { Component, OnInit } from '@angular/core';
import {HutsService} from '../../services/huts.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

@Component({
  selector: 'app-addhuts',
  templateUrl: './addhuts.component.html',
  styleUrls: ['./addhuts.component.css']
})
export class AddhutsComponent implements OnInit {

  addHutForm: FormGroup;
  mapMarker;
  name:String;
  images: Array<any> = [];
  upload:boolean = false;

  zoom: number = 15;
  lat: number = 24.860170;
  lng: number = 66.863662;
  spinner: boolean = false;

  constructor(private addhut: HutsService, private route: Router, private flashMessages: FlashMessagesService,private _formBuilder:FormBuilder) {
    this.addHutForm= this._formBuilder.group({ 
     name:['',Validators.required],
     unit:['',Validators.required],
     rooms:['',Validators.required],
     maxPersonAllowed:['',Validators.required],
     address:['',Validators.required],
     location:['',Validators.required],
     rent:['',Validators.required],
     description:['',Validators.required]
    })
  }

  ngOnInit() {
  }

  clickedMarker(marker: marker, index:number){
    console.log('clicked Marker', marker.name + 'at index' + index )
  }

  mapClicked($event:any){
    if(!this.mapMarker){
      var newMarker={
      name: this.name,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }
    this.mapMarker =newMarker ;
    console.log(this.mapMarker);
  }
  
  else{
    // console.log('you already have a marker')
    alert('you already have a marker');
  }
    
  }

  markerDragEnd(marker: any, $event: any){
    // console.log('dragEnd', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    }
    this.mapMarker = updMarker;
    console.log('updated',this.mapMarker);
    
  }

  addHut(){
    // console.log(this.addHutForm.value);
    this.spinner = true;
    this.addhut.addHut(this.addHutForm.value, this.mapMarker).subscribe(data=>{
      if(data.success){
        this.addhut.imgPaths = [];
        setTimeout(()=> {
          this.spinner = false;
        this.flashMessages.show(data.msg,{cssClass: 'alert-success', timeout:3000});         
        }, 2500);
      }
      else{
        this.flashMessages.show(data.msg,{cssClass: 'alert-danger', timeout: 3000})        
      }
    })
  }

  // upload(progress,img){
  //       // this.addhut.storeImage(progress,img.files[0])
  //       this.addhut.uploadImage(this.imagesToUpload);
  // }

  onChange(images){
    // console.log('change',images.target.files);
    // this.imagesToUpload = <Array<any>>images.target.files;
    this.upload = true;
    this.addhut.uploadImage(images.target.files);
    // console.log(images.target.files[0]['name']);
  }

//   initMap(){
//     var uluru = {lat: 24.860170, lng: 66.863662};

//         setTimeout(()=> {
//           var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 15,
//           center: uluru, 
//         });

//         map.addListener('click', (event)=> {

//           if(!this.mapMarker){
//             var newMarker={
//             name: this.name,
//             lat: event.latLng.lat(),
//             lng: event.latLng.lng(),
//             draggable: true
//           }
//             this.mapMarker =newMarker ;
//             var marker = new google.maps.Marker({    
//     position: event.latLng,    
//     map: map,
//     draggable:true    
//   });   
//   marker.addListener('dragend', (event)=> {
//           var updMarker = {
//             lat: event.latLng.lat(),
//             lng: event.latLng.lng(),
//             draggable: true
//     }       
//     this.mapMarker = updMarker;
//     console.log(this.mapMarker)
    
//   });
//       }
  
//   else{
//     // console.log('you already have a marker')
//     alert('you already have a marker');
//   }

  
    
            
// });

   
//         }, 2000);
//   }


}

interface marker{
  name: string,
  lat: number,
  lng: number,
  draggable: boolean
}