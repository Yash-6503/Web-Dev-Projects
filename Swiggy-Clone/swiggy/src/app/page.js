import Navbar from "./components/nav";
import Mind from './components/mind';
import Restraurant from "./components/Restraurant";
import RestraurantWithDelivery from './components/RestWithDelivery';
import BestPlaces from "./components/BestPlaces";
import BestCusines from "./components/BestCusines";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Mind />
      <Restraurant />
      <RestraurantWithDelivery />
      <BestPlaces />
      <BestCusines />
      <Footer />
      
    </div>
  );
}