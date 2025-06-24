import { Component, inject } from '@angular/core';

import { home } from '../../../constants';
import { HomeService } from '../../services/home';
import { Nav } from '../shared/nav/nav';
import { Resume } from '../shared/resume/resume';
import { BusinessCard } from './business-card/business-card';
import { PageGradient } from '../shared/page-gradient/page-gradient';
import { ProfTimeline } from './prof-timeline/prof-timeline';

@Component({
  selector: 'app-home',
  imports: [BusinessCard, Nav, Resume, PageGradient, ProfTimeline],
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
