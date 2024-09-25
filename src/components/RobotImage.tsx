import { Image } from "../interfaces/Image";

export default function RobotImage(props: { image: Image }) {
    return (
        <div className="robot-image">
            <img src={props.image.imageUrl} alt="Robot Image" />
        </div>
    );
}