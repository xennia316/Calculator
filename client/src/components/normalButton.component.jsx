import React from "react";

const NormalButton = ({ numberValue, changeState }) => {
	const handleClick = () => {
		changeState(numberValue);
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
