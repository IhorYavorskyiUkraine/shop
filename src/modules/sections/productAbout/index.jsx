import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "../../../store/slice";

import styles from "./ProductAbout.module.scss";

export function ProductAbout() {
   const { category, status, error } = useSelector(state => state.global);

   const dispatch = useDispatch();

   const { id } = useParams();

   useEffect(() => {
      dispatch(fetchProduct({ category, id }));
   });
   return <></>;
}
