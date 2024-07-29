import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

// Props interface for Card component
type Props = {
   id: string; // Unique identifier for the item
   image: string; // URL of the item image
   name: string; // Name of the item
   price: number; // Price of the item
   rating: number; // Rating of the item (out of 5)
   duration: number; // Animation duration (in milliseconds)
   category: string; // Category of the item for routing
};

// Card component
export const Card: React.FC<Props> = ({
   image,
   name,
   price,
   rating,
   id,
   duration,
   category,
}) => {
   return (
      <Link
         data-aos="fade-up" // Animation on scroll
         data-aos-duration={duration} // Duration of the animation
         className={styles.link} // Style for the link
         to={`/${category}/${id}`} // Dynamic route based on category and id
      >
         <div className={styles.wrapper}>
            <div className={styles.image}>
               {/* Display item image */}
               <img src={image} alt="card image" />
            </div>
            <h4>{name}</h4>
            <div className={styles.rating}>
               {/* Display rating using react-simple-star-rating */}
               <Rating readonly allowFraction size={20} initialValue={rating} />
               <p>{rating}/5</p> {/* Show rating out of 5 */}
            </div>
            <p>${price} </p> {/* Display price */}
         </div>
      </Link>
   );
};
