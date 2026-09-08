import { d as Yo } from "./transition-space-Df4GnxL9.js";
import { r as Fo, c as Io } from "./svg-snapshot-transition-CHoy-cD5.js";
import { c as zo, w as xo, e as s } from "./svg-DSCeB79j.js";
import { p as G, n as b } from "./csv-Ha6vz5IV.js";
const Xo = "figure2story-transition-space/v1", Oo = "popularity-histogram-to-bubble-scatter", jo = "net07-fig1", Bo = {
  transition_id: "net07-fig1 · bar (b) → scatter plot (d)",
  panel_i: "bar (b)",
  panel_j: "scatter plot (d)"
}, Ho = {
  entry: "index.ts",
  keyframes: "keyframes.ts",
  animation: "animation.ts",
  audit: "audit.ts"
}, Ko = {
  width: 1920,
  height: 1080
}, Do = [
  {
    index: 0,
    kind: "panel-i",
    label: "Panel bar (b) · popularity histogram",
    progress: 0
  },
  {
    index: 1,
    kind: "lcm",
    label: "LCM · 483 participant dots with both margins",
    progress: 0.5
  },
  {
    index: 2,
    kind: "panel-j",
    label: "Panel scatter plot (d) · popularity bubble scatter",
    progress: 1
  }
], Uo = {
  worlds: [],
  cameras: [],
  viewports: [
    {
      id: "popularity-viewport",
      keyframe_indices: [
        0,
        1,
        2
      ]
    }
  ],
  planes: [
    {
      id: "source-histogram-plane",
      panel: "bar (b)",
      keyframe_indices: [
        0
      ],
      result_refs: [
        "bar.popularity-observed",
        "bar.popularity-perceived"
      ],
      position_fields: [
        "popularity bin",
        "frequency"
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
      id: "joint-participant-plane",
      panel: "scatter plot (d)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "bar.popularity-observed",
        "bar.popularity-perceived",
        "scatter plot.popularity-bubbles"
      ],
      position_fields: [
        "observed",
        "perceived",
        "participant key"
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
      id: "target-scatter-plane",
      panel: "scatter plot (d)",
      keyframe_indices: [
        2
      ],
      result_refs: [
        "scatter plot.popularity-bubbles",
        "scatter plot.popularity-fit"
      ],
      position_fields: [
        "observed",
        "perceived",
        "count"
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
      id: "participant-records",
      role: "the exact 483 popularity.csv participant keys",
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
            id: "source-histogram-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "joint-participant-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-scatter-plane"
          }
        }
      ]
    },
    {
      id: "aggregate-summaries",
      role: "histogram bars, LCM margins, and target bubbles computed from the same records",
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
            id: "source-histogram-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "joint-participant-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-scatter-plane"
          }
        }
      ]
    },
    {
      id: "encoding-guides",
      role: "axes, legends, labels and identity guide",
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
            id: "source-histogram-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "joint-participant-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-scatter-plane"
          }
        }
      ]
    },
    {
      id: "frame-backdrop",
      role: "single white 1920x1080 viewport",
      keyframe_indices: [
        0,
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            0,
            1,
            2
          ],
          host: {
            kind: "viewport",
            id: "popularity-viewport"
          }
        }
      ]
    }
  ]
}, Go = {
  schema_version: Xo,
  id: Oo,
  figure_id: jo,
  pair: Bo,
  modules: Ho,
  frame: Ko,
  keyframes: Do,
  scene: Uo
}, Wo = `key,source_row,public_id,class,participant,indegree,outdegree,x,y,fill,provenance
person-0001,1,1,12,1,2,4,2895.456,1531.571,#d285d4,official-values+digitized-topology-matched-layout
person-0002,2,2,12,1,1,2,3101.336,1484.040,#d285d4,official-values+digitized-topology-matched-layout
person-0003,3,3,12,1,4,1,3102.684,1389.968,#d285d4,official-values+digitized-topology-matched-layout
person-0004,4,4,12,1,5,3,3064.710,1437.005,#d285d4,official-values+digitized-topology-matched-layout
person-0005,5,5,12,1,6,5,2807.368,1437.324,#d285d4,official-values+digitized-topology-matched-layout
person-0006,6,6,12,1,5,5,2804.055,1489.060,#d285d4,official-values+digitized-topology-matched-layout
person-0007,7,7,12,1,1,1,2974.754,1371.797,#d285d4,official-values+digitized-topology-matched-layout
person-0009,9,9,12,1,4,5,2956.394,1633.259,#d285d4,official-values+digitized-topology-matched-layout
person-0010,10,10,12,1,0,5,3201.331,1339.808,#d285d4,official-values+digitized-topology-matched-layout
person-0011,11,11,12,1,2,1,2921.269,1765.970,#d285d4,official-values+digitized-topology-matched-layout
person-0012,12,12,12,1,1,5,3026.142,1821.286,#d285d4,official-values+digitized-topology-matched-layout
person-0013,13,13,12,1,2,4,3195.502,1931.749,#d285d4,official-values+digitized-topology-matched-layout
person-0014,14,14,12,1,3,3,3073.780,1794.974,#d285d4,official-values+digitized-topology-matched-layout
person-0015,15,15,12,1,2,5,3053.915,1618.363,#d285d4,official-values+digitized-topology-matched-layout
person-0016,16,16,12,1,2,1,2921.271,1729.361,#d285d4,official-values+digitized-topology-matched-layout
person-0017,17,17,12,1,2,5,2912.345,1315.422,#d285d4,official-values+digitized-topology-matched-layout
person-0018,18,18,12,1,2,1,3099.434,1922.509,#d285d4,official-values+digitized-topology-matched-layout
person-0019,19,19,12,1,6,3,3111.625,1589.314,#d285d4,official-values+digitized-topology-matched-layout
person-0020,20,20,12,1,6,5,2846.828,1465.940,#d285d4,official-values+digitized-topology-matched-layout
person-0021,21,21,12,1,2,1,3023.655,1277.606,#d285d4,official-values+digitized-topology-matched-layout
person-0022,22,22,12,1,4,5,2981.935,1561.758,#d285d4,official-values+digitized-topology-matched-layout
person-0023,23,23,12,1,6,5,3183.197,1639.492,#d285d4,official-values+digitized-topology-matched-layout
person-0024,24,24,12,1,4,3,3140.856,1901.487,#d285d4,official-values+digitized-topology-matched-layout
person-0025,25,25,12,1,2,1,3202.957,1715.802,#d285d4,official-values+digitized-topology-matched-layout
person-0026,26,26,12,1,8,5,3143.753,1554.244,#d285d4,official-values+digitized-topology-matched-layout
person-0027,27,27,12,1,3,4,3285.287,1609.085,#d285d4,official-values+digitized-topology-matched-layout
person-0028,28,28,12,1,8,4,2924.429,1397.416,#d285d4,official-values+digitized-topology-matched-layout
person-0029,29,29,12,1,0,5,3288.397,1670.217,#d285d4,official-values+digitized-topology-matched-layout
person-0030,30,30,12,1,1,3,3156.660,1293.876,#d285d4,official-values+digitized-topology-matched-layout
person-0031,31,31,12,1,2,5,2848.170,1271.131,#d285d4,official-values+digitized-topology-matched-layout
person-0032,32,32,12,1,0,2,3203.088,1487.578,#d285d4,official-values+digitized-topology-matched-layout
person-0033,33,33,12,1,1,5,3120.907,1353.202,#d285d4,official-values+digitized-topology-matched-layout
person-0034,34,34,12,1,1,1,2910.794,1583.189,#d285d4,official-values+digitized-topology-matched-layout
person-0035,35,35,12,1,2,5,2958.193,1700.585,#d285d4,official-values+digitized-topology-matched-layout
person-0036,36,36,12,1,1,2,2983.878,1412.988,#d285d4,official-values+digitized-topology-matched-layout
person-0037,37,37,12,1,6,5,2952.974,1767.473,#d285d4,official-values+digitized-topology-matched-layout
person-0039,39,39,12,1,1,2,3073.471,1313.960,#d285d4,official-values+digitized-topology-matched-layout
person-0040,40,40,12,1,0,5,3101.372,1251.496,#d285d4,official-values+digitized-topology-matched-layout
person-0041,41,41,12,1,2,4,2984.556,1705.915,#d285d4,official-values+digitized-topology-matched-layout
person-0042,42,42,12,1,3,5,3187.784,1682.244,#d285d4,official-values+digitized-topology-matched-layout
person-0043,43,43,12,1,3,3,2890.948,1342.990,#d285d4,official-values+digitized-topology-matched-layout
person-0044,44,44,12,1,3,5,3110.360,1657.533,#d285d4,official-values+digitized-topology-matched-layout
person-0045,45,45,12,1,5,5,2924.215,1698.916,#d285d4,official-values+digitized-topology-matched-layout
person-0046,46,46,12,1,3,1,3341.875,1603.284,#d285d4,official-values+digitized-topology-matched-layout
person-0047,47,47,12,1,4,5,2840.691,1406.509,#d285d4,official-values+digitized-topology-matched-layout
person-0048,48,48,12,1,0,5,2866.684,1511.623,#d285d4,official-values+digitized-topology-matched-layout
person-0049,49,49,12,1,4,0,2995.819,1463.073,#d285d4,official-values+digitized-topology-matched-layout
person-0050,50,50,12,1,1,3,3279.231,1732.519,#d285d4,official-values+digitized-topology-matched-layout
person-0051,51,51,12,1,0,2,3136.187,1170.729,#d285d4,official-values+digitized-topology-matched-layout
person-0052,52,52,12,1,1,5,2945.752,1450.432,#d285d4,official-values+digitized-topology-matched-layout
person-0053,53,53,12,1,2,1,2884.882,1735.422,#d285d4,official-values+digitized-topology-matched-layout
person-0054,54,54,12,1,3,0,3149.846,1592.391,#d285d4,official-values+digitized-topology-matched-layout
person-0055,55,55,12,1,4,4,3114.908,1854.169,#d285d4,official-values+digitized-topology-matched-layout
person-0056,56,56,12,1,5,1,3064.597,1946.902,#d285d4,official-values+digitized-topology-matched-layout
person-0057,57,57,12,1,4,4,3356.967,1502.617,#d285d4,official-values+digitized-topology-matched-layout
person-0058,58,58,12,1,0,5,3093.422,1761.210,#d285d4,official-values+digitized-topology-matched-layout
person-0059,59,59,12,1,2,5,3096.640,1822.220,#d285d4,official-values+digitized-topology-matched-layout
person-0060,60,60,12,1,1,4,2927.219,1475.945,#d285d4,official-values+digitized-topology-matched-layout
person-0061,61,61,12,1,1,5,3143.573,1998.758,#d285d4,official-values+digitized-topology-matched-layout
person-0062,62,62,12,1,5,1,2991.646,1525.639,#d285d4,official-values+digitized-topology-matched-layout
person-0063,63,63,12,1,3,5,2883.376,1475.214,#d285d4,official-values+digitized-topology-matched-layout
person-0064,64,64,12,1,4,5,3313.026,1631.959,#d285d4,official-values+digitized-topology-matched-layout
person-0065,65,65,12,1,7,5,3078.927,1665.434,#d285d4,official-values+digitized-topology-matched-layout
person-0066,66,66,12,1,3,4,3317.411,1365.700,#d285d4,official-values+digitized-topology-matched-layout
person-0067,67,67,12,1,3,3,3107.158,1721.751,#d285d4,official-values+digitized-topology-matched-layout
person-0068,68,68,12,1,3,3,3240.069,1491.872,#d285d4,official-values+digitized-topology-matched-layout
person-0069,69,69,12,1,3,1,3230.492,1422.306,#d285d4,official-values+digitized-topology-matched-layout
person-0070,70,70,12,1,5,0,3034.173,1324.600,#d285d4,official-values+digitized-topology-matched-layout
person-0071,71,71,12,1,4,2,3332.692,1558.801,#d285d4,official-values+digitized-topology-matched-layout
person-0072,72,72,12,1,6,5,3256.350,1552.407,#d285d4,official-values+digitized-topology-matched-layout
person-0073,73,73,12,1,8,3,3155.871,1720.315,#d285d4,official-values+digitized-topology-matched-layout
person-0074,74,74,12,1,4,2,3014.168,1586.588,#d285d4,official-values+digitized-topology-matched-layout
person-0075,75,75,12,1,6,2,2851.240,1374.572,#d285d4,official-values+digitized-topology-matched-layout
person-0076,76,76,12,1,6,5,2746.498,1432.710,#d285d4,official-values+digitized-topology-matched-layout
person-0077,77,77,12,1,2,5,2840.771,1348.884,#d285d4,official-values+digitized-topology-matched-layout
person-0078,78,87,1,1,5,5,1010.502,1662.588,#dc6890,official-values+digitized-topology-matched-layout
person-0079,79,88,1,1,1,4,934.797,1396.074,#dc6890,official-values+digitized-topology-matched-layout
person-0080,80,89,1,1,8,5,1041.364,1726.295,#dc6890,official-values+digitized-topology-matched-layout
person-0082,82,91,1,1,2,3,1042.869,1682.127,#dc6890,official-values+digitized-topology-matched-layout
person-0083,83,92,1,1,1,5,954.469,1689.783,#dc6890,official-values+digitized-topology-matched-layout
person-0084,84,93,1,1,1,3,1115.889,1895.340,#dc6890,official-values+digitized-topology-matched-layout
person-0085,85,94,1,1,1,3,1105.414,1994.287,#dc6890,official-values+digitized-topology-matched-layout
person-0086,86,95,1,1,3,3,994.095,1870.911,#dc6890,official-values+digitized-topology-matched-layout
person-0087,87,96,1,1,5,3,1061.500,1871.431,#dc6890,official-values+digitized-topology-matched-layout
person-0088,88,97,1,1,5,5,994.100,1682.075,#dc6890,official-values+digitized-topology-matched-layout
person-0089,89,98,1,1,1,5,947.259,1428.230,#dc6890,official-values+digitized-topology-matched-layout
person-0090,90,99,1,1,6,5,1045.756,1896.787,#dc6890,official-values+digitized-topology-matched-layout
person-0091,91,100,1,1,2,1,940.763,1560.410,#dc6890,official-values+digitized-topology-matched-layout
person-0093,93,102,1,1,2,3,1091.408,1768.961,#dc6890,official-values+digitized-topology-matched-layout
person-0094,94,103,1,1,4,5,1018.598,1909.568,#dc6890,official-values+digitized-topology-matched-layout
person-0095,95,104,1,1,1,1,899.624,1507.153,#dc6890,official-values+digitized-topology-matched-layout
person-0096,96,105,1,1,2,5,1048.956,1779.408,#dc6890,official-values+digitized-topology-matched-layout
person-0097,97,106,1,1,4,3,989.369,1805.467,#dc6890,official-values+digitized-topology-matched-layout
person-0098,98,107,1,1,4,5,1011.066,1742.897,#dc6890,official-values+digitized-topology-matched-layout
person-0099,99,108,1,1,5,5,1075.942,1939.278,#dc6890,official-values+digitized-topology-matched-layout
person-0100,100,109,6,1,5,5,2647.287,1065.872,#d1d7a9,official-values+digitized-topology-matched-layout
person-0101,101,110,6,1,1,4,2714.784,612.529,#d1d7a9,official-values+digitized-topology-matched-layout
person-0102,102,111,6,1,2,5,2947.416,827.105,#d1d7a9,official-values+digitized-topology-matched-layout
person-0103,103,112,6,1,6,5,2848.490,805.527,#d1d7a9,official-values+digitized-topology-matched-layout
person-0104,104,113,6,1,4,5,2577.712,1123.660,#d1d7a9,official-values+digitized-topology-matched-layout
person-0105,105,114,6,1,3,4,2446.351,1024.949,#d1d7a9,official-values+digitized-topology-matched-layout
person-0106,106,115,6,1,4,4,2451.023,963.538,#d1d7a9,official-values+digitized-topology-matched-layout
person-0107,107,116,6,1,4,5,2787.212,1018.644,#d1d7a9,official-values+digitized-topology-matched-layout
person-0108,108,117,6,1,0,4,2971.881,793.594,#d1d7a9,official-values+digitized-topology-matched-layout
person-0109,109,118,6,1,3,4,3052.502,790.080,#d1d7a9,official-values+digitized-topology-matched-layout
person-0110,110,119,6,1,6,3,2714.223,837.698,#d1d7a9,official-values+digitized-topology-matched-layout
person-0111,111,120,6,1,5,4,2557.927,671.478,#d1d7a9,official-values+digitized-topology-matched-layout
person-0112,112,121,6,1,3,5,2682.274,937.946,#d1d7a9,official-values+digitized-topology-matched-layout
person-0113,113,122,6,1,4,5,2782.784,685.014,#d1d7a9,official-values+digitized-topology-matched-layout
person-0114,114,123,6,1,7,5,2673.207,846.652,#d1d7a9,official-values+digitized-topology-matched-layout
person-0115,115,124,1,1,4,2,1102.119,1802.326,#dc6890,official-values+digitized-topology-matched-layout
person-0116,116,125,3,1,0,4,1341.670,1777.796,#b848e0,official-values+digitized-topology-matched-layout
person-0117,117,126,3,1,4,5,1820.550,1657.490,#b848e0,official-values+digitized-topology-matched-layout
person-0118,118,127,3,1,4,5,1522.122,1881.656,#b848e0,official-values+digitized-topology-matched-layout
person-0119,119,128,3,1,2,2,1650.130,1873.899,#b848e0,official-values+digitized-topology-matched-layout
person-0120,120,129,3,1,3,3,1254.248,1884.788,#b848e0,official-values+digitized-topology-matched-layout
person-0121,121,130,3,1,2,4,1301.522,1908.821,#b848e0,official-values+digitized-topology-matched-layout
person-0122,122,131,3,1,5,2,1313.594,1604.254,#b848e0,official-values+digitized-topology-matched-layout
person-0123,123,132,3,1,4,5,1448.905,1671.574,#b848e0,official-values+digitized-topology-matched-layout
person-0124,124,133,3,1,2,3,1877.156,1616.735,#b848e0,official-values+digitized-topology-matched-layout
person-0125,125,134,3,1,4,4,1805.752,1715.775,#b848e0,official-values+digitized-topology-matched-layout
person-0126,126,135,3,1,4,3,1712.841,1645.639,#b848e0,official-values+digitized-topology-matched-layout
person-0127,127,136,3,1,3,4,1672.936,1688.233,#b848e0,official-values+digitized-topology-matched-layout
person-0128,128,137,3,1,0,5,1546.890,1931.994,#b848e0,official-values+digitized-topology-matched-layout
person-0129,129,138,3,1,3,2,1262.355,1927.084,#b848e0,official-values+digitized-topology-matched-layout
person-0130,130,139,3,1,2,5,1679.201,1759.659,#b848e0,official-values+digitized-topology-matched-layout
person-0131,131,140,3,1,3,3,1881.943,1649.846,#b848e0,official-values+digitized-topology-matched-layout
person-0132,132,141,3,1,5,3,1731.063,1725.051,#b848e0,official-values+digitized-topology-matched-layout
person-0133,133,142,3,1,6,5,1452.312,1925.765,#b848e0,official-values+digitized-topology-matched-layout
person-0134,134,143,3,1,1,4,1472.197,1642.703,#b848e0,official-values+digitized-topology-matched-layout
person-0135,135,144,3,1,2,0,1491.607,1931.593,#b848e0,official-values+digitized-topology-matched-layout
person-0136,136,145,3,1,0,1,1167.272,1610.730,#b848e0,official-values+digitized-topology-matched-layout
person-0137,137,146,3,1,4,5,1446.096,1868.380,#b848e0,official-values+digitized-topology-matched-layout
person-0138,138,147,3,1,4,4,1621.454,1940.890,#b848e0,official-values+digitized-topology-matched-layout
person-0139,139,148,3,1,4,5,1470.722,1823.960,#b848e0,official-values+digitized-topology-matched-layout
person-0140,140,149,3,1,3,4,1689.747,1609.205,#b848e0,official-values+digitized-topology-matched-layout
person-0141,141,150,3,1,4,5,1582.117,1937.600,#b848e0,official-values+digitized-topology-matched-layout
person-0142,142,151,3,1,4,5,1633.813,1676.497,#b848e0,official-values+digitized-topology-matched-layout
person-0143,143,152,3,1,3,3,1228.194,1919.627,#b848e0,official-values+digitized-topology-matched-layout
person-0144,144,153,3,1,2,5,1604.056,1760.948,#b848e0,official-values+digitized-topology-matched-layout
person-0145,145,154,3,1,5,3,1773.766,1738.489,#b848e0,official-values+digitized-topology-matched-layout
person-0146,146,155,3,1,1,5,1528.375,1962.024,#b848e0,official-values+digitized-topology-matched-layout
person-0147,147,156,3,1,5,5,1470.564,1893.697,#b848e0,official-values+digitized-topology-matched-layout
person-0148,148,157,3,1,4,1,1659.589,1635.224,#b848e0,official-values+digitized-topology-matched-layout
person-0149,149,158,3,1,2,2,1371.678,1603.397,#b848e0,official-values+digitized-topology-matched-layout
person-0150,150,159,3,1,7,3,1566.820,1680.778,#b848e0,official-values+digitized-topology-matched-layout
person-0151,151,160,3,1,5,5,1839.112,1683.504,#b848e0,official-values+digitized-topology-matched-layout
person-0152,152,161,3,1,3,1,1399.044,1881.319,#b848e0,official-values+digitized-topology-matched-layout
person-0153,153,162,3,1,4,3,1516.443,1641.390,#b848e0,official-values+digitized-topology-matched-layout
person-0154,154,163,3,1,3,5,1375.895,1636.655,#b848e0,official-values+digitized-topology-matched-layout
person-0155,155,164,3,1,4,2,1438.906,1624.335,#b848e0,official-values+digitized-topology-matched-layout
person-0156,156,165,10,1,0,1,2562.421,2136.957,#d8d858,official-values+digitized-topology-matched-layout
person-0157,157,166,10,1,2,2,2333.761,1659.416,#d8d858,official-values+digitized-topology-matched-layout
person-0158,158,167,10,1,6,5,2271.352,1750.689,#d8d858,official-values+digitized-topology-matched-layout
person-0159,159,168,10,1,1,5,2213.595,1828.165,#d8d858,official-values+digitized-topology-matched-layout
person-0160,160,169,10,1,1,5,2183.099,1864.664,#d8d858,official-values+digitized-topology-matched-layout
person-0161,161,170,10,1,0,2,2084.368,1749.143,#d8d858,official-values+digitized-topology-matched-layout
person-0162,162,171,10,1,7,4,2373.447,1736.870,#d8d858,official-values+digitized-topology-matched-layout
person-0164,164,173,10,1,1,5,2467.668,1827.733,#d8d858,official-values+digitized-topology-matched-layout
person-0165,165,174,10,1,2,4,2315.740,1922.633,#d8d858,official-values+digitized-topology-matched-layout
person-0166,166,175,10,1,5,1,2503.973,1735.096,#d8d858,official-values+digitized-topology-matched-layout
person-0167,167,176,10,1,3,5,2236.052,1799.511,#d8d858,official-values+digitized-topology-matched-layout
person-0168,168,177,10,1,1,5,2311.090,1733.629,#d8d858,official-values+digitized-topology-matched-layout
person-0169,169,178,10,1,5,5,2243.793,1858.337,#d8d858,official-values+digitized-topology-matched-layout
person-0171,171,180,10,1,1,2,2644.638,2010.621,#d8d858,official-values+digitized-topology-matched-layout
person-0172,172,181,10,1,2,0,2124.998,1770.452,#d8d858,official-values+digitized-topology-matched-layout
person-0173,173,182,10,1,6,4,2417.798,1852.924,#d8d858,official-values+digitized-topology-matched-layout
person-0174,174,183,10,1,1,4,2172.486,1644.166,#d8d858,official-values+digitized-topology-matched-layout
person-0175,175,184,10,1,0,3,2195.235,1619.319,#d8d858,official-values+digitized-topology-matched-layout
person-0176,176,185,10,1,2,3,2032.324,1904.107,#d8d858,official-values+digitized-topology-matched-layout
person-0177,177,186,10,1,2,5,2444.886,1756.557,#d8d858,official-values+digitized-topology-matched-layout
person-0178,178,187,10,1,5,5,2210.214,1756.658,#d8d858,official-values+digitized-topology-matched-layout
person-0179,179,188,10,1,3,5,2644.583,1939.315,#d8d858,official-values+digitized-topology-matched-layout
person-0180,180,189,10,1,2,5,2551.237,1803.427,#d8d858,official-values+digitized-topology-matched-layout
person-0181,181,190,10,1,3,2,2394.699,1654.682,#d8d858,official-values+digitized-topology-matched-layout
person-0182,182,191,10,1,3,2,2119.006,1874.253,#d8d858,official-values+digitized-topology-matched-layout
person-0183,183,192,10,1,4,5,2208.690,1929.939,#d8d858,official-values+digitized-topology-matched-layout
person-0184,184,193,10,1,0,1,2665.699,1898.410,#d8d858,official-values+digitized-topology-matched-layout
person-0185,185,194,10,1,1,5,2370.328,1682.303,#d8d858,official-values+digitized-topology-matched-layout
person-0186,186,195,10,1,1,1,2621.603,1867.859,#d8d858,official-values+digitized-topology-matched-layout
person-0187,187,196,10,1,5,5,2421.958,1791.642,#d8d858,official-values+digitized-topology-matched-layout
person-0188,188,197,10,1,3,3,2387.272,1607.665,#d8d858,official-values+digitized-topology-matched-layout
person-0189,189,198,10,1,2,2,2379.389,1551.303,#d8d858,official-values+digitized-topology-matched-layout
person-0190,190,199,10,1,0,5,2560.969,1868.948,#d8d858,official-values+digitized-topology-matched-layout
person-0191,191,200,10,1,2,0,2239.412,1564.767,#d8d858,official-values+digitized-topology-matched-layout
person-0192,192,201,10,1,3,5,2543.860,1895.122,#d8d858,official-values+digitized-topology-matched-layout
person-0193,193,202,10,1,8,5,2338.613,1810.158,#d8d858,official-values+digitized-topology-matched-layout
person-0194,194,203,10,1,0,2,2582.156,2079.523,#d8d858,official-values+digitized-topology-matched-layout
person-0195,195,204,10,1,3,5,2479.895,1799.465,#d8d858,official-values+digitized-topology-matched-layout
person-0196,196,205,10,1,1,1,2502.587,1641.110,#d8d858,official-values+digitized-topology-matched-layout
person-0197,197,206,10,1,6,3,2247.093,1919.469,#d8d858,official-values+digitized-topology-matched-layout
person-0198,198,207,10,1,0,3,2444.868,1659.234,#d8d858,official-values+digitized-topology-matched-layout
person-0199,199,208,10,1,3,3,2090.524,1898.256,#d8d858,official-values+digitized-topology-matched-layout
person-0200,200,209,6,1,0,5,2874.390,764.246,#d1d7a9,official-values+digitized-topology-matched-layout
person-0201,201,210,6,1,8,5,2621.649,866.811,#d1d7a9,official-values+digitized-topology-matched-layout
person-0202,202,211,6,1,3,5,2757.188,604.567,#d1d7a9,official-values+digitized-topology-matched-layout
person-0203,203,212,6,1,3,5,2853.215,653.363,#d1d7a9,official-values+digitized-topology-matched-layout
person-0204,204,213,6,1,3,2,2706.329,639.597,#d1d7a9,official-values+digitized-topology-matched-layout
person-0205,205,214,6,1,5,5,2746.986,677.652,#d1d7a9,official-values+digitized-topology-matched-layout
person-0206,206,215,6,1,8,1,2469.179,846.609,#d1d7a9,official-values+digitized-topology-matched-layout
person-0207,207,216,6,1,4,5,2912.290,784.011,#d1d7a9,official-values+digitized-topology-matched-layout
person-0208,208,217,6,1,6,5,2906.151,632.011,#d1d7a9,official-values+digitized-topology-matched-layout
person-0209,209,218,6,1,6,4,2578.889,963.537,#d1d7a9,official-values+digitized-topology-matched-layout
person-0210,210,219,6,1,5,3,2809.918,619.936,#d1d7a9,official-values+digitized-topology-matched-layout
person-0211,211,220,6,1,5,4,2947.122,685.065,#d1d7a9,official-values+digitized-topology-matched-layout
person-0212,212,221,6,1,5,2,2930.580,864.777,#d1d7a9,official-values+digitized-topology-matched-layout
person-0213,213,222,6,1,5,5,2729.730,970.472,#d1d7a9,official-values+digitized-topology-matched-layout
person-0214,214,223,6,1,1,3,2714.427,670.728,#d1d7a9,official-values+digitized-topology-matched-layout
person-0215,215,224,6,1,5,5,2539.260,1101.984,#d1d7a9,official-values+digitized-topology-matched-layout
person-0216,216,225,6,1,3,4,2458.547,890.618,#d1d7a9,official-values+digitized-topology-matched-layout
person-0217,217,226,6,1,5,5,2600.159,1245.115,#d1d7a9,official-values+digitized-topology-matched-layout
person-0218,218,227,6,1,3,3,2936.505,916.582,#d1d7a9,official-values+digitized-topology-matched-layout
person-0219,219,228,6,1,3,2,2424.866,1044.067,#d1d7a9,official-values+digitized-topology-matched-layout
person-0220,220,229,6,1,3,3,3090.386,840.764,#d1d7a9,official-values+digitized-topology-matched-layout
person-0221,221,230,6,1,8,3,2870.833,826.317,#d1d7a9,official-values+digitized-topology-matched-layout
person-0222,222,231,6,1,4,0,3134.621,805.324,#d1d7a9,official-values+digitized-topology-matched-layout
person-0223,223,232,6,1,4,5,2667.504,1169.249,#d1d7a9,official-values+digitized-topology-matched-layout
person-0224,224,233,6,1,3,3,2635.233,711.072,#d1d7a9,official-values+digitized-topology-matched-layout
person-0225,225,234,6,1,6,5,2872.802,933.593,#d1d7a9,official-values+digitized-topology-matched-layout
person-0226,226,235,6,1,5,2,2419.278,1008.921,#d1d7a9,official-values+digitized-topology-matched-layout
person-0227,227,236,6,1,0,3,2585.101,705.097,#d1d7a9,official-values+digitized-topology-matched-layout
person-0228,228,237,6,1,3,5,2528.571,904.419,#d1d7a9,official-values+digitized-topology-matched-layout
person-0229,229,238,6,1,2,5,2492.023,925.825,#d1d7a9,official-values+digitized-topology-matched-layout
person-0230,230,239,6,1,1,5,2714.206,902.726,#d1d7a9,official-values+digitized-topology-matched-layout
person-0231,231,240,6,1,4,5,2720.766,801.872,#d1d7a9,official-values+digitized-topology-matched-layout
person-0232,232,241,6,1,4,4,2501.044,706.409,#d1d7a9,official-values+digitized-topology-matched-layout
person-0233,233,242,6,1,4,4,2532.691,656.677,#d1d7a9,official-values+digitized-topology-matched-layout
person-0234,234,243,6,1,1,1,2746.662,738.597,#d1d7a9,official-values+digitized-topology-matched-layout
person-0235,235,244,6,1,3,5,2901.514,903.047,#d1d7a9,official-values+digitized-topology-matched-layout
person-0236,236,245,6,1,3,5,2974.687,902.893,#d1d7a9,official-values+digitized-topology-matched-layout
person-0237,237,246,6,1,2,5,2950.643,768.644,#d1d7a9,official-values+digitized-topology-matched-layout
person-0238,238,247,6,1,5,5,2908.739,845.167,#d1d7a9,official-values+digitized-topology-matched-layout
person-0239,239,248,6,1,4,3,2413.542,939.214,#d1d7a9,official-values+digitized-topology-matched-layout
person-0240,240,249,6,1,3,5,2487.722,1008.007,#d1d7a9,official-values+digitized-topology-matched-layout
person-0241,241,250,6,1,8,5,2559.380,1053.327,#d1d7a9,official-values+digitized-topology-matched-layout
person-0242,242,251,6,1,1,1,2686.305,868.779,#d1d7a9,official-values+digitized-topology-matched-layout
person-0243,243,252,6,1,6,5,2723.390,939.782,#d1d7a9,official-values+digitized-topology-matched-layout
person-0244,244,253,6,1,6,5,2651.980,882.907,#d1d7a9,official-values+digitized-topology-matched-layout
person-0245,245,254,6,1,3,5,2429.279,834.504,#d1d7a9,official-values+digitized-topology-matched-layout
person-0246,246,255,6,1,4,3,2653.654,811.572,#d1d7a9,official-values+digitized-topology-matched-layout
person-0247,247,256,6,1,0,3,2603.288,1151.009,#d1d7a9,official-values+digitized-topology-matched-layout
person-0248,248,257,6,1,5,5,2534.688,715.912,#d1d7a9,official-values+digitized-topology-matched-layout
person-0249,249,258,6,1,2,1,2396.424,1035.733,#d1d7a9,official-values+digitized-topology-matched-layout
person-0250,250,259,6,1,6,4,2604.486,1033.987,#d1d7a9,official-values+digitized-topology-matched-layout
person-0251,251,260,6,1,2,5,2432.505,1080.878,#d1d7a9,official-values+digitized-topology-matched-layout
person-0252,252,261,6,1,3,3,2992.911,998.974,#d1d7a9,official-values+digitized-topology-matched-layout
person-0253,253,262,6,1,5,5,2848.560,975.911,#d1d7a9,official-values+digitized-topology-matched-layout
person-0254,254,263,6,1,2,4,2934.282,638.371,#d1d7a9,official-values+digitized-topology-matched-layout
person-0255,255,264,6,1,0,5,2393.251,957.747,#d1d7a9,official-values+digitized-topology-matched-layout
person-0256,256,265,6,1,6,4,2839.384,866.163,#d1d7a9,official-values+digitized-topology-matched-layout
person-0257,257,266,6,1,5,5,2895.275,1015.572,#d1d7a9,official-values+digitized-topology-matched-layout
person-0258,258,267,6,1,2,3,3133.442,773.525,#d1d7a9,official-values+digitized-topology-matched-layout
person-0259,259,268,6,1,4,1,2644.450,927.284,#d1d7a9,official-values+digitized-topology-matched-layout
person-0260,260,269,6,1,2,5,2899.431,746.912,#d1d7a9,official-values+digitized-topology-matched-layout
person-0261,261,270,6,1,10,5,2784.243,743.233,#d1d7a9,official-values+digitized-topology-matched-layout
person-0262,262,271,6,1,5,5,2653.569,986.455,#d1d7a9,official-values+digitized-topology-matched-layout
person-0263,263,272,6,1,9,4,2718.974,776.550,#d1d7a9,official-values+digitized-topology-matched-layout
person-0264,264,273,2,1,2,5,2228.632,150.888,#dc8858,official-values+digitized-topology-matched-layout
person-0265,265,274,2,1,5,1,2248.633,93.283,#dc8858,official-values+digitized-topology-matched-layout
person-0266,266,275,2,1,2,3,2263.529,134.232,#dc8858,official-values+digitized-topology-matched-layout
person-0267,267,276,2,1,2,4,2336.723,72.088,#dc8858,official-values+digitized-topology-matched-layout
person-0268,268,277,2,1,4,1,2197.048,172.677,#dc8858,official-values+digitized-topology-matched-layout
person-0269,269,278,2,1,3,5,2464.756,149.938,#dc8858,official-values+digitized-topology-matched-layout
person-0270,270,279,2,1,2,3,2339.775,250.089,#dc8858,official-values+digitized-topology-matched-layout
person-0271,271,280,2,1,7,5,2291.935,135.921,#dc8858,official-values+digitized-topology-matched-layout
person-0272,272,281,2,1,4,5,2382.489,133.036,#dc8858,official-values+digitized-topology-matched-layout
person-0273,273,282,2,1,3,4,2310.974,230.200,#dc8858,official-values+digitized-topology-matched-layout
person-0274,274,283,2,1,4,1,2196.913,114.982,#dc8858,official-values+digitized-topology-matched-layout
person-0275,275,284,2,1,3,3,2368.403,172.505,#dc8858,official-values+digitized-topology-matched-layout
person-0276,276,285,2,1,3,2,2172.546,90.480,#dc8858,official-values+digitized-topology-matched-layout
person-0277,277,286,2,1,0,3,2428.196,253.051,#dc8858,official-values+digitized-topology-matched-layout
person-0278,278,287,2,1,0,5,2225.042,110.564,#dc8858,official-values+digitized-topology-matched-layout
person-0279,279,288,2,1,5,1,2412.841,103.864,#dc8858,official-values+digitized-topology-matched-layout
person-0280,280,289,2,1,1,2,2207.174,208.862,#dc8858,official-values+digitized-topology-matched-layout
person-0281,281,290,2,1,5,5,2243.986,53.931,#dc8858,official-values+digitized-topology-matched-layout
person-0282,282,291,2,1,6,1,2422.023,216.699,#dc8858,official-values+digitized-topology-matched-layout
person-0283,283,292,2,1,1,3,2244.044,254.558,#dc8858,official-values+digitized-topology-matched-layout
person-0284,284,293,2,1,0,1,2648.730,198.442,#dc8858,official-values+digitized-topology-matched-layout
person-0285,285,294,2,1,0,5,2322.665,134.321,#dc8858,official-values+digitized-topology-matched-layout
person-0286,286,295,2,1,3,5,2428.139,170.946,#dc8858,official-values+digitized-topology-matched-layout
person-0287,287,296,2,1,7,5,2382.835,215.117,#dc8858,official-values+digitized-topology-matched-layout
person-0288,288,297,2,1,3,1,2501.006,120.686,#dc8858,official-values+digitized-topology-matched-layout
person-0289,289,298,2,1,1,3,2487.585,207.161,#dc8858,official-values+digitized-topology-matched-layout
person-0290,290,299,2,1,6,4,2350.869,196.550,#dc8858,official-values+digitized-topology-matched-layout
person-0291,291,300,4,1,2,5,1350.393,1144.641,#7ce06c,official-values+digitized-topology-matched-layout
person-0292,292,301,4,1,0,2,1540.625,1330.785,#7ce06c,official-values+digitized-topology-matched-layout
person-0293,293,302,4,1,0,1,1615.811,1167.621,#7ce06c,official-values+digitized-topology-matched-layout
person-0294,294,303,4,1,1,1,1816.216,1193.539,#7ce06c,official-values+digitized-topology-matched-layout
person-0295,295,304,4,1,3,4,1498.157,1163.091,#7ce06c,official-values+digitized-topology-matched-layout
person-0297,297,306,4,1,7,5,1325.876,974.362,#7ce06c,official-values+digitized-topology-matched-layout
person-0298,298,307,4,1,1,2,1190.440,1146.548,#7ce06c,official-values+digitized-topology-matched-layout
person-0299,299,308,4,1,5,3,1470.701,1209.057,#7ce06c,official-values+digitized-topology-matched-layout
person-0300,300,309,4,1,3,3,1272.070,1082.593,#7ce06c,official-values+digitized-topology-matched-layout
person-0301,301,310,4,1,4,5,1293.984,1422.288,#7ce06c,official-values+digitized-topology-matched-layout
person-0302,302,311,4,1,0,3,1118.725,1021.675,#7ce06c,official-values+digitized-topology-matched-layout
person-0303,303,312,4,1,3,3,1485.956,956.141,#7ce06c,official-values+digitized-topology-matched-layout
person-0304,304,313,4,1,4,4,1521.188,1128.239,#7ce06c,official-values+digitized-topology-matched-layout
person-0305,305,314,4,1,3,3,1339.670,1175.399,#7ce06c,official-values+digitized-topology-matched-layout
person-0306,306,315,4,1,5,5,1551.198,1292.657,#7ce06c,official-values+digitized-topology-matched-layout
person-0307,307,316,4,1,4,3,1304.923,1052.232,#7ce06c,official-values+digitized-topology-matched-layout
person-0308,308,317,4,1,7,3,1388.121,1065.726,#7ce06c,official-values+digitized-topology-matched-layout
person-0309,309,318,4,1,0,5,1508.387,1208.940,#7ce06c,official-values+digitized-topology-matched-layout
person-0310,310,319,4,1,0,5,1484.949,1121.974,#7ce06c,official-values+digitized-topology-matched-layout
person-0311,311,320,4,1,6,3,1425.070,959.358,#7ce06c,official-values+digitized-topology-matched-layout
person-0313,313,322,4,1,4,5,1455.229,1131.153,#7ce06c,official-values+digitized-topology-matched-layout
person-0314,314,323,4,1,9,4,1359.709,1117.383,#7ce06c,official-values+digitized-topology-matched-layout
person-0315,315,324,4,1,4,5,1479.598,1033.896,#7ce06c,official-values+digitized-topology-matched-layout
person-0316,316,325,4,1,4,5,1344.061,1344.277,#7ce06c,official-values+digitized-topology-matched-layout
person-0317,317,326,4,1,0,5,1114.121,1260.453,#7ce06c,official-values+digitized-topology-matched-layout
person-0318,318,327,4,1,0,5,1293.998,1152.564,#7ce06c,official-values+digitized-topology-matched-layout
person-0319,319,328,4,1,4,5,1376.306,1192.077,#7ce06c,official-values+digitized-topology-matched-layout
person-0320,320,329,4,1,6,5,1533.715,1270.489,#7ce06c,official-values+digitized-topology-matched-layout
person-0321,321,330,4,1,0,5,1346.152,1276.792,#7ce06c,official-values+digitized-topology-matched-layout
person-0322,322,331,4,1,5,5,1423.240,1213.421,#7ce06c,official-values+digitized-topology-matched-layout
person-0323,323,332,4,1,2,5,1434.297,1350.330,#7ce06c,official-values+digitized-topology-matched-layout
person-0324,324,333,4,1,2,4,1516.350,1014.238,#7ce06c,official-values+digitized-topology-matched-layout
person-0325,325,334,4,1,6,4,1615.399,1269.805,#7ce06c,official-values+digitized-topology-matched-layout
person-0326,326,335,4,1,1,2,1331.640,1015.086,#7ce06c,official-values+digitized-topology-matched-layout
person-0327,327,336,4,1,2,5,1598.492,1071.665,#7ce06c,official-values+digitized-topology-matched-layout
person-0328,328,337,4,1,4,3,1371.700,1001.990,#7ce06c,official-values+digitized-topology-matched-layout
person-0329,329,338,4,1,0,5,1659.251,1182.723,#7ce06c,official-values+digitized-topology-matched-layout
person-0330,330,339,4,1,0,5,1427.975,1100.679,#7ce06c,official-values+digitized-topology-matched-layout
person-0331,331,340,4,1,0,4,1301.772,1020.435,#7ce06c,official-values+digitized-topology-matched-layout
person-0332,332,341,4,1,0,4,1251.400,1263.626,#7ce06c,official-values+digitized-topology-matched-layout
person-0333,333,342,4,1,0,5,1539.117,1195.213,#7ce06c,official-values+digitized-topology-matched-layout
person-0334,334,343,4,1,4,5,1318.464,1234.655,#7ce06c,official-values+digitized-topology-matched-layout
person-0335,335,344,4,1,0,5,1577.428,1312.250,#7ce06c,official-values+digitized-topology-matched-layout
person-0336,336,345,4,1,2,5,1577.198,1234.723,#7ce06c,official-values+digitized-topology-matched-layout
person-0337,337,346,5,1,1,5,1456.793,2169.376,#74b8cc,official-values+digitized-topology-matched-layout
person-0338,338,347,5,1,3,3,1535.945,2246.641,#74b8cc,official-values+digitized-topology-matched-layout
person-0339,339,348,5,1,3,5,1465.880,2321.256,#74b8cc,official-values+digitized-topology-matched-layout
person-0340,340,349,5,1,4,4,1630.183,2220.661,#74b8cc,official-values+digitized-topology-matched-layout
person-0342,342,351,5,1,5,2,1418.968,2192.032,#74b8cc,official-values+digitized-topology-matched-layout
person-0343,343,352,5,1,2,5,1477.390,2349.065,#74b8cc,official-values+digitized-topology-matched-layout
person-0344,344,353,5,1,5,1,1679.219,2334.976,#74b8cc,official-values+digitized-topology-matched-layout
person-0345,345,354,5,1,3,5,1647.018,2285.014,#74b8cc,official-values+digitized-topology-matched-layout
person-0346,346,355,5,1,2,5,1516.399,2333.518,#74b8cc,official-values+digitized-topology-matched-layout
person-0347,347,356,5,1,3,3,1365.354,2147.977,#74b8cc,official-values+digitized-topology-matched-layout
person-0348,348,357,5,1,2,4,1685.355,2295.576,#74b8cc,official-values+digitized-topology-matched-layout
person-0349,349,358,5,1,3,5,1718.784,2318.387,#74b8cc,official-values+digitized-topology-matched-layout
person-0350,350,359,5,1,1,1,1708.161,2159.909,#74b8cc,official-values+digitized-topology-matched-layout
person-0351,351,360,5,1,2,4,1365.336,2185.797,#74b8cc,official-values+digitized-topology-matched-layout
person-0352,352,361,5,1,3,5,1516.156,2298.405,#74b8cc,official-values+digitized-topology-matched-layout
person-0353,353,362,5,1,3,1,1709.705,2222.214,#74b8cc,official-values+digitized-topology-matched-layout
person-0354,354,363,5,1,4,1,1396.047,2144.849,#74b8cc,official-values+digitized-topology-matched-layout
person-0355,355,364,5,1,1,4,1590.839,2251.326,#74b8cc,official-values+digitized-topology-matched-layout
person-0356,356,365,5,1,2,5,1640.983,2252.398,#74b8cc,official-values+digitized-topology-matched-layout
person-0357,357,366,5,1,2,5,1624.317,2309.078,#74b8cc,official-values+digitized-topology-matched-layout
person-0358,358,367,7,1,1,3,2224.043,2536.258,#7888dc,official-values+digitized-topology-matched-layout
person-0359,359,368,7,1,1,2,2632.390,2269.706,#7888dc,official-values+digitized-topology-matched-layout
person-0360,360,369,71,1,3,2,1857.166,896.889,#84e0c8,official-values+digitized-topology-matched-layout
person-0361,361,370,7,1,2,0,2282.019,2526.787,#7888dc,official-values+digitized-topology-matched-layout
person-0362,362,371,7,1,4,3,2297.293,2258.933,#7888dc,official-values+digitized-topology-matched-layout
person-0363,363,372,71,1,3,4,1781.299,819.284,#84e0c8,official-values+digitized-topology-matched-layout
person-0364,364,373,7,1,2,0,2252.065,2524.749,#7888dc,official-values+digitized-topology-matched-layout
person-0365,365,374,7,1,0,5,1998.845,2303.089,#7888dc,official-values+digitized-topology-matched-layout
person-0366,366,375,71,1,2,1,1983.523,904.639,#84e0c8,official-values+digitized-topology-matched-layout
person-0367,367,376,7,1,3,4,2320.095,2292.485,#7888dc,official-values+digitized-topology-matched-layout
person-0368,368,377,7,1,4,4,2216.484,2236.165,#7888dc,official-values+digitized-topology-matched-layout
person-0369,369,378,71,1,2,5,1837.212,849.694,#84e0c8,official-values+digitized-topology-matched-layout
person-0370,370,379,7,1,7,0,2412.698,2247.935,#7888dc,official-values+digitized-topology-matched-layout
person-0371,371,380,7,1,3,5,2065.963,2418.777,#7888dc,official-values+digitized-topology-matched-layout
person-0372,372,381,71,1,3,5,1956.232,750.728,#84e0c8,official-values+digitized-topology-matched-layout
person-0373,373,382,7,1,6,5,2061.249,2308.970,#7888dc,official-values+digitized-topology-matched-layout
person-0374,374,383,7,1,2,4,2125.079,2343.987,#7888dc,official-values+digitized-topology-matched-layout
person-0375,375,384,71,1,1,4,1639.373,645.761,#84e0c8,official-values+digitized-topology-matched-layout
person-0376,376,385,7,1,3,1,2409.700,2302.907,#7888dc,official-values+digitized-topology-matched-layout
person-0377,377,386,7,1,3,5,2307.660,2488.902,#7888dc,official-values+digitized-topology-matched-layout
person-0378,378,387,7,1,1,1,1857.574,2412.885,#7888dc,official-values+digitized-topology-matched-layout
person-0379,379,388,7,1,3,3,2444.874,2424.653,#7888dc,official-values+digitized-topology-matched-layout
person-0380,380,389,7,1,5,5,2160.225,2416.867,#7888dc,official-values+digitized-topology-matched-layout
person-0381,381,390,7,1,4,5,2145.159,2196.614,#7888dc,official-values+digitized-topology-matched-layout
person-0382,382,391,7,1,0,3,1923.984,2299.954,#7888dc,official-values+digitized-topology-matched-layout
person-0383,383,392,7,1,4,5,2137.379,2286.513,#7888dc,official-values+digitized-topology-matched-layout
person-0384,384,393,7,1,0,3,2671.802,2350.257,#7888dc,official-values+digitized-topology-matched-layout
person-0385,385,394,7,1,3,2,2049.124,2363.979,#7888dc,official-values+digitized-topology-matched-layout
person-0386,386,395,71,1,3,3,1505.065,730.035,#84e0c8,official-values+digitized-topology-matched-layout
person-0387,387,396,71,1,3,5,1541.958,799.117,#84e0c8,official-values+digitized-topology-matched-layout
person-0388,388,397,71,1,1,5,2015.811,797.644,#84e0c8,official-values+digitized-topology-matched-layout
person-0389,389,398,71,1,3,3,2050.482,747.864,#84e0c8,official-values+digitized-topology-matched-layout
person-0390,390,399,71,1,3,3,1533.097,724.850,#84e0c8,official-values+digitized-topology-matched-layout
person-0391,391,400,7,1,1,4,2556.060,2262.085,#7888dc,official-values+digitized-topology-matched-layout
person-0392,392,401,7,1,7,2,2083.601,2214.799,#7888dc,official-values+digitized-topology-matched-layout
person-0393,393,402,7,1,3,1,1900.085,2362.555,#7888dc,official-values+digitized-topology-matched-layout
person-0394,394,403,7,1,2,3,2329.132,2377.600,#7888dc,official-values+digitized-topology-matched-layout
person-0395,395,404,7,1,4,5,2100.971,2161.444,#7888dc,official-values+digitized-topology-matched-layout
person-0396,396,405,7,1,3,4,2424.896,2397.519,#7888dc,official-values+digitized-topology-matched-layout
person-0397,397,406,7,1,7,5,2255.993,2494.814,#7888dc,official-values+digitized-topology-matched-layout
person-0398,398,407,7,1,3,2,2099.447,2447.682,#7888dc,official-values+digitized-topology-matched-layout
person-0399,399,408,7,1,1,1,2057.929,2263.340,#7888dc,official-values+digitized-topology-matched-layout
person-0400,400,409,71,1,2,3,1450.567,711.186,#84e0c8,official-values+digitized-topology-matched-layout
person-0401,401,410,71,1,2,5,2055.189,785.120,#84e0c8,official-values+digitized-topology-matched-layout
person-0402,402,411,71,1,1,3,1571.074,829.800,#84e0c8,official-values+digitized-topology-matched-layout
person-0403,403,412,71,1,3,1,1970.222,789.968,#84e0c8,official-values+digitized-topology-matched-layout
person-0404,404,413,71,1,2,5,1840.172,743.511,#84e0c8,official-values+digitized-topology-matched-layout
person-0405,405,414,71,1,3,1,2056.482,873.955,#84e0c8,official-values+digitized-topology-matched-layout
person-0406,406,415,71,1,2,1,1392.896,765.433,#84e0c8,official-values+digitized-topology-matched-layout
person-0407,407,416,7,1,6,5,2090.205,2271.053,#7888dc,official-values+digitized-topology-matched-layout
person-0408,408,417,7,1,1,3,2379.464,2269.827,#7888dc,official-values+digitized-topology-matched-layout
person-0409,409,418,7,1,2,4,2072.009,2473.561,#7888dc,official-values+digitized-topology-matched-layout
person-0410,410,419,7,1,4,4,2390.305,2421.584,#7888dc,official-values+digitized-topology-matched-layout
person-0411,411,420,7,1,5,4,2207.460,2487.331,#7888dc,official-values+digitized-topology-matched-layout
person-0412,412,421,7,1,5,5,2193.628,2158.567,#7888dc,official-values+digitized-topology-matched-layout
person-0413,413,422,7,1,1,3,2517.941,2234.432,#7888dc,official-values+digitized-topology-matched-layout
person-0414,414,423,71,1,6,4,1713.016,729.645,#84e0c8,official-values+digitized-topology-matched-layout
person-0415,415,424,71,1,4,3,1872.492,788.735,#84e0c8,official-values+digitized-topology-matched-layout
person-0416,416,425,71,1,1,5,1601.713,662.551,#84e0c8,official-values+digitized-topology-matched-layout
person-0417,417,426,71,1,2,2,1669.892,692.894,#84e0c8,official-values+digitized-topology-matched-layout
person-0418,418,427,71,1,3,1,2067.470,715.883,#84e0c8,official-values+digitized-topology-matched-layout
person-0419,419,428,71,1,3,5,1918.171,831.724,#84e0c8,official-values+digitized-topology-matched-layout
person-0420,420,429,7,1,4,4,2077.773,2240.500,#7888dc,official-values+digitized-topology-matched-layout
person-0421,421,430,71,1,2,1,1383.702,796.506,#84e0c8,official-values+digitized-topology-matched-layout
person-0422,422,431,7,1,2,1,2250.125,2374.721,#7888dc,official-values+digitized-topology-matched-layout
person-0423,423,432,7,1,1,4,2347.954,2268.079,#7888dc,official-values+digitized-topology-matched-layout
person-0424,424,433,7,1,4,3,2126.797,2471.708,#7888dc,official-values+digitized-topology-matched-layout
person-0425,425,434,7,1,4,0,2528.891,2398.800,#7888dc,official-values+digitized-topology-matched-layout
person-0426,426,435,7,1,1,2,2333.648,2222.220,#7888dc,official-values+digitized-topology-matched-layout
person-0427,427,436,7,1,3,5,2024.723,2135.518,#7888dc,official-values+digitized-topology-matched-layout
person-0428,428,437,7,1,1,5,2217.914,2292.582,#7888dc,official-values+digitized-topology-matched-layout
person-0429,429,438,7,1,5,2,2269.747,2312.098,#7888dc,official-values+digitized-topology-matched-layout
person-0430,430,439,71,1,2,2,1656.323,727.820,#84e0c8,official-values+digitized-topology-matched-layout
person-0431,431,440,71,1,3,5,1686.775,823.910,#84e0c8,official-values+digitized-topology-matched-layout
person-0432,432,441,71,1,4,1,1744.530,851.281,#84e0c8,official-values+digitized-topology-matched-layout
person-0433,433,442,71,1,2,5,1673.009,778.119,#84e0c8,official-values+digitized-topology-matched-layout
person-0434,434,443,71,1,3,1,1764.439,890.679,#84e0c8,official-values+digitized-topology-matched-layout
person-0435,435,461,11,1,4,1,1393.442,538.876,#d8c4d8,official-values+digitized-topology-matched-layout
person-0436,436,462,11,1,6,3,2049.184,493.638,#d8c4d8,official-values+digitized-topology-matched-layout
person-0437,437,463,11,1,3,1,1840.280,560.548,#d8c4d8,official-values+digitized-topology-matched-layout
person-0438,438,464,11,1,3,5,1391.500,447.710,#d8c4d8,official-values+digitized-topology-matched-layout
person-0439,439,465,11,1,2,3,1939.361,510.057,#d8c4d8,official-values+digitized-topology-matched-layout
person-0440,440,466,11,1,4,3,1420.464,556.057,#d8c4d8,official-values+digitized-topology-matched-layout
person-0441,441,467,11,1,5,5,1998.770,502.706,#d8c4d8,official-values+digitized-topology-matched-layout
person-0442,442,468,11,1,3,0,1654.432,286.495,#d8c4d8,official-values+digitized-topology-matched-layout
person-0443,443,469,11,1,0,1,1939.346,343.002,#d8c4d8,official-values+digitized-topology-matched-layout
person-0444,444,470,11,1,0,2,1423.267,247.141,#d8c4d8,official-values+digitized-topology-matched-layout
person-0445,445,471,11,1,3,1,1362.222,484.204,#d8c4d8,official-values+digitized-topology-matched-layout
person-0446,446,472,11,1,2,3,1320.135,482.861,#d8c4d8,official-values+digitized-topology-matched-layout
person-0447,447,473,11,1,1,5,1715.407,359.428,#d8c4d8,official-values+digitized-topology-matched-layout
person-0448,448,474,11,1,1,5,2635.274,401.988,#d8c4d8,official-values+digitized-topology-matched-layout
person-0449,449,475,11,1,2,3,1287.948,619.815,#d8c4d8,official-values+digitized-topology-matched-layout
person-0450,450,476,11,1,2,5,1488.709,464.695,#d8c4d8,official-values+digitized-topology-matched-layout
person-0451,451,477,11,1,2,4,1642.541,243.884,#d8c4d8,official-values+digitized-topology-matched-layout
person-0452,452,478,11,1,2,1,1854.279,152.976,#d8c4d8,official-values+digitized-topology-matched-layout
person-0453,453,479,11,1,5,5,1514.852,251.500,#d8c4d8,official-values+digitized-topology-matched-layout
person-0454,454,480,11,1,3,5,1349.112,451.872,#d8c4d8,official-values+digitized-topology-matched-layout
person-0455,455,481,11,1,4,3,1149.192,679.250,#d8c4d8,official-values+digitized-topology-matched-layout
person-0456,456,482,11,1,4,2,1582.481,276.298,#d8c4d8,official-values+digitized-topology-matched-layout
person-0457,457,483,11,1,2,3,1616.804,522.520,#d8c4d8,official-values+digitized-topology-matched-layout
person-0458,458,484,11,1,3,1,1231.528,627.343,#d8c4d8,official-values+digitized-topology-matched-layout
person-0459,459,485,11,1,6,4,2199.885,473.913,#d8c4d8,official-values+digitized-topology-matched-layout
person-0460,460,486,11,1,0,3,1927.310,271.385,#d8c4d8,official-values+digitized-topology-matched-layout
person-0461,461,487,11,1,5,2,1841.882,192.309,#d8c4d8,official-values+digitized-topology-matched-layout
person-0462,462,488,11,1,1,1,1915.193,221.160,#d8c4d8,official-values+digitized-topology-matched-layout
person-0463,463,489,11,1,4,5,1615.260,402.018,#d8c4d8,official-values+digitized-topology-matched-layout
person-0464,464,490,11,1,3,5,2010.871,470.865,#d8c4d8,official-values+digitized-topology-matched-layout
person-0465,465,491,11,1,3,5,1823.714,530.136,#d8c4d8,official-values+digitized-topology-matched-layout
person-0466,466,492,11,1,5,5,1676.140,384.099,#d8c4d8,official-values+digitized-topology-matched-layout
person-0467,467,493,11,1,1,0,1848.499,251.218,#d8c4d8,official-values+digitized-topology-matched-layout
person-0468,468,494,11,1,7,3,1800.881,237.893,#d8c4d8,official-values+digitized-topology-matched-layout
person-0469,469,495,11,1,2,2,1794.903,123.703,#d8c4d8,official-values+digitized-topology-matched-layout
person-0470,470,496,11,1,2,5,1697.441,212.000,#d8c4d8,official-values+digitized-topology-matched-layout
person-0471,471,497,11,1,1,5,2559.167,384.038,#d8c4d8,official-values+digitized-topology-matched-layout
person-0472,472,498,11,1,3,1,1316.950,389.957,#d8c4d8,official-values+digitized-topology-matched-layout
person-0473,473,499,11,1,1,5,1756.597,545.316,#d8c4d8,official-values+digitized-topology-matched-layout
person-0474,474,500,11,1,3,3,2030.570,525.505,#d8c4d8,official-values+digitized-topology-matched-layout
person-0475,475,500,12,0,4,0,3130.000,1431.000,#ffffff,official-values+digitized-topology-matched-layout
person-0476,476,501,11,1,2,3,1927.279,306.315,#d8c4d8,official-values+digitized-topology-matched-layout
person-0477,477,501,12,0,1,0,3224.000,1761.000,#ffffff,official-values+digitized-topology-matched-layout
person-0478,478,502,11,1,6,3,1918.041,148.038,#d8c4d8,official-values+digitized-topology-matched-layout
person-0479,479,502,12,0,2,0,3046.000,1991.000,#ffffff,official-values+digitized-topology-matched-layout
person-0480,480,503,11,1,1,2,1607.639,265.303,#d8c4d8,official-values+digitized-topology-matched-layout
person-0481,481,503,12,0,1,0,3130.000,1311.000,#ffffff,official-values+digitized-topology-matched-layout
person-0482,482,504,1,0,2,0,885.000,1376.000,#ffffff,official-values+digitized-topology-matched-layout
person-0483,483,504,11,1,1,2,1778.217,226.264,#d8c4d8,official-values+digitized-topology-matched-layout
person-0484,484,505,1,0,1,0,1157.000,2062.000,#ffffff,official-values+digitized-topology-matched-layout
person-0485,485,505,11,1,5,5,1281.548,438.675,#d8c4d8,official-values+digitized-topology-matched-layout
person-0486,486,506,11,1,3,5,1338.172,421.957,#d8c4d8,official-values+digitized-topology-matched-layout
person-0487,487,506,3,0,1,0,1265.000,1753.000,#ffffff,official-values+digitized-topology-matched-layout
person-0488,488,507,11,1,2,3,1266.467,587.773,#d8c4d8,official-values+digitized-topology-matched-layout
person-0489,489,507,3,0,2,0,1234.000,1684.000,#ffffff,official-values+digitized-topology-matched-layout
person-0490,490,508,11,1,5,5,1746.035,228.760,#d8c4d8,official-values+digitized-topology-matched-layout
person-0491,491,508,3,0,5,0,1571.000,1883.000,#ffffff,official-values+digitized-topology-matched-layout
person-0492,492,509,10,0,3,0,2469.000,2055.000,#ffffff,official-values+digitized-topology-matched-layout
person-0493,493,509,11,1,5,5,1877.007,264.115,#d8c4d8,official-values+digitized-topology-matched-layout
person-0494,494,510,10,0,3,0,2098.000,1667.000,#ffffff,official-values+digitized-topology-matched-layout
person-0495,495,510,11,1,3,5,1881.439,218.053,#d8c4d8,official-values+digitized-topology-matched-layout
person-0496,496,511,10,0,3,0,2562.000,1834.000,#ffffff,official-values+digitized-topology-matched-layout
person-0497,497,511,11,1,3,0,1869.525,313.623,#d8c4d8,official-values+digitized-topology-matched-layout
person-0498,498,512,10,0,3,0,2556.000,1720.000,#ffffff,official-values+digitized-topology-matched-layout
person-0499,499,512,11,1,1,5,2036.854,422.194,#d8c4d8,official-values+digitized-topology-matched-layout
person-0500,500,513,10,0,3,0,2602.000,1987.000,#ffffff,official-values+digitized-topology-matched-layout
person-0501,501,513,11,1,1,5,2201.363,435.652,#d8c4d8,official-values+digitized-topology-matched-layout
person-0502,502,514,11,1,1,0,2282.241,507.180,#d8c4d8,official-values+digitized-topology-matched-layout
person-0503,503,514,6,0,3,0,2863.000,595.000,#ffffff,official-values+digitized-topology-matched-layout
person-0504,504,515,11,1,0,4,1373.032,405.416,#d8c4d8,official-values+digitized-topology-matched-layout
person-0505,505,515,2,0,3,0,2544.000,179.000,#ffffff,official-values+digitized-topology-matched-layout
person-0506,506,516,11,1,2,5,1718.682,303.330,#d8c4d8,official-values+digitized-topology-matched-layout
person-0507,507,516,4,0,3,0,1279.000,1193.000,#ffffff,official-values+digitized-topology-matched-layout
person-0508,508,517,11,1,4,4,1689.977,159.089,#d8c4d8,official-values+digitized-topology-matched-layout
person-0509,509,517,4,0,1,0,1193.000,1285.000,#ffffff,official-values+digitized-topology-matched-layout
person-0510,510,518,11,1,2,2,1397.561,481.334,#d8c4d8,official-values+digitized-topology-matched-layout
person-0511,511,518,4,0,4,0,1230.000,1145.000,#ffffff,official-values+digitized-topology-matched-layout
person-0512,512,519,11,1,2,5,1566.193,301.802,#d8c4d8,official-values+digitized-topology-matched-layout
person-0513,513,519,4,0,4,0,1421.000,1303.000,#ffffff,official-values+digitized-topology-matched-layout
person-0514,514,520,11,1,1,5,2624.938,375.590,#d8c4d8,official-values+digitized-topology-matched-layout
person-0515,515,520,4,0,4,0,1315.000,1094.000,#ffffff,official-values+digitized-topology-matched-layout
person-0516,516,521,11,1,7,5,1858.796,476.804,#d8c4d8,official-values+digitized-topology-matched-layout
person-0517,517,521,4,0,3,0,1242.000,1077.000,#ffffff,official-values+digitized-topology-matched-layout
person-0518,518,522,11,1,5,5,1615.209,329.103,#d8c4d8,official-values+digitized-topology-matched-layout
person-0519,519,522,4,0,4,0,1517.000,1347.000,#ffffff,official-values+digitized-topology-matched-layout
person-0520,520,523,11,1,6,5,1790.269,350.687,#d8c4d8,official-values+digitized-topology-matched-layout
person-0521,521,523,4,0,2,0,1187.000,932.000,#ffffff,official-values+digitized-topology-matched-layout
person-0522,522,524,11,1,4,3,1712.825,260.872,#d8c4d8,official-values+digitized-topology-matched-layout
person-0523,523,524,5,0,6,0,1555.000,2326.000,#ffffff,official-values+digitized-topology-matched-layout
person-0524,524,525,11,1,5,5,1530.077,428.087,#d8c4d8,official-values+digitized-topology-matched-layout
person-0525,525,525,7,0,3,0,1984.000,2247.000,#ffffff,official-values+digitized-topology-matched-layout
person-0526,526,526,71,0,3,0,1720.000,668.000,#ffffff,official-values+digitized-topology-matched-layout
person-0527,527,527,71,0,4,0,1485.000,673.000,#ffffff,official-values+digitized-topology-matched-layout
person-0528,528,528,11,0,2,0,2732.000,356.000,#ffffff,official-values+digitized-topology-matched-layout
person-0529,529,529,11,0,2,0,1722.000,388.000,#ffffff,official-values+digitized-topology-matched-layout
person-0530,530,530,11,0,1,0,1980.000,244.000,#ffffff,official-values+digitized-topology-matched-layout
person-0531,531,531,11,0,3,0,2366.000,434.000,#ffffff,official-values+digitized-topology-matched-layout
person-0532,532,532,11,0,3,0,1702.000,428.000,#ffffff,official-values+digitized-topology-matched-layout
person-0533,533,533,12,0,3,0,3086.000,1180.000,#ffffff,official-values+digitized-topology-matched-layout
person-0534,534,534,12,0,2,0,3227.000,1302.000,#ffffff,official-values+digitized-topology-matched-layout
person-0535,535,535,12,0,2,0,3369.000,1254.000,#ffffff,official-values+digitized-topology-matched-layout
person-0536,536,536,12,0,4,0,3200.000,1784.000,#ffffff,official-values+digitized-topology-matched-layout
person-0537,537,537,1,0,2,0,965.000,1612.000,#ffffff,official-values+digitized-topology-matched-layout
person-0538,538,538,1,0,2,0,930.000,1350.000,#ffffff,official-values+digitized-topology-matched-layout
person-0539,539,539,1,0,1,0,918.000,1300.000,#ffffff,official-values+digitized-topology-matched-layout
person-0540,540,540,3,0,1,0,1402.000,1792.000,#ffffff,official-values+digitized-topology-matched-layout
person-0541,541,541,3,0,3,0,1581.000,1997.000,#ffffff,official-values+digitized-topology-matched-layout
person-0542,542,542,10,0,1,0,2163.000,1683.000,#ffffff,official-values+digitized-topology-matched-layout
person-0543,543,543,10,0,2,0,2139.000,1723.000,#ffffff,official-values+digitized-topology-matched-layout
person-0544,544,544,10,0,1,0,2468.000,1943.000,#ffffff,official-values+digitized-topology-matched-layout
person-0545,545,545,10,0,1,0,1945.000,1936.000,#ffffff,official-values+digitized-topology-matched-layout
person-0546,546,546,10,0,5,0,2498.000,1873.000,#ffffff,official-values+digitized-topology-matched-layout
person-0547,547,547,10,0,2,0,2413.000,1980.000,#ffffff,official-values+digitized-topology-matched-layout
person-0548,548,548,6,0,2,0,2602.000,850.000,#ffffff,official-values+digitized-topology-matched-layout
person-0549,549,549,4,0,2,0,1459.000,1012.000,#ffffff,official-values+digitized-topology-matched-layout
person-0550,550,550,4,0,2,0,1489.000,1263.000,#ffffff,official-values+digitized-topology-matched-layout
person-0551,551,551,4,0,1,0,1607.000,1111.000,#ffffff,official-values+digitized-topology-matched-layout
person-0552,552,552,4,0,3,0,1693.000,1394.000,#ffffff,official-values+digitized-topology-matched-layout
person-0553,553,553,4,0,3,0,1431.000,1396.000,#ffffff,official-values+digitized-topology-matched-layout
person-0554,554,554,4,0,2,0,1149.000,1234.000,#ffffff,official-values+digitized-topology-matched-layout
person-0555,555,555,5,0,3,0,1587.000,2200.000,#ffffff,official-values+digitized-topology-matched-layout
person-0556,556,556,5,0,3,0,1429.000,2291.000,#ffffff,official-values+digitized-topology-matched-layout
person-0557,557,557,5,0,5,0,1706.000,2268.000,#ffffff,official-values+digitized-topology-matched-layout
person-0558,558,558,71,0,1,0,1932.000,1003.000,#ffffff,official-values+digitized-topology-matched-layout
person-0559,559,559,71,0,2,0,1548.000,615.000,#ffffff,official-values+digitized-topology-matched-layout
person-0560,560,560,7,0,1,0,1865.000,2240.000,#ffffff,official-values+digitized-topology-matched-layout
person-0561,561,561,7,0,1,0,2754.000,2337.000,#ffffff,official-values+digitized-topology-matched-layout
person-0562,562,562,71,0,2,0,2113.000,831.000,#ffffff,official-values+digitized-topology-matched-layout
person-0563,563,563,71,0,2,0,1475.000,814.000,#ffffff,official-values+digitized-topology-matched-layout
person-0564,564,564,11,0,4,0,2472.000,421.000,#ffffff,official-values+digitized-topology-matched-layout
person-0565,565,565,11,0,1,0,2656.000,309.000,#ffffff,official-values+digitized-topology-matched-layout
person-0566,566,566,11,0,1,0,2298.000,456.000,#ffffff,official-values+digitized-topology-matched-layout
person-0567,567,567,12,0,3,0,3214.000,1215.000,#ffffff,official-values+digitized-topology-matched-layout
person-0568,568,568,6,0,1,0,2997.000,539.000,#ffffff,official-values+digitized-topology-matched-layout
person-0569,569,569,3,0,1,0,1601.000,2037.000,#ffffff,official-values+digitized-topology-matched-layout
person-0570,570,570,10,0,1,0,2589.000,1761.000,#ffffff,official-values+digitized-topology-matched-layout
person-0571,571,571,10,0,4,0,2311.000,1847.000,#ffffff,official-values+digitized-topology-matched-layout
person-0572,572,572,10,0,1,0,2583.000,1968.000,#ffffff,official-values+digitized-topology-matched-layout
person-0573,573,573,4,0,4,0,1702.000,1148.000,#ffffff,official-values+digitized-topology-matched-layout
person-0574,574,574,4,0,2,0,1656.000,1283.000,#ffffff,official-values+digitized-topology-matched-layout
person-0575,575,575,4,0,1,0,1621.000,1309.000,#ffffff,official-values+digitized-topology-matched-layout
person-0576,576,576,4,0,2,0,1266.000,1361.000,#ffffff,official-values+digitized-topology-matched-layout
person-0577,577,577,4,0,4,0,1374.000,1291.000,#ffffff,official-values+digitized-topology-matched-layout
person-0578,578,578,4,0,1,0,1205.000,1192.000,#ffffff,official-values+digitized-topology-matched-layout
person-0579,579,579,5,0,2,0,1405.000,2347.000,#ffffff,official-values+digitized-topology-matched-layout
person-0580,580,580,7,0,1,0,2757.000,2286.000,#ffffff,official-values+digitized-topology-matched-layout
person-0581,581,581,71,0,1,0,2140.000,772.000,#ffffff,official-values+digitized-topology-matched-layout
person-0582,582,582,7,0,2,0,2483.000,2303.000,#ffffff,official-values+digitized-topology-matched-layout
person-0583,583,583,11,0,1,0,2143.000,553.000,#ffffff,official-values+digitized-topology-matched-layout
person-0584,584,584,11,0,2,0,1058.000,737.000,#ffffff,official-values+digitized-topology-matched-layout
person-0585,585,585,12,0,1,0,3204.000,1268.000,#ffffff,official-values+digitized-topology-matched-layout
person-0586,586,586,12,0,1,0,3043.000,1848.000,#ffffff,official-values+digitized-topology-matched-layout
person-0587,587,587,1,0,3,0,973.000,1511.000,#ffffff,official-values+digitized-topology-matched-layout
person-0588,588,588,1,0,1,0,890.000,1629.000,#ffffff,official-values+digitized-topology-matched-layout
person-0589,589,589,10,0,1,0,2737.000,1916.000,#ffffff,official-values+digitized-topology-matched-layout
person-0590,590,590,10,0,1,0,2134.000,2000.000,#ffffff,official-values+digitized-topology-matched-layout
person-0591,591,591,2,0,1,0,2435.000,300.000,#ffffff,official-values+digitized-topology-matched-layout
person-0592,592,592,4,0,2,0,1215.000,1096.000,#ffffff,official-values+digitized-topology-matched-layout
person-0593,593,593,4,0,4,0,1230.000,1417.000,#ffffff,official-values+digitized-topology-matched-layout
person-0594,594,594,4,0,1,0,1000.000,1210.000,#ffffff,official-values+digitized-topology-matched-layout
person-0596,596,596,71,0,2,0,1892.000,891.000,#ffffff,official-values+digitized-topology-matched-layout
person-0597,597,597,11,0,2,0,2667.000,358.000,#ffffff,official-values+digitized-topology-matched-layout
person-0598,598,598,11,0,3,0,2720.000,393.000,#ffffff,official-values+digitized-topology-matched-layout
person-0599,599,599,11,0,2,0,1220.000,466.000,#ffffff,official-values+digitized-topology-matched-layout
person-0600,600,600,11,0,2,0,2137.000,420.000,#ffffff,official-values+digitized-topology-matched-layout
person-0601,601,601,10,0,1,0,2735.000,2046.000,#ffffff,official-values+digitized-topology-matched-layout
person-0602,602,602,10,0,1,0,2728.000,1966.000,#ffffff,official-values+digitized-topology-matched-layout
person-0603,603,603,4,0,2,0,1810.000,1233.000,#ffffff,official-values+digitized-topology-matched-layout
person-0604,604,604,11,0,1,0,1222.000,531.000,#ffffff,official-values+digitized-topology-matched-layout
`, Jo = `key,source,target,class,provenance
edge-0001,person-0001,person-0075,12,official-topology
edge-0002,person-0002,person-0475,12,official-topology
edge-0003,person-0003,person-0052,12,official-topology
edge-0004,person-0004,person-0009,12,official-topology
edge-0005,person-0005,person-0070,12,official-topology
edge-0006,person-0006,person-0005,12,official-topology
edge-0007,person-0007,person-0017,12,official-topology
edge-0008,person-0009,person-0045,12,official-topology
edge-0009,person-0010,person-0475,12,official-topology
edge-0010,person-0011,person-0055,12,official-topology
edge-0011,person-0012,person-0045,12,official-topology
edge-0012,person-0013,person-0061,12,official-topology
edge-0013,person-0014,person-0056,12,official-topology
edge-0014,person-0015,person-0026,12,official-topology
edge-0015,person-0016,person-0013,12,official-topology
edge-0016,person-0017,person-0001,12,official-topology
edge-0017,person-0018,person-0021,12,official-topology
edge-0018,person-0019,person-0064,12,official-topology
edge-0019,person-0020,person-0005,12,official-topology
edge-0020,person-0021,person-0018,12,official-topology
edge-0021,person-0022,person-0037,12,official-topology
edge-0022,person-0023,person-0064,12,official-topology
edge-0023,person-0024,person-0014,12,official-topology
edge-0024,person-0025,person-0477,12,official-topology
edge-0025,person-0026,person-0073,12,official-topology
edge-0026,person-0027,person-0046,12,official-topology
edge-0027,person-0028,person-0005,12,official-topology
edge-0028,person-0029,person-0073,12,official-topology
edge-0029,person-0030,person-0479,12,official-topology
edge-0030,person-0031,person-0071,12,official-topology
edge-0031,person-0032,person-0049,12,official-topology
edge-0032,person-0033,person-0073,12,official-topology
edge-0033,person-0034,person-0001,12,official-topology
edge-0034,person-0035,person-0055,12,official-topology
edge-0035,person-0036,person-0007,12,official-topology
edge-0036,person-0037,person-0045,12,official-topology
edge-0037,person-0039,person-0072,12,official-topology
edge-0038,person-0040,person-0070,12,official-topology
edge-0039,person-0041,person-0014,12,official-topology
edge-0040,person-0042,person-0073,12,official-topology
edge-0041,person-0043,person-0026,12,official-topology
edge-0042,person-0044,person-0064,12,official-topology
edge-0043,person-0045,person-0037,12,official-topology
edge-0044,person-0046,person-0027,12,official-topology
edge-0045,person-0047,person-0005,12,official-topology
edge-0046,person-0048,person-0005,12,official-topology
edge-0047,person-0050,person-0073,12,official-topology
edge-0048,person-0051,person-0039,12,official-topology
edge-0049,person-0052,person-0022,12,official-topology
edge-0050,person-0053,person-0045,12,official-topology
edge-0051,person-0055,person-0011,12,official-topology
edge-0052,person-0056,person-0024,12,official-topology
edge-0053,person-0057,person-0071,12,official-topology
edge-0054,person-0058,person-0026,12,official-topology
edge-0055,person-0059,person-0066,12,official-topology
edge-0056,person-0060,person-0049,12,official-topology
edge-0057,person-0061,person-0045,12,official-topology
edge-0058,person-0062,person-0075,12,official-topology
edge-0059,person-0063,person-0481,12,official-topology
edge-0060,person-0064,person-0071,12,official-topology
edge-0061,person-0065,person-0026,12,official-topology
edge-0062,person-0066,person-0044,12,official-topology
edge-0063,person-0067,person-0026,12,official-topology
edge-0064,person-0068,person-0023,12,official-topology
edge-0065,person-0069,person-0066,12,official-topology
edge-0066,person-0071,person-0019,12,official-topology
edge-0067,person-0072,person-0071,12,official-topology
edge-0068,person-0073,person-0026,12,official-topology
edge-0069,person-0074,person-0026,12,official-topology
edge-0070,person-0075,person-0043,12,official-topology
edge-0071,person-0076,person-0070,12,official-topology
edge-0072,person-0077,person-0049,12,official-topology
edge-0073,person-0078,person-0080,1,official-topology
edge-0074,person-0079,person-0482,1,official-topology
edge-0075,person-0080,person-0115,1,official-topology
edge-0076,person-0082,person-0080,1,official-topology
edge-0077,person-0083,person-0080,1,official-topology
edge-0078,person-0084,person-0115,1,official-topology
edge-0079,person-0085,person-0484,1,official-topology
edge-0080,person-0086,person-0094,1,official-topology
edge-0081,person-0087,person-0094,1,official-topology
edge-0082,person-0088,person-0080,1,official-topology
edge-0083,person-0089,person-0079,1,official-topology
edge-0084,person-0090,person-0086,1,official-topology
edge-0085,person-0091,person-0095,1,official-topology
edge-0086,person-0093,person-0080,1,official-topology
edge-0087,person-0094,person-0086,1,official-topology
edge-0088,person-0095,person-0091,1,official-topology
edge-0089,person-0096,person-0080,1,official-topology
edge-0090,person-0097,person-0086,1,official-topology
edge-0091,person-0098,person-0080,1,official-topology
edge-0092,person-0099,person-0094,1,official-topology
edge-0093,person-0100,person-0241,6,official-topology
edge-0094,person-0101,person-0113,6,official-topology
edge-0095,person-0102,person-0211,6,official-topology
edge-0096,person-0103,person-0211,6,official-topology
edge-0097,person-0104,person-0220,6,official-topology
edge-0098,person-0105,person-0240,6,official-topology
edge-0099,person-0106,person-0207,6,official-topology
edge-0100,person-0107,person-0253,6,official-topology
edge-0101,person-0108,person-0103,6,official-topology
edge-0102,person-0109,person-0258,6,official-topology
edge-0103,person-0110,person-0246,6,official-topology
edge-0104,person-0111,person-0233,6,official-topology
edge-0105,person-0112,person-0213,6,official-topology
edge-0106,person-0113,person-0205,6,official-topology
edge-0107,person-0114,person-0205,6,official-topology
edge-0108,person-0115,person-0080,1,official-topology
edge-0109,person-0116,person-0487,3,official-topology
edge-0110,person-0117,person-0131,3,official-topology
edge-0111,person-0118,person-0135,3,official-topology
edge-0112,person-0119,person-0141,3,official-topology
edge-0113,person-0120,person-0143,3,official-topology
edge-0114,person-0121,person-0143,3,official-topology
edge-0115,person-0122,person-0149,3,official-topology
edge-0116,person-0123,person-0155,3,official-topology
edge-0117,person-0124,person-0131,3,official-topology
edge-0118,person-0125,person-0117,3,official-topology
edge-0119,person-0126,person-0148,3,official-topology
edge-0120,person-0127,person-0126,3,official-topology
edge-0121,person-0128,person-0135,3,official-topology
edge-0122,person-0129,person-0143,3,official-topology
edge-0123,person-0130,person-0127,3,official-topology
edge-0124,person-0131,person-0117,3,official-topology
edge-0125,person-0132,person-0151,3,official-topology
edge-0126,person-0133,person-0137,3,official-topology
edge-0127,person-0134,person-0123,3,official-topology
edge-0128,person-0136,person-0489,3,official-topology
edge-0129,person-0137,person-0138,3,official-topology
edge-0130,person-0138,person-0137,3,official-topology
edge-0131,person-0139,person-0144,3,official-topology
edge-0132,person-0140,person-0126,3,official-topology
edge-0133,person-0141,person-0491,3,official-topology
edge-0134,person-0142,person-0126,3,official-topology
edge-0135,person-0143,person-0121,3,official-topology
edge-0136,person-0144,person-0127,3,official-topology
edge-0137,person-0145,person-0132,3,official-topology
edge-0138,person-0146,person-0118,3,official-topology
edge-0139,person-0147,person-0137,3,official-topology
edge-0140,person-0148,person-0140,3,official-topology
edge-0141,person-0149,person-0155,3,official-topology
edge-0142,person-0150,person-0123,3,official-topology
edge-0143,person-0151,person-0131,3,official-topology
edge-0144,person-0152,person-0139,3,official-topology
edge-0145,person-0153,person-0123,3,official-topology
edge-0146,person-0154,person-0123,3,official-topology
edge-0147,person-0155,person-0149,3,official-topology
edge-0148,person-0156,person-0492,10,official-topology
edge-0149,person-0157,person-0191,10,official-topology
edge-0150,person-0158,person-0193,10,official-topology
edge-0151,person-0159,person-0182,10,official-topology
edge-0152,person-0160,person-0178,10,official-topology
edge-0153,person-0161,person-0178,10,official-topology
edge-0154,person-0162,person-0157,10,official-topology
edge-0155,person-0164,person-0187,10,official-topology
edge-0156,person-0165,person-0494,10,official-topology
edge-0157,person-0166,person-0196,10,official-topology
edge-0158,person-0167,person-0182,10,official-topology
edge-0159,person-0168,person-0496,10,official-topology
edge-0160,person-0169,person-0167,10,official-topology
edge-0161,person-0171,person-0165,10,official-topology
edge-0162,person-0173,person-0178,10,official-topology
edge-0163,person-0174,person-0178,10,official-topology
edge-0164,person-0175,person-0191,10,official-topology
edge-0165,person-0176,person-0197,10,official-topology
edge-0166,person-0177,person-0157,10,official-topology
edge-0167,person-0178,person-0494,10,official-topology
edge-0168,person-0179,person-0187,10,official-topology
edge-0169,person-0180,person-0498,10,official-topology
edge-0170,person-0181,person-0500,10,official-topology
edge-0171,person-0182,person-0167,10,official-topology
edge-0172,person-0183,person-0167,10,official-topology
edge-0173,person-0184,person-0192,10,official-topology
edge-0174,person-0185,person-0496,10,official-topology
edge-0175,person-0186,person-0192,10,official-topology
edge-0176,person-0187,person-0172,10,official-topology
edge-0177,person-0188,person-0187,10,official-topology
edge-0178,person-0189,person-0187,10,official-topology
edge-0179,person-0190,person-0181,10,official-topology
edge-0180,person-0192,person-0500,10,official-topology
edge-0181,person-0193,person-0178,10,official-topology
edge-0182,person-0194,person-0492,10,official-topology
edge-0183,person-0195,person-0187,10,official-topology
edge-0184,person-0196,person-0166,10,official-topology
edge-0185,person-0197,person-0176,10,official-topology
edge-0186,person-0198,person-0162,10,official-topology
edge-0187,person-0199,person-0176,10,official-topology
edge-0188,person-0200,person-0238,6,official-topology
edge-0189,person-0201,person-0246,6,official-topology
edge-0190,person-0202,person-0205,6,official-topology
edge-0191,person-0203,person-0263,6,official-topology
edge-0192,person-0204,person-0252,6,official-topology
edge-0193,person-0205,person-0114,6,official-topology
edge-0194,person-0206,person-0232,6,official-topology
edge-0195,person-0207,person-0238,6,official-topology
edge-0196,person-0208,person-0114,6,official-topology
edge-0197,person-0209,person-0244,6,official-topology
edge-0198,person-0210,person-0205,6,official-topology
edge-0199,person-0211,person-0237,6,official-topology
edge-0200,person-0212,person-0218,6,official-topology
edge-0201,person-0213,person-0244,6,official-topology
edge-0202,person-0214,person-0263,6,official-topology
edge-0203,person-0215,person-0253,6,official-topology
edge-0204,person-0216,person-0245,6,official-topology
edge-0205,person-0217,person-0225,6,official-topology
edge-0206,person-0218,person-0240,6,official-topology
edge-0207,person-0219,person-0233,6,official-topology
edge-0208,person-0220,person-0222,6,official-topology
edge-0209,person-0221,person-0253,6,official-topology
edge-0210,person-0223,person-0243,6,official-topology
edge-0211,person-0224,person-0252,6,official-topology
edge-0212,person-0225,person-0253,6,official-topology
edge-0213,person-0226,person-0106,6,official-topology
edge-0214,person-0227,person-0263,6,official-topology
edge-0215,person-0228,person-0213,6,official-topology
edge-0216,person-0229,person-0209,6,official-topology
edge-0217,person-0230,person-0503,6,official-topology
edge-0218,person-0231,person-0114,6,official-topology
edge-0219,person-0232,person-0233,6,official-topology
edge-0220,person-0233,person-0232,6,official-topology
edge-0221,person-0234,person-0219,6,official-topology
edge-0222,person-0235,person-0238,6,official-topology
edge-0223,person-0236,person-0252,6,official-topology
edge-0224,person-0237,person-0211,6,official-topology
edge-0225,person-0238,person-0111,6,official-topology
edge-0226,person-0239,person-0249,6,official-topology
edge-0227,person-0240,person-0263,6,official-topology
edge-0228,person-0241,person-0100,6,official-topology
edge-0229,person-0242,person-0259,6,official-topology
edge-0230,person-0243,person-0246,6,official-topology
edge-0231,person-0244,person-0213,6,official-topology
edge-0232,person-0245,person-0209,6,official-topology
edge-0233,person-0246,person-0244,6,official-topology
edge-0234,person-0247,person-0208,6,official-topology
edge-0235,person-0248,person-0213,6,official-topology
edge-0236,person-0249,person-0239,6,official-topology
edge-0237,person-0250,person-0241,6,official-topology
edge-0238,person-0251,person-0260,6,official-topology
edge-0239,person-0252,person-0236,6,official-topology
edge-0240,person-0253,person-0243,6,official-topology
edge-0241,person-0254,person-0211,6,official-topology
edge-0242,person-0255,person-0503,6,official-topology
edge-0243,person-0256,person-0201,6,official-topology
edge-0244,person-0257,person-0253,6,official-topology
edge-0245,person-0258,person-0109,6,official-topology
edge-0246,person-0259,person-0242,6,official-topology
edge-0247,person-0260,person-0205,6,official-topology
edge-0248,person-0261,person-0230,6,official-topology
edge-0249,person-0262,person-0213,6,official-topology
edge-0250,person-0263,person-0114,6,official-topology
edge-0251,person-0264,person-0275,2,official-topology
edge-0252,person-0265,person-0276,2,official-topology
edge-0253,person-0266,person-0273,2,official-topology
edge-0254,person-0267,person-0279,2,official-topology
edge-0255,person-0268,person-0274,2,official-topology
edge-0256,person-0269,person-0279,2,official-topology
edge-0257,person-0270,person-0287,2,official-topology
edge-0258,person-0271,person-0287,2,official-topology
edge-0259,person-0272,person-0505,2,official-topology
edge-0260,person-0273,person-0287,2,official-topology
edge-0261,person-0274,person-0268,2,official-topology
edge-0262,person-0275,person-0276,2,official-topology
edge-0263,person-0276,person-0281,2,official-topology
edge-0264,person-0277,person-0287,2,official-topology
edge-0265,person-0278,person-0279,2,official-topology
edge-0266,person-0279,person-0288,2,official-topology
edge-0267,person-0280,person-0271,2,official-topology
edge-0268,person-0281,person-0276,2,official-topology
edge-0269,person-0282,person-0269,2,official-topology
edge-0270,person-0283,person-0280,2,official-topology
edge-0271,person-0284,person-0505,2,official-topology
edge-0272,person-0285,person-0275,2,official-topology
edge-0273,person-0286,person-0275,2,official-topology
edge-0274,person-0287,person-0279,2,official-topology
edge-0275,person-0288,person-0279,2,official-topology
edge-0276,person-0289,person-0505,2,official-topology
edge-0277,person-0290,person-0268,2,official-topology
edge-0278,person-0291,person-0507,4,official-topology
edge-0279,person-0292,person-0299,4,official-topology
edge-0280,person-0293,person-0315,4,official-topology
edge-0281,person-0294,person-0334,4,official-topology
edge-0282,person-0295,person-0319,4,official-topology
edge-0283,person-0297,person-0307,4,official-topology
edge-0284,person-0298,person-0509,4,official-topology
edge-0285,person-0299,person-0297,4,official-topology
edge-0286,person-0300,person-0308,4,official-topology
edge-0287,person-0301,person-0308,4,official-topology
edge-0288,person-0302,person-0334,4,official-topology
edge-0289,person-0303,person-0328,4,official-topology
edge-0290,person-0304,person-0315,4,official-topology
edge-0291,person-0305,person-0511,4,official-topology
edge-0292,person-0306,person-0314,4,official-topology
edge-0293,person-0307,person-0314,4,official-topology
edge-0294,person-0308,person-0297,4,official-topology
edge-0295,person-0309,person-0314,4,official-topology
edge-0296,person-0310,person-0299,4,official-topology
edge-0297,person-0311,person-0328,4,official-topology
edge-0298,person-0313,person-0513,4,official-topology
edge-0299,person-0314,person-0328,4,official-topology
edge-0300,person-0315,person-0326,4,official-topology
edge-0301,person-0316,person-0515,4,official-topology
edge-0302,person-0317,person-0507,4,official-topology
edge-0303,person-0318,person-0511,4,official-topology
edge-0304,person-0319,person-0513,4,official-topology
edge-0305,person-0320,person-0308,4,official-topology
edge-0306,person-0321,person-0305,4,official-topology
edge-0307,person-0322,person-0513,4,official-topology
edge-0308,person-0323,person-0308,4,official-topology
edge-0309,person-0324,person-0328,4,official-topology
edge-0310,person-0325,person-0314,4,official-topology
edge-0311,person-0326,person-0308,4,official-topology
edge-0312,person-0327,person-0307,4,official-topology
edge-0313,person-0328,person-0314,4,official-topology
edge-0314,person-0329,person-0334,4,official-topology
edge-0315,person-0330,person-0308,4,official-topology
edge-0316,person-0331,person-0517,4,official-topology
edge-0317,person-0332,person-0519,4,official-topology
edge-0318,person-0333,person-0315,4,official-topology
edge-0319,person-0334,person-0521,4,official-topology
edge-0320,person-0335,person-0295,4,official-topology
edge-0321,person-0336,person-0297,4,official-topology
edge-0322,person-0337,person-0351,5,official-topology
edge-0323,person-0338,person-0344,5,official-topology
edge-0324,person-0339,person-0343,5,official-topology
edge-0325,person-0340,person-0355,5,official-topology
edge-0326,person-0342,person-0354,5,official-topology
edge-0327,person-0343,person-0523,5,official-topology
edge-0328,person-0344,person-0357,5,official-topology
edge-0329,person-0345,person-0349,5,official-topology
edge-0330,person-0346,person-0343,5,official-topology
edge-0331,person-0347,person-0351,5,official-topology
edge-0332,person-0348,person-0356,5,official-topology
edge-0333,person-0349,person-0340,5,official-topology
edge-0334,person-0350,person-0353,5,official-topology
edge-0335,person-0351,person-0354,5,official-topology
edge-0336,person-0352,person-0523,5,official-topology
edge-0337,person-0353,person-0344,5,official-topology
edge-0338,person-0354,person-0342,5,official-topology
edge-0339,person-0355,person-0340,5,official-topology
edge-0340,person-0356,person-0349,5,official-topology
edge-0341,person-0357,person-0356,5,official-topology
edge-0342,person-0358,person-0399,7,official-topology
edge-0343,person-0359,person-0370,7,official-topology
edge-0344,person-0360,person-0363,71,official-topology
edge-0345,person-0362,person-0370,7,official-topology
edge-0346,person-0363,person-0360,71,official-topology
edge-0347,person-0365,person-0392,7,official-topology
edge-0348,person-0366,person-0405,71,official-topology
edge-0349,person-0367,person-0429,7,official-topology
edge-0350,person-0368,person-0397,7,official-topology
edge-0351,person-0369,person-0419,71,official-topology
edge-0352,person-0371,person-0424,7,official-topology
edge-0353,person-0372,person-0401,71,official-topology
edge-0354,person-0373,person-0525,7,official-topology
edge-0355,person-0374,person-0429,7,official-topology
edge-0356,person-0375,person-0526,71,official-topology
edge-0357,person-0376,person-0367,7,official-topology
edge-0358,person-0377,person-0397,7,official-topology
edge-0359,person-0378,person-0393,7,official-topology
edge-0360,person-0379,person-0425,7,official-topology
edge-0361,person-0380,person-0397,7,official-topology
edge-0362,person-0381,person-0397,7,official-topology
edge-0363,person-0382,person-0393,7,official-topology
edge-0364,person-0383,person-0392,7,official-topology
edge-0365,person-0384,person-0425,7,official-topology
edge-0366,person-0385,person-0374,7,official-topology
edge-0367,person-0386,person-0390,71,official-topology
edge-0368,person-0387,person-0406,71,official-topology
edge-0369,person-0388,person-0419,71,official-topology
edge-0370,person-0389,person-0401,71,official-topology
edge-0371,person-0390,person-0527,71,official-topology
edge-0372,person-0391,person-0370,7,official-topology
edge-0373,person-0392,person-0413,7,official-topology
edge-0374,person-0393,person-0378,7,official-topology
edge-0375,person-0394,person-0383,7,official-topology
edge-0376,person-0395,person-0392,7,official-topology
edge-0377,person-0396,person-0425,7,official-topology
edge-0378,person-0397,person-0381,7,official-topology
edge-0379,person-0398,person-0429,7,official-topology
edge-0380,person-0399,person-0358,7,official-topology
edge-0381,person-0400,person-0390,71,official-topology
edge-0382,person-0401,person-0389,71,official-topology
edge-0383,person-0402,person-0431,71,official-topology
edge-0384,person-0403,person-0389,71,official-topology
edge-0385,person-0404,person-0372,71,official-topology
edge-0386,person-0405,person-0366,71,official-topology
edge-0387,person-0406,person-0421,71,official-topology
edge-0388,person-0407,person-0392,7,official-topology
edge-0389,person-0408,person-0370,7,official-topology
edge-0390,person-0409,person-0424,7,official-topology
edge-0391,person-0410,person-0425,7,official-topology
edge-0392,person-0411,person-0397,7,official-topology
edge-0393,person-0412,person-0397,7,official-topology
edge-0394,person-0413,person-0392,7,official-topology
edge-0395,person-0415,person-0419,71,official-topology
edge-0396,person-0416,person-0526,71,official-topology
edge-0397,person-0417,person-0414,71,official-topology
edge-0398,person-0418,person-0389,71,official-topology
edge-0399,person-0419,person-0369,71,official-topology
edge-0400,person-0420,person-0397,7,official-topology
edge-0401,person-0421,person-0406,71,official-topology
edge-0402,person-0422,person-0410,7,official-topology
edge-0403,person-0423,person-0408,7,official-topology
edge-0404,person-0424,person-0380,7,official-topology
edge-0405,person-0426,person-0370,7,official-topology
edge-0406,person-0427,person-0392,7,official-topology
edge-0407,person-0428,person-0392,7,official-topology
edge-0408,person-0429,person-0362,7,official-topology
edge-0409,person-0430,person-0417,71,official-topology
edge-0410,person-0431,person-0363,71,official-topology
edge-0411,person-0432,person-0434,71,official-topology
edge-0412,person-0433,person-0369,71,official-topology
edge-0413,person-0434,person-0432,71,official-topology
edge-0414,person-0435,person-0458,11,official-topology
edge-0415,person-0436,person-0441,11,official-topology
edge-0416,person-0437,person-0439,11,official-topology
edge-0417,person-0438,person-0441,11,official-topology
edge-0418,person-0439,person-0437,11,official-topology
edge-0419,person-0440,person-0435,11,official-topology
edge-0420,person-0441,person-0438,11,official-topology
edge-0421,person-0443,person-0445,11,official-topology
edge-0422,person-0444,person-0453,11,official-topology
edge-0423,person-0445,person-0472,11,official-topology
edge-0424,person-0446,person-0470,11,official-topology
edge-0425,person-0447,person-0518,11,official-topology
edge-0426,person-0448,person-0528,11,official-topology
edge-0427,person-0449,person-0440,11,official-topology
edge-0428,person-0450,person-0516,11,official-topology
edge-0429,person-0451,person-0529,11,official-topology
edge-0430,person-0452,person-0469,11,official-topology
edge-0431,person-0453,person-0529,11,official-topology
edge-0432,person-0454,person-0490,11,official-topology
edge-0433,person-0455,person-0459,11,official-topology
edge-0434,person-0456,person-0466,11,official-topology
edge-0435,person-0457,person-0437,11,official-topology
edge-0436,person-0458,person-0435,11,official-topology
edge-0437,person-0459,person-0464,11,official-topology
edge-0438,person-0460,person-0530,11,official-topology
edge-0439,person-0461,person-0478,11,official-topology
edge-0440,person-0462,person-0442,11,official-topology
edge-0441,person-0463,person-0522,11,official-topology
edge-0442,person-0464,person-0474,11,official-topology
edge-0443,person-0465,person-0458,11,official-topology
edge-0444,person-0466,person-0522,11,official-topology
edge-0445,person-0468,person-0493,11,official-topology
edge-0446,person-0469,person-0452,11,official-topology
edge-0447,person-0470,person-0495,11,official-topology
edge-0448,person-0471,person-0531,11,official-topology
edge-0449,person-0472,person-0440,11,official-topology
edge-0450,person-0473,person-0437,11,official-topology
edge-0451,person-0474,person-0464,11,official-topology
edge-0452,person-0476,person-0493,11,official-topology
edge-0453,person-0478,person-0506,11,official-topology
edge-0454,person-0480,person-0445,11,official-topology
edge-0455,person-0483,person-0495,11,official-topology
edge-0456,person-0485,person-0490,11,official-topology
edge-0457,person-0486,person-0441,11,official-topology
edge-0458,person-0488,person-0472,11,official-topology
edge-0459,person-0490,person-0520,11,official-topology
edge-0460,person-0493,person-0476,11,official-topology
edge-0461,person-0495,person-0490,11,official-topology
edge-0462,person-0499,person-0435,11,official-topology
edge-0463,person-0501,person-0531,11,official-topology
edge-0464,person-0504,person-0472,11,official-topology
edge-0465,person-0506,person-0493,11,official-topology
edge-0466,person-0508,person-0495,11,official-topology
edge-0467,person-0510,person-0478,11,official-topology
edge-0468,person-0512,person-0506,11,official-topology
edge-0469,person-0514,person-0471,11,official-topology
edge-0470,person-0516,person-0441,11,official-topology
edge-0471,person-0518,person-0522,11,official-topology
edge-0472,person-0520,person-0532,11,official-topology
edge-0473,person-0522,person-0466,11,official-topology
edge-0474,person-0524,person-0476,11,official-topology
edge-0475,person-0001,person-0034,12,official-topology
edge-0476,person-0002,person-0036,12,official-topology
edge-0477,person-0004,person-0533,12,official-topology
edge-0478,person-0005,person-0028,12,official-topology
edge-0479,person-0006,person-0028,12,official-topology
edge-0480,person-0009,person-0074,12,official-topology
edge-0481,person-0010,person-0004,12,official-topology
edge-0482,person-0012,person-0014,12,official-topology
edge-0483,person-0013,person-0025,12,official-topology
edge-0484,person-0014,person-0012,12,official-topology
edge-0485,person-0015,person-0057,12,official-topology
edge-0486,person-0017,person-0021,12,official-topology
edge-0487,person-0019,person-0023,12,official-topology
edge-0488,person-0020,person-0028,12,official-topology
edge-0489,person-0022,person-0041,12,official-topology
edge-0490,person-0023,person-0054,12,official-topology
edge-0491,person-0024,person-0055,12,official-topology
edge-0492,person-0026,person-0057,12,official-topology
edge-0493,person-0027,person-0023,12,official-topology
edge-0494,person-0028,person-0017,12,official-topology
edge-0495,person-0029,person-0066,12,official-topology
edge-0496,person-0030,person-0534,12,official-topology
edge-0497,person-0031,person-0043,12,official-topology
edge-0498,person-0032,person-0069,12,official-topology
edge-0499,person-0033,person-0046,12,official-topology
edge-0500,person-0035,person-0011,12,official-topology
edge-0501,person-0036,person-0002,12,official-topology
edge-0502,person-0037,person-0009,12,official-topology
edge-0503,person-0039,person-0049,12,official-topology
edge-0504,person-0040,person-0033,12,official-topology
edge-0505,person-0041,person-0037,12,official-topology
edge-0506,person-0042,person-0064,12,official-topology
edge-0507,person-0043,person-0070,12,official-topology
edge-0508,person-0044,person-0054,12,official-topology
edge-0509,person-0045,person-0053,12,official-topology
edge-0510,person-0047,person-0028,12,official-topology
edge-0511,person-0048,person-0028,12,official-topology
edge-0512,person-0050,person-0065,12,official-topology
edge-0513,person-0051,person-0535,12,official-topology
edge-0514,person-0052,person-0475,12,official-topology
edge-0515,person-0055,person-0056,12,official-topology
edge-0516,person-0057,person-0026,12,official-topology
edge-0517,person-0058,person-0073,12,official-topology
edge-0518,person-0059,person-0068,12,official-topology
edge-0519,person-0060,person-0075,12,official-topology
edge-0520,person-0061,person-0013,12,official-topology
edge-0521,person-0063,person-0075,12,official-topology
edge-0522,person-0064,person-0054,12,official-topology
edge-0523,person-0065,person-0073,12,official-topology
edge-0524,person-0066,person-0535,12,official-topology
edge-0525,person-0067,person-0073,12,official-topology
edge-0526,person-0068,person-0536,12,official-topology
edge-0527,person-0071,person-0072,12,official-topology
edge-0528,person-0072,person-0057,12,official-topology
edge-0529,person-0073,person-0065,12,official-topology
edge-0530,person-0074,person-0057,12,official-topology
edge-0531,person-0075,person-0062,12,official-topology
edge-0532,person-0076,person-0003,12,official-topology
edge-0533,person-0077,person-0005,12,official-topology
edge-0534,person-0078,person-0537,1,official-topology
edge-0535,person-0079,person-0538,1,official-topology
edge-0536,person-0080,person-0088,1,official-topology
edge-0537,person-0082,person-0088,1,official-topology
edge-0538,person-0083,person-0537,1,official-topology
edge-0539,person-0084,person-0087,1,official-topology
edge-0540,person-0085,person-0099,1,official-topology
edge-0541,person-0086,person-0090,1,official-topology
edge-0542,person-0087,person-0099,1,official-topology
edge-0543,person-0088,person-0082,1,official-topology
edge-0544,person-0089,person-0539,1,official-topology
edge-0545,person-0090,person-0094,1,official-topology
edge-0546,person-0093,person-0115,1,official-topology
edge-0547,person-0094,person-0087,1,official-topology
edge-0548,person-0096,person-0115,1,official-topology
edge-0549,person-0097,person-0088,1,official-topology
edge-0550,person-0098,person-0082,1,official-topology
edge-0551,person-0099,person-0087,1,official-topology
edge-0552,person-0100,person-0250,6,official-topology
edge-0553,person-0101,person-0103,6,official-topology
edge-0554,person-0102,person-0222,6,official-topology
edge-0555,person-0103,person-0207,6,official-topology
edge-0556,person-0104,person-0222,6,official-topology
edge-0557,person-0105,person-0251,6,official-topology
edge-0558,person-0106,person-0219,6,official-topology
edge-0559,person-0107,person-0225,6,official-topology
edge-0560,person-0108,person-0221,6,official-topology
edge-0561,person-0109,person-0220,6,official-topology
edge-0562,person-0110,person-0243,6,official-topology
edge-0563,person-0111,person-0232,6,official-topology
edge-0564,person-0112,person-0244,6,official-topology
edge-0565,person-0113,person-0206,6,official-topology
edge-0566,person-0114,person-0263,6,official-topology
edge-0567,person-0115,person-0093,1,official-topology
edge-0568,person-0116,person-0139,3,official-topology
edge-0569,person-0117,person-0126,3,official-topology
edge-0570,person-0118,person-0137,3,official-topology
edge-0571,person-0119,person-0491,3,official-topology
edge-0572,person-0121,person-0120,3,official-topology
edge-0573,person-0122,person-0155,3,official-topology
edge-0574,person-0123,person-0153,3,official-topology
edge-0575,person-0124,person-0117,3,official-topology
edge-0576,person-0125,person-0151,3,official-topology
edge-0577,person-0126,person-0140,3,official-topology
edge-0578,person-0127,person-0148,3,official-topology
edge-0579,person-0128,person-0141,3,official-topology
edge-0580,person-0129,person-0120,3,official-topology
edge-0581,person-0130,person-0132,3,official-topology
edge-0582,person-0131,person-0151,3,official-topology
edge-0583,person-0132,person-0145,3,official-topology
edge-0584,person-0133,person-0138,3,official-topology
edge-0585,person-0134,person-0154,3,official-topology
edge-0586,person-0137,person-0118,3,official-topology
edge-0587,person-0138,person-0118,3,official-topology
edge-0588,person-0139,person-0540,3,official-topology
edge-0589,person-0140,person-0148,3,official-topology
edge-0590,person-0141,person-0541,3,official-topology
edge-0591,person-0142,person-0153,3,official-topology
edge-0592,person-0143,person-0120,3,official-topology
edge-0593,person-0144,person-0132,3,official-topology
edge-0594,person-0145,person-0130,3,official-topology
edge-0595,person-0146,person-0141,3,official-topology
edge-0596,person-0147,person-0138,3,official-topology
edge-0597,person-0149,person-0122,3,official-topology
edge-0598,person-0150,person-0153,3,official-topology
edge-0599,person-0151,person-0117,3,official-topology
edge-0600,person-0153,person-0154,3,official-topology
edge-0601,person-0154,person-0155,3,official-topology
edge-0602,person-0155,person-0122,3,official-topology
edge-0603,person-0157,person-0162,10,official-topology
edge-0604,person-0158,person-0542,10,official-topology
edge-0605,person-0159,person-0543,10,official-topology
edge-0606,person-0160,person-0182,10,official-topology
edge-0607,person-0161,person-0494,10,official-topology
edge-0608,person-0162,person-0193,10,official-topology
edge-0609,person-0164,person-0544,10,official-topology
edge-0610,person-0165,person-0171,10,official-topology
edge-0611,person-0167,person-0158,10,official-topology
edge-0612,person-0168,person-0162,10,official-topology
edge-0613,person-0169,person-0193,10,official-topology
edge-0614,person-0171,person-0158,10,official-topology
edge-0615,person-0174,person-0169,10,official-topology
edge-0616,person-0175,person-0543,10,official-topology
edge-0617,person-0176,person-0545,10,official-topology
edge-0618,person-0177,person-0162,10,official-topology
edge-0619,person-0178,person-0174,10,official-topology
edge-0620,person-0179,person-0496,10,official-topology
edge-0621,person-0180,person-0546,10,official-topology
edge-0622,person-0181,person-0547,10,official-topology
edge-0623,person-0182,person-0183,10,official-topology
edge-0624,person-0183,person-0169,10,official-topology
edge-0625,person-0185,person-0162,10,official-topology
edge-0626,person-0187,person-0188,10,official-topology
edge-0627,person-0188,person-0173,10,official-topology
edge-0628,person-0189,person-0188,10,official-topology
edge-0629,person-0190,person-0547,10,official-topology
edge-0630,person-0192,person-0193,10,official-topology
edge-0631,person-0193,person-0162,10,official-topology
edge-0632,person-0194,person-0500,10,official-topology
edge-0633,person-0195,person-0193,10,official-topology
edge-0634,person-0197,person-0169,10,official-topology
edge-0635,person-0198,person-0166,10,official-topology
edge-0636,person-0199,person-0169,10,official-topology
edge-0637,person-0200,person-0103,6,official-topology
edge-0638,person-0201,person-0112,6,official-topology
edge-0639,person-0202,person-0214,6,official-topology
edge-0640,person-0203,person-0114,6,official-topology
edge-0641,person-0204,person-0236,6,official-topology
edge-0642,person-0205,person-0202,6,official-topology
edge-0643,person-0207,person-0211,6,official-topology
edge-0644,person-0208,person-0201,6,official-topology
edge-0645,person-0209,person-0206,6,official-topology
edge-0646,person-0210,person-0263,6,official-topology
edge-0647,person-0211,person-0226,6,official-topology
edge-0648,person-0212,person-0256,6,official-topology
edge-0649,person-0213,person-0209,6,official-topology
edge-0650,person-0214,person-0202,6,official-topology
edge-0651,person-0215,person-0241,6,official-topology
edge-0652,person-0216,person-0228,6,official-topology
edge-0653,person-0217,person-0241,6,official-topology
edge-0654,person-0218,person-0212,6,official-topology
edge-0655,person-0219,person-0234,6,official-topology
edge-0656,person-0220,person-0258,6,official-topology
edge-0657,person-0221,person-0103,6,official-topology
edge-0658,person-0223,person-0225,6,official-topology
edge-0659,person-0224,person-0236,6,official-topology
edge-0660,person-0225,person-0217,6,official-topology
edge-0661,person-0226,person-0239,6,official-topology
edge-0662,person-0227,person-0248,6,official-topology
edge-0663,person-0228,person-0245,6,official-topology
edge-0664,person-0229,person-0245,6,official-topology
edge-0665,person-0230,person-0263,6,official-topology
edge-0666,person-0231,person-0208,6,official-topology
edge-0667,person-0232,person-0248,6,official-topology
edge-0668,person-0233,person-0248,6,official-topology
edge-0669,person-0235,person-0220,6,official-topology
edge-0670,person-0236,person-0204,6,official-topology
edge-0671,person-0237,person-0222,6,official-topology
edge-0672,person-0238,person-0241,6,official-topology
edge-0673,person-0239,person-0106,6,official-topology
edge-0674,person-0240,person-0114,6,official-topology
edge-0675,person-0241,person-0250,6,official-topology
edge-0676,person-0243,person-0244,6,official-topology
edge-0677,person-0244,person-0246,6,official-topology
edge-0678,person-0245,person-0228,6,official-topology
edge-0679,person-0246,person-0243,6,official-topology
edge-0680,person-0247,person-0100,6,official-topology
edge-0681,person-0248,person-0233,6,official-topology
edge-0682,person-0250,person-0100,6,official-topology
edge-0683,person-0251,person-0240,6,official-topology
edge-0684,person-0252,person-0204,6,official-topology
edge-0685,person-0253,person-0225,6,official-topology
edge-0686,person-0254,person-0207,6,official-topology
edge-0687,person-0255,person-0259,6,official-topology
edge-0688,person-0256,person-0261,6,official-topology
edge-0689,person-0257,person-0225,6,official-topology
edge-0690,person-0258,person-0548,6,official-topology
edge-0691,person-0260,person-0109,6,official-topology
edge-0692,person-0261,person-0503,6,official-topology
edge-0693,person-0262,person-0244,6,official-topology
edge-0694,person-0263,person-0208,6,official-topology
edge-0695,person-0264,person-0269,2,official-topology
edge-0696,person-0266,person-0272,2,official-topology
edge-0697,person-0267,person-0272,2,official-topology
edge-0698,person-0269,person-0270,2,official-topology
edge-0699,person-0270,person-0283,2,official-topology
edge-0700,person-0271,person-0272,2,official-topology
edge-0701,person-0272,person-0266,2,official-topology
edge-0702,person-0273,person-0266,2,official-topology
edge-0703,person-0275,person-0264,2,official-topology
edge-0704,person-0276,person-0265,2,official-topology
edge-0705,person-0277,person-0289,2,official-topology
edge-0706,person-0278,person-0287,2,official-topology
edge-0707,person-0280,person-0282,2,official-topology
edge-0708,person-0281,person-0287,2,official-topology
edge-0709,person-0283,person-0273,2,official-topology
edge-0710,person-0285,person-0267,2,official-topology
edge-0711,person-0286,person-0269,2,official-topology
edge-0712,person-0287,person-0273,2,official-topology
edge-0713,person-0289,person-0288,2,official-topology
edge-0714,person-0290,person-0287,2,official-topology
edge-0715,person-0291,person-0549,4,official-topology
edge-0716,person-0292,person-0550,4,official-topology
edge-0717,person-0297,person-0314,4,official-topology
edge-0718,person-0298,person-0291,4,official-topology
edge-0719,person-0299,person-0550,4,official-topology
edge-0720,person-0300,person-0511,4,official-topology
edge-0721,person-0301,person-0519,4,official-topology
edge-0722,person-0302,person-0517,4,official-topology
edge-0723,person-0303,person-0311,4,official-topology
edge-0724,person-0304,person-0551,4,official-topology
edge-0725,person-0305,person-0300,4,official-topology
edge-0726,person-0306,person-0297,4,official-topology
edge-0727,person-0307,person-0297,4,official-topology
edge-0728,person-0308,person-0515,4,official-topology
edge-0729,person-0309,person-0517,4,official-topology
edge-0730,person-0310,person-0311,4,official-topology
edge-0731,person-0311,person-0304,4,official-topology
edge-0732,person-0313,person-0319,4,official-topology
edge-0733,person-0314,person-0511,4,official-topology
edge-0734,person-0315,person-0308,4,official-topology
edge-0735,person-0316,person-0323,4,official-topology
edge-0736,person-0317,person-0319,4,official-topology
edge-0737,person-0318,person-0314,4,official-topology
edge-0738,person-0319,person-0552,4,official-topology
edge-0739,person-0320,person-0334,4,official-topology
edge-0740,person-0321,person-0553,4,official-topology
edge-0741,person-0322,person-0319,4,official-topology
edge-0742,person-0323,person-0316,4,official-topology
edge-0743,person-0324,person-0311,4,official-topology
edge-0744,person-0325,person-0336,4,official-topology
edge-0745,person-0326,person-0521,4,official-topology
edge-0746,person-0327,person-0297,4,official-topology
edge-0747,person-0328,person-0311,4,official-topology
edge-0748,person-0329,person-0325,4,official-topology
edge-0749,person-0330,person-0513,4,official-topology
edge-0750,person-0331,person-0297,4,official-topology
edge-0751,person-0332,person-0305,4,official-topology
edge-0752,person-0333,person-0304,4,official-topology
edge-0753,person-0334,person-0554,4,official-topology
edge-0754,person-0335,person-0325,4,official-topology
edge-0755,person-0336,person-0325,4,official-topology
edge-0756,person-0337,person-0340,5,official-topology
edge-0757,person-0338,person-0555,5,official-topology
edge-0758,person-0339,person-0556,5,official-topology
edge-0759,person-0340,person-0557,5,official-topology
edge-0760,person-0342,person-0347,5,official-topology
edge-0761,person-0343,person-0556,5,official-topology
edge-0762,person-0345,person-0523,5,official-topology
edge-0763,person-0346,person-0523,5,official-topology
edge-0764,person-0347,person-0354,5,official-topology
edge-0765,person-0348,person-0349,5,official-topology
edge-0766,person-0349,person-0348,5,official-topology
edge-0767,person-0351,person-0347,5,official-topology
edge-0768,person-0352,person-0556,5,official-topology
edge-0769,person-0355,person-0523,5,official-topology
edge-0770,person-0356,person-0348,5,official-topology
edge-0771,person-0357,person-0344,5,official-topology
edge-0772,person-0358,person-0361,7,official-topology
edge-0773,person-0359,person-0391,7,official-topology
edge-0774,person-0360,person-0558,71,official-topology
edge-0775,person-0362,person-0376,7,official-topology
edge-0776,person-0363,person-0431,71,official-topology
edge-0777,person-0365,person-0525,7,official-topology
edge-0778,person-0367,person-0376,7,official-topology
edge-0779,person-0368,person-0381,7,official-topology
edge-0780,person-0369,person-0360,71,official-topology
edge-0781,person-0371,person-0380,7,official-topology
edge-0782,person-0372,person-0404,71,official-topology
edge-0783,person-0373,person-0370,7,official-topology
edge-0784,person-0375,person-0559,71,official-topology
edge-0785,person-0377,person-0381,7,official-topology
edge-0786,person-0379,person-0396,7,official-topology
edge-0787,person-0380,person-0429,7,official-topology
edge-0788,person-0381,person-0368,7,official-topology
edge-0789,person-0382,person-0560,7,official-topology
edge-0790,person-0383,person-0427,7,official-topology
edge-0791,person-0384,person-0561,7,official-topology
edge-0792,person-0385,person-0373,7,official-topology
edge-0793,person-0386,person-0527,71,official-topology
edge-0794,person-0387,person-0421,71,official-topology
edge-0795,person-0388,person-0562,71,official-topology
edge-0796,person-0389,person-0388,71,official-topology
edge-0797,person-0390,person-0400,71,official-topology
edge-0798,person-0391,person-0407,7,official-topology
edge-0799,person-0392,person-0364,7,official-topology
edge-0800,person-0394,person-0379,7,official-topology
edge-0801,person-0395,person-0427,7,official-topology
edge-0802,person-0396,person-0379,7,official-topology
edge-0803,person-0397,person-0368,7,official-topology
edge-0804,person-0398,person-0367,7,official-topology
edge-0805,person-0400,person-0527,71,official-topology
edge-0806,person-0401,person-0562,71,official-topology
edge-0807,person-0402,person-0563,71,official-topology
edge-0808,person-0404,person-0526,71,official-topology
edge-0809,person-0407,person-0427,7,official-topology
edge-0810,person-0408,person-0423,7,official-topology
edge-0811,person-0409,person-0380,7,official-topology
edge-0812,person-0410,person-0379,7,official-topology
edge-0813,person-0411,person-0424,7,official-topology
edge-0814,person-0412,person-0381,7,official-topology
edge-0815,person-0413,person-0364,7,official-topology
edge-0816,person-0414,person-0363,71,official-topology
edge-0817,person-0415,person-0372,71,official-topology
edge-0818,person-0416,person-0559,71,official-topology
edge-0819,person-0417,person-0430,71,official-topology
edge-0820,person-0419,person-0360,71,official-topology
edge-0821,person-0420,person-0368,7,official-topology
edge-0822,person-0423,person-0362,7,official-topology
edge-0823,person-0424,person-0411,7,official-topology
edge-0824,person-0426,person-0362,7,official-topology
edge-0825,person-0427,person-0407,7,official-topology
edge-0826,person-0428,person-0429,7,official-topology
edge-0827,person-0429,person-0398,7,official-topology
edge-0828,person-0430,person-0414,71,official-topology
edge-0829,person-0431,person-0432,71,official-topology
edge-0830,person-0433,person-0390,71,official-topology
edge-0831,person-0436,person-0459,11,official-topology
edge-0832,person-0438,person-0450,11,official-topology
edge-0833,person-0439,person-0465,11,official-topology
edge-0834,person-0440,person-0449,11,official-topology
edge-0835,person-0441,person-0436,11,official-topology
edge-0836,person-0444,person-0467,11,official-topology
edge-0837,person-0446,person-0485,11,official-topology
edge-0838,person-0447,person-0532,11,official-topology
edge-0839,person-0448,person-0564,11,official-topology
edge-0840,person-0449,person-0488,11,official-topology
edge-0841,person-0450,person-0455,11,official-topology
edge-0842,person-0451,person-0518,11,official-topology
edge-0843,person-0453,person-0522,11,official-topology
edge-0844,person-0454,person-0485,11,official-topology
edge-0845,person-0455,person-0516,11,official-topology
edge-0846,person-0456,person-0453,11,official-topology
edge-0847,person-0457,person-0465,11,official-topology
edge-0848,person-0459,person-0474,11,official-topology
edge-0849,person-0460,person-0480,11,official-topology
edge-0850,person-0461,person-0468,11,official-topology
edge-0851,person-0463,person-0518,11,official-topology
edge-0852,person-0464,person-0516,11,official-topology
edge-0853,person-0465,person-0457,11,official-topology
edge-0854,person-0466,person-0518,11,official-topology
edge-0855,person-0468,person-0478,11,official-topology
edge-0856,person-0469,person-0454,11,official-topology
edge-0857,person-0470,person-0490,11,official-topology
edge-0858,person-0471,person-0565,11,official-topology
edge-0859,person-0473,person-0465,11,official-topology
edge-0860,person-0474,person-0516,11,official-topology
edge-0861,person-0476,person-0497,11,official-topology
edge-0862,person-0478,person-0468,11,official-topology
edge-0863,person-0480,person-0442,11,official-topology
edge-0864,person-0483,person-0461,11,official-topology
edge-0865,person-0485,person-0454,11,official-topology
edge-0866,person-0486,person-0450,11,official-topology
edge-0867,person-0488,person-0449,11,official-topology
edge-0868,person-0490,person-0461,11,official-topology
edge-0869,person-0493,person-0452,11,official-topology
edge-0870,person-0495,person-0478,11,official-topology
edge-0871,person-0499,person-0458,11,official-topology
edge-0872,person-0501,person-0566,11,official-topology
edge-0873,person-0504,person-0464,11,official-topology
edge-0874,person-0506,person-0497,11,official-topology
edge-0875,person-0508,person-0490,11,official-topology
edge-0876,person-0510,person-0485,11,official-topology
edge-0877,person-0512,person-0518,11,official-topology
edge-0878,person-0514,person-0528,11,official-topology
edge-0879,person-0516,person-0459,11,official-topology
edge-0880,person-0518,person-0466,11,official-topology
edge-0881,person-0520,person-0493,11,official-topology
edge-0882,person-0522,person-0478,11,official-topology
edge-0883,person-0524,person-0493,11,official-topology
edge-0884,person-0001,person-0063,12,official-topology
edge-0885,person-0004,person-0003,12,official-topology
edge-0886,person-0005,person-0047,12,official-topology
edge-0887,person-0006,person-0020,12,official-topology
edge-0888,person-0009,person-0037,12,official-topology
edge-0889,person-0010,person-0003,12,official-topology
edge-0890,person-0012,person-0055,12,official-topology
edge-0891,person-0013,person-0075,12,official-topology
edge-0892,person-0014,person-0024,12,official-topology
edge-0893,person-0015,person-0074,12,official-topology
edge-0894,person-0017,person-0018,12,official-topology
edge-0895,person-0019,person-0042,12,official-topology
edge-0896,person-0020,person-0047,12,official-topology
edge-0897,person-0022,person-0053,12,official-topology
edge-0898,person-0023,person-0019,12,official-topology
edge-0899,person-0024,person-0056,12,official-topology
edge-0900,person-0026,person-0074,12,official-topology
edge-0901,person-0027,person-0072,12,official-topology
edge-0902,person-0028,person-0047,12,official-topology
edge-0903,person-0029,person-0567,12,official-topology
edge-0904,person-0030,person-0567,12,official-topology
edge-0905,person-0031,person-0075,12,official-topology
edge-0906,person-0033,person-0070,12,official-topology
edge-0907,person-0035,person-0056,12,official-topology
edge-0908,person-0037,person-0022,12,official-topology
edge-0909,person-0040,person-0030,12,official-topology
edge-0910,person-0041,person-0009,12,official-topology
edge-0911,person-0042,person-0019,12,official-topology
edge-0912,person-0043,person-0063,12,official-topology
edge-0913,person-0044,person-0019,12,official-topology
edge-0914,person-0045,person-0009,12,official-topology
edge-0915,person-0047,person-0006,12,official-topology
edge-0916,person-0048,person-0006,12,official-topology
edge-0917,person-0050,person-0042,12,official-topology
edge-0918,person-0052,person-0004,12,official-topology
edge-0919,person-0055,person-0035,12,official-topology
edge-0920,person-0057,person-0074,12,official-topology
edge-0921,person-0058,person-0023,12,official-topology
edge-0922,person-0059,person-0536,12,official-topology
edge-0923,person-0060,person-0567,12,official-topology
edge-0924,person-0061,person-0037,12,official-topology
edge-0925,person-0063,person-0031,12,official-topology
edge-0926,person-0064,person-0019,12,official-topology
edge-0927,person-0065,person-0019,12,official-topology
edge-0928,person-0066,person-0068,12,official-topology
edge-0929,person-0067,person-0065,12,official-topology
edge-0930,person-0068,person-0069,12,official-topology
edge-0931,person-0072,person-0046,12,official-topology
edge-0932,person-0073,person-0067,12,official-topology
edge-0933,person-0076,person-0047,12,official-topology
edge-0934,person-0077,person-0043,12,official-topology
edge-0935,person-0078,person-0083,1,official-topology
edge-0936,person-0079,person-0089,1,official-topology
edge-0937,person-0080,person-0098,1,official-topology
edge-0938,person-0082,person-0098,1,official-topology
edge-0939,person-0083,person-0078,1,official-topology
edge-0940,person-0084,person-0099,1,official-topology
edge-0941,person-0085,person-0090,1,official-topology
edge-0942,person-0086,person-0097,1,official-topology
edge-0943,person-0087,person-0090,1,official-topology
edge-0944,person-0088,person-0098,1,official-topology
edge-0945,person-0089,person-0482,1,official-topology
edge-0946,person-0090,person-0087,1,official-topology
edge-0947,person-0093,person-0096,1,official-topology
edge-0948,person-0094,person-0099,1,official-topology
edge-0949,person-0096,person-0093,1,official-topology
edge-0950,person-0097,person-0098,1,official-topology
edge-0951,person-0098,person-0087,1,official-topology
edge-0952,person-0099,person-0090,1,official-topology
edge-0953,person-0100,person-0215,6,official-topology
edge-0954,person-0101,person-0221,6,official-topology
edge-0955,person-0102,person-0207,6,official-topology
edge-0956,person-0103,person-0221,6,official-topology
edge-0957,person-0104,person-0241,6,official-topology
edge-0958,person-0105,person-0241,6,official-topology
edge-0959,person-0106,person-0226,6,official-topology
edge-0960,person-0107,person-0217,6,official-topology
edge-0961,person-0108,person-0218,6,official-topology
edge-0962,person-0109,person-0568,6,official-topology
edge-0963,person-0110,person-0261,6,official-topology
edge-0964,person-0111,person-0248,6,official-topology
edge-0965,person-0112,person-0209,6,official-topology
edge-0966,person-0113,person-0208,6,official-topology
edge-0967,person-0114,person-0208,6,official-topology
edge-0968,person-0116,person-0147,3,official-topology
edge-0969,person-0117,person-0151,3,official-topology
edge-0970,person-0118,person-0138,3,official-topology
edge-0971,person-0120,person-0121,3,official-topology
edge-0972,person-0121,person-0152,3,official-topology
edge-0973,person-0123,person-0154,3,official-topology
edge-0974,person-0124,person-0151,3,official-topology
edge-0975,person-0125,person-0132,3,official-topology
edge-0976,person-0126,person-0142,3,official-topology
edge-0977,person-0127,person-0140,3,official-topology
edge-0978,person-0128,person-0491,3,official-topology
edge-0979,person-0130,person-0119,3,official-topology
edge-0980,person-0131,person-0124,3,official-topology
edge-0981,person-0132,person-0125,3,official-topology
edge-0982,person-0133,person-0141,3,official-topology
edge-0983,person-0134,person-0150,3,official-topology
edge-0984,person-0137,person-0133,3,official-topology
edge-0985,person-0138,person-0133,3,official-topology
edge-0986,person-0139,person-0491,3,official-topology
edge-0987,person-0140,person-0127,3,official-topology
edge-0988,person-0141,person-0569,3,official-topology
edge-0989,person-0142,person-0148,3,official-topology
edge-0990,person-0143,person-0129,3,official-topology
edge-0991,person-0144,person-0150,3,official-topology
edge-0992,person-0145,person-0125,3,official-topology
edge-0993,person-0146,person-0491,3,official-topology
edge-0994,person-0147,person-0118,3,official-topology
edge-0995,person-0150,person-0142,3,official-topology
edge-0996,person-0151,person-0124,3,official-topology
edge-0997,person-0153,person-0150,3,official-topology
edge-0998,person-0154,person-0153,3,official-topology
edge-0999,person-0158,person-0165,10,official-topology
edge-1000,person-0159,person-0193,10,official-topology
edge-1001,person-0160,person-0492,10,official-topology
edge-1002,person-0162,person-0177,10,official-topology
edge-1003,person-0164,person-0570,10,official-topology
edge-1004,person-0165,person-0197,10,official-topology
edge-1005,person-0167,person-0173,10,official-topology
edge-1006,person-0168,person-0185,10,official-topology
edge-1007,person-0169,person-0197,10,official-topology
edge-1008,person-0173,person-0162,10,official-topology
edge-1009,person-0174,person-0571,10,official-topology
edge-1010,person-0175,person-0158,10,official-topology
edge-1011,person-0176,person-0199,10,official-topology
edge-1012,person-0177,person-0166,10,official-topology
edge-1013,person-0178,person-0172,10,official-topology
edge-1014,person-0179,person-0572,10,official-topology
edge-1015,person-0180,person-0195,10,official-topology
edge-1016,person-0183,person-0197,10,official-topology
edge-1017,person-0185,person-0166,10,official-topology
edge-1018,person-0187,person-0181,10,official-topology
edge-1019,person-0188,person-0189,10,official-topology
edge-1020,person-0190,person-0546,10,official-topology
edge-1021,person-0192,person-0546,10,official-topology
edge-1022,person-0193,person-0158,10,official-topology
edge-1023,person-0195,person-0498,10,official-topology
edge-1024,person-0197,person-0199,10,official-topology
edge-1025,person-0198,person-0188,10,official-topology
edge-1026,person-0199,person-0197,10,official-topology
edge-1027,person-0200,person-0101,6,official-topology
edge-1028,person-0201,person-0231,6,official-topology
edge-1029,person-0202,person-0206,6,official-topology
edge-1030,person-0203,person-0208,6,official-topology
edge-1031,person-0205,person-0210,6,official-topology
edge-1032,person-0207,person-0103,6,official-topology
edge-1033,person-0208,person-0231,6,official-topology
edge-1034,person-0209,person-0262,6,official-topology
edge-1035,person-0210,person-0113,6,official-topology
edge-1036,person-0211,person-0212,6,official-topology
edge-1037,person-0213,person-0112,6,official-topology
edge-1038,person-0214,person-0110,6,official-topology
edge-1039,person-0215,person-0100,6,official-topology
edge-1040,person-0216,person-0206,6,official-topology
edge-1041,person-0217,person-0257,6,official-topology
edge-1042,person-0218,person-0256,6,official-topology
edge-1043,person-0220,person-0109,6,official-topology
edge-1044,person-0221,person-0235,6,official-topology
edge-1045,person-0223,person-0217,6,official-topology
edge-1046,person-0224,person-0204,6,official-topology
edge-1047,person-0225,person-0257,6,official-topology
edge-1048,person-0227,person-0111,6,official-topology
edge-1049,person-0228,person-0216,6,official-topology
edge-1050,person-0229,person-0216,6,official-topology
edge-1051,person-0230,person-0261,6,official-topology
edge-1052,person-0231,person-0261,6,official-topology
edge-1053,person-0232,person-0206,6,official-topology
edge-1054,person-0233,person-0111,6,official-topology
edge-1055,person-0235,person-0221,6,official-topology
edge-1056,person-0236,person-0224,6,official-topology
edge-1057,person-0237,person-0251,6,official-topology
edge-1058,person-0238,person-0103,6,official-topology
edge-1059,person-0239,person-0226,6,official-topology
edge-1060,person-0240,person-0201,6,official-topology
edge-1061,person-0241,person-0215,6,official-topology
edge-1062,person-0243,person-0262,6,official-topology
edge-1063,person-0244,person-0209,6,official-topology
edge-1064,person-0245,person-0216,6,official-topology
edge-1065,person-0246,person-0110,6,official-topology
edge-1066,person-0247,person-0104,6,official-topology
edge-1067,person-0248,person-0232,6,official-topology
edge-1068,person-0250,person-0215,6,official-topology
edge-1069,person-0251,person-0241,6,official-topology
edge-1070,person-0252,person-0224,6,official-topology
edge-1071,person-0253,person-0257,6,official-topology
edge-1072,person-0254,person-0226,6,official-topology
edge-1073,person-0255,person-0106,6,official-topology
edge-1074,person-0256,person-0218,6,official-topology
edge-1075,person-0257,person-0217,6,official-topology
edge-1076,person-0258,person-0231,6,official-topology
edge-1077,person-0260,person-0548,6,official-topology
edge-1078,person-0261,person-0263,6,official-topology
edge-1079,person-0262,person-0209,6,official-topology
edge-1080,person-0263,person-0201,6,official-topology
edge-1081,person-0264,person-0290,2,official-topology
edge-1082,person-0266,person-0290,2,official-topology
edge-1083,person-0267,person-0281,2,official-topology
edge-1084,person-0269,person-0265,2,official-topology
edge-1085,person-0270,person-0268,2,official-topology
edge-1086,person-0271,person-0281,2,official-topology
edge-1087,person-0272,person-0267,2,official-topology
edge-1088,person-0273,person-0290,2,official-topology
edge-1089,person-0275,person-0265,2,official-topology
edge-1090,person-0277,person-0290,2,official-topology
edge-1091,person-0278,person-0268,2,official-topology
edge-1092,person-0281,person-0272,2,official-topology
edge-1093,person-0283,person-0265,2,official-topology
edge-1094,person-0285,person-0271,2,official-topology
edge-1095,person-0286,person-0264,2,official-topology
edge-1096,person-0287,person-0274,2,official-topology
edge-1097,person-0289,person-0290,2,official-topology
edge-1098,person-0290,person-0271,2,official-topology
edge-1099,person-0291,person-0515,4,official-topology
edge-1100,person-0295,person-0316,4,official-topology
edge-1101,person-0297,person-0327,4,official-topology
edge-1102,person-0299,person-0313,4,official-topology
edge-1103,person-0300,person-0305,4,official-topology
edge-1104,person-0301,person-0515,4,official-topology
edge-1105,person-0302,person-0320,4,official-topology
edge-1106,person-0303,person-0324,4,official-topology
edge-1107,person-0304,person-0324,4,official-topology
edge-1108,person-0305,person-0573,4,official-topology
edge-1109,person-0306,person-0574,4,official-topology
edge-1110,person-0307,person-0327,4,official-topology
edge-1111,person-0308,person-0300,4,official-topology
edge-1112,person-0309,person-0575,4,official-topology
edge-1113,person-0310,person-0574,4,official-topology
edge-1114,person-0311,person-0303,4,official-topology
edge-1115,person-0313,person-0295,4,official-topology
edge-1116,person-0314,person-0336,4,official-topology
edge-1117,person-0315,person-0307,4,official-topology
edge-1118,person-0316,person-0576,4,official-topology
edge-1119,person-0317,person-0553,4,official-topology
edge-1120,person-0318,person-0299,4,official-topology
edge-1121,person-0319,person-0577,4,official-topology
edge-1122,person-0320,person-0314,4,official-topology
edge-1123,person-0321,person-0311,4,official-topology
edge-1124,person-0322,person-0295,4,official-topology
edge-1125,person-0323,person-0553,4,official-topology
edge-1126,person-0324,person-0300,4,official-topology
edge-1127,person-0325,person-0320,4,official-topology
edge-1128,person-0327,person-0315,4,official-topology
edge-1129,person-0328,person-0303,4,official-topology
edge-1130,person-0329,person-0554,4,official-topology
edge-1131,person-0330,person-0307,4,official-topology
edge-1132,person-0331,person-0299,4,official-topology
edge-1133,person-0332,person-0304,4,official-topology
edge-1134,person-0333,person-0291,4,official-topology
edge-1135,person-0334,person-0578,4,official-topology
edge-1136,person-0335,person-0552,4,official-topology
edge-1137,person-0336,person-0320,4,official-topology
edge-1138,person-0337,person-0354,5,official-topology
edge-1139,person-0338,person-0342,5,official-topology
edge-1140,person-0339,person-0579,5,official-topology
edge-1141,person-0340,person-0350,5,official-topology
edge-1142,person-0343,person-0579,5,official-topology
edge-1143,person-0345,person-0344,5,official-topology
edge-1144,person-0346,person-0338,5,official-topology
edge-1145,person-0347,person-0342,5,official-topology
edge-1146,person-0348,person-0340,5,official-topology
edge-1147,person-0349,person-0344,5,official-topology
edge-1148,person-0351,person-0337,5,official-topology
edge-1149,person-0352,person-0338,5,official-topology
edge-1150,person-0355,person-0555,5,official-topology
edge-1151,person-0356,person-0557,5,official-topology
edge-1152,person-0357,person-0338,5,official-topology
edge-1153,person-0358,person-0367,7,official-topology
edge-1154,person-0362,person-0398,7,official-topology
edge-1155,person-0363,person-0414,71,official-topology
edge-1156,person-0365,person-0407,7,official-topology
edge-1157,person-0367,person-0361,7,official-topology
edge-1158,person-0368,person-0412,7,official-topology
edge-1159,person-0369,person-0366,71,official-topology
edge-1160,person-0371,person-0411,7,official-topology
edge-1161,person-0372,person-0403,71,official-topology
edge-1162,person-0373,person-0407,7,official-topology
edge-1163,person-0374,person-0422,7,official-topology
edge-1164,person-0375,person-0414,71,official-topology
edge-1165,person-0377,person-0412,7,official-topology
edge-1166,person-0379,person-0410,7,official-topology
edge-1167,person-0380,person-0424,7,official-topology
edge-1168,person-0381,person-0412,7,official-topology
edge-1169,person-0382,person-0373,7,official-topology
edge-1170,person-0383,person-0407,7,official-topology
edge-1171,person-0384,person-0580,7,official-topology
edge-1172,person-0386,person-0400,71,official-topology
edge-1173,person-0387,person-0402,71,official-topology
edge-1174,person-0388,person-0581,71,official-topology
edge-1175,person-0389,person-0418,71,official-topology
edge-1176,person-0390,person-0386,71,official-topology
edge-1177,person-0391,person-0395,7,official-topology
edge-1178,person-0394,person-0396,7,official-topology
edge-1179,person-0395,person-0525,7,official-topology
edge-1180,person-0396,person-0394,7,official-topology
edge-1181,person-0397,person-0380,7,official-topology
edge-1182,person-0400,person-0386,71,official-topology
edge-1183,person-0401,person-0405,71,official-topology
edge-1184,person-0402,person-0387,71,official-topology
edge-1185,person-0404,person-0414,71,official-topology
edge-1186,person-0407,person-0383,7,official-topology
edge-1187,person-0408,person-0582,7,official-topology
edge-1188,person-0409,person-0411,7,official-topology
edge-1189,person-0410,person-0394,7,official-topology
edge-1190,person-0411,person-0380,7,official-topology
edge-1191,person-0412,person-0368,7,official-topology
edge-1192,person-0413,person-0370,7,official-topology
edge-1193,person-0414,person-0417,71,official-topology
edge-1194,person-0415,person-0403,71,official-topology
edge-1195,person-0416,person-0527,71,official-topology
edge-1196,person-0419,person-0403,71,official-topology
edge-1197,person-0420,person-0412,7,official-topology
edge-1198,person-0423,person-0582,7,official-topology
edge-1199,person-0424,person-0371,7,official-topology
edge-1200,person-0427,person-0383,7,official-topology
edge-1201,person-0428,person-0362,7,official-topology
edge-1202,person-0431,person-0415,71,official-topology
edge-1203,person-0433,person-0432,71,official-topology
edge-1204,person-0436,person-0583,11,official-topology
edge-1205,person-0438,person-0474,11,official-topology
edge-1206,person-0439,person-0441,11,official-topology
edge-1207,person-0440,person-0488,11,official-topology
edge-1208,person-0441,person-0486,11,official-topology
edge-1209,person-0446,person-0508,11,official-topology
edge-1210,person-0447,person-0520,11,official-topology
edge-1211,person-0448,person-0514,11,official-topology
edge-1212,person-0449,person-0435,11,official-topology
edge-1213,person-0450,person-0438,11,official-topology
edge-1214,person-0451,person-0520,11,official-topology
edge-1215,person-0453,person-0466,11,official-topology
edge-1216,person-0454,person-0510,11,official-topology
edge-1217,person-0455,person-0584,11,official-topology
edge-1218,person-0457,person-0440,11,official-topology
edge-1219,person-0459,person-0516,11,official-topology
edge-1220,person-0460,person-0462,11,official-topology
edge-1221,person-0463,person-0466,11,official-topology
edge-1222,person-0464,person-0455,11,official-topology
edge-1223,person-0465,person-0473,11,official-topology
edge-1224,person-0466,person-0453,11,official-topology
edge-1225,person-0468,person-0461,11,official-topology
edge-1226,person-0470,person-0446,11,official-topology
edge-1227,person-0471,person-0564,11,official-topology
edge-1228,person-0473,person-0457,11,official-topology
edge-1229,person-0474,person-0459,11,official-topology
edge-1230,person-0476,person-0524,11,official-topology
edge-1231,person-0478,person-0461,11,official-topology
edge-1232,person-0485,person-0510,11,official-topology
edge-1233,person-0486,person-0516,11,official-topology
edge-1234,person-0488,person-0440,11,official-topology
edge-1235,person-0490,person-0485,11,official-topology
edge-1236,person-0493,person-0497,11,official-topology
edge-1237,person-0495,person-0468,11,official-topology
edge-1238,person-0499,person-0501,11,official-topology
edge-1239,person-0501,person-0502,11,official-topology
edge-1240,person-0504,person-0524,11,official-topology
edge-1241,person-0506,person-0524,11,official-topology
edge-1242,person-0508,person-0470,11,official-topology
edge-1243,person-0512,person-0532,11,official-topology
edge-1244,person-0514,person-0564,11,official-topology
edge-1245,person-0516,person-0455,11,official-topology
edge-1246,person-0518,person-0512,11,official-topology
edge-1247,person-0520,person-0524,11,official-topology
edge-1248,person-0522,person-0463,11,official-topology
edge-1249,person-0524,person-0520,11,official-topology
edge-1250,person-0001,person-0062,12,official-topology
edge-1251,person-0005,person-0020,12,official-topology
edge-1252,person-0006,person-0077,12,official-topology
edge-1253,person-0009,person-0022,12,official-topology
edge-1254,person-0010,person-0585,12,official-topology
edge-1255,person-0012,person-0056,12,official-topology
edge-1256,person-0013,person-0536,12,official-topology
edge-1257,person-0015,person-0027,12,official-topology
edge-1258,person-0017,person-0031,12,official-topology
edge-1259,person-0020,person-0006,12,official-topology
edge-1260,person-0022,person-0004,12,official-topology
edge-1261,person-0023,person-0044,12,official-topology
edge-1262,person-0026,person-0065,12,official-topology
edge-1263,person-0027,person-0060,12,official-topology
edge-1264,person-0028,person-0076,12,official-topology
edge-1265,person-0029,person-0028,12,official-topology
edge-1266,person-0031,person-0063,12,official-topology
edge-1267,person-0033,person-0067,12,official-topology
edge-1268,person-0035,person-0475,12,official-topology
edge-1269,person-0037,person-0072,12,official-topology
edge-1270,person-0040,person-0479,12,official-topology
edge-1271,person-0041,person-0022,12,official-topology
edge-1272,person-0042,person-0065,12,official-topology
edge-1273,person-0044,person-0023,12,official-topology
edge-1274,person-0045,person-0024,12,official-topology
edge-1275,person-0047,person-0020,12,official-topology
edge-1276,person-0048,person-0020,12,official-topology
edge-1277,person-0052,person-0533,12,official-topology
edge-1278,person-0055,person-0024,12,official-topology
edge-1279,person-0057,person-0015,12,official-topology
edge-1280,person-0058,person-0065,12,official-topology
edge-1281,person-0059,person-0586,12,official-topology
edge-1282,person-0060,person-0062,12,official-topology
edge-1283,person-0061,person-0016,12,official-topology
edge-1284,person-0063,person-0028,12,official-topology
edge-1285,person-0064,person-0065,12,official-topology
edge-1286,person-0065,person-0067,12,official-topology
edge-1287,person-0066,person-0536,12,official-topology
edge-1288,person-0072,person-0037,12,official-topology
edge-1289,person-0076,person-0006,12,official-topology
edge-1290,person-0077,person-0028,12,official-topology
edge-1291,person-0078,person-0088,1,official-topology
edge-1292,person-0079,person-0587,1,official-topology
edge-1293,person-0080,person-0078,1,official-topology
edge-1294,person-0083,person-0588,1,official-topology
edge-1295,person-0088,person-0078,1,official-topology
edge-1296,person-0089,person-0538,1,official-topology
edge-1297,person-0090,person-0099,1,official-topology
edge-1298,person-0094,person-0090,1,official-topology
edge-1299,person-0096,person-0078,1,official-topology
edge-1300,person-0098,person-0088,1,official-topology
edge-1301,person-0099,person-0085,1,official-topology
edge-1302,person-0100,person-0105,6,official-topology
edge-1303,person-0101,person-0224,6,official-topology
edge-1304,person-0102,person-0254,6,official-topology
edge-1305,person-0103,person-0235,6,official-topology
edge-1306,person-0104,person-0100,6,official-topology
edge-1307,person-0105,person-0250,6,official-topology
edge-1308,person-0106,person-0239,6,official-topology
edge-1309,person-0107,person-0257,6,official-topology
edge-1310,person-0108,person-0256,6,official-topology
edge-1311,person-0109,person-0237,6,official-topology
edge-1312,person-0111,person-0206,6,official-topology
edge-1313,person-0112,person-0262,6,official-topology
edge-1314,person-0113,person-0202,6,official-topology
edge-1315,person-0114,person-0201,6,official-topology
edge-1316,person-0116,person-0489,3,official-topology
edge-1317,person-0117,person-0145,3,official-topology
edge-1318,person-0118,person-0144,3,official-topology
edge-1319,person-0120,person-0129,3,official-topology
edge-1320,person-0121,person-0129,3,official-topology
edge-1321,person-0123,person-0150,3,official-topology
edge-1322,person-0125,person-0145,3,official-topology
edge-1323,person-0127,person-0142,3,official-topology
edge-1324,person-0128,person-0541,3,official-topology
edge-1325,person-0130,person-0150,3,official-topology
edge-1326,person-0133,person-0146,3,official-topology
edge-1327,person-0134,person-0122,3,official-topology
edge-1328,person-0137,person-0139,3,official-topology
edge-1329,person-0138,person-0147,3,official-topology
edge-1330,person-0139,person-0152,3,official-topology
edge-1331,person-0140,person-0150,3,official-topology
edge-1332,person-0141,person-0119,3,official-topology
edge-1333,person-0142,person-0132,3,official-topology
edge-1334,person-0144,person-0142,3,official-topology
edge-1335,person-0146,person-0541,3,official-topology
edge-1336,person-0147,person-0133,3,official-topology
edge-1337,person-0151,person-0145,3,official-topology
edge-1338,person-0154,person-0134,3,official-topology
edge-1339,person-0158,person-0169,10,official-topology
edge-1340,person-0159,person-0197,10,official-topology
edge-1341,person-0160,person-0193,10,official-topology
edge-1342,person-0162,person-0173,10,official-topology
edge-1343,person-0164,person-0180,10,official-topology
edge-1344,person-0165,person-0158,10,official-topology
edge-1345,person-0167,person-0571,10,official-topology
edge-1346,person-0168,person-0589,10,official-topology
edge-1347,person-0169,person-0199,10,official-topology
edge-1348,person-0173,person-0166,10,official-topology
edge-1349,person-0174,person-0159,10,official-topology
edge-1350,person-0177,person-0546,10,official-topology
edge-1351,person-0178,person-0193,10,official-topology
edge-1352,person-0179,person-0186,10,official-topology
edge-1353,person-0180,person-0179,10,official-topology
edge-1354,person-0183,person-0590,10,official-topology
edge-1355,person-0185,person-0168,10,official-topology
edge-1356,person-0187,person-0498,10,official-topology
edge-1357,person-0190,person-0179,10,official-topology
edge-1358,person-0192,person-0195,10,official-topology
edge-1359,person-0193,person-0173,10,official-topology
edge-1360,person-0195,person-0546,10,official-topology
edge-1361,person-0200,person-0249,6,official-topology
edge-1362,person-0201,person-0210,6,official-topology
edge-1363,person-0202,person-0210,6,official-topology
edge-1364,person-0203,person-0201,6,official-topology
edge-1365,person-0205,person-0261,6,official-topology
edge-1366,person-0207,person-0102,6,official-topology
edge-1367,person-0208,person-0210,6,official-topology
edge-1368,person-0209,person-0110,6,official-topology
edge-1369,person-0211,person-0256,6,official-topology
edge-1370,person-0213,person-0248,6,official-topology
edge-1371,person-0215,person-0250,6,official-topology
edge-1372,person-0216,person-0201,6,official-topology
edge-1373,person-0217,person-0223,6,official-topology
edge-1374,person-0223,person-0257,6,official-topology
edge-1375,person-0225,person-0223,6,official-topology
edge-1376,person-0228,person-0229,6,official-topology
edge-1377,person-0229,person-0228,6,official-topology
edge-1378,person-0230,person-0259,6,official-topology
edge-1379,person-0231,person-0203,6,official-topology
edge-1380,person-0232,person-0111,6,official-topology
edge-1381,person-0233,person-0219,6,official-topology
edge-1382,person-0235,person-0212,6,official-topology
edge-1383,person-0236,person-0212,6,official-topology
edge-1384,person-0237,person-0102,6,official-topology
edge-1385,person-0238,person-0221,6,official-topology
edge-1386,person-0240,person-0261,6,official-topology
edge-1387,person-0241,person-0105,6,official-topology
edge-1388,person-0243,person-0110,6,official-topology
edge-1389,person-0244,person-0243,6,official-topology
edge-1390,person-0245,person-0229,6,official-topology
edge-1391,person-0248,person-0206,6,official-topology
edge-1392,person-0250,person-0105,6,official-topology
edge-1393,person-0251,person-0250,6,official-topology
edge-1394,person-0253,person-0250,6,official-topology
edge-1395,person-0254,person-0239,6,official-topology
edge-1396,person-0255,person-0254,6,official-topology
edge-1397,person-0256,person-0212,6,official-topology
edge-1398,person-0257,person-0223,6,official-topology
edge-1399,person-0260,person-0231,6,official-topology
edge-1400,person-0261,person-0114,6,official-topology
edge-1401,person-0262,person-0112,6,official-topology
edge-1402,person-0263,person-0203,6,official-topology
edge-1403,person-0264,person-0286,2,official-topology
edge-1404,person-0267,person-0271,2,official-topology
edge-1405,person-0269,person-0286,2,official-topology
edge-1406,person-0271,person-0265,2,official-topology
edge-1407,person-0272,person-0281,2,official-topology
edge-1408,person-0273,person-0270,2,official-topology
edge-1409,person-0278,person-0288,2,official-topology
edge-1410,person-0281,person-0274,2,official-topology
edge-1411,person-0285,person-0286,2,official-topology
edge-1412,person-0286,person-0290,2,official-topology
edge-1413,person-0287,person-0271,2,official-topology
edge-1414,person-0290,person-0591,2,official-topology
edge-1415,person-0291,person-0298,4,official-topology
edge-1416,person-0295,person-0592,4,official-topology
edge-1417,person-0297,person-0320,4,official-topology
edge-1418,person-0301,person-0323,4,official-topology
edge-1419,person-0304,person-0573,4,official-topology
edge-1420,person-0306,person-0316,4,official-topology
edge-1421,person-0309,person-0593,4,official-topology
edge-1422,person-0310,person-0552,4,official-topology
edge-1423,person-0313,person-0577,4,official-topology
edge-1424,person-0314,person-0325,4,official-topology
edge-1425,person-0315,person-0507,4,official-topology
edge-1426,person-0316,person-0593,4,official-topology
edge-1427,person-0317,person-0594,4,official-topology
edge-1428,person-0318,person-0311,4,official-topology
edge-1429,person-0319,person-0322,4,official-topology
edge-1430,person-0320,person-0325,4,official-topology
edge-1431,person-0321,person-0301,4,official-topology
edge-1432,person-0322,person-0577,4,official-topology
edge-1433,person-0323,person-0519,4,official-topology
edge-1434,person-0324,person-0303,4,official-topology
edge-1435,person-0325,person-0306,4,official-topology
edge-1436,person-0327,person-0304,4,official-topology
edge-1437,person-0329,person-0573,4,official-topology
edge-1438,person-0330,person-0549,4,official-topology
edge-1439,person-0331,person-0301,4,official-topology
edge-1440,person-0333,person-0577,4,official-topology
edge-1441,person-0334,person-0322,4,official-topology
edge-1442,person-0335,person-0593,4,official-topology
edge-1443,person-0336,person-0306,4,official-topology
edge-1444,person-0337,person-0347,5,official-topology
edge-1445,person-0339,person-0346,5,official-topology
edge-1446,person-0340,person-0353,5,official-topology
edge-1447,person-0343,person-0339,5,official-topology
edge-1448,person-0345,person-0555,5,official-topology
edge-1449,person-0346,person-0339,5,official-topology
edge-1450,person-0348,person-0357,5,official-topology
edge-1451,person-0349,person-0557,5,official-topology
edge-1452,person-0351,person-0342,5,official-topology
edge-1453,person-0352,person-0346,5,official-topology
edge-1454,person-0355,person-0345,5,official-topology
edge-1455,person-0356,person-0353,5,official-topology
edge-1456,person-0357,person-0557,5,official-topology
edge-1457,person-0363,person-0596,71,official-topology
edge-1458,person-0365,person-0393,7,official-topology
edge-1459,person-0367,person-0398,7,official-topology
edge-1460,person-0369,person-0432,71,official-topology
edge-1461,person-0371,person-0409,7,official-topology
edge-1462,person-0372,person-0418,71,official-topology
edge-1463,person-0373,person-0371,7,official-topology
edge-1464,person-0374,person-0385,7,official-topology
edge-1465,person-0375,person-0416,71,official-topology
edge-1466,person-0377,person-0420,7,official-topology
edge-1467,person-0380,person-0411,7,official-topology
edge-1468,person-0381,person-0377,7,official-topology
edge-1469,person-0383,person-0395,7,official-topology
edge-1470,person-0387,person-0431,71,official-topology
edge-1471,person-0388,person-0404,71,official-topology
edge-1472,person-0391,person-0359,7,official-topology
edge-1473,person-0395,person-0407,7,official-topology
edge-1474,person-0396,person-0410,7,official-topology
edge-1475,person-0397,person-0412,7,official-topology
edge-1476,person-0401,person-0372,71,official-topology
edge-1477,person-0404,person-0415,71,official-topology
edge-1478,person-0407,person-0395,7,official-topology
edge-1479,person-0409,person-0371,7,official-topology
edge-1480,person-0410,person-0396,7,official-topology
edge-1481,person-0411,person-0409,7,official-topology
edge-1482,person-0412,person-0377,7,official-topology
edge-1483,person-0414,person-0430,71,official-topology
edge-1484,person-0416,person-0414,71,official-topology
edge-1485,person-0419,person-0415,71,official-topology
edge-1486,person-0420,person-0377,7,official-topology
edge-1487,person-0423,person-0426,7,official-topology
edge-1488,person-0427,person-0395,7,official-topology
edge-1489,person-0428,person-0376,7,official-topology
edge-1490,person-0431,person-0434,71,official-topology
edge-1491,person-0433,person-0386,71,official-topology
edge-1492,person-0438,person-0436,11,official-topology
edge-1493,person-0441,person-0516,11,official-topology
edge-1494,person-0447,person-0512,11,official-topology
edge-1495,person-0448,person-0597,11,official-topology
edge-1496,person-0450,person-0436,11,official-topology
edge-1497,person-0451,person-0447,11,official-topology
edge-1498,person-0453,person-0463,11,official-topology
edge-1499,person-0454,person-0453,11,official-topology
edge-1500,person-0459,person-0455,11,official-topology
edge-1501,person-0463,person-0453,11,official-topology
edge-1502,person-0464,person-0436,11,official-topology
edge-1503,person-0465,person-0439,11,official-topology
edge-1504,person-0466,person-0463,11,official-topology
edge-1505,person-0470,person-0485,11,official-topology
edge-1506,person-0471,person-0598,11,official-topology
edge-1507,person-0473,person-0531,11,official-topology
edge-1508,person-0485,person-0599,11,official-topology
edge-1509,person-0486,person-0438,11,official-topology
edge-1510,person-0490,person-0454,11,official-topology
edge-1511,person-0493,person-0524,11,official-topology
edge-1512,person-0495,person-0461,11,official-topology
edge-1513,person-0499,person-0600,11,official-topology
edge-1514,person-0501,person-0499,11,official-topology
edge-1515,person-0504,person-0445,11,official-topology
edge-1516,person-0506,person-0478,11,official-topology
edge-1517,person-0508,person-0446,11,official-topology
edge-1518,person-0512,person-0442,11,official-topology
edge-1519,person-0514,person-0597,11,official-topology
edge-1520,person-0516,person-0436,11,official-topology
edge-1521,person-0518,person-0463,11,official-topology
edge-1522,person-0520,person-0468,11,official-topology
edge-1523,person-0524,person-0468,11,official-topology
edge-1524,person-0005,person-0076,12,official-topology
edge-1525,person-0006,person-0076,12,official-topology
edge-1526,person-0009,person-0004,12,official-topology
edge-1527,person-0010,person-0041,12,official-topology
edge-1528,person-0012,person-0035,12,official-topology
edge-1529,person-0015,person-0044,12,official-topology
edge-1530,person-0017,person-0020,12,official-topology
edge-1531,person-0020,person-0076,12,official-topology
edge-1532,person-0022,person-0533,12,official-topology
edge-1533,person-0023,person-0068,12,official-topology
edge-1534,person-0026,person-0015,12,official-topology
edge-1535,person-0029,person-0076,12,official-topology
edge-1536,person-0031,person-0062,12,official-topology
edge-1537,person-0033,person-0072,12,official-topology
edge-1538,person-0035,person-0059,12,official-topology
edge-1539,person-0037,person-0016,12,official-topology
edge-1540,person-0040,person-0534,12,official-topology
edge-1541,person-0042,person-0072,12,official-topology
edge-1542,person-0044,person-0042,12,official-topology
edge-1543,person-0045,person-0004,12,official-topology
edge-1544,person-0047,person-0076,12,official-topology
edge-1545,person-0048,person-0077,12,official-topology
edge-1546,person-0052,person-0003,12,official-topology
edge-1547,person-0058,person-0059,12,official-topology
edge-1548,person-0059,person-0069,12,official-topology
edge-1549,person-0061,person-0025,12,official-topology
edge-1550,person-0063,person-0062,12,official-topology
edge-1551,person-0064,person-0023,12,official-topology
edge-1552,person-0065,person-0050,12,official-topology
edge-1553,person-0072,person-0027,12,official-topology
edge-1554,person-0076,person-0020,12,official-topology
edge-1555,person-0077,person-0006,12,official-topology
edge-1556,person-0078,person-0091,1,official-topology
edge-1557,person-0080,person-0096,1,official-topology
edge-1558,person-0083,person-0097,1,official-topology
edge-1559,person-0088,person-0587,1,official-topology
edge-1560,person-0089,person-0587,1,official-topology
edge-1561,person-0090,person-0097,1,official-topology
edge-1562,person-0094,person-0097,1,official-topology
edge-1563,person-0096,person-0090,1,official-topology
edge-1564,person-0098,person-0078,1,official-topology
edge-1565,person-0099,person-0084,1,official-topology
edge-1566,person-0100,person-0104,6,official-topology
edge-1567,person-0102,person-0221,6,official-topology
edge-1568,person-0103,person-0238,6,official-topology
edge-1569,person-0104,person-0215,6,official-topology
edge-1570,person-0107,person-0223,6,official-topology
edge-1571,person-0112,person-0110,6,official-topology
edge-1572,person-0113,person-0210,6,official-topology
edge-1573,person-0114,person-0261,6,official-topology
edge-1574,person-0117,person-0125,3,official-topology
edge-1575,person-0118,person-0133,3,official-topology
edge-1576,person-0123,person-0122,3,official-topology
edge-1577,person-0128,person-0147,3,official-topology
edge-1578,person-0130,person-0145,3,official-topology
edge-1579,person-0133,person-0152,3,official-topology
edge-1580,person-0137,person-0147,3,official-topology
edge-1581,person-0139,person-0147,3,official-topology
edge-1582,person-0141,person-0133,3,official-topology
edge-1583,person-0142,person-0150,3,official-topology
edge-1584,person-0144,person-0130,3,official-topology
edge-1585,person-0146,person-0133,3,official-topology
edge-1586,person-0147,person-0139,3,official-topology
edge-1587,person-0151,person-0125,3,official-topology
edge-1588,person-0154,person-0122,3,official-topology
edge-1589,person-0158,person-0173,10,official-topology
edge-1590,person-0159,person-0571,10,official-topology
edge-1591,person-0160,person-0183,10,official-topology
edge-1592,person-0164,person-0571,10,official-topology
edge-1593,person-0167,person-0183,10,official-topology
edge-1594,person-0168,person-0177,10,official-topology
edge-1595,person-0169,person-0183,10,official-topology
edge-1596,person-0173,person-0158,10,official-topology
edge-1597,person-0177,person-0181,10,official-topology
edge-1598,person-0178,person-0173,10,official-topology
edge-1599,person-0179,person-0601,10,official-topology
edge-1600,person-0180,person-0192,10,official-topology
edge-1601,person-0183,person-0160,10,official-topology
edge-1602,person-0185,person-0164,10,official-topology
edge-1603,person-0187,person-0189,10,official-topology
edge-1604,person-0190,person-0602,10,official-topology
edge-1605,person-0192,person-0179,10,official-topology
edge-1606,person-0193,person-0195,10,official-topology
edge-1607,person-0195,person-0180,10,official-topology
edge-1608,person-0200,person-0221,6,official-topology
edge-1609,person-0201,person-0217,6,official-topology
edge-1610,person-0202,person-0113,6,official-topology
edge-1611,person-0203,person-0261,6,official-topology
edge-1612,person-0205,person-0113,6,official-topology
edge-1613,person-0207,person-0221,6,official-topology
edge-1614,person-0208,person-0261,6,official-topology
edge-1615,person-0213,person-0262,6,official-topology
edge-1616,person-0215,person-0104,6,official-topology
edge-1617,person-0217,person-0107,6,official-topology
edge-1618,person-0223,person-0107,6,official-topology
edge-1619,person-0225,person-0107,6,official-topology
edge-1620,person-0228,person-0259,6,official-topology
edge-1621,person-0229,person-0206,6,official-topology
edge-1622,person-0230,person-0106,6,official-topology
edge-1623,person-0231,person-0260,6,official-topology
edge-1624,person-0235,person-0256,6,official-topology
edge-1625,person-0236,person-0256,6,official-topology
edge-1626,person-0237,person-0238,6,official-topology
edge-1627,person-0238,person-0235,6,official-topology
edge-1628,person-0240,person-0203,6,official-topology
edge-1629,person-0241,person-0104,6,official-topology
edge-1630,person-0243,person-0225,6,official-topology
edge-1631,person-0244,person-0262,6,official-topology
edge-1632,person-0245,person-0110,6,official-topology
edge-1633,person-0248,person-0111,6,official-topology
edge-1634,person-0251,person-0263,6,official-topology
edge-1635,person-0253,person-0215,6,official-topology
edge-1636,person-0255,person-0226,6,official-topology
edge-1637,person-0257,person-0107,6,official-topology
edge-1638,person-0260,person-0261,6,official-topology
edge-1639,person-0261,person-0201,6,official-topology
edge-1640,person-0262,person-0243,6,official-topology
edge-1641,person-0264,person-0282,2,official-topology
edge-1642,person-0269,person-0282,2,official-topology
edge-1643,person-0271,person-0282,2,official-topology
edge-1644,person-0272,person-0271,2,official-topology
edge-1645,person-0278,person-0274,2,official-topology
edge-1646,person-0281,person-0271,2,official-topology
edge-1647,person-0285,person-0282,2,official-topology
edge-1648,person-0286,person-0282,2,official-topology
edge-1649,person-0287,person-0281,2,official-topology
edge-1650,person-0291,person-0593,4,official-topology
edge-1651,person-0295,person-0313,4,official-topology
edge-1652,person-0297,person-0306,4,official-topology
edge-1653,person-0301,person-0316,4,official-topology
edge-1654,person-0306,person-0325,4,official-topology
edge-1655,person-0309,person-0322,4,official-topology
edge-1656,person-0310,person-0322,4,official-topology
edge-1657,person-0313,person-0322,4,official-topology
edge-1658,person-0315,person-0519,4,official-topology
edge-1659,person-0316,person-0301,4,official-topology
edge-1660,person-0317,person-0320,4,official-topology
edge-1661,person-0318,person-0592,4,official-topology
edge-1662,person-0319,person-0313,4,official-topology
edge-1663,person-0320,person-0306,4,official-topology
edge-1664,person-0321,person-0576,4,official-topology
edge-1665,person-0322,person-0313,4,official-topology
edge-1666,person-0323,person-0301,4,official-topology
edge-1667,person-0327,person-0573,4,official-topology
edge-1668,person-0329,person-0603,4,official-topology
edge-1669,person-0330,person-0299,4,official-topology
edge-1670,person-0332,person-0306,4,official-topology
edge-1671,person-0333,person-0320,4,official-topology
edge-1672,person-0334,person-0294,4,official-topology
edge-1673,person-0335,person-0603,4,official-topology
edge-1674,person-0336,person-0314,4,official-topology
edge-1675,person-0337,person-0342,5,official-topology
edge-1676,person-0339,person-0523,5,official-topology
edge-1677,person-0343,person-0352,5,official-topology
edge-1678,person-0345,person-0557,5,official-topology
edge-1679,person-0346,person-0352,5,official-topology
edge-1680,person-0349,person-0345,5,official-topology
edge-1681,person-0352,person-0339,5,official-topology
edge-1682,person-0356,person-0345,5,official-topology
edge-1683,person-0357,person-0352,5,official-topology
edge-1684,person-0365,person-0374,7,official-topology
edge-1685,person-0368,person-0420,7,official-topology
edge-1686,person-0369,person-0434,71,official-topology
edge-1687,person-0371,person-0385,7,official-topology
edge-1688,person-0372,person-0415,71,official-topology
edge-1689,person-0373,person-0385,7,official-topology
edge-1690,person-0374,person-0373,7,official-topology
edge-1691,person-0377,person-0410,7,official-topology
edge-1692,person-0380,person-0428,7,official-topology
edge-1693,person-0381,person-0420,7,official-topology
edge-1694,person-0383,person-0373,7,official-topology
edge-1695,person-0387,person-0563,71,official-topology
edge-1696,person-0388,person-0405,71,official-topology
edge-1697,person-0395,person-0383,7,official-topology
edge-1698,person-0397,person-0411,7,official-topology
edge-1699,person-0401,person-0418,71,official-topology
edge-1700,person-0404,person-0433,71,official-topology
edge-1701,person-0407,person-0373,7,official-topology
edge-1702,person-0412,person-0420,7,official-topology
edge-1703,person-0414,person-0433,71,official-topology
edge-1704,person-0416,person-0375,71,official-topology
edge-1705,person-0419,person-0596,71,official-topology
edge-1706,person-0427,person-0373,7,official-topology
edge-1707,person-0428,person-0422,7,official-topology
edge-1708,person-0431,person-0387,71,official-topology
edge-1709,person-0433,person-0387,71,official-topology
edge-1710,person-0438,person-0486,11,official-topology
edge-1711,person-0441,person-0459,11,official-topology
edge-1712,person-0447,person-0451,11,official-topology
edge-1713,person-0448,person-0598,11,official-topology
edge-1714,person-0450,person-0486,11,official-topology
edge-1715,person-0453,person-0456,11,official-topology
edge-1716,person-0454,person-0599,11,official-topology
edge-1717,person-0463,person-0456,11,official-topology
edge-1718,person-0464,person-0459,11,official-topology
edge-1719,person-0465,person-0604,11,official-topology
edge-1720,person-0466,person-0456,11,official-topology
edge-1721,person-0470,person-0508,11,official-topology
edge-1722,person-0471,person-0448,11,official-topology
edge-1723,person-0473,person-0564,11,official-topology
edge-1724,person-0485,person-0508,11,official-topology
edge-1725,person-0486,person-0436,11,official-topology
edge-1726,person-0490,person-0469,11,official-topology
edge-1727,person-0493,person-0468,11,official-topology
edge-1728,person-0495,person-0483,11,official-topology
edge-1729,person-0499,person-0520,11,official-topology
edge-1730,person-0501,person-0600,11,official-topology
edge-1731,person-0506,person-0468,11,official-topology
edge-1732,person-0512,person-0520,11,official-topology
edge-1733,person-0514,person-0598,11,official-topology
edge-1734,person-0516,person-0584,11,official-topology
edge-1735,person-0518,person-0456,11,official-topology
edge-1736,person-0520,person-0451,11,official-topology
edge-1737,person-0524,person-0508,11,official-topology
`, Qo = `key,source_row,observed,perceived,provenance
person-0002,2,1,3,official-record
person-0003,3,4,1,official-record
person-0004,4,5,5,official-record
person-0005,5,6,5,official-record
person-0006,6,5,2,official-record
person-0007,7,1,0,official-record
person-0008,8,0,3,official-record
person-0009,9,4,4,official-record
person-0011,11,2,2,official-record
person-0012,12,1,4,official-record
person-0013,13,2,3,official-record
person-0014,14,3,4,official-record
person-0015,15,2,5,official-record
person-0016,16,2,0,official-record
person-0017,17,2,3,official-record
person-0018,18,2,1,official-record
person-0019,19,6,6,official-record
person-0020,20,6,5,official-record
person-0021,21,2,1,official-record
person-0022,22,4,0,official-record
person-0023,23,6,4,official-record
person-0024,24,4,4,official-record
person-0025,25,2,1,official-record
person-0026,26,8,4,official-record
person-0027,27,3,2,official-record
person-0028,28,8,5,official-record
person-0029,29,0,2,official-record
person-0030,30,1,2,official-record
person-0031,31,2,7,official-record
person-0032,32,0,2,official-record
person-0033,33,1,5,official-record
person-0034,34,1,2,official-record
person-0035,35,2,5,official-record
person-0036,36,1,2,official-record
person-0037,37,6,6,official-record
person-0038,38,0,0,official-record
person-0039,39,1,2,official-record
person-0040,40,0,2,official-record
person-0041,41,2,0,official-record
person-0042,42,3,4,official-record
person-0043,43,3,2,official-record
person-0044,44,3,3,official-record
person-0045,45,5,2,official-record
person-0046,46,3,1,official-record
person-0047,47,4,5,official-record
person-0048,48,0,3,official-record
person-0049,49,4,5,official-record
person-0050,50,1,3,official-record
person-0051,51,0,2,official-record
person-0052,52,1,1,official-record
person-0053,53,2,2,official-record
person-0054,54,3,4,official-record
person-0055,55,4,4,official-record
person-0056,56,5,2,official-record
person-0057,57,4,3,official-record
person-0058,58,0,2,official-record
person-0059,59,2,5,official-record
person-0060,60,1,3,official-record
person-0061,61,1,3,official-record
person-0062,62,5,1,official-record
person-0063,63,3,0,official-record
person-0064,64,4,4,official-record
person-0065,65,7,3,official-record
person-0066,66,3,3,official-record
person-0067,67,3,3,official-record
person-0068,68,3,3,official-record
person-0069,69,3,4,official-record
person-0070,70,5,0,official-record
person-0071,71,4,1,official-record
person-0072,72,6,5,official-record
person-0073,73,8,4,official-record
person-0074,74,4,3,official-record
person-0075,75,6,1,official-record
person-0076,76,6,4,official-record
person-0077,77,2,5,official-record
person-0079,79,1,4,official-record
person-0080,80,8,6,official-record
person-0081,81,0,1,official-record
person-0082,82,2,3,official-record
person-0083,83,1,3,official-record
person-0084,84,1,2,official-record
person-0085,85,1,3,official-record
person-0086,86,3,1,official-record
person-0087,87,5,5,official-record
person-0088,88,5,5,official-record
person-0089,89,1,3,official-record
person-0090,90,6,4,official-record
person-0091,91,2,1,official-record
person-0092,92,0,0,official-record
person-0093,93,2,3,official-record
person-0094,94,4,4,official-record
person-0095,95,1,1,official-record
person-0096,96,2,4,official-record
person-0097,97,4,3,official-record
person-0098,98,4,3,official-record
person-0099,99,5,3,official-record
person-0100,100,5,4,official-record
person-0101,101,1,4,official-record
person-0102,102,2,4,official-record
person-0103,103,6,5,official-record
person-0104,104,4,4,official-record
person-0105,105,3,1,official-record
person-0106,106,4,5,official-record
person-0107,107,4,5,official-record
person-0108,108,0,0,official-record
person-0109,109,3,3,official-record
person-0110,110,6,2,official-record
person-0111,111,5,4,official-record
person-0112,112,3,4,official-record
person-0113,113,4,4,official-record
person-0114,114,7,8,official-record
person-0115,115,4,3,official-record
person-0116,116,0,1,official-record
person-0117,117,4,7,official-record
person-0118,118,4,6,official-record
person-0120,120,3,3,official-record
person-0121,121,2,3,official-record
person-0122,122,5,3,official-record
person-0123,123,4,4,official-record
person-0124,124,2,3,official-record
person-0125,125,4,4,official-record
person-0126,126,4,4,official-record
person-0127,127,3,3,official-record
person-0128,128,0,4,official-record
person-0129,129,3,3,official-record
person-0130,130,2,9,official-record
person-0131,131,3,3,official-record
person-0132,132,5,2,official-record
person-0133,133,6,3,official-record
person-0134,134,1,3,official-record
person-0135,135,2,3,official-record
person-0136,136,0,0,official-record
person-0137,137,4,4,official-record
person-0138,138,4,4,official-record
person-0139,139,4,1,official-record
person-0140,140,3,4,official-record
person-0141,141,4,5,official-record
person-0142,142,4,8,official-record
person-0143,143,3,2,official-record
person-0144,144,2,3,official-record
person-0145,145,5,3,official-record
person-0146,146,1,3,official-record
person-0147,147,5,4,official-record
person-0148,148,4,3,official-record
person-0149,149,2,3,official-record
person-0150,150,7,5,official-record
person-0151,151,5,6,official-record
person-0152,152,3,1,official-record
person-0153,153,4,5,official-record
person-0154,154,3,4,official-record
person-0155,155,4,2,official-record
person-0156,156,0,0,official-record
person-0157,157,2,2,official-record
person-0158,158,6,2,official-record
person-0159,159,1,5,official-record
person-0160,160,1,0,official-record
person-0161,161,0,2,official-record
person-0162,162,7,3,official-record
person-0163,163,0,2,official-record
person-0164,164,1,2,official-record
person-0165,165,2,4,official-record
person-0167,167,3,9,official-record
person-0168,168,1,1,official-record
person-0169,169,5,2,official-record
person-0170,170,0,0,official-record
person-0171,171,1,2,official-record
person-0172,172,2,1,official-record
person-0173,173,6,2,official-record
person-0174,174,1,0,official-record
person-0175,175,0,3,official-record
person-0176,176,2,2,official-record
person-0177,177,2,5,official-record
person-0178,178,5,2,official-record
person-0179,179,3,5,official-record
person-0180,180,2,4,official-record
person-0181,181,3,3,official-record
person-0182,182,3,2,official-record
person-0183,183,4,8,official-record
person-0184,184,0,1,official-record
person-0185,185,1,3,official-record
person-0186,186,1,0,official-record
person-0187,187,5,2,official-record
person-0188,188,3,3,official-record
person-0189,189,2,2,official-record
person-0190,190,0,4,official-record
person-0191,191,2,3,official-record
person-0192,192,3,12,official-record
person-0193,193,8,5,official-record
person-0194,194,0,0,official-record
person-0195,195,3,4,official-record
person-0196,196,1,0,official-record
person-0197,197,6,2,official-record
person-0198,198,0,2,official-record
person-0199,199,3,3,official-record
person-0200,200,0,0,official-record
person-0201,201,8,1,official-record
person-0202,202,3,3,official-record
person-0203,203,3,6,official-record
person-0204,204,3,2,official-record
person-0205,205,5,3,official-record
person-0206,206,8,3,official-record
person-0207,207,4,6,official-record
person-0208,208,6,5,official-record
person-0209,209,6,4,official-record
person-0210,210,5,2,official-record
person-0211,211,5,6,official-record
person-0212,212,5,2,official-record
person-0213,213,5,4,official-record
person-0214,214,1,3,official-record
person-0215,215,5,5,official-record
person-0216,216,3,3,official-record
person-0217,217,5,5,official-record
person-0218,218,3,3,official-record
person-0219,219,3,1,official-record
person-0220,220,3,2,official-record
person-0221,221,8,5,official-record
person-0222,222,4,5,official-record
person-0223,223,4,5,official-record
person-0224,224,3,3,official-record
person-0225,225,6,5,official-record
person-0226,226,5,3,official-record
person-0227,227,0,2,official-record
person-0228,228,3,4,official-record
person-0229,229,2,2,official-record
person-0230,230,1,5,official-record
person-0232,232,4,3,official-record
person-0233,233,4,4,official-record
person-0234,234,1,1,official-record
person-0235,235,3,2,official-record
person-0236,236,3,3,official-record
person-0237,237,2,2,official-record
person-0238,238,5,9,official-record
person-0239,239,4,3,official-record
person-0240,240,3,1,official-record
person-0241,241,8,11,official-record
person-0242,242,1,1,official-record
person-0243,243,6,4,official-record
person-0244,244,6,6,official-record
person-0245,245,3,5,official-record
person-0246,246,4,3,official-record
person-0247,247,0,2,official-record
person-0248,248,5,6,official-record
person-0249,249,2,3,official-record
person-0251,251,2,5,official-record
person-0252,252,3,2,official-record
person-0253,253,5,2,official-record
person-0254,254,2,3,official-record
person-0255,255,0,0,official-record
person-0256,256,6,2,official-record
person-0257,257,5,5,official-record
person-0258,258,2,3,official-record
person-0259,259,4,5,official-record
person-0260,260,2,1,official-record
person-0261,261,10,4,official-record
person-0262,262,5,4,official-record
person-0263,263,9,3,official-record
person-0264,264,2,2,official-record
person-0265,265,5,5,official-record
person-0266,266,2,3,official-record
person-0267,267,2,3,official-record
person-0268,268,4,2,official-record
person-0269,269,3,3,official-record
person-0270,270,2,1,official-record
person-0271,271,7,6,official-record
person-0272,272,4,3,official-record
person-0273,273,3,6,official-record
person-0274,274,4,2,official-record
person-0275,275,3,4,official-record
person-0276,276,3,5,official-record
person-0277,277,0,3,official-record
person-0278,278,0,4,official-record
person-0279,279,5,3,official-record
person-0280,280,1,1,official-record
person-0281,281,5,5,official-record
person-0282,282,6,2,official-record
person-0283,283,1,3,official-record
person-0284,284,0,1,official-record
person-0285,285,0,5,official-record
person-0286,286,3,4,official-record
person-0287,287,7,6,official-record
person-0288,288,3,3,official-record
person-0289,289,1,2,official-record
person-0290,290,6,3,official-record
person-0291,291,2,3,official-record
person-0292,292,0,0,official-record
person-0293,293,0,0,official-record
person-0294,294,1,1,official-record
person-0295,295,3,1,official-record
person-0296,296,0,0,official-record
person-0297,297,7,4,official-record
person-0298,298,1,2,official-record
person-0299,299,5,3,official-record
person-0300,300,3,3,official-record
person-0301,301,4,2,official-record
person-0302,302,0,0,official-record
person-0303,303,3,3,official-record
person-0304,304,4,1,official-record
person-0305,305,3,2,official-record
person-0306,306,5,4,official-record
person-0307,307,4,4,official-record
person-0308,308,7,6,official-record
person-0309,309,0,2,official-record
person-0310,310,0,0,official-record
person-0311,311,6,2,official-record
person-0312,312,0,0,official-record
person-0313,313,4,5,official-record
person-0314,314,9,8,official-record
person-0315,315,4,3,official-record
person-0316,316,4,3,official-record
person-0317,317,0,0,official-record
person-0318,318,0,0,official-record
person-0319,319,4,2,official-record
person-0320,320,6,3,official-record
person-0321,321,0,2,official-record
person-0322,322,5,0,official-record
person-0323,323,2,4,official-record
person-0324,324,2,3,official-record
person-0325,325,6,3,official-record
person-0326,326,1,2,official-record
person-0327,327,2,7,official-record
person-0328,328,4,3,official-record
person-0329,329,0,0,official-record
person-0330,330,0,0,official-record
person-0331,331,0,0,official-record
person-0332,332,0,0,official-record
person-0333,333,0,0,official-record
person-0334,334,4,5,official-record
person-0335,335,0,0,official-record
person-0336,336,2,1,official-record
person-0337,337,1,5,official-record
person-0339,339,3,4,official-record
person-0340,340,4,4,official-record
person-0342,342,5,3,official-record
person-0343,343,2,3,official-record
person-0344,344,5,3,official-record
person-0346,346,2,4,official-record
person-0347,347,3,3,official-record
person-0348,348,2,4,official-record
person-0349,349,3,3,official-record
person-0351,351,2,4,official-record
person-0352,352,3,6,official-record
person-0354,354,4,2,official-record
person-0355,355,1,3,official-record
person-0356,356,2,4,official-record
person-0357,357,2,3,official-record
person-0358,358,1,1,official-record
person-0359,359,1,2,official-record
person-0360,360,3,4,official-record
person-0361,361,2,4,official-record
person-0362,362,4,2,official-record
person-0363,363,3,4,official-record
person-0364,364,2,4,official-record
person-0365,365,0,6,official-record
person-0366,366,2,4,official-record
person-0367,367,3,4,official-record
person-0368,368,4,4,official-record
person-0369,369,2,3,official-record
person-0370,370,7,1,official-record
person-0371,371,3,4,official-record
person-0372,372,3,2,official-record
person-0374,374,2,4,official-record
person-0375,375,1,4,official-record
person-0376,376,3,1,official-record
person-0377,377,3,6,official-record
person-0378,378,1,1,official-record
person-0379,379,3,4,official-record
person-0380,380,5,4,official-record
person-0381,381,4,4,official-record
person-0382,382,0,0,official-record
person-0383,383,4,4,official-record
person-0384,384,0,3,official-record
person-0385,385,3,5,official-record
person-0386,386,3,2,official-record
person-0387,387,3,2,official-record
person-0388,388,1,4,official-record
person-0389,389,3,4,official-record
person-0390,390,3,3,official-record
person-0391,391,1,4,official-record
person-0392,392,7,1,official-record
person-0393,393,3,1,official-record
person-0394,394,2,10,official-record
person-0396,396,3,4,official-record
person-0397,397,7,3,official-record
person-0398,398,3,3,official-record
person-0399,399,1,1,official-record
person-0400,400,2,2,official-record
person-0401,401,2,5,official-record
person-0402,402,1,2,official-record
person-0403,403,3,5,official-record
person-0404,404,2,1,official-record
person-0405,405,3,3,official-record
person-0406,406,2,2,official-record
person-0407,407,6,4,official-record
person-0408,408,1,1,official-record
person-0409,409,2,4,official-record
person-0410,410,4,4,official-record
person-0411,411,5,4,official-record
person-0412,412,5,5,official-record
person-0413,413,1,7,official-record
person-0414,414,6,3,official-record
person-0415,415,4,4,official-record
person-0416,416,1,2,official-record
person-0417,417,2,2,official-record
person-0418,418,3,2,official-record
person-0419,419,3,6,official-record
person-0420,420,4,5,official-record
person-0421,421,2,1,official-record
person-0422,422,2,4,official-record
person-0423,423,1,2,official-record
person-0424,424,4,4,official-record
person-0425,425,4,5,official-record
person-0426,426,1,2,official-record
person-0427,427,3,4,official-record
person-0428,428,1,3,official-record
person-0429,429,5,4,official-record
person-0430,430,2,2,official-record
person-0431,431,3,2,official-record
person-0432,432,4,3,official-record
person-0433,433,2,0,official-record
person-0434,434,3,2,official-record
person-0435,435,4,1,official-record
person-0436,436,6,4,official-record
person-0437,437,3,4,official-record
person-0438,438,3,2,official-record
person-0439,439,2,1,official-record
person-0440,440,4,3,official-record
person-0441,441,5,6,official-record
person-0442,442,3,12,official-record
person-0443,443,0,1,official-record
person-0444,444,0,3,official-record
person-0446,446,2,0,official-record
person-0447,447,1,1,official-record
person-0448,448,1,2,official-record
person-0449,449,2,4,official-record
person-0450,450,2,4,official-record
person-0451,451,2,4,official-record
person-0452,452,2,3,official-record
person-0453,453,5,7,official-record
person-0454,454,3,0,official-record
person-0455,455,4,4,official-record
person-0456,456,4,5,official-record
person-0457,457,2,0,official-record
person-0458,458,3,2,official-record
person-0459,459,6,5,official-record
person-0460,460,0,2,official-record
person-0461,461,5,3,official-record
person-0462,462,1,1,official-record
person-0463,463,4,5,official-record
person-0464,464,3,4,official-record
person-0465,465,3,4,official-record
person-0466,466,5,4,official-record
person-0467,467,1,1,official-record
person-0468,468,7,4,official-record
person-0469,469,2,2,official-record
person-0470,470,2,1,official-record
person-0471,471,1,4,official-record
person-0472,472,3,2,official-record
person-0473,473,1,2,official-record
person-0474,474,3,5,official-record
person-0476,476,2,2,official-record
person-0478,478,6,2,official-record
person-0480,480,1,2,official-record
person-0483,483,1,3,official-record
person-0485,485,5,4,official-record
person-0486,486,3,3,official-record
person-0488,488,2,2,official-record
person-0490,490,5,3,official-record
person-0493,493,5,1,official-record
person-0495,495,3,3,official-record
person-0497,497,3,0,official-record
person-0499,499,1,4,official-record
person-0501,501,1,1,official-record
person-0502,502,1,1,official-record
person-0504,504,0,0,official-record
person-0508,508,4,6,official-record
person-0510,510,2,1,official-record
person-0512,512,2,6,official-record
person-0514,514,1,1,official-record
person-0516,516,7,3,official-record
person-0518,518,5,4,official-record
person-0520,520,6,3,official-record
person-0522,522,4,5,official-record
person-0524,524,5,5,official-record
`, Vo = `key,source_row,true_decile,perceived_decile,provenance
person-0002,2,50,10,official-record+published-orientation
person-0004,4,70,90,official-record+published-orientation
person-0005,5,40,30,official-record+published-orientation
person-0006,6,30,90,official-record+published-orientation
person-0007,7,60,10,official-record+published-orientation
person-0008,8,10,80,official-record+published-orientation
person-0009,9,70,10,official-record+published-orientation
person-0011,11,10,80,official-record+published-orientation
person-0012,12,50,20,official-record+published-orientation
person-0014,14,30,20,official-record+published-orientation
person-0016,16,30,100,official-record+published-orientation
person-0017,17,100,80,official-record+published-orientation
person-0018,18,10,10,official-record+published-orientation
person-0019,19,30,50,official-record+published-orientation
person-0020,20,50,60,official-record+published-orientation
person-0021,21,10,90,official-record+published-orientation
person-0022,22,60,20,official-record+published-orientation
person-0023,23,60,30,official-record+published-orientation
person-0024,24,50,60,official-record+published-orientation
person-0025,25,60,100,official-record+published-orientation
person-0026,26,90,60,official-record+published-orientation
person-0027,27,70,80,official-record+published-orientation
person-0028,28,90,60,official-record+published-orientation
person-0029,29,100,50,official-record+published-orientation
person-0030,30,40,80,official-record+published-orientation
person-0031,31,90,50,official-record+published-orientation
person-0032,32,30,40,official-record+published-orientation
person-0033,33,90,50,official-record+published-orientation
person-0034,34,10,90,official-record+published-orientation
person-0035,35,100,70,official-record+published-orientation
person-0036,36,50,70,official-record+published-orientation
person-0037,37,100,100,official-record+published-orientation
person-0038,38,10,10,official-record+published-orientation
person-0040,40,80,70,official-record+published-orientation
person-0041,41,70,10,official-record+published-orientation
person-0042,42,60,70,official-record+published-orientation
person-0043,43,90,80,official-record+published-orientation
person-0044,44,50,90,official-record+published-orientation
person-0046,46,30,20,official-record+published-orientation
person-0047,47,10,30,official-record+published-orientation
person-0048,48,20,50,official-record+published-orientation
person-0049,49,70,90,official-record+published-orientation
person-0050,50,10,20,official-record+published-orientation
person-0051,51,30,80,official-record+published-orientation
person-0052,52,60,30,official-record+published-orientation
person-0053,53,20,50,official-record+published-orientation
person-0054,54,10,60,official-record+published-orientation
person-0055,55,40,80,official-record+published-orientation
person-0056,56,30,20,official-record+published-orientation
person-0057,57,40,90,official-record+published-orientation
person-0058,58,80,90,official-record+published-orientation
person-0059,59,100,10,official-record+published-orientation
person-0060,60,70,60,official-record+published-orientation
person-0061,61,80,90,official-record+published-orientation
person-0062,62,40,80,official-record+published-orientation
person-0063,63,80,100,official-record+published-orientation
person-0064,64,40,100,official-record+published-orientation
person-0065,65,50,70,official-record+published-orientation
person-0066,66,100,30,official-record+published-orientation
person-0067,67,30,70,official-record+published-orientation
person-0068,68,50,90,official-record+published-orientation
person-0069,69,40,30,official-record+published-orientation
person-0070,70,80,50,official-record+published-orientation
person-0071,71,80,80,official-record+published-orientation
person-0072,72,100,50,official-record+published-orientation
person-0073,73,80,70,official-record+published-orientation
person-0074,74,60,100,official-record+published-orientation
person-0075,75,90,100,official-record+published-orientation
person-0076,76,100,70,official-record+published-orientation
person-0077,77,60,30,official-record+published-orientation
person-0078,78,100,90,official-record+published-orientation
person-0079,79,60,70,official-record+published-orientation
person-0080,80,90,80,official-record+published-orientation
person-0081,81,10,40,official-record+published-orientation
person-0082,82,10,80,official-record+published-orientation
person-0083,83,80,70,official-record+published-orientation
person-0084,84,50,10,official-record+published-orientation
person-0085,85,70,60,official-record+published-orientation
person-0086,86,10,40,official-record+published-orientation
person-0087,87,60,70,official-record+published-orientation
person-0088,88,100,70,official-record+published-orientation
person-0089,89,80,60,official-record+published-orientation
person-0090,90,90,30,official-record+published-orientation
person-0091,91,70,70,official-record+published-orientation
person-0092,92,10,20,official-record+published-orientation
person-0093,93,10,70,official-record+published-orientation
person-0094,94,50,90,official-record+published-orientation
person-0095,95,10,90,official-record+published-orientation
person-0096,96,70,80,official-record+published-orientation
person-0097,97,90,70,official-record+published-orientation
person-0098,98,80,80,official-record+published-orientation
person-0099,99,50,60,official-record+published-orientation
person-0100,100,20,50,official-record+published-orientation
person-0101,101,90,30,official-record+published-orientation
person-0102,102,50,80,official-record+published-orientation
person-0103,103,60,50,official-record+published-orientation
person-0104,104,60,80,official-record+published-orientation
person-0105,105,30,20,official-record+published-orientation
person-0106,106,100,100,official-record+published-orientation
person-0107,107,10,70,official-record+published-orientation
person-0108,108,30,10,official-record+published-orientation
person-0109,109,70,60,official-record+published-orientation
person-0110,110,80,70,official-record+published-orientation
person-0111,111,90,70,official-record+published-orientation
person-0112,112,60,30,official-record+published-orientation
person-0113,113,80,60,official-record+published-orientation
person-0114,114,20,50,official-record+published-orientation
person-0115,115,60,80,official-record+published-orientation
person-0116,116,90,10,official-record+published-orientation
person-0117,117,60,60,official-record+published-orientation
person-0118,118,90,80,official-record+published-orientation
person-0120,120,10,100,official-record+published-orientation
person-0121,121,90,20,official-record+published-orientation
person-0122,122,50,80,official-record+published-orientation
person-0123,123,80,60,official-record+published-orientation
person-0124,124,10,20,official-record+published-orientation
person-0125,125,40,80,official-record+published-orientation
person-0126,126,60,70,official-record+published-orientation
person-0127,127,70,40,official-record+published-orientation
person-0128,128,50,90,official-record+published-orientation
person-0129,129,10,100,official-record+published-orientation
person-0130,130,90,50,official-record+published-orientation
person-0131,131,10,20,official-record+published-orientation
person-0132,132,90,30,official-record+published-orientation
person-0133,133,70,70,official-record+published-orientation
person-0134,134,50,40,official-record+published-orientation
person-0135,135,40,40,official-record+published-orientation
person-0136,136,10,100,official-record+published-orientation
person-0137,137,30,40,official-record+published-orientation
person-0138,138,10,40,official-record+published-orientation
person-0139,139,100,30,official-record+published-orientation
person-0140,140,40,60,official-record+published-orientation
person-0141,141,80,20,official-record+published-orientation
person-0142,142,80,70,official-record+published-orientation
person-0143,143,10,20,official-record+published-orientation
person-0144,144,100,80,official-record+published-orientation
person-0145,145,60,50,official-record+published-orientation
person-0147,147,70,100,official-record+published-orientation
person-0148,148,30,70,official-record+published-orientation
person-0149,149,10,30,official-record+published-orientation
person-0150,150,100,70,official-record+published-orientation
person-0151,151,70,100,official-record+published-orientation
person-0152,152,100,70,official-record+published-orientation
person-0153,153,60,80,official-record+published-orientation
person-0154,154,40,60,official-record+published-orientation
person-0155,155,50,80,official-record+published-orientation
person-0156,156,10,40,official-record+published-orientation
person-0157,157,60,10,official-record+published-orientation
person-0158,158,100,80,official-record+published-orientation
person-0159,159,80,80,official-record+published-orientation
person-0160,160,90,80,official-record+published-orientation
person-0161,161,10,70,official-record+published-orientation
person-0162,162,100,20,official-record+published-orientation
person-0163,163,10,40,official-record+published-orientation
person-0164,164,90,90,official-record+published-orientation
person-0165,165,50,80,official-record+published-orientation
person-0166,166,70,80,official-record+published-orientation
person-0167,167,80,40,official-record+published-orientation
person-0168,168,70,90,official-record+published-orientation
person-0169,169,90,30,official-record+published-orientation
person-0170,170,10,70,official-record+published-orientation
person-0171,171,10,10,official-record+published-orientation
person-0172,172,50,20,official-record+published-orientation
person-0173,173,100,50,official-record+published-orientation
person-0174,174,50,100,official-record+published-orientation
person-0175,175,60,100,official-record+published-orientation
person-0176,176,60,20,official-record+published-orientation
person-0177,177,80,90,official-record+published-orientation
person-0178,178,90,40,official-record+published-orientation
person-0179,179,100,70,official-record+published-orientation
person-0180,180,60,30,official-record+published-orientation
person-0181,181,80,80,official-record+published-orientation
person-0182,182,40,10,official-record+published-orientation
person-0183,183,80,80,official-record+published-orientation
person-0184,184,10,30,official-record+published-orientation
person-0185,185,60,30,official-record+published-orientation
person-0186,186,10,50,official-record+published-orientation
person-0187,187,90,60,official-record+published-orientation
person-0188,188,60,40,official-record+published-orientation
person-0189,189,10,10,official-record+published-orientation
person-0190,190,70,80,official-record+published-orientation
person-0191,191,40,10,official-record+published-orientation
person-0192,192,100,90,official-record+published-orientation
person-0193,193,100,80,official-record+published-orientation
person-0194,194,50,20,official-record+published-orientation
person-0195,195,90,70,official-record+published-orientation
person-0196,196,10,100,official-record+published-orientation
person-0197,197,80,100,official-record+published-orientation
person-0198,198,40,40,official-record+published-orientation
person-0199,199,50,20,official-record+published-orientation
person-0200,200,60,10,official-record+published-orientation
person-0201,201,100,40,official-record+published-orientation
person-0202,202,40,80,official-record+published-orientation
person-0203,203,10,90,official-record+published-orientation
person-0204,204,10,10,official-record+published-orientation
person-0205,205,50,20,official-record+published-orientation
person-0206,206,90,80,official-record+published-orientation
person-0207,207,80,70,official-record+published-orientation
person-0208,208,70,80,official-record+published-orientation
person-0209,209,50,30,official-record+published-orientation
person-0210,210,30,20,official-record+published-orientation
person-0211,211,90,80,official-record+published-orientation
person-0212,212,50,10,official-record+published-orientation
person-0213,213,60,60,official-record+published-orientation
person-0214,214,20,70,official-record+published-orientation
person-0215,215,40,60,official-record+published-orientation
person-0216,216,70,70,official-record+published-orientation
person-0217,217,90,60,official-record+published-orientation
person-0218,218,30,80,official-record+published-orientation
person-0219,219,70,40,official-record+published-orientation
person-0220,220,60,60,official-record+published-orientation
person-0221,221,100,40,official-record+published-orientation
person-0222,222,30,80,official-record+published-orientation
person-0223,223,20,50,official-record+published-orientation
person-0224,224,50,50,official-record+published-orientation
person-0225,225,20,70,official-record+published-orientation
person-0226,226,50,80,official-record+published-orientation
person-0227,227,40,10,official-record+published-orientation
person-0228,228,60,20,official-record+published-orientation
person-0229,229,20,20,official-record+published-orientation
person-0230,230,100,80,official-record+published-orientation
person-0231,231,70,80,official-record+published-orientation
person-0232,232,20,100,official-record+published-orientation
person-0233,233,60,40,official-record+published-orientation
person-0234,234,10,100,official-record+published-orientation
person-0235,235,70,80,official-record+published-orientation
person-0236,236,80,100,official-record+published-orientation
person-0237,237,80,40,official-record+published-orientation
person-0238,238,100,80,official-record+published-orientation
person-0239,239,40,40,official-record+published-orientation
person-0240,240,70,30,official-record+published-orientation
person-0241,241,90,90,official-record+published-orientation
person-0243,243,90,70,official-record+published-orientation
person-0244,244,40,90,official-record+published-orientation
person-0245,245,30,80,official-record+published-orientation
person-0246,246,30,30,official-record+published-orientation
person-0247,247,40,100,official-record+published-orientation
person-0248,248,70,60,official-record+published-orientation
person-0249,249,20,60,official-record+published-orientation
person-0250,250,40,70,official-record+published-orientation
person-0251,251,80,40,official-record+published-orientation
person-0252,252,10,20,official-record+published-orientation
person-0254,254,50,40,official-record+published-orientation
person-0255,255,60,100,official-record+published-orientation
person-0256,256,100,90,official-record+published-orientation
person-0257,257,10,70,official-record+published-orientation
person-0258,258,50,40,official-record+published-orientation
person-0259,259,80,90,official-record+published-orientation
person-0260,260,80,100,official-record+published-orientation
person-0261,261,100,90,official-record+published-orientation
person-0262,262,30,50,official-record+published-orientation
person-0263,263,90,40,official-record+published-orientation
person-0264,264,60,90,official-record+published-orientation
person-0265,265,70,30,official-record+published-orientation
person-0266,266,40,30,official-record+published-orientation
person-0267,267,60,60,official-record+published-orientation
person-0268,268,50,30,official-record+published-orientation
person-0269,269,70,50,official-record+published-orientation
person-0270,270,50,20,official-record+published-orientation
person-0271,271,100,60,official-record+published-orientation
person-0272,272,90,20,official-record+published-orientation
person-0273,273,70,60,official-record+published-orientation
person-0274,274,20,90,official-record+published-orientation
person-0275,275,40,50,official-record+published-orientation
person-0276,276,20,30,official-record+published-orientation
person-0277,277,10,80,official-record+published-orientation
person-0278,278,30,70,official-record+published-orientation
person-0279,279,80,80,official-record+published-orientation
person-0280,280,20,50,official-record+published-orientation
person-0281,281,90,90,official-record+published-orientation
person-0282,282,50,90,official-record+published-orientation
person-0283,283,30,80,official-record+published-orientation
person-0284,284,10,20,official-record+published-orientation
person-0285,285,40,40,official-record+published-orientation
person-0286,286,60,30,official-record+published-orientation
person-0287,287,90,60,official-record+published-orientation
person-0288,288,30,80,official-record+published-orientation
person-0291,291,100,30,official-record+published-orientation
person-0292,292,10,100,official-record+published-orientation
person-0293,293,10,60,official-record+published-orientation
person-0294,294,10,30,official-record+published-orientation
person-0295,295,80,60,official-record+published-orientation
person-0296,296,10,10,official-record+published-orientation
person-0297,297,90,80,official-record+published-orientation
person-0298,298,70,50,official-record+published-orientation
person-0299,299,100,100,official-record+published-orientation
person-0300,300,60,90,official-record+published-orientation
person-0301,301,80,30,official-record+published-orientation
person-0302,302,40,80,official-record+published-orientation
person-0303,303,10,30,official-record+published-orientation
person-0304,304,100,20,official-record+published-orientation
person-0305,305,50,80,official-record+published-orientation
person-0306,306,80,40,official-record+published-orientation
person-0307,307,60,30,official-record+published-orientation
person-0309,309,80,80,official-record+published-orientation
person-0310,310,80,100,official-record+published-orientation
person-0311,311,90,100,official-record+published-orientation
person-0312,312,10,100,official-record+published-orientation
person-0313,313,60,60,official-record+published-orientation
person-0314,314,100,90,official-record+published-orientation
person-0315,315,90,50,official-record+published-orientation
person-0316,316,90,40,official-record+published-orientation
person-0317,317,90,100,official-record+published-orientation
person-0318,318,70,100,official-record+published-orientation
person-0319,319,70,100,official-record+published-orientation
person-0320,320,100,50,official-record+published-orientation
person-0321,321,70,40,official-record+published-orientation
person-0322,322,90,50,official-record+published-orientation
person-0323,323,50,40,official-record+published-orientation
person-0324,324,40,30,official-record+published-orientation
person-0325,325,80,80,official-record+published-orientation
person-0326,326,50,20,official-record+published-orientation
person-0327,327,60,70,official-record+published-orientation
person-0328,328,60,70,official-record+published-orientation
person-0329,329,70,100,official-record+published-orientation
person-0330,330,80,60,official-record+published-orientation
person-0331,331,60,80,official-record+published-orientation
person-0332,332,50,80,official-record+published-orientation
person-0333,333,90,90,official-record+published-orientation
person-0334,334,100,100,official-record+published-orientation
person-0335,335,70,80,official-record+published-orientation
person-0336,336,20,40,official-record+published-orientation
person-0337,337,80,40,official-record+published-orientation
person-0339,339,60,80,official-record+published-orientation
person-0340,340,100,60,official-record+published-orientation
person-0342,342,90,70,official-record+published-orientation
person-0343,343,60,80,official-record+published-orientation
person-0344,344,70,90,official-record+published-orientation
person-0345,345,70,100,official-record+published-orientation
person-0347,347,10,50,official-record+published-orientation
person-0348,348,40,60,official-record+published-orientation
person-0349,349,50,80,official-record+published-orientation
person-0350,350,10,40,official-record+published-orientation
person-0351,351,10,80,official-record+published-orientation
person-0352,352,90,60,official-record+published-orientation
person-0353,353,50,40,official-record+published-orientation
person-0354,354,10,50,official-record+published-orientation
person-0355,355,70,60,official-record+published-orientation
person-0356,356,40,70,official-record+published-orientation
person-0357,357,80,50,official-record+published-orientation
person-0358,358,60,10,official-record+published-orientation
person-0359,359,10,20,official-record+published-orientation
person-0360,360,70,100,official-record+published-orientation
person-0361,361,10,100,official-record+published-orientation
person-0362,362,90,20,official-record+published-orientation
person-0363,363,80,50,official-record+published-orientation
person-0364,364,10,60,official-record+published-orientation
person-0365,365,70,60,official-record+published-orientation
person-0366,366,50,70,official-record+published-orientation
person-0367,367,90,30,official-record+published-orientation
person-0368,368,10,20,official-record+published-orientation
person-0369,369,90,20,official-record+published-orientation
person-0370,370,90,20,official-record+published-orientation
person-0371,371,70,90,official-record+published-orientation
person-0372,372,80,30,official-record+published-orientation
person-0373,373,100,60,official-record+published-orientation
person-0374,374,80,40,official-record+published-orientation
person-0375,375,60,30,official-record+published-orientation
person-0376,376,60,10,official-record+published-orientation
person-0377,377,70,30,official-record+published-orientation
person-0378,378,10,100,official-record+published-orientation
person-0379,379,50,50,official-record+published-orientation
person-0380,380,100,20,official-record+published-orientation
person-0381,381,30,40,official-record+published-orientation
person-0382,382,70,80,official-record+published-orientation
person-0383,383,80,70,official-record+published-orientation
person-0384,384,70,90,official-record+published-orientation
person-0385,385,40,100,official-record+published-orientation
person-0386,386,70,50,official-record+published-orientation
person-0387,387,90,20,official-record+published-orientation
person-0388,388,90,40,official-record+published-orientation
person-0389,389,40,90,official-record+published-orientation
person-0390,390,70,40,official-record+published-orientation
person-0391,391,50,70,official-record+published-orientation
person-0392,392,80,50,official-record+published-orientation
person-0393,393,60,80,official-record+published-orientation
person-0394,394,80,40,official-record+published-orientation
person-0395,395,50,70,official-record+published-orientation
person-0396,396,50,40,official-record+published-orientation
person-0397,397,90,30,official-record+published-orientation
person-0398,398,40,30,official-record+published-orientation
person-0399,399,10,10,official-record+published-orientation
person-0400,400,10,50,official-record+published-orientation
person-0401,401,60,30,official-record+published-orientation
person-0402,402,40,30,official-record+published-orientation
person-0403,403,60,30,official-record+published-orientation
person-0404,404,100,60,official-record+published-orientation
person-0405,405,50,30,official-record+published-orientation
person-0406,406,10,10,official-record+published-orientation
person-0407,407,60,50,official-record+published-orientation
person-0408,408,50,100,official-record+published-orientation
person-0409,409,10,70,official-record+published-orientation
person-0410,410,100,40,official-record+published-orientation
person-0412,412,30,90,official-record+published-orientation
person-0413,413,40,90,official-record+published-orientation
person-0414,414,100,50,official-record+published-orientation
person-0415,415,80,80,official-record+published-orientation
person-0416,416,70,30,official-record+published-orientation
person-0417,417,10,30,official-record+published-orientation
person-0418,418,30,80,official-record+published-orientation
person-0419,419,80,50,official-record+published-orientation
person-0420,420,30,90,official-record+published-orientation
person-0421,421,10,20,official-record+published-orientation
person-0422,422,90,80,official-record+published-orientation
person-0423,423,60,30,official-record+published-orientation
person-0424,424,10,20,official-record+published-orientation
person-0425,425,80,70,official-record+published-orientation
person-0426,426,40,70,official-record+published-orientation
person-0427,427,40,60,official-record+published-orientation
person-0428,428,100,70,official-record+published-orientation
person-0429,429,100,60,official-record+published-orientation
person-0430,430,10,20,official-record+published-orientation
person-0432,432,40,70,official-record+published-orientation
person-0433,433,100,10,official-record+published-orientation
person-0434,434,30,50,official-record+published-orientation
person-0435,435,60,80,official-record+published-orientation
person-0436,436,70,20,official-record+published-orientation
person-0437,437,50,40,official-record+published-orientation
person-0438,438,40,80,official-record+published-orientation
person-0439,439,90,50,official-record+published-orientation
person-0440,440,80,30,official-record+published-orientation
person-0441,441,90,60,official-record+published-orientation
person-0442,442,80,90,official-record+published-orientation
person-0443,443,10,30,official-record+published-orientation
person-0444,444,60,20,official-record+published-orientation
person-0445,445,90,30,official-record+published-orientation
person-0446,446,10,40,official-record+published-orientation
person-0447,447,50,40,official-record+published-orientation
person-0448,448,60,50,official-record+published-orientation
person-0449,449,30,20,official-record+published-orientation
person-0451,451,80,20,official-record+published-orientation
person-0452,452,40,30,official-record+published-orientation
person-0453,453,80,50,official-record+published-orientation
person-0454,454,70,60,official-record+published-orientation
person-0455,455,50,80,official-record+published-orientation
person-0456,456,30,60,official-record+published-orientation
person-0457,457,70,100,official-record+published-orientation
person-0458,458,90,80,official-record+published-orientation
person-0459,459,50,20,official-record+published-orientation
person-0460,460,60,20,official-record+published-orientation
person-0461,461,50,50,official-record+published-orientation
person-0462,462,50,40,official-record+published-orientation
person-0463,463,40,90,official-record+published-orientation
person-0464,464,100,70,official-record+published-orientation
person-0465,465,90,70,official-record+published-orientation
person-0466,466,40,90,official-record+published-orientation
person-0467,467,10,100,official-record+published-orientation
person-0468,468,80,60,official-record+published-orientation
person-0469,469,40,40,official-record+published-orientation
person-0470,470,40,20,official-record+published-orientation
person-0471,471,90,70,official-record+published-orientation
person-0472,472,80,30,official-record+published-orientation
person-0473,473,90,50,official-record+published-orientation
person-0474,474,40,10,official-record+published-orientation
person-0476,476,30,40,official-record+published-orientation
person-0478,478,70,90,official-record+published-orientation
person-0483,483,10,40,official-record+published-orientation
person-0485,485,60,20,official-record+published-orientation
person-0486,486,30,60,official-record+published-orientation
person-0488,488,40,20,official-record+published-orientation
person-0490,490,100,40,official-record+published-orientation
person-0493,493,70,60,official-record+published-orientation
person-0495,495,50,40,official-record+published-orientation
person-0497,497,30,70,official-record+published-orientation
person-0499,499,100,90,official-record+published-orientation
person-0501,501,100,20,official-record+published-orientation
person-0502,502,10,20,official-record+published-orientation
person-0504,504,100,10,official-record+published-orientation
person-0508,508,70,80,official-record+published-orientation
person-0512,512,90,90,official-record+published-orientation
person-0514,514,60,40,official-record+published-orientation
person-0516,516,70,80,official-record+published-orientation
person-0518,518,80,80,official-record+published-orientation
person-0522,522,60,90,official-record+published-orientation
`, Zo = () => G(Wo).map((e) => ({
  key: e.key,
  sourceRow: b(e.source_row),
  publicId: b(e.public_id),
  classId: b(e.class),
  participant: e.participant === "1",
  indegree: b(e.indegree),
  outdegree: b(e.outdegree),
  x: b(e.x),
  y: b(e.y),
  fill: e.fill
})), oe = () => G(Jo).map((e) => ({
  key: e.key,
  source: e.source,
  target: e.target,
  classId: b(e.class)
})), ko = () => G(Qo).map((e) => ({
  key: e.key,
  sourceRow: b(e.source_row),
  observed: b(e.observed),
  perceived: b(e.perceived)
})), ee = () => G(Vo).map((e) => ({
  key: e.key,
  sourceRow: b(e.source_row),
  trueDecile: b(e.true_decile),
  perceivedDecile: b(e.perceived_decile)
})), Q = 4120, V = 7175, k = {
  axisLeft: 308,
  barLeft: 369,
  barRight: 1920,
  top: 3101,
  bottom: 4454,
  axisY: 4508,
  maxY: 120,
  binCount: 12
}, ie = {
  axisLeft: 2416,
  barLeft: 2477,
  barRight: 4028,
  top: 3101,
  bottom: 4454,
  axisY: 4508,
  maxY: 80,
  binCount: 10
}, w = {
  left: 308,
  right: 1981,
  top: 5248,
  bottom: 6709,
  dataX0: 370,
  dataXPx: 1919,
  dataY0: 6655,
  dataYPx: 5303
}, M = {
  left: 2416,
  right: 4089,
  top: 5248,
  bottom: 6709,
  dataX0: 2478,
  dataXPx: 4028,
  dataY0: 6654,
  dataYPx: 5300
};
function oo(e, o) {
  return e.barLeft + o * (e.barRight - e.barLeft) / e.binCount;
}
function S(e, o) {
  return e.bottom - o / e.maxY * (e.bottom - e.top);
}
function Ao(e) {
  return w.dataX0 + e / 10 * (w.dataXPx - w.dataX0);
}
function wo(e) {
  return w.dataY0 + e / 10 * (w.dataYPx - w.dataY0);
}
function ne(e) {
  return M.dataX0 + (e - 10) / 90 * (M.dataXPx - M.dataX0);
}
function re(e) {
  return M.dataY0 + (e - 10) / 90 * (M.dataYPx - M.dataY0);
}
function z(e, o, n, i, p, t = {}) {
  const l = s("text", { x: o, y: n, class: p, ...t }, i);
  return e.appendChild(l), l;
}
function pe(e) {
  const o = s("defs");
  for (const [n, i] of [
    ["net07-popularity-clip", w],
    ["net07-centrality-clip", M]
  ]) {
    const p = s("clipPath", { id: n });
    p.appendChild(s("rect", {
      x: i.left,
      y: i.top,
      width: i.right - i.left,
      height: i.bottom - i.top
    })), o.appendChild(p);
  }
  e.appendChild(o);
}
function le(e) {
  const o = s("g", { "data-scope": "network" }), n = s("g", { "data-panel": "graph" }), i = s("g", { "data-layer": "under" }), p = s("g", { "data-layer": "marks" }), t = Zo(), l = new Map(t.map((r) => [r.key, r]));
  for (const r of oe()) {
    const a = l.get(r.source), f = l.get(r.target);
    if (!a || !f) throw new Error(`Missing network endpoint for ${r.key}`);
    const d = f.x - a.x, g = f.y - a.y, u = Math.max(Math.hypot(d, g), 1), y = d / u, v = g / u, E = -v, A = y, x = f.x - y * 21.5, _ = f.y - v * 21.5, C = f.x - y * 40, X = f.y - v * 40, T = 9.5, P = s("g", {
      "data-mark": "edge",
      "data-key": r.key,
      "data-source": r.source,
      "data-target": r.target,
      "data-class": r.classId
    });
    P.appendChild(s("line", {
      x1: a.x,
      y1: a.y,
      x2: f.x,
      y2: f.y,
      class: "net07-network-edge"
    })), P.appendChild(s("path", {
      d: `M ${x} ${_} L ${C + E * T} ${X + A * T} L ${C - E * T} ${X - A * T} Z`,
      class: "net07-network-arrow"
    })), i.appendChild(P);
  }
  for (const r of t)
    p.appendChild(s("circle", {
      cx: r.x,
      cy: r.y,
      r: 20.5,
      fill: r.fill,
      class: "net07-network-node",
      "data-mark": "node",
      "data-key": r.key,
      "data-class": r.classId,
      "data-participant": r.participant ? 1 : 0,
      "data-indegree": r.indegree,
      "data-outdegree": r.outdegree,
      "data-public-id": r.publicId,
      "data-source-row": r.sourceRow
    }));
  n.appendChild(i), n.appendChild(p), o.appendChild(n), e.appendChild(o);
}
function to(e) {
  const o = Array.from({ length: 12 }, () => 0);
  for (const n of e) {
    const i = n <= 1 ? 0 : Math.ceil(n) - 1;
    i >= 0 && i < o.length && (o[i] += 1);
  }
  return o;
}
function te(e) {
  const o = Array.from({ length: 10 }, () => 0);
  for (const n of e) {
    const i = Math.floor((n - 1) / 10);
    i >= 0 && i < o.length && (o[i] += 1);
  }
  return o;
}
function fo(e, o) {
  const n = s("g", { "data-scope": o.scope }), i = s("g", { "data-panel": "bar" }), p = s("g", { "data-layer": "marks" }), t = s("g", { "data-guide": "histogram-outlines" }), l = (o.plot.barRight - o.plot.barLeft) / o.plot.binCount;
  for (let d = 0; d < o.plot.binCount; d++) {
    const g = oo(o.plot, d), u = o.first[d], y = o.second[d], v = Math.min(u, y), E = Math.max(u, y);
    for (const [A, x, _] of [
      [o.firstName, u, "#fecccb"],
      [o.secondName, y, "#ccccfe"]
    ])
      p.appendChild(s("rect", {
        x: g,
        y: S(o.plot, x),
        width: l + 0.35,
        height: o.plot.bottom - S(o.plot, x),
        fill: _,
        "data-mark": "histogram-bar",
        "data-key": `${o.scope}:${A}:bin-${d + 1}`,
        "data-series": A,
        "data-value": x,
        "data-bin": d + 1
      }));
    if (p.appendChild(s("rect", {
      x: g,
      y: S(o.plot, v),
      width: l + 0.35,
      height: o.plot.bottom - S(o.plot, v),
      fill: "#d6a3cc",
      "data-mark": "histogram-overlap",
      "data-key": `${o.scope}:overlap:bin-${d + 1}`,
      "data-value": v,
      "data-bin": d + 1
    })), t.appendChild(s("rect", {
      x: g,
      y: S(o.plot, E),
      width: l,
      height: o.plot.bottom - S(o.plot, E),
      class: "net07-hist-outline"
    })), u !== y) {
      const A = S(o.plot, v);
      t.appendChild(s("line", {
        x1: g,
        y1: A,
        x2: g + l,
        y2: A,
        class: "net07-hist-outline"
      }));
    }
  }
  i.appendChild(p), n.appendChild(i), n.appendChild(t);
  const r = s("g", { "data-guide": "axes" });
  r.appendChild(s("line", {
    x1: o.plot.axisLeft,
    y1: o.plot.top,
    x2: o.plot.axisLeft,
    y2: o.plot.bottom,
    class: "net07-axis-line"
  })), r.appendChild(s("line", {
    x1: o.plot.barLeft,
    y1: o.plot.axisY,
    x2: o.plot.barRight,
    y2: o.plot.axisY,
    class: "net07-axis-line"
  }));
  for (let d = 0; d <= o.plot.maxY; d += 20) {
    const g = S(o.plot, d);
    r.appendChild(s("line", {
      x1: o.plot.axisLeft - 34,
      y1: g,
      x2: o.plot.axisLeft,
      y2: g,
      class: "net07-axis-line"
    })), z(r, o.plot.axisLeft - 70, g + 18, String(d), "net07-tick", { "text-anchor": "end" });
  }
  for (const d of o.xTicks) {
    const g = oo(o.plot, d.index);
    r.appendChild(s("line", {
      x1: g,
      y1: o.plot.axisY,
      x2: g,
      y2: o.plot.axisY + 35,
      class: "net07-axis-line"
    })), z(r, g, o.plot.axisY + 127, String(d.value), "net07-tick", { "text-anchor": "middle" });
  }
  const a = (o.plot.barLeft + o.plot.barRight) / 2;
  z(r, a, 4789, o.xTitle, "net07-axis-title", { "text-anchor": "middle" }), z(r, o.plot.axisLeft - 220, (o.plot.top + o.plot.bottom) / 2, "Frequency", "net07-axis-title", {
    "text-anchor": "middle",
    transform: `rotate(-90 ${o.plot.axisLeft - 220} ${(o.plot.top + o.plot.bottom) / 2})`
  }), n.appendChild(r);
  const f = s("g", { "data-guide": "legend" });
  for (const [d, g, u] of [
    [0, o.firstName, "#fecccb"],
    [1, o.secondName, "#ccccfe"]
  ]) {
    const y = 3099 + d * 69;
    f.appendChild(s("rect", { x: o.legendX, y, width: 40, height: 40, fill: u })), z(f, o.legendX + 64, y + 37, g, "net07-legend");
  }
  if (n.appendChild(f), o.average !== void 0) {
    const d = s("g", { "data-guide": "average-perceived-centrality" }), g = o.plot.barLeft + o.average / 100 * (o.plot.barRight - o.plot.barLeft);
    d.appendChild(s("line", {
      x1: g,
      y1: o.plot.top - 32,
      x2: g,
      y2: o.plot.axisY,
      stroke: "#111",
      "stroke-width": 4,
      "stroke-dasharray": "18 13"
    })), z(d, g - 28, o.plot.top + 54, `Av. perceived centrality: ${o.average.toFixed(1)}%`, "net07-average-label", {
      "text-anchor": "end",
      transform: `rotate(-90 ${g - 28} ${o.plot.top + 54})`
    }), n.appendChild(d);
  }
  e.appendChild(n);
}
function ao(e) {
  const o = /* @__PURE__ */ new Map();
  for (const [n, i] of e) {
    const p = `${n}:${i}`, t = o.get(p);
    t ? t.count += 1 : o.set(p, { x: n, y: i, count: 1 });
  }
  return [...o.values()].sort((n, i) => n.y - i.y || n.x - i.x);
}
function fe(e) {
  const o = e.reduce((l, r) => l + r[0], 0) / e.length, n = e.reduce((l, r) => l + r[1], 0) / e.length, i = e.reduce((l, r) => l + (r[0] - o) * (r[1] - n), 0), p = e.reduce((l, r) => l + (r[0] - o) ** 2, 0), t = i / p;
  return { slope: t, intercept: n - t * o };
}
function so(e, o) {
  const n = s("g", { "data-scope": o.scope }), i = s("g", { "data-guide": "identity-and-frame", "data-layer": "under" });
  i.appendChild(s("rect", {
    x: o.plot.left,
    y: o.plot.top,
    width: o.plot.right - o.plot.left,
    height: o.plot.bottom - o.plot.top,
    class: "net07-axis-line"
  })), i.appendChild(s("path", {
    d: `M${o.plot.left} ${o.plot.bottom}L${o.plot.right} ${o.plot.top}`,
    class: "net07-identity"
  })), n.appendChild(i);
  const p = s("g", { "data-panel": "scatter plot", "clip-path": `url(#${o.clipId})` }), t = fe(o.pairs);
  p.appendChild(s("line", {
    x1: o.xScale(o.fitMin),
    y1: o.yScale(t.intercept + t.slope * o.fitMin),
    x2: o.xScale(o.fitMax),
    y2: o.yScale(t.intercept + t.slope * o.fitMax),
    class: "net07-fit",
    "data-mark": "linear-fit",
    "data-key": `${o.scope}:linear-fit`,
    "data-intercept": t.intercept,
    "data-slope": t.slope
  }));
  for (const r of o.points)
    p.appendChild(s("circle", {
      cx: o.xScale(r.x),
      cy: o.yScale(r.y),
      r: 13.15 * Math.sqrt(r.count),
      class: "net07-bubble",
      "data-mark": "count-bubble",
      "data-key": `${o.scope}:${r.x}:${r.y}`,
      "data-x": r.x,
      "data-y": r.y,
      "data-count": r.count
    }));
  n.appendChild(p);
  const l = s("g", { "data-guide": "axes" });
  for (const r of o.xTicks) {
    const a = o.xScale(r);
    l.appendChild(s("line", {
      x1: a,
      y1: o.plot.bottom,
      x2: a,
      y2: o.plot.bottom + 34,
      class: "net07-axis-line"
    })), z(l, a, o.plot.bottom + 127, String(r), "net07-tick", { "text-anchor": "middle" });
  }
  for (const r of o.yTicks) {
    const a = o.yScale(r);
    l.appendChild(s("line", {
      x1: o.plot.left - 34,
      y1: a,
      x2: o.plot.left,
      y2: a,
      class: "net07-axis-line"
    })), z(l, o.plot.left - 70, a + 18, String(r), "net07-tick", { "text-anchor": "end" });
  }
  if (z(l, (o.plot.left + o.plot.right) / 2, 6988, o.xTitle, "net07-axis-title", { "text-anchor": "middle" }), z(l, o.yTitleX, (o.plot.top + o.plot.bottom) / 2, o.yTitle, "net07-axis-title", {
    "text-anchor": "middle",
    transform: `rotate(-90 ${o.yTitleX} ${(o.plot.top + o.plot.bottom) / 2})`
  }), n.appendChild(l), o.legend) {
    const r = s("g", { "data-guide": "legend" });
    r.appendChild(s("circle", { cx: 1428, cy: 5310, r: 12, class: "net07-bubble" })), z(r, 1492, 5328, "Data", "net07-legend"), r.appendChild(s("line", { x1: 1377, y1: 5392, x2: 1465, y2: 5392, class: "net07-fit" })), z(r, 1492, 5410, "Linear Fit", "net07-legend"), n.appendChild(r);
  }
  e.appendChild(n);
}
function ae(e) {
  zo(e), e.setAttribute("viewBox", `0 0 ${Q} ${V}`), e.setAttribute("width", String(Q)), e.setAttribute("height", String(V)), e.setAttribute("role", "img"), e.setAttribute("aria-label", "Perceived versus observed position in eleven student social networks"), e.classList.add("net07-svg"), xo(e, Q, V), pe(e);
  const o = ko(), n = ee();
  le(e), fo(e, {
    scope: "popularity-distribution",
    plot: k,
    first: to(o.map((l) => l.observed)),
    second: to(o.map((l) => l.perceived)),
    firstName: "Observed popularity",
    secondName: "Perceived popularity",
    xTicks: [0, 2, 4, 6, 8, 10, 12].map((l) => ({ value: l, index: l })),
    xTitle: "Popularity",
    legendX: 1322
  });
  const i = n.reduce((l, r) => l + r.perceivedDecile, 0) / n.length;
  fo(e, {
    scope: "centrality-distribution",
    plot: ie,
    first: Array.from({ length: 10 }, () => n.length / 10),
    second: te(n.map((l) => l.perceivedDecile)),
    firstName: "Theoretical distr.",
    secondName: "Perceived centrality",
    xTicks: Array.from({ length: 11 }, (l, r) => ({ value: r * 10, index: r })),
    xTitle: "Centrality",
    legendX: 2467,
    average: i
  });
  const p = o.map((l) => [l.observed, l.perceived]);
  so(e, {
    scope: "popularity-scatter",
    plot: w,
    clipId: "net07-popularity-clip",
    points: ao(p),
    pairs: p,
    xScale: Ao,
    yScale: wo,
    xTicks: [0, 2, 4, 6, 8, 10],
    yTicks: [0, 2, 4, 6, 8, 10],
    xTitle: "In-degree",
    yTitle: "Perceived in-degree",
    fitMin: -0.4,
    fitMax: 10.4,
    yTitleX: 67,
    legend: !0
  });
  const t = n.map((l) => [l.trueDecile, l.perceivedDecile]);
  so(e, {
    scope: "centrality-scatter",
    plot: M,
    clipId: "net07-centrality-clip",
    points: ao(t),
    pairs: t,
    xScale: ne,
    yScale: re,
    xTicks: [20, 40, 60, 80, 100],
    yTicks: [20, 40, 60, 80, 100],
    xTitle: "Betweenness (deciles)",
    yTitle: "Perceived centrality (deciles)",
    fitMin: 6.4,
    fitMax: 103.6,
    yTitleX: 2195
  });
}
const B = 1920, H = 1080, io = Object.freeze([
  { index: 0, kind: "panel-i", label: "Panel bar (b) · popularity histogram" },
  { index: 1, kind: "lcm", label: "LCM · 483 participant dots with both margins" },
  { index: 2, kind: "panel-j", label: "Panel scatter plot (d) · popularity bubble scatter" }
]), se = "#fecccb", de = "#1119ea", ce = "#ccccfe", c = { x0: 250, x1: 1580, y0: 150, y1: 880 }, L = { x: 72, y: 41, width: 1776, height: 998 }, U = {
  histogram: { left: 29, right: 1949, top: 3072, bottom: 4803 },
  // The scatter panel is clipped. These are the raster-visible bounds after
  // clipping, rather than the larger pre-clip SVG subtree bounds.
  scatter: { left: 18, right: 1988, top: 5244, bottom: 7002 }
};
function q(e, o, n, i, p, t = {}) {
  e.appendChild(s("text", { x: o, y: n, class: p, ...t }, i));
}
function Y(e, o, n) {
  e.appendChild(s("rect", {
    x: n.left,
    y: n.top,
    width: n.right - n.left,
    height: n.bottom - n.top,
    fill: "none",
    stroke: "none",
    "pointer-events": "none",
    "data-layout-footprint": o
  }));
}
function So(e) {
  return Math.max(0, Math.min(11, e <= 1 ? 0 : Math.ceil(e) - 1));
}
function co(e, o) {
  const n = Array.from({ length: 12 }, () => 0);
  return e.forEach((i) => {
    n[So(i[o])] += 1;
  }), n;
}
const Co = (e) => c.x0 + e / 10 * (c.x1 - c.x0), $o = (e) => c.y1 - e / 10 * (c.y1 - c.y0);
let j;
function Mo() {
  return j || (j = s("svg"), ae(j)), j;
}
function Eo(e) {
  const o = Mo().querySelector(`[data-scope="${e}"]`);
  if (!o) throw new Error(`Missing NET07 Redraw Figure scope: ${e}`);
  return o.cloneNode(!0);
}
function ge(e, o) {
  const n = Mo().querySelector(`#${o}`);
  if (!n) throw new Error(`Missing NET07 Redraw Figure definition: ${o}`);
  const i = s("defs");
  i.appendChild(n.cloneNode(!0)), e.appendChild(i);
}
function _o(e, o = e) {
  const n = e.right - e.left, i = e.bottom - e.top, p = Math.min(L.width * 0.6 / n, L.height * 0.6 / i), t = L.x + L.width / 2, l = L.y + L.height / 2;
  return `translate(${t - (o.left + o.right) / 2 * p} ${l - (o.top + o.bottom) / 2 * p}) scale(${p})`;
}
function no(e, o, n) {
  var t;
  zo(e), e.setAttribute("viewBox", `0 0 ${B} ${H}`), e.setAttribute("width", String(B)), e.setAttribute("height", String(H)), e.setAttribute("role", "img"), e.setAttribute("data-safe-area", "72,41,1848,1039"), e.classList.add("net07-kf", "net07-svg"), xo(e, B, H), (t = e.firstElementChild) == null || t.setAttribute("data-scene-id", "frame-backdrop");
  const i = s("g", { "data-scene-id": "popularity-viewport" }), p = s("g", { "data-scene-id": o, "data-panel": n });
  return i.appendChild(p), e.appendChild(i), p;
}
function ye(e, o, n) {
  const i = s("g", { "data-scene-id": "participant-records", "data-record-count": o.length }), p = /* @__PURE__ */ new Map();
  o.forEach((t) => {
    const l = `${t.observed}:${t.perceived}`, r = p.get(l) ?? 0;
    p.set(l, r + 1);
    const a = r * 2.399963229728653, f = 3.2 * Math.sqrt(r), d = Math.max(c.x0 + 4.1, Math.min(c.x1 - 4.1, Co(t.observed) + Math.cos(a) * f)), g = Math.max(c.y0 + 4.1, Math.min(c.y1 - 4.1, $o(t.perceived) + Math.sin(a) * f));
    i.appendChild(s("circle", {
      cx: d,
      cy: g,
      r: 4.1,
      fill: de,
      opacity: 0.72,
      "data-mark": "participant-record",
      "data-key": t.key,
      "data-source-row": t.sourceRow,
      "data-observed": t.observed,
      "data-perceived": t.perceived
    }));
  }), e.appendChild(i);
}
function No(e, o, n) {
  const i = s("g", { "data-scene-id": "participant-records", "data-record-count": o.length });
  o.forEach((p) => {
    const { cx: t, cy: l } = n(p);
    i.appendChild(s("circle", {
      cx: t,
      cy: l,
      r: 0.01,
      opacity: 0,
      "data-mark": "participant-record",
      "data-key": p.key,
      "data-source-row": p.sourceRow,
      "data-observed": p.observed,
      "data-perceived": p.perceived
    }));
  }), e.appendChild(i);
}
function ue(e, o, n) {
  const i = s("g", { "data-scene-id": "encoding-guides" });
  for (let p = 0; p <= 10; p += 1) {
    const t = Co(p), l = $o(p);
    i.appendChild(s("line", { x1: t, y1: c.y0, x2: t, y2: c.y1, class: "net07-kf-grid" })), i.appendChild(s("line", { x1: c.x0, y1: l, x2: c.x1, y2: l, class: "net07-kf-grid" })), p % 2 === 0 && (q(i, t, c.y1 + 49, String(p), "net07-kf-tick", { "text-anchor": "middle" }), q(i, c.x0 - 28, l + 10, String(p), "net07-kf-tick", { "text-anchor": "end" }));
  }
  i.appendChild(s("rect", { x: c.x0, y: c.y0, width: c.x1 - c.x0, height: c.y1 - c.y0, class: "net07-kf-axis" })), q(i, (c.x0 + c.x1) / 2, 55, o, "net07-kf-title", { "text-anchor": "middle" }), q(i, (c.x0 + c.x1) / 2, 91, n, "net07-kf-note", { "text-anchor": "middle" }), q(i, (c.x0 + c.x1) / 2, 1007, "In-degree", "net07-kf-axis-title", { "text-anchor": "middle" }), q(i, 82, (c.y0 + c.y1) / 2, "Perceived in-degree", "net07-kf-axis-title", { "text-anchor": "middle", transform: `rotate(-90 82 ${(c.y0 + c.y1) / 2})` }), e.appendChild(i);
}
function he(e, o) {
  var p, t;
  const n = no(e, "source-histogram-plane", "bar (b)");
  n.setAttribute("transform", _o(
    {
      left: k.barLeft,
      right: k.barRight,
      top: k.top,
      bottom: k.bottom
    },
    U.histogram
  )), Y(n, "panel-k0", {
    left: k.barLeft,
    right: k.barRight,
    top: k.top,
    bottom: k.bottom
  }), Y(n, "composition-k0", U.histogram);
  const i = Eo("popularity-distribution");
  (p = i.querySelector('[data-panel="bar"]')) == null || p.setAttribute("data-scene-id", "aggregate-summaries"), (t = i.querySelector('[data-guide="axes"]')) == null || t.setAttribute("data-scene-id", "encoding-guides"), n.appendChild(i), No(n, o, (l) => ({
    cx: oo(k, So(l.observed) + 0.5),
    cy: S(k, 0)
  }));
}
function me(e, o) {
  const n = no(e, "joint-participant-plane", "scatter plot (d)");
  n.setAttribute("transform", "translate(228 128) scale(0.8)"), Y(n, "panel-k1", { left: 51, right: 1763.35, top: 21, bottom: 1014.16 }), Y(n, "composition-k1", { left: 51, right: 1763.35, top: 21, bottom: 1014.16 }), ue(n, "483 shared participants", "Each dot retains one source-row key; margins recompute the two histogram branches");
  const i = co(o, "observed"), p = co(o, "perceived"), t = s("g", { "data-scene-id": "aggregate-summaries" }), l = (c.x1 - c.x0) / 12;
  i.forEach((r, a) => t.appendChild(s("rect", { x: c.x0 + a * l, y: 145 - r / 122 * 32, width: l - 2, height: r / 122 * 32, fill: se, "data-mark": "observed-marginal", "data-key": `observed:bin-${a + 1}`, "data-count": r }))), p.forEach((r, a) => t.appendChild(s("rect", { x: 1604, y: c.y1 - (a + 1) / 12 * (c.y1 - c.y0), width: r / 122 * 180, height: (c.y1 - c.y0) / 12 - 2, fill: ce, "data-mark": "perceived-marginal", "data-key": `perceived:bin-${a + 1}`, "data-count": r }))), n.appendChild(t), ye(n, o);
}
function be(e, o) {
  var p, t;
  const n = no(e, "target-scatter-plane", "scatter plot (d)");
  n.setAttribute("transform", _o(w, U.scatter)), Y(n, "panel-k2", w), Y(n, "composition-k2", U.scatter), ge(e, "net07-popularity-clip");
  const i = Eo("popularity-scatter");
  (p = i.querySelector('[data-panel="scatter plot"]')) == null || p.setAttribute("data-scene-id", "aggregate-summaries"), (t = i.querySelector('[data-guide="identity-and-frame"]')) == null || t.setAttribute("data-scene-id", "encoding-guides"), n.appendChild(i), No(n, o, (l) => ({
    cx: Ao(l.observed),
    cy: wo(l.perceived)
  }));
}
function To(e, o) {
  const n = ko();
  if (n.length !== 483 || new Set(n.map(({ key: p }) => p)).size !== 483) throw new Error("net07 Stage 8 requires exactly 483 unique popularity participant keys");
  const i = Math.max(0, Math.min(2, Math.trunc(o)));
  i === 0 ? he(e, n) : i === 1 ? me(e, n) : be(e, n), e.setAttribute("aria-label", io[i].label), e.setAttribute("data-keyframe-index", String(i)), e.setAttribute("data-participant-count", String(n.length));
}
const go = [0, 0.5, 1], W = "1c124cc9c652abda14659fd9d2c85832fdb7f2e0117ac39a9a22da536334814c";
let Z = null;
const I = (e) => Math.max(0, Math.min(1, e)), Po = (e) => {
  const o = I(e);
  return o * o * o * (o * (o * 6 - 15) + 10);
}, h = (e, o, n) => Po((e - o) / (n - o));
function ve(e) {
  const o = /^popularity-distribution:(Observed|Perceived) popularity:bin-(\d+)$/.exec(e);
  return o ? `${o[1].toLowerCase()}:bin-${o[2]}` : null;
}
function ze(e, o) {
  const n = e.querySelector('[data-scene-id="popularity-viewport"]');
  if (!n) throw new Error(`net07 Stage 9 capture is missing the Keyframe ${o} viewport`);
  n.setAttribute("data-transition-key", "viewport:popularity");
  const i = e.querySelector(
    '[data-scene-id="source-histogram-plane"], [data-scene-id="joint-participant-plane"], [data-scene-id="target-scatter-plane"]'
  );
  if (!i) throw new Error(`net07 Stage 9 capture is missing the Keyframe ${o} panel plane`);
  const p = i.getAttribute("data-scene-id");
  p && i.setAttribute("data-stage8-plane-id", p), i.removeAttribute("data-scene-id");
  const t = i.getAttribute("data-panel");
  t && i.setAttribute("data-stage8-panel", t), i.removeAttribute("data-panel"), i.setAttribute("data-transition-key", "carrier:popularity-main-plane"), i.setAttribute("data-transition-host", "single-panel-plane");
  const l = i.querySelector('[data-scene-id="aggregate-summaries"]'), r = i.querySelector('[data-scene-id="encoding-guides"]'), a = i.querySelector('[data-scene-id="participant-records"]');
  if (!l || !r || !a)
    throw new Error(`net07 Stage 9 capture is missing a persistent scene group at Keyframe ${o}`);
  if (o === 0) {
    const f = l.querySelector(':scope > [data-layer="marks"]');
    f && (l.append(...Array.from(f.children)), f.remove());
  }
  l.setAttribute("data-transition-key", "layer:aggregate-summaries"), r.setAttribute("data-transition-key", "layer:encoding-guides"), a.setAttribute("data-transition-key", "layer:participant-records"), a.querySelectorAll('[data-mark="participant-record"][data-key]').forEach((f) => {
    f.setAttribute("data-transition-key", `participant:${f.getAttribute("data-key")}`), f.setAttribute("data-participant-set-sha256", W);
  }), l.querySelectorAll('[data-mark="histogram-bar"][data-key]').forEach((f) => {
    const d = ve(f.getAttribute("data-key") ?? "");
    d && (f.setAttribute("data-stage8-mark", "histogram-bar"), f.setAttribute("data-stage8-key", f.getAttribute("data-key") ?? ""), f.setAttribute("data-mark", "popularity-marginal-bin"), f.setAttribute("data-key", d), f.setAttribute("data-transition-key", `marginal:${d}`));
  }), l.querySelectorAll('[data-mark$="-marginal"][data-key]').forEach((f) => {
    const d = f.getAttribute("data-key") ?? "";
    f.setAttribute("data-stage8-mark", f.getAttribute("data-mark") ?? ""), f.setAttribute("data-mark", "popularity-marginal-bin"), f.setAttribute("data-transition-key", `marginal:${d}`);
  }), l.querySelectorAll('[data-mark="count-bubble"]').forEach((f) => {
    const d = f.getAttribute("data-x"), g = f.getAttribute("data-y");
    f.setAttribute("data-transition-key", `joint-cell:${d}:${g}`), f.setAttribute("data-correspondence-basis", "groupby-observed-perceived-over-483-keys");
  }), i.append(r, l, a);
}
function xe(e) {
  return Array.from(e.querySelectorAll('[data-mark="participant-record"][data-key]'), (o) => o.getAttribute("data-key") ?? "").sort();
}
function ke(e) {
  const o = e.map(xe);
  if (o.some((r) => r.length !== 483 || new Set(r).size !== 483))
    throw new Error("net07 Stage 9 requires exactly 483 unique participant keys in every frozen Stage 8 capture");
  if (o.slice(1).some((r) => r.some((a, f) => a !== o[0][f])))
    throw new Error("net07 Stage 9 participant key sets differ across frozen Stage 8 captures");
  const n = e[1].querySelectorAll('[data-stage8-mark$="-marginal"][data-count]'), i = /* @__PURE__ */ new Map();
  if (n.forEach((r) => {
    var f;
    const a = (f = r.getAttribute("data-stage8-mark")) != null && f.startsWith("observed") ? "observed" : "perceived";
    i.set(a, (i.get(a) ?? 0) + Number(r.getAttribute("data-count") ?? 0));
  }), n.length !== 24 || i.get("observed") !== 483 || i.get("perceived") !== 483)
    throw new Error(`net07 Stage 9 marginal lineage failed: ${JSON.stringify(Object.fromEntries(i))}`);
  const p = /* @__PURE__ */ new Map();
  e[2].querySelectorAll('[data-mark="participant-record"]').forEach((r) => {
    const a = `${r.getAttribute("data-observed")}:${r.getAttribute("data-perceived")}`;
    p.set(a, (p.get(a) ?? 0) + 1);
  });
  const t = e[2].querySelectorAll('[data-mark="count-bubble"][data-count]');
  let l = 0;
  if (t.forEach((r) => {
    const a = `${r.getAttribute("data-x")}:${r.getAttribute("data-y")}`, f = Number(r.getAttribute("data-count") ?? 0);
    if (l += f, p.get(a) !== f)
      throw new Error(`net07 Stage 9 bubble membership mismatch at ${a}: ${p.get(a)}/${f}`);
    r.setAttribute("data-member-count", String(f));
  }), t.length !== 72 || p.size !== 72 || l !== 483)
    throw new Error(`net07 Stage 9 bubble lineage failed: bubbles=${t.length}, groups=${p.size}, records=${l}`);
}
function Ae() {
  if (!Z) {
    const e = Io(To, io.length, ze);
    ke(e), Z = e;
  }
  return Z;
}
function we(e) {
  const o = e.work.getAttribute("data-mark");
  if (o === "participant-record") {
    e.work.setAttribute("data-correspondence-kind", "exact-participant-key"), e.work.setAttribute("data-participant-set-sha256", W);
    return;
  }
  if (o === "count-bubble" && e.segmentIndex === 1 && e.phase === "enter") {
    e.work.setAttribute("opacity", String(Number(h(e.progress, 0.18, 0.78).toFixed(4)))), e.work.setAttribute("data-correspondence-kind", "declared-observed-perceived-group");
    return;
  }
  if (o === "linear-fit" && e.segmentIndex === 1 && e.phase === "enter") {
    e.work.setAttribute("opacity", String(Number(h(e.progress, 0.52, 0.9).toFixed(4))));
    return;
  }
  if (e.work.closest('[data-scene-id="encoding-guides"]') && e.phase !== "matched") {
    const n = e.phase === "enter" ? h(e.progress, 0.48, 0.92) : 1 - h(e.progress, 0.08, 0.52);
    e.work.setAttribute("opacity", String(Number(n.toFixed(4))));
  }
}
const R = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
function K(e, o) {
  return {
    a: e.a * o.a + e.c * o.b,
    b: e.b * o.a + e.d * o.b,
    c: e.a * o.c + e.c * o.d,
    d: e.b * o.c + e.d * o.d,
    e: e.a * o.e + e.c * o.f + e.e,
    f: e.b * o.e + e.d * o.f + e.f
  };
}
function Se(e) {
  let o = R;
  for (const n of (e == null ? void 0 : e.matchAll(/(matrix|translate|scale|rotate)\(([^)]+)\)/g)) ?? []) {
    const i = Array.from(n[2].matchAll(/[-+]?\d*\.?\d+(?:e[-+]?\d+)?/gi), (t) => Number(t[0]));
    let p = R;
    if (n[1] === "matrix" && i.length >= 6)
      p = { a: i[0], b: i[1], c: i[2], d: i[3], e: i[4], f: i[5] };
    else if (n[1] === "translate")
      p = { ...R, e: i[0] ?? 0, f: i[1] ?? 0 };
    else if (n[1] === "scale")
      p = { a: i[0] ?? 1, b: 0, c: 0, d: i[1] ?? i[0] ?? 1, e: 0, f: 0 };
    else if (n[1] === "rotate") {
      const t = (i[0] ?? 0) * Math.PI / 180, l = { a: Math.cos(t), b: Math.sin(t), c: -Math.sin(t), d: Math.cos(t), e: 0, f: 0 };
      if (i.length >= 3) {
        const [, r, a] = i;
        p = K(K({ ...R, e: r, f: a }, l), { ...R, e: -r, f: -a });
      } else p = l;
    }
    o = K(o, p);
  }
  return o;
}
function J(e) {
  const o = [];
  for (let n = e; n && n.tagName.toLowerCase() !== "svg"; n = n.parentElement)
    o.unshift(n);
  return o.reduce((n, i) => K(n, Se(i.getAttribute("transform"))), R);
}
function yo(e) {
  const o = /* @__PURE__ */ new Map();
  return e.querySelectorAll('[data-mark="participant-record"][data-key]').forEach((n) => {
    const i = J(n), p = Number(n.getAttribute("cx") ?? 0), t = Number(n.getAttribute("cy") ?? 0), l = Number(n.getAttribute("r") ?? 0), r = Math.sqrt(Math.hypot(i.a, i.b) * Math.hypot(i.c, i.d));
    o.set(n.getAttribute("data-key") ?? "", {
      x: i.a * p + i.c * t + i.e,
      y: i.b * p + i.d * t + i.f,
      radius: l * r,
      opacity: Number(n.getAttribute("opacity") ?? 1),
      sourceRow: n.getAttribute("data-source-row") ?? "",
      observed: n.getAttribute("data-observed") ?? "",
      perceived: n.getAttribute("data-perceived") ?? ""
    });
  }), o;
}
function uo(e) {
  e.querySelectorAll("*").forEach((o) => {
    for (const n of ["data-scene-id", "data-key", "data-record-key", "data-transition-key", "data-guide", "data-annotation"])
      o.removeAttribute(n);
  });
  for (const o of ["data-scene-id", "data-key", "data-record-key", "data-transition-key", "data-guide", "data-annotation"])
    e.removeAttribute(o);
}
function ho(e) {
  var o;
  (o = e.querySelector('[data-scene-id="participant-records"]')) == null || o.remove();
}
function mo(e, o) {
  const n = e.cloneNode(!0), p = Array.from(n.querySelectorAll('[data-scene-id="encoding-guides"], [data-guide], [data-layout-footprint]')), t = p.filter((l) => !p.some((r) => r !== l && r.contains(l)));
  return n.replaceChildren(...t), n.setAttribute("data-transition-layer", o), n;
}
function bo(e, o) {
  e.setAttribute("opacity", Number(o.toFixed(4)).toString());
}
const $ = (e, o, n) => e + (o - e) * n;
function D(e) {
  const o = J(e), n = Number(e.getAttribute("x") ?? 0), i = Number(e.getAttribute("y") ?? 0), p = Number(e.getAttribute("width") ?? 0), t = Number(e.getAttribute("height") ?? 0), l = [[n, i], [n + p, i], [n + p, i + t], [n, i + t]].map(([f, d]) => ({
    x: o.a * f + o.c * d + o.e,
    y: o.b * f + o.d * d + o.f
  })), r = l.map((f) => f.x), a = l.map((f) => f.y);
  return { x: Math.min(...r), y: Math.min(...a), width: Math.max(...r) - Math.min(...r), height: Math.max(...a) - Math.min(...a) };
}
function Ce(e) {
  const o = J(e), n = Number(e.getAttribute("cx") ?? 0), i = Number(e.getAttribute("cy") ?? 0), p = Number(e.getAttribute("r") ?? 0) * Math.sqrt(Math.hypot(o.a, o.b) * Math.hypot(o.c, o.d));
  return {
    cx: o.a * n + o.c * i + o.e,
    cy: o.b * n + o.d * i + o.f,
    radius: p
  };
}
function $e(e) {
  const o = J(e), n = (t, l) => ({ x: o.a * t + o.c * l + o.e, y: o.b * t + o.d * l + o.f }), i = n(Number(e.getAttribute("x1") ?? 0), Number(e.getAttribute("y1") ?? 0)), p = n(Number(e.getAttribute("x2") ?? 0), Number(e.getAttribute("y2") ?? 0));
  return { x1: i.x, y1: i.y, x2: p.x, y2: p.y };
}
function eo(e, o, n = 1) {
  const i = e.cloneNode(!0);
  return i.removeAttribute("transform"), i.setAttribute("x", o.x.toFixed(4)), i.setAttribute("y", o.y.toFixed(4)), i.setAttribute("width", Math.max(0, o.width).toFixed(4)), i.setAttribute("height", Math.max(0, o.height).toFixed(4)), i.setAttribute("opacity", I(n).toFixed(4)), i;
}
function Me(e, o, n = 1) {
  const i = e.cloneNode(!0);
  return i.removeAttribute("transform"), i.setAttribute("cx", o.cx.toFixed(4)), i.setAttribute("cy", o.cy.toFixed(4)), i.setAttribute("r", Math.max(1e-3, o.radius).toFixed(4)), i.setAttribute("opacity", I(n).toFixed(4)), i;
}
function Ee(e, o, n = 1) {
  const i = e.cloneNode(!0);
  return i.removeAttribute("transform"), i.setAttribute("x1", o.x1.toFixed(4)), i.setAttribute("y1", o.y1.toFixed(4)), i.setAttribute("x2", o.x2.toFixed(4)), i.setAttribute("y2", o.y2.toFixed(4)), i.setAttribute("opacity", I(n).toFixed(4)), i;
}
function vo(e, o) {
  const n = /* @__PURE__ */ new Map();
  return e.querySelectorAll(o).forEach((i) => {
    const p = i.getAttribute("data-key");
    p && n.set(p, i);
  }), n;
}
function Lo() {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "g");
  e.setAttribute("data-transition-key", "carrier:popularity-main-plane");
  const o = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return o.setAttribute("data-scene-id", "aggregate-summaries"), o.setAttribute("data-transition-key", "layer:aggregate-summaries"), o.setAttribute("data-transition-layer", "summaries"), o.setAttribute("data-record-support", "483-exact-participant-keys"), e.appendChild(o), { carrier: e, summaries: o };
}
function _e(e, o, n) {
  const { carrier: i, summaries: p } = Lo(), t = h(n, 0.08, 0.82), l = vo(e, '[data-mark="popularity-marginal-bin"][data-key]'), r = vo(o, '[data-mark="popularity-marginal-bin"][data-key]');
  for (const [f, d] of l) {
    const g = r.get(f);
    if (!g) throw new Error(`net07 histogram-to-margin mapping lost ${f}`);
    const u = D(d), y = D(g), v = eo(d, {
      x: $(u.x, y.x, t),
      y: $(u.y, y.y, t),
      width: $(u.width, y.width, t),
      height: $(u.height, y.height, t)
    });
    v.setAttribute("data-correspondence-kind", "declared-series-bin"), p.appendChild(v);
  }
  const a = 1 - h(n, 0.04, 0.32);
  return e.querySelectorAll('[data-mark="histogram-overlap"]').forEach((f) => {
    p.appendChild(eo(f, D(f), a));
  }), i;
}
function Ne(e, o, n) {
  const { carrier: i, summaries: p } = Lo(), t = 1 - h(n, 0.08, 0.46);
  e.querySelectorAll('[data-mark="popularity-marginal-bin"]').forEach((a) => {
    p.appendChild(eo(a, D(a), t));
  });
  const l = h(n, 0.24, 0.82);
  o.querySelectorAll('[data-mark="count-bubble"][data-key]').forEach((a) => {
    const f = Ce(a), d = Number(a.getAttribute("data-x")), g = Number(a.getAttribute("data-y")), u = d < 0 || d > 10 || g < 0 || g > 10, y = Me(
      a,
      { ...f, radius: f.radius * l },
      u ? 0 : l
    );
    y.setAttribute("data-correspondence-kind", "declared-observed-perceived-group"), y.setAttribute("data-correspondence-basis", "groupby-observed-perceived-over-483-keys"), p.appendChild(y);
  });
  const r = o.querySelector('[data-mark="linear-fit"]');
  return r && p.appendChild(Ee(r, $e(r), h(n, 0.62, 0.92))), i;
}
function Te(e, o, n) {
  const i = /* @__PURE__ */ new Set();
  for (const p of [o, n])
    p.querySelectorAll(":scope > defs").forEach((t) => {
      const l = t.outerHTML;
      i.has(l) || (i.add(l), e.appendChild(t.cloneNode(!0)));
    });
}
function Pe(e, o, n) {
  var ro, po, lo;
  const i = n < 0.5 ? 0 : 1, p = o[i], t = o[i + 1], l = i === 0 ? n / 0.5 : (n - 0.5) / 0.5, r = (ro = p.querySelector('[data-transition-key="carrier:popularity-main-plane"]')) == null ? void 0 : ro.cloneNode(!0), a = (po = t.querySelector('[data-transition-key="carrier:popularity-main-plane"]')) == null ? void 0 : po.cloneNode(!0), f = (lo = p.querySelector('[data-scene-id="frame-backdrop"]')) == null ? void 0 : lo.cloneNode(!0);
  if (!r || !a || !f) throw new Error(`net07 safe composition is incomplete for segment ${i}`);
  ho(r), ho(a);
  const d = mo(r, "guides"), g = mo(a, "guides"), u = l >= 0.5;
  uo(u ? d : g);
  const y = h(l, 0.4, 0.6), v = 1 - y, E = y;
  bo(d, v), bo(g, E);
  const A = i === 0 ? _e(p, t, l) : Ne(p, t, l), x = document.createElementNS("http://www.w3.org/2000/svg", "g");
  x.setAttribute("data-scene-id", "popularity-viewport"), x.setAttribute("data-transition-key", "viewport:popularity"), x.append(d, g, A);
  const _ = document.createElementNS("http://www.w3.org/2000/svg", "g");
  _.setAttribute("data-transition-key", "carrier:popularity-main-plane");
  const C = document.createElementNS("http://www.w3.org/2000/svg", "g");
  C.setAttribute("data-scene-id", "participant-records"), C.setAttribute("data-transition-key", "layer:participant-records"), C.setAttribute("data-record-count", "483");
  const X = yo(p), T = yo(t), P = i === 0 ? h(l, 0.08, 0.82) : h(l, 0.08, 0.72), qo = i === 0 ? h(l, 0.12, 0.62) : h(l, 0.42, 0.88), Ro = i === 0 ? h(l, 0.12, 0.52) : h(l, 0.52, 0.88);
  for (const [O, N] of X) {
    const F = T.get(O);
    if (!F) throw new Error(`net07 safe composition lost participant ${O}`);
    const m = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    m.setAttribute("cx", $(N.x, F.x, P).toFixed(4)), m.setAttribute("cy", $(N.y, F.y, P).toFixed(4)), m.setAttribute("r", Math.max(1e-3, $(N.radius, F.radius, qo)).toFixed(4)), m.setAttribute("fill", "#1119ea"), m.setAttribute("opacity", Math.max(0, $(N.opacity, F.opacity, Ro)).toFixed(4)), m.setAttribute("data-mark", "participant-record"), m.setAttribute("data-key", O), m.setAttribute("data-transition-key", `participant:${O}`), m.setAttribute("data-source-row", N.sourceRow), m.setAttribute("data-observed", N.observed), m.setAttribute("data-perceived", N.perceived), m.setAttribute("data-correspondence-kind", "exact-participant-key"), m.setAttribute("data-participant-set-sha256", W), C.appendChild(m);
  }
  _.appendChild(C), x.appendChild(_), e.replaceChildren(), Te(e, p, t), e.append(f, x), e.setAttribute("data-scene-authority", "stage-8-safe-screen-composite"), e.setAttribute("data-snapshot-segment", String(i)), e.setAttribute("data-animation-progress", n.toFixed(6));
}
function Le(e, o) {
  const n = I(Number.isFinite(o) ? o : 0), i = Ae();
  Fo(e, i, go, n, {
    easing: Po,
    motion: we,
    pairSemanticContainers: !0
  }), go.includes(n) || Pe(e, i, n), e.setAttribute("data-transition-id", "net07-fig1-popularity-histogram-to-bubble-scatter"), e.setAttribute("data-participant-count", "483"), e.setAttribute("data-participant-set-sha256", W), e.setAttribute("data-correspondence-basis", "exact-key-and-declared-observed-perceived-groupby");
}
const Ie = Yo(
  Go,
  {
    frame: Object.freeze({ width: B, height: H }),
    keyframes: io,
    renderKeyframe: To,
    renderAnimation: Le
  }
);
export {
  H,
  go as KEYFRAME_PROGRESS,
  io as KEYFRAME_SEQUENCE,
  B as W,
  Ie as popularityHistogramToBubbleScatterTransitionSpace,
  To as renderKeyframe,
  Le as renderPopularityHistogramToBubbleScatterAnimation,
  ae as renderSourceFigure
};
