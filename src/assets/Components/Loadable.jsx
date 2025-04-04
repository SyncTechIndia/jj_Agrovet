import { Suspense } from 'react';
import Loader from './Loader'; // Ensure this path is correct

const Loadable = (Component) => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
