import React, { useEffect } from "react";

const FunctionButton = ({ func, valueArray, setAnswer }) => {
	// useEffect(() => {
	// setAnswer(valueArray);
	// }, [valueArray]);

	const handleClick = () => {
		if (func === "C") {
			valueArray.length = 0;
		} else if (func === "+/-") {
			if (valueArray[0] === "-") {
				valueArray.shift();
			} else {
				valueArray.unshift("-");
			}
		} else if (func === "=") {
			let lastValue = valueArray[valueArray.length - 1];
			["/", ".", "+", "-", "*"].includes(lastValue) &&
				valueArray.pop(lastValue);
			setAnswer(valueArray.join(""));
			valueArray.length = 0;
		} else if (func === "e") {
			valueArray.push(func);
		} else if (func === "%") {
			valueArray.push("/100");
		}
		// setAnswer(valueArray);
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
