import React, { useState } from "react";
import Values from "./static/values.static";
import {
	NormalButton,
	OperationButton,
	FunctionButton,
	Screen,
} from "./components";

const App = () => {
	let valueArray = [];
	const [calc, setCalc] = useState("");

	const answer = eval(calc);
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center backdrop-blur-30 bg-gray-800 ">
			<div className="w-[250px] h-[400px] backdrop-opacity-10 opacity-80 border-white border-2 rounded-xl">
				<Screen answer={answer} calculation={calc} />
				<div className="w-full h-3/4 py-1 inline-grid grid-cols-4 gap-1">
					{Values.map((item, index) => {
						if (item.type === "function") {
							return (
								<FunctionButton
									func={item.actValue}
									key={index}
									valueArray={valueArray}
									setAnswer={setCalc}
								/>
							);
						} else if (item.type === "operation") {
							return (
								<>
									<OperationButton
										operation={item.actValue}
										key={index}
										valueArray={valueArray}
									/>
									{/* <br /> */}
								</>
							);
						} else if (item.type === "number") {
							return (
								<NormalButton
									numberValue={item.actValue}
									key={index}
									valueArray={valueArray}
									// changeState={changeState}
								/>
							);
						}
						return <></>;
					})}
				</div>
			</div>
		</div>
	);
};
export default App;
