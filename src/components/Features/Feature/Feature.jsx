import './Feature.scss'

const Feature = (props) => {
    return (
        <div>
            <img src={props.img} alt=""/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default Feature;