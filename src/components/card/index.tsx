import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

type Props = {
   id: string;
   image: string;
   name: string;
   price: number;
   rating: number;
   duration: number;
   category: string;
};

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
         data-aos="fade-up"
         data-aos-duration={duration}
         className={styles.link}
         to={`/${category}/${id}`}
      >
         <div className={styles.wrapper}>
            <div className={styles.image}>
               <img src={image} alt="card image" />
            </div>
            <h4>{name}</h4>
            <div className={styles.rating}>
               <Rating readonly allowFraction size={20} initialValue={rating} />
               <p>{rating}/5</p>
            </div>
            <p>${price} </p>
         </div>
      </Link>
   );
};
