import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const [incrementAmount, setIncrementAmount] = useState(0);

	const addValue = Number(incrementAmount) || 0;

	const resetAll = () => {
		setIncrementAmount(0);
		dispatch(reset());
	};

	return (
		<section>
			<p>{count}</p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</section>
	);
};

export default Counter;
