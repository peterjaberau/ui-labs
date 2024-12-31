// This is the entry point for the web app

// Order is important here
// Don't remove the empty lines between these imports

// prettier-ignore-start
import '~/internals/development/sg/shared/polyfills'
// prettier-ignore-end

import '../initBuildInfo.ts'
import '../monitoring/initMonitoring.ts'

import { createRoot } from 'react-dom/client'

import { logger } from '~/internals/development/sg/common'
import { setLinkComponent } from '~/internals/development/sg/wildcard'

import { initAppShell } from '../storm/app-shell-init.ts'
import { WebNextAwareLink } from '../sveltekit/WebNextAwareLink.tsx'

import { EnterpriseWebApp } from './EnterpriseWebApp.tsx'

const appShellPromise = initAppShell()

setLinkComponent(WebNextAwareLink)

// It's important to have a root component in a separate file to create a react-refresh boundary and avoid page reload.
window.addEventListener('DOMContentLoaded', async () => {
    const root = createRoot(document.querySelector('#root')!)

    try {
        const { graphqlClient, temporarySettingsStorage } = await appShellPromise

        root.render(
            <EnterpriseWebApp
                graphqlClient={graphqlClient}
                temporarySettingsStorage={temporarySettingsStorage}
                telemetryRecorder={window.context.telemetryRecorder}
            />
        )
    } catch (error) {
        logger.error('Failed to initialize the app shell', error)
    }
})

if (process.env.NODE_ENV === 'development') {
    new EventSource('/.assets/esbuild').addEventListener('change', () => {
        location.reload()
    })
}
