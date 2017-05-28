import {Pipe, PipeTransform} from '@angular/core';
import {PoiService} from './poi.service';
import {City} from '../entities/poi';

@Pipe({
  name: 'printCity'
})
export class PrintCityPipe implements PipeTransform {

  allCities: Map<string, City> = new Map<string, City>();

  constructor(private poiService: PoiService) {
    poiService.getAllCities().subscribe(
        data => {
          data.forEach((data2) => {
            this.allCities.set(data2.id, data2);
          });
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
  }

  transform(value: any, args?: any): any {
    if (this.allCities.size === 0) {
      return null;
    }

    const city = this.allCities.get(value);
    if (city != null) {
      return city.name;
    }

  }

}
