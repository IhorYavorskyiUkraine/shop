import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

// Defining the props type for the Card component
type Props = {
   name: string;
};

// Card component for displaying a clickable card with a background image
export const Card: React.FC<Props> = ({ name }) => {
   return (
      <Link to={`/browse_style/${name.toLowerCase()}`} className={styles.card}>
         {/* Displaying the name of the dress style */}
         <h3>{name}</h3>
         <div className={styles.bg}>
            {/* Background image for the card */}
            <img src={`./images/browseStyle/${name}.jpg`} alt="bg" />
         </div>
      </Link>
   );
};
