import { NgModule }      from '@angular/core';
import {RouterModule}    from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';

import {ProductModule} from './products/product.module';
import { AppComponent }  from './app.component';
import {HomeComponent}   from './home/home.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    ProductModule,
    RouterModule.forRoot ([
      {path: 'home', component:HomeComponent},
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: '**', redirectTo:'home', pathMatch:'full'}
    ])
  ],
  exports: [BrowserModule],
  declarations: [ 
    AppComponent,
    HomeComponent
     ],
   
  providers: [],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
