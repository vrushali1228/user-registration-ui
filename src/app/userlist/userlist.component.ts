import { Component, OnInit } from '@angular/core';
interface Country {
  name: string;
  mobileNo: Number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    mobileNo:664064198
  },
  {
    name: 'Canada',
    mobileNo:966545555
  },
  {
    name: 'United States',
    mobileNo:64255511
  }
];
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  countries = COUNTRIES;

  constructor() { }

  ngOnInit(): void {
  }

}
