
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { ProductService} from './product.service';
import {ProductListComponent}  from './product-list.component';
@NgModule({
imports: [
    RouterModule.forChild([
        {path: 'products', component: ProductListComponent}
    ])
],
//exports: []
providers : [ProductService],

declarations: [ProductListComponent]

})
export class ProductModule {}