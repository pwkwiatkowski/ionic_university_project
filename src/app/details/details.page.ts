import { VehiclesService } from './../services/vehicles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  details: any;

  slideOpts = {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    }
  };

  constructor(private vehiService: VehiclesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.vehiService.getVehiDetails(index).subscribe(details => {
      console.log(details);
      this.details = details;
    });
  }

  rok5LatTemu = new Date().getFullYear() - 5;
  wysokiPrzegieg = 50000;

  linki = [
    '../../assets/opel1.jpg',
    '../../assets/opel2.jpg',
    '../../assets/opel3.jpg'
  ]

}
