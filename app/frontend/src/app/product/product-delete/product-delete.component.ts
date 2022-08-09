import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product!: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  //lendo o produto:
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  //método para excluir o produto:
  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto excluído!');
      this.router.navigate(['product-crud'])
    })
  }

  //botão de cancelar:
  cancel(): void {
    this.router.navigate(['product-crud'])
  }

}
