import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

import { home } from '../../../../constants';

@Component({
  selector: 'app-prof-timeline',
  imports: [Timeline],
  templateUrl: './prof-timeline.html',
  styleUrl: './prof-timeline.scss',
})
export class ProfTimeline {
  public readonly timelineData = home.timeline;
}
