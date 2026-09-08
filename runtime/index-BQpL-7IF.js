import { d as oa } from "./transition-space-Df4GnxL9.js";
import { p as Se, n as B } from "./csv-Ha6vz5IV.js";
import { e as h, w as _a } from "./svg-DSCeB79j.js";
import { g as sa, l as la } from "./basemap-Dg3iCnEC.js";
import { p as da } from "./index-XwDo3nwU.js";
import { r as Ne, c as ca } from "./svg-snapshot-transition-CHoy-cD5.js";
const ha = "figure2story-transition-space/v1", ua = "map-a-to-tree-b", ma = "lin2025-fig1", ya = {
  transition_id: "lin2025-fig1 · map (a) → tree (b)",
  panel_i: "map (a)",
  panel_j: "tree (b)"
}, pa = {
  entry: "index.ts",
  keyframes: "keyframes.ts",
  animation: "animation.ts",
  audit: null
}, Na = {
  width: 1920,
  height: 1080
}, Ea = [
  {
    index: 0,
    kind: "panel-i",
    label: "Panel map (a)",
    progress: 0
  },
  {
    index: 1,
    kind: "lcm",
    label: "LCM · experiments grouped by species",
    progress: 0.5
  },
  {
    index: 2,
    kind: "panel-j",
    label: "Panel tree (b)",
    progress: 1
  }
], ka = {
  worlds: [
    {
      id: "species-bridge-world",
      dimensions: 2,
      keyframe_indices: [
        1
      ]
    }
  ],
  cameras: [
    {
      id: "species-bridge-camera",
      world_id: "species-bridge-world",
      projection: "orthographic front view",
      keyframe_indices: [
        1
      ]
    }
  ],
  viewports: [
    {
      id: "map-tree-viewport",
      keyframe_indices: [
        0,
        1,
        2
      ]
    }
  ],
  planes: [
    {
      id: "source-map-plane",
      panel: "map (a)",
      keyframe_indices: [
        0
      ],
      result_refs: [
        "map (a).experiments"
      ],
      position_fields: [
        "longitude",
        "latitude"
      ],
      local_axes: [
        "longitude",
        "latitude"
      ],
      world_axes: [],
      world_id: null,
      camera_id: null
    },
    {
      id: "joint-map-plane",
      panel: "map (a)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "map (a).experiments"
      ],
      position_fields: [
        "longitude",
        "latitude"
      ],
      local_axes: [
        "longitude",
        "latitude"
      ],
      world_axes: [
        "X",
        "Y"
      ],
      world_id: "species-bridge-world",
      camera_id: "species-bridge-camera"
    },
    {
      id: "joint-tree-plane",
      panel: "tree (b)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "tree (b).species-leaves",
        "tree (b).mean-ei-ring"
      ],
      position_fields: [
        "phylogenetic depth",
        "tip index",
        "species"
      ],
      local_axes: [
        "radius",
        "angle"
      ],
      world_axes: [
        "X",
        "Y"
      ],
      world_id: "species-bridge-world",
      camera_id: "species-bridge-camera"
    },
    {
      id: "target-tree-plane",
      panel: "tree (b)",
      keyframe_indices: [
        2
      ],
      result_refs: [
        "tree (b).species-leaves",
        "tree (b).mean-ei-ring"
      ],
      position_fields: [
        "phylogenetic depth",
        "tip index",
        "species"
      ],
      local_axes: [
        "radius",
        "angle"
      ],
      world_axes: [],
      world_id: null,
      camera_id: null
    },
    {
      id: "target-strip-plane",
      panel: "tree (b)",
      keyframe_indices: [
        2
      ],
      result_refs: [
        "tree (b).pollen-limitation-by-clade"
      ],
      position_fields: [
        "clade",
        "mean pollen limitation",
        "experiment_id"
      ],
      local_axes: [
        "clade",
        "pollen limitation"
      ],
      world_axes: [],
      world_id: null,
      camera_id: null
    }
  ],
  objects: [
    {
      id: "experiment-records",
      role: "2633 experiment_id-keyed geographic observations grouped by species",
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
            id: "source-map-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "joint-map-plane"
          }
        }
      ]
    },
    {
      id: "species-aggregates",
      role: "1107 stable species groups and mean(EI) aggregates",
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
            id: "joint-tree-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-tree-plane"
          }
        }
      ]
    },
    {
      id: "species-bridge",
      role: "1107 exact species-keyed links from geographic experiment groups to phylogenetic tips",
      keyframe_indices: [
        1
      ],
      hosts: [
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "species-bridge-world"
          }
        }
      ]
    },
    {
      id: "phylogeny",
      role: "2111-node tree geometry shared by joint and target tree planes",
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
            id: "joint-tree-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-tree-plane"
          }
        }
      ]
    },
    {
      id: "clade-pollen-limitation",
      role: "experiment-keyed pollen-limitation scatter grouped by Magnoliids, Monocots, and Eudicots with clade mean and standard error",
      keyframe_indices: [
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-strip-plane"
          }
        }
      ]
    },
    {
      id: "panel-guides",
      role: "endpoint map guides and target tree legends at stable panel-local anchors",
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
            id: "source-map-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "species-bridge-world"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-tree-plane"
          }
        }
      ]
    },
    {
      id: "frame-backdrop",
      role: "single white viewport backdrop",
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
            id: "map-tree-viewport"
          }
        }
      ]
    }
  ]
}, Ta = {
  schema_version: ha,
  id: ua,
  figure_id: ma,
  pair: ya,
  modules: pa,
  frame: Na,
  keyframes: Ea,
  scene: ka
}, ga = `id,species,threat_status,EI,lat,lon,coord_join\r
1,Dipterocarpus_oblongifolius,Not_threatened,0.85199638099999997,3.07304,101.52596,key4\r
2,Shorea_acuminata,Not_threatened,2.9163472439999998,2.72394,101.94561,key4\r
3,Shorea_hemsleyana,Threatened,2.1431573560000001,3.07304,101.52596,key4\r
4,Shorea_lepidota,Threatened,2.9875689630000002,2.72394,101.94561,key4\r
5,Shorea_leprosula,Threatened,2.7109957109999998,2.72394,101.94561,key4\r
6,Shorea_macroptera,Not_threatened,2.5091209079999999,2.72394,101.94561,key4\r
7,Shorea_ovalis,Not_threatened,0.101579793,2.72394,101.94561,key4\r
8,Arisaema_triphyllum,Not_threatened,3.8567300019999999,42.45345,-76.47350,key4\r
9,Solidago_canadensis,Not_threatened,0.41070072200000002,42.40530,-85.40097,key4\r
10,Solidago_canadensis,Not_threatened,0.185055207,42.40530,-85.40097,key4\r
11,Solidago_canadensis,Not_threatened,0.383036565,42.40530,-85.40097,key4\r
12,Euthamia_graminifolia,Not_threatened,0.84201975900000003,42.40530,-85.40097,key4\r
13,Euthamia_graminifolia,Not_threatened,-0.37976188399999999,42.40530,-85.40097,key4\r
14,Solidago_juncea,Not_threatened,-0.81170691500000003,42.40530,-85.40097,key4\r
15,Solidago_juncea,Not_threatened,8.7076175000000006E-2,42.40530,-85.40097,key4\r
16,Solidago_juncea,Not_threatened,0.99971393399999997,42.40530,-85.40097,key4\r
17,Aplectrum_hyemale,Not_threatened,6.6770922999999996E-2,40.15000,-88.16667,key4\r
18,Erythronium_umbilicatum,Not_threatened,-4.4672440000000001E-2,36.02009,-78.98305,key4\r
19,Erythronium_umbilicatum,Not_threatened,-1.0471299999999999E-2,36.02009,-78.98305,key4\r
20,Erythronium_umbilicatum,Not_threatened,-0.108213585,36.02009,-78.98305,key4\r
21,Erythronium_umbilicatum,Not_threatened,2.6811257000000002E-2,36.02009,-78.98305,key4\r
22,Erythronium_umbilicatum,Not_threatened,-0.17142226599999999,36.02009,-78.98305,key4\r
23,Erythronium_umbilicatum,Not_threatened,0.10697212,36.02009,-78.98305,key4\r
24,Erythronium_umbilicatum,Not_threatened,-1.3986241999999999E-2,36.02009,-78.98305,key4\r
25,Inga_sierrae,Not_threatened,2.4567357730000001,10.30299,-84.79513,key4\r
26,Inga_densiflora,Not_threatened,1.609437912,10.30299,-84.79513,key4\r
27,Inga_mortoniana,Not_threatened,3.1986731179999999,10.30299,-84.79513,key4\r
28,Inga_oerstediana,Not_threatened,0.87546873700000005,10.30299,-84.79513,key4\r
29,Inga_punctata,Not_threatened,2.3025850929999998,10.30299,-84.79513,key4\r
30,Polemonium_viscosum,Not_threatened,0.59700332,39.22327,-106.11738,key4\r
31,Polemonium_viscosum,Not_threatened,0.63004647400000002,39.22327,-106.11738,key4\r
32,Polemonium_viscosum,Not_threatened,0.61090908200000005,39.22327,-106.11738,key4\r
33,Polemonium_viscosum,Not_threatened,0.54604705899999995,39.22327,-106.11738,key4\r
34,Polemonium_viscosum,Not_threatened,1.182820429,39.22327,-106.11738,key4\r
35,Polemonium_viscosum,Not_threatened,0.747214402,39.22327,-106.11738,key4\r
36,Polemonium_viscosum,Not_threatened,0.87174895600000002,39.22327,-106.11738,key4\r
37,Polemonium_viscosum,Not_threatened,0.860009896,39.22327,-106.11738,key4\r
38,Polemonium_viscosum,Not_threatened,2.4972920999999999E-2,39.22327,-106.11738,key4\r
39,Polemonium_viscosum,Not_threatened,0.34392179099999998,39.22327,-106.11738,key4\r
40,Polemonium_viscosum,Not_threatened,0.769605655,39.22327,-106.11738,key4\r
41,Polemonium_viscosum,Not_threatened,0.50360537599999999,39.22327,-106.11738,key4\r
42,Clintonia_borealis,Not_threatened,1.2578782E-2,45.38292,-77.79943,key4\r
43,Clintonia_borealis,Not_threatened,6.8208249999999998E-2,45.38292,-77.79943,key4\r
44,Staphylea_trifolia,Not_threatened,2.3285605789999999,42.06002,-87.77024,key4\r
45,Ipomopsis_aggregata,Not_threatened,1.318788479,38.86667,-106.96667,key4\r
46,Ipomopsis_aggregata,Not_threatened,0.84292148600000005,38.86667,-106.96667,key4\r
47,Ipomopsis_aggregata,Not_threatened,1.2188614170000001,38.86667,-106.96667,key4\r
48,Erythronium_americanum,Not_threatened,0.33744358200000002,40.55000,-74.63333,key4\r
49,Rubus_chamaemorus,Not_threatened,-1.0471299999999999E-2,64.51667,18.25417,key4\r
50,Rubus_chamaemorus,Not_threatened,1.697711E-2,64.51667,18.25417,key4\r
51,Rubus_chamaemorus,Not_threatened,0.19926427799999999,64.51667,18.25417,key4\r
52,Rubus_chamaemorus,Not_threatened,9.7185118000000001E-2,64.51667,18.25417,key4\r
53,Rubus_chamaemorus,Not_threatened,7.7725921000000003E-2,64.51667,18.25417,key4\r
54,Rubus_chamaemorus,Not_threatened,3.7545182000000003E-2,64.51667,18.25417,key4\r
55,Rubus_chamaemorus,Not_threatened,0.28282990200000002,64.51667,18.25417,key4\r
56,Podophyllum_peltatum,Not_threatened,1.2029084080000001,36.00000,-78.93333,key4\r
57,Cardamine_angustata,Not_threatened,7.1655989000000003E-2,36.00000,-78.93333,key4\r
58,Stellaria_pubera,Not_threatened,-8.9612158999999997E-2,36.00000,-78.93333,key4\r
59,Iris_cristata,Not_threatened,5.2643732999999998E-2,35.75000,-79.01667,key4\r
60,Erythronium_umbilicatum,Not_threatened,-7.6470363999999999E-2,35.75000,-79.01667,key4\r
61,Trillium_catesbaei,Not_threatened,0.100083459,35.75000,-79.01667,key4\r
62,Uvularia_sessilifolia,Not_threatened,-9.0971778000000003E-2,35.33333,-81.88333,key4\r
63,Sanguinaria_canadensis,Not_threatened,6.1557893000000002E-2,35.75000,-79.01667,key4\r
64,Claytonia_virginica,Not_threatened,-4.7628048999999999E-2,35.75000,-79.01667,key4\r
65,Hepatica_nobilis_var._obtusa,Not_threatened,0,35.75000,-79.01667,key4\r
66,Anemonella_thalictroides,No_data,-5.9423419999999998E-2,35.75000,-79.01667,key4\r
67,Tiarella_cordifolia,Not_threatened,0.13164519299999999,35.75000,-79.01667,key4\r
68,Asimina_obovata,Not_threatened,0.69314718099999995,29.00000,-81.28333,key4\r
69,Asimina_pygmaea,No_data,2.0149030209999998,29.00000,-81.28333,key4\r
70,Silene_latifolia_subsp._alba,Not_threatened,0.53941308099999996,37.28333,-80.58333,key4\r
71,Silene_latifolia_subsp._alba,Not_threatened,1.8487464010000001,37.28333,-80.58333,key4\r
72,Veronica_cusickii,Not_threatened,0.37948962200000003,47.90787,-123.34547,key4\r
73,Veronica_cusickii,Not_threatened,0.39589565700000001,47.75107,-123.83333,key4\r
74,Veronica_cusickii,Not_threatened,1.0768723019999999,47.75107,-123.83333,key4\r
75,Veronica_cusickii,Not_threatened,6.6691373999999998E-2,47.96667,-123.37824,key4\r
76,Veronica_cusickii,Not_threatened,3.3901552000000001E-2,47.96667,-123.37824,key4\r
77,Lobelia_cardinalis,Not_threatened,0.93054275500000005,40.69444,-77.75522,key4\r
78,Lobelia_cardinalis,Not_threatened,0.36344211799999998,40.69444,-77.75522,key4\r
79,Lobelia_cardinalis,Not_threatened,0.13427961599999999,40.69444,-77.75522,key4\r
80,Lobelia_cardinalis,Not_threatened,-0.216398163,40.69444,-77.75522,key4\r
81,Lobelia_cardinalis,Not_threatened,-0.12149755299999999,40.69444,-77.75522,key4\r
82,Lobelia_cardinalis,Not_threatened,-0.11637557599999999,40.69444,-77.75522,key4\r
83,Potentilla_anserina,Not_threatened,0.174353387,58.95004,17.60085,key4\r
84,Potentilla_anserina,Not_threatened,0.93918455199999995,58.95004,17.60085,key4\r
85,Potentilla_anserina,Not_threatened,0.67186978200000003,58.95004,17.60085,key4\r
86,Myrmecophila_tibicinis,No_data,3.2114408459999999,21.33333,-89.16944,key4\r
87,Geranium_maculatum,Not_threatened,0.20067069500000001,42.40172,-71.19907,key4\r
88,Geranium_maculatum,Not_threatened,-0.75141608900000001,42.40172,-71.19907,key4\r
89,Maianthemum_canadense,Not_threatened,0.16705408499999999,42.40172,-71.19907,key4\r
90,Maianthemum_canadense,Not_threatened,0,42.40172,-71.19907,key4\r
91,Maianthemum_canadense,Not_threatened,0.108213585,42.40172,-71.19907,key4\r
92,Uvularia_sessilifolia,Not_threatened,0,42.40172,-71.19907,key4\r
93,Uvularia_sessilifolia,Not_threatened,-6.6691373999999998E-2,42.40172,-71.19907,key4\r
94,Ionopsis_utricularioides,Not_threatened,1.1413995640000001,18.43784,-66.26353,key4\r
95,Arisaema_triphyllum,Not_threatened,1.780860179,41.45913,-87.69928,key4\r
96,Arisaema_triphyllum,Not_threatened,0.90078654499999999,41.45913,-87.69928,key4\r
106,Agave_mckelveyana,Threatened,0.13841044999999999,34.63333,-112.41667,key4\r
107,Rubus_chamaemorus,Not_threatened,0.113607664,64.18333,19.58333,key4\r
108,Rubus_chamaemorus,Not_threatened,0.27229363699999998,64.18333,19.58333,key4\r
109,Rubus_chamaemorus,Not_threatened,0.19704693100000001,64.18333,19.58333,key4\r
110,Rubus_chamaemorus,Not_threatened,0.26376802900000001,64.18333,19.58333,key4\r
111,Rubus_chamaemorus,Not_threatened,0.16957562200000001,64.18333,19.58333,key4\r
112,Rubus_chamaemorus,Not_threatened,0.199903302,64.18333,19.58333,key4\r
113,Salix_myrsinifolia,Not_threatened,6.9795761999999997E-2,63.66667,20.30000,key4\r
114,Salix_myrsinifolia,Not_threatened,9.4187215000000005E-2,63.66667,20.30000,key4\r
116,Amelanchier_arborea,Not_threatened,-4.0821995E-2,42.61667,-83.83333,key4\r
117,Calathea_ovandensis,No_data,0.118783536,19.17340,-96.13719,key4\r
118,Dianthus_deltoides,Threatened,0.20650423200000001,58.93333,12.53333,key4\r
119,Dianthus_deltoides,Threatened,0.77514601599999999,58.93333,12.53333,key4\r
120,Dianthus_deltoides,Threatened,0.13427961599999999,58.93333,12.53333,key4\r
121,Dianthus_deltoides,Threatened,1.386294361,58.93333,12.53333,key4\r
122,Dianthus_deltoides,Threatened,0.145025772,58.93333,12.53333,key4\r
123,Silene_viscaria,Threatened,0.146754726,58.93333,12.53333,key4\r
124,Silene_viscaria,Threatened,2.11718187,58.93333,12.53333,key4\r
125,Silene_viscaria,Threatened,6.2196208000000003E-2,58.93333,12.53333,key4\r
126,Silene_viscaria,Threatened,0.232208579,58.93333,12.53333,key4\r
127,Silene_viscaria,Threatened,-0.113581349,58.93333,12.53333,key4\r
128,Silene_viscaria,Threatened,0.133848199,58.93333,12.53333,key4\r
129,Banksia_spinulosa,No_data,0.25026068699999998,-34.67917,150.71167,key4\r
130,Blandfordia_nobilis,No_data,6.193997145,-34.67917,150.70833,key4\r
131,Rubus_chamaemorus,Not_threatened,0.329479201,64.18333,19.58333,key4\r
132,Banksia_ericifolia,Not_threatened,0.14534005,-34.65000,150.70000,key4\r
133,Banksia_ericifolia,Not_threatened,2.1380795000000001E-2,-34.65000,150.70000,key4\r
134,Banksia_ericifolia,Not_threatened,0.52053443799999999,-34.65000,150.70000,key4\r
135,Banksia_ericifolia,Not_threatened,-1.1848726329999999,-34.65000,150.70000,key4\r
136,Banksia_ericifolia,Not_threatened,-0.55108529799999995,-34.65000,150.70000,key4\r
137,Banksia_ericifolia,Not_threatened,2.5930580000000002E-2,-34.65000,150.70000,key4\r
138,Banksia_ericifolia,Not_threatened,-0.69314718099999995,-34.65000,150.70000,key4\r
139,Banksia_paludosa,Not_threatened,0.63496522499999997,-34.65000,150.70000,key4\r
140,Banksia_paludosa,Not_threatened,0.118559735,-34.65000,150.70000,key4\r
141,Banksia_spinulosa,No_data,1.397908894,-34.65000,150.70000,key4\r
142,Daphne_jezoensis,No_data,0.420502985,43.25000,141.83333,key4\r
143,Tipularia_discolor,Not_threatened,1.5982646119999999,38.88817,-76.55431,key4\r
144,Tipularia_discolor,Not_threatened,0.94000725799999996,38.88817,-76.55431,key4\r
145,Tipularia_discolor,Not_threatened,0.71465338599999995,38.88817,-76.55431,key4\r
146,Lomatium_salmoniflorum,Threatened,-5.1366497999999997E-2,46.63646,-117.37562,key4\r
147,Telopea_speciosissima,Not_threatened,0.97328204699999998,-34.67500,150.70000,key4\r
148,Epidendrum_ciliare,Not_threatened,1.779638109,18.40000,-65.79170,key4\r
149,Cyclopogon_cranichoides,Not_threatened,1.08523072,25.55838,-80.45676,key4\r
150,Cyclopogon_cranichoides,Not_threatened,1.3064883679999999,25.55838,-80.45676,key4\r
151,Magnolia_obovata,Not_threatened,0.94176981699999995,43.34631,141.94573,key4\r
152,Carya_ovata,Not_threatened,8.2238097999999996E-2,40.50000,-74.56670,key4\r
153,Carya_alba,Not_threatened,0.19415601399999999,40.50000,-74.56670,key4\r
154,Cypripedium_acaule,Not_threatened,3.1780538300000001,42.36829,-71.30577,key4\r
155,Cypripedium_acaule,Not_threatened,3.8286413960000001,42.36829,-71.30577,key4\r
156,Cypripedium_acaule,Not_threatened,3.8501476019999998,42.36829,-71.30577,key4\r
157,Cypripedium_acaule,Not_threatened,3.4011973819999999,42.36829,-71.30577,key4\r
158,Cypripedium_acaule,Not_threatened,3.33220451,42.33704,-71.20922,key4\r
159,Cypripedium_acaule,Not_threatened,2.719100037,42.33704,-71.20922,key4\r
160,Platanthera_ciliaris,Not_threatened,-2.5612576000000001E-2,35.05973,-83.43056,key4\r
161,Platanthera_ciliaris,Not_threatened,0.18484362600000001,33.07458,-79.76284,key4\r
162,Begonia_involucrata,No_data,3.4909814999999997E-2,10.30299,-84.79513,key4\r
163,Geranium_maculatum,Not_threatened,0.47957307999999998,40.18643,-85.51667,key4\r
164,Geranium_maculatum,Not_threatened,0.59783700100000003,40.11059,-88.20727,key4\r
165,Myrosmodes_cochleare,No_data,0.31061301400000002,8.90000,-70.85000,key4\r
166,Ipomopsis_aggregata,Not_threatened,1.386294361,38.95852,-106.98776,key4\r
167,Ipomopsis_aggregata,Not_threatened,1.056052674,38.95852,-106.98776,key4\r
168,Mimulus_guttatus,Not_threatened,1.9512814E-2,38.75241,-122.61499,key4\r
169,Mimulus_guttatus,Not_threatened,-9.5817922999999999E-2,39.16250,-122.61111,key4\r
170,Mimulus_guttatus,Not_threatened,1.0450622110000001,38.02965,-119.97405,key4\r
171,Banksia_ericifolia,Not_threatened,-0.59783700100000003,-34.40358,150.85483,key4\r
172,Nerium_oleander,Not_threatened,2.2756961929999999,38.37000,-3.83000,key4\r
173,Nerium_oleander,Not_threatened,4.6210435350000001,38.37000,-3.83000,key4\r
174,Nerium_oleander,Not_threatened,5.8406416569999999,36.75602,-5.36780,key4\r
175,Silene_viscaria,Threatened,0.27966278300000003,58.93333,12.53333,key4\r
176,Silene_viscaria,Threatened,0.16116535700000001,58.93333,12.53333,key4\r
177,Silene_viscaria,Threatened,2.9462032999999999E-2,58.93333,12.53333,key4\r
178,Lobelia_cardinalis,Not_threatened,1.0940830020000001,43.75903,-73.57146,key4\r
179,Lobelia_cardinalis,Not_threatened,0.77300086999999995,36.17397,-86.51624,key4\r
180,Lobelia_siphilitica,Not_threatened,1.3317277409999999,36.17397,-86.51624,key4\r
181,Anemone_pulsatilla,No_data,0.180240391,55.69973,14.20107,key4\r
182,Anemone_pulsatilla,No_data,0.44973793200000001,55.69973,14.20107,key4\r
183,Silene_viscaria,Threatened,-0.126502437,58.96667,12.53333,key4\r
184,Silene_viscaria,Threatened,0.16317774800000001,58.96667,12.53333,key4\r
185,Silene_viscaria,Threatened,0.83959497599999999,58.96667,12.53333,key4\r
186,Melampyrum_pratense,Not_threatened,0.31724087499999998,58.96667,12.53333,key4\r
187,Melampyrum_pratense,Not_threatened,0.174353387,58.96667,12.53333,key4\r
188,Melampyrum_pratense,Not_threatened,0.24557058700000001,58.96667,12.53333,key4\r
189,Phellodendron_amurense,Threatened,0.24366153700000001,43.33771,141.93107,key4\r
190,Phellodendron_amurense,Threatened,-8.9700066999999994E-2,43.33771,141.93107,key4\r
191,Phellodendron_amurense,Threatened,3.8374012999999998E-2,43.33771,141.93107,key4\r
192,Phellodendron_amurense,Threatened,0.12698472399999999,43.33771,141.93107,key4\r
193,Banksia_spinulosa,No_data,0.26341745,-30.50000,152.45000,key4\r
194,Banksia_spinulosa,No_data,0.22595649300000001,-30.50000,152.45000,key4\r
195,Senecio_integrifolius,Threatened,0.11956251699999999,56.08328,14.51696,key4\r
196,Senecio_integrifolius,Threatened,0.236533559,56.08328,14.51696,key4\r
197,Senecio_integrifolius,Threatened,7.2350745999999994E-2,56.08328,14.51696,key4\r
198,Senecio_integrifolius,Threatened,0.142143031,56.08328,14.51696,key4\r
199,Senecio_integrifolius,Threatened,0.237785101,56.08328,14.51696,key4\r
200,Senecio_integrifolius,Threatened,0.31975158999999997,56.08328,14.51696,key4\r
201,Senecio_integrifolius,Threatened,0.253937248,56.08328,14.51696,key4\r
202,Senecio_integrifolius,Threatened,1.179115508,56.08328,14.51696,key4\r
203,Geranium_maculatum,Not_threatened,0.121360857,40.20190,-88.37722,key4\r
204,Geranium_maculatum,Not_threatened,0.15906469500000001,40.09304,-88.23990,key4\r
205,Geranium_maculatum,Not_threatened,0.15415068000000001,40.20190,-88.37722,key4\r
206,Geranium_maculatum,Not_threatened,3.5091320000000002E-2,40.20190,-88.37722,key4\r
207,Geranium_maculatum,Not_threatened,0.18805223200000001,40.09304,-88.23990,key4\r
208,Geranium_maculatum,Not_threatened,-3.6367643999999998E-2,40.09304,-88.23990,key4\r
209,Distichlis_spicata,Not_threatened,-1.0126669E-2,41.74068,-71.30861,key4\r
210,Distichlis_spicata,Not_threatened,0.57834682500000001,41.74068,-71.30861,key4\r
211,Spartina_alterniflora,Not_threatened,0.65147448399999996,41.74068,-71.30861,key4\r
212,Spartina_alterniflora,Not_threatened,2.186413661,41.74068,-71.30861,key4\r
213,Spartina_alterniflora,Not_threatened,0.25292811300000001,41.74068,-71.30861,key4\r
214,Spartina_alterniflora,Not_threatened,-9.7980408000000005E-2,41.74068,-71.30861,key4\r
215,Spartina_patens,Not_threatened,0.34066511500000002,41.74068,-71.30861,key4\r
216,Spartina_patens,Not_threatened,0.51581316499999996,41.74068,-71.30861,key4\r
217,Ipomopsis_aggregata,Not_threatened,0.72609133599999998,38.95852,-106.98776,key4\r
218,Ipomopsis_aggregata,Not_threatened,0.26694617399999998,38.95852,-106.98776,key4\r
219,Acourtia_runcinata,Not_threatened,0.57888420699999998,30.29205,-97.79024,key4\r
220,Agalinis_strictifolia,Not_threatened,0.31885179400000002,30.28431,-97.77825,key4\r
221,Agalinis_strictifolia,Not_threatened,0.174434862,30.28431,-97.77825,key4\r
222,Agalinis_strictifolia,Not_threatened,0.157283806,30.28431,-97.77825,key4\r
223,Agalinis_strictifolia,Not_threatened,0.57309374000000002,30.28431,-97.77825,key4\r
224,Agalinis_strictifolia,Not_threatened,0.224952975,30.28431,-97.77825,key4\r
225,Agalinis_strictifolia,Not_threatened,0.37705149199999999,30.28431,-97.77825,key4\r
226,Agalinis_strictifolia,Not_threatened,0.452846898,30.28431,-97.77825,key4\r
227,Agalinis_strictifolia,Not_threatened,3.4149997000000001E-2,30.28431,-97.77825,key4\r
228,Agalinis_strictifolia,Not_threatened,-7.4944614000000007E-2,30.28431,-97.77825,key4\r
229,Agalinis_strictifolia,Not_threatened,-2.0450610000000001E-2,30.28431,-97.77825,key4\r
230,Agalinis_strictifolia,Not_threatened,0.72954815100000003,30.28431,-97.77825,key4\r
231,Agalinis_strictifolia,Not_threatened,0.54283019700000001,30.28431,-97.77825,key4\r
232,Agalinis_strictifolia,Not_threatened,0.34192760999999999,30.28431,-97.77825,key4\r
233,Agalinis_strictifolia,Not_threatened,0.167298588,30.28431,-97.77825,key4\r
234,Agalinis_strictifolia,Not_threatened,0.66468236800000002,30.28431,-97.77825,key4\r
235,Agalinis_strictifolia,Not_threatened,-5.9316577000000002E-2,30.28431,-97.77825,key4\r
236,Agalinis_strictifolia,Not_threatened,-1.1406819E-2,30.28431,-97.77825,key4\r
237,Agalinis_strictifolia,Not_threatened,0.16161936299999999,30.28431,-97.77825,key4\r
238,Agalinis_strictifolia,Not_threatened,0.119774729,30.28431,-97.77825,key4\r
239,Agalinis_strictifolia,Not_threatened,0.124659773,30.28431,-97.77825,key4\r
240,Sidalcea_malviflora_subsp._elegans,Not_threatened,-0.23692983000000001,42.35354,-123.91726,key4\r
241,Lathyrus_vernus,Not_threatened,1.5824092400000001,59.03000,17.40000,key4\r
242,Lathyrus_vernus,Not_threatened,0.365724779,58.10000,17.06667,key4\r
243,Disa_uniflora,Not_threatened,-0.170345366,-33.96282,18.40984,key4\r
244,Disa_uniflora,Not_threatened,0.388370675,-33.96282,18.40984,key4\r
245,Disa_uniflora,Not_threatened,1.2443241,-33.96282,18.40984,key4\r
246,Disa_uniflora,Not_threatened,1.246532419,-33.96282,18.40984,key4\r
252,Asphodelus_albus,Threatened,-0.27138369099999998,43.38333,-5.86667,key4\r
253,Comarum_palustre,Not_threatened,-0.12323264,56.36667,9.33889,key4\r
254,Podophyllum_peltatum,Not_threatened,0.65999497299999998,39.90779,-75.38785,key4\r
255,Podophyllum_peltatum,Not_threatened,0.66176086700000003,40.53037,-82.80080,key4\r
256,Podophyllum_peltatum,Not_threatened,2.184066493,41.72039,-81.24598,key4\r
257,Podophyllum_peltatum,Not_threatened,2.4171884760000002,41.46415,-81.20782,key4\r
258,Podophyllum_peltatum,Not_threatened,0.36915488400000002,41.45000,-81.20000,key4\r
259,Podophyllum_peltatum,Not_threatened,0.60391604700000001,40.53037,-82.80080,key4\r
260,Podophyllum_peltatum,Not_threatened,0.84729785999999996,40.53037,-82.80080,key4\r
261,Podophyllum_peltatum,Not_threatened,0.579244168,40.53037,-82.80080,key4\r
262,Glechoma_hederacea,Not_threatened,0.431782416,55.99075,13.59634,key4\r
263,Glechoma_hederacea,Not_threatened,0.64817381500000004,55.99075,13.59634,key4\r
264,Glechoma_hederacea,Not_threatened,1.142024782,55.99075,13.59634,key4\r
265,Ipomopsis_aggregata,Not_threatened,0.51394575099999995,38.95852,-106.98776,key4\r
266,Ipomopsis_aggregata,Not_threatened,0.73088750899999999,38.95852,-106.98776,key4\r
267,Ipomopsis_aggregata,Not_threatened,6.6006839999999999E-3,38.95852,-106.98776,key4\r
268,Ipomopsis_aggregata,Not_threatened,0.96965595199999999,38.95852,-106.98776,key4\r
269,Ipomopsis_aggregata,Not_threatened,0.17997137899999999,38.95852,-106.98776,key4\r
270,Ipomopsis_aggregata,Not_threatened,0.56599200500000002,38.95852,-106.98776,key4\r
271,Ipomopsis_aggregata,Not_threatened,0.42941834899999998,38.95852,-106.98776,key4\r
272,Audouinia_capitata,Not_threatened,0.88627338200000005,-34.26580,18.41110,key4\r
273,Sabatia_angularis,Not_threatened,0.28279870899999998,41.65000,-87.06667,key4\r
274,Sabatia_angularis,Not_threatened,6.2595066000000005E-2,41.65000,-87.06667,key4\r
276,Physalis_longifolia,Not_threatened,1.191163846,44.30000,-85.60000,key4\r
277,Physalis_longifolia,Not_threatened,2.4692612999999999E-2,44.30000,-85.60000,key4\r
278,Prosopis_glandulosa_var._torreyana,Not_threatened,1.3437347470000001,26.00000,-104.00000,key4\r
279,Discaria_americana,Threatened,1.190727578,-36.66666,-56.70000,key4\r
280,Lindera_benzoin,Not_threatened,-0.24116205700000001,39.92349,-75.61193,key4\r
281,Lindera_benzoin,Not_threatened,-8.0042708000000004E-2,39.92349,-75.61193,key4\r
282,Asphodelus_albus,Threatened,0.606135804,43.37924,-5.86395,key4\r
283,Kalmia_latifolia,Not_threatened,0.26028309799999999,37.40846,-80.49450,key4\r
284,Kalmia_latifolia,Not_threatened,-7.0204259000000005E-2,41.47401,-71.57514,key4\r
285,Kalmia_latifolia,Not_threatened,1.4598799000000001E-2,41.47401,-71.57514,key4\r
286,Kalmia_latifolia,Not_threatened,1.245215763,41.47401,-71.57514,key4\r
287,Asphodelus_aestivus,Not_threatened,0.41424479600000003,31.80387,35.32585,key4\r
288,Asphodelus_aestivus,Not_threatened,0.58979873800000004,31.80387,35.32585,key4\r
289,Asphodelus_aestivus,Not_threatened,0.463887402,31.80387,35.32585,key4\r
290,Ixianthes_retzioides,Not_threatened,1.9055351819999999,-32.00000,19.00000,key4\r
291,Jasminum_fruticans,No_data,0.31300610600000001,43.77681,3.60508,key4\r
292,Jasminum_fruticans,No_data,0.13953453199999999,43.77681,3.60508,key4\r
293,Jasminum_fruticans,No_data,0.17804145299999999,43.77681,3.60508,key4\r
294,Jasminum_fruticans,No_data,0.109278398,43.77681,3.60508,key4\r
295,Pachycereus_pringlei,Not_threatened,0.73511137999999998,28.82275,-111.93630,key4\r
296,Pachycereus_pringlei,Not_threatened,-0.18805223200000001,28.82275,-111.93630,key4\r
297,Yucca_elata,Not_threatened,0.17979311000000001,32.28333,-106.70000,key4\r
298,Disa_tenuifolia,Not_threatened,0.62753032600000003,-34.28333,18.47444,key4\r
299,Linum_lewisii,Not_threatened,-0.28146443599999998,38.50000,-106.50000,key4\r
300,Linum_lewisii,Not_threatened,-0.41260799599999998,38.50000,-106.50000,key4\r
301,Echium_vulgare,Not_threatened,1.0695289E-2,52.08333,4.55000,key4\r
302,Persoonia_mollis,Not_threatened,-0.17551550199999999,-33.76905,150.48920,key4\r
303,Asclepias_syriaca,Not_threatened,3.1391408570000001,43.96444,-69.45933,key4\r
304,Asclepias_syriaca,Not_threatened,3.218875825,43.96444,-69.45933,key4\r
305,Disa_atricapilla,Not_threatened,0.73396917500000003,-34.27667,18.45750,key4\r
306,Primula_sieboldii,Threatened,2.0467837520000001,35.43333,139.63333,key4\r
307,Primula_sieboldii,Threatened,2.4069451079999999,35.43333,139.63333,key4\r
308,Lathyrus_vernus,Not_threatened,1.1349799330000001,59.05624,17.49583,key4\r
309,Narcissus_hispanicus,No_data,0.118783536,38.14700,-2.73883,key4\r
310,Narcissus_hispanicus,No_data,0.33766200499999999,38.14700,-2.73883,key4\r
311,Narcissus_hispanicus,No_data,0.10804148199999999,38.14700,-2.73883,key4\r
312,Narcissus_hispanicus,No_data,5.0487445999999998E-2,38.14700,-2.73883,key4\r
313,Narcissus_hispanicus,No_data,6.8027469999999996E-3,38.14700,-2.73883,key4\r
314,Narcissus_hispanicus,No_data,-6.9753039000000003E-2,38.14700,-2.73883,key4\r
315,Narcissus_hispanicus,No_data,3.7531999000000003E-2,38.14700,-2.73883,key4\r
316,Adonis_ramosa,Threatened,0.316962307,42.96667,141.38333,key4\r
317,Primula_veris,Not_threatened,0.56244064900000001,60.23333,21.98333,key4\r
318,Primula_veris,Not_threatened,4.2307494000000001E-2,60.23333,21.98333,key4\r
319,Primula_veris,Not_threatened,0.28455707000000002,60.23333,21.98333,key4\r
320,Primula_veris,Not_threatened,8.4621890000000005E-2,60.23333,21.98333,key4\r
321,Primula_veris,Not_threatened,6.7454824999999996E-2,60.23333,21.98333,key4\r
322,Anemone_hepatica_var._acuta,No_data,0.59205106399999996,44.55000,-76.40000,key4\r
323,Anemone_hepatica_var._acuta,No_data,0.81989888600000005,44.55000,-76.40000,key4\r
324,Anemone_hepatica_var._acuta,No_data,1.011600912,44.55000,-76.40000,key4\r
325,Anemone_hepatica_var._acuta,No_data,1.005521866,44.55000,-76.40000,key4\r
326,Anemone_hepatica_var._acuta,No_data,0.88154778300000003,44.55000,-76.40000,key4\r
327,Anemone_hepatica_var._acuta,No_data,0.84729785999999996,44.55000,-76.40000,key4\r
328,Manettia_luteorubra,No_data,1.6807117999999999E-2,-24.18333,-48.53333,key4\r
329,Manettia_luteorubra,No_data,5.8989298000000003E-2,-24.18333,-48.53333,key4\r
330,Gentiana_cruciata,Not_threatened,0.39209104900000002,51.91315,4.06260,key4\r
331,Gentiana_cruciata,Not_threatened,1.7121041E-2,52.57169,4.63718,key4\r
332,Blandfordia_grandiflora,No_data,0.236779289,-29.60000,152.26667,key4\r
333,Blandfordia_grandiflora,No_data,0.34412045699999999,-29.60000,152.26667,key4\r
334,Blandfordia_grandiflora,No_data,0.23383146599999999,-29.60000,152.26667,key4\r
335,Blandfordia_grandiflora,No_data,0.36323234399999998,-29.60000,152.26667,key4\r
336,Blandfordia_grandiflora,No_data,0.182321557,-29.60000,152.26667,key4\r
337,Blandfordia_grandiflora,No_data,1.1579951369999999,-29.60000,152.26667,key4\r
338,Blandfordia_grandiflora,No_data,0.232569737,-29.60000,152.26667,key4\r
339,Blandfordia_grandiflora,No_data,1.4048707469999999,-29.60000,152.26667,key4\r
340,Blandfordia_grandiflora,No_data,1.3523928089999999,-29.60000,152.26667,key4\r
341,Lilium_auratum,No_data,0.77755806999999999,35.96667,137.95000,key4\r
342,Psychotria_suerrensis,No_data,0.133531393,10.46667,-84.01667,key4\r
343,Lythrum_salicaria,Not_threatened,0.63430668099999998,63.78333,20.61667,key4\r
344,Lythrum_salicaria,Not_threatened,0.58778666499999999,63.78333,20.61667,key4\r
345,Lythrum_salicaria,Not_threatened,0.55628799799999995,63.78333,20.61667,key4\r
346,Lythrum_salicaria,Not_threatened,1.3545456629999999,63.78333,20.61667,key4\r
347,Lythrum_salicaria,Not_threatened,0.249811798,63.78333,20.61667,key4\r
348,Lythrum_salicaria,Not_threatened,0.29673190799999999,63.78333,20.61667,key4\r
349,Lythrum_salicaria,Not_threatened,0.3142491,63.78333,20.61667,key4\r
350,Lythrum_salicaria,Not_threatened,0.34937564100000001,63.78333,20.61667,key4\r
351,Lythrum_salicaria,Not_threatened,0.122102697,63.78333,20.61667,key4\r
352,Lythrum_salicaria,Not_threatened,2.5642431E-2,63.78333,20.61667,key4\r
353,Lythrum_salicaria,Not_threatened,0.113328685,63.78333,20.61667,key4\r
354,Lythrum_salicaria,Not_threatened,0.149035579,63.78333,20.61667,key4\r
355,Lythrum_salicaria,Not_threatened,0.42899560599999997,63.78333,20.61667,key4\r
356,Lythrum_salicaria,Not_threatened,2.5642431E-2,63.78333,20.61667,key4\r
357,Lythrum_salicaria,Not_threatened,0.76376474800000005,63.78333,20.61667,key4\r
358,Lythrum_salicaria,Not_threatened,-3.7271394999999999E-2,63.78333,20.61667,key4\r
359,Lythrum_salicaria,Not_threatened,0.22161566699999999,63.78333,20.61667,key4\r
360,Lythrum_salicaria,Not_threatened,0.163325056,63.78333,20.61667,key4\r
361,Lythrum_salicaria,Not_threatened,0.12814582299999999,63.78333,20.61667,key4\r
362,Lythrum_salicaria,Not_threatened,0.42271286200000002,63.78333,20.61667,key4\r
363,Lythrum_salicaria,Not_threatened,1.444044E-3,63.78333,20.61667,key4\r
364,Lythrum_salicaria,Not_threatened,0.17185025700000001,63.78333,20.61667,key4\r
365,Calypso_bulbosa,Threatened,0.52619979100000003,64.50000,18.30000,key4\r
366,Calypso_bulbosa,Threatened,0.38715796099999999,64.50000,18.30000,key4\r
367,Calypso_bulbosa,Threatened,0.28837531300000002,64.50000,18.30000,key4\r
368,Calypso_bulbosa,Threatened,0.217192195,64.50000,18.30000,key4\r
369,Calypso_bulbosa,Threatened,0.152236804,64.50000,18.30000,key4\r
370,Calypso_bulbosa,Threatened,0.51201539200000001,64.50000,18.30000,key4\r
371,Calypso_bulbosa,Threatened,5.4217585999999998E-2,64.50000,18.30000,key4\r
372,Calypso_bulbosa,Threatened,0.29293931299999998,64.50000,18.30000,key4\r
373,Calypso_bulbosa,Threatened,0.83290912299999997,64.50000,18.30000,key4\r
376,Calyptrogyne_ghiesbreghtiana,Threatened,0.93430923700000001,10.46667,-84.01667,key4\r
377,Toxicoscordion_paniculatum,No_data,0.42017125500000002,41.68333,-110.61667,key4\r
378,Toxicoscordion_paniculatum,No_data,2.3530497000000001E-2,41.76667,-111.76667,key4\r
379,Toxicoscordion_paniculatum,No_data,0.28357528999999998,41.68333,-110.61667,key4\r
380,Toxicoscordion_paniculatum,No_data,-3.6367643999999998E-2,41.76667,-111.76667,key4\r
381,Carnegiea_gigantea,Not_threatened,0.223143551,28.83333,-112.08333,key4\r
382,Pachycereus_pringlei,Not_threatened,0.73511137999999998,28.83333,-112.08333,key4\r
383,Pachycereus_pringlei,Not_threatened,-0.18805223200000001,28.83333,-112.08333,key4\r
384,Stenocereus_thurberi,Not_threatened,1.15267951,28.83333,-112.08333,key4\r
385,Andromeda_polifolia,Not_threatened,0.22129569099999999,58.10000,17.06667,key4\r
386,Vaccinium_myrtillus,Not_threatened,-0.46134556700000001,58.10000,17.06667,key4\r
387,Vaccinium_microcarpum,Threatened,-0.51725651399999995,58.10000,17.06667,key4\r
388,Vaccinium_uliginosum,Threatened,0.217412877,58.10000,17.06667,key4\r
389,Vaccinium_vitis-idaea,Not_threatened,-0.31329464800000001,58.10000,17.06667,key4\r
390,Dillwynia_hispida,No_data,0.559615788,-35.13333,139.13333,key4\r
391,Dillwynia_hispida,No_data,0.57149711599999997,-35.13333,139.13333,key4\r
392,Dillwynia_hispida,No_data,0.143610398,-35.13333,139.13333,key4\r
393,Dillwynia_hispida,No_data,0.45974199500000001,-35.13333,139.13333,key4\r
394,Dillwynia_hispida,No_data,0.10166950199999999,-35.13333,139.13333,key4\r
395,Dillwynia_hispida,No_data,0.58458080000000001,-35.13333,139.13333,key4\r
396,Dillwynia_hispida,No_data,0.25201153500000001,-35.13333,139.13333,key4\r
397,Dillwynia_hispida,No_data,0.11798178400000001,-35.13333,139.13333,key4\r
398,Pultenaea_densifolia,Not_threatened,0.35393145799999998,-35.13333,139.13333,key4\r
399,Pultenaea_densifolia,Not_threatened,-0.15442803399999999,-35.13333,139.13333,key4\r
400,Pultenaea_densifolia,Not_threatened,-0.142680587,-35.13333,139.13333,key4\r
401,Swartzia_pickelii,Not_threatened,3.1666769939999999,-8.12500,-34.09167,key4\r
402,Phlox_drummondii,Not_threatened,1.6828204579999999,29.90181,-99.16843,key4\r
403,Phlox_drummondii,Not_threatened,1.5752824050000001,29.90181,-99.16843,key4\r
404,Phlox_drummondii,Not_threatened,0.78877854199999997,29.90181,-99.16843,key4\r
405,Phlox_drummondii,Not_threatened,0.631826479,29.90181,-99.16843,key4\r
406,Phlox_drummondii,Not_threatened,0.48550781599999998,29.90181,-99.16843,key4\r
407,Phlox_drummondii,Not_threatened,0.20185244099999999,29.90181,-99.16843,key4\r
408,Ligaria_cuneifolia,No_data,0.18457127700000001,-31.16896,-64.24248,key4\r
409,Sorbus_aucuparia,Not_threatened,0.164755233,63.81667,20.27111,key4\r
410,Grevillea_barklyana,Threatened,-8.7011377000000001E-2,-30.01667,150.83333,key4\r
411,Grevillea_barklyana,Threatened,-0.51082562399999998,-30.01667,150.83333,key4\r
412,Thalictrum_pubescens,Not_threatened,6.6266753999999997E-2,39.12302,-83.39605,key4\r
413,Erythroxylum_havanense,Not_threatened,-2.1202208E-2,19.50000,-105.05000,key4\r
414,Erythroxylum_havanense,Not_threatened,0.61019809800000002,19.50000,-105.05000,key4\r
415,Silene_virginica,Not_threatened,-6.500483E-2,37.37514,-80.52275,key4\r
416,Silene_virginica,Not_threatened,-0.258467312,37.37514,-80.52275,key4\r
417,Silene_virginica,Not_threatened,0.236885179,37.37514,-80.52275,key4\r
418,Silene_virginica,Not_threatened,2.4155764E-2,37.37514,-80.52275,key4\r
419,Silene_virginica,Not_threatened,0.331357136,37.37514,-80.52275,key4\r
420,Silene_virginica,Not_threatened,0.28963329300000001,37.37514,-80.52275,key4\r
421,Silene_virginica,Not_threatened,-2.5317808000000001E-2,37.37514,-80.52275,key4\r
422,Gentianella_germanica,Threatened,0.14868319799999999,47.42551,7.41836,key4\r
423,Maianthemum_canadense,Not_threatened,0.57542870899999998,43.13195,-71.51300,key4\r
424,Maianthemum_canadense,Not_threatened,-0.42661270400000001,43.13195,-71.51300,key4\r
425,Rhynchanthera_dichotoma,No_data,0.40546510800000002,-20.62398,-49.67072,species\r
426,Vaccinium_myrtillus,Not_threatened,0.18457127700000001,50.25000,5.73944,key4\r
427,Vaccinium_myrtillus,Not_threatened,-0.19553589599999999,50.25000,5.73944,key4\r
428,Vaccinium_myrtillus,Not_threatened,0.68309684500000001,50.25000,5.73944,key4\r
429,Vaccinium_myrtillus,Not_threatened,0.26488315699999998,50.25000,5.73944,key4\r
430,Vaccinium_uliginosum,Threatened,0.27193371500000002,50.25000,5.73944,key4\r
431,Vaccinium_uliginosum,Threatened,8.7011377000000001E-2,50.25000,5.73944,key4\r
432,Vaccinium_uliginosum,Threatened,0.89006753699999996,50.25000,5.73944,key4\r
433,Vaccinium_uliginosum,Threatened,0.414275738,50.25000,5.73944,key4\r
434,Vaccinium_vitis-idaea,Not_threatened,0.57642290600000001,50.25000,5.73944,key4\r
435,Vaccinium_vitis-idaea,Not_threatened,0.14763599899999999,50.25000,5.73944,key4\r
436,Vaccinium_vitis-idaea,Not_threatened,0.39465419200000001,50.25000,5.73944,key4\r
437,Vaccinium_vitis-idaea,Not_threatened,8.4260344000000001E-2,50.25000,5.73944,key4\r
438,Cyrtanthus_guthrieae,Threatened,2.018287119,-33.96660,18.44188,key4\r
439,Cyrtanthus_ventricosus,Not_threatened,1.1574527889999999,-33.96660,18.44188,key4\r
440,Haemanthus_sanguineus,Not_threatened,1.66029633,-33.96660,18.44188,key4\r
441,Nerine_sarniensis,Not_threatened,0.21238900699999999,-33.96660,18.44188,key4\r
442,Disa_bivalvata,Not_threatened,0.53114867799999999,-33.96660,18.44188,key4\r
443,Disa_fasciata,Not_threatened,0.74391950600000001,-33.96660,18.44188,key4\r
444,Disa_racemosa,Not_threatened,2.8967008930000002,-33.96660,18.44188,key4\r
445,Disa_racemosa,Not_threatened,0.38242744000000001,-33.96660,18.44188,key4\r
446,Disa_tenella,Threatened,0.27020744200000002,-33.96660,18.44188,key4\r
447,Disa_tenuifolia,Not_threatened,0.490539273,-33.96660,18.44188,key4\r
448,Disa_uniflora,Not_threatened,1.218361542,-33.96660,18.44188,key4\r
449,Disa_uniflora,Not_threatened,0.35684645599999998,-33.96660,18.44188,key4\r
450,Disa_draconis,Threatened,1.9117943959999999,-33.96282,18.40984,key4\r
451,Disa_draconis,Threatened,2.1368814469999999,-32.92413,19.28205,key4\r
452,Disa_draconis,Threatened,1.5421047919999999,-33.11765,18.13817,key4\r
453,Ipomopsis_aggregata,Not_threatened,0.56669204799999995,40.03357,-105.53553,key4\r
454,Ipomopsis_aggregata,Not_threatened,1.008465438,40.03357,-105.53553,key4\r
455,Ipomopsis_aggregata,Not_threatened,0.85834348800000004,40.03357,-105.53553,key4\r
456,Ipomopsis_aggregata,Not_threatened,1.293754939,40.03357,-105.53553,key4\r
457,Ipomopsis_aggregata,Not_threatened,2.2472855999999999E-2,40.03209,-105.53573,key4\r
458,Ipomopsis_aggregata,Not_threatened,0.59287056000000005,40.00992,-105.55068,key4\r
459,Ipomopsis_aggregata,Not_threatened,0.264094155,40.03260,-105.53555,key4\r
460,Ipomopsis_aggregata,Not_threatened,0.62876551000000003,39.63389,-105.81694,key4\r
461,Passiflora_miersii,Not_threatened,0.14595391199999999,-22.81670,-47.10000,key4\r
462,Passiflora_suberosa,Not_threatened,0.54897739000000001,-22.81670,-47.10000,key4\r
463,Uvaria_monticola,No_data,2.7080502009999998,4.03300,113.83300,key4\r
472,Cordylanthus_maritimus,Not_threatened,0.63907995900000003,32.60000,-117.10000,key4\r
473,Cordylanthus_maritimus,Not_threatened,0.42121346500000001,32.60000,-117.10000,key4\r
474,Ardisia_escallonioides,Not_threatened,-0.42348361400000001,25.67682,-80.26280,key4\r
475,Vochysia_cinnamomea,No_data,0.84729785999999996,-18.93828,-48.26641,key4\r
476,Ranunculus_acris,Not_threatened,0.16118724500000001,60.60000,7.50000,key4\r
477,Ranunculus_acris,Not_threatened,0.23377387199999999,60.60000,7.50000,key4\r
478,Ranunculus_acris,Not_threatened,-6.7658648000000002E-2,60.60000,7.50000,key4\r
479,Quercus_ilex,Not_threatened,0.15273652500000001,36.45000,2.87000,key4\r
480,Iris_versicolor,Not_threatened,-0.23704999800000001,44.58300,-66.76700,key4\r
481,Iris_versicolor,Not_threatened,2.8288559999999998E-3,44.58300,-66.76700,key4\r
482,Iris_versicolor,Not_threatened,-0.29431402499999998,44.58300,-66.76700,key4\r
483,Erythroxylum_campestre,No_data,-0.26236426400000001,-15.91667,-47.93194,key4\r
484,Erythroxylum_campestre,No_data,-2.8987537000000001E-2,-15.91667,-47.93194,key4\r
485,Erythroxylum_suberosum,Not_threatened,-0.143100844,-15.91667,-47.93194,key4\r
486,Erythroxylum_suberosum,Not_threatened,-0.16705408499999999,-15.91667,-47.93194,key4\r
487,Erythroxylum_tortuosum,Not_threatened,-0.94446160899999998,-15.91667,-47.93194,key4\r
488,Erythroxylum_tortuosum,Not_threatened,-0.45675840200000001,-15.91667,-47.93194,key4\r
489,Silene_dioica,Not_threatened,0.26876338799999999,63.76700,20.53300,key4\r
490,Silene_dioica,Not_threatened,-0.12441740499999999,63.76700,20.53300,key4\r
491,Silene_dioica,Not_threatened,0.12728711700000001,63.76700,20.53300,key4\r
492,Silene_dioica,Not_threatened,4.4731976999999999E-2,63.76700,20.53300,key4\r
493,Silene_dioica,Not_threatened,0.42851292400000002,63.76700,20.53300,key4\r
494,Silene_dioica,Not_threatened,-0.37820727700000001,63.76700,20.53300,key4\r
495,Silene_dioica,Not_threatened,-0.40546510800000002,63.76700,20.53300,key4\r
496,Silene_dioica,Not_threatened,0.14171477900000001,63.76700,20.53300,key4\r
497,Silene_dioica,Not_threatened,0.38677297500000002,63.76700,20.53300,key4\r
498,Silene_dioica,Not_threatened,-0.228567137,63.76700,20.53300,key4\r
499,Silene_dioica,Not_threatened,-0.35156525100000002,63.76700,20.53300,key4\r
500,Silene_dioica,Not_threatened,-0.197768472,63.76700,20.53300,key4\r
501,Silene_dioica,Not_threatened,-0.21505078399999999,63.76700,20.53300,key4\r
502,Silene_dioica,Not_threatened,0.100955875,63.76700,20.53300,key4\r
503,Silene_dioica,Not_threatened,-0.238283886,63.76700,20.53300,key4\r
504,Silene_dioica,Not_threatened,0.13664332100000001,63.76700,20.53300,key4\r
505,Silene_dioica,Not_threatened,0.90497305100000003,63.76700,20.53300,key4\r
506,Silene_dioica,Not_threatened,0.28596667199999998,63.76700,20.53300,key4\r
507,Silene_dioica,Not_threatened,0.31899945699999999,63.76700,20.53300,key4\r
508,Silene_dioica,Not_threatened,0.16777562300000001,63.76700,20.53300,key4\r
509,Aquilegia_canadensis,Not_threatened,0.32354798600000001,44.58300,-76.36700,key4\r
510,Lophocereus_schottii,Threatened,-8.5837440000000008E-3,28.83540,-111.94114,key4\r
511,Passiflora_mooreana,No_data,8.1678030999999998E-2,-27.21799,-61.18736,species\r
512,Pentacme_siamensis,No_data,1.3682758559999999,15.60000,99.33300,key4\r
513,Pentacme_siamensis,No_data,1.242357047,15.60000,99.33300,key4\r
514,Begonia_tonduzii,No_data,0.24378081900000001,8.78333,-82.95000,key4\r
515,Begonia_tonduzii,No_data,1.6845906349999999,8.78333,-82.95000,key4\r
516,Begonia_urophylla,No_data,7.7993226999999998E-2,8.83333,-82.83333,key4\r
517,Begonia_urophylla,No_data,0.13064954600000001,8.83333,-82.83333,key4\r
518,Kalmia_latifolia,Not_threatened,-7.3993680000000006E-2,37.36667,-88.51667,key4\r
519,Kalmia_latifolia,Not_threatened,0.109398594,37.36667,-88.51667,key4\r
520,Clusia_nemorosa,Not_threatened,3.6950418999999998E-2,-8.12500,-32.87500,key4\r
521,Clusia_nemorosa,Not_threatened,0.93295117400000005,-8.40000,-32.06250,key4\r
522,Chelonanthus_alatus,No_data,6.2520356999999999E-2,-8.01667,-34.93333,key4\r
523,Oxalis_squamata,No_data,-0.27573600100000001,-32.33333,-70.31667,key4\r
524,Oxalis_squamata,No_data,0.44997034800000002,-32.33333,-70.31667,key4\r
525,Oxalis_squamata,No_data,0.74329101799999997,-32.33333,-70.31667,key4\r
526,Andropogon_gerardii,Not_threatened,8.3381608999999995E-2,44.47083,-93.14722,key4\r
527,Sorghastrum_nutans,Not_threatened,4.6520015999999997E-2,44.47083,-93.14722,key4\r
528,Miconia_ciliata,Not_threatened,-0.23638877799999999,-8.06250,-34.87500,key4\r
529,Polygonum_japonicum,No_data,0.73797859399999999,36.00000,140.00000,key4\r
530,Polygonum_japonicum,No_data,0.83129751900000004,36.00000,140.00000,key4\r
531,Polygonum_japonicum,No_data,1.5285858160000001,36.00000,140.00000,key4\r
532,Polygonum_japonicum,No_data,1.5575103020000001,36.00000,140.00000,key4\r
533,Cypripedium_acaule,Not_threatened,2.9187712320000001,44.69116,-63.67079,key4\r
534,Ipomoea_wolcottiana,Not_threatened,0.86499743699999998,19.50000,-105.05000,key4\r
535,Ipomoea_wolcottiana,Not_threatened,1.386294361,19.50000,-105.05000,key4\r
536,Echeveria_gibbiflora,No_data,0.24126888899999999,19.34250,-99.14056,key4\r
537,Jacaratia_spinosa,Not_threatened,-0.916290732,-20.54000,-47.05000,key4\r
538,Cypripedium_acaule,Not_threatened,2.8924659990000001,42.35686,-71.29880,key4\r
539,Cypripedium_acaule,Not_threatened,3.4401127979999999,42.35686,-71.29880,key4\r
540,Cypripedium_acaule,Not_threatened,2.7647455449999998,42.35686,-71.29880,key4\r
541,Cypripedium_acaule,Not_threatened,0.87546873700000005,42.35686,-71.29880,key4\r
542,Cypripedium_acaule,Not_threatened,4.1356997480000004,42.35686,-71.29880,key4\r
543,Cypripedium_acaule,Not_threatened,3.4069280559999999,42.35686,-71.29880,key4\r
544,Cypripedium_acaule,Not_threatened,2.7578530240000001,42.35686,-71.29880,key4\r
545,Cypripedium_acaule,Not_threatened,2.7181683310000002,42.35686,-71.29880,key4\r
546,Cypripedium_acaule,Not_threatened,3.0285220960000001,42.32410,-71.17713,key4\r
547,Cypripedium_acaule,Not_threatened,2.1800714980000002,42.32410,-71.17713,key4\r
548,Cypripedium_acaule,Not_threatened,2.655864448,42.32410,-71.17713,key4\r
549,Cypripedium_acaule,Not_threatened,3.7401727490000001,42.32410,-71.17713,key4\r
550,Cypripedium_acaule,Not_threatened,2.813410717,42.32410,-71.17713,key4\r
551,Cypripedium_acaule,Not_threatened,4.2495935400000002,42.32410,-71.17713,key4\r
552,Cypripedium_acaule,Not_threatened,3.9926809080000001,42.32410,-71.17713,key4\r
553,Cypripedium_acaule,Not_threatened,3.3787245260000001,42.32410,-71.17713,key4\r
554,Cypripedium_acaule,Not_threatened,1.123630052,42.32410,-71.17713,key4\r
555,Cypripedium_acaule,Not_threatened,3.3832596810000002,42.32410,-71.17713,key4\r
556,Cypripedium_acaule,Not_threatened,1.9178341889999999,42.32410,-71.17713,key4\r
557,Cypripedium_acaule,Not_threatened,2.3454723689999999,42.25611,-71.34040,key4\r
558,Cypripedium_acaule,Not_threatened,2.7668907009999999,42.25611,-71.34040,key4\r
559,Cypripedium_acaule,Not_threatened,2.2123868249999998,42.25611,-71.34040,key4\r
560,Vismia_guianensis,Not_threatened,1.0388930540000001,-8.12500,-34.88111,key4\r
561,Vismia_guianensis,Not_threatened,1.174119841,-8.12500,-34.88111,key4\r
562,Styrax_obassis,Not_threatened,-0.115458612,43.00000,141.40667,key4\r
563,Styrax_obassis,Not_threatened,-7.5120629999999994E-2,43.00000,141.40667,key4\r
564,Styrax_obassis,Not_threatened,0.223143551,43.00000,141.40667,key4\r
569,Hortia_brasiliana,Not_threatened,0.24362208299999999,-18.91667,-48.28806,key4\r
570,Silene_douglasii,Not_threatened,1.192641238,45.05667,-124.00472,key4\r
571,Silene_douglasii,Not_threatened,0.76775804400000003,45.05667,-124.00472,key4\r
572,Silene_douglasii,Not_threatened,1.192641238,45.05667,-124.00472,key4\r
573,Banksia_aemula,Not_threatened,0.16960278400000001,-28.67024,153.58754,key4\r
574,Banksia_aemula,Not_threatened,0.229413164,-28.67024,153.58754,key4\r
575,Satyrium_bicorne,Not_threatened,0.16605458400000001,-33.46667,19.20000,key4\r
576,Satyrium_coriifolium,Not_threatened,0.87227384600000002,-33.46667,19.20000,key4\r
577,Satyrium_erectum,Not_threatened,0.38272562100000002,-33.46667,19.20000,key4\r
578,Linanthus_parviflorus,No_data,0.31056085500000002,38.08333,-122.26667,key4\r
579,Linanthus_parviflorus,No_data,0.21252268599999999,38.08333,-122.26667,key4\r
580,Sidalcea_malviflora,Not_threatened,0.55431073600000003,37.25000,-122.45000,key4\r
581,Sidalcea_malviflora,Not_threatened,0.26469255400000002,37.25000,-122.45000,key4\r
582,Sidalcea_malviflora,Not_threatened,1.386294361,37.25000,-122.45000,key4\r
583,Sidalcea_malviflora,Not_threatened,0.73396917500000003,37.25000,-122.45000,key4\r
584,Orchis_mascula,Not_threatened,2.2951501150000002,56.73330,16.66670,key4\r
585,Trillium_grandiflorum,Not_threatened,8.6473597999999999E-2,42.38333,-85.36667,key4\r
586,Silene_douglasii_var._oraria,Threatened,0.71433177299999995,45.05000,-123.93333,key4\r
587,Peritoma_arborea,No_data,0.11778303599999999,33.66667,-117.86667,key4\r
588,Peritoma_arborea,No_data,1.9418086000000001E-2,33.66667,-117.86667,key4\r
589,Peritoma_arborea,No_data,4.3485111999999999E-2,33.66667,-117.86667,key4\r
590,Peritoma_arborea,No_data,-0.120144312,33.66667,-117.86667,key4\r
591,Rhexia_virginica,Not_threatened,0.63671922700000005,44.78333,-79.50000,key4\r
592,Rhexia_virginica,Not_threatened,0.265982359,44.78333,-79.50000,key4\r
593,Rhexia_virginica,Not_threatened,0.71096141700000004,44.78333,-79.50000,key4\r
594,Rhexia_virginica,Not_threatened,6.5319466000000007E-2,44.78333,-79.50000,key4\r
595,Rhexia_virginica,Not_threatened,0,45.21667,-79.80000,key4\r
596,Rhexia_virginica,Not_threatened,7.6197513999999994E-2,44.88333,-79.26667,key4\r
597,Rhexia_virginica,Not_threatened,0.60170120699999996,45.03333,-78.91667,key4\r
598,Rhexia_virginica,Not_threatened,0.31608154700000002,44.78333,-79.50000,key4\r
599,Rhexia_virginica,Not_threatened,0.43604853100000002,44.78333,-79.50000,key4\r
600,Rhexia_virginica,Not_threatened,0.75855710300000001,44.78333,-79.50000,key4\r
601,Rhexia_virginica,Not_threatened,0.27121558299999998,44.78333,-79.50000,key4\r
602,Rhexia_virginica,Not_threatened,1.166833257,44.78333,-79.50000,key4\r
603,Rhexia_virginica,Not_threatened,2.501220225,44.78333,-79.50000,key4\r
604,Rhexia_virginica,Not_threatened,1.2230664630000001,44.78333,-79.50000,key4\r
605,Rhexia_virginica,Not_threatened,0.40047756699999998,44.78333,-79.50000,key4\r
606,Rhexia_virginica,Not_threatened,0.30110509299999999,44.78333,-79.50000,key4\r
607,Rhexia_virginica,Not_threatened,7.2955233999999994E-2,44.78333,-79.50000,key4\r
608,Rhexia_virginica,Not_threatened,0.126342289,44.78333,-79.50000,key4\r
609,Rhexia_virginica,Not_threatened,1.1540680000000001E-3,44.78333,-79.50000,key4\r
610,Rhexia_virginica,Not_threatened,0.29017273399999999,44.78333,-79.50000,key4\r
611,Rhexia_virginica,Not_threatened,1.0392728490000001,44.78333,-79.50000,key4\r
612,Rauvolfia_grandiflora,Not_threatened,0.21597506299999999,-8.12500,-34.87500,key4\r
613,Anthyllis_vulneraria,Not_threatened,1.5060525999999999E-2,42.46083,-6.66611,key4\r
614,Anthyllis_vulneraria,Not_threatened,0.129349672,42.46083,-6.66611,key4\r
615,Scilla_hyacinthoides,No_data,3.1748697999999999E-2,31.03333,34.85000,key4\r
616,Drimia_maritima,Not_threatened,0.11778303599999999,31.03333,34.85000,key4\r
617,Peraxilla_colensoi,Threatened,0.174099476,-41.38333,173.03333,key4\r
618,Peraxilla_colensoi,Threatened,-0.101108542,-41.38333,173.03333,key4\r
619,Peraxilla_colensoi,Threatened,0.454822642,-41.38333,173.03333,key4\r
620,Peraxilla_tetrapetala,Threatened,0.35013010500000002,-43.15000,171.71667,key4\r
621,Peraxilla_tetrapetala,Threatened,1.7328490640000001,-43.15000,171.71667,key4\r
622,Peraxilla_tetrapetala,Threatened,0.84488754099999996,-43.15000,171.71667,key4\r
623,Peraxilla_tetrapetala,Threatened,0.61430168500000004,-43.15000,171.71667,key4\r
624,Peraxilla_tetrapetala,Threatened,1.788563849,-43.15000,171.71667,key4\r
625,Peraxilla_tetrapetala,Threatened,1.634130525,-44.22825,169.81364,key4\r
626,Cytisus_striatus,Not_threatened,0.33326881699999999,39.21667,-7.00000,key4\r
627,Cytisus_striatus,Not_threatened,0.56104811099999996,39.21667,-7.00000,key4\r
628,Retama_sphaerocarpa,Not_threatened,2.9270382000000001E-2,39.21667,-7.00000,key4\r
629,Retama_sphaerocarpa,Not_threatened,9.852296E-3,39.21667,-7.00000,key4\r
630,Saxifraga_stellaris,Not_threatened,-2.0510146999999999E-2,60.60000,7.50000,key4\r
631,Erica_multiflora,Threatened,1.791759469,41.61667,2.01667,key4\r
632,Erica_multiflora,Threatened,0.24116205700000001,41.61667,2.01667,key4\r
633,Erica_multiflora,Threatened,0.31845373100000002,41.61667,2.01667,key4\r
634,Solanum_carolinense,Not_threatened,1.039729524,37.40846,-80.49450,key4\r
635,Solanum_carolinense,Not_threatened,0.37053998399999999,37.40846,-80.49450,key4\r
636,Clematis_socialis,Threatened,0.15180601299999999,33.65000,-86.33333,key4\r
637,Mandevilla_pentlandiana,No_data,-0.178169413,-31.40000,-64.16667,key4\r
638,Ranunculus_acris,Not_threatened,0.21913553,60.60000,7.50000,key4\r
639,Ranunculus_acris,Not_threatened,0.133531393,60.60000,7.50000,key4\r
640,Ranunculus_acris,Not_threatened,0.32817343399999999,60.60000,7.50000,key4\r
641,Ranunculus_acris,Not_threatened,0.34043263800000001,60.60000,7.50000,key4\r
642,Persoonia_rigida,Threatened,-0.160600715,-37.16667,144.25000,key4\r
643,Oxypetalum_appendiculatum,No_data,0.26510774999999998,-20.75000,-42.85000,species\r
644,Oxypetalum_banksii,No_data,4.0426013239999996,-20.75000,-42.85000,species\r
645,Helianthus_exilis,Threatened,9.2550047999999996E-2,38.87388,-122.42165,key4\r
646,Helianthus_exilis,Threatened,9.1679996999999999E-2,38.87388,-122.42165,key4\r
647,Pinguicula_vallisneriifolia,Not_threatened,0.445689909,40.18333,-2.38333,key4\r
648,Pinguicula_vallisneriifolia,Not_threatened,0.71100875200000002,40.18333,-2.38333,key4\r
649,Pinguicula_vallisneriifolia,Not_threatened,0.64895580100000005,40.18333,-2.38333,key4\r
650,Ceratonia_siliqua,Not_threatened,0.54234150000000003,36.70499,-5.35209,key4\r
651,Narcissus_assoanus,Not_threatened,1.3158085E-2,43.93333,3.88333,key4\r
652,Narcissus_assoanus,Not_threatened,0.68504997000000001,43.93333,3.88333,key4\r
653,Narcissus_assoanus,Not_threatened,0.26190354100000002,43.93333,3.88333,key4\r
654,Narcissus_assoanus,Not_threatened,0.16551443800000001,43.81528,3.85833,key4\r
655,Narcissus_assoanus,Not_threatened,0.36489792300000001,43.81528,3.85833,key4\r
656,Narcissus_assoanus,Not_threatened,0.240636709,43.81528,3.85833,key4\r
657,Narcissus_assoanus,Not_threatened,0.122014951,43.81250,3.98056,key4\r
658,Narcissus_assoanus,Not_threatened,0.38473897800000001,43.81250,3.98056,key4\r
659,Narcissus_assoanus,Not_threatened,-0.11568439899999999,43.92917,3.50556,key4\r
660,Narcissus_assoanus,Not_threatened,0.210823067,43.92917,3.50556,key4\r
661,Narcissus_assoanus,Not_threatened,0.18492233799999999,43.77222,3.95833,key4\r
662,Narcissus_assoanus,Not_threatened,0.114192368,43.77222,3.95833,key4\r
663,Narcissus_assoanus,Not_threatened,-4.5809535999999998E-2,43.77222,3.95833,key4\r
664,Eremophila_glabra,No_data,0.92856218099999999,-31.74574,149.28800,key4\r
665,Maianthemum_canadense,Not_threatened,0.42488319400000002,43.13602,-70.94106,key4\r
666,Maianthemum_canadense,Not_threatened,0.57536414499999999,43.13602,-70.94106,key4\r
667,Trillium_erectum,Not_threatened,0.99212880800000003,44.53333,-73.08333,key4\r
668,Trillium_erectum,Not_threatened,0.89099960499999997,44.53333,-73.08333,key4\r
669,Trillium_grandiflorum,Not_threatened,0.76925068100000005,44.53333,-73.08333,key4\r
670,Trillium_grandiflorum,Not_threatened,0.40888391499999999,44.53333,-73.08333,key4\r
671,Diplusodon_hirsutus,No_data,-0.23563661599999999,-19.28333,-43.58333,key4\r
672,Diplusodon_orbicularis,Threatened,0.211309094,-19.28333,-43.58333,key4\r
673,Disa_pulchra,Not_threatened,1.42838943,-29.31667,30.28333,key4\r
674,Pedicularis_palustris,Not_threatened,0.181680326,54.30000,9.45000,key4\r
675,Pedicularis_palustris,Not_threatened,0.28164537000000001,54.20000,10.33333,key4\r
676,Cordia_multispicata,No_data,9.5669438999999995E-2,-8.12500,-34.87500,key4\r
677,Ruscus_aculeatus,Not_threatened,3.2834143459999998,40.81178,14.34394,key4\r
678,Primula_sieboldii,Threatened,0.61656140400000004,44.25000,143.51667,key4\r
679,Primula_sieboldii,Threatened,4.3887348529999999,44.25000,143.51667,key4\r
680,Dactylorhiza_incarnata,No_data,0.17116292399999999,61.19506,22.41446,key4\r
681,Dactylorhiza_incarnata,No_data,0.18363821299999999,61.19506,22.41446,key4\r
682,Dactylorhiza_incarnata,No_data,0.39308453399999999,61.19506,22.41446,key4\r
683,Dactylorhiza_incarnata,No_data,0.40719671000000002,61.19506,22.41446,key4\r
684,Platanthera_bifolia,Not_threatened,0.28733088699999998,61.19506,22.41446,key4\r
685,Platanthera_bifolia,Not_threatened,0.118873294,61.19506,22.41446,key4\r
686,Platanthera_bifolia,Not_threatened,5.0246047000000002E-2,61.19506,22.41446,key4\r
687,Platanthera_bifolia,Not_threatened,-1.8445845999999998E-2,61.19506,22.41446,key4\r
688,Pancratium_maritimum,Not_threatened,-0.18687737300000001,42.56667,-9.01667,key4\r
689,Pancratium_maritimum,Not_threatened,0.60364203699999996,42.56667,-9.01667,key4\r
690,Pancratium_maritimum,Not_threatened,0.10096841400000001,42.56667,-9.01667,key4\r
691,Pancratium_maritimum,Not_threatened,0.99039870399999996,42.56667,-9.01667,key4\r
692,Pancratium_maritimum,Not_threatened,0.20945809800000001,42.56667,-9.01667,key4\r
693,Pancratium_maritimum,Not_threatened,-0.17144005700000001,42.56667,-9.01667,key4\r
694,Pancratium_maritimum,Not_threatened,0.75377180200000005,42.56667,-9.01667,key4\r
695,Pancratium_maritimum,Not_threatened,-0.57536414499999999,42.56667,-9.01667,key4\r
696,Pancratium_maritimum,Not_threatened,-0.28768207200000001,42.56667,-9.01667,key4\r
697,Pancratium_maritimum,Not_threatened,0.32277339199999999,42.56667,-9.01667,key4\r
698,Pancratium_maritimum,Not_threatened,0.26426179799999999,42.56667,-9.01667,key4\r
699,Pancratium_maritimum,Not_threatened,0.26729788100000001,42.56667,-9.01667,key4\r
700,Pancratium_maritimum,Not_threatened,0.61090908200000005,42.56667,-9.01667,key4\r
701,Pancratium_maritimum,Not_threatened,0.57783633400000001,42.56667,-9.01667,key4\r
702,Pancratium_maritimum,Not_threatened,0.64509401,42.56667,-9.01667,key4\r
703,Pancratium_maritimum,Not_threatened,-0.23052365899999999,42.56667,-9.01667,key4\r
704,Pancratium_maritimum,Not_threatened,1.1394342829999999,42.56667,-9.01667,key4\r
705,Pancratium_maritimum,Not_threatened,0.72317946799999999,42.56667,-9.01667,key4\r
706,Comparettia_falcata,Not_threatened,-0.223143551,18.15000,-66.53333,key4\r
707,Comparettia_falcata,Not_threatened,-0.49322191900000001,18.15000,-66.53333,key4\r
708,Oenothera_macrocarpa,Not_threatened,0.43940438799999998,38.48195,-90.82406,key4\r
709,Oenothera_macrocarpa,Not_threatened,0.65750548900000005,38.48195,-90.82406,key4\r
710,Metrodorea_nigra,Not_threatened,1.4832866330000001,-22.60000,-47.28333,key4\r
711,Metrodorea_stipularis,Not_threatened,0.80296204599999998,-22.60000,-47.28333,key4\r
712,Burchardia_umbellata,No_data,0.30774963599999999,-37.05000,146.08333,key4\r
713,Burchardia_umbellata,No_data,-9.0498360000000003E-3,-37.05000,146.08333,key4\r
714,Burchardia_umbellata,No_data,0.79403617500000001,-37.05000,146.08333,key4\r
715,Burchardia_umbellata,No_data,0.41261894500000001,-37.05000,146.08333,key4\r
716,Salix_miyabeana,Not_threatened,0.33910728400000001,43.18333,141.40000,key4\r
717,Salix_miyabeana,Not_threatened,0.221467105,43.18333,141.40000,key4\r
718,Salix_miyabeana,Not_threatened,0.13710921400000001,43.18333,141.40000,key4\r
719,Salix_udensis,No_data,0.62071734300000003,43.18333,141.40000,key4\r
720,Byrsonima_sericea,Not_threatened,1.4852356120000001,-8.12500,-34.87500,key4\r
721,Cucurbita_foetidissima,Not_threatened,-0.21938118300000001,33.70000,-105.56667,key4\r
722,Cucurbita_foetidissima,Not_threatened,-0.12467688,33.70000,-105.56667,key4\r
723,Cucurbita_foetidissima,Not_threatened,-2.5118287E-2,33.70000,-105.56667,key4\r
724,Durio_grandiflorus,Threatened,7.7961540999999995E-2,4.33333,113.83333,key4\r
725,Durio_kutejensis,Threatened,5.0010420999999999E-2,4.33333,113.83333,key4\r
726,Aucuba_japonica,Not_threatened,3.2435275999999999E-2,36.16667,140.16667,key4\r
727,Aucuba_japonica,Not_threatened,8.5433555999999994E-2,36.16667,140.16667,key4\r
728,Lycium_cestroides,Threatened,0.61730910400000005,-31.43547,-64.20089,key4\r
729,Alstroemeria_aurea,No_data,0.112267302,-41.13333,-71.31667,key4\r
730,Alstroemeria_aurea,No_data,0.102654154,-41.13333,-71.31667,key4\r
731,Erodium_glandulosum_subsp._paularense,No_data,1.3793322E-2,41.08335,-2.24278,key4\r
732,Echinopsis_atacamensis,Threatened,0.44348881899999998,-25.11000,-65.68000,key4\r
733,Echinopsis_atacamensis,Threatened,0.651630284,-25.11000,-65.68000,key4\r
734,Handroanthus_ochraceus,No_data,-0.20763936499999999,-15.00000,-47.55000,key4\r
735,Tabebuia_aurea,No_data,-0.87546873700000005,-15.00000,-47.55000,key4\r
737,Carnegiea_gigantea,Not_threatened,0.223143551,28.82277,-111.93632,key4\r
738,Carnegiea_gigantea,Not_threatened,0.30187759199999997,32.08776,-112.90588,key4\r
739,Lophocereus_schottii,Threatened,-8.5837440000000008E-3,28.82277,-111.93632,key4\r
740,Lophocereus_schottii,Threatened,0.43739815500000001,32.08776,-112.90588,key4\r
741,Pachycereus_pringlei,Not_threatened,0.73511137999999998,28.82277,-111.93632,key4\r
742,Pachycereus_pringlei,Not_threatened,-0.18805223200000001,28.82277,-111.93632,key4\r
743,Stenocereus_thurberi,Not_threatened,1.15267951,28.82277,-111.93632,key4\r
744,Stenocereus_thurberi,Not_threatened,0.62274353999999998,32.08776,-112.90588,key4\r
745,Stenocereus_thurberi,Not_threatened,0.83641100999999995,28.82277,-111.93632,key4\r
746,Croton_sarcopetalus,No_data,6.1557893000000002E-2,-31.33333,-64.25000,key4\r
747,Cabralea_canjerana,Not_threatened,0.102638915,-18.55230,-48.17190,key4\r
748,Anagallis_monelli,No_data,-0.20679441300000001,37.28963,-6.38245,key4\r
749,Leandra_regnellii,No_data,0.220542769,-23.22306,-46.89500,key4\r
750,Leandra_variabilis,Not_threatened,0.18805223200000001,-23.22306,-46.89500,key4\r
751,Miconia_latecrenata,Not_threatened,-0.19039076499999999,-23.22306,-46.89500,key4\r
752,Miconia_pusilliflora,No_data,0.29287860300000002,-23.22306,-46.89500,key4\r
753,Tibouchina_cerastifolia,No_data,-4.7296715000000003E-2,-23.22306,-46.89500,key4\r
754,Tibouchina_sellowiana,Not_threatened,4.5120436E-2,-23.22306,-46.89500,key4\r
755,Tibouchina_semidecandra,No_data,6.8992871999999997E-2,-23.22306,-46.89500,key4\r
756,Linanthus_bicolor,Not_threatened,8.594243E-2,38.56667,-122.30000,key4\r
757,Linanthus_bicolor,Not_threatened,7.5711821999999998E-2,38.56667,-122.30000,key4\r
758,Linanthus_bicolor,Not_threatened,3.9609138000000002E-2,36.96943,-121.55684,key4\r
759,Linanthus_bicolor,Not_threatened,2.1978906999999999E-2,36.96943,-121.55684,key4\r
760,Linanthus_bicolor,Not_threatened,-7.034027E-3,38.61667,-122.33333,key4\r
761,Linanthus_bicolor,Not_threatened,0,38.61667,-122.33333,key4\r
762,Leptosiphon_jepsonii,No_data,8.1411580000000008E-3,38.08333,-122.26667,key4\r
763,Leptosiphon_jepsonii,No_data,4.7252885000000001E-2,38.08333,-122.26667,key4\r
764,Leptosiphon_jepsonii,No_data,0.29783444399999998,36.96943,-121.55684,key4\r
765,Leptosiphon_jepsonii,No_data,0.175890666,36.96943,-121.55684,key4\r
766,Leptosiphon_jepsonii,No_data,1.4388737E-2,38.08333,-122.26667,key4\r
767,Leptosiphon_jepsonii,No_data,6.3513405999999994E-2,38.08333,-122.26667,key4\r
768,Linanthus_parviflorus,No_data,0.387765531,38.08333,-122.26667,key4\r
769,Linanthus_parviflorus,No_data,0.26415157500000003,38.08333,-122.26667,key4\r
770,Linanthus_parviflorus,No_data,0.1198012,36.96943,-121.55684,key4\r
771,Linanthus_parviflorus,No_data,0.109199292,36.96943,-121.55684,key4\r
772,Linanthus_parviflorus,No_data,0.25593337399999999,38.08333,-122.26667,key4\r
773,Linanthus_parviflorus,No_data,0.15684247100000001,38.08333,-122.26667,key4\r
774,Merostachys_riedeliana,No_data,-0.91817574700000004,-21.29000,-44.22000,key4\r
775,Helleborus_foetidus,Not_threatened,0.13102826200000001,37.90000,-2.91667,key4\r
776,Helleborus_foetidus,Not_threatened,6.2084531999999998E-2,37.73333,-3.25000,key4\r
777,Helleborus_foetidus,Not_threatened,0.148781828,37.73333,-3.25000,key4\r
778,Helleborus_foetidus,Not_threatened,3.2141208999999997E-2,42.60000,-7.31667,key4\r
779,Corydalis_ambigua,No_data,1.0874389879999999,43.41667,143.53333,key4\r
780,Corydalis_ambigua,No_data,0.58242133699999998,43.41667,143.53333,key4\r
781,Corydalis_ambigua,No_data,0.74193734499999997,43.41667,143.53333,key4\r
782,Alpinia_kwangsiensis,No_data,0.53741507799999999,21.75000,101.03333,key4\r
783,Alpinia_kwangsiensis,No_data,0.242299866,21.75000,101.03333,key4\r
784,Rubus_chamaemorus,Not_threatened,-2.1773799999999999E-2,50.26667,-63.56667,key4\r
785,Rubus_chamaemorus,Not_threatened,6.3478638000000004E-2,50.26667,-63.56667,key4\r
786,Combretum_leprosum,Not_threatened,-0.17185025700000001,-6.43333,-36.66667,key4\r
787,Combretum_monetaria,Threatened,0.69314718099999995,-8.45000,-36.71667,key4\r
788,Calibrachoa_elegans,Threatened,0.31842304900000001,-20.09250,-43.99472,key4\r
789,Ranunculus_acris,Not_threatened,0.26826398699999998,60.61667,7.53333,key4\r
790,Ranunculus_acris,Not_threatened,1.8692133E-2,60.60000,7.55000,key4\r
791,Ranunculus_acris,Not_threatened,0.36366797899999997,60.61667,7.53333,key4\r
792,Ranunculus_acris,Not_threatened,0.165667122,60.60000,7.55000,key4\r
793,Salix_lantana,No_data,0.284512498,60.53333,7.53333,key4\r
794,Salix_lapponum,No_data,-0.28768207200000001,60.53333,7.53333,key4\r
795,Iris_tenax,Not_threatened,0.85143009800000002,45.41589,-123.16412,key4\r
796,Iris_tenax,Not_threatened,1.0430424380000001,45.41589,-123.16412,key4\r
797,Iris_tenax,Not_threatened,-0.128564811,45.52910,-122.34940,key4\r
798,Iris_tenax,Not_threatened,-0.164538661,45.52910,-122.34940,key4\r
799,Calystegia_collina,Not_threatened,0.60174501700000005,38.67615,-122.77030,key4\r
800,Calystegia_collina,Not_threatened,0.64849003000000005,38.67615,-122.77030,key4\r
801,Calystegia_collina,Not_threatened,-1.0093444229999999,38.67615,-122.77030,key4\r
802,Calystegia_collina,Not_threatened,1.174645189,38.67615,-122.77030,key4\r
803,Calystegia_collina,Not_threatened,1.5705408460000001,38.67615,-122.77030,key4\r
804,Calystegia_collina,Not_threatened,-0.48985250000000002,38.67615,-122.77030,key4\r
805,Gladiolus_longicollis,No_data,0.916290732,-29.31667,30.28333,key4\r
806,Kielmeyera_abdita,No_data,0.91779336199999995,-15.00000,-47.93500,key4\r
807,Kielmeyera_coriacea,No_data,0.48036641600000002,-15.00000,-47.93500,key4\r
808,Kielmeyera_speciosa,Not_threatened,0.59019921099999995,-15.00000,-47.93500,key4\r
809,Kielmeyera_variabilis,No_data,0.19611487899999999,-15.00000,-47.93500,key4\r
810,Bulnesia_retamo,No_data,3.593569274,-34.03333,-67.96667,key4\r
811,Ornithogalum_thyrsoides,Not_threatened,0.111163125,-34.47178,19.87661,key4\r
812,Ornithogalum_thyrsoides,Not_threatened,4.0864774E-2,-34.47178,19.87661,key4\r
813,Ornithogalum_thyrsoides,Not_threatened,-2.10305E-3,-34.47178,19.87661,key4\r
814,Gladiolus_liliaceus,Not_threatened,-2.0339684E-2,-34.47178,19.87661,key4\r
815,Gladiolus_liliaceus,Not_threatened,-3.7939217999999997E-2,-34.47178,19.87661,key4\r
816,Pterygodium_catholicum,Not_threatened,1.7729353839999999,-34.47178,19.87661,key4\r
817,Epipactis_helleborine,Not_threatened,0.51082562399999998,60.19523,12.00301,key4\r
818,Epipactis_helleborine,Not_threatened,3.5932009000000001E-2,55.69696,13.19919,key4\r
819,Epipactis_helleborine,Not_threatened,1.0986122890000001,60.49167,18.05000,key4\r
820,Epipactis_helleborine,Not_threatened,0.20294084400000001,60.54465,17.94554,key4\r
821,Epipactis_helleborine,Not_threatened,0.24014112800000001,60.47221,17.98022,key4\r
822,Epipactis_helleborine,Not_threatened,1.1735135969999999,60.33793,18.56410,key4\r
823,Epipactis_helleborine,Not_threatened,1.386294361,56.67128,16.54410,key4\r
824,Epipactis_helleborine,Not_threatened,0.57731536500000002,56.66261,16.63040,key4\r
825,Epipactis_helleborine,Not_threatened,0.472604411,56.61777,16.54882,key4\r
826,Primula_farinosa,Not_threatened,0.123014914,56.58333,16.50000,key4\r
827,Primula_farinosa,Not_threatened,7.956481E-2,56.58333,16.50000,key4\r
828,Primula_farinosa,Not_threatened,0.240835099,56.58333,16.50000,key4\r
829,Primula_farinosa,Not_threatened,0.23539052499999999,56.58333,16.50000,key4\r
830,Geoffroea_decorticans,Not_threatened,1.0076405100000001,-31.23943,-64.52091,key4\r
831,Aristea_torulosa,Not_threatened,1.3007306E-2,-29.20000,30.28333,key4\r
832,Brunsvigia_undulata,Not_threatened,-0.219021453,-29.20000,30.28333,key4\r
833,Brunsvigia_undulata,Not_threatened,-0.174353387,-29.20000,30.28333,key4\r
834,Eriosema_distinctum,Not_threatened,0.31248118699999999,-29.20000,30.28333,key4\r
835,Eriosema_distinctum,Not_threatened,-0.30782663900000001,-29.20000,30.28333,key4\r
836,Gladiolus_longicollis,No_data,0.88729180399999996,-29.20000,30.28333,key4\r
837,Gladiolus_longicollis,No_data,-2.0617126E-2,-29.20000,30.28333,key4\r
838,Gladiolus_longicollis,No_data,0.76547257099999999,-29.20000,30.28333,key4\r
839,Watsonia_lepida,No_data,3.6449323999999998E-2,-29.20000,30.28333,key4\r
840,Dierama_luteoalbidum,Threatened,3.7137573E-2,-29.20000,30.28333,key4\r
841,Dierama_dracomontanum,Not_threatened,0.13371293000000001,-29.20000,30.28333,key4\r
842,Tritonia_disticha,No_data,2.7080502009999998,-29.20000,30.28333,key4\r
843,Tritonia_disticha,No_data,0.81097257599999995,-29.20000,30.28333,key4\r
844,Tritonia_disticha,No_data,0.20274788499999999,-29.20000,30.28333,key4\r
845,Chironia_krebsii,Not_threatened,3.2157112000000002E-2,-29.20000,30.28333,key4\r
846,Chironia_krebsii,Not_threatened,-4.4212052000000002E-2,-29.20000,30.28333,key4\r
847,Copaifera_langsdorffii,Not_threatened,1.0986122890000001,-18.98333,-48.30000,key4\r
848,Ipomoea_purpurea,No_data,-0.143100844,-31.91667,-64.55889,key4\r
849,Ipomoea_purpurea,No_data,-5.0010420999999999E-2,-31.71667,-64.44056,key4\r
850,Primula_veris,Not_threatened,3.3094349999999999E-3,59.71069,14.41392,key4\r
851,Primula_veris,Not_threatened,0.10743154000000001,59.71069,14.41392,key4\r
852,Euphrasia_willkommii,Threatened,6.8099859999999996E-3,37.04162,-3.13782,key4\r
853,Pseudobombax_munguba,Not_threatened,0.26257615099999998,-13.13333,-60.13333,key4\r
854,Trillium_grandiflorum,Not_threatened,0.295294942,44.02973,-79.52715,key4\r
855,Trillium_grandiflorum,Not_threatened,9.6251798999999999E-2,44.02973,-79.52715,key4\r
856,Lophocereus_schottii,Threatened,0.105024889,28.82275,-111.93630,key4\r
857,Lophocereus_schottii,Threatened,4.7628048999999999E-2,28.82275,-111.93630,key4\r
858,Lophocereus_schottii,Threatened,0.31357519700000003,28.82275,-111.93630,key4\r
859,Lophocereus_schottii,Threatened,0.43208754799999999,28.82275,-111.93630,key4\r
860,Lophocereus_schottii,Threatened,-0.17824823100000001,28.82275,-111.93630,key4\r
861,Lophocereus_schottii,Threatened,0.44468582099999998,32.08776,-112.90588,key4\r
862,Lophocereus_schottii,Threatened,-0.22825865200000001,28.82275,-111.93630,key4\r
863,Lophocereus_schottii,Threatened,-8.1678030999999998E-2,28.82275,-111.93630,key4\r
864,Lophocereus_schottii,Threatened,0.182321557,28.82275,-111.93630,key4\r
865,Phragmites_australis,Not_threatened,0.681586358,34.72128,135.49805,key4\r
866,Phragmites_australis,Not_threatened,2.2728366179999999,34.78321,135.59088,key4\r
868,Cypripedium_fasciculatum,Threatened,0.42034803900000001,45.67950,-115.63779,key4\r
869,Cypripedium_fasciculatum,Threatened,1.515673499,39.63926,-106.08143,key4\r
870,Ensete_lasiocarpum,No_data,0.13436327000000001,25.00000,102.36667,key4\r
871,Ensete_lasiocarpum,No_data,0.124223028,25.00000,102.36667,key4\r
872,Agalinis_acuta,Threatened,-2.710193E-2,41.60000,-70.70000,key4\r
877,Cochlearia_bavarica,Threatened,-0.29684000999999999,48.05596,11.57444,key4\r
878,Wurmbea_biglandulosa,Not_threatened,0.31605276999999998,-36.37905,148.17876,key4\r
879,Wurmbea_biglandulosa,Not_threatened,0.60131284699999998,-36.37905,148.17876,key4\r
880,Ruellia_brevifolia,No_data,0.476295156,-22.78333,-49.11667,key4\r
881,Solanum_carolinense,Not_threatened,-0.38299225199999998,39.06397,-78.06520,key4\r
882,Arum_italicum,Not_threatened,0,43.56054,1.46869,key4\r
883,Hamamelis_virginiana,Not_threatened,0.65945333500000003,41.78849,-72.22929,key4\r
884,Hamamelis_virginiana,Not_threatened,1.0832036629999999,41.78849,-72.22929,key4\r
885,Roridula_dentata,Not_threatened,0.113105595,-33.22572,21.85614,key4\r
886,Roridula_gorgonias,Not_threatened,4.8513239999999997E-3,-33.22572,21.85614,key4\r
887,Senna_silvestris,Not_threatened,2.841581594,-19.17083,-48.38972,key4\r
888,Palicourea_macrobotrys,No_data,-9.7599839999999993E-3,-19.18611,-48.40667,key4\r
889,Swertia_przewalskii,Not_threatened,-0.237328186,37.61667,101.30500,key4\r
890,Eryngium_cuneifolium,Threatened,-0.16251892900000001,27.18286,-81.35209,key4\r
891,Liatris_ohlingerae,Threatened,0.483174092,27.18286,-81.35209,key4\r
892,Hypericum_cumulicola,Threatened,4.4451762999999998E-2,27.18286,-81.35209,key4\r
893,Argyroxiphium_sandwicense,Threatened,-3.9793716999999999E-2,20.73333,-156.22028,key4\r
894,Argyroxiphium_sandwicense,Threatened,2.2968544180000001,20.73333,-156.22028,key4\r
895,Argyroxiphium_sandwicense,Threatened,1.1609745300000001,20.73333,-156.22028,key4\r
896,Collinsia_verna,Not_threatened,-2.1053408999999999E-2,40.04056,-79.77944,key4\r
897,Collinsia_verna,Not_threatened,-0.25170696999999997,40.04056,-79.77944,key4\r
898,Collinsia_verna,Not_threatened,-0.431782416,40.04056,-79.77944,key4\r
899,Collinsia_verna,Not_threatened,3.2435275999999999E-2,40.04056,-79.77944,key4\r
900,Collinsia_verna,Not_threatened,0.14002541199999999,40.04056,-79.77944,key4\r
901,Collinsia_verna,Not_threatened,0.145347806,40.04056,-79.77944,key4\r
902,Collinsia_verna,Not_threatened,2.9029615000000002E-2,41.59222,-80.35583,key4\r
903,Collinsia_verna,Not_threatened,-2.4097552000000001E-2,41.59222,-80.35583,key4\r
904,Collinsia_verna,Not_threatened,3.1252544E-2,41.59222,-80.35583,key4\r
905,Collinsia_verna,Not_threatened,2.4692612999999999E-2,41.59222,-80.35583,key4\r
906,Collinsia_verna,Not_threatened,0.14907452700000001,41.59222,-80.35583,key4\r
907,Collinsia_verna,Not_threatened,-3.2523191999999999E-2,41.59222,-80.35583,key4\r
908,Collinsia_verna,Not_threatened,-0.27612124999999998,40.04056,-80.23722,key4\r
909,Collinsia_verna,Not_threatened,1.6807117999999999E-2,40.04056,-80.23722,key4\r
910,Collinsia_verna,Not_threatened,-0.28768207200000001,40.04056,-80.23722,key4\r
911,Collinsia_verna,Not_threatened,0.56871710200000003,40.04056,-80.23722,key4\r
912,Collinsia_verna,Not_threatened,-0.15914098700000001,40.04056,-80.23722,key4\r
913,Collinsia_verna,Not_threatened,-0.52806743,40.04056,-80.23722,key4\r
914,Trillium_grandiflorum,Not_threatened,0,41.65000,-80.26667,key4\r
915,Trillium_grandiflorum,Not_threatened,-3.7504395000000003E-2,41.65000,-80.26667,key4\r
916,Trillium_grandiflorum,Not_threatened,0.17535288700000001,41.65000,-80.26667,key4\r
917,Trillium_grandiflorum,Not_threatened,2.2599832E-2,41.65000,-80.26667,key4\r
918,Trillium_grandiflorum,Not_threatened,0.35248206599999998,41.65000,-80.26667,key4\r
919,Trillium_grandiflorum,Not_threatened,0.109199292,41.65000,-80.26667,key4\r
920,Trillium_grandiflorum,Not_threatened,0.226773319,41.65000,-80.26667,key4\r
921,Trillium_grandiflorum,Not_threatened,9.5310179999999994E-2,41.65000,-80.26667,key4\r
922,Trillium_grandiflorum,Not_threatened,0.247634571,41.65000,-80.26667,key4\r
923,Trillium_grandiflorum,Not_threatened,8.5861291000000006E-2,41.65000,-80.26667,key4\r
924,Trillium_grandiflorum,Not_threatened,0.11477551499999999,41.65000,-80.26667,key4\r
925,Trillium_grandiflorum,Not_threatened,6.8562671000000006E-2,41.65000,-80.26667,key4\r
926,Trillium_grandiflorum,Not_threatened,0.18038169200000001,41.65000,-80.26667,key4\r
927,Trillium_grandiflorum,Not_threatened,0.122602322,41.65000,-80.26667,key4\r
928,Trillium_grandiflorum,Not_threatened,0.47656103,41.65000,-80.26667,key4\r
929,Trillium_grandiflorum,Not_threatened,0.71219537600000005,41.65000,-80.26667,key4\r
930,Trillium_grandiflorum,Not_threatened,0.61229508399999999,41.65000,-80.26667,key4\r
931,Trillium_grandiflorum,Not_threatened,0.27464407800000001,41.65000,-80.26667,key4\r
932,Trillium_grandiflorum,Not_threatened,-2.0367303E-2,41.65000,-80.26667,key4\r
933,Trillium_grandiflorum,Not_threatened,0.132117965,41.65000,-80.26667,key4\r
934,Trillium_grandiflorum,Not_threatened,0.242730685,41.65000,-80.26667,key4\r
935,Vaccinium_hirtum,Not_threatened,0.29511705100000002,35.02500,135.80000,key4\r
936,Vaccinium_hirtum,Not_threatened,0.13858616300000001,35.02500,135.80000,key4\r
937,Vaccinium_hirtum,Not_threatened,0,35.02500,135.80000,key4\r
938,Vaccinium_hirtum,Not_threatened,6.4538521000000001E-2,35.02500,135.80000,key4\r
939,Vaccinium_smallii,No_data,-0.23111172099999999,35.02500,135.80000,key4\r
940,Vaccinium_smallii,No_data,0.113328685,35.02500,135.80000,key4\r
941,Ferocactus_cylindraceus,Not_threatened,0.32477619699999999,32.60000,-111.23333,key4\r
942,Ferocactus_wislizeni,Threatened,6.6889879999999999E-3,31.90000,-110.88333,key4\r
943,Pachycereus_pringlei,Not_threatened,0.28768207200000001,27.98333,-110.83333,key4\r
944,Pachycereus_pringlei,Not_threatened,-0.69314718099999995,27.98333,-110.83333,key4\r
945,Pachycereus_pringlei,Not_threatened,0.141078598,28.83000,-111.81000,key4\r
946,Pachycereus_pringlei,Not_threatened,7.4107971999999994E-2,28.83000,-111.81000,key4\r
947,Pachycereus_pringlei,Not_threatened,-2.3530497000000001E-2,29.10000,-112.13333,key4\r
948,Pachycereus_pringlei,Not_threatened,0.15906469500000001,29.10000,-112.13333,key4\r
949,Pachycereus_pringlei,Not_threatened,0.20972053099999999,29.38333,-112.21667,key4\r
950,Pachycereus_pringlei,Not_threatened,0.216223108,29.38333,-112.21667,key4\r
951,Ipomoea_asarifolia,Not_threatened,-0.23638877799999999,-8.91667,-39.90000,key4\r
952,Kalmia_latifolia,Not_threatened,-0.26236426400000001,41.48333,-72.53333,key4\r
953,Parnassia_palustris,Not_threatened,3.2191620999999997E-2,58.08000,6.78000,key4\r
954,Parnassia_palustris,Not_threatened,0.63657682900000001,60.60000,7.53333,key4\r
955,Cerastium_alpinum,Not_threatened,0.16705408499999999,60.59000,7.52000,key4\r
956,Cerastium_alpinum,Not_threatened,0.300104592,60.60505,7.50464,key4\r
957,Cerastium_alpinum,Not_threatened,8.9612158999999997E-2,60.60505,7.50464,key4\r
958,Cerastium_cerastoides,Not_threatened,0.19885085899999999,60.66395,6.99249,key4\r
959,Cerastium_cerastoides,Not_threatened,8.4083116999999999E-2,60.61000,7.51000,key4\r
960,Cerastium_cerastoides,Not_threatened,0.33647223700000001,60.61000,7.51000,key4\r
961,Oxypetalum_mexiae,Threatened,4.9159176310000001,-20.75000,-42.86417,key4\r
962,Taraxacum_ceratophorum,Threatened,0.16408688599999999,39.25000,-106.11861,key4\r
963,Castilleja_linariifolia,Not_threatened,0.15583559999999999,38.75000,-106.99972,key4\r
964,Castilleja_linariifolia,Not_threatened,0.36227092900000002,38.75000,-106.99972,key4\r
965,Brachyloma_ericoides,No_data,-0.559615788,-35.33333,138.74556,key4\r
966,Scorzonera_humilis,Threatened,0.34862375200000001,49.69763,5.93606,key4\r
969,Psychotria_nuda,Not_threatened,0,-23.35000,-44.84722,key4\r
970,Dianella_revoluta,No_data,0.98082925300000001,-33.63350,146.56527,key4\r
971,Dicerandra_frutescens,Threatened,-0.120890047,27.93915,-81.54921,key4\r
972,Gentiana_straminea,Not_threatened,0.37037378799999998,37.61667,101.31667,key4\r
973,Gentiana_straminea,Not_threatened,0.36514413400000001,37.61667,101.31667,key4\r
974,Gentiana_straminea,Not_threatened,-0.26685498400000002,37.61667,101.31667,key4\r
975,Gentiana_straminea,Not_threatened,0.12958755699999999,37.61667,101.31667,key4\r
976,Lophocereus_schottii,Threatened,6.7390763000000006E-2,31.95000,-112.88111,key4\r
977,Gerbera_aurantiaca,Threatened,0.621704692,-29.03333,30.05083,key4\r
978,Gerbera_aurantiaca,Threatened,0.76834469699999997,-29.56667,30.32194,key4\r
979,Gerbera_aurantiaca,Threatened,0.64430987500000003,-29.03333,30.05083,key4\r
980,Gerbera_aurantiaca,Threatened,1.68648044,-29.80000,30.18639,key4\r
981,Gerbera_aurantiaca,Threatened,0.58781055400000004,-29.80000,30.18639,key4\r
982,Oxyanthus_pyriformis,Not_threatened,0.93597868699999998,-29.86667,30.99972,key4\r
983,Peraxilla_tetrapetala,Threatened,0.61110475799999997,-43.15419,171.70833,key4\r
984,Peraxilla_tetrapetala,Threatened,1.625457972,-43.15419,171.70833,key4\r
985,Peraxilla_tetrapetala,Threatened,0.86349254600000003,-43.15419,171.70833,key4\r
986,Peraxilla_tetrapetala,Threatened,0.60367577800000005,-43.15419,171.70833,key4\r
987,Peraxilla_tetrapetala,Threatened,0.55590367799999996,-43.15419,171.70833,key4\r
988,Peraxilla_tetrapetala,Threatened,0.83129751900000004,-43.15419,171.70833,key4\r
989,Peraxilla_tetrapetala,Threatened,0.23673159599999999,-43.15419,171.70833,key4\r
990,Peraxilla_tetrapetala,Threatened,0.27811743900000002,-43.15419,171.70833,key4\r
991,Peraxilla_tetrapetala,Threatened,0.88940934599999999,-43.15419,171.70833,key4\r
992,Peraxilla_tetrapetala,Threatened,0.58778666499999999,-43.15419,171.70833,key4\r
993,Asclepias_syriaca,Not_threatened,-2.5085037000000001E-2,40.71296,-83.28271,key4\r
994,Trillium_grandiflorum,Not_threatened,0.43147711999999999,41.61000,-80.35000,key4\r
995,Trillium_grandiflorum,Not_threatened,0.52018448799999994,41.61000,-80.35000,key4\r
996,Earina_autumnalis,Not_threatened,0.70309751099999995,-40.68333,175.54222,key4\r
997,Dendrobium_cunninghamii,Not_threatened,1.203972804,-40.68333,175.54222,key4\r
998,Earina_aestivalis,Not_threatened,2.418756525,-40.50000,175.71167,key4\r
999,Earina_mucronata,Not_threatened,2.8332133439999998,-40.60000,175.62694,key4\r
1000,Swertia_perennis,Threatened,-4.8597874999999999E-2,47.42613,9.36435,key4\r
1001,Platanthera_bifolia,Not_threatened,0.70865136699999998,63.93333,20.28806,key4\r
1002,Platanthera_bifolia,Not_threatened,1.696449289,64.16667,19.59306,key4\r
1003,Platanthera_bifolia,Not_threatened,1.7657839829999999,63.93333,19.13556,key4\r
1004,Platanthera_bifolia,Not_threatened,0.457833094,59.78333,18.59306,key4\r
1005,Pachycereus_pecten-aboriginum,Not_threatened,0.59407835600000003,28.68333,-110.27111,key4\r
1006,Lecocarpus_pinnatifidus,Threatened,0.278713402,-1.27072,-90.48831,key4\r
1007,Caesalpinia_decapetala,Not_threatened,-7.3025135000000005E-2,-29.60061,30.37941,key4\r
1008,Canna_indica,Not_threatened,0.17127172099999999,-29.60061,30.37941,key4\r
1010,Oenothera_biennis,Not_threatened,0.138209363,-29.60061,30.37941,key4\r
1011,Senna_didymobotrya,Not_threatened,-0.20185737500000001,-29.60061,30.37941,key4\r
1012,Sorbus_torminalis,Not_threatened,1.203972804,55.04944,12.25417,key4\r
1013,Sorbus_torminalis,Not_threatened,1.386294361,55.04944,12.25417,key4\r
1014,Lepidium_papilliferum,Threatened,0.71971420799999997,45.05097,-116.27992,key4\r
1015,Lepidium_papilliferum,Threatened,1.2957803539999999,45.05097,-116.27992,key4\r
1016,Lepidium_papilliferum,Threatened,1.4423838280000001,45.05097,-116.27992,key4\r
1017,Ipomopsis_aggregata,Not_threatened,-1.3235385159999999,38.95963,-106.98657,key4\r
1018,Ipomopsis_aggregata,Not_threatened,0.37052594300000002,38.95963,-106.98657,key4\r
1019,Ipomopsis_aggregata,Not_threatened,-0.187953432,38.95963,-106.98657,key4\r
1020,Ipomopsis_aggregata,Not_threatened,-9.9157853000000004E-2,38.95963,-106.98657,key4\r
1021,Alicia_anisopetala,No_data,-0.20890119200000001,-22.81667,-47.11861,key4\r
1022,Banisteriopsis_adenopoda,No_data,0.62860866000000004,-22.81667,-47.11861,key4\r
1023,Banisteriopsis_muricata,No_data,2.6184380350000001,-22.81667,-47.11861,key4\r
1024,Stigmaphyllon_lalandianum,No_data,0.43363598399999997,-22.81667,-47.11861,key4\r
1025,Gnidia_glauca,Not_threatened,6.5694374999999999E-2,19.26667,73.57611,key4\r
1026,Gnidia_glauca,Not_threatened,5.9316577000000002E-2,19.26667,73.57611,key4\r
1027,Gnidia_glauca,Not_threatened,0,19.26667,73.57611,key4\r
1028,Gnidia_glauca,Not_threatened,-7.3502400000000003E-4,19.26667,73.57611,key4\r
1029,Psychotria_hoffmannseggiana,No_data,1.069092793,-8.12500,-34.88111,key4\r
1030,Sabicea_cinerea,No_data,-0.135801541,-8.12500,-34.88111,key4\r
1031,Myrcia_splendens,Not_threatened,-0.65924562900000006,-19.17083,-48.38972,key4\r
1032,Myrcia_tomentosa,Not_threatened,-0.81093021600000004,-19.17083,-48.38972,key4\r
1033,Ranunculus_acris,Not_threatened,0.26507062599999998,60.38421,7.25575,key4\r
1034,Ranunculus_acris,Not_threatened,0.14092734700000001,60.38421,7.25575,key4\r
1035,Ranunculus_acris,Not_threatened,4.0757992E-2,60.38421,7.25575,key4\r
1036,Ranunculus_acris,Not_threatened,-0.27521240699999999,60.38421,7.25575,key4\r
1037,Ranunculus_acris,Not_threatened,0.27849364599999998,60.38421,7.25575,key4\r
1038,Alstroemeria_aurea,No_data,0.56798403799999997,-41.00003,-71.50000,key4\r
1039,Alstroemeria_aurea,No_data,0.70498163800000002,-41.00003,-71.50000,key4\r
1040,Alstroemeria_aurea,No_data,-0.28223246800000001,-41.00003,-71.50000,key4\r
1041,Berberis_darwinii,No_data,0,-41.00003,-71.50000,key4\r
1042,Gavilea_odoratissima,No_data,2.0074680420000002,-41.00003,-71.50000,key4\r
1043,Vicia_nigricans,Not_threatened,-0.84729785999999996,-41.00003,-71.50000,key4\r
1044,Tristerix_corymbosus,No_data,0.14897379199999999,-41.13333,-71.31667,key4\r
1045,Daphne_laureola,Not_threatened,0.187598614,38.15818,-2.73817,key4\r
1046,Daphne_laureola,Not_threatened,0.21357409999999999,38.15818,-2.73817,key4\r
1047,Daphne_laureola,Not_threatened,0.11506933,38.15818,-2.73817,key4\r
1048,Daphne_laureola,Not_threatened,0,38.15818,-2.73817,key4\r
1049,Geranium_sylvaticum,Not_threatened,0.26170658600000002,60.38333,22.32194,key4\r
1050,Geranium_sylvaticum,Not_threatened,0.36996566400000003,60.38333,22.32194,key4\r
1051,Geranium_sylvaticum,Not_threatened,0.118969565,60.38333,22.32194,key4\r
1052,Geranium_sylvaticum,Not_threatened,0.74985488499999997,60.38333,22.32194,key4\r
1053,Geranium_sylvaticum,Not_threatened,-0.63094427399999997,60.41667,22.76250,key4\r
1054,Geranium_sylvaticum,Not_threatened,-8.1091474999999996E-2,60.41667,22.76250,key4\r
1055,Geranium_sylvaticum,Not_threatened,0.60193117200000001,60.41667,22.76250,key4\r
1056,Geranium_sylvaticum,Not_threatened,-0.13981542,60.41667,22.76250,key4\r
1057,Geranium_sylvaticum,Not_threatened,0.35503615599999999,60.23333,21.96700,key4\r
1058,Geranium_sylvaticum,Not_threatened,5.2184500000000003E-3,60.23333,21.96700,key4\r
1059,Geranium_sylvaticum,Not_threatened,0.439341959,60.23333,21.96700,key4\r
1060,Geranium_sylvaticum,Not_threatened,0.40888876800000001,60.23333,21.96700,key4\r
1061,Balsamorhiza_sagittata,Not_threatened,-4.5988759999999997E-2,41.75070,-111.77402,key4\r
1062,Bletilla_striata,Threatened,2.1107640129999998,37.86221,128.84317,key4\r
1063,Bletilla_striata,Threatened,3.8182905279999999,34.57691,126.43636,key4\r
1064,Manettia_cordifolia,No_data,0.24512245799999999,-19.17083,-48.38972,key4\r
1065,Pimelea_villosa_subsp._arenaria,Threatened,-0.24379461699999999,-40.89463,176.21237,key4\r
1066,Pimelea_villosa_subsp._arenaria,Threatened,0.47895041500000002,-40.89463,176.21237,key4\r
1067,Distichlis_spicata,Not_threatened,1.985915484,38.04228,-122.87998,key4\r
1068,Kallstroemia_grandiflora,Not_threatened,2.4445662E-2,28.76133,-110.48529,key4\r
1069,Kallstroemia_grandiflora,Not_threatened,1.6295852E-2,28.76133,-110.48529,key4\r
1070,Campanula_rotundifolia,Not_threatened,3.2846390000000003E-2,38.61667,-104.91500,key4\r
1071,Campanula_rotundifolia,Not_threatened,0.46440073599999998,39.25000,-106.11861,key4\r
1072,Magnolia_stellata,Threatened,4.4589876759999996,35.30000,137.05083,key4\r
1073,Senna_corymbosa,Not_threatened,-1.8018506E-2,-34.48333,-58.50833,key4\r
1074,Senna_corymbosa,Not_threatened,-5.5569851000000003E-2,-34.48333,-58.50833,key4\r
1075,Senna_corymbosa,Not_threatened,0.310154928,-34.63333,-58.47444,key4\r
1076,Pterostylis_alobula,Not_threatened,2.7909378610000002,-40.35000,175.54222,key4\r
1078,Pterostylis_patens,Not_threatened,0.37948962200000003,-40.06667,175.98278,key4\r
1079,Thelymitra_longifolia,Not_threatened,6.7969329999999994E-2,-40.40000,175.71167,key4\r
1081,Psychotria_suterella,No_data,0.129211732,-23.71667,-47.35556,key4\r
1082,Cistus_monspeliensis,Not_threatened,0.31220568500000001,39.50000,2.50833,key4\r
1083,Cistus_salviifolius,No_data,-3.660773E-3,39.75000,3.25417,key4\r
1084,Sauvagesia_erecta,Not_threatened,-0.75377180099999996,-8.12500,-34.88111,key4\r
1085,Sauvagesia_sprengelii,No_data,-1.314835395,-8.12500,-34.88111,key4\r
1086,Serapias_vomeracea,Not_threatened,1.727220948,39.94133,16.12226,key4\r
1087,Serapias_vomeracea,Not_threatened,1.663505134,39.94133,16.12226,key4\r
1088,Peraxilla_colensoi,Threatened,0.12891386899999999,-41.38333,173.03389,key4\r
1089,Peraxilla_colensoi,Threatened,0.94759061200000005,-41.38333,173.03389,key4\r
1090,Peraxilla_tetrapetala,Threatened,0.638841836,-43.15000,171.72861,key4\r
1091,Peraxilla_tetrapetala,Threatened,0.59001135999999998,-43.15000,171.72861,key4\r
1092,Peraxilla_tetrapetala,Threatened,0.538760401,-43.15000,171.72861,key4\r
1093,Peraxilla_tetrapetala,Threatened,1.658228077,-44.23333,169.81667,key4\r
1094,Peraxilla_tetrapetala,Threatened,1.2033476089999999,-44.23333,169.81667,key4\r
1095,Persoonia_glaucescens,Threatened,0.95977584400000004,-34.41806,150.47444,key4\r
1096,Persoonia_glaucescens,Threatened,0.63252255899999998,-34.25194,150.50833,key4\r
1097,Persoonia_lanceolata,Not_threatened,-0.23767165200000001,-34.11306,151.05083,key4\r
1098,Persoonia_lanceolata,Not_threatened,-0.29849298899999999,-34.10306,151.08472,key4\r
1099,Persoonia_mollis,Not_threatened,1.0986122890000001,-33.67611,151.13556,key4\r
1100,Persoonia_mollis,Not_threatened,0.606135804,-33.65583,151.06778,key4\r
1101,Persoonia_mollis,Not_threatened,2.8987537000000001E-2,-34.33000,150.47444,key4\r
1102,Persoonia_mollis,Not_threatened,-0.46430560799999998,-34.26806,150.50833,key4\r
1103,Pedicularis_monbeigiana,Not_threatened,5.7862577999999998E-2,27.86667,99.67778,key4\r
1104,Vaccinium_angustifolium,Not_threatened,-0.86326626399999995,48.00000,-83.00000,key4\r
1106,Caulokaempferia_coenobialis,Not_threatened,0.21650475499999999,23.16667,112.53330,key4\r
1107,Tamarix_chinensis,No_data,2.0834087000000001E-2,38.23333,119.16670,key4\r
1108,Maianthemum_dilatatum,Not_threatened,1.7272199939999999,49.18333,-123.16944,key4\r
1109,Pedicularis_longiflora,Not_threatened,3.3973543000000002E-2,30.01833,101.86417,key4\r
1110,Pedicularis_siphonantha,Not_threatened,2.4823970000000001E-2,30.01833,101.86417,key4\r
1111,Byrsonima_coccolobifolia,Not_threatened,0.42956265999999999,2.86389,-60.71167,key4\r
1112,Byrsonima_coccolobifolia,Not_threatened,0.36101334600000001,2.86389,-60.71167,key4\r
1113,Melocactus_glaucescens,Threatened,-0.212921997,-11.27306,-41.08472,species\r
1114,Melocactus_paucispinus,Not_threatened,3.9220712999999997E-2,-11.56444,-41.16944,species\r
1115,Byrsonima_microphylla,Threatened,0.278713402,-12.94972,-38.33889,key4\r
1116,Byrsonima_sericea,Not_threatened,0.50310357800000005,-12.94972,-38.33889,key4\r
1117,Heteropterys_alternifolia,Not_threatened,1.8170772770000001,-12.94972,-38.33889,key4\r
1118,Stigmaphyllon_paralias,No_data,-0.310154928,-12.94972,-38.33889,key4\r
1119,Paraboea_rufescens,Not_threatened,-0.481164704,21.68333,101.42361,key4\r
1120,Narcissus_triandrus,Not_threatened,0.126293725,41.77521,-7.07446,key4\r
1121,Narcissus_triandrus,Not_threatened,0.105360516,41.77521,-7.07446,key4\r
1122,Narcissus_triandrus,Not_threatened,-0.13762137799999999,41.77521,-7.07446,key4\r
1123,Narcissus_triandrus,Not_threatened,0.223143551,41.77521,-7.07446,key4\r
1124,Narcissus_triandrus,Not_threatened,0.29376111900000001,41.77521,-7.07446,key4\r
1125,Narcissus_triandrus,Not_threatened,-3.2260862000000001E-2,41.77521,-7.07446,key4\r
1126,Narcissus_triandrus,Not_threatened,3.8466280999999998E-2,41.77521,-7.07446,key4\r
1127,Narcissus_triandrus,Not_threatened,0.209091798,41.77521,-7.07446,key4\r
1128,Narcissus_triandrus,Not_threatened,0.31365755899999997,41.77521,-7.07446,key4\r
1129,Narcissus_triandrus,Not_threatened,-7.7961540999999995E-2,41.77521,-7.07446,key4\r
1130,Narcissus_triandrus,Not_threatened,0.45473615699999997,41.77521,-7.07446,key4\r
1131,Maianthemum_bifolium,Not_threatened,1.128465252,50.81872,4.59962,key4\r
1132,Aechmea_lindenii_var._lindenii,No_data,0.21476653900000001,-27.60028,-48.48083,key4\r
1133,Aechmea_lindenii_var._lindenii,No_data,7.3448294999999997E-2,-27.74333,-48.51806,key4\r
1134,Ruellia_brevifolia,No_data,0.26826398699999998,-20.80194,-42.86417,key4\r
1135,Ruellia_menthoides,No_data,0.40546510800000002,-20.80194,-42.86417,key4\r
1136,Ruellia_subsessilis,No_data,0.32277339199999999,-20.80194,-42.86417,key4\r
1140,Chuquiraga_oppositifolia,No_data,1.0676819879999999,-33.35000,-70.27111,species\r
1141,Betula_apoiensis,Threatened,1.972757399,43.00000,142.01694,key4\r
1142,Betula_apoiensis,Threatened,1.7015532010000001,43.00000,142.01694,key4\r
1143,Sarracenia_purpurea,Not_threatened,-5.1473350000000001E-2,42.27000,-72.34000,key4\r
1144,Cirrhaea_dependens,Not_threatened,4.3325259779999996,-23.18333,-46.86700,key4\r
1145,Polystachya_concreta,Not_threatened,1.459285639,-23.55000,-45.06700,key4\r
1146,Polystachya_estrellensis,No_data,-0.24188959400000001,-23.25000,-46.86700,key4\r
1147,Braya_fernaldii,Threatened,-0.489731841,51.30000,-56.73333,key4\r
1148,Braya_longii,Threatened,-0.47957307999999998,51.30000,-56.73333,key4\r
1149,Sorbus_aucuparia,Not_threatened,0.26008742699999998,63.81667,20.27111,species\r
1150,Embothrium_coccineum,Not_threatened,7.2906770999999995E-2,-41.88333,-73.67778,key4\r
1151,Embothrium_coccineum,Not_threatened,2.7908788E-2,-41.01667,-71.83028,key4\r
1152,Anacamptis_coriophora,Not_threatened,0.21884862699999999,44.07775,2.98312,key4\r
1153,Anacamptis_coriophora,Not_threatened,0.23487149199999999,43.55717,4.03187,key4\r
1154,Anacamptis_morio,Not_threatened,1.4276567499999999,42.95825,2.59855,key4\r
1155,Anacamptis_morio,Not_threatened,1.5999691410000001,43.39013,2.76657,key4\r
1156,Anacamptis_morio,Not_threatened,1.193922468,43.39263,2.75342,key4\r
1157,Himantoglossum_robertianum,Not_threatened,0.30722666900000001,41.95568,3.20067,key4\r
1158,Himantoglossum_robertianum,Not_threatened,0.114804829,41.95547,3.19738,key4\r
1159,Himantoglossum_robertianum,Not_threatened,0.48550781599999998,42.10623,3.15887,key4\r
1160,Penstemon_haydenii,Threatened,0.172245905,41.82373,-102.93387,key4\r
1161,Escallonia_myrtoidea,No_data,2.0476928430000001,-33.16667,-70.22028,key4\r
1162,Primula_farinosa,Not_threatened,-0.15242802699999999,56.66490,16.63648,key4\r
1163,Primula_farinosa,Not_threatened,-7.4581942999999998E-2,56.66490,16.63648,key4\r
1164,Primula_farinosa,Not_threatened,0.28626864499999999,56.61667,16.55000,key4\r
1165,Primula_farinosa,Not_threatened,-8.5424705000000004E-2,56.61667,16.55000,key4\r
1166,Primula_farinosa,Not_threatened,-1.5056745999999999E-2,56.66490,16.63648,key4\r
1167,Primula_farinosa,Not_threatened,-8.9311362000000005E-2,56.66490,16.63648,key4\r
1168,Primula_farinosa,Not_threatened,9.4816880000000006E-2,56.66490,16.63648,key4\r
1169,Primula_farinosa,Not_threatened,5.5463259999999999E-3,56.66490,16.63648,key4\r
1170,Primula_farinosa,Not_threatened,0.21386065800000001,56.66490,16.63648,key4\r
1171,Primula_farinosa,Not_threatened,0.138530668,56.66490,16.63648,key4\r
1172,Primula_farinosa,Not_threatened,0.45855356800000002,56.61667,16.55000,key4\r
1173,Primula_farinosa,Not_threatened,7.9497004999999996E-2,56.61667,16.55000,key4\r
1174,Primula_farinosa,Not_threatened,-5.7758834000000002E-2,56.66490,16.63648,key4\r
1175,Primula_farinosa,Not_threatened,-6.0298134000000003E-2,56.66490,16.63648,key4\r
1176,Primula_farinosa,Not_threatened,0.490573017,56.66490,16.63648,key4\r
1177,Primula_farinosa,Not_threatened,-8.1109167999999995E-2,56.66490,16.63648,key4\r
1178,Dyckia_tuberosa,Not_threatened,0.67235641099999999,-23.17028,-46.52528,key4\r
1179,Platanthera_obtusata,Not_threatened,5.9624770099999997,44.58333,-66.76250,key4\r
1180,Iris_versicolor,Not_threatened,-1.1908989E-2,44.58333,-66.76250,key4\r
1181,Iris_versicolor,Not_threatened,0.43310027699999998,44.58333,-66.76250,key4\r
1182,Ledum_palustre_subsp._groenlandicum,No_data,-0.13906043400000001,44.58333,-66.76250,key4\r
1183,Maianthemum_canadense,Not_threatened,1.308878671,44.58333,-66.76250,key4\r
1184,Maianthemum_stellatum,Not_threatened,-0.64805443200000001,44.58333,-66.76250,key4\r
1185,Maianthemum_trifolium,Not_threatened,5.0893641000000003E-2,44.58333,-66.76250,key4\r
1186,Rhododendron_canadense,Not_threatened,6.3140897000000001E-2,44.58333,-66.76250,key4\r
1187,Aconitum_gymnandrum,No_data,0.244403551,36.88333,102.49139,key4\r
1188,Aconitum_gymnandrum,No_data,0.23597263199999999,37.61667,101.30500,key4\r
1189,Euonymus_chloranthoides,Threatened,1.7653845889999999,29.84722,106.43333,key4\r
1190,Anemone_obtusiloba,Not_threatened,-0.26078731599999999,35.96667,101.89806,key4\r
1191,Anemone_obtusiloba,Not_threatened,-0.26060111400000002,35.96667,101.89806,key4\r
1192,Anemone_rivularis,Not_threatened,1.4325314E-2,35.96667,101.89806,key4\r
1193,Anemone_rivularis,Not_threatened,-0.23857935899999999,35.96667,101.89806,key4\r
1194,Trollius_ranunculoides,Not_threatened,-5.5157339999999996E-3,35.96667,101.89806,key4\r
1195,Trollius_ranunculoides,Not_threatened,0.189010545,35.96667,101.89806,key4\r
1196,Eriocnema_fulva,Threatened,-0.36772477999999997,-19.98333,-43.91500,key4\r
1197,Eriocnema_fulva,Threatened,0.76546784199999995,-19.98333,-43.91500,key4\r
1198,Paeonia_officinalis,Not_threatened,0.111225635,43.90000,3.45750,key4\r
1199,Paeonia_officinalis,Not_threatened,-0.10178269400000001,43.90000,3.45750,key4\r
1200,Paeonia_officinalis,Not_threatened,-2.4692612999999999E-2,43.90000,3.45750,key4\r
1201,Paeonia_officinalis,Not_threatened,-5.2643732999999998E-2,43.90000,3.45750,key4\r
1202,Paeonia_officinalis,Not_threatened,0,43.90000,3.45750,key4\r
1203,Aciphylla_squarrosa,Not_threatened,-9.3090423000000005E-2,-41.32194,174.75556,key4\r
1204,Aciphylla_squarrosa,Not_threatened,0.19948936,-41.32194,174.75556,key4\r
1205,Aciphylla_squarrosa,Not_threatened,0.31551687099999998,-41.32194,174.75556,key4\r
1206,Aciphylla_squarrosa,Not_threatened,7.9137320999999997E-2,-41.32194,174.75556,key4\r
1207,Aciphylla_squarrosa,Not_threatened,0.136575535,-41.32194,174.75556,key4\r
1208,Rhaphiodon_echinus,No_data,-0.916290732,-9.11861,-40.33889,key4\r
1209,Gentiana_straminea,Not_threatened,0.39487812799999999,34.35000,100.49139,key4\r
1210,Gentiana_straminea,Not_threatened,0.354383701,34.35000,100.49139,key4\r
1211,Gentiana_straminea,Not_threatened,1.197015639,34.35000,100.49139,key4\r
1212,Gentiana_straminea,Not_threatened,0.53231438900000005,37.61667,101.30500,key4\r
1213,Gentiana_straminea,Not_threatened,-8.8075207000000003E-2,37.61667,101.30500,key4\r
1214,Gentiana_straminea,Not_threatened,0.66904962899999998,37.61667,101.30500,key4\r
1215,Gentiana_straminea,Not_threatened,0.39487812799999999,34.35000,100.49139,key4\r
1216,Gentiana_straminea,Not_threatened,0.354383701,34.35000,100.49139,key4\r
1217,Gentiana_straminea,Not_threatened,1.197015639,34.35000,100.49139,key4\r
1218,Anisodus_tanguticus,Not_threatened,0.77570878099999996,37.64408,101.31728,key4\r
1219,Anisodus_tanguticus,Not_threatened,1.286164895,36.94657,102.50213,key4\r
1220,Trillium_reliquum,Threatened,4.2431745E-2,32.33333,-84.01694,key4\r
1221,Ranunculus_acris,Not_threatened,-0.119596273,61.15880,7.17582,key4\r
1222,Vellozia_declinans,No_data,2.0954618570000001,-19.28333,-43.59306,key4\r
1223,Vellozia_epidendroides,No_data,1.689180597,-19.28333,-43.59306,key4\r
1225,Viburnum_macrocephalum,No_data,0.30155191999999997,32.33333,119.50000,key4\r
1226,Penstemon_scariosus,Not_threatened,-0.122853673,40.22496,-109.54236,key4\r
1228,Dryas_octopetala,Not_threatened,-0.14197026099999999,60.61556,7.52528,key4\r
1229,Dryas_octopetala,Not_threatened,0.44802472300000001,60.61556,7.52528,key4\r
1230,Dryas_octopetala,Not_threatened,0.29725152300000002,60.61556,7.52528,key4\r
1231,Caryocar_villosum,Not_threatened,1.609437912,-3.36667,-59.96583,key4\r
1232,Ziziphus_joazeiro,No_data,0.83624802399999998,-7.34186,-36.30500,key4\r
1233,Antennaria_dioica,Not_threatened,1.8827312469999999,59.40000,17.16944,key4\r
1234,Antennaria_dioica,Not_threatened,1.011600912,59.40000,17.16944,key4\r
1235,Antennaria_dioica,Not_threatened,0.83624802399999998,59.40000,17.16944,key4\r
1236,Antennaria_dioica,Not_threatened,0.45391749100000001,59.40000,17.16944,key4\r
1237,Antennaria_dioica,Not_threatened,0.86750056799999997,59.40000,17.16944,key4\r
1238,Antennaria_dioica,Not_threatened,0.69314718099999995,59.40000,17.16944,key4\r
1239,Antennaria_dioica,Not_threatened,0.25131442799999998,59.40000,17.16944,key4\r
1240,Antennaria_dioica,Not_threatened,0.39803012999999998,59.40000,17.16944,key4\r
1241,Antennaria_dioica,Not_threatened,-0.15154989799999999,59.40000,17.16944,key4\r
1242,Antennaria_dioica,Not_threatened,0.20972053099999999,59.40000,17.16944,key4\r
1243,Antennaria_dioica,Not_threatened,-0.107630664,59.40000,17.16944,key4\r
1244,Antennaria_dioica,Not_threatened,0.50455601100000003,59.40000,17.16944,key4\r
1245,Antennaria_dioica,Not_threatened,-0.11506933,59.40000,17.16944,key4\r
1246,Antennaria_dioica,Not_threatened,-0.19415601399999999,59.40000,17.16944,key4\r
1247,Antennaria_dioica,Not_threatened,9.5310179999999994E-2,59.40000,17.16944,key4\r
1248,Antennaria_dioica,Not_threatened,6.6691373999999998E-2,59.40000,17.16944,key4\r
1249,Antennaria_dioica,Not_threatened,3.0680529349999999,59.40000,17.16944,key4\r
1250,Antennaria_dioica,Not_threatened,0.18805223200000001,59.40000,17.16944,key4\r
1251,Antennaria_dioica,Not_threatened,0.93282003400000002,59.40000,17.16944,key4\r
1252,Antennaria_dioica,Not_threatened,0.33647223700000001,59.40000,17.16944,key4\r
1253,Antennaria_dioica,Not_threatened,0.40546510800000002,59.40000,17.16944,key4\r
1254,Antennaria_dioica,Not_threatened,0.25131442799999998,59.40000,17.16944,key4\r
1255,Antennaria_dioica,Not_threatened,0.27820332800000003,59.40000,17.16944,key4\r
1256,Antennaria_dioica,Not_threatened,0.84729785999999996,59.40000,17.16944,key4\r
1257,Antennaria_dioica,Not_threatened,0.16507975,59.40000,17.16944,key4\r
1258,Antennaria_dioica,Not_threatened,0.39019763600000001,59.40000,17.16944,key4\r
1259,Couepia_uiti,No_data,-0.310154928,-19.56667,-56.23722,key4\r
1260,Xylopia_championii,Not_threatened,1.757857918,6.40000,80.47444,key4\r
1261,Primula_modesta,No_data,0.58778666499999999,36.40333,138.52528,key4\r
1262,Primula_modesta,No_data,0.15718558399999999,36.40333,138.52528,key4\r
1263,Primula_modesta,No_data,8.7011377000000001E-2,36.40333,138.52528,key4\r
1264,Primula_modesta,No_data,-3.9740328999999998E-2,36.40333,138.52528,key4\r
1265,Primula_modesta,No_data,-0.129211731,36.40333,138.52528,key4\r
1266,Primula_modesta,No_data,-0.23889190799999999,36.40333,138.52528,key4\r
1267,Primula_modesta,No_data,0.112117298,36.40333,138.52528,key4\r
1268,Primula_modesta,No_data,0.113328685,36.40333,138.52528,key4\r
1269,Mitracarpus_longicalyx,No_data,-0.17824823100000001,-12.19833,-38.98278,key4\r
1270,Penstemon_haydenii,Threatened,0.45255671600000003,41.07949,-106.60335,key4\r
1271,Psychotria_tenuinervis,No_data,-0.41627602499999999,-22.83333,-42.47444,key4\r
1272,Rhododendron_delavayi,Not_threatened,1.1711259E-2,25.95000,103.76000,key4\r
1273,Rhododendron_decorum,Not_threatened,-0.25685460900000001,25.95000,103.76250,key4\r
1274,Rhododendron_agastum,Not_threatened,-0.14271630199999999,25.95000,103.76250,key4\r
1275,Rhododendron_irroratum,Not_threatened,-0.157985441,25.95000,103.76250,key4\r
1276,Orychophragmus_violaceus,Not_threatened,-7.1790075999999994E-2,39.90421,116.40739,key4\r
1277,Stachyurus_macrocarpus,Threatened,0.257045103,27.00000,141.00000,key4\r
1278,Vincetoxicum_hirundinaria,Threatened,2.376693065,58.95000,17.61000,key4\r
1279,Helianthemum_squamatum,No_data,2.2141126000000001E-2,40.08000,-3.26000,key4\r
1280,Lepidium_papilliferum,Threatened,2.0962486600000001,43.68423,-116.12223,key4\r
1281,Lepidium_papilliferum,Threatened,1.800976124,43.68423,-116.12223,key4\r
1282,Lepidium_papilliferum,Threatened,2.511389034,43.68423,-116.12223,key4\r
1283,Lepidium_papilliferum,Threatened,2.1491748799999999,43.68423,-116.12223,key4\r
1284,Lepidium_papilliferum,Threatened,2.3994349189999999,43.68423,-116.12223,key4\r
1285,Lepidium_papilliferum,Threatened,2.035431601,43.68423,-116.12223,key4\r
1286,Lepidium_papilliferum,Threatened,2.2323808340000002,43.68423,-116.12223,key4\r
1287,Lepidium_papilliferum,Threatened,2.1530533589999998,43.68423,-116.12223,key4\r
1288,Fumana_juniperina,Threatened,0.15597583100000001,38.93333,8.93333,key4\r
1289,Polygala_vayredae,Threatened,0.67298734699999996,42.26967,2.59589,key4\r
1290,Schinus_terebinthifolia,No_data,-0.441832752,-21.73333,-41.03389,species\r
1291,Schinus_terebinthifolia,No_data,-0.30228087199999998,-21.73333,-41.03389,species\r
1292,Crataegus_monogyna,Not_threatened,0.59783700100000003,43.28333,5.50833,key4\r
1293,Nierembergia_linariifolia,No_data,0.86890802700000003,-31.60000,-64.77944,key4\r
1294,Nierembergia_linariifolia,No_data,0.754253057,-31.60000,-64.77944,key4\r
1295,Nierembergia_linariifolia,No_data,0.55930450399999998,-30.86667,-64.54222,key4\r
1296,Nierembergia_linariifolia,No_data,0.63181718200000003,-30.86667,-64.54222,key4\r
1297,Nierembergia_linariifolia,No_data,0.26638123000000002,-31.40000,-64.16944,key4\r
1298,Nierembergia_linariifolia,No_data,0.387863913,-31.40000,-64.16944,key4\r
1299,Nierembergia_linariifolia,No_data,0.38157379499999999,-30.76667,-64.52528,key4\r
1300,Nierembergia_linariifolia,No_data,0.369523086,-30.43333,-64.33889,key4\r
1301,Kallstroemia_grandiflora,Not_threatened,-9.7797743000000006E-2,28.98333,-110.91500,key4\r
1302,Cypella_herbertii,No_data,1.9123874569999999,-35.53333,-58.00000,key4\r
1303,Corydalis_ambigua,No_data,-1.1976191000000001E-2,42.58333,142.13556,key4\r
1304,Corydalis_ambigua,No_data,0.331777392,42.58333,142.13556,key4\r
1305,Corydalis_ambigua,No_data,8.8947486000000006E-2,42.58333,142.13556,key4\r
1306,Corydalis_ambigua,No_data,3.2789823000000003E-2,42.58333,142.13556,key4\r
1307,Corydalis_ambigua,No_data,6.5240521999999995E-2,42.58333,142.13556,key4\r
1308,Phrynium_imbricatum,Threatened,-1.4171928030000001,21.95000,101.20333,key4\r
1309,Vigna_caracalla,Threatened,1.063826173,-24.90000,-65.64389,key4\r
1310,Vigna_caracalla,Threatened,1.290984181,-24.70000,-65.20333,key4\r
1311,Vigna_caracalla,Threatened,1.660731207,-24.70000,-65.40667,key4\r
1312,Vigna_caracalla,Threatened,1.2715660950000001,-24.60000,-65.37278,key4\r
1313,Mimulus_guttatus,Not_threatened,0.31668694600000002,45.58958,-122.76060,key4\r
1314,Syncolostemon_densiflorus,Not_threatened,0.87546873700000005,-29.46667,30.23722,key4\r
1315,Syncolostemon_macranthus,Not_threatened,0.36772477999999997,-28.57228,29.06193,key4\r
1316,Syncolostemon_rotundifolius,Not_threatened,0.57536414499999999,-30.99789,30.18707,key4\r
1317,Viola_praemorsa,Not_threatened,0.47692441699999999,38.95852,-106.98776,key4\r
1318,Viola_praemorsa,Not_threatened,-3.9392539999999997E-2,38.95852,-106.98776,key4\r
1319,Viola_praemorsa,Not_threatened,6.1960551000000003E-2,38.95852,-106.98776,key4\r
1320,Viola_praemorsa,Not_threatened,-0.15822520900000001,38.95852,-106.98776,key4\r
1321,Viola_praemorsa,Not_threatened,0.123162735,38.95852,-106.98776,key4\r
1322,Viola_praemorsa,Not_threatened,-2.3374074000000002E-2,38.95852,-106.98776,key4\r
1323,Viola_praemorsa,Not_threatened,-0.109559879,38.95852,-106.98776,key4\r
1324,Viola_praemorsa,Not_threatened,9.9090524999999999E-2,38.95852,-106.98776,key4\r
1325,Viola_praemorsa,Not_threatened,-7.1260746999999999E-2,38.95852,-106.98776,key4\r
1326,Viola_praemorsa,Not_threatened,0.20067069500000001,38.95852,-106.98776,key4\r
1327,Carum_carvi,Not_threatened,1.1320876000000001E-2,61.16352,7.17556,key4\r
1328,Centaurea_jacea,Not_threatened,0.34536118399999999,61.16352,7.17556,key4\r
1329,Clinopodium_vulgare,Not_threatened,5.4067220999999999E-2,61.16352,7.17556,key4\r
1330,Geum_rivale,Not_threatened,0.10648348000000001,61.16352,7.17556,key4\r
1331,Hypericum_maculatum,Not_threatened,7.6195784000000003E-2,61.16352,7.17556,key4\r
1333,Pimpinella_saxifraga,Not_threatened,8.2361318000000003E-2,61.16352,7.17556,key4\r
1334,Potentilla_erecta,Not_threatened,8.8553397000000006E-2,61.16352,7.17556,key4\r
1335,Prunella_vulgaris,Not_threatened,0.15906469500000001,61.16352,7.17556,key4\r
1336,Ranunculus_acris,Not_threatened,-6.4957896000000001E-2,61.16352,7.17556,key4\r
1337,Trifolium_repens,Not_threatened,-0.310154928,61.16352,7.17556,key4\r
1338,Polemonium_van-bruntiae,No_data,-6.7573953000000006E-2,44.18911,-72.95570,key4\r
1339,Polemonium_van-bruntiae,No_data,-3.9033739999999997E-2,44.18911,-72.95570,key4\r
1340,Polemonium_van-bruntiae,No_data,2.8125635E-2,44.18911,-72.95570,key4\r
1341,Polemonium_van-bruntiae,No_data,-0.13576189699999999,44.18911,-72.95570,key4\r
1342,Grevillea_repens,Not_threatened,3.3057589890000001,-37.50000,145.00000,key4\r
1343,Grevillea_repens,Not_threatened,3.6166671199999998,-37.50000,145.00000,key4\r
1344,Grevillea_repens,Not_threatened,2.859211342,-37.50000,145.00000,key4\r
1345,Grevillea_repens,Not_threatened,1.3252584709999999,-37.50000,145.00000,key4\r
1346,Grevillea_repens,Not_threatened,1.2878542879999999,-37.50000,145.00000,key4\r
1347,Chloraea_bletioides,No_data,1.1438031879999999,-33.76341,-70.41939,key4\r
1348,Chloraea_bletioides,No_data,6.2697630000000004E-2,-33.76341,-70.41939,key4\r
1349,Chloraea_chrysantha,No_data,-1.5189635999999999E-2,-33.76341,-70.41939,key4\r
1350,Chloraea_crispa,No_data,1.900749625,-33.76341,-70.41939,key4\r
1351,Chloraea_galeata,No_data,-0.12566543999999999,-33.76341,-70.41939,key4\r
1352,Stachytarpheta_glabra,Not_threatened,5.2770569999999999E-3,-20.06667,-44.03389,key4\r
1353,Asphodelus_aestivus,Not_threatened,0.81484411599999995,39.80084,3.10167,key4\r
1354,Dorycnium_hirsutum,Not_threatened,0.24484191399999999,39.80084,3.10167,key4\r
1355,Helichrysum_stoechas,Not_threatened,0.12169693500000001,39.73148,3.22028,key4\r
1356,Campanula_americana,No_data,4.7276691000000003E-2,37.37514,-80.52275,key4\r
1357,Campanula_americana,No_data,0.40230319399999998,37.37514,-80.52275,key4\r
1358,Trillium_camschatcense,Threatened,-0.211309094,43.30000,141.61000,key4\r
1359,Trillium_camschatcense,Threatened,-4.1385216000000002E-2,42.33333,143.15222,key4\r
1360,Trillium_camschatcense,Threatened,4.0821995E-2,42.61667,142.50833,key4\r
1361,Trillium_camschatcense,Threatened,-0.13133600200000001,42.55000,142.64389,key4\r
1362,Trillium_camschatcense,Threatened,0.15415068000000001,42.30000,143.27083,key4\r
1363,Leucospermum_conocarpodendron,Threatened,0.26236426400000001,-34.21667,18.40667,key4\r
1364,Leucospermum_conocarpodendron,Threatened,-7.2570693000000006E-2,-34.21667,18.40667,key4\r
1365,Leucospermum_conocarpodendron,Threatened,-0.41985384599999998,-34.21667,18.40667,key4\r
1366,Leucospermum_conocarpodendron,Threatened,0.41531740499999997,-34.21667,18.40667,key4\r
1367,Leucospermum_conocarpodendron,Threatened,0.13235145100000001,-34.21667,18.40667,key4\r
1368,Leucospermum_conocarpodendron,Threatened,0.40134139099999999,-34.21667,18.40667,key4\r
1369,Leucospermum_conocarpodendron,Threatened,0.63465097400000003,-34.21667,18.40667,key4\r
1370,Leucospermum_conocarpodendron,Threatened,0.46470794199999998,-34.21667,18.40667,key4\r
1371,Leucospermum_conocarpodendron,Threatened,-0.1198012,-34.21667,18.40667,key4\r
1372,Aconitum_napellus,Not_threatened,0.62570590000000004,49.00000,2.00000,key4\r
1373,Malus_sieversii,Threatened,-0.191171172,43.37225,82.27215,key4\r
1375,Nemophila_menziesii,Not_threatened,0,38.31905,-123.05551,key4\r
1376,Angraecum_bracteosum,Not_threatened,2.975929646,-21.00000,55.66083,key4\r
1377,Angraecum_bracteosum,Not_threatened,2.1892564079999999,-21.00000,55.66083,key4\r
1378,Hypochaeris_thrincioides,No_data,0.478302432,-33.35000,-70.27111,key4\r
1379,Hypochaeris_thrincioides,No_data,0.111225635,-33.35000,-70.27111,key4\r
1380,Perezia_carthamoides,No_data,0.67151408499999998,-33.35000,-70.27111,key4\r
1381,Perezia_carthamoides,No_data,0.53956131299999999,-33.35000,-70.27111,key4\r
1382,Rhododendron_semibarbatum,Not_threatened,-0.21743010900000001,35.68312,139.25879,key4\r
1383,Rhododendron_semibarbatum,Not_threatened,2.8013036000000002E-2,35.78408,137.69407,key4\r
1384,Rhododendron_semibarbatum,Not_threatened,0.31211791300000002,35.78408,137.69407,key4\r
1385,Psilochilus_modestus,No_data,3.5466143739999998,-23.55000,-45.06778,key4\r
1386,Psilochilus_modestus,No_data,1.533691213,-23.18333,-46.88111,key4\r
1387,Pseudopiptadenia_contorta,Not_threatened,-9.5310180999999994E-2,-22.53333,-42.28806,key4\r
1388,Pseudopiptadenia_leptostachya,Not_threatened,-0.518793791,-22.53333,-42.28806,key4\r
1390,Merremia_macrocalyx,No_data,-0.254234138,10.40000,-66.88111,species\r
1391,Impatiens_platyadena,Threatened,0.23361485100000001,10.13697,77.05942,key4\r
1392,Fuchsia_excorticata,Not_threatened,0.64992351299999995,-39.99583,176.02440,key4\r
1393,Fuchsia_excorticata,Not_threatened,0.25852166500000001,-41.80650,172.86095,key4\r
1394,Fuchsia_excorticata,Not_threatened,0.35733164899999997,-39.43933,175.52697,key4\r
1395,Fuchsia_excorticata,Not_threatened,0.23914329600000001,-39.43933,175.52697,key4\r
1396,Fuchsia_excorticata,Not_threatened,-6.1914201000000002E-2,-41.79450,172.85264,key4\r
1397,Fuchsia_excorticata,Not_threatened,2.9302379999999999E-2,-41.41817,172.92669,key4\r
1398,Fuchsia_excorticata,Not_threatened,-1.8236029000000001E-2,-41.41817,172.92669,key4\r
1399,Fuchsia_excorticata,Not_threatened,7.8065830000000003E-2,-38.76917,176.22180,key4\r
1400,Fuchsia_excorticata,Not_threatened,0.19788233399999999,-38.76917,176.22180,key4\r
1401,Fuchsia_excorticata,Not_threatened,6.8184916999999998E-2,-40.95050,175.11031,key4\r
1402,Fuchsia_excorticata,Not_threatened,0.13761287999999999,-43.66817,172.63576,key4\r
1403,Fuchsia_excorticata,Not_threatened,0.136779435,-43.66817,172.63576,key4\r
1404,Fuchsia_excorticata,Not_threatened,1.410199143,-39.99583,176.02440,key4\r
1405,Fuchsia_excorticata,Not_threatened,1.399165387,-41.80650,172.86095,key4\r
1406,Fuchsia_excorticata,Not_threatened,1.259871637,-39.43933,175.52697,key4\r
1407,Fuchsia_excorticata,Not_threatened,0.36014590899999999,-39.43933,175.52697,key4\r
1408,Fuchsia_excorticata,Not_threatened,0.68030845299999998,-41.41817,172.92669,key4\r
1409,Fuchsia_excorticata,Not_threatened,0.248833264,-41.41817,172.92669,key4\r
1410,Fuchsia_excorticata,Not_threatened,0.44293171599999998,-38.76917,176.22180,key4\r
1411,Fuchsia_excorticata,Not_threatened,0.32100324499999999,-38.76917,176.22180,key4\r
1412,Fuchsia_excorticata,Not_threatened,6.2500242999999997E-2,-40.95050,175.11031,key4\r
1413,Fuchsia_excorticata,Not_threatened,0.16336968199999999,-43.66817,172.63576,key4\r
1414,Isoplexis_canariensis,Threatened,4.5617756000000002E-2,28.37033,-16.85025,key4\r
1415,Lobelia_boykinii,Threatened,0.47022882900000001,34.87572,-79.20420,key4\r
1416,Lobelia_boykinii,Threatened,0.30228087199999998,28.18060,-81.98986,key4\r
1417,Lobelia_boykinii,Threatened,0.44781014400000002,34.75949,-79.48855,key4\r
1418,Eria_coronaria,Not_threatened,1.4874229619999999,25.15000,106.27111,key4\r
1419,Phyllospadix_scouleri,Not_threatened,4.8471491999999998E-2,48.28757,-124.36050,key4\r
1420,Phyllospadix_serrulatus,Not_threatened,-1.264356217,48.25906,-124.68186,key4\r
1421,Xysmalobium_undulatum,No_data,5.4553211150000003,-29.49048,30.19312,key4\r
1422,Witheringia_solanacea,Not_threatened,0.157903029,8.89265,-83.14815,key4\r
1423,Witheringia_solanacea,Not_threatened,5.7158413999999998E-2,8.94528,-82.83333,key4\r
1424,Witheringia_solanacea,Not_threatened,0.59783700100000003,10.28244,-84.79879,key4\r
1425,Witheringia_solanacea,Not_threatened,1.821612432,10.28244,-84.79879,key4\r
1426,Witheringia_solanacea,Not_threatened,1.0266387889999999,10.27497,-84.82551,key4\r
1427,Anagyris_foetida,Not_threatened,1.3291369799999999,38.68264,-7.10267,key4\r
1428,Anagyris_foetida,Not_threatened,0.99324957899999999,38.68264,-7.10267,key4\r
1429,Anagyris_foetida,Not_threatened,0.89948456200000004,38.68264,-7.10267,key4\r
1430,Anagyris_foetida,Not_threatened,0.55961296699999996,38.68264,-7.10267,key4\r
1431,Neottia_listeroides,Not_threatened,1.468552426,32.88333,103.79639,key4\r
1432,Cymbidium_goeringii,Threatened,2.7075503259999998,26.33000,110.47000,key4\r
1433,Sinojackia_huangmeiensis,Threatened,0.25618340499999998,29.99375,116.00000,key4\r
1434,Oxalis_amblyosepala,Threatened,0.57212943599999999,-31.65549,18.78449,key4\r
1435,Oxalis_comptonii,Threatened,-0.203055705,-31.65549,18.78449,key4\r
1436,Oxalis_giftbergensis,Not_threatened,-0.203055705,-31.65549,18.78449,key4\r
1437,Oxalis_natans,Threatened,-5.8268908000000001E-2,-33.92576,18.83668,key4\r
1438,Oxalis_natans,Threatened,0.21026092499999999,-33.48032,19.05869,key4\r
1439,Oxalis_oculifera,Not_threatened,0.15147004,-31.65549,18.78449,key4\r
1440,Oxalis_oreophila,Not_threatened,-9.3152408000000006E-2,-32.19758,18.89673,key4\r
1441,Aloe_africana,Not_threatened,0.843542083,-33.83333,24.93194,key4\r
1442,Aloe_lineata_var._muirii,No_data,1.426787534,-33.83333,24.93194,key4\r
1443,Aloe_pluridens,Not_threatened,0.93249382800000002,-33.83333,24.93194,key4\r
1444,Aloe_hexapetala,No_data,0.29012753299999999,-33.83333,24.93194,key4\r
1445,Pitcairnia_brittoniana,Not_threatened,-9.2339846000000003E-2,10.30000,-84.81670,key4\r
1446,Flourensia_cernua,Not_threatened,-0.53294754099999997,26.86667,-103.98278,key4\r
1447,Flourensia_cernua,Not_threatened,0.26905325299999999,26.86667,-103.98278,key4\r
1448,Carex_arctata,Not_threatened,2.4391453E-2,44.05000,-79.49139,key4\r
1449,Carex_hirtifolia,Not_threatened,1.2422519999999999E-2,44.05000,-79.49139,key4\r
1450,Carex_laxiflora,Not_threatened,4.0273899000000002E-2,44.05000,-79.49139,key4\r
1451,Carex_pedunculata,Not_threatened,-5.7158413999999998E-2,44.05000,-79.49139,key4\r
1452,Carex_pensylvanica,Not_threatened,8.8292606999999995E-2,44.05000,-79.49139,key4\r
1453,Carex_plantaginea,Not_threatened,2.4097552000000001E-2,44.05000,-79.49139,key4\r
1454,Carex_scabrata,Not_threatened,0.17824823100000001,44.05000,-79.49139,key4\r
1457,Commelina_erecta,Not_threatened,0.19166741900000001,38.52241,-90.56359,key4\r
1459,Calystegia_sepium,Not_threatened,0.70818505799999998,38.52241,-90.56359,key4\r
1461,Erysimum_capitatum,Not_threatened,-0.40859745200000003,38.52241,-90.56359,key4\r
1462,Lonicera_flava,Not_threatened,-0.11778303599999999,38.62700,-90.19940,key4\r
1463,Penstemon_pallidus,Not_threatened,-0.15272108700000001,38.52241,-90.56359,key4\r
1465,Potentilla_simplex,Not_threatened,8.3730893000000001E-2,38.52241,-90.56359,key4\r
1466,Silene_stellata,Not_threatened,0.216600453,38.50255,-90.62790,key4\r
1467,Tephrosia_virginiana,Not_threatened,0.19885085899999999,38.52241,-90.56359,key4\r
1470,Dendrobium_catenatum,Threatened,1.1314021110000001,29.45766,109.44394,key4\r
1471,Satyrium_nepalense_var._ciliatum,Not_threatened,0.179222152,27.83330,99.70170,key4\r
1472,Satyrium_nepalense_var._ciliatum,Not_threatened,0.241835684,27.83330,99.70170,key4\r
1473,Satyrium_nepalense_var._ciliatum,Not_threatened,0.28987265400000001,25.60000,100.26670,key4\r
1474,Satyrium_nepalense_var._ciliatum,Not_threatened,0.450336862,25.60000,100.26670,key4\r
1475,Armeria_maritima,Not_threatened,0.30873548200000001,58.27090,11.42080,key4\r
1476,Ranunculus_acris,Not_threatened,5.0430853999999997E-2,58.34090,11.54100,key4\r
1477,Eulophia_alta,Not_threatened,1.0986122890000001,26.17220,-81.37720,key4\r
1478,Eulophia_alta,Not_threatened,2.209382782,-3.10000,-60.01670,key4\r
1479,Nastanthus_scapigerus,No_data,0.123613956,-33.35470,-70.24980,key4\r
1480,Rhodophiala_rhodolirion,No_data,0.10894154,-33.35470,-70.24980,key4\r
1481,Erigeron_breviscapus,Threatened,1.2059708069999999,25.33644,102.79639,key4\r
1484,Melastoma_malabathricum,Not_threatened,0.165731508,23.51648,105.32372,key4\r
1485,Melastoma_malabathricum,Not_threatened,0.14053585699999999,23.51648,105.32372,key4\r
1486,Luculia_pinceana,Not_threatened,0.135801541,23.41667,104.93194,key4\r
1487,Luculia_pinceana,Not_threatened,7.4107971999999994E-2,23.41667,104.93194,key4\r
1488,Sisyrinchium_campestre,Not_threatened,5.4019329999999997E-2,42.70889,-96.57611,key4\r
1489,Sisyrinchium_campestre,Not_threatened,2.9509158000000001E-2,42.70889,-96.57611,key4\r
1490,Sisyrinchium_campestre,Not_threatened,-0.21268442100000001,42.70889,-96.57611,key4\r
1491,Sisyrinchium_campestre,Not_threatened,-0.120525838,42.70889,-96.57611,key4\r
1492,Gagea_lutea,Not_threatened,0.39803012999999998,44.08333,141.33300,key4\r
1493,Penstemon_roseus,No_data,-2.5598666999999999E-2,19.23333,-98.98278,key4\r
1494,Penstemon_roseus,No_data,3.3844178000000003E-2,19.28333,-98.23722,key4\r
1495,Colutea_arborescens_subsp._hispanica,No_data,1.3545456629999999,40.13333,-3.47444,key4\r
1496,Lobelia_chinensis,Not_threatened,1.1394342829999999,30.54245,114.42031,key4\r
1497,Arabidopsis_lyrata_subsp._petraea,Not_threatened,0.22738984200000001,63.21667,15.98278,key4\r
1498,Arabidopsis_lyrata_subsp._petraea,Not_threatened,0.327074474,63.21667,15.98278,key4\r
1499,Justicia_adhatoda,Not_threatened,2.1309208310000001,13.53350,77.03389,key4\r
1500,Primulina_lutea,No_data,0.93325353099999997,24.40359,111.56670,key4\r
1501,Primulina_lutea,No_data,0.693255073,24.40359,111.56670,key4\r
1502,Aquilaria_crassna,Threatened,0.16430305100000001,12.35000,102.49139,key4\r
1504,Glaucium_flavum,Not_threatened,0.53425402700000002,39.14861,26.24980,key4\r
1505,Telopea_mongaensis,Not_threatened,1.8349139E-2,-34.66667,150.38972,key4\r
1506,Telopea_speciosissima,Not_threatened,0.40198684400000001,-34.66667,150.71167,key4\r
1507,Telopea_speciosissima,Not_threatened,3.3336419999999999E-2,-34.66667,150.71167,key4\r
1508,Aloe_pruinosa,Threatened,-7.8167328999999994E-2,-29.60000,30.37278,key4\r
1509,Aloe_pruinosa,Threatened,3.9238479999999997E-3,-29.60000,30.37278,key4\r
1510,Aloe_pruinosa,Threatened,0.15627782000000001,-29.60000,30.37278,key4\r
1511,Sebaea_grandis,No_data,-0.219392525,-28.51333,28.40667,key4\r
1512,Anisodus_carniolicoides,Threatened,1.0643120129999999,28.40000,98.98300,key4\r
1513,Anisodus_luridus,Not_threatened,-0.139761942,29.76700,94.73300,key4\r
1515,Crocus_spp.,No_data,0.16912896299999999,44.50000,81.20000,key4\r
1516,Potentilla_simulatrix,Not_threatened,-0.62670208100000002,39.58000,115.43000,key4\r
1517,Potentilla_simulatrix,Not_threatened,-0.35066531000000001,39.58000,115.43000,key4\r
1518,Magnolia_coriacea,Threatened,1.7617153480000001,23.40650,104.25417,key4\r
1519,Oenothera_cespitosa,No_data,0.28012983800000002,43.63333,-110.52528,key4\r
1520,Oenothera_cespitosa,No_data,0.22841977699999999,43.63333,-110.52528,key4\r
1521,Oenothera_cespitosa,No_data,0.70865136699999998,38.66667,-109.49139,key4\r
1522,Oenothera_cespitosa,No_data,0.28821108400000001,38.66667,-109.49139,key4\r
1523,Ipomopsis_aggregata,Not_threatened,0.23180161399999999,38.95806,-106.99972,key4\r
1524,Ipomopsis_aggregata,Not_threatened,0,38.95806,-106.99972,key4\r
1525,Ipomopsis_aggregata,Not_threatened,-0.149531734,38.95806,-106.99972,key4\r
1526,Potentilla_pulcherrima,Not_threatened,-2.8170877E-2,38.95806,-106.99972,key4\r
1527,Potentilla_pulcherrima,Not_threatened,0.23361485100000001,38.95806,-106.99972,key4\r
1528,Potentilla_pulcherrima,Not_threatened,0,38.95806,-106.99972,key4\r
1529,Stenocereus_thurberi,Not_threatened,7.6936148999999995E-2,31.80472,-112.86417,key4\r
1530,Stenocereus_thurberi,Not_threatened,0.15672802699999999,31.80472,-112.86417,key4\r
1531,Stenocereus_thurberi,Not_threatened,8.3818476000000003E-2,31.80472,-112.86417,key4\r
1532,Stenocereus_thurberi,Not_threatened,0.31471020100000002,31.80472,-112.86417,key4\r
1533,Stenocereus_thurberi,Not_threatened,0.19671055000000001,31.80472,-112.86417,key4\r
1534,Stenocereus_thurberi,Not_threatened,-0.16737612099999999,29.56833,-111.08472,key4\r
1535,Stenocereus_thurberi,Not_threatened,0.47638140299999998,29.56833,-111.08472,key4\r
1536,Stenocereus_thurberi,Not_threatened,0.155360152,29.56833,-111.08472,key4\r
1537,Stenocereus_thurberi,Not_threatened,-5.3088040000000003E-2,29.56833,-111.08472,key4\r
1538,Stenocereus_thurberi,Not_threatened,1.4769925E-2,29.56833,-111.08472,key4\r
1539,Stenocereus_thurberi,Not_threatened,0.48876752000000001,29.56833,-111.08472,key4\r
1540,Stenocereus_thurberi,Not_threatened,0.84493976299999995,26.63667,-109.30500,key4\r
1541,Stenocereus_thurberi,Not_threatened,4.6433889999999998E-2,26.63667,-109.30500,key4\r
1542,Stenocereus_thurberi,Not_threatened,1.5542573390000001,26.63667,-109.30500,key4\r
1543,Stenocereus_thurberi,Not_threatened,0.61992795199999995,26.63667,-109.30500,key4\r
1544,Stenocereus_thurberi,Not_threatened,0.86913801899999998,26.63667,-109.30500,key4\r
1545,Stenocereus_thurberi,Not_threatened,0.87678752400000004,26.63667,-109.30500,key4\r
1546,Stenocereus_thurberi,Not_threatened,0.56960402399999999,26.63667,-109.30500,key4\r
1547,Stenocereus_thurberi,Not_threatened,0.891737153,26.63667,-109.30500,key4\r
1548,Stenocereus_thurberi,Not_threatened,1.2615736689999999,26.63667,-109.30500,key4\r
1549,Stenocereus_thurberi,Not_threatened,0.295090668,26.63667,-109.30500,key4\r
1550,Mimulus_luteus,No_data,0.182971786,-33.62444,-70.01694,key4\r
1551,Mimulus_luteus,No_data,-0.620568966,-33.62444,-70.01694,key4\r
1552,Atriplex_acanthocarpa,Not_threatened,0.106767975,26.66667,-103.76250,species\r
1553,Atriplex_acanthocarpa,Not_threatened,0.31365755899999997,26.66667,-103.76250,species\r
1554,Atriplex_acanthocarpa,Not_threatened,0.143100844,26.66667,-103.76250,species\r
1555,Atriplex_acanthocarpa,Not_threatened,0.259957524,26.66667,-103.76250,species\r
1556,Atriplex_canescens,Not_threatened,0.22024079199999999,26.66667,-103.76250,species\r
1557,Atriplex_canescens,Not_threatened,0.14403937,26.66667,-103.76250,species\r
1558,Atriplex_canescens,Not_threatened,0.29152084900000003,26.66667,-103.76250,species\r
1559,Atriplex_canescens,Not_threatened,0.102654154,26.66667,-103.76250,species\r
1560,Camellia_oleifera,Not_threatened,0.16988341200000001,28.01222,113.10167,key4\r
1561,Camellia_oleifera,Not_threatened,0.57054485799999999,28.01222,113.10167,key4\r
1562,Mertensia_fusiformis,Not_threatened,0.33647223700000001,38.97117,-107.01209,key4\r
1563,Mertensia_fusiformis,Not_threatened,0.69314718099999995,38.97117,-107.01209,key4\r
1564,Mertensia_fusiformis,Not_threatened,-0.3074847,38.97117,-107.01209,key4\r
1565,Mertensia_fusiformis,Not_threatened,0.247836164,38.97117,-107.01209,key4\r
1566,Mertensia_fusiformis,Not_threatened,0.27625337700000002,38.97117,-107.01209,key4\r
1567,Mertensia_fusiformis,Not_threatened,-0.23180161399999999,38.97117,-107.01209,key4\r
1568,Mertensia_fusiformis,Not_threatened,1.6739764340000001,38.97117,-107.01209,key4\r
1569,Mertensia_fusiformis,Not_threatened,5.4808236000000003E-2,38.97117,-107.01209,key4\r
1570,Mertensia_fusiformis,Not_threatened,0.19885085899999999,38.97117,-107.01209,key4\r
1571,Mertensia_fusiformis,Not_threatened,0.16907633,38.97117,-107.01209,key4\r
1572,Mertensia_fusiformis,Not_threatened,3.2789823000000003E-2,38.97117,-107.01209,key4\r
1573,Mertensia_fusiformis,Not_threatened,-0.51082562399999998,38.97117,-107.01209,key4\r
1574,Mertensia_fusiformis,Not_threatened,0.47000362899999998,38.95217,-106.99769,key4\r
1575,Magnolia_grandis,Threatened,-0.69314718099999995,22.68333,105.27083,key4\r
1576,Magnolia_hookeri,No_data,0.119664504,24.43335,98.58490,key4\r
1577,Magnolia_hookeri,No_data,-0.26399958800000001,24.43335,98.58490,key4\r
1578,Helianthemum_soongaricum,No_data,0.82767807400000004,39.10704,107.94277,key4\r
1583,Saussurea_laniceps,No_data,-0.249237757,28.43889,98.69472,key4\r
1584,Saussurea_laniceps,No_data,6.8225117000000002E-2,28.43889,98.69472,key4\r
1585,Saussurea_medusa,No_data,0.28488486800000001,28.43889,98.69472,key4\r
1586,Saussurea_medusa,No_data,0.26860592500000002,28.43889,98.69472,key4\r
1587,Saussurea_medusa,No_data,0.31563815000000001,28.43889,98.69472,key4\r
1588,Saussurea_medusa,No_data,0.33270575400000002,28.43889,98.69472,key4\r
1589,Prunus_armeniaca,No_data,0.92185872599999996,43.42993,83.26077,key4\r
1590,Gesneria_citrina,Threatened,0.413187154,18.33333,-66.76250,species\r
1591,Gesneria_cuneifolia,Threatened,9.1567194000000005E-2,18.33333,-66.76250,species\r
1592,Gesneria_pedunculosa,Not_threatened,0.35282137499999999,18.33333,-66.76250,species\r
1593,Gesneria_viridiflora_subsp._quisqueyana,Not_threatened,0.20763936499999999,19.50000,-70.33889,species\r
1594,Gesneria_reticulata,Not_threatened,2.3256862E-2,18.30000,-65.77944,species\r
1595,Gesneria_viridiflora_subsp._sintenisii,Not_threatened,4.8790163999999997E-2,18.30000,-65.79639,species\r
1596,Rhytidophyllum_asperum,Threatened,0.20223686599999999,18.08333,-71.50833,species\r
1597,Gesneria_leucomalla,No_data,0.14058195100000001,18.10000,-71.62694,species\r
1598,Gesneria_vernicosa,No_data,6.3513405999999994E-2,18.20000,-71.55917,species\r
1599,Nemophila_menziesii,Not_threatened,0.19105523699999999,38.32026,-123.05713,key4\r
1600,Nemophila_menziesii,Not_threatened,0,38.32026,-123.05713,key4\r
1601,Geranium_maculatum,Not_threatened,-1.37322228,39.89481,-82.91407,key4\r
1602,Geranium_maculatum,Not_threatened,-5.7213483000000002E-2,39.89481,-82.91407,key4\r
1603,Capparis_brevispina,Threatened,0.47762755400000001,12.66667,79.89806,key4\r
1604,Capparis_zeylanica,Not_threatened,0.50147976100000002,12.66667,79.89806,key4\r
1605,Derris_ovalifolia,Threatened,0.47957307999999998,12.66667,79.89806,key4\r
1606,Eugenia_roxburghii,Not_threatened,0.34830669399999997,12.66667,79.89806,key4\r
1607,Glycosmis_pentaphylla,Not_threatened,0.47608267500000001,12.66667,79.89806,key4\r
1608,Ixora_pavetta,Not_threatened,0.50554856699999995,12.66667,79.89806,key4\r
1609,Lepisanthes_tetraphylla,Not_threatened,0.75377180200000005,12.66667,79.89806,key4\r
1610,Memecylon_umbellatum,Threatened,0.37729423099999998,12.66667,79.89806,key4\r
1612,Walsura_temrifolia,No_data,1.386294361,12.66667,79.89806,key4\r
1613,Hedysarum_scoparium,Threatened,-0.26438651000000002,39.35000,100.11861,key4\r
1616,Anacamptis_papilionacea,Not_threatened,1.7446789380000001,39.78333,16.30500,key4\r
1617,Orchis_anthropophora,Not_threatened,1.789481973,39.78333,16.30500,key4\r
1618,Orchis_italica,Not_threatened,1.7000188599999999,39.78333,16.30500,key4\r
1619,Malus_sieversii,Threatened,0.58825736399999995,43.42993,83.26077,key4\r
1620,Malus_sieversii,Threatened,0.33962100099999998,43.42993,83.26077,key4\r
1621,Symphyotrichum_sericeum,Not_threatened,0.528844129,50.01667,-96.89806,key4\r
1622,Symphyotrichum_sericeum,Not_threatened,4.3485111999999999E-2,50.01667,-96.89806,key4\r
1625,Trillium_recurvatum,Not_threatened,0.33647223700000001,43.08993,-88.71089,key4\r
1626,Trillium_recurvatum,Not_threatened,0.281412459,43.08993,-88.71089,key4\r
1627,Trillium_recurvatum,Not_threatened,0.82331927900000001,43.08993,-88.71089,key4\r
1628,Eremosparton_songoricum,Threatened,-6.7735400000000002E-4,46.51806,88.55917,key4\r
1629,Eremosparton_songoricum,Threatened,0.85721984399999995,46.51806,88.55917,key4\r
1630,Psychotria_longipedunculata,Threatened,1.0741666949999999,-20.80194,-42.86417,key4\r
1631,Gymnadenia_conopsea,Not_threatened,0.27525955200000002,62.66667,11.84722,species\r
1632,Gymnadenia_conopsea,Not_threatened,0.38415532200000002,62.66667,11.84722,species\r
1633,Gymnadenia_conopsea,Not_threatened,0.184104883,63.05000,9.05083,species\r
1634,Gymnadenia_conopsea,Not_threatened,0.142160331,63.05000,9.05083,species\r
1635,Dactylorhiza_lapponica,Not_threatened,0.86113891200000003,63.05000,9.05083,key4\r
1636,Erythronium_grandiflorum,Not_threatened,-0.44393138900000001,38.87610,-107.10251,key4\r
1637,Erythronium_grandiflorum,Not_threatened,-5.6850640000000001E-3,38.87610,-107.10251,key4\r
1638,Erythronium_grandiflorum,Not_threatened,8.6530492000000001E-2,38.87610,-107.10251,key4\r
1639,Erythronium_grandiflorum,Not_threatened,0.33066389499999999,38.87610,-107.10251,key4\r
1640,Erythronium_grandiflorum,Not_threatened,0.34830669399999997,38.87610,-107.10251,key4\r
1641,Erythronium_grandiflorum,Not_threatened,1.3639393E-2,38.87610,-107.10251,key4\r
1642,Erythronium_grandiflorum,Not_threatened,1.8313686069999999,38.87610,-107.10251,key4\r
1643,Erythronium_grandiflorum,Not_threatened,0.91563905400000001,38.87610,-107.10251,key4\r
1644,Erythronium_grandiflorum,Not_threatened,0.47550318499999999,38.87610,-107.10251,key4\r
1645,Erythronium_grandiflorum,Not_threatened,1.0255871539999999,38.87610,-107.10251,key4\r
1646,Erythronium_grandiflorum,Not_threatened,0.66254173100000002,38.87610,-107.10251,key4\r
1647,Erythronium_grandiflorum,Not_threatened,0.48931941899999998,38.87610,-107.10251,key4\r
1648,Erythronium_grandiflorum,Not_threatened,0.234370614,38.87610,-107.10251,key4\r
1649,Erythronium_grandiflorum,Not_threatened,0.452156636,38.87610,-107.10251,key4\r
1650,Erythronium_grandiflorum,Not_threatened,0.263857917,38.87610,-107.10251,key4\r
1651,Erythronium_grandiflorum,Not_threatened,0.72141761400000004,38.87610,-107.10251,key4\r
1652,Erythronium_grandiflorum,Not_threatened,0.249563114,38.87610,-107.10251,key4\r
1653,Erythronium_grandiflorum,Not_threatened,0.14005567099999999,38.87610,-107.10251,key4\r
1654,Erythronium_grandiflorum,Not_threatened,0.63344867999999999,38.87610,-107.10251,key4\r
1655,Erythronium_grandiflorum,Not_threatened,0.734316941,38.87610,-107.10251,key4\r
1656,Erythronium_grandiflorum,Not_threatened,0.61413984799999999,38.87610,-107.10251,key4\r
1657,Erythronium_grandiflorum,Not_threatened,2.2881963559999998,38.87610,-107.10251,key4\r
1658,Erythronium_grandiflorum,Not_threatened,2.2368337149999999,38.87610,-107.10251,key4\r
1659,Erythronium_grandiflorum,Not_threatened,0.57471960700000002,38.87610,-107.10251,key4\r
1660,Anagyris_foetida,Not_threatened,0.52275419499999998,39.49374,-6.06792,key4\r
1661,Anagyris_foetida,Not_threatened,0.72648360099999998,39.49374,-6.06792,key4\r
1662,Anagyris_foetida,Not_threatened,-0.22510883200000001,39.49374,-6.06792,key4\r
1663,Anagyris_foetida,Not_threatened,-6.0356801000000002E-2,39.49374,-6.06792,key4\r
1664,Bulbine_bulbosa,No_data,0.23138535599999999,-30.49667,151.50664,key4\r
1665,Bulbine_bulbosa,No_data,0.196194059,-30.49667,151.50664,key4\r
1666,Senna_multijuga,Not_threatened,0.14156063299999999,-22.45000,-44.61000,key4\r
1667,Iris_ensata,Threatened,0.169899037,30.39600,119.46400,key4\r
1669,Cypripedium_flavum,Threatened,2.3968957720000001,31.03081,103.17963,key4\r
1670,Cypripedium_tibeticum,Not_threatened,2.3434070880000002,31.03081,103.17963,key4\r
1671,Cypripedium_bardolphianum,Threatened,1.9061698199999999,31.03081,103.17963,key4\r
1672,Cypripedium_plectrochilum,Threatened,0.83624802399999998,31.03081,103.17963,key4\r
1673,Cypripedium_henryi,Threatened,1.0033021090000001,31.03081,103.17963,key4\r
1674,Ajuga_boninsimae,Threatened,0.32995308499999998,27.05985,142.20959,key4\r
1676,Ardisia_sieboldii,Not_threatened,2.0553739900000001,27.05985,142.20959,key4\r
1679,Calanthe_hattorii,Threatened,3.5263292019999999,27.05985,142.20959,key4\r
1680,Callicarpa_glabra,Threatened,-0.24296367899999999,27.05985,142.20959,key4\r
1681,Callicarpa_subpubescens,Not_threatened,4.6065176999999999E-2,27.05985,142.20959,key4\r
1682,Calophyllum_inophyllum,Not_threatened,1.2164503259999999,27.05985,142.20959,key4\r
1683,Cirsium_boninense,Threatened,0.65058945000000001,27.05985,142.20959,key4\r
1684,Clematis_boninensis,No_data,0.44516128300000002,27.05985,142.20959,key4\r
1685,Crepidiastrum_grandicollum,Threatened,6.8996443000000005E-2,27.05985,142.20959,key4\r
1686,Crocosmia_x_crocosmiiflora,No_data,0.142586343,27.05985,142.20959,key4\r
1687,Diospyros_vera,No_data,-4.8550588999999998E-2,27.05985,142.20959,key4\r
1688,Distylium_lepidotum,Not_threatened,0.14525701299999999,27.05985,142.20959,key4\r
1689,Dodonaea_viscosa_subsp._angustifolia,Not_threatened,0.69314718099999995,27.05985,142.20959,key4\r
1691,Drypetes_integerrima,Threatened,1.771964842,27.05985,142.20959,key4\r
1692,Elaeagnus_rotundata,Threatened,0.95203281399999995,27.05985,142.20959,key4\r
1693,Elaeocarpus_photiniifolia,No_data,0.95617807300000002,27.05985,142.20959,key4\r
1694,Eulophia_graminea,Threatened,1.4903794340000001,27.05985,142.20959,key4\r
1695,Eurya_boninensis,Threatened,0.35475156299999999,27.05985,142.20959,key4\r
1696,Gardenia_boninensis,Threatened,0.96617175,27.05985,142.20959,key4\r
1697,Geniostoma_fagraeoides,No_data,0.308265805,27.05985,142.20959,key4\r
1698,Goodyera_boninensis,Threatened,1.0115881849999999,27.05985,142.20959,key4\r
1699,Leptopetalum_grayi,No_data,0.14935210900000001,27.05985,142.20959,key4\r
1700,Talipariti_glabrum,No_data,1.295006364,27.05985,142.20959,key4\r
1701,Hibiscus_tiliaceus,Not_threatened,0.60121005599999999,27.05985,142.20959,key4\r
1702,Ilex_mertensii,Threatened,0.25642029799999999,27.05985,142.20959,key4\r
1703,Ixeris_longirostra,Threatened,1.242652E-2,27.05985,142.20959,key4\r
1706,Ligustrum_micranthum,No_data,0.550136336,27.05985,142.20959,key4\r
1707,Luisia_boninensis,Threatened,1.0033301100000001,27.05985,142.20959,key4\r
1708,Lysimachia_mauritiana_var._rubida,Not_threatened,0.46313006000000001,27.05985,142.20959,key4\r
1709,Machilus_boninensis,Not_threatened,1.829954015,27.05985,142.20959,key4\r
1710,Machilus_kobu,Not_threatened,0.46935909199999998,27.05985,142.20959,key4\r
1711,Melastoma_tetramerum,Threatened,-1.0741424049999999,27.05985,142.20959,key4\r
1712,Melicope_nishimurae,Threatened,0.14765758300000001,27.05985,142.20959,key4\r
1713,Melicope_nishimurae,Threatened,0.63788813799999999,27.05985,142.20959,key4\r
1714,Myrsine_maximowiczii,Threatened,0.24694408000000001,27.05985,142.20959,key4\r
1715,Neolitsea_aurata,Not_threatened,-0.44361457199999998,27.05985,142.20959,key4\r
1716,Osmanthus_insularis,Threatened,0.291680094,27.05985,142.20959,key4\r
1717,Osteomeles_schwerinae,No_data,-6.4226751999999998E-2,27.05985,142.20959,key4\r
1718,Photinia_wrightiana,Threatened,4.0200903000000003E-2,27.05985,142.20959,key4\r
1719,Pittosporum_boninense,Threatened,1.289092221,27.05985,142.20959,key4\r
1720,Platanthera_boninensis,Threatened,0.310154928,27.05985,142.20959,key4\r
1722,Psychotria_homalosperma,Threatened,2.1731570260000002,27.05985,142.20959,key4\r
1723,Rhaphiolepis_indica_var._umbellata,Threatened,0.89265685100000003,27.05985,142.20959,key4\r
1725,Santalum_boninense,Threatened,1.3894943639999999,27.05985,142.20959,key4\r
1726,Scaevola_taccada,Not_threatened,0.77318988799999999,27.05985,142.20959,key4\r
1727,Scutellaria_longituba,Threatened,1.1336750369999999,27.05985,142.20959,key4\r
1728,Smilax_china,Not_threatened,3.5531903929999999,27.05985,142.20959,key4\r
1729,Solanum_americanum,Not_threatened,0.18858254699999999,27.05985,142.20959,key4\r
1730,Stachyurus_praecox,No_data,0.37647041799999997,27.05985,142.20959,key4\r
1731,Symplocos_pergracilis,Threatened,0.918031602,27.05985,142.20959,key4\r
1732,Vaccinium_boninense,Threatened,-6.0419897E-2,27.05985,142.20959,key4\r
1733,Cornus_kousa_subsp._kousa,Not_threatened,-4.7819895000000001E-2,27.05985,142.20959,key4\r
1734,Vitex_trifolia_subsp._litoralis,Not_threatened,0.11778303599999999,27.05985,142.20959,key4\r
1735,Wikstroemia_pseudoretusa,Threatened,4.2918519999999996E-3,27.05985,142.20959,key4\r
1736,Acanthorrhinum_rivas-martinezii,Threatened,0.88583273100000004,40.45799,-5.04882,key4\r
1737,Rhabdothamnus_solandri,Not_threatened,6.4538364000000001E-2,-35.91018,175.10784,key4\r
1738,Rhabdothamnus_solandri,Not_threatened,0.80155618299999998,-36.24842,174.57336,key4\r
1739,Gaylussacia_brasiliensis,Not_threatened,0.63206767399999997,-19.33333,-48.00000,species\r
1740,Astragalus_exscapus,Threatened,0.90793477099999997,51.37611,11.03389,key4\r
1741,Astragalus_exscapus,Threatened,0.98606413500000001,51.37306,11.08472,key4\r
1742,Astragalus_exscapus,Threatened,1.22250236,51.36611,11.03389,key4\r
1743,Astragalus_exscapus,Threatened,0.191623772,51.36750,11.06778,key4\r
1744,Aristolochia_baetica,Threatened,-0.28171005300000002,37.28333,-6.42361,key4\r
1745,Aristolochia_baetica,Threatened,-0.245466554,37.28333,-6.42361,key4\r
1746,Cybistax_antisyphilitica,Not_threatened,2.7080502009999998,-20.79361,-42.84722,key4\r
1747,Xyris_tennesseensis,Threatened,0.174353387,33.72639,-85.96583,key4\r
1748,Centaurium_erythraea,Not_threatened,0.167868832,51.10231,2.60655,key4\r
1749,Centaurium_erythraea,Not_threatened,0.14257230200000001,51.10231,2.60655,key4\r
1750,Centaurium_littorale,Threatened,8.0042708000000004E-2,51.10231,2.60655,key4\r
1751,Centaurium_littorale,Threatened,0.15239987699999999,51.10231,2.60655,key4\r
1752,Centaurium_pulchellum,Not_threatened,7.7098036999999994E-2,51.10231,2.60655,key4\r
1753,Centaurium_pulchellum,Not_threatened,8.8381745999999997E-2,51.10231,2.60655,key4\r
1754,Seemannia_sylvatica,Not_threatened,-0.28818194699999999,-21.63333,-57.66056,key4\r
1755,Psychotria_carthagenensis,Not_threatened,8.0042708000000004E-2,-19.15556,-48.38972,key4\r
1756,Oxalis_glabra,Not_threatened,-9.0151096999999999E-2,-33.93244,18.86417,key4\r
1757,Oxalis_pes-caprae,No_data,0.70841465299999995,-33.93244,18.86417,key4\r
1758,Oxalis_purpurea,Not_threatened,0.56723971299999998,-33.93244,18.86417,key4\r
1759,Oxalis_tenuifolia,Not_threatened,-0.175890666,-33.93244,18.86417,key4\r
1760,Balsamorhiza_deltoidea,Not_threatened,1.1775299560000001,46.92724,-122.73322,key4\r
1761,Balsamorhiza_deltoidea,Not_threatened,1.0206021380000001,46.91526,-122.70686,key4\r
1762,Balsamorhiza_deltoidea,Not_threatened,1.499531572,47.10583,-122.50431,key4\r
1769,Ipomoea_bahiensis,No_data,0.29152084900000003,-3.71189,-38.64389,key4\r
1770,Pouteria_torta,Not_threatened,1.644253323,-18.95000,-48.20333,key4\r
1771,Canna_indica,Not_threatened,1.4586150229999999,-31.06778,-64.30500,key4\r
1772,Narcissus_hispanicus,No_data,0.260531083,37.89296,-1.21287,key4\r
1773,Bulbophyllum_variegatum,Not_threatened,1.6512732539999999,-21.00000,55.66083,key4\r
1774,Abronia_alpina,Threatened,-0.23001643099999999,36.35000,-118.25417,key4\r
1775,Solanum_peruvianum,Not_threatened,-0.22410313300000001,-10.14973,-77.44327,key4\r
1776,Rhododendron_aureum,Not_threatened,-0.19237189299999999,43.55000,142.88111,key4\r
1777,Incarvillea_sinensis,Not_threatened,2.9852963E-2,36.23231,103.09132,key4\r
1778,Pedicularis_monbeigiana,Not_threatened,0.97246174100000005,27.86667,99.67778,key4\r
1779,Pedicularis_monbeigiana,Not_threatened,0.311277629,27.86667,99.67778,key4\r
1780,Pedicularis_monbeigiana,Not_threatened,0.64103053099999996,27.86667,99.67778,key4\r
1781,Pedicularis_monbeigiana,Not_threatened,0.27443647599999998,27.86667,99.67778,key4\r
1782,Iris_tectorum,No_data,0.14818973899999999,48.26667,120.40444,key4\r
1783,Camellia_azalea,Threatened,0.69314718099999995,22.14759,111.89924,key4\r
1784,Camellia_azalea,Threatened,0.59783700100000003,22.14759,111.89924,key4\r
1785,Ammopiptanthus_mongolicus,Threatened,0.414205871,40.85000,89.18639,key4\r
1786,Ammopiptanthus_mongolicus,Threatened,0.45671314899999998,40.85000,89.18639,key4\r
1787,Ammopiptanthus_mongolicus,Threatened,0.22558872299999999,40.85000,89.18639,key4\r
1788,Ammopiptanthus_mongolicus,Threatened,0.33982124899999999,40.85000,89.18639,key4\r
1789,Impatiens_lateristachys,No_data,-0.33314444700000001,29.53333,103.33889,key4\r
1790,Clerodendrum_villosum,Not_threatened,0.96263334199999995,-0.47861,-90.16806,key4\r
1791,Darlingtonia_californica,Not_threatened,0.54859008799999998,41.27361,-122.69472,key4\r
1792,Darlingtonia_californica,Not_threatened,0.606186644,41.27738,-122.69472,key4\r
1793,Darlingtonia_californica,Not_threatened,0.91855273999999998,41.30041,-122.67778,key4\r
1794,Darlingtonia_californica,Not_threatened,0.95094843900000003,41.33557,-122.52528,key4\r
1795,Darlingtonia_californica,Not_threatened,0.720157673,41.33587,-122.52528,key4\r
1796,Euphorbia_baetica,No_data,-4.1672696000000002E-2,37.33333,-5.79639,key4\r
1797,Euphorbia_nicaeensis,No_data,3.1446569999999999E-3,36.78333,-5.40667,key4\r
1798,Trichocentrum_pumilum,Threatened,1.607213217,-21.40000,-48.50833,key4\r
1799,Myrmecophila_christinae,No_data,2.0293171559999998,21.26667,-89.55917,key4\r
1800,Schefflera_heptaphylla,Not_threatened,0.231776698,23.18333,113.35583,key4\r
1801,Cereus_repandus,Not_threatened,-0.12999806999999999,12.25992,-69.05638,key4\r
1802,Stenocereus_griseus,Not_threatened,-1.6689012999999999E-2,12.25992,-69.05638,key4\r
1803,Davilla_kunthii,No_data,-9.3259867999999996E-2,-3.04556,-58.76250,key4\r
1804,Daphne_gnidium,No_data,1.2484244550000001,39.74316,2.81961,key4\r
1805,Daphne_rodriguezii,Threatened,3.8189301869999999,39.94963,4.11045,key4\r
1806,Canarina_canariensis,Threatened,6.3809167E-2,28.56635,-16.17280,key4\r
1807,Tritoniopsis_revoluta,Not_threatened,1.33220356,-34.00920,19.78549,key4\r
1808,Tritoniopsis_revoluta,Not_threatened,0.46994604400000001,-34.00920,19.78549,key4\r
1809,Lasthenia_fremontii,Not_threatened,5.3578479999999998E-2,38.31012,-121.83028,key4\r
1810,Heliconia_metallica,No_data,0.36422336199999999,-12.35556,-70.71167,key4\r
1811,Heliconia_metallica,No_data,0.15147556600000001,-12.35556,-70.71167,key4\r
1812,Aechmea_distichantha,Not_threatened,-0.47000362899999998,-25.23167,-49.20333,key4\r
1813,Myristica_dactyloides,Threatened,0.17645643699999999,11.91222,77.18639,key4\r
1814,Aegle_marmelos,Threatened,-0.63240588499999995,27.33333,75.32194,key4\r
1815,Gymnadenia_conopsea,Not_threatened,0.150566646,62.66667,11.84722,species\r
1816,Gymnadenia_conopsea,Not_threatened,0.24675779,62.66667,11.84722,species\r
1817,Impatiens_latifolia,No_data,0.64185388600000004,10.13333,77.18611,key4\r
1818,Cattleya_wallisii,No_data,3.1927305449999999,-2.59053,-60.01694,key4\r
1819,Galearis_spathulata,Not_threatened,0.483010936,32.80000,104.47417,key4\r
1820,Ponerorchis_chusua,Not_threatened,0.70464156,32.80000,104.47417,key4\r
1821,Thymbra_capitata,Not_threatened,0.45459024100000001,39.07694,26.54222,key4\r
1822,Thymbra_capitata,Not_threatened,0.18712540999999999,39.05833,26.51583,key4\r
1823,Thymbra_capitata,Not_threatened,0.46088605100000002,39.05000,26.54222,key4\r
1824,Thymbra_capitata,Not_threatened,0.17113004300000001,39.03778,26.61000,key4\r
1825,Thymbra_capitata,Not_threatened,0.49693226899999998,39.12167,26.50833,key4\r
1826,Thymbra_capitata,Not_threatened,0.34632144300000001,39.04667,26.61000,key4\r
1827,Thymbra_capitata,Not_threatened,0.27729453199999998,39.09389,26.54222,key4\r
1828,Thymbra_capitata,Not_threatened,0.82321681599999996,39.08222,26.57611,key4\r
1829,Chaetanthera_renifolia,No_data,0.59204183399999999,-33.31839,-70.27111,key4\r
1830,Chaetanthera_renifolia,No_data,0.58578749299999999,-33.29700,-70.22028,key4\r
1831,Oxalis_eckloniana,No_data,2.1357944780000002,-33.47220,19.03859,key4\r
1832,Oxalis_nidulans,No_data,0.41197978899999999,-33.28530,19.31930,key4\r
1833,Palicourea_demissa,No_data,0.174186707,8.63333,-71.03389,key4\r
1834,Palicourea_demissa,No_data,0.558516283,8.63333,-71.03389,key4\r
1835,Satyrium_pumilum,Not_threatened,0.90570862299999999,-30.31577,18.08209,key4\r
1836,Cynanchum_otophyllum,Not_threatened,2.367123614,26.01670,104.26094,key4\r
1837,Dayaoshania_cotinifolia,Threatened,1.133703608,23.93350,110.08000,key4\r
1838,Potentilla_tanacetifolia,Not_threatened,0.20038251100000001,42.51667,116.05083,key4\r
1839,Potentilla_tanacetifolia,Not_threatened,0.10195157000000001,42.51667,116.05083,key4\r
1840,Psilopeganum_sinense,Threatened,-0.20430046399999999,30.54245,114.42031,key4\r
1841,Eremosparton_songoricum,Threatened,0.85721984399999995,46.51667,88.55917,key4\r
1842,Calycanthus_chinensis,Threatened,7.8471614999999995E-2,29.51667,119.91500,key4\r
1843,Gelsemium_sempervirens,Not_threatened,-0.75198768100000002,33.99194,-83.50833,key4\r
1844,Gelsemium_sempervirens,Not_threatened,1.605860091,33.92806,-83.33889,key4\r
1845,Gelsemium_sempervirens,Not_threatened,0.84541639199999996,33.89583,-83.35583,key4\r
1846,Hippocrepis_emerus_subsp._emerus,Not_threatened,-0.480803747,40.81667,14.33889,key4\r
1847,Lobelia_cardinalis,Not_threatened,0.54367596600000001,45.99914,-78.48272,key4\r
1849,Amphirrhox_longifolia,Not_threatened,0.59783700100000003,-7.80000,-35.35556,key4\r
1850,Paypayrola_blanchetiana,Not_threatened,2.091864062,-7.80000,-35.35556,key4\r
1851,Tibouchina_pulchra,No_data,2.1972245770000001,-23.31667,-45.08472,key4\r
1852,Tibouchina_pulchra,No_data,8.4899444000000004E-2,-23.33333,-44.84722,key4\r
1853,Centaurium_erythraea,Not_threatened,2.2231218000000001E-2,51.09308,2.64531,key4\r
1854,Centaurium_erythraea,Not_threatened,6.7205168999999995E-2,51.09308,2.64531,key4\r
1855,Embothrium_coccineum,Not_threatened,1.32175584,-41.15000,-71.25417,key4\r
1856,Embothrium_coccineum,Not_threatened,2.7080502009999998,-41.11667,-71.22028,key4\r
1857,Embothrium_coccineum,Not_threatened,0.62860865899999996,-41.16667,-71.42361,key4\r
1858,Embothrium_coccineum,Not_threatened,1.609437912,-41.13333,-71.44056,key4\r
1859,Embothrium_coccineum,Not_threatened,1.815289967,-41.56667,-71.77944,key4\r
1860,Embothrium_coccineum,Not_threatened,-0.916290732,-41.11667,-73.16944,key4\r
1861,Embothrium_coccineum,Not_threatened,0.86750056799999997,-40.66667,-72.15250,key4\r
1862,Ranunculus_weyleri,Threatened,0.26827167899999999,39.76667,3.33889,key4\r
1863,Babiana_avicularis,Threatened,1.5428437E-2,-32.43389,18.33833,key4\r
1864,Babiana_hirsuta,Threatened,0.67892459299999997,-32.14644,18.30656,key4\r
1865,Babiana_hirsuta,Threatened,0.128575414,-32.75097,18.17078,key4\r
1866,Babiana_ringens,No_data,5.2760808999999999E-2,-34.33844,21.23694,key4\r
1867,Babiana_ringens,No_data,0.20327753100000001,-33.51900,18.47314,key4\r
1868,Byrsonima_lucida,Not_threatened,0.39566110799999998,25.67924,-80.27811,key4\r
1869,Byrsonima_lucida,Not_threatened,1.3145873509999999,25.67924,-80.27811,key4\r
1870,Byrsonima_lucida,Not_threatened,0.38604702200000002,25.63437,-80.34012,key4\r
1871,Byrsonima_lucida,Not_threatened,0.38097408799999999,25.60713,-80.39928,key4\r
1872,Byrsonima_lucida,Not_threatened,0.63598876699999995,25.59918,-80.39509,key4\r
1873,Byrsonima_lucida,Not_threatened,0.36854451900000001,25.48946,-80.45421,key4\r
1874,Byrsonima_lucida,Not_threatened,0.26531355200000001,25.43933,-80.50633,key4\r
1875,Eriobotrya_japonica,Threatened,2.004593651,32.53333,114.35583,key4\r
1876,Psychotria_carthagenensis,Not_threatened,0.67847699100000003,-20.49944,-54.61000,key4\r
1877,Psychotria_carthagenensis,Not_threatened,0.96825047099999995,-20.49944,-54.61000,key4\r
1878,Psychotria_carthagenensis,Not_threatened,-0.45953232900000002,-20.42806,-54.72861,key4\r
1879,Psychotria_carthagenensis,Not_threatened,-0.188163832,-20.42806,-54.72861,key4\r
1880,Psychotria_carthagenensis,Not_threatened,0.77566820400000003,-20.45000,-54.55917,key4\r
1881,Psychotria_carthagenensis,Not_threatened,1.570598079,-20.45000,-54.55917,key4\r
1882,Erysimum_popovii,No_data,0.41586640800000002,37.54248,-3.13769,key4\r
1883,Erysimum_popovii,No_data,-0.37749614599999998,37.13114,-3.48691,key4\r
1884,Erysimum_popovii,No_data,0.54167799500000002,37.74446,-3.84510,key4\r
1885,Erysimum_popovii,No_data,0.62779942499999997,37.74565,-3.84541,key4\r
1886,Erysimum_popovii,No_data,0.208343786,37.22124,-3.30621,key4\r
1887,Erysimum_popovii,No_data,0.516368622,37.74394,-3.86125,key4\r
1888,Erysimum_popovii,No_data,0.117116652,37.33266,-3.51546,key4\r
1889,Erysimum_popovii,No_data,0.40569112200000002,37.75874,-3.84977,key4\r
1890,Erysimum_popovii,No_data,0.44462923199999999,37.75964,-3.84973,key4\r
1891,Erysimum_popovii,No_data,0.18271306400000001,37.50675,-3.18300,key4\r
1892,Erysimum_popovii,No_data,5.7764595000000002E-2,37.32014,-3.55249,key4\r
1893,Erysimum_popovii,No_data,0.21765072999999999,37.32566,-3.53232,key4\r
1894,Erysimum_popovii,No_data,0.19013962000000001,37.29959,-3.52269,key4\r
1895,Parrya_nudicaulis,Not_threatened,1.386294361,65.46667,-145.42361,key4\r
1896,Craigia_yunnanensis,Threatened,1.591059191,23.37300,104.77700,key4\r
1897,Brunsvigia_litoralis,Threatened,2.432701571,-33.77072,25.52980,key4\r
1898,Trifolium_dasyphyllum,Not_threatened,0.79108471599999997,39.26471,-106.14223,key4\r
1899,Trifolium_dasyphyllum,Not_threatened,-0.41511720200000002,39.26471,-106.14223,key4\r
1900,Trifolium_parryi,Not_threatened,0.79108471599999997,39.26471,-106.14223,key4\r
1901,Trifolium_parryi,Not_threatened,-0.41511720200000002,39.26471,-106.14223,key4\r
1902,Rhamnus_lycioides_subsp._oleoides,Not_threatened,-1.488077055,39.38333,2.84722,key4\r
1903,Rhamnus_lycioides_subsp._oleoides,Not_threatened,0.31287232100000001,39.73333,2.71167,key4\r
1904,Aconitum_kusnezoffii,Threatened,2.0654779000000002E-2,39.95892,115.45750,key4\r
1905,Limonium_otolepis,No_data,-0.59028354500000002,44.13333,86.11861,key4\r
1906,Phaius_delavayi,Threatened,1.386294361,32.78333,104.25389,key4\r
1907,Phaius_delavayi,Threatened,1.9740810259999999,32.78333,104.25389,key4\r
1908,Corydalis_ambigua,No_data,0.31994293499999998,42.66667,141.61000,key4\r
1909,Corydalis_ambigua,No_data,0.144249609,42.66667,141.61000,key4\r
1910,Corydalis_ambigua,No_data,0.52129692400000005,42.66667,141.61000,key4\r
1911,Corydalis_ambigua,No_data,0.34830669399999997,42.66667,141.61000,key4\r
1912,Corydalis_ambigua,No_data,2.0794415420000001,42.66667,141.61000,key4\r
1913,Opuntia_monacantha,Not_threatened,-0.74090161200000004,-27.67306,-48.47194,key4\r
1914,Duperrea_pavettifolia,Not_threatened,2.37984967,21.92667,101.25000,key4\r
1915,Duperrea_pavettifolia,Not_threatened,2.8025830780000001,21.92667,101.25000,key4\r
1916,Oldenlandia_pulcherrima,No_data,0.35382187500000001,23.90000,116.61000,key4\r
1917,Oldenlandia_pulcherrima,No_data,0.38272562100000002,23.90000,116.61000,key4\r
1918,Hedychium_yunnanense,Not_threatened,0.33164519599999998,25.13333,102.76250,key4\r
1919,Narcissus_serotinus,Not_threatened,0.214409871,38.51215,-7.31720,key4\r
1920,Narcissus_serotinus,Not_threatened,-1.7857616999999999E-2,38.51188,-7.32451,key4\r
1921,Narcissus_serotinus,Not_threatened,0.20763936499999999,38.51271,-7.32177,key4\r
1922,Vaccinium_uliginosum,Threatened,0.28886062299999998,50.24444,5.77944,key4\r
1923,Vaccinium_uliginosum,Threatened,0.30918827799999998,50.24444,5.77944,key4\r
1924,Vaccinium_uliginosum,Threatened,0.361184534,50.22278,5.67778,key4\r
1925,Vaccinium_uliginosum,Threatened,0.205443974,50.24444,5.76250,key4\r
1926,Cordia_lutea,Not_threatened,1.297030224,-0.47861,-90.16806,key4\r
1927,Cuphea_melvilla,Not_threatened,-1.1130010260000001,-19.17083,-48.38972,key4\r
1928,Gentiana_stylophora,No_data,0.82140832799999997,28.53001,83.22265,key4\r
1929,Gentiana_stylophora,No_data,0.108217279,28.53001,83.22265,key4\r
1930,Gentiana_stylophora,No_data,0.20985980200000001,29.64913,94.36149,key4\r
1931,Gentiana_stylophora,No_data,0.306176595,29.64913,94.36149,key4\r
1932,Clarkia_xantiana,Not_threatened,6.7252226999999998E-2,35.59118,-118.52769,key4\r
1933,Clarkia_xantiana,Not_threatened,4.9655589999999999E-2,35.58833,-118.51771,key4\r
1934,Clarkia_xantiana,Not_threatened,7.0043843999999994E-2,35.58833,-118.51771,key4\r
1935,Clarkia_xantiana,Not_threatened,4.5368604999999999E-2,35.58833,-118.51771,key4\r
1936,Clarkia_xantiana,Not_threatened,-7.6628729999999997E-3,35.53468,-118.64905,key4\r
1937,Clarkia_xantiana,Not_threatened,0.19854439199999999,35.53460,-118.65456,key4\r
1938,Clarkia_xantiana,Not_threatened,7.3292864999999999E-2,35.53460,-118.65456,key4\r
1939,Clarkia_xantiana,Not_threatened,0.103184236,35.53460,-118.65456,key4\r
1940,Clarkia_xantiana,Not_threatened,0.30086907699999998,35.59118,-118.52769,key4\r
1941,Clarkia_xantiana,Not_threatened,0.11905936,35.59118,-118.52769,key4\r
1942,Clarkia_xantiana,Not_threatened,0.110456996,35.59118,-118.52769,key4\r
1943,Clarkia_xantiana,Not_threatened,0.17215443899999999,35.59118,-118.52769,key4\r
1944,Clarkia_xantiana,Not_threatened,3.1104219999999998E-3,35.59118,-118.52769,key4\r
1945,Clarkia_xantiana,Not_threatened,0.158923959,35.59118,-118.52769,key4\r
1946,Clarkia_xantiana,Not_threatened,0,35.59118,-118.52769,key4\r
1947,Clarkia_xantiana,Not_threatened,3.2655963000000003E-2,35.59118,-118.52769,key4\r
1948,Clarkia_xantiana,Not_threatened,2.4033199000000002E-2,35.59118,-118.52769,key4\r
1949,Clarkia_xantiana,Not_threatened,9.1318158999999996E-2,35.59118,-118.52769,key4\r
1950,Clarkia_xantiana,Not_threatened,8.6207195E-2,35.59118,-118.52769,key4\r
1951,Clarkia_xantiana,Not_threatened,0.20271151200000001,35.59118,-118.52769,key4\r
1952,Clarkia_xantiana,Not_threatened,0,35.59118,-118.52769,key4\r
1953,Clarkia_xantiana,Not_threatened,8.0042708000000004E-2,35.59118,-118.52769,key4\r
1954,Clarkia_xantiana,Not_threatened,0.106429463,35.59118,-118.52769,key4\r
1955,Clarkia_xantiana,Not_threatened,8.6525350000000001E-2,35.59118,-118.52769,key4\r
1956,Clarkia_xantiana,Not_threatened,0.15097102700000001,35.59118,-118.52769,key4\r
1957,Narcissus_cyclamineus,Threatened,0.93720863099999996,42.15778,-8.69472,key4\r
1958,Hyoscyamus_niger,Not_threatened,-5.0102467999999997E-2,43.76590,87.55375,key4\r
1959,Hedysarum_scoparium,Threatened,0.30228087199999998,39.31667,100.20333,key4\r
1960,Knightia_excelsa,Not_threatened,0.27029033000000002,-36.19457,175.07529,key4\r
1961,Knightia_excelsa,Not_threatened,0.71991742199999997,-36.95322,174.55891,key4\r
1962,Metrosideros_excelsa,Not_threatened,0.229538679,-36.19457,175.07529,key4\r
1963,Metrosideros_excelsa,Not_threatened,1.4731817220000001,-36.19457,175.07529,key4\r
1964,Hebe_macrocarpa,Not_threatened,0.86304621699999995,-36.19457,175.07529,key4\r
1965,Hebe_macrocarpa,Not_threatened,5.5059776999999997E-2,-36.19457,175.07529,key4\r
1966,Cipocereus_laniflorus,Threatened,0.63511228799999997,-20.10000,-43.45750,key4\r
1967,Cambessedesia_espora,No_data,0.85745023200000003,-20.25269,-46.62261,key4\r
1968,Cambessedesia_regnelliana,No_data,-0.132665966,-20.25269,-46.62261,key4\r
1969,Lavoisiera_imbricata,Not_threatened,0.10049796599999999,-20.25269,-46.62261,key4\r
1970,Macairea_radula,No_data,-7.8835707000000005E-2,-15.79308,-48.84236,key4\r
1971,Miconia_ferruginata,No_data,0.120071366,-15.79308,-48.84236,key4\r
1972,Microlicia_fasciculata,Not_threatened,3.9821493999999999E-2,-15.79308,-48.84236,key4\r
1973,Microlicia_inquinans,No_data,4.2097187000000001E-2,-20.25269,-46.62261,key4\r
1974,Microlicia_viminalis,No_data,-1.1011154190000001,-20.25269,-46.62261,key4\r
1975,Rhynchanthera_grandiflora,Not_threatened,0.62629652000000002,-15.79308,-48.84236,key4\r
1976,Svitramia_hatschbachii,No_data,0.54181737699999999,-20.25269,-46.62261,key4\r
1977,Svitramia_minor,Threatened,-4.4522456000000002E-2,-20.25269,-46.62261,key4\r
1978,Svitramia_spp.,No_data,-0.70344896400000001,-20.25269,-46.62261,key4\r
1979,Tibouchina_aegopogon,Not_threatened,-0.481303184,-15.79308,-48.84236,key4\r
1980,Tibouchina_frigidula,Not_threatened,-0.171148256,-20.25269,-46.62261,key4\r
1981,Tibouchina_heteromalla,No_data,0.17370611899999999,-20.25269,-46.62261,key4\r
1982,Tibouchina_papyrus,Not_threatened,0.40213731800000002,-15.79308,-48.84236,key4\r
1983,Tibouchina_stenocarpa,No_data,-0.69314718099999995,-20.25269,-46.62261,key4\r
1984,Tibouchina_villosissima,No_data,0.16282376100000001,-20.25269,-46.62261,key4\r
1985,Trembleya_neopyrenaica,No_data,0.607589292,-15.79308,-48.84236,key4\r
1986,Trembleya_parviflora,Not_threatened,2.367123614,-20.25269,-46.62261,key4\r
1987,Lepidagathis_sessilifolia,No_data,-0.179585577,-14.06667,-57.05083,key4\r
1988,Protea_caffra,Not_threatened,0.18219661500000001,-29.29000,30.29000,key4\r
1989,Protea_caffra,Not_threatened,0.23376366400000001,-29.75000,29.75000,key4\r
1990,Protea_caffra,Not_threatened,0.15090967599999999,-29.77000,30.84000,key4\r
1991,Protea_simplex,Not_threatened,0.142533307,-29.29000,30.29000,key4\r
1992,Protea_welwitschii,Not_threatened,0.87845827600000004,-28.75000,30.75000,key4\r
1993,Echinacea_laevigata,Threatened,0.112477983,36.10000,-78.70000,key4\r
1994,Echinacea_laevigata,Threatened,-0.47000362899999998,36.10000,-78.70000,key4\r
1995,Echinacea_laevigata,Threatened,0.175890666,36.10000,-78.90000,key4\r
1996,Echinacea_laevigata,Threatened,0.20479441300000001,36.10000,-78.90000,key4\r
1997,Echinacea_laevigata,Threatened,0.16907633,36.10000,-78.90000,key4\r
1998,Echinacea_laevigata,Threatened,0.15415068000000001,36.10000,-78.90000,key4\r
1999,Rhododendron_macrosepalum,No_data,0.709276562,35.06667,135.77944,key4\r
2000,Rhododendron_reticulatum,Not_threatened,0.440556428,35.06667,135.77944,key4\r
2001,Gentiana_crassa_subsp._rigescens,No_data,-0.90903556100000005,23.90785,100.18630,key4\r
2002,Physaria_obcordata,Threatened,-0.182321557,39.92194,-108.30500,key4\r
2003,Physaria_obcordata,Threatened,-0.23361485100000001,39.92194,-108.30500,key4\r
2004,Physaria_obcordata,Threatened,-8.7011377000000001E-2,39.92194,-108.30500,key4\r
2005,Pagamea_duckei,No_data,1.4816045410000001,-22.82759,-47.10500,key4\r
2006,Geranium_sylvaticum,Not_threatened,0.25489224999999999,60.35000,22.69472,key4\r
2007,Nitraria_roborowskii,Not_threatened,-0.28768207200000001,42.53124,117.23491,key4\r
2008,Nitraria_sibirica,Not_threatened,-0.52806743,42.53124,117.23491,key4\r
2009,Nitraria_sphaerocarpa,Not_threatened,0.23599999099999999,42.53124,117.23491,key4\r
2011,Bletilla_striata,Threatened,2.8760105729999998,30.36194,119.42361,key4\r
2012,Wahlenbergia_cuspidata,Not_threatened,1.4380978000000001E-2,-29.32000,30.28000,key4\r
2013,Wahlenbergia_krebsii,Not_threatened,3.9995809E-2,-29.50000,30.18000,key4\r
2014,Primulina_repanda_var._guilinensis,No_data,0.89994159399999996,25.25000,110.29000,key4\r
2015,Primulina_glandulosa_var._yangshuoensis,No_data,0.68159421499999995,24.75000,110.45000,key4\r
2016,Agelanthus_brunneus,Not_threatened,-0.11063903899999999,7.23333,11.06778,key4\r
2017,Agelanthus_djurensis,Not_threatened,-0.14689111999999999,7.23333,11.06778,key4\r
2018,Globimetula_braunii,Not_threatened,0.43917616500000001,7.23333,11.06778,key4\r
2019,Coptis_teeta,Threatened,-0.12510981099999999,26.54300,98.97200,key4\r
2020,Magnolia_officinalis_var._biloba,Threatened,1.8245492919999999,30.10000,120.00000,key4\r
2021,Incarvillea_mairei,Not_threatened,4.6990130140000002,27.05000,100.93194,key4\r
2022,Incarvillea_mairei,Not_threatened,4.7083544220000002,27.00000,100.18639,key4\r
2023,Incarvillea_mairei,Not_threatened,4.6701550359999997,27.08333,100.22028,key4\r
2024,Handroanthus_serratifolius,Threatened,0.124936873,-19.37519,-48.62667,key4\r
2025,Blackstonia_perfoliata,Threatened,0.22080163,51.08611,2.55917,key4\r
2026,Blackstonia_perfoliata,Threatened,0.380207709,51.13611,2.69472,key4\r
2027,Blackstonia_perfoliata,Threatened,4.8877124000000001E-2,51.28083,4.30500,key4\r
2028,Blackstonia_perfoliata,Threatened,-4.1393459000000001E-2,51.24667,4.32194,key4\r
2029,Wahlenbergia_albomarginata,Not_threatened,0.35839759700000001,-45.05407,168.81430,key4\r
2030,Fumana_thymifolia,No_data,-3.3336419999999999E-2,39.36150,-0.32194,key4\r
2031,Begonia_fimbristipula,Not_threatened,0.15831810199999999,23.11100,112.49100,key4\r
2032,Encholirium_heloisae,Threatened,0.40685883699999997,-19.25000,-43.50833,key4\r
2033,Polygonum_jucundum,Not_threatened,0.206568586,31.86056,117.28541,key4\r
2034,Polygonum_jucundum,Not_threatened,0.226527649,31.86056,117.28541,key4\r
2035,Decodon_verticillatus,Not_threatened,0.23158410199999999,44.56700,-76.32400,key4\r
2036,Decodon_verticillatus,Not_threatened,1.7150401999999999E-2,44.56700,-76.32400,key4\r
2037,Kniphofia_linearifolia,Not_threatened,0.449226501,-28.53055,30.89582,key4\r
2038,Bathysa_australis,Not_threatened,-0.47000362899999998,-22.53333,-42.28806,key4\r
2039,Schizocalyx_cuspidatus,Not_threatened,2.2472855999999999E-2,-22.53333,-42.28806,key4\r
2040,Psittacanthus_robustus,No_data,0.37156355600000002,-19.25000,-43.55917,key4\r
2041,Anemone_obtusiloba,Not_threatened,-0.35855641199999999,34.93194,102.88333,key4\r
2042,Pedicularis_rex,Not_threatened,0.16705408499999999,27.79611,99.71167,key4\r
2043,Paeonia_delavayi,Not_threatened,0.111766687,27.95000,99.59306,key4\r
2044,Saxifraga_hirculus,Not_threatened,0.21036976800000001,43.10000,86.84722,key4\r
2045,Saxifraga_hirculus,Not_threatened,0.15143946999999999,43.10000,86.84722,key4\r
2046,Pedicularis_gruina,Not_threatened,0.50077528800000004,27.86667,99.67778,key4\r
2047,Cypripedium_japonicum,Threatened,2.9444389790000001,30.35583,119.44083,key4\r
2048,Tristerix_corymbosus,No_data,0.61716127399999998,-41.88250,-73.66083,key4\r
2049,Avicennia_schaueriana,Not_threatened,8.1461819000000005E-2,-7.67772,-34.84722,key4\r
2050,Vriesea_friburgensis,Not_threatened,-0.29518517900000002,-30.45000,-51.08330,key4\r
2051,Clarkia_pulchella,Not_threatened,0.10447906999999999,46.91326,-114.03187,key4\r
2052,Clarkia_pulchella,Not_threatened,0.13928924100000001,46.91326,-114.03187,key4\r
2053,Ipomoea_eriocalyx,No_data,-0.112211991,-12.97218,-38.50147,key4\r
2054,Melastoma_sanguineum,Not_threatened,0.82203933399999995,19.14452,109.26584,key4\r
2055,Melastoma_sanguineum,Not_threatened,1.480847421,19.14452,109.26584,key4\r
2056,Melastoma_sanguineum,Not_threatened,1.0644004330000001,19.14452,109.26584,key4\r
2057,Eschweilera_nana,Not_threatened,0.97832612299999999,-15.85000,-52.27111,key4\r
2058,Chaerophyllum_bulbosum,Threatened,4.1385216000000002E-2,49.96757,8.32423,species\r
2060,Psychotria_goyazensis,No_data,-0.178299665,-18.16017,-47.93194,key4\r
2061,Besleria_melancholica,No_data,0.222326891,-22.43139,-42.76250,key4\r
2062,Stenostephanus_lobeliiformis,No_data,0.24087165499999999,-22.43139,-42.76250,key4\r
2063,Mallotus_apelta,Not_threatened,0.112199707,23.17580,113.35772,species\r
2064,Mallotus_apelta,Not_threatened,-4.9917348E-2,23.17580,113.35772,species\r
2067,Fridericia_dichotoma,No_data,8.6473597999999999E-2,-26.18139,-58.94889,key4\r
2068,Handroanthus_heptaphyllus,Not_threatened,-8.6099660999999994E-2,-26.18139,-58.94889,key4\r
2069,Tabebuia_nodosa,Not_threatened,-4.8407095999999997E-2,-26.18139,-58.94889,key4\r
2070,Glaucium_flavum,Not_threatened,0.23291500500000001,39.11293,26.55917,key4\r
2071,Broughtonia_cubensis,Threatened,0.62645580599999995,21.98101,-84.54319,key4\r
2078,Iris_atropurpurea,Threatened,0.280207398,32.20000,34.51000,key4\r
2079,Sinopodophyllum_hexandrum,Not_threatened,-3.9005973999999999E-2,27.90139,99.64389,key4\r
2080,Mallotus_japonicus,Not_threatened,0.119546202,34.83333,135.84722,key4\r
2081,Fagopyrum_acutatum,No_data,5.5382146E-2,26.58000,114.02000,key4\r
2082,Hedychium_spicatum,Not_threatened,0.49097134999999997,25.05000,102.61600,key4\r
2083,Fagopyrum_acutatum,No_data,0.25967729499999997,26.58000,114.02000,key4\r
2084,Hemerocallis_hybrida,No_data,1.8233965539999999,30.26694,121.17349,key4\r
2086,Polemonium_caeruleum,Threatened,0.378993301,53.04833,21.87772,key4\r
2087,Polemonium_caeruleum,Threatened,0.337279773,53.04833,21.87772,key4\r
2088,Tillandsia_viridiflora,No_data,-0.15877817499999999,19.52592,-96.99972,species\r
2089,Calycanthus_chinensis,Threatened,0.16050091499999999,28.98333,120.83028,key4\r
2090,Calycanthus_chinensis,Threatened,8.2519134999999993E-2,28.98333,120.83028,key4\r
2091,Utricularia_reniformis,Not_threatened,2.1972245770000001,-23.65806,-46.03389,key4\r
2096,Passiflora_suberosa,Not_threatened,0,-19.16667,-48.40000,key4\r
2097,Passiflora_tricuspis,Not_threatened,1.704848097,-19.16667,-48.40000,key4\r
2098,Clivia_gardenii,Threatened,0.65058914499999998,-31.00630,30.15316,key4\r
2099,Clivia_miniata,Threatened,0.30830106299999999,-31.00630,30.15316,key4\r
2100,Melastoma_intermedium,Not_threatened,-0.36983004400000002,24.63333,117.52528,key4\r
2101,Ammodendron_bifolium,Threatened,0.13714229999999999,44.33528,80.66083,key4\r
2103,Ruellia_subsessilis,No_data,5.6980210000000002E-3,-20.75194,-42.93194,key4\r
2104,Ruellia_subsessilis,No_data,6.4061719999999999E-3,-20.75194,-42.93194,key4\r
2106,Laguncularia_racemosa,Not_threatened,-0.69110427900000004,-7.67772,-34.84722,key4\r
2107,Melastoma_sanguineum,Not_threatened,1.7750960710000001,30.53053,114.37441,key4\r
2108,Philodendron_adamantinum,No_data,2.044755984,-18.00639,-43.38972,key4\r
2109,Handroanthus_impetiginosus,Threatened,1.6679341190000001,-8.39828,-37.23722,key4\r
2110,Iris_speculatrix,Not_threatened,6.8992870999999997E-2,30.26361,120.12344,key4\r
2111,Limonium_chrysocomum,Not_threatened,-3.5627178000000002E-2,44.33300,85.71000,key4\r
2112,Impatiens_hainanensis,Threatened,0.40546510800000002,18.96167,109.13556,key4\r
2113,Impatiens_hainanensis,Threatened,0.49247648500000002,19.02333,109.11861,key4\r
2114,Impatiens_hainanensis,Threatened,0.81093021600000004,19.01361,109.10167,key4\r
2115,Inula_royleana,No_data,0.331752145,34.01667,74.54222,key4\r
2116,Lobelia_cardinalis,Not_threatened,0.67294447300000004,45.99914,-78.48272,key4\r
2117,Lobelia_cardinalis,Not_threatened,0.85348983099999998,45.99914,-78.48272,key4\r
2118,Lobelia_cardinalis,Not_threatened,0.57536414499999999,45.99914,-78.48272,key4\r
2119,Costus_arabicus,No_data,0.21511137999999999,-23.36667,-44.81333,key4\r
2120,Aeschynomene_amorphoides,No_data,0.35547693400000002,19.48333,-105.01694,key4\r
2121,Dracocephalum_austriacum,Threatened,0,49.30767,16.69966,key4\r
2122,Dracocephalum_austriacum,Threatened,0.41301231399999999,49.30767,16.69966,key4\r
2123,Dracocephalum_austriacum,Threatened,0.49288792300000001,49.30767,16.69966,key4\r
2124,Dracocephalum_austriacum,Threatened,0.35609674200000002,49.30767,16.69966,key4\r
2125,Ziziphus_mistol,Threatened,0.559615788,-30.85240,-60.25417,key4\r
2126,Gymnadenia_conopsea,Not_threatened,0.232815299,56.55000,16.62694,key4\r
2127,Gymnadenia_conopsea,Not_threatened,0.32809522400000002,56.85000,16.84722,key4\r
2128,Gymnadenia_conopsea,Not_threatened,0.20536995199999999,56.75000,16.76250,key4\r
2129,Gymnadenia_conopsea,Not_threatened,0.16686529899999999,56.66667,16.62694,key4\r
2130,Tamarix_ramosissima,Not_threatened,0.147851446,40.58333,100.20333,key4\r
2131,Zygophyllum_xanthoxylum,No_data,0.403075621,41.26667,107.38944,key4\r
2132,Zygophyllum_xanthoxylum,No_data,0.374574621,41.26667,107.38944,key4\r
2133,Apocynum_venetum,Not_threatened,0.288912842,40.58333,100.20333,key4\r
2134,Apocynum_venetum,Not_threatened,0.27992006699999999,40.58333,100.20333,key4\r
2135,Polemonium_foliosissimum,Not_threatened,1.0498180459999999,38.82436,-107.39195,key4\r
2136,Polemonium_foliosissimum,Not_threatened,1.2812817480000001,38.82436,-107.39195,key4\r
2137,Polemonium_foliosissimum,Not_threatened,0.13692342299999999,38.82436,-107.39195,key4\r
2138,Polemonium_foliosissimum,Not_threatened,0.39636845799999998,38.82436,-107.39195,key4\r
2139,Richardia_grandiflora,No_data,6.6506496999999998E-2,-7.19778,-34.81333,key4\r
2140,Richardia_grandiflora,No_data,0.71512608700000002,-7.19778,-34.81333,key4\r
2141,Camissoniopsis_cheiranthifolia,No_data,0.46158613999999998,37.23909,-121.58156,key4\r
2142,Camissoniopsis_cheiranthifolia,No_data,1.2489979999999999E-2,37.23909,-121.58156,key4\r
2143,Camissoniopsis_cheiranthifolia,No_data,0.451662699,37.23909,-121.58156,key4\r
2144,Camissoniopsis_cheiranthifolia,No_data,-5.1356242000000003E-2,37.23909,-121.58156,key4\r
2145,Solanum_melongena,No_data,-0.47000362899999998,11.43074,76.85917,key4\r
2146,Solanum_melongena,No_data,-0.47000362899999998,11.43074,76.85917,key4\r
2147,Solanum_melongena,No_data,-0.237328186,11.43074,76.85917,key4\r
2148,Solanum_melongena,No_data,-0.441832752,11.43074,76.85917,key4\r
2149,Solanum_melongena,No_data,-0.223143551,11.43074,76.85917,key4\r
2150,Rhododendron_ferrugineum,Not_threatened,2.8987537000000001E-2,42.77528,1.93194,key4\r
2151,Rhododendron_calendulaceum,Not_threatened,0.747214402,37.36667,-80.54222,key4\r
2152,Dysosma_pleiantha,Threatened,1.48637782,30.31778,119.44056,key4\r
2153,Rhinanthus_minor,Not_threatened,0.105360516,50.20242,-114.44488,key4\r
2154,Rhinanthus_minor,Not_threatened,-8.2238097999999996E-2,50.20242,-114.44488,key4\r
2155,Rhinanthus_minor,Not_threatened,-0.211309094,50.20242,-114.44488,key4\r
2156,Rhinanthus_minor,Not_threatened,-0.223143551,50.94270,-115.15110,key4\r
2157,Rhinanthus_minor,Not_threatened,-5.5569851000000003E-2,50.94270,-115.15110,key4\r
2158,Rhinanthus_minor,Not_threatened,-0.165792255,50.94270,-115.15110,key4\r
2159,Epipactis_palustris,Not_threatened,0.27996002599999997,51.14990,3.07301,key4\r
2160,Epipactis_palustris,Not_threatened,0.30918827799999998,51.45262,4.18067,key4\r
2161,Iris_atropurpurea,Threatened,0.83785011600000003,32.28333,34.84722,key4\r
2162,Iris_atropurpurea,Threatened,0.49010727300000001,32.28333,34.84722,key4\r
2163,Iris_haynei,Threatened,0.59132563699999996,32.43333,35.40667,key4\r
2164,Iris_haynei,Threatened,0.398013915,32.43333,35.40667,key4\r
2165,Handeliodendron_bodinieri,Threatened,0.59814945200000003,24.90000,107.06778,key4\r
2166,Krascheninnikovia_ceratoides,No_data,0.191799423,42.17702,112.18026,key4\r
2167,Centaurea_jacea,Not_threatened,-0.12715517500000001,59.73417,10.03389,key4\r
2168,Leucanthemum_vulgare,Not_threatened,-0.135801541,59.73417,10.03389,key4\r
2169,Rhododendron_cyanocarpum,Threatened,0.32212864699999999,25.86667,99.99972,key4\r
2170,Canna_paniculata,No_data,0.29639401300000001,-23.33611,-45.13556,key4\r
2171,Ilex_crenata,Not_threatened,0.559615788,35.50000,136.94889,key4\r
2172,Ilex_pedunculosa,Not_threatened,-1.7699577000000001E-2,35.53333,136.94889,key4\r
2173,Ilex_serrata,Not_threatened,0.120363682,35.50000,136.94889,key4\r
2174,Solanum_rostratum,Not_threatened,0.26126997299999999,19.32000,-99.19000,species\r
2175,Solanum_rostratum,Not_threatened,2.4884643000000001E-2,19.32000,-99.19000,species\r
2176,Solanum_rostratum,Not_threatened,-0.120178246,21.17000,-100.90000,species\r
2177,Solanum_rostratum,Not_threatened,0.222709618,19.47000,-97.67000,species\r
2178,Solanum_rostratum,Not_threatened,0.13047795500000001,21.31000,-100.51000,species\r
2179,Solanum_rostratum,Not_threatened,0.247898541,19.68000,-98.84000,species\r
2180,Solanum_rostratum,Not_threatened,0.101169235,18.33000,-97.57000,species\r
2181,Camassia_leichtlinii,Not_threatened,0.16887848699999999,48.54500,-123.40667,key4\r
2182,Camassia_leichtlinii,Not_threatened,-0.136859183,48.47400,-123.37278,key4\r
2183,Camassia_leichtlinii,Not_threatened,0.24620882399999999,48.56760,-123.47444,key4\r
2184,Camassia_leichtlinii,Not_threatened,4.4039560999999998E-2,48.44880,-123.47444,key4\r
2185,Camassia_leichtlinii,Not_threatened,0.18424648499999999,48.46680,-123.42361,key4\r
2186,Camassia_leichtlinii,Not_threatened,-0.42400322899999998,48.45960,-123.27500,key4\r
2187,Camassia_leichtlinii,Not_threatened,-0.24987378900000001,48.48840,-123.40667,key4\r
2188,Camassia_leichtlinii,Not_threatened,0.22279687100000001,48.44500,-123.35583,key4\r
2189,Collinsia_parviflora,Not_threatened,6.3553784000000002E-2,48.54500,-123.40667,key4\r
2190,Collinsia_parviflora,Not_threatened,-4.8494349999999999E-2,48.47400,-123.37278,key4\r
2191,Collinsia_parviflora,Not_threatened,0.23144235399999999,48.56760,-123.47444,key4\r
2192,Collinsia_parviflora,Not_threatened,2.6988145000000002E-2,48.44880,-123.47444,key4\r
2193,Collinsia_parviflora,Not_threatened,-4.5462374E-2,48.46680,-123.42361,key4\r
2194,Collinsia_parviflora,Not_threatened,-0.10965591299999999,48.45960,-123.27500,key4\r
2195,Collinsia_parviflora,Not_threatened,-0.110437427,48.48840,-123.40667,key4\r
2196,Collinsia_parviflora,Not_threatened,-5.2842480999999997E-2,48.44500,-123.35583,key4\r
2208,Quercus_lobata,Threatened,0.217412877,36.39000,-121.56191,key4\r
2209,Quercus_lobata,Threatened,0.79850769600000004,36.39000,-121.56191,key4\r
2210,Iris_tuberosa,No_data,0.27254800899999998,39.78471,16.32102,key4\r
2211,Iris_tuberosa,No_data,0.18947106399999999,41.15346,16.41309,key4\r
2212,Iris_tuberosa,No_data,0.16627118599999999,43.19859,13.70270,key4\r
2213,Iris_tuberosa,No_data,0.304939654,42.48376,12.32078,key4\r
2214,Lobelia_siphilitica,Not_threatened,0.537317665,43.53991,-80.21679,key4\r
2215,Lobelia_siphilitica,Not_threatened,0.25678639800000003,43.53991,-80.21679,key4\r
2216,Protea_compacta,Not_threatened,1.1143596849999999,-33.60800,19.30000,key4\r
2217,Protea_laurifolia,Not_threatened,-0.61090997899999999,-33.60800,19.30000,key4\r
2218,Protea_longifolia,Threatened,-0.22314305500000001,-33.60800,19.30000,key4\r
2219,Protea_magnifica,Not_threatened,-1.0498203509999999,-33.60800,19.30000,key4\r
2220,Protea_punctata,Not_threatened,0.44031246200000002,-33.60800,19.30000,key4\r
2221,Protea_repens,Not_threatened,-6.0167032000000002E-2,-33.60800,19.30000,key4\r
2222,Dichorisandra_hexandra,No_data,1.299282984,-22.81667,-47.11861,key4\r
2223,Dichorisandra_incurva,No_data,-0.29546421299999998,-22.81667,-47.11861,key4\r
2224,Gymnadenia_conopsea,Not_threatened,0.111225635,62.66667,11.84722,key4\r
2225,Gymnadenia_conopsea,Not_threatened,0.110000895,62.66667,11.84722,key4\r
2226,Anemone_occidentalis,No_data,-0.17768255999999999,50.42900,-122.45900,key4\r
2227,Anemone_occidentalis,No_data,-0.474529223,50.42900,-122.45900,key4\r
2228,Arnica_latifolia,Not_threatened,0.183554883,50.42900,-122.45900,key4\r
2229,Arnica_latifolia,Not_threatened,0.13475250699999999,50.42900,-122.45900,key4\r
2230,Arnica_latifolia,Not_threatened,0.29087992099999999,50.42900,-122.45900,key4\r
2231,Caltha_leptosepala,Not_threatened,-3.6986707000000001E-2,50.42900,-122.45900,key4\r
2232,Caltha_leptosepala,Not_threatened,0.1553552,50.42900,-122.45900,key4\r
2233,Claytonia_lanceolata,Not_threatened,-0.37156355600000002,50.42900,-122.45900,key4\r
2234,Claytonia_lanceolata,Not_threatened,-0.28575714400000002,50.42900,-122.45900,key4\r
2235,Claytonia_lanceolata,Not_threatened,-8.9079630000000007E-2,50.42900,-122.45900,key4\r
2236,Erythronium_grandiflorum,Not_threatened,-1.128088107,50.42900,-122.45900,key4\r
2237,Erythronium_grandiflorum,Not_threatened,-0.43166748100000002,50.42900,-122.45900,key4\r
2238,Erythronium_grandiflorum,Not_threatened,-0.35417181399999997,50.42900,-122.45900,key4\r
2239,Lupinus_arcticus,Not_threatened,-1.386294361,50.42900,-122.45900,key4\r
2240,Lupinus_arcticus,Not_threatened,-0.94446160899999998,50.42900,-122.45900,key4\r
2241,Lupinus_arcticus,Not_threatened,-0.93826963900000004,50.42900,-122.45900,key4\r
2242,Vaccinium_membranaceum,Not_threatened,-2.1552557999999999E-2,50.42900,-122.45900,key4\r
2243,Vaccinium_membranaceum,Not_threatened,-0.72172055300000004,50.42900,-122.45900,key4\r
2245,Cymbidium_macrorhizon,Threatened,0.391562203,34.69374,135.50216,key4\r
2246,Cymbidium_lancifolium,Not_threatened,0.29035230099999998,35.53954,139.72405,key4\r
2247,Cymbidium_macrorhizon,Threatened,0.22569039599999999,35.43955,139.63190,key4\r
2248,Cephalanthera_falcata,Threatened,1.656230074,35.63333,140.37278,key4\r
2249,Eurya_japonica,Not_threatened,1.085094598,35.16667,136.98278,key4\r
2250,Eurya_japonica,Not_threatened,0.81755478999999998,35.16667,136.98278,key4\r
2251,Senghasiella_glaucifolia,No_data,0.23440070599999999,27.90139,99.64389,key4\r
2252,Senghasiella_glaucifolia,No_data,0.17284281300000001,27.90139,99.64389,key4\r
2253,Senghasiella_glaucifolia,No_data,5.7987258E-2,27.90139,99.64389,key4\r
2254,Pedicularis_siphonantha,Not_threatened,0.25789992699999997,27.63306,99.79639,key4\r
2261,Epidendrum_paniculatum,No_data,5.9914645469999996,-23.25000,-46.88111,key4\r
2262,Delphinium_caeruleum,Not_threatened,1.4997282000000001E-2,37.63000,101.30000,key4\r
2263,Iris_fulva,Threatened,0.29398792600000001,30.35000,-91.08333,key4\r
2264,Iris_fulva,Threatened,0.254924031,30.35000,-91.08333,key4\r
2265,Nemophila_menziesii,Not_threatened,0.28369323600000002,36.76667,-119.41667,key4\r
2266,Nemophila_menziesii,Not_threatened,0.24116205700000001,36.76667,-119.41667,key4\r
2267,Sidalcea_oregana,Not_threatened,0.58297896299999996,36.76667,-119.41667,key4\r
2268,Sidalcea_oregana,Not_threatened,-0.11357667,36.76667,-119.41667,key4\r
2269,Sidalcea_oregana,Not_threatened,0.46430560799999998,36.76667,-119.41667,key4\r
2270,Sidalcea_oregana,Not_threatened,6.7661706000000002E-2,36.76667,-119.41667,key4\r
2272,Silene_douglasii,Not_threatened,0.14675966300000001,43.80000,-120.55000,key4\r
2273,Silene_douglasii,Not_threatened,0.22479507900000001,43.80000,-120.55000,key4\r
2274,Silene_douglasii,Not_threatened,0.104140259,43.80000,-120.55000,key4\r
2275,Silene_douglasii,Not_threatened,0.47957307999999998,43.80000,-120.55000,key4\r
2276,Silene_douglasii,Not_threatened,1.024001425,43.80000,-120.55000,key4\r
2277,Silene_douglasii,Not_threatened,0.58285186499999997,43.80000,-120.55000,key4\r
2278,Silene_douglasii,Not_threatened,0.48134980599999999,43.80000,-120.55000,key4\r
2279,Silene_douglasii,Not_threatened,0.57731536500000002,43.80000,-120.55000,key4\r
2280,Silene_douglasii,Not_threatened,-5.1959738999999998E-2,43.80000,-120.55000,key4\r
2281,Silene_douglasii,Not_threatened,0.41074216499999999,43.80000,-120.55000,key4\r
2282,Silene_douglasii,Not_threatened,1.2366994979999999,43.80000,-120.55000,key4\r
2283,Corydalis_ambigua,No_data,0.39834764,36.20482,138.25293,key4\r
2284,Corydalis_ambigua,No_data,0.38299225199999998,36.20482,138.25293,key4\r
2285,Corydalis_ambigua,No_data,0.111225635,36.20482,138.25293,key4\r
2286,Aspalathus_cymbriformis,No_data,1.5142477249999999,-33.95157,18.88582,key4\r
2287,Aspalathus_uniflora,Not_threatened,-0.64178961700000003,-33.94650,18.88210,key4\r
2288,Thereianthus_spicatus,Not_threatened,1.1474024540000001,-33.95273,18.88783,key4\r
2289,Impatiens_capensis,Not_threatened,0.10171361700000001,41.20000,-77.18333,key4\r
2291,Collinsia_sparsiflora,Not_threatened,0.254435042,36.76667,-119.41667,key4\r
2292,Collinsia_sparsiflora,Not_threatened,0.31197476499999999,36.76667,-119.41667,key4\r
2293,Collinsia_sparsiflora,Not_threatened,-0.31705892299999999,36.76667,-119.41667,key4\r
2294,Collinsia_sparsiflora,Not_threatened,0.11862231400000001,36.76667,-119.41667,key4\r
2295,Impatiens_capensis,Not_threatened,6.6780481000000003E-2,44.55000,-72.56667,key4\r
2296,Hydrophyllum_fendleri,Not_threatened,0.16382697399999999,38.95852,-106.98776,key4\r
2297,Linum_lewisii,Not_threatened,0.240318056,38.95852,-106.98776,key4\r
2298,Potentilla_pulcherrima,Not_threatened,7.0028603999999994E-2,38.95852,-106.98776,key4\r
2299,Azadirachta_indica,Not_threatened,1.0061128720000001,28.88333,77.38972,key4\r
2300,Azadirachta_indica,Not_threatened,2.2228201699999999,28.20000,77.38972,key4\r
2301,Azadirachta_indica,Not_threatened,1.1072328010000001,28.80000,77.22028,key4\r
2302,Prunus_mongolica,No_data,1.525899801,40.73754,109.89806,key4\r
2303,Prunus_mongolica,No_data,1.386294361,40.73754,109.89806,key4\r
2304,Prunus_mongolica,No_data,1.4348845450000001,40.73754,109.89806,key4\r
2305,Prunus_mongolica,No_data,1.658478108,40.73754,109.89806,key4\r
2306,Prunus_mongolica,No_data,0.62970897100000001,39.85012,116.21611,key4\r
2307,Elaeagnus_mollis,Threatened,1.350525575,39.96395,116.15863,key4\r
2308,Rhododendron_siderophyllum,Not_threatened,0.97381337800000001,25.38333,103.23694,key4\r
2309,Heptacodium_miconioides,Threatened,-0.30363600200000002,28.81667,120.93194,key4\r
2310,Magnolia_kwangsiensis,Threatened,0.17185025700000001,25.05000,107.98278,key4\r
2311,Magnolia_kwangsiensis,Threatened,0.287720533,24.86667,108.83028,key4\r
2312,Primula_merrilliana,Threatened,0.16532398000000001,30.21030,117.48634,key4\r
2313,Primula_merrilliana,Threatened,0.164647345,30.21030,117.48634,key4\r
2314,Cymbidium_lancifolium,Not_threatened,6.1596465399999998,25.15000,106.88111,key4\r
2315,Cymbidium_lancifolium,Not_threatened,1.3650409640000001,25.15000,106.88111,key4\r
2316,Zeyheria_montana,Not_threatened,0.213161511,-19.38333,-43.50833,key4\r
2317,Psychotria_poeppigiana,No_data,-0.168667964,-18.86667,-48.23722,key4\r
2318,Psychotria_poeppigiana,No_data,-3.04117E-2,-18.86667,-48.23722,key4\r
2319,Cambessedesia_hilariana,Not_threatened,5.5569851000000003E-2,-23.00194,-46.96583,key4\r
2320,Crinodendron_patagua,No_data,0,-34.13333,-71.01694,species\r
2321,Schinus_terebinthifolia,No_data,1.5040773970000001,-27.58194,-48.50833,key4\r
2322,Schinus_terebinthifolia,No_data,0.38136755700000002,-27.58194,-48.50833,key4\r
2323,Schinus_terebinthifolia,No_data,0.108213585,-27.58194,-48.50833,key4\r
2324,Schinus_terebinthifolia,No_data,-9.5310179999999994E-2,-27.58194,-48.50833,key4\r
2325,Saranthe_klotzschiana,Not_threatened,-0.101352494,-8.31000,-36.00000,key4\r
2326,Convolvulus_chilensis,No_data,0.212801676,-31.48333,-71.13556,species\r
2328,Gongora_quinquenervis,Not_threatened,4.23542314,-7.81250,-34.96583,key4\r
2329,Margaritopsis_cymuligera,No_data,-0.13079739400000001,-23.35000,-44.84722,key4\r
2330,Psychotria_mapourioides,Not_threatened,1.6807117999999999E-2,-23.35000,-44.84722,key4\r
2331,Psychotria_jasminoides,No_data,0.36367847399999997,-23.35000,-44.84722,key4\r
2332,Mourera_fluviatilis,Not_threatened,-9.6992265999999994E-2,-8.55000,-35.59306,key4\r
2333,Grobya_amherstiae,No_data,2.3398564880000001,-23.25000,-46.88111,key4\r
2334,Grobya_amherstiae,No_data,0.329181803,-23.25000,-46.88111,key4\r
2335,Calathea_cylindrica,Not_threatened,-0.129677824,-22.96667,-43.22028,key4\r
2336,Corymborkis_flava,Not_threatened,0.16430305100000001,-20.80194,-42.86417,key4\r
2337,Caesalpinia_echinata,Threatened,1.4986525820000001,-8.03972,-35.18639,key4\r
2338,Stanhopea_insignis,No_data,1.271395818,-23.55000,-45.06778,key4\r
2339,Stanhopea_lietzei,Not_threatened,1.3498032520000001,-23.18333,-46.88111,key4\r
2340,Chiococca_alba,Not_threatened,0.140198083,-23.35000,-44.84722,key4\r
2341,Govenia_utriculata,Not_threatened,1.8391377010000001,-23.18333,-46.88111,key4\r
2342,Echinodorus_longipetalus,No_data,8.3477244000000006E-2,-21.74556,-48.49139,key4\r
2343,Vriesea_ensiformis,No_data,0.96217813799999996,-24.50000,-47.25417,species\r
2344,Vriesea_carinata,Not_threatened,0.87546873700000005,-24.50000,-47.25417,species\r
2346,Galipea_jasminiflora,Not_threatened,2.715546781,-22.81667,-47.10167,key4\r
2347,Besleria_longimucronata,No_data,0.41551544499999998,-23.36667,-44.84722,key4\r
2348,Comolia_microphylla,No_data,-0.232331977,5.61467,-61.50256,species\r
2349,Marcetia_taxifolia,No_data,-0.143100844,5.67360,-61.55142,species\r
2350,Meriania_sclerophylla,No_data,3.2789823000000003E-2,5.64253,-61.38877,species\r
2351,Miconia_alata,No_data,0.85348983099999998,5.67360,-61.55142,species\r
2352,Tibouchina_fraterna,No_data,-0.46262352200000001,5.64253,-61.38877,species\r
2353,Tococa_guianensis,Not_threatened,-0.232331977,5.67360,-61.55142,species\r
2354,Tococa_nitens,No_data,0.41551544400000001,5.74148,-61.41002,species\r
2355,Rourea_induta,No_data,-0.417735201,-15.94222,-47.88111,key4\r
2356,Rourea_induta,No_data,0.56531380899999994,-15.94222,-47.88111,key4\r
2357,Jacaranda_copaia,Not_threatened,1.7764919969999999,-1.45000,-48.49139,species\r
2358,Bauhinia_curvula,Not_threatened,0.33921572300000002,-20.45000,-54.62694,key4\r
2359,Cologania_broussonetii,Not_threatened,9.0472621000000003E-2,-31.15000,-64.33889,key4\r
2360,Oenocarpus_bataua,Not_threatened,-0.25910870000000003,6.75000,-75.10167,species\r
2361,Dipteryx_alata,Threatened,0.80647586599999999,-20.45000,-54.62694,key4\r
2362,Cyrtopodium_flavum,Not_threatened,4.1431347260000004,-23.36667,-44.84722,key4\r
2363,Cyrtopodium_flavum,Not_threatened,3.6506582409999999,-23.36667,-44.84722,key4\r
2364,Chamaecrista_serpens,Not_threatened,5.7158413999999998E-2,8.93333,-67.42361,species\r
2365,Chamaecrista_nictitans,Not_threatened,7.8988410999999994E-2,10.00000,-66.00000,species\r
2366,Handroanthus_vellosoi,Not_threatened,0.39641527300000001,-19.16667,-43.50833,key4\r
2367,Handroanthus_chrysotrichus,No_data,1.8495790400000001,-22.16667,-44.08472,key4\r
2368,Handroanthus_chrysotrichus,No_data,0.84729785999999996,-22.81710,-47.06973,key4\r
2369,Handroanthus_heptaphyllus,Not_threatened,1.129470277,-22.81710,-47.06973,key4\r
2370,Handroanthus_impetiginosus,Threatened,1.9844438129999999,-22.81710,-47.06973,key4\r
2371,Handroanthus_umbellatus,Not_threatened,1.0858732630000001,-22.81710,-47.06973,key4\r
2372,Fridericia_conjugata,No_data,1.1078654939999999,-22.93395,-42.82460,key4\r
2373,Carapichea_ipecacuanha,Threatened,0.78899514199999998,-19.81333,-42.54167,key4\r
2374,Jatropha_mutabilis,No_data,6.4538521000000001E-2,-9.11667,-31.01694,key4\r
2375,Jatropha_mollissima,No_data,0.111225635,-8.41667,-37.03389,key4\r
2376,Byrsonima_gardneriana,Not_threatened,0.89501333299999997,-8.56750,-37.23722,key4\r
2377,Annona_crassiflora,Not_threatened,1.9079309010000001,-15.26028,-48.71167,key4\r
2378,Cochlospermum_orinocense,Not_threatened,4.6394420999999998E-2,-2.63603,-44.11861,key4\r
2379,Canavalia_brasiliensis,Not_threatened,-0.530628251,-7.15733,-36.04948,key4\r
2380,Caesalpinia_pyramidalis,No_data,-0.34830669399999997,-7.34186,-36.30500,key4\r
2381,Geonoma_pohliana_subsp._weddelliana,No_data,0.300104592,-19.33333,-47.84722,key4\r
2382,Tibouchina_pulchra,No_data,0.16789327500000001,-25.50000,-48.81333,key4\r
2383,Tibouchina_sellowiana,Not_threatened,0.94120846000000002,-25.33333,-49.23722,key4\r
2384,Jatropha_mollissima,No_data,6.0624622000000003E-2,-9.94278,-38.99972,key4\r
2385,Jatropha_mutabilis,No_data,0.125163143,-9.94278,-38.99972,key4\r
2386,Jatropha_ribifolia,No_data,-0.105360516,-9.94278,-38.99972,key4\r
2387,Convolvulus_nodiflorus,Not_threatened,-0.27369582999999997,-9.15000,-40.37278,species\r
2388,Byrsonima_umbellata,Not_threatened,0.241552301,-3.29167,-43.13556,key4\r
2389,Byrsonima_rotunda,Not_threatened,0.104360015,-3.29167,-43.13556,key4\r
2390,Adenocalymma_bracteatum,No_data,1.0966142860000001,-22.30000,-53.81333,key4\r
2391,Crotalaria_vitellina,Not_threatened,-0.84729785999999996,-23.36667,-44.81333,key4\r
2392,Passiflora_capsularis,Not_threatened,0.34627623699999999,-20.08333,-43.49139,key4\r
2393,Passiflora_pohlii,No_data,0.40256234800000001,-19.86667,-43.96583,key4\r
2394,Tabebuia_roseoalba,Threatened,1.5511690039999999,-20.81176,-49.37623,key4\r
2395,Miconia_angelana,Threatened,-0.30207081000000002,-20.25000,-46.98278,key4\r
2396,Ruellia_nudiflora,Not_threatened,0.25642952899999999,21.22368,-89.18639,key4\r
2397,Ruellia_nudiflora,Not_threatened,0.237328186,20.86641,-89.62694,key4\r
2398,Ruellia_nudiflora,Not_threatened,0.35667494399999999,20.01708,-89.01694,key4\r
2399,Habenaria_johannensis,No_data,3.1869582219999999,-23.35000,-45.11861,key4\r
2400,Habenaria_paulistana,No_data,0.75821685900000002,-23.35000,-45.11861,key4\r
2401,Hillia_parasitica,Not_threatened,0.81984017600000003,-23.35000,-45.11861,key4\r
2402,Posoqueria_latifolia,Not_threatened,2.0205163750000001,-23.35000,-45.11861,key4\r
2403,Parnassia_epunctulata,Not_threatened,0.64355023899999997,41.16317,113.32975,key4\r
2404,Thymus_vulgaris,Not_threatened,7.3025135000000005E-2,41.27326,1.91755,key4\r
2405,Thymus_vulgaris,Not_threatened,0.169718385,41.27326,1.91755,key4\r
2406,Thymus_vulgaris,Not_threatened,-0.16896576599999999,41.27326,1.91755,key4\r
2407,Thymus_vulgaris,Not_threatened,-0.28197662099999998,41.27326,1.91755,key4\r
2408,Gymnocladus_assamicus,Threatened,0.34773424600000002,27.21667,92.22028,key4\r
2409,Primula_cusickiana_var._maguirei,Threatened,-0.72691244600000005,41.73333,-111.74556,key4\r
2410,Primula_cusickiana_var._maguirei,Threatened,-1.0391233849999999,41.73333,-111.74556,key4\r
2411,Primula_cusickiana_var._maguirei,Threatened,-0.45210402999999999,41.76667,-111.64389,key4\r
2412,Primula_cusickiana_var._maguirei,Threatened,-0.56805220199999995,41.76667,-111.64389,key4\r
2413,Primula_cusickiana_var._maguirei,Threatened,-1.464944399,41.73333,-111.74556,key4\r
2415,Primula_cusickiana_var._maguirei,Threatened,-2.5843420999999998E-2,41.73333,-111.74556,key4\r
2416,Primula_cusickiana_var._maguirei,Threatened,-0.71678034700000004,41.76667,-111.64389,key4\r
2417,Glionnetia_sericea,Threatened,-0.23638877799999999,-4.68332,55.49999,key4\r
2418,Glionnetia_sericea,Threatened,-0.47957307999999998,-4.64732,55.45251,key4\r
2419,Justicia_sebastianopolitanae,No_data,-0.48550781599999998,-22.45000,-44.61000,key4\r
2420,Justicia_sebastianopolitanae,No_data,9.3090416999999995E-2,-22.45000,-44.61000,key4\r
2421,Odontonema_barberioides,No_data,1.059391566,-22.45000,-44.61000,key4\r
2422,Odontonema_barberioides,No_data,1.403993898,-22.45000,-44.61000,key4\r
2423,Staurogyne_itatiaiae,Threatened,-0.58778664199999997,-22.45000,-44.61000,key4\r
2424,Staurogyne_itatiaiae,Threatened,-0.48901046500000001,-22.45000,-44.61000,key4\r
2425,Aechmea_nudicaulis,Not_threatened,1.0952396209999999,-22.45000,-44.61000,key4\r
2426,Aechmea_nudicaulis,Not_threatened,0.42387674800000003,-22.45000,-44.61000,key4\r
2427,Aechmea_van-houtteana,No_data,-4.5274989000000002E-2,-22.45000,-44.61000,key4\r
2428,Billbergia_distachia_var._distachia,Not_threatened,-2.0619284000000002E-2,-22.45000,-44.61000,key4\r
2429,Billbergia_distachia_var._distachia,Not_threatened,0.36464311399999999,-22.45000,-44.61000,key4\r
2430,Nidularium_itatiaiae,Threatened,0.25758404000000001,-22.45000,-44.61000,key4\r
2431,Nidularium_itatiaiae,Threatened,0.14326211999999999,-22.45000,-44.61000,key4\r
2432,Pitcairnia_flammea,No_data,0.15810729700000001,-22.45000,-44.61000,key4\r
2433,Pitcairnia_flammea,No_data,7.5901670000000001E-3,-22.45000,-44.61000,key4\r
2434,Quesnelia_augusto-coburgii,Not_threatened,1.4104602000000001E-2,-22.45000,-44.61000,key4\r
2435,Quesnelia_augusto-coburgii,Not_threatened,0,-22.45000,-44.61000,key4\r
2436,Tillandsia_geminiflora,Not_threatened,1.2296405429999999,-22.45000,-44.61000,key4\r
2437,Vriesea_carinata,Not_threatened,0.81093022599999998,-22.45000,-44.61000,key4\r
2438,Vriesea_gradata,No_data,1.2028733060000001,-22.45000,-44.61000,key4\r
2439,Vriesea_gradata,No_data,1.7917593890000001,-22.45000,-44.61000,key4\r
2440,Vriesea_longicaulis,No_data,-7.4107975000000006E-2,-22.45000,-44.61000,key4\r
2441,Vriesea_longicaulis,No_data,0,-22.45000,-44.61000,key4\r
2442,Nematanthus_crassifolius,Not_threatened,0.51957840200000005,-22.45000,-44.61000,key4\r
2443,Nematanthus_crassifolius,Not_threatened,-0.21918315799999999,-22.45000,-44.61000,key4\r
2444,Nematanthus_lanceolatus,Not_threatened,0.229923242,-22.45000,-44.61000,key4\r
2445,Sinningia_cooperi,Not_threatened,0.59538301000000005,-22.45000,-44.61000,key4\r
2446,Salvia_sellowiana,No_data,0.31845374100000001,-22.45000,-44.61000,key4\r
2447,Salvia_sellowiana,No_data,0.13815034200000001,-22.45000,-44.61000,key4\r
2448,Abutilon_bedfordianum,No_data,0.73893379199999998,-22.45000,-44.61000,key4\r
2449,Abutilon_bedfordianum,No_data,0.44731226400000001,-22.45000,-44.61000,key4\r
2450,Elleanthus_brasiliensis,No_data,1.1239300999999999,-22.45000,-44.61000,key4\r
2451,Manettia_mitis,No_data,0.43885212699999998,-22.45000,-44.61000,key4\r
2452,Manettia_mitis,No_data,-3.353824E-3,-22.45000,-44.61000,key4\r
2453,Paliavana_tenuiflora,Not_threatened,-1.386294361,-12.98333,-41.35583,key4\r
2454,Spondias_tuberosa,Not_threatened,3.091042453,-7.34186,-36.30500,key4\r
2455,Cochlospermum_regium,Not_threatened,0.58314628499999999,-7.34186,-36.30500,key4\r
2456,Croton_sonderianus,No_data,0.46536325000000001,-7.34186,-36.30500,key4\r
2457,Bauhinia_cheilantha,Not_threatened,0.63127177700000003,-7.34186,-36.30500,key4\r
2458,Caesalpinia_pyramidalis,No_data,0.47957307999999998,-7.34186,-36.30500,key4\r
2459,Parkinsonia_aculeata,Not_threatened,0.62860865899999996,-7.34186,-36.30500,key4\r
2461,Senna_spectabilis,Not_threatened,1.203972804,-7.34186,-36.30500,key4\r
2462,Ziziphus_joazeiro,No_data,2.685577345,-7.34186,-36.30500,key4\r
2463,Palicourea_rigida,No_data,0.86831104999999997,-15.95000,-47.93194,key4\r
2464,Palicourea_rigida,No_data,0.127561226,-15.95000,-47.93194,key4\r
2465,Palicourea_rigida,No_data,3.4677991999999998E-2,-15.95000,-47.93194,key4\r
2466,Palicourea_rigida,No_data,0.69565031099999997,-15.95000,-47.93194,key4\r
2467,Eugenia_uniflora,Not_threatened,1.317826562,-23.03389,-43.53611,key4\r
2468,Eugenia_selloi,Not_threatened,0.221628135,-23.03389,-43.53611,key4\r
2469,Eugenia_punicifolia,Not_threatened,0.52703500199999997,-23.03389,-43.53611,key4\r
2470,Syzygium_rotundifolium,Threatened,0.83892961099999996,-23.03389,-43.53611,key4\r
2471,Gavilea_araucana,No_data,1.1060947E-2,-35.15000,-72.69472,key4\r
2472,Gavilea_venosa,No_data,1.2447947989999999,-33.68333,-70.40667,key4\r
2473,Hedychium_villosum,Threatened,1.5945891050000001,21.45000,100.42361,key4\r
2474,Hedychium_villosum_var._tenuiflorum,No_data,2.2536785080000001,21.80000,101.38972,key4\r
2475,Hesperidanthus_suffrutescens,No_data,0.85459716299999999,40.22500,-109.54222,key4\r
2476,Bridelia_stipularis,Not_threatened,0.42232222600000002,19.10000,109.06778,key4\r
2477,Cleistanthus_sumatranus,Not_threatened,0.45271799299999999,18.68333,110.20333,key4\r
2478,Terminalia_pallida,Threatened,2.4126617430000001,13.66667,79.32194,key4\r
2479,Vriesea_gigantea,Not_threatened,8.9065251999999998E-2,-30.45000,-51.08472,key4\r
2480,Vriesea_gigantea,Not_threatened,-0.14122074200000001,-29.80000,-50.27111,key4\r
2481,Vriesea_gigantea,Not_threatened,0.18366591800000001,-31.93333,-52.42361,key4\r
2482,Echium_wildpretii,Threatened,-8.1247672000000007E-2,28.27234,-16.64251,key4\r
2483,Fritillaria_meleagris,Threatened,-2.9765638000000001E-2,49.77194,22.84722,key4\r
2484,Fritillaria_meleagris,Threatened,-0.40574239499999998,49.77194,22.84722,key4\r
2485,Primula_modesta,No_data,6.3369614000000005E-2,36.70000,137.84944,key4\r
2486,Primula_modesta,No_data,-7.6372978999999994E-2,36.70000,137.84944,key4\r
2487,Primula_modesta,No_data,2.3325659249999999,36.70000,137.84944,key4\r
2488,Primula_modesta,No_data,1.755391825,36.70000,137.84944,key4\r
2489,Dodecatheon_hendersonii,Not_threatened,0.26201145999999997,48.80856,-123.62694,key4\r
2490,Dodecatheon_hendersonii,Not_threatened,0.187258076,48.80856,-123.62694,key4\r
2491,Dodecatheon_hendersonii,Not_threatened,-0.23698571700000001,48.79092,-123.64389,key4\r
2492,Dodecatheon_hendersonii,Not_threatened,-9.1790491000000002E-2,48.79092,-123.64389,key4\r
2493,Erythronium_oregonum,Not_threatened,0.17637830700000001,48.80856,-123.62694,key4\r
2494,Erythronium_oregonum,Not_threatened,-6.8676866000000003E-2,48.80856,-123.62694,key4\r
2495,Erythronium_oregonum,Not_threatened,-0.23119793199999999,48.79092,-123.64389,key4\r
2496,Erythronium_oregonum,Not_threatened,0.37367759099999998,48.79092,-123.64389,key4\r
2497,Erythronium_oregonum,Not_threatened,1.6311040999999998E-2,48.78167,-123.89806,key4\r
2498,Erythronium_oregonum,Not_threatened,0.77811970200000002,48.78167,-123.89806,key4\r
2499,Erythronium_oregonum,Not_threatened,0.100379185,48.77750,-123.94889,key4\r
2500,Erythronium_oregonum,Not_threatened,-0.27652794600000002,48.77750,-123.94889,key4\r
2501,Camassia_quamash,Not_threatened,0.48839698300000001,48.80856,-123.62694,key4\r
2502,Camassia_quamash,Not_threatened,0.16416409500000001,48.80856,-123.62694,key4\r
2503,Camassia_quamash,Not_threatened,0.481559923,48.79092,-123.64389,key4\r
2504,Camassia_quamash,Not_threatened,0.16065747399999999,48.79092,-123.64389,key4\r
2505,Camassia_quamash,Not_threatened,-0.103736417,48.78167,-123.89806,key4\r
2506,Camassia_quamash,Not_threatened,-8.9026725000000001E-2,48.78167,-123.89806,key4\r
2507,Camassia_quamash,Not_threatened,0.46353111499999999,48.77750,-123.94889,key4\r
2508,Camassia_quamash,Not_threatened,-0.358633808,48.77750,-123.94889,key4\r
2509,Camassia_quamash,Not_threatened,-7.327794E-2,48.81886,-124.13556,key4\r
2510,Camassia_quamash,Not_threatened,0.146216552,48.81886,-124.13556,key4\r
2511,Delphinium_menziesii,Not_threatened,-9.6637192999999996E-2,48.80856,-123.62694,key4\r
2512,Delphinium_menziesii,Not_threatened,0,48.79092,-123.64389,key4\r
2513,Delphinium_menziesii,Not_threatened,0.15587336900000001,48.78167,-123.89806,key4\r
2514,Delphinium_menziesii,Not_threatened,0.279439822,48.81750,-124.11861,key4\r
2515,Allium_acuminatum,Not_threatened,2.732766E-2,48.80856,-123.62694,key4\r
2516,Allium_acuminatum,Not_threatened,0.152029788,48.80856,-123.62694,key4\r
2517,Allium_acuminatum,Not_threatened,-0.120227427,48.79092,-123.64389,key4\r
2518,Allium_acuminatum,Not_threatened,3.2721331999999999E-2,48.79092,-123.64389,key4\r
2519,Allium_acuminatum,Not_threatened,-1.9724505E-2,48.81886,-124.13556,key4\r
2520,Triteleia_hyacinthina,Not_threatened,-0.16457406099999999,48.80856,-123.62694,key4\r
2521,Triteleia_hyacinthina,Not_threatened,-1.4883518E-2,48.80856,-123.62694,key4\r
2522,Triteleia_hyacinthina,Not_threatened,3.9046224999999997E-2,48.79092,-123.64389,key4\r
2523,Triteleia_hyacinthina,Not_threatened,-7.0958151999999997E-2,48.78167,-123.89806,key4\r
2524,Triteleia_hyacinthina,Not_threatened,0.37213979800000002,48.78167,-123.89806,key4\r
2525,Triteleia_hyacinthina,Not_threatened,0.70444673599999996,48.81886,-124.13556,key4\r
2526,Triteleia_hyacinthina,Not_threatened,0.63940290499999997,48.81886,-124.13556,key4\r
2527,Nicotiana_alata,No_data,9.8924022E-2,-30.34479,-54.33889,key4\r
2528,Nicotiana_alata,No_data,0.50708561299999999,-30.34479,-54.33889,key4\r
2529,Nicotiana_alata,No_data,0.34844365199999999,-30.34479,-54.33889,key4\r
2530,Nicotiana_alata,No_data,0.111701403,-30.34479,-54.33889,key4\r
2531,Garcinia_brasiliensis,Not_threatened,0.902223475,-22.95000,-42.85833,key4\r
2532,Myrsine_parvifolia,Not_threatened,1.2431935169999999,-22.88333,-42.85833,key4\r
2533,Hedysarum_coronarium,Not_threatened,8.4378776000000003E-2,36.09255,-5.77595,species\r
2534,Hedysarum_coronarium,Not_threatened,0.34346245199999997,40.22313,4.20355,species\r
2535,Lobelia_telekii,No_data,0.28875445900000002,-0.17056,37.27000,key4\r
2536,Lobelia_gregoriana,No_data,-2.0619287E-2,-0.17056,37.27000,key4\r
2537,Dombeya_acutangula,Threatened,0.855918603,-21.00000,55.05083,key4\r
2538,Dombeya_acutangula,Threatened,0.59405627800000005,-21.00000,55.05083,key4\r
2539,Dombeya_acutangula,Threatened,0.67972416000000002,-21.00000,55.05083,key4\r
2540,Dombeya_acutangula,Threatened,0.34431068500000001,-21.00000,55.05083,key4\r
2541,Dombeya_acutangula,Threatened,4.4451762999999998E-2,-21.00000,55.05083,key4\r
2542,Talbotiella_gentii,Threatened,0.57054485799999999,6.25000,0.00000,key4\r
2543,Saintpaulia_confusa,Threatened,0.37267367200000001,-5.15000,38.62694,key4\r
2544,Plumbago_auriculata,Not_threatened,0.89526336500000003,-29.98243,30.25278,key4\r
2545,Alseuosmia_macrophylla,Not_threatened,-3.5102161999999999E-2,-36.21667,175.05000,key4\r
2546,Alseuosmia_macrophylla,Not_threatened,2.9339140019999999,-36.95000,174.54222,key4\r
2547,Alseuosmia_macrophylla,Not_threatened,4.0646991E-2,-36.21667,175.05000,key4\r
2548,Alseuosmia_macrophylla,Not_threatened,-0.23072718,-36.95000,174.54222,key4\r
2549,Grevillea_sphacelata,Not_threatened,-6.9109211000000004E-2,-34.26545,150.80370,key4\r
2550,Grevillea_sphacelata,Not_threatened,-0.314077357,-34.26545,150.80370,key4\r
2551,Convolvulus_lineatus,No_data,6.4258655999999997E-2,43.52800,3.65400,key4\r
2552,Convolvulus_lineatus,No_data,1.762034197,43.52800,3.65400,key4\r
2553,Convolvulus_lineatus,No_data,1.3524198329999999,43.52800,3.65400,key4\r
2554,Convolvulus_lineatus,No_data,0.930671315,43.14900,3.06400,key4\r
2555,Convolvulus_lineatus,No_data,0.113186008,43.14900,3.06400,key4\r
2556,Aegle_marmelos,Threatened,0.40162633199999997,29.31667,77.86417,key4\r
2557,Aegle_marmelos,Threatened,0.22014440599999999,29.31667,77.86417,key4\r
2558,Aegle_marmelos,Threatened,0.28535378300000003,29.31667,77.86417,key4\r
2559,Epimedium_franchetii,Not_threatened,0.125064708,31.43000,110.35583,key4\r
2560,Epimedium_sutchuenense,Not_threatened,0.242358411,30.17528,109.76250,key4\r
2561,Epimedium_mikinorii,Threatened,5.1776269999999999E-2,31.47333,110.38972,key4\r
2562,Epimedium_leptorrhizum,Threatened,0.100083459,29.79861,109.37278,key4\r
2563,Afrocalathea_rhizantha,Not_threatened,1.9678601659999999,0.51667,12.81333,key4\r
2564,Hypselodelphys_hirsuta,Not_threatened,1.7904477480000001,0.51667,12.81333,key4\r
2565,Hypselodelphys_poggeana,Not_threatened,3.0118616550000001,0.61333,10.40667,key4\r
2566,Hypselodelphys_scandens,Not_threatened,3.0200249659999998,0.51667,12.81333,key4\r
2567,Marantochloa_conferta,No_data,0.987262321,0.51667,12.81333,key4\r
2568,Marantochloa_grandiflora,No_data,0.94031998999999999,0.61333,10.40667,key4\r
2569,Sarcophrynium_brachystachyum,Not_threatened,1.609437912,0.61333,10.40667,key4\r
2570,Thaumatococcus_flavus,No_data,0.81078646600000004,0.61333,10.40667,key4\r
2574,Campanula_rotundifolia,Not_threatened,0.271077917,62.62222,9.64389,key4\r
2575,Campanula_rotundifolia,Not_threatened,0.64740115899999995,62.53750,9.61000,key4\r
2576,Campanula_rotundifolia,Not_threatened,0.753219835,62.50111,9.11861,key4\r
2577,Campanula_rotundifolia,Not_threatened,0.20785013499999999,62.73694,9.49139,key4\r
2578,Campanula_rotundifolia,Not_threatened,1.831400439,62.70611,9.42361,key4\r
2579,Campanula_rotundifolia,Not_threatened,0.43721380599999998,62.62361,9.69472,key4\r
2580,Campanula_rotundifolia,Not_threatened,0.434848124,62.51917,9.67778,key4\r
2581,Bauhinia_forficata,Not_threatened,0.66682987199999999,-22.73333,-47.10167,key4\r
2582,Celtis_africana,Not_threatened,0.31422539500000002,-30.69103,30.29252,key4\r
2583,Caladenia_arenicola,No_data,1.6551978949999999,-31.82704,115.83498,key4\r
2584,Caladenia_flava,No_data,1.523289981,-31.82704,115.83498,key4\r
2585,Diuris_magnifica,No_data,2.0790883720000002,-31.82704,115.83498,key4\r
2586,Pterostylis_sanguinea,Threatened,0.64588886099999998,-31.82704,115.83498,key4\r
2587,Cistus_ladanifer,No_data,7.3040651999999998E-2,40.31000,-3.69000,key4\r
2588,Cypripedium_candidum,Threatened,2.9398518149999999,41.39466,-82.84388,key4\r
2589,Cypripedium_candidum,Threatened,1.386294361,41.39466,-82.84388,key4\r
2590,Arnebia_szechenyi,Not_threatened,-4.3763750000000001E-3,35.84406,102.59306,key4\r
2591,Arnebia_szechenyi,Not_threatened,-0.105360516,35.84406,102.59306,key4\r
2592,Cypripedium_macranthos,Not_threatened,0.99046757200000002,39.94514,115.56792,key4\r
2593,Cypripedium_macranthos,Not_threatened,1.244225208,39.94514,115.56792,key4\r
2594,Cypripedium_macranthos,Not_threatened,1.827688371,39.94514,115.56792,key4\r
2595,Cypripedium_macranthos,Not_threatened,2.1213685519999999,39.94514,115.56792,key4\r
2596,Annona_coriacea,Not_threatened,-0.15400781199999999,-22.20000,-47.93194,key4\r
2597,Spiranthes_spiralis,Not_threatened,1.427016351,39.17211,26.36338,key4\r
2598,Spiranthes_spiralis,Not_threatened,6.2021645E-2,39.17211,26.36338,key4\r
2599,Spiranthes_spiralis,Not_threatened,0.43602550200000001,39.17211,26.36338,key4\r
2600,Dypsis_decaryi,Threatened,0.223143551,-25.01667,46.15250,key4\r
2601,Limnanthes_douglasii_subsp._rosea,Threatened,0.64397815700000005,38.45056,-123.37806,key4\r
2602,Limnanthes_douglasii_subsp._rosea,Threatened,0.46364706300000003,38.45056,-123.37806,key4\r
2603,Limnanthes_douglasii_subsp._rosea,Threatened,0.223143551,38.45056,-123.37806,key4\r
2604,Ixeris_chinensis,Not_threatened,0.3254224,31.54961,121.94874,key4\r
2605,Sonchus_arvensis,Not_threatened,0.42651851699999999,31.54961,121.94874,key4\r
2606,Acacia_tortilis,Not_threatened,2.444687434,15.58333,-16.28806,key4\r
2607,Clusia_hilariana,Not_threatened,0.453643346,-22.00000,-41.25417,key4\r
2608,Clusia_hilariana,Not_threatened,0.99921808899999998,-22.00000,-41.25417,key4\r
2609,Marginatocereus_marginatus,No_data,0.189444581,18.33333,-97.47444,key4\r
2610,Astragalus_scaphoides,Threatened,2.0368828159999999,44.96667,-113.45750,key4\r
2611,Astragalus_scaphoides,Threatened,0.47957523699999999,44.96667,-113.45750,key4\r
2612,Astragalus_scaphoides,Threatened,0.107631006,44.96667,-113.45750,key4\r
2613,Astragalus_scaphoides,Threatened,0.130617388,44.96667,-113.45750,key4\r
2614,Astragalus_scaphoides,Threatened,0.7439192,44.86667,-113.62694,key4\r
2615,Astragalus_scaphoides,Threatened,0.77449464800000001,44.86667,-113.62694,key4\r
2616,Astragalus_scaphoides,Threatened,-0.85745167700000002,44.86667,-113.62694,key4\r
2617,Astragalus_scaphoides,Threatened,-0.15750399700000001,44.86667,-113.62694,key4\r
2618,Astragalus_scaphoides,Threatened,0.38544731799999998,45.06667,-113.05083,key4\r
2619,Astragalus_scaphoides,Threatened,0.69314718099999995,45.06667,-113.05083,key4\r
2620,Astragalus_scaphoides,Threatened,4.2559345999999998E-2,45.06667,-113.05083,key4\r
2621,Astragalus_scaphoides,Threatened,-0.19844963600000001,45.06667,-113.05083,key4\r
2622,Aristolochia_paucinervis,Not_threatened,0.94078175200000003,37.26667,-6.38972,key4\r
2623,Juglans_mandshurica,Not_threatened,0.417735201,39.96667,115.44056,key4\r
2624,Juglans_mandshurica,Not_threatened,0,39.96667,115.44056,key4\r
2625,Psittacanthus_calyculatus,No_data,0.133531393,19.28333,-98.23722,key4\r
2626,Comarum_palustre,Not_threatened,0.12139666,50.21898,5.79639,key4\r
2627,Comarum_palustre,Not_threatened,0.38845016700000001,50.26047,5.84722,key4\r
2628,Comarum_palustre,Not_threatened,-7.1303892999999993E-2,49.75404,5.81333,key4\r
2629,Comarum_palustre,Not_threatened,0.21366510799999999,49.69528,5.72861,key4\r
2630,Comarum_palustre,Not_threatened,0.570104316,50.24238,5.77944,key4\r
2631,Comarum_palustre,Not_threatened,0.41469968200000001,50.30500,5.81333,key4\r
2632,Comarum_palustre,Not_threatened,-0.145336047,49.67517,5.77944,key4\r
2633,Comarum_palustre,Not_threatened,0.24458150200000001,49.67164,5.67778,key4\r
2634,Comarum_palustre,Not_threatened,0.11128260199999999,49.65931,5.66083,key4\r
2635,Comarum_palustre,Not_threatened,0.25135134799999997,50.26047,5.84722,key4\r
2636,Comarum_palustre,Not_threatened,-0.105744582,50.26271,5.64389,key4\r
2637,Comarum_palustre,Not_threatened,-0.108203351,50.31820,5.74556,key4\r
2638,Comarum_palustre,Not_threatened,-7.9447568999999996E-2,50.24238,5.77944,key4\r
2639,Comarum_palustre,Not_threatened,-0.184614154,50.30500,5.81333,key4\r
2640,Comarum_palustre,Not_threatened,-0.15666102100000001,49.67517,5.77944,key4\r
2641,Comarum_palustre,Not_threatened,-4.0068952999999997E-2,50.24052,5.81333,key4\r
2642,Comarum_palustre,Not_threatened,-5.1846419999999997E-3,49.67164,5.67778,key4\r
2643,Comarum_palustre,Not_threatened,-3.3582239999999999E-2,50.21898,5.79639,key4\r
2644,Comarum_palustre,Not_threatened,0.28021377800000002,50.33001,5.69472,key4\r
2645,Comarum_palustre,Not_threatened,-0.307158282,49.66759,5.54222,key4\r
2646,Comarum_palustre,Not_threatened,0.155664476,49.65931,5.66083,key4\r
2647,Comarum_palustre,Not_threatened,0.42843731000000002,50.26047,5.84722,key4\r
2648,Comarum_palustre,Not_threatened,0.76574325399999998,50.26271,5.64389,key4\r
2649,Comarum_palustre,Not_threatened,2.6959313730000001,50.31820,5.74556,key4\r
2650,Comarum_palustre,Not_threatened,0.57101859200000005,50.24238,5.77944,key4\r
2651,Comarum_palustre,Not_threatened,-0.107875496,50.30500,5.81333,key4\r
2652,Comarum_palustre,Not_threatened,0.43290105400000001,49.67517,5.77944,key4\r
2653,Comarum_palustre,Not_threatened,6.4908548999999996E-2,50.24052,5.81333,key4\r
2654,Comarum_palustre,Not_threatened,0.21640087,49.67164,5.67778,key4\r
2655,Comarum_palustre,Not_threatened,1.4207673270000001,50.21898,5.79639,key4\r
2656,Comarum_palustre,Not_threatened,-7.4764947999999998E-2,50.33001,5.69472,key4\r
2657,Comarum_palustre,Not_threatened,6.5403488999999995E-2,49.65931,5.66083,key4\r
2658,Calanthe_discolor,Threatened,2.6659647849999999,35.60296,140.41351,key4\r
2659,Halimium_halimifolium,No_data,0.26585122999999999,37.15000,-6.44056,species\r
2660,Halimium_halimifolium,No_data,0.20612693700000001,37.15000,-6.44056,species\r
2661,Tecomella_undulata,Threatened,0.78855190500000005,25.60222,71.23722,key4\r
2662,Dactylorhiza_lapponica,Not_threatened,1.3350010670000001,63.05000,9.05083,species\r
2663,Dactylorhiza_lapponica,Not_threatened,1.258040026,63.20000,10.47444,species\r
2664,Dactylorhiza_lapponica,Not_threatened,0.85077612499999999,63.20000,10.47444,species\r
2665,Dactylorhiza_lapponica,Not_threatened,0.83704135999999996,63.20000,10.47444,species\r
2666,Dactylorhiza_lapponica,Not_threatened,1.1314021110000001,63.20000,10.47444,species\r
2667,Gymnadenia_conopsea,Not_threatened,0.30166831399999999,62.66667,11.84722,species\r
2668,Gymnadenia_conopsea,Not_threatened,0.44757659300000002,62.66667,11.84722,species\r
2669,Gymnadenia_conopsea,Not_threatened,0.13192754300000001,63.05000,9.05083,species\r
2670,Gymnadenia_conopsea,Not_threatened,0.73570679500000002,63.05000,9.05083,species\r
2675,Gymnadenia_conopsea,Not_threatened,0.19948936,63.05000,9.08472,species\r
2676,Prunus_virginiana,Not_threatened,0.89432001000000005,49.86773,-97.49626,key4\r
2677,Prunus_virginiana,Not_threatened,0.53052187399999995,50.03517,-96.89715,key4\r
2678,Prunus_virginiana,Not_threatened,-0.124269545,50.54658,-96.59194,key4\r
2679,Amasonia_obovata,No_data,0.19938946499999999,-14.06667,-57.05083,key4\r
2680,Centaurea_solstitialis,No_data,2.4652988000000001E-2,37.85000,-121.93194,key4\r
2681,Centaurea_solstitialis,No_data,-2.4901856999999999E-2,37.85000,-121.93194,key4\r
2682,Centaurea_solstitialis,No_data,0,37.85000,-121.93194,key4\r
2683,Centaurea_solstitialis,No_data,0,37.85000,-121.93194,key4\r
2684,Peraxilla_tetrapetala,Threatened,0.94657313700000001,-44.23333,169.81667,key4\r
2685,Peraxilla_tetrapetala,Threatened,1.1589428079999999,-44.23333,169.81667,key4\r
2686,Peraxilla_tetrapetala,Threatened,1.6306595989999999,-44.23333,169.81667,key4\r
2687,Peraxilla_tetrapetala,Threatened,0.49982787000000001,-44.23333,169.81667,key4\r
2688,Peraxilla_tetrapetala,Threatened,0.65735153800000001,-44.23333,169.81667,key4\r
2689,Peraxilla_tetrapetala,Threatened,1.86601624,-44.23333,169.81667,key4\r
2690,Peraxilla_tetrapetala,Threatened,0.65271658499999996,-44.23333,169.81667,key4\r
2691,Peraxilla_tetrapetala,Threatened,0.63633713800000002,-43.15000,171.72861,key4\r
2692,Peraxilla_tetrapetala,Threatened,1.605812531,-43.15000,171.72861,key4\r
2693,Peraxilla_tetrapetala,Threatened,0.87652878099999998,-43.15000,171.72861,key4\r
2694,Peraxilla_tetrapetala,Threatened,0.59892800999999996,-43.15000,171.72861,key4\r
2695,Peraxilla_tetrapetala,Threatened,0.55069895199999996,-43.15000,171.72861,key4\r
2696,Peraxilla_tetrapetala,Threatened,0.83985947900000002,-43.15000,171.72861,key4\r
2697,Peraxilla_tetrapetala,Threatened,0.239758679,-43.15000,171.72861,key4\r
2698,Peraxilla_tetrapetala,Threatened,0.278226213,-43.15000,171.72861,key4\r
2699,Peraxilla_tetrapetala,Threatened,0.90200114799999997,-43.15000,171.72861,key4\r
2700,Peraxilla_tetrapetala,Threatened,0.51917564500000002,-43.15000,171.72861,key4\r
2701,Peraxilla_tetrapetala,Threatened,0.92357425100000001,-43.15000,171.72861,key4\r
2702,Peraxilla_tetrapetala,Threatened,0.20523603400000001,-43.15000,171.72861,key4\r
2703,Alseuosmia_macrophylla,Not_threatened,2.0312347919999998,-38.03333,176.03389,key4\r
2704,Alseuosmia_macrophylla,Not_threatened,1.181827008,-38.05000,175.55917,key4\r
2705,Alseuosmia_macrophylla,Not_threatened,-0.14865560999999999,-37.93333,175.06778,key4\r
2706,Alseuosmia_macrophylla,Not_threatened,1.7642221999999999E-2,-38.06667,175.08472,key4\r
2707,Alseuosmia_pusilla,Not_threatened,0.26478148299999998,-39.13333,175.38972,key4\r
2708,Alseuosmia_pusilla,Not_threatened,0.185245828,-39.25000,175.38972,key4\r
2709,Alseuosmia_quercifolia,Not_threatened,0.42953858700000003,-37.65000,175.13556,key4\r
2710,Alseuosmia_quercifolia,Not_threatened,-0.44553646000000002,-37.58333,175.37278,key4\r
2711,Alseuosmia_turneri,Not_threatened,-9.3512489000000004E-2,-38.98333,175.38972,key4\r
2712,Alseuosmia_turneri,Not_threatened,0.44892114300000002,-39.41667,175.45750,key4\r
2713,Coriaria_arborea,Not_threatened,5.6199456000000002E-2,-37.91667,175.06778,key4\r
2714,Coriaria_arborea,Not_threatened,7.1640496999999997E-2,-37.38333,175.38972,key4\r
2715,Pomaderris_hamiltonii,Threatened,-0.85625648700000001,-37.15000,175.22028,key4\r
2716,Pomaderris_hamiltonii,Threatened,-1.381428171,-37.15000,175.27111,key4\r
2717,Raukaua_anomalus,Not_threatened,0.36024898300000002,-37.70000,175.71167,key4\r
2718,Raukaua_anomalus,Not_threatened,1.0408899119999999,-38.03333,176.03389,key4\r
2719,Teucridium_parvifolium,Threatened,6.3670198999999997E-2,-38.31667,175.03389,key4\r
2720,Teucridium_parvifolium,Threatened,5.3806459000000001E-2,-38.93333,175.06778,key4\r
2721,Coprosma_spathulata,Not_threatened,2.0943603749999999,-37.65000,175.13556,key4\r
2722,Coprosma_spathulata,Not_threatened,0.43022134299999998,-37.58333,175.37278,key4\r
2723,Styphelia_abietina,No_data,1.942062511,-37.58333,175.37278,key4\r
2724,Styphelia_abietina,No_data,0.95470205600000002,-37.45000,175.47444,key4\r
2725,Leucopogon_fasciculatus,Not_threatened,0.74703226899999997,-37.65000,175.13556,key4\r
2726,Leucopogon_fasciculatus,Not_threatened,0.52986772199999999,-37.45000,175.47444,key4\r
2727,Macropiper_excelsum,Threatened,-2.8532755999999999E-2,-37.55000,175.76250,key4\r
2728,Macropiper_excelsum,Threatened,-0.228658732,-37.38333,174.72861,key4\r
2729,Melicope_simplex,Not_threatened,1.259048344,-37.70000,175.71167,key4\r
2730,Melicope_simplex,Not_threatened,1.202171697,-37.58333,175.37278,key4\r
2731,Melicytus_micranthus,Not_threatened,1.166742911,-37.70000,175.71167,key4\r
2732,Melicytus_micranthus,Not_threatened,1.058477916,-37.68333,175.32194,key4\r
2733,Melicytus_novae-zelandiae,Not_threatened,0.21495726900000001,-37.55000,176.06778,key4\r
2734,Melicytus_novae-zelandiae,Not_threatened,4.6058855000000003E-2,-37.63333,176.20333,key4\r
2735,Pimelea_villosa_subsp._arenaria,Threatened,-0.107638831,-38.05000,174.77944,key4\r
2736,Pimelea_villosa_subsp._arenaria,Threatened,0.18708274699999999,-38.05000,174.77944,key4\r
2737,Pimelea_villosa_subsp._arenaria,Threatened,-0.31805444999999999,-36.71667,175.63000,key4\r
2738,Pimelea_villosa_subsp._arenaria,Threatened,-0.44778253299999998,-36.71667,175.63000,key4\r
2739,Corydalis_lineariloba,No_data,2.5887771E-2,39.96667,115.44056,key4\r
2740,Corydalis_lineariloba,No_data,1.6393810000000002E-2,39.96667,115.44056,key4\r
2741,Corydalis_lineariloba,No_data,8.3854310000000001E-2,39.96667,115.44056,key4\r
2742,Corydalis_lineariloba,No_data,0.1077714,39.96667,115.44056,key4\r
2743,Parnassia_palustris,Not_threatened,0.32405636500000001,60.00000,7.00000,key4\r
2744,Parnassia_palustris,Not_threatened,0.37572939700000002,60.00000,7.00000,key4\r
2745,Trillium_grandiflorum,Not_threatened,0.76685528599999997,45.58333,-74.00000,key4\r
2746,Trillium_grandiflorum,Not_threatened,0.190458298,45.58333,-74.00000,key4\r
2747,Trillium_grandiflorum,Not_threatened,0.42435202599999999,45.58333,-74.00000,key4\r
2748,Trillium_grandiflorum,Not_threatened,0.290658898,45.58333,-74.00000,key4\r
2749,Trillium_grandiflorum,Not_threatened,0.217470251,45.58333,-74.00000,key4\r
2750,Trillium_grandiflorum,Not_threatened,0.41547520199999999,45.58333,-74.00000,key4\r
2751,Trillium_grandiflorum,Not_threatened,0.61150062299999997,45.58333,-74.00000,key4\r
2752,Trillium_grandiflorum,Not_threatened,0.37469344900000001,45.58333,-74.00000,key4\r
2753,Trillium_grandiflorum,Not_threatened,0.51525041000000005,45.58333,-74.00000,key4\r
2754,Trillium_grandiflorum,Not_threatened,0.49300950599999999,45.58333,-74.00000,key4\r
2755,Trillium_grandiflorum,Not_threatened,0.14122642899999999,45.58333,-74.00000,key4\r
2756,Trillium_grandiflorum,Not_threatened,0.12794830700000001,45.58333,-74.00000,key4\r
2757,Cypripedium_japonicum,Threatened,1.910215679,31.35000,110.05083,key4\r
2758,Leptosiphon_jepsonii,No_data,0.14660347400000001,38.49614,-122.36053,key4\r
2759,Leptosiphon_jepsonii,No_data,0.92002905400000001,38.61392,-122.42917,key4\r
2760,Leptosiphon_jepsonii,No_data,-0.37156355600000002,38.67327,-122.66011,key4\r
2761,Disanthus_cercidifolius,Threatened,2.7950615779999999,26.58140,114.16368,key4\r
2772,Glaucium_flavum,Not_threatened,6.0964148000000003E-2,39.11293,26.55917,key4\r
2773,Glaucium_flavum,Not_threatened,0.221803742,39.11293,26.55917,key4\r
2774,Glaucium_flavum,Not_threatened,-4.2453446999999998E-2,39.14861,26.24980,key4\r
2775,Glaucium_flavum,Not_threatened,1.0340499E-2,39.10759,25.96469,key4\r
2776,Glaucium_flavum,Not_threatened,7.9574370000000005E-2,39.10759,25.96469,key4\r
2777,Glaucium_flavum,Not_threatened,0.21079863400000001,39.10759,25.96469,key4\r
`, Aa = `species,genus,family,threat_status,mean_EI,n_experiments\r
Abronia_alpina,Abronia,Nyctaginaceae,Threatened,-0.230016,1\r
Abutilon_bedfordianum,Abutilon,Malvaceae,No_data,0.593123,2\r
Acacia_tortilis,Acacia,Fabaceae,Not_threatened,2.444687,1\r
Acanthorrhinum_rivas-martinezii,Acanthorrhinum,Plantaginaceae,Threatened,0.885833,1\r
Aciphylla_squarrosa,Aciphylla,Apiaceae,Not_threatened,0.127526,5\r
Aconitum_gymnandrum,Aconitum,Ranunculaceae,No_data,0.240188,2\r
Aconitum_kusnezoffii,Aconitum,Ranunculaceae,Threatened,0.020655,1\r
Aconitum_napellus,Aconitum,Ranunculaceae,Not_threatened,0.625706,1\r
Acourtia_runcinata,Acourtia,Asteraceae,Not_threatened,0.578884,1\r
Adenocalymma_bracteatum,Adenocalymma,Bignoniaceae,No_data,1.096614,1\r
Adonis_ramosa,Adonis,Ranunculaceae,Threatened,0.316962,1\r
Aechmea_distichantha,Aechmea,Bromeliaceae,Not_threatened,-0.470004,1\r
Aechmea_lindenii_var._lindenii,Aechmea,Bromeliaceae,No_data,0.144107,2\r
Aechmea_nudicaulis,Aechmea,Bromeliaceae,Not_threatened,0.759558,2\r
Aechmea_van-houtteana,Aechmea,Bromeliaceae,No_data,-0.045275,1\r
Aegle_marmelos,Aegle,Rutaceae,Threatened,0.068680,4\r
Aeschynomene_amorphoides,Aeschynomene,Fabaceae,No_data,0.355477,1\r
Afrocalathea_rhizantha,Afrocalathea,Marantaceae,Not_threatened,1.967860,1\r
Agalinis_acuta,Agalinis,Orobanchaceae,Threatened,-0.027102,1\r
Agalinis_strictifolia,Agalinis,Orobanchaceae,Not_threatened,0.249944,20\r
Agave_mckelveyana,Agave,Asparagaceae,Threatened,0.138410,1\r
Agelanthus_brunneus,Agelanthus,Loranthaceae,Not_threatened,-0.110639,1\r
Agelanthus_djurensis,Agelanthus,Loranthaceae,Not_threatened,-0.146891,1\r
Ajuga_boninsimae,Ajuga,Lamiaceae,Threatened,0.329953,1\r
Alicia_anisopetala,Alicia,Malpighiaceae,No_data,-0.208901,1\r
Allium_acuminatum,Allium,Amaryllidaceae,Not_threatened,0.014425,5\r
Aloe_africana,Aloe,Xanthorrhoeaceae,Not_threatened,0.843542,1\r
Aloe_hexapetala,Aloe,Xanthorrhoeaceae,No_data,0.290128,1\r
Aloe_lineata_var._muirii,Aloe,Xanthorrhoeaceae,No_data,1.426788,1\r
Aloe_pluridens,Aloe,Xanthorrhoeaceae,Not_threatened,0.932494,1\r
Aloe_pruinosa,Aloe,Xanthorrhoeaceae,Threatened,0.027345,3\r
Alpinia_kwangsiensis,Alpinia,Zingiberaceae,No_data,0.389857,2\r
Alseuosmia_macrophylla,Alseuosmia,Alseuosmiaceae,Not_threatened,0.723848,8\r
Alseuosmia_pusilla,Alseuosmia,Alseuosmiaceae,Not_threatened,0.225014,2\r
Alseuosmia_quercifolia,Alseuosmia,Alseuosmiaceae,Not_threatened,-0.007999,2\r
Alseuosmia_turneri,Alseuosmia,Alseuosmiaceae,Not_threatened,0.177704,2\r
Alstroemeria_aurea,Alstroemeria,Alstroemeriaceae,No_data,0.241131,5\r
Amasonia_obovata,Amasonia,Lamiaceae,No_data,0.199389,1\r
Amelanchier_arborea,Amelanchier,Rosaceae,Not_threatened,-0.040822,1\r
Ammodendron_bifolium,Ammodendron,Fabaceae,Threatened,0.137142,1\r
Ammopiptanthus_mongolicus,Ammopiptanthus,Fabaceae,Threatened,0.359082,4\r
Amphirrhox_longifolia,Amphirrhox,Violaceae,Not_threatened,0.597837,1\r
Anacamptis_coriophora,Anacamptis,Orchidaceae,Not_threatened,0.226860,2\r
Anacamptis_morio,Anacamptis,Orchidaceae,Not_threatened,1.407183,3\r
Anacamptis_papilionacea,Anacamptis,Orchidaceae,Not_threatened,1.744679,1\r
Anagallis_monelli,Anagallis,Primulaceae,No_data,-0.206794,1\r
Anagyris_foetida,Anagyris,Fabaceae,Not_threatened,0.593157,8\r
Andromeda_polifolia,Andromeda,Ericaceae,Not_threatened,0.221296,1\r
Andropogon_gerardii,Andropogon,Poaceae,Not_threatened,0.083382,1\r
Anemone_hepatica_var._acuta,Anemone,Ranunculaceae,No_data,0.859653,6\r
Anemone_obtusiloba,Anemone,Ranunculaceae,Not_threatened,-0.293315,3\r
Anemone_occidentalis,Anemone,Ranunculaceae,No_data,-0.326106,2\r
Anemone_pulsatilla,Anemone,Ranunculaceae,No_data,0.314989,2\r
Anemone_rivularis,Anemone,Ranunculaceae,Not_threatened,-0.112127,2\r
Anemonella_thalictroides,Anemonella,Ranunculaceae,No_data,-0.059423,1\r
Angraecum_bracteosum,Angraecum,Orchidaceae,Not_threatened,2.582593,2\r
Anisodus_carniolicoides,Anisodus,Solanaceae,Threatened,1.064312,1\r
Anisodus_luridus,Anisodus,Solanaceae,Not_threatened,-0.139762,1\r
Anisodus_tanguticus,Anisodus,Solanaceae,Not_threatened,1.030937,2\r
Annona_coriacea,Annona,Annonaceae,Not_threatened,-0.154008,1\r
Annona_crassiflora,Annona,Annonaceae,Not_threatened,1.907931,1\r
Antennaria_dioica,Antennaria,Asteraceae,Not_threatened,0.521743,26\r
Anthyllis_vulneraria,Anthyllis,Fabaceae,Not_threatened,0.072205,2\r
Aplectrum_hyemale,Aplectrum,Orchidaceae,Not_threatened,0.066771,1\r
Apocynum_venetum,Apocynum,Apocynaceae,Not_threatened,0.284416,2\r
Aquilaria_crassna,Aquilaria,Thymelaeaceae,Threatened,0.164303,1\r
Aquilegia_canadensis,Aquilegia,Ranunculaceae,Not_threatened,0.323548,1\r
Arabidopsis_lyrata_subsp._petraea,Arabidopsis,Brassicaceae,Not_threatened,0.277232,2\r
Ardisia_escallonioides,Ardisia,Primulaceae,Not_threatened,-0.423484,1\r
Ardisia_sieboldii,Ardisia,Primulaceae,Not_threatened,2.055374,1\r
Argyroxiphium_sandwicense,Argyroxiphium,Asteraceae,Threatened,1.139345,3\r
Arisaema_triphyllum,Arisaema,Araceae,Not_threatened,2.179459,3\r
Aristea_torulosa,Aristea,Iridaceae,Not_threatened,0.013007,1\r
Aristolochia_baetica,Aristolochia,Aristolochiaceae,Threatened,-0.263588,2\r
Aristolochia_paucinervis,Aristolochia,Aristolochiaceae,Not_threatened,0.940782,1\r
Armeria_maritima,Armeria,Plumbaginaceae,Not_threatened,0.308735,1\r
Arnebia_szechenyi,Arnebia,Boraginaceae,Not_threatened,-0.054868,2\r
Arnica_latifolia,Arnica,Asteraceae,Not_threatened,0.203062,3\r
Arum_italicum,Arum,Araceae,Not_threatened,0.000000,1\r
Asclepias_syriaca,Asclepias,Apocynaceae,Not_threatened,2.110977,3\r
Asimina_obovata,Asimina,Annonaceae,Not_threatened,0.693147,1\r
Asimina_pygmaea,Asimina,Annonaceae,No_data,2.014903,1\r
Aspalathus_cymbriformis,Aspalathus,Convolvulaceae,No_data,1.514248,1\r
Aspalathus_uniflora,Aspalathus,Convolvulaceae,Not_threatened,-0.641790,1\r
Asphodelus_aestivus,Asphodelus,Xanthorrhoeaceae,Not_threatened,0.570694,4\r
Asphodelus_albus,Asphodelus,Xanthorrhoeaceae,Threatened,0.167376,2\r
Astragalus_exscapus,Astragalus,Fabaceae,Threatened,0.827031,4\r
Astragalus_scaphoides,Astragalus,Fabaceae,Threatened,0.348406,12\r
Atriplex_acanthocarpa,Atriplex,Amaranthaceae,Not_threatened,0.205871,4\r
Atriplex_canescens,Atriplex,Amaranthaceae,Not_threatened,0.189614,4\r
Aucuba_japonica,Aucuba,Garryaceae,Not_threatened,0.058934,2\r
Audouinia_capitata,Audouinia,Bruniaceae,Not_threatened,0.886273,1\r
Avicennia_schaueriana,Avicennia,Acanthaceae,Not_threatened,0.081462,1\r
Azadirachta_indica,Azadirachta,Meliaceae,Not_threatened,1.445389,3\r
Babiana_avicularis,Babiana,Iridaceae,Threatened,0.015428,1\r
Babiana_hirsuta,Babiana,Iridaceae,Threatened,0.403750,2\r
Babiana_ringens,Babiana,Iridaceae,No_data,0.128019,2\r
Balsamorhiza_deltoidea,Balsamorhiza,Asteraceae,Not_threatened,1.232555,3\r
Balsamorhiza_sagittata,Balsamorhiza,Asteraceae,Not_threatened,-0.045989,1\r
Banisteriopsis_adenopoda,Banisteriopsis,Malpighiaceae,No_data,0.628609,1\r
Banisteriopsis_muricata,Banisteriopsis,Malpighiaceae,No_data,2.618438,1\r
Banksia_aemula,Banksia,Proteaceae,Not_threatened,0.199508,2\r
Banksia_ericifolia,Banksia,Proteaceae,Not_threatened,-0.289220,8\r
Banksia_paludosa,Banksia,Proteaceae,Not_threatened,0.376762,2\r
Banksia_spinulosa,Banksia,Proteaceae,No_data,0.534386,4\r
Bathysa_australis,Bathysa,Rubiaceae,Not_threatened,-0.470004,1\r
Bauhinia_cheilantha,Bauhinia,Fabaceae,Not_threatened,0.631272,1\r
Bauhinia_curvula,Bauhinia,Fabaceae,Not_threatened,0.339216,1\r
Bauhinia_forficata,Bauhinia,Fabaceae,Not_threatened,0.666830,1\r
Begonia_fimbristipula,Begonia,Begoniaceae,Not_threatened,0.158318,1\r
Begonia_involucrata,Begonia,Begoniaceae,No_data,0.034910,1\r
Begonia_tonduzii,Begonia,Begoniaceae,No_data,0.964186,2\r
Begonia_urophylla,Begonia,Begoniaceae,No_data,0.104321,2\r
Berberis_darwinii,Berberis,Berberidaceae,No_data,0.000000,1\r
Besleria_longimucronata,Besleria,Gesneriaceae,No_data,0.415515,1\r
Besleria_melancholica,Besleria,Gesneriaceae,No_data,0.222327,1\r
Betula_apoiensis,Betula,Betulaceae,Threatened,1.837155,2\r
Billbergia_distachia_var._distachia,Billbergia,Bromeliaceae,Not_threatened,0.172012,2\r
Blackstonia_perfoliata,Blackstonia,Gentianaceae,Threatened,0.152123,4\r
Blandfordia_grandiflora,Blandfordia,Blandfordiaceae,No_data,0.612013,9\r
Blandfordia_nobilis,Blandfordia,Blandfordiaceae,No_data,6.193997,1\r
Bletilla_striata,Bletilla,Orchidaceae,Threatened,2.935022,3\r
Brachyloma_ericoides,Brachyloma,Ericaceae,No_data,-0.559616,1\r
Braya_fernaldii,Braya,Brassicaceae,Threatened,-0.489732,1\r
Braya_longii,Braya,Brassicaceae,Threatened,-0.479573,1\r
Bridelia_stipularis,Bridelia,Phyllanthaceae,Not_threatened,0.422322,1\r
Broughtonia_cubensis,Broughtonia,Orchidaceae,Threatened,0.626456,1\r
Brunsvigia_litoralis,Brunsvigia,Amaryllidaceae,Threatened,2.432702,1\r
Brunsvigia_undulata,Brunsvigia,Amaryllidaceae,Not_threatened,-0.196687,2\r
Bulbine_bulbosa,Bulbine,Xanthorrhoeaceae,No_data,0.213790,2\r
Bulbophyllum_variegatum,Bulbophyllum,Orchidaceae,Not_threatened,1.651273,1\r
Bulnesia_retamo,Bulnesia,Zygophyllaceae,No_data,3.593569,1\r
Burchardia_umbellata,Burchardia,Colchicaceae,No_data,0.376339,4\r
Byrsonima_coccolobifolia,Byrsonima,Malpighiaceae,Not_threatened,0.395288,2\r
Byrsonima_gardneriana,Byrsonima,Malpighiaceae,Not_threatened,0.895013,1\r
Byrsonima_lucida,Byrsonima,Malpighiaceae,Not_threatened,0.535302,7\r
Byrsonima_microphylla,Byrsonima,Malpighiaceae,Threatened,0.278713,1\r
Byrsonima_rotunda,Byrsonima,Malpighiaceae,Not_threatened,0.104360,1\r
Byrsonima_sericea,Byrsonima,Malpighiaceae,Not_threatened,0.994170,2\r
Byrsonima_umbellata,Byrsonima,Malpighiaceae,Not_threatened,0.241552,1\r
Cabralea_canjerana,Cabralea,Meliaceae,Not_threatened,0.102639,1\r
Caesalpinia_decapetala,Caesalpinia,Fabaceae,Not_threatened,-0.073025,1\r
Caesalpinia_echinata,Caesalpinia,Fabaceae,Threatened,1.498653,1\r
Caesalpinia_pyramidalis,Caesalpinia,Fabaceae,No_data,0.065633,2\r
Caladenia_arenicola,Caladenia,Orchidaceae,No_data,1.655198,1\r
Caladenia_flava,Caladenia,Orchidaceae,No_data,1.523290,1\r
Calanthe_discolor,Calanthe,Orchidaceae,Threatened,2.665965,1\r
Calanthe_hattorii,Calanthe,Orchidaceae,Threatened,3.526329,1\r
Calathea_cylindrica,Calathea,Marantaceae,Not_threatened,-0.129678,1\r
Calathea_ovandensis,Calathea,Marantaceae,No_data,0.118784,1\r
Calibrachoa_elegans,Calibrachoa,Solanaceae,Threatened,0.318423,1\r
Callicarpa_glabra,Callicarpa,Lamiaceae,Threatened,-0.242964,1\r
Callicarpa_subpubescens,Callicarpa,Lamiaceae,Not_threatened,0.046065,1\r
Calophyllum_inophyllum,Calophyllum,Calophyllaceae,Not_threatened,1.216450,1\r
Caltha_leptosepala,Caltha,Ranunculaceae,Not_threatened,0.059184,2\r
Calycanthus_chinensis,Calycanthus,Calycanthaceae,Threatened,0.107164,3\r
Calypso_bulbosa,Calypso,Orchidaceae,Threatened,0.362583,9\r
Calyptrogyne_ghiesbreghtiana,Calyptrogyne,Arecaceae,Threatened,0.934309,1\r
Calystegia_collina,Calystegia,Convolvulaceae,Not_threatened,0.416037,6\r
Calystegia_sepium,Calystegia,Convolvulaceae,Not_threatened,0.708185,1\r
Camassia_leichtlinii,Camassia,Asparagaceae,Not_threatened,0.006929,8\r
Camassia_quamash,Camassia,Asparagaceae,Not_threatened,0.127985,10\r
Cambessedesia_espora,Cambessedesia,Melastomataceae,No_data,0.857450,1\r
Cambessedesia_hilariana,Cambessedesia,Melastomataceae,Not_threatened,0.055570,1\r
Cambessedesia_regnelliana,Cambessedesia,Melastomataceae,No_data,-0.132666,1\r
Camellia_azalea,Camellia,Theaceae,Threatened,0.645492,2\r
Camellia_oleifera,Camellia,Theaceae,Not_threatened,0.370214,2\r
Camissoniopsis_cheiranthifolia,Camissoniopsis,Onagraceae,No_data,0.218596,4\r
Campanula_americana,Campanula,Campanulaceae,No_data,0.224790,2\r
Campanula_rotundifolia,Campanula,Campanulaceae,Not_threatened,0.564473,9\r
Canarina_canariensis,Canarina,Campanulaceae,Threatened,0.063809,1\r
Canavalia_brasiliensis,Canavalia,Fabaceae,Not_threatened,-0.530628,1\r
Canna_indica,Canna,Cannaceae,Not_threatened,0.814943,2\r
Canna_paniculata,Canna,Cannaceae,No_data,0.296394,1\r
Capparis_brevispina,Capparis,Capparaceae,Threatened,0.477628,1\r
Capparis_zeylanica,Capparis,Capparaceae,Not_threatened,0.501480,1\r
Carapichea_ipecacuanha,Carapichea,Rubiaceae,Threatened,0.788995,1\r
Cardamine_angustata,Cardamine,Brassicaceae,Not_threatened,0.071656,1\r
Carex_arctata,Carex,Cyperaceae,Not_threatened,0.024391,1\r
Carex_hirtifolia,Carex,Cyperaceae,Not_threatened,0.012423,1\r
Carex_laxiflora,Carex,Cyperaceae,Not_threatened,0.040274,1\r
Carex_pedunculata,Carex,Cyperaceae,Not_threatened,-0.057158,1\r
Carex_pensylvanica,Carex,Cyperaceae,Not_threatened,0.088293,1\r
Carex_plantaginea,Carex,Cyperaceae,Not_threatened,0.024098,1\r
Carex_scabrata,Carex,Cyperaceae,Not_threatened,0.178248,1\r
Carnegiea_gigantea,Carnegiea,Cactaceae,Not_threatened,0.249388,3\r
Carum_carvi,Carum,Apiaceae,Not_threatened,0.011321,1\r
Carya_alba,Carya,Juglandaceae,Not_threatened,0.194156,1\r
Carya_ovata,Carya,Juglandaceae,Not_threatened,0.082238,1\r
Caryocar_villosum,Caryocar,Caryocaraceae,Not_threatened,1.609438,1\r
Castilleja_linariifolia,Castilleja,Orobanchaceae,Not_threatened,0.259053,2\r
Cattleya_wallisii,Cattleya,Orchidaceae,No_data,3.192731,1\r
Caulokaempferia_coenobialis,Caulokaempferia,Zingiberaceae,Not_threatened,0.216505,1\r
Celtis_africana,Celtis,Cannabaceae,Not_threatened,0.314225,1\r
Centaurea_jacea,Centaurea,Asteraceae,Not_threatened,0.109103,2\r
Centaurea_solstitialis,Centaurea,Asteraceae,No_data,-0.000062,4\r
Centaurium_erythraea,Centaurium,Gentianaceae,Not_threatened,0.099969,4\r
Centaurium_littorale,Centaurium,Gentianaceae,Threatened,0.116221,2\r
Centaurium_pulchellum,Centaurium,Gentianaceae,Not_threatened,0.082740,2\r
Cephalanthera_falcata,Cephalanthera,Orchidaceae,Threatened,1.656230,1\r
Cerastium_alpinum,Cerastium,Caryophyllaceae,Not_threatened,0.185590,3\r
Cerastium_cerastoides,Cerastium,Caryophyllaceae,Not_threatened,0.206469,3\r
Ceratonia_siliqua,Ceratonia,Fabaceae,Not_threatened,0.542342,1\r
Cereus_repandus,Cereus,Cactaceae,Not_threatened,-0.129998,1\r
Chaerophyllum_bulbosum,Chaerophyllum,Apiaceae,Threatened,0.041385,1\r
Chaetanthera_renifolia,Chaetanthera,Asteraceae,No_data,0.588915,2\r
Chamaecrista_nictitans,Chamaecrista,Fabaceae,Not_threatened,0.078988,1\r
Chamaecrista_serpens,Chamaecrista,Fabaceae,Not_threatened,0.057158,1\r
Chelonanthus_alatus,Chelonanthus,Gentianaceae,No_data,0.062520,1\r
Chiococca_alba,Chiococca,Rubiaceae,Not_threatened,0.140198,1\r
Chironia_krebsii,Chironia,Gentianaceae,Not_threatened,-0.006027,2\r
Chloraea_bletioides,Chloraea,Orchidaceae,No_data,0.603250,2\r
Chloraea_chrysantha,Chloraea,Orchidaceae,No_data,-0.015190,1\r
Chloraea_crispa,Chloraea,Orchidaceae,No_data,1.900750,1\r
Chloraea_galeata,Chloraea,Orchidaceae,No_data,-0.125665,1\r
Chuquiraga_oppositifolia,Chuquiraga,Asteraceae,No_data,1.067682,1\r
Cipocereus_laniflorus,Cipocereus,Cactaceae,Threatened,0.635112,1\r
Cirrhaea_dependens,Cirrhaea,Orchidaceae,Not_threatened,4.332526,1\r
Cirsium_boninense,Cirsium,Asteraceae,Threatened,0.650589,1\r
Cistus_ladanifer,Cistus,Cistaceae,No_data,0.073041,1\r
Cistus_monspeliensis,Cistus,Cistaceae,Not_threatened,0.312206,1\r
Cistus_salviifolius,Cistus,Cistaceae,No_data,-0.003661,1\r
Clarkia_pulchella,Clarkia,Onagraceae,Not_threatened,0.121884,2\r
Clarkia_xantiana,Clarkia,Onagraceae,Not_threatened,0.093006,25\r
Claytonia_lanceolata,Claytonia,Montiaceae,Not_threatened,-0.248800,3\r
Claytonia_virginica,Claytonia,Montiaceae,Not_threatened,-0.047628,1\r
Cleistanthus_sumatranus,Cleistanthus,Phyllanthaceae,Not_threatened,0.452718,1\r
Clematis_boninensis,Clematis,Ranunculaceae,No_data,0.445161,1\r
Clematis_socialis,Clematis,Ranunculaceae,Threatened,0.151806,1\r
Clerodendrum_villosum,Clerodendrum,Lamiaceae,Not_threatened,0.962633,1\r
Clinopodium_vulgare,Clinopodium,Lamiaceae,Not_threatened,0.054067,1\r
Clintonia_borealis,Clintonia,Liliaceae,Not_threatened,0.040394,2\r
Clivia_gardenii,Clivia,Amaryllidaceae,Threatened,0.650589,1\r
Clivia_miniata,Clivia,Amaryllidaceae,Threatened,0.308301,1\r
Clusia_hilariana,Clusia,Clusiaceae,Not_threatened,0.726431,2\r
Clusia_nemorosa,Clusia,Clusiaceae,Not_threatened,0.484951,2\r
Cochlearia_bavarica,Cochlearia,Brassicaceae,Threatened,-0.296840,1\r
Cochlospermum_orinocense,Cochlospermum,Bixaceae,Not_threatened,0.046394,1\r
Cochlospermum_regium,Cochlospermum,Bixaceae,Not_threatened,0.583146,1\r
Collinsia_parviflora,Collinsia,Plantaginaceae,Not_threatened,-0.005614,8\r
Collinsia_sparsiflora,Collinsia,Plantaginaceae,Not_threatened,0.091993,4\r
Collinsia_verna,Collinsia,Plantaginaceae,Not_threatened,-0.048600,18\r
Cologania_broussonetii,Cologania,Fabaceae,Not_threatened,0.090473,1\r
Colutea_arborescens_subsp._hispanica,Colutea,Fabaceae,No_data,1.354546,1\r
Comarum_palustre,Comarum,Rosaceae,Not_threatened,0.238477,33\r
Combretum_leprosum,Combretum,Combretaceae,Not_threatened,-0.171850,1\r
Combretum_monetaria,Combretum,Combretaceae,Threatened,0.693147,1\r
Commelina_erecta,Commelina,Commelinaceae,Not_threatened,0.191667,1\r
Comolia_microphylla,Comolia,Melastomataceae,No_data,-0.232332,1\r
Comparettia_falcata,Comparettia,Orchidaceae,Not_threatened,-0.358183,2\r
Convolvulus_chilensis,Convolvulus,Convolvulaceae,No_data,0.212802,1\r
Convolvulus_lineatus,Convolvulus,Convolvulaceae,No_data,0.844514,5\r
Convolvulus_nodiflorus,Convolvulus,Convolvulaceae,Not_threatened,-0.273696,1\r
Copaifera_langsdorffii,Copaifera,Fabaceae,Not_threatened,1.098612,1\r
Coprosma_spathulata,Coprosma,Rubiaceae,Not_threatened,1.262291,2\r
Coptis_teeta,Coptis,Ranunculaceae,Threatened,-0.125110,1\r
Cordia_lutea,Cordia,Boraginaceae,Not_threatened,1.297030,1\r
Cordia_multispicata,Cordia,Boraginaceae,No_data,0.095669,1\r
Cordylanthus_maritimus,Cordylanthus,Orobanchaceae,Not_threatened,0.530147,2\r
Coriaria_arborea,Coriaria,Coriariaceae,Not_threatened,0.063920,2\r
Cornus_kousa_subsp._kousa,Cornus,Cornaceae,Not_threatened,-0.047820,1\r
Corydalis_ambigua,Corydalis,Papaveraceae,No_data,0.451524,16\r
Corydalis_lineariloba,Corydalis,Papaveraceae,No_data,0.058477,4\r
Corymborkis_flava,Corymborkis,Orchidaceae,Not_threatened,0.164303,1\r
Costus_arabicus,Costus,Costaceae,No_data,0.215111,1\r
Couepia_uiti,Couepia,Chrysobalanaceae,No_data,-0.310155,1\r
Craigia_yunnanensis,Craigia,Malvaceae,Threatened,1.591059,1\r
Crataegus_monogyna,Crataegus,Rosaceae,Not_threatened,0.597837,1\r
Crepidiastrum_grandicollum,Crepidiastrum,Asteraceae,Threatened,0.068996,1\r
Crinodendron_patagua,Crinodendron,Elaeocarpaceae,No_data,0.000000,1\r
Crocosmia_x_crocosmiiflora,Crocosmia,Iridaceae,No_data,0.142586,1\r
Crocus_spp.,Crocus,Iridaceae,No_data,0.169129,1\r
Crotalaria_vitellina,Crotalaria,Fabaceae,Not_threatened,-0.847298,1\r
Croton_sarcopetalus,Croton,Euphorbiaceae,No_data,0.061558,1\r
Croton_sonderianus,Croton,Euphorbiaceae,No_data,0.465363,1\r
Cucurbita_foetidissima,Cucurbita,Cucurbitaceae,Not_threatened,-0.123059,3\r
Cuphea_melvilla,Cuphea,Lythraceae,Not_threatened,-1.113001,1\r
Cybistax_antisyphilitica,Cybistax,Bignoniaceae,Not_threatened,2.708050,1\r
Cyclopogon_cranichoides,Cyclopogon,Orchidaceae,Not_threatened,1.195860,2\r
Cymbidium_goeringii,Cymbidium,Orchidaceae,Threatened,2.707550,1\r
Cymbidium_lancifolium,Cymbidium,Orchidaceae,Not_threatened,2.605013,3\r
Cymbidium_macrorhizon,Cymbidium,Orchidaceae,Threatened,0.308626,2\r
Cynanchum_otophyllum,Cynanchum,Apocynaceae,Not_threatened,2.367124,1\r
Cypella_herbertii,Cypella,Iridaceae,No_data,1.912387,1\r
Cypripedium_acaule,Cypripedium,Orchidaceae,Not_threatened,2.965796,29\r
Cypripedium_bardolphianum,Cypripedium,Orchidaceae,Threatened,1.906170,1\r
Cypripedium_candidum,Cypripedium,Orchidaceae,Threatened,2.163073,2\r
Cypripedium_fasciculatum,Cypripedium,Orchidaceae,Threatened,0.968011,2\r
Cypripedium_flavum,Cypripedium,Orchidaceae,Threatened,2.396896,1\r
Cypripedium_henryi,Cypripedium,Orchidaceae,Threatened,1.003302,1\r
Cypripedium_japonicum,Cypripedium,Orchidaceae,Threatened,2.427327,2\r
Cypripedium_macranthos,Cypripedium,Orchidaceae,Not_threatened,1.545937,4\r
Cypripedium_plectrochilum,Cypripedium,Orchidaceae,Threatened,0.836248,1\r
Cypripedium_tibeticum,Cypripedium,Orchidaceae,Not_threatened,2.343407,1\r
Cyrtanthus_guthrieae,Cyrtanthus,Amaryllidaceae,Threatened,2.018287,1\r
Cyrtanthus_ventricosus,Cyrtanthus,Amaryllidaceae,Not_threatened,1.157453,1\r
Cyrtopodium_flavum,Cyrtopodium,Orchidaceae,Not_threatened,3.896896,2\r
Cytisus_striatus,Cytisus,Fabaceae,Not_threatened,0.447158,2\r
Dactylorhiza_incarnata,Dactylorhiza,Orchidaceae,No_data,0.288771,4\r
Dactylorhiza_lapponica,Dactylorhiza,Orchidaceae,Not_threatened,1.045567,6\r
Daphne_gnidium,Daphne,Thymelaeaceae,No_data,1.248424,1\r
Daphne_jezoensis,Daphne,Thymelaeaceae,No_data,0.420503,1\r
Daphne_laureola,Daphne,Thymelaeaceae,Not_threatened,0.129061,4\r
Daphne_rodriguezii,Daphne,Thymelaeaceae,Threatened,3.818930,1\r
Darlingtonia_californica,Darlingtonia,Sarraceniaceae,Not_threatened,0.748887,5\r
Davilla_kunthii,Davilla,Dilleniaceae,No_data,-0.093260,1\r
Dayaoshania_cotinifolia,Dayaoshania,Gesneriaceae,Threatened,1.133704,1\r
Decodon_verticillatus,Decodon,Lythraceae,Not_threatened,0.124367,2\r
Delphinium_caeruleum,Delphinium,Ranunculaceae,Not_threatened,0.014997,1\r
Delphinium_menziesii,Delphinium,Ranunculaceae,Not_threatened,0.084669,4\r
Dendrobium_catenatum,Dendrobium,Orchidaceae,Threatened,1.131402,1\r
Dendrobium_cunninghamii,Dendrobium,Orchidaceae,Not_threatened,1.203973,1\r
Derris_ovalifolia,Derris,Fabaceae,Threatened,0.479573,1\r
Dianella_revoluta,Dianella,Xanthorrhoeaceae,No_data,0.980829,1\r
Dianthus_deltoides,Dianthus,Caryophyllaceae,Threatened,0.529450,5\r
Dicerandra_frutescens,Dicerandra,Lamiaceae,Threatened,-0.120890,1\r
Dichorisandra_hexandra,Dichorisandra,Commelinaceae,No_data,1.299283,1\r
Dichorisandra_incurva,Dichorisandra,Commelinaceae,No_data,-0.295464,1\r
Dierama_dracomontanum,Dierama,Iridaceae,Not_threatened,0.133713,1\r
Dierama_luteoalbidum,Dierama,Iridaceae,Threatened,0.037138,1\r
Dillwynia_hispida,Dillwynia,Fabaceae,No_data,0.348839,8\r
Diospyros_vera,Diospyros,Ebenaceae,No_data,-0.048551,1\r
Diplusodon_hirsutus,Diplusodon,Lythraceae,No_data,-0.235637,1\r
Diplusodon_orbicularis,Diplusodon,Lythraceae,Threatened,0.211309,1\r
Dipterocarpus_oblongifolius,Dipterocarpus,Dipterocarpaceae,Not_threatened,0.851996,1\r
Dipteryx_alata,Dipteryx,Fabaceae,Threatened,0.806476,1\r
Disa_atricapilla,Disa,Orchidaceae,Not_threatened,0.733969,1\r
Disa_bivalvata,Disa,Orchidaceae,Not_threatened,0.531149,1\r
Disa_draconis,Disa,Orchidaceae,Threatened,1.863594,3\r
Disa_fasciata,Disa,Orchidaceae,Not_threatened,0.743920,1\r
Disa_pulchra,Disa,Orchidaceae,Not_threatened,1.428389,1\r
Disa_racemosa,Disa,Orchidaceae,Not_threatened,1.639564,2\r
Disa_tenella,Disa,Orchidaceae,Threatened,0.270207,1\r
Disa_tenuifolia,Disa,Orchidaceae,Not_threatened,0.559035,2\r
Disa_uniflora,Disa,Orchidaceae,Not_threatened,0.714015,6\r
Disanthus_cercidifolius,Disanthus,Hamamelidaceae,Threatened,2.795062,1\r
Discaria_americana,Discaria,Rhamnaceae,Threatened,1.190728,1\r
Distichlis_spicata,Distichlis,Poaceae,Not_threatened,0.851379,3\r
Distylium_lepidotum,Distylium,Hamamelidaceae,Not_threatened,0.145257,1\r
Diuris_magnifica,Diuris,Orchidaceae,No_data,2.079088,1\r
Dodecatheon_hendersonii,Dodecatheon,Primulaceae,Not_threatened,0.030123,4\r
Dodonaea_viscosa_subsp._angustifolia,Dodonaea,Sapindaceae,Not_threatened,0.693147,1\r
Dombeya_acutangula,Dombeya,Malvaceae,Threatened,0.503692,5\r
Dorycnium_hirsutum,Dorycnium,Fabaceae,Not_threatened,0.244842,1\r
Dracocephalum_austriacum,Dracocephalum,Lamiaceae,Threatened,0.315499,4\r
Drimia_maritima,Drimia,Asparagaceae,Not_threatened,0.117783,1\r
Dryas_octopetala,Dryas,Rosaceae,Not_threatened,0.201102,3\r
Drypetes_integerrima,Drypetes,Putranjivaceae,Threatened,1.771965,1\r
Duperrea_pavettifolia,Duperrea,Rubiaceae,Not_threatened,2.591216,2\r
Durio_grandiflorus,Durio,Malvaceae,Threatened,0.077962,1\r
Durio_kutejensis,Durio,Malvaceae,Threatened,0.050010,1\r
Dyckia_tuberosa,Dyckia,Bromeliaceae,Not_threatened,0.672356,1\r
Dypsis_decaryi,Dypsis,Arecaceae,Threatened,0.223144,1\r
Dysosma_pleiantha,Dysosma,Berberidaceae,Threatened,1.486378,1\r
Earina_aestivalis,Earina,Orchidaceae,Not_threatened,2.418757,1\r
Earina_autumnalis,Earina,Orchidaceae,Not_threatened,0.703098,1\r
Earina_mucronata,Earina,Orchidaceae,Not_threatened,2.833213,1\r
Echeveria_gibbiflora,Echeveria,Crassulaceae,No_data,0.241269,1\r
Echinacea_laevigata,Echinacea,Asteraceae,Threatened,0.057731,6\r
Echinodorus_longipetalus,Echinodorus,Alismataceae,No_data,0.083477,1\r
Echinopsis_atacamensis,Echinopsis,Cactaceae,Threatened,0.547560,2\r
Echium_vulgare,Echium,Boraginaceae,Not_threatened,0.010695,1\r
Echium_wildpretii,Echium,Boraginaceae,Threatened,-0.081248,1\r
Elaeagnus_mollis,Elaeagnus,Elaeagnaceae,Threatened,1.350526,1\r
Elaeagnus_rotundata,Elaeagnus,Elaeagnaceae,Threatened,0.952033,1\r
Elaeocarpus_photiniifolia,Elaeocarpus,Elaeocarpaceae,No_data,0.956178,1\r
Elleanthus_brasiliensis,Elleanthus,Orchidaceae,No_data,1.123930,1\r
Embothrium_coccineum,Embothrium,Proteaceae,Not_threatened,0.903908,9\r
Encholirium_heloisae,Encholirium,Bromeliaceae,Threatened,0.406859,1\r
Ensete_lasiocarpum,Ensete,Musaceae,No_data,0.129293,2\r
Epidendrum_ciliare,Epidendrum,Orchidaceae,Not_threatened,1.779638,1\r
Epidendrum_paniculatum,Epidendrum,Orchidaceae,No_data,5.991465,1\r
Epimedium_franchetii,Epimedium,Berberidaceae,Not_threatened,0.125065,1\r
Epimedium_leptorrhizum,Epimedium,Berberidaceae,Threatened,0.100083,1\r
Epimedium_mikinorii,Epimedium,Berberidaceae,Threatened,0.051776,1\r
Epimedium_sutchuenense,Epimedium,Berberidaceae,Not_threatened,0.242358,1\r
Epipactis_helleborine,Epipactis,Orchidaceae,Not_threatened,0.633131,9\r
Epipactis_palustris,Epipactis,Orchidaceae,Not_threatened,0.294574,2\r
Eremophila_glabra,Eremophila,Scrophulariaceae,No_data,0.928562,1\r
Eremosparton_songoricum,Eremosparton,Fabaceae,Threatened,0.571254,3\r
Eria_coronaria,Eria,Orchidaceae,Not_threatened,1.487423,1\r
Erica_multiflora,Erica,Ericaceae,Threatened,0.783792,3\r
Erigeron_breviscapus,Erigeron,Asteraceae,Threatened,1.205971,1\r
Eriobotrya_japonica,Eriobotrya,Rosaceae,Threatened,2.004594,1\r
Eriocnema_fulva,Eriocnema,Balsaminaceae,Threatened,0.198872,2\r
Eriosema_distinctum,Eriosema,Fabaceae,Not_threatened,0.002327,2\r
Erodium_glandulosum_subsp._paularense,Erodium,Geraniaceae,No_data,0.013793,1\r
Eryngium_cuneifolium,Eryngium,Apiaceae,Threatened,-0.162519,1\r
Erysimum_capitatum,Erysimum,Brassicaceae,Not_threatened,-0.408597,1\r
Erysimum_popovii,Erysimum,Brassicaceae,No_data,0.272943,13\r
Erythronium_americanum,Erythronium,Liliaceae,Not_threatened,0.337444,1\r
Erythronium_grandiflorum,Erythronium,Liliaceae,Not_threatened,0.479949,27\r
Erythronium_oregonum,Erythronium,Liliaceae,Not_threatened,0.108558,8\r
Erythronium_umbilicatum,Erythronium,Liliaceae,Not_threatened,-0.036432,8\r
Erythroxylum_campestre,Erythroxylum,Erythroxylaceae,No_data,-0.145676,2\r
Erythroxylum_havanense,Erythroxylum,Erythroxylaceae,Not_threatened,0.294498,2\r
Erythroxylum_suberosum,Erythroxylum,Erythroxylaceae,Not_threatened,-0.155077,2\r
Erythroxylum_tortuosum,Erythroxylum,Erythroxylaceae,Not_threatened,-0.700610,2\r
Escallonia_myrtoidea,Escallonia,Escalloniaceae,No_data,2.047693,1\r
Eschweilera_nana,Eschweilera,Lecythidaceae,Not_threatened,0.978326,1\r
Eugenia_punicifolia,Eugenia,Myrtaceae,Not_threatened,0.527035,1\r
Eugenia_roxburghii,Eugenia,Myrtaceae,Not_threatened,0.348307,1\r
Eugenia_selloi,Eugenia,Myrtaceae,Not_threatened,0.221628,1\r
Eugenia_uniflora,Eugenia,Myrtaceae,Not_threatened,1.317827,1\r
Eulophia_alta,Eulophia,Orchidaceae,Not_threatened,1.653998,2\r
Eulophia_graminea,Eulophia,Orchidaceae,Threatened,1.490379,1\r
Euonymus_chloranthoides,Euonymus,Celastraceae,Threatened,1.765385,1\r
Euphorbia_baetica,Euphorbia,Euphorbiaceae,No_data,-0.041673,1\r
Euphorbia_nicaeensis,Euphorbia,Euphorbiaceae,No_data,0.003145,1\r
Euphrasia_willkommii,Euphrasia,Orobanchaceae,Threatened,0.006810,1\r
Eurya_boninensis,Eurya,Pentaphylacaceae,Threatened,0.354752,1\r
Eurya_japonica,Eurya,Pentaphylacaceae,Not_threatened,0.951325,2\r
Euthamia_graminifolia,Euthamia,Asteraceae,Not_threatened,0.231129,2\r
Fagopyrum_acutatum,Fagopyrum,Polygonaceae,No_data,0.157530,2\r
Ferocactus_cylindraceus,Ferocactus,Cactaceae,Not_threatened,0.324776,1\r
Ferocactus_wislizeni,Ferocactus,Cactaceae,Threatened,0.006689,1\r
Flourensia_cernua,Flourensia,Asteraceae,Not_threatened,-0.131947,2\r
Fridericia_conjugata,Fridericia,Bignoniaceae,No_data,1.107865,1\r
Fridericia_dichotoma,Fridericia,Bignoniaceae,No_data,0.086474,1\r
Fritillaria_meleagris,Fritillaria,Liliaceae,Threatened,-0.217754,2\r
Fuchsia_excorticata,Fuchsia,Onagraceae,Not_threatened,0.382769,22\r
Fumana_juniperina,Fumana,Cistaceae,Threatened,0.155976,1\r
Fumana_thymifolia,Fumana,Cistaceae,No_data,-0.033336,1\r
Gagea_lutea,Gagea,Liliaceae,Not_threatened,0.398030,1\r
Galearis_spathulata,Galearis,Orchidaceae,Not_threatened,0.483011,1\r
Galipea_jasminiflora,Galipea,Rutaceae,Not_threatened,2.715547,1\r
Garcinia_brasiliensis,Garcinia,Clusiaceae,Not_threatened,0.902223,1\r
Gardenia_boninensis,Gardenia,Rubiaceae,Threatened,0.966172,1\r
Gavilea_araucana,Gavilea,Orchidaceae,No_data,0.011061,1\r
Gavilea_odoratissima,Gavilea,Orchidaceae,No_data,2.007468,1\r
Gavilea_venosa,Gavilea,Orchidaceae,No_data,1.244795,1\r
Gaylussacia_brasiliensis,Gaylussacia,Ericaceae,Not_threatened,0.632068,1\r
Gelsemium_sempervirens,Gelsemium,Gelsemiaceae,Not_threatened,0.566430,3\r
Geniostoma_fagraeoides,Geniostoma,Loganiaceae,No_data,0.308266,1\r
Gentiana_crassa_subsp._rigescens,Gentiana,Gentianaceae,No_data,-0.909036,1\r
Gentiana_cruciata,Gentiana,Gentianaceae,Not_threatened,0.204606,2\r
Gentiana_straminea,Gentiana,Gentianaceae,Not_threatened,0.431084,13\r
Gentiana_stylophora,Gentiana,Gentianaceae,No_data,0.361416,4\r
Gentianella_germanica,Gentianella,Gentianaceae,Threatened,0.148683,1\r
Geoffroea_decorticans,Geoffroea,Fabaceae,Not_threatened,1.007641,1\r
Geonoma_pohliana_subsp._weddelliana,Geonoma,Arecaceae,No_data,0.300105,1\r
Geranium_maculatum,Geranium,Geraniaceae,Not_threatened,-0.023535,12\r
Geranium_sylvaticum,Geranium,Geraniaceae,Not_threatened,0.208766,13\r
Gerbera_aurantiaca,Gerbera,Asteraceae,Threatened,0.861730,5\r
Gesneria_citrina,Gesneria,Gesneriaceae,Threatened,0.413187,1\r
Gesneria_cuneifolia,Gesneria,Gesneriaceae,Threatened,0.091567,1\r
Gesneria_leucomalla,Gesneria,Gesneriaceae,No_data,0.140582,1\r
Gesneria_pedunculosa,Gesneria,Gesneriaceae,Not_threatened,0.352821,1\r
Gesneria_reticulata,Gesneria,Gesneriaceae,Not_threatened,0.023257,1\r
Gesneria_vernicosa,Gesneria,Gesneriaceae,No_data,0.063513,1\r
Gesneria_viridiflora_subsp._quisqueyana,Gesneria,Gesneriaceae,Not_threatened,0.207639,1\r
Gesneria_viridiflora_subsp._sintenisii,Gesneria,Gesneriaceae,Not_threatened,0.048790,1\r
Geum_rivale,Geum,Rosaceae,Not_threatened,0.106483,1\r
Gladiolus_liliaceus,Gladiolus,Iridaceae,Not_threatened,-0.029139,2\r
Gladiolus_longicollis,Gladiolus,Iridaceae,No_data,0.637109,4\r
Glaucium_flavum,Glaucium,Papaveraceae,Not_threatened,0.163525,8\r
Glechoma_hederacea,Glechoma,Lamiaceae,Not_threatened,0.740660,3\r
Glionnetia_sericea,Glionnetia,Rubiaceae,Threatened,-0.357981,2\r
Globimetula_braunii,Globimetula,Loranthaceae,Not_threatened,0.439176,1\r
Glycosmis_pentaphylla,Glycosmis,Rutaceae,Not_threatened,0.476083,1\r
Gnidia_glauca,Gnidia,Thymelaeaceae,Not_threatened,0.031069,4\r
Gongora_quinquenervis,Gongora,Orchidaceae,Not_threatened,4.235423,1\r
Goodyera_boninensis,Goodyera,Orchidaceae,Threatened,1.011588,1\r
Govenia_utriculata,Govenia,Orchidaceae,Not_threatened,1.839138,1\r
Grevillea_barklyana,Grevillea,Proteaceae,Threatened,-0.298919,2\r
Grevillea_repens,Grevillea,Proteaceae,Not_threatened,2.478950,5\r
Grevillea_sphacelata,Grevillea,Proteaceae,Not_threatened,-0.191593,2\r
Grobya_amherstiae,Grobya,Orchidaceae,No_data,1.334519,2\r
Gymnadenia_conopsea,Gymnadenia,Orchidaceae,Not_threatened,0.256103,17\r
Gymnocladus_assamicus,Gymnocladus,Fabaceae,Threatened,0.347734,1\r
Habenaria_johannensis,Habenaria,Orchidaceae,No_data,3.186958,1\r
Habenaria_paulistana,Habenaria,Orchidaceae,No_data,0.758217,1\r
Haemanthus_sanguineus,Haemanthus,Amaryllidaceae,Not_threatened,1.660296,1\r
Halimium_halimifolium,Halimium,Cistaceae,No_data,0.235989,2\r
Hamamelis_virginiana,Hamamelis,Hamamelidaceae,Not_threatened,0.871328,2\r
Handeliodendron_bodinieri,Handeliodendron,Sapindaceae,Threatened,0.598149,1\r
Handroanthus_chrysotrichus,Handroanthus,Bignoniaceae,No_data,1.348438,2\r
Handroanthus_heptaphyllus,Handroanthus,Bignoniaceae,Not_threatened,0.521685,2\r
Handroanthus_impetiginosus,Handroanthus,Bignoniaceae,Threatened,1.826189,2\r
Handroanthus_ochraceus,Handroanthus,Bignoniaceae,No_data,-0.207639,1\r
Handroanthus_serratifolius,Handroanthus,Bignoniaceae,Threatened,0.124937,1\r
Handroanthus_umbellatus,Handroanthus,Bignoniaceae,Not_threatened,1.085873,1\r
Handroanthus_vellosoi,Handroanthus,Bignoniaceae,Not_threatened,0.396415,1\r
Hebe_macrocarpa,Hebe,Plantaginaceae,Not_threatened,0.459053,2\r
Hedychium_spicatum,Hedychium,Zingiberaceae,Not_threatened,0.490971,1\r
Hedychium_villosum,Hedychium,Zingiberaceae,Threatened,1.594589,1\r
Hedychium_villosum_var._tenuiflorum,Hedychium,Zingiberaceae,No_data,2.253679,1\r
Hedychium_yunnanense,Hedychium,Zingiberaceae,Not_threatened,0.331645,1\r
Hedysarum_coronarium,Hedysarum,Fabaceae,Not_threatened,0.213921,2\r
Hedysarum_scoparium,Hedysarum,Fabaceae,Threatened,0.018947,2\r
Helianthemum_soongaricum,Helianthemum,Cistaceae,No_data,0.827678,1\r
Helianthemum_squamatum,Helianthemum,Cistaceae,No_data,0.022141,1\r
Helianthus_exilis,Helianthus,Asteraceae,Threatened,0.092115,2\r
Helichrysum_stoechas,Helichrysum,Asteraceae,Not_threatened,0.121697,1\r
Heliconia_metallica,Heliconia,Heliconiaceae,No_data,0.257849,2\r
Helleborus_foetidus,Helleborus,Ranunculaceae,Not_threatened,0.093509,4\r
Hemerocallis_hybrida,Hemerocallis,Xanthorrhoeaceae,No_data,1.823397,1\r
Hepatica_nobilis_var._obtusa,Hepatica,Ranunculaceae,Not_threatened,0.000000,1\r
Heptacodium_miconioides,Heptacodium,Caprifoliaceae,Threatened,-0.303636,1\r
Hesperidanthus_suffrutescens,Hesperidanthus,Brassicaceae,No_data,0.854597,1\r
Heteropterys_alternifolia,Heteropterys,Malpighiaceae,Not_threatened,1.817077,1\r
Hibiscus_tiliaceus,Hibiscus,Malvaceae,Not_threatened,0.601210,1\r
Hillia_parasitica,Hillia,Rubiaceae,Not_threatened,0.819840,1\r
Himantoglossum_robertianum,Himantoglossum,Orchidaceae,Not_threatened,0.302513,3\r
Hippocrepis_emerus_subsp._emerus,Hippocrepis,Fabaceae,Not_threatened,-0.480804,1\r
Hortia_brasiliana,Hortia,Rutaceae,Not_threatened,0.243622,1\r
Hydrophyllum_fendleri,Hydrophyllum,Boraginaceae,Not_threatened,0.163827,1\r
Hyoscyamus_niger,Hyoscyamus,Solanaceae,Not_threatened,-0.050102,1\r
Hypericum_cumulicola,Hypericum,Hypericaceae,Threatened,0.044452,1\r
Hypericum_maculatum,Hypericum,Hypericaceae,Not_threatened,0.076196,1\r
Hypochaeris_thrincioides,Hypochaeris,Asteraceae,No_data,0.294764,2\r
Hypselodelphys_hirsuta,Hypselodelphys,Marantaceae,Not_threatened,1.790448,1\r
Hypselodelphys_poggeana,Hypselodelphys,Marantaceae,Not_threatened,3.011862,1\r
Hypselodelphys_scandens,Hypselodelphys,Marantaceae,Not_threatened,3.020025,1\r
Ilex_crenata,Ilex,Aquifoliaceae,Not_threatened,0.559616,1\r
Ilex_mertensii,Ilex,Aquifoliaceae,Threatened,0.256420,1\r
Ilex_pedunculosa,Ilex,Aquifoliaceae,Not_threatened,-0.017700,1\r
Ilex_serrata,Ilex,Aquifoliaceae,Not_threatened,0.120364,1\r
Impatiens_capensis,Impatiens,Balsaminaceae,Not_threatened,0.084247,2\r
Impatiens_hainanensis,Impatiens,Balsaminaceae,Threatened,0.569624,3\r
Impatiens_lateristachys,Impatiens,Balsaminaceae,No_data,-0.333144,1\r
Impatiens_latifolia,Impatiens,Balsaminaceae,No_data,0.641854,1\r
Impatiens_platyadena,Impatiens,Balsaminaceae,Threatened,0.233615,1\r
Incarvillea_mairei,Incarvillea,Bignoniaceae,Not_threatened,4.692507,3\r
Incarvillea_sinensis,Incarvillea,Bignoniaceae,Not_threatened,0.029853,1\r
Inga_densiflora,Inga,Fabaceae,Not_threatened,1.609438,1\r
Inga_mortoniana,Inga,Fabaceae,Not_threatened,3.198673,1\r
Inga_oerstediana,Inga,Fabaceae,Not_threatened,0.875469,1\r
Inga_punctata,Inga,Fabaceae,Not_threatened,2.302585,1\r
Inga_sierrae,Inga,Fabaceae,Not_threatened,2.456736,1\r
Inula_royleana,Inula,Asteraceae,No_data,0.331752,1\r
Ionopsis_utricularioides,Ionopsis,Orchidaceae,Not_threatened,1.141400,1\r
Ipomoea_asarifolia,Ipomoea,Convolvulaceae,Not_threatened,-0.236389,1\r
Ipomoea_bahiensis,Ipomoea,Convolvulaceae,No_data,0.291521,1\r
Ipomoea_eriocalyx,Ipomoea,Convolvulaceae,No_data,-0.112212,1\r
Ipomoea_purpurea,Ipomoea,Convolvulaceae,No_data,-0.096556,2\r
Ipomoea_wolcottiana,Ipomoea,Convolvulaceae,Not_threatened,1.125646,2\r
Ipomopsis_aggregata,Ipomopsis,Polemoniaceae,Not_threatened,0.492760,29\r
Iris_atropurpurea,Iris,Iridaceae,Threatened,0.536055,3\r
Iris_cristata,Iris,Iridaceae,Not_threatened,0.052644,1\r
Iris_ensata,Iris,Iridaceae,Threatened,0.169899,1\r
Iris_fulva,Iris,Iridaceae,Threatened,0.274456,2\r
Iris_haynei,Iris,Iridaceae,Threatened,0.494670,2\r
Iris_speculatrix,Iris,Iridaceae,Not_threatened,0.068993,1\r
Iris_tectorum,Iris,Iridaceae,No_data,0.148190,1\r
Iris_tenax,Iris,Iridaceae,Not_threatened,0.400342,4\r
Iris_tuberosa,Iris,Iridaceae,No_data,0.233307,4\r
Iris_versicolor,Iris,Iridaceae,Not_threatened,-0.021469,5\r
Isoplexis_canariensis,Isoplexis,Plantaginaceae,Threatened,0.045618,1\r
Ixeris_chinensis,Ixeris,Asteraceae,Not_threatened,0.325422,1\r
Ixeris_longirostra,Ixeris,Asteraceae,Threatened,0.012427,1\r
Ixianthes_retzioides,Ixianthes,Stilbaceae,Not_threatened,1.905535,1\r
Ixora_pavetta,Ixora,Rubiaceae,Not_threatened,0.505549,1\r
Jacaranda_copaia,Jacaranda,Bignoniaceae,Not_threatened,1.776492,1\r
Jacaratia_spinosa,Jacaratia,Caricaceae,Not_threatened,-0.916291,1\r
Jasminum_fruticans,Jasminum,Oleaceae,No_data,0.184965,4\r
Jatropha_mollissima,Jatropha,Euphorbiaceae,No_data,0.085925,2\r
Jatropha_mutabilis,Jatropha,Euphorbiaceae,No_data,0.094851,2\r
Jatropha_ribifolia,Jatropha,Euphorbiaceae,No_data,-0.105361,1\r
Juglans_mandshurica,Juglans,Juglandaceae,Not_threatened,0.208868,2\r
Justicia_adhatoda,Justicia,Acanthaceae,Not_threatened,2.130921,1\r
Justicia_sebastianopolitanae,Justicia,Acanthaceae,No_data,-0.196209,2\r
Kallstroemia_grandiflora,Kallstroemia,Zygophyllaceae,Not_threatened,-0.019019,3\r
Kalmia_latifolia,Kalmia,Ericaceae,Not_threatened,0.174705,7\r
Kielmeyera_abdita,Kielmeyera,Calophyllaceae,No_data,0.917793,1\r
Kielmeyera_coriacea,Kielmeyera,Calophyllaceae,No_data,0.480366,1\r
Kielmeyera_speciosa,Kielmeyera,Calophyllaceae,Not_threatened,0.590199,1\r
Kielmeyera_variabilis,Kielmeyera,Calophyllaceae,No_data,0.196115,1\r
Knightia_excelsa,Knightia,Proteaceae,Not_threatened,0.495104,2\r
Kniphofia_linearifolia,Kniphofia,Xanthorrhoeaceae,Not_threatened,0.449227,1\r
Krascheninnikovia_ceratoides,Krascheninnikovia,Amaranthaceae,No_data,0.191799,1\r
Laguncularia_racemosa,Laguncularia,Combretaceae,Not_threatened,-0.691104,1\r
Lasthenia_fremontii,Lasthenia,Asteraceae,Not_threatened,0.053578,1\r
Lathyrus_vernus,Lathyrus,Fabaceae,Not_threatened,1.027705,3\r
Lavoisiera_imbricata,Lavoisiera,Melastomataceae,Not_threatened,0.100498,1\r
Leandra_regnellii,Leandra,Melastomataceae,No_data,0.220543,1\r
Leandra_variabilis,Leandra,Melastomataceae,Not_threatened,0.188052,1\r
Lecocarpus_pinnatifidus,Lecocarpus,Asteraceae,Threatened,0.278713,1\r
Ledum_palustre_subsp._groenlandicum,Ledum,Ericaceae,No_data,-0.139060,1\r
Lepidagathis_sessilifolia,Lepidagathis,Acanthaceae,No_data,-0.179586,1\r
Lepidium_papilliferum,Lepidium,Brassicaceae,Threatened,1.894179,11\r
Lepisanthes_tetraphylla,Lepisanthes,Sapindaceae,Not_threatened,0.753772,1\r
Leptopetalum_grayi,Leptopetalum,Rubiaceae,No_data,0.149352,1\r
Leptosiphon_jepsonii,Leptosiphon,Polemoniaceae,No_data,0.144677,9\r
Leucanthemum_vulgare,Leucanthemum,Asteraceae,Not_threatened,-0.135802,1\r
Leucopogon_fasciculatus,Leucopogon,Ericaceae,Not_threatened,0.638450,2\r
Leucospermum_conocarpodendron,Leucospermum,Proteaceae,Threatened,0.188723,9\r
Liatris_ohlingerae,Liatris,Asteraceae,Threatened,0.483174,1\r
Ligaria_cuneifolia,Ligaria,Loranthaceae,No_data,0.184571,1\r
Ligustrum_micranthum,Ligustrum,Oleaceae,No_data,0.550136,1\r
Lilium_auratum,Lilium,Liliaceae,No_data,0.777558,1\r
Limnanthes_douglasii_subsp._rosea,Limnanthes,Limnanthaceae,Threatened,0.443590,3\r
Limonium_chrysocomum,Limonium,Plumbaginaceae,Not_threatened,-0.035627,1\r
Limonium_otolepis,Limonium,Plumbaginaceae,No_data,-0.590284,1\r
Linanthus_bicolor,Linanthus,Polemoniaceae,Not_threatened,0.036035,6\r
Linanthus_parviflorus,Linanthus,Polemoniaceae,No_data,0.227097,8\r
Lindera_benzoin,Lindera,Lauraceae,Not_threatened,-0.160602,2\r
Linum_lewisii,Linum,Linaceae,Not_threatened,-0.151251,3\r
Lobelia_boykinii,Lobelia,Campanulaceae,Threatened,0.406773,3\r
Lobelia_cardinalis,Lobelia,Campanulaceae,Not_threatened,0.457213,12\r
Lobelia_chinensis,Lobelia,Campanulaceae,Not_threatened,1.139434,1\r
Lobelia_gregoriana,Lobelia,Campanulaceae,No_data,-0.020619,1\r
Lobelia_siphilitica,Lobelia,Campanulaceae,Not_threatened,0.708611,3\r
Lobelia_telekii,Lobelia,Campanulaceae,No_data,0.288754,1\r
Lomatium_salmoniflorum,Lomatium,Apiaceae,Threatened,-0.051366,1\r
Lonicera_flava,Lonicera,Caprifoliaceae,Not_threatened,-0.117783,1\r
Lophocereus_schottii,Lophocereus,Cactaceae,Threatened,0.117289,13\r
Luculia_pinceana,Luculia,Rubiaceae,Not_threatened,0.104955,2\r
Luisia_boninensis,Luisia,Orchidaceae,Threatened,1.003330,1\r
Lupinus_arcticus,Lupinus,Fabaceae,Not_threatened,-1.089675,3\r
Lycium_cestroides,Lycium,Solanaceae,Threatened,0.617309,1\r
Lysimachia_mauritiana_var._rubida,Lysimachia,Primulaceae,Not_threatened,0.463130,1\r
Lythrum_salicaria,Lythrum,Lythraceae,Not_threatened,0.320156,22\r
Macairea_radula,Macairea,Melastomataceae,No_data,-0.078836,1\r
Machilus_boninensis,Machilus,Lauraceae,Not_threatened,1.829954,1\r
Machilus_kobu,Machilus,Lauraceae,Not_threatened,0.469359,1\r
Macropiper_excelsum,Macropiper,Piperaceae,Threatened,-0.128596,2\r
Magnolia_coriacea,Magnolia,Magnoliaceae,Threatened,1.761715,1\r
Magnolia_grandis,Magnolia,Magnoliaceae,Threatened,-0.693147,1\r
Magnolia_hookeri,Magnolia,Magnoliaceae,No_data,-0.072168,2\r
Magnolia_kwangsiensis,Magnolia,Magnoliaceae,Threatened,0.229785,2\r
Magnolia_obovata,Magnolia,Magnoliaceae,Not_threatened,0.941770,1\r
Magnolia_officinalis_var._biloba,Magnolia,Magnoliaceae,Threatened,1.824549,1\r
Magnolia_stellata,Magnolia,Magnoliaceae,Threatened,4.458988,1\r
Maianthemum_bifolium,Maianthemum,Asparagaceae,Not_threatened,1.128465,1\r
Maianthemum_canadense,Maianthemum,Asparagaceae,Not_threatened,0.341651,8\r
Maianthemum_dilatatum,Maianthemum,Asparagaceae,Not_threatened,1.727220,1\r
Maianthemum_stellatum,Maianthemum,Asparagaceae,Not_threatened,-0.648054,1\r
Maianthemum_trifolium,Maianthemum,Asparagaceae,Not_threatened,0.050894,1\r
Mallotus_apelta,Mallotus,Euphorbiaceae,Not_threatened,0.031141,2\r
Mallotus_japonicus,Mallotus,Euphorbiaceae,Not_threatened,0.119546,1\r
Malus_sieversii,Malus,Rosaceae,Threatened,0.245569,3\r
Mandevilla_pentlandiana,Mandevilla,Apocynaceae,No_data,-0.178169,1\r
Manettia_cordifolia,Manettia,Rubiaceae,No_data,0.245122,1\r
Manettia_luteorubra,Manettia,Rubiaceae,No_data,0.037898,2\r
Manettia_mitis,Manettia,Rubiaceae,No_data,0.217749,2\r
Marantochloa_conferta,Marantochloa,Marantaceae,No_data,0.987262,1\r
Marantochloa_grandiflora,Marantochloa,Marantaceae,No_data,0.940320,1\r
Marcetia_taxifolia,Marcetia,Melastomataceae,No_data,-0.143101,1\r
Margaritopsis_cymuligera,Margaritopsis,Rubiaceae,No_data,-0.130797,1\r
Marginatocereus_marginatus,Marginatocereus,Cactaceae,No_data,0.189445,1\r
Melampyrum_pratense,Melampyrum,Orobanchaceae,Not_threatened,0.245722,3\r
Melastoma_intermedium,Melastoma,Melastomataceae,Not_threatened,-0.369830,1\r
Melastoma_malabathricum,Melastoma,Melastomataceae,Not_threatened,0.153134,2\r
Melastoma_sanguineum,Melastoma,Melastomataceae,Not_threatened,1.285596,4\r
Melastoma_tetramerum,Melastoma,Melastomataceae,Threatened,-1.074142,1\r
Melicope_nishimurae,Melicope,Rutaceae,Threatened,0.392773,2\r
Melicope_simplex,Melicope,Rutaceae,Not_threatened,1.230610,2\r
Melicytus_micranthus,Melicytus,Violaceae,Not_threatened,1.112610,2\r
Melicytus_novae-zelandiae,Melicytus,Violaceae,Not_threatened,0.130508,2\r
Melocactus_glaucescens,Melocactus,Cactaceae,Threatened,-0.212922,1\r
Melocactus_paucispinus,Melocactus,Cactaceae,Not_threatened,0.039221,1\r
Memecylon_umbellatum,Memecylon,Melastomataceae,Threatened,0.377294,1\r
Meriania_sclerophylla,Meriania,Melastomataceae,No_data,0.032790,1\r
Merostachys_riedeliana,Merostachys,Poaceae,No_data,-0.918176,1\r
Merremia_macrocalyx,Merremia,Convolvulaceae,No_data,-0.254234,1\r
Mertensia_fusiformis,Mertensia,Boraginaceae,Not_threatened,0.238700,13\r
Metrodorea_nigra,Metrodorea,Rutaceae,Not_threatened,1.483287,1\r
Metrodorea_stipularis,Metrodorea,Rutaceae,Not_threatened,0.802962,1\r
Metrosideros_excelsa,Metrosideros,Myrtaceae,Not_threatened,0.851360,2\r
Miconia_alata,Miconia,Melastomataceae,No_data,0.853490,1\r
Miconia_angelana,Miconia,Melastomataceae,Threatened,-0.302071,1\r
Miconia_ciliata,Miconia,Melastomataceae,Not_threatened,-0.236389,1\r
Miconia_ferruginata,Miconia,Melastomataceae,No_data,0.120071,1\r
Miconia_latecrenata,Miconia,Melastomataceae,Not_threatened,-0.190391,1\r
Miconia_pusilliflora,Miconia,Melastomataceae,No_data,0.292879,1\r
Microlicia_fasciculata,Microlicia,Melastomataceae,Not_threatened,0.039821,1\r
Microlicia_inquinans,Microlicia,Melastomataceae,No_data,0.042097,1\r
Microlicia_viminalis,Microlicia,Melastomataceae,No_data,-1.101115,1\r
Mimulus_guttatus,Mimulus,Phrymaceae,Not_threatened,0.321361,4\r
Mimulus_luteus,Mimulus,Phrymaceae,No_data,-0.218799,2\r
Mitracarpus_longicalyx,Mitracarpus,Rubiaceae,No_data,-0.178248,1\r
Mourera_fluviatilis,Mourera,Podostemaceae,Not_threatened,-0.096992,1\r
Myrcia_splendens,Myrcia,Myrtaceae,Not_threatened,-0.659246,1\r
Myrcia_tomentosa,Myrcia,Myrtaceae,Not_threatened,-0.810930,1\r
Myristica_dactyloides,Myristica,Myristicaceae,Threatened,0.176456,1\r
Myrmecophila_christinae,Myrmecophila,Orchidaceae,No_data,2.029317,1\r
Myrmecophila_tibicinis,Myrmecophila,Orchidaceae,No_data,3.211441,1\r
Myrosmodes_cochleare,Myrosmodes,Orchidaceae,No_data,0.310613,1\r
Myrsine_maximowiczii,Myrsine,Primulaceae,Threatened,0.246944,1\r
Myrsine_parvifolia,Myrsine,Primulaceae,Not_threatened,1.243194,1\r
Narcissus_assoanus,Narcissus,Amaryllidaceae,Not_threatened,0.198951,13\r
Narcissus_cyclamineus,Narcissus,Amaryllidaceae,Threatened,0.937209,1\r
Narcissus_hispanicus,Narcissus,Amaryllidaceae,No_data,0.106261,8\r
Narcissus_serotinus,Narcissus,Amaryllidaceae,Not_threatened,0.134731,3\r
Narcissus_triandrus,Narcissus,Amaryllidaceae,Not_threatened,0.137879,11\r
Nastanthus_scapigerus,Nastanthus,Calyceraceae,No_data,0.123614,1\r
Nematanthus_crassifolius,Nematanthus,Gesneriaceae,Not_threatened,0.150198,2\r
Nematanthus_lanceolatus,Nematanthus,Gesneriaceae,Not_threatened,0.229923,1\r
Nemophila_menziesii,Nemophila,Boraginaceae,Not_threatened,0.143182,5\r
Neolitsea_aurata,Neolitsea,Lauraceae,Not_threatened,-0.443615,1\r
Neottia_listeroides,Neottia,Orchidaceae,Not_threatened,1.468552,1\r
Nerine_sarniensis,Nerine,Amaryllidaceae,Not_threatened,0.212389,1\r
Nerium_oleander,Nerium,Apocynaceae,Not_threatened,4.245794,3\r
Nicotiana_alata,Nicotiana,Solanaceae,No_data,0.266539,4\r
Nidularium_itatiaiae,Nidularium,Bromeliaceae,Threatened,0.200423,2\r
Nierembergia_linariifolia,Nierembergia,Solanaceae,No_data,0.527453,8\r
Nitraria_roborowskii,Nitraria,Nitrariaceae,Not_threatened,-0.287682,1\r
Nitraria_sibirica,Nitraria,Nitrariaceae,Not_threatened,-0.528067,1\r
Nitraria_sphaerocarpa,Nitraria,Nitrariaceae,Not_threatened,0.236000,1\r
Odontonema_barberioides,Odontonema,Acanthaceae,No_data,1.231693,2\r
Oenocarpus_bataua,Oenocarpus,Arecaceae,Not_threatened,-0.259109,1\r
Oenothera_biennis,Oenothera,Onagraceae,Not_threatened,0.138209,1\r
Oenothera_cespitosa,Oenothera,Onagraceae,No_data,0.376353,4\r
Oenothera_macrocarpa,Oenothera,Onagraceae,Not_threatened,0.548455,2\r
Oldenlandia_pulcherrima,Oldenlandia,Rubiaceae,No_data,0.368274,2\r
Opuntia_monacantha,Opuntia,Cactaceae,Not_threatened,-0.740902,1\r
Orchis_anthropophora,Orchis,Orchidaceae,Not_threatened,1.789482,1\r
Orchis_italica,Orchis,Orchidaceae,Not_threatened,1.700019,1\r
Orchis_mascula,Orchis,Orchidaceae,Not_threatened,2.295150,1\r
Ornithogalum_thyrsoides,Ornithogalum,Asparagaceae,Not_threatened,0.049975,3\r
Orychophragmus_violaceus,Orychophragmus,Brassicaceae,Not_threatened,-0.071790,1\r
Osmanthus_insularis,Osmanthus,Oleaceae,Threatened,0.291680,1\r
Osteomeles_schwerinae,Osteomeles,Rosaceae,No_data,-0.064227,1\r
Oxalis_amblyosepala,Oxalis,Oxalidaceae,Threatened,0.572129,1\r
Oxalis_comptonii,Oxalis,Oxalidaceae,Threatened,-0.203056,1\r
Oxalis_eckloniana,Oxalis,Oxalidaceae,No_data,2.135794,1\r
Oxalis_giftbergensis,Oxalis,Oxalidaceae,Not_threatened,-0.203056,1\r
Oxalis_glabra,Oxalis,Oxalidaceae,Not_threatened,-0.090151,1\r
Oxalis_natans,Oxalis,Oxalidaceae,Threatened,0.075996,2\r
Oxalis_nidulans,Oxalis,Oxalidaceae,No_data,0.411980,1\r
Oxalis_oculifera,Oxalis,Oxalidaceae,Not_threatened,0.151470,1\r
Oxalis_oreophila,Oxalis,Oxalidaceae,Not_threatened,-0.093152,1\r
Oxalis_pes-caprae,Oxalis,Oxalidaceae,No_data,0.708415,1\r
Oxalis_purpurea,Oxalis,Oxalidaceae,Not_threatened,0.567240,1\r
Oxalis_squamata,Oxalis,Oxalidaceae,No_data,0.305842,3\r
Oxalis_tenuifolia,Oxalis,Oxalidaceae,Not_threatened,-0.175891,1\r
Oxyanthus_pyriformis,Oxyanthus,Rubiaceae,Not_threatened,0.935979,1\r
Oxypetalum_appendiculatum,Oxypetalum,Apocynaceae,No_data,0.265108,1\r
Oxypetalum_banksii,Oxypetalum,Apocynaceae,No_data,4.042601,1\r
Oxypetalum_mexiae,Oxypetalum,Apocynaceae,Threatened,4.915918,1\r
Pachycereus_pecten-aboriginum,Pachycereus,Cactaceae,Not_threatened,0.594078,1\r
Pachycereus_pringlei,Pachycereus,Cactaceae,Not_threatened,0.143741,14\r
Paeonia_delavayi,Paeonia,Paeoniaceae,Not_threatened,0.111767,1\r
Paeonia_officinalis,Paeonia,Paeoniaceae,Not_threatened,-0.013579,5\r
Pagamea_duckei,Pagamea,Rubiaceae,No_data,1.481605,1\r
Paliavana_tenuiflora,Paliavana,Gesneriaceae,Not_threatened,-1.386294,1\r
Palicourea_demissa,Palicourea,Rubiaceae,No_data,0.366351,2\r
Palicourea_macrobotrys,Palicourea,Rubiaceae,No_data,-0.009760,1\r
Palicourea_rigida,Palicourea,Rubiaceae,No_data,0.431550,4\r
Pancratium_maritimum,Pancratium,Amaryllidaceae,Not_threatened,0.319841,18\r
Paraboea_rufescens,Paraboea,Gesneriaceae,Not_threatened,-0.481165,1\r
Parkinsonia_aculeata,Parkinsonia,Fabaceae,Not_threatened,0.628609,1\r
Parnassia_epunctulata,Parnassia,Celastraceae,Not_threatened,0.643550,1\r
Parnassia_palustris,Parnassia,Celastraceae,Not_threatened,0.342139,4\r
Parrya_nudicaulis,Parrya,Brassicaceae,Not_threatened,1.386294,1\r
Passiflora_capsularis,Passiflora,Passifloraceae,Not_threatened,0.346276,1\r
Passiflora_miersii,Passiflora,Passifloraceae,Not_threatened,0.145954,1\r
Passiflora_mooreana,Passiflora,Passifloraceae,No_data,0.081678,1\r
Passiflora_pohlii,Passiflora,Passifloraceae,No_data,0.402562,1\r
Passiflora_suberosa,Passiflora,Passifloraceae,Not_threatened,0.274489,2\r
Passiflora_tricuspis,Passiflora,Passifloraceae,Not_threatened,1.704848,1\r
Paypayrola_blanchetiana,Paypayrola,Violaceae,Not_threatened,2.091864,1\r
Pedicularis_gruina,Pedicularis,Orobanchaceae,Not_threatened,0.500775,1\r
Pedicularis_longiflora,Pedicularis,Orobanchaceae,Not_threatened,0.033974,1\r
Pedicularis_monbeigiana,Pedicularis,Orobanchaceae,Not_threatened,0.451414,5\r
Pedicularis_palustris,Pedicularis,Orobanchaceae,Not_threatened,0.231663,2\r
Pedicularis_rex,Pedicularis,Orobanchaceae,Not_threatened,0.167054,1\r
Pedicularis_siphonantha,Pedicularis,Orobanchaceae,Not_threatened,0.141362,2\r
Penstemon_haydenii,Penstemon,Plantaginaceae,Threatened,0.312401,2\r
Penstemon_pallidus,Penstemon,Plantaginaceae,Not_threatened,-0.152721,1\r
Penstemon_roseus,Penstemon,Plantaginaceae,No_data,0.004123,2\r
Penstemon_scariosus,Penstemon,Plantaginaceae,Not_threatened,-0.122854,1\r
Pentacme_siamensis,Pentacme,Dipterocarpaceae,No_data,1.305316,2\r
Peraxilla_colensoi,Peraxilla,Loranthaceae,Threatened,0.320864,5\r
Peraxilla_tetrapetala,Peraxilla,Loranthaceae,Threatened,0.856631,40\r
Perezia_carthamoides,Perezia,Asteraceae,No_data,0.605538,2\r
Peritoma_arborea,Peritoma,Cleomaceae,No_data,0.015135,4\r
Persoonia_glaucescens,Persoonia,Proteaceae,Threatened,0.796149,2\r
Persoonia_lanceolata,Persoonia,Proteaceae,Not_threatened,-0.268082,2\r
Persoonia_mollis,Persoonia,Proteaceae,Not_threatened,0.218783,5\r
Persoonia_rigida,Persoonia,Proteaceae,Threatened,-0.160601,1\r
Phaius_delavayi,Phaius,Orchidaceae,Threatened,1.680188,2\r
Phellodendron_amurense,Phellodendron,Rutaceae,Threatened,0.079830,4\r
Philodendron_adamantinum,Philodendron,Araceae,No_data,2.044756,1\r
Phlox_drummondii,Phlox,Polemoniaceae,Not_threatened,0.894345,6\r
Photinia_wrightiana,Photinia,Rosaceae,Threatened,0.040201,1\r
Phragmites_australis,Phragmites,Poaceae,Not_threatened,1.477211,2\r
Phrynium_imbricatum,Phrynium,Marantaceae,Threatened,-1.417193,1\r
Phyllospadix_scouleri,Phyllospadix,Zosteraceae,Not_threatened,0.048471,1\r
Phyllospadix_serrulatus,Phyllospadix,Zosteraceae,Not_threatened,-1.264356,1\r
Physalis_longifolia,Physalis,Solanaceae,Not_threatened,0.607928,2\r
Physaria_obcordata,Physaria,Brassicaceae,Threatened,-0.167649,3\r
Pimelea_villosa_subsp._arenaria,Pimelea,Thymelaeaceae,Threatened,-0.075206,6\r
Pimpinella_saxifraga,Pimpinella,Apiaceae,Not_threatened,0.082361,1\r
Pinguicula_vallisneriifolia,Pinguicula,Lentibulariaceae,Not_threatened,0.601885,3\r
Pitcairnia_brittoniana,Pitcairnia,Bromeliaceae,Not_threatened,-0.092340,1\r
Pitcairnia_flammea,Pitcairnia,Bromeliaceae,No_data,0.082849,2\r
Pittosporum_boninense,Pittosporum,Pittosporaceae,Threatened,1.289092,1\r
Platanthera_bifolia,Platanthera,Orchidaceae,Not_threatened,0.633340,8\r
Platanthera_boninensis,Platanthera,Orchidaceae,Threatened,0.310155,1\r
Platanthera_ciliaris,Platanthera,Orchidaceae,Not_threatened,0.079616,2\r
Platanthera_obtusata,Platanthera,Orchidaceae,Not_threatened,5.962477,1\r
Plumbago_auriculata,Plumbago,Plumbaginaceae,Not_threatened,0.895263,1\r
Podophyllum_peltatum,Podophyllum,Berberidaceae,Not_threatened,1.058392,9\r
Polemonium_caeruleum,Polemonium,Polemoniaceae,Threatened,0.358137,2\r
Polemonium_foliosissimum,Polemonium,Polemoniaceae,Not_threatened,0.716098,4\r
Polemonium_van-bruntiae,Polemonium,Polemoniaceae,No_data,-0.053561,4\r
Polemonium_viscosum,Polemonium,Polemoniaceae,Not_threatened,0.640659,12\r
Polygala_vayredae,Polygala,Polygalaceae,Threatened,0.672987,1\r
Polygonum_japonicum,Polygonum,Polygonaceae,No_data,1.163843,4\r
Polygonum_jucundum,Polygonum,Polygonaceae,Not_threatened,0.216548,2\r
Polystachya_concreta,Polystachya,Orchidaceae,Not_threatened,1.459286,1\r
Polystachya_estrellensis,Polystachya,Orchidaceae,No_data,-0.241890,1\r
Pomaderris_hamiltonii,Pomaderris,Rhamnaceae,Threatened,-1.118842,2\r
Ponerorchis_chusua,Ponerorchis,Orchidaceae,Not_threatened,0.704642,1\r
Posoqueria_latifolia,Posoqueria,Rubiaceae,Not_threatened,2.020516,1\r
Potentilla_anserina,Potentilla,Rosaceae,Not_threatened,0.595136,3\r
Potentilla_erecta,Potentilla,Rosaceae,Not_threatened,0.088553,1\r
Potentilla_pulcherrima,Potentilla,Rosaceae,Not_threatened,0.068868,4\r
Potentilla_simplex,Potentilla,Rosaceae,Not_threatened,0.083731,1\r
Potentilla_simulatrix,Potentilla,Rosaceae,Not_threatened,-0.488684,2\r
Potentilla_tanacetifolia,Potentilla,Rosaceae,Not_threatened,0.151167,2\r
Pouteria_torta,Pouteria,Sapotaceae,Not_threatened,1.644253,1\r
Primula_cusickiana_var._maguirei,Primula,Primulaceae,Threatened,-0.713394,7\r
Primula_farinosa,Primula,Primulaceae,Not_threatened,0.091524,20\r
Primula_merrilliana,Primula,Primulaceae,Threatened,0.164986,2\r
Primula_modesta,Primula,Primulaceae,No_data,0.393712,12\r
Primula_sieboldii,Primula,Primulaceae,Threatened,2.364756,4\r
Primula_veris,Primula,Primulaceae,Not_threatened,0.164589,7\r
Primulina_glandulosa_var._yangshuoensis,Primulina,Gesneriaceae,No_data,0.681594,1\r
Primulina_lutea,Primulina,Gesneriaceae,No_data,0.813254,2\r
Primulina_repanda_var._guilinensis,Primulina,Gesneriaceae,No_data,0.899942,1\r
Prosopis_glandulosa_var._torreyana,Prosopis,Fabaceae,Not_threatened,1.343735,1\r
Protea_caffra,Protea,Proteaceae,Not_threatened,0.188957,3\r
Protea_compacta,Protea,Proteaceae,Not_threatened,1.114360,1\r
Protea_laurifolia,Protea,Proteaceae,Not_threatened,-0.610910,1\r
Protea_longifolia,Protea,Proteaceae,Threatened,-0.223143,1\r
Protea_magnifica,Protea,Proteaceae,Not_threatened,-1.049820,1\r
Protea_punctata,Protea,Proteaceae,Not_threatened,0.440312,1\r
Protea_repens,Protea,Proteaceae,Not_threatened,-0.060167,1\r
Protea_simplex,Protea,Proteaceae,Not_threatened,0.142533,1\r
Protea_welwitschii,Protea,Proteaceae,Not_threatened,0.878458,1\r
Prunella_vulgaris,Prunella,Lamiaceae,Not_threatened,0.159065,1\r
Prunus_armeniaca,Prunus,Rosaceae,No_data,0.921859,1\r
Prunus_mongolica,Prunus,Rosaceae,No_data,1.327053,5\r
Prunus_virginiana,Prunus,Rosaceae,Not_threatened,0.433524,3\r
Pseudobombax_munguba,Pseudobombax,Malvaceae,Not_threatened,0.262576,1\r
Pseudopiptadenia_contorta,Pseudopiptadenia,Fabaceae,Not_threatened,-0.095310,1\r
Pseudopiptadenia_leptostachya,Pseudopiptadenia,Fabaceae,Not_threatened,-0.518794,1\r
Psilochilus_modestus,Psilochilus,Orchidaceae,No_data,2.540153,2\r
Psilopeganum_sinense,Psilopeganum,Rutaceae,Threatened,-0.204300,1\r
Psittacanthus_calyculatus,Psittacanthus,Loranthaceae,No_data,0.133531,1\r
Psittacanthus_robustus,Psittacanthus,Loranthaceae,No_data,0.371564,1\r
Psychotria_carthagenensis,Psychotria,Rubiaceae,Not_threatened,0.489334,7\r
Psychotria_goyazensis,Psychotria,Rubiaceae,No_data,-0.178300,1\r
Psychotria_hoffmannseggiana,Psychotria,Rubiaceae,No_data,1.069093,1\r
Psychotria_homalosperma,Psychotria,Rubiaceae,Threatened,2.173157,1\r
Psychotria_jasminoides,Psychotria,Rubiaceae,No_data,0.363678,1\r
Psychotria_longipedunculata,Psychotria,Rubiaceae,Threatened,1.074167,1\r
Psychotria_mapourioides,Psychotria,Rubiaceae,Not_threatened,0.016807,1\r
Psychotria_nuda,Psychotria,Rubiaceae,Not_threatened,0.000000,1\r
Psychotria_poeppigiana,Psychotria,Rubiaceae,No_data,-0.099540,2\r
Psychotria_suerrensis,Psychotria,Rubiaceae,No_data,0.133531,1\r
Psychotria_suterella,Psychotria,Rubiaceae,No_data,0.129212,1\r
Psychotria_tenuinervis,Psychotria,Rubiaceae,No_data,-0.416276,1\r
Pterostylis_alobula,Pterostylis,Orchidaceae,Not_threatened,2.790938,1\r
Pterostylis_patens,Pterostylis,Orchidaceae,Not_threatened,0.379490,1\r
Pterostylis_sanguinea,Pterostylis,Orchidaceae,Threatened,0.645889,1\r
Pterygodium_catholicum,Pterygodium,Orchidaceae,Not_threatened,1.772935,1\r
Pultenaea_densifolia,Pultenaea,Fabaceae,Not_threatened,0.018941,3\r
Quercus_ilex,Quercus,Fagaceae,Not_threatened,0.152737,1\r
Quercus_lobata,Quercus,Fagaceae,Threatened,0.507960,2\r
Quesnelia_augusto-coburgii,Quesnelia,Bromeliaceae,Not_threatened,0.007052,2\r
Ranunculus_acris,Ranunculus,Ranunculaceae,Not_threatened,0.130567,19\r
Ranunculus_weyleri,Ranunculus,Ranunculaceae,Threatened,0.268272,1\r
Raukaua_anomalus,Raukaua,Araliaceae,Not_threatened,0.700569,2\r
Rauvolfia_grandiflora,Rauvolfia,Apocynaceae,Not_threatened,0.215975,1\r
Retama_sphaerocarpa,Retama,Fabaceae,Not_threatened,0.019561,2\r
Rhabdothamnus_solandri,Rhabdothamnus,Gesneriaceae,Not_threatened,0.433047,2\r
Rhamnus_lycioides_subsp._oleoides,Rhamnus,Rhamnaceae,Not_threatened,-0.587602,2\r
Rhaphiodon_echinus,Rhaphiodon,Lamiaceae,No_data,-0.916291,1\r
Rhaphiolepis_indica_var._umbellata,Rhaphiolepis,Rosaceae,Threatened,0.892657,1\r
Rhexia_virginica,Rhexia,Melastomataceae,Not_threatened,0.536256,21\r
Rhinanthus_minor,Rhinanthus,Orobanchaceae,Not_threatened,-0.105449,6\r
Rhododendron_agastum,Rhododendron,Ericaceae,Not_threatened,-0.142716,1\r
Rhododendron_aureum,Rhododendron,Ericaceae,Not_threatened,-0.192372,1\r
Rhododendron_calendulaceum,Rhododendron,Ericaceae,Not_threatened,0.747214,1\r
Rhododendron_canadense,Rhododendron,Ericaceae,Not_threatened,0.063141,1\r
Rhododendron_cyanocarpum,Rhododendron,Ericaceae,Threatened,0.322129,1\r
Rhododendron_decorum,Rhododendron,Ericaceae,Not_threatened,-0.256855,1\r
Rhododendron_delavayi,Rhododendron,Ericaceae,Not_threatened,0.011711,1\r
Rhododendron_ferrugineum,Rhododendron,Ericaceae,Not_threatened,0.028988,1\r
Rhododendron_irroratum,Rhododendron,Ericaceae,Not_threatened,-0.157985,1\r
Rhododendron_macrosepalum,Rhododendron,Ericaceae,No_data,0.709277,1\r
Rhododendron_reticulatum,Rhododendron,Ericaceae,Not_threatened,0.440556,1\r
Rhododendron_semibarbatum,Rhododendron,Ericaceae,Not_threatened,0.040900,3\r
Rhododendron_siderophyllum,Rhododendron,Ericaceae,Not_threatened,0.973813,1\r
Rhodophiala_rhodolirion,Rhodophiala,Amaryllidaceae,No_data,0.108942,1\r
Rhynchanthera_dichotoma,Rhynchanthera,Melastomataceae,No_data,0.405465,1\r
Rhynchanthera_grandiflora,Rhynchanthera,Melastomataceae,Not_threatened,0.626297,1\r
Rhytidophyllum_asperum,Rhytidophyllum,Gesneriaceae,Threatened,0.202237,1\r
Richardia_grandiflora,Richardia,Rubiaceae,No_data,0.390816,2\r
Roridula_dentata,Roridula,Roridulaceae,Not_threatened,0.113106,1\r
Roridula_gorgonias,Roridula,Roridulaceae,Not_threatened,0.004851,1\r
Rourea_induta,Rourea,Connaraceae,No_data,0.073789,2\r
Rubus_chamaemorus,Rubus,Rosaceae,Not_threatened,0.143027,16\r
Ruellia_brevifolia,Ruellia,Acanthaceae,No_data,0.372280,2\r
Ruellia_menthoides,Ruellia,Acanthaceae,No_data,0.405465,1\r
Ruellia_nudiflora,Ruellia,Acanthaceae,Not_threatened,0.283478,3\r
Ruellia_subsessilis,Ruellia,Acanthaceae,No_data,0.111626,3\r
Ruscus_aculeatus,Ruscus,Asparagaceae,Not_threatened,3.283414,1\r
Sabatia_angularis,Sabatia,Gentianaceae,Not_threatened,0.172697,2\r
Sabicea_cinerea,Sabicea,Rubiaceae,No_data,-0.135802,1\r
Saintpaulia_confusa,Saintpaulia,Gesneriaceae,Threatened,0.372674,1\r
Salix_lantana,Salix,Salicaceae,No_data,0.284512,1\r
Salix_lapponum,Salix,Salicaceae,No_data,-0.287682,1\r
Salix_miyabeana,Salix,Salicaceae,Not_threatened,0.232561,3\r
Salix_myrsinifolia,Salix,Salicaceae,Not_threatened,0.081991,2\r
Salix_udensis,Salix,Salicaceae,No_data,0.620717,1\r
Salvia_sellowiana,Salvia,Lamiaceae,No_data,0.228302,2\r
Sanguinaria_canadensis,Sanguinaria,Papaveraceae,Not_threatened,0.061558,1\r
Santalum_boninense,Santalum,Santalaceae,Threatened,1.389494,1\r
Saranthe_klotzschiana,Saranthe,Marantaceae,Not_threatened,-0.101352,1\r
Sarcophrynium_brachystachyum,Sarcophrynium,Marantaceae,Not_threatened,1.609438,1\r
Sarracenia_purpurea,Sarracenia,Sarraceniaceae,Not_threatened,-0.051473,1\r
Satyrium_bicorne,Satyrium,Orchidaceae,Not_threatened,0.166055,1\r
Satyrium_coriifolium,Satyrium,Orchidaceae,Not_threatened,0.872274,1\r
Satyrium_erectum,Satyrium,Orchidaceae,Not_threatened,0.382726,1\r
Satyrium_nepalense_var._ciliatum,Satyrium,Orchidaceae,Not_threatened,0.290317,4\r
Satyrium_pumilum,Satyrium,Orchidaceae,Not_threatened,0.905709,1\r
Saussurea_laniceps,Saussurea,Asteraceae,No_data,-0.090506,2\r
Saussurea_medusa,Saussurea,Asteraceae,No_data,0.300459,4\r
Sauvagesia_erecta,Sauvagesia,Ochnaceae,Not_threatened,-0.753772,1\r
Sauvagesia_sprengelii,Sauvagesia,Ochnaceae,No_data,-1.314835,1\r
Saxifraga_hirculus,Saxifraga,Saxifragaceae,Not_threatened,0.180905,2\r
Saxifraga_stellaris,Saxifraga,Saxifragaceae,Not_threatened,-0.020510,1\r
Scaevola_taccada,Scaevola,Goodeniaceae,Not_threatened,0.773190,1\r
Schefflera_heptaphylla,Schefflera,Araliaceae,Not_threatened,0.231777,1\r
Schinus_terebinthifolia,Schinus,Anacardiaceae,No_data,0.192372,6\r
Schizocalyx_cuspidatus,Schizocalyx,Rubiaceae,Not_threatened,0.022473,1\r
Scilla_hyacinthoides,Scilla,Asparagaceae,No_data,0.031749,1\r
Scorzonera_humilis,Scorzonera,Asteraceae,Threatened,0.348624,1\r
Scutellaria_longituba,Scutellaria,Lamiaceae,Threatened,1.133675,1\r
Sebaea_grandis,Sebaea,Gentianaceae,No_data,-0.219393,1\r
Seemannia_sylvatica,Seemannia,Gesneriaceae,Not_threatened,-0.288182,1\r
Senecio_integrifolius,Senecio,Asteraceae,Threatened,0.320147,8\r
Senghasiella_glaucifolia,Senghasiella,Orchidaceae,No_data,0.155077,3\r
Senna_corymbosa,Senna,Fabaceae,Not_threatened,0.078856,3\r
Senna_didymobotrya,Senna,Fabaceae,Not_threatened,-0.201857,1\r
Senna_multijuga,Senna,Fabaceae,Not_threatened,0.141561,1\r
Senna_silvestris,Senna,Fabaceae,Not_threatened,2.841582,1\r
Senna_spectabilis,Senna,Fabaceae,Not_threatened,1.203973,1\r
Serapias_vomeracea,Serapias,Orchidaceae,Not_threatened,1.695363,2\r
Shorea_acuminata,Shorea,Dipterocarpaceae,Not_threatened,2.916347,1\r
Shorea_hemsleyana,Shorea,Dipterocarpaceae,Threatened,2.143157,1\r
Shorea_lepidota,Shorea,Dipterocarpaceae,Threatened,2.987569,1\r
Shorea_leprosula,Shorea,Dipterocarpaceae,Threatened,2.710996,1\r
Shorea_macroptera,Shorea,Dipterocarpaceae,Not_threatened,2.509121,1\r
Shorea_ovalis,Shorea,Dipterocarpaceae,Not_threatened,0.101580,1\r
Sidalcea_malviflora,Sidalcea,Malvaceae,Not_threatened,0.734817,4\r
Sidalcea_malviflora_subsp._elegans,Sidalcea,Malvaceae,Not_threatened,-0.236930,1\r
Sidalcea_oregana,Sidalcea,Malvaceae,Not_threatened,0.250342,4\r
Silene_dioica,Silene,Caryophyllaceae,Not_threatened,0.058689,20\r
Silene_douglasii,Silene,Caryophyllaceae,Not_threatened,0.597808,14\r
Silene_douglasii_var._oraria,Silene,Caryophyllaceae,Threatened,0.714332,1\r
Silene_latifolia_subsp._alba,Silene,Caryophyllaceae,Not_threatened,1.194080,2\r
Silene_stellata,Silene,Caryophyllaceae,Not_threatened,0.216600,1\r
Silene_virginica,Silene,Caryophyllaceae,Not_threatened,0.076177,7\r
Silene_viscaria,Silene,Caryophyllaceae,Threatened,0.327097,12\r
Sinningia_cooperi,Sinningia,Gesneriaceae,Not_threatened,0.595383,1\r
Sinojackia_huangmeiensis,Sinojackia,Styracaceae,Threatened,0.256183,1\r
Sinopodophyllum_hexandrum,Sinopodophyllum,Berberidaceae,Not_threatened,-0.039006,1\r
Sisyrinchium_campestre,Sisyrinchium,Iridaceae,Not_threatened,-0.062420,4\r
Smilax_china,Smilax,Smilacaceae,Not_threatened,3.553190,1\r
Solanum_americanum,Solanum,Solanaceae,Not_threatened,0.188583,1\r
Solanum_carolinense,Solanum,Solanaceae,Not_threatened,0.342426,3\r
Solanum_melongena,Solanum,Solanaceae,No_data,-0.368462,5\r
Solanum_peruvianum,Solanum,Solanaceae,Not_threatened,-0.224103,1\r
Solanum_rostratum,Solanum,Solanaceae,Not_threatened,0.124033,7\r
Solidago_canadensis,Solidago,Asteraceae,Not_threatened,0.326264,3\r
Solidago_juncea,Solidago,Asteraceae,Not_threatened,0.091694,3\r
Sonchus_arvensis,Sonchus,Asteraceae,Not_threatened,0.426519,1\r
Sorbus_aucuparia,Sorbus,Rosaceae,Not_threatened,0.212421,2\r
Sorbus_torminalis,Sorbus,Rosaceae,Not_threatened,1.295134,2\r
Sorghastrum_nutans,Sorghastrum,Poaceae,Not_threatened,0.046520,1\r
Spartina_alterniflora,Spartina,Poaceae,Not_threatened,0.748209,4\r
Spartina_patens,Spartina,Poaceae,Not_threatened,0.428239,2\r
Spiranthes_spiralis,Spiranthes,Orchidaceae,Not_threatened,0.641688,3\r
Spondias_tuberosa,Spondias,Anacardiaceae,Not_threatened,3.091042,1\r
Stachytarpheta_glabra,Stachytarpheta,Verbenaceae,Not_threatened,0.005277,1\r
Stachyurus_macrocarpus,Stachyurus,Stachyuraceae,Threatened,0.257045,1\r
Stachyurus_praecox,Stachyurus,Stachyuraceae,No_data,0.376470,1\r
Stanhopea_insignis,Stanhopea,Orchidaceae,No_data,1.271396,1\r
Stanhopea_lietzei,Stanhopea,Orchidaceae,Not_threatened,1.349803,1\r
Staphylea_trifolia,Staphylea,Staphyleaceae,Not_threatened,2.328561,1\r
Staurogyne_itatiaiae,Staurogyne,Acanthaceae,Threatened,-0.538399,2\r
Stellaria_pubera,Stellaria,Caryophyllaceae,Not_threatened,-0.089612,1\r
Stenocereus_griseus,Stenocereus,Cactaceae,Not_threatened,-0.016689,1\r
Stenocereus_thurberi,Stenocereus,Cactaceae,Not_threatened,0.533509,25\r
Stenostephanus_lobeliiformis,Stenostephanus,Acanthaceae,No_data,0.240872,1\r
Stigmaphyllon_lalandianum,Stigmaphyllon,Malpighiaceae,No_data,0.433636,1\r
Stigmaphyllon_paralias,Stigmaphyllon,Malpighiaceae,No_data,-0.310155,1\r
Styphelia_abietina,Styphelia,Ericaceae,No_data,1.448382,2\r
Styrax_obassis,Styrax,Styracaceae,Not_threatened,0.010855,3\r
Svitramia_hatschbachii,Svitramia,Melastomataceae,No_data,0.541817,1\r
Svitramia_minor,Svitramia,Melastomataceae,Threatened,-0.044522,1\r
Svitramia_spp.,Svitramia,Melastomataceae,No_data,-0.703449,1\r
Swartzia_pickelii,Swartzia,Fabaceae,Not_threatened,3.166677,1\r
Swertia_perennis,Swertia,Gentianaceae,Threatened,-0.048598,1\r
Swertia_przewalskii,Swertia,Gentianaceae,Not_threatened,-0.237328,1\r
Symphyotrichum_sericeum,Symphyotrichum,Asteraceae,Not_threatened,0.286165,2\r
Symplocos_pergracilis,Symplocos,Symplocaceae,Threatened,0.918032,1\r
Syncolostemon_densiflorus,Syncolostemon,Lamiaceae,Not_threatened,0.875469,1\r
Syncolostemon_macranthus,Syncolostemon,Lamiaceae,Not_threatened,0.367725,1\r
Syncolostemon_rotundifolius,Syncolostemon,Lamiaceae,Not_threatened,0.575364,1\r
Syzygium_rotundifolium,Syzygium,Myrtaceae,Threatened,0.838930,1\r
Tabebuia_aurea,Tabebuia,Bignoniaceae,No_data,-0.875469,1\r
Tabebuia_nodosa,Tabebuia,Bignoniaceae,Not_threatened,-0.048407,1\r
Tabebuia_roseoalba,Tabebuia,Bignoniaceae,Threatened,1.551169,1\r
Talbotiella_gentii,Talbotiella,Fabaceae,Threatened,0.570545,1\r
Talipariti_glabrum,Talipariti,Malvaceae,No_data,1.295006,1\r
Tamarix_chinensis,Tamarix,Tamaricaceae,No_data,0.020834,1\r
Tamarix_ramosissima,Tamarix,Tamaricaceae,Not_threatened,0.147851,1\r
Taraxacum_ceratophorum,Taraxacum,Asteraceae,Threatened,0.164087,1\r
Tecomella_undulata,Tecomella,Bignoniaceae,Threatened,0.788552,1\r
Telopea_mongaensis,Telopea,Proteaceae,Not_threatened,0.018349,1\r
Telopea_speciosissima,Telopea,Proteaceae,Not_threatened,0.469535,3\r
Tephrosia_virginiana,Tephrosia,Fabaceae,Not_threatened,0.198851,1\r
Terminalia_pallida,Terminalia,Combretaceae,Threatened,2.412662,1\r
Teucridium_parvifolium,Teucridium,Lamiaceae,Threatened,0.058738,2\r
Thalictrum_pubescens,Thalictrum,Ranunculaceae,Not_threatened,0.066267,1\r
Thaumatococcus_flavus,Thaumatococcus,Marantaceae,No_data,0.810786,1\r
Thelymitra_longifolia,Thelymitra,Orchidaceae,Not_threatened,0.067969,1\r
Thereianthus_spicatus,Thereianthus,Convolvulaceae,Not_threatened,1.147402,1\r
Thymbra_capitata,Thymbra,Lamiaceae,Not_threatened,0.402187,8\r
Thymus_vulgaris,Thymus,Lamiaceae,Not_threatened,-0.052050,4\r
Tiarella_cordifolia,Tiarella,Saxifragaceae,Not_threatened,0.131645,1\r
Tibouchina_aegopogon,Tibouchina,Melastomataceae,Not_threatened,-0.481303,1\r
Tibouchina_cerastifolia,Tibouchina,Melastomataceae,No_data,-0.047297,1\r
Tibouchina_fraterna,Tibouchina,Melastomataceae,No_data,-0.462624,1\r
Tibouchina_frigidula,Tibouchina,Melastomataceae,Not_threatened,-0.171148,1\r
Tibouchina_heteromalla,Tibouchina,Melastomataceae,No_data,0.173706,1\r
Tibouchina_papyrus,Tibouchina,Melastomataceae,Not_threatened,0.402137,1\r
Tibouchina_pulchra,Tibouchina,Melastomataceae,No_data,0.816672,3\r
Tibouchina_sellowiana,Tibouchina,Melastomataceae,Not_threatened,0.493164,2\r
Tibouchina_semidecandra,Tibouchina,Melastomataceae,No_data,0.068993,1\r
Tibouchina_stenocarpa,Tibouchina,Melastomataceae,No_data,-0.693147,1\r
Tibouchina_villosissima,Tibouchina,Melastomataceae,No_data,0.162824,1\r
Tillandsia_geminiflora,Tillandsia,Bromeliaceae,Not_threatened,1.229641,1\r
Tillandsia_viridiflora,Tillandsia,Bromeliaceae,No_data,-0.158778,1\r
Tipularia_discolor,Tipularia,Orchidaceae,Not_threatened,1.084308,3\r
Tococa_guianensis,Tococa,Melastomataceae,Not_threatened,-0.232332,1\r
Tococa_nitens,Tococa,Melastomataceae,No_data,0.415515,1\r
Toxicoscordion_paniculatum,Toxicoscordion,Liliaceae,No_data,0.172727,4\r
Trembleya_neopyrenaica,Trembleya,Melastomataceae,No_data,0.607589,1\r
Trembleya_parviflora,Trembleya,Melastomataceae,Not_threatened,2.367124,1\r
Trichocentrum_pumilum,Trichocentrum,Orchidaceae,Threatened,1.607213,1\r
Trifolium_dasyphyllum,Trifolium,Fabaceae,Not_threatened,0.187984,2\r
Trifolium_parryi,Trifolium,Fabaceae,Not_threatened,0.187984,2\r
Trifolium_repens,Trifolium,Fabaceae,Not_threatened,-0.310155,1\r
Trillium_camschatcense,Trillium,Melanthiaceae,Threatened,-0.037812,5\r
Trillium_catesbaei,Trillium,Melanthiaceae,Not_threatened,0.100083,1\r
Trillium_erectum,Trillium,Melanthiaceae,Not_threatened,0.941564,2\r
Trillium_grandiflorum,Trillium,Melanthiaceae,Not_threatened,0.284273,40\r
Trillium_recurvatum,Trillium,Melanthiaceae,Not_threatened,0.480401,3\r
Trillium_reliquum,Trillium,Melanthiaceae,Threatened,0.042432,1\r
Tristerix_corymbosus,Tristerix,Loranthaceae,No_data,0.383068,2\r
Triteleia_hyacinthina,Triteleia,Asparagaceae,Not_threatened,0.214946,7\r
Tritonia_disticha,Tritonia,Iridaceae,No_data,1.240590,3\r
Tritoniopsis_revoluta,Tritoniopsis,Iridaceae,Not_threatened,0.901075,2\r
Trollius_ranunculoides,Trollius,Ranunculaceae,Not_threatened,0.091747,2\r
Utricularia_reniformis,Utricularia,Lentibulariaceae,Not_threatened,2.197225,1\r
Uvaria_monticola,Uvaria,Annonaceae,No_data,2.708050,1\r
Uvularia_sessilifolia,Uvularia,Colchicaceae,Not_threatened,-0.052554,3\r
Vaccinium_angustifolium,Vaccinium,Ericaceae,Not_threatened,-0.863266,1\r
Vaccinium_boninense,Vaccinium,Ericaceae,Threatened,-0.060420,1\r
Vaccinium_hirtum,Vaccinium,Ericaceae,Not_threatened,0.124560,4\r
Vaccinium_membranaceum,Vaccinium,Ericaceae,Not_threatened,-0.371637,2\r
Vaccinium_microcarpum,Vaccinium,Ericaceae,Threatened,-0.517257,1\r
Vaccinium_myrtillus,Vaccinium,Ericaceae,Not_threatened,0.095134,5\r
Vaccinium_smallii,Vaccinium,Ericaceae,No_data,-0.058892,2\r
Vaccinium_uliginosum,Vaccinium,Ericaceae,Threatened,0.338375,9\r
Vaccinium_vitis-idaea,Vaccinium,Ericaceae,Not_threatened,0.177936,5\r
Vellozia_declinans,Vellozia,Velloziaceae,No_data,2.095462,1\r
Vellozia_epidendroides,Vellozia,Velloziaceae,No_data,1.689181,1\r
Veronica_cusickii,Veronica,Plantaginaceae,Not_threatened,0.390570,5\r
Viburnum_macrocephalum,Viburnum,Adoxaceae,No_data,0.301552,1\r
Vicia_nigricans,Vicia,Fabaceae,Not_threatened,-0.847298,1\r
Vigna_caracalla,Vigna,Fabaceae,Threatened,1.321777,4\r
Vincetoxicum_hirundinaria,Vincetoxicum,Apocynaceae,Threatened,2.376693,1\r
Viola_praemorsa,Viola,Violaceae,Not_threatened,0.056000,10\r
Vismia_guianensis,Vismia,Hypericaceae,Not_threatened,1.106506,2\r
Vitex_trifolia_subsp._litoralis,Vitex,Lamiaceae,Not_threatened,0.117783,1\r
Vochysia_cinnamomea,Vochysia,Vochysiaceae,No_data,0.847298,1\r
Vriesea_carinata,Vriesea,Bromeliaceae,Not_threatened,0.843199,2\r
Vriesea_ensiformis,Vriesea,Bromeliaceae,No_data,0.962178,1\r
Vriesea_friburgensis,Vriesea,Bromeliaceae,Not_threatened,-0.295185,1\r
Vriesea_gigantea,Vriesea,Bromeliaceae,Not_threatened,0.043837,3\r
Vriesea_gradata,Vriesea,Bromeliaceae,No_data,1.497316,2\r
Vriesea_longicaulis,Vriesea,Bromeliaceae,No_data,-0.037054,2\r
Wahlenbergia_albomarginata,Wahlenbergia,Campanulaceae,Not_threatened,0.358398,1\r
Wahlenbergia_cuspidata,Wahlenbergia,Campanulaceae,Not_threatened,0.014381,1\r
Wahlenbergia_krebsii,Wahlenbergia,Asteraceae,Not_threatened,0.039996,1\r
Walsura_temrifolia,Walsura,Meliaceae,No_data,1.386294,1\r
Watsonia_lepida,Watsonia,Iridaceae,No_data,0.036449,1\r
Wikstroemia_pseudoretusa,Wikstroemia,Thymelaeaceae,Threatened,0.004292,1\r
Witheringia_solanacea,Witheringia,Solanaceae,Not_threatened,0.732230,5\r
Wurmbea_biglandulosa,Wurmbea,Colchicaceae,Not_threatened,0.458683,2\r
Xylopia_championii,Xylopia,Annonaceae,Not_threatened,1.757858,1\r
Xyris_tennesseensis,Xyris,Xyridaceae,Threatened,0.174353,1\r
Xysmalobium_undulatum,Xysmalobium,Apocynaceae,No_data,5.455321,1\r
Yucca_elata,Yucca,Asparagaceae,Not_threatened,0.179793,1\r
Zeyheria_montana,Zeyheria,Bignoniaceae,Not_threatened,0.213162,1\r
Ziziphus_joazeiro,Ziziphus,Rhamnaceae,No_data,1.760913,2\r
Ziziphus_mistol,Ziziphus,Rhamnaceae,Threatened,0.559616,1\r
Zygophyllum_xanthoxylum,Zygophyllum,Zygophyllaceae,No_data,0.388825,2\r
`, Sa = `"node","parent","depth","is_tip","tip_index","label"
1,1126,135.912186,TRUE,1,"Flourensia_cernua"
2,1135,135.912187,TRUE,2,"Liatris_ohlingerae"
3,1137,135.912187,TRUE,3,"Argyroxiphium_sandwicense"
4,1137,135.912187,TRUE,4,"Arnica_latifolia"
5,1136,135.912187,TRUE,5,"Lasthenia_fremontii"
6,1134,135.912187,TRUE,6,"Lecocarpus_pinnatifidus"
7,1139,135.912186,TRUE,7,"Helianthus_exilis"
8,1139,135.912186,TRUE,8,"Echinacea_laevigata"
9,1140,135.912187,TRUE,9,"Balsamorhiza_deltoidea"
10,1140,135.912187,TRUE,10,"Balsamorhiza_sagittata"
11,1141,135.912187,TRUE,11,"Helichrysum_stoechas"
12,1141,135.912187,TRUE,12,"Antennaria_dioica"
13,1131,135.912186,TRUE,13,"Inula_royleana"
14,1145,135.912187,TRUE,14,"Symphyotrichum_sericeum"
15,1147,135.912187,TRUE,15,"Solidago_juncea"
16,1147,135.912187,TRUE,16,"Solidago_canadensis"
17,1146,135.912187,TRUE,17,"Euthamia_graminifolia"
18,1144,135.912187,TRUE,18,"Erigeron_breviscapus"
19,1143,135.912187,TRUE,19,"Leucanthemum_vulgare"
20,1142,135.912186,TRUE,20,"Senecio_integrifolius"
21,1152,135.912186,TRUE,21,"Crepidiastrum_grandicollum"
22,1153,135.912186,TRUE,22,"Ixeris_longirostra"
23,1153,135.912187,TRUE,23,"Ixeris_chinensis"
24,1151,135.912186,TRUE,24,"Taraxacum_ceratophorum"
25,1150,135.912187,TRUE,25,"Hypochaeris_thrincioides"
26,1149,135.912187,TRUE,26,"Sonchus_arvensis"
27,1148,135.912187,TRUE,27,"Scorzonera_humilis"
28,1155,135.912187,TRUE,28,"Centaurea_jacea"
29,1155,135.912187,TRUE,29,"Centaurea_solstitialis"
30,1157,135.912187,TRUE,30,"Saussurea_medusa"
31,1157,135.912187,TRUE,31,"Saussurea_laniceps"
32,1156,135.912186,TRUE,32,"Cirsium_boninense"
33,1159,135.912186,TRUE,33,"Gerbera_aurantiaca"
34,1159,135.912187,TRUE,34,"Chaetanthera_renifolia"
35,1160,135.912187,TRUE,35,"Perezia_carthamoides"
36,1160,135.912187,TRUE,36,"Acourtia_runcinata"
37,1126,135.912187,TRUE,37,"Chuquiraga_oppositifolia"
38,1125,135.912187,TRUE,38,"Nastanthus_scapigerus"
39,1124,135.912187,TRUE,39,"Scaevola_taccada"
40,1163,135.912187,TRUE,40,"Alseuosmia_pusilla"
41,1163,135.912187,TRUE,41,"Alseuosmia_macrophylla"
42,1162,135.912187,TRUE,42,"Alseuosmia_turneri"
43,1161,135.912187,TRUE,43,"Alseuosmia_quercifolia"
44,1167,135.912187,TRUE,44,"Campanula_rotundifolia"
45,1167,135.912187,TRUE,45,"Campanula_americana"
46,1168,135.912186,TRUE,46,"Wahlenbergia_cuspidata"
47,1169,135.912187,TRUE,47,"Wahlenbergia_albomarginata"
48,1169,135.912187,TRUE,48,"Wahlenbergia_krebsii"
49,1165,135.912187,TRUE,49,"Canarina_canariensis"
50,1170,135.912186,TRUE,50,"Lobelia_telekii"
51,1170,135.912186,TRUE,51,"Lobelia_boykinii"
52,1173,135.912187,TRUE,52,"Lobelia_cardinalis"
53,1173,135.912187,TRUE,53,"Lobelia_siphilitica"
54,1172,135.912187,TRUE,54,"Lobelia_gregoriana"
55,1171,135.912187,TRUE,55,"Lobelia_chinensis"
56,1121,135.912187,TRUE,56,"Escallonia_myrtoidea"
57,1180,135.912187,TRUE,57,"Lomatium_salmoniflorum"
58,1181,135.912187,TRUE,58,"Carum_carvi"
59,1181,135.912187,TRUE,59,"Pimpinella_saxifraga"
60,1182,135.912187,TRUE,60,"Chaerophyllum_bulbosum"
61,1182,135.912187,TRUE,61,"Aciphylla_squarrosa"
62,1178,135.912186,TRUE,62,"Eryngium_cuneifolium"
63,1183,135.912187,TRUE,63,"Schefflera_heptaphylla"
64,1183,135.912187,TRUE,64,"Raukaua_anomalus"
65,1176,135.912187,TRUE,65,"Pittosporum_boninense"
66,1185,135.912187,TRUE,66,"Lonicera_flava"
67,1185,135.912187,TRUE,67,"Heptacodium_miconioides"
68,1184,135.912187,TRUE,68,"Viburnum_macrocephalum"
69,1174,135.912187,TRUE,69,"Audouinia_capitata"
70,1188,135.912187,TRUE,70,"Ilex_serrata"
71,1188,135.912187,TRUE,71,"Ilex_crenata"
72,1187,135.912187,TRUE,72,"Ilex_mertensii"
73,1186,135.912187,TRUE,73,"Ilex_pedunculosa"
74,1195,135.912186,TRUE,74,"Eremophila_glabra"
75,1205,135.912187,TRUE,75,"Clinopodium_vulgare"
76,1205,135.912187,TRUE,76,"Dicerandra_frutescens"
77,1206,135.912187,TRUE,77,"Thymus_vulgaris"
78,1206,135.912187,TRUE,78,"Thymbra_capitata"
79,1203,135.912187,TRUE,79,"Prunella_vulgaris"
80,1207,135.912186,TRUE,80,"Dracocephalum_austriacum"
81,1207,135.912187,TRUE,81,"Glechoma_hederacea"
82,1201,135.912186,TRUE,82,"Salvia_sellowiana"
83,1208,135.912187,TRUE,83,"Rhaphiodon_echinus"
84,1209,135.912186,TRUE,84,"Syncolostemon_densiflorus"
85,1210,135.912187,TRUE,85,"Syncolostemon_macranthus"
86,1210,135.912187,TRUE,86,"Syncolostemon_rotundifolius"
87,1214,135.912187,TRUE,87,"Teucridium_parvifolium"
88,1216,135.912186,TRUE,88,"Clerodendrum_villosum"
89,1216,135.912187,TRUE,89,"Amasonia_obovata"
90,1215,135.912186,TRUE,90,"Ajuga_boninsimae"
91,1213,135.912186,TRUE,91,"Scutellaria_longituba"
92,1217,135.912186,TRUE,92,"Callicarpa_subpubescens"
93,1217,135.912186,TRUE,93,"Callicarpa_glabra"
94,1211,135.912186,TRUE,94,"Vitex_trifolia_subsp._litoralis"
95,1221,135.912186,TRUE,95,"Pedicularis_monbeigiana"
96,1223,135.912187,TRUE,96,"Pedicularis_rex"
97,1223,135.912187,TRUE,97,"Pedicularis_palustris"
98,1225,135.912187,TRUE,98,"Pedicularis_gruina"
99,1225,135.912187,TRUE,99,"Pedicularis_siphonantha"
100,1224,135.912187,TRUE,100,"Pedicularis_longiflora"
101,1227,135.912187,TRUE,101,"Castilleja_linariifolia"
102,1227,135.912187,TRUE,102,"Cordylanthus_maritimus"
103,1228,135.912187,TRUE,103,"Agalinis_strictifolia"
104,1228,135.912187,TRUE,104,"Agalinis_acuta"
105,1230,135.912186,TRUE,105,"Euphrasia_willkommii"
106,1230,135.912187,TRUE,106,"Rhinanthus_minor"
107,1229,135.912187,TRUE,107,"Melampyrum_pratense"
108,1231,135.912186,TRUE,108,"Mimulus_luteus"
109,1231,135.912187,TRUE,109,"Mimulus_guttatus"
110,1235,135.912186,TRUE,110,"Staurogyne_itatiaiae"
111,1239,135.912187,TRUE,111,"Ruellia_subsessilis"
112,1240,135.912187,TRUE,112,"Ruellia_menthoides"
113,1240,135.912187,TRUE,113,"Ruellia_brevifolia"
114,1238,135.912187,TRUE,114,"Ruellia_nudiflora"
115,1237,135.912186,TRUE,115,"Lepidagathis_sessilifolia"
116,1243,135.912186,TRUE,116,"Justicia_sebastianopolitanae"
117,1243,135.912187,TRUE,117,"Justicia_adhatoda"
118,1242,135.912186,TRUE,118,"Stenostephanus_lobeliiformis"
119,1241,135.912187,TRUE,119,"Odontonema_barberioides"
120,1235,135.912186,TRUE,120,"Avicennia_schaueriana"
121,1244,135.912187,TRUE,121,"Utricularia_reniformis"
122,1244,135.912186,TRUE,122,"Pinguicula_vallisneriifolia"
123,1250,135.912186,TRUE,123,"Handroanthus_vellosoi"
124,1250,135.912186,TRUE,124,"Handroanthus_umbellatus"
125,1250,135.912186,TRUE,125,"Handroanthus_heptaphyllus"
126,1252,135.912187,TRUE,126,"Handroanthus_serratifolius"
127,1252,135.912187,TRUE,127,"Handroanthus_impetiginosus"
128,1251,135.912187,TRUE,128,"Handroanthus_chrysotrichus"
129,1250,135.912187,TRUE,129,"Handroanthus_ochraceus"
130,1254,135.912186,TRUE,130,"Tabebuia_roseoalba"
131,1254,135.912186,TRUE,131,"Tabebuia_nodosa"
132,1254,135.912186,TRUE,132,"Tabebuia_aurea"
133,1255,135.912187,TRUE,133,"Zeyheria_montana"
134,1255,135.912187,TRUE,134,"Cybistax_antisyphilitica"
135,1248,135.912187,TRUE,135,"Tecomella_undulata"
136,1257,135.912186,TRUE,136,"Fridericia_conjugata"
137,1257,135.912187,TRUE,137,"Fridericia_dichotoma"
138,1256,135.912186,TRUE,138,"Adenocalymma_bracteatum"
139,1258,135.912186,TRUE,139,"Incarvillea_sinensis"
140,1258,135.912187,TRUE,140,"Incarvillea_mairei"
141,1245,135.912186,TRUE,141,"Jacaranda_copaia"
142,1232,135.912186,TRUE,142,"Stachytarpheta_glabra"
143,1196,135.912187,TRUE,143,"Ixianthes_retzioides"
144,1259,135.912186,TRUE,144,"Hebe_macrocarpa"
145,1259,135.912186,TRUE,145,"Acanthorrhinum_rivas-martinezii"
146,1261,135.912187,TRUE,146,"Veronica_cusickii"
147,1261,135.912187,TRUE,147,"Isoplexis_canariensis"
148,1263,135.912186,TRUE,148,"Penstemon_scariosus"
149,1263,135.912186,TRUE,149,"Penstemon_roseus"
150,1263,135.912186,TRUE,150,"Penstemon_pallidus"
151,1263,135.912186,TRUE,151,"Penstemon_haydenii"
152,1264,135.912186,TRUE,152,"Collinsia_sparsiflora"
153,1265,135.912187,TRUE,153,"Collinsia_parviflora"
154,1265,135.912187,TRUE,154,"Collinsia_verna"
155,1266,135.912186,TRUE,155,"Saintpaulia_confusa"
156,1270,135.912186,TRUE,156,"Primulina_repanda_var._guilinensis"
157,1270,135.912186,TRUE,157,"Primulina_glandulosa_var._yangshuoensis"
158,1270,135.912187,TRUE,158,"Primulina_lutea"
159,1269,135.912187,TRUE,159,"Dayaoshania_cotinifolia"
160,1268,135.912187,TRUE,160,"Paraboea_rufescens"
161,1275,135.912187,TRUE,161,"Nematanthus_crassifolius"
162,1275,135.912187,TRUE,162,"Nematanthus_lanceolatus"
163,1276,135.912187,TRUE,163,"Sinningia_cooperi"
164,1276,135.912187,TRUE,164,"Paliavana_tenuiflora"
165,1277,135.912187,TRUE,165,"Seemannia_sylvatica"
166,1278,135.912186,TRUE,166,"Gesneria_viridiflora_subsp._sintenisii"
167,1278,135.912186,TRUE,167,"Gesneria_viridiflora_subsp._quisqueyana"
168,1278,135.912186,TRUE,168,"Gesneria_leucomalla"
169,1281,135.912187,TRUE,169,"Gesneria_vernicosa"
170,1282,135.912186,TRUE,170,"Rhytidophyllum_asperum"
171,1282,135.912187,TRUE,171,"Gesneria_citrina"
172,1280,135.912187,TRUE,172,"Gesneria_pedunculosa"
173,1283,135.912187,TRUE,173,"Gesneria_reticulata"
174,1283,135.912187,TRUE,174,"Gesneria_cuneifolia"
175,1272,135.912187,TRUE,175,"Rhabdothamnus_solandri"
176,1284,135.912186,TRUE,176,"Besleria_longimucronata"
177,1284,135.912187,TRUE,177,"Besleria_melancholica"
178,1286,135.912186,TRUE,178,"Osmanthus_insularis"
179,1286,135.912186,TRUE,179,"Ligustrum_micranthum"
180,1285,135.912187,TRUE,180,"Jasminum_fruticans"
181,1288,135.912187,TRUE,181,"Mertensia_fusiformis"
182,1290,135.912187,TRUE,182,"Echium_wildpretii"
183,1290,135.912187,TRUE,183,"Echium_vulgare"
184,1289,135.912187,TRUE,184,"Arnebia_szechenyi"
185,1292,135.912187,TRUE,185,"Nemophila_menziesii"
186,1292,135.912186,TRUE,186,"Hydrophyllum_fendleri"
187,1293,135.912187,TRUE,187,"Cordia_lutea"
188,1293,135.912187,TRUE,188,"Cordia_multispicata"
189,1299,135.912187,TRUE,189,"Coprosma_spathulata"
190,1301,135.912187,TRUE,190,"Oldenlandia_pulcherrima"
191,1301,135.912186,TRUE,191,"Leptopetalum_grayi"
192,1303,135.912187,TRUE,192,"Mitracarpus_longicalyx"
193,1303,135.912187,TRUE,193,"Richardia_grandiflora"
194,1304,135.912186,TRUE,194,"Manettia_mitis"
195,1304,135.912186,TRUE,195,"Manettia_luteorubra"
196,1304,135.912187,TRUE,196,"Manettia_cordifolia"
197,1307,135.912186,TRUE,197,"Psychotria_tenuinervis"
198,1307,135.912186,TRUE,198,"Psychotria_suterella"
199,1307,135.912186,TRUE,199,"Psychotria_suerrensis"
200,1307,135.912186,TRUE,200,"Psychotria_nuda"
201,1307,135.912186,TRUE,201,"Psychotria_longipedunculata"
202,1307,135.912186,TRUE,202,"Psychotria_jasminoides"
203,1307,135.912186,TRUE,203,"Psychotria_homalosperma"
204,1307,135.912186,TRUE,204,"Psychotria_hoffmannseggiana"
205,1307,135.912186,TRUE,205,"Psychotria_goyazensis"
206,1308,135.912187,TRUE,206,"Psychotria_carthagenensis"
207,1308,135.912187,TRUE,207,"Psychotria_mapourioides"
208,1311,135.912187,TRUE,208,"Carapichea_ipecacuanha"
209,1311,135.912186,TRUE,209,"Margaritopsis_cymuligera"
210,1312,135.912186,TRUE,210,"Palicourea_rigida"
211,1312,135.912186,TRUE,211,"Palicourea_macrobotrys"
212,1312,135.912186,TRUE,212,"Palicourea_demissa"
213,1309,135.912187,TRUE,213,"Psychotria_poeppigiana"
214,1305,135.912187,TRUE,214,"Pagamea_duckei"
215,1297,135.912187,TRUE,215,"Luculia_pinceana"
216,1317,135.912187,TRUE,216,"Oxyanthus_pyriformis"
217,1318,135.912187,TRUE,217,"Duperrea_pavettifolia"
218,1318,135.912186,TRUE,218,"Gardenia_boninensis"
219,1319,135.912186,TRUE,219,"Ixora_pavetta"
220,1319,135.912187,TRUE,220,"Glionnetia_sericea"
221,1315,135.912186,TRUE,221,"Sabicea_cinerea"
222,1314,135.912187,TRUE,222,"Posoqueria_latifolia"
223,1321,135.912187,TRUE,223,"Chiococca_alba"
224,1321,135.912187,TRUE,224,"Hillia_parasitica"
225,1322,135.912186,TRUE,225,"Schizocalyx_cuspidatus"
226,1322,135.912186,TRUE,226,"Bathysa_australis"
227,1328,135.912186,TRUE,227,"Oxypetalum_mexiae"
228,1329,135.912187,TRUE,228,"Oxypetalum_banksii"
229,1329,135.912187,TRUE,229,"Oxypetalum_appendiculatum"
230,1331,135.912187,TRUE,230,"Vincetoxicum_hirundinaria"
231,1332,135.912187,TRUE,231,"Asclepias_syriaca"
232,1332,135.912187,TRUE,232,"Xysmalobium_undulatum"
233,1330,135.912186,TRUE,233,"Cynanchum_otophyllum"
234,1334,135.912187,TRUE,234,"Mandevilla_pentlandiana"
235,1334,135.912187,TRUE,235,"Nerium_oleander"
236,1333,135.912187,TRUE,236,"Apocynum_venetum"
237,1325,135.912186,TRUE,237,"Rauvolfia_grandiflora"
238,1335,135.912186,TRUE,238,"Sebaea_grandis"
239,1335,135.912186,TRUE,239,"Chironia_krebsii"
240,1335,135.912186,TRUE,240,"Chelonanthus_alatus"
241,1338,135.912187,TRUE,241,"Gentianella_germanica"
242,1339,135.912186,TRUE,242,"Swertia_przewalskii"
243,1339,135.912187,TRUE,243,"Swertia_perennis"
244,1340,135.912186,TRUE,244,"Gentiana_stylophora"
245,1340,135.912186,TRUE,245,"Gentiana_cruciata"
246,1340,135.912186,TRUE,246,"Gentiana_crassa_subsp._rigescens"
247,1340,135.912187,TRUE,247,"Gentiana_straminea"
248,1343,135.912186,TRUE,248,"Centaurium_littorale"
249,1344,135.912187,TRUE,249,"Centaurium_erythraea"
250,1344,135.912187,TRUE,250,"Centaurium_pulchellum"
251,1342,135.912187,TRUE,251,"Sabatia_angularis"
252,1341,135.912187,TRUE,252,"Blackstonia_perfoliata"
253,1345,135.912186,TRUE,253,"Geniostoma_fagraeoides"
254,1345,135.912187,TRUE,254,"Gelsemium_sempervirens"
255,1347,135.912186,TRUE,255,"Nierembergia_linariifolia"
256,1354,135.912187,TRUE,256,"Solanum_melongena"
257,1354,135.912187,TRUE,257,"Solanum_carolinense"
258,1353,135.912187,TRUE,258,"Solanum_rostratum"
259,1355,135.912187,TRUE,259,"Solanum_americanum"
260,1355,135.912187,TRUE,260,"Solanum_peruvianum"
261,1356,135.912187,TRUE,261,"Witheringia_solanacea"
262,1356,135.912186,TRUE,262,"Physalis_longifolia"
263,1357,135.912187,TRUE,263,"Lycium_cestroides"
264,1358,135.912187,TRUE,264,"Hyoscyamus_niger"
265,1360,135.912187,TRUE,265,"Anisodus_luridus"
266,1360,135.912187,TRUE,266,"Anisodus_carniolicoides"
267,1359,135.912187,TRUE,267,"Anisodus_tanguticus"
268,1349,135.912187,TRUE,268,"Nicotiana_alata"
269,1348,135.912187,TRUE,269,"Calibrachoa_elegans"
270,1363,135.912186,TRUE,270,"Ipomoea_wolcottiana"
271,1363,135.912186,TRUE,271,"Ipomoea_eriocalyx"
272,1363,135.912186,TRUE,272,"Ipomoea_bahiensis"
273,1363,135.912186,TRUE,273,"Ipomoea_asarifolia"
274,1363,135.912187,TRUE,274,"Ipomoea_purpurea"
275,1365,135.912186,TRUE,275,"Convolvulus_chilensis"
276,1366,135.912187,TRUE,276,"Convolvulus_nodiflorus"
277,1366,135.912187,TRUE,277,"Convolvulus_lineatus"
278,1367,135.912186,TRUE,278,"Calystegia_collina"
279,1367,135.912187,TRUE,279,"Calystegia_sepium"
280,1361,135.912186,TRUE,280,"Merremia_macrocalyx"
281,1189,135.912187,TRUE,281,"Aucuba_japonica"
282,1375,135.912187,TRUE,282,"Erica_multiflora"
283,1382,135.912187,TRUE,283,"Rhododendron_siderophyllum"
284,1382,135.912187,TRUE,284,"Rhododendron_cyanocarpum"
285,1383,135.912187,TRUE,285,"Rhododendron_irroratum"
286,1383,135.912187,TRUE,286,"Rhododendron_decorum"
287,1384,135.912187,TRUE,287,"Rhododendron_agastum"
288,1384,135.912187,TRUE,288,"Rhododendron_delavayi"
289,1379,135.912187,TRUE,289,"Rhododendron_aureum"
290,1385,135.912187,TRUE,290,"Rhododendron_calendulaceum"
291,1385,135.912187,TRUE,291,"Rhododendron_canadense"
292,1386,135.912187,TRUE,292,"Rhododendron_ferrugineum"
293,1386,135.912187,TRUE,293,"Ledum_palustre_subsp._groenlandicum"
294,1388,135.912187,TRUE,294,"Rhododendron_macrosepalum"
295,1388,135.912187,TRUE,295,"Rhododendron_reticulatum"
296,1387,135.912187,TRUE,296,"Rhododendron_semibarbatum"
297,1374,135.912187,TRUE,297,"Kalmia_latifolia"
298,1393,135.912186,TRUE,298,"Vaccinium_microcarpum"
299,1393,135.912186,TRUE,299,"Vaccinium_boninense"
300,1393,135.912186,TRUE,300,"Vaccinium_angustifolium"
301,1396,135.912187,TRUE,301,"Vaccinium_myrtillus"
302,1396,135.912187,TRUE,302,"Vaccinium_membranaceum"
303,1397,135.912187,TRUE,303,"Vaccinium_hirtum"
304,1397,135.912187,TRUE,304,"Vaccinium_smallii"
305,1394,135.912187,TRUE,305,"Vaccinium_vitis-idaea"
306,1392,135.912187,TRUE,306,"Gaylussacia_brasiliensis"
307,1391,135.912187,TRUE,307,"Vaccinium_uliginosum"
308,1390,135.912187,TRUE,308,"Andromeda_polifolia"
309,1399,135.912186,TRUE,309,"Styphelia_abietina"
310,1399,135.912187,TRUE,310,"Brachyloma_ericoides"
311,1398,135.912187,TRUE,311,"Leucopogon_fasciculatus"
312,1401,135.912187,TRUE,312,"Roridula_gorgonias"
313,1401,135.912187,TRUE,313,"Roridula_dentata"
314,1402,135.912187,TRUE,314,"Sarracenia_purpurea"
315,1402,135.912187,TRUE,315,"Darlingtonia_californica"
316,1403,135.912187,TRUE,316,"Symplocos_pergracilis"
317,1404,135.912187,TRUE,317,"Styrax_obassis"
318,1404,135.912187,TRUE,318,"Sinojackia_huangmeiensis"
319,1412,135.912186,TRUE,319,"Primula_sieboldii"
320,1412,135.912186,TRUE,320,"Primula_cusickiana_var._maguirei"
321,1413,135.912187,TRUE,321,"Primula_farinosa"
322,1413,135.912187,TRUE,322,"Primula_modesta"
323,1411,135.912187,TRUE,323,"Primula_veris"
324,1410,135.912187,TRUE,324,"Primula_merrilliana"
325,1409,135.912186,TRUE,325,"Dodecatheon_hendersonii"
326,1415,135.912186,TRUE,326,"Lysimachia_mauritiana_var._rubida"
327,1415,135.912187,TRUE,327,"Anagallis_monelli"
328,1417,135.912187,TRUE,328,"Ardisia_sieboldii"
329,1417,135.912187,TRUE,329,"Ardisia_escallonioides"
330,1418,135.912186,TRUE,330,"Myrsine_parvifolia"
331,1418,135.912186,TRUE,331,"Myrsine_maximowiczii"
332,1419,135.912187,TRUE,332,"Diospyros_vera"
333,1419,135.912186,TRUE,333,"Eschweilera_nana"
334,1420,135.912187,TRUE,334,"Pouteria_torta"
335,1421,135.912187,TRUE,335,"Camellia_oleifera"
336,1421,135.912187,TRUE,336,"Camellia_azalea"
337,1424,135.912187,TRUE,337,"Phlox_drummondii"
338,1426,135.912187,TRUE,338,"Leptosiphon_jepsonii"
339,1426,135.912187,TRUE,339,"Linanthus_bicolor"
340,1425,135.912187,TRUE,340,"Linanthus_parviflorus"
341,1427,135.912186,TRUE,341,"Polemonium_van-bruntiae"
342,1428,135.912187,TRUE,342,"Polemonium_caeruleum"
343,1428,135.912187,TRUE,343,"Polemonium_viscosum"
344,1427,135.912187,TRUE,344,"Polemonium_foliosissimum"
345,1422,135.912187,TRUE,345,"Ipomopsis_aggregata"
346,1429,135.912186,TRUE,346,"Eurya_boninensis"
347,1429,135.912187,TRUE,347,"Eurya_japonica"
348,1430,135.912186,TRUE,348,"Impatiens_platyadena"
349,1430,135.912186,TRUE,349,"Impatiens_lateristachys"
350,1430,135.912186,TRUE,350,"Impatiens_hainanensis"
351,1431,135.912187,TRUE,351,"Impatiens_latifolia"
352,1431,135.912187,TRUE,352,"Impatiens_capensis"
353,1116,135.912186,TRUE,353,"Cornus_kousa_subsp._kousa"
354,1436,135.912186,TRUE,354,"Marginatocereus_marginatus"
355,1439,135.912187,TRUE,355,"Echinopsis_atacamensis"
356,1441,135.912186,TRUE,356,"Cereus_repandus"
357,1441,135.912187,TRUE,357,"Cipocereus_laniflorus"
358,1442,135.912186,TRUE,358,"Melocactus_paucispinus"
359,1442,135.912186,TRUE,359,"Melocactus_glaucescens"
360,1444,135.912187,TRUE,360,"Stenocereus_griseus"
361,1444,135.912187,TRUE,361,"Stenocereus_thurberi"
362,1446,135.912187,TRUE,362,"Pachycereus_pecten-aboriginum"
363,1447,135.912187,TRUE,363,"Carnegiea_gigantea"
364,1447,135.912187,TRUE,364,"Pachycereus_pringlei"
365,1445,135.912187,TRUE,365,"Lophocereus_schottii"
366,1448,135.912187,TRUE,366,"Ferocactus_cylindraceus"
367,1448,135.912187,TRUE,367,"Ferocactus_wislizeni"
368,1436,135.912187,TRUE,368,"Opuntia_monacantha"
369,1449,135.912187,TRUE,369,"Claytonia_virginica"
370,1449,135.912187,TRUE,370,"Claytonia_lanceolata"
371,1434,135.912186,TRUE,371,"Abronia_alpina"
372,1455,135.912186,TRUE,372,"Silene_latifolia_subsp._alba"
373,1455,135.912186,TRUE,373,"Silene_douglasii_var._oraria"
374,1458,135.912187,TRUE,374,"Silene_douglasii"
375,1458,135.912187,TRUE,375,"Silene_stellata"
376,1457,135.912187,TRUE,376,"Silene_virginica"
377,1456,135.912187,TRUE,377,"Silene_dioica"
378,1453,135.912187,TRUE,378,"Silene_viscaria"
379,1452,135.912187,TRUE,379,"Dianthus_deltoides"
380,1460,135.912186,TRUE,380,"Cerastium_cerastoides"
381,1460,135.912187,TRUE,381,"Cerastium_alpinum"
382,1459,135.912187,TRUE,382,"Stellaria_pubera"
383,1462,135.912186,TRUE,383,"Atriplex_acanthocarpa"
384,1462,135.912187,TRUE,384,"Atriplex_canescens"
385,1461,135.912187,TRUE,385,"Krascheninnikovia_ceratoides"
386,1466,135.912187,TRUE,386,"Polygonum_jucundum"
387,1466,135.912187,TRUE,387,"Polygonum_japonicum"
388,1465,135.912187,TRUE,388,"Fagopyrum_acutatum"
389,1469,135.912186,TRUE,389,"Limonium_otolepis"
390,1469,135.912186,TRUE,390,"Limonium_chrysocomum"
391,1468,135.912187,TRUE,391,"Armeria_maritima"
392,1467,135.912187,TRUE,392,"Plumbago_auriculata"
393,1470,135.912187,TRUE,393,"Tamarix_chinensis"
394,1470,135.912187,TRUE,394,"Tamarix_ramosissima"
395,1472,135.912186,TRUE,395,"Ligaria_cuneifolia"
396,1475,135.912186,TRUE,396,"Agelanthus_djurensis"
397,1475,135.912187,TRUE,397,"Agelanthus_brunneus"
398,1474,135.912187,TRUE,398,"Globimetula_braunii"
399,1478,135.912187,TRUE,399,"Psittacanthus_calyculatus"
400,1478,135.912187,TRUE,400,"Psittacanthus_robustus"
401,1477,135.912187,TRUE,401,"Tristerix_corymbosus"
402,1479,135.912187,TRUE,402,"Peraxilla_tetrapetala"
403,1479,135.912187,TRUE,403,"Peraxilla_colensoi"
404,1471,135.912187,TRUE,404,"Santalum_boninense"
405,1113,135.912187,TRUE,405,"Davilla_kunthii"
406,1486,135.912186,TRUE,406,"Retama_sphaerocarpa"
407,1486,135.912186,TRUE,407,"Pultenaea_densifolia"
408,1486,135.912186,TRUE,408,"Gymnocladus_assamicus"
409,1486,135.912186,TRUE,409,"Dillwynia_hispida"
410,1496,135.912187,TRUE,410,"Trifolium_parryi"
411,1496,135.912187,TRUE,411,"Trifolium_dasyphyllum"
412,1495,135.912187,TRUE,412,"Trifolium_repens"
413,1497,135.912187,TRUE,413,"Vicia_nigricans"
414,1497,135.912187,TRUE,414,"Lathyrus_vernus"
415,1500,135.912186,TRUE,415,"Astragalus_scaphoides"
416,1500,135.912186,TRUE,416,"Astragalus_exscapus"
417,1501,135.912186,TRUE,417,"Colutea_arborescens_subsp._hispanica"
418,1501,135.912187,TRUE,418,"Eremosparton_songoricum"
419,1502,135.912186,TRUE,419,"Hedysarum_scoparium"
420,1502,135.912187,TRUE,420,"Hedysarum_coronarium"
421,1504,135.912187,TRUE,421,"Dorycnium_hirsutum"
422,1504,135.912187,TRUE,422,"Anthyllis_vulneraria"
423,1503,135.912186,TRUE,423,"Hippocrepis_emerus_subsp._emerus"
424,1507,135.912187,TRUE,424,"Cologania_broussonetii"
425,1507,135.912186,TRUE,425,"Vigna_caracalla"
426,1506,135.912186,TRUE,426,"Eriosema_distinctum"
427,1509,135.912186,TRUE,427,"Derris_ovalifolia"
428,1509,135.912186,TRUE,428,"Tephrosia_virginiana"
429,1508,135.912187,TRUE,429,"Canavalia_brasiliensis"
430,1514,135.912186,TRUE,430,"Crotalaria_vitellina"
431,1515,135.912186,TRUE,431,"Aspalathus_cymbriformis"
432,1515,135.912187,TRUE,432,"Aspalathus_uniflora"
433,1516,135.912187,TRUE,433,"Lupinus_arcticus"
434,1516,135.912186,TRUE,434,"Cytisus_striatus"
435,1517,135.912187,TRUE,435,"Anagyris_foetida"
436,1517,135.912187,TRUE,436,"Ammopiptanthus_mongolicus"
437,1519,135.912186,TRUE,437,"Aeschynomene_amorphoides"
438,1519,135.912187,TRUE,438,"Geoffroea_decorticans"
439,1518,135.912187,TRUE,439,"Ammodendron_bifolium"
440,1510,135.912187,TRUE,440,"Swartzia_pickelii"
441,1489,135.912187,TRUE,441,"Dipteryx_alata"
442,1526,135.912186,TRUE,442,"Acacia_tortilis"
443,1527,135.912186,TRUE,443,"Inga_sierrae"
444,1527,135.912186,TRUE,444,"Inga_mortoniana"
445,1527,135.912186,TRUE,445,"Inga_densiflora"
446,1528,135.912187,TRUE,446,"Inga_punctata"
447,1528,135.912187,TRUE,447,"Inga_oerstediana"
448,1529,135.912186,TRUE,448,"Pseudopiptadenia_leptostachya"
449,1529,135.912187,TRUE,449,"Pseudopiptadenia_contorta"
450,1524,135.912186,TRUE,450,"Prosopis_glandulosa_var._torreyana"
451,1523,135.912187,TRUE,451,"Parkinsonia_aculeata"
452,1530,135.912186,TRUE,452,"Caesalpinia_pyramidalis"
453,1531,135.912187,TRUE,453,"Caesalpinia_decapetala"
454,1531,135.912187,TRUE,454,"Caesalpinia_echinata"
455,1534,135.912186,TRUE,455,"Senna_silvestris"
456,1534,135.912186,TRUE,456,"Senna_multijuga"
457,1535,135.912187,TRUE,457,"Senna_spectabilis"
458,1535,135.912187,TRUE,458,"Senna_corymbosa"
459,1533,135.912187,TRUE,459,"Senna_didymobotrya"
460,1536,135.912186,TRUE,460,"Chamaecrista_serpens"
461,1536,135.912187,TRUE,461,"Chamaecrista_nictitans"
462,1520,135.912187,TRUE,462,"Ceratonia_siliqua"
463,1537,135.912186,TRUE,463,"Bauhinia_curvula"
464,1537,135.912186,TRUE,464,"Bauhinia_cheilantha"
465,1537,135.912187,TRUE,465,"Bauhinia_forficata"
466,1538,135.912187,TRUE,466,"Talbotiella_gentii"
467,1538,135.912186,TRUE,467,"Copaifera_langsdorffii"
468,1485,135.912186,TRUE,468,"Polygala_vayredae"
469,1548,135.912186,TRUE,469,"Potentilla_simulatrix"
470,1549,135.912187,TRUE,470,"Potentilla_tanacetifolia"
471,1549,135.912187,TRUE,471,"Potentilla_pulcherrima"
472,1550,135.912187,TRUE,472,"Potentilla_simplex"
473,1550,135.912187,TRUE,473,"Potentilla_erecta"
474,1546,135.912187,TRUE,474,"Potentilla_anserina"
475,1545,135.912187,TRUE,475,"Comarum_palustre"
476,1544,135.912187,TRUE,476,"Rubus_chamaemorus"
477,1543,135.912187,TRUE,477,"Geum_rivale"
478,1542,135.912187,TRUE,478,"Dryas_octopetala"
479,1556,135.912187,TRUE,479,"Malus_sieversii"
480,1556,135.912186,TRUE,480,"Photinia_wrightiana"
481,1555,135.912187,TRUE,481,"Crataegus_monogyna"
482,1558,135.912187,TRUE,482,"Sorbus_aucuparia"
483,1558,135.912187,TRUE,483,"Sorbus_torminalis"
484,1559,135.912187,TRUE,484,"Eriobotrya_japonica"
485,1559,135.912187,TRUE,485,"Rhaphiolepis_indica_var._umbellata"
486,1553,135.912187,TRUE,486,"Amelanchier_arborea"
487,1552,135.912187,TRUE,487,"Osteomeles_schwerinae"
488,1561,135.912186,TRUE,488,"Prunus_mongolica"
489,1561,135.912187,TRUE,489,"Prunus_armeniaca"
490,1560,135.912187,TRUE,490,"Prunus_virginiana"
491,1562,135.912186,TRUE,491,"Celtis_africana"
492,1566,135.912186,TRUE,492,"Ziziphus_mistol"
493,1566,135.912186,TRUE,493,"Ziziphus_joazeiro"
494,1567,135.912186,TRUE,494,"Pomaderris_hamiltonii"
495,1567,135.912187,TRUE,495,"Discaria_americana"
496,1564,135.912186,TRUE,496,"Rhamnus_lycioides_subsp._oleoides"
497,1568,135.912186,TRUE,497,"Elaeagnus_rotundata"
498,1568,135.912186,TRUE,498,"Elaeagnus_mollis"
499,1570,135.912187,TRUE,499,"Cucurbita_foetidissima"
500,1572,135.912186,TRUE,500,"Begonia_urophylla"
501,1572,135.912186,TRUE,501,"Begonia_tonduzii"
502,1573,135.912187,TRUE,502,"Begonia_fimbristipula"
503,1573,135.912187,TRUE,503,"Begonia_involucrata"
504,1571,135.912187,TRUE,504,"Coriaria_arborea"
505,1575,135.912186,TRUE,505,"Betula_apoiensis"
506,1576,135.912187,TRUE,506,"Juglans_mandshurica"
507,1577,135.912187,TRUE,507,"Carya_alba"
508,1577,135.912187,TRUE,508,"Carya_ovata"
509,1578,135.912186,TRUE,509,"Quercus_ilex"
510,1578,135.912187,TRUE,510,"Quercus_lobata"
511,1591,135.912186,TRUE,511,"Hypericum_cumulicola"
512,1591,135.912187,TRUE,512,"Hypericum_maculatum"
513,1590,135.912187,TRUE,513,"Vismia_guianensis"
514,1589,135.912187,TRUE,514,"Mourera_fluviatilis"
515,1593,135.912187,TRUE,515,"Clusia_nemorosa"
516,1593,135.912187,TRUE,516,"Clusia_hilariana"
517,1592,135.912186,TRUE,517,"Garcinia_brasiliensis"
518,1594,135.912187,TRUE,518,"Calophyllum_inophyllum"
519,1595,135.912186,TRUE,519,"Kielmeyera_variabilis"
520,1595,135.912186,TRUE,520,"Kielmeyera_speciosa"
521,1595,135.912186,TRUE,521,"Kielmeyera_coriacea"
522,1595,135.912186,TRUE,522,"Kielmeyera_abdita"
523,1600,135.912187,TRUE,523,"Banisteriopsis_adenopoda"
524,1600,135.912187,TRUE,524,"Banisteriopsis_muricata"
525,1601,135.912186,TRUE,525,"Stigmaphyllon_lalandianum"
526,1601,135.912187,TRUE,526,"Stigmaphyllon_paralias"
527,1598,135.912187,TRUE,527,"Alicia_anisopetala"
528,1597,135.912186,TRUE,528,"Heteropterys_alternifolia"
529,1602,135.912186,TRUE,529,"Byrsonima_umbellata"
530,1602,135.912186,TRUE,530,"Byrsonima_sericea"
531,1602,135.912186,TRUE,531,"Byrsonima_rotunda"
532,1602,135.912186,TRUE,532,"Byrsonima_microphylla"
533,1602,135.912186,TRUE,533,"Byrsonima_gardneriana"
534,1603,135.912187,TRUE,534,"Byrsonima_coccolobifolia"
535,1603,135.912187,TRUE,535,"Byrsonima_lucida"
536,1607,135.912186,TRUE,536,"Passiflora_mooreana"
537,1610,135.912187,TRUE,537,"Passiflora_tricuspis"
538,1610,135.912187,TRUE,538,"Passiflora_pohlii"
539,1609,135.912187,TRUE,539,"Passiflora_capsularis"
540,1608,135.912187,TRUE,540,"Passiflora_suberosa"
541,1606,135.912187,TRUE,541,"Passiflora_miersii"
542,1611,135.912186,TRUE,542,"Salix_lapponum"
543,1611,135.912186,TRUE,543,"Salix_lantana"
544,1613,135.912187,TRUE,544,"Salix_miyabeana"
545,1613,135.912187,TRUE,545,"Salix_udensis"
546,1612,135.912187,TRUE,546,"Salix_myrsinifolia"
547,1615,135.912186,TRUE,547,"Viola_praemorsa"
548,1616,135.912187,TRUE,548,"Melicytus_novae-zelandiae"
549,1616,135.912187,TRUE,549,"Melicytus_micranthus"
550,1617,135.912187,TRUE,550,"Amphirrhox_longifolia"
551,1617,135.912187,TRUE,551,"Paypayrola_blanchetiana"
552,1619,135.912187,TRUE,552,"Bridelia_stipularis"
553,1619,135.912187,TRUE,553,"Cleistanthus_sumatranus"
554,1620,135.912186,TRUE,554,"Erythroxylum_tortuosum"
555,1620,135.912186,TRUE,555,"Erythroxylum_suberosum"
556,1620,135.912186,TRUE,556,"Erythroxylum_havanense"
557,1620,135.912186,TRUE,557,"Erythroxylum_campestre"
558,1583,135.912186,TRUE,558,"Couepia_uiti"
559,1582,135.912186,TRUE,559,"Drypetes_integerrima"
560,1624,135.912187,TRUE,560,"Euphorbia_nicaeensis"
561,1624,135.912187,TRUE,561,"Euphorbia_baetica"
562,1626,135.912186,TRUE,562,"Croton_sonderianus"
563,1626,135.912187,TRUE,563,"Croton_sarcopetalus"
564,1627,135.912186,TRUE,564,"Jatropha_ribifolia"
565,1627,135.912186,TRUE,565,"Jatropha_mutabilis"
566,1627,135.912186,TRUE,566,"Jatropha_mollissima"
567,1628,135.912187,TRUE,567,"Mallotus_apelta"
568,1628,135.912187,TRUE,568,"Mallotus_japonicus"
569,1629,135.912187,TRUE,569,"Linum_lewisii"
570,1631,135.912186,TRUE,570,"Sauvagesia_sprengelii"
571,1631,135.912187,TRUE,571,"Sauvagesia_erecta"
572,1630,135.912187,TRUE,572,"Caryocar_villosum"
573,1633,135.912187,TRUE,573,"Elaeocarpus_photiniifolia"
574,1633,135.912187,TRUE,574,"Crinodendron_patagua"
575,1634,135.912186,TRUE,575,"Rourea_induta"
576,1635,135.912186,TRUE,576,"Oxalis_tenuifolia"
577,1635,135.912186,TRUE,577,"Oxalis_squamata"
578,1635,135.912186,TRUE,578,"Oxalis_purpurea"
579,1635,135.912186,TRUE,579,"Oxalis_pes-caprae"
580,1635,135.912186,TRUE,580,"Oxalis_oreophila"
581,1635,135.912186,TRUE,581,"Oxalis_oculifera"
582,1635,135.912186,TRUE,582,"Oxalis_nidulans"
583,1635,135.912186,TRUE,583,"Oxalis_natans"
584,1635,135.912186,TRUE,584,"Oxalis_glabra"
585,1635,135.912186,TRUE,585,"Oxalis_giftbergensis"
586,1635,135.912186,TRUE,586,"Oxalis_eckloniana"
587,1635,135.912186,TRUE,587,"Oxalis_comptonii"
588,1635,135.912187,TRUE,588,"Oxalis_amblyosepala"
589,1636,135.912186,TRUE,589,"Euonymus_chloranthoides"
590,1637,135.912187,TRUE,590,"Parnassia_epunctulata"
591,1637,135.912187,TRUE,591,"Parnassia_palustris"
592,1639,135.912186,TRUE,592,"Zygophyllum_xanthoxylum"
593,1639,135.912187,TRUE,593,"Bulnesia_retamo"
594,1638,135.912186,TRUE,594,"Kallstroemia_grandiflora"
595,1650,135.912187,TRUE,595,"Hesperidanthus_suffrutescens"
596,1650,135.912187,TRUE,596,"Orychophragmus_violaceus"
597,1649,135.912186,TRUE,597,"Cochlearia_bavarica"
598,1652,135.912187,TRUE,598,"Braya_fernaldii"
599,1652,135.912187,TRUE,599,"Braya_longii"
600,1651,135.912187,TRUE,600,"Parrya_nudicaulis"
601,1657,135.912187,TRUE,601,"Erysimum_popovii"
602,1657,135.912187,TRUE,602,"Erysimum_capitatum"
603,1656,135.912186,TRUE,603,"Arabidopsis_lyrata_subsp._petraea"
604,1655,135.912186,TRUE,604,"Physaria_obcordata"
605,1654,135.912187,TRUE,605,"Cardamine_angustata"
606,1653,135.912187,TRUE,606,"Lepidium_papilliferum"
607,1658,135.912186,TRUE,607,"Peritoma_arborea"
608,1659,135.912186,TRUE,608,"Capparis_brevispina"
609,1659,135.912187,TRUE,609,"Capparis_zeylanica"
610,1645,135.912187,TRUE,610,"Limnanthes_douglasii_subsp._rosea"
611,1644,135.912187,TRUE,611,"Jacaratia_spinosa"
612,1663,135.912186,TRUE,612,"Sidalcea_oregana"
613,1663,135.912186,TRUE,613,"Sidalcea_malviflora"
614,1663,135.912186,TRUE,614,"Sidalcea_malviflora_subsp._elegans"
615,1667,135.912186,TRUE,615,"Abutilon_bedfordianum"
616,1668,135.912186,TRUE,616,"Hibiscus_tiliaceus"
617,1668,135.912187,TRUE,617,"Talipariti_glabrum"
618,1666,135.912186,TRUE,618,"Pseudobombax_munguba"
619,1669,135.912187,TRUE,619,"Craigia_yunnanensis"
620,1669,135.912187,TRUE,620,"Dombeya_acutangula"
621,1670,135.912186,TRUE,621,"Durio_kutejensis"
622,1670,135.912186,TRUE,622,"Durio_grandiflorus"
623,1675,135.912186,TRUE,623,"Shorea_lepidota"
624,1675,135.912186,TRUE,624,"Shorea_hemsleyana"
625,1677,135.912187,TRUE,625,"Shorea_acuminata"
626,1677,135.912187,TRUE,626,"Shorea_macroptera"
627,1676,135.912187,TRUE,627,"Shorea_leprosula"
628,1675,135.912187,TRUE,628,"Shorea_ovalis"
629,1674,135.912187,TRUE,629,"Pentacme_siamensis"
630,1673,135.912186,TRUE,630,"Dipterocarpus_oblongifolius"
631,1679,135.912186,TRUE,631,"Fumana_juniperina"
632,1679,135.912186,TRUE,632,"Fumana_thymifolia"
633,1681,135.912186,TRUE,633,"Cistus_monspeliensis"
634,1682,135.912187,TRUE,634,"Cistus_ladanifer"
635,1682,135.912187,TRUE,635,"Cistus_salviifolius"
636,1680,135.912187,TRUE,636,"Halimium_halimifolium"
637,1683,135.912186,TRUE,637,"Helianthemum_squamatum"
638,1683,135.912186,TRUE,638,"Helianthemum_soongaricum"
639,1684,135.912186,TRUE,639,"Cochlospermum_regium"
640,1684,135.912187,TRUE,640,"Cochlospermum_orinocense"
641,1687,135.912187,TRUE,641,"Gnidia_glauca"
642,1687,135.912186,TRUE,642,"Pimelea_villosa_subsp._arenaria"
643,1689,135.912186,TRUE,643,"Daphne_rodriguezii"
644,1689,135.912186,TRUE,644,"Daphne_jezoensis"
645,1689,135.912186,TRUE,645,"Daphne_gnidium"
646,1689,135.912187,TRUE,646,"Daphne_laureola"
647,1688,135.912187,TRUE,647,"Wikstroemia_pseudoretusa"
648,1685,135.912186,TRUE,648,"Aquilaria_crassna"
649,1698,135.912187,TRUE,649,"Melicope_nishimurae"
650,1698,135.912187,TRUE,650,"Melicope_simplex"
651,1697,135.912187,TRUE,651,"Phellodendron_amurense"
652,1699,135.912186,TRUE,652,"Hortia_brasiliana"
653,1700,135.912187,TRUE,653,"Metrodorea_nigra"
654,1700,135.912187,TRUE,654,"Metrodorea_stipularis"
655,1695,135.912187,TRUE,655,"Galipea_jasminiflora"
656,1702,135.912187,TRUE,656,"Aegle_marmelos"
657,1702,135.912187,TRUE,657,"Glycosmis_pentaphylla"
658,1701,135.912187,TRUE,658,"Psilopeganum_sinense"
659,1704,135.912187,TRUE,659,"Cabralea_canjerana"
660,1704,135.912187,TRUE,660,"Walsura_temrifolia"
661,1703,135.912187,TRUE,661,"Azadirachta_indica"
662,1705,135.912187,TRUE,662,"Handeliodendron_bodinieri"
663,1706,135.912187,TRUE,663,"Lepisanthes_tetraphylla"
664,1706,135.912186,TRUE,664,"Dodonaea_viscosa_subsp._angustifolia"
665,1707,135.912187,TRUE,665,"Schinus_terebinthifolia"
666,1707,135.912187,TRUE,666,"Spondias_tuberosa"
667,1709,135.912187,TRUE,667,"Nitraria_roborowskii"
668,1709,135.912187,TRUE,668,"Nitraria_sibirica"
669,1708,135.912187,TRUE,669,"Nitraria_sphaerocarpa"
670,1710,135.912187,TRUE,670,"Staphylea_trifolia"
671,1711,135.912187,TRUE,671,"Stachyurus_praecox"
672,1711,135.912187,TRUE,672,"Stachyurus_macrocarpus"
673,1722,135.912187,TRUE,673,"Leandra_variabilis"
674,1722,135.912187,TRUE,674,"Leandra_regnellii"
675,1723,135.912187,TRUE,675,"Tococa_guianensis"
676,1723,135.912187,TRUE,676,"Tococa_nitens"
677,1727,135.912187,TRUE,677,"Miconia_latecrenata"
678,1727,135.912187,TRUE,678,"Miconia_angelana"
679,1728,135.912187,TRUE,679,"Miconia_pusilliflora"
680,1728,135.912187,TRUE,680,"Miconia_alata"
681,1725,135.912187,TRUE,681,"Miconia_ciliata"
682,1724,135.912187,TRUE,682,"Miconia_ferruginata"
683,1719,135.912187,TRUE,683,"Eriocnema_fulva"
684,1718,135.912187,TRUE,684,"Meriania_sclerophylla"
685,1734,135.912186,TRUE,685,"Tibouchina_villosissima"
686,1734,135.912186,TRUE,686,"Tibouchina_fraterna"
687,1734,135.912186,TRUE,687,"Tibouchina_aegopogon"
688,1738,135.912187,TRUE,688,"Tibouchina_frigidula"
689,1738,135.912187,TRUE,689,"Tibouchina_stenocarpa"
690,1739,135.912187,TRUE,690,"Tibouchina_sellowiana"
691,1739,135.912187,TRUE,691,"Tibouchina_semidecandra"
692,1740,135.912187,TRUE,692,"Tibouchina_heteromalla"
693,1740,135.912187,TRUE,693,"Tibouchina_pulchra"
694,1735,135.912187,TRUE,694,"Tibouchina_papyrus"
695,1734,135.912187,TRUE,695,"Tibouchina_cerastifolia"
696,1741,135.912186,TRUE,696,"Svitramia_spp."
697,1742,135.912187,TRUE,697,"Svitramia_hatschbachii"
698,1742,135.912187,TRUE,698,"Svitramia_minor"
699,1743,135.912186,TRUE,699,"Melastoma_tetramerum"
700,1743,135.912186,TRUE,700,"Melastoma_intermedium"
701,1743,135.912187,TRUE,701,"Melastoma_sanguineum"
702,1743,135.912187,TRUE,702,"Melastoma_malabathricum"
703,1745,135.912187,TRUE,703,"Marcetia_taxifolia"
704,1745,135.912187,TRUE,704,"Macairea_radula"
705,1744,135.912187,TRUE,705,"Comolia_microphylla"
706,1746,135.912187,TRUE,706,"Rhexia_virginica"
707,1749,135.912187,TRUE,707,"Lavoisiera_imbricata"
708,1750,135.912186,TRUE,708,"Microlicia_viminalis"
709,1750,135.912186,TRUE,709,"Microlicia_inquinans"
710,1750,135.912186,TRUE,710,"Microlicia_fasciculata"
711,1751,135.912187,TRUE,711,"Trembleya_parviflora"
712,1751,135.912187,TRUE,712,"Trembleya_neopyrenaica"
713,1752,135.912186,TRUE,713,"Rhynchanthera_dichotoma"
714,1752,135.912187,TRUE,714,"Rhynchanthera_grandiflora"
715,1753,135.912186,TRUE,715,"Cambessedesia_regnelliana"
716,1753,135.912187,TRUE,716,"Cambessedesia_hilariana"
717,1753,135.912187,TRUE,717,"Cambessedesia_espora"
718,1716,135.912187,TRUE,718,"Memecylon_umbellatum"
719,1758,135.912186,TRUE,719,"Eugenia_selloi"
720,1758,135.912186,TRUE,720,"Eugenia_roxburghii"
721,1758,135.912187,TRUE,721,"Eugenia_punicifolia"
722,1757,135.912187,TRUE,722,"Eugenia_uniflora"
723,1759,135.912186,TRUE,723,"Myrcia_tomentosa"
724,1759,135.912187,TRUE,724,"Myrcia_splendens"
725,1760,135.912186,TRUE,725,"Syzygium_rotundifolium"
726,1760,135.912187,TRUE,726,"Metrosideros_excelsa"
727,1754,135.912186,TRUE,727,"Vochysia_cinnamomea"
728,1762,135.912186,TRUE,728,"Camissoniopsis_cheiranthifolia"
729,1765,135.912186,TRUE,729,"Oenothera_cespitosa"
730,1765,135.912187,TRUE,730,"Oenothera_biennis"
731,1765,135.912187,TRUE,731,"Oenothera_macrocarpa"
732,1766,135.912186,TRUE,732,"Clarkia_xantiana"
733,1766,135.912186,TRUE,733,"Clarkia_pulchella"
734,1763,135.912186,TRUE,734,"Fuchsia_excorticata"
735,1768,135.912186,TRUE,735,"Diplusodon_hirsutus"
736,1768,135.912186,TRUE,736,"Diplusodon_orbicularis"
737,1769,135.912187,TRUE,737,"Lythrum_salicaria"
738,1769,135.912187,TRUE,738,"Decodon_verticillatus"
739,1767,135.912186,TRUE,739,"Cuphea_melvilla"
740,1772,135.912186,TRUE,740,"Combretum_monetaria"
741,1772,135.912186,TRUE,741,"Combretum_leprosum"
742,1771,135.912186,TRUE,742,"Terminalia_pallida"
743,1770,135.912187,TRUE,743,"Laguncularia_racemosa"
744,1774,135.912187,TRUE,744,"Geranium_sylvaticum"
745,1774,135.912187,TRUE,745,"Geranium_maculatum"
746,1773,135.912186,TRUE,746,"Erodium_glandulosum_subsp._paularense"
747,1776,135.912187,TRUE,747,"Echeveria_gibbiflora"
748,1777,135.912187,TRUE,748,"Saxifraga_hirculus"
749,1778,135.912187,TRUE,749,"Saxifraga_stellaris"
750,1778,135.912187,TRUE,750,"Tiarella_cordifolia"
751,1781,135.912187,TRUE,751,"Distylium_lepidotum"
752,1781,135.912187,TRUE,752,"Hamamelis_virginiana"
753,1780,135.912187,TRUE,753,"Disanthus_cercidifolius"
754,1782,135.912187,TRUE,754,"Paeonia_delavayi"
755,1782,135.912187,TRUE,755,"Paeonia_officinalis"
756,1787,135.912187,TRUE,756,"Banksia_aemula"
757,1788,135.912187,TRUE,757,"Banksia_paludosa"
758,1789,135.912187,TRUE,758,"Banksia_ericifolia"
759,1789,135.912187,TRUE,759,"Banksia_spinulosa"
760,1786,135.912187,TRUE,760,"Knightia_excelsa"
761,1791,135.912186,TRUE,761,"Grevillea_sphacelata"
762,1791,135.912186,TRUE,762,"Grevillea_barklyana"
763,1791,135.912187,TRUE,763,"Grevillea_repens"
764,1793,135.912187,TRUE,764,"Telopea_speciosissima"
765,1793,135.912187,TRUE,765,"Telopea_mongaensis"
766,1792,135.912187,TRUE,766,"Embothrium_coccineum"
767,1794,135.912187,TRUE,767,"Leucospermum_conocarpodendron"
768,1799,135.912187,TRUE,768,"Protea_simplex"
769,1799,135.912187,TRUE,769,"Protea_caffra"
770,1798,135.912187,TRUE,770,"Protea_welwitschii"
771,1797,135.912187,TRUE,771,"Protea_punctata"
772,1800,135.912187,TRUE,772,"Protea_longifolia"
773,1800,135.912187,TRUE,773,"Protea_compacta"
774,1802,135.912187,TRUE,774,"Protea_magnifica"
775,1802,135.912187,TRUE,775,"Protea_laurifolia"
776,1801,135.912187,TRUE,776,"Protea_repens"
777,1803,135.912186,TRUE,777,"Persoonia_rigida"
778,1803,135.912186,TRUE,778,"Persoonia_mollis"
779,1803,135.912186,TRUE,779,"Persoonia_glaucescens"
780,1803,135.912187,TRUE,780,"Persoonia_lanceolata"
781,1812,135.912187,TRUE,781,"Ranunculus_weyleri"
782,1812,135.912187,TRUE,782,"Ranunculus_acris"
783,1814,135.912186,TRUE,783,"Clematis_boninensis"
784,1814,135.912187,TRUE,784,"Clematis_socialis"
785,1817,135.912186,TRUE,785,"Anemone_hepatica_var._acuta"
786,1817,135.912187,TRUE,786,"Anemone_rivularis"
787,1818,135.912187,TRUE,787,"Anemone_obtusiloba"
788,1818,135.912187,TRUE,788,"Hepatica_nobilis_var._obtusa"
789,1816,135.912187,TRUE,789,"Anemone_occidentalis"
790,1815,135.912187,TRUE,790,"Anemone_pulsatilla"
791,1810,135.912187,TRUE,791,"Helleborus_foetidus"
792,1820,135.912187,TRUE,792,"Trollius_ranunculoides"
793,1820,135.912187,TRUE,793,"Adonis_ramosa"
794,1819,135.912187,TRUE,794,"Caltha_leptosepala"
795,1823,135.912187,TRUE,795,"Delphinium_menziesii"
796,1823,135.912187,TRUE,796,"Delphinium_caeruleum"
797,1822,135.912187,TRUE,797,"Aconitum_gymnandrum"
798,1824,135.912187,TRUE,798,"Aconitum_napellus"
799,1824,135.912187,TRUE,799,"Aconitum_kusnezoffii"
800,1826,135.912187,TRUE,800,"Thalictrum_pubescens"
801,1826,135.912187,TRUE,801,"Anemonella_thalictroides"
802,1825,135.912187,TRUE,802,"Aquilegia_canadensis"
803,1806,135.912187,TRUE,803,"Coptis_teeta"
804,1828,135.912187,TRUE,804,"Berberis_darwinii"
805,1830,135.912187,TRUE,805,"Epimedium_leptorrhizum"
806,1832,135.912187,TRUE,806,"Epimedium_sutchuenense"
807,1832,135.912187,TRUE,807,"Epimedium_franchetii"
808,1831,135.912187,TRUE,808,"Epimedium_mikinorii"
809,1829,135.912187,TRUE,809,"Dysosma_pleiantha"
810,1833,135.912187,TRUE,810,"Podophyllum_peltatum"
811,1833,135.912187,TRUE,811,"Sinopodophyllum_hexandrum"
812,1835,135.912187,TRUE,812,"Glaucium_flavum"
813,1835,135.912187,TRUE,813,"Sanguinaria_canadensis"
814,1836,135.912186,TRUE,814,"Corydalis_lineariloba"
815,1836,135.912187,TRUE,815,"Corydalis_ambigua"
816,1842,135.912186,TRUE,816,"Senghasiella_glaucifolia"
817,1842,135.912186,TRUE,817,"Psilochilus_modestus"
818,1858,135.912187,TRUE,818,"Comparettia_falcata"
819,1858,135.912187,TRUE,819,"Ionopsis_utricularioides"
820,1857,135.912187,TRUE,820,"Trichocentrum_pumilum"
821,1860,135.912186,TRUE,821,"Stanhopea_lietzei"
822,1860,135.912187,TRUE,822,"Stanhopea_insignis"
823,1861,135.912186,TRUE,823,"Gongora_quinquenervis"
824,1861,135.912187,TRUE,824,"Cirrhaea_dependens"
825,1864,135.912186,TRUE,825,"Eulophia_alta"
826,1864,135.912187,TRUE,826,"Eulophia_graminea"
827,1863,135.912187,TRUE,827,"Grobya_amherstiae"
828,1862,135.912187,TRUE,828,"Cyrtopodium_flavum"
829,1866,135.912187,TRUE,829,"Cymbidium_lancifolium"
830,1866,135.912187,TRUE,830,"Cymbidium_macrorhizon"
831,1865,135.912187,TRUE,831,"Cymbidium_goeringii"
832,1868,135.912186,TRUE,832,"Luisia_boninensis"
833,1868,135.912187,TRUE,833,"Angraecum_bracteosum"
834,1869,135.912186,TRUE,834,"Polystachya_estrellensis"
835,1869,135.912187,TRUE,835,"Polystachya_concreta"
836,1874,135.912187,TRUE,836,"Epidendrum_ciliare"
837,1874,135.912187,TRUE,837,"Epidendrum_paniculatum"
838,1875,135.912187,TRUE,838,"Myrmecophila_christinae"
839,1875,135.912187,TRUE,839,"Myrmecophila_tibicinis"
840,1872,135.912187,TRUE,840,"Cattleya_wallisii"
841,1871,135.912186,TRUE,841,"Broughtonia_cubensis"
842,1878,135.912187,TRUE,842,"Aplectrum_hyemale"
843,1878,135.912186,TRUE,843,"Govenia_utriculata"
844,1879,135.912187,TRUE,844,"Tipularia_discolor"
845,1879,135.912187,TRUE,845,"Calypso_bulbosa"
846,1881,135.912186,TRUE,846,"Earina_mucronata"
847,1881,135.912186,TRUE,847,"Earina_aestivalis"
848,1881,135.912187,TRUE,848,"Earina_autumnalis"
849,1880,135.912187,TRUE,849,"Dendrobium_cunninghamii"
850,1883,135.912186,TRUE,850,"Calanthe_hattorii"
851,1883,135.912187,TRUE,851,"Calanthe_discolor"
852,1882,135.912187,TRUE,852,"Phaius_delavayi"
853,1850,135.912187,TRUE,853,"Eria_coronaria"
854,1884,135.912187,TRUE,854,"Dendrobium_catenatum"
855,1884,135.912186,TRUE,855,"Bulbophyllum_variegatum"
856,1848,135.912187,TRUE,856,"Bletilla_striata"
857,1847,135.912187,TRUE,857,"Corymborkis_flava"
858,1846,135.912186,TRUE,858,"Elleanthus_brasiliensis"
859,1887,135.912187,TRUE,859,"Epipactis_helleborine"
860,1887,135.912187,TRUE,860,"Epipactis_palustris"
861,1886,135.912187,TRUE,861,"Cephalanthera_falcata"
862,1885,135.912186,TRUE,862,"Neottia_listeroides"
863,1896,135.912186,TRUE,863,"Platanthera_ciliaris"
864,1896,135.912186,TRUE,864,"Platanthera_boninensis"
865,1897,135.912187,TRUE,865,"Platanthera_bifolia"
866,1897,135.912187,TRUE,866,"Platanthera_obtusata"
867,1898,135.912187,TRUE,867,"Galearis_spathulata"
868,1898,135.912187,TRUE,868,"Gymnadenia_conopsea"
869,1899,135.912186,TRUE,869,"Dactylorhiza_lapponica"
870,1899,135.912187,TRUE,870,"Dactylorhiza_incarnata"
871,1902,135.912187,TRUE,871,"Serapias_vomeracea"
872,1903,135.912186,TRUE,872,"Anacamptis_papilionacea"
873,1903,135.912186,TRUE,873,"Anacamptis_morio"
874,1903,135.912187,TRUE,874,"Anacamptis_coriophora"
875,1901,135.912187,TRUE,875,"Himantoglossum_robertianum"
876,1904,135.912186,TRUE,876,"Orchis_italica"
877,1904,135.912186,TRUE,877,"Orchis_anthropophora"
878,1904,135.912187,TRUE,878,"Orchis_mascula"
879,1892,135.912187,TRUE,879,"Ponerorchis_chusua"
880,1905,135.912186,TRUE,880,"Habenaria_paulistana"
881,1905,135.912187,TRUE,881,"Habenaria_johannensis"
882,1906,135.912186,TRUE,882,"Satyrium_nepalense_var._ciliatum"
883,1907,135.912187,TRUE,883,"Satyrium_coriifolium"
884,1908,135.912187,TRUE,884,"Satyrium_erectum"
885,1908,135.912187,TRUE,885,"Satyrium_bicorne"
886,1906,135.912187,TRUE,886,"Satyrium_pumilum"
887,1912,135.912187,TRUE,887,"Disa_pulchra"
888,1913,135.912187,TRUE,888,"Disa_fasciata"
889,1913,135.912187,TRUE,889,"Disa_tenella"
890,1911,135.912187,TRUE,890,"Disa_draconis"
891,1916,135.912187,TRUE,891,"Disa_racemosa"
892,1916,135.912187,TRUE,892,"Disa_tenuifolia"
893,1917,135.912187,TRUE,893,"Disa_bivalvata"
894,1917,135.912187,TRUE,894,"Disa_atricapilla"
895,1914,135.912187,TRUE,895,"Disa_uniflora"
896,1909,135.912187,TRUE,896,"Pterygodium_catholicum"
897,1922,135.912187,TRUE,897,"Myrosmodes_cochleare"
898,1923,135.912187,TRUE,898,"Spiranthes_spiralis"
899,1923,135.912186,TRUE,899,"Cyclopogon_cranichoides"
900,1921,135.912186,TRUE,900,"Goodyera_boninensis"
901,1925,135.912186,TRUE,901,"Chloraea_galeata"
902,1927,135.912187,TRUE,902,"Chloraea_crispa"
903,1927,135.912187,TRUE,903,"Chloraea_bletioides"
904,1926,135.912187,TRUE,904,"Chloraea_chrysantha"
905,1929,135.912187,TRUE,905,"Gavilea_odoratissima"
906,1929,135.912187,TRUE,906,"Gavilea_araucana"
907,1928,135.912187,TRUE,907,"Gavilea_venosa"
908,1930,135.912186,TRUE,908,"Pterostylis_patens"
909,1930,135.912186,TRUE,909,"Pterostylis_alobula"
910,1930,135.912187,TRUE,910,"Pterostylis_sanguinea"
911,1932,135.912187,TRUE,911,"Caladenia_arenicola"
912,1932,135.912187,TRUE,912,"Caladenia_flava"
913,1933,135.912187,TRUE,913,"Thelymitra_longifolia"
914,1933,135.912187,TRUE,914,"Diuris_magnifica"
915,1941,135.912187,TRUE,915,"Cypripedium_tibeticum"
916,1941,135.912187,TRUE,916,"Cypripedium_henryi"
917,1940,135.912187,TRUE,917,"Cypripedium_macranthos"
918,1939,135.912187,TRUE,918,"Cypripedium_candidum"
919,1938,135.912187,TRUE,919,"Cypripedium_acaule"
920,1937,135.912187,TRUE,920,"Cypripedium_japonicum"
921,1936,135.912187,TRUE,921,"Cypripedium_plectrochilum"
922,1935,135.912187,TRUE,922,"Cypripedium_flavum"
923,1942,135.912187,TRUE,923,"Cypripedium_bardolphianum"
924,1942,135.912187,TRUE,924,"Cypripedium_fasciculatum"
925,1952,135.912187,TRUE,925,"Maianthemum_trifolium"
926,1952,135.912187,TRUE,926,"Maianthemum_stellatum"
927,1954,135.912187,TRUE,927,"Maianthemum_canadense"
928,1954,135.912187,TRUE,928,"Maianthemum_bifolium"
929,1953,135.912187,TRUE,929,"Maianthemum_dilatatum"
930,1950,135.912187,TRUE,930,"Ruscus_aculeatus"
931,1956,135.912186,TRUE,931,"Agave_mckelveyana"
932,1956,135.912186,TRUE,932,"Yucca_elata"
933,1957,135.912187,TRUE,933,"Camassia_quamash"
934,1957,135.912187,TRUE,934,"Camassia_leichtlinii"
935,1948,135.912187,TRUE,935,"Triteleia_hyacinthina"
936,1959,135.912187,TRUE,936,"Ornithogalum_thyrsoides"
937,1959,135.912186,TRUE,937,"Scilla_hyacinthoides"
938,1958,135.912186,TRUE,938,"Drimia_maritima"
939,1960,135.912187,TRUE,939,"Allium_acuminatum"
940,1965,135.912186,TRUE,940,"Narcissus_cyclamineus"
941,1967,135.912187,TRUE,941,"Narcissus_hispanicus"
942,1967,135.912187,TRUE,942,"Narcissus_assoanus"
943,1966,135.912187,TRUE,943,"Narcissus_triandrus"
944,1965,135.912187,TRUE,944,"Narcissus_serotinus"
945,1964,135.912187,TRUE,945,"Pancratium_maritimum"
946,1963,135.912186,TRUE,946,"Rhodophiala_rhodolirion"
947,1969,135.912187,TRUE,947,"Haemanthus_sanguineus"
948,1970,135.912187,TRUE,948,"Clivia_gardenii"
949,1970,135.912187,TRUE,949,"Clivia_miniata"
950,1971,135.912186,TRUE,950,"Cyrtanthus_ventricosus"
951,1971,135.912186,TRUE,951,"Cyrtanthus_guthrieae"
952,1973,135.912186,TRUE,952,"Brunsvigia_undulata"
953,1973,135.912186,TRUE,953,"Brunsvigia_litoralis"
954,1972,135.912186,TRUE,954,"Nerine_sarniensis"
955,1978,135.912186,TRUE,955,"Aloe_pruinosa"
956,1978,135.912186,TRUE,956,"Aloe_lineata_var._muirii"
957,1979,135.912187,TRUE,957,"Aloe_pluridens"
958,1980,135.912187,TRUE,958,"Aloe_africana"
959,1980,135.912187,TRUE,959,"Aloe_hexapetala"
960,1977,135.912186,TRUE,960,"Bulbine_bulbosa"
961,1976,135.912187,TRUE,961,"Kniphofia_linearifolia"
962,1981,135.912187,TRUE,962,"Asphodelus_aestivus"
963,1981,135.912187,TRUE,963,"Asphodelus_albus"
964,1982,135.912186,TRUE,964,"Hemerocallis_hybrida"
965,1982,135.912186,TRUE,965,"Dianella_revoluta"
966,1983,135.912186,TRUE,966,"Crocosmia_x_crocosmiiflora"
967,1987,135.912187,TRUE,967,"Iris_tectorum"
968,1988,135.912187,TRUE,968,"Iris_haynei"
969,1988,135.912187,TRUE,969,"Iris_atropurpurea"
970,1992,135.912187,TRUE,970,"Iris_tenax"
971,1993,135.912187,TRUE,971,"Iris_versicolor"
972,1993,135.912187,TRUE,972,"Iris_ensata"
973,1991,135.912187,TRUE,973,"Iris_fulva"
974,1994,135.912187,TRUE,974,"Iris_tuberosa"
975,1994,135.912187,TRUE,975,"Iris_speculatrix"
976,1989,135.912187,TRUE,976,"Iris_cristata"
977,1995,135.912187,TRUE,977,"Sisyrinchium_campestre"
978,1995,135.912187,TRUE,978,"Cypella_herbertii"
979,1999,135.912187,TRUE,979,"Gladiolus_liliaceus"
980,1999,135.912187,TRUE,980,"Gladiolus_longicollis"
981,2001,135.912186,TRUE,981,"Watsonia_lepida"
982,2001,135.912187,TRUE,982,"Thereianthus_spicatus"
983,2000,135.912187,TRUE,983,"Tritoniopsis_revoluta"
984,2005,135.912187,TRUE,984,"Babiana_ringens"
985,2005,135.912187,TRUE,985,"Babiana_avicularis"
986,2004,135.912187,TRUE,986,"Babiana_hirsuta"
987,2006,135.912187,TRUE,987,"Tritonia_disticha"
988,2007,135.912186,TRUE,988,"Dierama_luteoalbidum"
989,2007,135.912187,TRUE,989,"Dierama_dracomontanum"
990,2002,135.912186,TRUE,990,"Crocus_spp."
991,1996,135.912186,TRUE,991,"Aristea_torulosa"
992,2008,135.912186,TRUE,992,"Blandfordia_nobilis"
993,2008,135.912187,TRUE,993,"Blandfordia_grandiflora"
994,2014,135.912186,TRUE,994,"Spartina_alterniflora"
995,2014,135.912186,TRUE,995,"Spartina_patens"
996,2013,135.912186,TRUE,996,"Merostachys_riedeliana"
997,2016,135.912187,TRUE,997,"Andropogon_gerardii"
998,2016,135.912187,TRUE,998,"Sorghastrum_nutans"
999,2017,135.912187,TRUE,999,"Distichlis_spicata"
1000,2017,135.912187,TRUE,1000,"Phragmites_australis"
1001,2012,135.912187,TRUE,1001,"Xyris_tennesseensis"
1002,2018,135.912186,TRUE,1002,"Carex_scabrata"
1003,2018,135.912186,TRUE,1003,"Carex_plantaginea"
1004,2018,135.912186,TRUE,1004,"Carex_hirtifolia"
1005,2020,135.912187,TRUE,1005,"Carex_pedunculata"
1006,2020,135.912187,TRUE,1006,"Carex_pensylvanica"
1007,2021,135.912187,TRUE,1007,"Carex_laxiflora"
1008,2021,135.912187,TRUE,1008,"Carex_arctata"
1009,2025,135.912186,TRUE,1009,"Aechmea_lindenii_var._lindenii"
1010,2027,135.912187,TRUE,1010,"Aechmea_distichantha"
1011,2027,135.912187,TRUE,1011,"Aechmea_van-houtteana"
1012,2026,135.912187,TRUE,1012,"Aechmea_nudicaulis"
1013,2028,135.912186,TRUE,1013,"Billbergia_distachia_var._distachia"
1014,2029,135.912186,TRUE,1014,"Nidularium_itatiaiae"
1015,2029,135.912186,TRUE,1015,"Quesnelia_augusto-coburgii"
1016,2031,135.912186,TRUE,1016,"Dyckia_tuberosa"
1017,2031,135.912186,TRUE,1017,"Encholirium_heloisae"
1018,2032,135.912186,TRUE,1018,"Pitcairnia_brittoniana"
1019,2032,135.912187,TRUE,1019,"Pitcairnia_flammea"
1020,2034,135.912187,TRUE,1020,"Tillandsia_geminiflora"
1021,2034,135.912187,TRUE,1021,"Tillandsia_viridiflora"
1022,2035,135.912186,TRUE,1022,"Vriesea_gradata"
1023,2038,135.912187,TRUE,1023,"Vriesea_gigantea"
1024,2038,135.912187,TRUE,1024,"Vriesea_longicaulis"
1025,2037,135.912187,TRUE,1025,"Vriesea_friburgensis"
1026,2039,135.912187,TRUE,1026,"Vriesea_ensiformis"
1027,2039,135.912187,TRUE,1027,"Vriesea_carinata"
1028,2048,135.912186,TRUE,1028,"Hedychium_villosum_var._tenuiflorum"
1029,2050,135.912187,TRUE,1029,"Hedychium_spicatum"
1030,2050,135.912187,TRUE,1030,"Hedychium_villosum"
1031,2049,135.912187,TRUE,1031,"Hedychium_yunnanense"
1032,2047,135.912187,TRUE,1032,"Caulokaempferia_coenobialis"
1033,2046,135.912187,TRUE,1033,"Alpinia_kwangsiensis"
1034,2045,135.912187,TRUE,1034,"Costus_arabicus"
1035,2055,135.912186,TRUE,1035,"Calathea_ovandensis"
1036,2055,135.912186,TRUE,1036,"Calathea_cylindrica"
1037,2054,135.912187,TRUE,1037,"Phrynium_imbricatum"
1038,2056,135.912187,TRUE,1038,"Saranthe_klotzschiana"
1039,2057,135.912187,TRUE,1039,"Afrocalathea_rhizantha"
1040,2058,135.912186,TRUE,1040,"Marantochloa_grandiflora"
1041,2058,135.912187,TRUE,1041,"Marantochloa_conferta"
1042,2062,135.912187,TRUE,1042,"Hypselodelphys_hirsuta"
1043,2062,135.912187,TRUE,1043,"Hypselodelphys_scandens"
1044,2061,135.912187,TRUE,1044,"Hypselodelphys_poggeana"
1045,2060,135.912187,TRUE,1045,"Thaumatococcus_flavus"
1046,2059,135.912187,TRUE,1046,"Sarcophrynium_brachystachyum"
1047,2063,135.912187,TRUE,1047,"Canna_paniculata"
1048,2063,135.912187,TRUE,1048,"Canna_indica"
1049,2043,135.912186,TRUE,1049,"Heliconia_metallica"
1050,2042,135.912187,TRUE,1050,"Ensete_lasiocarpum"
1051,2065,135.912186,TRUE,1051,"Dichorisandra_incurva"
1052,2065,135.912186,TRUE,1052,"Dichorisandra_hexandra"
1053,2064,135.912186,TRUE,1053,"Commelina_erecta"
1054,2067,135.912186,TRUE,1054,"Dypsis_decaryi"
1055,2067,135.912187,TRUE,1055,"Oenocarpus_bataua"
1056,2068,135.912186,TRUE,1056,"Geonoma_pohliana_subsp._weddelliana"
1057,2068,135.912187,TRUE,1057,"Calyptrogyne_ghiesbreghtiana"
1058,2073,135.912187,TRUE,1058,"Lilium_auratum"
1059,2073,135.912187,TRUE,1059,"Fritillaria_meleagris"
1060,2072,135.912187,TRUE,1060,"Clintonia_borealis"
1061,2074,135.912187,TRUE,1061,"Gagea_lutea"
1062,2076,135.912187,TRUE,1062,"Erythronium_grandiflorum"
1063,2076,135.912187,TRUE,1063,"Erythronium_oregonum"
1064,2077,135.912187,TRUE,1064,"Erythronium_umbilicatum"
1065,2077,135.912187,TRUE,1065,"Erythronium_americanum"
1066,2070,135.912187,TRUE,1066,"Smilax_china"
1067,2081,135.912187,TRUE,1067,"Wurmbea_biglandulosa"
1068,2081,135.912187,TRUE,1068,"Burchardia_umbellata"
1069,2080,135.912187,TRUE,1069,"Uvularia_sessilifolia"
1070,2079,135.912187,TRUE,1070,"Alstroemeria_aurea"
1071,2085,135.912187,TRUE,1071,"Trillium_recurvatum"
1072,2085,135.912187,TRUE,1072,"Trillium_reliquum"
1073,2084,135.912187,TRUE,1073,"Trillium_grandiflorum"
1074,2087,135.912187,TRUE,1074,"Trillium_catesbaei"
1075,2087,135.912187,TRUE,1075,"Trillium_erectum"
1076,2086,135.912187,TRUE,1076,"Trillium_camschatcense"
1077,2082,135.912187,TRUE,1077,"Toxicoscordion_paniculatum"
1078,2088,135.912187,TRUE,1078,"Vellozia_epidendroides"
1079,2088,135.912187,TRUE,1079,"Vellozia_declinans"
1080,2091,135.912187,TRUE,1080,"Arisaema_triphyllum"
1081,2091,135.912187,TRUE,1081,"Arum_italicum"
1082,2090,135.912187,TRUE,1082,"Philodendron_adamantinum"
1083,2093,135.912186,TRUE,1083,"Phyllospadix_serrulatus"
1084,2093,135.912187,TRUE,1084,"Phyllospadix_scouleri"
1085,2092,135.912187,TRUE,1085,"Echinodorus_longipetalus"
1086,2099,135.912187,TRUE,1086,"Uvaria_monticola"
1087,2101,135.912187,TRUE,1087,"Annona_coriacea"
1088,2101,135.912187,TRUE,1088,"Annona_crassiflora"
1089,2102,135.912187,TRUE,1089,"Asimina_obovata"
1090,2102,135.912187,TRUE,1090,"Asimina_pygmaea"
1091,2098,135.912186,TRUE,1091,"Xylopia_championii"
1092,2104,135.912186,TRUE,1092,"Magnolia_stellata"
1093,2104,135.912186,TRUE,1093,"Magnolia_officinalis_var._biloba"
1094,2104,135.912186,TRUE,1094,"Magnolia_obovata"
1095,2104,135.912186,TRUE,1095,"Magnolia_kwangsiensis"
1096,2104,135.912186,TRUE,1096,"Magnolia_coriacea"
1097,2105,135.912187,TRUE,1097,"Magnolia_hookeri"
1098,2105,135.912187,TRUE,1098,"Magnolia_grandis"
1099,2096,135.912186,TRUE,1099,"Myristica_dactyloides"
1100,2108,135.912187,TRUE,1100,"Neolitsea_aurata"
1101,2108,135.912187,TRUE,1101,"Lindera_benzoin"
1102,2109,135.912186,TRUE,1102,"Machilus_kobu"
1103,2109,135.912186,TRUE,1103,"Machilus_boninensis"
1104,2106,135.912187,TRUE,1104,"Calycanthus_chinensis"
1105,2110,135.912187,TRUE,1105,"Macropiper_excelsum"
1106,2111,135.912187,TRUE,1106,"Aristolochia_paucinervis"
1107,2111,135.912187,TRUE,1107,"Aristolochia_baetica"
1108,,0,FALSE,,""
1109,1108,0.154122,FALSE,,""
1110,1109,4.231487,FALSE,,""
1111,1110,5.587656,FALSE,,""
1112,1111,12.17795,FALSE,,""
1113,1112,13.331159,FALSE,,""
1114,1113,14.527522,FALSE,,""
1115,1114,16.037953,FALSE,,""
1116,1115,21.345887,FALSE,,""
1117,1116,23.571458,FALSE,,""
1118,1117,29.170776,FALSE,,""
1119,1118,33.219346,FALSE,,""
1120,1119,42.181975,FALSE,,""
1121,1120,43.18055,FALSE,,""
1122,1121,52.709421,FALSE,,""
1123,1122,59.432594,FALSE,,""
1124,1123,78.863176,FALSE,,""
1125,1124,86.574267,FALSE,,""
1126,1125,90.652552,FALSE,,""
1127,1126,97.617916,FALSE,,""
1128,1127,101.631963,FALSE,,""
1129,1128,105.238048,FALSE,,""
1130,1129,112.922727,FALSE,,""
1131,1130,113.81248,FALSE,,""
1132,1131,115.009263,FALSE,,""
1133,1132,118.21684,FALSE,,""
1134,1133,122.301102,FALSE,,""
1135,1134,125.709289,FALSE,,""
1136,1135,126.828247,FALSE,,""
1137,1136,129.412786,FALSE,,""
1138,1133,125.810885,FALSE,,""
1139,1138,126.964972,FALSE,,""
1140,1138,135.050345,FALSE,,""
1141,1132,129.153936,FALSE,,""
1142,1130,114.463408,FALSE,,""
1143,1142,116.969085,FALSE,,""
1144,1143,131.619449,FALSE,,""
1145,1144,132.312967,FALSE,,""
1146,1145,132.980263,FALSE,,""
1147,1146,135.75613,FALSE,,""
1148,1129,110.132809,FALSE,,""
1149,1148,123.370925,FALSE,,""
1150,1149,125.316561,FALSE,,""
1151,1150,125.329838,FALSE,,""
1152,1151,126.66566,FALSE,,""
1153,1152,134.073922,FALSE,,""
1154,1128,123.782093,FALSE,,""
1155,1154,130.561944,FALSE,,""
1156,1154,126.487088,FALSE,,""
1157,1156,133.972907,FALSE,,""
1158,1127,118.815381,FALSE,,""
1159,1158,120.529443,FALSE,,""
1160,1158,122.964379,FALSE,,""
1161,1123,135.901464,FALSE,,""
1162,1161,135.90573,FALSE,,""
1163,1162,135.908743,FALSE,,""
1164,1122,90.322117,FALSE,,""
1165,1164,99.928998,FALSE,,""
1166,1165,110.050877,FALSE,,""
1167,1166,123.631472,FALSE,,""
1168,1166,116.931086,FALSE,,""
1169,1168,119.871325,FALSE,,""
1170,1164,123.114294,FALSE,,""
1171,1170,123.371228,FALSE,,""
1172,1171,123.844457,FALSE,,""
1173,1172,133.11647,FALSE,,""
1174,1120,49.07807,FALSE,,""
1175,1174,50.271532,FALSE,,""
1176,1175,72.542988,FALSE,,""
1177,1176,75.724021,FALSE,,""
1178,1177,92.444354,FALSE,,""
1179,1178,113.379843,FALSE,,""
1180,1179,119.409867,FALSE,,""
1181,1180,119.616009,FALSE,,""
1182,1179,115.538847,FALSE,,""
1183,1177,110.766533,FALSE,,""
1184,1175,64.974222,FALSE,,""
1185,1184,91.13842,FALSE,,""
1186,1119,92.723014,FALSE,,""
1187,1186,93.176663,FALSE,,""
1188,1187,94.627366,FALSE,,""
1189,1118,33.524613,FALSE,,""
1190,1189,46.161119,FALSE,,""
1191,1190,47.66441,FALSE,,""
1192,1191,64.891578,FALSE,,""
1193,1192,77.813357,FALSE,,""
1194,1193,82.979425,FALSE,,""
1195,1194,87.038776,FALSE,,""
1196,1195,87.89194,FALSE,,""
1197,1196,88.640749,FALSE,,""
1198,1197,95.623251,FALSE,,""
1199,1198,101.631769,FALSE,,""
1200,1199,110.554435,FALSE,,""
1201,1200,116.311842,FALSE,,""
1202,1201,119.405652,FALSE,,""
1203,1202,120.079319,FALSE,,""
1204,1203,126.350044,FALSE,,""
1205,1204,132.41896,FALSE,,""
1206,1204,127.120907,FALSE,,""
1207,1202,121.9343,FALSE,,""
1208,1200,122.66876,FALSE,,""
1209,1208,131.238615,FALSE,,""
1210,1209,133.15187,FALSE,,""
1211,1199,105.302624,FALSE,,""
1212,1211,105.629974,FALSE,,""
1213,1212,107.336473,FALSE,,""
1214,1213,114.868838,FALSE,,""
1215,1214,117.522921,FALSE,,""
1216,1215,126.203965,FALSE,,""
1217,1212,129.29968,FALSE,,""
1218,1198,99.424174,FALSE,,""
1219,1218,105.883879,FALSE,,""
1220,1219,113.009432,FALSE,,""
1221,1220,120.96461,FALSE,,""
1222,1221,123.404249,FALSE,,""
1223,1222,124.736337,FALSE,,""
1224,1222,128.554014,FALSE,,""
1225,1224,131.137987,FALSE,,""
1226,1220,122.798525,FALSE,,""
1227,1226,127.756802,FALSE,,""
1228,1226,128.803915,FALSE,,""
1229,1219,115.094748,FALSE,,""
1230,1229,116.712111,FALSE,,""
1231,1218,124.702928,FALSE,,""
1232,1197,88.748173,FALSE,,""
1233,1232,88.877519,FALSE,,""
1234,1233,92.491337,FALSE,,""
1235,1234,101.174327,FALSE,,""
1236,1235,103.492201,FALSE,,""
1237,1236,103.562089,FALSE,,""
1238,1237,126.491979,FALSE,,""
1239,1238,126.788913,FALSE,,""
1240,1239,133.108199,FALSE,,""
1241,1236,115.252714,FALSE,,""
1242,1241,117.287911,FALSE,,""
1243,1242,119.144114,FALSE,,""
1244,1234,103.025449,FALSE,,""
1245,1233,93.24835,FALSE,,""
1246,1245,95.622786,FALSE,,""
1247,1246,116.858884,FALSE,,""
1248,1247,120.836613,FALSE,,""
1249,1248,127.252758,FALSE,,""
1250,1249,132.996716,FALSE,,""
1251,1250,133.974987,FALSE,,""
1252,1251,134.261628,FALSE,,""
1253,1249,127.257495,FALSE,,""
1254,1253,132.80314,FALSE,,""
1255,1253,129.441211,FALSE,,""
1256,1247,122.2113,FALSE,,""
1257,1256,127.092346,FALSE,,""
1258,1246,126.386281,FALSE,,""
1259,1194,84.75192,FALSE,,""
1260,1259,90.753071,FALSE,,""
1261,1260,105.256754,FALSE,,""
1262,1260,111.925665,FALSE,,""
1263,1262,129.38394,FALSE,,""
1264,1262,123.900467,FALSE,,""
1265,1264,128.697241,FALSE,,""
1266,1193,94.784294,FALSE,,""
1267,1266,97.287969,FALSE,,""
1268,1267,114.653888,FALSE,,""
1269,1268,120.390798,FALSE,,""
1270,1269,125.272339,FALSE,,""
1271,1267,114.461246,FALSE,,""
1272,1271,115.797945,FALSE,,""
1273,1272,123.033085,FALSE,,""
1274,1273,123.146362,FALSE,,""
1275,1274,133.287008,FALSE,,""
1276,1274,130.895039,FALSE,,""
1277,1273,126.212719,FALSE,,""
1278,1277,133.49322,FALSE,,""
1279,1278,133.498138,FALSE,,""
1280,1279,134.477578,FALSE,,""
1281,1280,134.48382,FALSE,,""
1282,1281,135.900316,FALSE,,""
1283,1279,135.357857,FALSE,,""
1284,1271,130.678055,FALSE,,""
1285,1192,105.922448,FALSE,,""
1286,1285,115.800606,FALSE,,""
1287,1191,74.7284,FALSE,,""
1288,1287,109.917802,FALSE,,""
1289,1288,120.320674,FALSE,,""
1290,1289,129.815794,FALSE,,""
1291,1287,88.151785,FALSE,,""
1292,1291,120.65965,FALSE,,""
1293,1291,115.246108,FALSE,,""
1294,1190,49.99905,FALSE,,""
1295,1294,68.184324,FALSE,,""
1296,1295,86.162678,FALSE,,""
1297,1296,89.340159,FALSE,,""
1298,1297,111.097451,FALSE,,""
1299,1298,113.774335,FALSE,,""
1300,1299,123.28834,FALSE,,""
1301,1300,123.391102,FALSE,,""
1302,1300,126.226151,FALSE,,""
1303,1302,129.545652,FALSE,,""
1304,1302,132.630854,FALSE,,""
1305,1298,118.593466,FALSE,,""
1306,1305,120.854947,FALSE,,""
1307,1306,127.428071,FALSE,,""
1308,1307,129.504391,FALSE,,""
1309,1306,122.87852,FALSE,,""
1310,1309,124.854945,FALSE,,""
1311,1310,125.906373,FALSE,,""
1312,1310,131.963931,FALSE,,""
1313,1296,107.887064,FALSE,,""
1314,1313,112.275037,FALSE,,""
1315,1314,112.776178,FALSE,,""
1316,1315,120.721221,FALSE,,""
1317,1316,129.28645,FALSE,,""
1318,1317,130.140528,FALSE,,""
1319,1316,126.444877,FALSE,,""
1320,1313,108.046449,FALSE,,""
1321,1320,119.462324,FALSE,,""
1322,1320,130.489858,FALSE,,""
1323,1295,75.864682,FALSE,,""
1324,1323,83.83907,FALSE,,""
1325,1324,105.017682,FALSE,,""
1326,1325,114.017728,FALSE,,""
1327,1326,123.70489,FALSE,,""
1328,1327,133.425841,FALSE,,""
1329,1328,134.820169,FALSE,,""
1330,1327,125.557676,FALSE,,""
1331,1330,125.993845,FALSE,,""
1332,1331,132.209512,FALSE,,""
1333,1326,119.660315,FALSE,,""
1334,1333,121.147918,FALSE,,""
1335,1324,107.953192,FALSE,,""
1336,1335,111.760283,FALSE,,""
1337,1336,116.663607,FALSE,,""
1338,1337,122.958188,FALSE,,""
1339,1338,126.104938,FALSE,,""
1340,1337,125.420331,FALSE,,""
1341,1336,123.847274,FALSE,,""
1342,1341,130.418832,FALSE,,""
1343,1342,132.379916,FALSE,,""
1344,1343,133.636125,FALSE,,""
1345,1323,86.586373,FALSE,,""
1346,1294,69.262362,FALSE,,""
1347,1346,96.252137,FALSE,,""
1348,1347,99.006194,FALSE,,""
1349,1348,105.999477,FALSE,,""
1350,1349,115.727094,FALSE,,""
1351,1350,117.51573,FALSE,,""
1352,1351,123.39805,FALSE,,""
1353,1352,128.86347,FALSE,,""
1354,1353,129.469743,FALSE,,""
1355,1352,124.280928,FALSE,,""
1356,1351,127.550166,FALSE,,""
1357,1350,119.480923,FALSE,,""
1358,1357,126.943153,FALSE,,""
1359,1358,134.578346,FALSE,,""
1360,1359,135.099933,FALSE,,""
1361,1346,118.920145,FALSE,,""
1362,1361,119.660531,FALSE,,""
1363,1362,126.068354,FALSE,,""
1364,1362,121.332652,FALSE,,""
1365,1364,121.334498,FALSE,,""
1366,1365,121.986098,FALSE,,""
1367,1364,132.05014,FALSE,,""
1368,1117,32.334991,FALSE,,""
1369,1368,36.20615,FALSE,,""
1370,1369,41.028894,FALSE,,""
1371,1370,42.678739,FALSE,,""
1372,1371,45.549549,FALSE,,""
1373,1372,109.063204,FALSE,,""
1374,1373,113.822959,FALSE,,""
1375,1374,114.065793,FALSE,,""
1376,1375,129.955874,FALSE,,""
1377,1376,130.667449,FALSE,,""
1378,1377,131.129751,FALSE,,""
1379,1378,132.917963,FALSE,,""
1380,1379,134.320422,FALSE,,""
1381,1380,134.948624,FALSE,,""
1382,1381,135.7082,FALSE,,""
1383,1381,135.660079,FALSE,,""
1384,1380,135.904905,FALSE,,""
1385,1378,132.432641,FALSE,,""
1386,1377,131.862853,FALSE,,""
1387,1376,130.653514,FALSE,,""
1388,1387,132.193873,FALSE,,""
1389,1373,112.334068,FALSE,,""
1390,1389,120.814451,FALSE,,""
1391,1390,126.240505,FALSE,,""
1392,1391,127.133882,FALSE,,""
1393,1392,127.267018,FALSE,,""
1394,1393,128.634589,FALSE,,""
1395,1394,132.163922,FALSE,,""
1396,1395,133.504626,FALSE,,""
1397,1395,134.243223,FALSE,,""
1398,1389,124.75997,FALSE,,""
1399,1398,126.763537,FALSE,,""
1400,1372,47.823462,FALSE,,""
1401,1400,93.505213,FALSE,,""
1402,1400,94.661627,FALSE,,""
1403,1371,54.726953,FALSE,,""
1404,1403,94.922792,FALSE,,""
1405,1370,41.250337,FALSE,,""
1406,1405,41.553996,FALSE,,""
1407,1406,48.957589,FALSE,,""
1408,1407,95.306057,FALSE,,""
1409,1408,109.047103,FALSE,,""
1410,1409,110.266698,FALSE,,""
1411,1410,119.830345,FALSE,,""
1412,1411,125.270198,FALSE,,""
1413,1412,133.035132,FALSE,,""
1414,1408,101.725619,FALSE,,""
1415,1414,113.825676,FALSE,,""
1416,1414,122.375314,FALSE,,""
1417,1416,126.03298,FALSE,,""
1418,1416,130.335493,FALSE,,""
1419,1407,63.40287,FALSE,,""
1420,1406,74.000388,FALSE,,""
1421,1420,131.206058,FALSE,,""
1422,1405,99.659024,FALSE,,""
1423,1422,106.107909,FALSE,,""
1424,1423,116.733864,FALSE,,""
1425,1424,127.797004,FALSE,,""
1426,1425,135.901378,FALSE,,""
1427,1423,131.822104,FALSE,,""
1428,1427,132.302585,FALSE,,""
1429,1369,130.276524,FALSE,,""
1430,1368,104.565665,FALSE,,""
1431,1430,107.508103,FALSE,,""
1432,1115,28.860879,FALSE,,""
1433,1432,48.061583,FALSE,,""
1434,1433,52.956748,FALSE,,""
1435,1434,93.107666,FALSE,,""
1436,1435,114.343002,FALSE,,""
1437,1436,121.63426,FALSE,,""
1438,1437,124.082925,FALSE,,""
1439,1438,129.231884,FALSE,,""
1440,1439,133.468154,FALSE,,""
1441,1440,134.511616,FALSE,,""
1442,1440,134.704337,FALSE,,""
1443,1438,130.349025,FALSE,,""
1444,1443,134.22412,FALSE,,""
1445,1443,131.64516,FALSE,,""
1446,1445,133.018484,FALSE,,""
1447,1446,133.90889,FALSE,,""
1448,1437,130.216775,FALSE,,""
1449,1435,134.494016,FALSE,,""
1450,1433,65.799555,FALSE,,""
1451,1450,85.092355,FALSE,,""
1452,1451,93.144362,FALSE,,""
1453,1452,120.013012,FALSE,,""
1454,1453,124.740003,FALSE,,""
1455,1454,128.184845,FALSE,,""
1456,1454,130.930139,FALSE,,""
1457,1456,135.261848,FALSE,,""
1458,1457,135.53038,FALSE,,""
1459,1451,119.567033,FALSE,,""
1460,1459,127.225171,FALSE,,""
1461,1450,108.920619,FALSE,,""
1462,1461,133.017977,FALSE,,""
1463,1432,42.656638,FALSE,,""
1464,1463,68.010051,FALSE,,""
1465,1464,102.608164,FALSE,,""
1466,1465,133.392995,FALSE,,""
1467,1464,94.245025,FALSE,,""
1468,1467,106.318407,FALSE,,""
1469,1468,121.607224,FALSE,,""
1470,1463,130.453751,FALSE,,""
1471,1114,54.439451,FALSE,,""
1472,1471,88.488144,FALSE,,""
1473,1472,94.571988,FALSE,,""
1474,1473,115.476302,FALSE,,""
1475,1474,129.993534,FALSE,,""
1476,1473,95.962002,FALSE,,""
1477,1476,99.275154,FALSE,,""
1478,1477,121.699882,FALSE,,""
1479,1476,130.669821,FALSE,,""
1480,1112,13.507095,FALSE,,""
1481,1480,17.333583,FALSE,,""
1482,1481,19.101293,FALSE,,""
1483,1482,20.126622,FALSE,,""
1484,1483,23.210991,FALSE,,""
1485,1484,39.837274,FALSE,,""
1486,1485,51.148849,FALSE,,""
1487,1486,51.885742,FALSE,,""
1488,1487,57.949,FALSE,,""
1489,1488,69.78993,FALSE,,""
1490,1489,71.696261,FALSE,,""
1491,1490,78.280695,FALSE,,""
1492,1491,86.485666,FALSE,,""
1493,1492,103.652328,FALSE,,""
1494,1493,117.352945,FALSE,,""
1495,1494,129.982577,FALSE,,""
1496,1495,133.033693,FALSE,,""
1497,1494,124.551878,FALSE,,""
1498,1493,107.257903,FALSE,,""
1499,1498,123.041664,FALSE,,""
1500,1499,125.70357,FALSE,,""
1501,1499,129.978682,FALSE,,""
1502,1498,119.956004,FALSE,,""
1503,1492,112.660667,FALSE,,""
1504,1503,118.122417,FALSE,,""
1505,1491,91.858558,FALSE,,""
1506,1505,104.262935,FALSE,,""
1507,1506,105.465108,FALSE,,""
1508,1505,100.707994,FALSE,,""
1509,1508,118.280721,FALSE,,""
1510,1490,73.534749,FALSE,,""
1511,1510,76.704977,FALSE,,""
1512,1511,92.009229,FALSE,,""
1513,1512,95.925989,FALSE,,""
1514,1513,112.599369,FALSE,,""
1515,1514,130.05526,FALSE,,""
1516,1513,116.886975,FALSE,,""
1517,1512,112.619089,FALSE,,""
1518,1511,77.045677,FALSE,,""
1519,1518,93.365196,FALSE,,""
1520,1488,77.809271,FALSE,,""
1521,1520,85.212339,FALSE,,""
1522,1521,88.084729,FALSE,,""
1523,1522,90.164488,FALSE,,""
1524,1523,107.286663,FALSE,,""
1525,1524,108.328086,FALSE,,""
1526,1525,110.375468,FALSE,,""
1527,1526,130.401689,FALSE,,""
1528,1527,134.305923,FALSE,,""
1529,1525,127.623328,FALSE,,""
1530,1522,108.247712,FALSE,,""
1531,1530,112.869074,FALSE,,""
1532,1521,95.388565,FALSE,,""
1533,1532,105.043182,FALSE,,""
1534,1533,109.889814,FALSE,,""
1535,1534,120.327455,FALSE,,""
1536,1532,107.141465,FALSE,,""
1537,1487,111.67725,FALSE,,""
1538,1486,95.710479,FALSE,,""
1539,1484,24.764179,FALSE,,""
1540,1539,36.950391,FALSE,,""
1541,1540,41.351007,FALSE,,""
1542,1541,42.642912,FALSE,,""
1543,1542,50.43363,FALSE,,""
1544,1543,50.909399,FALSE,,""
1545,1544,57.230428,FALSE,,""
1546,1545,64.784462,FALSE,,""
1547,1546,67.247759,FALSE,,""
1548,1547,77.391716,FALSE,,""
1549,1548,82.311416,FALSE,,""
1550,1547,124.06687,FALSE,,""
1551,1541,85.178919,FALSE,,""
1552,1551,123.43016,FALSE,,""
1553,1552,124.892818,FALSE,,""
1554,1553,125.166393,FALSE,,""
1555,1554,126.297388,FALSE,,""
1556,1555,127.529255,FALSE,,""
1557,1554,126.017058,FALSE,,""
1558,1557,127.312773,FALSE,,""
1559,1557,127.532438,FALSE,,""
1560,1551,109.381883,FALSE,,""
1561,1560,117.833692,FALSE,,""
1562,1540,50.418771,FALSE,,""
1563,1562,60.303535,FALSE,,""
1564,1563,84.513695,FALSE,,""
1565,1564,100.942219,FALSE,,""
1566,1565,122.601608,FALSE,,""
1567,1565,102.747021,FALSE,,""
1568,1563,125.394633,FALSE,,""
1569,1539,26.843702,FALSE,,""
1570,1569,73.985295,FALSE,,""
1571,1570,79.379911,FALSE,,""
1572,1571,110.474827,FALSE,,""
1573,1572,116.490837,FALSE,,""
1574,1569,38.032624,FALSE,,""
1575,1574,45.263157,FALSE,,""
1576,1575,109.369678,FALSE,,""
1577,1576,134.893713,FALSE,,""
1578,1574,124.135488,FALSE,,""
1579,1483,23.891601,FALSE,,""
1580,1579,24.48576,FALSE,,""
1581,1580,33.304428,FALSE,,""
1582,1581,36.769948,FALSE,,""
1583,1582,36.781654,FALSE,,""
1584,1583,41.000601,FALSE,,""
1585,1584,41.046908,FALSE,,""
1586,1585,41.352381,FALSE,,""
1587,1586,45.194986,FALSE,,""
1588,1587,46.846232,FALSE,,""
1589,1588,68.0891,FALSE,,""
1590,1589,95.751476,FALSE,,""
1591,1590,121.45158,FALSE,,""
1592,1588,84.834732,FALSE,,""
1593,1592,126.839357,FALSE,,""
1594,1587,94.683045,FALSE,,""
1595,1594,133.694908,FALSE,,""
1596,1586,84.581612,FALSE,,""
1597,1596,117.193563,FALSE,,""
1598,1597,118.477798,FALSE,,""
1599,1598,123.601722,FALSE,,""
1600,1599,130.363016,FALSE,,""
1601,1599,131.747016,FALSE,,""
1602,1596,131.299454,FALSE,,""
1603,1602,131.306731,FALSE,,""
1604,1585,41.550132,FALSE,,""
1605,1604,44.785753,FALSE,,""
1606,1605,114.465689,FALSE,,""
1607,1606,122.178402,FALSE,,""
1608,1607,123.016539,FALSE,,""
1609,1608,124.590934,FALSE,,""
1610,1609,132.383985,FALSE,,""
1611,1605,128.569755,FALSE,,""
1612,1611,134.402471,FALSE,,""
1613,1612,135.787203,FALSE,,""
1614,1604,83.609256,FALSE,,""
1615,1614,88.686134,FALSE,,""
1616,1615,128.94755,FALSE,,""
1617,1614,102.993901,FALSE,,""
1618,1584,43.566531,FALSE,,""
1619,1618,114.94411,FALSE,,""
1620,1618,118.605077,FALSE,,""
1621,1581,41.70555,FALSE,,""
1622,1621,74.01568,FALSE,,""
1623,1622,84.041333,FALSE,,""
1624,1623,131.042584,FALSE,,""
1625,1623,107.20683,FALSE,,""
1626,1625,124.442425,FALSE,,""
1627,1625,126.654668,FALSE,,""
1628,1622,134.310666,FALSE,,""
1629,1621,43.062953,FALSE,,""
1630,1629,43.682172,FALSE,,""
1631,1630,122.441518,FALSE,,""
1632,1580,44.565792,FALSE,,""
1633,1632,96.855089,FALSE,,""
1634,1632,78.520695,FALSE,,""
1635,1634,113.077528,FALSE,,""
1636,1579,67.372633,FALSE,,""
1637,1636,124.240937,FALSE,,""
1638,1482,75.900542,FALSE,,""
1639,1638,85.882621,FALSE,,""
1640,1481,18.918991,FALSE,,""
1641,1640,23.095026,FALSE,,""
1642,1641,31.654128,FALSE,,""
1643,1642,42.95905,FALSE,,""
1644,1643,56.92299,FALSE,,""
1645,1644,62.604168,FALSE,,""
1646,1645,91.688743,FALSE,,""
1647,1646,108.463022,FALSE,,""
1648,1647,108.609915,FALSE,,""
1649,1648,109.166402,FALSE,,""
1650,1649,110.925525,FALSE,,""
1651,1648,110.857567,FALSE,,""
1652,1651,135.892769,FALSE,,""
1653,1647,112.472958,FALSE,,""
1654,1653,112.896547,FALSE,,""
1655,1654,116.46386,FALSE,,""
1656,1655,121.338387,FALSE,,""
1657,1656,134.263616,FALSE,,""
1658,1646,97.633911,FALSE,,""
1659,1658,122.455292,FALSE,,""
1660,1643,65.794101,FALSE,,""
1661,1660,69.119144,FALSE,,""
1662,1661,97.551053,FALSE,,""
1663,1662,116.731619,FALSE,,""
1664,1662,102.6016,FALSE,,""
1665,1664,110.368466,FALSE,,""
1666,1665,113.213599,FALSE,,""
1667,1666,116.359108,FALSE,,""
1668,1667,122.958185,FALSE,,""
1669,1665,117.748648,FALSE,,""
1670,1664,131.568953,FALSE,,""
1671,1661,78.165985,FALSE,,""
1672,1671,100.288397,FALSE,,""
1673,1672,124.277467,FALSE,,""
1674,1673,130.58795,FALSE,,""
1675,1674,134.105243,FALSE,,""
1676,1675,134.815705,FALSE,,""
1677,1676,134.932952,FALSE,,""
1678,1672,105.120793,FALSE,,""
1679,1678,120.516489,FALSE,,""
1680,1678,130.308918,FALSE,,""
1681,1680,134.497323,FALSE,,""
1682,1681,134.505925,FALSE,,""
1683,1678,124.515476,FALSE,,""
1684,1671,115.677973,FALSE,,""
1685,1660,112.551321,FALSE,,""
1686,1685,117.347145,FALSE,,""
1687,1686,119.425537,FALSE,,""
1688,1686,124.628785,FALSE,,""
1689,1688,126.205286,FALSE,,""
1690,1642,52.561965,FALSE,,""
1691,1690,55.993846,FALSE,,""
1692,1691,56.763785,FALSE,,""
1693,1692,66.632461,FALSE,,""
1694,1693,81.533471,FALSE,,""
1695,1694,84.908451,FALSE,,""
1696,1695,86.902435,FALSE,,""
1697,1696,89.257184,FALSE,,""
1698,1697,119.875371,FALSE,,""
1699,1696,89.717505,FALSE,,""
1700,1699,119.312288,FALSE,,""
1701,1694,86.248255,FALSE,,""
1702,1701,110.679423,FALSE,,""
1703,1693,89.169683,FALSE,,""
1704,1703,99.600404,FALSE,,""
1705,1692,78.330917,FALSE,,""
1706,1705,83.191183,FALSE,,""
1707,1691,92.07755,FALSE,,""
1708,1690,122.706541,FALSE,,""
1709,1708,133.395988,FALSE,,""
1710,1641,104.625463,FALSE,,""
1711,1710,134.348121,FALSE,,""
1712,1640,26.222471,FALSE,,""
1713,1712,39.272863,FALSE,,""
1714,1713,42.592669,FALSE,,""
1715,1714,43.647788,FALSE,,""
1716,1715,91.671235,FALSE,,""
1717,1716,106.657215,FALSE,,""
1718,1717,113.770061,FALSE,,""
1719,1718,123.038054,FALSE,,""
1720,1719,126.331643,FALSE,,""
1721,1720,127.18216,FALSE,,""
1722,1721,132.467842,FALSE,,""
1723,1721,130.65224,FALSE,,""
1724,1720,127.7288,FALSE,,""
1725,1724,127.739737,FALSE,,""
1726,1725,128.720439,FALSE,,""
1727,1726,129.842426,FALSE,,""
1728,1726,129.946353,FALSE,,""
1729,1717,108.815641,FALSE,,""
1730,1729,110.849493,FALSE,,""
1731,1730,111.434988,FALSE,,""
1732,1731,117.597572,FALSE,,""
1733,1732,120.248929,FALSE,,""
1734,1733,123.073426,FALSE,,""
1735,1734,125.187241,FALSE,,""
1736,1735,133.241766,FALSE,,""
1737,1736,133.397573,FALSE,,""
1738,1737,135.173185,FALSE,,""
1739,1737,135.347145,FALSE,,""
1740,1736,134.041355,FALSE,,""
1741,1733,134.261266,FALSE,,""
1742,1741,135.275599,FALSE,,""
1743,1732,132.983371,FALSE,,""
1744,1731,116.057839,FALSE,,""
1745,1744,117.295734,FALSE,,""
1746,1730,111.432053,FALSE,,""
1747,1746,124.462046,FALSE,,""
1748,1747,130.475719,FALSE,,""
1749,1748,132.317919,FALSE,,""
1750,1749,134.254863,FALSE,,""
1751,1748,133.193953,FALSE,,""
1752,1747,134.265728,FALSE,,""
1753,1729,130.41654,FALSE,,""
1754,1715,50.273434,FALSE,,""
1755,1754,100.036657,FALSE,,""
1756,1755,108.184299,FALSE,,""
1757,1756,112.159747,FALSE,,""
1758,1757,113.037459,FALSE,,""
1759,1756,115.272753,FALSE,,""
1760,1755,100.659323,FALSE,,""
1761,1714,63.27631,FALSE,,""
1762,1761,75.347484,FALSE,,""
1763,1762,93.841031,FALSE,,""
1764,1763,113.747599,FALSE,,""
1765,1764,117.828686,FALSE,,""
1766,1764,130.495449,FALSE,,""
1767,1761,88.105263,FALSE,,""
1768,1767,112.008724,FALSE,,""
1769,1767,97.304311,FALSE,,""
1770,1713,85.408038,FALSE,,""
1771,1770,88.963433,FALSE,,""
1772,1771,107.624009,FALSE,,""
1773,1712,105.164542,FALSE,,""
1774,1773,128.731351,FALSE,,""
1775,1480,28.012695,FALSE,,""
1776,1775,31.229141,FALSE,,""
1777,1776,88.3109,FALSE,,""
1778,1777,102.144908,FALSE,,""
1779,1775,31.073782,FALSE,,""
1780,1779,48.518912,FALSE,,""
1781,1780,86.720752,FALSE,,""
1782,1779,123.682148,FALSE,,""
1783,1111,89.857914,FALSE,,""
1784,1783,93.462881,FALSE,,""
1785,1784,104.725874,FALSE,,""
1786,1785,107.622249,FALSE,,""
1787,1786,127.841716,FALSE,,""
1788,1787,130.390715,FALSE,,""
1789,1788,132.902657,FALSE,,""
1790,1785,108.465107,FALSE,,""
1791,1790,125.313272,FALSE,,""
1792,1790,124.495272,FALSE,,""
1793,1792,133.030747,FALSE,,""
1794,1784,104.152853,FALSE,,""
1795,1794,128.74752,FALSE,,""
1796,1795,129.272229,FALSE,,""
1797,1796,131.044588,FALSE,,""
1798,1797,133.761231,FALSE,,""
1799,1798,134.616481,FALSE,,""
1800,1796,129.913116,FALSE,,""
1801,1795,130.910761,FALSE,,""
1802,1801,133.722712,FALSE,,""
1803,1783,123.796481,FALSE,,""
1804,1110,22.974103,FALSE,,""
1805,1804,55.62913,FALSE,,""
1806,1805,92.367536,FALSE,,""
1807,1806,93.361469,FALSE,,""
1808,1807,94.12614,FALSE,,""
1809,1808,94.620572,FALSE,,""
1810,1809,95.367735,FALSE,,""
1811,1810,97.093331,FALSE,,""
1812,1811,128.923173,FALSE,,""
1813,1811,116.679766,FALSE,,""
1814,1813,130.09691,FALSE,,""
1815,1813,122.797876,FALSE,,""
1816,1815,123.115538,FALSE,,""
1817,1816,123.877883,FALSE,,""
1818,1817,125.848876,FALSE,,""
1819,1809,108.34423,FALSE,,""
1820,1819,119.536869,FALSE,,""
1821,1808,112.727707,FALSE,,""
1822,1821,113.870487,FALSE,,""
1823,1822,131.17412,FALSE,,""
1824,1821,129.121967,FALSE,,""
1825,1807,116.853941,FALSE,,""
1826,1825,127.526357,FALSE,,""
1827,1805,94.080798,FALSE,,""
1828,1827,94.082815,FALSE,,""
1829,1828,96.914675,FALSE,,""
1830,1829,134.367747,FALSE,,""
1831,1830,134.776141,FALSE,,""
1832,1831,135.51817,FALSE,,""
1833,1827,131.428614,FALSE,,""
1834,1804,48.714158,FALSE,,""
1835,1834,90.206969,FALSE,,""
1836,1834,113.15394,FALSE,,""
1837,1109,5.113428,FALSE,,""
1838,1837,16.140376,FALSE,,""
1839,1838,19.03538,FALSE,,""
1840,1839,21.311624,FALSE,,""
1841,1840,26.95345,FALSE,,""
1842,1841,69.429402,FALSE,,""
1843,1842,76.165282,FALSE,,""
1844,1843,82.016349,FALSE,,""
1845,1844,91.875359,FALSE,,""
1846,1845,95.657254,FALSE,,""
1847,1846,99.140336,FALSE,,""
1848,1847,102.732903,FALSE,,""
1849,1848,103.680311,FALSE,,""
1850,1849,104.185279,FALSE,,""
1851,1850,104.735695,FALSE,,""
1852,1851,105.469739,FALSE,,""
1853,1852,109.474762,FALSE,,""
1854,1853,112.195753,FALSE,,""
1855,1854,114.374876,FALSE,,""
1856,1855,116.518831,FALSE,,""
1857,1856,118.491675,FALSE,,""
1858,1857,126.723177,FALSE,,""
1859,1856,124.616551,FALSE,,""
1860,1859,132.333524,FALSE,,""
1861,1859,127.074283,FALSE,,""
1862,1855,114.731533,FALSE,,""
1863,1862,114.733161,FALSE,,""
1864,1863,122.589485,FALSE,,""
1865,1854,128.695914,FALSE,,""
1866,1865,133.175702,FALSE,,""
1867,1853,111.724946,FALSE,,""
1868,1867,114.042846,FALSE,,""
1869,1867,130.272966,FALSE,,""
1870,1852,108.728117,FALSE,,""
1871,1870,126.809028,FALSE,,""
1872,1871,126.944443,FALSE,,""
1873,1872,127.224796,FALSE,,""
1874,1873,129.313277,FALSE,,""
1875,1873,134.686495,FALSE,,""
1876,1870,108.995349,FALSE,,""
1877,1876,110.666216,FALSE,,""
1878,1877,112.909698,FALSE,,""
1879,1877,121.056945,FALSE,,""
1880,1876,129.778098,FALSE,,""
1881,1880,129.77977,FALSE,,""
1882,1851,126.614236,FALSE,,""
1883,1882,128.059619,FALSE,,""
1884,1849,109.73853,FALSE,,""
1885,1845,110.197674,FALSE,,""
1886,1885,112.657464,FALSE,,""
1887,1886,128.232299,FALSE,,""
1888,1844,89.829643,FALSE,,""
1889,1888,109.287213,FALSE,,""
1890,1889,112.050871,FALSE,,""
1891,1890,113.978993,FALSE,,""
1892,1891,116.678057,FALSE,,""
1893,1892,117.436022,FALSE,,""
1894,1893,125.931565,FALSE,,""
1895,1894,126.422946,FALSE,,""
1896,1895,126.776655,FALSE,,""
1897,1896,127.181617,FALSE,,""
1898,1895,128.485519,FALSE,,""
1899,1894,131.425082,FALSE,,""
1900,1893,117.783932,FALSE,,""
1901,1900,120.662836,FALSE,,""
1902,1901,122.755529,FALSE,,""
1903,1902,129.333858,FALSE,,""
1904,1900,131.461289,FALSE,,""
1905,1891,116.919446,FALSE,,""
1906,1890,125.259654,FALSE,,""
1907,1906,132.036827,FALSE,,""
1908,1907,132.791074,FALSE,,""
1909,1889,113.270059,FALSE,,""
1910,1909,120.746069,FALSE,,""
1911,1910,126.988706,FALSE,,""
1912,1911,127.205465,FALSE,,""
1913,1912,127.74835,FALSE,,""
1914,1910,130.226731,FALSE,,""
1915,1914,130.394035,FALSE,,""
1916,1915,130.397143,FALSE,,""
1917,1915,135.665197,FALSE,,""
1918,1888,93.526625,FALSE,,""
1919,1918,101.204581,FALSE,,""
1920,1919,101.954769,FALSE,,""
1921,1920,103.329052,FALSE,,""
1922,1921,114.264043,FALSE,,""
1923,1922,118.392133,FALSE,,""
1924,1920,131.754604,FALSE,,""
1925,1924,133.241916,FALSE,,""
1926,1925,135.778421,FALSE,,""
1927,1926,135.87773,FALSE,,""
1928,1924,134.230709,FALSE,,""
1929,1928,135.053668,FALSE,,""
1930,1919,123.114771,FALSE,,""
1931,1918,100.35489,FALSE,,""
1932,1931,132.186905,FALSE,,""
1933,1931,106.079802,FALSE,,""
1934,1843,119.62246,FALSE,,""
1935,1934,120.140301,FALSE,,""
1936,1935,121.119021,FALSE,,""
1937,1936,122.033031,FALSE,,""
1938,1937,122.584135,FALSE,,""
1939,1938,130.295987,FALSE,,""
1940,1939,131.346827,FALSE,,""
1941,1940,132.171093,FALSE,,""
1942,1934,119.911009,FALSE,,""
1943,1841,32.969481,FALSE,,""
1944,1943,55.254541,FALSE,,""
1945,1944,68.361709,FALSE,,""
1946,1945,73.418817,FALSE,,""
1947,1946,76.726108,FALSE,,""
1948,1947,77.171498,FALSE,,""
1949,1948,77.232471,FALSE,,""
1950,1949,110.250211,FALSE,,""
1951,1950,131.934395,FALSE,,""
1952,1951,132.173455,FALSE,,""
1953,1951,134.997955,FALSE,,""
1954,1953,135.907266,FALSE,,""
1955,1949,119.261975,FALSE,,""
1956,1955,120.030846,FALSE,,""
1957,1955,123.497591,FALSE,,""
1958,1947,100.402402,FALSE,,""
1959,1958,101.352591,FALSE,,""
1960,1946,80.702172,FALSE,,""
1961,1960,106.893109,FALSE,,""
1962,1961,116.325605,FALSE,,""
1963,1962,121.127289,FALSE,,""
1964,1963,123.603401,FALSE,,""
1965,1964,125.247346,FALSE,,""
1966,1965,133.691565,FALSE,,""
1967,1966,134.602107,FALSE,,""
1968,1962,117.074197,FALSE,,""
1969,1968,122.826867,FALSE,,""
1970,1969,130.227094,FALSE,,""
1971,1968,121.25744,FALSE,,""
1972,1961,126.471432,FALSE,,""
1973,1972,130.123518,FALSE,,""
1974,1945,83.641855,FALSE,,""
1975,1974,108.185041,FALSE,,""
1976,1975,112.677295,FALSE,,""
1977,1976,116.302295,FALSE,,""
1978,1977,129.678144,FALSE,,""
1979,1978,130.65522,FALSE,,""
1980,1979,133.565599,FALSE,,""
1981,1975,131.516065,FALSE,,""
1982,1974,91.794924,FALSE,,""
1983,1944,77.311168,FALSE,,""
1984,1983,80.252777,FALSE,,""
1985,1984,97.842739,FALSE,,""
1986,1985,117.716097,FALSE,,""
1987,1986,124.655649,FALSE,,""
1988,1987,135.127142,FALSE,,""
1989,1986,117.788932,FALSE,,""
1990,1989,118.356918,FALSE,,""
1991,1990,120.524685,FALSE,,""
1992,1991,124.218638,FALSE,,""
1993,1992,127.541676,FALSE,,""
1994,1990,119.38588,FALSE,,""
1995,1985,100.17192,FALSE,,""
1996,1984,105.987865,FALSE,,""
1997,1996,114.112389,FALSE,,""
1998,1997,114.229102,FALSE,,""
1999,1998,134.451925,FALSE,,""
2000,1998,114.611032,FALSE,,""
2001,2000,119.215978,FALSE,,""
2002,1997,115.323272,FALSE,,""
2003,2002,118.919064,FALSE,,""
2004,2003,134.935945,FALSE,,""
2005,2004,134.992665,FALSE,,""
2006,2003,120.923363,FALSE,,""
2007,2006,128.417775,FALSE,,""
2008,1943,128.302113,FALSE,,""
2009,1840,27.677034,FALSE,,""
2010,2009,34.936658,FALSE,,""
2011,2010,42.09068,FALSE,,""
2012,2011,46.829859,FALSE,,""
2013,2012,88.172075,FALSE,,""
2014,2013,112.042131,FALSE,,""
2015,2013,110.246601,FALSE,,""
2016,2015,129.210474,FALSE,,""
2017,2015,110.826185,FALSE,,""
2018,2011,129.213653,FALSE,,""
2019,2018,131.961849,FALSE,,""
2020,2019,132.378259,FALSE,,""
2021,2019,132.226473,FALSE,,""
2022,2010,109.830746,FALSE,,""
2023,2022,114.131885,FALSE,,""
2024,2023,126.456172,FALSE,,""
2025,2024,126.462679,FALSE,,""
2026,2025,130.131192,FALSE,,""
2027,2026,135.899813,FALSE,,""
2028,2024,128.506229,FALSE,,""
2029,2028,131.052116,FALSE,,""
2030,2023,116.605455,FALSE,,""
2031,2030,129.796533,FALSE,,""
2032,2030,116.721746,FALSE,,""
2033,2022,121.598844,FALSE,,""
2034,2033,126.822423,FALSE,,""
2035,2033,126.493752,FALSE,,""
2036,2035,131.080524,FALSE,,""
2037,2036,131.640433,FALSE,,""
2038,2037,134.130271,FALSE,,""
2039,2036,134.563551,FALSE,,""
2040,2009,37.703182,FALSE,,""
2041,2040,56.108962,FALSE,,""
2042,2041,77.651618,FALSE,,""
2043,2042,81.240799,FALSE,,""
2044,2043,88.223427,FALSE,,""
2045,2044,89.780511,FALSE,,""
2046,2045,116.002272,FALSE,,""
2047,2046,120.706164,FALSE,,""
2048,2047,127.238552,FALSE,,""
2049,2048,133.559601,FALSE,,""
2050,2049,133.999421,FALSE,,""
2051,2044,97.673491,FALSE,,""
2052,2051,108.762446,FALSE,,""
2053,2052,109.728647,FALSE,,""
2054,2053,110.632225,FALSE,,""
2055,2054,125.31033,FALSE,,""
2056,2053,111.811792,FALSE,,""
2057,2056,113.528964,FALSE,,""
2058,2057,125.403327,FALSE,,""
2059,2052,113.718906,FALSE,,""
2060,2059,115.070599,FALSE,,""
2061,2060,132.495519,FALSE,,""
2062,2061,133.109079,FALSE,,""
2063,2051,131.354395,FALSE,,""
2064,2041,100.456707,FALSE,,""
2065,2064,126.403685,FALSE,,""
2066,2040,119.456972,FALSE,,""
2067,2066,119.816375,FALSE,,""
2068,2066,127.280102,FALSE,,""
2069,1839,48.004065,FALSE,,""
2070,2069,80.336001,FALSE,,""
2071,2070,100.414021,FALSE,,""
2072,2071,101.561981,FALSE,,""
2073,2072,123.141871,FALSE,,""
2074,2071,103.057812,FALSE,,""
2075,2074,126.522651,FALSE,,""
2076,2075,131.880351,FALSE,,""
2077,2075,129.548731,FALSE,,""
2078,2069,51.726935,FALSE,,""
2079,2078,76.78724,FALSE,,""
2080,2079,103.102214,FALSE,,""
2081,2080,104.194568,FALSE,,""
2082,2078,68.464476,FALSE,,""
2083,2082,125.795548,FALSE,,""
2084,2083,127.169817,FALSE,,""
2085,2084,132.263258,FALSE,,""
2086,2083,130.430229,FALSE,,""
2087,2086,132.400169,FALSE,,""
2088,1838,130.613669,FALSE,,""
2089,1837,7.050809,FALSE,,""
2090,2089,17.318023,FALSE,,""
2091,2090,46.733218,FALSE,,""
2092,2089,39.278939,FALSE,,""
2093,2092,125.254054,FALSE,,""
2094,1108,3.518306,FALSE,,""
2095,2094,8.211,FALSE,,""
2096,2095,26.323747,FALSE,,""
2097,2096,27.532085,FALSE,,""
2098,2097,89.199905,FALSE,,""
2099,2098,97.074541,FALSE,,""
2100,2099,110.536293,FALSE,,""
2101,2100,125.985926,FALSE,,""
2102,2100,133.455095,FALSE,,""
2103,2097,79.125662,FALSE,,""
2104,2103,80.385439,FALSE,,""
2105,2103,92.313258,FALSE,,""
2106,2095,21.010043,FALSE,,""
2107,2106,110.658605,FALSE,,""
2108,2107,126.217779,FALSE,,""
2109,2107,130.373572,FALSE,,""
2110,2094,30.469168,FALSE,,""
2111,2110,127.536752,FALSE,,""
`, W = Se(ga).map((e) => ({
  id: e.id,
  species: e.species,
  threat: e.threat_status,
  ei: B(e.EI) ?? NaN,
  lat: B(e.lat) ?? NaN,
  lon: B(e.lon) ?? NaN
})).filter((e) => Number.isFinite(e.ei) && Number.isFinite(e.lat) && Number.isFinite(e.lon)), q = Se(Aa).map((e) => ({
  species: e.species,
  family: e.family,
  threat: e.threat_status,
  meanEI: B(e.mean_EI),
  nExperiments: B(e.n_experiments) ?? 0
})), U = Se(Sa).map((e) => ({
  node: B(e.node) ?? 0,
  parent: B(e.parent),
  depth: B(e.depth) ?? 0,
  isTip: e.is_tip === "TRUE",
  tipIndex: B(e.tip_index),
  label: e.label
})), re = new Map(q.map((e) => [e.species, e])), ze = Math.max(...U.map((e) => e.depth));
(() => {
  const e = q.map((a) => a.meanEI).filter((a) => a !== null);
  return [Math.min(...e), Math.max(...e)];
})();
const ba = /* @__PURE__ */ new Set([
  "Annonaceae",
  "Aristolochiaceae",
  "Calycanthaceae",
  "Lauraceae",
  "Magnoliaceae",
  "Monimiaceae",
  "Myristicaceae",
  "Piperaceae",
  "Saururaceae",
  "Siparunaceae",
  "Winteraceae",
  "Hernandiaceae",
  "Atherospermataceae"
]), fa = /* @__PURE__ */ new Set([
  "Alismataceae",
  "Alliaceae",
  "Amaryllidaceae",
  "Anthericaceae",
  "Araceae",
  "Arecaceae",
  "Asparagaceae",
  "Asphodelaceae",
  "Bromeliaceae",
  "Butomaceae",
  "Colchicaceae",
  "Commelinaceae",
  "Costaceae",
  "Cyperaceae",
  "Dioscoreaceae",
  "Eriocaulaceae",
  "Haemodoraceae",
  "Heliconiaceae",
  "Hyacinthaceae",
  "Hypoxidaceae",
  "Iridaceae",
  "Juncaceae",
  "Liliaceae",
  "Marantaceae",
  "Melanthiaceae",
  "Musaceae",
  "Orchidaceae",
  "Poaceae",
  "Pontederiaceae",
  "Ruscaceae",
  "Smilacaceae",
  "Strelitziaceae",
  "Themidaceae",
  "Tofieldiaceae",
  "Typhaceae",
  "Velloziaceae",
  "Xanthorrhoeaceae",
  "Zingiberaceae",
  "Agavaceae",
  "Hemerocallidaceae"
]);
function le(e) {
  return ba.has(e) ? "magnoliids" : fa.has(e) ? "monocots" : "eudicots";
}
const ve = 1750, Me = 1975, C = { x0: 30, y0: 74, x1: 1749, y1: 813 }, be = 4.92, je = 840, Ve = 517, de = (e) => je + e * be, ce = (e) => Ve - e * be, Ra = 6.5, qe = 0.7, Y = {
  Threatened: "#EE3B3B",
  // brown2
  Not_threatened: "#008B8B",
  // cyan4
  No_data: "#6D6DB6"
  // 由图例 (153,153,204) 在 α=0.70 下反解
}, F = {
  cx: 542.3,
  cy: 1462.7,
  branchR: 456,
  // 枝端(叶点画在其外)
  wedgeR: 466,
  // 分支底色外沿 —— 非白占比在此处才跌下 100%
  tipR: 469,
  // 叶点中心;teal/coral 掩膜的 r 中位数
  ringR0: 486,
  ringR1: 513,
  /** 叶点半径。teal/coral 连通块里小块的面积中位 106 px² → 等效圆半径 5.8。 */
  tipDotR: 5.8
}, La = [-1.417, 6.194], Ee = {
  No_data: "#BEBEBE",
  // gray
  Not_threatened: "#008B8B",
  // cyan4
  Threatened: "#EE3B3B"
  // brown2
}, Fa = 0.7, J = {
  magnoliids: "#191970",
  // midnightblue
  monocots: "#20B2AA",
  // lightseagreen
  eudicots: "#8B864E"
  // khaki4
}, Ca = 0.2, Ua = "#0000FF", Pa = "#FF0000";
function ke(e, a) {
  return [e, a];
}
ke.invert = ke;
function xa() {
  return da(ke).scale(152.63);
}
const va = [-150, -125, -100, -75, -50, -25, 0, 25, 50, 75, 100, 125, 150, 175], Ma = [75, 50, 25, 0, -25, -50], Ba = (e) => e === 0 ? "0°" : `${Math.abs(e)}°${e < 0 ? "W" : "E"}`, Ga = (e) => e === 0 ? "0°" : `${Math.abs(e)}°${e < 0 ? "S" : "N"}`;
function Oa(e) {
  const a = h("g", { "data-guide": "map-ticks" });
  e.appendChild(a);
  for (const n of va)
    a.appendChild(h("text", { x: de(n), y: 43, class: "lin-tick lin-tick-mid" }, Ba(n)));
  for (const n of Ma)
    a.appendChild(h("text", {
      x: C.x1 - 12,
      y: ce(n) + 9,
      class: "lin-tick lin-tick-end"
    }, Ga(n)));
}
const $ = { x: 54, y: 584, w: 316, h: 206, r: 20 }, Da = [
  ["Threatened", "Threatened"],
  ["Not_threatened", "Not threatened"],
  ["No_data", "No data"]
];
function Ia(e) {
  const a = h("g", { "data-guide": "map-legend" });
  e.appendChild(a), a.appendChild(h("rect", {
    x: $.x,
    y: $.y,
    width: $.w,
    height: $.h,
    rx: $.r,
    ry: $.r,
    fill: "#fff",
    stroke: "#1a1a1a",
    "stroke-width": 2.5
  })), a.appendChild(h("text", { x: 89, y: 615, class: "lin-leg-title" }, "Threat status")), Da.forEach(([n, t], r) => {
    const o = 657 + r * 45;
    a.appendChild(h("circle", {
      cx: 99,
      cy: o,
      r: 14.5,
      fill: Y[n],
      "fill-opacity": qe
    })), a.appendChild(h("text", { x: 139, y: o + 10, class: "lin-leg-item" }, t));
  });
}
function wa(e) {
  const a = h("g", { "data-guide": "map-chrome" });
  e.appendChild(a);
  const n = 1674, t = 158;
  a.appendChild(h("text", { x: n, y: 108, class: "lin-north-n" }, "N")), a.appendChild(h("circle", { cx: n, cy: t, r: 30, fill: "none", stroke: "#1a1a1a", "stroke-width": 3 })), a.appendChild(h("path", {
    d: `M${n},${t - 34}L${n + 13},${t + 22}L${n},${t + 8}L${n - 13},${t + 22}Z`,
    fill: "#1a1a1a"
  }));
  const r = 1636, o = 782, _ = 54;
  for (let s = 0; s < 2; s++)
    a.appendChild(h("rect", {
      x: r + s * _,
      y: o,
      width: _,
      height: 13,
      fill: s % 2 === 0 ? "#1a1a1a" : "#fff",
      stroke: "#1a1a1a",
      "stroke-width": 1.5
    }));
  [["0", r], ["1,000", r + _], ["2,000 km", r + 2 * _]].forEach(([s, i]) => {
    a.appendChild(h("text", { x: i, y: o - 7, class: "lin-scale" }, s));
  });
}
const b = {
  x0: 1093,
  x1: 1430,
  y0: 1029,
  y1: 1374,
  groups: [1155, 1262, 1369],
  /** y 轴刻度 0/2/4/6 的墨迹中心 y —— 决定值→像素的线性映射 */
  ticks: [[0, 1294], [2, 1219], [4, 1131], [6, 1054]]
}, ue = ["magnoliids", "monocots", "eudicots"];
function K(e) {
  const a = b.ticks.length, n = b.ticks.reduce((s, i) => s + i[0], 0) / a, t = b.ticks.reduce((s, i) => s + i[1], 0) / a;
  let r = 0, o = 0;
  for (const [s, i] of b.ticks)
    r += (s - n) * (i - t), o += (s - n) ** 2;
  const _ = r / o;
  return t + _ * (e - n);
}
function Ha(e, a) {
  let n = 2166136261;
  for (let t = 0; t < e.length; t++)
    n ^= e.charCodeAt(t), n = Math.imul(n, 16777619);
  return ((n >>> 0) / 4294967295 - 0.5) * 2 * a;
}
function za(e) {
  const a = h("g", { "data-panel": "strip" });
  e.appendChild(a), a.appendChild(h("path", {
    d: `M${b.x0},${b.y0}L${b.x0},${b.y1}L${b.x1},${b.y1}`,
    fill: "none",
    stroke: "#000",
    "stroke-width": 3,
    "data-mark": "axis"
  }));
  for (const [i, l] of b.ticks)
    a.appendChild(h("text", { x: b.x0 - 10, y: l + 9, class: "lin-tick lin-tick-end" }, String(i)));
  a.appendChild(h("text", {
    x: b.x0 - 46,
    y: (b.y0 + b.y1) / 2,
    class: "lin-strip-ylab",
    transform: `rotate(-90 ${b.x0 - 46} ${(b.y0 + b.y1) / 2})`
  }, "Pollen limitation"));
  const n = new Map(ue.map((i) => [i, []])), t = h("g", { "data-mark": "observation", "fill-opacity": 0.8 });
  a.appendChild(t);
  for (const i of W) {
    const l = re.get(i.species);
    if (!l) continue;
    const c = le(l.family), y = l.meanEI;
    if (y === null) continue;
    n.get(c).push(y);
    const N = b.groups[ue.indexOf(c)] + Ha(i.id, 26);
    t.appendChild(h("circle", {
      cx: N.toFixed(1),
      cy: K(y).toFixed(1),
      r: 3.2,
      fill: J[c],
      "data-key": i.id
    }));
  }
  const r = h("g", { "data-mark": "mean-se" });
  a.appendChild(r), ue.forEach((i, l) => {
    const c = n.get(i);
    if (!c.length) return;
    const y = c.reduce((d, T) => d + T, 0) / c.length, E = Math.sqrt(c.reduce((d, T) => d + (T - y) ** 2, 0) / Math.max(1, c.length - 1)) / Math.sqrt(c.length), u = b.groups[l], g = 17;
    for (const d of [K(y - E), K(y + E)])
      r.appendChild(h("line", { x1: u - g, y1: d, x2: u + g, y2: d, class: "lin-se" }));
    r.appendChild(h("line", {
      x1: u,
      y1: K(y - E),
      x2: u,
      y2: K(y + E),
      class: "lin-se"
    })), r.appendChild(h("rect", {
      x: u - g,
      y: K(y) - 4,
      width: 2 * g,
      height: 8,
      fill: "#000",
      "data-key": i
    }));
  });
  const o = h("g", { "data-guide": "significance" });
  e.appendChild(o);
  const [_, s] = [b.groups[1], b.groups[2]];
  o.appendChild(h("path", {
    d: `M${_},1033L${_},1015L${s},1015L${s},1033`,
    fill: "none",
    stroke: "#000",
    "stroke-width": 3
  })), o.appendChild(h("text", { x: (_ + s) / 2, y: 1010, class: "lin-stars" }, "***"));
}
const ja = [
  { clade: "magnoliids", label: "Magnoliids", y: 1060 },
  { clade: "monocots", label: "Monocots", y: 1174 },
  { clade: "eudicots", label: "Eudicots", y: 1289 }
], Va = 0.45;
function qa(e) {
  const a = h("g", { "data-guide": "clade-labels" });
  e.appendChild(a);
  for (const n of ja)
    a.appendChild(h("rect", {
      x: 1469,
      y: n.y,
      width: 250,
      height: 79,
      rx: 22,
      ry: 22,
      fill: J[n.clade],
      "fill-opacity": Va,
      stroke: "none"
    })), a.appendChild(h("text", { x: 1594, y: n.y + 52, class: "lin-clade" }, n.label));
}
function $a(e) {
  const a = h("g", { "data-guide": "tree-legend" });
  e.appendChild(a), a.appendChild(h("text", { x: 1091, y: 1625, class: "lin-leg-title" }, "Threat status")), [["Threatened", "Threatened"], ["Not_threatened", "Not threatened"], ["No_data", "No data"]].forEach(([t, r], o) => {
    const _ = 1677 + o * 62;
    a.appendChild(h("circle", { cx: 1104, cy: _, r: 15, fill: Ee[t], "fill-opacity": 0.85 })), a.appendChild(h("text", { x: 1148, y: _ + 11, class: "lin-leg-item" }, r));
  }), a.appendChild(h("text", { x: 1421, y: 1625, class: "lin-leg-title" }, "Pollen limitation"));
  const n = h("linearGradient", {
    id: "lin2025-ramp",
    x1: "0",
    y1: "1",
    x2: "0",
    y2: "0"
  });
  for (let t = 0; t <= 20; t++) {
    const r = t / 20;
    n.appendChild(h("stop", { offset: `${r * 100}%`, "stop-color": Wa(r) }));
  }
  a.appendChild(n), a.appendChild(h("rect", {
    x: 1474,
    y: 1661,
    width: 43,
    height: 167,
    fill: "url(#lin2025-ramp)"
  }));
  for (const [t, r] of [[6, 1673], [4, 1727], [2, 1783], [0, 1832]])
    a.appendChild(h("text", { x: 1530, y: r, class: "lin-leg-item" }, String(t)));
}
let $e = () => "#000";
function Ka(e) {
  $e = e;
}
const Wa = (e) => $e(e), Ke = (e) => [1, 3, 5].map((a) => parseInt(e.slice(a, a + 2), 16)), ie = [0.95047, 1, 1.08883];
function We([e, a, n]) {
  const t = (l) => {
    const c = l / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  }, [r, o, _] = [t(e), t(a), t(n)], i = [
    (0.4124 * r + 0.3576 * o + 0.1805 * _) / ie[0],
    (0.2126 * r + 0.7152 * o + 0.0722 * _) / ie[1],
    (0.0193 * r + 0.1192 * o + 0.9505 * _) / ie[2]
  ].map((l) => l > 8856e-6 ? Math.cbrt(l) : 7.787 * l + 16 / 116);
  return [116 * i[1] - 16, 500 * (i[0] - i[1]), 200 * (i[1] - i[2])];
}
function Ja([e, a, n]) {
  const t = (e + 16) / 116, o = [t + a / 500, t, t - n / 200].map((y, N) => (y ** 3 > 8856e-6 ? y ** 3 : (y - 16 / 116) / 7.787) * ie[N]), [_, s, i] = o, c = [
    3.2406 * _ - 1.5372 * s - 0.4986 * i,
    -0.9689 * _ + 1.8758 * s + 0.0415 * i,
    0.0557 * _ - 0.204 * s + 1.057 * i
  ].map((y) => {
    const N = Math.max(0, Math.min(1, y));
    return Math.round(255 * (N <= 31308e-7 ? 12.92 * N : 1.055 * N ** (1 / 2.4) - 0.055));
  });
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}
const Xa = We(Ke(Ua)), Za = We(Ke(Pa));
function Je(e) {
  const a = Math.max(0, Math.min(1, e));
  return Ja(Xa.map((n, t) => n + (Za[t] - n) * a));
}
const G = (e, a) => [F.cx + e * Math.cos(a), F.cy + e * Math.sin(a)];
function Ya(e, a, n) {
  const [t, r] = G(e, a), [o, _] = G(e, n), s = Math.abs(n - a) > Math.PI ? 1 : 0, i = n > a ? 1 : 0;
  return `M${t.toFixed(2)},${r.toFixed(2)}A${e},${e} 0 ${s} ${i} ${o.toFixed(2)},${_.toFixed(2)}`;
}
function Be(e, a, n, t) {
  const [r, o] = G(a, n), [_, s] = G(a, t), [i, l] = G(e, t), [c, y] = G(e, n), N = Math.abs(t - n) > Math.PI ? 1 : 0;
  return `M${r.toFixed(2)},${o.toFixed(2)}A${a},${a} 0 ${N} 1 ${_.toFixed(2)},${s.toFixed(2)}L${i.toFixed(2)},${l.toFixed(2)}A${e},${e} 0 ${N} 0 ${c.toFixed(2)},${y.toFixed(2)}Z`;
}
function Qa(e) {
  const a = h("g", { "data-panel": "map" });
  e.appendChild(a);
  const n = xa().scale(be * 180 / Math.PI).translate([je, Ve]).precision(0.2), t = h("clipPath", { id: "lin2025-map-clip" });
  t.appendChild(h("rect", {
    x: C.x0,
    y: C.y0,
    width: C.x1 - C.x0,
    height: C.y1 - C.y0
  })), a.appendChild(t);
  const r = h("g", { "clip-path": "url(#lin2025-map-clip)" });
  a.appendChild(r);
  const o = h("g", { "data-layer": "under" });
  r.appendChild(o), sa(n);
  for (const i of la(n))
    o.appendChild(h("path", { d: i, fill: "#DBDBDA", stroke: "none", "data-mark": "land" }));
  const _ = h("g", { "data-layer": "under", "data-mark": "graticule" });
  r.appendChild(_);
  for (let i = -150; i <= 175; i += 25) {
    const l = de(i);
    _.appendChild(h("line", {
      x1: l,
      y1: C.y0,
      x2: l,
      y2: C.y1,
      class: "lin-grat"
    }));
  }
  for (let i = -50; i <= 75; i += 25) {
    const l = ce(i);
    _.appendChild(h("line", {
      x1: C.x0,
      y1: l,
      x2: C.x1,
      y2: l,
      class: "lin-grat"
    }));
  }
  const s = h("g", { "data-mark": "experiment", "fill-opacity": qe });
  r.appendChild(s);
  for (const i of W)
    s.appendChild(h("circle", {
      cx: de(i.lon).toFixed(2),
      cy: ce(i.lat).toFixed(2),
      r: Ra,
      fill: Y[i.threat] ?? Y.No_data,
      "data-key": i.id
    }));
  a.appendChild(h("rect", {
    x: C.x0,
    y: C.y0,
    width: C.x1 - C.x0,
    height: C.y1 - C.y0,
    fill: "none",
    stroke: "#000",
    "stroke-width": 2,
    "data-mark": "frame"
  }));
}
function e0() {
  const e = new Map(U.map((s) => [s.node, s])), a = /* @__PURE__ */ new Map();
  for (const s of U)
    if (s.parent !== null) {
      const i = a.get(s.parent) ?? [];
      i.push(s.node), a.set(s.parent, i);
    }
  const n = U.filter((s) => s.isTip).length, t = /* @__PURE__ */ new Map(), r = [], _ = [U.find((s) => s.parent === null).node];
  for (; _.length; ) {
    const s = _.pop();
    r.push(s);
    for (const i of a.get(s) ?? []) _.push(i);
  }
  for (let s = r.length - 1; s >= 0; s--) {
    const i = r[s], l = e.get(i), c = l.depth / ze * F.branchR;
    if (l.isTip) {
      const y = (l.tipIndex - 0.5) / n * 2 * Math.PI;
      t.set(i, { r: c, th: y, th0: y, th1: y });
    } else {
      const N = (a.get(i) ?? []).map((E) => t.get(E)).filter(Boolean).map((E) => E.th);
      t.set(i, {
        r: c,
        th: (Math.min(...N) + Math.max(...N)) / 2,
        th0: Math.min(...N),
        th1: Math.max(...N)
      });
    }
  }
  return t;
}
function a0(e) {
  const a = h("g", { "data-panel": "tree" });
  e.appendChild(a);
  const n = e0();
  new Map(U.map((u) => [u.node, u]));
  const t = U.filter((u) => u.isTip).length, r = 2 * Math.PI / t, o = h("g", { "data-layer": "under", "data-mark": "clade" });
  a.appendChild(o);
  const _ = /* @__PURE__ */ new Map();
  for (const u of U) {
    if (!u.isTip) continue;
    const g = re.get(u.label);
    if (!g) continue;
    const d = le(g.family), T = (u.tipIndex - 0.5) / t * 2 * Math.PI, k = _.get(d);
    _.set(d, k ? [Math.min(k[0], T), Math.max(k[1], T)] : [T, T]);
  }
  for (const [u, [g, d]] of _)
    o.appendChild(h("path", {
      d: Be(0, F.wedgeR, g - r / 2, d + r / 2),
      fill: J[u],
      "fill-opacity": Ca,
      stroke: "none",
      "data-key": u
    }));
  const s = h("g", { "data-mark": "branch", class: "lin-branch" });
  a.appendChild(s);
  const i = [];
  for (const u of U) {
    const g = n.get(u.node);
    if (g) {
      if (u.parent !== null) {
        const d = n.get(u.parent), [T, k] = G(d.r, g.th), [A, x] = G(g.r, g.th);
        i.push(`M${T.toFixed(2)},${k.toFixed(2)}L${A.toFixed(2)},${x.toFixed(2)}`);
      }
      !u.isTip && g.th1 > g.th0 && i.push(Ya(g.r, g.th0, g.th1));
    }
  }
  s.appendChild(h("path", { d: i.join(""), fill: "none" }));
  const l = h("g", { "data-mark": "tip", "fill-opacity": Fa });
  a.appendChild(l);
  const c = F.tipR;
  for (const u of U) {
    if (!u.isTip) continue;
    const g = re.get(u.label), d = (u.tipIndex - 0.5) / t * 2 * Math.PI, [T, k] = G(c, d);
    l.appendChild(h("circle", {
      cx: T.toFixed(2),
      cy: k.toFixed(2),
      r: F.tipDotR,
      fill: Ee[(g == null ? void 0 : g.threat) ?? "No_data"] ?? Ee.No_data,
      "data-key": u.label
    }));
  }
  const y = h("g", { "data-mark": "ring" });
  a.appendChild(y);
  const [N, E] = La;
  for (const u of U) {
    if (!u.isTip) continue;
    const g = re.get(u.label);
    if (!g || g.meanEI === null) continue;
    const d = (u.tipIndex - 0.5) / t * 2 * Math.PI;
    y.appendChild(h("path", {
      d: Be(F.ringR0, F.ringR1, d - r / 2, d + r / 2),
      fill: Je((g.meanEI - N) / (E - N)),
      stroke: "none",
      "data-key": u.label
    }));
  }
}
function n0(e) {
  for (; e.firstChild; ) e.removeChild(e.firstChild);
  e.setAttribute("viewBox", `0 0 ${ve} ${Me}`), e.classList.add("render-svg"), _a(e, ve, Me), Ka(Je), Qa(e), a0(e), za(e), Oa(e), Ia(e), wa(e), qa(e), $a(e);
  const a = h("g", { "data-guide": "panel-letter" });
  e.appendChild(a), a.appendChild(h("text", { x: 14, y: 44, class: "lin-letter" }, "(a)")), a.appendChild(h("text", { x: 14, y: 946, class: "lin-letter" }, "(b)"));
  const n = h("g", { "data-guide": "tree-center" });
  e.appendChild(n), n.appendChild(h("text", {
    x: F.cx,
    y: F.cy + 10,
    class: "lin-center"
  }, `${q.length} flowering plants`));
}
const oe = 1920, _e = 1080, t0 = Object.freeze([
  { index: 0, kind: "panel-i", label: "Panel map (a)" },
  { index: 1, kind: "lcm", label: "LCM · experiments grouped by species" },
  { index: 2, kind: "panel-j", label: "Panel tree (b)" }
]), r0 = "http://www.w3.org/2000/svg", H = { scale: 0.515, tx: 8, ty: 238 }, z = { scale: 0.84, tx: 1006, ty: -708 };
function R(e, a = {}) {
  const n = document.createElementNS(r0, e);
  for (const [t, r] of Object.entries(a)) n.setAttribute(t, String(r));
  return n;
}
function Z(e, a, n, t, r = {}) {
  const o = R("text", { x: a, y: n, ...r });
  return o.textContent = t, e.appendChild(o), o;
}
function V(e, a, n, t, r, o) {
  e.appendChild(R("rect", {
    x: n,
    y: t,
    width: r,
    height: o,
    fill: "none",
    stroke: "none",
    "pointer-events": "none",
    "data-layout-footprint": a
  }));
}
function fe(e, a, n, t) {
  e.replaceChildren(), e.setAttribute("viewBox", `0 0 ${oe} ${_e}`), e.setAttribute("width", String(oe)), e.setAttribute("height", String(_e)), e.setAttribute("role", "img"), e.setAttribute("aria-label", t), e.setAttribute("data-keyframe-index", String(a)), e.setAttribute("data-keyframe-kind", n), e.setAttribute("data-safe-area", "54,40,1866,1040"), e.appendChild(R("rect", {
    width: oe,
    height: _e,
    fill: "#fff",
    "data-scene-id": "frame-backdrop",
    "data-structural-host": "viewport"
  }));
}
let ae = null;
function Re() {
  return ae || (ae = R("svg"), n0(ae)), ae;
}
function Xe(e) {
  e.setAttribute("data-scene-id", "source-map-panel"), e.setAttribute("data-structural-host", "panel-plane"), e.setAttribute("data-geometry-ref", "renderer:lin2025-fig1-map");
  const a = e.querySelector('[data-mark="experiment"]');
  a == null || a.setAttribute("data-scene-id", "experiment-records"), a == null || a.setAttribute("data-parent-id", "source-map-panel"), a == null || a.setAttribute("data-geometry-ref", "source-data:fig1-experiments.csv"), a == null || a.querySelectorAll("[data-key]").forEach((n) => n.setAttribute("data-record-key", `experiment_id:${n.getAttribute("data-key")}`));
}
function Ze(e) {
  e.setAttribute("data-scene-id", "target-tree-panel"), e.setAttribute("data-structural-host", "panel-plane"), e.setAttribute("data-geometry-ref", "renderer:lin2025-fig1-circular-tree");
  const a = e.querySelector('[data-mark="branch"]');
  a == null || a.setAttribute("data-scene-id", "phylogeny"), a == null || a.setAttribute("data-parent-id", "target-tree-panel"), a == null || a.setAttribute("data-geometry-ref", "source-data:fig1-tree-nodes.csv");
  const n = e.querySelector('[data-mark="tip"]'), t = e.querySelector('[data-mark="ring"]');
  if (n && t && n.parentElement) {
    const r = R("g", {
      "data-scene-id": "species-aggregates",
      "data-parent-id": "target-tree-panel",
      "data-geometry-ref": "source-data:fig1-species.csv+fig1-tree-nodes.csv"
    });
    n.parentElement.insertBefore(r, n), r.appendChild(n), r.appendChild(t), r.querySelectorAll("[data-key]").forEach((o) => o.setAttribute("data-record-key", `species:${o.getAttribute("data-key")}`));
  }
}
function i0(e) {
  e.setAttribute("data-scene-id", "target-pollen-limitation-panel"), e.setAttribute("data-structural-host", "panel-plane"), e.setAttribute("data-geometry-ref", "renderer:lin2025-fig1-clade-strip");
  const a = e.querySelector('[data-mark="observation"]');
  a == null || a.setAttribute("data-scene-id", "clade-pollen-limitation"), a == null || a.setAttribute("data-parent-id", "target-pollen-limitation-panel"), a == null || a.setAttribute("data-geometry-ref", "source-data:fig1-experiments.csv+fig1-species.csv"), a == null || a.querySelectorAll("[data-key]").forEach((t) => t.setAttribute("data-record-key", `experiment_id:${t.getAttribute("data-key")}`));
  const n = e.querySelector('[data-mark="mean-se"]');
  n == null || n.setAttribute("data-scene-id", "clade-pollen-limitation-summary"), n == null || n.setAttribute("data-parent-id", "target-pollen-limitation-panel"), n == null || n.querySelectorAll("[data-key]").forEach((t) => t.setAttribute("data-record-key", `clade:${t.getAttribute("data-key")}`));
}
function Te(e, a, n) {
  for (const t of n) {
    const r = e.querySelector(t);
    r && a.appendChild(r.cloneNode(!0));
  }
}
function Ye(e, a, n) {
  const t = e.querySelectorAll('[data-guide="panel-letter"] text').item(n);
  if (!t) throw new Error(`lin2025 panel letter ${n} missing from source renderer`);
  const r = R("g", { "data-guide": "panel-letter" });
  r.appendChild(t.cloneNode(!0)), a.appendChild(r);
}
function o0(e) {
  var _;
  fe(e, 0, "panel-i", "Panel map (a): 2633 geographic experiment records");
  const a = Re(), t = R("g", {
    transform: `translate(444 247) scale(${0.5965})`,
    "data-scene-id": "source-map-plane",
    "data-structural-host": "panel-plane"
  });
  V(t, "panel-k0", 30, 74, 1719, 739), V(t, "composition-k0", -45.6, 13, 1822.5, 946.8);
  const r = (_ = a.querySelector('[data-panel="map"]')) == null ? void 0 : _.cloneNode(!0);
  if (!r) throw new Error("lin2025 map panel missing from source renderer");
  Xe(r), t.appendChild(r);
  const o = R("g", { "data-scene-id": "panel-guides", "data-parent-id": "source-map-plane" });
  Te(a, o, ['[data-guide="map-ticks"]', '[data-guide="map-legend"]', '[data-guide="map-chrome"]']), Ye(a, o, 0), t.appendChild(o), e.appendChild(t);
}
function _0(e) {
  var y, N;
  fe(e, 2, "panel-j", "Panel tree (b): 1107 species leaves, mean pollen-limitation ring, and clade scatter plot");
  const a = Re(), n = 0.585, t = 448, r = -316, o = R("g", {
    transform: `translate(${t} ${r}) scale(${n})`,
    "data-scene-id": "target-tree-plane",
    "data-structural-host": "panel-plane"
  });
  V(o, "panel-k2", 29.3, 949.7, 1026, 1026), V(o, "composition-k2", 14, 914.38, 1705, 1061.33);
  const _ = (y = a.querySelector('[data-panel="tree"]')) == null ? void 0 : y.cloneNode(!0);
  if (!_) throw new Error("lin2025 tree panel missing from source renderer");
  Ze(_), o.appendChild(_);
  const s = R("g", { "data-scene-id": "panel-guides", "data-parent-id": "target-tree-plane" });
  Te(a, s, ['[data-guide="tree-center"]', '[data-guide="clade-labels"]', '[data-guide="tree-legend"]']), Ye(a, s, 1), o.appendChild(s), e.appendChild(o);
  const i = R("g", {
    transform: `translate(${t} ${r}) scale(${n})`,
    "data-scene-id": "target-strip-plane",
    "data-structural-host": "panel-plane"
  });
  V(i, "panel-k2-strip", 1093, 1015, 337, 359);
  const l = (N = a.querySelector('[data-panel="strip"]')) == null ? void 0 : N.cloneNode(!0);
  if (!l) throw new Error("lin2025 pollen-limitation strip panel missing from source renderer");
  i0(l), i.appendChild(l);
  const c = R("g", { "data-scene-id": "strip-guides", "data-parent-id": "target-strip-plane" });
  Te(a, c, ['[data-guide="significance"]']), i.appendChild(c), e.appendChild(i);
}
function s0() {
  const e = /* @__PURE__ */ new Map();
  for (const o of U) {
    if (o.parent === null) continue;
    const _ = e.get(o.parent) ?? [];
    _.push(o.node), e.set(o.parent, _);
  }
  const a = U.find((o) => o.parent === null);
  if (!a) throw new Error("lin2025 tree root missing");
  const n = [], t = [a.node];
  for (; t.length; ) {
    const o = t.pop();
    n.push(o);
    for (const _ of e.get(o) ?? []) t.push(_);
  }
  const r = /* @__PURE__ */ new Map();
  for (let o = n.length - 1; o >= 0; o -= 1) {
    const _ = U.find((i) => i.node === n[o]), s = _.depth / ze * F.branchR;
    if (_.isTip) {
      const i = (_.tipIndex - 0.5) / q.length * 2 * Math.PI;
      r.set(_.node, { r: s, th: i, th0: i, th1: i });
    } else {
      const l = (e.get(_.node) ?? []).map((c) => r.get(c)).filter(Boolean).map(({ th: c }) => c);
      r.set(_.node, { r: s, th: (Math.min(...l) + Math.max(...l)) / 2, th0: Math.min(...l), th1: Math.max(...l) });
    }
  }
  return r;
}
function Ge(e, a) {
  return { x: H.tx + de(e) * H.scale, y: H.ty + ce(a) * H.scale };
}
function l0(e, a) {
  return { x: z.tx + (F.cx + e * Math.cos(a)) * z.scale, y: z.ty + (F.cy + e * Math.sin(a)) * z.scale };
}
function d0(e) {
  var E, u, g, d, T;
  fe(e, 1, "lcm", "LCM: 2633 experiments grouped into 1107 species and aligned to the circular phylogeny");
  const a = Re(), n = R("g", {
    transform: "translate(115 54) scale(0.9)",
    "data-scene-id": "species-bridge-world",
    "data-structural-host": "world",
    "data-coordinate-space": "orthographic shared X-Y viewport"
  });
  V(n, "panel-k1", -15.5, 43.1, 1908, 998.6), V(n, "composition-k1", -15.5, 43.1, 1908, 998.6), e.appendChild(n), Z(n, 68, 72, "2,633 experiments", { "font-size": 27, "font-weight": 700, fill: "#17343b" }), Z(n, 1050, 72, "1,107 species on the phylogeny", { "font-size": 27, "font-weight": 700, fill: "#17343b" }), Z(n, 68, 1035, "groupby species · mean(EI) · 411 n→1 groups + 696 1→1 groups", { "font-size": 19, fill: "#4f6168" });
  const t = R("g", {
    transform: `translate(${H.tx} ${H.ty}) scale(${H.scale})`,
    "data-scene-id": "joint-map-plane",
    "data-parent-id": "species-bridge-world",
    "data-structural-host": "panel-plane",
    "data-geometry-ref": "renderer:lin2025-fig1-map"
  }), r = (E = a.querySelector('[data-panel="map"]')) == null ? void 0 : E.cloneNode(!0);
  if (!r) throw new Error("lin2025 map panel missing from source renderer");
  Xe(r), (u = r.querySelector('[data-scene-id="experiment-records"]')) == null || u.remove(), r.setAttribute("data-scene-id", "map-geometry"), t.appendChild(r), n.appendChild(t);
  const o = R("g", {
    transform: `translate(${z.tx} ${z.ty}) scale(${z.scale})`,
    "data-scene-id": "joint-tree-plane",
    "data-parent-id": "species-bridge-world",
    "data-structural-host": "panel-plane",
    "data-geometry-ref": "renderer:lin2025-fig1-circular-tree"
  }), _ = (g = a.querySelector('[data-panel="tree"]')) == null ? void 0 : g.cloneNode(!0);
  if (!_) throw new Error("lin2025 tree panel missing from source renderer");
  Ze(_), _.setAttribute("data-scene-id", "tree-geometry"), (d = _.querySelector('[data-scene-id="phylogeny"]')) == null || d.setAttribute("data-parent-id", "joint-tree-plane"), (T = _.querySelector('[data-scene-id="species-aggregates"]')) == null || T.setAttribute("data-parent-id", "joint-tree-plane"), o.appendChild(_), n.appendChild(o);
  const s = s0(), i = /* @__PURE__ */ new Map();
  for (const k of U) {
    if (!k.isTip) continue;
    const A = s.get(k.node);
    i.set(k.label, l0(F.tipR, A.th));
  }
  const l = /* @__PURE__ */ new Map();
  for (const k of W) {
    const A = l.get(k.species) ?? { lon: 0, lat: 0, n: 0 };
    A.lon += k.lon, A.lat += k.lat, A.n += 1, l.set(k.species, A);
  }
  const c = R("g", {
    "data-scene-id": "species-bridge",
    "data-parent-id": "species-bridge-world",
    "data-geometry-ref": "source-data:fig1-experiments.csv groupby species + fig1-tree-nodes.csv tip_index",
    "data-correspondence-field": "species"
  });
  for (const k of q) {
    const A = l.get(k.species), x = i.get(k.species);
    if (!A || !x) continue;
    const v = Ge(A.lon / A.n, A.lat / A.n);
    c.appendChild(R("line", {
      x1: v.x.toFixed(2),
      y1: v.y.toFixed(2),
      x2: x.x.toFixed(2),
      y2: x.y.toFixed(2),
      stroke: Y[k.threat] ?? "#777",
      "stroke-opacity": 0.09,
      "stroke-width": Math.min(2.2, 0.5 + Math.sqrt(A.n) * 0.18),
      "data-key": k.species,
      "data-record-key": `species:${k.species}`,
      "data-experiment-count": A.n
    }));
  }
  n.insertBefore(c, t);
  const y = R("g", {
    "data-scene-id": "experiment-records",
    "data-parent-id": "joint-map-plane",
    "data-geometry-ref": "source-data:fig1-experiments.csv"
  });
  for (const k of W) {
    const A = Ge(k.lon, k.lat);
    y.appendChild(R("circle", {
      cx: A.x.toFixed(2),
      cy: A.y.toFixed(2),
      r: 1.8,
      fill: Y[k.threat] ?? "#777",
      "fill-opacity": 0.58,
      "data-key": k.id,
      "data-record-key": `experiment_id:${k.id}`,
      "data-species": k.species,
      "data-ei": k.ei
    }));
  }
  n.appendChild(y);
  const N = R("g", { "data-scene-id": "panel-guides", "data-parent-id": "species-bridge-world" });
  Z(N, 70, 112, "longitude × latitude", { "font-size": 16, fill: "#64767d" }), Z(N, 1052, 112, "phylogenetic depth × tip order", { "font-size": 16, fill: "#64767d" }), n.appendChild(N);
}
const c0 = [o0, d0, _0], Oe = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakMap();
function Qe(e, a) {
  const n = c0[a];
  if (!n) throw new Error(`lin2025-fig1 has keyframe indices 0..2; received ${a}`);
  let t = Oe.get(e);
  t || (t = /* @__PURE__ */ new Map(), Oe.set(e, t));
  const r = De.get(e);
  if (r !== void 0) {
    const _ = t.get(r);
    _ && _.replaceChildren(...Array.from(e.childNodes));
  }
  let o = t.get(a);
  o || (o = R("svg"), n(o), t.set(a, o));
  for (const _ of e.getAttributeNames()) e.removeAttribute(_);
  for (const _ of Array.from(o.attributes)) e.setAttribute(_.name, _.value);
  e.replaceChildren(...Array.from(o.childNodes)), De.set(e, a);
}
const h0 = Object.freeze([0, 0.5, 1]), u0 = "http://www.w3.org/2000/svg", w = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
let ne = null;
const me = /* @__PURE__ */ new WeakMap(), ea = (e) => Math.max(0, Math.min(1, e)), L = (e, a, n) => e + (a - e) * n, m0 = (e) => {
  const a = ea(e);
  return a * a * (3 - 2 * a);
}, m = (e, a, n) => m0((e - a) / (n - a)), O = (e, a, n) => ({
  x: L(e.x, a.x, n),
  y: L(e.y, a.y, n)
}), he = (e, a, n) => ({
  a: L(e.a, a.a, n),
  b: L(e.b, a.b, n),
  c: L(e.c, a.c, n),
  d: L(e.d, a.d, n),
  e: L(e.e, a.e, n),
  f: L(e.f, a.f, n)
});
function se(e, a) {
  return {
    a: e.a * a.a + e.c * a.b,
    b: e.b * a.a + e.d * a.b,
    c: e.a * a.c + e.c * a.d,
    d: e.b * a.c + e.d * a.d,
    e: e.a * a.e + e.c * a.f + e.e,
    f: e.b * a.e + e.d * a.f + e.f
  };
}
function y0(e) {
  let a = w;
  for (const n of (e == null ? void 0 : e.matchAll(/(matrix|translate|scale|rotate)\(([^)]+)\)/g)) ?? []) {
    const t = n[2].trim().split(/[ ,]+/).map(Number);
    let r = w;
    if (n[1] === "matrix" && t.length >= 6)
      r = { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] };
    else if (n[1] === "translate")
      r = { ...w, e: t[0] || 0, f: t[1] || 0 };
    else if (n[1] === "scale")
      r = { ...w, a: t[0] || 1, d: t[1] ?? t[0] ?? 1 };
    else if (n[1] === "rotate") {
      const o = (t[0] || 0) * Math.PI / 180, _ = { a: Math.cos(o), b: Math.sin(o), c: -Math.sin(o), d: Math.cos(o), e: 0, f: 0 };
      if (t.length >= 3) {
        const s = { ...w, e: t[1], f: t[2] }, i = { ...w, e: -t[1], f: -t[2] };
        r = se(se(s, _), i);
      } else r = _;
    }
    a = se(a, r);
  }
  return a;
}
function j(e) {
  const a = [];
  for (let n = e; n && n.tagName.toLowerCase() !== "svg"; n = n.parentElement)
    a.unshift(n);
  return a.reduce((n, t) => se(n, y0(t.getAttribute("transform"))), w);
}
function Q(e, a, n) {
  return { x: e.a * a + e.c * n + e.e, y: e.b * a + e.d * n + e.f };
}
function te(e) {
  return Q(
    j(e),
    Number(e.getAttribute("cx") ?? 0),
    Number(e.getAttribute("cy") ?? 0)
  );
}
function Ie(e) {
  const a = j(e);
  return Number(e.getAttribute("r") ?? 0) * Math.sqrt(Math.abs(a.a * a.d - a.b * a.c));
}
function p0(e) {
  const a = j(e);
  return {
    source: Q(a, Number(e.getAttribute("x1") ?? 0), Number(e.getAttribute("y1") ?? 0)),
    target: Q(a, Number(e.getAttribute("x2") ?? 0), Number(e.getAttribute("y2") ?? 0))
  };
}
function ye(e, a, n) {
  const t = /* @__PURE__ */ new Map();
  return e.querySelectorAll(`[data-scene-id="${a}"] circle[data-record-key]`).forEach((r) => {
    const o = r.getAttribute("data-record-key") ?? "";
    o.startsWith(n) && t.set(o.slice(n.length), r);
  }), t;
}
function N0() {
  if (ne) return ne;
  const e = ca(Qe, 3), a = ye(e[0], "experiment-records", "experiment_id:"), n = ye(e[1], "experiment-records", "experiment_id:"), t = ye(e[2], "species-aggregates", "species:"), r = new Map([...a].map(([d, T]) => [d, te(T)])), o = new Map([...t].map(([d, T]) => [d, te(T)])), _ = /* @__PURE__ */ new Map();
  e[1].querySelectorAll('[data-scene-id="species-bridge"] line[data-record-key]').forEach((d) => {
    const T = d.getAttribute("data-record-key") ?? "";
    T.startsWith("species:") && _.set(T.slice(8), {
      ...p0(d),
      color: d.getAttribute("stroke") ?? "#375d67"
    });
  });
  const s = /* @__PURE__ */ new Map();
  for (const d of W) {
    const T = s.get(d.species) ?? [];
    T.push(d.id), s.set(d.species, T);
  }
  const i = new Map(
    U.filter((d) => d.isTip && d.tipIndex !== null).map((d) => [d.label, d.tipIndex])
  ), l = /* @__PURE__ */ new Map();
  for (const d of q) {
    const T = i.get(d.species);
    if (T === void 0) continue;
    const k = le(d.family), A = l.get(k) ?? { min: T, max: T };
    A.min = Math.min(A.min, T), A.max = Math.max(A.max, T), l.set(k, A);
  }
  const c = W.map((d) => {
    const T = a.get(d.id), k = n.get(d.id);
    return !T || !k ? null : {
      id: d.id,
      species: d.species,
      source: te(T),
      joint: te(k),
      radiusSource: Ie(T),
      radiusJoint: Ie(k),
      fill: T.getAttribute("fill") ?? k.getAttribute("fill") ?? "#777",
      fillOpacity: Number(T.getAttribute("fill-opacity") ?? k.getAttribute("fill-opacity") ?? 0.58)
    };
  }).filter((d) => !!d), y = q.map((d) => {
    const T = s.get(d.species) ?? [], k = T.map((S) => r.get(S)).filter((S) => !!S), A = _.get(d.species), x = o.get(d.species), v = i.get(d.species);
    if (!k.length || !A || !x || v === void 0) return null;
    const p = le(d.family), f = l.get(p);
    return {
      species: d.species,
      clade: p,
      cladeOrder: f.max === f.min ? 0 : (v - f.min) / (f.max - f.min),
      experimentCount: T.length,
      sourceCentroid: {
        x: k.reduce((S, M) => S + M.x, 0) / k.length,
        y: k.reduce((S, M) => S + M.y, 0) / k.length
      },
      jointCentroid: A.source,
      jointTip: A.target,
      targetTip: x,
      color: A.color
    };
  }).filter((d) => !!d), N = e[0].querySelector('[data-scene-id="source-map-panel"]'), E = e[1].querySelector('[data-scene-id="map-geometry"]'), u = e[1].querySelector('[data-scene-id="tree-geometry"]'), g = e[2].querySelector('[data-scene-id="target-tree-panel"]');
  if (!N || !E || !u || !g) throw new Error("lin2025 map/tree carrier endpoints are missing");
  if (c.length !== 2633 || y.length !== 1107)
    throw new Error(`lin2025 correspondence capture expected 2633 experiment ids and 1107 species; received ${c.length} and ${y.length}`);
  return ne = {
    snapshots: e,
    experimentMotion: c,
    speciesMotion: y,
    speciesMotionByName: new Map(y.map((d) => [d.species, d])),
    mapTemplate: N,
    sourceMapMatrix: j(N),
    jointMapMatrix: j(E),
    treeTemplate: u,
    jointTreeMatrix: j(u),
    targetTreeMatrix: j(g)
  }, ne;
}
function we(e) {
  let a = 1;
  for (let n = e; n && n.tagName.toLowerCase() !== "svg"; n = n.parentElement)
    for (const t of ["opacity", "fill-opacity", "stroke-opacity"]) {
      const r = n.getAttribute(t);
      r !== null && Number.isFinite(Number(r)) && (a *= Number(r));
    }
  return a;
}
function He(e, a) {
  for (const n of a) {
    const t = [...e.querySelectorAll(`[data-scene-id="${n}"]`)];
    if (t.length < 2) continue;
    const r = t.reduce((o, _) => we(_) > we(o) ? _ : o);
    for (const o of t)
      o !== r && (o.setAttribute("data-scene-id", `${n}-handoff`), o.querySelectorAll("[data-key], [data-record-key]").forEach((_) => {
        const s = _.getAttribute("data-record-key") ?? _.getAttribute("data-key");
        s && _.setAttribute("data-correspondence-key", s), _.removeAttribute("data-key"), _.removeAttribute("data-record-key");
      }));
  }
}
function P(e, a) {
  const n = document.createElementNS(u0, e);
  for (const [t, r] of Object.entries(a)) n.setAttribute(t, String(r));
  return n;
}
const E0 = {
  magnoliids: { start: 0.64, span: 0.07, duration: 0.04 },
  monocots: { start: 0.72, span: 0.09, duration: 0.045 },
  eudicots: { start: 0.82, span: 0.13, duration: 0.04 }
};
function ge(e, a) {
  const n = E0[a.clade], t = n.start + a.cladeOrder * n.span;
  return m(e, t, Math.min(0.985, t + n.duration));
}
function Ae(e, a) {
  const n = e.x - a, t = a * 2;
  return `M${n.toFixed(2)},${e.y.toFixed(2)}a${a.toFixed(2)},${a.toFixed(2)} 0 1,0 ${t.toFixed(2)},0a${a.toFixed(2)},${a.toFixed(2)} 0 1,0 -${t.toFixed(2)},0`;
}
function pe(e, a, n) {
  e.moveTo(a.x + n, a.y), e.arc(a.x, a.y, n, 0, Math.PI * 2);
}
function aa(e, a, n) {
  if (a < 0.62 || a >= 0.995 || n <= 0) return;
  const t = a < 0.72 ? "magnoliids" : a < 0.82 ? "monocots" : "eudicots", r = {
    magnoliids: "Magnoliids → tree tips",
    monocots: "Monocots → tree tips",
    eudicots: "Eudicots → tree tips"
  }, o = P("text", {
    x: 1060,
    y: 188,
    fill: J[t],
    "font-size": 17,
    "font-weight": 700,
    stroke: "#fff",
    "stroke-width": 4,
    "paint-order": "stroke",
    opacity: (n * m(a, 0.6, 0.64) * (1 - m(a, 0.98, 0.995))).toFixed(3),
    "pointer-events": "none",
    "data-mapping-phase": t
  });
  o.textContent = r[t], e.appendChild(o);
}
function na(e, a, n, t, r) {
  e.clearRect(0, 0, 1920, 1080);
  const o = m(a, 0.04, 0.38), _ = new Map(t.map((p) => [p.species, ge(a, p)])), s = m(a, 0.58, 0.66), i = m(a, 0.86, 0.985), l = L(L(0.64, 0.105, s), 0.58, i), c = /* @__PURE__ */ new Map(), y = [];
  for (const p of n) {
    const f = c.get(p.fill) ?? [];
    f.push(p), c.set(p.fill, f);
    const S = _.get(p.species) ?? 0;
    S > 1e-3 && S < 0.999 && y.push(p);
  }
  e.save(), e.globalAlpha = l;
  for (const [p, f] of c) {
    e.beginPath();
    for (const S of f) pe(
      e,
      O(S.source, S.joint, o),
      L(S.radiusSource, S.radiusJoint, o)
    );
    e.fillStyle = p, e.fill();
  }
  e.restore(), e.save(), e.globalAlpha = 0.94 * s * (1 - i);
  for (const p of y) {
    const f = _.get(p.species) ?? 0, S = Math.max(0.22, Math.sin(Math.PI * f)), M = O(p.source, p.joint, o);
    e.beginPath(), pe(e, M, L(p.radiusSource, p.radiusJoint, o) * (1.35 + 0.25 * S)), e.fillStyle = p.fill, e.fill(), e.lineWidth = 1.15, e.strokeStyle = "#fff", e.stroke();
  }
  if (e.restore(), a < 0.34) return;
  const N = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), k = 0.76 * m(a, 0.34, 0.46) * (1 - m(a, 0.58, 0.66)), A = L(0.012, 0.09, i);
  for (const p of t) {
    const f = O(p.sourceCentroid, p.jointCentroid, m(a, 0.08, 0.38)), S = ge(a, p);
    if (k > 0) {
      const D = N.get(p.color) ?? [];
      D.push({ point: f, radius: Math.min(3.5, 1.4 + Math.sqrt(p.experimentCount) * 0.23) }), N.set(p.color, D);
    }
    if (S <= 0) continue;
    const M = O(f, p.jointTip, S), I = p.experimentCount >= 8 ? 1.45 : p.experimentCount >= 3 ? 1.08 : 0.76, X = `${p.color}|${I}`, Ue = S >= 0.999 ? g : u, Pe = Ue.get(X) ?? { color: p.color, width: I, points: [] };
    if (Pe.points.push([f, M]), Ue.set(X, Pe), S < 0.999) {
      const D = E.get(p.color) ?? [];
      D.push({ point: f, radius: Math.min(5.2, 2.5 + Math.sqrt(p.experimentCount) * 0.3) }), E.set(p.color, D);
      const xe = d.get(p.color) ?? [];
      xe.push({ point: p.jointTip, radius: L(2.4, 4.5, S) }), d.set(p.color, xe);
    } else {
      const D = T.get(p.color) ?? [];
      D.push({ point: p.jointTip, radius: 1.8 }), T.set(p.color, D);
    }
  }
  const x = (p, f) => {
    e.save(), e.globalAlpha = f;
    for (const S of p.values()) {
      e.beginPath();
      for (const [M, I] of S.points)
        e.moveTo(M.x, M.y), e.lineTo(I.x, I.y);
      e.strokeStyle = S.color, e.lineWidth = S.width, e.stroke();
    }
    e.restore();
  };
  x(g, A), x(u, 0.38);
  const v = (p, f, S = !1) => {
    e.save(), e.globalAlpha = f;
    for (const [M, I] of p) {
      e.beginPath();
      for (const X of I) pe(e, X.point, X.radius);
      e.fillStyle = M, e.fill(), S && (e.strokeStyle = "#fff", e.lineWidth = 1.35, e.stroke());
    }
    e.restore();
  };
  v(N, k), v(T, L(0.12, 0.62, i)), v(E, 0.92, !0), v(d, 0.94, !0);
  for (const p of y)
    if (!r.has(p.species)) throw new Error(`missing species motion for ${p.species}`);
}
function k0(e, a, n) {
  if (typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) return !1;
  const t = P("foreignObject", {
    x: 0,
    y: 0,
    width: 1920,
    height: 1080,
    "pointer-events": "none",
    "aria-hidden": "true",
    "data-animation-layer": "canvas-motion-carrier"
  }), r = document.createElement("canvas");
  r.width = 1920, r.height = 1080, r.style.cssText = "width:1920px;height:1080px;display:block";
  const o = r.getContext("2d");
  return o ? (t.appendChild(r), na(o, a, n.experimentMotion, n.speciesMotion, n.speciesMotionByName), e.appendChild(t), aa(e, a, 1), !0) : !1;
}
function ee(e) {
  return `matrix(${e.a} ${e.b} ${e.c} ${e.d} ${e.e} ${e.f})`;
}
function T0(e, a, n, t) {
  const r = m(a, 0.02, 0.1) * (1 - m(a, 0.97, 0.995));
  if (r <= 0) return;
  const o = m(a, 0.04, 0.38), _ = L(1, 0.18, m(a, 0.54, 0.66)), s = P("g", {
    opacity: (r * _).toFixed(4),
    "data-scene-id": "experiment-records",
    "data-animation-layer": "experiment-record-carrier",
    "data-geometry-ref": "source-keyed K0/K1 experiment coordinates",
    "data-source-record-count": n.length
  });
  if (t) {
    const i = /* @__PURE__ */ new Map();
    for (const l of n) {
      const c = O(l.source, l.joint, o), y = L(l.radiusSource, l.radiusJoint, o), N = i.get(l.fill) ?? [];
      N.push(Ae(c, y)), i.set(l.fill, N);
    }
    for (const [l, c] of i) s.appendChild(P("path", {
      d: c.join(""),
      fill: l,
      "fill-opacity": 0.64,
      "data-mark": "experiment-batch",
      "data-batch-key": `threat:${l}`
    }));
    e.appendChild(s);
    return;
  }
  for (const i of n) {
    const l = O(i.source, i.joint, o);
    s.appendChild(P("circle", {
      cx: l.x.toFixed(2),
      cy: l.y.toFixed(2),
      r: L(i.radiusSource, i.radiusJoint, o).toFixed(3),
      fill: i.fill,
      "fill-opacity": i.fillOpacity,
      "data-mark": "experiment",
      "data-key": i.id,
      "data-record-key": `experiment_id:${i.id}`,
      "data-species": i.species
    }));
  }
  e.appendChild(s);
}
function Le(e, a) {
  for (const n of e.querySelectorAll('[data-scene-id="experiment-records"]')) {
    if (n.getAttribute("data-animation-layer") === "experiment-record-carrier") continue;
    const t = !!n.closest('[data-scene-id="source-map-plane"]'), r = !!n.closest('[data-scene-id="species-bridge-world"]');
    t ? n.setAttribute("opacity", String(1 - m(a, 0.02, 0.1))) : r && n.setAttribute("opacity", String(m(a, 0.97, 0.995)));
  }
}
function ta(e, a, n) {
  var s;
  const t = m(a, 0.02, 0.1) * (1 - m(a, 0.9, 0.98)), r = n.mapTemplate.cloneNode(!0);
  r.removeAttribute("transform"), r.removeAttribute("data-scene-id"), (s = r.querySelector('[data-scene-id="experiment-records"]')) == null || s.remove();
  const o = m(a, 0.04, 0.38), _ = P("g", {
    transform: ee(he(n.sourceMapMatrix, n.jointMapMatrix, o)),
    opacity: t.toFixed(4),
    "data-animation-layer": "map-geometry-carrier",
    "data-geometry-ref": "frozen K0/K1 map geometry"
  });
  return _.appendChild(r), e.appendChild(_), _;
}
function Fe(e, a) {
  const n = e.querySelector('[data-scene-id="source-map-panel"]'), t = e.querySelector('[data-scene-id="map-geometry"]');
  n == null || n.setAttribute("opacity", String(1 - m(a, 0.02, 0.1))), t == null || t.setAttribute("opacity", String(m(a, 0.9, 0.98)));
}
function Ce(e, a) {
  var s, i, l, c, y;
  const n = e.querySelector('[data-scene-id="source-map-plane"]');
  n == null || n.setAttribute("opacity", String(1 - m(a, 0.9, 0.98))), (s = n == null ? void 0 : n.querySelector('[data-scene-id="panel-guides"]')) == null || s.setAttribute("opacity", String(1 - m(a, 0.02, 0.1)));
  const t = e.querySelector('[data-scene-id="species-bridge-world"]');
  if (!t) return;
  t.setAttribute("opacity", String(m(a, 0.02, 0.1))), (i = t.querySelector('[data-scene-id="joint-map-plane"]')) == null || i.setAttribute("opacity", "1"), (l = t.querySelector('[data-scene-id="joint-tree-plane"]')) == null || l.setAttribute("opacity", String(m(a, 0.5, 0.58))), (c = t.querySelector('[data-scene-id="species-bridge"]')) == null || c.setAttribute("opacity", String(m(a, 0.97, 0.995)));
  const r = t.querySelector('[data-scene-id="tree-geometry"]');
  (y = r == null ? void 0 : r.querySelector('[data-scene-id="phylogeny"]')) == null || y.setAttribute("opacity", String(m(a, 0.5, 0.62)));
  const o = r == null ? void 0 : r.querySelector('[data-scene-id="species-aggregates"]');
  o == null || o.setAttribute("opacity", String(m(a, 0.86, 0.985)));
  for (const N of [...t.children]) {
    if (N.tagName.toLowerCase() !== "text") continue;
    const E = Number(N.getAttribute("x") ?? 0), u = Number(N.getAttribute("y") ?? 0), g = E >= 1e3, d = u >= 1e3;
    N.setAttribute("opacity", String(
      g || d ? m(a, 0.48, 0.6) : m(a, 0.2, 0.42)
    ));
  }
  const _ = t.querySelector('[data-scene-id="panel-guides"]');
  _ == null || _.setAttribute("opacity", String(m(a, 0.24, 0.42))), _ == null || _.querySelectorAll("text").forEach((N) => {
    const E = Number(N.getAttribute("x") ?? 0);
    N.setAttribute("opacity", String(E >= 1e3 ? m(a, 0.48, 0.6) : 1));
  });
}
function ra(e, a) {
  var t, r;
  if (a >= 0.97) return;
  const n = e.querySelector('[data-scene-id="species-bridge-world"]');
  (t = n == null ? void 0 : n.querySelector('[data-scene-id="experiment-records"]')) == null || t.replaceChildren(), (r = n == null ? void 0 : n.querySelector('[data-scene-id="species-bridge"]')) == null || r.replaceChildren();
}
function ia(e, a, n) {
  const t = m(a, 0.02, 0.1) * (1 - m(a, 0.24, 0.42)), r = n.snapshots[0].querySelector('[data-scene-id="panel-guides"]');
  if (!r) return;
  const o = r.cloneNode(!0);
  o.removeAttribute("data-scene-id"), o.removeAttribute("data-parent-id");
  const _ = P("g", {
    transform: ee(he(n.sourceMapMatrix, n.jointMapMatrix, m(a, 0.04, 0.38))),
    opacity: t.toFixed(4),
    "data-scene-id": "panel-guides",
    "data-animation-layer": "source-guide-carrier",
    "data-geometry-ref": "frozen K0 panel guides"
  });
  return _.appendChild(o), e.appendChild(_), _;
}
function g0(e, a, n) {
  const t = m(a, 0.02, 0.1) * (1 - m(a, 0.9, 0.98));
  if (t <= 0) return;
  const r = n.treeTemplate.cloneNode(!0);
  r.removeAttribute("transform"), r.setAttribute("data-animation-role", "stable-tree-geometry");
  const o = Q(n.jointTreeMatrix, F.cx, F.cy), _ = Q(n.targetTreeMatrix, F.cx, F.cy), s = m(a, 0.05, 0.55), i = m(a, 0.42, 0.95), l = L(n.jointTreeMatrix.a, n.targetTreeMatrix.a, s), c = O(o, _, i), y = {
    a: l,
    b: 0,
    c: 0,
    d: l,
    e: c.x - F.cx * l,
    f: c.y - F.cy * l
  }, N = P("g", {
    transform: ee(y),
    opacity: t.toFixed(4),
    "data-animation-layer": "tree-geometry-carrier",
    "data-source-key-chain": "fig1-species.csv:species→fig1-tree-nodes.csv:label"
  });
  N.appendChild(r), e.appendChild(N);
}
function A0(e, a) {
  const n = e.querySelector('[data-scene-id="tree-geometry"]:not([data-animation-role])'), t = e.querySelector('[data-scene-id="target-tree-panel"]');
  n == null || n.setAttribute("opacity", String(1 - m(a, 0.02, 0.1))), t == null || t.setAttribute("opacity", String(m(a, 0.9, 0.98)));
}
function S0(e, a) {
  var i, l;
  const n = e.querySelector('[data-scene-id="species-bridge-world"]'), t = 1 - m(a, 0.12, 0.56);
  for (const c of ['[data-scene-id="joint-map-plane"]', '[data-scene-id="species-bridge"]', '[data-scene-id="experiment-records"]'])
    (i = n == null ? void 0 : n.querySelector(c)) == null || i.setAttribute("opacity", String(t));
  const r = 1 - m(a, 0.08, 0.3), o = m(a, 0.58, 0.72), _ = 1 - m(a, 0.62, 0.76);
  if (n)
    for (const c of [...n.children])
      c.tagName.toLowerCase() === "text" && c.setAttribute("opacity", String(r)), c.getAttribute("data-scene-id") === "panel-guides" && c.setAttribute("opacity", String(_));
  const s = e.querySelector('[data-scene-id="target-tree-plane"]');
  (l = s == null ? void 0 : s.querySelector('[data-scene-id="panel-guides"]')) == null || l.setAttribute("opacity", String(o));
}
function b0(e, a, n) {
  const t = a < 0.5 ? 0 : 1, r = t === 0 ? a * 2 : (a - 0.5) * 2;
  if (r <= 0 || r >= 1 || t === 1 || r < 0.32) return;
  const o = 1 - m(r, 0.97, 0.995), _ = P("g", {
    opacity: o.toFixed(4),
    "pointer-events": "none",
    "data-animation-layer": "experiment-to-species-correspondence",
    "data-source-key-chain": "fig1-experiments.csv:id→species;fig1-species.csv:species;fig1-tree-nodes.csv:label",
    "data-source-record-count": n.length
  }), s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), y = 0.76 * m(r, 0.34, 0.46) * (1 - m(r, 0.58, 0.66));
  for (const E of n) {
    const u = O(E.sourceCentroid, E.jointCentroid, m(r, 0.08, 0.38));
    if (y > 0) {
      const p = s.get(E.color) ?? [];
      p.push(Ae(u, Math.min(3.5, 1.4 + Math.sqrt(E.experimentCount) * 0.23))), s.set(E.color, p);
    }
    const g = ge(r, E);
    if (g <= 0) continue;
    const d = O(u, E.jointTip, g), T = E.experimentCount >= 8 ? "large" : E.experimentCount >= 3 ? "medium" : "small", k = `${E.color}|${T}`, A = `M${u.x.toFixed(2)},${u.y.toFixed(2)}L${d.x.toFixed(2)},${d.y.toFixed(2)}`, x = g >= 0.999 ? l : i, v = x.get(k) ?? [];
    if (v.push(A), x.set(k, v), g < 0.999) {
      const p = c.get(E.color) ?? [];
      p.push(Ae(E.jointTip, L(1.5, 3.4, g))), c.set(E.color, p);
    }
  }
  const N = (E) => E.endsWith("|large") ? 1.35 : E.endsWith("|medium") ? 1 : 0.72;
  for (const [E, u] of l) _.appendChild(P("path", {
    d: u.join(""),
    fill: "none",
    stroke: E.split("|")[0],
    "stroke-opacity": L(0.012, 0.09, m(r, 0.86, 0.985)),
    "stroke-width": N(E),
    "data-mapping-state": "settled"
  }));
  for (const [E, u] of i) _.appendChild(P("path", {
    d: u.join(""),
    fill: "none",
    stroke: E.split("|")[0],
    "stroke-opacity": 0.32,
    "stroke-width": N(E),
    "data-mapping-state": "active"
  }));
  for (const [E, u] of s) _.appendChild(P("path", {
    d: u.join(""),
    fill: E,
    "fill-opacity": y.toFixed(3),
    "data-groupby": "species",
    "data-mapping-state": "aggregate"
  }));
  for (const [E, u] of c) _.appendChild(P("path", {
    d: u.join(""),
    fill: E,
    "fill-opacity": 0.82,
    "data-mapping-target": "tree-tip",
    "data-mapping-state": "active"
  }));
  aa(_, r, o), e.appendChild(_);
}
function f0(e, a, n) {
  const t = m(a, 0.02, 0.1) * (1 - m(a, 0.9, 0.98));
  e.setAttribute("opacity", t.toFixed(4)), e.setAttribute("transform", ee(he(
    n.sourceMapMatrix,
    n.jointMapMatrix,
    m(a, 0.04, 0.38)
  )));
}
function R0(e, a, n) {
  if (!e) return;
  const t = m(a, 0.02, 0.1) * (1 - m(a, 0.24, 0.42));
  e.setAttribute("opacity", t.toFixed(4)), e.setAttribute("transform", ee(he(
    n.sourceMapMatrix,
    n.jointMapMatrix,
    m(a, 0.04, 0.38)
  )));
}
function L0(e, a) {
  const n = m(a, 0.6, 0.64) * (1 - m(a, 0.98, 0.995)), t = a < 0.72 ? "magnoliids" : a < 0.82 ? "monocots" : "eudicots", r = {
    magnoliids: "Magnoliids",
    monocots: "Monocots",
    eudicots: "Eudicots"
  };
  e.sourceLabel.textContent = n > 0 ? "highlighted experiment records" : "", e.targetLabel.textContent = n > 0 ? `${r[t]} → matching tree tips` : "", e.sourceLabel.setAttribute("opacity", n.toFixed(3)), e.targetLabel.setAttribute("opacity", n.toFixed(3)), e.sourceLabel.setAttribute("fill", J[t]), e.targetLabel.setAttribute("fill", J[t]);
}
function F0(e, a, n, t) {
  if (typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) return null;
  Ne(e, [t.snapshots[1], t.snapshots[1]], [0, 1], a, {
    pairSemanticContainers: !0
  }), e.setAttribute("data-animation-progress", n.toFixed(6)), e.setAttribute("data-snapshot-segment", "0"), e.setAttribute("data-render-runtime", "persistent-canvas-segment-one"), ra(e, 0), Ce(e, a), Fe(e, a), Le(e, a);
  const r = ta(e, a, t), o = ia(e, a, t) ?? null;
  if (!r) return null;
  const _ = P("foreignObject", {
    x: 0,
    y: 0,
    width: 1920,
    height: 1080,
    "pointer-events": "none",
    "aria-hidden": "true",
    "data-animation-layer": "canvas-motion-carrier"
  }), s = document.createElement("canvas");
  s.width = 1920, s.height = 1080, s.style.cssText = "width:1920px;height:1080px;display:block";
  const i = s.getContext("2d");
  if (!i) return null;
  _.appendChild(s), e.appendChild(_);
  const l = {
    y: 188,
    "font-size": 17,
    "font-weight": 700,
    stroke: "#fff",
    "stroke-width": 4,
    "paint-order": "stroke",
    "pointer-events": "none",
    opacity: 0
  }, c = P("text", { ...l, x: 176, "data-mapping-label": "source" }), y = P("text", { ...l, x: 1060, "data-mapping-label": "target" });
  return e.append(c, y), { canvas: s, ctx: i, mapCarrier: r, guideCarrier: o, sourceLabel: c, targetLabel: y };
}
function C0(e, a, n, t, r) {
  e.setAttribute("data-animation-progress", t.toFixed(6)), Ce(e, n), Fe(e, n), Le(e, n), f0(a.mapCarrier, n, r), R0(a.guideCarrier, n, r), na(a.ctx, n, r.experimentMotion, r.speciesMotion, r.speciesMotionByName), L0(a, n);
}
function U0(e, a) {
  const n = ea(Number.isFinite(a) ? a : 0), t = N0(), r = n > 0 && n < 0.5, o = r ? n * 2 : 0, _ = r && o >= 0.1;
  if (_ && !(typeof navigator < "u" && /jsdom/i.test(navigator.userAgent))) {
    let i = me.get(e);
    if (i || (i = F0(e, o, n, t) ?? void 0, i && me.set(e, i)), i) {
      C0(e, i, o, n, t);
      return;
    }
  }
  if (me.delete(e), _ ? (Ne(e, [t.snapshots[1], t.snapshots[1]], [0, 1], o, {
    pairSemanticContainers: !0
  }), e.setAttribute("data-animation-progress", n.toFixed(6)), e.setAttribute("data-snapshot-segment", "0")) : Ne(e, t.snapshots, h0, n, {
    pairSemanticContainers: !0
  }), n > 0 && n < 0.5) {
    const i = n * 2;
    _ && ra(e, i), Ce(e, i), Fe(e, i), Le(e, i), ta(e, i, t), (!_ || !k0(e, i, t)) && T0(e, i, t.experimentMotion, _), ia(e, i, t), He(e, ["experiment-records", "panel-guides", "frame-backdrop"]);
  } else if (n > 0.5 && n < 1) {
    const i = (n - 0.5) * 2;
    A0(e, i), S0(e, i), g0(e, i, t), He(e, ["tree-geometry", "species-aggregates", "phylogeny", "panel-guides", "frame-backdrop"]);
  }
  _ || b0(e, n, t.speciesMotion);
}
const O0 = oa(
  Ta,
  {
    frame: Object.freeze({ width: oe, height: _e }),
    keyframes: t0,
    renderKeyframe: Qe,
    renderAnimation: U0
  }
);
export {
  _e as KEYFRAME_HEIGHT,
  h0 as KEYFRAME_PROGRESS,
  t0 as KEYFRAME_SEQUENCE,
  oe as KEYFRAME_WIDTH,
  Ta as manifest,
  O0 as mapAToTreeBTransitionSpace,
  U0 as renderAnimation,
  Qe as renderKeyframe,
  n0 as renderSourceFigure
};
