import styles from './style';
import {Navbar, Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Stats, Testimonials} from './Components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      {/* Others Section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;