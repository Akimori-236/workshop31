import { Component } from '@angular/core';

const FRUITS: string[] = ["apple", "banana", "durian", "orange"]

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  fruits = FRUITS
}
