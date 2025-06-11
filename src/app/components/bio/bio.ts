import { Component } from '@angular/core';

import { Nav } from '../shared/nav/nav';

@Component({
  selector: 'app-bio',
  imports: [Nav],
  standalone: true,
  templateUrl: './bio.html',
  styleUrl: './bio.scss',
})
export class Bio {}
