import {Component, OnInit, ViewChild, NgZone, OnDestroy} from '@angular/core';
import {MapService} from "../../services/map.service";
import {ApiService} from "../../services/api.service";
import {ModalDirective} from "ng2-bootstrap";

declare const ymaps

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  @ViewChild('userDetailsModal') private userDetailsModal:ModalDirective
  selectedUser:any={}

  constructor(private mapService: MapService, private apiService: ApiService, private zone: NgZone) {}

  ngOnInit() {

    ymaps.ready(() => {
      this.zone.run(() => {
        this.mapService.init()
        this.apiService.getUsers()
      })
    })

  }

  ngOnDestroy() {
    this.mapService.map.destroy()
  }

  openModal(user:any) {
    this.selectedUser = user
    this.userDetailsModal.show()
  }

  isType(obj:any, typeString:string) {
    return typeof(obj) === typeString
  }

}
