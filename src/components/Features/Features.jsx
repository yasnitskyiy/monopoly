import Feature from "./Feature/Feature";
import "./Feature/Feature.scss";
import {Row} from "react-bootstrap";

const Features = (props) => {

    let featureItems = props.features.map(feature => <Feature key={feature.id} img={feature.imageSrc} title={feature.title} text={feature.text} /> );

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {featureItems}
        </Row>
    );
}

export default Features;