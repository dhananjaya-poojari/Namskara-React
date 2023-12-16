import { useState } from "react";
import { addItem, removeItem } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [name, setName] = useState("");
  return (
    <div className="flex-wrap bg-blue-50">
      <h2>Redux Demo Page</h2>
      <p>Namsthe react</p>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-green-500 mr-10 ml-10"
        onClick={() => {
          if (name) dispatch(addItem(name));
          setName("");
        }}
      >
        Add
      </button>

      {cartItems.map((x, index) => (
        <div key={index}>
          {x}
          <button
            className="bg-red-500 ml-10"
            onClick={() => {
              dispatch(removeItem(x));
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Contact;
