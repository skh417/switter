import React, { useState } from "react";
import { dbService } from "../fbase";

const Home = () => {
  const [sweet, setSweet] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("sweets").add({
      sweet,
      createdAt: Date.now(),
    });
    setSweet("");
  };

  const onChange = (event) => {
    const { value } = event.target;
    setSweet(value);
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={sweet}
          onChange={onChange}
          type='text'
          placeholder="What's on your mind"
          maxLength={120}
        />
        <input type='submit' value='Sweet' />
      </form>
    </div>
  );
};
export default Home;
