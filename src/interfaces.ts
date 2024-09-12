export interface Option {
  name: string;
  path: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  type: string;
}

export interface Seat {
  positionX: number;
  positionY: number;
}

export interface Table {
  id: number;
  name: string;
  seats: Seat[];
}

export interface Order {
  tables: number[];
  foods: number[]
}