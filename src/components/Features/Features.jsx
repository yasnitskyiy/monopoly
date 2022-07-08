import Feature from "./Feature/Feature";
import "./Feature/Feature.scss";

const Features = (props) => {

    let featureItems = props.features.map(feature => <Feature key={feature.id} img={feature.imageSrc} title={feature.title} text={feature.text}/>)

    return (
        <div className={'features'}>
            {featureItems}
        </div>
    );
}

export default Features;