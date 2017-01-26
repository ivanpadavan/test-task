/**
 * Created by user on 25.01.17.
 */
declare const ymaps;

export class Placemark {
  constructor(private coords: any[], private hintContent: string, baloonContent: string) {
    return new ymaps.Placemark(coords, { hintContent, baloonContent })
  }

}
