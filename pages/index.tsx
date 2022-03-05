import type { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import { Navbar } from '../components';

const Home: NextPage = () => {
  return (
    <Layout title="Ade Budiono">
      <Navbar />
      <Container>
        <h1>Hallo</h1>
      </Container>
    </Layout>
  );
};

export default Home;
