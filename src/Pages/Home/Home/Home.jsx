import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <PhotoGallery/>
            {/* <ShopByCategory/> */}
        </div>
    );
};

export default Home;