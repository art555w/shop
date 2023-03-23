import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {ProductComponent} from './shared/components/product/product.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProductPageComponent} from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProductComponent,
    HomePageComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
