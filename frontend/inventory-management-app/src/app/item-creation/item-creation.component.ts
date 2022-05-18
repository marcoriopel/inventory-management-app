import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-creation',
  templateUrl: './item-creation.component.html',
  styleUrls: ['./item-creation.component.scss']
})
export class ItemCreationComponent implements OnInit {
  itemForm = new FormGroup(
		{
			name: new FormControl('', [Validators.required]),
			price: new FormControl('', [Validators.required, Validators.email]),
			description: new FormControl('', [Validators.required]),
			quantity: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required])
		}
	);

  constructor(protected http: HttpClient, public dialogRef: MatDialogRef<ItemCreationComponent>) { }

  ngOnInit(): void {
  }

  addInventoryItem() {
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

    this.http
			.post('http://localhost:3000/api/item/', data, {
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
