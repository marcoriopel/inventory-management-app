import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemCreationComponent } from './item-creation/item-creation.component';
import { InventoryItem } from './models/inventory-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  title = 'inventory-management-app';
  inventoryItems: InventoryItem[] = [];

  ngOnInit() {
    this.inventoryItems = [
      {
        id: 1,
        name: 'Socks',
        price: 10,
        quantity: 10,
        description: 'A pair of warm, fuzzy socks',
        location: "Montreal"
      },
      {
        id: 2,
        name: 'Hat',
        price: 20,
        quantity: 10,
        description: 'A warm hat',
        location: "New York"
      },
      {
        id: 3,
        name: 'Shoes',
        price: 30,
        quantity: 10,
        description: 'A pair of warm, fuzzy shoes',
        location: "Montreal"
      },
      {
        id: 4,
        name: 'Gloves',
        price: 40,
        quantity: 10,
        description: 'A pair of warm, fuzzy gloves',
        location: "Montreal"
      },
      {
        id: 5,
        name: 'T-Shirt',
        price: 50,
        quantity: 10,
        description: 'A pair of warm, fuzzy t-shirt',
        location: "Montreal"
      }
    ];
  }
  openCreationDialog() {
    console.log("openCreationDialog()");
    const dialogRef = this.dialog.open(ItemCreationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

