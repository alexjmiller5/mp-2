import { RobotImageProps } from "../interfaces/RobotImagesProps";

export default function RobotImage(props: RobotImageProps) {
    return (
        <div className="robot-image">
            <img src={props.image.imageUrl} alt="Robot Image" />
        </div>
    );
}