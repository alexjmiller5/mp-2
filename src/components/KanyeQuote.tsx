import { KanyeQuoteProps } from "../interfaces/KanyeQuoteImageProps";

export default function KanyeQuote(props: KanyeQuoteProps) {
    return (
        <div className="kanye-quote">
            <h1>{props.quote.quote}</h1>
        </div>
    );
}