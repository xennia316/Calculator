import React, { useState } from "react";
import Values from "./static/values.static";
import {
	NormalButton,
	OperationButton,
	FunctionButton,
	Screen,
} from "./components";

const App = () => {
	const [valueArray, setValueArray] = useState([]);
	const [calc, setCalc] = useState(0);
	const [answer, setAnswer] = useState(0);
	const updateState = (newValue) => {
		if (newValue === "C") {
			setCalc(0);
			setValueArray([]);
			setAnswer(0);
		} else if (newValue === "=") {
			let evaluator = calc.toString();
			setAnswer(eval(evaluator));
		} else {
			setValueArray((prevArray) => [...prevArray, `${newValue}`]);
			setCalc((prevCalc) => prevCalc + `${newValue}`);
		}
	};

	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center backdrop-blur-30 bg-gray-800">
			<div className="w-[256px] h-[408px] backdrop-opacity-10 opacity-80 border-white border-2 rounded-xl p-1">
				<Screen answer={answer} calculation={calc} />
				<div className="w-full h-3/4 py-1 inline-grid grid-cols-4 gap-1">
					{Values.map((item, index) => {
						if (item.type === "function") {
							return (
								<FunctionButton
									func={item.actValue}
									key={index}
									valueArray={valueArray}
									setCalculation={setCalc}
									updateState={updateState}
								/>
							);
						} else if (item.type === "operation") {
							return (
								<>
									<OperationButton
										operation={item.actValue}
										key={index}
										valueArray={valueArray}
										updateState={updateState}
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
									setCalculation={setCalc}
									updateState={updateState}
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
