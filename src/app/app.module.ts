import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgStackFormsModule } from '@ng-stack/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiMockModule } from '@ng-stack/api-mock';

import { AppComponent } from './app.component';
import { ApiMockAvatarsService } from './api-mock-avatars.service';

@NgModule({
  imports: [
    BrowserModule,
    NgStackFormsModule,
    HttpClientModule,
    // !environment.production && environment.runApiMock
    true
      ? ApiMockModule.forRoot(ApiMockAvatarsService, {
        delay: 500,
        showLog: true,
        clearPrevLog: true
      })
      : []
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
