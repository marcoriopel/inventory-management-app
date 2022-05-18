import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemCreationComponent } from './item-creation/item-creation.component';
import { ItemEditingComponent } from './item-editing/item-editing.component';
import { LocationsManagementComponent } from './locations-management/locations-management.component';
import { InventoryItem } from './models/inventory-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog, protected http: HttpClient) { }
  title = 'inventory-management-app';
  inventoryItems: InventoryItem[] = [];

  ngOnInit() {
    this.refreshInventory()
  }
  openCreationDialog() {
    this.dialog.open(ItemCreationComponent);
  }

  openLocationsManagementDialog() {
    const dialogRef = this.dialog.open(LocationsManagementComponent);
    dialogRef.componentInstance.inventoryItems = this.inventoryItems
  }

  openEditingDialog(sku: any) {
    var item
    for (let index = 0; index < this.inventoryItems.length; index++) {
      if(this.inventoryItems[index].id == sku) {
        item = this.inventoryItems[index]
        break
      }
    }
    const dialogRef = this.dialog.open(ItemEditingComponent);
    dialogRef.componentInstance.name = item?.name
    dialogRef.componentInstance.price = item?.price
    dialogRef.componentInstance.description = item?.description
    dialogRef.componentInstance.quantity = item?.quantity
    dialogRef.componentInstance.location = item?.location
    dialogRef.componentInstance.sku = item?.id
  }

  refreshInventory() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		headers.set('access-control-allow-origin', "*");
		headers.set('withCredentials', 'false');

    this.http
			.get('/api/items/', {
				headers: headers,
				observe: 'response',
				withCredentials: false
			})
			.subscribe({
				next: (resp:any) => {
          if (resp.body != null) {
            this.inventoryItems = resp.body;
          }
				}
			});
  }

  deleteItem(sku: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		headers.set('access-control-allow-origin', "*");
		headers.set('withCredentials', 'false');
    const url = "/api/items/" + sku
    this.http
			.delete(url, {
				headers: headers,
				observe: 'response',
				withCredentials: false
			})
			.subscribe({
				next: (resp:any) => {
          if (resp.body != null) {
            this.inventoryItems = resp.body;
          }
				}
			});
  }
}

