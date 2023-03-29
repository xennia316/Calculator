import React from "react";

const NormalButton = ({ numberValue }) => {
	return (
		<button className="grow h-14 bg-orange-900 text-white text-center backdrop-opacity-30 ">
			{numberValue}
		</button>
	);
};

export default NormalButton;
