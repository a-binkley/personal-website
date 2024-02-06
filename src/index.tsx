import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import { Octokit } from 'octokit';

import { About, Home, NotFound, Portfolio } from './components/pages';
import { fetchGitHubData } from './NetworkRequests';
import './index.css';
import './components/individual/MobileTitleSeparator.css';
import './fonts/Proxima Nova/stylesheet.css';

export type PortfolioData = {
  title: string;
  tagline: string;
  lastModified: string;
  bootstrapIcon: string;
  iconPaths: string[];
  url: string;
};

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData[] | null>(null);

  useEffect(() => {
    // Fetch portfolio data only if not already present
    if (portfolioData === null) {
      // TODO: set up OAuth tokens to increase API rate limit from 60 to 5000 requests / hour
      const octokit = new Octokit();
      fetchGitHubData(octokit, setPortfolioData);
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio data={portfolioData} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
