import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {HutsService} from '../../services/huts.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup;
  hut: any;
  imgURI: Array<any> = [];
  id: any

  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder, private hutService: HutsService,public router: Router, private flashMessages: FlashMessagesService) {

    this.route.queryParams.subscribe((params: any) =>{
      console.log('query params',params);
      this.hut = params;

      this.route.queryParams.subscribe((params: any)=>{
        this.id = params['id']
        this.hutService.getImages(params['id']).subscribe(images=>{
        console.log(images.base64)
        this.imgURI = images.base64;
      })
    }) 

      this.updateForm= this._formBuilder.group({ 
     name:[params['name'],Validators.required],
     rooms:[params['rooms'],Validators.required],
     maxPersonAllowed:[params['maxPersonAllowed'],Validators.required],
     rent:[params['rent'],Validators.required],
     location: [params['location'], Validators.required],
     description:[params['description'],Validators.required]
    })
    })
  }

  ngOnInit() {
  }

  updateHut(){
    console.log('form',this.updateForm.value);
    this.hutService.updateHut(this.updateForm.value, this.hut.id).subscribe(data =>{
      console.log(data.msg);
      this.flashMessages.show(data.msg,{cssClass: 'alert-success', timeout:3000});
      // setTimeout(()=> {
      //   this.router.navigate(['/home'])
      // }, 2000);
    })
  }

  deleteImg(imgPath){
    this.hutService.deleteImg(imgPath, this.id).subscribe(res =>{
      console.log('res', res)
    });
  }

}
