import fs = require("fs");
import talib = require("../typings/index");

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
	console.log(reject);
});

talib.execute({
	name: "SMA",
	startIdx: 0,
	endIdx: marketData.close.length - 1,
	inReal: marketData.close,
	optInTimePeriod: 180
}, (err, result) => {

	// Show the result array
	console.log("SMA Function Results:");
	console.log(JSON.stringify( result, null, "\t"));

});
