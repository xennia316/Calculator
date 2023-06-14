import React, { useState, useEffect } from "react";
import Values from "./static/values.static";
import {
	NormalButton,
	OperationButton,
	FunctionButton,
	Screen,
} from "./components";

const App = () => {
	const valueArray = [];
	const [calc, setCalc] = useState(valueArray);

	useEffect(() => {
		// const finalArray = [...valueArray];
		return () => {
			const finalArray = [...valueArray];
			finalArray.push(calc);
			console.log("F", finalArray);
		};
	}, [valueArray]);

	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center backdrop-blur-30 bg-gray-800 ">
			<div className="w-[250px] h-[400px] backdrop-opacity-10 opacity-80 border-white border-2 rounded-xl">
				<Screen answer={10} calculation={valueArray.toString()} />
				<div className="w-full h-3/4 py-1 inline-grid grid-cols-4 gap-1">
					{Values.map((item, index) => {
						if (item.type === "function") {
							return (
								<FunctionButton
									func={item.actValue}
									key={index}
									setCalc={setCalc}
								/>
							);
						} else if (item.type === "operation") {
							return (
								<>
									<OperationButton
										operation={item.actValue}
										key={index}
										setCalc={setCalc}
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
