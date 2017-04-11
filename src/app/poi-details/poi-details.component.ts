import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PoiService} from "../poi.service";
import {Poi} from "Entities";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-poi-details',
  templateUrl: './poi-details.component.html',
  styleUrls: ['./poi-details.component.css'],
  providers: [PoiService]
})
export class PoiDetailsComponent implements OnInit, OnDestroy {

  id: any;
  paramsSub: any;
  poi: Poi;
  editMode: boolean;
  mapUrlSrc: string;
  videoUrlIframeSrc: SafeResourceUrl;

  constructor(private activatedRoute: ActivatedRoute, private poiService: PoiService, private domSanitizer: DomSanitizer) {
  }

  getMapUrl() {
    if (!this.poi) {
      return;
    }
    this.mapUrlSrc = 'https://maps.google.com/maps/api/staticmap?center=' + this.poi.location.latitude + ',' + this.poi.location.longitude + '&zoom=15&size=400x200&sensor=false&markers=' + this.poi.location.latitude + ',' + this.poi.location.longitude + '&key=AIzaSyBiL8IeEDG_k2dOp3tLCIwgR1_uY-p4osA';
  }

  getVideoUrl() {
    if (!this.poi.videoUrl){
      return;
    }
    this.videoUrlIframeSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.poi.videoUrl.replace("/watch?v=", "/embed/"));
  }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.poiService.getPoiById(id).subscribe(
        response => {
          this.poi = response;
          this.getVideoUrl();
          this.getMapUrl();
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }


}
