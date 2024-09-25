import { Quote } from "../interfaces/Quote";

export default function KanyeQuote(props: { quote: Quote }) {
    return (
        <div className="kanye-quote">
            <h1>{props.quote.quote}</h1>
        </div>
    );
}