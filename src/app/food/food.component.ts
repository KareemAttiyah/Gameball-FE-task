import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  items: { name: string, price: number }[] = [];
  fruits: {name: string, price: number}[] = [];
  vegetables: { name: string, price: number }[] = [];
  chosenFruits: boolean = true;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.onFruitsClick();
  }

  sortByName() {
    if(this.chosenFruits) {
      this.backendService.getFruits("name", 1).subscribe(res => {
        this.items = []
        this.fruits = []

        res.forEach(element => {
          let name = element.name;
          let price = element.price;
          this.fruits.push({ name, price });
        });
        this.items = this.fruits;
      });
    } else {
      this.backendService.getVegetables("name", 1).subscribe(res => {
        this.items = []
        this.vegetables = []
        res.forEach(element => {
          let name = element.name;
          let price = element.price;
          this.vegetables.push({ name, price });
        });
        this.items = this.vegetables;
      });
    }
    
  }

  sortByPrice() {
    if (this.chosenFruits) {
      this.backendService.getFruits("price", 1).subscribe(res => {
        this.items = []
        this.fruits = []

        res.forEach(element => {
          let name = element.name;
          let price = element.price;
          this.fruits.push({ name, price });
        });
        this.items = this.fruits;
      });
    } else {
      this.backendService.getVegetables("price", 1).subscribe(res => {
        this.items = []
        this.vegetables = []
        res.forEach(element => {
          let name = element.name;
          let price = element.price;
          this.vegetables.push({ name, price });
        });
        this.items = this.vegetables;
      });
    }

  }

  onFruitsClick() {

    this.chosenFruits = true;
    this.sortByName();
  }


  onVegClick() {
    
    this.chosenFruits = false;
    this.sortByName();
  }

  onBuyClick() {
    alert("Congratulations!!! you have bought this item. ");
  }

}
