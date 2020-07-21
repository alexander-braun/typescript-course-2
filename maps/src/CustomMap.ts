import { Loader, LoaderOptions } from 'google-maps';
import {} from 'google-maps';
import { API_KEY } from '../env';

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private loader: Loader;
  private customMap:
    | google.maps.Map<HTMLElement>
    | PromiseLike<google.maps.Map<HTMLElement>>;
  constructor() {
    this.loader = new Loader(API_KEY, {});
    this.customMap = this.loader.load().then(function (google) {
      return new google.maps.Map(document.getElementById('map')!, {
        center: { lat: 10, lng: 10 },
        zoom: 2,
      });
    });
  }

  async addMarker(mappable: Mappable): Promise<void> {
    const map = await this.customMap;
    const marker = new google.maps.Marker({
      map: map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there!',
      });
      infoWindow.open(map, marker);
    });
  }
}
