import { useEffect, useState } from "react";

type Props = {
   number: number;
   info: string;
};

export const Info: React.FC<Props> = ({ number, info }) => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      const duration = 2000;
      const end = number;
      const start = 0;
      const increment = end / (duration / 16);

      let current = start;
      let animationFrameId: number;

      const step = () => {
         current += increment;
         if (current < end) {
            setCount(Math.round(current));
            animationFrameId = requestAnimationFrame(step);
         } else {
            setCount(end);
         }
      };

      animationFrameId = requestAnimationFrame(step);

      return () => cancelAnimationFrame(animationFrameId);
   }, []);

   return (
      <div>
         <h3>{count.toLocaleString("en-US")}+</h3>
         <p className="text">{info}</p>
      </div>
   );
};

export default Info;
