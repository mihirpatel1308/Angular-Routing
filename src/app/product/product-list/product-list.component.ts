import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products =  [
    {  id:  1,  name:  'Product 1' },
    {  id:  2,  name:  'Product 2' },
    {  id:  3,  name:  'Product 3' },
    {  id:  4,  name:  'Product 4' },
    {  id:  5,  name:  'Product 5' }      
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
