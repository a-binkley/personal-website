import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
	provideClientHydration,
	withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { COLORS } from '../constants';

const customPreset = definePreset(Aura, {
	semantic: {
		primary: {
			500: COLORS.ACCENT,
			600: COLORS.ACCENT,
		},
	},
});

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: customPreset,
				options: {
					darkModeSelector: false || 'none',
				},
			},
		}),
	],
};
