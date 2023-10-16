import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import { Octokit } from 'octokit';
import { Buffer } from 'buffer';
import moment from 'moment';

import { About, Home, NotFound, Portfolio } from './components/pages';
import './index.css';
import './styles/MobileTitleSeparator.css';
import './fonts/Proxima Nova/stylesheet.css';

export type PortfolioData = {
  title: string;
  tagline: string;
  lastModified: string;
};

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData[] | null>(null);

  useEffect(() => {
    /** Fetch repository info for portfolio page
     * @param client the {@link Octokit} client used to make API calls
     * @returns an array of {@link PortfolioData} objects to be used for rendering
     */
    const fetchGitHubData = async (client: Octokit) => {

      // Retrieve all public repositories for a-binkley
      const repos = await client.request('GET /users/{username}/repos', {
        username: 'a-binkley',
      });
      
      if (repos.status !== 200) {
        console.error(`Unable to fetch general portfolio data from GitHub (error ${repos.status}). ${repos.data}`);
      } else {
        const data: PortfolioData[] = [];

        // Check for repositories with a portfolio-tags.json and save those to render on Portfolio route
        for (const repo of repos.data.slice(4, 6)) {  // STUB
          const repoResponse = await client.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'a-binkley',
            repo: repo.name,
            path: 'portfolio-tags.json'
          });

          if (repoResponse.status !== 200) {
            console.error(`Unable to fetch portfolio data for repository ${repo.name} (error ${repoResponse.status}). ${repoResponse.data}`);
          } else if (Array.isArray(repoResponse.data) || repoResponse.data.type !== 'file') {
            console.error(`Unable to parse portfolio-tags.json for repository ${repo.name}`);
          } else {
            // Parse portfolio tag data and add to array
            const { title, tagline } = JSON.parse(Buffer.from(repoResponse.data.content, 'base64').toString());
            data.push({
              title,
              tagline,
              lastModified: repo.updated_at ? moment(repo.updated_at).format('ll') : 'No data'
            });
          }
        }

        setPortfolioData(data);
      }
    };

    // Fetch portfolio data only if not already present
    if (portfolioData === null) {
      const octokit = new Octokit();
      fetchGitHubData(octokit);
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
