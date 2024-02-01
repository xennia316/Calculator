import React from "react";

const NormalButton = ({ numberValue, updateState }) => {
	const handleClick = () => {
		updateState(numberValue);
	};
	return (
		<button
			className="grow h-14 bg-orange-900 text-white text-center backdrop-opacity-30 rounded-md "
			onClick={handleClick}
		>
			{numberValue}
		</button>
	);
};

export default NormalButton;
