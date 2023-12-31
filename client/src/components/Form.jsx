import { useState } from "react";
import "../index.css";

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  function submitItems(event) {
    event.preventDefault();

    if(!description) return;

    const newItem = {description, quantity, packed: false, id: Date.now()}
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <div>
      <form className="add-form" onSubmit={submitItems}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        >
          {Array.from({ length: 20 }, (_, current) => current + 1).map(
            (num) => (
              <option value={num} key={num}>
                {num}
              </option>
            )
          )}
        </select>
        <input
          type="text"
          placeholder="Item...."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
