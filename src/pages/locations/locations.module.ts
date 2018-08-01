import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationsPage } from './locations';

@NgModule({
  declarations: [
    LocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationsPage),
  ],
})
export class LocationsPageModule {}
