import "./App.css";
import { useState, useEffect } from "react";

function App() {
	return (
		<div className="App">
			<Counter></Counter>
		</div>
	);
}

function Counter() {
	//# ----------------------------- digital watch ----------------------------- */
	const [time, setTime] = useState(new Date());
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1);
		return () => clearInterval(interval);
	}, []);

	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const milliseconds = time.getMilliseconds();

	//# -------------------------------- counter -------------------------------- */
	// const [count, setCount] = useState(0);

	/* ----------------------------- arrow function ----------------------------- */
	// const increaseCount = () => setCount(count + 1);
	// const decreaseCount = () => setCount(count - 1);
	// const increaseCount = () => {
	// 	const newCount = count + 1;
	// 	setCount(newCount);
	// };
	return (
		<div className="count">
			{/* <h1>Count: {count}</h1> */}
			{/* --------------------------------- counter -------------------------------- */}
			{/* ----------------- do not call the function, just the name ---------------- */}
			{/* <button onClick={increaseCount}>hit me</button>
			<button onClick={decreaseCount}>nooooo</button> */}

			{/* ------------------------------ digital watch ----------------------------- */}
			<div className="digital-watch">
				<h1>{`${hours < 10 ? "0" : ""}${hours}:${
					minutes < 10 ? "0" : ""
				}${minutes}:${seconds < 10 ? "0" : ""}${seconds}:${
					milliseconds < 10 ? "00" : milliseconds < 100 ? "0" : ""
				}${milliseconds}`}</h1>
			</div>
		</div>
	);
}

// function Product(props) {
// 	return (
// 		<div className="offset">
// 			<div className="product">
// 				<h1>Name:{props.name} </h1>
// 				<h3>Price: {props.price}</h3>
// 			</div>
// 		</div>
// 	);
// }

/* --------------------------------- ignore --------------------------------- */
// const products = [
// 	{ item: "Laptop", price: "৳ 175000" },
// 	{ item: "GPU", price: "৳ 98000" },
// 	{ item: "Processor", price: "৳ 59000" },
// 	{ item: "SmartPhone", price: "৳ 65000" },
// 	{ item: "Tablet", price: "৳ 120000" },
// 	{ item: "PC Case", price: "৳ 9000" },
// 	{ item: "SSD", price: "৳ 10500" },
// 	{ item: "Ram * 2", price: "৳ 15800" },
// 	{ item: "Fans * 6", price: "৳ 13500" },
// ];
/* ------------------- "Product" must be in capital letter ------------------ */
{
	/* {products.map((product) => (
				<Product
					name={product.item}
					price={product.price}
				></Product>
			))}
			<Product
				name="Laptop"
				price="৳ 175000"
			></Product>
			<Product
				name="SmartPhone"
				price="৳ 63000"
			></Product> 
		 */
}
export default App;
