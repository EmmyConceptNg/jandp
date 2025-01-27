// eslint-disable-next-line import/no-extraneous-dependencies
import { Element } from 'react-scroll';

import {
  _jobs,
  _careerPosts,
  _brandsColor,
  _testimonials,
  _jobsByCompanies,
  _jobsByCountries,
  _jobsByCategories,
} from 'src/_mock';

import CareerNewsletter from '../career-newsletter';
import CareerOurClients from '../career-our-clients';
import CareerDownloadApp from '../career-download-app';
import CareerLandingHero from '../landing/career-landing-hero';
import CareerLandingStep from '../landing/career-landing-step';
import CareerLandingAbout from '../landing/career-landing-about';
import CareerTestimonial from '../testimonial/career-testimonial';
import CareerLatestPosts from '../../blog/career/career-latest-posts';
import CareerLandingConnections from '../landing/career-landing-connections';
import CareerLandingTopCompanies from '../landing/career-landing-top-companies';
import CareerLandingFeaturedJobs from '../landing/career-landing-featured-jobs';
import CareerLandingForRecruiters from '../landing/career-landing-for-recruiters';
import CareerLandingHotCategories from '../landing/career-landing-hot-categories';

// ----------------------------------------------------------------------

export default function CareerLandingView() {
  return (
    <>
      <CareerLandingHero />

      <CareerLandingAbout />

      <CareerLandingForRecruiters />

      <CareerTestimonial testimonials={_testimonials} />

      <CareerOurClients brands={_brandsColor} />

      <CareerNewsletter />
    </>
  );
}
