import util = require("util");
import talib = require("../typings/index");
// const functions = talib.functions;

// Display module version
console.log();
console.log("TALib Version: " + talib.version);

// Display ADX indicator function specifications
console.log(JSON.stringify(talib.explain("SAREXT"), null, "\t" ));
