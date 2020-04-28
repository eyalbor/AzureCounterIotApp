import { Component, OnInit } from '@angular/core';
import { Device } from "azure-iothub";
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Component({
  selector: 'app-connected-devices',
  templateUrl: './connected-devices.component.html',
  styleUrls: ['./connected-devices.component.less']
})
export class ConnectedDevicesComponent implements OnInit {
  //private readonly serverHost = "https://counterfunctions20200421143710.azurewebsites.net/api/";
  private readonly serverHost = " http://localhost:7071/api/";
  private iotDevices: Device[] = [];
  public devices = [];
      // {
    //   id: 0,
    //   name: "eee"
    // },
    // {
    //   id: 1,
    //   name: "aaa"
    // }

  constructor(private readonly http: HttpClient) {
    this.http.get<Device[]>(this.serverHost +"get-devices").subscribe(devicesStr => {
      console.log(devicesStr);
      for(let i=0; i < devicesStr.length; i++){
        this.devices.push({
          id: i,
          name: devicesStr[i]
        })
      }
    });
  }

  ngOnInit(): void {
    
  }

  plus() {
    console.log("plus")
  }

}
