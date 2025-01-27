import { lazy } from 'react';

import CareerProjects from 'src/sections/_career/landing/career-landing-projects';

// ----------------------------------------------------------------------

const AboutPage = lazy(() => import('src/pages/career/about'));
const BlogPage = lazy(() => import('src/pages/career/posts'));
const ContactPage = lazy(() => import('src/pages/career/contact'));
const JobPage = lazy(() => import('src/pages/career/job'));
const JobsPage = lazy(() => import('src/pages/career/jobs'));
const LandingPage = lazy(() => import('src/pages/career/landing'));
const PostPage = lazy(() => import('src/pages/career/post'));

// ----------------------------------------------------------------------

export const careerRoutes = [
  {
    path: '/',
    children: [
      { title: 'Startseite', path: '/', element: <LandingPage />, index: true }, // Home
      /* { title: 'Job', path: 'jobs', element: <JobsPage /> }, */
      { title: 'Projekte', path: 'projects', element: <CareerProjects /> },
      { title: 'Jobsuche', path: 'job', element: <JobPage /> },
      { title: 'Blog', path: 'posts', element: <BlogPage /> },
      /* { title: 'Post', path: 'post', element: <PostPage /> }, */
      { title: 'Über uns ', path: 'about', element: <AboutPage /> },
      { title: 'Kontakt', path: 'contact', element: <ContactPage /> },
    ],
  },
];
