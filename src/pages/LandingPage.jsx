import Hero from '../components/Hero.jsx';
import Slider from '../components/Slider.jsx';
import Services from '../components/Services.jsx';
// import Steps from '../components/Steps.jsx';
import Documents from '../components/Documents.jsx';
import Reviews from '../components/Reviews.jsx';
import Faq from '../components/Faq.jsx';
import CallTooAction from '../components/CallTooAction.jsx';

const LandingPage = ({onOpenModal}) => {
  return (
    <div>
      <Hero onOpenModal={onOpenModal}/>
      <Slider/>
      <Services onOpenModal={onOpenModal}/>
      {/*<Steps/>*/}
      {/*<Documents/>*/}
      <Reviews/>
      <Faq/>
      <CallTooAction onOpenModal={onOpenModal}/>
    </div>
  );
};

export default LandingPage;
