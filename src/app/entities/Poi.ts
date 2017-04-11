/**
 * Created by ya_000 on 4/11/2017.
 */
declare module 'Entities' {
  export class Poi {
    id: string;
    name: string;
    imageUrl: string;
    cityId: string;
    videoUrl: string;
    description: string;
    location: PoiLocation;
  }

  export class City {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    location: PoiLocation;
  }
}
