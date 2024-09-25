// KanyeAndRobot.tsx
import { ImageAndQuote } from "../interfaces/ImageAndQuote";
import KanyeQuote from "./KanyeQuote";
import RobotImage from "./RobotImage";
import './KanyeAndRobot.css';

export default function KanyeAndRobot(props: { data: ImageAndQuote[] }) {
    return (
        <div className="kanye-robot-container">
            {props.data.map((imageAndQuote, index) => (
                <div key={index} className="image-quote-pair">
                    <h1>Quote</h1>
                    <div className="image-quote-thirds-container">
                        {/* First Third */}
                        <div className="image-quote-third">
                            <div className="image-label">First Image</div>
                            <RobotImage image={{ imageUrl: imageAndQuote.image.firstImageUrl }} />
                            <div className="quote-part-label">First Third:</div>
                            <KanyeQuote quote={{ quote: imageAndQuote.quote.firstPart }} />
                        </div>
                        {/* Second Third */}
                        <div className="image-quote-third">
                            <div className="image-label">Second Image</div>
                            <RobotImage image={{ imageUrl: imageAndQuote.image.secondImageUrl }} />
                            <div className="quote-part-label">Second Third:</div>
                            <KanyeQuote quote={{ quote: imageAndQuote.quote.secondPart }} />
                        </div>
                        {/* Third Third */}
                        <div className="image-quote-third">
                            <div className="image-label">Third Image</div>
                            <RobotImage image={{ imageUrl: imageAndQuote.image.thirdImageUrl }} />
                            <div className="quote-part-label">Third Third:</div>
                            <KanyeQuote quote={{ quote: imageAndQuote.quote.thirdPart }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}