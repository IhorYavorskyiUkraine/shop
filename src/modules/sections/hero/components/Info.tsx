import { useEffect, useState } from "react"; // Import React hooks

type Props = {
   number: number;
   info: string;
};

// Define the Info component
export const Info: React.FC<Props> = ({ number, info }) => {
   const [count, setCount] = useState(0); // State to keep track of the animated count

   useEffect(() => {
      const duration: number = 2000; // Duration of the animation in milliseconds
      const end: number = number; // Final count value
      const start: number = 0; // Initial count value
      const increment: number = end / (duration / 16); // Increment value for each frame (16ms per frame)

      let current: number = start; // Current count value
      let animationFrameId: number; // ID of the animation frame for cleanup

      // Animation step function
      const step = () => {
         current += increment; // Update current count value
         if (current < end) {
            setCount(Math.round(current)); // Update state with the rounded current value
            animationFrameId = requestAnimationFrame(step); // Request the next animation frame
         } else {
            setCount(end); // Ensure final count is exactly the end value
         }
      };

      animationFrameId = requestAnimationFrame(step); // Start the animation

      // Cleanup function to cancel the animation frame if the component unmounts
      return () => cancelAnimationFrame(animationFrameId);
   }, [number]);

   return (
      <div>
         <h3>{count.toLocaleString("en-US")}+</h3>
         <p className="text">{info}</p>
      </div>
   );
};

export default Info;
