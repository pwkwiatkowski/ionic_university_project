import { VehiclesService } from './../services/vehicles.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  vehicles = [];

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  constructor(private vehiService: VehiclesService) {}

  ngOnInit()  {
    this.loadVehicles();
    this.getVehicles();
  }

  loadVehicles(loadMore = false, event?) {
 
    this.vehiService.getVehicles().subscribe(res => {
      this.vehicles = [...this.vehicles, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
  }

  getVehicles(): void {
    this.vehiService.getVehicles()
      .subscribe(vehicles => {
        this.vehicles = vehicles; console.log(this.vehicles);
      });
  }

  onSearchChange(e) {
    let value = e.detail.value;
 
    if (value == '') {
      this.loadVehicles();
      return;
    }
 
    this.vehiService.findVehicle(value).subscribe(res => {
      this.vehicles = [res];
    }, err => {
      this.vehicles = [];
    });
  }

}
