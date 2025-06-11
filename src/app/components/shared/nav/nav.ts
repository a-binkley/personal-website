import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

type Page = 'home' | 'portfolio' | 'bio' | 'contact';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, LowerCasePipe, UpperCasePipe],
  standalone: true,
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  @Input() current: Page = 'home';
  public readonly navItems: Page[] = ['home', 'portfolio', 'bio', 'contact'];
}
