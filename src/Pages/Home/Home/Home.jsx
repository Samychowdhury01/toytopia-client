import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Sponsors from "../Sponsors/Sponsors";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <PhotoGallery/>
            {/* <ShopByCategory/> */}
            <Sponsors/>
        </div>
    );
};

export default Home;