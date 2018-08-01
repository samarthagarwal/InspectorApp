import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  areas: any[] = [];

  constructor(public navCtrl: NavController) {
    this.get();
  }

  get(){

    firebase.firestore().collection("inspectableAreas").get().then((querySnapshot) => {
      console.log(querySnapshot)

      this.areas = querySnapshot.docs;

    })

  }

  gotoLocationPage(area) {
    this.navCtrl.push("LocationsPage", { areaId: area.id })
  }

  // save(){

  //   if(this.name.length > 0 && this.email.length > 3){

  //     firebase.firestore().collection("users").add({
  //       "name": this.name,
  //       "email": this.email
  //     }).then((docRef) => {
  //       console.log(docRef)
  //       this.get();
  //     }).catch((err) => {
  //       console.log(err)
  //     })

  //   } else {
  //     alert("Please enter correct information.");
  //   }

  // }

}
