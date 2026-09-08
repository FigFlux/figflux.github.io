import { d as f0 } from "./transition-space-Df4GnxL9.js";
import { r as k0, c as z0 } from "./svg-snapshot-transition-CHoy-cD5.js";
import { p as c0 } from "./csv-Ha6vz5IV.js";
import { c as m0, w as x0, e as x, t as E } from "./svg-DSCeB79j.js";
const A0 = "figure2story-transition-space/v1", _0 = "bar-a-to-treemap-b", C0 = "gap03-fig5", w0 = {
  transition_id: "gap03-fig5 · bar (a) → treemap (b)",
  panel_i: "bar (a)",
  panel_j: "treemap (b)"
}, S0 = {
  entry: "index.ts",
  keyframes: "keyframes.ts",
  animation: "animation.ts",
  audit: null
}, $0 = {
  width: 1920,
  height: 1080
}, E0 = [
  {
    index: 0,
    kind: "panel-i",
    label: "Panel bar (a)",
    progress: 0
  },
  {
    index: 1,
    kind: "lcm",
    label: "LCM",
    progress: 0.5
  },
  {
    index: 2,
    kind: "panel-j",
    label: "Panel treemap (b)",
    progress: 1
  }
], N0 = {
  worlds: [
    {
      id: "canyon-joint-world",
      dimensions: 3,
      keyframe_indices: [
        1
      ]
    }
  ],
  cameras: [
    {
      id: "canyon-joint-camera",
      world_id: "canyon-joint-world",
      projection: "perspective",
      keyframe_indices: [
        1
      ]
    }
  ],
  viewports: [
    {
      id: "canyon-transition-viewport",
      keyframe_indices: [
        0,
        1,
        2
      ]
    }
  ],
  planes: [
    {
      id: "source-bar-plane",
      panel: "bar (a)",
      keyframe_indices: [
        0
      ],
      result_refs: [
        "bars.feature-area",
        "bars.activities"
      ],
      position_fields: [
        "category",
        "percentage",
        "stack role"
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
      id: "joint-bar-xz-plane",
      panel: "bar (a)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "bars.feature-area",
        "bars.activities"
      ],
      position_fields: [
        "category",
        "percentage",
        "row depth"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Z"
      ],
      world_id: "canyon-joint-world",
      camera_id: "canyon-joint-camera"
    },
    {
      id: "joint-treemap-xy-plane",
      panel: "treemap (b)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "canyons.cells"
      ],
      position_fields: [
        "cell x",
        "cell y",
        "cell width",
        "cell height"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Y"
      ],
      world_id: "canyon-joint-world",
      camera_id: "canyon-joint-camera"
    },
    {
      id: "target-treemap-plane",
      panel: "treemap (b)",
      keyframe_indices: [
        2
      ],
      result_refs: [
        "canyons.cells"
      ],
      position_fields: [
        "cell x",
        "cell y",
        "cell width",
        "cell height"
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
      id: "canyons-value-group",
      role: "shared geomorphic_feature=Canyons group; two source bar marks correspond to one target group of 443 cells without individual record identity",
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
            id: "source-bar-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "canyon-joint-world"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-treemap-plane"
          }
        }
      ]
    },
    {
      id: "canyon-cells",
      role: "443 target-side published treemap cells with stable vectorized keys; present only after the Canyons group is opened",
      keyframe_indices: [
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "joint-treemap-xy-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-treemap-plane"
          }
        }
      ]
    },
    {
      id: "non-canyon-bars",
      role: "source-only category bars",
      keyframe_indices: [
        0,
        1
      ],
      hosts: [
        {
          keyframe_indices: [
            0
          ],
          host: {
            kind: "panel-plane",
            id: "source-bar-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "joint-bar-xz-plane"
          }
        }
      ]
    },
    {
      id: "chart-guides",
      role: "axes, labels and target annotations owned by their active plane",
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
            id: "source-bar-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "canyon-joint-world"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-treemap-plane"
          }
        }
      ]
    },
    {
      id: "frame-backdrop",
      role: "single viewport backdrop",
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
            id: "canyon-transition-viewport"
          }
        }
      ]
    }
  ]
}, F0 = {
  schema_version: A0,
  id: _0,
  figure_id: C0,
  pair: w0,
  modules: S0,
  frame: $0,
  keyframes: E0,
  scene: N0
}, B0 = `key,label,source_geomorphologies,activity_count,activity_pct,published_activity_label_pct,feature_area_pct,feature_area_pixel_width,feature_area_source_level\r
abyssal-hills,Abyssal hills,Abyssal Hills,2607,5.974151,6.0,35.0,770,level-4:published-png-axis-calibrated\r
abyssal-plains,Abyssal plains,Abyss|Abyssal Plains,3014,6.906824,6.9,23.3,512,level-4:published-png-axis-calibrated\r
abyssal-mountains,Abyssal mountains,Abyssal Mountains,1050,2.406160,2.4,7.5,166,level-4:published-png-axis-calibrated\r
rises,Rises,Rise,1144,2.621568,2.6,7.3,161,level-4:published-png-axis-calibrated\r
plateaus,Plateaus,Plateau,3734,8.556762,8.6,4.4,97,level-4:published-png-axis-calibrated\r
slope,Slope,Slope,5868,13.446996,13.4,3.0,67,level-4:published-png-axis-calibrated\r
troughs,Troughs,Trough|Glacial Trough,1820,4.170677,4.2,3.0,65,level-4:published-png-axis-calibrated\r
escarpments,Escarpments,Escarpment,6087,13.948852,13.9,2.8,61,level-4:published-png-axis-calibrated\r
fans,Fans,Fan,515,1.180164,1.2,2.2,49,level-4:published-png-axis-calibrated\r
seamounts-and-guyots,Seamounts & guyots,Seamount|Guyot,2936,6.728081,6.7,2.2,48,level-4:published-png-axis-calibrated\r
shelf,Shelf,Shelf|Shelf Low|Shelf Medium|Shelf High,703,1.610981,1.6,2.1,47,level-4:published-png-axis-calibrated\r
ridges,Ridges,Ridge,2428,5.563958,5.2,2.0,43,level-4:published-png-axis-calibrated\r
canyons,Canyons,Canyon,7026,16.100646,16.1,1.6,36,level-4:published-png-axis-calibrated\r
spreading-ridges,Spreading ridges,Spreading Ridge,2712,6.214767,6.2,1.5,33,level-4:published-png-axis-calibrated\r
hadal-trenches,Hadal-trenches,Hadal|Trench,341,0.781429,0.8,0.8,17,level-4:published-png-axis-calibrated\r
terraces,Terraces,Terrace,713,1.633897,1.6,0.7,15,level-4:published-png-axis-calibrated\r
rift-valleys,Rift valleys,Rift Valley,659,1.510152,1.5,0.4,8,level-4:published-png-axis-calibrated\r
shelf-valleys,Shelf valleys,Shelf Valley,280,0.641643,0.3,0.1,3,level-4:published-png-axis-calibrated\r
sills,Sills,Sill,1,0.002292,0.0,0.0,0,level-4:published-png-axis-calibrated\r
bridges,Bridges,Bridge,0,0.000000,0.0,0.0,0,level-4:published-png-axis-calibrated\r
`, P0 = `rank,key,label,paper_reported_activities,x,y,width,height,share_of_frame_pct,fill,inner_x,inner_y,inner_width,inner_height,interior_occupancy,source_level\r
1,monterey-canyon-usa,"Monterey Canyon, USA",3530,1543,63,1152,719,48.255034,#b05732,1546,66,1147,713,0.993310,level-4:published-png-vectorized\r
2,sagami-bay-canyon-system-japan,"Sagami Bay Canyon System, Japan",,1543,783,313,770,14.040944,#c7744c,1546,786,307,764,0.971379,level-4:published-png-vectorized\r
3,suruga-bay-canyon-system-japan,"Suruga Bay Canyon System, Japan",,1857,783,236,597,8.208194,#b05732,1860,786,230,591,0.963643,level-4:published-png-vectorized\r
4,oceanographer-gilbert-lydonia-canyons-usa,"Oceanographer, Gilbert, Lydonia Canyons, USA",,1857,1381,236,172,2.364840,#ffb268,1860,1384,230,166,0.835726,level-4:published-png-vectorized\r
5,great-bahama-canyon-bahamas,"Great Bahama Canyon, Bahamas",,2093,783,330,112,2.153244,#e48f48,2096,786,324,106,0.862363,level-4:published-png-vectorized\r
6,canyon-rank-006,,,2424,783,157,112,1.024422,#883e1f,2427,786,151,106,1.000000,level-4:published-png-vectorized\r
7,canyon-rank-007,,,2580,783,115,112,0.750373,#b05732,2583,786,110,106,1.000000,level-4:published-png-vectorized\r
8,canyon-rank-008,,,2093,896,124,100,0.722409,#883e1f,2096,899,118,94,1.000000,level-4:published-png-vectorized\r
9,canyon-rank-009,,,2318,896,104,100,0.605891,#ffb268,2321,899,98,94,0.999891,level-4:published-png-vectorized\r
10,canyon-rank-010,,,2217,896,102,100,0.594239,#c7744c,2220,899,96,94,1.000000,level-4:published-png-vectorized\r
11,canyon-rank-011,,,2423,896,95,100,0.553458,#b05732,2426,899,89,94,1.000000,level-4:published-png-vectorized\r
12,canyon-rank-012,,,2607,895,88,102,0.522931,#fce2d6,2610,898,84,96,0.999752,level-4:published-png-vectorized\r
13,canyon-rank-013,,,2519,896,87,100,0.506851,#c7744c,2522,899,81,94,1.000000,level-4:published-png-vectorized\r
14,canyon-rank-014,,,2093,996,70,121,0.493452,#b05732,2096,999,64,115,1.000000,level-4:published-png-vectorized\r
15,canyon-rank-015,,,2093,1116,72,104,0.436242,#ffb268,2096,1119,66,98,0.989796,level-4:published-png-vectorized\r
16,canyon-rank-016,,,2093,1220,71,90,0.372273,#e48f48,2096,1223,65,84,0.999634,level-4:published-png-vectorized\r
17,canyon-rank-017,,,2093,1309,72,83,0.348154,#c7744c,2096,1312,66,77,1.000000,level-4:published-png-vectorized\r
18,canyon-rank-018,,,2093,1392,70,82,0.334405,#883e1f,2096,1395,64,76,1.000000,level-4:published-png-vectorized\r
19,canyon-rank-019,,,2093,1474,71,79,0.326773,#e48f48,2096,1477,65,73,1.000000,level-4:published-png-vectorized\r
20,canyon-rank-020,,,2164,996,84,65,0.318093,#fce0d3,2167,999,78,59,1.000000,level-4:published-png-vectorized\r
21,canyon-rank-021,,,2332,996,83,65,0.314306,#fce0d3,2335,999,77,59,1.000000,level-4:published-png-vectorized\r
22,canyon-rank-022,,,2249,996,83,64,0.309471,#b05732,2252,999,77,58,1.000000,level-4:published-png-vectorized\r
23,canyon-rank-023,,,2488,996,73,65,0.276438,#fcdfd2,2491,999,67,59,0.999747,level-4:published-png-vectorized\r
24,canyon-rank-024,,,2416,996,72,64,0.268456,#883e1f,2419,999,66,58,1.000000,level-4:published-png-vectorized\r
25,canyon-rank-025,,,2562,996,69,64,0.257271,#ffb268,2565,999,63,58,1.000000,level-4:published-png-vectorized\r
26,canyon-rank-026,,,2164,1061,55,77,0.246726,#fcded0,2167,1064,49,71,1.000000,level-4:published-png-vectorized\r
27,canyon-rank-027,,,2631,996,64,64,0.238628,#883e1f,2634,999,59,58,1.000000,level-4:published-png-vectorized\r
28,canyon-rank-028,,,2164,1137,55,69,0.221092,#c7744c,2167,1140,49,63,1.000000,level-4:published-png-vectorized\r
29,canyon-rank-029,,,2164,1206,55,65,0.208275,#fcddcf,2167,1209,49,59,1.000000,level-4:published-png-vectorized\r
30,canyon-rank-030,,,2164,1271,55,63,0.201867,#883e1f,2167,1274,49,57,1.000000,level-4:published-png-vectorized\r
31,canyon-rank-031,,,2164,1333,55,57,0.182641,#b05732,2167,1336,49,51,1.000000,level-4:published-png-vectorized\r
32,canyon-rank-032,,,2164,1445,55,57,0.182641,#fcdcce,2167,1448,49,51,1.000000,level-4:published-png-vectorized\r
33,canyon-rank-033,,,2164,1391,55,55,0.176233,#b05732,2167,1394,49,49,1.000000,level-4:published-png-vectorized\r
34,canyon-rank-034,,,2275,1060,59,50,0.171863,#fddbcc,2278,1063,53,44,0.955403,level-4:published-png-vectorized\r
35,canyon-rank-035,,,2391,1061,59,48,0.164989,#c7744c,2394,1064,53,42,1.000000,level-4:published-png-vectorized\r
36,canyon-rank-036,,,2164,1502,55,51,0.163416,#ffb268,2167,1505,49,45,1.000000,level-4:published-png-vectorized\r
37,canyon-rank-037,,,2335,1061,57,48,0.159396,#e48f48,2338,1064,51,42,1.000000,level-4:published-png-vectorized\r
38,canyon-rank-038,,,2220,1061,56,48,0.156600,#883e1f,2223,1064,50,42,1.000000,level-4:published-png-vectorized\r
39,canyon-rank-039,,,2449,1061,54,48,0.151007,#fcdacb,2452,1064,48,42,1.000000,level-4:published-png-vectorized\r
40,canyon-rank-040,,,2220,1213,43,54,0.135277,#fbd8c8,2223,1216,37,48,1.000000,level-4:published-png-vectorized\r
41,canyon-rank-041,,,2551,1061,48,48,0.134228,#c7744c,2554,1064,42,42,1.000000,level-4:published-png-vectorized\r
42,canyon-rank-042,,,2220,1109,43,53,0.132772,#fcd9c9,2223,1112,37,47,1.000000,level-4:published-png-vectorized\r
43,canyon-rank-043,,,2220,1161,43,53,0.132772,#b05732,2223,1164,37,47,1.000000,level-4:published-png-vectorized\r
44,canyon-rank-044,,,2504,1061,47,48,0.131432,#e48f48,2507,1064,41,42,1.000000,level-4:published-png-vectorized\r
45,canyon-rank-045,,,2600,1061,47,48,0.131432,#fcd9c9,2603,1064,41,42,1.000000,level-4:published-png-vectorized\r
46,canyon-rank-046,,,2648,1061,47,48,0.131432,#883e1f,2651,1064,42,42,1.000000,level-4:published-png-vectorized\r
47,canyon-rank-047,,,2264,1109,47,44,0.120479,#fbd6c5,2267,1112,41,38,1.000000,level-4:published-png-vectorized\r
48,canyon-rank-048,,,2311,1109,47,44,0.120479,#b05732,2314,1112,41,38,1.000000,level-4:published-png-vectorized\r
49,canyon-rank-049,,,2220,1315,43,48,0.120246,#e48f48,2223,1318,37,42,1.000000,level-4:published-png-vectorized\r
50,canyon-rank-050,,,2220,1505,43,48,0.120246,#fbd6c5,2223,1508,37,42,1.000000,level-4:published-png-vectorized\r
51,canyon-rank-051,,,2220,1363,43,47,0.117741,#fbd7c7,2223,1366,37,41,1.000000,level-4:published-png-vectorized\r
52,canyon-rank-052,,,2220,1458,43,47,0.117741,#c7744c,2223,1461,37,41,1.000000,level-4:published-png-vectorized\r
53,canyon-rank-053,,,2220,1268,43,46,0.115236,#c7744c,2223,1271,37,40,1.000000,level-4:published-png-vectorized\r
54,canyon-rank-054,,,2220,1411,43,46,0.115236,#883e1f,2223,1414,37,40,1.000000,level-4:published-png-vectorized\r
55,canyon-rank-055,,,2442,1109,43,44,0.110226,#fbd5c4,2445,1112,37,38,1.000000,level-4:published-png-vectorized\r
56,canyon-rank-056,,,2653,1108,42,45,0.110109,#fad2c2,2656,1111,37,39,0.975052,level-4:published-png-vectorized\r
57,canyon-rank-057,,,2401,1109,42,44,0.107662,#ffb268,2404,1112,36,38,1.000000,level-4:published-png-vectorized\r
58,canyon-rank-058,,,2485,1109,42,44,0.107662,#fbd3c3,2488,1112,36,38,1.000000,level-4:published-png-vectorized\r
59,canyon-rank-059,,,2527,1109,42,44,0.107662,#fbd3c3,2530,1112,36,38,1.000000,level-4:published-png-vectorized\r
60,canyon-rank-060,,,2612,1109,42,44,0.107662,#e48f48,2615,1112,36,38,1.000000,level-4:published-png-vectorized\r
61,canyon-rank-061,,,2359,1109,41,44,0.105099,#fbd5c4,2362,1112,35,38,1.000000,level-4:published-png-vectorized\r
62,canyon-rank-062,,,2570,1109,41,44,0.105099,#ffb268,2573,1112,35,38,1.000000,level-4:published-png-vectorized\r
63,canyon-rank-063,,,2264,1198,35,46,0.093797,#fad2bf,2267,1201,29,40,1.000000,level-4:published-png-vectorized\r
64,canyon-rank-064,,,2264,1288,35,46,0.093797,#fad2bf,2267,1291,29,40,1.000000,level-4:published-png-vectorized\r
65,canyon-rank-065,,,2264,1333,35,46,0.093797,#c7744c,2267,1336,29,40,1.000000,level-4:published-png-vectorized\r
66,canyon-rank-066,,,2264,1153,35,45,0.091758,#fad2c2,2267,1156,29,39,1.000000,level-4:published-png-vectorized\r
67,canyon-rank-067,,,2264,1244,35,45,0.091758,#ffb268,2267,1247,29,39,1.000000,level-4:published-png-vectorized\r
68,canyon-rank-068,,,2264,1379,35,45,0.091758,#ffb268,2267,1382,29,39,1.000000,level-4:published-png-vectorized\r
69,canyon-rank-069,,,2264,1424,35,45,0.091758,#fbd1bd,2267,1427,29,39,1.000000,level-4:published-png-vectorized\r
70,canyon-rank-070,,,2264,1469,35,45,0.091758,#fbd0bc,2267,1472,29,39,1.000000,level-4:published-png-vectorized\r
71,canyon-rank-071,,,2300,1191,33,44,0.084592,#ffb268,2303,1194,27,38,1.000000,level-4:published-png-vectorized\r
72,canyon-rank-072,,,2407,1153,37,39,0.084067,#fbcfba,2410,1156,31,33,1.000000,level-4:published-png-vectorized\r
73,canyon-rank-073,,,2551,1153,37,39,0.084067,#fbceb9,2554,1156,31,33,1.000000,level-4:published-png-vectorized\r
74,canyon-rank-074,,,2480,1153,36,39,0.081795,#fbceb9,2483,1156,30,33,1.000000,level-4:published-png-vectorized\r
75,canyon-rank-075,,,2588,1153,36,39,0.081795,#b05732,2591,1156,30,33,1.000000,level-4:published-png-vectorized\r
76,canyon-rank-076,,,2624,1153,36,39,0.081795,#fbcdb7,2627,1156,30,33,1.000000,level-4:published-png-vectorized\r
77,canyon-rank-077,,,2300,1153,35,39,0.079523,#ffb268,2303,1156,29,33,1.000000,level-4:published-png-vectorized\r
78,canyon-rank-078,,,2336,1153,35,39,0.079523,#fbcfba,2339,1156,29,33,1.000000,level-4:published-png-vectorized\r
79,canyon-rank-079,,,2372,1153,35,39,0.079523,#883e1f,2375,1156,29,33,1.000000,level-4:published-png-vectorized\r
80,canyon-rank-080,,,2445,1153,35,39,0.079523,#fbcfba,2448,1156,29,33,1.000000,level-4:published-png-vectorized\r
81,canyon-rank-081,,,2517,1153,35,39,0.079523,#c7744c,2520,1156,29,33,1.000000,level-4:published-png-vectorized\r
82,canyon-rank-082,,,2660,1153,35,39,0.079523,#c7744c,2663,1156,30,33,1.000000,level-4:published-png-vectorized\r
83,canyon-rank-083,,,2264,1515,35,38,0.077484,#883e1f,2267,1518,29,32,1.000000,level-4:published-png-vectorized\r
84,canyon-rank-084,,,2300,1235,33,36,0.069211,#faccb5,2303,1238,27,30,1.000000,level-4:published-png-vectorized\r
85,canyon-rank-085,,,2300,1341,33,36,0.069211,#e48f48,2303,1344,27,30,1.000000,level-4:published-png-vectorized\r
86,canyon-rank-086,,,2300,1482,33,36,0.069211,#e48f48,2303,1485,27,30,1.000000,level-4:published-png-vectorized\r
87,canyon-rank-087,,,2333,1191,31,38,0.068629,#c7744c,2336,1194,25,32,1.000000,level-4:published-png-vectorized\r
88,canyon-rank-088,,,2333,1228,31,38,0.068629,#fac9b0,2336,1231,25,32,1.000000,level-4:published-png-vectorized\r
89,canyon-rank-089,,,2300,1306,33,35,0.067289,#fbcbb4,2303,1309,27,29,1.000000,level-4:published-png-vectorized\r
90,canyon-rank-090,,,2300,1412,33,35,0.067289,#b05732,2303,1415,27,29,1.000000,level-4:published-png-vectorized\r
91,canyon-rank-091,,,2300,1518,33,35,0.067289,#fac9b0,2303,1521,27,29,1.000000,level-4:published-png-vectorized\r
92,canyon-rank-092,,,2333,1266,31,37,0.066823,#fac9b0,2336,1269,25,31,1.000000,level-4:published-png-vectorized\r
93,canyon-rank-093,,,2333,1303,31,37,0.066823,#b05732,2336,1306,25,31,1.000000,level-4:published-png-vectorized\r
94,canyon-rank-094,,,2333,1340,31,37,0.066823,#e48f48,2336,1343,25,31,1.000000,level-4:published-png-vectorized\r
95,canyon-rank-095,,,2300,1271,33,34,0.065366,#b05732,2303,1274,27,28,1.000000,level-4:published-png-vectorized\r
96,canyon-rank-096,,,2300,1377,33,34,0.065366,#fbcbb4,2303,1380,27,28,1.000000,level-4:published-png-vectorized\r
97,canyon-rank-097,,,2300,1448,33,34,0.065366,#facab2,2303,1451,27,28,1.000000,level-4:published-png-vectorized\r
98,canyon-rank-098,,,2364,1191,35,29,0.059133,#fac6ab,2367,1194,29,23,0.967016,level-4:published-png-vectorized\r
99,canyon-rank-099,,,2573,1191,36,28,0.058725,#fac3a8,2576,1194,30,22,0.998485,level-4:published-png-vectorized\r
100,canyon-rank-100,,,2609,1191,36,28,0.058725,#fac3a8,2612,1194,30,22,0.996970,level-4:published-png-vectorized\r
101,canyon-rank-101,,,2398,1191,37,27,0.058201,#e48f48,2401,1194,31,21,0.967742,level-4:published-png-vectorized\r
102,canyon-rank-102,,,2333,1406,31,31,0.055987,#ffb268,2336,1409,25,25,1.000000,level-4:published-png-vectorized\r
103,canyon-rank-103,,,2470,1191,34,28,0.055462,#fac5a9,2473,1194,28,22,1.000000,level-4:published-png-vectorized\r
104,canyon-rank-104,,,2435,1191,35,27,0.055055,#e48f48,2438,1194,29,21,0.998358,level-4:published-png-vectorized\r
105,canyon-rank-105,,,2333,1377,31,30,0.054181,#fac8af,2336,1380,25,24,1.000000,level-4:published-png-vectorized\r
106,canyon-rank-106,,,2333,1465,31,30,0.054181,#fac7ad,2336,1468,25,24,1.000000,level-4:published-png-vectorized\r
107,canyon-rank-107,,,2505,1191,34,27,0.053482,#ffb268,2508,1194,28,21,1.000000,level-4:published-png-vectorized\r
108,canyon-rank-108,,,2540,1191,34,27,0.053482,#883e1f,2543,1194,28,21,1.000000,level-4:published-png-vectorized\r
109,canyon-rank-109,,,2333,1436,31,29,0.052375,#fac7ad,2336,1439,25,23,0.998261,level-4:published-png-vectorized\r
110,canyon-rank-110,,,2333,1524,31,29,0.052375,#fac6ab,2336,1527,25,23,1.000000,level-4:published-png-vectorized\r
111,canyon-rank-111,,,2333,1495,31,28,0.050569,#fac6ab,2336,1498,25,22,1.000000,level-4:published-png-vectorized\r
112,canyon-rank-112,,,2391,1219,29,26,0.043927,#fac1a4,2394,1222,23,20,1.000000,level-4:published-png-vectorized\r
113,canyon-rank-113,,,2420,1219,29,26,0.043927,#fac1a4,2423,1222,23,20,1.000000,level-4:published-png-vectorized\r
114,canyon-rank-114,,,2558,1219,29,26,0.043927,#fabfa0,2561,1222,23,20,1.000000,level-4:published-png-vectorized\r
115,canyon-rank-115,,,2391,1245,29,26,0.043927,#f9b996,2394,1248,23,20,0.950000,level-4:published-png-vectorized\r
116,canyon-rank-116,,,2391,1364,23,32,0.042878,#f9b48d,2394,1367,17,26,0.997738,level-4:published-png-vectorized\r
117,canyon-rank-117,,,2365,1425,27,27,0.042471,#c7744c,2368,1428,21,21,1.000000,level-4:published-png-vectorized\r
118,canyon-rank-118,,,2530,1219,28,26,0.042412,#e48f48,2533,1222,22,20,1.000000,level-4:published-png-vectorized\r
119,canyon-rank-119,,,2364,1475,28,26,0.042412,#f8ba98,2367,1478,22,20,0.956818,level-4:published-png-vectorized\r
120,canyon-rank-120,,,2420,1246,29,25,0.042238,#f9b996,2423,1249,23,19,0.995423,level-4:published-png-vectorized\r
121,canyon-rank-121,,,2391,1271,23,31,0.041538,#f9b590,2394,1274,17,25,1.000000,level-4:published-png-vectorized\r
122,canyon-rank-122,,,2391,1302,23,31,0.041538,#f9b48d,2394,1305,17,25,1.000000,level-4:published-png-vectorized\r
123,canyon-rank-123,,,2391,1333,23,31,0.041538,#f9b48d,2394,1336,17,25,1.000000,level-4:published-png-vectorized\r
124,canyon-rank-124,,,2391,1428,23,31,0.041538,#fab38b,2394,1431,17,25,1.000000,level-4:published-png-vectorized\r
125,canyon-rank-125,,,2391,1459,23,31,0.041538,#fab38b,2394,1462,17,25,1.000000,level-4:published-png-vectorized\r
126,canyon-rank-126,,,2644,1191,26,27,0.040898,#ffb268,2647,1194,20,21,1.000000,level-4:published-png-vectorized\r
127,canyon-rank-127,,,2365,1219,27,26,0.040898,#fac2a6,2368,1222,21,20,1.000000,level-4:published-png-vectorized\r
128,canyon-rank-128,,,2448,1219,27,26,0.040898,#ffb268,2451,1222,21,20,1.000000,level-4:published-png-vectorized\r
129,canyon-rank-129,,,2503,1219,27,26,0.040898,#fac0a2,2506,1222,21,20,1.000000,level-4:published-png-vectorized\r
130,canyon-rank-130,,,2586,1219,27,26,0.040898,#fabfa0,2589,1222,21,20,1.000000,level-4:published-png-vectorized\r
131,canyon-rank-131,,,2641,1219,27,26,0.040898,#c7744c,2644,1222,21,20,1.000000,level-4:published-png-vectorized\r
132,canyon-rank-132,,,2668,1219,27,26,0.040898,#f9be9e,2671,1222,22,20,1.000000,level-4:published-png-vectorized\r
133,canyon-rank-133,,,2365,1322,27,26,0.040898,#f9bd9c,2368,1325,21,20,1.000000,level-4:published-png-vectorized\r
134,canyon-rank-134,,,2365,1527,27,26,0.040898,#883e1f,2368,1530,21,20,1.000000,level-4:published-png-vectorized\r
135,canyon-rank-135,,,2529,1246,29,24,0.040548,#f9b792,2532,1249,23,18,1.000000,level-4:published-png-vectorized\r
136,canyon-rank-136,,,2391,1397,23,30,0.040199,#e48f48,2394,1400,17,24,1.000000,level-4:published-png-vectorized\r
137,canyon-rank-137,,,2476,1219,26,26,0.039383,#fac0a2,2479,1222,20,20,1.000000,level-4:published-png-vectorized\r
138,canyon-rank-138,,,2614,1219,26,26,0.039383,#fabfa0,2617,1222,20,20,1.000000,level-4:published-png-vectorized\r
139,canyon-rank-139,,,2365,1246,27,25,0.039325,#f9be9e,2368,1249,21,19,1.000000,level-4:published-png-vectorized\r
140,canyon-rank-140,,,2365,1271,27,25,0.039325,#ffb268,2368,1274,21,19,1.000000,level-4:published-png-vectorized\r
141,canyon-rank-141,,,2365,1296,27,25,0.039325,#f9bd9c,2368,1299,21,19,1.000000,level-4:published-png-vectorized\r
142,canyon-rank-142,,,2365,1348,27,25,0.039325,#c7744c,2368,1351,21,19,1.000000,level-4:published-png-vectorized\r
143,canyon-rank-143,,,2365,1374,27,25,0.039325,#f8ba9a,2368,1377,21,19,1.000000,level-4:published-png-vectorized\r
144,canyon-rank-144,,,2365,1399,27,25,0.039325,#f8ba9a,2368,1402,21,19,1.000000,level-4:published-png-vectorized\r
145,canyon-rank-145,,,2365,1451,27,25,0.039325,#f8ba98,2368,1454,21,19,1.000000,level-4:published-png-vectorized\r
146,canyon-rank-146,,,2365,1502,27,25,0.039325,#f8ba98,2368,1505,21,19,1.000000,level-4:published-png-vectorized\r
147,canyon-rank-147,,,2671,1191,24,28,0.039150,#fac2a6,2674,1194,19,22,1.000000,level-4:published-png-vectorized\r
148,canyon-rank-148,,,2475,1246,27,24,0.037752,#f9b893,2478,1249,21,18,1.000000,level-4:published-png-vectorized\r
149,canyon-rank-149,,,2503,1246,27,24,0.037752,#f9b893,2506,1249,21,18,1.000000,level-4:published-png-vectorized\r
150,canyon-rank-150,,,2558,1246,27,24,0.037752,#883e1f,2561,1249,21,18,1.000000,level-4:published-png-vectorized\r
151,canyon-rank-151,,,2586,1246,27,24,0.037752,#f9b792,2589,1249,21,18,1.000000,level-4:published-png-vectorized\r
152,canyon-rank-152,,,2641,1246,27,24,0.037752,#e48f48,2644,1249,21,18,1.000000,level-4:published-png-vectorized\r
153,canyon-rank-153,,,2668,1246,27,24,0.037752,#f9b590,2671,1249,22,18,1.000000,level-4:published-png-vectorized\r
154,canyon-rank-154,,,2448,1246,26,24,0.036353,#f9b893,2451,1249,20,18,1.000000,level-4:published-png-vectorized\r
155,canyon-rank-155,,,2614,1246,26,24,0.036353,#f9b590,2617,1249,20,18,1.000000,level-4:published-png-vectorized\r
156,canyon-rank-156,,,2391,1511,23,23,0.030819,#f9b289,2394,1514,17,17,0.996540,level-4:published-png-vectorized\r
157,canyon-rank-157,,,2413,1335,23,22,0.029479,#f8ab7d,2416,1338,17,16,0.941176,level-4:published-png-vectorized\r
158,canyon-rank-158,,,2414,1400,22,23,0.029479,#f9aa79,2417,1403,16,17,0.992647,level-4:published-png-vectorized\r
159,canyon-rank-159,,,2414,1444,22,23,0.029479,#f8a977,2417,1447,16,17,0.992647,level-4:published-png-vectorized\r
160,canyon-rank-160,,,2391,1490,23,22,0.029479,#f9b289,2394,1493,17,16,0.941176,level-4:published-png-vectorized\r
161,canyon-rank-161,,,2414,1379,22,22,0.028197,#f9aa79,2417,1382,16,16,0.996094,level-4:published-png-vectorized\r
162,canyon-rank-162,,,2414,1466,22,22,0.028197,#f8a977,2417,1469,16,16,0.996094,level-4:published-png-vectorized\r
163,canyon-rank-163,,,2413,1292,23,21,0.028139,#f8ab7d,2416,1295,17,15,1.000000,level-4:published-png-vectorized\r
164,canyon-rank-164,,,2500,1292,23,21,0.028139,#f8a671,2503,1295,17,15,1.000000,level-4:published-png-vectorized\r
165,canyon-rank-165,,,2413,1314,23,21,0.028139,#f8ab7d,2416,1317,17,15,1.000000,level-4:published-png-vectorized\r
166,canyon-rank-166,,,2437,1400,21,23,0.028139,#f69f60,2440,1403,15,17,1.000000,level-4:published-png-vectorized\r
167,canyon-rank-167,,,2413,1423,23,21,0.028139,#f8a977,2416,1426,17,15,0.949020,level-4:published-png-vectorized\r
168,canyon-rank-168,,,2437,1444,21,23,0.028139,#f69f60,2440,1447,15,17,1.000000,level-4:published-png-vectorized\r
169,canyon-rank-169,,,2607,1314,31,15,0.027090,#f79b54,2610,1317,25,9,1.000000,level-4:published-png-vectorized\r
170,canyon-rank-170,,,2479,1292,22,21,0.026916,#f8a671,2482,1295,16,15,1.000000,level-4:published-png-vectorized\r
171,canyon-rank-171,,,2522,1292,22,21,0.026916,#f8a56e,2525,1295,16,15,1.000000,level-4:published-png-vectorized\r
172,canyon-rank-172,,,2544,1292,22,21,0.026916,#f8a56e,2547,1295,16,15,1.000000,level-4:published-png-vectorized\r
173,canyon-rank-173,,,2566,1292,22,21,0.026916,#f8a56e,2569,1295,16,15,1.000000,level-4:published-png-vectorized\r
174,canyon-rank-174,,,2609,1292,22,21,0.026916,#f8a36a,2612,1295,16,15,1.000000,level-4:published-png-vectorized\r
175,canyon-rank-175,,,2631,1292,22,21,0.026916,#f8a36a,2634,1295,16,15,1.000000,level-4:published-png-vectorized\r
176,canyon-rank-176,,,2414,1358,22,21,0.026916,#f9aa79,2417,1361,16,15,1.000000,level-4:published-png-vectorized\r
177,canyon-rank-177,,,2437,1379,21,22,0.026916,#f7a065,2440,1382,15,16,1.000000,level-4:published-png-vectorized\r
178,canyon-rank-178,,,2437,1466,21,22,0.026916,#f79e5c,2440,1469,15,16,1.000000,level-4:published-png-vectorized\r
179,canyon-rank-179,,,2414,1488,22,21,0.026916,#f8a773,2417,1491,16,15,1.000000,level-4:published-png-vectorized\r
180,canyon-rank-180,,,2414,1510,22,21,0.026916,#f8a773,2417,1513,16,15,1.000000,level-4:published-png-vectorized\r
181,canyon-rank-181,,,2414,1532,22,21,0.026916,#f8a773,2417,1535,16,15,1.000000,level-4:published-png-vectorized\r
182,canyon-rank-182,,,2413,1271,23,20,0.026799,#f9b186,2416,1274,17,14,1.000000,level-4:published-png-vectorized\r
183,canyon-rank-183,,,2500,1271,23,20,0.026799,#f8af84,2503,1274,17,14,1.000000,level-4:published-png-vectorized\r
184,canyon-rank-184,,,2391,1533,23,20,0.026799,#f9b289,2394,1536,17,14,1.000000,level-4:published-png-vectorized\r
185,canyon-rank-185,,,2437,1292,21,21,0.025692,#f8a671,2440,1295,15,15,1.000000,level-4:published-png-vectorized\r
186,canyon-rank-186,,,2588,1292,21,21,0.025692,#f8a36a,2591,1295,15,15,1.000000,level-4:published-png-vectorized\r
187,canyon-rank-187,,,2653,1292,21,21,0.025692,#f8a267,2656,1295,15,15,1.000000,level-4:published-png-vectorized\r
188,canyon-rank-188,,,2674,1292,21,21,0.025692,#f8a267,2677,1295,16,15,1.000000,level-4:published-png-vectorized\r
189,canyon-rank-189,,,2437,1314,21,21,0.025692,#f8a267,2440,1317,15,15,1.000000,level-4:published-png-vectorized\r
190,canyon-rank-190,,,2437,1336,21,21,0.025692,#f7a065,2440,1339,15,15,1.000000,level-4:published-png-vectorized\r
191,canyon-rank-191,,,2437,1358,21,21,0.025692,#f7a065,2440,1361,15,15,1.000000,level-4:published-png-vectorized\r
192,canyon-rank-192,,,2437,1423,21,21,0.025692,#f69f60,2440,1426,15,15,1.000000,level-4:published-png-vectorized\r
193,canyon-rank-193,,,2437,1488,21,21,0.025692,#f79e5c,2440,1491,15,15,1.000000,level-4:published-png-vectorized\r
194,canyon-rank-194,,,2437,1510,21,21,0.025692,#f79e5c,2440,1513,15,15,1.000000,level-4:published-png-vectorized\r
195,canyon-rank-195,,,2437,1532,21,21,0.025692,#f79e5c,2440,1535,15,15,1.000000,level-4:published-png-vectorized\r
196,canyon-rank-196,,,2479,1271,22,20,0.025634,#f8af84,2482,1274,16,14,1.000000,level-4:published-png-vectorized\r
197,canyon-rank-197,,,2522,1271,22,20,0.025634,#f8af84,2525,1274,16,14,1.000000,level-4:published-png-vectorized\r
198,canyon-rank-198,,,2544,1271,22,20,0.025634,#f8ae81,2547,1274,16,14,1.000000,level-4:published-png-vectorized\r
199,canyon-rank-199,,,2566,1271,22,20,0.025634,#f8ae81,2569,1274,16,14,1.000000,level-4:published-png-vectorized\r
200,canyon-rank-200,,,2609,1271,22,20,0.025634,#f8ae81,2612,1274,16,14,1.000000,level-4:published-png-vectorized\r
201,canyon-rank-201,,,2631,1271,22,20,0.025634,#f8ad7f,2634,1274,16,14,1.000000,level-4:published-png-vectorized\r
202,canyon-rank-202,,,2488,1314,29,15,0.025343,#f79c59,2491,1317,23,9,1.000000,level-4:published-png-vectorized\r
203,canyon-rank-203,,,2518,1314,29,15,0.025343,#f79c59,2521,1317,23,9,1.000000,level-4:published-png-vectorized\r
204,canyon-rank-204,,,2577,1314,29,15,0.025343,#f79b54,2580,1317,23,9,1.000000,level-4:published-png-vectorized\r
205,canyon-rank-205,,,2437,1271,21,20,0.024469,#b05732,2440,1274,15,14,1.000000,level-4:published-png-vectorized\r
206,canyon-rank-206,,,2588,1271,21,20,0.024469,#f8ae81,2591,1274,15,14,1.000000,level-4:published-png-vectorized\r
207,canyon-rank-207,,,2653,1271,21,20,0.024469,#f8ad7f,2656,1274,15,14,1.000000,level-4:published-png-vectorized\r
208,canyon-rank-208,,,2674,1271,21,20,0.024469,#f8ad7f,2677,1274,16,14,1.000000,level-4:published-png-vectorized\r
209,canyon-rank-209,,,2459,1292,20,21,0.024469,#f8a671,2462,1295,14,15,1.000000,level-4:published-png-vectorized\r
210,canyon-rank-210,,,2459,1314,28,15,0.024469,#f79c59,2462,1317,22,9,1.000000,level-4:published-png-vectorized\r
211,canyon-rank-211,,,2548,1314,28,15,0.024469,#f79b54,2551,1317,22,9,1.000000,level-4:published-png-vectorized\r
212,canyon-rank-212,,,2459,1271,20,20,0.023304,#f9b186,2462,1274,14,14,1.000000,level-4:published-png-vectorized\r
213,canyon-rank-213,,,2622,1330,16,15,0.013982,#ef9143,2625,1333,10,9,1.000000,level-4:published-png-vectorized\r
214,canyon-rank-214,,,2652,1330,15,16,0.013982,#ef9143,2655,1333,9,10,0.911111,level-4:published-png-vectorized\r
215,canyon-rank-215,,,2615,1508,16,15,0.013982,#9e5e29,2618,1511,10,9,1.000000,level-4:published-png-vectorized\r
216,canyon-rank-216,,,2660,1520,15,16,0.013982,#925726,2663,1523,9,10,0.988889,level-4:published-png-vectorized\r
217,canyon-rank-217,,,2660,1537,15,16,0.013982,#925726,2663,1540,9,10,1.000000,level-4:published-png-vectorized\r
218,canyon-rank-218,,,2631,1360,17,14,0.013866,#db843e,2634,1363,11,8,1.000000,level-4:published-png-vectorized\r
219,canyon-rank-219,,,2551,1375,17,14,0.013866,#d4803b,2554,1378,11,8,1.000000,level-4:published-png-vectorized\r
220,canyon-rank-220,,,2631,1375,17,14,0.013866,#d17f3a,2634,1378,11,8,1.000000,level-4:published-png-vectorized\r
221,canyon-rank-221,,,2551,1390,17,14,0.013866,#cb7a37,2554,1393,11,8,1.000000,level-4:published-png-vectorized\r
222,canyon-rank-222,,,2631,1390,17,14,0.013866,#c97936,2634,1393,11,8,1.000000,level-4:published-png-vectorized\r
223,canyon-rank-223,,,2551,1405,17,14,0.013866,#c27535,2554,1408,11,8,1.000000,level-4:published-png-vectorized\r
224,canyon-rank-224,,,2631,1405,17,14,0.013866,#bf7434,2634,1408,11,8,1.000000,level-4:published-png-vectorized\r
225,canyon-rank-225,,,2551,1434,17,14,0.013866,#be7133,2554,1437,11,8,1.000000,level-4:published-png-vectorized\r
226,canyon-rank-226,,,2631,1434,17,14,0.013866,#b16a2f,2634,1437,11,8,1.000000,level-4:published-png-vectorized\r
227,canyon-rank-227,,,2551,1449,17,14,0.013866,#be7133,2554,1452,11,8,1.000000,level-4:published-png-vectorized\r
228,canyon-rank-228,,,2551,1464,17,14,0.013866,#bd7034,2554,1467,11,8,1.000000,level-4:published-png-vectorized\r
229,canyon-rank-229,,,2551,1479,17,14,0.013866,#bd7034,2554,1482,11,8,1.000000,level-4:published-png-vectorized\r
230,canyon-rank-230,,,2551,1494,17,14,0.013866,#bd7034,2554,1497,11,8,1.000000,level-4:published-png-vectorized\r
231,canyon-rank-231,,,2551,1509,17,14,0.013866,#ba7032,2554,1512,11,8,1.000000,level-4:published-png-vectorized\r
232,canyon-rank-232,,,2551,1524,17,14,0.013866,#ba7032,2554,1527,11,8,1.000000,level-4:published-png-vectorized\r
233,canyon-rank-233,,,2551,1539,17,14,0.013866,#ba7032,2554,1542,11,8,1.000000,level-4:published-png-vectorized\r
234,canyon-rank-234,,,2660,1507,18,13,0.013633,#945826,2663,1510,12,7,1.000000,level-4:published-png-vectorized\r
235,canyon-rank-235,,,2637,1314,15,15,0.013108,#f79950,2640,1317,9,9,1.000000,level-4:published-png-vectorized\r
236,canyon-rank-236,,,2652,1314,15,15,0.013108,#f79950,2655,1317,9,9,1.000000,level-4:published-png-vectorized\r
237,canyon-rank-237,,,2666,1314,15,15,0.013108,#f79950,2669,1317,9,9,1.000000,level-4:published-png-vectorized\r
238,canyon-rank-238,,,2637,1330,15,15,0.013108,#ef9143,2640,1333,9,9,1.000000,level-4:published-png-vectorized\r
239,canyon-rank-239,,,2666,1330,15,15,0.013108,#ee8f43,2669,1333,9,9,1.000000,level-4:published-png-vectorized\r
240,canyon-rank-240,,,2646,1507,15,15,0.013108,#975927,2649,1510,9,9,1.000000,level-4:published-png-vectorized\r
241,canyon-rank-241,,,2631,1538,15,15,0.013108,#975b28,2634,1541,9,9,1.000000,level-4:published-png-vectorized\r
242,canyon-rank-242,,,2646,1538,15,15,0.013108,#945826,2649,1541,9,9,1.000000,level-4:published-png-vectorized\r
243,canyon-rank-243,,,2505,1360,16,14,0.013050,#df873e,2508,1363,10,8,1.000000,level-4:published-png-vectorized\r
244,canyon-rank-244,,,2521,1360,16,14,0.013050,#df873e,2524,1363,10,8,1.000000,level-4:published-png-vectorized\r
245,canyon-rank-245,,,2537,1360,16,14,0.013050,#dd863f,2540,1363,10,8,1.000000,level-4:published-png-vectorized\r
246,canyon-rank-246,,,2585,1360,16,14,0.013050,#dc853d,2588,1363,10,8,1.000000,level-4:published-png-vectorized\r
247,canyon-rank-247,,,2616,1360,16,14,0.013050,#dc853d,2619,1363,10,8,1.000000,level-4:published-png-vectorized\r
248,canyon-rank-248,,,2505,1375,16,14,0.013050,#da833d,2508,1378,10,8,1.000000,level-4:published-png-vectorized\r
249,canyon-rank-249,,,2521,1375,16,14,0.013050,#d4803b,2524,1378,10,8,1.000000,level-4:published-png-vectorized\r
250,canyon-rank-250,,,2585,1375,16,14,0.013050,#d37f3a,2588,1378,10,8,1.000000,level-4:published-png-vectorized\r
251,canyon-rank-251,,,2616,1375,16,14,0.013050,#d37f3a,2619,1378,10,8,1.000000,level-4:published-png-vectorized\r
252,canyon-rank-252,,,2505,1390,16,14,0.013050,#da833d,2508,1393,10,8,1.000000,level-4:published-png-vectorized\r
253,canyon-rank-253,,,2521,1390,16,14,0.013050,#d07e3a,2524,1393,10,8,1.000000,level-4:published-png-vectorized\r
254,canyon-rank-254,,,2585,1390,16,14,0.013050,#cb7a37,2588,1393,10,8,1.000000,level-4:published-png-vectorized\r
255,canyon-rank-255,,,2616,1390,16,14,0.013050,#c97936,2619,1393,10,8,1.000000,level-4:published-png-vectorized\r
256,canyon-rank-256,,,2505,1405,16,14,0.013050,#da833d,2508,1408,10,8,1.000000,level-4:published-png-vectorized\r
257,canyon-rank-257,,,2521,1405,16,14,0.013050,#d07e3a,2524,1408,10,8,1.000000,level-4:published-png-vectorized\r
258,canyon-rank-258,,,2585,1405,16,14,0.013050,#c27535,2588,1408,10,8,1.000000,level-4:published-png-vectorized\r
259,canyon-rank-259,,,2616,1405,16,14,0.013050,#bf7434,2619,1408,10,8,1.000000,level-4:published-png-vectorized\r
260,canyon-rank-260,,,2505,1420,16,14,0.013050,#d8833b,2508,1423,10,8,1.000000,level-4:published-png-vectorized\r
261,canyon-rank-261,,,2521,1420,16,14,0.013050,#cf7d39,2524,1423,10,8,1.000000,level-4:published-png-vectorized\r
262,canyon-rank-262,,,2600,1434,16,14,0.013050,#b16a2f,2603,1437,10,8,1.000000,level-4:published-png-vectorized\r
263,canyon-rank-263,,,2616,1434,16,14,0.013050,#b16a2f,2619,1437,10,8,1.000000,level-4:published-png-vectorized\r
264,canyon-rank-264,,,2505,1435,16,14,0.013050,#d8833b,2508,1438,10,8,1.000000,level-4:published-png-vectorized\r
265,canyon-rank-265,,,2521,1435,16,14,0.013050,#cf7d39,2524,1438,10,8,1.000000,level-4:published-png-vectorized\r
266,canyon-rank-266,,,2600,1449,16,14,0.013050,#aa652c,2603,1452,10,8,1.000000,level-4:published-png-vectorized\r
267,canyon-rank-267,,,2616,1449,16,14,0.013050,#aa652c,2619,1452,10,8,1.000000,level-4:published-png-vectorized\r
268,canyon-rank-268,,,2631,1449,16,14,0.013050,#a8642d,2634,1452,10,8,1.000000,level-4:published-png-vectorized\r
269,canyon-rank-269,,,2505,1464,16,14,0.013050,#d7823c,2508,1467,10,8,1.000000,level-4:published-png-vectorized\r
270,canyon-rank-270,,,2521,1464,16,14,0.013050,#ce7c39,2524,1467,10,8,1.000000,level-4:published-png-vectorized\r
271,canyon-rank-271,,,2615,1478,16,14,0.013050,#a0602a,2618,1481,10,8,1.000000,level-4:published-png-vectorized\r
272,canyon-rank-272,,,2631,1478,16,14,0.013050,#9d5d2a,2634,1481,10,8,1.000000,level-4:published-png-vectorized\r
273,canyon-rank-273,,,2505,1479,16,14,0.013050,#d7823c,2508,1482,10,8,1.000000,level-4:published-png-vectorized\r
274,canyon-rank-274,,,2521,1479,16,14,0.013050,#ce7c39,2524,1482,10,8,1.000000,level-4:published-png-vectorized\r
275,canyon-rank-275,,,2615,1493,16,14,0.013050,#9e5e29,2618,1496,10,8,1.000000,level-4:published-png-vectorized\r
276,canyon-rank-276,,,2505,1494,16,14,0.013050,#d7823c,2508,1497,10,8,1.000000,level-4:published-png-vectorized\r
277,canyon-rank-277,,,2521,1494,16,14,0.013050,#ce7c39,2524,1497,10,8,1.000000,level-4:published-png-vectorized\r
278,canyon-rank-278,,,2505,1509,16,14,0.013050,#d6813b,2508,1512,10,8,1.000000,level-4:published-png-vectorized\r
279,canyon-rank-279,,,2521,1509,16,14,0.013050,#cc7b38,2524,1512,10,8,1.000000,level-4:published-png-vectorized\r
280,canyon-rank-280,,,2505,1524,16,14,0.013050,#d6813b,2508,1527,10,8,1.000000,level-4:published-png-vectorized\r
281,canyon-rank-281,,,2521,1524,16,14,0.013050,#cc7b38,2524,1527,10,8,1.000000,level-4:published-png-vectorized\r
282,canyon-rank-282,,,2615,1524,16,14,0.013050,#9e5e29,2618,1527,10,8,1.000000,level-4:published-png-vectorized\r
283,canyon-rank-283,,,2505,1539,16,14,0.013050,#d6813b,2508,1542,10,8,1.000000,level-4:published-png-vectorized\r
284,canyon-rank-284,,,2521,1539,16,14,0.013050,#cc7b38,2524,1542,10,8,1.000000,level-4:published-png-vectorized\r
285,canyon-rank-285,,,2615,1539,16,14,0.013050,#9d5d2a,2618,1542,10,8,1.000000,level-4:published-png-vectorized\r
286,canyon-rank-286,,,2631,1346,17,13,0.012875,#e48b40,2634,1349,11,7,1.000000,level-4:published-png-vectorized\r
287,canyon-rank-287,,,2551,1420,17,13,0.012875,#be7133,2554,1423,11,7,1.000000,level-4:published-png-vectorized\r
288,canyon-rank-288,,,2631,1420,17,13,0.012875,#b76d30,2634,1423,11,7,1.000000,level-4:published-png-vectorized\r
289,canyon-rank-289,,,2675,1520,10,22,0.012817,#905525,2678,1523,4,16,1.000000,level-4:published-png-vectorized\r
290,canyon-rank-290,,,2675,1542,20,11,0.012817,#905525,2678,1545,15,5,1.000000,level-4:published-png-vectorized\r
291,canyon-rank-291,,,2681,1314,14,15,0.012234,#f7984b,2684,1317,9,9,1.000000,level-4:published-png-vectorized\r
292,canyon-rank-292,,,2474,1330,14,15,0.012234,#f39345,2477,1333,8,9,1.000000,level-4:published-png-vectorized\r
293,canyon-rank-293,,,2489,1330,14,15,0.012234,#f39345,2492,1333,8,9,1.000000,level-4:published-png-vectorized\r
294,canyon-rank-294,,,2504,1330,14,15,0.012234,#f39345,2507,1333,8,9,1.000000,level-4:published-png-vectorized\r
295,canyon-rank-295,,,2533,1330,14,15,0.012234,#f19344,2536,1333,8,9,1.000000,level-4:published-png-vectorized\r
296,canyon-rank-296,,,2548,1330,14,15,0.012234,#f19344,2551,1333,8,9,1.000000,level-4:published-png-vectorized\r
297,canyon-rank-297,,,2563,1330,14,15,0.012234,#f09244,2566,1333,8,9,1.000000,level-4:published-png-vectorized\r
298,canyon-rank-298,,,2592,1330,14,15,0.012234,#f09244,2595,1333,8,9,1.000000,level-4:published-png-vectorized\r
299,canyon-rank-299,,,2607,1330,14,15,0.012234,#f09244,2610,1333,8,9,1.000000,level-4:published-png-vectorized\r
300,canyon-rank-300,,,2681,1330,14,15,0.012234,#ee8f43,2684,1333,9,9,1.000000,level-4:published-png-vectorized\r
301,canyon-rank-301,,,2474,1346,15,14,0.012234,#ee8f43,2477,1349,9,8,1.000000,level-4:published-png-vectorized\r
302,canyon-rank-302,,,2569,1360,15,14,0.012234,#dd863f,2572,1363,9,8,1.000000,level-4:published-png-vectorized\r
303,canyon-rank-303,,,2601,1360,15,14,0.012234,#dc853d,2604,1363,9,8,1.000000,level-4:published-png-vectorized\r
304,canyon-rank-304,,,2649,1360,15,14,0.012234,#db843e,2652,1363,9,8,1.000000,level-4:published-png-vectorized\r
305,canyon-rank-305,,,2680,1360,15,14,0.012234,#db843e,2683,1363,10,8,1.000000,level-4:published-png-vectorized\r
306,canyon-rank-306,,,2474,1375,15,14,0.012234,#ed9043,2477,1378,9,8,1.000000,level-4:published-png-vectorized\r
307,canyon-rank-307,,,2537,1375,15,14,0.012234,#d4803b,2540,1378,9,8,1.000000,level-4:published-png-vectorized\r
308,canyon-rank-308,,,2569,1375,15,14,0.012234,#d37f3a,2572,1378,9,8,1.000000,level-4:published-png-vectorized\r
309,canyon-rank-309,,,2601,1375,15,14,0.012234,#d37f3a,2604,1378,9,8,1.000000,level-4:published-png-vectorized\r
310,canyon-rank-310,,,2649,1375,15,14,0.012234,#d17f3a,2652,1378,9,8,1.000000,level-4:published-png-vectorized\r
311,canyon-rank-311,,,2680,1375,15,14,0.012234,#d07e3a,2683,1378,10,8,1.000000,level-4:published-png-vectorized\r
312,canyon-rank-312,,,2474,1390,15,14,0.012234,#ed9043,2477,1393,9,8,1.000000,level-4:published-png-vectorized\r
313,canyon-rank-313,,,2537,1390,15,14,0.012234,#cc7b38,2540,1393,9,8,1.000000,level-4:published-png-vectorized\r
314,canyon-rank-314,,,2569,1390,15,14,0.012234,#cb7a37,2572,1393,9,8,1.000000,level-4:published-png-vectorized\r
315,canyon-rank-315,,,2601,1390,15,14,0.012234,#c97936,2604,1393,9,8,1.000000,level-4:published-png-vectorized\r
316,canyon-rank-316,,,2649,1390,15,14,0.012234,#c87837,2652,1393,9,8,1.000000,level-4:published-png-vectorized\r
317,canyon-rank-317,,,2680,1390,15,14,0.012234,#c87837,2683,1393,10,8,1.000000,level-4:published-png-vectorized\r
318,canyon-rank-318,,,2474,1405,15,14,0.012234,#ec8f43,2477,1408,9,8,1.000000,level-4:published-png-vectorized\r
319,canyon-rank-319,,,2537,1405,15,14,0.012234,#c67736,2540,1408,9,8,1.000000,level-4:published-png-vectorized\r
320,canyon-rank-320,,,2569,1405,15,14,0.012234,#c27535,2572,1408,9,8,1.000000,level-4:published-png-vectorized\r
321,canyon-rank-321,,,2601,1405,15,14,0.012234,#bf7434,2604,1408,9,8,1.000000,level-4:published-png-vectorized\r
322,canyon-rank-322,,,2649,1405,15,14,0.012234,#be7434,2652,1408,9,8,1.000000,level-4:published-png-vectorized\r
323,canyon-rank-323,,,2680,1405,15,14,0.012234,#be7434,2683,1408,10,8,1.000000,level-4:published-png-vectorized\r
324,canyon-rank-324,,,2474,1420,15,14,0.012234,#ec8f43,2477,1423,9,8,1.000000,level-4:published-png-vectorized\r
325,canyon-rank-325,,,2537,1420,15,14,0.012234,#c67736,2540,1423,9,8,1.000000,level-4:published-png-vectorized\r
326,canyon-rank-326,,,2584,1434,15,14,0.012234,#b16a2f,2587,1437,9,8,1.000000,level-4:published-png-vectorized\r
327,canyon-rank-327,,,2664,1434,15,14,0.012234,#af692f,2667,1437,9,8,1.000000,level-4:published-png-vectorized\r
328,canyon-rank-328,,,2680,1434,15,14,0.012234,#af692f,2683,1437,10,8,1.000000,level-4:published-png-vectorized\r
329,canyon-rank-329,,,2474,1435,15,14,0.012234,#ec8f43,2477,1438,9,8,1.000000,level-4:published-png-vectorized\r
330,canyon-rank-330,,,2537,1449,15,14,0.012234,#c57736,2540,1452,9,8,1.000000,level-4:published-png-vectorized\r
331,canyon-rank-331,,,2584,1449,15,14,0.012234,#ad682e,2587,1452,9,8,1.000000,level-4:published-png-vectorized\r
332,canyon-rank-332,,,2648,1449,15,14,0.012234,#a8642d,2651,1452,9,8,1.000000,level-4:published-png-vectorized\r
333,canyon-rank-333,,,2664,1449,15,14,0.012234,#a8642d,2667,1452,9,8,1.000000,level-4:published-png-vectorized\r
334,canyon-rank-334,,,2680,1449,15,14,0.012234,#a6632c,2683,1452,10,8,1.000000,level-4:published-png-vectorized\r
335,canyon-rank-335,,,2474,1450,15,14,0.012234,#eb8e41,2477,1453,9,8,1.000000,level-4:published-png-vectorized\r
336,canyon-rank-336,,,2537,1464,15,14,0.012234,#c57736,2540,1467,9,8,1.000000,level-4:published-png-vectorized\r
337,canyon-rank-337,,,2584,1464,15,14,0.012234,#ad682e,2587,1467,9,8,1.000000,level-4:published-png-vectorized\r
338,canyon-rank-338,,,2648,1478,15,14,0.012234,#9d5d2a,2651,1481,9,8,1.000000,level-4:published-png-vectorized\r
339,canyon-rank-339,,,2664,1478,15,14,0.012234,#9b5c29,2667,1481,9,8,1.000000,level-4:published-png-vectorized\r
340,canyon-rank-340,,,2680,1478,15,14,0.012234,#9b5c29,2683,1481,10,8,1.000000,level-4:published-png-vectorized\r
341,canyon-rank-341,,,2474,1479,15,14,0.012234,#eb8e41,2477,1482,9,8,1.000000,level-4:published-png-vectorized\r
342,canyon-rank-342,,,2537,1479,15,14,0.012234,#c57736,2540,1482,9,8,1.000000,level-4:published-png-vectorized\r
343,canyon-rank-343,,,2584,1479,15,14,0.012234,#ad682e,2587,1482,9,8,1.000000,level-4:published-png-vectorized\r
344,canyon-rank-344,,,2631,1493,15,14,0.012234,#9b5c29,2634,1496,9,8,1.000000,level-4:published-png-vectorized\r
345,canyon-rank-345,,,2474,1494,15,14,0.012234,#e98d42,2477,1497,9,8,1.000000,level-4:published-png-vectorized\r
346,canyon-rank-346,,,2537,1494,15,14,0.012234,#c37635,2540,1497,9,8,1.000000,level-4:published-png-vectorized\r
347,canyon-rank-347,,,2584,1494,15,14,0.012234,#ab662e,2587,1497,9,8,1.000000,level-4:published-png-vectorized\r
348,canyon-rank-348,,,2631,1508,15,14,0.012234,#9b5c29,2634,1511,9,8,1.000000,level-4:published-png-vectorized\r
349,canyon-rank-349,,,2474,1509,15,14,0.012234,#e98d42,2477,1512,9,8,1.000000,level-4:published-png-vectorized\r
350,canyon-rank-350,,,2537,1509,15,14,0.012234,#c37635,2540,1512,9,8,1.000000,level-4:published-png-vectorized\r
351,canyon-rank-351,,,2584,1509,15,14,0.012234,#ab662e,2587,1512,9,8,1.000000,level-4:published-png-vectorized\r
352,canyon-rank-352,,,2631,1523,15,14,0.012234,#975b28,2634,1526,9,8,1.000000,level-4:published-png-vectorized\r
353,canyon-rank-353,,,2646,1523,15,14,0.012234,#945826,2649,1526,9,8,1.000000,level-4:published-png-vectorized\r
354,canyon-rank-354,,,2474,1524,15,14,0.012234,#e98d42,2477,1527,9,8,1.000000,level-4:published-png-vectorized\r
355,canyon-rank-355,,,2537,1524,15,14,0.012234,#c37635,2540,1527,9,8,1.000000,level-4:published-png-vectorized\r
356,canyon-rank-356,,,2584,1524,15,14,0.012234,#ab662e,2587,1527,9,8,1.000000,level-4:published-png-vectorized\r
357,canyon-rank-357,,,2474,1539,15,14,0.012234,#e98d42,2477,1542,9,8,1.000000,level-4:published-png-vectorized\r
358,canyon-rank-358,,,2537,1539,15,14,0.012234,#c37635,2540,1542,9,8,1.000000,level-4:published-png-vectorized\r
359,canyon-rank-359,,,2584,1539,15,14,0.012234,#aa652c,2587,1542,9,8,1.000000,level-4:published-png-vectorized\r
360,canyon-rank-360,,,2505,1346,16,13,0.012118,#e88d40,2508,1349,10,7,1.000000,level-4:published-png-vectorized\r
361,canyon-rank-361,,,2521,1346,16,13,0.012118,#e88d40,2524,1349,10,7,1.000000,level-4:published-png-vectorized\r
362,canyon-rank-362,,,2537,1346,16,13,0.012118,#e78c41,2540,1349,10,7,1.000000,level-4:published-png-vectorized\r
363,canyon-rank-363,,,2585,1346,16,13,0.012118,#e68b40,2588,1349,10,7,1.000000,level-4:published-png-vectorized\r
364,canyon-rank-364,,,2616,1346,16,13,0.012118,#e68b40,2619,1349,10,7,1.000000,level-4:published-png-vectorized\r
365,canyon-rank-365,,,2600,1420,16,13,0.012118,#b96e31,2603,1423,10,7,1.000000,level-4:published-png-vectorized\r
366,canyon-rank-366,,,2616,1420,16,13,0.012118,#b96e31,2619,1423,10,7,1.000000,level-4:published-png-vectorized\r
367,canyon-rank-367,,,2505,1450,16,13,0.012118,#d8833b,2508,1453,10,7,1.000000,level-4:published-png-vectorized\r
368,canyon-rank-368,,,2521,1450,16,13,0.012118,#cf7d39,2524,1453,10,7,1.000000,level-4:published-png-vectorized\r
369,canyon-rank-369,,,2615,1464,16,13,0.012118,#a2612b,2618,1467,10,7,1.000000,level-4:published-png-vectorized\r
370,canyon-rank-370,,,2631,1464,16,13,0.012118,#a2612b,2634,1467,10,7,1.000000,level-4:published-png-vectorized\r
371,canyon-rank-371,,,2646,1493,16,13,0.012118,#975b28,2649,1496,10,7,1.000000,level-4:published-png-vectorized\r
372,canyon-rank-372,,,2663,1493,16,13,0.012118,#975927,2666,1496,10,7,1.000000,level-4:published-png-vectorized\r
373,canyon-rank-373,,,2679,1507,16,13,0.012118,#925726,2682,1510,11,7,1.000000,level-4:published-png-vectorized\r
374,canyon-rank-374,,,2686,1520,9,22,0.011535,#905525,2689,1523,4,16,1.000000,level-4:published-png-vectorized\r
375,canyon-rank-375,,,2459,1330,14,14,0.011419,#f7984b,2462,1333,8,8,1.000000,level-4:published-png-vectorized\r
376,canyon-rank-376,,,2459,1345,14,14,0.011419,#f7984b,2462,1348,8,8,1.000000,level-4:published-png-vectorized\r
377,canyon-rank-377,,,2459,1360,14,14,0.011419,#f79645,2462,1363,8,8,1.000000,level-4:published-png-vectorized\r
378,canyon-rank-378,,,2490,1360,14,14,0.011419,#e58a40,2493,1363,8,8,1.000000,level-4:published-png-vectorized\r
379,canyon-rank-379,,,2554,1360,14,14,0.011419,#dd863f,2557,1363,8,8,1.000000,level-4:published-png-vectorized\r
380,canyon-rank-380,,,2665,1360,14,14,0.011419,#db843e,2668,1363,8,8,1.000000,level-4:published-png-vectorized\r
381,canyon-rank-381,,,2459,1375,14,14,0.011419,#f79645,2462,1378,8,8,1.000000,level-4:published-png-vectorized\r
382,canyon-rank-382,,,2490,1375,14,14,0.011419,#e58a40,2493,1378,8,8,1.000000,level-4:published-png-vectorized\r
383,canyon-rank-383,,,2665,1375,14,14,0.011419,#d17f3a,2668,1378,8,8,1.000000,level-4:published-png-vectorized\r
384,canyon-rank-384,,,2459,1390,14,14,0.011419,#f79645,2462,1393,8,8,1.000000,level-4:published-png-vectorized\r
385,canyon-rank-385,,,2490,1390,14,14,0.011419,#e2893f,2493,1393,8,8,1.000000,level-4:published-png-vectorized\r
386,canyon-rank-386,,,2665,1390,14,14,0.011419,#c87837,2668,1393,8,8,1.000000,level-4:published-png-vectorized\r
387,canyon-rank-387,,,2490,1405,14,14,0.011419,#e2893f,2493,1408,8,8,1.000000,level-4:published-png-vectorized\r
388,canyon-rank-388,,,2665,1405,14,14,0.011419,#be7434,2668,1408,8,8,1.000000,level-4:published-png-vectorized\r
389,canyon-rank-389,,,2459,1419,14,14,0.011419,#f69546,2462,1422,8,8,1.000000,level-4:published-png-vectorized\r
390,canyon-rank-390,,,2490,1420,14,14,0.011419,#e2893f,2493,1423,8,8,1.000000,level-4:published-png-vectorized\r
391,canyon-rank-391,,,2459,1434,14,14,0.011419,#f69546,2462,1437,8,8,1.000000,level-4:published-png-vectorized\r
392,canyon-rank-392,,,2569,1434,14,14,0.011419,#b66d31,2572,1437,8,8,1.000000,level-4:published-png-vectorized\r
393,canyon-rank-393,,,2649,1434,14,14,0.011419,#af692f,2652,1437,8,8,1.000000,level-4:published-png-vectorized\r
394,canyon-rank-394,,,2490,1435,14,14,0.011419,#e2893f,2493,1438,8,8,1.000000,level-4:published-png-vectorized\r
395,canyon-rank-395,,,2459,1449,14,14,0.011419,#f69546,2462,1452,8,8,1.000000,level-4:published-png-vectorized\r
396,canyon-rank-396,,,2569,1449,14,14,0.011419,#b66d31,2572,1452,8,8,1.000000,level-4:published-png-vectorized\r
397,canyon-rank-397,,,2490,1450,14,14,0.011419,#e1883f,2493,1453,8,8,1.000000,level-4:published-png-vectorized\r
398,canyon-rank-398,,,2459,1464,14,14,0.011419,#f59445,2462,1467,8,8,1.000000,level-4:published-png-vectorized\r
399,canyon-rank-399,,,2569,1464,14,14,0.011419,#b46c30,2572,1467,8,8,1.000000,level-4:published-png-vectorized\r
400,canyon-rank-400,,,2600,1464,14,14,0.011419,#a6632c,2603,1467,8,8,1.000000,level-4:published-png-vectorized\r
401,canyon-rank-401,,,2459,1479,14,14,0.011419,#f59445,2462,1482,8,8,1.000000,level-4:published-png-vectorized\r
402,canyon-rank-402,,,2490,1479,14,14,0.011419,#e1883f,2493,1482,8,8,1.000000,level-4:published-png-vectorized\r
403,canyon-rank-403,,,2569,1479,14,14,0.011419,#b46c30,2572,1482,8,8,1.000000,level-4:published-png-vectorized\r
404,canyon-rank-404,,,2600,1479,14,14,0.011419,#a6632c,2603,1482,8,8,1.000000,level-4:published-png-vectorized\r
405,canyon-rank-405,,,2459,1494,14,14,0.011419,#f59445,2462,1497,8,8,1.000000,level-4:published-png-vectorized\r
406,canyon-rank-406,,,2490,1494,14,14,0.011419,#e0873f,2493,1497,8,8,1.000000,level-4:published-png-vectorized\r
407,canyon-rank-407,,,2569,1494,14,14,0.011419,#b46c30,2572,1497,8,8,1.000000,level-4:published-png-vectorized\r
408,canyon-rank-408,,,2600,1494,14,14,0.011419,#a6632c,2603,1497,8,8,1.000000,level-4:published-png-vectorized\r
409,canyon-rank-409,,,2459,1509,14,14,0.011419,#f49445,2462,1512,8,8,1.000000,level-4:published-png-vectorized\r
410,canyon-rank-410,,,2490,1509,14,14,0.011419,#e0873f,2493,1512,8,8,1.000000,level-4:published-png-vectorized\r
411,canyon-rank-411,,,2569,1509,14,14,0.011419,#b26b30,2572,1512,8,8,1.000000,level-4:published-png-vectorized\r
412,canyon-rank-412,,,2600,1509,14,14,0.011419,#a4622b,2603,1512,8,8,1.000000,level-4:published-png-vectorized\r
413,canyon-rank-413,,,2459,1524,14,14,0.011419,#f49445,2462,1527,8,8,1.000000,level-4:published-png-vectorized\r
414,canyon-rank-414,,,2490,1524,14,14,0.011419,#e0873f,2493,1527,8,8,1.000000,level-4:published-png-vectorized\r
415,canyon-rank-415,,,2569,1524,14,14,0.011419,#b26b30,2572,1527,8,8,1.000000,level-4:published-png-vectorized\r
416,canyon-rank-416,,,2600,1524,14,14,0.011419,#a4622b,2603,1527,8,8,1.000000,level-4:published-png-vectorized\r
417,canyon-rank-417,,,2459,1539,14,14,0.011419,#f49445,2462,1542,8,8,1.000000,level-4:published-png-vectorized\r
418,canyon-rank-418,,,2490,1539,14,14,0.011419,#df873e,2493,1542,8,8,1.000000,level-4:published-png-vectorized\r
419,canyon-rank-419,,,2569,1539,14,14,0.011419,#b26b30,2572,1542,8,8,1.000000,level-4:published-png-vectorized\r
420,canyon-rank-420,,,2600,1539,14,14,0.011419,#a4622b,2603,1542,8,8,1.000000,level-4:published-png-vectorized\r
421,canyon-rank-421,,,2519,1330,13,15,0.011360,#f19344,2522,1333,7,9,1.000000,level-4:published-png-vectorized\r
422,canyon-rank-422,,,2578,1330,13,15,0.011360,#f09244,2581,1333,7,9,1.000000,level-4:published-png-vectorized\r
423,canyon-rank-423,,,2569,1346,15,13,0.011360,#e78c41,2572,1349,9,7,1.000000,level-4:published-png-vectorized\r
424,canyon-rank-424,,,2601,1346,15,13,0.011360,#e68b40,2604,1349,9,7,1.000000,level-4:published-png-vectorized\r
425,canyon-rank-425,,,2649,1346,15,13,0.011360,#e48b40,2652,1349,9,7,1.000000,level-4:published-png-vectorized\r
426,canyon-rank-426,,,2680,1346,15,13,0.011360,#e58a40,2683,1349,10,7,1.000000,level-4:published-png-vectorized\r
427,canyon-rank-427,,,2474,1361,15,13,0.011360,#ed9043,2477,1364,9,7,1.000000,level-4:published-png-vectorized\r
428,canyon-rank-428,,,2569,1420,15,13,0.011360,#ba7032,2572,1423,9,7,1.000000,level-4:published-png-vectorized\r
429,canyon-rank-429,,,2649,1420,15,13,0.011360,#b76d30,2652,1423,9,7,1.000000,level-4:published-png-vectorized\r
430,canyon-rank-430,,,2680,1420,15,13,0.011360,#b66d31,2683,1423,10,7,1.000000,level-4:published-png-vectorized\r
431,canyon-rank-431,,,2537,1435,15,13,0.011360,#c67736,2540,1438,9,7,1.000000,level-4:published-png-vectorized\r
432,canyon-rank-432,,,2648,1464,15,13,0.011360,#a2612b,2651,1467,9,7,1.000000,level-4:published-png-vectorized\r
433,canyon-rank-433,,,2664,1464,15,13,0.011360,#a0602a,2667,1467,9,7,1.000000,level-4:published-png-vectorized\r
434,canyon-rank-434,,,2680,1464,15,13,0.011360,#a0602a,2683,1467,10,7,1.000000,level-4:published-png-vectorized\r
435,canyon-rank-435,,,2474,1465,15,13,0.011360,#eb8e41,2477,1468,9,7,1.000000,level-4:published-png-vectorized\r
436,canyon-rank-436,,,2680,1493,15,13,0.011360,#975927,2683,1496,10,7,1.000000,level-4:published-png-vectorized\r
437,canyon-rank-437,,,2490,1346,14,13,0.010603,#e88d40,2493,1349,8,7,1.000000,level-4:published-png-vectorized\r
438,canyon-rank-438,,,2554,1346,14,13,0.010603,#e78c41,2557,1349,8,7,1.000000,level-4:published-png-vectorized\r
439,canyon-rank-439,,,2665,1346,14,13,0.010603,#e48b40,2668,1349,8,7,1.000000,level-4:published-png-vectorized\r
440,canyon-rank-440,,,2459,1405,14,13,0.010603,#f79645,2462,1408,8,7,1.000000,level-4:published-png-vectorized\r
441,canyon-rank-441,,,2585,1420,14,13,0.010603,#b96e31,2588,1423,8,7,1.000000,level-4:published-png-vectorized\r
442,canyon-rank-442,,,2665,1420,14,13,0.010603,#b76d30,2668,1423,8,7,1.000000,level-4:published-png-vectorized\r
443,canyon-rank-443,,,2490,1465,14,13,0.010603,#e1883f,2493,1468,8,7,1.000000,level-4:published-png-vectorized\r
`, A = c0(B0).map((e) => ({
  key: e.key,
  label: e.label,
  geomorphicFeature: e.label,
  sourceGeomorphologies: e.source_geomorphologies.split("|"),
  activityCount: Number(e.activity_count),
  activityPct: Number(e.activity_pct),
  publishedActivityLabelPct: Number(e.published_activity_label_pct),
  featureAreaPct: Number(e.feature_area_pct),
  featureAreaPixelWidth: Number(e.feature_area_pixel_width),
  featureAreaSourceLevel: e.feature_area_source_level
})), B = c0(P0).map((e) => ({
  rank: Number(e.rank),
  key: e.key,
  label: e.label,
  paperReportedActivities: e.paper_reported_activities ? Number(e.paper_reported_activities) : null,
  x: Number(e.x),
  y: Number(e.y),
  width: Number(e.width),
  height: Number(e.height),
  shareOfFramePct: Number(e.share_of_frame_pct),
  fill: e.fill,
  innerX: Number(e.inner_x),
  innerY: Number(e.inner_y),
  innerWidth: Number(e.inner_width),
  innerHeight: Number(e.inner_height),
  interiorOccupancy: Number(e.interior_occupancy),
  sourceLevel: e.source_level,
  geomorphicFeature: "Canyons"
}));
if (A.length !== 20 || B.length !== 443)
  throw new Error(`gap03-fig5 data contract failed: ${A.length} bars, ${B.length} canyons`);
