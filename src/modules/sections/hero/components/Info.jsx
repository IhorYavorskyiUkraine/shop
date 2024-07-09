import { useEffect, useState } from "react";

export function Info({ number, info }) {
   const [count, setCount] = useState(0);

   useEffect(() => {
      const duration = 2000;
      const end = number;
      const start = 0;
      const increment = end / (duration / 16);

      let current = start;
      const step = () => {
         current += increment;
         if (current < end) {
            setCount(Math.round(current));
            requestAnimationFrame(step);
         } else {
            setCount(end.toLocaleString("en-US"));
         }
      };

      requestAnimationFrame(step);

      return () => window.cancelAnimationFrame(step);
   }, []);

   return (
      <div>
         <h3>{count.toLocaleString("en-US")}+</h3>
         <p className="text">{info}</p>
      </div>
   );
}

export default Info;
