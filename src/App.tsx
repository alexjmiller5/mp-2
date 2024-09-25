import KanyeAndRobot from "./components/KanyeAndRobot";
import { ImageAndQuote } from "./interfaces/ImageAndQuote";
import { Image } from "./interfaces/Image";
import { Quote } from "./interfaces/Quote";
import { useEffect, useState } from "react";

export default function App() {
    // useState Hook to store Data.
    const [data, setData] = useState<ImageAndQuote[]>([]);
    const [duplicateCount, setDuplicateCount] = useState<number>(0);

    // Function to split quote into thirds
    function splitQuoteIntoThirds(fullQuote: string): { firstPart: string, secondPart: string, thirdPart: string } {
        const length = fullQuote.length;
        const thirdLength = Math.floor(length / 3);
        const remainder = length % 3;

        let firstPartEnd = thirdLength;
        let secondPartEnd = 2 * thirdLength;

        if (remainder > 0) firstPartEnd += 1;
        if (remainder > 1) secondPartEnd += 1;

        const firstPart = fullQuote.slice(0, firstPartEnd);
        const secondPart = fullQuote.slice(firstPartEnd, secondPartEnd);
        const thirdPart = fullQuote.slice(secondPartEnd);

        return { firstPart, secondPart, thirdPart };
    }

    // useEffect Hook for fetching Kanye quote and robot images.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            if (duplicateCount >= 10) {
                console.log("Found 10 duplicates in a row, stopping...");
                return;
            }

            // Fetch Kanye quote
            const kanyeApiResponse = await fetch("https://api.kanye.rest/");
            const fullQuote = (await kanyeApiResponse.json()).quote;

            // Check if the quote is already in the data array (ensure uniqueness)
            if (data.some((item) => item.quote.fullQuote === fullQuote)) {
                console.log("Duplicate quote, skipping...");
                setDuplicateCount((prevCount) => prevCount + 1); // Increment duplicate counter
                return; // Skip if the quote already exists
            }

            // Reset duplicate counter when a unique quote is found
            setDuplicateCount(0);

            // Split the quote into three parts
            const { firstPart, secondPart, thirdPart } = splitQuoteIntoThirds(fullQuote);

            // Create the Quote object
            const quote: Quote = {
                fullQuote: fullQuote,
                firstPart: firstPart,
                secondPart: secondPart,
                thirdPart: thirdPart
            };

            // Create the Image object from the quote parts
            const image: Image = {
                firstImageUrl: `https://robohash.org/${encodeURIComponent(firstPart)}`,
                secondImageUrl: `https://robohash.org/${encodeURIComponent(secondPart)}`,
                thirdImageUrl: `https://robohash.org/${encodeURIComponent(thirdPart)}`
            };

            // Create the ImageAndQuote object
            const newImageAndQuote: ImageAndQuote = { image: image, quote: quote };

            // Update state with new data
            setData((prevData) => [...prevData, newImageAndQuote]);
        }

        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length, duplicateCount]); // Add duplicateCount as a dependency

    return (
        <div>
            <KanyeAndRobot data={data} />
        </div>
    );
}
