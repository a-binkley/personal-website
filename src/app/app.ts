import { Component, InjectionToken } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
	factory: () => {
		if (typeof window !== 'undefined') {
			return window;
		}
		return new Window();
	},
});

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	template: '<router-outlet />',
})
export class AppComponent {
	protected title = 'personal-website';
}
