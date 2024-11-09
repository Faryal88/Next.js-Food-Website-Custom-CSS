import Image from "next/image";
import './heroSection.css'; 

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-image">
      <Image
        src="/food1.jpg"
        alt="Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className="hero-content">
      <h2 className="hero-title">Delicious Food Delivered To You</h2>
      <p className="hero-description">Explore our menu and order your favorite dishes</p>
      <button className="hero-button">See Menu</button>
    </div>
  </section>
);

export default HeroSection;
