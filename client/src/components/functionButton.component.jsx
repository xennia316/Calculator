import React, { useEffect } from "react";

const FunctionButton = ({ func, valueArray, setAnswer, updateState }) => {
	const handleClick = () => {
		if (func === "C") {
			valueArray.length = 0;
			updateState("C");
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
		} else if (func === "e") {
			updateState("e");
		} else if (func === "%") {
			updateState("/100");
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
