import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutPage/" element={<AboutPage />} />
          <Route path="/projectDetailsPage/" element={<ProjectDetailsPage />} />
          <Route path="/projectPage/" element={<ProjectsPage />} />
          <Route path="/contactPage/" element={<ContactPage />} />

        </Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;
