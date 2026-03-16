// ─────────────────────────────────────────────────────
// @stato/angular — provideStato()
// Configure Stato au niveau racine de l app Angular
// ─────────────────────────────────────────────────────

import { makeEnvironmentProviders, InjectionToken } from '@angular/core'
import { configureHttp } from '@stato/core'
import type { StatoConfig } from '@stato/core'

export interface StatoAngularConfig {
  http?:      StatoConfig
  devtools?:  boolean
}

// Token d injection pour la config globale
export const STATO_CONFIG = new InjectionToken<StatoAngularConfig>(
  'STATO_CONFIG'
)

export function provideStato(config: StatoAngularConfig = {}) {
  // Configurer le client HTTP global si fourni
  if (config.http) {
    configureHttp(config.http)
  }

  return makeEnvironmentProviders([
    {
      provide:  STATO_CONFIG,
      useValue: config
    }
  ])
}