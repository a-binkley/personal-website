import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [LowerCasePipe, UpperCasePipe],
  standalone: true,
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  public readonly navItems: string[] = ['Home', 'Portfolio', 'Bio', 'Contact'];
}
