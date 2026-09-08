var Wn = Object.defineProperty;
var zn = (n, a, e) => a in n ? Wn(n, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[a] = e;
var T = (n, a, e) => zn(n, typeof a != "symbol" ? a + "" : a, e);
import { d as Dn } from "./transition-space-Df4GnxL9.js";
import "./three.module-yo8ZErO2.js";
import { p as An } from "./csv-Ha6vz5IV.js";
import { O as R, a as $n, V as H, b as En } from "./three.core-DAeQ9pKY.js";
const Gn = "figure2story-transition-space/v1", Hn = "stacked-area-a-to-line-b", Xn = "gephart2024-fig1", Un = {
  transition_id: "gephart2024-fig1 · stacked area (a) → line (b)",
  panel_i: "stacked area (a)",
  panel_j: "line (b)"
}, Bn = {
  entry: "index.ts",
  keyframes: "keyframes.ts",
  animation: "animation.ts",
  audit: null
}, Yn = {
  width: 1920,
  height: 1080
}, Kn = [
  {
    index: 0,
    kind: "panel-i",
    label: "Panel stacked area (a)",
    progress: 0
  },
  {
    index: 1,
    kind: "panel-i-joint-encoding",
    label: "Stacked area mapped to Joint World",
    progress: 0.333333
  },
  {
    index: 2,
    kind: "lcm",
    label: "Combined Data · exports and production exported",
    progress: 0.666667
  },
  {
    index: 3,
    kind: "panel-j",
    label: "Panel line (b)",
    progress: 1
  }
], Vn = {
  worlds: [
    {
      id: "joint-world",
      dimensions: 3,
      keyframe_indices: [
        1,
        2
      ]
    }
  ],
  cameras: [
    {
      id: "joint-camera",
      world_id: "joint-world",
      projection: "orthographic-right-handed-y-up",
      keyframe_indices: [
        1,
        2
      ]
    }
  ],
  viewports: [
    {
      id: "frame-viewport",
      keyframe_indices: [
        0,
        1,
        2,
        3
      ]
    }
  ],
  planes: [
    {
      id: "source-area-panel",
      panel: "stacked area (a)",
      keyframe_indices: [
        0
      ],
      result_refs: [
        "stacked area (a).global-exports"
      ],
      position_fields: [
        "year",
        "live_weight_t"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [],
      world_id: null,
      camera_id: null
    },
    {
      id: "exports-area-world-plane",
      panel: "stacked area (a)",
      keyframe_indices: [
        1,
        2
      ],
      result_refs: [
        "stacked area (a).global-exports"
      ],
      position_fields: [
        "year",
        "live_weight_t"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Z"
      ],
      world_id: "joint-world",
      camera_id: "joint-camera"
    },
    {
      id: "production-line-world-plane",
      panel: "line (b)",
      keyframe_indices: [
        2
      ],
      result_refs: [
        "line (b).production-exported"
      ],
      position_fields: [
        "year",
        "percent_export"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Y"
      ],
      world_id: "joint-world",
      camera_id: "joint-camera"
    },
    {
      id: "target-line-panel",
      panel: "line (b)",
      keyframe_indices: [
        3
      ],
      result_refs: [
        "line (b).production-exported"
      ],
      position_fields: [
        "year",
        "percent_export"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [],
      world_id: null,
      camera_id: null
    }
  ],
  objects: [
    {
      id: "frame-viewport",
      role: "canonical-frame-and-safe-area",
      keyframe_indices: [
        0,
        1,
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            0,
            1,
            2,
            3
          ],
          host: {
            kind: "viewport",
            id: "frame-viewport"
          }
        }
      ]
    },
    {
      id: "joint-world",
      role: "locked-world-and-camera-state",
      keyframe_indices: [
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            1,
            2
          ],
          host: {
            kind: "world",
            id: "joint-world"
          }
        }
      ]
    },
    {
      id: "exports-area-plane",
      role: "stacked-area-structural-host",
      keyframe_indices: [
        0,
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            0
          ],
          host: {
            kind: "panel-plane",
            id: "source-area-panel"
          }
        },
        {
          keyframe_indices: [
            1,
            2
          ],
          host: {
            kind: "panel-plane",
            id: "exports-area-world-plane"
          }
        }
      ]
    },
    {
      id: "exports-area-series",
      role: "five-source-stacked-area-paths",
      keyframe_indices: [
        0,
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            0
          ],
          host: {
            kind: "panel-plane",
            id: "source-area-panel"
          }
        },
        {
          keyframe_indices: [
            1,
            2
          ],
          host: {
            kind: "panel-plane",
            id: "exports-area-world-plane"
          }
        }
      ]
    },
    {
      id: "exports-guides",
      role: "exports-grid-y-axis-ticks-and-unit-title",
      keyframe_indices: [
        0,
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            0
          ],
          host: {
            kind: "panel-plane",
            id: "source-area-panel"
          }
        },
        {
          keyframe_indices: [
            1,
            2
          ],
          host: {
            kind: "panel-plane",
            id: "exports-area-world-plane"
          }
        }
      ]
    },
    {
      id: "production-line-plane",
      role: "production-export-line-structural-host",
      keyframe_indices: [
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "production-line-world-plane"
          }
        },
        {
          keyframe_indices: [
            3
          ],
          host: {
            kind: "panel-plane",
            id: "target-line-panel"
          }
        }
      ]
    },
    {
      id: "production-line-series",
      role: "four-source-production-export-lines",
      keyframe_indices: [
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "production-line-world-plane"
          }
        },
        {
          keyframe_indices: [
            3
          ],
          host: {
            kind: "panel-plane",
            id: "target-line-panel"
          }
        }
      ]
    },
    {
      id: "production-guides",
      role: "production-grid-y-axis-ticks-and-unit-title",
      keyframe_indices: [
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "production-line-world-plane"
          }
        },
        {
          keyframe_indices: [
            3
          ],
          host: {
            kind: "panel-plane",
            id: "target-line-panel"
          }
        }
      ]
    },
    {
      id: "year-axis",
      role: "shared-year-scale-and-axis",
      keyframe_indices: [
        0,
        1,
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            0
          ],
          host: {
            kind: "panel-plane",
            id: "source-area-panel"
          }
        },
        {
          keyframe_indices: [
            1,
            2
          ],
          host: {
            kind: "world",
            id: "joint-world"
          }
        },
        {
          keyframe_indices: [
            3
          ],
          host: {
            kind: "panel-plane",
            id: "target-line-panel"
          }
        }
      ]
    },
    {
      id: "source-color-legend",
      role: "locked-source-category-color-guide",
      keyframe_indices: [
        0,
        1,
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            0,
            1,
            2,
            3
          ],
          host: {
            kind: "viewport",
            id: "frame-viewport"
          }
        }
      ]
    }
  ]
}, Jn = {
  schema_version: Gn,
  id: Hn,
  figure_id: Xn,
  pair: Un,
  modules: Bn,
  frame: Yn,
  keyframes: Kn,
  scene: Vn
}, Zn = `year,habitat_method,live_weight_t
1996,marine capture,20989371.4314146
1996,inland capture,702199.379970842
1996,marine aquaculture,2675036.55718589
1996,inland aquaculture,550359.896358266
1996,unknown,3177045.29646021
1997,marine capture,23091930.9938082
1997,inland capture,788378.603861273
1997,marine aquaculture,2566245.22110279
1997,inland aquaculture,708554.908185423
1997,unknown,3775107.10374069
1998,marine capture,23315856.7562677
1998,inland capture,769199.967900111
1998,marine aquaculture,2793819.87112776
1998,inland aquaculture,707668.59664131
1998,unknown,3122424.39042659
1999,marine capture,24187858.6948524
1999,inland capture,914168.197236914
1999,marine aquaculture,3066989.13243377
1999,inland aquaculture,938589.656970326
1999,unknown,3976934.57187557
2000,marine capture,25819975.7842478
2000,inland capture,1051789.4948637
2000,marine aquaculture,3396624.84602688
2000,inland aquaculture,1100211.7328519
2000,unknown,4228438.54694436
2001,marine capture,27865056.3595977
2001,inland capture,1139342.67136988
2001,marine aquaculture,3574978.73435986
2001,inland aquaculture,1281031.66499291
2001,unknown,6523314.41720624
2002,marine capture,28238287.9502064
2002,inland capture,1133422.56545489
2002,marine aquaculture,3594345.36491665
2002,inland aquaculture,1410753.89914619
2002,unknown,5070167.51401458
2003,marine capture,29488105.8367816
2003,inland capture,1187157.01374897
2003,marine aquaculture,4390788.1543256
2003,inland aquaculture,1846839.27167055
2003,unknown,6586547.80510098
2004,marine capture,28533862.3930002
2004,inland capture,1233418.11783842
2004,marine aquaculture,4790027.44181929
2004,inland aquaculture,2291523.88991537
2004,unknown,4632566.0298482
2005,marine capture,30574434.0005982
2005,inland capture,1404108.27681933
2005,marine aquaculture,4984442.26729323
2005,inland aquaculture,2834763.91887379
2005,unknown,4731603.12834385
2006,marine capture,33108704.883416
2006,inland capture,1355657.58887263
2006,marine aquaculture,5376541.14893935
2006,inland aquaculture,3332065.47027513
2006,unknown,7986927.70885448
2007,marine capture,31545184.1567857
2007,inland capture,1268238.35442047
2007,marine aquaculture,5560633.68472187
2007,inland aquaculture,3241167.8965872
2007,unknown,5782137.60960504
2008,marine capture,31030817.2788631
2008,inland capture,1276845.23041897
2008,marine aquaculture,5587783.38850173
2008,inland aquaculture,3758163.43820964
2008,unknown,7243500.21228044
2009,marine capture,32810519.7581871
2009,inland capture,1244265.30221608
2009,marine aquaculture,5726130.75654881
2009,inland aquaculture,2937769.89561351
2009,unknown,6360666.47079479
2010,marine capture,34862683.9013772
2010,inland capture,1485844.56832634
2010,marine aquaculture,6221306.54988771
2010,inland aquaculture,5087975.82694843
2010,unknown,10130277.4026411
2011,marine capture,36313284.8487117
2011,inland capture,1473181.11344414
2011,marine aquaculture,6798715.1682387
2011,inland aquaculture,5294536.7832188
2011,unknown,5851432.75536749
2012,marine capture,35262696.4193174
2012,inland capture,1390448.67853216
2012,marine aquaculture,6727700.36601073
2012,inland aquaculture,4781530.8953255
2012,unknown,6059182.15846984
2013,marine capture,34578445.6805705
2013,inland capture,1643177.60195633
2013,marine aquaculture,6739391.4866366
2013,inland aquaculture,3397681.10871372
2013,unknown,7383727.89419267
2014,marine capture,35514755.0481848
2014,inland capture,1647876.67693269
2014,marine aquaculture,7288520.17815219
2014,inland aquaculture,3549326.82179233
2014,unknown,8299149.31947846
2015,marine capture,35474313.6540236
2015,inland capture,1604362.81602629
2015,marine aquaculture,7596637.89620529
2015,inland aquaculture,3610926.11317745
2015,unknown,8149259.43899995
2016,marine capture,35947809.8042409
2016,inland capture,1698681.7146194
2016,marine aquaculture,7956056.37932045
2016,inland aquaculture,3641178.73778979
2016,unknown,8031681.55700536
2017,marine capture,37328797.5263434
2017,inland capture,1629104.82163548
2017,marine aquaculture,8293381.16756923
2017,inland aquaculture,3778546.38952415
2017,unknown,7902607.39849921
2018,marine capture,38135125.1792254
2018,inland capture,1776869.73630561
2018,marine aquaculture,8347340.1563825
2018,inland aquaculture,4058047.04270264
2018,unknown,8720094.86006386
2019,marine capture,36214732.0952547
2019,inland capture,1616874.76605326
2019,marine aquaculture,8863504.44278225
2019,inland aquaculture,3764097.26425517
2019,unknown,8787027.44175003
2020,marine capture,35266194.99462
2020,inland capture,1285818.61436511
2020,marine aquaculture,8929862.60544502
2020,inland aquaculture,3738518.48003822
2020,unknown,7371780.62063769
`, Qn = `year,habitat_method,environment,dom_live_weight_t,production_t,percent_export
1996,marine capture,marine,15855216.071614,86367302,18.357892054581
1996,inland capture,inland,524466.201819177,7441014,7.04831628887107
1996,marine aquaculture,marine,2147521.86052083,11204041,19.1673866645153
1996,inland aquaculture,inland,416002.125739664,15302625,2.71850173247834
1997,marine capture,marine,17521747.8041295,85696716,20.4462301730786
1997,inland capture,inland,570355.913737909,7479021,7.6260771795922
1997,marine aquaculture,marine,2039499.51821042,11096964,18.3788964099588
1997,inland aquaculture,inland,530097.370983591,16180381,3.27617360174393
1998,marine capture,marine,17345280.2092666,78016891,22.2327242048989
1998,inland capture,inland,554815.939019875,7834398,7.08179414704072
1998,marine aquaculture,marine,2215407.03522246,11723322,18.8974339800822
1998,inland aquaculture,inland,520290.949277608,16627413,3.12911545095805
1999,marine capture,marine,18038931.537511,83456347.099,21.6148108137448
1999,inland capture,inland,659661.871997,8267168,7.97929680389947
1999,marine aquaculture,marine,2409688.3201024,12799939,18.8257797174065
1999,inland aquaculture,inland,699497.845093806,17853222,3.91804821053481
2000,marine capture,marine,19172233.8755334,84981926.6,22.5603662361939
2000,inland capture,inland,768971.665992047,8581252,8.96106612405797
2000,marine aquaculture,marine,2620526.28984431,13698097,19.1305864591579
2000,inland aquaculture,inland,835779.544839931,18633682,4.48531613258148
2001,marine capture,marine,20595700.4786982,82247025.5,25.0412709195158
2001,inland capture,inland,827389.606460476,8542875,9.6851423725675
2001,marine aquaculture,marine,2737005.20874132,14804536.4,18.4876117346121
2001,inland aquaculture,inland,990796.309414958,19703962,5.0284115926277
2002,marine capture,marine,21113229.5382732,82682780.7,25.5352194973689
2002,inland capture,inland,843354.987276078,8396604,10.044000970822
2002,marine aquaculture,marine,2749234.50451526,15720748.797,17.4879361028903
2002,inland aquaculture,inland,1063526.64102793,20957893,5.07458760777112
2003,marine capture,marine,21778937.4096857,79715264,27.3209123533551
2003,inland capture,inland,860775.358947453,8607493,10.0003027472396
2003,marine aquaculture,marine,3332377.96999707,16835498.5,19.7937588245283
2003,inland aquaculture,inland,1420826.13838551,21872018,6.49609075113922
2004,marine capture,marine,20560858.8664606,84220421.404,24.4131512567854
2004,inland capture,inland,892506.519454249,8663146,10.3023372739447
2004,marine aquaculture,marine,3632685.52167626,17850937.2,20.350110926816
2004,inland aquaculture,inland,1679037.52556657,23847010.1,7.04087228766078
2005,marine capture,marine,21701828.6424605,83084928.879,26.1200544253528
2005,inland capture,inland,996883.395451612,9433339,10.567662154955
2005,marine aquaculture,marine,3713683.81582106,18686187.7,19.8739511528136
2005,inland aquaculture,inland,1997589.01955848,25374382.281,7.87246364241247
2006,marine capture,marine,23629652.8703836,80408440,29.3870306032346
2006,inland capture,inland,955925.907704284,9819938,9.7345411722995
2006,marine aquaculture,marine,4008797.06513055,19964941.58,20.0791825464012
2006,inland aquaculture,inland,2414191.16373832,27044554.255,8.9267182626683
2007,marine capture,marine,22327493.1365817,80477187,27.7438786927055
2007,inland capture,inland,923945.18527893,10072879,9.17260284054768
2007,marine aquaculture,marine,4142860.86025053,20794575.072,19.9227964308293
2007,inland aquaculture,inland,2347005.60715788,28871870.714,8.12903891960076
2008,marine capture,marine,22163224.3865746,79388882.426,27.9172898135119
2008,inland capture,inland,934776.346627446,10144837,9.21430621928618
2008,marine aquaculture,marine,4165907.61768463,21216472.311,19.6352511228964
2008,inland aquaculture,inland,2767308.48702161,31397987.995,8.8136491021727
2009,marine capture,marine,22845500.7746141,78724916.517,29.0194029861954
2009,inland capture,inland,897349.194327797,10306206,8.70688199253729
2009,marine aquaculture,marine,4316175.61789757,21923558.118,19.6873864847414
2009,inland aquaculture,inland,2168799.06947695,32896357.214,6.59282441325739
2010,marine capture,marine,26956443.8886678,76325562.6690001,35.3177139427972
2010,inland capture,inland,1226858.80205014,10862480,11.2944631617287
2010,marine aquaculture,marine,4856303.99055904,22369685.304,21.7093084885314
2010,inland aquaculture,inland,4455304.19410172,35018031.667,12.7228858448383
2011,marine capture,marine,27806097.1524412,81072202.559,34.2979421734662
2011,inland capture,inland,1201883.27521867,10498457.31,11.4481893837283
2011,marine aquaculture,marine,5318669.43768547,23269011.573,22.8573071142263
2011,inland aquaculture,inland,4585570.91603336,36148325.94,12.685430920493
2012,marine capture,marine,26860242.8310052,77763205.738,34.5410693606213
2012,inland capture,inland,1157315.60845522,10872304.764,10.6446207457988
2012,marine aquaculture,marine,5311694.07354329,24511969.394,21.6697972658349
2012,inland aquaculture,inland,4132844.04333596,38562339.008,10.7173064436744
2013,marine capture,marine,24566617.3044442,78787928.568,31.1806868779921
2013,inland capture,inland,1347883.48531575,10895051.311,12.371520306241
2013,marine aquaculture,marine,5438564.20042268,25314153.415,21.4842823746183
2013,inland aquaculture,inland,3049585.48004795,41170123.236,7.40727799760708
2014,marine capture,marine,25167544.8603041,79292230.5479998,31.7402407352747
2014,inland capture,inland,1350824.92494558,11017361.363,12.260875180895
2014,marine aquaculture,marine,5819315.4359775,26766785.36,21.7408080862554
2014,inland aquaculture,inland,3175049.01659348,43302279.909,7.33229063981357
2015,marine capture,marine,25436348.9945005,80431217.21,31.6249708469388
2015,inland capture,inland,1314473.54899219,11126080.977,11.8143446170263
2015,marine aquaculture,marine,6080727.08526132,27618585.913,22.0167937070201
2015,inland aquaculture,inland,3227075.07818365,44827499.531,7.19887370909904
2016,marine capture,marine,26161576.9701633,78193552.167,33.4574606794807
2016,inland capture,inland,1403862.7556371,11312072.595,12.4103053958266
2016,marine aquaculture,marine,6270496.71914761,29168268.607,21.4976651635839
2016,inland aquaculture,inland,3240689.16306964,46870210.814,6.91417663114427
2017,marine capture,marine,26947155.1017599,81476960.7149999,33.0733435136577
2017,inland capture,inland,1373840.76936376,11875336.643,11.5688574620205
2017,marine aquaculture,marine,6617980.74879303,30547730.311,21.6643943147879
2017,inland aquaculture,inland,3347478.56419449,48540390.877,6.89627442983906
2018,marine capture,marine,27605376.2094388,84509949.05,32.6652382586412
2018,inland capture,inland,1443895.76719508,11979228.689,12.0533283459305
2018,marine aquaculture,marine,6653265.67840444,31449029.907,21.1557103607941
2018,inland aquaculture,inland,3625026.24200865,50519992.211,7.17542913876251
2019,marine capture,marine,26066598.0801183,80098025.5259998,32.5433715861786
2019,inland capture,inland,1318354.85944078,12084760.872,10.9092341454217
2019,marine aquaculture,marine,7255394.56778781,32409713.514,22.386481647404
2019,inland aquaculture,inland,3319732.93661039,52301159.875,6.34734094720761
2020,marine capture,marine,25640165.8875267,78791393.381,32.5418358367421
2020,inland capture,inland,1055509.18132171,11463661.109,9.20743531482316
2020,marine aquaculture,marine,7314097.03705904,33652615.221,21.7341118633029
2020,inland aquaculture,inland,3299684.64967379,53311050.854,6.18949466726973
`, v = 1920, L = 1080, V = [
  { index: 0, kind: "panel-i", label: "Panel stacked area (a)" },
  { index: 1, kind: "panel-i-joint-encoding", label: "Stacked area mapped to Joint World" },
  { index: 2, kind: "lcm", label: "Combined Data · exports and production exported" },
  { index: 3, kind: "panel-j", label: "Panel line (b)" }
], O = [
  "marine capture",
  "inland capture",
  "marine aquaculture",
  "inland aquaculture",
  "unknown"
], D = {
  "marine capture": "#1B708F",
  "inland capture": "#86ADA7",
  "marine aquaculture": "#F37542",
  "inland aquaculture": "#F7AF75",
  unknown: "#7F7F7F"
}, X = An(Zn).map((n) => ({
  year: Number(n.year),
  source: n.habitat_method,
  value: Number(n.live_weight_t) / 1e6
})), Cn = An(Qn).map((n) => ({
  year: Number(n.year),
  source: n.habitat_method,
  value: Number(n.percent_export)
})), Mn = "http://www.w3.org/2000/svg", f = (n, a = {}) => {
  const e = document.createElementNS(Mn, n);
  for (const [t, r] of Object.entries(a)) e.setAttribute(t, String(r));
  return e;
}, _ = (n, a, e, t = {}) => f(n, { "data-scene-id": a, ...e ? { "data-parent-id": e } : {}, ...t }), A = (n, a, e, t, r = {}) => {
  const i = f("text", { x: a, y: e, "font-family": "Arial, Helvetica, sans-serif", ...r });
  return i.textContent = t, n.appendChild(i), i;
}, U = (n, a, e, t) => (r) => e + (r - n) / (a - n) * (t - e), J = (n, a) => n.filter((e) => e.source === a).sort((e, t) => e.year - t.year);
function ne() {
  const n = new R();
  n.name = "joint-world";
  const a = new R();
  a.name = "exports-area-plane";
  const e = new R();
  e.name = "production-line-plane", n.add(a, e), n.updateMatrixWorld(!0);
  const t = v / L, r = 14.2, i = new $n(
    -25.24444444444444 / 2,
    r * t / 2,
    r / 2,
    -r / 2,
    0.1,
    100
  ), c = new H(6, 2.65, 2.65);
  return i.position.set(16.8, 12, 17.4), i.up.set(0, 1, 0), i.lookAt(c), i.updateProjectionMatrix(), i.updateMatrixWorld(!0), { area: a, lines: e, project: (p, s, u, m) => {
    const o = p.localToWorld(new H(s, u, m)), y = o.clone().applyMatrix4(i.matrixWorldInverse), l = o.clone().project(i);
    return {
      x: (l.x * 0.5 + 0.5) * v,
      y: (-l.y * 0.5 + 0.5) * L + 18,
      depth: -y.z
    };
  } };
}
const Rn = (n) => n.map((a) => `${a.x.toFixed(2)},${a.y.toFixed(2)}`).join(" "), Z = (n, a = !1) => `${n.map((e, t) => `${t ? "L" : "M"}${e.x.toFixed(2)},${e.y.toFixed(2)}`).join("")}${a ? "Z" : ""}`;
function jn(n, a) {
  let e = Math.atan2(a.y - n.y, a.x - n.x) * 180 / Math.PI;
  return e > 90 && (e -= 180), e < -90 && (e += 180), e;
}
function ln(n) {
  const a = V[n], e = f("svg", {
    xmlns: Mn,
    width: v,
    height: L,
    viewBox: `0 0 ${v} ${L}`,
    role: "img",
    "aria-label": a.label,
    "data-keyframe-index": n,
    "data-keyframe-kind": a.kind
  }), t = _("g", "frame-viewport", null, { "data-coordinate-space": "viewport" });
  return t.appendChild(f("rect", { width: v, height: L, fill: "#fff" })), e.appendChild(t), e;
}
const Q = (n) => n.querySelector('[data-scene-id="frame-viewport"]');
function un(n, a) {
  const e = _("g", "source-color-legend", "frame-viewport", {
    "data-guide": "legend",
    transform: "translate(380 922)"
  });
  A(e, 0, 27, "Source", { "font-size": 25, fill: "#111" });
  const t = a ? O : O.slice(0, 4), r = [112, 340, 565, 830, 1098];
  t.forEach((i, c) => {
    e.appendChild(f("rect", {
      x: r[c],
      y: 0,
      width: 34,
      height: 34,
      fill: D[i],
      "data-guide": "legend-swatch",
      "data-key": i
    })), A(e, r[c] + 46, 27, i, { "font-size": 23, fill: "#222" });
  }), Q(n).appendChild(e);
}
function Sn(n, a, e, t, r, i, c) {
  n.appendChild(f("rect", { x: a, y: t, width: e - a, height: r - t, fill: "#fff" })), i.forEach((d) => n.appendChild(f("path", {
    d: `M${d},${t}V${r}`,
    stroke: "#dedede",
    "stroke-width": 2.2,
    fill: "none",
    "data-guide": "grid"
  }))), c.forEach((d) => n.appendChild(f("path", {
    d: `M${a},${d}H${e}`,
    stroke: "#dedede",
    "stroke-width": 2.2,
    fill: "none",
    "data-guide": "grid"
  })));
}
function Tn(n, a, e, t) {
  const r = _("g", "year-axis", a, { "data-guide": "year-axis" });
  [1995, 2e3, 2005, 2010, 2015, 2020].forEach((i) => {
    r.appendChild(f("path", { d: `M${e(i)},${t}v11`, stroke: "#303030", "stroke-width": 2.5 })), A(r, e(i), t + 43, String(i), { "font-size": 29, fill: "#444", "text-anchor": "middle" });
  }), n.appendChild(r);
}
function ee() {
  const n = ln(0), a = _("g", "exports-area-plane", "frame-viewport", {
    "data-panel": "global-exports",
    "data-scope": "a"
  }), e = 292, t = 1628, r = 388, i = 700, c = U(1994.774, 2021.226, e, t), d = U(-3.051874, 64.089351, i, r);
  Sn(a, e, t, r, i, [2e3, 2005, 2010, 2015, 2020].map(c), [0, 20, 40, 60].map(d));
  const p = [...new Set(X.map((o) => o.year))].sort((o, y) => o - y), s = new Map(p.map((o) => [o, 0])), u = _("g", "exports-area-series", "exports-area-plane", { "data-mark-group": "stacked-area" });
  for (const o of [...O].reverse()) {
    const y = new Map(J(X, o).map((k) => [k.year, k.value])), l = p.map((k) => {
      const M = s.get(k) ?? 0, g = M + (y.get(k) ?? 0);
      return s.set(k, g), { year: k, lower: M, upper: g };
    }), h = l.map((k) => ({ x: c(k.year), y: d(k.upper), depth: 0 })), q = l.slice().reverse().map((k) => ({ x: c(k.year), y: d(k.lower), depth: 0 }));
    u.appendChild(f("path", {
      d: Z([...h, ...q], !0),
      fill: D[o],
      "data-mark": "stacked-area",
      "data-key": o
    }));
  }
  a.appendChild(u);
  const m = _("g", "exports-guides", "exports-area-plane", { "data-guide": "exports-guides" });
  return m.appendChild(f("rect", { x: e, y: r, width: t - e, height: i - r, fill: "none", stroke: "#303030", "stroke-width": 2.6 })), [20, 40, 60].forEach((o) => {
    m.appendChild(f("path", { d: `M${e},${d(o)}h-11`, stroke: "#303030", "stroke-width": 2.5 })), A(m, e - 18, d(o) + 11, String(o), { "font-size": 30, fill: "#444", "text-anchor": "end" });
  }), A(m, 226, 365, "a", { "font-size": 50, "font-weight": 700, fill: "#000" }), A(m, 173, (r + i) / 2, "Exports (mil. t, live weight)", {
    "font-size": 31,
    fill: "#111",
    "text-anchor": "middle",
    transform: `rotate(-90 173 ${(r + i) / 2})`
  }), a.appendChild(m), Tn(a, "exports-area-plane", c, i), Q(n).appendChild(a), un(n, !0), n;
}
function ae(n, a, e) {
  const t = _("g", "year-axis", "joint-world", { "data-guide": "year-axis" }), r = e(a, 0, 0, 0), i = e(a, 12, 0, 0);
  t.appendChild(f("path", { d: `M${r.x},${r.y}L${i.x},${i.y}`, stroke: "#222", "stroke-width": 2.5, fill: "none" })), [1996, 2e3, 2005, 2010, 2015, 2020].forEach((c) => {
    const d = e(a, (c - 1996) / 24 * 12, 0, 0);
    t.appendChild(f("path", { d: `M${d.x},${d.y}l0,9`, stroke: "#222", "stroke-width": 2 })), A(t, d.x, d.y + 31, String(c), { "font-size": 21, fill: "#333", "text-anchor": "middle" });
  }), A(t, i.x + 22, i.y + 6, "Year", { "font-size": 24, fill: "#111" }), n.appendChild(t);
}
function te(n, a) {
  const { area: e, project: t } = a, r = _("g", "exports-area-plane", "joint-world", { "data-panel": "global-exports", "data-scope": "a" }), i = [[0, 0, 0], [12, 0, 0], [12, 0, 5.5], [0, 0, 5.5]].map(([l, h, q]) => t(e, l, h, q));
  r.appendChild(f("polygon", { points: Rn(i), fill: "#f7f8f8", stroke: "#8e989d", "stroke-width": 2.1, "data-layer": "under" }));
  for (const l of [1996, 2e3, 2005, 2010, 2015, 2020]) {
    const h = (l - 1996) / 24 * 12, q = t(e, h, 0, 0), k = t(e, h, 0, 5.5);
    r.appendChild(f("path", { d: `M${q.x},${q.y}L${k.x},${k.y}`, stroke: "#d9dddf", "stroke-width": 1.5, fill: "none", "data-layer": "under" }));
  }
  for (const l of [0, 20, 40, 60]) {
    const h = l / 65 * 5.5, q = t(e, 0, 0, h), k = t(e, 12, 0, h);
    r.appendChild(f("path", { d: `M${q.x},${q.y}L${k.x},${k.y}`, stroke: "#d9dddf", "stroke-width": 1.5, fill: "none", "data-layer": "under" }));
  }
  const c = [...new Set(X.map((l) => l.year))].sort((l, h) => l - h), d = new Map(c.map((l) => [l, 0])), p = _("g", "exports-area-series", "exports-area-plane", { "data-mark-group": "stacked-area" });
  for (const l of [...O].reverse()) {
    const h = new Map(J(X, l).map((g) => [g.year, g.value])), q = c.map((g) => {
      const F = d.get(g) ?? 0, P = F + (h.get(g) ?? 0);
      return d.set(g, P), { year: g, lower: F, upper: P };
    }), k = q.map((g) => t(e, (g.year - 1996) / 24 * 12, 0, g.upper / 65 * 5.5)), M = q.slice().reverse().map((g) => t(e, (g.year - 1996) / 24 * 12, 0, g.lower / 65 * 5.5));
    p.appendChild(f("path", {
      d: Z([...k, ...M], !0),
      fill: D[l],
      "fill-opacity": 0.9,
      stroke: "#fff",
      "stroke-opacity": 0.28,
      "stroke-width": 0.8,
      "data-mark": "stacked-area",
      "data-key": l
    }));
  }
  r.appendChild(p);
  const s = _("g", "exports-guides", "exports-area-plane", { "data-guide": "exports-guides" }), u = t(e, 0, 0, 0), m = t(e, 0, 0, 5.5);
  s.appendChild(f("path", { d: `M${u.x},${u.y}L${m.x},${m.y}`, stroke: "#333", "stroke-width": 2.3, fill: "none" })), [0, 20, 40, 60].forEach((l) => {
    const h = t(e, 0, 0, l / 65 * 5.5);
    A(s, h.x - 16, h.y + 6, String(l), { "font-size": 20, fill: "#333", "text-anchor": "end" });
  });
  const o = { x: (u.x + m.x) / 2 - 57, y: (u.y + m.y) / 2 }, y = jn(u, m);
  A(s, o.x, o.y, "Exports (mil. t, live weight)", {
    "font-size": 22,
    fill: "#111",
    "text-anchor": "middle",
    transform: `rotate(${y} ${o.x} ${o.y})`
  }), r.appendChild(s), n.appendChild(r);
}
function re(n, a) {
  const { lines: e, project: t } = a, r = _("g", "production-line-plane", "joint-world", { "data-panel": "production-exported", "data-scope": "b" }), i = [[0, 0, 0], [12, 0, 0], [12, 6.2, 0], [0, 6.2, 0]].map(([o, y, l]) => t(e, o, y, l));
  r.appendChild(f("polygon", { points: Rn(i), fill: "#fff", "fill-opacity": 0.92, stroke: "#7d888e", "stroke-width": 2.1, "data-layer": "under" }));
  for (const o of [1996, 2e3, 2005, 2010, 2015, 2020]) {
    const y = (o - 1996) / 24 * 12, l = t(e, y, 0, 0), h = t(e, y, 6.2, 0);
    r.appendChild(f("path", { d: `M${l.x},${l.y}L${h.x},${h.y}`, stroke: "#d9dddf", "stroke-width": 1.5, fill: "none", "data-layer": "under" }));
  }
  for (const o of [0, 10, 20, 30, 40]) {
    const y = o / 40 * 6.2, l = t(e, 0, y, 0), h = t(e, 12, y, 0);
    r.appendChild(f("path", { d: `M${l.x},${l.y}L${h.x},${h.y}`, stroke: "#d9dddf", "stroke-width": 1.5, fill: "none", "data-layer": "under" }));
  }
  const c = _("g", "production-line-series", "production-line-plane", { "data-mark-group": "series" });
  O.slice(0, 4).forEach((o) => {
    const y = J(Cn, o).map((l) => t(e, (l.year - 1996) / 24 * 12, l.value / 40 * 6.2, 0));
    c.appendChild(f("path", {
      d: Z(y),
      fill: "none",
      stroke: D[o],
      "stroke-width": 4.2,
      "stroke-linejoin": "round",
      "data-mark": "series",
      "data-key": o
    }));
  }), r.appendChild(c);
  const d = _("g", "production-guides", "production-line-plane", { "data-guide": "production-guides" }), p = t(e, 0, 0, 0), s = t(e, 0, 6.2, 0);
  d.appendChild(f("path", { d: `M${p.x},${p.y}L${s.x},${s.y}`, stroke: "#333", "stroke-width": 2.3, fill: "none" })), [10, 20, 30, 40].forEach((o) => {
    const y = t(e, 0, o / 40 * 6.2, 0);
    A(d, y.x - 14, y.y + 6, String(o), { "font-size": 20, fill: "#333", "text-anchor": "end" });
  });
  const u = { x: (p.x + s.x) / 2 - 55, y: (p.y + s.y) / 2 }, m = jn(p, s);
  A(d, u.x, u.y, "% Production exported", {
    "font-size": 22,
    fill: "#111",
    "text-anchor": "middle",
    transform: `rotate(${m} ${u.x} ${u.y})`
  }), r.appendChild(d), n.appendChild(r);
}
function kn(n) {
  const a = ln(n ? 2 : 1), e = _("g", "joint-world", "frame-viewport", { "data-coordinate-space": "world" }), t = ne();
  return te(e, t), n && re(e, t), ae(e, t.area, t.project), Q(a).appendChild(e), un(a, !0), a;
}
function ie() {
  const n = ln(3), a = _("g", "production-line-plane", "frame-viewport", {
    "data-panel": "production-exported",
    "data-scope": "b"
  }), e = 425, t = 1495, r = 292, i = 790, c = U(1994.8, 2021.2, e, t), d = U(1.088541, 36.947675, i, r);
  Sn(a, e, t, r, i, [2e3, 2005, 2010, 2015, 2020].map(c), [10, 20, 30].map(d));
  const p = _("g", "production-line-series", "production-line-plane", { "data-mark-group": "series" });
  O.slice(0, 4).forEach((u) => {
    const m = J(Cn, u).map((o) => ({ x: c(o.year), y: d(o.value), depth: 0 }));
    p.appendChild(f("path", {
      d: Z(m),
      fill: "none",
      stroke: D[u],
      "stroke-width": 4,
      "stroke-linejoin": "round",
      "data-mark": "series",
      "data-key": u
    }));
  }), a.appendChild(p);
  const s = _("g", "production-guides", "production-line-plane", { "data-guide": "production-guides" });
  return s.appendChild(f("rect", { x: e, y: r, width: t - e, height: i - r, fill: "none", stroke: "#303030", "stroke-width": 2.6 })), [10, 20, 30].forEach((u) => {
    s.appendChild(f("path", { d: `M${e},${d(u)}h-11`, stroke: "#303030", "stroke-width": 2.5 })), A(s, e - 18, d(u) + 11, String(u), { "font-size": 30, fill: "#444", "text-anchor": "end" });
  }), A(s, 349, 270, "b", { "font-size": 50, "font-weight": 700, fill: "#000" }), A(s, 308, (r + i) / 2, "% Production exported", {
    "font-size": 31,
    fill: "#111",
    "text-anchor": "middle",
    transform: `rotate(-90 308 ${(r + i) / 2})`
  }), a.appendChild(s), Tn(a, "production-line-plane", c, i), Q(n).appendChild(a), un(n, !1), n;
}
function oe(n) {
  const a = Math.max(0, Math.min(V.length - 1, Math.trunc(n)));
  return a === 0 ? ee() : a === 1 ? kn(!1) : a === 2 ? kn(!0) : ie();
}
function vn(n, a) {
  const e = oe(a);
  for (const t of [...n.attributes]) n.removeAttribute(t.name);
  for (const t of [...e.attributes]) n.setAttribute(t.name, t.value);
  n.replaceChildren(...e.childNodes);
}
const de = "http://www.w3.org/2000/svg", yn = 1920, wn = 1080, W = [0, 0.333333, 0.666667, 1], G = (n) => Math.max(0, Math.min(1, n)), ce = (n) => {
  const a = G(n);
  return a * a * (3 - 2 * a);
}, le = (n) => {
  const a = G(n);
  return a * a * a * (a * (a * 6 - 15) + 10);
}, b = (n, a, e) => ce((n - a) / (e - a)), z = (n, a, e) => n + (a - n) * e, nn = (n, a, e, t) => (r) => e + (r - n) / (a - n) * (t - e);
function gn(n) {
  const [a, e, t, r] = n;
  return new En().set(a[0], a[1], a[2], a[3], e[0], e[1], e[2], e[3], t[0], t[1], t[2], t[3], r[0], r[1], r[2], r[3]);
}
function C(n, a, e) {
  const [t, r, i] = n, c = a === "area" ? 5.5 : 6.2, d = [(r[0] - t[0]) / 12, (r[1] - t[1]) / 12, (e[1] - e[0]) / 12], p = [(i[0] - t[0]) / c, (i[1] - t[1]) / c, (e[2] - e[0]) / c];
  return gn(a === "area" ? [[d[0], 0, p[0], t[0]], [d[1], 0, p[1], t[1]], [d[2], 1, p[2], e[0]], [0, 0, 0, 1]] : [[d[0], p[0], 0, t[0]], [d[1], p[1], 0, t[1]], [d[2], p[2], 1, e[0]], [0, 0, 0, 1]]);
}
const tn = nn(1994.774, 2021.226, 292, 1628), rn = nn(-3.051874, 64.089351, 700, 388), on = nn(1994.8, 2021.2, 425, 1495), dn = nn(1.088541, 36.947675, 790, 292), Ln = [[tn(1996), rn(0)], [tn(2020), rn(0)], [tn(1996), rn(65)]], E = [[710.8778429515482, 540.6337326575336], [1447.260972503586, 786.1521066786037], [463.7526571018813, 694.3195204079911]], j = [[710.8778429515482, 540.6337326575336], [1447.260972503586, 786.1521066786037], [710.8778429515482, 120.80827444681942]], Nn = [[on(1996), dn(0)], [on(2020), dn(0)], [on(1996), dn(40)]], In = C(Ln, "area", [0, 0, 0]), en = C(E, "area", [-26.799608, -20.487974, -22.848749]), ue = [[480, 650], [1450, 900], [320, 250]], _n = C(ue, "area", [-13.4, -10.2, -11.4]), se = [
  E[0],
  E[1],
  [605.4271759139049, 269.3952109482691]
], qn = C(se, "area", [-26.799608, -20.487974, -22.848749]), sn = C(j, "production", [-26.799608, -20.487974, -23.976418]), On = C(Nn, "production", [0, 0, 0]), pn = C([j[0], j[1], [j[0][0], j[0][1] - 0.01]], "production", [-26.799608, -20.487974, -26.799508]), Fn = C([E[0], E[1], [E[0][0] - 4, E[0][1] + 2]], "area", [-26.799608, -20.487974, -26.699608]);
class pe {
  constructor() {
    T(this, "root", new R());
    T(this, "world", new R());
    T(this, "area", new R());
    T(this, "production", new R());
    T(this, "camera", new $n(0, yn, 0, wn, -1e4, 1e4));
    this.root.name = "gephart-scene-root", this.world.name = "joint-world", this.area.name = "exports-area-plane", this.production.name = "production-line-plane", this.root.add(this.world), this.world.add(this.area, this.production), this.world.matrixAutoUpdate = !1, this.area.matrixAutoUpdate = !1, this.production.matrixAutoUpdate = !1, this.camera.name = "joint-camera", this.camera.position.set(0, 0, 1e3), this.camera.lookAt(0, 0, 0), this.camera.updateProjectionMatrix(), this.camera.updateMatrixWorld(!0);
  }
  pose(a, e) {
    this.area.matrix.copy(a), this.production.matrix.copy(e), this.root.updateMatrixWorld(!0);
  }
  project(a, e) {
    const t = new H(...e).applyMatrix4(a.matrixWorld).project(this.camera);
    return [(t.x + 1) * yn / 2, (1 - t.y) * wn / 2];
  }
}
const x = new pe();
function N(n, a, e) {
  const t = new En();
  for (let r = 0; r < 16; r += 1) t.elements[r] = z(n.elements[r], a.elements[r], e);
  return t;
}
function me(n) {
  return n <= 0.5 ? N(In, _n, b(n, 0, 0.5)) : n <= 0.88 ? N(_n, qn, b(n, 0.5, 0.88)) : N(qn, en, le((n - 0.88) / 0.12));
}
function B(n, a) {
  return a === "area" ? [x.project(n, [0, 0, 0]), x.project(n, [12, 0, 0]), x.project(n, [0, 0, 5.5])] : [x.project(n, [0, 0, 0]), x.project(n, [12, 0, 0]), x.project(n, [0, 6.2, 0])];
}
function Y(n, a) {
  const [e, t, r] = n, [i, c, d] = a, p = t[0] - e[0], s = t[1] - e[1], u = r[0] - e[0], m = r[1] - e[1], o = p * m - s * u;
  if (Math.abs(o) < 1e-10) return { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  const y = m / o, l = -u / o, h = -s / o, q = p / o, k = c[0] - i[0], M = c[1] - i[1], g = d[0] - i[0], F = d[1] - i[1], P = k * y + g * h, fn = k * l + g * q, hn = M * y + F * h, xn = M * l + F * q;
  return { a: P, b: hn, c: fn, d: xn, e: i[0] - P * e[0] - fn * e[1], f: i[1] - hn * e[0] - xn * e[1] };
}
const K = (n) => `matrix(${n.a} ${n.b} ${n.c} ${n.d} ${n.e} ${n.f})`;
let cn = null;
function Pn() {
  return cn || (cn = V.map((n, a) => {
    const e = document.createElementNS(de, "svg");
    return vn(e, a), e;
  })), cn;
}
function an(n, a) {
  const e = Pn()[a];
  for (const t of Array.from(n.attributes)) n.removeAttribute(t.name);
  for (const t of Array.from(e.attributes)) n.setAttribute(t.name, t.value);
  n.replaceChildren(...Array.from(e.childNodes).map((t) => t.cloneNode(!0)));
}
function w(n, a) {
  return n.querySelector(`[data-scene-id="${a}"]`);
}
function $(n, a) {
  n && n.setAttribute("opacity", String(G(a)));
}
function I(n, a) {
  n && (a ? n.setAttribute("transform", a) : n.removeAttribute("transform"));
}
function S(n, a) {
  var t;
  if (!n) return;
  n.setAttribute("data-three-object", a.name), n.setAttribute("data-parent-three-object", ((t = a.parent) == null ? void 0 : t.name) ?? ""), n.setAttribute("data-camera-id", x.camera.name), n.setAttribute("data-matrix-world", a.matrixWorld.elements.map((r) => Number(r.toFixed(6))).join(","));
  const e = new H().setFromMatrixPosition(a.matrixWorld).applyMatrix4(x.camera.matrixWorldInverse);
  n.setAttribute("data-camera-depth", String(Number(e.z.toFixed(6))));
}
function bn(n, a, e) {
  n.setAttribute("data-transition-id", "stacked-area-a-to-line-b"), n.setAttribute("data-transition-pair", "stacked area (a) → line (b)"), n.setAttribute("data-animation-progress", String(e)), n.setAttribute("data-snapshot-segment", String(a)), n.setAttribute("data-scene-authority", "three-object3d-camera"), n.setAttribute("data-endpoint-source", "stage-8-immutable-svg-template"), n.setAttribute("data-record-support", "125 exports + 100 production-export = 225 tagged rows");
  const t = w(n, "joint-world") ?? w(n, "frame-viewport");
  t == null || t.setAttribute("data-three-object", x.world.name), t == null || t.setAttribute("data-camera-id", x.camera.name), t == null || t.setAttribute("data-parent-matrix-chain", "gephart-scene-root/joint-world/{exports-area-plane|production-line-plane}"), t == null || t.setAttribute("data-projection-mode", "matrixWorld+orthographic-camera-per-frame");
}
function mn(n, a) {
  return Array.from((n == null ? void 0 : n.children) ?? []).filter((e) => e.getAttribute("data-scene-id") !== a && e.getAttribute("data-scene-id") !== "exports-guides" && e.getAttribute("data-scene-id") !== "production-guides" && e.getAttribute("data-scene-id") !== "year-axis");
}
function fe(n, a, e) {
  const t = w(n, "exports-area-plane"), r = e ? z(0.18, 1, b(a, 0.5, 0.82)) : z(1, 0.18, b(a, 0.18, 0.5));
  for (const i of mn(t, "exports-area-series")) $(i, r);
  $(w(n, "exports-guides"), r), $(w(n, "year-axis"), Math.max(0.18, r));
}
function he(n) {
  const a = w(n, "frame-viewport"), e = w(n, "production-line-plane"), t = w(Pn()[2], "exports-area-plane");
  if (!a || !t) throw new Error("gephart K2 exports-area-plane is unavailable");
  a.insertBefore(t.cloneNode(!0), e ?? a.firstChild);
}
function xe(n, a) {
  var r;
  const e = w(n, "source-color-legend"), t = e == null ? void 0 : e.querySelector('[data-guide="legend-swatch"][data-key="unknown"]');
  $(t ?? null, a), ((r = t == null ? void 0 : t.nextElementSibling) == null ? void 0 : r.tagName.toLowerCase()) === "text" && $(t.nextElementSibling, a);
}
function ke(n, a) {
  const e = a >= 0.5;
  an(n, e ? 1 : 0);
  const t = me(a);
  x.pose(t, pn);
  const i = K(Y(e ? E : Ln, B(x.area, "area"))), c = w(n, "exports-area-plane");
  I(c, i), S(c, x.area);
  const d = w(n, "year-axis");
  e && I(d, i), S(d, x.area), fe(n, a, e);
}
function ye(n, a) {
  var s;
  an(n, 2);
  const e = b(a, 0.12, 0.68), t = N(pn, sn, e);
  x.pose(en, t);
  const r = w(n, "production-line-plane"), i = K(Y(j, B(x.production, "production")));
  I(r, i), $(r, b(a, 0.1, 0.54)), S(r, x.production), S(w(n, "exports-area-plane"), x.area);
  const c = b(a, 0.12, 0.5);
  for (const u of mn(r, "production-line-series")) $(u, c);
  $(w(n, "production-guides"), b(a, 0.22, 0.62));
  const d = b(a, 0.32, 0.82);
  Array.from(((s = w(n, "production-line-series")) == null ? void 0 : s.querySelectorAll('[data-mark="series"]')) ?? []).forEach((u, m) => {
    const o = G(d * 1.28 - m * 0.09);
    u.setAttribute("pathLength", "1"), u.setAttribute("stroke-dasharray", "1"), u.setAttribute("stroke-dashoffset", String(1 - o)), $(u, o);
  });
}
function we(n, a, e) {
  const t = w(n, "production-line-plane"), r = e ? z(0.18, 1, b(a, 0.5, 0.84)) : z(1, 0.18, b(a, 0.18, 0.5));
  for (const i of mn(t, "production-line-series")) $(i, r);
  $(w(n, "production-guides"), r), $(w(n, "year-axis"), Math.max(0.18, r));
}
function ge(n, a) {
  const e = a >= 0.5;
  an(n, e ? 3 : 2), e && he(n);
  const t = b(a, 0.18, 0.84), r = b(a, 0.14, 0.6), i = N(sn, On, t), c = N(en, Fn, r);
  x.pose(c, i);
  const d = w(n, "production-line-plane"), s = K(Y(e ? Nn : j, B(x.production, "production")));
  I(d, s), S(d, x.production);
  const u = w(n, "year-axis");
  e || I(u, s), S(u, x.production), we(n, a, e);
  const m = w(n, "exports-area-plane");
  if (m) {
    const o = K(Y(E, B(x.area, "area")));
    I(m, o), $(m, 1 - b(a, 0.14, 0.48)), S(m, x.area);
  }
  xe(n, 1 - b(a, 0.2, 0.48));
}
function _e(n) {
  for (let a = 0; a < W.length - 1; a += 1) {
    const e = W[a], t = W[a + 1];
    if (n < t) return { index: a, local: (n - e) / (t - e) };
  }
  return { index: W.length - 2, local: 1 };
}
function qe(n, a) {
  const e = G(Number.isFinite(a) ? a : 0), t = W.findIndex((i) => Math.abs(i - e) < 1e-10);
  if (t >= 0) {
    x.pose(
      t === 0 ? In : t < 3 ? en : Fn,
      t < 2 ? pn : t === 2 ? sn : On
    ), an(n, t), bn(n, Math.min(t, 2), e);
    return;
  }
  const r = _e(e);
  r.index === 0 ? ke(n, r.local) : r.index === 1 ? ye(n, r.local) : ge(n, r.local), bn(n, r.index, e);
}
const Me = Dn(
  Jn,
  {
    frame: Object.freeze({ width: v, height: L }),
    keyframes: V,
    renderKeyframe: vn,
    renderAnimation: qe
  }
);
export {
  L as KEYFRAME_HEIGHT,
  W as KEYFRAME_PROGRESS,
  v as KEYFRAME_WIDTH,
  V as keyframeMetadata,
  qe as renderAnimation,
  vn as renderKeyframe,
  Me as stackedAreaAToLineBTransitionSpace
};
