import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  //vetor com os atributos dos produtos
  product: Product = {
    name: '',
    price: 0,
    id: 0
  }

  ngOnInit(): void {
  }

  //método para criar o produto
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => { //Cria o produto
      this.productService.showMessage('Produto Criado com sucesso!') //mensagem de sucesso
      this.router.navigate(['product-crud']) //retorna para a página product-crud, após a criação do produto
    })
  } //fim do método de criar produto

  cancel(): void {
    this.router.navigate(['product-crud']) //botão de cancelar - volta à tela product-crud.component.html
  }

}
