import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const FRUITS: string[] = ["apple", "banana", "durian", "orange"]

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  fruits = FRUITS

  inventoryForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inventoryForm = this.fb.group({
      email: this.fb.control<string>('', [Validators.required]),
  })
  }

}
