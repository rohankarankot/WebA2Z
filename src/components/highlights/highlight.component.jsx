import React from "react";
import { decrement, increment, incrementByAmount } from "../../store/features/counterSlice"
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../../store/features/userSlice";


function HighlightComponent() {
  const count = useSelector((state) => state.counter.number);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const { address, age, gender, city, name } = user;
  console.log("user: ", user);
  console.log("count: ", count);
  return (
    <>
      {(Boolean(count)) && <h2> counter: {count}</h2>}
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(decrement())}
      >
        Decrese
      </button>

      <button onClick={() => dispatch(incrementByAmount(20))} >increase by 20</button>
      {name && <h3>name: {name}</h3>}
      {age && <h3>age{age} </h3>}
      {city && <h3>city{city} </h3>}
      {address && <h3>address{address} </h3>}
      {gender && <h3>gender{gender} </h3>}


      <br />
      <input type="text" value={name} placeholder="enter your name" onChange={(e) => dispatch(updateName(e.target.value))} />
    </>
  );
}

export default HighlightComponent;
