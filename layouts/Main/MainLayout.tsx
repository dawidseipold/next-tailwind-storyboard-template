import Head from 'next/head';

export interface IMainLayout {
  children?: any;
}

export interface IMainLayoutFunctions extends IMainLayout {}

const MainLayout: React.FC<IMainLayoutFunctions> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Main Layout</title>
      </Head>

      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export const getMainLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
