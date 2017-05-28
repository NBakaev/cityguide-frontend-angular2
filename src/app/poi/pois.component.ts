import {Component, OnInit} from '@angular/core';
import {PoiService} from './poi.service';
import {Poi} from '../entities/poi';
import {Router} from '@angular/router';

@Component({
  selector: 'app-poi-all',
  templateUrl: './pois.component.html',
  styleUrls: ['./pois.component.less'],
})
export class PoisListComponent {
  allPois: Array<Poi> = [];

  constructor(private poiService: PoiService, private router: Router) {
    poiService.getAllPoi().subscribe(
      pois => this.allPois = pois,
      error => console.error('Error: ' + error),
      () => {}
    );
  }

  trackById(index, contact) {
    return contact.id;
  }

  addPoi() {
    const poi = new Poi();
    this.poiService.addPoi(poi).subscribe(x => {
      console.log(x);
      this.router.navigate(['poi', 'details', x.id]);
    });
  }

}
