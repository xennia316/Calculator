import React from "react";

const OperationButton = ({ operation, changeState }) => {
	const handleClick = () => {
		changeState(operation);
	};
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
