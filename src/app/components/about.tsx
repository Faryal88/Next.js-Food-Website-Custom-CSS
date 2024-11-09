import Link from 'next/link';
import './about.css'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Welcome to Flavor Fusion, where every meal is a celebration of flavor and culture! Our restaurant is dedicated to serving mouthwatering dishes crafted from the freshest ingredients, ensuring that each bite takes you on a culinary journey. Whether you’re craving traditional favorites or modern twists, our diverse menu caters to every palate. With a cozy atmosphere and friendly staff, we aim to create a memorable dining experience for you and your loved ones. Join us at Foodie, where passion for food meets hospitality!
        </p>
        <Link href="/menu" legacyBehavior>
          <a className="menu-button">
            Check Our Menu
          </a>
        </Link>
      </div>
    </section>
  );
};

export default About;
