let node_ta_lib: any = null;

(() => {
	let debugError: any = null;
	let releaseError: any = null;

	try {
		const lib = "../build/Release/node-ta-lib.node";
		if (require.resolve(lib)) {
			node_ta_lib = require(lib);
		}

		return;
	} catch (e) {
		releaseError = e;
		// release was not found, loading debug
	}

	try {
		const lib = "../build/Debug/node-ta-lib.node";
		if (require.resolve(lib)) {
			node_ta_lib = require(lib);
		}
		return;
	} catch (e) {
		// debug was not found as well
		debugError = e;
	}

	if (!debugError && !releaseError) {
		console.error("node-ta-lib.node module was not found, you may need to compile it");
		console.error("debug:", debugError);
		console.error("release:", releaseError);
	}
})();

export default node_ta_lib;
