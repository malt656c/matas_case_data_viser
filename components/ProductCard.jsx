import Image from "next/image";
import styles from "./ProductCard.module.css"
export default function ProductCard(props) {
  return (
    <div className={styles.card}>
      <Image src={props.image} alt="" width={150} height={150} className={styles.image}></Image>
      <span className={styles.name}>{props.name}</span>
      <span>{props.price}</span>
    </div>
  );
}
