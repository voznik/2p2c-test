import { CoreModule, environment } from '@wokspace/shared/core';
import { SharedModule } from '@wokspace/shared/shared';
import { UiModule } from '@wokspace/shared/ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { ROUTES } from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabled',
      onSameUrlNavigation: 'reload',
      preloadingStrategy: PreloadAllModules,
    }),
    SharedModule,
    CoreModule.forRoot({
      loggerLevel: environment.production ? 1 : 5,
    }),
    UiModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
