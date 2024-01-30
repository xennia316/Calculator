import React, { useEffect } from "react";

const OperationButton = ({ operation, valueArray, setCalculation }) => {
	const handleClick = () => {
		valueArray.push(operation);
		// setCalculation(valueArray);
	};

	// useEffect(() => {
	// 	setCalculation(valueArray);
	// }, [valueArray]);

	return (
		<button
			className="h-14 grow bg-yellow-600 text-white text-center bg-opacity-90"
			onClick={handleClick}
		>
			{operation}
		</button>
	);
};

export default OperationButton;
