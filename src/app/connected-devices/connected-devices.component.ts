import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-connected-devices',
  templateUrl: './connected-devices.component.html',
  styleUrls: ['./connected-devices.component.less']
})
export class ConnectedDevicesComponent implements OnInit {

  devices:any;

  constructor() {
    this.devices = [{
      id: 0,
      name: "eee"
    },
    {
      id: 1,
      name: "aaa"
    }];


  }

  ngOnInit(): void {
  }


}
