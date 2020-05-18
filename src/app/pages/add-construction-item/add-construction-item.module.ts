import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddConstructionItemPageRoutingModule } from './add-construction-item-routing.module';

import { AddConstructionItemPage } from './add-construction-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddConstructionItemPageRoutingModule
  ],
  declarations: [AddConstructionItemPage]
})
export class AddConstructionItemPageModule {}
