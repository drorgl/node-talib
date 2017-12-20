{
	'target_defaults': {
		'msvs_settings': {
			'VCCLCompilerTool': {
				'ObjectFile': '$(IntDir)/%(RelativeDir)/',
			},

		},
		'configurations': {
			'Debug': {

				'conditions': [
					['1==1', {
							'msvs_settings': {
								 # This magical incantation is necessary because VC++will compile
								 # object files to same directory...even if they have the same name!
								'VCCLCompilerTool': {
									'AdditionalOptions': ['/bigobj'],
									'WholeProgramOptimization': 'false',
									 # 'AdditionalOptions': ['/w'],
									 # ['/wd4244', '/wd4018', '/wd4133', '/wd4090'] # GL - was added because the forced optimization coming from node - gyp is disturbing the weird coding style from ffmpeg
									'RuntimeLibrary': 3,
									 # dll debug BUILD_WITH_STATIC_CRT
									'ExceptionHandling': 1 #  / EHsc
								},
								'VCLinkerTool': {
									'LinkTimeCodeGeneration': '0',
								},

								'VCLibrarianTool': {
									'AdditionalOptions!': ['/LTCG'],
									'AdditionalOptions': ['/LTCG'],
								},
							}
						}
					]
				]
			},
			'Release': {
				'conditions': [
					['1==1', {
							'msvs_settings': {
								 # This magical incantation is necessary because VC++will compile
								 # object files to same directory...even if they have the same name!
								'VCCLCompilerTool': {
									'AdditionalOptions': ['/bigobj'],
									'WholeProgramOptimization': 'false',
									 # 'AdditionalOptions': ['/w'],
									 # ['/wd4244', '/wd4018', '/wd4133', '/wd4090'] # GL - was added because the forced optimization coming from node - gyp is disturbing the weird coding style from ffmpeg
									'RuntimeLibrary': 2,
									 # dll release BUILD_WITH_STATIC_CRT
									'ExceptionHandling': 1 #  / EHsc
								},
								'VCLinkerTool': {
									'LinkTimeCodeGeneration': '0',
								},

								'VCLibrarianTool': {
									'AdditionalOptions!': ['/LTCG'],
									'AdditionalOptions': ['/LTCG'],
								},
							}
						}
					]
				]
			},
		}
	},

	"targets": [{
			"target_name": "ta-lib",
            "type": "static_library",
            'direct_dependent_settings': {
                'include_dirs': [
                    "src/ta-lib/include",
                ],
            },
			"sources": [
               

                "src/ta-lib/CHANGELOG.TXT",
                "src/ta-lib/include/ta_abstract.h",
                "src/ta-lib/include/ta_common.h",
                "src/ta-lib/include/ta_config.h.in",
                "src/ta-lib/include/ta_defs.h",
                "src/ta-lib/include/ta_func.h",
                "src/ta-lib/include/ta_libc.h",

                #"src/ta-lib/src/ta_abstract/excel_glue.c",
                "src/ta-lib/src/ta_abstract/frames/ta_frame.c",
                "src/ta-lib/src/ta_abstract/frames/ta_frame.h",

                "src/ta-lib/src/ta_abstract/tables/table_a.c",
                "src/ta-lib/src/ta_abstract/tables/table_b.c",
                "src/ta-lib/src/ta_abstract/tables/table_c.c",
                "src/ta-lib/src/ta_abstract/tables/table_d.c",
                "src/ta-lib/src/ta_abstract/tables/table_e.c",
                "src/ta-lib/src/ta_abstract/tables/table_f.c",
                "src/ta-lib/src/ta_abstract/tables/table_g.c",
                "src/ta-lib/src/ta_abstract/tables/table_h.c",
                "src/ta-lib/src/ta_abstract/tables/table_i.c",
                "src/ta-lib/src/ta_abstract/tables/table_j.c",
                "src/ta-lib/src/ta_abstract/tables/table_k.c",
                "src/ta-lib/src/ta_abstract/tables/table_l.c",
                "src/ta-lib/src/ta_abstract/tables/table_m.c",
                "src/ta-lib/src/ta_abstract/tables/table_n.c",
                "src/ta-lib/src/ta_abstract/tables/table_o.c",
                "src/ta-lib/src/ta_abstract/tables/table_p.c",
                "src/ta-lib/src/ta_abstract/tables/table_q.c",
                "src/ta-lib/src/ta_abstract/tables/table_r.c",
                "src/ta-lib/src/ta_abstract/tables/table_s.c",
                "src/ta-lib/src/ta_abstract/tables/table_t.c",
                "src/ta-lib/src/ta_abstract/tables/table_u.c",
                "src/ta-lib/src/ta_abstract/tables/table_v.c",
                "src/ta-lib/src/ta_abstract/tables/table_w.c",
                "src/ta-lib/src/ta_abstract/tables/table_x.c",
                "src/ta-lib/src/ta_abstract/tables/table_y.c",
                "src/ta-lib/src/ta_abstract/tables/table_z.c",
                "src/ta-lib/src/ta_abstract/ta_abstract.c",
                "src/ta-lib/src/ta_abstract/ta_def_ui.c",
                "src/ta-lib/src/ta_abstract/ta_def_ui.h",
                "src/ta-lib/src/ta_abstract/ta_frame_priv.h",
                "src/ta-lib/src/ta_abstract/ta_func_api.c",
                "src/ta-lib/src/ta_abstract/ta_group_idx.c",
                "src/ta-lib/src/ta_abstract/ta_java_defs.h",

                "src/ta-lib/src/ta_abstract/templates/excel_glue.c.template",
                "src/ta-lib/src/ta_abstract/templates/Makefile.am.template",
                "src/ta-lib/src/ta_abstract/templates/ta_frame.c.template",
                "src/ta-lib/src/ta_abstract/templates/ta_frame.h.template",
                "src/ta-lib/src/ta_abstract/templates/ta_func.h.template",
                "src/ta-lib/src/ta_abstract/templates/ta_func.swg.template",
                "src/ta-lib/src/ta_abstract/templates/ta_func_api.c.template",
                "src/ta-lib/src/ta_abstract/templates/ta_group_idx.c.template",
                "src/ta-lib/src/ta_abstract/templates/ta_java_defs.h.template",
                "src/ta-lib/src/ta_abstract/templates/ta_retcode.c.template",
                "src/ta-lib/src/ta_abstract/templates/ta_x.c.template",
                
                "src/ta-lib/src/ta_common/ta_global.c",
                "src/ta-lib/src/ta_common/ta_global.h",
                "src/ta-lib/src/ta_common/ta_magic_nb.h",
                "src/ta-lib/src/ta_common/ta_memory.h",
                "src/ta-lib/src/ta_common/ta_pragma.h",
                "src/ta-lib/src/ta_common/ta_retcode.c",
                "src/ta-lib/src/ta_common/ta_version.c",

                "src/ta-lib/src/ta_func/ta_ACOS.c",
                "src/ta-lib/src/ta_func/ta_AD.c",
                "src/ta-lib/src/ta_func/ta_ADD.c",
                "src/ta-lib/src/ta_func/ta_ADOSC.c",
                "src/ta-lib/src/ta_func/ta_ADX.c",
                "src/ta-lib/src/ta_func/ta_ADXR.c",
                "src/ta-lib/src/ta_func/ta_APO.c",
                "src/ta-lib/src/ta_func/ta_AROON.c",
                "src/ta-lib/src/ta_func/ta_AROONOSC.c",
                "src/ta-lib/src/ta_func/ta_ASIN.c",
                "src/ta-lib/src/ta_func/ta_ATAN.c",
                "src/ta-lib/src/ta_func/ta_ATR.c",
                "src/ta-lib/src/ta_func/ta_AVGPRICE.c",
                "src/ta-lib/src/ta_func/ta_BBANDS.c",
                "src/ta-lib/src/ta_func/ta_BETA.c",
                "src/ta-lib/src/ta_func/ta_BOP.c",
                "src/ta-lib/src/ta_func/ta_CCI.c",
                "src/ta-lib/src/ta_func/ta_CDL2CROWS.c",
                "src/ta-lib/src/ta_func/ta_CDL3BLACKCROWS.c",
                "src/ta-lib/src/ta_func/ta_CDL3INSIDE.c",
                "src/ta-lib/src/ta_func/ta_CDL3LINESTRIKE.c",
                "src/ta-lib/src/ta_func/ta_CDL3OUTSIDE.c",
                "src/ta-lib/src/ta_func/ta_CDL3STARSINSOUTH.c",
                "src/ta-lib/src/ta_func/ta_CDL3WHITESOLDIERS.c",
                "src/ta-lib/src/ta_func/ta_CDLABANDONEDBABY.c",
                "src/ta-lib/src/ta_func/ta_CDLADVANCEBLOCK.c",
                "src/ta-lib/src/ta_func/ta_CDLBELTHOLD.c",
                "src/ta-lib/src/ta_func/ta_CDLBREAKAWAY.c",
                "src/ta-lib/src/ta_func/ta_CDLCLOSINGMARUBOZU.c",
                "src/ta-lib/src/ta_func/ta_CDLCONCEALBABYSWALL.c",
                "src/ta-lib/src/ta_func/ta_CDLCOUNTERATTACK.c",
                "src/ta-lib/src/ta_func/ta_CDLDARKCLOUDCOVER.c",
                "src/ta-lib/src/ta_func/ta_CDLDOJI.c",
                "src/ta-lib/src/ta_func/ta_CDLDOJISTAR.c",
                "src/ta-lib/src/ta_func/ta_CDLDRAGONFLYDOJI.c",
                "src/ta-lib/src/ta_func/ta_CDLENGULFING.c",
                "src/ta-lib/src/ta_func/ta_CDLEVENINGDOJISTAR.c",
                "src/ta-lib/src/ta_func/ta_CDLEVENINGSTAR.c",
                "src/ta-lib/src/ta_func/ta_CDLGAPSIDESIDEWHITE.c",
                "src/ta-lib/src/ta_func/ta_CDLGRAVESTONEDOJI.c",
                "src/ta-lib/src/ta_func/ta_CDLHAMMER.c",
                "src/ta-lib/src/ta_func/ta_CDLHANGINGMAN.c",
                "src/ta-lib/src/ta_func/ta_CDLHARAMI.c",
                "src/ta-lib/src/ta_func/ta_CDLHARAMICROSS.c",
                "src/ta-lib/src/ta_func/ta_CDLHIGHWAVE.c",
                "src/ta-lib/src/ta_func/ta_CDLHIKKAKE.c",
                "src/ta-lib/src/ta_func/ta_CDLHIKKAKEMOD.c",
                "src/ta-lib/src/ta_func/ta_CDLHOMINGPIGEON.c",
                "src/ta-lib/src/ta_func/ta_CDLIDENTICAL3CROWS.c",
                "src/ta-lib/src/ta_func/ta_CDLINNECK.c",
                "src/ta-lib/src/ta_func/ta_CDLINVERTEDHAMMER.c",
                "src/ta-lib/src/ta_func/ta_CDLKICKING.c",
                "src/ta-lib/src/ta_func/ta_CDLKICKINGBYLENGTH.c",
                "src/ta-lib/src/ta_func/ta_CDLLADDERBOTTOM.c",
                "src/ta-lib/src/ta_func/ta_CDLLONGLEGGEDDOJI.c",
                "src/ta-lib/src/ta_func/ta_CDLLONGLINE.c",
                "src/ta-lib/src/ta_func/ta_CDLMARUBOZU.c",
                "src/ta-lib/src/ta_func/ta_CDLMATCHINGLOW.c",
                "src/ta-lib/src/ta_func/ta_CDLMATHOLD.c",
                "src/ta-lib/src/ta_func/ta_CDLMORNINGDOJISTAR.c",
                "src/ta-lib/src/ta_func/ta_CDLMORNINGSTAR.c",
                "src/ta-lib/src/ta_func/ta_CDLONNECK.c",
                "src/ta-lib/src/ta_func/ta_CDLPIERCING.c",
                "src/ta-lib/src/ta_func/ta_CDLRICKSHAWMAN.c",
                "src/ta-lib/src/ta_func/ta_CDLRISEFALL3METHODS.c",
                "src/ta-lib/src/ta_func/ta_CDLSEPARATINGLINES.c",
                "src/ta-lib/src/ta_func/ta_CDLSHOOTINGSTAR.c",
                "src/ta-lib/src/ta_func/ta_CDLSHORTLINE.c",
                "src/ta-lib/src/ta_func/ta_CDLSPINNINGTOP.c",
                "src/ta-lib/src/ta_func/ta_CDLSTALLEDPATTERN.c",
                "src/ta-lib/src/ta_func/ta_CDLSTICKSANDWICH.c",
                "src/ta-lib/src/ta_func/ta_CDLTAKURI.c",
                "src/ta-lib/src/ta_func/ta_CDLTASUKIGAP.c",
                "src/ta-lib/src/ta_func/ta_CDLTHRUSTING.c",
                "src/ta-lib/src/ta_func/ta_CDLTRISTAR.c",
                "src/ta-lib/src/ta_func/ta_CDLUNIQUE3RIVER.c",
                "src/ta-lib/src/ta_func/ta_CDLUPSIDEGAP2CROWS.c",
                "src/ta-lib/src/ta_func/ta_CDLXSIDEGAP3METHODS.c",
                "src/ta-lib/src/ta_func/ta_CEIL.c",
                "src/ta-lib/src/ta_func/ta_CMO.c",
                "src/ta-lib/src/ta_func/ta_CORREL.c",
                "src/ta-lib/src/ta_func/ta_COS.c",
                "src/ta-lib/src/ta_func/ta_COSH.c",
                "src/ta-lib/src/ta_func/ta_DEMA.c",
                "src/ta-lib/src/ta_func/ta_DIV.c",
                "src/ta-lib/src/ta_func/ta_DX.c",
                "src/ta-lib/src/ta_func/ta_EMA.c",
                "src/ta-lib/src/ta_func/ta_EXP.c",
                "src/ta-lib/src/ta_func/ta_FLOOR.c",
                "src/ta-lib/src/ta_func/ta_HT_DCPERIOD.c",
                "src/ta-lib/src/ta_func/ta_HT_DCPHASE.c",
                "src/ta-lib/src/ta_func/ta_HT_PHASOR.c",
                "src/ta-lib/src/ta_func/ta_HT_SINE.c",
                "src/ta-lib/src/ta_func/ta_HT_TRENDLINE.c",
                "src/ta-lib/src/ta_func/ta_HT_TRENDMODE.c",
                "src/ta-lib/src/ta_func/ta_KAMA.c",
                "src/ta-lib/src/ta_func/ta_LINEARREG.c",
                "src/ta-lib/src/ta_func/ta_LINEARREG_ANGLE.c",
                "src/ta-lib/src/ta_func/ta_LINEARREG_INTERCEPT.c",
                "src/ta-lib/src/ta_func/ta_LINEARREG_SLOPE.c",
                "src/ta-lib/src/ta_func/ta_LN.c",
                "src/ta-lib/src/ta_func/ta_LOG10.c",
                "src/ta-lib/src/ta_func/ta_MA.c",
                "src/ta-lib/src/ta_func/ta_MACD.c",
                "src/ta-lib/src/ta_func/ta_MACDEXT.c",
                "src/ta-lib/src/ta_func/ta_MACDFIX.c",
                "src/ta-lib/src/ta_func/ta_MAMA.c",
                "src/ta-lib/src/ta_func/ta_MAVP.c",
                "src/ta-lib/src/ta_func/ta_MAX.c",
                "src/ta-lib/src/ta_func/ta_MAXINDEX.c",
                "src/ta-lib/src/ta_func/ta_MEDPRICE.c",
                "src/ta-lib/src/ta_func/ta_MFI.c",
                "src/ta-lib/src/ta_func/ta_MIDPOINT.c",
                "src/ta-lib/src/ta_func/ta_MIDPRICE.c",
                "src/ta-lib/src/ta_func/ta_MIN.c",
                "src/ta-lib/src/ta_func/ta_MININDEX.c",
                "src/ta-lib/src/ta_func/ta_MINMAX.c",
                "src/ta-lib/src/ta_func/ta_MINMAXINDEX.c",
                "src/ta-lib/src/ta_func/ta_MINUS_DI.c",
                "src/ta-lib/src/ta_func/ta_MINUS_DM.c",
                "src/ta-lib/src/ta_func/ta_MOM.c",
                "src/ta-lib/src/ta_func/ta_MULT.c",
                "src/ta-lib/src/ta_func/ta_NATR.c",
                "src/ta-lib/src/ta_func/ta_NVI.c",
                "src/ta-lib/src/ta_func/ta_OBV.c",
                "src/ta-lib/src/ta_func/ta_PLUS_DI.c",
                "src/ta-lib/src/ta_func/ta_PLUS_DM.c",
                "src/ta-lib/src/ta_func/ta_PPO.c",
                "src/ta-lib/src/ta_func/ta_PVI.c",
                "src/ta-lib/src/ta_func/ta_ROC.c",
                "src/ta-lib/src/ta_func/ta_ROCP.c",
                "src/ta-lib/src/ta_func/ta_ROCR.c",
                "src/ta-lib/src/ta_func/ta_ROCR100.c",
                "src/ta-lib/src/ta_func/ta_RSI.c",
                "src/ta-lib/src/ta_func/ta_SAR.c",
                "src/ta-lib/src/ta_func/ta_SAREXT.c",
                "src/ta-lib/src/ta_func/ta_SIN.c",
                "src/ta-lib/src/ta_func/ta_SINH.c",
                "src/ta-lib/src/ta_func/ta_SMA.c",
                "src/ta-lib/src/ta_func/ta_SQRT.c",
                "src/ta-lib/src/ta_func/ta_STDDEV.c",
                "src/ta-lib/src/ta_func/ta_STOCH.c",
                "src/ta-lib/src/ta_func/ta_STOCHF.c",
                "src/ta-lib/src/ta_func/ta_STOCHRSI.c",
                "src/ta-lib/src/ta_func/ta_SUB.c",
                "src/ta-lib/src/ta_func/ta_SUM.c",
                "src/ta-lib/src/ta_func/ta_T3.c",
                "src/ta-lib/src/ta_func/ta_TAN.c",
                "src/ta-lib/src/ta_func/ta_TANH.c",
                "src/ta-lib/src/ta_func/ta_TEMA.c",
                "src/ta-lib/src/ta_func/ta_TRANGE.c",
                "src/ta-lib/src/ta_func/ta_TRIMA.c",
                "src/ta-lib/src/ta_func/ta_TRIX.c",
                "src/ta-lib/src/ta_func/ta_TSF.c",
                "src/ta-lib/src/ta_func/ta_TYPPRICE.c",
                "src/ta-lib/src/ta_func/ta_ULTOSC.c",
                "src/ta-lib/src/ta_func/ta_utility.c",
                "src/ta-lib/src/ta_func/ta_utility.h",
                "src/ta-lib/src/ta_func/ta_VAR.c",
                "src/ta-lib/src/ta_func/ta_WCLPRICE.c",
                "src/ta-lib/src/ta_func/ta_WILLR.c",
                "src/ta-lib/src/ta_func/ta_WMA.c",

               
			],
			
			'include_dirs': [
				
                "src/ta-lib/include",
                "src/ta-lib/src/ta_abstract",
                "src/ta-lib/src/ta_common",
                "src/ta-lib/src/ta_abstract/frames",
                "src/ta-lib/src/ta_func",
			],
			'link_settings': {
				'libraries': [
				],
			},
			"conditions": [
				['OS == "win"', {
						'libraries': [
							'dbghelp.lib'
						],
					}
				],
				['OS in "linux android"', {
						'cflags_cc': ['-fexceptions', '-std=c++11'],
						'cflags!': ['-fno-exceptions'],
						'cflags_cc!': ['-fno-rtti', '-fno-exceptions'],
					}
				],
			]
		},
        {
            "target_name" : "ta_regtest",
            "type":"executable",
            "include_dirs":[
                "src/ta-lib/src/ta_func",
                "src/ta-lib/src/ta_common",
                "src/ta-lib/src/tools/ta_regtest",
            ],
            "sources":[
                 "src/ta-lib/src/tools/ta_regtest/ReadMe.txt",
                "src/ta-lib/src/tools/ta_regtest/ta_error_number.h",
                #"src/ta-lib/src/tools/ta_regtest/ta_gDataClose.c",
                #"src/ta-lib/src/tools/ta_regtest/ta_gDataHigh.c",
                #"src/ta-lib/src/tools/ta_regtest/ta_gDataLow.c",
                #"src/ta-lib/src/tools/ta_regtest/ta_gDataOpen.c",
                "src/ta-lib/src/tools/ta_regtest/ta_regtest.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_1in_1out.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_1in_2out.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_adx.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_bbands.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_candlestick.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_ma.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_macd.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_minmax.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_mom.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_per_ema.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_per_hl.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_per_hlc.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_per_hlcv.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_per_ohlc.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_po.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_rsi.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_sar.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_stddev.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_stoch.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func/test_trange.c",
                "src/ta-lib/src/tools/ta_regtest/ta_test_func.h",
                "src/ta-lib/src/tools/ta_regtest/ta_test_priv.h",
                "src/ta-lib/src/tools/ta_regtest/test_abstract.c",
                "src/ta-lib/src/tools/ta_regtest/test_data.c",
                "src/ta-lib/src/tools/ta_regtest/test_internals.c",
                "src/ta-lib/src/tools/ta_regtest/test_util.c",
            ],
            "dependencies":[
                "ta-lib"
            ]
        },
        {
            "target_name":"node-ta-lib",
            "include_dirs":[
                "<!(node -e \"require('nan')\")",
            ],
            "sources":[
                "binding.gyp",
                "package.json",
                "readme.md",
                "src/talib.cpp",
                "tsconfig.json",


            ],
            "dependencies":[
                "ta-lib",
            ],
            "conditions": [
				['OS == "win"', {
						'libraries': [
							'dbghelp.lib'
						],
					}
				],
				['OS in "linux android"', {
						'cflags': ['-fexceptions', '-std=c++11'],
						'cflags!': ['-fno-exceptions'],
						'cflags_cc!': ['-fno-rtti', '-fno-exceptions'],
					}
				],
			]
        }
	]
}
