import styles from "./Button.module.scss";

type Props = {
   text: string;
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
   disabled?: boolean;
   type?: "button" | "submit" | "reset";
   img?: string;
   className?: string;
};

export const Button: React.FC<Props> = ({
   text,
   onClick,
   disabled,
   type = "button",
   img,
   className = "",
}) => {
   return (
      <button
         type={type}
         disabled={disabled}
         className={`${styles.button} ${className}`}
         onClick={onClick}
      >
         <span>{text}</span>
         {img && <img src={img} alt="img" />}
      </button>
   );
};
