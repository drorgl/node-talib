/**
 * @packageDocumentation
 * @module default
 */

// tslint:disable-next-line:no-var-requires
const talib_module = require("bindings")("node-ta-lib.node");

/**
 * Returns the version of ta-lib compiled
 */
export function version(): string {
	return talib_module.version();
}

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

/**
 * function usage explanation
 */
export interface IExplainResult {
	/** name of the function */
	name: string;
	/** function group, i.e. Math Operators Functions, Momentum Indicators Functions etc' */
	group: string;
	/** function description */
	hint: string;
	/** inputs for the function */
	inputs: IExplanationField[];
	/** optional inputs for the function */
	optInputs: IExplanationOption[];
	/** outputs for the function execution */
	outputs: IExplanationField[];
}

/**
 * explain function usage
 * @param function_name function name to explain
 */
export function explain(function_name: string):IExplainResult{
	return talib_module.explain(function_name);
}

/**
 * List all functions
 */
export function functions(): IExplainResult[]{
	return talib_module.functions();
}

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

/**
 * Execute ta-lib function
 * @param execute_params execution parameters
 * @param results_callback execution results callback
 */
export function execute(execute_params: IExecute, results_callback: (err: any, results: IExecutionResult<{ [param: string]: number[]; }>) => void): void{
	talib_module.execute(execute_params, results_callback);
}

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

/**
 * Moving Average Type
 */
export enum MAType {
	/** Simple */
	Sma    = 0,
	/** Exponential */
	Ema    = 1,
	/** Weighted */
	Wma    = 2,
	/**  Double Exponential */
	Dema   = 3,
	/** Triple Exponential */
	Tema   = 4,
	/** Triangular */
	Trima  = 5,
	/** Kaufman Adaptive */
	Kama   = 6,
	/** Mesa Adaptive */
	Mama   = 7,
	/** Triple Exponential T3 */
	T3     = 8
}

/**
 * ADD - Vector Arithmetic Add
 * @category Math Operators
 * @param  {number[]} inReal0
 * @param  {number[]} inReal1
 * @returns number[]
 */
export async function ADD(inReal0: number[], inReal1: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ADD", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1}) as any;
}

/**
 * DIV - Vector Arithmetic Div
 * @category Math Operators
 * @param  {number[]} inReal0
 * @param  {number[]} inReal1
 * @returns number[]
 */
export async function DIV(inReal0: number[], inReal1: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "DIV", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1}) as any;
}

/**
 * MAX - Highest value over a specified period
 * @category Math Operators
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function MAX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MAX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * MAXINDEX - Index of highest value over a specified period
 * @category Math Operators
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function MAXINDEX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "MAXINDEX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * MIN - Lowest value over a specified period
 * @category Math Operators
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function MIN(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MIN", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * MININDEX - Index of lowest value over a specified period
 * @category Math Operators
 * @param inReal
 * @param optInTimePeriod  Time Period - Number of period = 30
 */
