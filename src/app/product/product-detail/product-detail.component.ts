import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: any;
  productIdByParam: any;
  constructor(private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    // debugger
    this.productId = this.activeRoute.snapshot.paramMap.get('id');
    
    this.activeRoute.paramMap.subscribe((params: any) => {
      debugger
      console.log(params.get('id'));
      this.productIdByParam = params.get('id');
    });
  }

}
