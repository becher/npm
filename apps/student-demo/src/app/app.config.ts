import { ApplicationConfig, provideZoneChangeDetection }  from '@angular/core'
import { provideRouter }      from '@angular/router'
import { provideStato }       from '@stato/angular'
import { routes }             from './app.routes'
import { environment }        from '../environments/environment'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStato({
      http: {
        baseUrl: environment.apiUrl,
        timeout: 8000
      },
      devtools: !environment.production
    })
  ]
}