import React from "react";

const FunctionButton = ({ func }) => {
	return (
		<button className=" h-14 bg-orange-900 text-white text-center backdrop-opacity-10">
			{func}
		</button>
	);
};

export default FunctionButton;
