import React from "react";

const OperationButton = ({ operation }) => {
	return (
		<button className="h-14 grow bg-yellow-600 text-white text-center bg-opacity-90">
			{operation}
		</button>
	);
};

export default OperationButton;
