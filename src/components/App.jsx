import React, { useState } from "react";

function App() {
	const [inputText, setInputText] = useState("");
	const [items, setItems] = useState([]);//create an array of items

	function handleChange(e) {//Get a hold of an input value and set it to a new input value
		const newInput = e.target.value;
		setInputText(newInput);
  }
  function addItem(){
    setItems((prevItem)=>{//get a hold of a prev item and add 
          return[...prevItem, [inputText]]
    });
    setInputText("");// set the new value to an empty string
  }
	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input value={inputText} onChange={handleChange} type="text" />
				<button onClick={addItem} >
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{items.map((item) => {//for each items array, map through and add another item to items as a li
						return <li>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>
