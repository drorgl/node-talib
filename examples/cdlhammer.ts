import fs = require("fs");
import talib = require("../typings/index");

// Display module version
console.log();
console.log("TALib Version: " + talib.version);

// Load market data
const marketContents = fs.readFileSync("examples/marketdata.json", "utf8");
const marketData = JSON.parse(marketContents);

talib.CDLHAMMER(marketData.open, marketData.high, marketData.low, marketData.close).then((result) => {
	console.log("outReal", result.result.outInteger);
}, (reject) => {
	console.log(reject);
});

// execute CDLHAMMER indicator function
talib.execute({
	name: "CDLHAMMER",
	startIdx: 0,
	endIdx: marketData.close.length - 1,
	open: marketData.open,
	high: marketData.high,
	low: marketData.low,
	close: marketData.close
}, (err, result) => {

	// Show the result array
	console.log("CDLHAMMER Function Results:");
	console.log(JSON.stringify( result, null, "\t"));

});
