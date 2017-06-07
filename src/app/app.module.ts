import { NgModule }      from '@angular/core';
import {RouterModule}    from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {HomeComponent}   from './home/home.component';
import {ProductListComponent} from './products/product-list.component';

import {ProductService} from './products/product.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule,
    RouterModule.forRoot ([
      {path: 'home', component:HomeComponent},
      {path: 'products', component:ProductListComponent},
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: '**', redirectTo:'home', pathMatch:'full'}
    ])
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    ProductListComponent ],

  providers: [ProductService],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
