import { Component, inject } from '@angular/core';

import { home } from '../../../constants';
import { HomeService } from '../../services/home';
import { Nav } from '../shared/nav/nav';

@Component({
  selector: 'app-home',
  imports: [Nav],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public readonly content = home;
  private readonly homeSvc = inject(HomeService);

  public get yoe(): number {
    return this.homeSvc.experienceYears;
  }
}
