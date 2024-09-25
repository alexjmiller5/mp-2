import { ImageAndQuote } from "../interfaces/ImageAndQuote";
import KanyeQuote from "./KanyeQuote";
import RobotImage from "./RobotImage";
import './KanyeAndRobot.css';

export default function KanyeAndRobot(props: { data: ImageAndQuote[] }) {
    return (
        <div className="kanye-robot-container">
            {props.data.map((imageAndQuote, index) => {
                return (
                    <div key={index} className="image-quote-pair">
                        <RobotImage image={imageAndQuote.image} />
                        <KanyeQuote quote={imageAndQuote.quote} />
                    </div>
                );
            })}
        </div>
    );
}