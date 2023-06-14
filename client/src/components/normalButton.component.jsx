import React from "react";

const NormalButton = ({ numberValue, valueArray }) => {
	const handleClick = () => {
		let curr = numberValue;
		valueArray.push(curr);

		console.log("Values: ", valueArray, curr);
	};
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
