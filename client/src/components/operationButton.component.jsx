import React from "react";

const OperationButton = ({ operation, setCalc }) => {
	return (
		<button
			className="h-14 grow bg-yellow-600 text-white text-center bg-opacity-90"
			onClick={() => {
				setCalc();
			}}
		>
			{operation}
		</button>
	);
};

export default OperationButton;
