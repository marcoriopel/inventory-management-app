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
  locations: any = []
  name: any
  price: any
  description: any
  quantity: any
  location: any
  sku: any
  itemForm = new FormGroup(
  {
    name: new FormControl('', [Validators.required]),
    price: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl(''),
    location: new FormControl('')
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
  this.getLocationsList()
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
  const url = "/api/items/" + this.sku
  this.http
    .put(url, data, {
      headers: headers,
      observe: 'response',
      withCredentials: false
    })
    .subscribe({
      next: () => {
        this.dialogRef.close('success');
      }
    });
}

getLocationsList() {
	const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	headers.set('access-control-allow-origin', "*");
	headers.set('withCredentials', 'false');

this.http
		.get('/api/location/', {
			headers: headers,
			observe: 'response',
			withCredentials: false
		})
		.subscribe({
			next: (resp:any) => {
	  if (resp.body != null) {
		this.locations = resp.body;
	  }
			}
		});
  }

}
