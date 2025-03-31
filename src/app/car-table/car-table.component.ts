import { Component } from '@angular/core';
import {CarIndex, CARS_DATA} from '../assets/car-data';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent {
  cars = CARS_DATA;
  groupedCars: { [brand: string]: any[] } = {};

  constructor() {
    this.groupCars();
  }

  groupCars() {
    this.cars.forEach(car => {
      const brand = car[CarIndex.Brand] || "Unknown";
      if (!this.groupedCars[brand]) {
        this.groupedCars[brand] = [];
      }
      this.groupedCars[brand].push(car);
    });
  }

  getPriceColor(flag: number): string {
    return flag === 1 ? 'green' : flag === -1 ? 'red' : 'black';
  }

  showCode(code: string) {
    alert(`Car Registry Code: ${code}`);
  }

  protected readonly Object = Object;
  protected readonly CarIndex = CarIndex;
}
