import fs = require("fs");
import talib = require("../typings/index");

// Display module version
console.log();
console.log("TALib Version: " + talib.version);

// Load market data
const marketContents = fs.readFileSync("examples/marketdata.json", "utf8");
const marketData = JSON.parse(marketContents);

talib.BBANDS(marketData.open).then((result) => {
	for (let i = 0; i < marketData.open.length; i++) {
		console.log(marketData.open[i], "\t", result.result.outRealLowerBand[i], "\t", result.result.outRealMiddleBand[i], "\t", result.result.outRealUpperBand[i]);
	}
});
