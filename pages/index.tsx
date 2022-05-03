import { tw } from 'twind';
import { getMainLayout } from '../layouts/Main/MainLayout';
import { NextPageWithLayout } from '../types/page';

const Home: NextPageWithLayout = () => {
  const styles = {
    h1: tw`text(blue-500 center)`,
  };

  return (
    <>
      <h1 className={styles.h1}>Hello World!</h1>
    </>
  );
};

Home.getLayout = getMainLayout;

export default Home;
