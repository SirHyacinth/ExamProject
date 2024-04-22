import "./App.css";
import GitHubRepo from "./components/repo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepoData from "./components/repoData";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/404";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<GitHubRepo />} />
          <Route path="/repository/:id" element={<RepoData />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
