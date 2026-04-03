import LatestProducts from './common/LatestProducts';
import FearturedProducts from './common/FearturedProducts';
import Hero from './common/Hero';
import Layout from './common/Layout';

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