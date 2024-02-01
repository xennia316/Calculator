import React from "react";

const Screen = ({ answer, calculation }) => {
	return (
		<div className="w-full h-24 flex flex-col bg-orange-900 text-white items-end text-right text-4xl rounded-t-xl p-1">
			<div className="h-1/2 text-2xl text-right">
				{calculation ? calculation : 0}
			</div>
			<div className="h-1/2 text-right font-bold">{answer ? answer : 0}</div>
		</div>
	);
};

export default Screen;
