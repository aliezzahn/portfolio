import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '@/components/layout';
import Contact from '@/pages/Contact';
import Educations from '@/pages/Educations';
import Experiences from '@/pages/Experiences';
import Expertise from '@/pages/Experties';
import Packages from '@/pages/Packages';
import Publications from '@/pages/Publications';
import Repositories from '@/pages/Repositories';
import Certificates from '@/pages/Certificates';
import LinkedInProfile from '@/pages/LinkedinProfile.tsx';
import Biography from '@/pages/Biography';
import Showcases from '@/pages/Showcases.tsx';
import LinkedInPage from '@/pages/LinkedinPage.tsx';

const routes = [
  { path: '/', element: <Biography /> },
  { path: '/informations/biography', element: <Biography /> },
  { path: '/informations/educations', element: <Educations /> },
  { path: '/informations/experiences', element: <Experiences /> },
  { path: '/informations/expertise', element: <Expertise /> },
  { path: '/informations/certificates', element: <Certificates /> },
  { path: '/projects/repositories', element: <Repositories /> },
  { path: '/projects/packages', element: <Packages /> },
  { path: '/projects/publications', element: <Publications /> },
  { path: '/contact', element: <Contact /> },
  { path: '/showcases', element: <Showcases /> },
  { path: '/showcases/linkedin-profile', element: <LinkedInProfile /> },
  { path: '/showcases/linkedin-page', element: <LinkedInPage /> },
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
