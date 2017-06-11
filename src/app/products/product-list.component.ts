import { Component, OnInit } from '@angular/core';


import { IProduct } from './product';
import {ProductService} from './product.service';


@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = "Product List";
    listFilter: string = null;
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargine : number = 2;
    errorMessage : string;
    products: IProduct[];

    constructor(private _productService : ProductService){}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this._productService.getProducts()
        .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any> error
        );
    }

    onRatingCliecked(message: string) : void{
        this.pageTitle = 'Product Detail: ' + message;
    }
}
