import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.setvice';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  title = 'ang-app';

  // products: IProduct[] = []
    // products$: Observable<IProduct[]>
    loading = false
    term = ''

  constructor(
    public productsService: ProductService,
    public ModalService: ModalService
  ){}

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll()
    //     .pipe( tap( () => this.loading = false))
    this.productsService.getAll()
    .subscribe(() => {
      this.loading = false
    })
  }

}
