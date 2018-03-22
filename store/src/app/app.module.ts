import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { simpleReducer } from './simple-reducer';
import { AppComponent } from './app.component';
import { PostReducer } from './post-reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
                        message: simpleReducer,
                        post: PostReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
