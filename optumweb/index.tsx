import React, { useEffect } from "react";
import { render } from "react-dom";
import BenefitComponent from "./Shared/Components/BenefitComponent";
import TrustList from "./Shared/Components/TrustList";
import FeatureList from "./Shared/Components/FeatureList";
import QQForm from "./Shared/Components/QQform";


const App = () => {
    //async
    useEffect(() => {

        //hv to use Helmet
        document.title = "Your Page Title Here";
    }, []);
    return (
        <>
            <BenefitComponent />
            <TrustList />
            <QQForm />
            {/* <div className="iconwrp">
                Test
                <img src={require("./assets/images/claim.svg")} alt="image"></img>
            </div> */}
            {/* <FeatureList /> */}
        </>

    );
};

render(<App />, document.getElementById("root"));