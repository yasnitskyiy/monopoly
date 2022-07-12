import Feature from "./Feature/Feature";
import "./Feature/Feature.scss";
import {Row} from "react-bootstrap";
import {useSelector} from 'react-redux'

const Features = () => {
    const features = useSelector((state) => state.home.value);
    const x = useSelector((state) => state.user.email);
    let featureItems = features.map(item => <Feature key={item.id} img={item.imageSrc} title={item.title} text={item.text} /> );

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {featureItems}
            {x}
        </Row>
    );
}

export default Features;