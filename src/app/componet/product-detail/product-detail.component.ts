import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public selectedProduct?: Product;

  constructor(private route: ActivatedRoute, private pServ: ProductService, public userS: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id){
      this.pServ.getProductsById(id).subscribe({
        next: product => this.selectedProduct = product,
        error: err => console.log(err)
        
      })
    }
    
  }

  addToCart(){
    if (this.selectedProduct) {
      
      this.userS.addToCart(this.selectedProduct);
    }
  }

}
