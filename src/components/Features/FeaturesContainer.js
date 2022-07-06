import {connect} from "react-redux";
import Features from "./Features";

let mapStateToProps = (state) => {
    return({
        features: state.homePage.features
    })
}

// let mapDispatchToProps = (dispatch) => {
//     return({
//
//     })
// }

const FeaturesContainer = connect(mapStateToProps)(Features)

export default FeaturesContainer