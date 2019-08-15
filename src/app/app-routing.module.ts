import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
    path: '',
      component: CategoryComponent,
    },
    {
      path: 'category',
      component: CategoryComponent,
    },
    {
      path: 'product',
      component: ProductComponent,
    },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}