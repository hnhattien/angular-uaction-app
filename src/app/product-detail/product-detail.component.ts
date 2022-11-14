import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'auc-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  constructor(private activeRouter: ActivatedRoute) {
    activeRouter.paramMap.subscribe((params) => this.productId = `${params.get('id')}`);
    activeRouter.queryParamMap.subscribe((params) => this.productId = `${this.productId} - ${params.get('category')}`)
   }

  ngOnInit() {
  }

}
