import { useState } from "react";
import shirts from "./shirts.jpg";

export default function APP() {
  const [name, setName] = useState("");
  const [collection, setCollection] = useState("");
  const [quantity, setQuantity] = useState("");
  const [instruction, setInstruction] = useState("");
  function order() {
    const sam = `<h2 id="out" >customer Name is ${name} you ordered  ${collection} your number of shopping 
    items are ${quantity} Products.Thank you For order Mr.${name} reach you soon </h2>
    <h2>Instructions: ${instruction} </h2>`;
    document.getElementById("root").innerHTML = sam;
  }
  return (
    <form>
      <img width="300px" src={shirts} />
      <h3>Enjoy Your Shopping!</h3>
      <label id="productlabel">
        Name:
        <input
          type="text"
          className="productnamei"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div>
        <label id="productlabel">
          collection:
          <select
            name="collection"
            className="productcollection"
            onChange={(e) => setCollection(e.target.value)}
          >
            <option>shirts</option>
            <option>pants</option>
            <option>suit</option>
          </select>
        </label>
      </div>
      <div>
        <label id="productlabel">
          Quantity:
          <label for="quantity"></label>
          <input
            type="number"
            className="productquantity"
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label id="productlabel">
          <p>Additional instructions:</p>
          <textarea
            className="productinstruction"
            name="container"
            onChange={(e) => setInstruction(e.target.value)}
          ></textarea>
        </label>
      </div>
      <button className="submitcreateAC" onClick={order}>
        Submit
      </button>
    </form>
  );
}
