import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ArticleComponent }  from './article.component';
import { ArticleService } from './article.service';
import {SortPipe} from './pipe'

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule,
		ReactiveFormsModule
  ],
  declarations: [
        AppComponent,
            ArticleComponent,
            SortPipe
  ],
  providers: [
        ArticleService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
