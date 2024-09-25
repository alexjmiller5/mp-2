// KanyeAndRobot.tsx
import { ImageAndQuote } from "../interfaces/ImageAndQuote";
import KanyeQuote from "./KanyeQuote";
import RobotImage from "./RobotImage";
import styled from 'styled-components';


const KanyeRobotContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const ImageQuotePair = styled.div`
    width: 80%;
    padding: 20px;
    margin-bottom: 30px;
    border: 2px solid #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QuoteTitle = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
`;

const ImageQuoteThirdsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ImageQuoteThird = styled.div`
    width: 30%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

const Label = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;


export default function KanyeAndRobot(props: { data: ImageAndQuote[] }) {
    return (
        <KanyeRobotContainer>
            {props.data.map((imageAndQuote, index) => (
                <ImageQuotePair key={index}>
                    <QuoteTitle>Quote</QuoteTitle>
                    <ImageQuoteThirdsContainer>
                        {/* First Third */}
                        <ImageQuoteThird>
                            <Label>First Image</Label>
                            <RobotImage image={{ imageUrl: imageAndQuote.image.firstImageUrl }} />
                            <Label>First Third:</Label>
                            <KanyeQuote quote={{ quote: imageAndQuote.quote.firstPart }} />
                        </ImageQuoteThird>
                        {/* Second Third */}
                        <ImageQuoteThird>
                            <Label>Second Image</Label>
                            <RobotImage image={{ imageUrl: imageAndQuote.image.secondImageUrl }} />
                            <Label>Second Third:</Label>
                            <KanyeQuote quote={{ quote: imageAndQuote.quote.secondPart }} />
                        </ImageQuoteThird>
                        {/* Third Third */}
                        <ImageQuoteThird>
                            <Label>Third Image</Label>
                            <RobotImage image={{ imageUrl: imageAndQuote.image.thirdImageUrl }} />
                            <Label>Third Third:</Label>
                            <KanyeQuote quote={{ quote: imageAndQuote.quote.thirdPart }} />
                        </ImageQuoteThird>
                    </ImageQuoteThirdsContainer>
                </ImageQuotePair>
            ))}
        </KanyeRobotContainer>
    );
}