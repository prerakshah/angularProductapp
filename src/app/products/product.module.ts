
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
//import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

import { ProductService} from './product.service';
import {ProductListComponent}  from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductFilterPipe} from './product-filter.pipe';

@NgModule({
imports: [
    BrowserModule, 
   // FormsModule,
    HttpModule,
    RouterModule.forChild([
        {path: 'products', component: ProductListComponent},
        {path: 'products/id', component: ProductDetailComponent}
    ]),
    SharedModule
],
exports: [BrowserModule],
providers : [ProductService],

declarations: [ProductListComponent, ProductFilterPipe]

})
export class ProductModule {}