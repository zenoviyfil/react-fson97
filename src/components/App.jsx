import { Product } from "./Product";

const productData = [{
  id:"1_product",
  name:"Tacos With Lime",
  imgUrl:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  price:"10.99"
},{
  id:"2_product",
  name:"Fries and Burger",
  imgUrl:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640",
  price:"14.29"
}]

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>
      {productData.map((item) => {
        return (
          <Product 
          key={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          price={item.price}
          />
        )
      })}
    </div>
  );
}
