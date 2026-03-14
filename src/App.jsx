import "./App.css";
import Categories from "./components/categories";
import Nav from "./components/nav";
import SubCategories from "./components/subCategories";

const MyApp = () => {

    return (

        <div className="main-cont">

            <nav className="my-nav">
                <Nav/>
            </nav>

            <br />
            <div className="container">
                <div className="row">

                    <div className="col-8 left">
                        <Categories/>
                    </div>

                    <div className="col-4 right">

                        <div className="right-top">
                            <SubCategories/>
                        </div>

                        <div className="right-bottom"></div>
                    </div>
                </div>
            </div>
            <section className="container">
                <div className="row">
                    <div className="col-4 mid-left"></div>
                    <div className="col-4 mid-mid"></div>
                    <div className="col-4 mid-right"></div>
                </div>
            </section>
        </div>
    )
}

export default MyApp;