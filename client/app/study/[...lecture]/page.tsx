"use client"; // This component runs on the client (browser)

import { use } from "react"; // React's experimental hook used to resolve a Promise

// Define the type of props received by the component
type lectureProps = {
    // In Client Components, Next.js provides params as a Promise
    params: Promise<{
        lecture: string[]; // lecture is an array because we are using a catch-all route [...lecture]
    }>;
};

export default function Lecture({ params }: lectureProps) {

    // use() unwraps the Promise and gives the resolved value
    const reparams = use(params);

    // Logs the resolved params object in the browser console
    console.log(reparams);

    return (
        <div>
            {/* lecture[0] represents the first part of the URL */}
            <h1>Day of college : {reparams.lecture[0]}</h1>

            {/* lecture[1] represents the second part of the URL */}
            <h2>Lecture Number: {reparams.lecture[1]}</h2>
        </div>
    );
}