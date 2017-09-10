import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {HutModel} from '../Models/hutModel';

@Injectable()
export class HutsService {
  imgPaths: Array<String> = [];
  hash: Array<any[]>
  data;
  newHut:any={
      email: String,
      name: String,
      unit: String,
      rooms: Number,
      maxPersonAllowed: Number,
      address: String,
      location: String,
      latitude: Number,
      longitude: Number,
      rent: Number,
      description: String,
      imgPath:Array,
      bookedDates: Array,
  }
  constructor(private http:Http) {
    // console.log('local',JSON.parse(localStorage.getItem('user')));
  }

  addHut(hutDetails, locObj){
    // console.log('location obj', locObj);
    // console.log('location',hutDetails.location)
    let user = JSON.parse(localStorage.getItem('user'));

    this.newHut = {
      email: user.email,
      name: hutDetails.name,
      unit: hutDetails.unit,
      rooms: hutDetails.rooms,
      maxPersonAllowed: hutDetails.maxPersonAllowed,
      address: hutDetails.address,
      location: hutDetails.location,
      latitude: locObj.lat,
      longitude: locObj.lng,
      rent: hutDetails.rent,
      description: hutDetails.description,
      imgPath:this.imgPaths,
      bookedDates: [],
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('post/addhut', this.newHut, {headers: headers})
    .map(res => res.json())
  }

  fetchHuts(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('get/fetchhuts', {headers: headers})
    .map(res => res.json())
  }

  // getdata(){
  //   // let headers = new Headers();
  //   // headers.append('Content-Type', 'application/json');
  //   return this.http.get('http://localhost:3000/get/fetchhuts').map(res => res.json()).subscribe(data=>{
  //     this.data = data;
  //   });
  // }

//   storeImage(progress,img){

//   var imgFile = img;
//         var storageRef= firebase.storage().ref('images/' + imgFile.name);
//         var task= storageRef.put(imgFile);

//         task.on('state_changed',
//         (snapshot)=>{
//         progress.value = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
//         if(progress.value == 100){
//           console.log('hurrah');
//            const storageRef =  firebase.storage().ref().child('images/' + imgFile.name);
//            storageRef.getDownloadURL().then(url => this.imgUrl.push(url));
//         }
//         },
//         (err) =>{console.log(err)},
//         )

     
// }

uploadImage(image){
  // console.log(image[0]);
  let formData: any = new FormData();
  // let images: Array<any> = imagesArray
  formData.append('uploads', image[0]);
  // console.log('data', formData.get('uploads'));
// console.log('dataa',formData.get('uploads'))
  
  let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post('uploads/hutimages', formData)
    .map(res => res.json()).subscribe(imgData =>{
      this.imgPaths.push(imgData.path)
    });
}


bookReservation(hutInfo){
  // console.log('aaa',hutInfo)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('post/book', hutInfo, {headers: headers})
    .map(res => res.json());
  }

getUserHuts(){
    let userinfo = JSON.parse(localStorage.getItem('user'));
    let user = {
      email: userinfo.email
    };
    // console.log(email)
   let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('get/getuserhuts/'+user.email, {headers: headers})
    .map(res => res.json());
}

deleteHut(hutInfo){
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('delete/' + hutInfo.id, {headers: headers})
    .map(res => res.json());
}

getImages(id){
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('get/images/' + id, {headers: headers})
    .map(res => res.json());
}

updateHut(updatedData,id){
  console.log('id', id)
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('update/hut/'+id,updatedData, {headers: headers})
    .map(res => res.json());
}

submitReviews(message, id){
  var reviews = {
    message: message,
    id: id
  }
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('post/reviews',reviews, {headers: headers})
    .map(res => res.json());
}

getReviews(id){
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('get/fetchreviews/'+id, {headers: headers})
    .map(res => res.json());
}
deleteImg(imgPath, id){
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('delete/imgUpdate/uploads/'+ imgPath + '/' + id, {headers: headers})
    .map(res => res.json());
}

searchByName(name, filterBy){
  let filter = {
    name: name,
    filterby: filterBy
  }
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('get/search', filter, {headers: headers})
    .map(res => res.json());
}
}



