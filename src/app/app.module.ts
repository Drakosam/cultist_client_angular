import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NotReadyComponent } from './view/not-ready/not-ready.component';
import { MainViewComponent } from './view/main-view/main-view.component';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { ResourceViewComponent } from './view/resource-view/resource-view.component';
import { ResourceItemComponent } from './commponent/resource-item/resource-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NotReadyComponent,
    MainViewComponent,
    NavBarComponent,
    ResourceViewComponent,
    ResourceItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
