import fs = require("fs");
import talib = require("../typings/index");

// Display module version
console.log();
console.log("TALib Version: " + talib.version);

// Load market data
const marketContents = fs.readFileSync("examples/marketdata.json", "utf8");
const marketData = JSON.parse(marketContents);

// execute ADX indicator function with time period 9
talib.execute({
	name: "ADX",
	startIdx: 0,
	endIdx: marketData.close.length - 1,
	high: marketData.high,
	low: marketData.low,
	close: marketData.close,
	optInTimePeriod: 9
}, (err, result) => {

	// Show the result array
	console.log("ADX Function Results:");
	console.log(result);

});
