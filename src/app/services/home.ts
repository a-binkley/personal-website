import { Injectable } from '@angular/core';

import { DateTime, Interval } from 'luxon';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public readonly experienceYears = Math.floor(
    Interval.fromDateTimes(
      DateTime.fromISO('2022-05-31T00:00:00.000'),
      DateTime.now()
    ).length('years')
  );
}
