import React from "react";

const FunctionButton = ({ func, valueArray, setAnswer }) => {
	const handleClick = () => {
		if (func === "C") {
			valueArray.length = 0;
			console.log("Happening", valueArray);
		} else if (func === "+/-") {
			console.log("Shifting here", func);
			if (valueArray[0] === "-") {
				valueArray.shift();
			} else {
				valueArray.unshift("-");
				console.log("Shifting here", func);
			}
		} else if (func === "=") {
			let pro = valueArray.join("");
			console.log("Pro", pro, typeof pro);
			setAnswer(pro);
		} else if (func === "e") {
			valueArray.push(func);
		} else if (func === "%") {
			valueArray.push("/100");
		}
	};

	return (
		<button
			className=" h-14 bg-orange-900 text-white text-center backdrop-opacity-10"
			onClick={handleClick}
		>
			{func}
		</button>
	);
};

export default FunctionButton;
