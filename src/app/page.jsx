import Image from "next/image";
import ProductCard from "../../components/ProductCard";
import { promises as fs } from "fs";

const file = await fs.readFile(process.cwd() + "/public/produkt.json", "utf8");
const productData = JSON.parse(file);
console.log(JSON.parse(file)[0]);

export default function Home() {
  return (
    <main>
      {productData.map((produkt) => {
        return(
         <ProductCard key={produkt.id} image={produkt.image} name={produkt.name} price={produkt.price}></ProductCard>
      )
       
      })}
    </main>
  );
}
