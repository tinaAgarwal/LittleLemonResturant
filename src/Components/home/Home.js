import Nav from "../navbar/Nav";
import Hero from '../hero/Hero';
import Highlights from '../highlights/Highlights';
import Footer from '../footer/Footer';
import Testimonial from '../testimonial/Testimonial';
import About from '../about/About';

function Home() {
    return(
        <>
            <Nav />
            <Hero />
            <Highlights />
            <Testimonial />
            <About />
            <Footer />
        </>
    );
}

export default Home;