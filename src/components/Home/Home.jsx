import c from './Home.module.css'
import templateFeatures from "../../images/template.png";

const Home = (props) => {
    return (
        <div>
            <div className={c.features}>
                <div>
                    <img src={templateFeatures} alt="templateFeatures"/>
                    <h2>FREE TO PLAY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit tempore unde.</p>
                </div>
                <div>
                    <img src={templateFeatures} alt="templateFeatures"/>
                    <h2>NEW COMMUNICATIONS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit tempore unde.</p>
                </div>
                <div>
                    <img src={templateFeatures} alt="templateFeatures"/>
                    <h2>COMPETITION WITH OTHERS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit tempore unde.</p>
                </div>
            </div>
        </div>
    )
}

export default Home