import React from 'react';
import KK from '../components/KK';
import  { useState } from 'react'; 
import Navbar from '../components/Header';
import { TiTickOutline } from "react-icons/ti";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [hovered, setHovered] = useState(false);
 
  const properties = [
    {
      id: 1,
      title: 'Charming Suburban Homes',
      location: 'A-3 Paschim Vihar, New Delhi',
      beds: 3,
      baths: 3,
      area: '1500 sq ft',
      price: '₹600,000',
    },
    {
      id: 2,
      title: 'Spacious Family Houses',
      location: 'A-3 Paschim Vihar, New Delhi',
      beds: 4,
      baths: 5,
      area: '2500 sq ft',
      price: '₹1,200,000',
    },
    {
      id: 3,
      title: 'Small Houses',
      location: 'A-3 Paschim Vihar, New Delhi',
      beds: 4,
      baths: 3,
      area: '2500 sq ft',
      price: '₹1,500,000',
    },
    // Add more property objects here as needed
  ];
  
  return (
    <div style={styles.container}>
      <Navbar />
    
    <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Find Your Dream Home with Teja Builders</h1>
        <p style={styles.heroDescription}>
          Explore an exclusive selection of prime real estate tailored to match your lifestyle and preferences. Whether you're seeking a family home, a luxurious apartment, or a smart investment.
        </p>
        <div style={styles.heroButtons}>
          <button style={styles.exploreButton}>Explore Properties</button>
          <button style={styles.getInTouchButton}>Get In Touch</button>
        </div>
        <div style={styles.features}>
          <div style={styles.featureItem}>
            <span style={styles.featureIcon}><TiTickOutline /></span> Professional Team
          </div>
          <div style={styles.featureItem}>
            <span style={styles.featureIcon}><TiTickOutline /></span> Premium Product
          </div>
        </div>
      </section>
     
      
      <section style={styles.statsSection}>
        <div style={styles.stat}>
          <h2 style={styles.statNumber}>240K</h2>
          <p style={styles.statText}>People Believe In Our Service</p>
        </div>
        <div style={styles.stat}>
          <h2 style={styles.statNumber}>2600</h2>
          <p style={styles.statText}>Property And House Ready For Occupancy</p>
        </div>
        <div style={styles.stat}>
          <h2 style={styles.statNumber}>66K</h2>
          <p style={styles.statText}>Partners Who Have Worked With Us</p>
        </div>
      </section>
      <div style={styles.containers}>
      <section style={styles.aboutSection}>
        <div style={styles.imageContainer}>
          <div style={styles.imagePlaceholder}></div>
          <div style={styles.imagePlaceholder}></div>
        </div>
        <div style={styles.textContainer}>
          <p style={styles.subtitle}>02 | About Us</p>
          <div style={styles.textinternal}>
          <h2 style={styles.title}>About Teja Builders</h2>
          <p style={styles.description}>
            Welcome to Teja Builders, where sophistication harmonizes with coziness in the heart of the bustling metropolis. 
            With a dedication to quality, we endeavor to offer our customers exceptional service and stunning residences 
            that go beyond expectations. Our goal is to transform your ideal living space into a tangible vision, 
            guaranteeing that every aspect is meticulously designed. Rely on Teja Builders for a smooth, hassle-free property journey.
          </p>
          </div>
          
        </div>
      </section>
    </div>
    <div style={{ padding: '40px', backgroundColor: '#eee', borderRadius: '10px',marginLeft:'72px',marginRight:'69px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p>02 | Featured</p>
        <h2 style={{ margin: 0,fontWeight:'bold',fontSize:'50px',marginLeft:'-770px',marginTop:'80px' }}>Featured Properties</h2>
        <button style={styles.viewMoreButton}>View More</button>
      </div>
      <div style={{ marginTop: '20px' }}>
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    marginLeft: '20px',  /* Adjust margins as needed */
    marginRight: '20px' 
  }}>
    {properties.map((property) => (
      <div
      key={property.id}
      style={{
        flex: '1',
        margin: '0 10px',
        borderRadius: '10px',
        padding: '10px',
        transition: 'transform 0.3s ease', // Add smooth transition
        transform: hovered ? 'scale(1.05)' : 'scale(1)', // Apply hover scaling
      }}
      onMouseEnter={() => setHovered(true)} // Set hover to true when mouse enters
      onMouseLeave={() => setHovered(false)} // Set hover to false when mouse leaves
    >
        <div 
          style={{ 
            backgroundColor: 'rgba(217, 217, 217, 1)', 
            height: '150px', 
            borderRadius: '10px' 
          }}>
        </div>
        <p style={{ fontWeight: 'bold' }}>{property.title}</p>
        <p>{property.location}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
         
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
        <button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="love" width="40" height="40">
    <circle cx="256" cy="256" r="244.49" fill="#f25268"></circle>
    <path fill="#fff" d="M381.91 157.66C339.49 99.28 256 133.72 256 193c0-59.29-83.5-93.74-125.93-35.35C86.23 218 129.45 323.74 256 384.48 382.54 323.74 425.77 218 381.91 157.66z"></path>
  </svg>
</button>

            <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="0 0 24 24" id="share">
  <path fill="none" d="M0 0h24v24H0V0z"></path>
  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"></path>
</svg></button>
          </div>
          <button style={styles.priceButton}>{property.price}</button>
          
        </div>
      </div>
    ))}
  </div>
</div>



     
    </div>
    <div style={styles.containerStyless} onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {/* Left Section */}
      <div style={styles.leftContainerStyle}>
        <h2 style={styles.titleStyle}>Comprehensive Real Estate Services Tailored to You</h2>
        <p style={styles.descriptionStyle}>
          Explore a curated selection of luxury homes and high-end real estate designed to suit your preferences and needs.
        </p>
      </div>

      {/* Right Section */}
      <div style={styles.rightContainerStyle}>
        <div style={styles.cardContainerStyle}>
          {/* Card 1 */}
          <div style={styles.cardStyles}>
            <div style={styles.cardImageStyle}></div>
            <p style={styles.serviceTitleStyle}>Property Sales</p>
            <p style={styles.serviceDescriptionStyle}>
              Whether you're buying your first home or looking to upgrade.
            </p>
          </div>

          {/* Card 2 */}
          <div style={styles.cardStxles}>
            <div style={styles.cardIageStyle}></div>
            <p style={styles.serviceTitleStyle}>Rental Management</p>
            <p style={styles.serviceDescriptionStyle}>
              Let us take care of your rental property with our professional management services.
            </p>
          </div>

          {/* Card 3 */}
          <div style={styles.cardStyles}>
            <div style={styles.cardImageStyle}></div>
            <p style={styles.serviceTitleStyle}>Investment Consulting</p>
            <p style={styles.serviceDescriptionStyle}>
              Navigating the world of real estate investments can be complex.
            </p>
          </div>

          {/* Card 4 */}
          <div style={styles.cardStyles}>
            <div style={styles.cardImageStyle}></div>
            <p style={styles.serviceTitleStyle}>Home Staging Marketing</p>
            <p style={styles.serviceDescriptionStyle}>
              First impressions matter. Our home staging and marketing services.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
    <div style={styles.containerStylesss}>
      {/* Left Section */}
      <div style={styles.leftSectionStyle}>
      <p style={{ color: '#FF6900', fontSize: '14px', marginBottom: '10px' }}>04 | Projects</p>
      <div style={{ display:'flex' }}>
      <h2 style={{ fontSize: '52px', fontWeight: 'bold',width:'100%' }}>Some of our Projects</h2>
        <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
          Explore a curated selection of luxury homes and high-end real estate designed to suit your preferences and needs.
        </p>
      </div>
       
      </div>

      {/* Right Section */}
      <div style={styles.rightSectionStyle} >
        <div style={styles.mainImageStyle}>
          {/* Price Tag */}
          <div style={styles.priceTagStyle}>
            <div style={styles.priceStyle}>₹10,800,000</div>
            <div style={styles.locationStyle}>Noida Sun City, Miami Beach, FL</div>
            <div style={styles.bedBathStyle}>
              <span>6 bedrooms</span>
              <span>7 bathrooms</span>
            </div>
            <button style={styles.buttonStyle}>Book Now</button>
          </div>
        </div>
        <div className='w-[50%] flex flex-col'>
        <div style={styles.smallImageContainerStyle}>
          {/* Secondary Image */}
          <div style={styles.secondaryImageStyle}></div>
          <div style={styles.secondaryImageStyle}></div>
        </div>
        <div style={styles.smallImageContainerStyle}>
          {/* Small Images */}
          <div style={styles.secondaryImageStyle}></div>
          <div style={styles.secondaryImageStyle}></div>
        </div>
        </div>

      </div>
      <button style={styles.exploreButtonStyles}>Explore More Properties</button>

      
    </div>
   
    </div>
    <div style={{ padding: '20px' }}>
      {/* Testimonials Section */}
      <div>
        <h2 style={styles.subheadingStyle}>05 | Testimonials</h2>
        <div style={{ display:'flex',width:'100%' }}>
        <h1 style={styles.headingStyle}>What Our Clients Say</h1>
        <p style={styles.paragraphStylee}>
          Hear from our satisfied clients who have found their dream homes with
          Teja Builders. Their experiences reflect our unwavering commitment to
          excellence and our dedication to ensuring every client's satisfaction.
          From the initial consultation to the final closing, we strive to make
          the home-buying process seamless and enjoyable.
        </p>
        </div>
        
        <div style={styles.containStyle}>
          <div style={styles.carStyle}>
            <div style={{display:'flex'}}>
            <div style={{height:'30px',width:'30px',borderRadius:'50%',backgroundColor:'rgba(217, 217, 217, 1)' }}></div>
            <div  style={{marginLeft:'20px'}}>
            <h3 style={{ fontWeight: 'bold' }}>Khush Raj</h3>
            <p style={{ fontStyle: 'italic' }}>Homeowner</p>
            </div>
            </div>
            
            
            <p style={styles.paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div style={styles.carStyle}>
          <div style={{display:'flex'}}>
            <div style={{height:'30px',width:'30px',borderRadius:'50%',backgroundColor:'rgba(217, 217, 217, 1)' }}></div>
            <div  style={{marginLeft:'20px'}}>
            <h3 style={{ fontWeight: 'bold' }}>Khush Raj</h3>
            <p style={{ fontStyle: 'italic' }}>Investor</p>
            </div>
            </div>

          
            <p style={styles.paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div style={styles.carStyle}>
            <div style={{display:'flex'}}>
            <div style={{height:'30px',width:'30px',borderRadius:'50%',backgroundColor:'rgba(217, 217, 217, 1)' }}></div>
            <div  style={{marginLeft:'20px'}}>
            <h3 style={{ fontWeight: 'bold' }}>Khush Raj</h3>
            <p style={{ fontStyle: 'italic' }}>Family Man</p>
            </div>
            </div>
            <p style={styles.paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div style={styles.carStyle}>
            <div style={{display:'flex'}}>
            <div style={{height:'30px',width:'30px',borderRadius:'50%',backgroundColor:'rgba(217, 217, 217, 1)' }}></div>
            <div  style={{marginLeft:'20px'}}>
            <h3 style={{ fontWeight: 'bold' }}>Khush Raj</h3>
            <p style={{ fontStyle: 'italic' }}>Environmental Advocate</p>
            </div>
            </div>
            <p style={styles.paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div style={styles.carStyle}>
            <div style={{display:'flex'}}>
            <div style={{height:'30px',width:'30px',borderRadius:'50%',backgroundColor:'rgba(217, 217, 217, 1)' }}></div>
            <div  style={{marginLeft:'20px'}}>
            <h3 style={{ fontWeight: 'bold' }}>Khush Raj</h3>
            <p style={{ fontStyle: 'italic' }}>Homeowner</p>
            </div>
            </div>
            <p style={styles.paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div style={styles.carStyle}>
            <div style={{display:'flex'}}>
            <div style={{height:'30px',width:'30px',borderRadius:'50%',backgroundColor:'rgba(217, 217, 217, 1)' }}></div>
            <div  style={{marginLeft:'20px'}}>
            <h3 style={{ fontWeight: 'bold' }}>Khush Raj</h3>
            <p style={{ fontStyle: 'italic' }}>New Parent</p>
            </div>
            </div>
            <p style={styles.paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Discover Section */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={styles.subheadingStyle}>05 | Discover Your Dream Home</h2>
        <div style={{display:'flex'}}>
        <h1 style={styles.headingStylee}>Ready to Find Your New Home?</h1>
        <p style={styles.paragraphStyleee}>
          Are you ready to find the perfect place to call home? At Teja
          Builders, we offer a diverse range of luxurious properties designed to
          meet your every need. From modern downtown apartments to spacious
          suburban homes and stunning beachfront villas, your dream home awaits.
        </p>
        </div>
        
      </div>
      <div style={{marginTop:'10px', width:'100%'}}>
      <Footer />
      </div>
    </div>
    </div>
    
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
  },
  signUpButton: {
    backgroundColor: '#ff6b00',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  heroSection: {
    textAlign: 'left',
    padding: '50px 20px',
    
    borderRadius: '15px',
    margin: '20px 0',
  },
  heroTitle: {
    fontSize: '66px',
    display:'flex',
    alignItems:'left',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginLeft:'40px',
   width:'750px'
  },
  heroDescription: {
    fontSize: '20px',
    color: '#666',
    marginBottom: '30px',
     marginLeft:'42px',
   width:'740px'
    
  },
  hero:{
    display: 'flex',
    alignItems: 'flex-start',
    gap: '50px',
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '55px',
    marginBottom: '30px',
    marginLeft:'-840px'
  },
  exploreButton: {
    backgroundColor: '#ff6b00',
    color: '#fff',
    width:'240px',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '35px',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft:'179px'
  },
  getInTouchButton: {
    backgroundColor: '#fff',
    color: '#333',
    padding: '15px 30px',
    border: '2px solid #333',
    borderRadius: '35px',
    cursor: 'pointer',
    fontSize: '16px',
    width:'240px',
    
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '140px',
    marginTop: '30px',
    marginLeft:'-710px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: '#333',
  },
  featureIcon: {
    color: 'green',
    marginRight: '5px',
  },
  statsSection: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '50px 0',
    backgroundColor: '#fff',
    borderTop: '3px solid #ff6b00',
    marginLeft:'75px'
  },
  stat: {
    display:'flex',
    gap:'20px',
    marginLeft:'-80px'
    
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
  },
  statText: {
    color: '#666',
    marginTop: '5px',
    width:'180px'
  },
  containers: {
    fontFamily: 'Arial, sans-serif',
    padding: '40px 20px',
    backgroundColor: '#fff',
  },
  aboutSection: {
    
    gap: '50px',
  },
  imageContainer: {
    display: 'flex',
    marginLeft:'60px',
    gap: '20px',
    flex: '1',
    marginRight:'60px'
  },
  imagePlaceholder: {
    width: '100%',
    height: '400px',
    backgroundColor: '#dcdcdc',
    borderRadius: '15px',
  },
  textContainer: {
    flex: '1',
    marginLeft:'60px',
    marginTop:'40px'
  },
  textinternal:{
    display:'flex',
    gap:'80px'
    

  },
  subtitle: {
    color: '#ff6b00',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  title: {
    fontSize: '52px',
    fontWeight: 'bold',
    marginBottom: '20px',
    width:'600px'
  },
  description: {
    fontSize: '10.65px',
    color: '#666',
    lineHeight: '1.6',
    width:'635px'
  },
   cardStyle :{
    width: '300px',
    backgroundColor: '#f2f2f2',
    
    padding: '20px',
    
  },

   containerStyle: {
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  
   priceButton : {
    backgroundColor: '#FF6900',
    color: 'white', 
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    marginTop: '10px',
    cursor: 'pointer',
  },

   viewMoreButton : {
    backgroundColor: '#FF6900',
    color: 'white',
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  },
  containerStyless : {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px',
    borderRadius: '10px',
    marginTop: '30px',
    marginLeft: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    
  },

   leftContainerStyle :{
    width: '100%',
    display:'flex',
    marginLeft:'20px'
  },

   rightContainerStyle : {
    width: '100%',
  },

   cardContainerStyle : {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },

  cardStyles : {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    height:'100%',
    
  },
  cardStxles : {
    width: '120%',
    height:'100%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '-1px',
    textAlign: 'center',
    
    
  },

   cardImageStyle : {
    backgroundColor: '#ddd',
    height: '350px',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  cardIageStyle : {
    backgroundColor: '#ddd',
    height: '500px',
    borderRadius: '10px',
    marginBottom: '10px',
  },

   titleStyle:{
    fontSize: '52px',
    fontWeight: 'bold',
    marginBottom: '10px',

  },

   descriptionStyle : {
    marginTop:'60px',
    color: '#666',
    fontSize: '20px',
    lineHeight: '1.6',
  },

   serviceTitleStyle : {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#FF6900',
  },

  serviceDescriptionStyle : {
    fontSize: '14px',
    color: '#666',
  },
   containerStylesss : {
  
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
  },

   leftSectionStyle : {
    width: '100%',
  },

   rightSectionStyle : {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

   mainImageStyle : {
    width: '48%',
    backgroundColor: '#ddd',
    height: '650px',
    borderRadius: '10px',
    position: 'relative',
  },

   secondaryImageStyle : {
    width: '50%',
    backgroundColor: '#ddd',
    height: '260px',
    borderRadius: '10px',
    marginBottom: '10px',
  },

   smallImageContainerStyle : {
    display: 'flex',
    gap: '20px',
    
  },

   priceTagStyle : {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '10px',
    padding: '10px',
    width: '90%',
  },

   priceStyle : {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },

   locationStyle : {
    fontSize: '14px',
    color: '#999',
  },

   buttonStyle : {
    backgroundColor: '#FF6900',
    color: 'white',
    borderRadius: '20px',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
  },

   bedBathStyle : {
    fontSize: '12px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },

  exploreButtonStyles : {
    backgroundColor: '#FF6900',
    color: 'white',
    borderRadius: '30px',
    border: 'none',
    padding: '15px 30px',
    fontSize: '16px',
    textAlign: 'center',
    marginTop: '30px',
    cursor: 'pointer',
  },
   carStyle : {
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px 0',
    backgroundColor: '#fafafa',
  },

  containStyle : {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },

   headingStyle : {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    width:'100%'
  },
   headingStylee : {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    width:'700px'
  },

   subheadingStyle : {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ff6f00',
    marginBottom: '5px',
  },

   paragraphStylee : {
    fontSize: '0.7rem',
    color: '#555',
    marginLeft:'50px',
    width:'1200px',
    marginTop:'30px'
  },
  paragraphStyleee : {
    fontSize: '0.8rem',
    color: '#555',
    marginLeft:'200px',
    width:'800px',
    marginTop:'30px'
  },
  paragraphStyle : {
    fontSize: '0.7rem',
    color: '#555',
    marginLeft:'50px',
    width:'300px'
  },
};

export default HomePage;