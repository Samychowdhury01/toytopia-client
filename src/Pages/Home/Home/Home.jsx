import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Sponsors from "../Sponsors/Sponsors";
import AOS from "aos";
import "aos/dist/aos.css";
import BestSellingToy from "../BestSellingToy/BestSellingToy";
AOS.init();

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <div data-aos="flip-left">
        <PhotoGallery />
      </div>
      <div
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <ShopByCategory />
      </div>

       <div
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <BestSellingToy />
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Sponsors />
      </div>
    </div>
  );
};

export default Home;
