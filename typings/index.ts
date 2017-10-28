import talib_module from "./bindings";

export const version: string = talib_module.version;

export interface IExplanationField {
	name: string;
	type: string;
	"0": string;
	flags: any;
}

export interface IExplanationOption {
	"name": string;
	"displayName": string;
	"defaultValue": number;
	"hint": string;
	"type": string;
}

export interface IExplainResult {
	name: string;
	group: string;
	hint: string;
	inputs: IExplanationField[];
	optInputs: IExplanationOption[];
	outputs: IExplanationField[];
}

export let explain: (function_name: string) => IExplainResult = talib_module.explain;

export interface IFunction {
	name: string;
}

export let functions: IFunction[] = talib_module.functions;

export interface IExecute {
	name: string;
	startIdx: number;
	endIdx: number;
	[params: string]: number[] | number | string;
}

export interface IExecutionResult<TResult> {
	begIndex: number;
	nbElement: number;
	result: TResult;
}

export let execute: (execute_params: IExecute, results_callback: (err: any, results: IExecutionResult<{ [param: string]: number[]; }>) => void) => void = talib_module.execute;

export async function execute_async(execute_params: IExecute): Promise<IExecutionResult<{ [param: string]: number[]; }>> {
	return new Promise<IExecutionResult<{ outReal: number[] }>>((resolve, reject) => {
		execute(execute_params, (err, results) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(results as any);
		});
	});
}

// name:ADD
// group: Math Operators
// hint: Vector Arithmetic Add
export async function ADD(inReal0: number[], inReal1: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ADD", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1}) as any;
}

// name:DIV
// group: Math Operators
// hint: Vector Arithmetic Div
export async function DIV(inReal0: number[], inReal1: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "DIV", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1}) as any;
}

