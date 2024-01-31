import React, { useEffect, useState } from "react";
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

	const updateState = (newValue) => {
		if (newValue === "C") {
			setCalc(0);
			setValueArray([]);
		} else {
			setValueArray((prevArray) => [...prevArray, `${newValue}`]);
			setCalc((prevCalc) => prevCalc + `${newValue}`);
		}
	};

	let evaluator = calc.toString();

	const answer = eval(evaluator);

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
