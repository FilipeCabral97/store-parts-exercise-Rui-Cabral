import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Part } from 'src/app/part.model';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {

  name = undefined
  type = ""
  price = 0

  
  constructor(private router: Router) {

    const currentNav = this.router.getCurrentNavigation()

    console.log(this.router.getCurrentNavigation())
    if (currentNav!=null) {
      this.name = currentNav.extras.state?.itemName;
      this.type = currentNav.extras.state?.itemType;
      this.price = currentNav.extras.state?.itemPrice;
    }
   }

  ngOnInit(): void {
  }

}
