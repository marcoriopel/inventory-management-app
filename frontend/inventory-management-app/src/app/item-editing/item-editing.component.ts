import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-item-editing',
  templateUrl: './item-editing.component.html',
  styleUrls: ['./item-editing.component.scss']
})
export class ItemEditingComponent implements OnInit {
  name: any
  price: any
  description: any
  quantity: any
  location: any
  sku: any
  private backendUrl: string = '127.0.0.1:3002';
  itemForm = new FormGroup(
  {
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required])
  }
);

constructor(protected http: HttpClient, public dialogRef: MatDialogRef<ItemEditingComponent>) { }

ngOnInit(): void {
  this.itemForm.setValue({
    name: this.name,
    price: this.price,
    description: this.description,
    quantity: this.quantity,
    location: this.location
  })
}

updateInventoryItem() {
  const data = {
    name: this.itemForm.controls['name'].value,
    price: this.itemForm.controls['price'].value,
    description: this.itemForm.controls['description'].value,
    quantity: this.itemForm.controls['quantity'].value,
    location: this.itemForm.controls['location'].value
  };

  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  headers.set('access-control-allow-origin', "*");
  headers.set('withCredentials', 'false');
  const url = "http://localhost:3002/api/items/" + this.sku
  this.http
    .put(url, data, {
      headers: headers,
      observe: 'response',
      withCredentials: false
    })
    .subscribe({
      next: () => {
        this.dialogRef.close('success');
      },
      error: (error) => {
        const status_code = JSON.stringify(error.status);
        console.log(status_code)
      }
    });
}

}
