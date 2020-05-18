import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddConstructionItemPage } from './add-construction-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddConstructionItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddConstructionItemPageRoutingModule {}
