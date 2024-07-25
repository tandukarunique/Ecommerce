import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assests/images/Banner1.png"

const Home = () => {
  return (
    <>
      <HomeBanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
              <img
                src= {banner1} alt="banner1"
                className="cursor w-100" 
              />
              </div>
            </div>

            <div className="col-ml-2 productRow" ></div>
            <div className="d-flex align-items-left">
              <div className="info w-100">
                <h3 className="ml-0 hd">BEST SELLERS</h3>
                <p className="text-light text-sml mb-0 "> Do not miss the current offers </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
