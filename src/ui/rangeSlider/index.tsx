import {
   ChangeEvent,
   Dispatch,
   FC,
   SetStateAction,
   useEffect,
   useRef,
   useState,
} from "react";

import styles from "./RangeSlider.module.scss";

type Props = {
   isShowTooltip?: boolean;
   max: number;
   min: number;
   onChange?: (value: number[]) => void;
   step: number;
   value: number[];
};

export const RangeSlider: FC<Props> = ({
   isShowTooltip = false,
   max,
   min,
   onChange,
   step,
   value,
}) => {
   const [minValue, setMinValue] = useState(value[0]);
   const [maxValue, setMaxValue] = useState(value[1]);

   const trackRef = useRef<HTMLDivElement | null>(null);
   const minInputRef = useRef<HTMLInputElement | null>(null);
   const maxInputRef = useRef<HTMLInputElement | null>(null);
   const minTooltipRef = useRef<HTMLDivElement | null>(null);
   const maxTooltipRef = useRef<HTMLDivElement | null>(null);

   const updateStyles = () => {
      if (trackRef.current && minTooltipRef.current && maxTooltipRef.current) {
         const minLeft = `${((minValue - min) / (max - min)) * 100}%`;
         const maxRight = `${((max - maxValue) / (max - min)) * 100}%`;
         trackRef.current.style.left = minLeft;
         trackRef.current.style.right = maxRight;
         minTooltipRef.current.style.left = minLeft;
         minTooltipRef.current.style.transform = `translateX(-${minLeft})`;
         maxTooltipRef.current.style.right = maxRight;
         maxTooltipRef.current.style.transform = `translateX(${maxRight})`;
      }
   };

   useEffect(updateStyles, [minValue, maxValue]);

   const handleChange =
      (
         setValue: Dispatch<SetStateAction<number>>,
         otherValue: number,
         isMin: boolean,
      ) =>
      (event: ChangeEvent<HTMLInputElement>) => {
         const newValue = Number(event.target.value);
         if (
            (isMin && newValue <= otherValue) ||
            (!isMin && newValue >= otherValue)
         ) {
            setValue(newValue);
            onChange?.(isMin ? [newValue, otherValue] : [otherValue, newValue]);

            if (minInputRef.current && maxInputRef.current) {
               minInputRef.current.style.zIndex = isMin ? "20" : "10";
               maxInputRef.current.style.zIndex = isMin ? "10" : "20";
            }

            if (minTooltipRef.current && maxTooltipRef.current) {
               minTooltipRef.current.style.zIndex = isMin ? "20" : "10";
               maxTooltipRef.current.style.zIndex = isMin ? "10" : "20";
            }
         }
      };

   return (
      <div className={styles.rangeSlider}>
         <div className={styles.track} ref={trackRef}></div>
         <input
            className={`${styles.input} ${styles.inputMin}`}
            max={max}
            min={min}
            name="min"
            onChange={handleChange(setMinValue, maxValue, true)}
            ref={minInputRef}
            step={step}
            type="range"
            value={minValue}
         />
         <input
            className={`${styles.input} ${styles.inputMax}`}
            max={max}
            min={min}
            name="max"
            onChange={handleChange(setMaxValue, minValue, false)}
            ref={maxInputRef}
            step={step}
            type="range"
            value={maxValue}
         />
         {isShowTooltip && (
            <>
               <div className={styles.tooltipWrapper} ref={minTooltipRef}>
                  <div className={styles.tooltipMin}>${minValue}</div>
               </div>
               <div className={styles.tooltipWrapper} ref={maxTooltipRef}>
                  <div className={styles.tooltipMax}>${maxValue}</div>
               </div>
            </>
         )}
      </div>
   );
};
