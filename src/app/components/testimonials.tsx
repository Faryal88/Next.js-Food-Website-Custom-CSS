import './testimonials.css'; 

const Testimonials = () => (
  <section id="testimonials" className="testimonials-section">
    <h3 className="testimonials-title">What Our Customers Say</h3>
    <div className="testimonials-container">
      <div className="testimonial-card">
        <img src="/food22.jpg" alt="John Doe" className="testimonial-image" />
        <p className="testimonial-text">Great food, fast delivery, and excellent customer service</p>
        <div className="rating">
          <span className="rating-stars">★ ★ ★ ★ ★</span>
        </div>
        <h4 className="testimonial-name">John Doe</h4>
      </div>

      <div className="testimonial-card">
        <img src="/food22.jpg" alt="Jane Smith" className="testimonial-image" />
        <p className="testimonial-text">Delicious and fresh every time. Highly recommended</p>
        <div className="rating">
          <span className="rating-stars">★ ★ ★ ★ ★</span>
        </div>
        <h4 className="testimonial-name">Jane Smith</h4>
      </div>

      <div className="testimonial-card">
        <img src="/food22.jpg" alt="Alex Lee" className="testimonial-image" />
        <p className="testimonial-text">Amazing flavors, will definitely order again</p>
        <div className="rating">
          <span className="rating-stars">★ ★ ★ ★ ★</span>
        </div>
        <h4 className="testimonial-name">Alex Lee</h4>
      </div>
    </div>
  </section>
);

export default Testimonials;
