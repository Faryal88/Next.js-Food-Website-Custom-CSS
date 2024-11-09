import Image from 'next/image';
import './menu.css'; 

const Menu = () => {
  const dishes = [
    { name: 'Pasta Primavera', description: 'A delicious pasta with mixed vegetables', price: '$12.99', image: '/pasta1.jpg', width: 400, height: 200 },
    { name: 'Grilled Salmon', description: 'Freshly grilled salmon with a side of lemon', price: '$16.99', image: '/salmon2.jpg', width: 400, height: 250 },
    { name: 'Chocolate Lava Cake', description: 'Rich chocolate cake with a gooey center', price: '$6.99', image: '/lavacake3.jpg', width: 350, height: 200 },
    { name: 'Caesar Salad', description: 'Classic Caesar salad with croutons', price: '$8.99', image: '/salad4.jpg', width: 300, height: 200 },
    { name: 'Steak & Fries', description: 'Juicy steak with crispy fries', price: '$18.99', image: '/steak5.jpg', width: 450, height: 250 },
    { name: 'Cheesecake', description: 'Creamy cheesecake with strawberry sauce', price: '$7.99', image: '/cheesecake6.jpg', width: 400, height: 200 },
  ];

  return (
    <section id="menu" className="services-section">
      <h3 className="services-title">Our Menu</h3>
      <div className="services-container">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <Image 
              src={dish.image} 
              alt={dish.name} 
              width={dish.width} 
              height={dish.height} 
              className="dish-image" 
            />
            <div className="dish-info">
              <h4 className="dish-name">{dish.name}</h4>
              <p className="dish-description">{dish.description}</p>
              <p className="dish-price">{dish.price}</p>
              <button className="buy-button">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
