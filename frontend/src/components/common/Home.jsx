import LatestProducts from './LatestProducts';
import FearturedProducts from './FearturedProducts';
import Hero from './Hero';
import Layout from './Layout';

const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <LatestProducts />
                <FearturedProducts />
            </Layout>
        </>
    );
};

export default Home;