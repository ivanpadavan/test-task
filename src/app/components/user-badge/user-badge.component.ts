import {Component, Input, OnInit, OnDestroy, OnChanges} from '@angular/core';
import {MapService} from "../../services/map.service";
import {Placemark} from "../../models/placemark";

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit, OnDestroy {
  @Input() user;
  placemark
  constructor(private mapService: MapService) { }

  ngOnInit() {
      console.log(JSON.stringify(this.user))
      this.placemark = new Placemark([parseFloat(this.user.address.geo.lat), parseFloat(this.user.address.geo.lng)], this.user.name, this.user.email)
      this.mapService.addPlacemark(this.placemark)
  }
  ngOnDestroy() {
    if (this.placemark) {
      this.mapService.removePlacemark(this.placemark)
    }
  }

}
