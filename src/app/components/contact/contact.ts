import { Component } from '@angular/core';

import { Nav } from '../shared/nav/nav';

@Component({
  selector: 'app-contact',
  imports: [Nav],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
