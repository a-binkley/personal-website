import ReactDOM from 'react-dom/client';
import { About, Home, NotFound, Portfolio } from './components/pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './styles/MobileTitleSeparator.css';
import './fonts/Proxima Nova/stylesheet.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/*"         element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
