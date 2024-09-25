import { KanyeQuoteProps } from "../interfaces/KanyeQuoteImageProps";
import styled from 'styled-components';

const QuoteContainer = styled.div`
    /* Additional styling if needed */
`;

const QuoteText = styled.h1`
    font-size: 1rem;
    font-weight: normal;
    color: #666;
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 1.4;
`;

export default function KanyeQuote(props: KanyeQuoteProps) {
    return (
        <QuoteContainer>
            <QuoteText>{props.quote.quote}</QuoteText>
        </QuoteContainer>
    );
}