export async function MININDEX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "MININDEX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * MINMAX - Lowest and highest values over a specified period
 * @category Math Operators
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function MINMAX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outMin: number[], outMax: number[]}>> {
	return await execute_async({ name: "MINMAX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * MINMAXINDEX - Indexes of lowest and highest values over a specified period
 * @category Math Operators
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function MINMAXINDEX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outMinIdx: number[], outMaxIdx: number[]}>> {
	return await execute_async({ name: "MINMAXINDEX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * MULT - Vector Arithmetic Mult
 * @category Math Operators
 * @param inReal0
 * @param inReal1
 */
export async function MULT(inReal0: number[], inReal1: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MULT", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1}) as any;
}

/**
 * SUB - Vector Arithmetic Subtraction
 * @category Math Operators
 * @param inReal0
 * @param inReal1
 */
export async function SUB(inReal0: number[], inReal1: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SUB", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1}) as any;
}

/**
 * SUM - Summation
 * @category Math Operators
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function SUM(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SUM", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * ACOS - Vector Trigonometric ACos
 * @category Math Transform
 * @param inReal
 */
export async function ACOS(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ACOS", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * ASIN - Vector Trigonometric ASin
 * @category Math Transform
 * @param inReal
 */
export async function ASIN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ASIN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * ATAN - Vector Trigonometric ATan
 * @category Math Transform
 * @param inReal
 */
export async function ATAN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ATAN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * CEIL - Vector Ceil
 * @category Math Transform
 * @param inReal
 */
export async function CEIL(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "CEIL", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * COS - Vector Trigonometric Cos
 * @category Math Transform
 * @param inReal
 */
export async function COS(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "COS", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * COSH - Vector Trigonometric Cosh
 * @category Math Transform
 */
export async function COSH(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "COSH", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * EXP - Vector Arithmetic Exp
 * @category Math Transform
 * @param inReal
 */
export async function EXP(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "EXP", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * FLOOR - Vector Floor
 * @category Math Transform
 *
 * @param inReal
 */
export async function FLOOR(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "FLOOR", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * LN - Vector Log Natural
 * @category Math Transform
 *
 * @param inReal
 */
export async function LN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * LOG10 - Vector Log10
 * @category Math Transform
 *
 * @param inReal
 */
export async function LOG10(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LOG10", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * SIN - Vector Trigonometric Sin
 * @category Math Transform
 *
 * @param inReal
 */
export async function SIN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SIN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * SINH - Vector Trigonometric Sinh
 * @category Math Transform
 *
 * @param inReal
 */
export async function SINH(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SINH", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * SQRT - Vector Square Root
 * @category Math Transform
 *
 * @param inReal
 */
export async function SQRT(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SQRT", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * TAN - Vector Trigonometric Tan
 * @category Math Transform
 *
 * @param inReal
 */
export async function TAN(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TAN", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * TANH - Vector Trigonometric Tanh
 * @category Math Transform
 *
 * @param inReal
 */
export async function TANH(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TANH", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * BBANDS - Bollinger Bands
 * @category Overlap Studies
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 5
 * @param optInNbDevUp Deviations up - Deviation multiplier for upper band = 2
 * @param optInNbDevDn Deviations down - Deviation multiplier for lower band = 2
 * @param optInMAType  MA Type - Type of Moving Average = 0
 */
export async function BBANDS(inReal: number[], optInTimePeriod: number = 5, optInNbDevUp: number = 2, optInNbDevDn: number = 2, optInMAType: MAType = 0): Promise<IExecutionResult<{ outRealUpperBand: number[], outRealMiddleBand: number[], outRealLowerBand: number[]}>> {
	return await execute_async({ name: "BBANDS", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInNbDevUp, optInNbDevDn, optInMAType}) as any;
}

/**
 * DEMA - Double Exponential Moving Average
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function DEMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "DEMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * EMA - Exponential Moving Average
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function EMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "EMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * HT_TRENDLINE - Hilbert Transform - Instantaneous Trendline
 * @category Overlap Studies
 *
 * @param inReal
 */
export async function HT_TRENDLINE(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "HT_TRENDLINE", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * KAMA - Kaufman Adaptive Moving Average
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function KAMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "KAMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * MA - Moving average
 * @category Overlap Studies
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 * @param optInMAType MA Type - Type of Moving Average = 0
 */
export async function MA(inReal: number[], optInTimePeriod: number = 30, optInMAType: MAType = 0): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInMAType}) as any;
}

/**
 * MAMA - MESA Adaptive Moving Average
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInFastLimit Fast Limit - Upper limit use in the adaptive algorithm = 0.5
 * @param optInSlowLimit Slow Limit - Lower limit use in the adaptive algorithm = 0.05
 */
export async function MAMA(inReal: number[], optInFastLimit: number = 0.5, optInSlowLimit: number = 0.05): Promise<IExecutionResult<{ outMAMA: number[], outFAMA: number[]}>> {
	return await execute_async({ name: "MAMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastLimit, optInSlowLimit}) as any;
}

/**
 * MAVP - Moving average with variable period
 * @category Overlap Studies
 *
 * @param inReal
 * @param inPeriods
 * @param optInMinPeriod Minimum Period - Value less than minimum will be changed to Minimum period = 2
 * @param optInMaxPeriod Maximum Period - Value higher than maximum will be changed to Maximum period = 30
 * @param optInMAType MA Type - Type of Moving Average = 0
 */
export async function MAVP(inReal: number[], inPeriods: number[], optInMinPeriod: number = 2, optInMaxPeriod: number = 30, optInMAType: MAType = 0): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MAVP", startIdx: 0, endIdx: inReal.length - 1, inReal, inPeriods, optInMinPeriod, optInMaxPeriod, optInMAType}) as any;
}

/**
 * MIDPOINT - MidPoint over period
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function MIDPOINT(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MIDPOINT", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * MIDPRICE - Midpoint Price over period
 * @category Overlap Studies
 *
 * @param high
 * @param low
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function MIDPRICE(high: number[], low: number[], optInTimePeriod: number = 14 ): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MIDPRICE", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

/**
 * SAR - Parabolic SAR
 * @category Overlap Studies
 *
 * @param high
 * @param low
 * @param optInAcceleration Acceleration Factor - Acceleration Factor used up to the Maximum value = 0.02
 * @param optInMaximum AF Maximum - Acceleration Factor Maximum value = 0.2
 */
export async function SAR(high: number[], low: number[], optInAcceleration: number = 0.02, optInMaximum: number = 0.2): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SAR", startIdx: 0, endIdx: high.length - 1, high, low, optInAcceleration, optInMaximum}) as any;
}

/**
 * SAREXT - Parabolic SAR - Extended
 * @category Overlap Studies
 * @param high
 * @param low
 * @param optInStartValue Start Value - Start value and direction. 0 for Auto, >0 for Long, <0 for Short = 0
 * @param optInOffsetOnReverse Offset on Reverse - Percent offset added/removed to initial stop on short/long reversal = 0
 * @param optInAccelerationInitLong AF Init Long - Acceleration Factor initial value for the Long direction = 0.02
 * @param optInAccelerationLong AF Long - Acceleration Factor for the Long direction = 0.02
 * @param optInAccelerationMaxLong AF Max Long - Acceleration Factor maximum value for the Long direction = 0.2
 * @param optInAccelerationInitShort AF Init Short - Acceleration Factor initial value for the Short direction = 0.02
 * @param optInAccelerationShort AF Short - Acceleration Factor for the Short direction = 0.02
 * @param optInAccelerationMaxShort AF Max Short - Acceleration Factor maximum value for the Short direction = 0.2
 */
export async function SAREXT(high: number[], low: number[], optInStartValue: number = 0, optInOffsetOnReverse: number = 0, optInAccelerationInitLong: number = 0.02, optInAccelerationLong: number = 0.02, optInAccelerationMaxLong: number = 0.2, optInAccelerationInitShort: number = 0.02, optInAccelerationShort: number = 0.02, optInAccelerationMaxShort: number = 0.2): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SAREXT", startIdx: 0, endIdx: high.length - 1, high, low, optInStartValue, optInOffsetOnReverse, optInAccelerationInitLong, optInAccelerationLong, optInAccelerationMaxLong, optInAccelerationInitShort, optInAccelerationShort, optInAccelerationMaxShort}) as any;
}

/**
 * SMA - Simple Moving Average
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function SMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "SMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * T3 - Triple Exponential Moving Average
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 5
 * @param optInVFactor Volume Factor - Volume Factor = 0.7
 */
export async function T3(inReal: number[], optInTimePeriod: number = 5, optInVFactor: number = 0.7): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "T3", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInVFactor}) as any;
}

/**
 * TEMA - Triple Exponential Moving Average
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function TEMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TEMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * TRIMA - Triangular Moving Average
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function TRIMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TRIMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * WMA - Weighted Moving Average
 * @category Overlap Studies
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function WMA(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "WMA", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * ATR - Average True Range
 * @category Volatility Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function ATR(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ATR", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

/**
 * NATR - Normalized Average True Range
 * @category Volatility Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function NATR(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "NATR", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

/**
 * TRANGE - True Range
 * @category Volatility Indicators
 *
 * @param high
 * @param low
 * @param close
 */
export async function TRANGE(high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TRANGE", startIdx: 0, endIdx: high.length - 1, high, low, close}) as any;
}

/**
 * ADX - Average Directional Movement Index
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function ADX(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ADX", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

/**
 * ADXR - Average Directional Movement Index Rating
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function ADXR(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ADXR", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

/**
 * APO - Absolute Price Oscillator
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInFastPeriod Fast Period - Number of period for the fast MA = 12
 * @param optInSlowPeriod Slow Period - Number of period for the slow MA = 26
 * @param optInMAType MA Type - Type of Moving Average = 0
 */
export async function APO(inReal: number[], optInFastPeriod: number = 12, optInSlowPeriod: number = 26, optInMAType: MAType = 0): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "APO", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastPeriod, optInSlowPeriod, optInMAType}) as any;
}

/**
 * AROON - Aroon
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function AROON(high: number[], low: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outAroonDown: number[], outAroonUp: number[]}>> {
	return await execute_async({ name: "AROON", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

/**
 * AROONOSC - Aroon Oscillator
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function AROONOSC(high: number[], low: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "AROONOSC", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

/**
 * BOP - Balance Of Power
 * @category Momentum Indicators
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function BOP(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "BOP", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CCI - Commodity Channel Index
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function CCI(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "CCI", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

/**
 * CMO - Chande Momentum Oscillator
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function CMO(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "CMO", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * DX - Directional Movement Index
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function DX(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "DX", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

/**
 * MACD - Moving Average Convergence/Divergence
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInFastPeriod Fast Period - Number of period for the fast MA = 12
 * @param optInSlowPeriod Slow Period - Number of period for the slow MA = 26
 * @param optInSignalPeriod Signal Period - Smoothing for the signal line (nb of period) = 9
 */
export async function MACD(inReal: number[], optInFastPeriod: number = 12, optInSlowPeriod: number = 26, optInSignalPeriod: number = 9): Promise<IExecutionResult<{ outMACD: number[], outMACDSignal: number[], outMACDHist: number[]}>> {
	return await execute_async({ name: "MACD", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastPeriod, optInSlowPeriod, optInSignalPeriod}) as any;
}

/**
 * MACDEXT - MACD with controllable MA type
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInFastPeriod Fast Period - Number of period for the fast MA = 12
 * @param optInFastMAType Fast MA - Type of Moving Average for fast MA = 0
 * @param optInSlowPeriod Slow Period - Number of period for the slow MA = 26
 * @param optInSlowMAType Slow MA - Type of Moving Average for slow MA = 0
 * @param optInSignalPeriod Signal Period - Smoothing for the signal line (nb of period) = 9
 * @param optInSignalMAType Signal MA - Type of Moving Average for signal line = 0
 */
export async function MACDEXT(inReal: number[], optInFastPeriod: number = 12, optInFastMAType: MAType = 0, optInSlowPeriod: number = 26, optInSlowMAType: MAType = 0, optInSignalPeriod: number = 9, optInSignalMAType: MAType = 0): Promise<IExecutionResult<{ outMACD: number[], outMACDSignal: number[], outMACDHist: number[]}>> {
	return await execute_async({ name: "MACDEXT", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastPeriod, optInFastMAType, optInSlowPeriod, optInSlowMAType, optInSignalPeriod, optInSignalMAType}) as any;
}

/**
 * MACDFIX - Moving Average Convergence/Divergence Fix 12/26
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInSignalPeriod Signal Period - Smoothing for the signal line (nb of period) = 9
 */
export async function MACDFIX(inReal: number[], optInSignalPeriod: number = 9): Promise<IExecutionResult<{ outMACD: number[], outMACDSignal: number[], outMACDHist: number[]}>> {
	return await execute_async({ name: "MACDFIX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInSignalPeriod}) as any;
}

/**
 * MFI - Money Flow Index
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param volume
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function MFI(high: number[], low: number[], close: number[], volume: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MFI", startIdx: 0, endIdx: high.length - 1, high, low, close, volume, optInTimePeriod}) as any;
}

/**
 * MINUS_DI - Minus Directional Indicator
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function MINUS_DI(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MINUS_DI", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

/**
 * MINUS_DM - Minus Directional Movement
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function MINUS_DM(high: number[], low: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MINUS_DM", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

/**
 * MOM - Momentum
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 10
 */
export async function MOM(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MOM", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * PLUS_DI - Plus Directional Indicator
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function PLUS_DI(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "PLUS_DI", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

/**
 * PLUS_DM - Plus Directional Movement
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function PLUS_DM(high: number[], low: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "PLUS_DM", startIdx: 0, endIdx: high.length - 1, high, low, optInTimePeriod}) as any;
}

/**
 * PPO - Percentage Price Oscillator
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInFastPeriod Fast Period - Number of period for the fast MA = 12
 * @param optInSlowPeriod Slow Period - Number of period for the slow MA = 26
 * @param optInMAType MA Type - Type of Moving Average = 0
 */
export async function PPO(inReal: number[], optInFastPeriod: number = 12, optInSlowPeriod: number = 26, optInMAType: MAType = 0): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "PPO", startIdx: 0, endIdx: inReal.length - 1, inReal, optInFastPeriod, optInSlowPeriod, optInMAType}) as any;
}

/**
 * ROC - Rate of change : ((price/prevPrice)-1)*100
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 10
 */
export async function ROC(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ROC", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * ROCP - Rate of change Percentage: (price-prevPrice)/prevPrice
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 10
 */
export async function ROCP(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ROCP", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * ROCR - Rate of change ratio: (price/prevPrice)
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 10
 */
export async function ROCR(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ROCR", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * ROCR100 - Rate of change ratio 100 scale: (price/prevPrice)*100
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 10
 */
export async function ROCR100(inReal: number[], optInTimePeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ROCR100", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * RSI - Relative Strength Index
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function RSI(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "RSI", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * STOCH - Stochastic
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInFastK_Period Fast-K Period - Time period for building the Fast-K line = 5
 * @param optInSlowK_Period Slow-K Period - Smoothing for making the Slow-K line. Usually set to 3 = 3
 * @param optInSlowK_MAType Slow-K MA - Type of Moving Average for Slow-K = 0
 * @param optInSlowD_Period Slow-D Period - Smoothing for making the Slow-D line = 3
 * @param optInSlowD_MAType Slow-D MA - Type of Moving Average for Slow-D = 0
 */
export async function STOCH(high: number[], low: number[], close: number[], optInFastK_Period: number = 5, optInSlowK_Period: number = 3, optInSlowK_MAType: MAType = 0, optInSlowD_Period: number = 3, optInSlowD_MAType: MAType = 0): Promise<IExecutionResult<{ outSlowK: number[], outSlowD: number[]}>> {
	return await execute_async({
		name: "STOCH", startIdx: 0, endIdx: high.length - 1, high, low, close, optInFastK_Period, optInSlowK_Period, optInSlowK_MAType, optInSlowD_Period, optInSlowD_MAType,
	}) as any;
}

/**
 * STOCHF - Stochastic Fast
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInFastK_Period Fast-K Period - Time period for building the Fast-K line = 5
 * @param optInFastD_Period Fast-D Period - Smoothing for making the Fast-D line. Usually set to 3 = 3
 * @param optInFastD_MAType Fast-D MA - Type of Moving Average for Fast-D = 0
 */
export async function STOCHF(high: number[], low: number[], close: number[], optInFastK_Period: number = 5, optInFastD_Period: number = 3, optInFastD_MAType: MAType = 0): Promise<IExecutionResult<{ outFastK: number[], outFastD: number[]}>> {
	return await execute_async({ name: "STOCHF", startIdx: 0, endIdx: high.length - 1, high, low, close, optInFastK_Period, optInFastD_Period, optInFastD_MAType}) as any;
}

/**
 * STOCHRSI - Stochastic Relative Strength Index
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 14
 * @param optInFastK_Period Fast-K Period - Time period for building the Fast-K line = 5
 * @param optInFastD_Period Fast-D Period - Smoothing for making the Fast-D line. Usually set to 3 = 3
 * @param optInFastD_MAType Fast-D MA - Type of Moving Average for Fast-D = 0
 */
export async function STOCHRSI(inReal: number[], optInTimePeriod: number = 14, optInFastK_Period: number = 5, optInFastD_Period: number = 3, optInFastD_MAType: MAType = 0): Promise<IExecutionResult<{ outFastK: number[], outFastD: number[]}>> {
	return await execute_async({ name: "STOCHRSI", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInFastK_Period, optInFastD_Period, optInFastD_MAType}) as any;
}

/**
 * TRIX - 1-day Rate-Of-Change (ROC) of a Triple Smooth EMA
 * @category Momentum Indicators
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function TRIX(inReal: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TRIX", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * ULTOSC - Ultimate Oscillator
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod1 First Period - Number of bars for 1st period. = 7
 * @param optInTimePeriod2 Second Period - Number of bars fro 2nd period = 14
 * @param optInTimePeriod3 Third Period - Number of bars for 3rd period = 28
 */
export async function ULTOSC(high: number[], low: number[], close: number[], optInTimePeriod1: number = 7, optInTimePeriod2: number = 14, optInTimePeriod3: number = 28): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ULTOSC", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod1, optInTimePeriod2, optInTimePeriod3}) as any;
}

/**
 * WILLR - Williams' %R
 * @category Momentum Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function WILLR(high: number[], low: number[], close: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "WILLR", startIdx: 0, endIdx: high.length - 1, high, low, close, optInTimePeriod}) as any;
}

/**
 * HT_DCPERIOD - Hilbert Transform - Dominant Cycle Period
 * @category Cycle Indicators
 *
 * @param inReal
 */
export async function HT_DCPERIOD(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "HT_DCPERIOD", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * HT_DCPHASE - Hilbert Transform - Dominant Cycle Phase
 * @category Cycle Indicators
 *
 * @param inReal
 */
export async function HT_DCPHASE(inReal: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "HT_DCPHASE", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * HT_PHASOR - Hilbert Transform - Phasor Components
 * @category Cycle Indicators
 * @param inReal
 */
export async function HT_PHASOR(inReal: number[]): Promise<IExecutionResult<{ outInPhase: number[], outQuadrature: number[]}>> {
	return await execute_async({ name: "HT_PHASOR", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * HT_SINE - Hilbert Transform - SineWave
 * @category Cycle Indicators
 *
 * @param inReal
 */
export async function HT_SINE(inReal: number[]): Promise<IExecutionResult<{ outSine: number[], outLeadSine: number[]}>> {
	return await execute_async({ name: "HT_SINE", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * HT_TRENDMODE - Hilbert Transform - Trend vs Cycle Mode
 * @category Cycle Indicators
 *
 * @param inReal
 */
export async function HT_TRENDMODE(inReal: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "HT_TRENDMODE", startIdx: 0, endIdx: inReal.length - 1, inReal}) as any;
}

/**
 * AD - Chaikin A/D Line
 * @category Volume Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param volume
 */
export async function AD(high: number[], low: number[], close: number[], volume: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "AD", startIdx: 0, endIdx: high.length - 1, high, low, close, volume}) as any;
}

/**
 * ADOSC - Chaikin A/D Oscillator
 * @category Volume Indicators
 *
 * @param high
 * @param low
 * @param close
 * @param volume
 * @param optInFastPeriod Fast Period - Number of period for the fast MA = 3
 * @param optInSlowPeriod Slow Period - Number of period for the slow MA = 10
 */
export async function ADOSC(high: number[], low: number[], close: number[], volume: number[], optInFastPeriod: number = 3, optInSlowPeriod: number = 10): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "ADOSC", startIdx: 0, endIdx: high.length - 1, high, low, close, volume, optInFastPeriod, optInSlowPeriod}) as any;
}

/**
 * OBV - On Balance Volume
 * @category Volume Indicators
 *
 * @param inReal
 * @param volume
 */
export async function OBV(inReal: number[], volume: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "OBV", startIdx: 0, endIdx: inReal.length - 1, inReal, volume}) as any;
}

/**
 * CDL2CROWS - Two Crows
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDL2CROWS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL2CROWS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDL3BLACKCROWS - Three Black Crows
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDL3BLACKCROWS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3BLACKCROWS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDL3INSIDE - Three Inside Up/Down
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDL3INSIDE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3INSIDE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDL3LINESTRIKE - Three-Line Strike
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDL3LINESTRIKE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3LINESTRIKE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDL3OUTSIDE - Three Outside Up/Down
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDL3OUTSIDE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3OUTSIDE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDL3STARSINSOUTH - Three Stars In The South
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDL3STARSINSOUTH(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3STARSINSOUTH", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDL3WHITESOLDIERS - Three Advancing White Soldiers
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDL3WHITESOLDIERS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDL3WHITESOLDIERS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLABANDONEDBABY - Abandoned Baby
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 * @param optInPenetration Penetration - Percentage of penetration of a candle within another candle = 0.3
 */
export async function CDLABANDONEDBABY(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLABANDONEDBABY", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

/**
 * CDLADVANCEBLOCK - Advance Block
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLADVANCEBLOCK(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLADVANCEBLOCK", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLBELTHOLD - Belt-hold
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLBELTHOLD(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLBELTHOLD", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLBREAKAWAY - Breakaway
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLBREAKAWAY(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLBREAKAWAY", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLCLOSINGMARUBOZU - Closing Marubozu
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLCLOSINGMARUBOZU(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLCLOSINGMARUBOZU", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLCONCEALBABYSWALL - Concealing Baby Swallow
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLCONCEALBABYSWALL(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLCONCEALBABYSWALL", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLCOUNTERATTACK - Counterattack
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLCOUNTERATTACK(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLCOUNTERATTACK", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLDARKCLOUDCOVER - Dark Cloud Cover
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 * @param optInPenetration Penetration - Percentage of penetration of a candle within another candle = 0.5
 */
export async function CDLDARKCLOUDCOVER(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.5): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLDARKCLOUDCOVER", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

/**
 * CDLDOJI - Doji
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLDOJI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLDOJI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLDOJISTAR - Doji Star
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLDOJISTAR(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLDOJISTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLDRAGONFLYDOJI - Dragonfly Doji
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLDRAGONFLYDOJI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLDRAGONFLYDOJI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLENGULFING - Engulfing Pattern
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLENGULFING(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLENGULFING", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLEVENINGDOJISTAR - Evening Doji Star
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 * @param optInPenetration Penetration - Percentage of penetration of a candle within another candle = 0.3
 */
export async function CDLEVENINGDOJISTAR(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLEVENINGDOJISTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

/**
 * CDLEVENINGSTAR - Evening Star
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 * @param optInPenetration Penetration - Percentage of penetration of a candle within another candle = 0.3
 */
export async function CDLEVENINGSTAR(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLEVENINGSTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

/**
 * CDLGAPSIDESIDEWHITE - Up/Down-gap side-by-side white lines
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLGAPSIDESIDEWHITE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLGAPSIDESIDEWHITE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLGRAVESTONEDOJI - Gravestone Doji
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLGRAVESTONEDOJI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLGRAVESTONEDOJI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLHAMMER - Hammer
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLHAMMER(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHAMMER", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLHANGINGMAN - Hanging Man
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLHANGINGMAN(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHANGINGMAN", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLHARAMI - Harami Pattern
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLHARAMI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHARAMI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLHARAMICROSS - Harami Cross Pattern
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLHARAMICROSS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHARAMICROSS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLHIGHWAVE - High-Wave Candle
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLHIGHWAVE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHIGHWAVE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLHIKKAKE - Hikkake Pattern
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLHIKKAKE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHIKKAKE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLHIKKAKEMOD - Modified Hikkake Pattern
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLHIKKAKEMOD(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHIKKAKEMOD", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLHOMINGPIGEON - Homing Pigeon
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLHOMINGPIGEON(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLHOMINGPIGEON", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLIDENTICAL3CROWS - Identical Three Crows
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLIDENTICAL3CROWS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLIDENTICAL3CROWS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLINNECK - In-Neck Pattern
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLINNECK(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLINNECK", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLINVERTEDHAMMER - Inverted Hammer
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLINVERTEDHAMMER(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLINVERTEDHAMMER", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLKICKING - Kicking
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLKICKING(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLKICKING", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLKICKINGBYLENGTH - Kicking - bull/bear determined by the longer marubozu
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLKICKINGBYLENGTH(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLKICKINGBYLENGTH", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLLADDERBOTTOM - Ladder Bottom
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLLADDERBOTTOM(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLLADDERBOTTOM", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLLONGLEGGEDDOJI - Long Legged Doji
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLLONGLEGGEDDOJI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLLONGLEGGEDDOJI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLLONGLINE - Long Line Candle
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLLONGLINE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLLONGLINE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLMARUBOZU - Marubozu
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLMARUBOZU(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMARUBOZU", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLMATCHINGLOW - Matching Low
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLMATCHINGLOW(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMATCHINGLOW", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLMATHOLD - Mat Hold
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 * @param optInPenetration Penetration - Percentage of penetration of a candle within another candle = 0.5
 */
export async function CDLMATHOLD(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.5): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMATHOLD", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

/**
 * CDLMORNINGDOJISTAR - Morning Doji Star
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 * @param optInPenetration Penetration - Percentage of penetration of a candle within another candle = 0.3
 */
export async function CDLMORNINGDOJISTAR(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMORNINGDOJISTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

/**
 * CDLMORNINGSTAR - Morning Star
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 * @param optInPenetration Penetration - Percentage of penetration of a candle within another candle = 0.3
 */
export async function CDLMORNINGSTAR(open: number[], high: number[], low: number[], close: number[], optInPenetration: number = 0.3): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLMORNINGSTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close, optInPenetration}) as any;
}

/**
 * CDLONNECK - On-Neck Pattern
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLONNECK(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLONNECK", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLPIERCING - Piercing Pattern
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLPIERCING(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLPIERCING", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLRICKSHAWMAN - Rickshaw Man
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLRICKSHAWMAN(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLRICKSHAWMAN", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLRISEFALL3METHODS - Rising/Falling Three Methods
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLRISEFALL3METHODS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLRISEFALL3METHODS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLSEPARATINGLINES - Separating Lines
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLSEPARATINGLINES(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSEPARATINGLINES", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLSHOOTINGSTAR - Shooting Star
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLSHOOTINGSTAR(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSHOOTINGSTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLSHORTLINE - Short Line Candle
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLSHORTLINE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSHORTLINE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLSPINNINGTOP - Spinning Top
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLSPINNINGTOP(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSPINNINGTOP", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLSTALLEDPATTERN - Stalled Pattern
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLSTALLEDPATTERN(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSTALLEDPATTERN", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLSTICKSANDWICH - Stick Sandwich
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLSTICKSANDWICH(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLSTICKSANDWICH", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLTAKURI - Takuri (Dragonfly Doji with very long lower shadow)
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLTAKURI(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLTAKURI", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLTASUKIGAP - Tasuki Gap
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLTASUKIGAP(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLTASUKIGAP", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLTHRUSTING - Thrusting Pattern
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLTHRUSTING(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLTHRUSTING", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLTRISTAR - Tristar Pattern
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLTRISTAR(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLTRISTAR", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLUNIQUE3RIVER - Unique 3 River
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLUNIQUE3RIVER(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLUNIQUE3RIVER", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLUPSIDEGAP2CROWS - Upside Gap Two Crows
 * @category Pattern Recognition
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLUPSIDEGAP2CROWS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLUPSIDEGAP2CROWS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * CDLXSIDEGAP3METHODS - Upside/Downside Gap Three Methods
 * @category Pattern Recognition
 *
 * @param open
 * @param high
 * @param low
 * @param close
 */
export async function CDLXSIDEGAP3METHODS(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outInteger: number[]}>> {
	return await execute_async({ name: "CDLXSIDEGAP3METHODS", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * BETA - Beta
 * @category Statistic Functions
 * @param inReal0
 * @param inReal1
 * @param optInTimePeriod Time Period - Number of period = 5
 */
export async function BETA(inReal0: number[], inReal1: number[], optInTimePeriod: number = 5): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "BETA", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1, optInTimePeriod}) as any;
}

/**
 * CORREL - Pearson's Correlation Coefficient (r)
 * @category Statistic Functions
 * @param inReal0
 * @param inReal1
 * @param optInTimePeriod Time Period - Number of period = 30
 */
export async function CORREL(inReal0: number[], inReal1: number[], optInTimePeriod: number = 30): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "CORREL", startIdx: 0, endIdx: inReal0.length - 1, inReal0, inReal1, optInTimePeriod}) as any;
}

/**
 * LINEARREG - Linear Regression
 * @category Statistic Functions
 *
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function LINEARREG(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LINEARREG", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * LINEARREG_ANGLE - Linear Regression Angle
 * @category Statistic Functions
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function LINEARREG_ANGLE(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LINEARREG_ANGLE", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * LINEARREG_INTERCEPT - Linear Regression Intercept
 * @category Statistic Functions
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function LINEARREG_INTERCEPT(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LINEARREG_INTERCEPT", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * LINEARREG_SLOPE - Linear Regression Slope
 * @category Statistic Functions
 * @param inReal
 * @param optInTimePeriod Time Period - Number of period = 14
 */

export async function LINEARREG_SLOPE(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "LINEARREG_SLOPE", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * STDDEV - Standard Deviation
 * @category Statistic Functions
 * @param inReal
 * @param optInTimePeriod  Time Period - Number of period = 5
 * @param optInNbDev Deviations - Nb of deviations = 1
 */
export async function STDDEV(inReal: number[], optInTimePeriod: number = 5, optInNbDev: number = 1): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "STDDEV", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInNbDev}) as any;
}

/**
 * TSF - Time Series Forecast
 * @category Statistic Functions
 * @param optInTimePeriod Time Period - Number of period = 14
 */
export async function TSF(inReal: number[], optInTimePeriod: number = 14): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TSF", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod}) as any;
}

/**
 * VAR - Variance
 * @category Statistic Functions
 * @param inReal
 * @param optInTimePeriod  Time Period - Number of period = 5
 * @param optInNbDev Deviations - Nb of deviations = 1
 */
export async function VAR(inReal: number[], optInTimePeriod: number = 5, optInNbDev: number = 1): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "VAR", startIdx: 0, endIdx: inReal.length - 1, inReal, optInTimePeriod, optInNbDev}) as any;
}

/**
 * AVGPRICE - Average Price
 * @category Price Transform
 */
export async function AVGPRICE(open: number[], high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "AVGPRICE", startIdx: 0, endIdx: open.length - 1, open, high, low, close}) as any;
}

/**
 * MEDPRICE - Median Price
 * @category Price Transform
 * @param high
 * @param low
 */
export async function MEDPRICE(high: number[], low: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "MEDPRICE", startIdx: 0, endIdx: high.length - 1, high, low}) as any;
}

/**
 * TYPPRICE - Typical Price
 * @category Price Transform
 */
export async function TYPPRICE(high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "TYPPRICE", startIdx: 0, endIdx: high.length - 1, high, low, close}) as any;
}

/**
 * WCLPRICE - Weighted Close Price
 * @category Price Transform
 */
export async function WCLPRICE(high: number[], low: number[], close: number[]): Promise<IExecutionResult<{ outReal: number[]}>> {
	return await execute_async({ name: "WCLPRICE", startIdx: 0, endIdx: high.length - 1, high, low, close}) as any;
}
