import resturant from "../assets/Mario_and_Adrian_A.jpg";
import resturant2 from "../assets/Mario_and_Adrian_b.jpg";
import "./About.css";

const About = () => {
    return(
        <div className="about">
            <div className="content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, eius repudiare no sea, patrioque euripidis eam cu. Sit at simul lobortis postulant, dicit eruditi forensibus ea eum. Eos homero nostrum sapientem at. Libris probatus interpretaris vim id, hinc dolor integre eu eos, nusquam voluptua oportere in per. Sed nonumes voluptatum consequuntur ex. Qui ad doming signiferumque, cu vix movet tation omnium, soleat indoctum ne eum. In nostro epicuri pri, mei at vide noluisse.
</p>
            </div>
            <div className="image">
                <img src={resturant} width="200px" height="200px" ></img>
                <img src={resturant2} width="200px" height="200px"></img>
            </div>
        </div>
    );
};

export default About;