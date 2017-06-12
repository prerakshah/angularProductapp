import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {StarComponent} from './start.component';


@NgModule({

imports:[CommonModule],
exports:[CommonModule,
         FormsModule,
         StarComponent],
declarations: [StarComponent],

})

export class SharedModule {

}