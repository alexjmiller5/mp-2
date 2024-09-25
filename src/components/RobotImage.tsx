import { RobotImageProps } from "../interfaces/RobotImagesProps";
import styled from 'styled-components';

const RobotImageContainer = styled.div`
    /* Additional styling if needed */
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 10%;
    border: 2px solid #ddd;
    margin-bottom: 10px;
`;

export default function RobotImage(props: RobotImageProps) {
    return (
        <RobotImageContainer>
            <Image src={props.image.imageUrl} alt="Robot Image" />
        </RobotImageContainer>
    );
}