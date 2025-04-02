import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/layout';
import Contact from './pages/Contact';
import Educations from './pages/Educations';
import Experiences from './pages/Experiences';
import Experties from './pages/Experties';
import Me from './pages/Me';
import Packages from './pages/Packages';
import Publications from './pages/Publications';
import Repositories from './pages/Repositories';
import Certificates from './pages/Certificates';

const routes = [
  { path: '/', element: <Me /> },
  { path: '/repositories', element: <Repositories /> },
  { path: '/packages', element: <Packages /> },
  { path: '/publications', element: <Publications /> },
  { path: '/educations', element: <Educations /> },
  { path: '/experiences', element: <Experiences /> },
  { path: '/expertise', element: <Experties /> },
  { path: '/contact', element: <Contact /> },
  { path: '/certificates', element: <Certificates /> },
];

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
