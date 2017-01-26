import { Injectable } from '@angular/core';
import {Placemark} from '../models/placemark';
declare const ymaps;



@Injectable()
export class MapService {
  map:any
  constructor() { }

  init() {

      this.map = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9
      }, {
        searchControlProvider: 'yandex#search'
      })

  }

  addPlacemark(placemark: Placemark) {
    this.map.geoObjects.add(placemark)
    this.map.setBounds(this.map.geoObjects.getBounds())
  }
  removePlacemark(placemark: Placemark) {
    this.map.geoObjects.remove(placemark)
  }

}
