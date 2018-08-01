import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  locations: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    let areaId = this.navParams.get("areaId");
    
    this.getLocations(areaId);
  }

  getLocations(areaId){

    console.log(areaId)

    firebase.firestore().collection("locations")
    .where("inspectionableAreaId", "==", areaId)
    .get().then((querySnapshot) => {
      this.locations = querySnapshot.docs;
      console.log(this.locations)
    })

  }

}
