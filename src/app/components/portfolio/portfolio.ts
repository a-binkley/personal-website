import { Component } from '@angular/core';

// import { PortfolioService } from '../../services/portfolio';
import { Nav } from '../shared/nav/nav';

@Component({
  selector: 'app-portfolio',
  imports: [Nav],
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  //   constructor(private readonly portfolioSvc: PortfolioService) {}
}
