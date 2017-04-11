import {Component, OnInit} from '@angular/core';
import {PoiService} from '../poi.service';
import {Poi} from "Entities";

@Component({
  selector: 'app-poi-all',
  templateUrl: './pois.component.html',
  styleUrls: ['./pois.component.css'],
  providers: [PoiService]
})
export class NewcomponentComponent implements OnInit {
  allPois: Array<Poi> = [];

  constructor(poiService: PoiService) {

    poiService.getAllPoi()
      .subscribe(
        pois => this.allPois = pois,
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );

  }

  ngOnInit() {

  }

}
