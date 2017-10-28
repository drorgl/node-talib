import talib = require("../typings/index");

// function generate(func: talib.IExplainResult): string {
// 	let desc =  "\r\n" +
// 	"// name:" + func.name + "\r\n" +
// 	"// group: " + func.group + "\r\n" +
// 	"// hint: " + func.hint + "\r\n";

// 	for (const opt of func.optInputs) {
// 		desc += "// " + opt.name + " (" + opt.displayName + ") - " + opt.hint + " = " + opt.defaultValue + "\r\n";
// 	}

// 	desc += "export async function " + func.name + "(";

// 	let first_parameter: string = null;

// 	for (const input of func.inputs) {
// 		if (input.flags) {
// 			for (const name of Object.keys( input.flags)) {
// 				if (!first_parameter) {
// 					first_parameter = input.flags[name];
// 				}
// 				desc += " " + input.flags[name] + " : number[],";
// 			}
// 		} else {
// 			desc += " " + input.name + " : number[]," ;
// 			if (!first_parameter) {
// 				first_parameter = input.name;
// 			}
// 		}
// 	}

// 	for (const opt of func.optInputs) {
// 		desc += " " + opt.name + ": number = " + opt.defaultValue + ",";
// 	}

// 	desc += "): Promise<IExecutionResult<{ ";
// 	for (const output of func.outputs) {
// 		desc += " " + output.name + ":number[],";
// 	}
// 	desc += " }>> {\r\n" ;

// 	desc +=
// 	"	return await execute_async({" +
// 	"		name: \"" + func.name +  "\"," +
// 	"		startIdx: 0," +
// 	"		endIdx: " + first_parameter + ".length - 1," ;

// 	for (const input of func.inputs) {
// 		if (input.flags) {
// 			for (const name of Object.keys( input.flags)) {
// 				desc += " " + input.flags[name] + ",";
// 			}
// 		} else {
// 			desc += " " + input.name + ",";
// 		}
// 	}

// 	for (const opt of func.optInputs) {
// 		desc += " " + opt.name + ",";
// 	}

// 	desc +=
// 	"	}) as any;\r\n" +
// 	"}" ;
// 	return desc;
// }

// Display module version
console.log();
console.log("TALib Version: " + talib.version);

const groups = new Set<string>();

// Display all indicator functions
for (const func of talib.functions) {
	console.log(func.name);
	const explanation = talib.explain(func.name);
	console.log(JSON.stringify(explanation, null, "\t" ));
	groups.add(explanation.group);
	// console.log(generate(explanation));

}

console.log("Groups:");
console.log(groups);

// Display total indicator function count
console.log();
console.log("Total Functions: " + talib.functions.length);
