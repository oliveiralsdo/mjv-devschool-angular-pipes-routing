import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './features/tasks/tasks.module';
import { LoginModule } from './features/login/login.module';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TasksModule,
    LoginModule
  ],
  providers: [
    { provide: LOCALE_ID, 
      useValue: 'pt-BR' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
