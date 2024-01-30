import React, { useEffect } from "react";

const NormalButton = ({ numberValue, valueArray, setCalculation }) => {
	const handleClick = () => {
		let curr = numberValue;
		valueArray.push(curr);
		console.log(valueArray);
	};
	// useEffect(() => {
	// 	setCalculation(valueArray);
	// }, [handleClick]);
	return (
		<button
			className="grow h-14 bg-orange-900 text-white text-center backdrop-opacity-30 "
			onClick={handleClick}
		>
			{numberValue}
		</button>
	);
};

export default NormalButton;
