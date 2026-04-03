import LatestProducts from './LatestProducts';
import FearturedProducts from './FearturedProducts';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <LatestProducts />
            <FearturedProducts />

            <Footer />
        </>
    );
};

export default Home;