import fs = require("fs");
import talib = require("../typings/index");
import process = require("process");

// Display module version
console.log();
console.log("TALib Version: " + talib.version);

// Load market data
const marketContents = fs.readFileSync("examples/marketdata.json", "utf8");
const marketData = JSON.parse(marketContents);

// execute SMA indicator function with time period 180
console.log("Explain: ", talib.explain("SMA"));

talib.SMA(marketData.close, 180).then((result) => {
	console.log("outReal", result.result.outReal);
}, (reject) => {
	console.log("Error", reject);
	process.exit(1);
});

talib.execute({
	name: "SMA",
	startIdx: 0,
	endIdx: marketData.close.length - 1,
	inReal: marketData.close,
	optInTimePeriod: 180
}, (err, result) => {
	if (err){
		console.log("Error", err);
		process.exit(1);
	}
	
	// Show the result array
	console.log("SMA Function Results:");
	console.log(JSON.stringify( result, null, "\t"));

});
