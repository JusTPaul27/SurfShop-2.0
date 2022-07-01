import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componet/login/login.component';
import { ProductDetailComponent } from './componet/product-detail/product-detail.component';
import { ProductsListComponent } from './componet/products-list/products-list.component';
import { RegisterComponent } from './componet/register/register.component';
import { UserDetailComponent } from './componet/user-detail/user-detail.component';

const routes: Routes = [
  {path: 'products', component: ProductsListComponent},
  {path: 'product/:id', component: ProductDetailComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserDetailComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
