import { useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { changeCategory } from "../../store/slice";

import styles from "./Card.module.scss";

export function Card({ image, name, price, rating, id, duration, category }) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(changeCategory(category));
   }, []);

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
            <p>${price}</p>
         </div>
      </Link>
   );
}
