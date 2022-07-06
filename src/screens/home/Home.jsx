import c from '../../components/Features/Feature/Feature.module.scss'
import FeaturesContainer from "../../components/Features/FeaturesContainer";

const Home = (props) => {
    return (
        <FeaturesContainer store={props.store}/>
    )
}

export default Home