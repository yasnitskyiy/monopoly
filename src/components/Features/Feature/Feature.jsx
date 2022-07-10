import './Feature.scss'
import {Card, CardImg, Col} from "react-bootstrap";

const Feature = (props) => {
    return (
        <Col>
            <Card className='bg-transparent border-0'>
                <Card.Body>
                    <CardImg variant="top" src={props.img}/>
                    <Card.Title className='text-center m-2 text-white'>{props.title}</Card.Title>
                    <Card.Text className='text-white text-center'>{props.text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Feature;