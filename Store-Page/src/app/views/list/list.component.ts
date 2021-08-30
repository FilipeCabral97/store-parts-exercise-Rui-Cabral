import { ItemComponent } from './item/item.component';
import { Component, OnInit } from '@angular/core';
import { PartService } from 'src/app/part.service';
import { Part } from 'src/app/part.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  parts: Part[] = [];
  types: string[] = [];

  itemDict: Map<string, Part[]> = new Map<string, Part[]>();

  priceBool: boolean = true

  constructor(private partService: PartService) { }

  ngOnInit(): void {
    this.partService.read().subscribe(parts => {
      this.parts = parts

      // DICT {ALL, MOUSE, MOUSEPAD, KEYBOARD, MONITOR}
      this.itemDict.set("All", this.parts)
      parts.forEach((part: Part) => {
        const itemArray = [part]
        if (this.itemDict.has(part.type) === false) {
          this.itemDict.set(part.type, itemArray)
        }
        else {
          this.itemDict.get(part.type)?.push(part)
        }
      })
      console.log(this.itemDict)
    })

    this.partService.readTypes().subscribe(types => {
      this.types = types
      // INSERT IN BEGINNING
      this.types.unshift("All")
      console.log(this.types)
    })
  }

  // SHOW BY TYPE
  public typeClick(event: any): void {
    let target = event.target || event.srcElement
    console.log(target.value)
    const value = this.itemDict.get(target.value)
    if (value != undefined) {
      this.parts = value
    }
  }

  // ORDER BY PRICE
  public priceClick(): void {
    this.parts = this.parts.sort((a, b) => {
      if (this.priceBool) {
        return parseFloat(a.price.toString().slice(0, -1)) - parseFloat(b.price.toString().slice(0, -1))
      }
      else {
        return parseFloat(b.price.toString().slice(0, -1)) - parseFloat(a.price.toString().slice(0, -1))
      }
    });
    this.priceBool = !this.priceBool
  }

  // SEARCHBOX ENTER
  public searchClick(event: any): void {
    let target = event.target || event.srcElement

    this.partService.readQuery(target.value).subscribe(parts => {
      this.parts = parts;

      this.itemDict.forEach((value: Part[], key: string) => {
        this.itemDict.set(key, [])
      });

      this.itemDict.set("All", this.parts)
      parts.forEach((part: Part) => {
        const itemArray = [part]
        if (this.itemDict.has(part.type) === false) {
          this.itemDict.set(part.type, itemArray)
        }
        else {
          this.itemDict.get(part.type)?.push(part)
        }
      })
    })

  }
}
