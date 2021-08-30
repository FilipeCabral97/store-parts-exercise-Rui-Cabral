import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Part } from 'src/app/part.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() part: Part = {
    name: "",
    type: "",
    price: 0
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goToComponentPart(): void {
    this.router.navigate(['part_id'], {
      state: {itemName: this.part.name,
              itemType: this.part.type,
              itemPrice: this.part.price}
    });
}
}
