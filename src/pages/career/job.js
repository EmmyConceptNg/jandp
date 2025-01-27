import { Helmet } from 'react-helmet-async';

import CareerJobView from 'src/sections/_career/view/career-job-view';

// ----------------------------------------------------------------------

export default function CareerJobPage() {
  return (
    <>
      <Helmet>
        <title>J & P Globe Trade</title>
      </Helmet>

      <CareerJobView />
    </>
  );
}
