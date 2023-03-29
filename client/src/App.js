import React from "react";
import {
	NormalButton,
	OperationButton,
	FunctionButton,
	Screen,
} from "./components";
const App = () => {
	const Values = [
		{ type: "function", actValue: "C" },
		{ type: "function", actValue: "+/-" },
		{ type: "function", actValue: "%" },
		{ type: "operation", actValue: "/" },
		{ type: "number", actValue: "7" },
		{ type: "number", actValue: "8" },
		{ type: "number", actValue: "9" },
		{ type: "operation", actValue: "*" },
		{ type: "number", actValue: "4" },
		{ type: "number", actValue: "5" },
		{ type: "number", actValue: "6" },
		{ type: "operation", actValue: "-" },
		{ type: "number", actValue: "1" },
		{ type: "number", actValue: "2" },
		{ type: "number", actValue: "3" },
		{ type: "operation", actValue: "+" },
		{ type: "number", actValue: "0" },
		{ type: "number", actValue: "." },
		{ type: "function", actValue: "e" },
		{ type: "operation", actValue: "=" },
	];
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center backdrop-blur-30 bg-gray-800 ">
			<div className="w-[250px] h-[400px] backdrop-opacity-10 opacity-80 border-white border-2 rounded-xl">
				<Screen answer={10} />
				<div className="w-full h-3/4 py-1 inline-grid grid-cols-4 gap-1">
					{Values.map((item, index) => {
						if (item.type === "function") {
							return <FunctionButton func={item.actValue} key={index} />;
						} else if (item.type === "operation") {
							return (
								<>
									<OperationButton operation={item.actValue} key={index} />
									{/* <br /> */}
								</>
							);
						} else if (item.type === "number") {
							return <NormalButton numberValue={item.actValue} key={index} />;
						}
						return <></>;
					})}
				</div>
			</div>
		</div>
	);
};
export default App;
