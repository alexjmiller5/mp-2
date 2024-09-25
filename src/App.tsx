import KanyeAndRobot from "./components/KanyeAndRobot";
import { ImageAndQuote } from "./interfaces/ImageAndQuote";
import { Image } from "./interfaces/Image";
import { Quote } from "./interfaces/Quote";
import { useEffect, useState } from "react";

export default function App() {
    // useState Hook to store Data.
    const [data, setData] = useState<ImageAndQuote[]>([]);
    const [duplicateCount, setDuplicateCount] = useState<number>(0);

    // useEffect Hook for fetching Kanye quote and robot image.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            if (duplicateCount >= 10) {
                console.log("Found 10 duplicates in a row, stopping...");
                return;
            }

            // Fetch Kanye quote
            const kanyeApiResponse = await fetch("https://api.kanye.rest/");
            const quote: Quote = { quote: (await kanyeApiResponse.json()).quote };

            // Check if the quote is already in the data array (ensure uniqueness)
            if (data.some((item) => item.quote.quote === quote.quote)) {
                console.log("Duplicate quote, skipping...");
                setDuplicateCount((prevCount) => prevCount + 1); // Increment duplicate counter
                return; // Skip if the quote already exists
            }

            // Reset duplicate counter when a unique quote is found
            setDuplicateCount(0);

            // Create the Image object from the quote
            const image: Image = { imageUrl: `https://robohash.org/${encodeURIComponent(quote.quote)}` };

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