// name:MAX
// group: Math Operators
// hint: Highest value over a specified period
// optInTimePeriod (Time Period) - Number of period = 30
export async function MAX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MAX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:MAXINDEX
// group: Math Operators
// hint: Index of highest value over a specified period
// optInTimePeriod (Time Period) - Number of period = 30
export async function MAXINDEX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "MAXINDEX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:MIN
// group: Math Operators
// hint: Lowest value over a specified period
// optInTimePeriod (Time Period) - Number of period = 30
export async function MIN(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MIN", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:MININDEX
// group: Math Operators
// hint: Index of lowest value over a specified period
// optInTimePeriod (Time Period) - Number of period = 30
export async function MININDEX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "MININDEX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:MINMAX
// group: Math Operators
// hint: Lowest and highest values over a specified period
// optInTimePeriod (Time Period) - Number of period = 30
export async function MINMAX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outMin: number[], outMax: number[]}>> {
	return await execute_async({ name: "MINMAX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:MINMAXINDEX
// group: Math Operators
// hint: Indexes of lowest and highest values over a specified period
// optInTimePeriod (Time Period) - Number of period = 30
export async function MINMAXINDEX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outMinIdx: number[], outMaxIdx: number[]}>> {
	return await execute_async({ name: "MINMAXINDEX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:MULT
// group: Math Operators
// hint: Vector Arithmetic Mult
export async function MULT(inReal0: number[], inReal1: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MULT", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1}) as any;
}

// name:SUB
// group: Math Operators
// hint: Vector Arithmetic Substraction
export async function SUB(inReal0: number[], inReal1: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SUB", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1}) as any;
}

// name:SUM
// group: Math Operators
// hint: Summation
// optInTimePeriod (Time Period) - Number of period = 30
export async function SUM(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SUM", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:ACOS
// group: Math Transform
// hint: Vector Trigonometric ACos
export async function ACOS(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ACOS", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:ASIN
// group: Math Transform
// hint: Vector Trigonometric ASin
export async function ASIN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ASIN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:ATAN
// group: Math Transform
// hint: Vector Trigonometric ATan
export async function ATAN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ATAN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:CEIL
// group: Math Transform
// hint: Vector Ceil
export async function CEIL(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "CEIL", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:COS
// group: Math Transform
// hint: Vector Trigonometric Cos
export async function COS(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "COS", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:COSH
// group: Math Transform
// hint: Vector Trigonometric Cosh
export async function COSH(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "COSH", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:EXP
// group: Math Transform
// hint: Vector Arithmetic Exp
export async function EXP(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "EXP", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:FLOOR
// group: Math Transform
// hint: Vector Floor
export async function FLOOR(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "FLOOR", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:LN
// group: Math Transform
// hint: Vector Log Natural
export async function LN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:LOG10
// group: Math Transform
// hint: Vector Log10
export async function LOG10(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LOG10", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:SIN
// group: Math Transform
// hint: Vector Trigonometric Sin
export async function SIN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SIN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:SINH
// group: Math Transform
// hint: Vector Trigonometric Sinh
export async function SINH(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SINH", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:SQRT
// group: Math Transform
// hint: Vector Square Root
export async function SQRT(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SQRT", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:TAN
// group: Math Transform
// hint: Vector Trigonometric Tan
export async function TAN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TAN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:TANH
// group: Math Transform
// hint: Vector Trigonometric Tanh
export async function TANH(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TANH", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:BBANDS
// group: Overlap Studies
// hint: Bollinger Bands
// optInTimePeriod (Time Period) - Number of period = 5
// optInNbDevUp (Deviations up) - Deviation multiplier for upper band = 2
// optInNbDevDn (Deviations down) - Deviation multiplier for lower band = 2
// optInMAType (MA Type) - Type of Moving Average = 0
export async function BBANDS(inReal: number[], optInTimePeriod: number = 5, optInNbDevUp: number = 2, optInNbDevDn: number = 2, optInMAType: number = 0): Promise<IExecutionResult<{ outRealUpperBand: number[], outRealMiddleBand: number[], outRealLowerBand: number[]}>> {
	return await execute_async({ name: "BBANDS", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInNbDevUp, optInNbDevDn, optInMAType}) as any;
}

// name:DEMA
// group: Overlap Studies
// hint: Double Exponential Moving Average
// optInTimePeriod (Time Period) - Number of period = 30
export async function DEMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "DEMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:EMA
// group: Overlap Studies
// hint: Exponential Moving Average
// optInTimePeriod (Time Period) - Number of period = 30
export async function EMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "EMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:HT_TRENDLINE
// group: Overlap Studies
// hint: Hilbert Transform - Instantaneous Trendline
export async function HT_TRENDLINE(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "HT_TRENDLINE", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:KAMA
// group: Overlap Studies
// hint: Kaufman Adaptive Moving Average
// optInTimePeriod (Time Period) - Number of period = 30
export async function KAMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "KAMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:MA
// group: Overlap Studies
// hint: Moving average
// optInTimePeriod (Time Period) - Number of period = 30
// optInMAType (MA Type) - Type of Moving Average = 0
export async function MA(inReal: number[], optInTimePeriod: number = 30, optInMAType: number = 0): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInMAType}) as any;
}

// name:MAMA
// group: Overlap Studies
// hint: MESA Adaptive Moving Average
// optInFastLimit (Fast Limit) - Upper limit use in the adaptive algorithm = 0.5
// optInSlowLimit (Slow Limit) - Lower limit use in the adaptive algorithm = 0.05
export async function MAMA(inReal: number[], optInFastLimit: number = 0.5, optInSlowLimit: number = 0.05): Promise<IExecutionResult<{ outMAMA: number[], outFAMA: number[]}>> {
	return await execute_async({ name: "MAMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastLimit, optInSlowLimit}) as any;
}

// name:MAVP
// group: Overlap Studies
// hint: Moving average with variable period
// optInMinPeriod (Minimum Period) - Value less than minimum will be changed to Minimum period = 2
// optInMaxPeriod (Maximum Period) - Value higher than maximum will be changed to Maximum period = 30
// optInMAType (MA Type) - Type of Moving Average = 0
export async function MAVP(inReal: number[], inPeriods: number[], optInMinPeriod: number = 2, optInMaxPeriod: number = 30, optInMAType: number = 0): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MAVP", startIdx: 0, endIdx: inReal.length - 1, inReal, inPeriods, optInMinPeriod, optInMaxPeriod, optInMAType}) as any;
}

// name:MIDPOINT
// group: Overlap Studies
// hint: MidPoint over period
// optInTimePeriod (Time Period) - Number of period = 14
export async function MIDPOINT(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MIDPOINT", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:MIDPRICE
// group: Overlap Studies
// hint: Midpoint Price over period
// optInTimePeriod (Time Period) - Number of period = 14
export async function MIDPRICE(high: number[], low: number[], optInTimePeriod: number = 14 ): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MIDPRICE", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

// name:SAR
// group: Overlap Studies
// hint: Parabolic SAR
// optInAcceleration (Acceleration Factor) - Acceleration Factor used up to the Maximum value = 0.02
// optInMaximum (AF Maximum) - Acceleration Factor Maximum value = 0.2
export async function SAR(high: number[], low: number[], optInAcceleration: number = 0.02, optInMaximum: number = 0.2): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SAR", startIdx: 0, endIdx: high.length - 1, high, low, optInAcceleration, optInMaximum}) as any;
}

// name:SAREXT
// group: Overlap Studies
// hint: Parabolic SAR - Extended
// optInStartValue (Start Value) - Start value and direction. 0 for Auto, >0 for Long, <0 for Short = 0
// optInOffsetOnReverse (Offset on Reverse) - Percent offset added/removed to initial stop on short/long reversal = 0
// optInAccelerationInitLong (AF Init Long) - Acceleration Factor initial value for the Long direction = 0.02
// optInAccelerationLong (AF Long) - Acceleration Factor for the Long direction = 0.02
// optInAccelerationMaxLong (AF Max Long) - Acceleration Factor maximum value for the Long direction = 0.2
// optInAccelerationInitShort (AF Init Short) - Acceleration Factor initial value for the Short direction = 0.02
// optInAccelerationShort (AF Short) - Acceleration Factor for the Short direction = 0.02
// optInAccelerationMaxShort (AF Max Short) - Acceleration Factor maximum value for the Short direction = 0.2
export async function SAREXT(high: number[], low: number[], optInStartValue: number = 0, optInOffsetOnReverse: number = 0, optInAccelerationInitLong: number = 0.02, optInAccelerationLong: number = 0.02, optInAccelerationMaxLong: number = 0.2, optInAccelerationInitShort: number = 0.02, optInAccelerationShort: number = 0.02, optInAccelerationMaxShort: number = 0.2): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SAREXT", startIdx: 0, endIdx: high.length - 1, high, low, optInStartValue, optInOffsetOnReverse, optInAccelerationInitLong, optInAccelerationLong, optInAccelerationMaxLong, optInAccelerationInitShort, optInAccelerationShort, optInAccelerationMaxShort}) as any;
}

// name:SMA
// group: Overlap Studies
// hint: Simple Moving Average
// optInTimePeriod (Time Period) - Number of period = 30
export async function SMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:T3
// group: Overlap Studies
// hint: Triple Exponential Moving Average (T3)
// optInTimePeriod (Time Period) - Number of period = 5
// optInVFactor (Volume Factor) - Volume Factor = 0.7
export async function T3(inReal: number[], optInTimePeriod: number = 5, optInVFactor: number = 0.7): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "T3", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInVFactor}) as any;
}

// name:TEMA
// group: Overlap Studies
// hint: Triple Exponential Moving Average
// optInTimePeriod (Time Period) - Number of period = 30
export async function TEMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TEMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:TRIMA
// group: Overlap Studies
// hint: Triangular Moving Average
// optInTimePeriod (Time Period) - Number of period = 30
export async function TRIMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TRIMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:WMA
// group: Overlap Studies
// hint: Weighted Moving Average
// optInTimePeriod (Time Period) - Number of period = 30
export async function WMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "WMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:ATR
// group: Volatility Indicators
// hint: Average True Range
// optInTimePeriod (Time Period) - Number of period = 14
export async function ATR(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ATR", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

// name:NATR
// group: Volatility Indicators
// hint: Normalized Average True Range
// optInTimePeriod (Time Period) - Number of period = 14
export async function NATR(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "NATR", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

// name:TRANGE
// group: Volatility Indicators
// hint: True Range
export async function TRANGE(high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TRANGE", startIdx: 0, endIdx: high.length - 1, high, low, close}) as any;
}

// name:ADX
// group: Momentum Indicators
// hint: Average Directional Movement Index
// optInTimePeriod (Time Period) - Number of period = 14
export async function ADX(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ADX", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

// name:ADXR
// group: Momentum Indicators
// hint: Average Directional Movement Index Rating
// optInTimePeriod (Time Period) - Number of period = 14
export async function ADXR(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ADXR", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

// name:APO
// group: Momentum Indicators
// hint: Absolute Price Oscillator
// optInFastPeriod (Fast Period) - Number of period for the fast MA = 12
// optInSlowPeriod (Slow Period) - Number of period for the slow MA = 26
// optInMAType (MA Type) - Type of Moving Average = 0
export async function APO(inReal: number[], optInFastPeriod: number = 12, optInSlowPeriod: number = 26, optInMAType: number = 0): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "APO", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastPeriod, optInSlowPeriod, optInMAType}) as any;
}

// name:AROON
// group: Momentum Indicators
// hint: Aroon
// optInTimePeriod (Time Period) - Number of period = 14
export async function AROON(high: number[], low: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outAroonDown: number[], outAroonUp: number[]}>> {
	return await execute_async({ name: "AROON", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

// name:AROONOSC
// group: Momentum Indicators
// hint: Aroon Oscillator
// optInTimePeriod (Time Period) - Number of period = 14
export async function AROONOSC(high: number[], low: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "AROONOSC", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

// name:BOP
// group: Momentum Indicators
// hint: Balance Of Power
export async function BOP(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "BOP", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CCI
// group: Momentum Indicators
// hint: Commodity Channel Index
// optInTimePeriod (Time Period) - Number of period = 14
export async function CCI(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "CCI", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

// name:CMO
// group: Momentum Indicators
// hint: Chande Momentum Oscillator
// optInTimePeriod (Time Period) - Number of period = 14
export async function CMO(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "CMO", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:DX
// group: Momentum Indicators
// hint: Directional Movement Index
// optInTimePeriod (Time Period) - Number of period = 14
export async function DX(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "DX", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

// name:MACD
// group: Momentum Indicators
// hint: Moving Average Convergence/Divergence
// optInFastPeriod (Fast Period) - Number of period for the fast MA = 12
// optInSlowPeriod (Slow Period) - Number of period for the slow MA = 26
// optInSignalPeriod (Signal Period) - Smoothing for the signal line (nb of period) = 9
export async function MACD(inReal: number[], optInFastPeriod: number = 12, optInSlowPeriod: number = 26, optInSignalPeriod: number = 9): Promise<IExecutionResult<{ outMACD: number[], outMACDSignal: number[], outMACDHist: number[]}>> {
	return await execute_async({ name: "MACD", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastPeriod, optInSlowPeriod, optInSignalPeriod}) as any;
}

// name:MACDEXT
// group: Momentum Indicators
// hint: MACD with controllable MA type
// optInFastPeriod (Fast Period) - Number of period for the fast MA = 12
// optInFastMAType (Fast MA) - Type of Moving Average for fast MA = 0
// optInSlowPeriod (Slow Period) - Number of period for the slow MA = 26
// optInSlowMAType (Slow MA) - Type of Moving Average for slow MA = 0
// optInSignalPeriod (Signal Period) - Smoothing for the signal line (nb of period) = 9
// optInSignalMAType (Signal MA) - Type of Moving Average for signal line = 0
export async function MACDEXT(inReal: number[], optInFastPeriod: number = 12, optInFastMAType: number = 0, optInSlowPeriod: number = 26, optInSlowMAType: number = 0, optInSignalPeriod: number = 9, optInSignalMAType: number = 0): Promise<IExecutionResult<{ outMACD: number[], outMACDSignal: number[], outMACDHist: number[]}>> {
	return await execute_async({ name: "MACDEXT", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastPeriod, optInFastMAType, optInSlowPeriod, optInSlowMAType, optInSignalPeriod, optInSignalMAType}) as any;
}

// name:MACDFIX
// group: Momentum Indicators
// hint: Moving Average Convergence/Divergence Fix 12/26
// optInSignalPeriod (Signal Period) - Smoothing for the signal line (nb of period) = 9
export async function MACDFIX(inReal: number[], optInSignalPeriod: number = 9): Promise<IExecutionResult<{ outMACD: number[], outMACDSignal: number[], outMACDHist: number[]}>> {
	return await execute_async({ name: "MACDFIX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInSignalPeriod}) as any;
}

// name:MFI
// group: Momentum Indicators
// hint: Money Flow Index
// optInTimePeriod (Time Period) - Number of period = 14
export async function MFI(high: number[], low: number[], close: number[], volume: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MFI", startIdx: 0, endIdx: high.length - 1, high, low, close, volume, optInTimePeriod}) as any;
}

// name:MINUS_DI
// group: Momentum Indicators
// hint: Minus Directional Indicator
// optInTimePeriod (Time Period) - Number of period = 14
export async function MINUS_DI(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MINUS_DI", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

// name:MINUS_DM
// group: Momentum Indicators
// hint: Minus Directional Movement
// optInTimePeriod (Time Period) - Number of period = 14
export async function MINUS_DM(high: number[], low: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MINUS_DM", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

// name:MOM
// group: Momentum Indicators
// hint: Momentum
// optInTimePeriod (Time Period) - Number of period = 10
export async function MOM(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MOM", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:PLUS_DI
// group: Momentum Indicators
// hint: Plus Directional Indicator
// optInTimePeriod (Time Period) - Number of period = 14
export async function PLUS_DI(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "PLUS_DI", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

// name:PLUS_DM
// group: Momentum Indicators
// hint: Plus Directional Movement
// optInTimePeriod (Time Period) - Number of period = 14
export async function PLUS_DM(high: number[], low: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "PLUS_DM", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

// name:PPO
// group: Momentum Indicators
// hint: Percentage Price Oscillator
// optInFastPeriod (Fast Period) - Number of period for the fast MA = 12
// optInSlowPeriod (Slow Period) - Number of period for the slow MA = 26
// optInMAType (MA Type) - Type of Moving Average = 0
export async function PPO(inReal: number[], optInFastPeriod: number = 12, optInSlowPeriod: number = 26, optInMAType: number = 0): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "PPO", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastPeriod, optInSlowPeriod, optInMAType}) as any;
}

// name:ROC
// group: Momentum Indicators
// hint: Rate of change : ((price/prevPrice)-1)*100
// optInTimePeriod (Time Period) - Number of period = 10
export async function ROC(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ROC", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:ROCP
// group: Momentum Indicators
// hint: Rate of change Percentage: (price-prevPrice)/prevPrice
// optInTimePeriod (Time Period) - Number of period = 10
export async function ROCP(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ROCP", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:ROCR
// group: Momentum Indicators
// hint: Rate of change ratio: (price/prevPrice)
// optInTimePeriod (Time Period) - Number of period = 10
export async function ROCR(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ROCR", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:ROCR100
// group: Momentum Indicators
// hint: Rate of change ratio 100 scale: (price/prevPrice)*100
// optInTimePeriod (Time Period) - Number of period = 10
export async function ROCR100(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ROCR100", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:RSI
// group: Momentum Indicators
// hint: Relative Strength Index
// optInTimePeriod (Time Period) - Number of period = 14
export async function RSI(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "RSI", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:STOCH
// group: Momentum Indicators
// hint: Stochastic
// optInFastK_Period (Fast-K Period) - Time period for building the Fast-K line = 5
// optInSlowK_Period (Slow-K Period) - Smoothing for making the Slow-K line. Usually set to 3 = 3
// optInSlowK_MAType (Slow-K MA) - Type of Moving Average for Slow-K = 0
// optInSlowD_Period (Slow-D Period) - Smoothing for making the Slow-D line = 3
// optInSlowD_MAType (Slow-D MA) - Type of Moving Average for Slow-D = 0
export async function STOCH(high: number[], low: number[], close: number[], optInFastK_Period: number = 5, optInSlowK_Period: number = 3, optInSlowK_MAType: number = 0, optInSlowD_Period: number = 3, optInSlowD_MAType: number = 0): Promise<IExecutionResult<{ outSlowK: number[], outSlowD: number[]}>> {
	return await execute_async({
		name: "STOCH", startIdx: 0, endIdx: high.length - 1, high, low, close, optInFastK_Period, optInSlowK_Period, optInSlowK_MAType, optInSlowD_Period, optInSlowD_MAType,
	}) as any;
}

// name:STOCHF
// group: Momentum Indicators
// hint: Stochastic Fast
// optInFastK_Period (Fast-K Period) - Time period for building the Fast-K line = 5
// optInFastD_Period (Fast-D Period) - Smoothing for making the Fast-D line. Usually set to 3 = 3
// optInFastD_MAType (Fast-D MA) - Type of Moving Average for Fast-D = 0
export async function STOCHF(high: number[], low: number[], close: number[], optInFastK_Period: number = 5, optInFastD_Period: number = 3, optInFastD_MAType: number = 0): Promise<IExecutionResult<{ outFastK: number[], outFastD: number[]}>> {
	return await execute_async({ name: "STOCHF", startIdx: 0, endIdx: high.length - 1, high, low, close, optInFastK_Period, optInFastD_Period, optInFastD_MAType}) as any;
}

// name:STOCHRSI
// group: Momentum Indicators
// hint: Stochastic Relative Strength Index
// optInTimePeriod (Time Period) - Number of period = 14
// optInFastK_Period (Fast-K Period) - Time period for building the Fast-K line = 5
// optInFastD_Period (Fast-D Period) - Smoothing for making the Fast-D line. Usually set to 3 = 3
// optInFastD_MAType (Fast-D MA) - Type of Moving Average for Fast-D = 0
export async function STOCHRSI(inReal: number[], optInTimePeriod: number = 14, optInFastK_Period: number = 5, optInFastD_Period: number = 3, optInFastD_MAType: number = 0): Promise<IExecutionResult<{ outFastK: number[], outFastD: number[]}>> {
	return await execute_async({ name: "STOCHRSI", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInFastK_Period, optInFastD_Period, optInFastD_MAType}) as any;
}

// name:TRIX
// group: Momentum Indicators
// hint: 1-day Rate-Of-Change (ROC) of a Triple Smooth EMA
// optInTimePeriod (Time Period) - Number of period = 30
export async function TRIX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TRIX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:ULTOSC
// group: Momentum Indicators
// hint: Ultimate Oscillator
// optInTimePeriod1 (First Period) - Number of bars for 1st period. = 7
// optInTimePeriod2 (Second Period) - Number of bars fro 2nd period = 14
// optInTimePeriod3 (Third Period) - Number of bars for 3rd period = 28
export async function ULTOSC(high: number[], low: number[], close: number[], optInTimePeriod1: number = 7, optInTimePeriod2: number = 14, optInTimePeriod3: number = 28): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ULTOSC", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod1, optInTimePeriod2, optInTimePeriod3}) as any;
}

// name:WILLR
// group: Momentum Indicators
// hint: Williams' %R
// optInTimePeriod (Time Period) - Number of period = 14
export async function WILLR(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "WILLR", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

// name:HT_DCPERIOD
// group: Cycle Indicators
// hint: Hilbert Transform - Dominant Cycle Period
export async function HT_DCPERIOD(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "HT_DCPERIOD", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:HT_DCPHASE
// group: Cycle Indicators
// hint: Hilbert Transform - Dominant Cycle Phase
export async function HT_DCPHASE(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "HT_DCPHASE", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:HT_PHASOR
// group: Cycle Indicators
// hint: Hilbert Transform - Phasor Components
export async function HT_PHASOR(inReal: number[]): Promise<IExecutionResult<{ outInPhase: number[], outQuadrature: number[]}>> {
	return await execute_async({ name: "HT_PHASOR", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:HT_SINE
// group: Cycle Indicators
// hint: Hilbert Transform - SineWave
export async function HT_SINE(inReal: number[]): Promise<IExecutionResult<{ outSine: number[], outLeadSine: number[]}>> {
	return await execute_async({ name: "HT_SINE", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:HT_TRENDMODE
// group: Cycle Indicators
// hint: Hilbert Transform - Trend vs Cycle Mode
export async function HT_TRENDMODE(inReal: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "HT_TRENDMODE", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

// name:AD
// group: Volume Indicators
// hint: Chaikin A/D Line
export async function AD(high: number[], low: number[], close: number[], volume: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "AD", startIdx: 0, endIdx: high.length - 1, high, low, close, volume}) as any;
}

// name:ADOSC
// group: Volume Indicators
// hint: Chaikin A/D Oscillator
// optInFastPeriod (Fast Period) - Number of period for the fast MA = 3
// optInSlowPeriod (Slow Period) - Number of period for the slow MA = 10
export async function ADOSC(high: number[], low: number[], close: number[], volume: number[], optInFastPeriod: number = 3, optInSlowPeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ADOSC", startIdx: 0, endIdx: high.length - 1, high, low, close, volume, optInFastPeriod, optInSlowPeriod}) as any;
}

// name:OBV
// group: Volume Indicators
// hint: On Balance Volume
export async function OBV(inReal: number[], volume: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "OBV", startIdx: 0, endIdx: inReal.length - 1, inReal, volume}) as any;
}

// name:CDL2CROWS
// group: Pattern Recognition
// hint: Two Crows
export async function CDL2CROWS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL2CROWS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDL3BLACKCROWS
// group: Pattern Recognition
// hint: Three Black Crows
export async function CDL3BLACKCROWS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3BLACKCROWS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDL3INSIDE
// group: Pattern Recognition
// hint: Three Inside Up/Down
export async function CDL3INSIDE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3INSIDE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDL3LINESTRIKE
// group: Pattern Recognition
// hint: Three-Line Strike
export async function CDL3LINESTRIKE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3LINESTRIKE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDL3OUTSIDE
// group: Pattern Recognition
// hint: Three Outside Up/Down
export async function CDL3OUTSIDE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3OUTSIDE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDL3STARSINSOUTH
// group: Pattern Recognition
// hint: Three Stars In The South
export async function CDL3STARSINSOUTH(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3STARSINSOUTH", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDL3WHITESOLDIERS
// group: Pattern Recognition
// hint: Three Advancing White Soldiers
export async function CDL3WHITESOLDIERS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3WHITESOLDIERS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLABANDONEDBABY
// group: Pattern Recognition
// hint: Abandoned Baby
// optInPenetration (Penetration) - Percentage of penetration of a candle within another candle = 0.3
export async function CDLABANDONEDBABY(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLABANDONEDBABY", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

// name:CDLADVANCEBLOCK
// group: Pattern Recognition
// hint: Advance Block
export async function CDLADVANCEBLOCK(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLADVANCEBLOCK", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLBELTHOLD
// group: Pattern Recognition
// hint: Belt-hold
export async function CDLBELTHOLD(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLBELTHOLD", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLBREAKAWAY
// group: Pattern Recognition
// hint: Breakaway
export async function CDLBREAKAWAY(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLBREAKAWAY", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLCLOSINGMARUBOZU
// group: Pattern Recognition
// hint: Closing Marubozu
export async function CDLCLOSINGMARUBOZU(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLCLOSINGMARUBOZU", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLCONCEALBABYSWALL
// group: Pattern Recognition
// hint: Concealing Baby Swallow
export async function CDLCONCEALBABYSWALL(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLCONCEALBABYSWALL", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLCOUNTERATTACK
// group: Pattern Recognition
// hint: Counterattack
export async function CDLCOUNTERATTACK(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLCOUNTERATTACK", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLDARKCLOUDCOVER
// group: Pattern Recognition
// hint: Dark Cloud Cover
// optInPenetration (Penetration) - Percentage of penetration of a candle within another candle = 0.5
export async function CDLDARKCLOUDCOVER(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.5): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLDARKCLOUDCOVER", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

// name:CDLDOJI
// group: Pattern Recognition
// hint: Doji
export async function CDLDOJI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLDOJI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLDOJISTAR
// group: Pattern Recognition
// hint: Doji Star
export async function CDLDOJISTAR(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLDOJISTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLDRAGONFLYDOJI
// group: Pattern Recognition
// hint: Dragonfly Doji
export async function CDLDRAGONFLYDOJI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLDRAGONFLYDOJI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLENGULFING
// group: Pattern Recognition
// hint: Engulfing Pattern
export async function CDLENGULFING(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLENGULFING", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLEVENINGDOJISTAR
// group: Pattern Recognition
// hint: Evening Doji Star
// optInPenetration (Penetration) - Percentage of penetration of a candle within another candle = 0.3
export async function CDLEVENINGDOJISTAR(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLEVENINGDOJISTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

// name:CDLEVENINGSTAR
// group: Pattern Recognition
// hint: Evening Star
// optInPenetration (Penetration) - Percentage of penetration of a candle within another candle = 0.3
export async function CDLEVENINGSTAR(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLEVENINGSTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

// name:CDLGAPSIDESIDEWHITE
// group: Pattern Recognition
// hint: Up/Down-gap side-by-side white lines
export async function CDLGAPSIDESIDEWHITE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLGAPSIDESIDEWHITE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLGRAVESTONEDOJI
// group: Pattern Recognition
// hint: Gravestone Doji
export async function CDLGRAVESTONEDOJI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLGRAVESTONEDOJI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLHAMMER
// group: Pattern Recognition
// hint: Hammer
export async function CDLHAMMER(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHAMMER", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLHANGINGMAN
// group: Pattern Recognition
// hint: Hanging Man
export async function CDLHANGINGMAN(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHANGINGMAN", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLHARAMI
// group: Pattern Recognition
// hint: Harami Pattern
export async function CDLHARAMI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHARAMI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLHARAMICROSS
// group: Pattern Recognition
// hint: Harami Cross Pattern
export async function CDLHARAMICROSS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHARAMICROSS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLHIGHWAVE
// group: Pattern Recognition
// hint: High-Wave Candle
export async function CDLHIGHWAVE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHIGHWAVE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLHIKKAKE
// group: Pattern Recognition
// hint: Hikkake Pattern
export async function CDLHIKKAKE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHIKKAKE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLHIKKAKEMOD
// group: Pattern Recognition
// hint: Modified Hikkake Pattern
export async function CDLHIKKAKEMOD(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHIKKAKEMOD", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLHOMINGPIGEON
// group: Pattern Recognition
// hint: Homing Pigeon
export async function CDLHOMINGPIGEON(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHOMINGPIGEON", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLIDENTICAL3CROWS
// group: Pattern Recognition
// hint: Identical Three Crows
export async function CDLIDENTICAL3CROWS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLIDENTICAL3CROWS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLINNECK
// group: Pattern Recognition
// hint: In-Neck Pattern
export async function CDLINNECK(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLINNECK", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLINVERTEDHAMMER
// group: Pattern Recognition
// hint: Inverted Hammer
export async function CDLINVERTEDHAMMER(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLINVERTEDHAMMER", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLKICKING
// group: Pattern Recognition
// hint: Kicking
export async function CDLKICKING(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLKICKING", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLKICKINGBYLENGTH
// group: Pattern Recognition
// hint: Kicking - bull/bear determined by the longer marubozu
export async function CDLKICKINGBYLENGTH(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLKICKINGBYLENGTH", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLLADDERBOTTOM
// group: Pattern Recognition
// hint: Ladder Bottom
export async function CDLLADDERBOTTOM(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLLADDERBOTTOM", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLLONGLEGGEDDOJI
// group: Pattern Recognition
// hint: Long Legged Doji
export async function CDLLONGLEGGEDDOJI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLLONGLEGGEDDOJI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLLONGLINE
// group: Pattern Recognition
// hint: Long Line Candle
export async function CDLLONGLINE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLLONGLINE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLMARUBOZU
// group: Pattern Recognition
// hint: Marubozu
export async function CDLMARUBOZU(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMARUBOZU", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLMATCHINGLOW
// group: Pattern Recognition
// hint: Matching Low
export async function CDLMATCHINGLOW(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMATCHINGLOW", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLMATHOLD
// group: Pattern Recognition
// hint: Mat Hold
// optInPenetration (Penetration) - Percentage of penetration of a candle within another candle = 0.5
export async function CDLMATHOLD(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.5): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMATHOLD", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

// name:CDLMORNINGDOJISTAR
// group: Pattern Recognition
// hint: Morning Doji Star
// optInPenetration (Penetration) - Percentage of penetration of a candle within another candle = 0.3
export async function CDLMORNINGDOJISTAR(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMORNINGDOJISTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

// name:CDLMORNINGSTAR
// group: Pattern Recognition
// hint: Morning Star
// optInPenetration (Penetration) - Percentage of penetration of a candle within another candle = 0.3
export async function CDLMORNINGSTAR(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMORNINGSTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

// name:CDLONNECK
// group: Pattern Recognition
// hint: On-Neck Pattern
export async function CDLONNECK(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLONNECK", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLPIERCING
// group: Pattern Recognition
// hint: Piercing Pattern
export async function CDLPIERCING(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLPIERCING", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLRICKSHAWMAN
// group: Pattern Recognition
// hint: Rickshaw Man
export async function CDLRICKSHAWMAN(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLRICKSHAWMAN", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLRISEFALL3METHODS
// group: Pattern Recognition
// hint: Rising/Falling Three Methods
export async function CDLRISEFALL3METHODS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLRISEFALL3METHODS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLSEPARATINGLINES
// group: Pattern Recognition
// hint: Separating Lines
export async function CDLSEPARATINGLINES(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSEPARATINGLINES", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLSHOOTINGSTAR
// group: Pattern Recognition
// hint: Shooting Star
export async function CDLSHOOTINGSTAR(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSHOOTINGSTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLSHORTLINE
// group: Pattern Recognition
// hint: Short Line Candle
export async function CDLSHORTLINE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSHORTLINE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLSPINNINGTOP
// group: Pattern Recognition
// hint: Spinning Top
export async function CDLSPINNINGTOP(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSPINNINGTOP", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLSTALLEDPATTERN
// group: Pattern Recognition
// hint: Stalled Pattern
export async function CDLSTALLEDPATTERN(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSTALLEDPATTERN", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLSTICKSANDWICH
// group: Pattern Recognition
// hint: Stick Sandwich
export async function CDLSTICKSANDWICH(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSTICKSANDWICH", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLTAKURI
// group: Pattern Recognition
// hint: Takuri (Dragonfly Doji with very long lower shadow)
export async function CDLTAKURI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLTAKURI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLTASUKIGAP
// group: Pattern Recognition
// hint: Tasuki Gap
export async function CDLTASUKIGAP(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLTASUKIGAP", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLTHRUSTING
// group: Pattern Recognition
// hint: Thrusting Pattern
export async function CDLTHRUSTING(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLTHRUSTING", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLTRISTAR
// group: Pattern Recognition
// hint: Tristar Pattern
export async function CDLTRISTAR(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLTRISTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLUNIQUE3RIVER
// group: Pattern Recognition
// hint: Unique 3 River
export async function CDLUNIQUE3RIVER(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLUNIQUE3RIVER", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLUPSIDEGAP2CROWS
// group: Pattern Recognition
// hint: Upside Gap Two Crows
export async function CDLUPSIDEGAP2CROWS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLUPSIDEGAP2CROWS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:CDLXSIDEGAP3METHODS
// group: Pattern Recognition
// hint: Upside/Downside Gap Three Methods
export async function CDLXSIDEGAP3METHODS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLXSIDEGAP3METHODS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:BETA
// group: Statistic Functions
// hint: Beta
// optInTimePeriod (Time Period) - Number of period = 5
export async function BETA(inReal0: number[], inReal1: number[], optInTimePeriod: number = 5): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "BETA", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1, optInTimePeriod}) as any;
}

// name:CORREL
// group: Statistic Functions
// hint: Pearson's Correlation Coefficient (r)
// optInTimePeriod (Time Period) - Number of period = 30
export async function CORREL(inReal0: number[], inReal1: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "CORREL", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1, optInTimePeriod}) as any;
}

// name:LINEARREG
// group: Statistic Functions
// hint: Linear Regression
// optInTimePeriod (Time Period) - Number of period = 14
export async function LINEARREG(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LINEARREG", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:LINEARREG_ANGLE
// group: Statistic Functions
// hint: Linear Regression Angle
// optInTimePeriod (Time Period) - Number of period = 14
export async function LINEARREG_ANGLE(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LINEARREG_ANGLE", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:LINEARREG_INTERCEPT
// group: Statistic Functions
// hint: Linear Regression Intercept
// optInTimePeriod (Time Period) - Number of period = 14
export async function LINEARREG_INTERCEPT(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LINEARREG_INTERCEPT", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:LINEARREG_SLOPE
// group: Statistic Functions
// hint: Linear Regression Slope
// optInTimePeriod (Time Period) - Number of period = 14
export async function LINEARREG_SLOPE(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LINEARREG_SLOPE", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:STDDEV
// group: Statistic Functions
// hint: Standard Deviation
// optInTimePeriod (Time Period) - Number of period = 5
// optInNbDev (Deviations) - Nb of deviations = 1
export async function STDDEV(inReal: number[], optInTimePeriod: number = 5, optInNbDev: number = 1): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "STDDEV", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInNbDev}) as any;
}

// name:TSF
// group: Statistic Functions
// hint: Time Series Forecast
// optInTimePeriod (Time Period) - Number of period = 14
export async function TSF(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TSF", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

// name:VAR
// group: Statistic Functions
// hint: Variance
// optInTimePeriod (Time Period) - Number of period = 5
// optInNbDev (Deviations) - Nb of deviations = 1
export async function VAR(inReal: number[], optInTimePeriod: number = 5, optInNbDev: number = 1): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "VAR", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInNbDev}) as any;
}

// name:AVGPRICE
// group: Price Transform
// hint: Average Price
export async function AVGPRICE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "AVGPRICE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

// name:MEDPRICE
// group: Price Transform
// hint: Median Price
export async function MEDPRICE(high: number[], low: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MEDPRICE", startIdx: 0, endIdx: high.length - 1, high, low}) as any;
}

// name:TYPPRICE
// group: Price Transform
// hint: Typical Price
export async function TYPPRICE(high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TYPPRICE", startIdx: 0, endIdx: high.length - 1, high, low, close}) as any;
}

// name:WCLPRICE
// group: Price Transform
// hint: Weighted Close Price
export async function WCLPRICE(high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "WCLPRICE", startIdx: 0, endIdx: high.length - 1, high, low, close}) as any;
}
