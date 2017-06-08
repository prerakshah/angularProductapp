
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';

import { ProductService} from './product.service';
import {ProductListComponent}  from './product-list.component';
@NgModule({
imports: [
    BrowserModule, 
    HttpModule,
    RouterModule.forChild([
        {path: 'products', component: ProductListComponent}
    ])
],
//exports: []
providers : [ProductService],

declarations: [ProductListComponent]

})
export class ProductModule {}