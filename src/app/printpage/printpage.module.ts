import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintpagePageRoutingModule } from './printpage-routing.module';

import { PrintpagePage } from './printpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintpagePageRoutingModule
  ],
  declarations: [PrintpagePage]
})
export class PrintpagePageModule {}