const w = Object.freeze({
  field: "geomorphic_feature",
  value: "Canyons",
  sourceBarMarks: 2,
  targetCells: B.length,
  hasSourceValue: A.some((e) => e.geomorphicFeature === "Canyons"),
  allTargetValuesMatch: B.every((e) => e.geomorphicFeature === "Canyons"),
  directRecordJoin: !1
}), K = 2701, J = 1592, $ = {
  x: 323,
  y: 63,
  width: 1100,
  height: 1483,
  pixelsPerPercent: 22
}, S = {
  firstY: 77,
  rowStep: 74,
  featureHeight: 48,
  activityOffset: 17,
  activityHeight: 16,
  categoryX: 299
}, O = {
  x: 1543,
  y: 63,
  width: 1152,
  height: 1490
};
function W(e) {
  return e * $.pixelsPerPercent;
}
const D = "#a8dada", Q = "#1e5664", M0 = "#e48f48", L0 = "#883e1f";
function T0(e) {
  return e < 0.05 ? "0%" : `${e.toFixed(1)}%`;
}
function Y0(e) {
  const n = x("g", { "data-scope": "geomorphology" }), a = x("g", {
    "data-panel": "bar",
    "data-layout": "paired-horizontal-bar"
  });
  a.appendChild(x("rect", {
    x: $.x,
    y: $.y,
    width: $.width,
    height: $.height,
    fill: "#fff",
    stroke: "#4f4f4f",
    "stroke-width": 2.2,
    "data-chrome": "panel-frame"
  })), A.forEach((l, c) => {
    const d = S.firstY + c * S.rowStep, o = l.key === "canyons";
    a.appendChild(x("rect", {
      x: $.x,
      y: d,
      width: W(l.featureAreaPct),
      height: S.featureHeight,
      fill: o ? M0 : D,
      "data-mark": "feature-area",
      "data-key": l.key,
      "data-value": l.featureAreaPct,
      "data-field": "geomorphic_feature",
      "data-field-value": l.geomorphicFeature,
      "data-source-level": l.featureAreaSourceLevel
    })), a.appendChild(x("rect", {
      x: $.x,
      y: d + S.activityOffset,
      width: W(l.activityPct),
      height: S.activityHeight,
      fill: o ? L0 : Q,
      "data-mark": "activities",
      "data-key": l.key,
      "data-count": l.activityCount,
      "data-value": l.activityPct.toFixed(6),
      "data-field": "geomorphic_feature",
      "data-field-value": l.geomorphicFeature,
      "data-source-level": "level-1:official-zenodo-export"
    }));
  }), n.appendChild(a), e.appendChild(n);
  const r = x("g", { "data-guide": "bar-labels-and-axis" });
  A.forEach((l, c) => {
    const d = S.firstY + c * S.rowStep;
    E(r, S.categoryX, d + 34, "g03-category", l.label, void 0, {
      "text-anchor": "end"
    }), E(
      r,
      $.x + W(l.activityPct) + 14,
      d + S.activityOffset + 14,
      `g03-value${l.key === "canyons" ? " canyon" : ""}`,
      T0(l.activityPct)
    );
  });
  for (let l = 0; l <= 50; l += 10)
    E(
      r,
      $.x + W(l),
      1585,
      "g03-tick",
      `${l}%`,
      void 0,
      { "text-anchor": "middle" }
    );
  e.appendChild(r);
  const t = x("g", { "data-guide": "legend" });
  t.appendChild(x("rect", { x: 1044, y: 1378, width: 14, height: 14, fill: D })), E(t, 1063, 1392, "g03-legend", "Percent feature area"), t.appendChild(x("rect", { x: 1044, y: 1428, width: 14, height: 14, fill: Q })), E(t, 1063, 1442, "g03-legend", "Percent activities"), e.appendChild(t);
}
function H(e, n, a, r, t, l) {
  r.forEach((c, d) => E(e, n, a + d * l, t, c));
}
function R0(e) {
  const n = x("g", { "data-scope": "canyons" }), a = x("g", {
    "data-panel": "treemap",
    "data-layout": "frequency-treemap"
  });
  a.appendChild(x("rect", {
    x: O.x,
    y: O.y,
    width: O.width,
    height: O.height,
    fill: "#fff",
    "data-chrome": "panel-background"
  }));
  for (const t of B)
    a.appendChild(x("rect", {
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height,
      fill: t.fill,
      stroke: "#fff",
      "stroke-width": 2,
      "shape-rendering": "geometricPrecision",
      "data-mark": "canyon",
      "data-key": t.key,
      "data-rank": t.rank,
      "data-share": t.shareOfFramePct.toFixed(6),
      "data-field": "geomorphic_feature",
      "data-field-value": t.geomorphicFeature,
      "data-source-level": t.sourceLevel
    }));
  n.appendChild(a), e.appendChild(n);
  const r = x("g", { "data-guide": "named-canyons" });
  E(r, 1581, 738, "g03-canyon-label monterey", "Monterey Canyon, USA"), H(r, 1580, 1435, ["Sagami Bay", "Canyon System,", "Japan"], "g03-canyon-label", 39), H(r, 1878, 1273, ["Suruga Bay", "Canyon System,", "Japan"], "g03-canyon-label small", 34), H(r, 2116, 834, ["Great Bahama Canyon,", "Bahamas"], "g03-canyon-label small bold", 34), H(
    r,
    1878,
    1455,
    ["Oceanographer,", "Gilbert, Lydonia", "Canyons, USA"],
    "g03-canyon-label small dark",
    34
  ), e.appendChild(r);
}
function j0(e) {
  m0(e), e.setAttribute("viewBox", `0 0 ${K} ${J}`), e.setAttribute("role", "img"), e.setAttribute("aria-label", "Deep-seafloor observation activities by geomorphology and canyon system"), e.classList.add("g03-root"), x0(e, K, J);
  const n = x("g", { "data-layer": "figure" });
  Y0(n), R0(n);
  const a = x("g", { "data-guide": "panel-letters" });
  E(a, 4, 38, "g03-letter", "A"), E(a, 1504, 38, "g03-letter", "B"), n.appendChild(a), e.appendChild(n);
}
const d0 = 1920, o0 = 1080, p0 = "http://www.w3.org/2000/svg", Z = "#a8dada", q = "#1e5664", O0 = "#883e1f";
function b(e, n = {}) {
  const a = document.createElementNS(p0, e);
  return Object.entries(n).forEach(([r, t]) => a.setAttribute(r, String(t))), a;
}
function F(e, n, a, r, t = {}) {
  const l = b("text", { x: n, y: a, ...t });
  return l.textContent = r, e.appendChild(l), l;
}
function W0(e, n, a, r, t, l) {
  const c = b("text", { x: n, y: a, ...t });
  r.forEach((d, o) => {
    const y = b("tspan", { x: n, dy: o ? l : 0 });
    y.textContent = d, c.appendChild(y);
  }), e.appendChild(c);
}
function H0(e) {
  return e < 0.05 ? "0%" : `${e.toFixed(1)}%`;
}
function s0(e, n, a, r) {
  e.replaceChildren(), e.setAttribute("viewBox", "0 0 1920 1080"), e.setAttribute("width", "1920"), e.setAttribute("height", "1080"), e.setAttribute("role", "img"), e.setAttribute("aria-label", r), e.setAttribute("data-keyframe-index", String(n)), e.setAttribute("data-keyframe-kind", a), e.appendChild(b("rect", { width: 1920, height: 1080, fill: "#fff", "data-layer": "under" }));
}
function q0(e, n) {
  const a = n === 0;
  s0(
    e,
    n,
    a ? "panel-i" : "panel-j",
    a ? "Panel A: paired geomorphology bars" : "Panel B: canyon frequency treemap"
  );
  const r = document.createElementNS(p0, "svg");
  j0(r);
  const t = a ? { minX: 0, minY: 0, maxX: 1423, maxY: 1592 } : { minX: 1504, minY: 0, maxX: 2695, maxY: 1553 }, l = 920, c = l / (t.maxY - t.minY), d = (t.maxX - t.minX) * c, o = (d0 - d) / 2 - t.minX * c, y = (o0 - l) / 2 - t.minY * c, s = b("g", {
    transform: `translate(${o.toFixed(3)} ${y.toFixed(3)}) scale(${c.toFixed(6)})`,
    "data-panel": a ? "bar (a)" : "treemap (b)",
    "data-scene-id": a ? "source-bar-panel" : "target-treemap-panel",
    "data-structural-host": "panel-plane",
    "data-coordinate-space": a ? "bar (a) panel plane" : "treemap (b) panel plane",
    "data-geometry-ref": a ? "renderer:gap03-fig5-bar-panel" : "renderer:gap03-fig5-treemap-panel"
  });
  (a ? ['g[data-scope="geomorphology"]', 'g[data-guide="bar-labels-and-axis"]', 'g[data-guide="legend"]'] : ['g[data-scope="canyons"]', 'g[data-guide="named-canyons"]']).forEach((L) => {
    const N = r.querySelector(L);
    N && s.appendChild(N.cloneNode(!0));
  }), e.appendChild(s);
  const z = t.minX * c + o;
  F(e, Math.max(72, z - 38), 66, a ? "A" : "B", {
    "font-size": 34,
    "font-weight": 700,
    "data-guide": a ? "panel-label:A" : "panel-label:B"
  });
  const u = b("g", { visibility: "hidden", "aria-hidden": "true", "data-layer": "semantic-proxy" });
  a ? (u.appendChild(b("g", { "data-scene-id": "bar-records", "data-geometry-ref": "source-data:bars.csv" })), u.appendChild(b("g", { "data-scene-id": "canyons-bar-bridge", "data-geometry-ref": "source-data:bars.csv#key=canyons" })), u.appendChild(b("g", { "data-scene-id": "bar-geometry-template", "data-geometry-ref": "renderer:gap03-fig5-bar-panel" })), u.appendChild(b("g", { "data-scene-id": "bar-guides", "data-geometry-ref": "renderer:gap03-fig5-bar-guides" }))) : (u.appendChild(b("g", { "data-scene-id": "canyon-rectangle-records", "data-geometry-ref": "source-data:treemap.csv-published-rectangle-geometry" })), u.appendChild(b("g", { "data-scene-id": "treemap-geometry-template", "data-geometry-ref": "renderer:gap03-fig5-treemap-panel" })), u.appendChild(b("g", { "data-scene-id": "treemap-guides", "data-geometry-ref": "renderer:gap03-fig5-treemap-guides" }))), e.appendChild(u);
}
function I0(e) {
  s0(e, 1, "lcm", "LCM: the Canyons bar expanded and subdivided into 443 canyon records");
  const n = b("g", {
    "data-scene-id": "canyons-semantic-zoom-row",
    "data-structural-host": "single-bar-chart-carrier",
    "data-coordinate-space": "geomorphology rows × percentage",
    "data-correspondence-kind": "value-group",
    "data-correspondence-field": "geomorphic_feature",
    "data-correspondence-value": "Canyons",
    "data-direct-record-join": "false"
  });
  e.appendChild(n);
  const a = 510, r = 1120, t = 66, l = 17, c = 7, d = 520, o = A.findIndex((i) => i.key === "canyons"), y = t + o * (l + c), s = (i) => i <= o ? t + i * (l + c) : t + o * (l + c) + d + c + (i - o - 1) * (l + c), p = b("g", {
    "data-panel": "bar (a)",
    "data-scene-id": "bar-xz-plane",
    "data-geometry-ref": "renderer:gap03-fig5-bar-panel semantic-zoom-layout"
  }), z = b("g", {
    "data-panel": "treemap (b) embedded in canyons row",
    "data-scene-id": "treemap-xy-plane",
    "data-parent-id": "canyons-semantic-zoom-row",
    "data-geometry-ref": "source-data:treemap.csv published rectangle topology"
  });
  n.appendChild(p), n.appendChild(z), A.forEach((i, f) => {
    const h = s(f), g = i.key === "canyons", P = g ? 790 : i.featureAreaPct / 50 * r;
    p.appendChild(b("polygon", {
      points: `${a},${h} ${a + P},${h} ${a + P},${h + (g ? d : l)} ${a},${h + (g ? d : l)}`,
      fill: g ? "#f6ded0" : Z,
      "data-mark": "feature-area",
      "data-key": i.key,
      "data-record-key": `bars.csv:${i.key}`,
      "data-source-boundary": "bars.csv",
      "data-field": "geomorphic_feature",
      "data-field-value": i.geomorphicFeature,
      "data-feature-area-pct": i.featureAreaPct,
      "data-activity-pct": i.activityPct,
      "data-published-activity-label-pct": i.publishedActivityLabelPct
    })), g || p.appendChild(b("polygon", {
      points: `${a},${h + 5} ${a + i.activityPct / 50 * r},${h + 5} ${a + i.activityPct / 50 * r},${h + 12} ${a},${h + 12}`,
      fill: q,
      "data-mark": "activities",
      "data-key": i.key,
      "data-record-key": `bars.csv:${i.key}`,
      "data-source-boundary": "bars.csv",
      "data-field": "geomorphic_feature",
      "data-field-value": i.geomorphicFeature
    })), F(n, a - 22, h + (g ? 24 : 14), i.label, {
      "font-size": g ? 22 : 14,
      "font-weight": g ? 700 : 500,
      "text-anchor": "end",
      fill: "#18343b",
      "data-guide": "guide:geomorphology-labels:single-y",
      "data-key": i.key
    }), F(n, a + P + 9, h + (g ? 24 : 14), g ? `${i.featureAreaPct.toFixed(1)}% area · expanded` : H0(i.publishedActivityLabelPct), {
      "font-size": g ? 14 : 12,
      fill: g ? O0 : q,
      "data-annotation": "published-activity-labels",
      "data-key": i.key,
      "data-field": "published_activity_label_pct",
      "data-value": i.publishedActivityLabelPct
    });
  });
  const u = a + 10, L = y + 46, N = 770, _ = d - 58;
  B.forEach((i) => {
    const f = u + (i.x - 1543) / 1152 * N, h = L + (i.y - 63) / 1490 * _, g = i.width / 1152 * N, P = i.height / 1490 * _;
    z.appendChild(b("polygon", {
      points: `${f},${h} ${f + g},${h} ${f + g},${h + P} ${f},${h + P}`,
      fill: i.fill,
      stroke: "#fff",
      "stroke-width": 0.85,
      "data-mark": "published-canyon-cell",
      "data-key": i.key,
      "data-record-key": `treemap.csv:${i.key}`,
      "data-source-boundary": "treemap.csv",
      "data-field": "geomorphic_feature",
      "data-field-value": i.geomorphicFeature,
      "data-rank": i.rank,
      "data-share-of-frame-pct": i.shareOfFramePct
    })), i.label && i.width > 100 && i.height > 70 && W0(z, f + 8, h + 21, i.label.split(/,\s*/), {
      "font-size": i.key.includes("monterey") ? 14 : 10,
      fill: i.fill.toLowerCase() === "#f9dbce" ? "#763719" : "#fff",
      "font-weight": 600,
      "data-annotation": "canyon-label",
      "data-key": i.key
    }, 12);
  }), F(n, u, y + 31, "shared value group “Canyons” · 443 published cells", {
    "font-size": 14,
    "font-weight": 700,
    fill: "#713718",
    "data-guide": "semantic-zoom-caption"
  });
  const v = 1036;
  n.appendChild(b("line", { x1: a, y1: v, x2: a + r, y2: v, stroke: "#26333a", "stroke-width": 1.4, "data-guide": "axis:percentage:x" }));
  for (let i = 0; i <= 50; i += 10) {
    const f = a + i / 50 * r;
    n.appendChild(b("line", { x1: f, y1: v, x2: f, y2: v + 7, stroke: "#26333a" })), F(n, f, v + 25, `${i}%`, { "font-size": 13, "text-anchor": "middle", fill: "#26333a" });
  }
  const m = b("g", { "data-guide": "legend:bar-series:fill", transform: "translate(1410 88)" });
  m.appendChild(b("rect", { x: -18, y: -30, width: 310, height: 108, rx: 14, fill: "#fff", stroke: "#67757c" })), m.appendChild(b("rect", { x: 0, y: 0, width: 18, height: 13, fill: Z })), F(m, 28, 12, "Percent feature area", { "font-size": 14 }), m.appendChild(b("rect", { x: 0, y: 34, width: 18, height: 13, fill: q })), F(m, 28, 46, "Percent activities", { "font-size": 14 }), n.appendChild(m);
  const T = b("g", { visibility: "hidden", "aria-hidden": "true", "data-layer": "semantic-proxy" });
  [["bar-records", "source-data:bars.csv"], ["canyons-bar-bridge", "source-data:bars.csv#key=canyons"], ["canyon-rectangle-records", "source-data:treemap.csv-published-rectangle-geometry"], ["bar-geometry-template", "renderer:gap03-fig5-bar-panel"], ["treemap-geometry-template", "renderer:gap03-fig5-treemap-panel"], ["bar-guides", "renderer:gap03-fig5-bar-guides"], ["treemap-guides", "renderer:gap03-fig5-treemap-guides"]].forEach(([i, f]) => T.appendChild(b("g", { "data-scene-id": i, "data-geometry-ref": f }))), e.appendChild(T);
}
function b0(e, n) {
  if (n === 0 || n === 2) return q0(e, n);
  if (n === 1) return I0(e);
  throw new Error(`gap03-fig5 has keyframe indices 0..2; received ${n}`);
}
const V0 = [0, 0.5, 1], X0 = new Set(A.map((e) => e.key)), G0 = new Set(B.map((e) => e.key)), U0 = new Map(A.map((e) => [e.key, e.geomorphicFeature]));
let I = null;
const u0 = (e) => Math.max(0, Math.min(1, e)), v0 = (e) => {
  const n = u0(e);
  return n * n * n * (n * (n * 6 - 15) + 10);
}, k = (e, n, a) => v0((e - n) / (a - n)), C = (e, n, a) => e + (n - e) * a, X = () => ({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
function y0(e, n) {
  return {
    a: e.a * n.a + e.c * n.b,
    b: e.b * n.a + e.d * n.b,
    c: e.a * n.c + e.c * n.d,
    d: e.b * n.c + e.d * n.d,
    e: e.a * n.e + e.c * n.f + e.e,
    f: e.b * n.e + e.d * n.f + e.f
  };
}
function K0(e) {
  let n = X();
  for (const a of (e == null ? void 0 : e.matchAll(/(matrix|translate|scale)\(([^)]+)\)/g)) ?? []) {
    const r = a[2].trim().split(/[ ,]+/).map(Number);
    let t = X();
    a[1] === "matrix" && r.length >= 6 ? t = { a: r[0], b: r[1], c: r[2], d: r[3], e: r[4], f: r[5] } : a[1] === "translate" ? (t.e = r[0] || 0, t.f = r[1] || 0) : a[1] === "scale" && (t.a = r[0] || 1, t.d = r[1] ?? r[0] ?? 1), n = y0(n, t);
  }
  return n;
}
function h0(e) {
  const n = [];
  for (let a = e; a && a.tagName.toLowerCase() !== "svg"; a = a.parentElement)
    n.unshift(a);
  return n.reduce((a, r) => y0(a, K0(r.getAttribute("transform"))), X());
}
function U(e) {
  const n = e.tagName.toLowerCase();
  let a;
  if (n === "rect") {
    const s = Number(e.getAttribute("x") ?? 0), p = Number(e.getAttribute("y") ?? 0), z = Number(e.getAttribute("width") ?? 0), u = Number(e.getAttribute("height") ?? 0);
    a = [[s, p], [s + z, p], [s + z, p + u], [s, p + u]];
  } else if (n === "polygon") {
    const s = (e.getAttribute("points") ?? "").trim().split(/[ ,]+/).map(Number);
    a = [];
    for (let p = 0; p + 1 < s.length; p += 2) a.push([s[p], s[p + 1]]);
  } else
    throw new Error(`gap03 value-group overlay cannot measure <${n}>`);
  const r = h0(e), t = a.map(([s, p]) => ({
    x: r.a * s + r.c * p + r.e,
    y: r.b * s + r.d * p + r.f
  })), l = t.map((s) => s.x), c = t.map((s) => s.y), d = Math.hypot(r.a, r.b), o = Math.hypot(r.c, r.d), y = Number(e.getAttribute("stroke-width") ?? 0);
  return {
    x: Math.min(...l),
    y: Math.min(...c),
    width: Math.max(...l) - Math.min(...l),
    height: Math.max(...c) - Math.min(...c),
    fill: e.getAttribute("fill") ?? "#b87333",
    stroke: e.getAttribute("stroke") ?? "#ffffff",
    strokeWidth: y * Math.sqrt(d * o)
  };
}
function g0(e, n = {}) {
  const a = Number(e.getAttribute("x") ?? 0), r = Number(e.getAttribute("y") ?? 0), t = h0(e), l = Math.sqrt(Math.hypot(t.a, t.b) * Math.hypot(t.c, t.d));
  return {
    x: t.a * a + t.c * r + t.e,
    y: t.b * a + t.d * r + t.f,
    fill: e.getAttribute("fill") ?? n.fill ?? "#18343b",
    fontSize: Number(e.getAttribute("font-size") ?? n.fontSize ?? 14) * l,
    fontWeight: e.getAttribute("font-weight") ?? n.fontWeight ?? "400",
    textAnchor: e.getAttribute("text-anchor") ?? "start",
    text: e.textContent ?? ""
  };
}
function V(e, n) {
  const a = e.querySelector(n);
  if (!a) throw new Error(`gap03 value-group overlay is missing ${n}`);
  return U(a);
}
function e0(e, n) {
  const a = /* @__PURE__ */ new Map();
  return e.querySelectorAll(n).forEach((r) => {
    const t = r.getAttribute("data-key");
    t && a.set(t, U(r));
  }), a;
}
function n0(e, n) {
  const a = /* @__PURE__ */ new Map();
  return e.querySelectorAll(n).forEach((r) => {
    const t = r.getAttribute("data-key"), l = r.getAttribute("data-mark");
    t && t !== "canyons" && l && a.set(`${l}:${t}`, U(r));
  }), a;
}
function a0(e, n) {
  const a = /* @__PURE__ */ new Map();
  return e.querySelectorAll(n).forEach((r) => {
    const t = r.getAttribute("data-key");
    t && a.set(t, g0(r));
  }), a;
}
function r0(e, n, a, r = a) {
  const t = [...e.querySelectorAll(n)];
  if (t.length !== A.length)
    throw new Error(`gap03 source bar label capture failed: ${n} matched ${t.length}/${A.length}`);
  const l = /* @__PURE__ */ new Map();
  return A.forEach((c, d) => {
    l.set(c.key, g0(t[d], c.key === "canyons" ? r : a));
  }), l;
}
function J0(e) {
  e.querySelectorAll("[data-key]").forEach((n) => {
    var l;
    const a = n.getAttribute("data-key") ?? "", r = n.getAttribute("data-mark") ?? n.getAttribute("data-annotation") ?? "record", t = ((l = n.closest("[data-scene-id]")) == null ? void 0 : l.getAttribute("data-scene-id")) ?? "";
    G0.has(a) && (t.includes("treemap") || r.includes("canyon")) ? n.setAttribute("data-transition-key", `canyon:${a}`) : X0.has(a) && (t.includes("bar") || t.includes("zoom")) ? n.setAttribute("data-transition-key", `bar:${r}:${a}`) : n.setAttribute("data-transition-key", `${t}:${r}:${a}`);
  }), e.querySelectorAll("[data-guide]").forEach((n, a) => {
    const r = n.getAttribute("data-guide") ?? "guide";
    n.setAttribute("data-transition-key", `guide:${r}:${a}`);
  });
}
function D0() {
  if (!w.hasSourceValue || !w.allTargetValuesMatch || w.targetCells !== 443)
    throw new Error(`gap03 Canyons value-group audit failed: ${JSON.stringify(w)}`);
  if (!I) {
    const e = z0(b0, 3, J0), n = n0(e[0], '[data-scene-id="source-bar-panel"] [data-mark="feature-area"][data-key], [data-scene-id="source-bar-panel"] [data-mark="activities"][data-key]'), a = n0(e[1], '[data-scene-id="bar-xz-plane"] [data-mark="feature-area"][data-key], [data-scene-id="bar-xz-plane"] [data-mark="activities"][data-key]'), r = r0(
      e[0],
      '[data-scene-id="source-bar-panel"] text.g03-category',
      { fill: "#000000", fontSize: 28, fontWeight: "400" }
    ), t = a0(e[1], '[data-scene-id="canyons-semantic-zoom-row"] text[data-key][data-guide]'), l = r0(
      e[0],
      '[data-scene-id="source-bar-panel"] text.g03-value',
      { fill: "#1e5664", fontSize: 23, fontWeight: "400" },
      { fill: "#883e1f", fontSize: 23, fontWeight: "400" }
    ), c = a0(e[1], '[data-scene-id="canyons-semantic-zoom-row"] text[data-key][data-annotation="published-activity-labels"]'), d = e0(e[1], '[data-scene-id="treemap-xy-plane"] [data-mark="published-canyon-cell"][data-key]'), o = e0(e[2], '[data-scene-id="target-treemap-panel"] [data-mark="canyon"][data-key]'), y = [...d].filter(([p, z]) => {
      var u;
      return z.fill.toLowerCase() !== ((u = o.get(p)) == null ? void 0 : u.fill.toLowerCase());
    }), s = [...n].filter(([p, z]) => {
      var u;
      return z.fill.toLowerCase() !== ((u = a.get(p)) == null ? void 0 : u.fill.toLowerCase());
    });
    if (n.size !== 38 || a.size !== 38 || [...n.keys()].some((p) => !a.has(p)) || s.length > 0)
      throw new Error(`gap03 non-Canyons bar persistence failed: source=${n.size}, lcm=${a.size}`);
    if (r.size !== 20 || t.size !== 20 || l.size !== 20 || c.size !== 20 || [...r.keys()].some((p) => !t.has(p)) || [...l.keys()].some((p) => !c.has(p)))
      throw new Error(`gap03 bar label persistence failed: category=${r.size}/${t.size}, value=${l.size}/${c.size}`);
    if (d.size !== 443 || o.size !== 443 || [...d.keys()].some((p) => !o.has(p)) || y.length > 0)
      throw new Error(`gap03 target-side cell identity failed: lcm=${d.size}, target=${o.size}`);
    I = {
      snapshots: e,
      sourceFeature: V(e[0], '[data-scene-id="source-bar-panel"] [data-mark="feature-area"][data-key="canyons"]'),
      sourceActivity: V(e[0], '[data-scene-id="source-bar-panel"] [data-mark="activities"][data-key="canyons"]'),
      sourceNonCanyonBars: n,
      lcmNonCanyonBars: a,
      sourceBarCategoryLabels: r,
      lcmBarCategoryLabels: t,
      sourceBarValueLabels: l,
      lcmBarValueLabels: c,
      lcmFeature: V(e[1], '[data-scene-id="bar-xz-plane"] [data-mark="feature-area"][data-key="canyons"]'),
      lcmCells: d,
      targetCells: o
    };
  }
  return I;
}
function Q0(e) {
  const n = e.work.getAttribute("data-transition-key") ?? "", a = e.progress;
  if (n.startsWith("canyon:")) {
    e.phase === "enter" && e.work.setAttribute("opacity", String(k(a, 0.2, 0.78)));
    return;
  }
  if (n.startsWith("guide:") || e.work.hasAttribute("data-annotation")) {
    const r = e.phase === "enter" ? k(a, 0.48, 0.92) : e.phase === "exit" ? 1 - k(a, 0.08, 0.52) : 1;
    e.work.setAttribute("opacity", String(Number(r.toFixed(4))));
  }
}
function M(e, n, a) {
  e.querySelectorAll(n).forEach((r) => r.setAttribute("opacity", String(Number(a.toFixed(4)))));
}
function j(e, n) {
  e.querySelectorAll(n).forEach((a) => a.setAttribute("visibility", "hidden"));
}
function Y(e, n, a) {
  return {
    x: C(e.x, n.x, a),
    y: C(e.y, n.y, a),
    width: C(e.width, n.width, a),
    height: C(e.height, n.height, a),
    fill: G(e.fill, n.fill, a),
    stroke: G(e.stroke, n.stroke, a),
    strokeWidth: C(e.strokeWidth, n.strokeWidth, a)
  };
}
function G(e, n, a) {
  const r = (c) => {
    const d = /^#([0-9a-f]{6})$/i.exec(c);
    return d ? [0, 2, 4].map((o) => Number.parseInt(d[1].slice(o, o + 2), 16)) : null;
  }, t = r(e), l = r(n);
  return !t || !l ? a < 0.5 ? e : n : `#${t.map((c, d) => Math.round(C(c, l[d], a)).toString(16).padStart(2, "0")).join("")}`;
}
function R(e, n, a = {}) {
  const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  return r.setAttribute("x", n.x.toFixed(3)), r.setAttribute("y", n.y.toFixed(3)), r.setAttribute("width", Math.max(0, n.width).toFixed(3)), r.setAttribute("height", Math.max(0, n.height).toFixed(3)), r.setAttribute("fill", n.fill), r.setAttribute("stroke", n.strokeWidth > 0 ? n.stroke : "none"), r.setAttribute("stroke-width", Math.max(0, n.strokeWidth).toFixed(3)), a.opacity !== void 0 && r.setAttribute("opacity", String(Number(a.opacity.toFixed(4)))), a.key && r.setAttribute("data-key", a.key), a.mark && r.setAttribute("data-mark", a.mark), e.append(r), r;
}
function Z0(e, n, a, r) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
  t.setAttribute("x", (n.x + 12).toFixed(3)), t.setAttribute("y", (n.y + 55).toFixed(3)), t.setAttribute("fill", "#263c42"), t.setAttribute("font-family", "Arial, Helvetica, sans-serif"), t.setAttribute("font-size", "14"), t.setAttribute("font-weight", "700"), t.setAttribute("opacity", String(Number(r.toFixed(4)))), t.setAttribute("data-annotation", "value-group-explanation"), t.textContent = a, e.append(t);
}
function t0(e, n, a, r, t, l) {
  const c = document.createElementNS("http://www.w3.org/2000/svg", "text");
  c.setAttribute("x", C(n.x, a.x, r).toFixed(3)), c.setAttribute("y", C(n.y, a.y, r).toFixed(3)), c.setAttribute("fill", G(n.fill, a.fill, r)), c.setAttribute("font-size", C(n.fontSize, a.fontSize, r).toFixed(3)), c.setAttribute("font-weight", String(Math.round(C(Number(n.fontWeight) || 400, Number(a.fontWeight) || 400, r)))), c.setAttribute("text-anchor", r < 0.5 ? n.textAnchor : a.textAnchor), c.setAttribute("data-key", t), c.setAttribute("data-persistent-label", l), c.textContent = r < 0.5 ? n.text : a.text, e.append(c);
}
function ee(e) {
  j(e, '[data-scene-id="source-bar-panel"] text.g03-category, [data-scene-id="source-bar-panel"] text.g03-value'), j(e, '[data-scene-id="canyons-semantic-zoom-row"] text[data-key][data-guide], [data-scene-id="canyons-semantic-zoom-row"] text[data-key][data-annotation="published-activity-labels"]');
}
function l0(e, n) {
  [...e.querySelectorAll(
    '[data-scene-id="canyons-semantic-zoom-row"] [data-guide="semantic-zoom-caption"], [data-scene-id="treemap-xy-plane"] [data-annotation="canyon-label"]'
  )].forEach((r) => {
    r.setAttribute("opacity", String(Number(n.toFixed(4)))), e.append(r);
  });
}
function i0(e) {
  const n = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return n.setAttribute("data-scene-id", "canyons-value-group-persistent-carrier"), n.setAttribute("data-field", w.field), n.setAttribute("data-field-value", w.value), n.setAttribute("data-correspondence-kind", "value-group"), n.setAttribute("data-color-persistence", "443-of-443"), n.setAttribute("opacity", "1"), n.setAttribute("pointer-events", "none"), e.append(n), n;
}
function ne(e) {
  const n = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return n.setAttribute("data-scene-id", "non-canyons-persistent-bar-carrier"), n.setAttribute("data-color-persistence", "38-of-38"), n.setAttribute("opacity", "1"), n.setAttribute("pointer-events", "none"), e.append(n), n;
}
function ae(e, n, a) {
  if (n <= 0) return;
  if (n < 0.5) {
    const d = n / 0.5;
    M(e, '[data-scene-id="source-bar-panel"]', 1 - k(d, 0.48, 0.58)), M(e, '[data-scene-id="canyons-semantic-zoom-row"]', k(d, 0.58, 0.72)), j(e, '[data-scene-id="source-bar-panel"] [data-mark="feature-area"], [data-scene-id="source-bar-panel"] [data-mark="activities"]'), j(e, '[data-scene-id="bar-xz-plane"] [data-mark="feature-area"], [data-scene-id="bar-xz-plane"] [data-mark="activities"], [data-scene-id="treemap-xy-plane"] [data-mark="published-canyon-cell"]'), ee(e);
    const o = k(d, 0.06, 0.76), y = ne(e), s = k(d, 0.02, 0.98), p = s * s * s;
    a.sourceNonCanyonBars.forEach((_, v) => {
      const m = a.lcmNonCanyonBars.get(v);
      if (!m) return;
      const T = v.indexOf(":"), i = v.slice(0, T), f = v.slice(T + 1), h = Y(_, m, s);
      h.height = C(_.height, m.height, p);
      const g = R(y, h, { opacity: 1, key: f, mark: i });
      g.setAttribute("data-record-key", `bars.csv:${f}`), g.setAttribute("data-field", "geomorphic_feature"), g.setAttribute("data-field-value", U0.get(f) ?? f);
    }), a.sourceBarCategoryLabels.forEach((_, v) => {
      const m = a.lcmBarCategoryLabels.get(v);
      m && t0(y, _, m, v === "canyons" ? o : s, v, "category");
    }), a.sourceBarValueLabels.forEach((_, v) => {
      const m = a.lcmBarValueLabels.get(v);
      m && t0(y, _, m, v === "canyons" ? o : s, v, "value");
    });
    const z = i0(e), u = Y(a.sourceFeature, a.lcmFeature, o);
    R(z, u, {
      opacity: 1,
      key: "canyons-group-field-carrier",
      mark: "group-field-carrier"
    }), R(z, Y(a.sourceActivity, a.lcmFeature, o), {
      opacity: 1 - k(d, 0.4, 0.7),
      key: "canyons-group-activity-carrier",
      mark: "group-activity-carrier"
    });
    const L = k(d, 0.18, 0.78), N = k(d, 0.16, 0.48);
    a.lcmCells.forEach((_, v) => {
      R(z, Y(a.sourceActivity, _, L), {
        opacity: N,
        key: v,
        mark: "published-canyon-cell"
      });
    }), Z0(z, u, "same value group: Canyons", k(d, 0.1, 0.28) * (1 - k(d, 0.46, 0.6))), l0(e, k(d, 0.58, 0.72)), e.append(y);
    return;
  }
  const r = (n - 0.5) / 0.5;
  M(e, '[data-scene-id="canyons-semantic-zoom-row"]', 1 - k(r, 0.04, 0.76)), M(e, '[data-scene-id="target-treemap-panel"]', k(r, 0.24, 0.96)), j(e, '[data-scene-id="treemap-xy-plane"] [data-mark="published-canyon-cell"], [data-scene-id="target-treemap-panel"] [data-mark="canyon"], [data-scene-id="target-treemap-panel"] [data-chrome="panel-background"]');
  const t = i0(e), l = k(r, 0.02, 0.98);
  a.lcmCells.forEach((d, o) => {
    const y = a.targetCells.get(o);
    y && R(t, Y(d, y, l), { opacity: 1, key: o, mark: "published-canyon-cell" });
  }), l0(e, 1 - k(r, 0.04, 0.76));
  const c = e.querySelector('[data-scene-id="target-treemap-panel"]');
  c && (M(e, '[data-scene-id="target-treemap-panel"] [data-guide="named-canyons"]', 1), e.append(c)), M(e, '[data-guide="panel-label:B"]', k(r, 0.24, 0.96));
}
function re(e, n) {
  const a = u0(Number.isFinite(n) ? n : 0), r = D0();
  k0(e, r.snapshots, V0, a, {
    easing: v0,
    motion: Q0,
    pairSemanticContainers: !0
  }), ae(e, a, r), e.setAttribute("data-transition-id", "gap03-fig5-bar-a-to-treemap-b"), e.setAttribute("data-scene-authority", "single-persistent-value-group-carrier"), e.setAttribute("data-gcd-fields", w.field), e.setAttribute("data-gcd-value-overlap", w.value), e.setAttribute("data-correspondence-kind", "value-group"), e.setAttribute("data-correspondence-source-marks", String(w.sourceBarMarks)), e.setAttribute("data-correspondence-target-marks", String(w.targetCells)), e.setAttribute("data-direct-record-join", "false"), e.setAttribute("data-color-persistence", "38-of-38-non-canyon-bars-through-frame-1;443-of-443-cells-through-frame-2");
}
const te = Object.freeze([
  { index: 0, kind: "panel-i", label: "Panel bar (a)" },
  { index: 1, kind: "lcm", label: "LCM" },
  { index: 2, kind: "panel-j", label: "Panel treemap (b)" }
]), oe = f0(
  F0,
  {
    frame: Object.freeze({ width: d0, height: o0 }),
    keyframes: te,
    renderKeyframe: b0,
    renderAnimation: re
  }
);
export {
  o0 as KEYFRAME_HEIGHT,
  V0 as KEYFRAME_PROGRESS,
  te as KEYFRAME_SEQUENCE,
  d0 as KEYFRAME_WIDTH,
  oe as barAToTreemapBTransitionSpace,
  re as renderBarAToTreemapBAnimation,
  b0 as renderKeyframe
};
