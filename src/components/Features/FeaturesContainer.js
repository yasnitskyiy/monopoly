import {connect} from "react-redux";
import Features from "./Features";


let mapStateToProps = (state) => {
    return({
        features: state.homePage.features
    })
}

const FeaturesContainer = connect(mapStateToProps)(Features)

export default FeaturesContainer