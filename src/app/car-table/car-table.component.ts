import { Component } from '@angular/core';
import {CarFields, Car, CARS_DATA} from '../assets/car-data';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent {
  cars: Car[] = [];
  groupedCars: { [brand: string]: Car[] } = {};


  constructor() {
    this.cars = this.fillMissingData(CARS_DATA);
    this.groupCars();
  }

  fillMissingData(data: any[][]): Car[] {
    let lastCar: Partial<Car> = {};

    return data.map(row => {
      const car: Car = {
        brand: row[CarFields.Brand] ?? lastCar.brand ?? "Unknown",
        model: row[CarFields.Model] ?? lastCar.model ?? "Unknown",
        transmission: row[CarFields.Transmission] ?? lastCar.transmission ?? "Unknown",
        price: row[CarFields.Price] ?? lastCar.price ?? "Unknown",
        priceFlag: row[CarFields.PriceFlag] ?? lastCar.priceFlag ?? 0,
        registryCode: row[CarFields.RegistryCode] ?? "Unknown"
      };

      lastCar = car; // Update last known values
      return car;
    });
  }

  groupCars() {
    this.cars.forEach(car => {
      if (!this.groupedCars[car.brand]) {
        this.groupedCars[car.brand] = [];
      }
      this.groupedCars[car.brand].push(car);
    });
  }

  getPriceColor(flag: number): string {
    return flag === 1 ? 'green' : flag === -1 ? 'red' : 'black';
  }

  showCode(code: string) {
    alert(`Car Registry Code: ${code}`);
  }

  protected readonly Object = Object;
}
