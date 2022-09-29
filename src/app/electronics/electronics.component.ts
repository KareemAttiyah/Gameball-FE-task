import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  items: { name: string, price: number }[] = [];
  
  
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.sortByName();
  }
  
  sortByPrice() {
    this.backendService.getElectronics("price", 1).subscribe(res => {
      this.items = []
      res.forEach(element => {
        let name = element.name;
        let price = element.price;
        this.items.push({ name, price });
      });
    });
  }

  sortByName() {
    this.backendService.getElectronics("name", 1).subscribe(res => {
      this.items = []
      res.forEach(element => {
        let name = element.name;
        let price = element.price;
        this.items.push({ name, price });
      });
    });
  }
  
  onBuyClick() {
    alert("Congratulations!!! you have bought this item. ");
  }
}



