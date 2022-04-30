import getMainLayout from '../layouts/Main/MainLayout';
import { NextPageWithLayout } from '../types/page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="bg-[black] font-bold text-[red]">TEST</h1>
    </>
  );
};

Home.getLayout = getMainLayout;

export default Home;
