import ProductInfoCard from "../components/productInfoCard";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar"


const HomePage = (props) => {
    const {productinfoCard, categories} = props;
    return (
        <div className='homepage-root-container'>
            <Navbar />
            <CategoryBar categories = {categories}/>

            <div className="homepage-body">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg" alt="home_image" className="carausal-img"/>

                <div className="products-card-container">
                    {
                        productinfoCard.map((ele) => {
                            return <ProductInfoCard
                                data = {ele}
                            />;  
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default HomePage;

