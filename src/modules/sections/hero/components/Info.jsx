import styles from "./Info.module.scss";

function Info({ number, info }) {
   return (
      <div>
         <h3>{number}+</h3>
         <p className="text">{info}</p>
      </div>
   );
}

export default Info;
