import styles from "./Button.module.scss";

type Props = {
   text: string;
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
   disabled?: boolean;
   type?: "button" | "submit" | "reset";
};

export const Button: React.FC<Props> = ({
   text,
   onClick,
   disabled,
   type = "button",
}) => {
   return (
      <button
         type={type}
         disabled={disabled}
         className={styles.button}
         onClick={onClick}
      >
         <span>{text}</span>
      </button>
   );
};
