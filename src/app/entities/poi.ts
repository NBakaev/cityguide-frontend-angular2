/**
 * Created by ya_000 on 4/11/2017.
 */
export class RatedObject {
  rating: number;
}

export class Poi extends RatedObject {
  id: string;
  name: string;
  cityId: string;
  content: Content;
  description: string;
  location: PoiLocation;
  externalResourceLink: ExternalResourceLink;
}

export class City extends RatedObject {
  id: string;
  name: string;
  content: Content;
  description: string;
  location: PoiLocation;
  pois: number;
  approximateRadius: number;
  lastUpdate: Date;
}

export class Content {
  imageUrl: string;
  imageUrls: string [] = [];
  videoUrl: string;
  audio: string;
  // videoUrls: string [] = [];
  // audioUrls: string [] = [];
}

export class ExternalResourceLink {
  googlePlaceId: string;
}

