import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import {
	provideClientHydration,
	withEventReplay,
} from '@angular/platform-browser';
import { provideServerRouting } from '@angular/ssr';

import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
	providers: [
		provideClientHydration(withEventReplay()),
		provideServerRouting(serverRoutes),
	],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
