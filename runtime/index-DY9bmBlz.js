import { d as s0 } from "./transition-space-Df4GnxL9.js";
import { r as c0, c as i0, a as U } from "./svg-snapshot-transition-CHoy-cD5.js";
import { p as y } from "./csv-Ha6vz5IV.js";
import { e as s } from "./svg-DSCeB79j.js";
const d0 = "figure2story-transition-space/v1", l0 = "scatter-d-to-scatter-e", m0 = "clin07-fig2", h0 = {
  transition_id: "clin07-fig2 · scatter (d) → scatter (e)",
  panel_i: "scatter (d)",
  panel_j: "scatter (e)"
}, S0 = {
  entry: "index.ts",
  keyframes: "keyframes.ts",
  animation: "animation.ts",
  audit: "audit.ts"
}, p0 = {
  width: 1920,
  height: 1080
}, b0 = [
  {
    index: 0,
    kind: "panel-i",
    label: "Panel scatter (d) · complete PREMIX-only PCoA",
    progress: 0
  },
  {
    index: 1,
    kind: "panel-i-joint",
    label: "scatter (d) · World YZ carrier with cohort hinge ports",
    progress: 0.275
  },
  {
    index: 2,
    kind: "lcm",
    label: "LCM · orthogonal PCoA planes on one World XYZ cohort spine",
    progress: 0.475
  },
  {
    index: 3,
    kind: "panel-j-joint",
    label: "scatter (e) · World XY carrier with cohort hinge ports",
    progress: 0.725
  },
  {
    index: 4,
    kind: "panel-j-released",
    label: "scatter (e) · released from the shared cohort spine",
    progress: 0.8375
  },
  {
    index: 5,
    kind: "panel-j",
    label: "Panel scatter (e) · complete cross-cohort PCoA",
    progress: 1
  }
], E0 = {
  worlds: [
    {
      id: "world-xyz",
      dimensions: 3,
      keyframe_indices: [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    }
  ],
  cameras: [
    {
      id: "orthographic-world-camera",
      world_id: "world-xyz",
      projection: "orthographic; azimuth 34deg; depth compression 0.78",
      keyframe_indices: [
        0,
        1,
        2,
        3,
        4,
        5
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
        3,
        4,
        5
      ]
    }
  ],
  planes: [
    {
      id: "panel-plane:D",
      panel: "scatter (d)",
      keyframe_indices: [
        0,
        1,
        2
      ],
      result_refs: [
        "scatter (d).premix-pcoa",
        "scatter (d).trajectories"
      ],
      position_fields: [
        "PREMIX-only Axis 1",
        "PREMIX-only Axis 2"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "Y",
        "Z"
      ],
      world_id: "world-xyz",
      camera_id: "orthographic-world-camera"
    },
    {
      id: "panel-plane:E",
      panel: "scatter (e)",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      result_refs: [
        "scatter (e).cross-cohort-pcoa-visible-centres"
      ],
      position_fields: [
        "cross-cohort Axis 1",
        "cross-cohort Axis 2"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Y"
      ],
      world_id: "world-xyz",
      camera_id: "orthographic-world-camera"
    }
  ],
  objects: [
    {
      id: "panel-plane:D",
      role: "complete scatter (d) panel structure",
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
            kind: "world",
            id: "world-xyz"
          }
        }
      ]
    },
    {
      id: "panel-plane:E",
      role: "complete scatter (e) panel structure",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3,
            4,
            5
          ],
          host: {
            kind: "world",
            id: "world-xyz"
          }
        }
      ]
    },
    {
      id: "guide:D",
      role: "D axes, ticks, titles and participant/exposure legends",
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
            kind: "panel-plane",
            id: "panel-plane:D"
          }
        }
      ]
    },
    {
      id: "guide:E",
      role: "E axes, ticks, titles, envelopes and seven-cohort legend",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3,
            4,
            5
          ],
          host: {
            kind: "panel-plane",
            id: "panel-plane:E"
          }
        }
      ]
    },
    {
      id: "D-context:trajectories-and-exposure",
      role: "D-only non-GCD context marks",
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
            kind: "panel-plane",
            id: "panel-plane:D"
          }
        }
      ]
    },
    {
      id: "group:D:Less Extreme",
      role: "D cohort group; 69 sample-keyed records",
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
            kind: "panel-plane",
            id: "panel-plane:D"
          }
        }
      ]
    },
    {
      id: "group:D:More Extreme",
      role: "D cohort group; 20 sample-keyed records",
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
            kind: "panel-plane",
            id: "panel-plane:D"
          }
        }
      ]
    },
    {
      id: "group:D:PREMIX Donor",
      role: "D cohort group; 6 sample-keyed records",
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
            kind: "panel-plane",
            id: "panel-plane:D"
          }
        }
      ]
    },
    {
      id: "group:E:Less Extreme",
      role: "E cohort group; 54 point_key records",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3,
            4,
            5
          ],
          host: {
            kind: "panel-plane",
            id: "panel-plane:E"
          }
        }
      ]
    },
    {
      id: "group:E:More Extreme",
      role: "E cohort group; 16 point_key records",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3,
            4,
            5
          ],
          host: {
            kind: "panel-plane",
            id: "panel-plane:E"
          }
        }
      ]
    },
    {
      id: "group:E:PREMIX Donor",
      role: "E cohort group; 6 point_key records",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3,
            4,
            5
          ],
          host: {
            kind: "panel-plane",
            id: "panel-plane:E"
          }
        }
      ]
    },
    {
      id: "group:E:RCDI",
      role: "E-only group; 198 point_key records",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3,
            4,
            5
          ],
          host: {
            kind: "panel-plane",
            id: "panel-plane:E"
          }
        }
      ]
    },
    {
      id: "group:E:HMP HHS",
      role: "E-only group; 141 point_key records",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3,
            4,
            5
          ],
          host: {
            kind: "panel-plane",
            id: "panel-plane:E"
          }
        }
      ]
    },
    {
      id: "group:E:Non-PREMIX Donor",
      role: "E-only group; 25 point_key records",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3,
            4,
            5
          ],
          host: {
            kind: "panel-plane",
            id: "panel-plane:E"
          }
        }
      ]
    },
    {
      id: "group:E:Non-PREMIX MDRO",
      role: "E-only group; 24 point_key records",
      keyframe_indices: [
        2,
        3,
        4,
        5
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3,
            4,
            5
          ],
          host: {
            kind: "panel-plane",
            id: "panel-plane:E"
          }
        }
      ]
    },
    {
      id: "anchor:Less Extreme",
      role: "shared cohort_class World-Y group anchor",
      keyframe_indices: [
        1,
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            1,
            2,
            3
          ],
          host: {
            kind: "world",
            id: "world-xyz"
          }
        }
      ]
    },
    {
      id: "anchor:More Extreme",
      role: "shared cohort_class World-Y group anchor",
      keyframe_indices: [
        1,
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            1,
            2,
            3
          ],
          host: {
            kind: "world",
            id: "world-xyz"
          }
        }
      ]
    },
    {
      id: "anchor:PREMIX Donor",
      role: "shared cohort_class World-Y group anchor",
      keyframe_indices: [
        1,
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            1,
            2,
            3
          ],
          host: {
            kind: "world",
            id: "world-xyz"
          }
        }
      ]
    },
    {
      id: "branches:D",
      role: "three D group-only branches",
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
            id: "world-xyz"
          }
        }
      ]
    },
    {
      id: "branches:E",
      role: "three E group-only branches",
      keyframe_indices: [
        2,
        3
      ],
      hosts: [
        {
          keyframe_indices: [
            2,
            3
          ],
          host: {
            kind: "world",
            id: "world-xyz"
          }
        }
      ]
    }
  ]
}, R0 = {
  schema_version: d0,
  id: l0,
  figure_id: m0,
  pair: h0,
  modules: S0,
  frame: p0,
  keyframes: b0,
  scene: E0
}, f0 = `sample,id,visit,visit_slot,stack_order,taxon,relative_abundance,source_class\r
PM01.S3,PM01,Screen,0,0,Escherichia,0.15534,true\r
PM01.S3,PM01,Screen,0,1,Klebsiella,0.00038,true\r
PM01.S3,PM01,Screen,0,2,Enterobacter,0.00028,true\r
PM01.S3,PM01,Screen,0,3,Enterococcus,0.00091,true\r
PM01.S3,PM01,Screen,0,4,Citrobacter,0.00121,true\r
PM01.S3,PM01,Screen,0,5,Morganella,4e-05,true\r
PM01.S3,PM01,Screen,0,6,Proteus,4e-05,true\r
PM01.S3,PM01,Screen,0,7,Haemophilus,0,true\r
PM01.S3,PM01,Screen,0,8,Other,0.17634,true\r
PM01.S3,PM01,Screen,0,9,Bacteroides,0.45446,true\r
PM01.S3,PM01,Screen,0,10,Streptococcus,0.00377,true\r
PM01.S3,PM01,Screen,0,11,Oscillibacter,0.00688,true\r
PM01.S3,PM01,Screen,0,12,Phascolarctobacterium,0.02456,true\r
PM01.S3,PM01,Screen,0,13,Faecalibacterium,0.00356,true\r
PM01.S3,PM01,Screen,0,14,Mediterraneibacter,0.00106,true\r
PM01.S3,PM01,Screen,0,15,Akkermansia,9e-05,true\r
PM01.S3,PM01,Screen,0,16,Phocaeicola,0.1189,true\r
PM01.S3,PM01,Screen,0,17,Alistipes,0.0454,true\r
PM01.C1D01,PM01,C1D01,5,0,Escherichia,0.01782,true\r
PM01.C1D01,PM01,C1D01,5,1,Klebsiella,6e-05,true\r
PM01.C1D01,PM01,C1D01,5,2,Enterobacter,4e-05,true\r
PM01.C1D01,PM01,C1D01,5,3,Enterococcus,0.00265,true\r
PM01.C1D01,PM01,C1D01,5,4,Citrobacter,0.00048,true\r
PM01.C1D01,PM01,C1D01,5,5,Morganella,1e-05,true\r
PM01.C1D01,PM01,C1D01,5,6,Proteus,1e-05,true\r
PM01.C1D01,PM01,C1D01,5,7,Haemophilus,0,true\r
PM01.C1D01,PM01,C1D01,5,8,Other,0.13435,true\r
PM01.C1D01,PM01,C1D01,5,9,Bacteroides,0.28126,true\r
PM01.C1D01,PM01,C1D01,5,10,Streptococcus,0.00129,true\r
PM01.C1D01,PM01,C1D01,5,11,Oscillibacter,0.00117,true\r
PM01.C1D01,PM01,C1D01,5,12,Phascolarctobacterium,0.02092,true\r
PM01.C1D01,PM01,C1D01,5,13,Faecalibacterium,0.01892,true\r
PM01.C1D01,PM01,C1D01,5,14,Mediterraneibacter,0.00289,true\r
PM01.C1D01,PM01,C1D01,5,15,Akkermansia,7e-05,true\r
PM01.C1D01,PM01,C1D01,5,16,Phocaeicola,0.50162,true\r
PM01.C1D01,PM01,C1D01,5,17,Alistipes,0.01233,true\r
PM01.C1D02,PM01,C1D02,6,0,Escherichia,0.00652,true\r
PM01.C1D02,PM01,C1D02,6,1,Klebsiella,9e-05,true\r
PM01.C1D02,PM01,C1D02,6,2,Enterobacter,5e-05,true\r
PM01.C1D02,PM01,C1D02,6,3,Enterococcus,0.00028,true\r
PM01.C1D02,PM01,C1D02,6,4,Citrobacter,0.00077,true\r
PM01.C1D02,PM01,C1D02,6,5,Morganella,1e-05,true\r
PM01.C1D02,PM01,C1D02,6,6,Proteus,0,true\r
PM01.C1D02,PM01,C1D02,6,7,Haemophilus,0,true\r
PM01.C1D02,PM01,C1D02,6,8,Other,0.12719,true\r
PM01.C1D02,PM01,C1D02,6,9,Bacteroides,0.42977,true\r
PM01.C1D02,PM01,C1D02,6,10,Streptococcus,0.00211,true\r
PM01.C1D02,PM01,C1D02,6,11,Oscillibacter,0.00351,true\r
PM01.C1D02,PM01,C1D02,6,12,Phascolarctobacterium,0.01114,true\r
PM01.C1D02,PM01,C1D02,6,13,Faecalibacterium,0.02763,true\r
PM01.C1D02,PM01,C1D02,6,14,Mediterraneibacter,0.00111,true\r
PM01.C1D02,PM01,C1D02,6,15,Akkermansia,0.04164,true\r
PM01.C1D02,PM01,C1D02,6,16,Phocaeicola,0.30201,true\r
PM01.C1D02,PM01,C1D02,6,17,Alistipes,0.02584,true\r
PM01.C1D15,PM01,C1D15,7,0,Escherichia,0.0077,true\r
PM01.C1D15,PM01,C1D15,7,1,Klebsiella,0.01888,true\r
PM01.C1D15,PM01,C1D15,7,2,Enterobacter,0.0259,true\r
PM01.C1D15,PM01,C1D15,7,3,Enterococcus,0.00018,true\r
PM01.C1D15,PM01,C1D15,7,4,Citrobacter,0.00042,true\r
PM01.C1D15,PM01,C1D15,7,5,Morganella,4e-05,true\r
PM01.C1D15,PM01,C1D15,7,6,Proteus,1e-05,true\r
PM01.C1D15,PM01,C1D15,7,7,Haemophilus,0.0006,true\r
PM01.C1D15,PM01,C1D15,7,8,Other,0.18195,true\r
PM01.C1D15,PM01,C1D15,7,9,Bacteroides,0.39848,true\r
PM01.C1D15,PM01,C1D15,7,10,Streptococcus,0.00145,true\r
PM01.C1D15,PM01,C1D15,7,11,Oscillibacter,0.00421,true\r
PM01.C1D15,PM01,C1D15,7,12,Phascolarctobacterium,0.01418,true\r
PM01.C1D15,PM01,C1D15,7,13,Faecalibacterium,0.06466,true\r
PM01.C1D15,PM01,C1D15,7,14,Mediterraneibacter,0.00042,true\r
PM01.C1D15,PM01,C1D15,7,15,Akkermansia,0.00258,true\r
PM01.C1D15,PM01,C1D15,7,16,Phocaeicola,0.23474,true\r
PM01.C1D15,PM01,C1D15,7,17,Alistipes,0.02259,true\r
PM01.C1D36,PM01,C1D36,8,0,Escherichia,0.04084,true\r
PM01.C1D36,PM01,C1D36,8,1,Klebsiella,0.00078,true\r
PM01.C1D36,PM01,C1D36,8,2,Enterobacter,0.00046,true\r
PM01.C1D36,PM01,C1D36,8,3,Enterococcus,0.00028,true\r
PM01.C1D36,PM01,C1D36,8,4,Citrobacter,0.00036,true\r
PM01.C1D36,PM01,C1D36,8,5,Morganella,5e-05,true\r
PM01.C1D36,PM01,C1D36,8,6,Proteus,2e-05,true\r
PM01.C1D36,PM01,C1D36,8,7,Haemophilus,4e-05,true\r
PM01.C1D36,PM01,C1D36,8,8,Other,0.16104,true\r
PM01.C1D36,PM01,C1D36,8,9,Bacteroides,0.50983,true\r
PM01.C1D36,PM01,C1D36,8,10,Streptococcus,0.00145,true\r
PM01.C1D36,PM01,C1D36,8,11,Oscillibacter,0.00463,true\r
PM01.C1D36,PM01,C1D36,8,12,Phascolarctobacterium,0.0134,true\r
PM01.C1D36,PM01,C1D36,8,13,Faecalibacterium,0.06072,true\r
PM01.C1D36,PM01,C1D36,8,14,Mediterraneibacter,0.0008,true\r
PM01.C1D36,PM01,C1D36,8,15,Akkermansia,0.00527,true\r
PM01.C1D36,PM01,C1D36,8,16,Phocaeicola,0.14475,true\r
PM01.C1D36,PM01,C1D36,8,17,Alistipes,0.02577,true\r
PM02.S1,PM02,Screen,0,0,Escherichia,0.01758,true\r
PM02.S1,PM02,Screen,0,1,Klebsiella,0.00402,true\r
PM02.S1,PM02,Screen,0,2,Enterobacter,9e-05,true\r
PM02.S1,PM02,Screen,0,3,Enterococcus,6e-05,true\r
PM02.S1,PM02,Screen,0,4,Citrobacter,0.0003,true\r
PM02.S1,PM02,Screen,0,5,Morganella,0,true\r
PM02.S1,PM02,Screen,0,6,Proteus,0.00024,true\r
PM02.S1,PM02,Screen,0,7,Haemophilus,0.00537,true\r
PM02.S1,PM02,Screen,0,8,Other,0.0613,true\r
PM02.S1,PM02,Screen,0,9,Bacteroides,0.86354,true\r
PM02.S1,PM02,Screen,0,10,Streptococcus,0.00248,true\r
PM02.S1,PM02,Screen,0,11,Oscillibacter,0.00019,true\r
PM02.S1,PM02,Screen,0,12,Phascolarctobacterium,0.03304,true\r
PM02.S1,PM02,Screen,0,13,Faecalibacterium,0.0003,true\r
PM02.S1,PM02,Screen,0,14,Mediterraneibacter,0.00081,true\r
PM02.S1,PM02,Screen,0,15,Akkermansia,8e-05,true\r
PM02.S1,PM02,Screen,0,16,Phocaeicola,0.00484,true\r
PM02.S1,PM02,Screen,0,17,Alistipes,0.00109,true\r
PM02.C1D01,PM02,C1D01,5,0,Escherichia,0.00468,true\r
PM02.C1D01,PM02,C1D01,5,1,Klebsiella,0.07706,true\r
PM02.C1D01,PM02,C1D01,5,2,Enterobacter,0.00937,true\r
PM02.C1D01,PM02,C1D01,5,3,Enterococcus,0.0001,true\r
PM02.C1D01,PM02,C1D01,5,4,Citrobacter,0.00019,true\r
PM02.C1D01,PM02,C1D01,5,5,Morganella,0,true\r
PM02.C1D01,PM02,C1D01,5,6,Proteus,7e-05,true\r
PM02.C1D01,PM02,C1D01,5,7,Haemophilus,0.01185,true\r
PM02.C1D01,PM02,C1D01,5,8,Other,0.06411,true\r
PM02.C1D01,PM02,C1D01,5,9,Bacteroides,0.47227,true\r
PM02.C1D01,PM02,C1D01,5,10,Streptococcus,0.0071,true\r
PM02.C1D01,PM02,C1D01,5,11,Oscillibacter,0.00018,true\r
PM02.C1D01,PM02,C1D01,5,12,Phascolarctobacterium,0.0225,true\r
PM02.C1D01,PM02,C1D01,5,13,Faecalibacterium,0.00025,true\r
PM02.C1D01,PM02,C1D01,5,14,Mediterraneibacter,0.01813,true\r
PM02.C1D01,PM02,C1D01,5,15,Akkermansia,6e-05,true\r
PM02.C1D01,PM02,C1D01,5,16,Phocaeicola,0.30506,true\r
PM02.C1D01,PM02,C1D01,5,17,Alistipes,0.0014,true\r
PM02.C1D02,PM02,C1D02,6,0,Escherichia,0.01256,true\r
PM02.C1D02,PM02,C1D02,6,1,Klebsiella,0.00619,true\r
PM02.C1D02,PM02,C1D02,6,2,Enterobacter,0.0002,true\r
PM02.C1D02,PM02,C1D02,6,3,Enterococcus,0.00845,true\r
PM02.C1D02,PM02,C1D02,6,4,Citrobacter,0.00012,true\r
PM02.C1D02,PM02,C1D02,6,5,Morganella,0,true\r
PM02.C1D02,PM02,C1D02,6,6,Proteus,6e-05,true\r
PM02.C1D02,PM02,C1D02,6,7,Haemophilus,0.05995,true\r
PM02.C1D02,PM02,C1D02,6,8,Other,0.36832,true\r
PM02.C1D02,PM02,C1D02,6,9,Bacteroides,0.20824,true\r
PM02.C1D02,PM02,C1D02,6,10,Streptococcus,0.01532,true\r
PM02.C1D02,PM02,C1D02,6,11,Oscillibacter,0.0013,true\r
PM02.C1D02,PM02,C1D02,6,12,Phascolarctobacterium,0.06225,true\r
PM02.C1D02,PM02,C1D02,6,13,Faecalibacterium,0.11179,true\r
PM02.C1D02,PM02,C1D02,6,14,Mediterraneibacter,0.03984,true\r
PM02.C1D02,PM02,C1D02,6,15,Akkermansia,0.01657,true\r
PM02.C1D02,PM02,C1D02,6,16,Phocaeicola,0.07718,true\r
PM02.C1D02,PM02,C1D02,6,17,Alistipes,0.00071,true\r
PM02.C1D15,PM02,C1D15,7,0,Escherichia,0.00151,true\r
PM02.C1D15,PM02,C1D15,7,1,Klebsiella,4e-05,true\r
PM02.C1D15,PM02,C1D15,7,2,Enterobacter,2e-05,true\r
PM02.C1D15,PM02,C1D15,7,3,Enterococcus,0.00019,true\r
PM02.C1D15,PM02,C1D15,7,4,Citrobacter,7e-05,true\r
PM02.C1D15,PM02,C1D15,7,5,Morganella,0,true\r
PM02.C1D15,PM02,C1D15,7,6,Proteus,1e-05,true\r
PM02.C1D15,PM02,C1D15,7,7,Haemophilus,0.00058,true\r
PM02.C1D15,PM02,C1D15,7,8,Other,0.05191,true\r
PM02.C1D15,PM02,C1D15,7,9,Bacteroides,0.50956,true\r
PM02.C1D15,PM02,C1D15,7,10,Streptococcus,0.00184,true\r
PM02.C1D15,PM02,C1D15,7,11,Oscillibacter,0.00244,true\r
PM02.C1D15,PM02,C1D15,7,12,Phascolarctobacterium,0.01682,true\r
PM02.C1D15,PM02,C1D15,7,13,Faecalibacterium,0.04561,true\r
PM02.C1D15,PM02,C1D15,7,14,Mediterraneibacter,0.00064,true\r
PM02.C1D15,PM02,C1D15,7,15,Akkermansia,0.12155,true\r
PM02.C1D15,PM02,C1D15,7,16,Phocaeicola,0.20461,true\r
PM02.C1D15,PM02,C1D15,7,17,Alistipes,0.01178,true\r
PM02.C1D36,PM02,C1D36,8,0,Escherichia,0.00318,true\r
PM02.C1D36,PM02,C1D36,8,1,Klebsiella,0.02098,true\r
PM02.C1D36,PM02,C1D36,8,2,Enterobacter,0.00243,true\r
PM02.C1D36,PM02,C1D36,8,3,Enterococcus,0.00013,true\r
PM02.C1D36,PM02,C1D36,8,4,Citrobacter,0.00012,true\r
PM02.C1D36,PM02,C1D36,8,5,Morganella,0,true\r
PM02.C1D36,PM02,C1D36,8,6,Proteus,3e-05,true\r
PM02.C1D36,PM02,C1D36,8,7,Haemophilus,0.00476,true\r
PM02.C1D36,PM02,C1D36,8,8,Other,0.08306,true\r
PM02.C1D36,PM02,C1D36,8,9,Bacteroides,0.45497,true\r
PM02.C1D36,PM02,C1D36,8,10,Streptococcus,0.00411,true\r
PM02.C1D36,PM02,C1D36,8,11,Oscillibacter,0.00711,true\r
PM02.C1D36,PM02,C1D36,8,12,Phascolarctobacterium,0.02203,true\r
PM02.C1D36,PM02,C1D36,8,13,Faecalibacterium,0.0016,true\r
PM02.C1D36,PM02,C1D36,8,14,Mediterraneibacter,0.00651,true\r
PM02.C1D36,PM02,C1D36,8,15,Akkermansia,0.17885,true\r
PM02.C1D36,PM02,C1D36,8,16,Phocaeicola,0.19623,true\r
PM02.C1D36,PM02,C1D36,8,17,Alistipes,0.00135,true\r
PM03.S1,PM03,Screen,0,0,Escherichia,2e-05,true\r
PM03.S1,PM03,Screen,0,1,Klebsiella,0.00106,true\r
PM03.S1,PM03,Screen,0,2,Enterobacter,5e-05,true\r
PM03.S1,PM03,Screen,0,3,Enterococcus,0.07722,true\r
PM03.S1,PM03,Screen,0,4,Citrobacter,4e-05,true\r
PM03.S1,PM03,Screen,0,5,Morganella,0,true\r
PM03.S1,PM03,Screen,0,6,Proteus,0,true\r
PM03.S1,PM03,Screen,0,7,Haemophilus,0,true\r
PM03.S1,PM03,Screen,0,8,Other,0.34871,true\r
PM03.S1,PM03,Screen,0,9,Bacteroides,0.15567,true\r
PM03.S1,PM03,Screen,0,10,Streptococcus,0.00211,true\r
PM03.S1,PM03,Screen,0,11,Oscillibacter,0.00107,true\r
PM03.S1,PM03,Screen,0,12,Phascolarctobacterium,2e-05,true\r
PM03.S1,PM03,Screen,0,13,Faecalibacterium,0.00146,true\r
PM03.S1,PM03,Screen,0,14,Mediterraneibacter,0.04152,true\r
PM03.S1,PM03,Screen,0,15,Akkermansia,3e-05,true\r
PM03.S1,PM03,Screen,0,16,Phocaeicola,0.36073,true\r
PM03.S1,PM03,Screen,0,17,Alistipes,0.00393,true\r
PM03.C0D01,PM03,C0D01,1,0,Escherichia,5e-05,true\r
PM03.C0D01,PM03,C0D01,1,1,Klebsiella,0.00025,true\r
PM03.C0D01,PM03,C0D01,1,2,Enterobacter,2e-05,true\r
PM03.C0D01,PM03,C0D01,1,3,Enterococcus,0.00039,true\r
PM03.C0D01,PM03,C0D01,1,4,Citrobacter,0.0006,true\r
PM03.C0D01,PM03,C0D01,1,5,Morganella,1e-05,true\r
PM03.C0D01,PM03,C0D01,1,6,Proteus,0,true\r
PM03.C0D01,PM03,C0D01,1,7,Haemophilus,0.00104,true\r
PM03.C0D01,PM03,C0D01,1,8,Other,0.28591,true\r
PM03.C0D01,PM03,C0D01,1,9,Bacteroides,0.48066,true\r
PM03.C0D01,PM03,C0D01,1,10,Streptococcus,0.00048,true\r
PM03.C0D01,PM03,C0D01,1,11,Oscillibacter,0.00045,true\r
PM03.C0D01,PM03,C0D01,1,12,Phascolarctobacterium,0.01381,true\r
PM03.C0D01,PM03,C0D01,1,13,Faecalibacterium,0.00048,true\r
PM03.C0D01,PM03,C0D01,1,14,Mediterraneibacter,0.03903,true\r
PM03.C0D01,PM03,C0D01,1,15,Akkermansia,3e-05,true\r
PM03.C0D01,PM03,C0D01,1,16,Phocaeicola,0.16171,true\r
PM03.C0D01,PM03,C0D01,1,17,Alistipes,0.00867,true\r
PM03.C0D02,PM03,C0D02,2,0,Escherichia,5e-05,true\r
PM03.C0D02,PM03,C0D02,2,1,Klebsiella,0.01316,true\r
PM03.C0D02,PM03,C0D02,2,2,Enterobacter,3e-05,true\r
PM03.C0D02,PM03,C0D02,2,3,Enterococcus,5e-05,true\r
PM03.C0D02,PM03,C0D02,2,4,Citrobacter,0.00265,true\r
PM03.C0D02,PM03,C0D02,2,5,Morganella,0,true\r
PM03.C0D02,PM03,C0D02,2,6,Proteus,0,true\r
PM03.C0D02,PM03,C0D02,2,7,Haemophilus,1e-05,true\r
PM03.C0D02,PM03,C0D02,2,8,Other,0.23318,true\r
PM03.C0D02,PM03,C0D02,2,9,Bacteroides,0.36412,true\r
PM03.C0D02,PM03,C0D02,2,10,Streptococcus,0.00022,true\r
PM03.C0D02,PM03,C0D02,2,11,Oscillibacter,0.00195,true\r
PM03.C0D02,PM03,C0D02,2,12,Phascolarctobacterium,0.00933,true\r
PM03.C0D02,PM03,C0D02,2,13,Faecalibacterium,0.00047,true\r
PM03.C0D02,PM03,C0D02,2,14,Mediterraneibacter,0.00676,true\r
PM03.C0D02,PM03,C0D02,2,15,Akkermansia,2e-05,true\r
PM03.C0D02,PM03,C0D02,2,16,Phocaeicola,0.35405,true\r
PM03.C0D02,PM03,C0D02,2,17,Alistipes,0.00909,true\r
PM03.C0D15,PM03,C0D15,3,0,Escherichia,3e-05,true\r
PM03.C0D15,PM03,C0D15,3,1,Klebsiella,0.0009,true\r
PM03.C0D15,PM03,C0D15,3,2,Enterobacter,2e-05,true\r
PM03.C0D15,PM03,C0D15,3,3,Enterococcus,0.01404,true\r
PM03.C0D15,PM03,C0D15,3,4,Citrobacter,0.00013,true\r
PM03.C0D15,PM03,C0D15,3,5,Morganella,0,true\r
PM03.C0D15,PM03,C0D15,3,6,Proteus,0,true\r
PM03.C0D15,PM03,C0D15,3,7,Haemophilus,0,true\r
PM03.C0D15,PM03,C0D15,3,8,Other,0.08128,true\r
PM03.C0D15,PM03,C0D15,3,9,Bacteroides,0.5626,true\r
PM03.C0D15,PM03,C0D15,3,10,Streptococcus,0.00041,true\r
PM03.C0D15,PM03,C0D15,3,11,Oscillibacter,0.00012,true\r
PM03.C0D15,PM03,C0D15,3,12,Phascolarctobacterium,0.00025,true\r
PM03.C0D15,PM03,C0D15,3,13,Faecalibacterium,0.0001,true\r
PM03.C0D15,PM03,C0D15,3,14,Mediterraneibacter,0.06752,true\r
PM03.C0D15,PM03,C0D15,3,15,Akkermansia,2e-05,true\r
PM03.C0D15,PM03,C0D15,3,16,Phocaeicola,0.26292,true\r
PM03.C0D15,PM03,C0D15,3,17,Alistipes,0.00421,true\r
PM03.C0D36,PM03,C0D36,4,0,Escherichia,0.00047,true\r
PM03.C0D36,PM03,C0D36,4,1,Klebsiella,0.0205,true\r
PM03.C0D36,PM03,C0D36,4,2,Enterobacter,4e-05,true\r
PM03.C0D36,PM03,C0D36,4,3,Enterococcus,0.00464,true\r
PM03.C0D36,PM03,C0D36,4,4,Citrobacter,0.00012,true\r
PM03.C0D36,PM03,C0D36,4,5,Morganella,0,true\r
PM03.C0D36,PM03,C0D36,4,6,Proteus,0,true\r
PM03.C0D36,PM03,C0D36,4,7,Haemophilus,9e-05,true\r
PM03.C0D36,PM03,C0D36,4,8,Other,0.09218,true\r
PM03.C0D36,PM03,C0D36,4,9,Bacteroides,0.62986,true\r
PM03.C0D36,PM03,C0D36,4,10,Streptococcus,7e-05,true\r
PM03.C0D36,PM03,C0D36,4,11,Oscillibacter,9e-05,true\r
PM03.C0D36,PM03,C0D36,4,12,Phascolarctobacterium,0,true\r
PM03.C0D36,PM03,C0D36,4,13,Faecalibacterium,0.00011,true\r
PM03.C0D36,PM03,C0D36,4,14,Mediterraneibacter,0.00909,true\r
PM03.C0D36,PM03,C0D36,4,15,Akkermansia,2e-05,true\r
PM03.C0D36,PM03,C0D36,4,16,Phocaeicola,0.218,true\r
PM03.C0D36,PM03,C0D36,4,17,Alistipes,0.02131,true\r
PM03.C1D01,PM03,C1D01,5,0,Escherichia,0.00017,true\r
PM03.C1D01,PM03,C1D01,5,1,Klebsiella,0.01056,true\r
PM03.C1D01,PM03,C1D01,5,2,Enterobacter,1e-05,true\r
PM03.C1D01,PM03,C1D01,5,3,Enterococcus,0.00167,true\r
PM03.C1D01,PM03,C1D01,5,4,Citrobacter,6e-05,true\r
PM03.C1D01,PM03,C1D01,5,5,Morganella,1e-05,true\r
PM03.C1D01,PM03,C1D01,5,6,Proteus,0,true\r
PM03.C1D01,PM03,C1D01,5,7,Haemophilus,3e-05,true\r
PM03.C1D01,PM03,C1D01,5,8,Other,0.08638,true\r
PM03.C1D01,PM03,C1D01,5,9,Bacteroides,0.71653,true\r
PM03.C1D01,PM03,C1D01,5,10,Streptococcus,0.00042,true\r
PM03.C1D01,PM03,C1D01,5,11,Oscillibacter,5e-05,true\r
PM03.C1D01,PM03,C1D01,5,12,Phascolarctobacterium,0,true\r
PM03.C1D01,PM03,C1D01,5,13,Faecalibacterium,6e-05,true\r
PM03.C1D01,PM03,C1D01,5,14,Mediterraneibacter,0.02616,true\r
PM03.C1D01,PM03,C1D01,5,15,Akkermansia,2e-05,true\r
PM03.C1D01,PM03,C1D01,5,16,Phocaeicola,0.14939,true\r
PM03.C1D01,PM03,C1D01,5,17,Alistipes,0.00472,true\r
PM03.C1D02,PM03,C1D02,6,0,Escherichia,0.00091,true\r
PM03.C1D02,PM03,C1D02,6,1,Klebsiella,0.18756,true\r
PM03.C1D02,PM03,C1D02,6,2,Enterobacter,0.00026,true\r
PM03.C1D02,PM03,C1D02,6,3,Enterococcus,0.00022,true\r
PM03.C1D02,PM03,C1D02,6,4,Citrobacter,0.00013,true\r
PM03.C1D02,PM03,C1D02,6,5,Morganella,0,true\r
PM03.C1D02,PM03,C1D02,6,6,Proteus,0,true\r
PM03.C1D02,PM03,C1D02,6,7,Haemophilus,1e-05,true\r
PM03.C1D02,PM03,C1D02,6,8,Other,0.08616,true\r
PM03.C1D02,PM03,C1D02,6,9,Bacteroides,0.46264,true\r
PM03.C1D02,PM03,C1D02,6,10,Streptococcus,0.00033,true\r
PM03.C1D02,PM03,C1D02,6,11,Oscillibacter,8e-05,true\r
PM03.C1D02,PM03,C1D02,6,12,Phascolarctobacterium,0.0193,true\r
PM03.C1D02,PM03,C1D02,6,13,Faecalibacterium,0.00163,true\r
PM03.C1D02,PM03,C1D02,6,14,Mediterraneibacter,0.00492,true\r
PM03.C1D02,PM03,C1D02,6,15,Akkermansia,0.00059,true\r
PM03.C1D02,PM03,C1D02,6,16,Phocaeicola,0.22171,true\r
PM03.C1D02,PM03,C1D02,6,17,Alistipes,0.01004,true\r
PM03.C1D15,PM03,C1D15,7,0,Escherichia,6e-05,true\r
PM03.C1D15,PM03,C1D15,7,1,Klebsiella,6e-05,true\r
PM03.C1D15,PM03,C1D15,7,2,Enterobacter,3e-05,true\r
PM03.C1D15,PM03,C1D15,7,3,Enterococcus,0.01302,true\r
PM03.C1D15,PM03,C1D15,7,4,Citrobacter,9e-05,true\r
PM03.C1D15,PM03,C1D15,7,5,Morganella,1e-05,true\r
PM03.C1D15,PM03,C1D15,7,6,Proteus,0,true\r
PM03.C1D15,PM03,C1D15,7,7,Haemophilus,0,true\r
PM03.C1D15,PM03,C1D15,7,8,Other,0.20021,true\r
PM03.C1D15,PM03,C1D15,7,9,Bacteroides,0.53378,true\r
PM03.C1D15,PM03,C1D15,7,10,Streptococcus,0.00097,true\r
PM03.C1D15,PM03,C1D15,7,11,Oscillibacter,0.00053,true\r
PM03.C1D15,PM03,C1D15,7,12,Phascolarctobacterium,0.00813,true\r
PM03.C1D15,PM03,C1D15,7,13,Faecalibacterium,0.00609,true\r
PM03.C1D15,PM03,C1D15,7,14,Mediterraneibacter,0.08866,true\r
PM03.C1D15,PM03,C1D15,7,15,Akkermansia,5e-05,true\r
PM03.C1D15,PM03,C1D15,7,16,Phocaeicola,0.13339,true\r
PM03.C1D15,PM03,C1D15,7,17,Alistipes,0.00477,true\r
PM03.C1D36,PM03,C1D36,8,0,Escherichia,0.04364,true\r
PM03.C1D36,PM03,C1D36,8,1,Klebsiella,0.00105,true\r
PM03.C1D36,PM03,C1D36,8,2,Enterobacter,0.00031,true\r
PM03.C1D36,PM03,C1D36,8,3,Enterococcus,0.00048,true\r
PM03.C1D36,PM03,C1D36,8,4,Citrobacter,0.00026,true\r
PM03.C1D36,PM03,C1D36,8,5,Morganella,2e-05,true\r
PM03.C1D36,PM03,C1D36,8,6,Proteus,3e-05,true\r
PM03.C1D36,PM03,C1D36,8,7,Haemophilus,2e-05,true\r
PM03.C1D36,PM03,C1D36,8,8,Other,0.53035,true\r
PM03.C1D36,PM03,C1D36,8,9,Bacteroides,0.09814,true\r
PM03.C1D36,PM03,C1D36,8,10,Streptococcus,0.04429,true\r
PM03.C1D36,PM03,C1D36,8,11,Oscillibacter,0.01448,true\r
PM03.C1D36,PM03,C1D36,8,12,Phascolarctobacterium,0.03246,true\r
PM03.C1D36,PM03,C1D36,8,13,Faecalibacterium,0.00406,true\r
PM03.C1D36,PM03,C1D36,8,14,Mediterraneibacter,0.01149,true\r
PM03.C1D36,PM03,C1D36,8,15,Akkermansia,8e-05,true\r
PM03.C1D36,PM03,C1D36,8,16,Phocaeicola,0.11395,true\r
PM03.C1D36,PM03,C1D36,8,17,Alistipes,0.08312,true\r
PM03.C2D01,PM03,C2D01,9,0,Escherichia,0.00754,true\r
PM03.C2D01,PM03,C2D01,9,1,Klebsiella,0.00025,true\r
PM03.C2D01,PM03,C2D01,9,2,Enterobacter,6e-05,true\r
PM03.C2D01,PM03,C2D01,9,3,Enterococcus,8e-05,true\r
PM03.C2D01,PM03,C2D01,9,4,Citrobacter,0.0001,true\r
PM03.C2D01,PM03,C2D01,9,5,Morganella,1e-05,true\r
PM03.C2D01,PM03,C2D01,9,6,Proteus,0,true\r
PM03.C2D01,PM03,C2D01,9,7,Haemophilus,0.00044,true\r
PM03.C2D01,PM03,C2D01,9,8,Other,0.10227,true\r
PM03.C2D01,PM03,C2D01,9,9,Bacteroides,0.4865,true\r
PM03.C2D01,PM03,C2D01,9,10,Streptococcus,0.00067,true\r
PM03.C2D01,PM03,C2D01,9,11,Oscillibacter,0.00132,true\r
PM03.C2D01,PM03,C2D01,9,12,Phascolarctobacterium,0.00966,true\r
PM03.C2D01,PM03,C2D01,9,13,Faecalibacterium,0.03237,true\r
PM03.C2D01,PM03,C2D01,9,14,Mediterraneibacter,0.00287,true\r
PM03.C2D01,PM03,C2D01,9,15,Akkermansia,3e-05,true\r
PM03.C2D01,PM03,C2D01,9,16,Phocaeicola,0.30849,true\r
PM03.C2D01,PM03,C2D01,9,17,Alistipes,0.03528,true\r
PM03.C2D02,PM03,C2D02,10,0,Escherichia,0.04481,true\r
PM03.C2D02,PM03,C2D02,10,1,Klebsiella,0.0002,true\r
PM03.C2D02,PM03,C2D02,10,2,Enterobacter,0.0001,true\r
PM03.C2D02,PM03,C2D02,10,3,Enterococcus,0.0002,true\r
PM03.C2D02,PM03,C2D02,10,4,Citrobacter,0.00019,true\r
PM03.C2D02,PM03,C2D02,10,5,Morganella,1e-05,true\r
PM03.C2D02,PM03,C2D02,10,6,Proteus,0,true\r
PM03.C2D02,PM03,C2D02,10,7,Haemophilus,0.00062,true\r
PM03.C2D02,PM03,C2D02,10,8,Other,0.08312,true\r
PM03.C2D02,PM03,C2D02,10,9,Bacteroides,0.53477,true\r
PM03.C2D02,PM03,C2D02,10,10,Streptococcus,0.00073,true\r
PM03.C2D02,PM03,C2D02,10,11,Oscillibacter,0.00142,true\r
PM03.C2D02,PM03,C2D02,10,12,Phascolarctobacterium,0.0089,true\r
PM03.C2D02,PM03,C2D02,10,13,Faecalibacterium,0.01189,true\r
PM03.C2D02,PM03,C2D02,10,14,Mediterraneibacter,0.0049,true\r
PM03.C2D02,PM03,C2D02,10,15,Akkermansia,0.10686,true\r
PM03.C2D02,PM03,C2D02,10,16,Phocaeicola,0.14724,true\r
PM03.C2D02,PM03,C2D02,10,17,Alistipes,0.03457,true\r
PM03.C2D15,PM03,C2D15,11,0,Escherichia,0.01991,true\r
PM03.C2D15,PM03,C2D15,11,1,Klebsiella,0.0001,true\r
PM03.C2D15,PM03,C2D15,11,2,Enterobacter,7e-05,true\r
PM03.C2D15,PM03,C2D15,11,3,Enterococcus,0.00019,true\r
PM03.C2D15,PM03,C2D15,11,4,Citrobacter,0.0001,true\r
PM03.C2D15,PM03,C2D15,11,5,Morganella,1e-05,true\r
PM03.C2D15,PM03,C2D15,11,6,Proteus,0,true\r
PM03.C2D15,PM03,C2D15,11,7,Haemophilus,0,true\r
PM03.C2D15,PM03,C2D15,11,8,Other,0.15498,true\r
PM03.C2D15,PM03,C2D15,11,9,Bacteroides,0.28282,true\r
PM03.C2D15,PM03,C2D15,11,10,Streptococcus,0.00582,true\r
PM03.C2D15,PM03,C2D15,11,11,Oscillibacter,0.01257,true\r
PM03.C2D15,PM03,C2D15,11,12,Phascolarctobacterium,0.02473,true\r
PM03.C2D15,PM03,C2D15,11,13,Faecalibacterium,0.00587,true\r
PM03.C2D15,PM03,C2D15,11,14,Mediterraneibacter,0.00207,true\r
PM03.C2D15,PM03,C2D15,11,15,Akkermansia,0.18903,true\r
PM03.C2D15,PM03,C2D15,11,16,Phocaeicola,0.16917,true\r
PM03.C2D15,PM03,C2D15,11,17,Alistipes,0.09227,true\r
PM03.C2D36,PM03,C2D36,12,0,Escherichia,0.00159,true\r
PM03.C2D36,PM03,C2D36,12,1,Klebsiella,0.0002,true\r
PM03.C2D36,PM03,C2D36,12,2,Enterobacter,0.00012,true\r
PM03.C2D36,PM03,C2D36,12,3,Enterococcus,0.00081,true\r
PM03.C2D36,PM03,C2D36,12,4,Citrobacter,0.00014,true\r
PM03.C2D36,PM03,C2D36,12,5,Morganella,1e-05,true\r
PM03.C2D36,PM03,C2D36,12,6,Proteus,2e-05,true\r
PM03.C2D36,PM03,C2D36,12,7,Haemophilus,4e-05,true\r
PM03.C2D36,PM03,C2D36,12,8,Other,0.25288,true\r
PM03.C2D36,PM03,C2D36,12,9,Bacteroides,0.26579,true\r
PM03.C2D36,PM03,C2D36,12,10,Streptococcus,0.02788,true\r
PM03.C2D36,PM03,C2D36,12,11,Oscillibacter,0.0049,true\r
PM03.C2D36,PM03,C2D36,12,12,Phascolarctobacterium,0.06615,true\r
PM03.C2D36,PM03,C2D36,12,13,Faecalibacterium,0.01467,true\r
PM03.C2D36,PM03,C2D36,12,14,Mediterraneibacter,0.01559,true\r
PM03.C2D36,PM03,C2D36,12,15,Akkermansia,0.00811,true\r
PM03.C2D36,PM03,C2D36,12,16,Phocaeicola,0.24443,true\r
PM03.C2D36,PM03,C2D36,12,17,Alistipes,0.06966,true\r
PM04.S1,PM04,Screen,0,0,Escherichia,0.03934,true\r
PM04.S1,PM04,Screen,0,1,Klebsiella,7e-05,true\r
PM04.S1,PM04,Screen,0,2,Enterobacter,4e-05,true\r
PM04.S1,PM04,Screen,0,3,Enterococcus,7e-05,true\r
PM04.S1,PM04,Screen,0,4,Citrobacter,0.00111,true\r
PM04.S1,PM04,Screen,0,5,Morganella,1e-05,true\r
PM04.S1,PM04,Screen,0,6,Proteus,0,true\r
PM04.S1,PM04,Screen,0,7,Haemophilus,8e-05,true\r
PM04.S1,PM04,Screen,0,8,Other,0.08052,true\r
PM04.S1,PM04,Screen,0,9,Bacteroides,0.51335,true\r
PM04.S1,PM04,Screen,0,10,Streptococcus,0.00019,true\r
PM04.S1,PM04,Screen,0,11,Oscillibacter,0.00172,true\r
PM04.S1,PM04,Screen,0,12,Phascolarctobacterium,0.02254,true\r
PM04.S1,PM04,Screen,0,13,Faecalibacterium,0.00011,true\r
PM04.S1,PM04,Screen,0,14,Mediterraneibacter,0.00049,true\r
PM04.S1,PM04,Screen,0,15,Akkermansia,0.02341,true\r
PM04.S1,PM04,Screen,0,16,Phocaeicola,0.31256,true\r
PM04.S1,PM04,Screen,0,17,Alistipes,0.0015,true\r
PM04.C1D01,PM04,C1D01,5,0,Escherichia,0.00038,true\r
PM04.C1D01,PM04,C1D01,5,1,Klebsiella,0.00012,true\r
PM04.C1D01,PM04,C1D01,5,2,Enterobacter,7e-05,true\r
PM04.C1D01,PM04,C1D01,5,3,Enterococcus,0.00082,true\r
PM04.C1D01,PM04,C1D01,5,4,Citrobacter,0.00011,true\r
PM04.C1D01,PM04,C1D01,5,5,Morganella,1e-05,true\r
PM04.C1D01,PM04,C1D01,5,6,Proteus,7e-05,true\r
PM04.C1D01,PM04,C1D01,5,7,Haemophilus,0.00018,true\r
PM04.C1D01,PM04,C1D01,5,8,Other,0.25186,true\r
PM04.C1D01,PM04,C1D01,5,9,Bacteroides,0.20025,true\r
PM04.C1D01,PM04,C1D01,5,10,Streptococcus,0.00272,true\r
PM04.C1D01,PM04,C1D01,5,11,Oscillibacter,0.00325,true\r
PM04.C1D01,PM04,C1D01,5,12,Phascolarctobacterium,0.02693,true\r
PM04.C1D01,PM04,C1D01,5,13,Faecalibacterium,0.00063,true\r
PM04.C1D01,PM04,C1D01,5,14,Mediterraneibacter,0.21508,true\r
PM04.C1D01,PM04,C1D01,5,15,Akkermansia,1e-05,true\r
PM04.C1D01,PM04,C1D01,5,16,Phocaeicola,0.25504,true\r
PM04.C1D01,PM04,C1D01,5,17,Alistipes,0.00064,true\r
PM04.C1D02,PM04,C1D02,6,0,Escherichia,0.00103,true\r
PM04.C1D02,PM04,C1D02,6,1,Klebsiella,3e-05,true\r
PM04.C1D02,PM04,C1D02,6,2,Enterobacter,2e-05,true\r
PM04.C1D02,PM04,C1D02,6,3,Enterococcus,6e-05,true\r
PM04.C1D02,PM04,C1D02,6,4,Citrobacter,9e-05,true\r
PM04.C1D02,PM04,C1D02,6,5,Morganella,0,true\r
PM04.C1D02,PM04,C1D02,6,6,Proteus,0,true\r
PM04.C1D02,PM04,C1D02,6,7,Haemophilus,7e-05,true\r
PM04.C1D02,PM04,C1D02,6,8,Other,0.09979,true\r
PM04.C1D02,PM04,C1D02,6,9,Bacteroides,0.47368,true\r
PM04.C1D02,PM04,C1D02,6,10,Streptococcus,0.00039,true\r
PM04.C1D02,PM04,C1D02,6,11,Oscillibacter,0.0003,true\r
PM04.C1D02,PM04,C1D02,6,12,Phascolarctobacterium,0.01123,true\r
PM04.C1D02,PM04,C1D02,6,13,Faecalibacterium,0.00075,true\r
PM04.C1D02,PM04,C1D02,6,14,Mediterraneibacter,0.00155,true\r
PM04.C1D02,PM04,C1D02,6,15,Akkermansia,0.00181,true\r
PM04.C1D02,PM04,C1D02,6,16,Phocaeicola,0.39825,true\r
PM04.C1D02,PM04,C1D02,6,17,Alistipes,0.00525,true\r
PM04.C1D15,PM04,C1D15,7,0,Escherichia,0.01873,true\r
PM04.C1D15,PM04,C1D15,7,1,Klebsiella,0.07441,true\r
PM04.C1D15,PM04,C1D15,7,2,Enterobacter,0.00037,true\r
PM04.C1D15,PM04,C1D15,7,3,Enterococcus,0.00018,true\r
PM04.C1D15,PM04,C1D15,7,4,Citrobacter,0.00032,true\r
PM04.C1D15,PM04,C1D15,7,5,Morganella,1e-05,true\r
PM04.C1D15,PM04,C1D15,7,6,Proteus,2e-05,true\r
PM04.C1D15,PM04,C1D15,7,7,Haemophilus,3e-05,true\r
PM04.C1D15,PM04,C1D15,7,8,Other,0.11653,true\r
PM04.C1D15,PM04,C1D15,7,9,Bacteroides,0.4605,true\r
PM04.C1D15,PM04,C1D15,7,10,Streptococcus,0.00069,true\r
PM04.C1D15,PM04,C1D15,7,11,Oscillibacter,0.00112,true\r
PM04.C1D15,PM04,C1D15,7,12,Phascolarctobacterium,0.03075,true\r
PM04.C1D15,PM04,C1D15,7,13,Faecalibacterium,0.00762,true\r
PM04.C1D15,PM04,C1D15,7,14,Mediterraneibacter,0.00095,true\r
PM04.C1D15,PM04,C1D15,7,15,Akkermansia,0.04205,true\r
PM04.C1D15,PM04,C1D15,7,16,Phocaeicola,0.23186,true\r
PM04.C1D15,PM04,C1D15,7,17,Alistipes,0.00554,true\r
PM04.C1D36,PM04,C1D36,8,0,Escherichia,0.07264,true\r
PM04.C1D36,PM04,C1D36,8,1,Klebsiella,0.00058,true\r
PM04.C1D36,PM04,C1D36,8,2,Enterobacter,0.00031,true\r
PM04.C1D36,PM04,C1D36,8,3,Enterococcus,0.00014,true\r
PM04.C1D36,PM04,C1D36,8,4,Citrobacter,0.00034,true\r
PM04.C1D36,PM04,C1D36,8,5,Morganella,1e-05,true\r
PM04.C1D36,PM04,C1D36,8,6,Proteus,2e-05,true\r
PM04.C1D36,PM04,C1D36,8,7,Haemophilus,1e-05,true\r
PM04.C1D36,PM04,C1D36,8,8,Other,0.1014,true\r
PM04.C1D36,PM04,C1D36,8,9,Bacteroides,0.51387,true\r
PM04.C1D36,PM04,C1D36,8,10,Streptococcus,0.00798,true\r
PM04.C1D36,PM04,C1D36,8,11,Oscillibacter,0.00114,true\r
PM04.C1D36,PM04,C1D36,8,12,Phascolarctobacterium,0.04041,true\r
PM04.C1D36,PM04,C1D36,8,13,Faecalibacterium,0.01493,true\r
PM04.C1D36,PM04,C1D36,8,14,Mediterraneibacter,0.00089,true\r
PM04.C1D36,PM04,C1D36,8,15,Akkermansia,7e-05,true\r
PM04.C1D36,PM04,C1D36,8,16,Phocaeicola,0.21641,true\r
PM04.C1D36,PM04,C1D36,8,17,Alistipes,0.00869,true\r
PM04.C2D01,PM04,C2D01,9,0,Escherichia,0.00439,true\r
PM04.C2D01,PM04,C2D01,9,1,Klebsiella,0.00017,true\r
PM04.C2D01,PM04,C2D01,9,2,Enterobacter,0.00072,true\r
PM04.C2D01,PM04,C2D01,9,3,Enterococcus,0.00032,true\r
PM04.C2D01,PM04,C2D01,9,4,Citrobacter,0.00015,true\r
PM04.C2D01,PM04,C2D01,9,5,Morganella,2e-05,true\r
PM04.C2D01,PM04,C2D01,9,6,Proteus,1e-05,true\r
PM04.C2D01,PM04,C2D01,9,7,Haemophilus,0.00142,true\r
PM04.C2D01,PM04,C2D01,9,8,Other,0.17459,true\r
PM04.C2D01,PM04,C2D01,9,9,Bacteroides,0.42679,true\r
PM04.C2D01,PM04,C2D01,9,10,Streptococcus,0.00367,true\r
PM04.C2D01,PM04,C2D01,9,11,Oscillibacter,0.0021,true\r
PM04.C2D01,PM04,C2D01,9,12,Phascolarctobacterium,0.01671,true\r
PM04.C2D01,PM04,C2D01,9,13,Faecalibacterium,0.07533,true\r
PM04.C2D01,PM04,C2D01,9,14,Mediterraneibacter,0.00593,true\r
PM04.C2D01,PM04,C2D01,9,15,Akkermansia,0.00563,true\r
PM04.C2D01,PM04,C2D01,9,16,Phocaeicola,0.23888,true\r
PM04.C2D01,PM04,C2D01,9,17,Alistipes,0.00405,true\r
PM04.C2D02,PM04,C2D02,10,0,Escherichia,0.01636,true\r
PM04.C2D02,PM04,C2D02,10,1,Klebsiella,0.00971,true\r
PM04.C2D02,PM04,C2D02,10,2,Enterobacter,0.01182,true\r
PM04.C2D02,PM04,C2D02,10,3,Enterococcus,8e-05,true\r
PM04.C2D02,PM04,C2D02,10,4,Citrobacter,0.00018,true\r
PM04.C2D02,PM04,C2D02,10,5,Morganella,0,true\r
PM04.C2D02,PM04,C2D02,10,6,Proteus,0,true\r
PM04.C2D02,PM04,C2D02,10,7,Haemophilus,0.00392,true\r
PM04.C2D02,PM04,C2D02,10,8,Other,0.09659,true\r
PM04.C2D02,PM04,C2D02,10,9,Bacteroides,0.33534,true\r
PM04.C2D02,PM04,C2D02,10,10,Streptococcus,0.00242,true\r
PM04.C2D02,PM04,C2D02,10,11,Oscillibacter,0.00072,true\r
PM04.C2D02,PM04,C2D02,10,12,Phascolarctobacterium,0.01531,true\r
PM04.C2D02,PM04,C2D02,10,13,Faecalibacterium,0.00369,true\r
PM04.C2D02,PM04,C2D02,10,14,Mediterraneibacter,0.00322,true\r
PM04.C2D02,PM04,C2D02,10,15,Akkermansia,0.2726,true\r
PM04.C2D02,PM04,C2D02,10,16,Phocaeicola,0.21077,true\r
PM04.C2D02,PM04,C2D02,10,17,Alistipes,0.0068,true\r
PM04.C2D15,PM04,C2D15,11,0,Escherichia,0.17013,true\r
PM04.C2D15,PM04,C2D15,11,1,Klebsiella,0.00022,true\r
PM04.C2D15,PM04,C2D15,11,2,Enterobacter,0.00024,true\r
PM04.C2D15,PM04,C2D15,11,3,Enterococcus,0.00015,true\r
PM04.C2D15,PM04,C2D15,11,4,Citrobacter,0.00031,true\r
PM04.C2D15,PM04,C2D15,11,5,Morganella,1e-05,true\r
PM04.C2D15,PM04,C2D15,11,6,Proteus,1e-05,true\r
PM04.C2D15,PM04,C2D15,11,7,Haemophilus,1e-05,true\r
PM04.C2D15,PM04,C2D15,11,8,Other,0.12154,true\r
PM04.C2D15,PM04,C2D15,11,9,Bacteroides,0.36699,true\r
PM04.C2D15,PM04,C2D15,11,10,Streptococcus,0.01159,true\r
PM04.C2D15,PM04,C2D15,11,11,Oscillibacter,0.00212,true\r
PM04.C2D15,PM04,C2D15,11,12,Phascolarctobacterium,0.03946,true\r
PM04.C2D15,PM04,C2D15,11,13,Faecalibacterium,0.00694,true\r
PM04.C2D15,PM04,C2D15,11,14,Mediterraneibacter,0.00112,true\r
PM04.C2D15,PM04,C2D15,11,15,Akkermansia,0.10114,true\r
PM04.C2D15,PM04,C2D15,11,16,Phocaeicola,0.14809,true\r
PM04.C2D15,PM04,C2D15,11,17,Alistipes,0.01259,true\r
PM04.C2D36,PM04,C2D36,12,0,Escherichia,0.09934,true\r
PM04.C2D36,PM04,C2D36,12,1,Klebsiella,0.02195,true\r
PM04.C2D36,PM04,C2D36,12,2,Enterobacter,0.00016,true\r
PM04.C2D36,PM04,C2D36,12,3,Enterococcus,0.00022,true\r
PM04.C2D36,PM04,C2D36,12,4,Citrobacter,0.00028,true\r
PM04.C2D36,PM04,C2D36,12,5,Morganella,1e-05,true\r
PM04.C2D36,PM04,C2D36,12,6,Proteus,1e-05,true\r
PM04.C2D36,PM04,C2D36,12,7,Haemophilus,1e-05,true\r
PM04.C2D36,PM04,C2D36,12,8,Other,0.12846,true\r
PM04.C2D36,PM04,C2D36,12,9,Bacteroides,0.28614,true\r
PM04.C2D36,PM04,C2D36,12,10,Streptococcus,0.00139,true\r
PM04.C2D36,PM04,C2D36,12,11,Oscillibacter,0.00349,true\r
PM04.C2D36,PM04,C2D36,12,12,Phascolarctobacterium,0.02422,true\r
PM04.C2D36,PM04,C2D36,12,13,Faecalibacterium,0.02206,true\r
PM04.C2D36,PM04,C2D36,12,14,Mediterraneibacter,0.00224,true\r
PM04.C2D36,PM04,C2D36,12,15,Akkermansia,0.26786,true\r
PM04.C2D36,PM04,C2D36,12,16,Phocaeicola,0.10894,true\r
PM04.C2D36,PM04,C2D36,12,17,Alistipes,0.01087,true\r
PM05.S1,PM05,Screen,0,0,Escherichia,0.18468,true\r
PM05.S1,PM05,Screen,0,1,Klebsiella,0.17723,true\r
PM05.S1,PM05,Screen,0,2,Enterobacter,0.01236,true\r
PM05.S1,PM05,Screen,0,3,Enterococcus,0.00239,true\r
PM05.S1,PM05,Screen,0,4,Citrobacter,0.01083,true\r
PM05.S1,PM05,Screen,0,5,Morganella,0.01182,true\r
PM05.S1,PM05,Screen,0,6,Proteus,0.00306,true\r
PM05.S1,PM05,Screen,0,7,Haemophilus,8e-05,true\r
PM05.S1,PM05,Screen,0,8,Other,0.48861,true\r
PM05.S1,PM05,Screen,0,9,Bacteroides,0.00589,true\r
PM05.S1,PM05,Screen,0,10,Streptococcus,0.00413,true\r
PM05.S1,PM05,Screen,0,11,Oscillibacter,0.04907,true\r
PM05.S1,PM05,Screen,0,12,Phascolarctobacterium,4e-05,true\r
PM05.S1,PM05,Screen,0,13,Faecalibacterium,0.01201,true\r
PM05.S1,PM05,Screen,0,14,Mediterraneibacter,0.02649,true\r
PM05.S1,PM05,Screen,0,15,Akkermansia,0.00017,true\r
PM05.S1,PM05,Screen,0,16,Phocaeicola,0.00104,true\r
PM05.S1,PM05,Screen,0,17,Alistipes,0.00071,true\r
PM05.C0D01,PM05,C0D01,1,0,Escherichia,0.1255,true\r
PM05.C0D01,PM05,C0D01,1,1,Klebsiella,0.04283,true\r
PM05.C0D01,PM05,C0D01,1,2,Enterobacter,0.00156,true\r
PM05.C0D01,PM05,C0D01,1,3,Enterococcus,0.00258,true\r
PM05.C0D01,PM05,C0D01,1,4,Citrobacter,0.00858,true\r
PM05.C0D01,PM05,C0D01,1,5,Morganella,0.01648,true\r
PM05.C0D01,PM05,C0D01,1,6,Proteus,0.00205,true\r
PM05.C0D01,PM05,C0D01,1,7,Haemophilus,0.0001,true\r
PM05.C0D01,PM05,C0D01,1,8,Other,0.70984,true\r
PM05.C0D01,PM05,C0D01,1,9,Bacteroides,0.00348,true\r
PM05.C0D01,PM05,C0D01,1,10,Streptococcus,0.00265,true\r
PM05.C0D01,PM05,C0D01,1,11,Oscillibacter,0.023,true\r
PM05.C0D01,PM05,C0D01,1,12,Phascolarctobacterium,4e-05,true\r
PM05.C0D01,PM05,C0D01,1,13,Faecalibacterium,0.00798,true\r
PM05.C0D01,PM05,C0D01,1,14,Mediterraneibacter,0.0414,true\r
PM05.C0D01,PM05,C0D01,1,15,Akkermansia,0.00012,true\r
PM05.C0D01,PM05,C0D01,1,16,Phocaeicola,0.00067,true\r
PM05.C0D01,PM05,C0D01,1,17,Alistipes,0.00031,true\r
PM05.C0D02,PM05,C0D02,2,0,Escherichia,0.31424,true\r
PM05.C0D02,PM05,C0D02,2,1,Klebsiella,0.0973,true\r
PM05.C0D02,PM05,C0D02,2,2,Enterobacter,0.00209,true\r
PM05.C0D02,PM05,C0D02,2,3,Enterococcus,0.0036,true\r
PM05.C0D02,PM05,C0D02,2,4,Citrobacter,0.00626,true\r
PM05.C0D02,PM05,C0D02,2,5,Morganella,0.01969,true\r
PM05.C0D02,PM05,C0D02,2,6,Proteus,0.00351,true\r
PM05.C0D02,PM05,C0D02,2,7,Haemophilus,0.00021,true\r
PM05.C0D02,PM05,C0D02,2,8,Other,0.46514,true\r
PM05.C0D02,PM05,C0D02,2,9,Bacteroides,0.00624,true\r
PM05.C0D02,PM05,C0D02,2,10,Streptococcus,0.00463,true\r
PM05.C0D02,PM05,C0D02,2,11,Oscillibacter,0.00196,true\r
PM05.C0D02,PM05,C0D02,2,12,Phascolarctobacterium,4e-05,true\r
PM05.C0D02,PM05,C0D02,2,13,Faecalibacterium,0.00313,true\r
PM05.C0D02,PM05,C0D02,2,14,Mediterraneibacter,0.05821,true\r
PM05.C0D02,PM05,C0D02,2,15,Akkermansia,0.00023,true\r
PM05.C0D02,PM05,C0D02,2,16,Phocaeicola,0.00129,true\r
PM05.C0D02,PM05,C0D02,2,17,Alistipes,0.00041,true\r
PM05.C0D15,PM05,C0D15,3,0,Escherichia,0.11193,true\r
PM05.C0D15,PM05,C0D15,3,1,Klebsiella,0.01226,true\r
PM05.C0D15,PM05,C0D15,3,2,Enterobacter,0.08965,true\r
PM05.C0D15,PM05,C0D15,3,3,Enterococcus,0.00212,true\r
PM05.C0D15,PM05,C0D15,3,4,Citrobacter,0.00778,true\r
PM05.C0D15,PM05,C0D15,3,5,Morganella,0.00418,true\r
PM05.C0D15,PM05,C0D15,3,6,Proteus,0.00355,true\r
PM05.C0D15,PM05,C0D15,3,7,Haemophilus,0.00018,true\r
PM05.C0D15,PM05,C0D15,3,8,Other,0.69564,true\r
PM05.C0D15,PM05,C0D15,3,9,Bacteroides,0.01303,true\r
PM05.C0D15,PM05,C0D15,3,10,Streptococcus,0.00787,true\r
PM05.C0D15,PM05,C0D15,3,11,Oscillibacter,0.02568,true\r
PM05.C0D15,PM05,C0D15,3,12,Phascolarctobacterium,0.0001,true\r
PM05.C0D15,PM05,C0D15,3,13,Faecalibacterium,0.00193,true\r
PM05.C0D15,PM05,C0D15,3,14,Mediterraneibacter,0.00749,true\r
PM05.C0D15,PM05,C0D15,3,15,Akkermansia,0.00026,true\r
PM05.C0D15,PM05,C0D15,3,16,Phocaeicola,0.00207,true\r
PM05.C0D15,PM05,C0D15,3,17,Alistipes,0.00061,true\r
PM05.C0D36,PM05,C0D36,4,0,Escherichia,0.20404,true\r
PM05.C0D36,PM05,C0D36,4,1,Klebsiella,0.04786,true\r
PM05.C0D36,PM05,C0D36,4,2,Enterobacter,0.001,true\r
PM05.C0D36,PM05,C0D36,4,3,Enterococcus,0.01078,true\r
PM05.C0D36,PM05,C0D36,4,4,Citrobacter,0.00903,true\r
PM05.C0D36,PM05,C0D36,4,5,Morganella,3e-05,true\r
PM05.C0D36,PM05,C0D36,4,6,Proteus,0.01009,true\r
PM05.C0D36,PM05,C0D36,4,7,Haemophilus,7e-05,true\r
PM05.C0D36,PM05,C0D36,4,8,Other,0.58188,true\r
PM05.C0D36,PM05,C0D36,4,9,Bacteroides,0.00045,true\r
PM05.C0D36,PM05,C0D36,4,10,Streptococcus,0.00348,true\r
PM05.C0D36,PM05,C0D36,4,11,Oscillibacter,0.03248,true\r
PM05.C0D36,PM05,C0D36,4,12,Phascolarctobacterium,6e-05,true\r
PM05.C0D36,PM05,C0D36,4,13,Faecalibacterium,0.0029,true\r
PM05.C0D36,PM05,C0D36,4,14,Mediterraneibacter,0.07902,true\r
PM05.C0D36,PM05,C0D36,4,15,Akkermansia,0.00022,true\r
PM05.C0D36,PM05,C0D36,4,16,Phocaeicola,0.00013,true\r
PM05.C0D36,PM05,C0D36,4,17,Alistipes,9e-05,true\r
PM05.C1D01,PM05,C1D01,5,0,Escherichia,0.12682,true\r
PM05.C1D01,PM05,C1D01,5,1,Klebsiella,0.02884,true\r
PM05.C1D01,PM05,C1D01,5,2,Enterobacter,0.00483,true\r
PM05.C1D01,PM05,C1D01,5,3,Enterococcus,0.00182,true\r
PM05.C1D01,PM05,C1D01,5,4,Citrobacter,0.01221,true\r
PM05.C1D01,PM05,C1D01,5,5,Morganella,5e-05,true\r
PM05.C1D01,PM05,C1D01,5,6,Proteus,0.00416,true\r
PM05.C1D01,PM05,C1D01,5,7,Haemophilus,0.01048,true\r
PM05.C1D01,PM05,C1D01,5,8,Other,0.70137,true\r
PM05.C1D01,PM05,C1D01,5,9,Bacteroides,0.00289,true\r
PM05.C1D01,PM05,C1D01,5,10,Streptococcus,0.00437,true\r
PM05.C1D01,PM05,C1D01,5,11,Oscillibacter,0.02769,true\r
PM05.C1D01,PM05,C1D01,5,12,Phascolarctobacterium,8e-05,true\r
PM05.C1D01,PM05,C1D01,5,13,Faecalibacterium,0.0019,true\r
PM05.C1D01,PM05,C1D01,5,14,Mediterraneibacter,0.03879,true\r
PM05.C1D01,PM05,C1D01,5,15,Akkermansia,0.00019,true\r
PM05.C1D01,PM05,C1D01,5,16,Phocaeicola,0.00067,true\r
PM05.C1D01,PM05,C1D01,5,17,Alistipes,0.00024,true\r
PM05.C1D02,PM05,C1D02,6,0,Escherichia,0.05889,true\r
PM05.C1D02,PM05,C1D02,6,1,Klebsiella,0.00028,true\r
PM05.C1D02,PM05,C1D02,6,2,Enterobacter,0.00017,true\r
PM05.C1D02,PM05,C1D02,6,3,Enterococcus,0.00037,true\r
PM05.C1D02,PM05,C1D02,6,4,Citrobacter,0.00069,true\r
PM05.C1D02,PM05,C1D02,6,5,Morganella,1e-05,true\r
PM05.C1D02,PM05,C1D02,6,6,Proteus,0.0001,true\r
PM05.C1D02,PM05,C1D02,6,7,Haemophilus,0.00174,true\r
PM05.C1D02,PM05,C1D02,6,8,Other,0.15144,true\r
PM05.C1D02,PM05,C1D02,6,9,Bacteroides,0.36653,true\r
PM05.C1D02,PM05,C1D02,6,10,Streptococcus,0.00244,true\r
PM05.C1D02,PM05,C1D02,6,11,Oscillibacter,0.00905,true\r
PM05.C1D02,PM05,C1D02,6,12,Phascolarctobacterium,0.01124,true\r
PM05.C1D02,PM05,C1D02,6,13,Faecalibacterium,0.00085,true\r
PM05.C1D02,PM05,C1D02,6,14,Mediterraneibacter,0.00425,true\r
PM05.C1D02,PM05,C1D02,6,15,Akkermansia,0.063,true\r
PM05.C1D02,PM05,C1D02,6,16,Phocaeicola,0.29148,true\r
PM05.C1D02,PM05,C1D02,6,17,Alistipes,0.02908,true\r
PM05.C1D15,PM05,C1D15,7,0,Escherichia,0.00623,true\r
PM05.C1D15,PM05,C1D15,7,1,Klebsiella,0.00017,true\r
PM05.C1D15,PM05,C1D15,7,2,Enterobacter,0.00025,true\r
PM05.C1D15,PM05,C1D15,7,3,Enterococcus,0.00021,true\r
PM05.C1D15,PM05,C1D15,7,4,Citrobacter,0.00013,true\r
PM05.C1D15,PM05,C1D15,7,5,Morganella,2e-05,true\r
PM05.C1D15,PM05,C1D15,7,6,Proteus,0,true\r
PM05.C1D15,PM05,C1D15,7,7,Haemophilus,0.0017,true\r
PM05.C1D15,PM05,C1D15,7,8,Other,0.13567,true\r
PM05.C1D15,PM05,C1D15,7,9,Bacteroides,0.40867,true\r
PM05.C1D15,PM05,C1D15,7,10,Streptococcus,0.00205,true\r
PM05.C1D15,PM05,C1D15,7,11,Oscillibacter,0.0077,true\r
PM05.C1D15,PM05,C1D15,7,12,Phascolarctobacterium,0.01766,true\r
PM05.C1D15,PM05,C1D15,7,13,Faecalibacterium,0.05492,true\r
PM05.C1D15,PM05,C1D15,7,14,Mediterraneibacter,0.00141,true\r
PM05.C1D15,PM05,C1D15,7,15,Akkermansia,0.00111,true\r
PM05.C1D15,PM05,C1D15,7,16,Phocaeicola,0.27589,true\r
PM05.C1D15,PM05,C1D15,7,17,Alistipes,0.01364,true\r
PM05.C1D36,PM05,C1D36,8,0,Escherichia,0.00151,true\r
PM05.C1D36,PM05,C1D36,8,1,Klebsiella,0.00018,true\r
PM05.C1D36,PM05,C1D36,8,2,Enterobacter,0.00091,true\r
PM05.C1D36,PM05,C1D36,8,3,Enterococcus,0.00027,true\r
PM05.C1D36,PM05,C1D36,8,4,Citrobacter,0.00013,true\r
PM05.C1D36,PM05,C1D36,8,5,Morganella,2e-05,true\r
PM05.C1D36,PM05,C1D36,8,6,Proteus,0,true\r
PM05.C1D36,PM05,C1D36,8,7,Haemophilus,0.00353,true\r
PM05.C1D36,PM05,C1D36,8,8,Other,0.16828,true\r
PM05.C1D36,PM05,C1D36,8,9,Bacteroides,0.40322,true\r
PM05.C1D36,PM05,C1D36,8,10,Streptococcus,0.00217,true\r
PM05.C1D36,PM05,C1D36,8,11,Oscillibacter,0.00625,true\r
PM05.C1D36,PM05,C1D36,8,12,Phascolarctobacterium,0.01163,true\r
PM05.C1D36,PM05,C1D36,8,13,Faecalibacterium,0.07087,true\r
PM05.C1D36,PM05,C1D36,8,14,Mediterraneibacter,0.00201,true\r
PM05.C1D36,PM05,C1D36,8,15,Akkermansia,0.00045,true\r
PM05.C1D36,PM05,C1D36,8,16,Phocaeicola,0.22856,true\r
PM05.C1D36,PM05,C1D36,8,17,Alistipes,0.01477,true\r
PM06.S1,PM06,Screen,0,0,Escherichia,0.01226,true\r
PM06.S1,PM06,Screen,0,1,Klebsiella,0.94704,true\r
PM06.S1,PM06,Screen,0,2,Enterobacter,0.00763,true\r
PM06.S1,PM06,Screen,0,3,Enterococcus,0.01481,true\r
PM06.S1,PM06,Screen,0,4,Citrobacter,0.00092,true\r
PM06.S1,PM06,Screen,0,5,Morganella,0,true\r
PM06.S1,PM06,Screen,0,6,Proteus,2e-05,true\r
PM06.S1,PM06,Screen,0,7,Haemophilus,0,true\r
PM06.S1,PM06,Screen,0,8,Other,0.01623,true\r
PM06.S1,PM06,Screen,0,9,Bacteroides,6e-05,true\r
PM06.S1,PM06,Screen,0,10,Streptococcus,0.00029,true\r
PM06.S1,PM06,Screen,0,11,Oscillibacter,0,true\r
PM06.S1,PM06,Screen,0,12,Phascolarctobacterium,0,true\r
PM06.S1,PM06,Screen,0,13,Faecalibacterium,0,true\r
PM06.S1,PM06,Screen,0,14,Mediterraneibacter,0,true\r
PM06.S1,PM06,Screen,0,15,Akkermansia,1e-05,true\r
PM06.S1,PM06,Screen,0,16,Phocaeicola,3e-05,true\r
PM06.S1,PM06,Screen,0,17,Alistipes,0,true\r
PM06.C1D01,PM06,C1D01,5,0,Escherichia,0.03514,true\r
PM06.C1D01,PM06,C1D01,5,1,Klebsiella,0.2064,true\r
PM06.C1D01,PM06,C1D01,5,2,Enterobacter,0.00568,true\r
PM06.C1D01,PM06,C1D01,5,3,Enterococcus,0.01492,true\r
PM06.C1D01,PM06,C1D01,5,4,Citrobacter,0.36568,true\r
PM06.C1D01,PM06,C1D01,5,5,Morganella,0.0484,true\r
PM06.C1D01,PM06,C1D01,5,6,Proteus,0.0375,true\r
PM06.C1D01,PM06,C1D01,5,7,Haemophilus,0.00013,true\r
PM06.C1D01,PM06,C1D01,5,8,Other,0.26318,true\r
PM06.C1D01,PM06,C1D01,5,9,Bacteroides,0.01391,true\r
PM06.C1D01,PM06,C1D01,5,10,Streptococcus,0.00152,true\r
PM06.C1D01,PM06,C1D01,5,11,Oscillibacter,6e-05,true\r
PM06.C1D01,PM06,C1D01,5,12,Phascolarctobacterium,5e-05,true\r
PM06.C1D01,PM06,C1D01,5,13,Faecalibacterium,0.00017,true\r
PM06.C1D01,PM06,C1D01,5,14,Mediterraneibacter,0.00016,true\r
PM06.C1D01,PM06,C1D01,5,15,Akkermansia,2e-05,true\r
PM06.C1D01,PM06,C1D01,5,16,Phocaeicola,0.00264,true\r
PM06.C1D01,PM06,C1D01,5,17,Alistipes,0.00077,true\r
PM06.C1D02,PM06,C1D02,6,0,Escherichia,0.00793,true\r
PM06.C1D02,PM06,C1D02,6,1,Klebsiella,0.00764,true\r
PM06.C1D02,PM06,C1D02,6,2,Enterobacter,0.00023,true\r
PM06.C1D02,PM06,C1D02,6,3,Enterococcus,0.00247,true\r
PM06.C1D02,PM06,C1D02,6,4,Citrobacter,0.01021,true\r
PM06.C1D02,PM06,C1D02,6,5,Morganella,0.00216,true\r
PM06.C1D02,PM06,C1D02,6,6,Proteus,0.00046,true\r
PM06.C1D02,PM06,C1D02,6,7,Haemophilus,1e-05,true\r
PM06.C1D02,PM06,C1D02,6,8,Other,0.08471,true\r
PM06.C1D02,PM06,C1D02,6,9,Bacteroides,0.5709,true\r
PM06.C1D02,PM06,C1D02,6,10,Streptococcus,0.00076,true\r
PM06.C1D02,PM06,C1D02,6,11,Oscillibacter,9e-05,true\r
PM06.C1D02,PM06,C1D02,6,12,Phascolarctobacterium,0.00581,true\r
PM06.C1D02,PM06,C1D02,6,13,Faecalibacterium,0.00016,true\r
PM06.C1D02,PM06,C1D02,6,14,Mediterraneibacter,0.00013,true\r
PM06.C1D02,PM06,C1D02,6,15,Akkermansia,0.04563,true\r
PM06.C1D02,PM06,C1D02,6,16,Phocaeicola,0.22676,true\r
PM06.C1D02,PM06,C1D02,6,17,Alistipes,0.0283,true\r
PM06.C1D15,PM06,C1D15,7,0,Escherichia,0.01739,true\r
PM06.C1D15,PM06,C1D15,7,1,Klebsiella,0.00339,true\r
PM06.C1D15,PM06,C1D15,7,2,Enterobacter,9e-05,true\r
PM06.C1D15,PM06,C1D15,7,3,Enterococcus,0.00022,true\r
PM06.C1D15,PM06,C1D15,7,4,Citrobacter,0.00033,true\r
PM06.C1D15,PM06,C1D15,7,5,Morganella,0.00013,true\r
PM06.C1D15,PM06,C1D15,7,6,Proteus,1e-05,true\r
PM06.C1D15,PM06,C1D15,7,7,Haemophilus,0.00018,true\r
PM06.C1D15,PM06,C1D15,7,8,Other,0.09852,true\r
PM06.C1D15,PM06,C1D15,7,9,Bacteroides,0.43377,true\r
PM06.C1D15,PM06,C1D15,7,10,Streptococcus,0.00066,true\r
PM06.C1D15,PM06,C1D15,7,11,Oscillibacter,0.00076,true\r
PM06.C1D15,PM06,C1D15,7,12,Phascolarctobacterium,0.02803,true\r
PM06.C1D15,PM06,C1D15,7,13,Faecalibacterium,0.01201,true\r
PM06.C1D15,PM06,C1D15,7,14,Mediterraneibacter,0.00166,true\r
PM06.C1D15,PM06,C1D15,7,15,Akkermansia,0.13176,true\r
PM06.C1D15,PM06,C1D15,7,16,Phocaeicola,0.22819,true\r
PM06.C1D15,PM06,C1D15,7,17,Alistipes,0.0242,true\r
PM06.C1D36,PM06,C1D36,8,0,Escherichia,0.00286,true\r
PM06.C1D36,PM06,C1D36,8,1,Klebsiella,0.00068,true\r
PM06.C1D36,PM06,C1D36,8,2,Enterobacter,0.00013,true\r
PM06.C1D36,PM06,C1D36,8,3,Enterococcus,0.00017,true\r
PM06.C1D36,PM06,C1D36,8,4,Citrobacter,0.00416,true\r
PM06.C1D36,PM06,C1D36,8,5,Morganella,1e-05,true\r
PM06.C1D36,PM06,C1D36,8,6,Proteus,1e-05,true\r
PM06.C1D36,PM06,C1D36,8,7,Haemophilus,4e-05,true\r
PM06.C1D36,PM06,C1D36,8,8,Other,0.13563,true\r
PM06.C1D36,PM06,C1D36,8,9,Bacteroides,0.37214,true\r
PM06.C1D36,PM06,C1D36,8,10,Streptococcus,0.0003,true\r
PM06.C1D36,PM06,C1D36,8,11,Oscillibacter,0.00284,true\r
PM06.C1D36,PM06,C1D36,8,12,Phascolarctobacterium,0.01277,true\r
PM06.C1D36,PM06,C1D36,8,13,Faecalibacterium,0.00085,true\r
PM06.C1D36,PM06,C1D36,8,14,Mediterraneibacter,0.00084,true\r
PM06.C1D36,PM06,C1D36,8,15,Akkermansia,0.04808,true\r
PM06.C1D36,PM06,C1D36,8,16,Phocaeicola,0.37701,true\r
PM06.C1D36,PM06,C1D36,8,17,Alistipes,0.02786,true\r
PM07.S2,PM07,Screen,0,0,Escherichia,0.00682,true\r
PM07.S2,PM07,Screen,0,1,Klebsiella,0.00554,true\r
PM07.S2,PM07,Screen,0,2,Enterobacter,0.00028,true\r
PM07.S2,PM07,Screen,0,3,Enterococcus,0.00022,true\r
PM07.S2,PM07,Screen,0,4,Citrobacter,0.00017,true\r
PM07.S2,PM07,Screen,0,5,Morganella,3e-05,true\r
PM07.S2,PM07,Screen,0,6,Proteus,1e-05,true\r
PM07.S2,PM07,Screen,0,7,Haemophilus,0.00049,true\r
PM07.S2,PM07,Screen,0,8,Other,0.17391,true\r
PM07.S2,PM07,Screen,0,9,Bacteroides,0.30927,true\r
PM07.S2,PM07,Screen,0,10,Streptococcus,0.00392,true\r
PM07.S2,PM07,Screen,0,11,Oscillibacter,0.00518,true\r
PM07.S2,PM07,Screen,0,12,Phascolarctobacterium,0.01261,true\r
PM07.S2,PM07,Screen,0,13,Faecalibacterium,0.02368,true\r
PM07.S2,PM07,Screen,0,14,Mediterraneibacter,0.00155,true\r
PM07.S2,PM07,Screen,0,15,Akkermansia,0.0065,true\r
PM07.S2,PM07,Screen,0,16,Phocaeicola,0.40674,true\r
PM07.S2,PM07,Screen,0,17,Alistipes,0.02527,true\r
PM07.C0D01,PM07,C0D01,1,0,Escherichia,0.04392,true\r
PM07.C0D01,PM07,C0D01,1,1,Klebsiella,0.00113,true\r
PM07.C0D01,PM07,C0D01,1,2,Enterobacter,0.00012,true\r
PM07.C0D01,PM07,C0D01,1,3,Enterococcus,0.00044,true\r
PM07.C0D01,PM07,C0D01,1,4,Citrobacter,0.00023,true\r
PM07.C0D01,PM07,C0D01,1,5,Morganella,4e-05,true\r
PM07.C0D01,PM07,C0D01,1,6,Proteus,3e-05,true\r
PM07.C0D01,PM07,C0D01,1,7,Haemophilus,0.00021,true\r
PM07.C0D01,PM07,C0D01,1,8,Other,0.14267,true\r
PM07.C0D01,PM07,C0D01,1,9,Bacteroides,0.47337,true\r
PM07.C0D01,PM07,C0D01,1,10,Streptococcus,0.00042,true\r
PM07.C0D01,PM07,C0D01,1,11,Oscillibacter,4e-05,true\r
PM07.C0D01,PM07,C0D01,1,12,Phascolarctobacterium,1e-05,true\r
PM07.C0D01,PM07,C0D01,1,13,Faecalibacterium,0.00018,true\r
PM07.C0D01,PM07,C0D01,1,14,Mediterraneibacter,0.02641,true\r
PM07.C0D01,PM07,C0D01,1,15,Akkermansia,6e-05,true\r
PM07.C0D01,PM07,C0D01,1,16,Phocaeicola,0.29933,true\r
PM07.C0D01,PM07,C0D01,1,17,Alistipes,0.00331,true\r
PM07.C0D02,PM07,C0D02,2,0,Escherichia,0.05159,true\r
PM07.C0D02,PM07,C0D02,2,1,Klebsiella,0.00152,true\r
PM07.C0D02,PM07,C0D02,2,2,Enterobacter,0.0002,true\r
PM07.C0D02,PM07,C0D02,2,3,Enterococcus,0.00043,true\r
PM07.C0D02,PM07,C0D02,2,4,Citrobacter,0.00033,true\r
PM07.C0D02,PM07,C0D02,2,5,Morganella,5e-05,true\r
PM07.C0D02,PM07,C0D02,2,6,Proteus,3e-05,true\r
PM07.C0D02,PM07,C0D02,2,7,Haemophilus,0.00034,true\r
PM07.C0D02,PM07,C0D02,2,8,Other,0.13702,true\r
PM07.C0D02,PM07,C0D02,2,9,Bacteroides,0.3591,true\r
PM07.C0D02,PM07,C0D02,2,10,Streptococcus,0.0007,true\r
PM07.C0D02,PM07,C0D02,2,11,Oscillibacter,0.00013,true\r
PM07.C0D02,PM07,C0D02,2,12,Phascolarctobacterium,2e-05,true\r
PM07.C0D02,PM07,C0D02,2,13,Faecalibacterium,0.00027,true\r
PM07.C0D02,PM07,C0D02,2,14,Mediterraneibacter,0.04678,true\r
PM07.C0D02,PM07,C0D02,2,15,Akkermansia,8e-05,true\r
PM07.C0D02,PM07,C0D02,2,16,Phocaeicola,0.38796,true\r
PM07.C0D02,PM07,C0D02,2,17,Alistipes,0.00367,true\r
PM07.C0D15,PM07,C0D15,3,0,Escherichia,0.04026,true\r
PM07.C0D15,PM07,C0D15,3,1,Klebsiella,0.00477,true\r
PM07.C0D15,PM07,C0D15,3,2,Enterobacter,0.00023,true\r
PM07.C0D15,PM07,C0D15,3,3,Enterococcus,0.00033,true\r
PM07.C0D15,PM07,C0D15,3,4,Citrobacter,0.00023,true\r
PM07.C0D15,PM07,C0D15,3,5,Morganella,3e-05,true\r
PM07.C0D15,PM07,C0D15,3,6,Proteus,0,true\r
PM07.C0D15,PM07,C0D15,3,7,Haemophilus,0.00814,true\r
PM07.C0D15,PM07,C0D15,3,8,Other,0.1477,true\r
PM07.C0D15,PM07,C0D15,3,9,Bacteroides,0.2774,true\r
PM07.C0D15,PM07,C0D15,3,10,Streptococcus,0.00925,true\r
PM07.C0D15,PM07,C0D15,3,11,Oscillibacter,0.00018,true\r
PM07.C0D15,PM07,C0D15,3,12,Phascolarctobacterium,1e-05,true\r
PM07.C0D15,PM07,C0D15,3,13,Faecalibacterium,0.00068,true\r
PM07.C0D15,PM07,C0D15,3,14,Mediterraneibacter,0.01478,true\r
PM07.C0D15,PM07,C0D15,3,15,Akkermansia,7e-05,true\r
PM07.C0D15,PM07,C0D15,3,16,Phocaeicola,0.42934,true\r
PM07.C0D15,PM07,C0D15,3,17,Alistipes,0.00636,true\r
PM07.C0D36,PM07,C0D36,4,0,Escherichia,0.02765,true\r
PM07.C0D36,PM07,C0D36,4,1,Klebsiella,0.00355,true\r
PM07.C0D36,PM07,C0D36,4,2,Enterobacter,0.00049,true\r
PM07.C0D36,PM07,C0D36,4,3,Enterococcus,0.00038,true\r
PM07.C0D36,PM07,C0D36,4,4,Citrobacter,0.00172,true\r
PM07.C0D36,PM07,C0D36,4,5,Morganella,4e-05,true\r
PM07.C0D36,PM07,C0D36,4,6,Proteus,0.00018,true\r
PM07.C0D36,PM07,C0D36,4,7,Haemophilus,0.00213,true\r
PM07.C0D36,PM07,C0D36,4,8,Other,0.17747,true\r
PM07.C0D36,PM07,C0D36,4,9,Bacteroides,0.29085,true\r
PM07.C0D36,PM07,C0D36,4,10,Streptococcus,0.0309,true\r
PM07.C0D36,PM07,C0D36,4,11,Oscillibacter,0.00021,true\r
PM07.C0D36,PM07,C0D36,4,12,Phascolarctobacterium,6e-05,true\r
PM07.C0D36,PM07,C0D36,4,13,Faecalibacterium,0.00054,true\r
PM07.C0D36,PM07,C0D36,4,14,Mediterraneibacter,0.01794,true\r
PM07.C0D36,PM07,C0D36,4,15,Akkermansia,6e-05,true\r
PM07.C0D36,PM07,C0D36,4,16,Phocaeicola,0.37394,true\r
PM07.C0D36,PM07,C0D36,4,17,Alistipes,0.00373,true\r
PM07.C1D01,PM07,C1D01,5,0,Escherichia,0.01243,true\r
PM07.C1D01,PM07,C1D01,5,1,Klebsiella,0.00091,true\r
PM07.C1D01,PM07,C1D01,5,2,Enterobacter,0.00167,true\r
PM07.C1D01,PM07,C1D01,5,3,Enterococcus,0.00037,true\r
PM07.C1D01,PM07,C1D01,5,4,Citrobacter,0.00109,true\r
PM07.C1D01,PM07,C1D01,5,5,Morganella,4e-05,true\r
PM07.C1D01,PM07,C1D01,5,6,Proteus,2e-05,true\r
PM07.C1D01,PM07,C1D01,5,7,Haemophilus,0.00264,true\r
PM07.C1D01,PM07,C1D01,5,8,Other,0.18394,true\r
PM07.C1D01,PM07,C1D01,5,9,Bacteroides,0.22614,true\r
PM07.C1D01,PM07,C1D01,5,10,Streptococcus,0.00186,true\r
PM07.C1D01,PM07,C1D01,5,11,Oscillibacter,0.00032,true\r
PM07.C1D01,PM07,C1D01,5,12,Phascolarctobacterium,2e-05,true\r
PM07.C1D01,PM07,C1D01,5,13,Faecalibacterium,0.00056,true\r
PM07.C1D01,PM07,C1D01,5,14,Mediterraneibacter,0.00834,true\r
PM07.C1D01,PM07,C1D01,5,15,Akkermansia,8e-05,true\r
PM07.C1D01,PM07,C1D01,5,16,Phocaeicola,0.51881,true\r
PM07.C1D01,PM07,C1D01,5,17,Alistipes,0.00774,true\r
PM07.C1D02,PM07,C1D02,6,0,Escherichia,0.02437,true\r
PM07.C1D02,PM07,C1D02,6,1,Klebsiella,0.00118,true\r
PM07.C1D02,PM07,C1D02,6,2,Enterobacter,0.00037,true\r
PM07.C1D02,PM07,C1D02,6,3,Enterococcus,0.00052,true\r
PM07.C1D02,PM07,C1D02,6,4,Citrobacter,0.00045,true\r
PM07.C1D02,PM07,C1D02,6,5,Morganella,3e-05,true\r
PM07.C1D02,PM07,C1D02,6,6,Proteus,2e-05,true\r
PM07.C1D02,PM07,C1D02,6,7,Haemophilus,0.00417,true\r
PM07.C1D02,PM07,C1D02,6,8,Other,0.19839,true\r
PM07.C1D02,PM07,C1D02,6,9,Bacteroides,0.286,true\r
PM07.C1D02,PM07,C1D02,6,10,Streptococcus,0.00538,true\r
PM07.C1D02,PM07,C1D02,6,11,Oscillibacter,0.00056,true\r
PM07.C1D02,PM07,C1D02,6,12,Phascolarctobacterium,0.00562,true\r
PM07.C1D02,PM07,C1D02,6,13,Faecalibacterium,0.00706,true\r
PM07.C1D02,PM07,C1D02,6,14,Mediterraneibacter,0.03835,true\r
PM07.C1D02,PM07,C1D02,6,15,Akkermansia,0.01473,true\r
PM07.C1D02,PM07,C1D02,6,16,Phocaeicola,0.32515,true\r
PM07.C1D02,PM07,C1D02,6,17,Alistipes,0.01428,true\r
PM07.C1D15,PM07,C1D15,7,0,Escherichia,0.02234,true\r
PM07.C1D15,PM07,C1D15,7,1,Klebsiella,0.00055,true\r
PM07.C1D15,PM07,C1D15,7,2,Enterobacter,0.00077,true\r
PM07.C1D15,PM07,C1D15,7,3,Enterococcus,0.00021,true\r
PM07.C1D15,PM07,C1D15,7,4,Citrobacter,0.00045,true\r
PM07.C1D15,PM07,C1D15,7,5,Morganella,5e-05,true\r
PM07.C1D15,PM07,C1D15,7,6,Proteus,0,true\r
PM07.C1D15,PM07,C1D15,7,7,Haemophilus,0.00039,true\r
PM07.C1D15,PM07,C1D15,7,8,Other,0.16625,true\r
PM07.C1D15,PM07,C1D15,7,9,Bacteroides,0.42067,true\r
PM07.C1D15,PM07,C1D15,7,10,Streptococcus,0.00071,true\r
PM07.C1D15,PM07,C1D15,7,11,Oscillibacter,0.00159,true\r
PM07.C1D15,PM07,C1D15,7,12,Phascolarctobacterium,2e-05,true\r
PM07.C1D15,PM07,C1D15,7,13,Faecalibacterium,0.00215,true\r
PM07.C1D15,PM07,C1D15,7,14,Mediterraneibacter,0.00425,true\r
PM07.C1D15,PM07,C1D15,7,15,Akkermansia,0.0001,true\r
PM07.C1D15,PM07,C1D15,7,16,Phocaeicola,0.34479,true\r
PM07.C1D15,PM07,C1D15,7,17,Alistipes,0.01016,true\r
PM07.C1D36,PM07,C1D36,8,0,Escherichia,0.00374,true\r
PM07.C1D36,PM07,C1D36,8,1,Klebsiella,0.00051,true\r
PM07.C1D36,PM07,C1D36,8,2,Enterobacter,0.00023,true\r
PM07.C1D36,PM07,C1D36,8,3,Enterococcus,0.00018,true\r
PM07.C1D36,PM07,C1D36,8,4,Citrobacter,0.00016,true\r
PM07.C1D36,PM07,C1D36,8,5,Morganella,7e-05,true\r
PM07.C1D36,PM07,C1D36,8,6,Proteus,0,true\r
PM07.C1D36,PM07,C1D36,8,7,Haemophilus,0.00035,true\r
PM07.C1D36,PM07,C1D36,8,8,Other,0.17814,true\r
PM07.C1D36,PM07,C1D36,8,9,Bacteroides,0.39801,true\r
PM07.C1D36,PM07,C1D36,8,10,Streptococcus,0.0065,true\r
PM07.C1D36,PM07,C1D36,8,11,Oscillibacter,0.00631,true\r
PM07.C1D36,PM07,C1D36,8,12,Phascolarctobacterium,0.01377,true\r
PM07.C1D36,PM07,C1D36,8,13,Faecalibacterium,0.05359,true\r
PM07.C1D36,PM07,C1D36,8,14,Mediterraneibacter,0.00159,true\r
PM07.C1D36,PM07,C1D36,8,15,Akkermansia,0.00595,true\r
PM07.C1D36,PM07,C1D36,8,16,Phocaeicola,0.29581,true\r
PM07.C1D36,PM07,C1D36,8,17,Alistipes,0.01188,true\r
PM07.C2D01,PM07,C2D01,9,0,Escherichia,0.00202,true\r
PM07.C2D01,PM07,C2D01,9,1,Klebsiella,0.00132,true\r
PM07.C2D01,PM07,C2D01,9,2,Enterobacter,0.00207,true\r
PM07.C2D01,PM07,C2D01,9,3,Enterococcus,0.00019,true\r
PM07.C2D01,PM07,C2D01,9,4,Citrobacter,0.00016,true\r
PM07.C2D01,PM07,C2D01,9,5,Morganella,3e-05,true\r
PM07.C2D01,PM07,C2D01,9,6,Proteus,1e-05,true\r
PM07.C2D01,PM07,C2D01,9,7,Haemophilus,0.00017,true\r
PM07.C2D01,PM07,C2D01,9,8,Other,0.14051,true\r
PM07.C2D01,PM07,C2D01,9,9,Bacteroides,0.27149,true\r
PM07.C2D01,PM07,C2D01,9,10,Streptococcus,0.00395,true\r
PM07.C2D01,PM07,C2D01,9,11,Oscillibacter,0.00326,true\r
PM07.C2D01,PM07,C2D01,9,12,Phascolarctobacterium,0.00856,true\r
PM07.C2D01,PM07,C2D01,9,13,Faecalibacterium,0.01315,true\r
PM07.C2D01,PM07,C2D01,9,14,Mediterraneibacter,0.00275,true\r
PM07.C2D01,PM07,C2D01,9,15,Akkermansia,0.00039,true\r
PM07.C2D01,PM07,C2D01,9,16,Phocaeicola,0.52186,true\r
PM07.C2D01,PM07,C2D01,9,17,Alistipes,0.0114,true\r
PM07.C2D02,PM07,C2D02,10,0,Escherichia,0.00396,true\r
PM07.C2D02,PM07,C2D02,10,1,Klebsiella,0.00422,true\r
PM07.C2D02,PM07,C2D02,10,2,Enterobacter,0.00054,true\r
PM07.C2D02,PM07,C2D02,10,3,Enterococcus,0.00017,true\r
PM07.C2D02,PM07,C2D02,10,4,Citrobacter,0.00017,true\r
PM07.C2D02,PM07,C2D02,10,5,Morganella,4e-05,true\r
PM07.C2D02,PM07,C2D02,10,6,Proteus,1e-05,true\r
PM07.C2D02,PM07,C2D02,10,7,Haemophilus,0.00025,true\r
PM07.C2D02,PM07,C2D02,10,8,Other,0.14695,true\r
PM07.C2D02,PM07,C2D02,10,9,Bacteroides,0.35486,true\r
PM07.C2D02,PM07,C2D02,10,10,Streptococcus,0.0027,true\r
PM07.C2D02,PM07,C2D02,10,11,Oscillibacter,0.00537,true\r
PM07.C2D02,PM07,C2D02,10,12,Phascolarctobacterium,0.01464,true\r
PM07.C2D02,PM07,C2D02,10,13,Faecalibacterium,0.00103,true\r
PM07.C2D02,PM07,C2D02,10,14,Mediterraneibacter,0.00272,true\r
PM07.C2D02,PM07,C2D02,10,15,Akkermansia,0.00366,true\r
PM07.C2D02,PM07,C2D02,10,16,Phocaeicola,0.44303,true\r
PM07.C2D02,PM07,C2D02,10,17,Alistipes,0.00732,true\r
PM07.C2D15,PM07,C2D15,11,0,Escherichia,0.0013,true\r
PM07.C2D15,PM07,C2D15,11,1,Klebsiella,0.003,true\r
PM07.C2D15,PM07,C2D15,11,2,Enterobacter,0.00094,true\r
PM07.C2D15,PM07,C2D15,11,3,Enterococcus,0.00031,true\r
PM07.C2D15,PM07,C2D15,11,4,Citrobacter,0.00015,true\r
PM07.C2D15,PM07,C2D15,11,5,Morganella,5e-05,true\r
PM07.C2D15,PM07,C2D15,11,6,Proteus,0,true\r
PM07.C2D15,PM07,C2D15,11,7,Haemophilus,0.01365,true\r
PM07.C2D15,PM07,C2D15,11,8,Other,0.20754,true\r
PM07.C2D15,PM07,C2D15,11,9,Bacteroides,0.24727,true\r
PM07.C2D15,PM07,C2D15,11,10,Streptococcus,0.02308,true\r
PM07.C2D15,PM07,C2D15,11,11,Oscillibacter,0.00548,true\r
PM07.C2D15,PM07,C2D15,11,12,Phascolarctobacterium,0.01336,true\r
PM07.C2D15,PM07,C2D15,11,13,Faecalibacterium,0.09015,true\r
PM07.C2D15,PM07,C2D15,11,14,Mediterraneibacter,0.00499,true\r
PM07.C2D15,PM07,C2D15,11,15,Akkermansia,0.00031,true\r
PM07.C2D15,PM07,C2D15,11,16,Phocaeicola,0.35503,true\r
PM07.C2D15,PM07,C2D15,11,17,Alistipes,0.00406,true\r
PM07.C2D36,PM07,C2D36,12,0,Escherichia,0.02197,true\r
PM07.C2D36,PM07,C2D36,12,1,Klebsiella,0.04546,true\r
PM07.C2D36,PM07,C2D36,12,2,Enterobacter,0.00544,true\r
PM07.C2D36,PM07,C2D36,12,3,Enterococcus,9e-05,true\r
PM07.C2D36,PM07,C2D36,12,4,Citrobacter,0.0002,true\r
PM07.C2D36,PM07,C2D36,12,5,Morganella,1e-05,true\r
PM07.C2D36,PM07,C2D36,12,6,Proteus,5e-05,true\r
PM07.C2D36,PM07,C2D36,12,7,Haemophilus,0.00579,true\r
PM07.C2D36,PM07,C2D36,12,8,Other,0.09407,true\r
PM07.C2D36,PM07,C2D36,12,9,Bacteroides,0.43108,true\r
PM07.C2D36,PM07,C2D36,12,10,Streptococcus,0.00403,true\r
PM07.C2D36,PM07,C2D36,12,11,Oscillibacter,0.00106,true\r
PM07.C2D36,PM07,C2D36,12,12,Phascolarctobacterium,0.01782,true\r
PM07.C2D36,PM07,C2D36,12,13,Faecalibacterium,0.00242,true\r
PM07.C2D36,PM07,C2D36,12,14,Mediterraneibacter,0.00928,true\r
PM07.C2D36,PM07,C2D36,12,15,Akkermansia,7e-05,true\r
PM07.C2D36,PM07,C2D36,12,16,Phocaeicola,0.35116,true\r
PM07.C2D36,PM07,C2D36,12,17,Alistipes,0.00295,true\r
PM08.S3,PM08,Screen,0,0,Escherichia,0.05239,true\r
PM08.S3,PM08,Screen,0,1,Klebsiella,0.00067,true\r
PM08.S3,PM08,Screen,0,2,Enterobacter,5e-05,true\r
PM08.S3,PM08,Screen,0,3,Enterococcus,0.00018,true\r
PM08.S3,PM08,Screen,0,4,Citrobacter,0.00012,true\r
PM08.S3,PM08,Screen,0,5,Morganella,1e-05,true\r
PM08.S3,PM08,Screen,0,6,Proteus,2e-05,true\r
PM08.S3,PM08,Screen,0,7,Haemophilus,0.00012,true\r
PM08.S3,PM08,Screen,0,8,Other,0.19359,true\r
PM08.S3,PM08,Screen,0,9,Bacteroides,0.43477,true\r
PM08.S3,PM08,Screen,0,10,Streptococcus,0.00046,true\r
PM08.S3,PM08,Screen,0,11,Oscillibacter,0.00176,true\r
PM08.S3,PM08,Screen,0,12,Phascolarctobacterium,1e-05,true\r
PM08.S3,PM08,Screen,0,13,Faecalibacterium,0.04332,true\r
PM08.S3,PM08,Screen,0,14,Mediterraneibacter,0.00074,true\r
PM08.S3,PM08,Screen,0,15,Akkermansia,3e-05,true\r
PM08.S3,PM08,Screen,0,16,Phocaeicola,0.19677,true\r
PM08.S3,PM08,Screen,0,17,Alistipes,0.06596,true\r
PM08.C0D01,PM08,C0D01,1,0,Escherichia,0.10178,true\r
PM08.C0D01,PM08,C0D01,1,1,Klebsiella,0.0012,true\r
PM08.C0D01,PM08,C0D01,1,2,Enterobacter,9e-05,true\r
PM08.C0D01,PM08,C0D01,1,3,Enterococcus,0.00023,true\r
PM08.C0D01,PM08,C0D01,1,4,Citrobacter,0.00018,true\r
PM08.C0D01,PM08,C0D01,1,5,Morganella,0,true\r
PM08.C0D01,PM08,C0D01,1,6,Proteus,1e-05,true\r
PM08.C0D01,PM08,C0D01,1,7,Haemophilus,7e-05,true\r
PM08.C0D01,PM08,C0D01,1,8,Other,0.23267,true\r
PM08.C0D01,PM08,C0D01,1,9,Bacteroides,0.35844,true\r
PM08.C0D01,PM08,C0D01,1,10,Streptococcus,0.00033,true\r
PM08.C0D01,PM08,C0D01,1,11,Oscillibacter,0.00233,true\r
PM08.C0D01,PM08,C0D01,1,12,Phascolarctobacterium,1e-05,true\r
PM08.C0D01,PM08,C0D01,1,13,Faecalibacterium,0.05106,true\r
PM08.C0D01,PM08,C0D01,1,14,Mediterraneibacter,0.00087,true\r
PM08.C0D01,PM08,C0D01,1,15,Akkermansia,5e-05,true\r
PM08.C0D01,PM08,C0D01,1,16,Phocaeicola,0.21994,true\r
PM08.C0D01,PM08,C0D01,1,17,Alistipes,0.02215,true\r
PM08.C0D02,PM08,C0D02,2,0,Escherichia,0.04153,true\r
PM08.C0D02,PM08,C0D02,2,1,Klebsiella,0.00105,true\r
PM08.C0D02,PM08,C0D02,2,2,Enterobacter,2e-05,true\r
PM08.C0D02,PM08,C0D02,2,3,Enterococcus,9e-05,true\r
PM08.C0D02,PM08,C0D02,2,4,Citrobacter,8e-05,true\r
PM08.C0D02,PM08,C0D02,2,5,Morganella,0,true\r
PM08.C0D02,PM08,C0D02,2,6,Proteus,1e-05,true\r
PM08.C0D02,PM08,C0D02,2,7,Haemophilus,0.0001,true\r
PM08.C0D02,PM08,C0D02,2,8,Other,0.08775,true\r
PM08.C0D02,PM08,C0D02,2,9,Bacteroides,0.54917,true\r
PM08.C0D02,PM08,C0D02,2,10,Streptococcus,0.00069,true\r
PM08.C0D02,PM08,C0D02,2,11,Oscillibacter,0.00093,true\r
PM08.C0D02,PM08,C0D02,2,12,Phascolarctobacterium,0,true\r
PM08.C0D02,PM08,C0D02,2,13,Faecalibacterium,0.04599,true\r
PM08.C0D02,PM08,C0D02,2,14,Mediterraneibacter,0.00029,true\r
PM08.C0D02,PM08,C0D02,2,15,Akkermansia,3e-05,true\r
PM08.C0D02,PM08,C0D02,2,16,Phocaeicola,0.24744,true\r
PM08.C0D02,PM08,C0D02,2,17,Alistipes,0.01932,true\r
PM08.C0D15,PM08,C0D15,3,0,Escherichia,5e-05,true\r
PM08.C0D15,PM08,C0D15,3,1,Klebsiella,3e-05,true\r
PM08.C0D15,PM08,C0D15,3,2,Enterobacter,5e-05,true\r
PM08.C0D15,PM08,C0D15,3,3,Enterococcus,0.0002,true\r
PM08.C0D15,PM08,C0D15,3,4,Citrobacter,4e-05,true\r
PM08.C0D15,PM08,C0D15,3,5,Morganella,0,true\r
PM08.C0D15,PM08,C0D15,3,6,Proteus,3e-05,true\r
PM08.C0D15,PM08,C0D15,3,7,Haemophilus,0,true\r
PM08.C0D15,PM08,C0D15,3,8,Other,0.20263,true\r
PM08.C0D15,PM08,C0D15,3,9,Bacteroides,0.77177,true\r
PM08.C0D15,PM08,C0D15,3,10,Streptococcus,0.00068,true\r
PM08.C0D15,PM08,C0D15,3,11,Oscillibacter,0.00244,true\r
PM08.C0D15,PM08,C0D15,3,12,Phascolarctobacterium,1e-05,true\r
PM08.C0D15,PM08,C0D15,3,13,Faecalibacterium,0.00283,true\r
PM08.C0D15,PM08,C0D15,3,14,Mediterraneibacter,0.00059,true\r
PM08.C0D15,PM08,C0D15,3,15,Akkermansia,2e-05,true\r
PM08.C0D15,PM08,C0D15,3,16,Phocaeicola,0.01056,true\r
PM08.C0D15,PM08,C0D15,3,17,Alistipes,0.00163,true\r
PM08.C0D36,PM08,C0D36,4,0,Escherichia,0.08616,true\r
PM08.C0D36,PM08,C0D36,4,1,Klebsiella,0.00111,true\r
PM08.C0D36,PM08,C0D36,4,2,Enterobacter,6e-05,true\r
PM08.C0D36,PM08,C0D36,4,3,Enterococcus,0.00011,true\r
PM08.C0D36,PM08,C0D36,4,4,Citrobacter,0.00021,true\r
PM08.C0D36,PM08,C0D36,4,5,Morganella,0,true\r
PM08.C0D36,PM08,C0D36,4,6,Proteus,1e-05,true\r
PM08.C0D36,PM08,C0D36,4,7,Haemophilus,3e-05,true\r
PM08.C0D36,PM08,C0D36,4,8,Other,0.14098,true\r
PM08.C0D36,PM08,C0D36,4,9,Bacteroides,0.53423,true\r
PM08.C0D36,PM08,C0D36,4,10,Streptococcus,0.00179,true\r
PM08.C0D36,PM08,C0D36,4,11,Oscillibacter,0.0015,true\r
PM08.C0D36,PM08,C0D36,4,12,Phascolarctobacterium,1e-05,true\r
PM08.C0D36,PM08,C0D36,4,13,Faecalibacterium,0.00584,true\r
PM08.C0D36,PM08,C0D36,4,14,Mediterraneibacter,0.00043,true\r
PM08.C0D36,PM08,C0D36,4,15,Akkermansia,2e-05,true\r
PM08.C0D36,PM08,C0D36,4,16,Phocaeicola,0.21812,true\r
PM08.C0D36,PM08,C0D36,4,17,Alistipes,0.00402,true\r
PM08.C1D01,PM08,C1D01,5,0,Escherichia,0.11301,true\r
PM08.C1D01,PM08,C1D01,5,1,Klebsiella,0.00083,true\r
PM08.C1D01,PM08,C1D01,5,2,Enterobacter,6e-05,true\r
PM08.C1D01,PM08,C1D01,5,3,Enterococcus,0.0002,true\r
PM08.C1D01,PM08,C1D01,5,4,Citrobacter,0.00017,true\r
PM08.C1D01,PM08,C1D01,5,5,Morganella,1e-05,true\r
PM08.C1D01,PM08,C1D01,5,6,Proteus,1e-05,true\r
PM08.C1D01,PM08,C1D01,5,7,Haemophilus,0.00286,true\r
PM08.C1D01,PM08,C1D01,5,8,Other,0.17072,true\r
PM08.C1D01,PM08,C1D01,5,9,Bacteroides,0.43019,true\r
PM08.C1D01,PM08,C1D01,5,10,Streptococcus,0.00062,true\r
PM08.C1D01,PM08,C1D01,5,11,Oscillibacter,0.00219,true\r
PM08.C1D01,PM08,C1D01,5,12,Phascolarctobacterium,0,true\r
PM08.C1D01,PM08,C1D01,5,13,Faecalibacterium,0.03431,true\r
PM08.C1D01,PM08,C1D01,5,14,Mediterraneibacter,0.00072,true\r
PM08.C1D01,PM08,C1D01,5,15,Akkermansia,4e-05,true\r
PM08.C1D01,PM08,C1D01,5,16,Phocaeicola,0.22491,true\r
PM08.C1D01,PM08,C1D01,5,17,Alistipes,0.01086,true\r
PM08.C1D02,PM08,C1D02,6,0,Escherichia,0.01215,true\r
PM08.C1D02,PM08,C1D02,6,1,Klebsiella,0.00037,true\r
PM08.C1D02,PM08,C1D02,6,2,Enterobacter,3e-05,true\r
PM08.C1D02,PM08,C1D02,6,3,Enterococcus,0.0001,true\r
PM08.C1D02,PM08,C1D02,6,4,Citrobacter,4e-05,true\r
PM08.C1D02,PM08,C1D02,6,5,Morganella,0,true\r
PM08.C1D02,PM08,C1D02,6,6,Proteus,1e-05,true\r
PM08.C1D02,PM08,C1D02,6,7,Haemophilus,7e-05,true\r
PM08.C1D02,PM08,C1D02,6,8,Other,0.08032,true\r
PM08.C1D02,PM08,C1D02,6,9,Bacteroides,0.41229,true\r
PM08.C1D02,PM08,C1D02,6,10,Streptococcus,0.00072,true\r
PM08.C1D02,PM08,C1D02,6,11,Oscillibacter,0.00192,true\r
PM08.C1D02,PM08,C1D02,6,12,Phascolarctobacterium,0.0046,true\r
PM08.C1D02,PM08,C1D02,6,13,Faecalibacterium,0.01251,true\r
PM08.C1D02,PM08,C1D02,6,14,Mediterraneibacter,0.00033,true\r
PM08.C1D02,PM08,C1D02,6,15,Akkermansia,0.23075,true\r
PM08.C1D02,PM08,C1D02,6,16,Phocaeicola,0.21139,true\r
PM08.C1D02,PM08,C1D02,6,17,Alistipes,0.02604,true\r
PM08.C1D15,PM08,C1D15,7,0,Escherichia,0.03399,true\r
PM08.C1D15,PM08,C1D15,7,1,Klebsiella,0.00038,true\r
PM08.C1D15,PM08,C1D15,7,2,Enterobacter,3e-05,true\r
PM08.C1D15,PM08,C1D15,7,3,Enterococcus,6e-05,true\r
PM08.C1D15,PM08,C1D15,7,4,Citrobacter,8e-05,true\r
PM08.C1D15,PM08,C1D15,7,5,Morganella,0,true\r
PM08.C1D15,PM08,C1D15,7,6,Proteus,1e-05,true\r
PM08.C1D15,PM08,C1D15,7,7,Haemophilus,0,true\r
PM08.C1D15,PM08,C1D15,7,8,Other,0.14099,true\r
PM08.C1D15,PM08,C1D15,7,9,Bacteroides,0.51879,true\r
PM08.C1D15,PM08,C1D15,7,10,Streptococcus,0.00015,true\r
PM08.C1D15,PM08,C1D15,7,11,Oscillibacter,0.0009,true\r
PM08.C1D15,PM08,C1D15,7,12,Phascolarctobacterium,0,true\r
PM08.C1D15,PM08,C1D15,7,13,Faecalibacterium,0.00013,true\r
PM08.C1D15,PM08,C1D15,7,14,Mediterraneibacter,0.00016,true\r
PM08.C1D15,PM08,C1D15,7,15,Akkermansia,0.01085,true\r
PM08.C1D15,PM08,C1D15,7,16,Phocaeicola,0.26399,true\r
PM08.C1D15,PM08,C1D15,7,17,Alistipes,0.02528,true\r
PM08.C1D36,PM08,C1D36,8,0,Escherichia,2e-05,true\r
PM08.C1D36,PM08,C1D36,8,1,Klebsiella,1e-05,true\r
PM08.C1D36,PM08,C1D36,8,2,Enterobacter,0,true\r
PM08.C1D36,PM08,C1D36,8,3,Enterococcus,2e-05,true\r
PM08.C1D36,PM08,C1D36,8,4,Citrobacter,0.00018,true\r
PM08.C1D36,PM08,C1D36,8,5,Morganella,0,true\r
PM08.C1D36,PM08,C1D36,8,6,Proteus,1e-05,true\r
PM08.C1D36,PM08,C1D36,8,7,Haemophilus,0,true\r
PM08.C1D36,PM08,C1D36,8,8,Other,0.0979,true\r
PM08.C1D36,PM08,C1D36,8,9,Bacteroides,0.6769,true\r
PM08.C1D36,PM08,C1D36,8,10,Streptococcus,0.00013,true\r
PM08.C1D36,PM08,C1D36,8,11,Oscillibacter,0,true\r
PM08.C1D36,PM08,C1D36,8,12,Phascolarctobacterium,0,true\r
PM08.C1D36,PM08,C1D36,8,13,Faecalibacterium,0,true\r
PM08.C1D36,PM08,C1D36,8,14,Mediterraneibacter,1e-05,true\r
PM08.C1D36,PM08,C1D36,8,15,Akkermansia,0,true\r
PM08.C1D36,PM08,C1D36,8,16,Phocaeicola,0.21442,true\r
PM08.C1D36,PM08,C1D36,8,17,Alistipes,0.00868,true\r
PM09.S3,PM09,Screen,0,0,Escherichia,0.01482,true\r
PM09.S3,PM09,Screen,0,1,Klebsiella,0.00132,true\r
PM09.S3,PM09,Screen,0,2,Enterobacter,0.00072,true\r
PM09.S3,PM09,Screen,0,3,Enterococcus,0.00138,true\r
PM09.S3,PM09,Screen,0,4,Citrobacter,0.06474,true\r
PM09.S3,PM09,Screen,0,5,Morganella,0.00215,true\r
PM09.S3,PM09,Screen,0,6,Proteus,0.00739,true\r
PM09.S3,PM09,Screen,0,7,Haemophilus,5e-05,true\r
PM09.S3,PM09,Screen,0,8,Other,0.42106,true\r
PM09.S3,PM09,Screen,0,9,Bacteroides,0.42463,true\r
PM09.S3,PM09,Screen,0,10,Streptococcus,0.00133,true\r
PM09.S3,PM09,Screen,0,11,Oscillibacter,0.01819,true\r
PM09.S3,PM09,Screen,0,12,Phascolarctobacterium,4e-05,true\r
PM09.S3,PM09,Screen,0,13,Faecalibacterium,0.00738,true\r
PM09.S3,PM09,Screen,0,14,Mediterraneibacter,0.00302,true\r
PM09.S3,PM09,Screen,0,15,Akkermansia,0.00036,true\r
PM09.S3,PM09,Screen,0,16,Phocaeicola,0.02361,true\r
PM09.S3,PM09,Screen,0,17,Alistipes,0.001,true\r
PM09.C1D01,PM09,C1D01,5,0,Escherichia,0.00694,true\r
PM09.C1D01,PM09,C1D01,5,1,Klebsiella,0.00049,true\r
PM09.C1D01,PM09,C1D01,5,2,Enterobacter,0.00029,true\r
PM09.C1D01,PM09,C1D01,5,3,Enterococcus,0.00042,true\r
PM09.C1D01,PM09,C1D01,5,4,Citrobacter,0.00368,true\r
PM09.C1D01,PM09,C1D01,5,5,Morganella,5e-05,true\r
PM09.C1D01,PM09,C1D01,5,6,Proteus,0.00207,true\r
PM09.C1D01,PM09,C1D01,5,7,Haemophilus,0.00034,true\r
PM09.C1D01,PM09,C1D01,5,8,Other,0.32419,true\r
PM09.C1D01,PM09,C1D01,5,9,Bacteroides,0.62542,true\r
PM09.C1D01,PM09,C1D01,5,10,Streptococcus,0.00138,true\r
PM09.C1D01,PM09,C1D01,5,11,Oscillibacter,0.00354,true\r
PM09.C1D01,PM09,C1D01,5,12,Phascolarctobacterium,3e-05,true\r
PM09.C1D01,PM09,C1D01,5,13,Faecalibacterium,0.00214,true\r
PM09.C1D01,PM09,C1D01,5,14,Mediterraneibacter,0.00099,true\r
PM09.C1D01,PM09,C1D01,5,15,Akkermansia,0.00035,true\r
PM09.C1D01,PM09,C1D01,5,16,Phocaeicola,0.02018,true\r
PM09.C1D01,PM09,C1D01,5,17,Alistipes,0.00104,true\r
PM09.C1D15,PM09,C1D15,7,0,Escherichia,0.00692,true\r
PM09.C1D15,PM09,C1D15,7,1,Klebsiella,0.00026,true\r
PM09.C1D15,PM09,C1D15,7,2,Enterobacter,0.0002,true\r
PM09.C1D15,PM09,C1D15,7,3,Enterococcus,0.00065,true\r
PM09.C1D15,PM09,C1D15,7,4,Citrobacter,0.00352,true\r
PM09.C1D15,PM09,C1D15,7,5,Morganella,0.00023,true\r
PM09.C1D15,PM09,C1D15,7,6,Proteus,4e-05,true\r
PM09.C1D15,PM09,C1D15,7,7,Haemophilus,4e-05,true\r
PM09.C1D15,PM09,C1D15,7,8,Other,0.42104,true\r
PM09.C1D15,PM09,C1D15,7,9,Bacteroides,0.25414,true\r
PM09.C1D15,PM09,C1D15,7,10,Streptococcus,0.00053,true\r
PM09.C1D15,PM09,C1D15,7,11,Oscillibacter,0.00351,true\r
PM09.C1D15,PM09,C1D15,7,12,Phascolarctobacterium,0.02178,true\r
PM09.C1D15,PM09,C1D15,7,13,Faecalibacterium,0.00472,true\r
PM09.C1D15,PM09,C1D15,7,14,Mediterraneibacter,0.00043,true\r
PM09.C1D15,PM09,C1D15,7,15,Akkermansia,0.16315,true\r
PM09.C1D15,PM09,C1D15,7,16,Phocaeicola,0.03407,true\r
PM09.C1D15,PM09,C1D15,7,17,Alistipes,0.07884,true\r
PM09.C1D36,PM09,C1D36,8,0,Escherichia,0.00729,true\r
PM09.C1D36,PM09,C1D36,8,1,Klebsiella,0.00022,true\r
PM09.C1D36,PM09,C1D36,8,2,Enterobacter,0.00012,true\r
PM09.C1D36,PM09,C1D36,8,3,Enterococcus,0.00011,true\r
PM09.C1D36,PM09,C1D36,8,4,Citrobacter,0.00021,true\r
PM09.C1D36,PM09,C1D36,8,5,Morganella,3e-05,true\r
PM09.C1D36,PM09,C1D36,8,6,Proteus,0.00023,true\r
PM09.C1D36,PM09,C1D36,8,7,Haemophilus,2e-05,true\r
PM09.C1D36,PM09,C1D36,8,8,Other,0.17383,true\r
PM09.C1D36,PM09,C1D36,8,9,Bacteroides,0.4472,true\r
PM09.C1D36,PM09,C1D36,8,10,Streptococcus,0.00023,true\r
PM09.C1D36,PM09,C1D36,8,11,Oscillibacter,0.00485,true\r
PM09.C1D36,PM09,C1D36,8,12,Phascolarctobacterium,0.01773,true\r
PM09.C1D36,PM09,C1D36,8,13,Faecalibacterium,0.02499,true\r
PM09.C1D36,PM09,C1D36,8,14,Mediterraneibacter,0.00018,true\r
PM09.C1D36,PM09,C1D36,8,15,Akkermansia,0.20546,true\r
PM09.C1D36,PM09,C1D36,8,16,Phocaeicola,0.06533,true\r
PM09.C1D36,PM09,C1D36,8,17,Alistipes,0.04726,true\r
PM12.S1,PM12,Screen,0,0,Escherichia,0.00154,true\r
PM12.S1,PM12,Screen,0,1,Klebsiella,7e-05,true\r
PM12.S1,PM12,Screen,0,2,Enterobacter,4e-05,true\r
PM12.S1,PM12,Screen,0,3,Enterococcus,0.00273,true\r
PM12.S1,PM12,Screen,0,4,Citrobacter,8e-05,true\r
PM12.S1,PM12,Screen,0,5,Morganella,0,true\r
PM12.S1,PM12,Screen,0,6,Proteus,1e-05,true\r
PM12.S1,PM12,Screen,0,7,Haemophilus,1e-05,true\r
PM12.S1,PM12,Screen,0,8,Other,0.38386,true\r
PM12.S1,PM12,Screen,0,9,Bacteroides,0.17383,true\r
PM12.S1,PM12,Screen,0,10,Streptococcus,0.00034,true\r
PM12.S1,PM12,Screen,0,11,Oscillibacter,0.00032,true\r
PM12.S1,PM12,Screen,0,12,Phascolarctobacterium,1e-05,true\r
PM12.S1,PM12,Screen,0,13,Faecalibacterium,0.00039,true\r
PM12.S1,PM12,Screen,0,14,Mediterraneibacter,8e-05,true\r
PM12.S1,PM12,Screen,0,15,Akkermansia,2e-05,true\r
PM12.S1,PM12,Screen,0,16,Phocaeicola,0.27835,true\r
PM12.S1,PM12,Screen,0,17,Alistipes,0.15391,true\r
PM12.C0D01,PM12,C0D01,1,0,Escherichia,0.00048,true\r
PM12.C0D01,PM12,C0D01,1,1,Klebsiella,8e-05,true\r
PM12.C0D01,PM12,C0D01,1,2,Enterobacter,6e-05,true\r
PM12.C0D01,PM12,C0D01,1,3,Enterococcus,0.00345,true\r
PM12.C0D01,PM12,C0D01,1,4,Citrobacter,0.00011,true\r
PM12.C0D01,PM12,C0D01,1,5,Morganella,1e-05,true\r
PM12.C0D01,PM12,C0D01,1,6,Proteus,1e-05,true\r
PM12.C0D01,PM12,C0D01,1,7,Haemophilus,0,true\r
PM12.C0D01,PM12,C0D01,1,8,Other,0.36621,true\r
PM12.C0D01,PM12,C0D01,1,9,Bacteroides,0.3734,true\r
PM12.C0D01,PM12,C0D01,1,10,Streptococcus,0.00059,true\r
PM12.C0D01,PM12,C0D01,1,11,Oscillibacter,0.00048,true\r
PM12.C0D01,PM12,C0D01,1,12,Phascolarctobacterium,1e-05,true\r
PM12.C0D01,PM12,C0D01,1,13,Faecalibacterium,0.00052,true\r
PM12.C0D01,PM12,C0D01,1,14,Mediterraneibacter,0.00014,true\r
PM12.C0D01,PM12,C0D01,1,15,Akkermansia,4e-05,true\r
PM12.C0D01,PM12,C0D01,1,16,Phocaeicola,0.21754,true\r
PM12.C0D01,PM12,C0D01,1,17,Alistipes,0.03081,true\r
PM12.C0D02,PM12,C0D02,2,0,Escherichia,0.00062,true\r
PM12.C0D02,PM12,C0D02,2,1,Klebsiella,4e-05,true\r
PM12.C0D02,PM12,C0D02,2,2,Enterobacter,3e-05,true\r
PM12.C0D02,PM12,C0D02,2,3,Enterococcus,0.00734,true\r
PM12.C0D02,PM12,C0D02,2,4,Citrobacter,7e-05,true\r
PM12.C0D02,PM12,C0D02,2,5,Morganella,0,true\r
PM12.C0D02,PM12,C0D02,2,6,Proteus,0,true\r
PM12.C0D02,PM12,C0D02,2,7,Haemophilus,0,true\r
PM12.C0D02,PM12,C0D02,2,8,Other,0.32847,true\r
PM12.C0D02,PM12,C0D02,2,9,Bacteroides,0.28364,true\r
PM12.C0D02,PM12,C0D02,2,10,Streptococcus,0.00258,true\r
PM12.C0D02,PM12,C0D02,2,11,Oscillibacter,7e-05,true\r
PM12.C0D02,PM12,C0D02,2,12,Phascolarctobacterium,0,true\r
PM12.C0D02,PM12,C0D02,2,13,Faecalibacterium,0.00012,true\r
PM12.C0D02,PM12,C0D02,2,14,Mediterraneibacter,9e-05,true\r
PM12.C0D02,PM12,C0D02,2,15,Akkermansia,7e-05,true\r
PM12.C0D02,PM12,C0D02,2,16,Phocaeicola,0.34638,true\r
PM12.C0D02,PM12,C0D02,2,17,Alistipes,0.02722,true\r
PM12.C0D15,PM12,C0D15,3,0,Escherichia,0.01876,true\r
PM12.C0D15,PM12,C0D15,3,1,Klebsiella,0.00062,true\r
PM12.C0D15,PM12,C0D15,3,2,Enterobacter,8e-05,true\r
PM12.C0D15,PM12,C0D15,3,3,Enterococcus,0.00033,true\r
PM12.C0D15,PM12,C0D15,3,4,Citrobacter,0.00018,true\r
PM12.C0D15,PM12,C0D15,3,5,Morganella,0.0017,true\r
PM12.C0D15,PM12,C0D15,3,6,Proteus,0,true\r
PM12.C0D15,PM12,C0D15,3,7,Haemophilus,0.01219,true\r
PM12.C0D15,PM12,C0D15,3,8,Other,0.30392,true\r
PM12.C0D15,PM12,C0D15,3,9,Bacteroides,0.44211,true\r
PM12.C0D15,PM12,C0D15,3,10,Streptococcus,0.005,true\r
PM12.C0D15,PM12,C0D15,3,11,Oscillibacter,0.00038,true\r
PM12.C0D15,PM12,C0D15,3,12,Phascolarctobacterium,1e-05,true\r
PM12.C0D15,PM12,C0D15,3,13,Faecalibacterium,0.00039,true\r
PM12.C0D15,PM12,C0D15,3,14,Mediterraneibacter,0.00014,true\r
PM12.C0D15,PM12,C0D15,3,15,Akkermansia,5e-05,true\r
PM12.C0D15,PM12,C0D15,3,16,Phocaeicola,0.19397,true\r
PM12.C0D15,PM12,C0D15,3,17,Alistipes,0.01516,true\r
PM12.C0D36,PM12,C0D36,4,0,Escherichia,0.06811,true\r
PM12.C0D36,PM12,C0D36,4,1,Klebsiella,0.00375,true\r
PM12.C0D36,PM12,C0D36,4,2,Enterobacter,0.00015,true\r
PM12.C0D36,PM12,C0D36,4,3,Enterococcus,0.00016,true\r
PM12.C0D36,PM12,C0D36,4,4,Citrobacter,0.00027,true\r
PM12.C0D36,PM12,C0D36,4,5,Morganella,0.00046,true\r
PM12.C0D36,PM12,C0D36,4,6,Proteus,0,true\r
PM12.C0D36,PM12,C0D36,4,7,Haemophilus,0.00297,true\r
PM12.C0D36,PM12,C0D36,4,8,Other,0.27802,true\r
PM12.C0D36,PM12,C0D36,4,9,Bacteroides,0.46398,true\r
PM12.C0D36,PM12,C0D36,4,10,Streptococcus,0.00677,true\r
PM12.C0D36,PM12,C0D36,4,11,Oscillibacter,0.00087,true\r
PM12.C0D36,PM12,C0D36,4,12,Phascolarctobacterium,1e-05,true\r
PM12.C0D36,PM12,C0D36,4,13,Faecalibacterium,0.00041,true\r
PM12.C0D36,PM12,C0D36,4,14,Mediterraneibacter,0.00019,true\r
PM12.C0D36,PM12,C0D36,4,15,Akkermansia,3e-05,true\r
PM12.C0D36,PM12,C0D36,4,16,Phocaeicola,0.15525,true\r
PM12.C0D36,PM12,C0D36,4,17,Alistipes,0.01324,true\r
PM13.S1,PM13,Screen,0,0,Escherichia,0.00123,true\r
PM13.S1,PM13,Screen,0,1,Klebsiella,0.00125,true\r
PM13.S1,PM13,Screen,0,2,Enterobacter,0.00029,true\r
PM13.S1,PM13,Screen,0,3,Enterococcus,0.00075,true\r
PM13.S1,PM13,Screen,0,4,Citrobacter,0.00023,true\r
PM13.S1,PM13,Screen,0,5,Morganella,2e-05,true\r
PM13.S1,PM13,Screen,0,6,Proteus,0.00251,true\r
PM13.S1,PM13,Screen,0,7,Haemophilus,4e-05,true\r
PM13.S1,PM13,Screen,0,8,Other,0.48591,true\r
PM13.S1,PM13,Screen,0,9,Bacteroides,0.32371,true\r
PM13.S1,PM13,Screen,0,10,Streptococcus,0.00937,true\r
PM13.S1,PM13,Screen,0,11,Oscillibacter,0.00249,true\r
PM13.S1,PM13,Screen,0,12,Phascolarctobacterium,4e-05,true\r
PM13.S1,PM13,Screen,0,13,Faecalibacterium,0.02256,true\r
PM13.S1,PM13,Screen,0,14,Mediterraneibacter,0.00931,true\r
PM13.S1,PM13,Screen,0,15,Akkermansia,0.00011,true\r
PM13.S1,PM13,Screen,0,16,Phocaeicola,0.08877,true\r
PM13.S1,PM13,Screen,0,17,Alistipes,0.0388,true\r
PM13.C1D01,PM13,C1D01,5,0,Escherichia,0.00115,true\r
PM13.C1D01,PM13,C1D01,5,1,Klebsiella,0.00059,true\r
PM13.C1D01,PM13,C1D01,5,2,Enterobacter,0.00022,true\r
PM13.C1D01,PM13,C1D01,5,3,Enterococcus,0.00047,true\r
PM13.C1D01,PM13,C1D01,5,4,Citrobacter,0.00016,true\r
PM13.C1D01,PM13,C1D01,5,5,Morganella,5e-05,true\r
PM13.C1D01,PM13,C1D01,5,6,Proteus,0.00679,true\r
PM13.C1D01,PM13,C1D01,5,7,Haemophilus,4e-05,true\r
PM13.C1D01,PM13,C1D01,5,8,Other,0.21909,true\r
PM13.C1D01,PM13,C1D01,5,9,Bacteroides,0.37871,true\r
PM13.C1D01,PM13,C1D01,5,10,Streptococcus,0.0013,true\r
PM13.C1D01,PM13,C1D01,5,11,Oscillibacter,0.00923,true\r
PM13.C1D01,PM13,C1D01,5,12,Phascolarctobacterium,5e-05,true\r
PM13.C1D01,PM13,C1D01,5,13,Faecalibacterium,0.0109,true\r
PM13.C1D01,PM13,C1D01,5,14,Mediterraneibacter,0.00374,true\r
PM13.C1D01,PM13,C1D01,5,15,Akkermansia,0.0001,true\r
PM13.C1D01,PM13,C1D01,5,16,Phocaeicola,0.31476,true\r
PM13.C1D01,PM13,C1D01,5,17,Alistipes,0.02385,true\r
PM13.C1D02,PM13,C1D02,6,0,Escherichia,0.00061,true\r
PM13.C1D02,PM13,C1D02,6,1,Klebsiella,0.00162,true\r
PM13.C1D02,PM13,C1D02,6,2,Enterobacter,0.00027,true\r
PM13.C1D02,PM13,C1D02,6,3,Enterococcus,0.00032,true\r
PM13.C1D02,PM13,C1D02,6,4,Citrobacter,7e-05,true\r
PM13.C1D02,PM13,C1D02,6,5,Morganella,2e-05,true\r
PM13.C1D02,PM13,C1D02,6,6,Proteus,0.00125,true\r
PM13.C1D02,PM13,C1D02,6,7,Haemophilus,2e-05,true\r
PM13.C1D02,PM13,C1D02,6,8,Other,0.14349,true\r
PM13.C1D02,PM13,C1D02,6,9,Bacteroides,0.20324,true\r
PM13.C1D02,PM13,C1D02,6,10,Streptococcus,0.00115,true\r
PM13.C1D02,PM13,C1D02,6,11,Oscillibacter,0.00152,true\r
PM13.C1D02,PM13,C1D02,6,12,Phascolarctobacterium,0.00379,true\r
PM13.C1D02,PM13,C1D02,6,13,Faecalibacterium,0.00461,true\r
PM13.C1D02,PM13,C1D02,6,14,Mediterraneibacter,0.00704,true\r
PM13.C1D02,PM13,C1D02,6,15,Akkermansia,0.34865,true\r
PM13.C1D02,PM13,C1D02,6,16,Phocaeicola,0.2542,true\r
PM13.C1D02,PM13,C1D02,6,17,Alistipes,0.01363,true\r
PM13.C1D15,PM13,C1D15,7,0,Escherichia,0.00402,true\r
PM13.C1D15,PM13,C1D15,7,1,Klebsiella,0.00235,true\r
PM13.C1D15,PM13,C1D15,7,2,Enterobacter,0.0001,true\r
PM13.C1D15,PM13,C1D15,7,3,Enterococcus,0.00019,true\r
PM13.C1D15,PM13,C1D15,7,4,Citrobacter,0.0001,true\r
PM13.C1D15,PM13,C1D15,7,5,Morganella,2e-05,true\r
PM13.C1D15,PM13,C1D15,7,6,Proteus,0,true\r
PM13.C1D15,PM13,C1D15,7,7,Haemophilus,1e-05,true\r
PM13.C1D15,PM13,C1D15,7,8,Other,0.14065,true\r
PM13.C1D15,PM13,C1D15,7,9,Bacteroides,0.50753,true\r
PM13.C1D15,PM13,C1D15,7,10,Streptococcus,0.00196,true\r
PM13.C1D15,PM13,C1D15,7,11,Oscillibacter,0.0084,true\r
PM13.C1D15,PM13,C1D15,7,12,Phascolarctobacterium,0.01417,true\r
PM13.C1D15,PM13,C1D15,7,13,Faecalibacterium,0.01632,true\r
PM13.C1D15,PM13,C1D15,7,14,Mediterraneibacter,0.00113,true\r
PM13.C1D15,PM13,C1D15,7,15,Akkermansia,9e-05,true\r
PM13.C1D15,PM13,C1D15,7,16,Phocaeicola,0.25061,true\r
PM13.C1D15,PM13,C1D15,7,17,Alistipes,0.03237,true\r
PM13.C1D36,PM13,C1D36,8,0,Escherichia,0.00356,true\r
PM13.C1D36,PM13,C1D36,8,1,Klebsiella,0.00026,true\r
PM13.C1D36,PM13,C1D36,8,2,Enterobacter,0.00014,true\r
PM13.C1D36,PM13,C1D36,8,3,Enterococcus,0.00024,true\r
PM13.C1D36,PM13,C1D36,8,4,Citrobacter,0.00018,true\r
PM13.C1D36,PM13,C1D36,8,5,Morganella,5e-05,true\r
PM13.C1D36,PM13,C1D36,8,6,Proteus,1e-05,true\r
PM13.C1D36,PM13,C1D36,8,7,Haemophilus,3e-05,true\r
PM13.C1D36,PM13,C1D36,8,8,Other,0.17912,true\r
PM13.C1D36,PM13,C1D36,8,9,Bacteroides,0.46518,true\r
PM13.C1D36,PM13,C1D36,8,10,Streptococcus,0.00043,true\r
PM13.C1D36,PM13,C1D36,8,11,Oscillibacter,0.00902,true\r
PM13.C1D36,PM13,C1D36,8,12,Phascolarctobacterium,0.00761,true\r
PM13.C1D36,PM13,C1D36,8,13,Faecalibacterium,0.04396,true\r
PM13.C1D36,PM13,C1D36,8,14,Mediterraneibacter,0.00098,true\r
PM13.C1D36,PM13,C1D36,8,15,Akkermansia,0.01276,true\r
PM13.C1D36,PM13,C1D36,8,16,Phocaeicola,0.18601,true\r
PM13.C1D36,PM13,C1D36,8,17,Alistipes,0.0478,true\r
SD01.0419001,SD01,FMT A,9,0,Escherichia,0.00232,true\r
SD01.0419001,SD01,FMT A,9,1,Klebsiella,0.00027,true\r
SD01.0419001,SD01,FMT A,9,2,Enterobacter,0.00018,true\r
SD01.0419001,SD01,FMT A,9,3,Enterococcus,0.00027,true\r
SD01.0419001,SD01,FMT A,9,4,Citrobacter,0.00013,true\r
SD01.0419001,SD01,FMT A,9,5,Morganella,2e-05,true\r
SD01.0419001,SD01,FMT A,9,6,Proteus,1e-05,true\r
SD01.0419001,SD01,FMT A,9,7,Haemophilus,0.00018,true\r
SD01.0419001,SD01,FMT A,9,8,Other,0.16226,true\r
SD01.0419001,SD01,FMT A,9,9,Bacteroides,0.48716,true\r
SD01.0419001,SD01,FMT A,9,10,Streptococcus,0.0019,true\r
SD01.0419001,SD01,FMT A,9,11,Oscillibacter,0.00487,true\r
SD01.0419001,SD01,FMT A,9,12,Phascolarctobacterium,0.01602,true\r
SD01.0419001,SD01,FMT A,9,13,Faecalibacterium,0.01587,true\r
SD01.0419001,SD01,FMT A,9,14,Mediterraneibacter,0.0016,true\r
SD01.0419001,SD01,FMT A,9,15,Akkermansia,0.03557,true\r
SD01.0419001,SD01,FMT A,9,16,Phocaeicola,0.17358,true\r
SD01.0419001,SD01,FMT A,9,17,Alistipes,0.0436,true\r
SD01.0419002,SD01,FMT B,10,0,Escherichia,0.00128,true\r
SD01.0419002,SD01,FMT B,10,1,Klebsiella,0.00035,true\r
SD01.0419002,SD01,FMT B,10,2,Enterobacter,0.00018,true\r
SD01.0419002,SD01,FMT B,10,3,Enterococcus,0.00024,true\r
SD01.0419002,SD01,FMT B,10,4,Citrobacter,0.00013,true\r
SD01.0419002,SD01,FMT B,10,5,Morganella,2e-05,true\r
SD01.0419002,SD01,FMT B,10,6,Proteus,1e-05,true\r
SD01.0419002,SD01,FMT B,10,7,Haemophilus,3e-05,true\r
SD01.0419002,SD01,FMT B,10,8,Other,0.16123,true\r
SD01.0419002,SD01,FMT B,10,9,Bacteroides,0.46316,true\r
SD01.0419002,SD01,FMT B,10,10,Streptococcus,0.00145,true\r
SD01.0419002,SD01,FMT B,10,11,Oscillibacter,0.00461,true\r
SD01.0419002,SD01,FMT B,10,12,Phascolarctobacterium,0.01538,true\r
SD01.0419002,SD01,FMT B,10,13,Faecalibacterium,0.01583,true\r
SD01.0419002,SD01,FMT B,10,14,Mediterraneibacter,0.00122,true\r
SD01.0419002,SD01,FMT B,10,15,Akkermansia,0.04163,true\r
SD01.0419002,SD01,FMT B,10,16,Phocaeicola,0.18404,true\r
SD01.0419002,SD01,FMT B,10,17,Alistipes,0.03827,true\r
SD01.0419003,SD01,FMT C,11,0,Escherichia,0.00176,true\r
SD01.0419003,SD01,FMT C,11,1,Klebsiella,0.00031,true\r
SD01.0419003,SD01,FMT C,11,2,Enterobacter,0.00015,true\r
SD01.0419003,SD01,FMT C,11,3,Enterococcus,0.00031,true\r
SD01.0419003,SD01,FMT C,11,4,Citrobacter,0.00014,true\r
SD01.0419003,SD01,FMT C,11,5,Morganella,2e-05,true\r
SD01.0419003,SD01,FMT C,11,6,Proteus,1e-05,true\r
SD01.0419003,SD01,FMT C,11,7,Haemophilus,4e-05,true\r
SD01.0419003,SD01,FMT C,11,8,Other,0.17233,true\r
SD01.0419003,SD01,FMT C,11,9,Bacteroides,0.38486,true\r
SD01.0419003,SD01,FMT C,11,10,Streptococcus,0.00104,true\r
SD01.0419003,SD01,FMT C,11,11,Oscillibacter,0.00502,true\r
SD01.0419003,SD01,FMT C,11,12,Phascolarctobacterium,0.01786,true\r
SD01.0419003,SD01,FMT C,11,13,Faecalibacterium,0.03588,true\r
SD01.0419003,SD01,FMT C,11,14,Mediterraneibacter,0.00166,true\r
SD01.0419003,SD01,FMT C,11,15,Akkermansia,0.04186,true\r
SD01.0419003,SD01,FMT C,11,16,Phocaeicola,0.21191,true\r
SD01.0419003,SD01,FMT C,11,17,Alistipes,0.03185,true\r
SD01.0718001,SD01,FMT D,12,0,Escherichia,0.00221,true\r
SD01.0718001,SD01,FMT D,12,1,Klebsiella,0.00018,true\r
SD01.0718001,SD01,FMT D,12,2,Enterobacter,9e-05,true\r
SD01.0718001,SD01,FMT D,12,3,Enterococcus,0.00016,true\r
SD01.0718001,SD01,FMT D,12,4,Citrobacter,8e-05,true\r
SD01.0718001,SD01,FMT D,12,5,Morganella,1e-05,true\r
SD01.0718001,SD01,FMT D,12,6,Proteus,0,true\r
SD01.0718001,SD01,FMT D,12,7,Haemophilus,0.00016,true\r
SD01.0718001,SD01,FMT D,12,8,Other,0.11493,true\r
SD01.0718001,SD01,FMT D,12,9,Bacteroides,0.53638,true\r
SD01.0718001,SD01,FMT D,12,10,Streptococcus,0.00126,true\r
SD01.0718001,SD01,FMT D,12,11,Oscillibacter,0.00329,true\r
SD01.0718001,SD01,FMT D,12,12,Phascolarctobacterium,0.01035,true\r
SD01.0718001,SD01,FMT D,12,13,Faecalibacterium,0.01594,true\r
SD01.0718001,SD01,FMT D,12,14,Mediterraneibacter,0.00078,true\r
SD01.0718001,SD01,FMT D,12,15,Akkermansia,0.02349,true\r
SD01.0718001,SD01,FMT D,12,16,Phocaeicola,0.21649,true\r
SD01.0718001,SD01,FMT D,12,17,Alistipes,0.01991,true\r
SD01.0818001,SD01,FMT E,13,0,Escherichia,0.00459,true\r
SD01.0818001,SD01,FMT E,13,1,Klebsiella,0.0001,true\r
SD01.0818001,SD01,FMT E,13,2,Enterobacter,7e-05,true\r
SD01.0818001,SD01,FMT E,13,3,Enterococcus,0.0003,true\r
SD01.0818001,SD01,FMT E,13,4,Citrobacter,0.00015,true\r
SD01.0818001,SD01,FMT E,13,5,Morganella,1e-05,true\r
SD01.0818001,SD01,FMT E,13,6,Proteus,0,true\r
SD01.0818001,SD01,FMT E,13,7,Haemophilus,0.00056,true\r
SD01.0818001,SD01,FMT E,13,8,Other,0.16353,true\r
SD01.0818001,SD01,FMT E,13,9,Bacteroides,0.4024,true\r
SD01.0818001,SD01,FMT E,13,10,Streptococcus,0.00522,true\r
SD01.0818001,SD01,FMT E,13,11,Oscillibacter,0.00599,true\r
SD01.0818001,SD01,FMT E,13,12,Phascolarctobacterium,0.0279,true\r
SD01.0818001,SD01,FMT E,13,13,Faecalibacterium,0.01728,true\r
SD01.0818001,SD01,FMT E,13,14,Mediterraneibacter,0.00175,true\r
SD01.0818001,SD01,FMT E,13,15,Akkermansia,0.05178,true\r
SD01.0818001,SD01,FMT E,13,16,Phocaeicola,0.18065,true\r
SD01.0818001,SD01,FMT E,13,17,Alistipes,0.02136,true\r
SD01.0818002,SD01,FMT F,14,0,Escherichia,0.00146,true\r
SD01.0818002,SD01,FMT F,14,1,Klebsiella,0.00015,true\r
SD01.0818002,SD01,FMT F,14,2,Enterobacter,0.00013,true\r
SD01.0818002,SD01,FMT F,14,3,Enterococcus,0.00024,true\r
SD01.0818002,SD01,FMT F,14,4,Citrobacter,0.00011,true\r
SD01.0818002,SD01,FMT F,14,5,Morganella,1e-05,true\r
SD01.0818002,SD01,FMT F,14,6,Proteus,1e-05,true\r
SD01.0818002,SD01,FMT F,14,7,Haemophilus,0.0001,true\r
SD01.0818002,SD01,FMT F,14,8,Other,0.13308,true\r
SD01.0818002,SD01,FMT F,14,9,Bacteroides,0.39743,true\r
SD01.0818002,SD01,FMT F,14,10,Streptococcus,0.00078,true\r
SD01.0818002,SD01,FMT F,14,11,Oscillibacter,0.00401,true\r
SD01.0818002,SD01,FMT F,14,12,Phascolarctobacterium,0.01153,true\r
SD01.0818002,SD01,FMT F,14,13,Faecalibacterium,0.04112,true\r
SD01.0818002,SD01,FMT F,14,14,Mediterraneibacter,0.00148,true\r
SD01.0818002,SD01,FMT F,14,15,Akkermansia,0.0345,true\r
SD01.0818002,SD01,FMT F,14,16,Phocaeicola,0.2287,true\r
SD01.0818002,SD01,FMT F,14,17,Alistipes,0.02868,true\r
`, H0 = `sample,id,cycle,cycle_label,day,inverse_simpson,source_class\r
PM01.C1D01,PM01,C1,FMT Cycle 1,D01,7.060625966,derived-from-true\r
PM01.C1D02,PM01,C1,FMT Cycle 1,D02,10.92244666,derived-from-true\r
PM01.C1D15,PM01,C1,FMT Cycle 1,D15,18.28046385,derived-from-true\r
PM01.C1D36,PM01,C1,FMT Cycle 1,D36,16.90616867,derived-from-true\r
PM02.C1D01,PM02,C1,FMT Cycle 1,D01,6.150221974,derived-from-true\r
PM02.C1D02,PM02,C1,FMT Cycle 1,D02,16.45245992,derived-from-true\r
PM02.C1D15,PM02,C1,FMT Cycle 1,D15,11.71415688,derived-from-true\r
PM02.C1D36,PM02,C1,FMT Cycle 1,D36,12.08321378,derived-from-true\r
PM03.C0D01,PM03,C0,Observation,D01,12.92810729,derived-from-true\r
PM03.C0D02,PM03,C0,Observation,D02,6.354428733,derived-from-true\r
PM03.C0D15,PM03,C0,Observation,D15,6.511129657,derived-from-true\r
PM03.C0D36,PM03,C0,Observation,D36,8.496795629,derived-from-true\r
PM03.C1D01,PM03,C1,FMT Cycle 1,D01,6.475917221,derived-from-true\r
PM03.C1D02,PM03,C1,FMT Cycle 1,D02,9.059703338,derived-from-true\r
PM03.C1D15,PM03,C1,FMT Cycle 1,D15,9.349824237,derived-from-true\r
PM03.C1D36,PM03,C1,FMT Cycle 1,D36,11.17247165,derived-from-true\r
PM03.C2D01,PM03,C2,FMT Cycle 2,D01,7.718405039,derived-from-true\r
PM03.C2D02,PM03,C2,FMT Cycle 2,D02,9.745838454,derived-from-true\r
PM03.C2D15,PM03,C2,FMT Cycle 2,D15,13.14879995,derived-from-true\r
PM03.C2D36,PM03,C2,FMT Cycle 2,D36,14.33155758,derived-from-true\r
PM04.C1D01,PM04,C1,FMT Cycle 1,D01,8.13157927,derived-from-true\r
PM04.C1D02,PM04,C1,FMT Cycle 1,D02,7.82013374,derived-from-true\r
PM04.C1D15,PM04,C1,FMT Cycle 1,D15,12.85874684,derived-from-true\r
PM04.C1D36,PM04,C1,FMT Cycle 1,D36,11.30058917,derived-from-true\r
PM04.C2D01,PM04,C2,FMT Cycle 2,D01,11.69957449,derived-from-true\r
PM04.C2D02,PM04,C2,FMT Cycle 2,D02,8.366442351,derived-from-true\r
PM04.C2D15,PM04,C2,FMT Cycle 2,D15,12.81021334,derived-from-true\r
PM04.C2D36,PM04,C2,FMT Cycle 2,D36,9.718726734,derived-from-true\r
PM05.C0D01,PM05,C0,Observation,D01,7.002653506,derived-from-true\r
PM05.C0D02,PM05,C0,Observation,D02,6.757892841,derived-from-true\r
PM05.C0D15,PM05,C0,Observation,D15,18.36289867,derived-from-true\r
PM05.C0D36,PM05,C0,Observation,D36,11.04703379,derived-from-true\r
PM05.C1D01,PM05,C1,FMT Cycle 1,D01,12.19089873,derived-from-true\r
PM05.C1D02,PM05,C1,FMT Cycle 1,D02,9.927634169,derived-from-true\r
PM05.C1D15,PM05,C1,FMT Cycle 1,D15,10.68616958,derived-from-true\r
PM05.C1D36,PM05,C1,FMT Cycle 1,D36,12.84007693,derived-from-true\r
PM06.C1D01,PM06,C1,FMT Cycle 1,D01,12.50615683,derived-from-true\r
PM06.C1D02,PM06,C1,FMT Cycle 1,D02,10.92294137,derived-from-true\r
PM06.C1D15,PM06,C1,FMT Cycle 1,D15,13.61143085,derived-from-true\r
PM06.C1D36,PM06,C1,FMT Cycle 1,D36,6.827553938,derived-from-true\r
PM07.C0D01,PM07,C0,Observation,D01,8.457842308,derived-from-true\r
PM07.C0D02,PM07,C0,Observation,D02,6.318968664,derived-from-true\r
PM07.C0D15,PM07,C0,Observation,D15,5.747438503,derived-from-true\r
PM07.C0D36,PM07,C0,Observation,D36,7.360976055,derived-from-true\r
PM07.C1D01,PM07,C1,FMT Cycle 1,D01,4.098081897,derived-from-true\r
PM07.C1D02,PM07,C1,FMT Cycle 1,D02,11.90055612,derived-from-true\r
PM07.C1D15,PM07,C1,FMT Cycle 1,D15,8.253486648,derived-from-true\r
PM07.C1D36,PM07,C1,FMT Cycle 1,D36,10.96240409,derived-from-true\r
PM07.C2D01,PM07,C2,FMT Cycle 2,D01,4.040331279,derived-from-true\r
PM07.C2D02,PM07,C2,FMT Cycle 2,D02,5.404021433,derived-from-true\r
PM07.C2D15,PM07,C2,FMT Cycle 2,D15,7.866582051,derived-from-true\r
PM07.C2D36,PM07,C2,FMT Cycle 2,D36,7.053621042,derived-from-true\r
PM08.C0D01,PM08,C0,Observation,D01,11.46141677,derived-from-true\r
PM08.C0D02,PM08,C0,Observation,D02,8.663942251,derived-from-true\r
PM08.C0D15,PM08,C0,Observation,D15,3.506548322,derived-from-true\r
PM08.C0D36,PM08,C0,Observation,D36,8.541378501,derived-from-true\r
PM08.C1D01,PM08,C1,FMT Cycle 1,D01,10.1508231,derived-from-true\r
PM08.C1D02,PM08,C1,FMT Cycle 1,D02,7.546739465,derived-from-true\r
PM08.C1D15,PM08,C1,FMT Cycle 1,D15,8.487475068,derived-from-true\r
PM08.C1D36,PM08,C1,FMT Cycle 1,D36,7.647922258,derived-from-true\r
PM09.C1D01,PM09,C1,FMT Cycle 1,D01,3.478298618,derived-from-true\r
PM09.C1D15,PM09,C1,FMT Cycle 1,D15,11.33626302,derived-from-true\r
PM09.C1D36,PM09,C1,FMT Cycle 1,D36,12.57734281,derived-from-true\r
PM12.C0D01,PM12,C0,Observation,D01,11.7468734,derived-from-true\r
PM12.C0D02,PM12,C0,Observation,D02,6.043100312,derived-from-true\r
PM12.C0D15,PM12,C0,Observation,D15,13.73726063,derived-from-true\r
PM12.C0D36,PM12,C0,Observation,D36,14.23474702,derived-from-true\r
PM13.C1D01,PM13,C1,FMT Cycle 1,D01,9.763732409,derived-from-true\r
PM13.C1D02,PM13,C1,FMT Cycle 1,D02,5.580987807,derived-from-true\r
PM13.C1D15,PM13,C1,FMT Cycle 1,D15,11.37764405,derived-from-true\r
PM13.C1D36,PM13,C1,FMT Cycle 1,D36,16.9769502,derived-from-true\r
`, x0 = `sample,id,sample_type,rpkg_sum,source_class\r
PM01.S3,PM01,Screen,0.008383516,derived-from-true\r
PM02.S1,PM02,Screen,0.002284981,derived-from-true\r
PM03.S1,PM03,Screen,0.011375506,derived-from-true\r
PM04.S1,PM04,Screen,0.008531665,derived-from-true\r
PM05.S1,PM05,Screen,0.004641335,derived-from-true\r
PM06.S1,PM06,Screen,0.095577576,derived-from-true\r
PM07.S2,PM07,Screen,0.001790507,derived-from-true\r
PM08.S3,PM08,Screen,0.003252779,derived-from-true\r
PM09.S3,PM09,Screen,0.004116534,derived-from-true\r
PM12.S1,PM12,Screen,0.003557432,derived-from-true\r
PM13.S1,PM13,Screen,0.000940087,derived-from-true\r
PM03.C0D36,PM03,Observation,0.01536797,derived-from-true\r
PM05.C0D36,PM05,Observation,0.005928832,derived-from-true\r
PM07.C0D36,PM07,Observation,0.001246342,derived-from-true\r
PM08.C0D36,PM08,Observation,0.004511713,derived-from-true\r
PM12.C0D36,PM12,Observation,0.003276384,derived-from-true\r
PM01.C1D36,PM01,Post-FMT,0.003241256,derived-from-true\r
PM02.C1D36,PM02,Post-FMT,0.00233191,derived-from-true\r
PM03.C1D36,PM03,Post-FMT,0.001418022,derived-from-true\r
PM03.C2D36,PM03,Post-FMT,0.00056528,derived-from-true\r
PM04.C1D36,PM04,Post-FMT,0.005801887,derived-from-true\r
PM04.C2D36,PM04,Post-FMT,0.002866667,derived-from-true\r
PM05.C1D36,PM05,Post-FMT,0.00050217,derived-from-true\r
PM06.C1D36,PM06,Post-FMT,0.004031979,derived-from-true\r
PM07.C1D36,PM07,Post-FMT,0.001547632,derived-from-true\r
PM07.C2D36,PM07,Post-FMT,0.003060458,derived-from-true\r
PM08.C1D36,PM08,Post-FMT,0.005591991,derived-from-true\r
PM09.C1D36,PM09,Post-FMT,0.000187983,derived-from-true\r
PM13.C1D36,PM13,Post-FMT,0.00148709,derived-from-true\r
SD01.0419001,SD01,FMT Dose,0.001635419,derived-from-true\r
SD01.0419002,SD01,FMT Dose,0.001406242,derived-from-true\r
SD01.0419003,SD01,FMT Dose,0.00031522,derived-from-true\r
SD01.0718001,SD01,FMT Dose,0.002572079,derived-from-true\r
SD01.0818001,SD01,FMT Dose,0.002988057,derived-from-true\r
SD01.0818002,SD01,FMT Dose,0.001776036,derived-from-true\r
`, F0 = `sample,id,cluster,exposure,relative_day,axis1,axis2,source_class\r
PM01.C1D01,PM01,Less Extreme,Prep,0,-0.2000924417,-0.01033140784,derived-from-true\r
PM01.C1D02,PM01,Less Extreme,FMT,3,-0.1609243579,0.2069283927,derived-from-true\r
PM01.C1D15,PM01,Less Extreme,FMT,14,-0.1714681597,-0.0295487364,derived-from-true\r
PM01.C1D36,PM01,Less Extreme,FMT,35,-0.1041527072,-0.000807886154,derived-from-true\r
PM01.S1,PM01,Less Extreme,None,-78,-0.1086598806,0.1566146169,derived-from-true\r
PM01.S2,PM01,Less Extreme,None,-38,-0.2218218863,0.06399011866,derived-from-true\r
PM01.S3,PM01,Less Extreme,None,-15,-0.01674541678,-0.03123880878,derived-from-true\r
PM02.C1D01,PM02,Less Extreme,Prep,0,-0.05101810611,-0.2297752743,derived-from-true\r
PM02.C1D02,PM02,Less Extreme,FMT,1,0.1332653277,0.08706984286,derived-from-true\r
PM02.C1D15,PM02,Less Extreme,FMT,15,-0.1294668485,0.3240562741,derived-from-true\r
PM02.C1D36,PM02,Less Extreme,FMT,36,-0.1053315854,0.1327175152,derived-from-true\r
PM02.S1,PM02,Less Extreme,None,-11,0.09443928419,0.06029220672,derived-from-true\r
PM03.C0D01,PM03,Less Extreme,Prep,-52,-0.0863074395,-0.03159564165,derived-from-true\r
PM03.C0D02,PM03,Less Extreme,None,-51,-0.1614037239,-0.1612689867,derived-from-true\r
PM03.C0D15,PM03,Less Extreme,None,-31,-0.1221692477,-0.127843673,derived-from-true\r
PM03.C0D36,PM03,Less Extreme,None,-15,-0.1900451446,-0.05170596521,derived-from-true\r
PM03.C1D01,PM03,Less Extreme,Prep,0,-0.1024374517,0.001535965282,derived-from-true\r
PM03.C1D02,PM03,Less Extreme,FMT,1,-0.09910707002,0.03243014183,derived-from-true\r
PM03.C1D15,PM03,Less Extreme,FMT,14,0.004834353302,-0.008366315827,derived-from-true\r
PM03.C1D36,PM03,Less Extreme,FMT,36,0.2013600644,-0.1258602059,derived-from-true\r
PM03.C2D01,PM03,Less Extreme,Prep,41,-0.2145429109,-0.08761091603,derived-from-true\r
PM03.C2D02,PM03,Less Extreme,FMT,42,-0.06875555848,0.0216074235,derived-from-true\r
PM03.C2D15,PM03,Less Extreme,FMT,57,-0.07941460146,-0.03353784837,derived-from-true\r
PM03.C2D36,PM03,Less Extreme,FMT,76,-0.04846030409,-0.1604983259,derived-from-true\r
PM03.S1,PM03,Less Extreme,None,-64,0.02259303195,-0.3146344132,derived-from-true\r
PM04.C1D01,PM04,Less Extreme,Prep,0,0.06769904731,-0.2488896972,derived-from-true\r
PM04.C1D02,PM04,Less Extreme,FMT,2,-0.2066256135,-0.01597368905,derived-from-true\r
PM04.C1D15,PM04,Less Extreme,FMT,14,-0.1127396877,-0.05247131459,derived-from-true\r
PM04.C1D36,PM04,Less Extreme,FMT,35,-0.112575113,-0.03328521991,derived-from-true\r
PM04.C2D01,PM04,Less Extreme,Prep,49,-0.129731888,-0.06849918694,derived-from-true\r
PM04.C2D02,PM04,Less Extreme,FMT,51,-0.1566353521,0.009759647287,derived-from-true\r
PM04.C2D15,PM04,Less Extreme,FMT,63,-0.01963320227,0.03143212089,derived-from-true\r
PM04.C2D36,PM04,Less Extreme,FMT,84,0.02284975495,0.03996262699,derived-from-true\r
PM04.S1,PM04,Less Extreme,None,-13,-0.1681350486,-0.07870533773,derived-from-true\r
PM05.C0D01,PM05,More Extreme,Prep,-50,0.6356485318,-0.1087991716,derived-from-true\r
PM05.C0D02,PM05,More Extreme,None,-49,0.6358426183,-0.1150112344,derived-from-true\r
PM05.C0D15,PM05,More Extreme,None,-36,0.6300526304,-0.09909743049,derived-from-true\r
PM05.C0D36,PM05,More Extreme,None,-15,0.6474034239,-0.1176231706,derived-from-true\r
PM05.C1D01,PM05,More Extreme,Prep,0,0.6319888867,-0.1283182759,derived-from-true\r
PM05.C1D02,PM05,More Extreme,FMT,2,-0.01021931382,0.2364557841,derived-from-true\r
PM05.C1D15,PM05,More Extreme,FMT,20,-0.09042179896,0.2521758399,derived-from-true\r
PM05.C1D36,PM05,More Extreme,FMT,41,-0.09418414876,0.2457682199,derived-from-true\r
PM05.S1,PM05,More Extreme,None,-57,0.6380294989,-0.1023042004,derived-from-true\r
PM06.C1D01,PM06,More Extreme,Prep,0,0.4465104024,-0.05728674973,derived-from-true\r
PM06.C1D02,PM06,More Extreme,FMT,4,-0.1399822273,0.2852528221,derived-from-true\r
PM06.C1D15,PM06,More Extreme,FMT,14,-0.1759119492,0.1262095827,derived-from-true\r
PM06.C1D36,PM06,More Extreme,FMT,43,-0.1330916795,0.2294174862,derived-from-true\r
PM06.S1,PM06,More Extreme,None,-9,0.3916361212,-0.0329502768,derived-from-true\r
PM07.C0D01,PM07,Less Extreme,Prep,-49,-0.1287683864,-0.2622149432,derived-from-true\r
PM07.C0D02,PM07,Less Extreme,None,-48,-0.09254764725,-0.3025776114,derived-from-true\r
PM07.C0D15,PM07,Less Extreme,None,-35,-0.1170899418,-0.2923304993,derived-from-true\r
PM07.C0D36,PM07,Less Extreme,None,-14,-0.1292087216,-0.2811175629,derived-from-true\r
PM07.C1D01,PM07,Less Extreme,Prep,0,-0.1267288397,-0.2950431116,derived-from-true\r
PM07.C1D02,PM07,Less Extreme,FMT,1,-0.1099295068,-0.1633753498,derived-from-true\r
PM07.C1D15,PM07,Less Extreme,FMT,14,-0.1584266346,-0.2154919586,derived-from-true\r
PM07.C1D36,PM07,Less Extreme,FMT,35,-0.1705034364,-0.189801376,derived-from-true\r
PM07.C2D01,PM07,Less Extreme,FMT,65,-0.163980035,-0.266969729,derived-from-true\r
PM07.C2D02,PM07,Less Extreme,FMT,69,-0.1942917706,-0.2564974507,derived-from-true\r
PM07.C2D15,PM07,Less Extreme,FMT,77,-0.1324400475,-0.2693090475,derived-from-true\r
PM07.C2D36,PM07,Less Extreme,FMT,93,-0.126166548,-0.2156917023,derived-from-true\r
PM07.S1,PM07,Less Extreme,None,-56,-0.1340380301,-0.1839966678,derived-from-true\r
PM07.S2,PM07,Less Extreme,None,51,-0.16033277,-0.2346091069,derived-from-true\r
PM08.C0D01,PM08,Less Extreme,Prep,-50,0.1352481856,0.3229088566,derived-from-true\r
PM08.C0D02,PM08,Less Extreme,None,-48,0.005470883554,0.3745596241,derived-from-true\r
PM08.C0D15,PM08,Less Extreme,None,-34,0.1970030592,0.1579295806,derived-from-true\r
PM08.C0D36,PM08,Less Extreme,None,-21,0.09207585017,0.3544405391,derived-from-true\r
PM08.C1D01,PM08,Less Extreme,Prep,0,0.1059048983,0.3267316303,derived-from-true\r
PM08.C1D02,PM08,Less Extreme,FMT,2,0.0130231514,0.3939267924,derived-from-true\r
PM08.C1D15,PM08,Less Extreme,FMT,21,-0.003387819531,0.3567859413,derived-from-true\r
PM08.C1D36,PM08,Less Extreme,FMT,33,-0.0654596343,0.3790560776,derived-from-true\r
PM08.S1,PM08,Less Extreme,None,-86,0.1294413909,0.1322345732,derived-from-true\r
PM08.S2,PM08,Less Extreme,None,-58,0.0101512411,0.3162982934,derived-from-true\r
PM08.S3,PM08,Less Extreme,None,0,0.07289263595,0.3394310768,derived-from-true\r
PM09.C1D01,PM09,More Extreme,Prep,0,0.2528924342,0.01405916272,derived-from-true\r
PM09.C1D15,PM09,More Extreme,FMT,15,0.08016918274,0.09216821204,derived-from-true\r
PM09.C1D36,PM09,More Extreme,FMT,29,-0.08492616473,0.1741282854,derived-from-true\r
PM09.S1,PM09,More Extreme,None,-50,0.4984917518,-0.05358207038,derived-from-true\r
PM09.S2,PM09,More Extreme,None,-41,0.453890997,-0.03170070169,derived-from-true\r
PM09.S3,PM09,More Extreme,None,-8,0.3411603005,0.00401145087,derived-from-true\r
PM12.C0D01,PM12,Less Extreme,Prep,-50,-0.1333391736,-0.1541541112,derived-from-true\r
PM12.C0D02,PM12,Less Extreme,None,-49,-0.21326937,-0.1852054502,derived-from-true\r
PM12.C0D15,PM12,Less Extreme,None,-36,-0.07394396887,-0.1488066337,derived-from-true\r
PM12.C0D36,PM12,Less Extreme,None,-15,-0.02636229762,-0.1164609888,derived-from-true\r
PM12.S1,PM12,Less Extreme,None,-62,-0.1199021519,-0.2385206798,derived-from-true\r
PM13.C1D01,PM13,Less Extreme,Prep,0,-0.08146471305,-0.2407567962,derived-from-true\r
PM13.C1D02,PM13,Less Extreme,FMT,2,-0.1044129413,-0.1650400671,derived-from-true\r
PM13.C1D15,PM13,Less Extreme,FMT,16,-0.1496861542,-0.1648991697,derived-from-true\r
PM13.C1D36,PM13,Less Extreme,FMT,31,-0.1315243373,-0.1016166607,derived-from-true\r
PM13.S1,PM13,Less Extreme,None,-12,0.08254644708,-0.09863706956,derived-from-true\r
SD01.0419001,SD01,PREMIX Donor,Donor,0,-0.093333421,0.227949738,derived-from-true\r
SD01.0419002,SD01,PREMIX Donor,Donor,1,-0.09456893607,0.2432673479,derived-from-true\r
SD01.0419003,SD01,PREMIX Donor,Donor,2,-0.06790495924,0.2359264342,derived-from-true\r
SD01.0718001,SD01,PREMIX Donor,Donor,3,-0.1247291445,0.2758489594,derived-from-true\r
SD01.0818001,SD01,PREMIX Donor,Donor,4,-0.0778744223,0.2385186103,derived-from-true\r
SD01.0818002,SD01,PREMIX Donor,Donor,5,-0.09176159633,0.2883880621,derived-from-true\r
`, A0 = `point_key,cohort,axis1,axis2,pixel_x,pixel_y,segmentation_score,source_class\r
more-extreme:001,More Extreme,-0.2089552239,0.1850649351,1165,1549,73,measured\r
more-extreme:002,More Extreme,-0.1970149254,0.1185064935,1173,1590,31,measured\r
more-extreme:003,More Extreme,-0.171641791,0.2256493506,1190,1524,76,measured\r
more-extreme:004,More Extreme,-0.1194029851,0.1428571429,1225,1575,30,measured\r
more-extreme:005,More Extreme,-0.1179104478,0.3555194805,1226,1444,47,measured\r
more-extreme:006,More Extreme,-0.06567164179,0.3165584416,1261,1468,58,measured\r
more-extreme:007,More Extreme,-0.02985074627,0.1266233766,1285,1585,58,measured\r
more-extreme:008,More Extreme,-0.007462686567,0.1428571429,1300,1575,47,measured\r
more-extreme:009,More Extreme,0.08208955224,0.02597402597,1360,1647,79,measured\r
more-extreme:010,More Extreme,0.08358208955,0.08928571429,1361,1608,80,measured\r
more-extreme:011,More Extreme,0.09850746269,0.06493506494,1371,1623,81,measured\r
more-extreme:012,More Extreme,0.1,0.1022727273,1372,1600,81,measured\r
more-extreme:013,More Extreme,0.1059701493,0.08766233766,1376,1609,81,measured\r
more-extreme:014,More Extreme,0.1164179104,0.1185064935,1383,1590,80,measured\r
more-extreme:015,More Extreme,0.147761194,0.01785714286,1404,1652,43,measured\r
more-extreme:016,More Extreme,0.2268656716,0.06006493506,1457,1626,81,measured\r
less-extreme:001,Less Extreme,-0.2701492537,0.2159090909,1124,1530,80,measured\r
less-extreme:002,Less Extreme,-0.2641791045,0.1525974026,1128,1569,51,measured\r
less-extreme:003,Less Extreme,-0.2507462687,0.1461038961,1137,1573,81,measured\r
less-extreme:004,Less Extreme,-0.2447761194,0.2094155844,1141,1534,77,measured\r
less-extreme:005,Less Extreme,-0.2432835821,0.2402597403,1142,1515,49,measured\r
less-extreme:006,Less Extreme,-0.2298507463,0.2808441558,1151,1490,63,measured\r
less-extreme:007,Less Extreme,-0.223880597,0.2954545455,1155,1481,80,measured\r
less-extreme:008,Less Extreme,-0.2223880597,0.2662337662,1156,1499,81,measured\r
less-extreme:009,Less Extreme,-0.2194029851,0.2386363636,1158,1516,49,measured\r
less-extreme:010,Less Extreme,-0.2179104478,0.3100649351,1159,1472,42,measured\r
less-extreme:011,Less Extreme,-0.2149253731,0.2824675325,1161,1489,46,measured\r
less-extreme:012,Less Extreme,-0.2089552239,0.2175324675,1165,1529,80,measured\r
less-extreme:013,Less Extreme,-0.2029850746,0.2922077922,1169,1483,80,measured\r
less-extreme:014,Less Extreme,-0.2014925373,0.2337662338,1170,1519,71,measured\r
less-extreme:015,Less Extreme,-0.2,0.2581168831,1171,1504,81,measured\r
less-extreme:016,Less Extreme,-0.1940298507,0.2727272727,1175,1495,46,measured\r
less-extreme:017,Less Extreme,-0.1895522388,0.2467532468,1178,1511,70,measured\r
less-extreme:018,Less Extreme,-0.1895522388,0.3149350649,1178,1469,81,measured\r
less-extreme:019,Less Extreme,-0.1880597015,0.2077922078,1179,1535,30,measured\r
less-extreme:020,Less Extreme,-0.1865671642,0.2938311688,1180,1482,81,measured\r
less-extreme:021,Less Extreme,-0.1820895522,0.1737012987,1183,1556,71,measured\r
less-extreme:022,Less Extreme,-0.1791044776,0.2743506494,1185,1494,78,measured\r
less-extreme:023,Less Extreme,-0.176119403,0.08766233766,1187,1609,73,measured\r
less-extreme:024,Less Extreme,-0.176119403,0.3262987013,1187,1462,81,measured\r
less-extreme:025,Less Extreme,-0.171641791,0.288961039,1190,1485,45,measured\r
less-extreme:026,Less Extreme,-0.1641791045,0.3165584416,1195,1468,81,measured\r
less-extreme:027,Less Extreme,-0.1626865672,0.2516233766,1196,1508,37,measured\r
less-extreme:028,Less Extreme,-0.1611940299,0.2077922078,1197,1535,44,measured\r
less-extreme:029,Less Extreme,-0.1611940299,0.2678571429,1197,1498,71,measured\r
less-extreme:030,Less Extreme,-0.1507462687,0.1704545455,1204,1558,80,measured\r
less-extreme:031,Less Extreme,-0.1492537313,0.2922077922,1205,1483,81,measured\r
less-extreme:032,Less Extreme,-0.147761194,0.2142857143,1206,1531,81,measured\r
less-extreme:033,Less Extreme,-0.1447761194,0.3262987013,1208,1462,65,measured\r
less-extreme:034,Less Extreme,-0.1373134328,0.3019480519,1213,1477,81,measured\r
less-extreme:035,Less Extreme,-0.1358208955,0.3392857143,1214,1454,56,measured\r
less-extreme:036,Less Extreme,-0.1313432836,0.3198051948,1217,1466,74,measured\r
less-extreme:037,Less Extreme,-0.1298507463,0.1461038961,1218,1573,31,measured\r
less-extreme:038,Less Extreme,-0.128358209,0.1948051948,1219,1543,81,measured\r
less-extreme:039,Less Extreme,-0.1179104478,0.1720779221,1226,1557,79,measured\r
less-extreme:040,Less Extreme,-0.1179104478,0.2435064935,1226,1513,48,measured\r
less-extreme:041,Less Extreme,-0.1164179104,0.3733766234,1227,1433,46,measured\r
less-extreme:042,Less Extreme,-0.1104477612,0.2954545455,1231,1481,62,measured\r
less-extreme:043,Less Extreme,-0.1044776119,0.25,1235,1509,80,measured\r
less-extreme:044,Less Extreme,-0.1029850746,0.3668831169,1236,1437,68,measured\r
less-extreme:045,Less Extreme,-0.08955223881,0.2857142857,1245,1487,79,measured\r
less-extreme:046,Less Extreme,-0.08805970149,0.3392857143,1246,1454,53,measured\r
less-extreme:047,Less Extreme,-0.08805970149,0.3701298701,1246,1435,81,measured\r
less-extreme:048,Less Extreme,-0.06417910448,0.2873376623,1262,1486,81,measured\r
less-extreme:049,Less Extreme,-0.0552238806,0.2288961039,1268,1522,73,measured\r
less-extreme:050,Less Extreme,-0.05074626866,0.001623376623,1271,1662,44,measured\r
less-extreme:051,Less Extreme,-0.03880597015,0.0762987013,1279,1616,41,measured\r
less-extreme:052,Less Extreme,-0.02537313433,0.09577922078,1288,1604,62,measured\r
less-extreme:053,Less Extreme,-0.005970149254,0.2613636364,1301,1502,81,measured\r
less-extreme:054,Less Extreme,0.001492537313,0.3506493506,1306,1447,81,measured\r
premix-donor:001,PREMIX Donor,-0.2208955224,0.2224025974,1157,1526,39,measured\r
premix-donor:002,PREMIX Donor,-0.2074626866,0.2288961039,1166,1522,81,measured\r
premix-donor:003,PREMIX Donor,-0.1940298507,0.2402597403,1175,1515,44,measured\r
premix-donor:004,PREMIX Donor,-0.1567164179,0.2694805195,1200,1497,81,measured\r
premix-donor:005,PREMIX Donor,-0.1208955224,0.3068181818,1224,1474,44,measured\r
premix-donor:006,PREMIX Donor,-0.07313432836,0.3457792208,1256,1450,40,measured\r
non-premix-mdro:001,Non-PREMIX MDRO,-0.2701492537,-0.05681818182,1124,1698,57,measured\r
non-premix-mdro:002,Non-PREMIX MDRO,-0.2447761194,-0.03409090909,1141,1684,79,measured\r
non-premix-mdro:003,Non-PREMIX MDRO,-0.1850746269,0.1282467532,1181,1584,76,measured\r
non-premix-mdro:004,Non-PREMIX MDRO,-0.1328358209,0.163961039,1216,1562,80,measured\r
non-premix-mdro:005,Non-PREMIX MDRO,-0.1179104478,0.275974026,1226,1493,81,measured\r
non-premix-mdro:006,Non-PREMIX MDRO,-0.1164179104,0.1558441558,1227,1567,71,measured\r
non-premix-mdro:007,Non-PREMIX MDRO,-0.1089552239,0.0762987013,1232,1616,58,measured\r
non-premix-mdro:008,Non-PREMIX MDRO,-0.1074626866,0.1298701299,1233,1583,81,measured\r
non-premix-mdro:009,Non-PREMIX MDRO,-0.09552238806,0.1103896104,1241,1595,81,measured\r
non-premix-mdro:010,Non-PREMIX MDRO,-0.0776119403,-0.02597402597,1253,1679,81,measured\r
non-premix-mdro:011,Non-PREMIX MDRO,-0.07014925373,0.163961039,1258,1562,81,measured\r
non-premix-mdro:012,Non-PREMIX MDRO,-0.06865671642,0.09253246753,1259,1606,79,measured\r
non-premix-mdro:013,Non-PREMIX MDRO,-0.06119402985,0.1266233766,1264,1585,81,measured\r
non-premix-mdro:014,Non-PREMIX MDRO,-0.05223880597,0.04058441558,1270,1638,81,measured\r
non-premix-mdro:015,Non-PREMIX MDRO,-0.05223880597,0.2094155844,1270,1534,81,measured\r
non-premix-mdro:016,Non-PREMIX MDRO,-0.03432835821,0.06493506494,1282,1623,81,measured\r
non-premix-mdro:017,Non-PREMIX MDRO,-0.02388059701,0.2840909091,1289,1488,81,measured\r
non-premix-mdro:018,Non-PREMIX MDRO,-0.01940298507,0.1087662338,1292,1596,81,measured\r
non-premix-mdro:019,Non-PREMIX MDRO,-0.002985074627,0.288961039,1303,1485,81,measured\r
non-premix-mdro:020,Non-PREMIX MDRO,0.02537313433,0.2159090909,1322,1530,80,measured\r
non-premix-mdro:021,Non-PREMIX MDRO,0.02686567164,0.03896103896,1323,1639,81,measured\r
non-premix-mdro:022,Non-PREMIX MDRO,0.04626865672,0.1542207792,1336,1568,81,measured\r
non-premix-mdro:023,Non-PREMIX MDRO,0.05970149254,0.1964285714,1345,1542,55,measured\r
non-premix-mdro:024,Non-PREMIX MDRO,0.1597014925,-0.04545454545,1412,1691,74,measured\r
rcdi:001,RCDI,-0.3537313433,-0.1655844156,1068,1765,38,measured\r
rcdi:002,RCDI,-0.3343283582,0.01298701299,1081,1655,59,measured\r
rcdi:003,RCDI,-0.2985074627,0.01623376623,1105,1653,81,measured\r
rcdi:004,RCDI,-0.2955223881,-0.04707792208,1107,1692,69,measured\r
rcdi:005,RCDI,-0.2626865672,0.1883116883,1129,1547,71,measured\r
rcdi:006,RCDI,-0.2417910448,-0.07305194805,1143,1708,81,measured\r
rcdi:007,RCDI,-0.2358208955,-0.00974025974,1147,1669,81,measured\r
rcdi:008,RCDI,-0.2298507463,0.2451298701,1151,1512,81,measured\r
rcdi:009,RCDI,-0.2104477612,-0.04058441558,1164,1688,81,measured\r
rcdi:010,RCDI,-0.1970149254,0.09415584416,1173,1605,81,measured\r
rcdi:011,RCDI,-0.1925373134,0.05357142857,1176,1630,81,measured\r
rcdi:012,RCDI,-0.176119403,-0.0275974026,1187,1680,41,measured\r
rcdi:013,RCDI,-0.1731343284,-0.1347402597,1189,1746,81,measured\r
rcdi:014,RCDI,-0.171641791,0.2516233766,1190,1508,81,measured\r
rcdi:015,RCDI,-0.1701492537,-0.01298701299,1191,1671,81,measured\r
rcdi:016,RCDI,-0.1701492537,0.2029220779,1191,1538,81,measured\r
rcdi:017,RCDI,-0.1597014925,0.1331168831,1198,1581,81,measured\r
rcdi:018,RCDI,-0.1492537313,-0.25,1205,1817,81,measured\r
rcdi:019,RCDI,-0.1447761194,0,1208,1663,81,measured\r
rcdi:020,RCDI,-0.1432835821,0.1542207792,1209,1568,81,measured\r
rcdi:021,RCDI,-0.1358208955,-0.211038961,1214,1793,81,measured\r
rcdi:022,RCDI,-0.1343283582,-0.163961039,1215,1764,81,measured\r
rcdi:023,RCDI,-0.1343283582,0.1672077922,1215,1560,48,measured\r
rcdi:024,RCDI,-0.1298507463,0.07792207792,1218,1615,81,measured\r
rcdi:025,RCDI,-0.1298507463,0.0974025974,1218,1603,81,measured\r
rcdi:026,RCDI,-0.1268656716,-0.1801948052,1220,1774,81,measured\r
rcdi:027,RCDI,-0.1268656716,0.04545454545,1220,1635,81,measured\r
rcdi:028,RCDI,-0.1179104478,0.3636363636,1226,1439,47,measured\r
rcdi:029,RCDI,-0.1149253731,-0.1704545455,1228,1768,81,measured\r
rcdi:030,RCDI,-0.1134328358,0.03733766234,1229,1640,81,measured\r
rcdi:031,RCDI,-0.1044776119,-0.1136363636,1235,1733,81,measured\r
rcdi:032,RCDI,-0.1,0.3506493506,1238,1447,81,measured\r
rcdi:033,RCDI,-0.09850746269,0.08441558442,1239,1611,81,measured\r
rcdi:034,RCDI,-0.09253731343,0.06980519481,1243,1620,81,measured\r
rcdi:035,RCDI,-0.08955223881,0.04707792208,1245,1634,81,measured\r
rcdi:036,RCDI,-0.07462686567,0.1185064935,1255,1590,75,measured\r
rcdi:037,RCDI,-0.07164179104,-0.06331168831,1257,1702,67,measured\r
rcdi:038,RCDI,-0.05223880597,-0.01136363636,1270,1670,81,measured\r
rcdi:039,RCDI,-0.05223880597,0.09090909091,1270,1607,81,measured\r
rcdi:040,RCDI,-0.04925373134,-0.08116883117,1272,1713,81,measured\r
rcdi:041,RCDI,-0.03880597015,0.06818181818,1279,1621,40,measured\r
rcdi:042,RCDI,-0.02089552239,-0.01948051948,1291,1675,62,measured\r
rcdi:043,RCDI,-0.02089552239,0.0275974026,1291,1646,81,measured\r
rcdi:044,RCDI,-0.01641791045,-0.04545454545,1294,1691,81,measured\r
rcdi:045,RCDI,-0.01492537313,-0.00487012987,1295,1666,81,measured\r
rcdi:046,RCDI,-0.005970149254,-0.1331168831,1301,1745,81,measured\r
rcdi:047,RCDI,-0.005970149254,0.07792207792,1301,1615,81,measured\r
rcdi:048,RCDI,0,0.001623376623,1305,1662,81,measured\r
rcdi:049,RCDI,0.01940298507,0.01623376623,1318,1653,81,measured\r
rcdi:050,RCDI,0.02089552239,0.1931818182,1319,1544,81,measured\r
rcdi:051,RCDI,0.04179104478,0.262987013,1333,1501,81,measured\r
rcdi:052,RCDI,0.04626865672,0.05194805195,1336,1631,67,measured\r
rcdi:053,RCDI,0.04925373134,0.2305194805,1338,1521,81,measured\r
rcdi:054,RCDI,0.06119402985,0.05194805195,1346,1631,81,measured\r
rcdi:055,RCDI,0.06865671642,-0.06980519481,1351,1706,81,measured\r
rcdi:056,RCDI,0.07014925373,0.1996753247,1352,1540,81,measured\r
rcdi:057,RCDI,0.07164179104,-0.0487012987,1353,1693,81,measured\r
rcdi:058,RCDI,0.08208955224,-0.03571428571,1360,1685,81,measured\r
rcdi:059,RCDI,0.08208955224,0.125,1360,1586,81,measured\r
rcdi:060,RCDI,0.08656716418,0.006493506494,1363,1659,81,measured\r
rcdi:061,RCDI,0.08805970149,-0.05519480519,1364,1697,81,measured\r
rcdi:062,RCDI,0.08805970149,-0.0211038961,1364,1676,31,measured\r
rcdi:063,RCDI,0.08805970149,0.3100649351,1364,1472,81,measured\r
rcdi:064,RCDI,0.09701492537,-0.03571428571,1370,1685,81,measured\r
rcdi:065,RCDI,0.1,0.0275974026,1372,1646,81,measured\r
rcdi:066,RCDI,0.1104477612,-0.02922077922,1379,1681,81,measured\r
rcdi:067,RCDI,0.1119402985,0.2094155844,1380,1534,81,measured\r
rcdi:068,RCDI,0.1134328358,-0.06818181818,1381,1705,80,measured\r
rcdi:069,RCDI,0.1134328358,-0.05194805195,1381,1695,32,measured\r
rcdi:070,RCDI,0.1253731343,-0.02597402597,1389,1679,81,measured\r
rcdi:071,RCDI,0.128358209,-0.06655844156,1391,1704,81,measured\r
rcdi:072,RCDI,0.128358209,-0.05032467532,1391,1694,81,measured\r
rcdi:073,RCDI,0.1328358209,0.1233766234,1394,1587,81,measured\r
rcdi:074,RCDI,0.1447761194,0.008116883117,1402,1658,81,measured\r
rcdi:075,RCDI,0.1462686567,-0.03733766234,1403,1686,81,measured\r
rcdi:076,RCDI,0.1492537313,-0.0762987013,1405,1710,81,measured\r
rcdi:077,RCDI,0.1537313433,-0.09253246753,1408,1720,52,measured\r
rcdi:078,RCDI,0.1567164179,-0.01948051948,1410,1675,81,measured\r
rcdi:079,RCDI,0.1582089552,-0.001623376623,1411,1664,81,measured\r
rcdi:080,RCDI,0.1597014925,0.2873376623,1412,1486,81,measured\r
rcdi:081,RCDI,0.1641791045,-0.0762987013,1415,1710,81,measured\r
rcdi:082,RCDI,0.1656716418,0.3181818182,1416,1467,81,measured\r
rcdi:083,RCDI,0.1686567164,-0.09253246753,1418,1720,81,measured\r
rcdi:084,RCDI,0.1686567164,-0.06006493506,1418,1700,32,measured\r
rcdi:085,RCDI,0.1686567164,0.1688311688,1418,1559,81,measured\r
rcdi:086,RCDI,0.176119403,-0.04383116883,1423,1690,81,measured\r
rcdi:087,RCDI,0.1776119403,-0.1071428571,1424,1729,62,measured\r
rcdi:088,RCDI,0.1791044776,-0.07467532468,1425,1709,81,measured\r
rcdi:089,RCDI,0.1835820896,-0.09253246753,1428,1720,81,measured\r
rcdi:090,RCDI,0.1835820896,-0.05844155844,1428,1699,81,measured\r
rcdi:091,RCDI,0.1835820896,0.1525974026,1428,1569,81,measured\r
rcdi:092,RCDI,0.1850746269,-0.0211038961,1429,1676,81,measured\r
rcdi:093,RCDI,0.1880597015,0.03246753247,1431,1643,81,measured\r
rcdi:094,RCDI,0.1925373134,-0.1055194805,1434,1728,81,measured\r
rcdi:095,RCDI,0.1970149254,-0.06493506494,1437,1703,81,measured\r
rcdi:096,RCDI,0.2014925373,0.2272727273,1440,1523,81,measured\r
rcdi:097,RCDI,0.2074626866,0.2905844156,1444,1484,81,measured\r
rcdi:098,RCDI,0.2119402985,-0.06168831169,1447,1701,81,measured\r
rcdi:099,RCDI,0.2119402985,0.07467532468,1447,1617,81,measured\r
rcdi:100,RCDI,0.2149253731,-0.07792207792,1449,1711,40,measured\r
rcdi:101,RCDI,0.2194029851,-0.00974025974,1452,1669,81,measured\r
rcdi:102,RCDI,0.2208955224,-0.1022727273,1453,1726,81,measured\r
rcdi:103,RCDI,0.2208955224,0.0974025974,1453,1603,81,measured\r
rcdi:104,RCDI,0.2268656716,-0.06818181818,1457,1705,81,measured\r
rcdi:105,RCDI,0.2268656716,0.03246753247,1457,1643,81,measured\r
rcdi:106,RCDI,0.2432835821,0.1574675325,1468,1566,81,measured\r
rcdi:107,RCDI,0.2462686567,-0.05194805195,1470,1695,81,measured\r
rcdi:108,RCDI,0.2626865672,0.1558441558,1481,1567,81,measured\r
rcdi:109,RCDI,0.271641791,0.0487012987,1487,1633,81,measured\r
rcdi:110,RCDI,0.2731343284,-0.1363636364,1488,1747,81,measured\r
rcdi:111,RCDI,0.2865671642,-0.006493506494,1497,1667,81,measured\r
rcdi:112,RCDI,0.2865671642,0.2435064935,1497,1513,81,measured\r
rcdi:113,RCDI,0.2880597015,-0.1412337662,1498,1750,81,measured\r
rcdi:114,RCDI,0.3,0.237012987,1506,1517,81,measured\r
rcdi:115,RCDI,0.3014925373,-0.1266233766,1507,1741,81,measured\r
rcdi:116,RCDI,0.3029850746,0.1103896104,1508,1595,81,measured\r
rcdi:117,RCDI,0.3029850746,0.1412337662,1508,1576,81,measured\r
rcdi:118,RCDI,0.3044776119,0.02435064935,1509,1648,81,measured\r
rcdi:119,RCDI,0.3194029851,-0.08441558442,1519,1715,81,measured\r
rcdi:120,RCDI,0.323880597,-0.1217532468,1522,1738,81,measured\r
rcdi:121,RCDI,0.3373134328,0.2029220779,1531,1538,81,measured\r
rcdi:122,RCDI,0.3447761194,0.163961039,1536,1562,64,measured\r
rcdi:123,RCDI,0.3462686567,0.1801948052,1537,1552,81,measured\r
rcdi:124,RCDI,0.352238806,-0.07792207792,1541,1711,81,measured\r
rcdi:125,RCDI,0.352238806,0.02272727273,1541,1649,52,measured\r
rcdi:126,RCDI,0.352238806,0.1412337662,1541,1576,62,measured\r
rcdi:127,RCDI,0.3537313433,0.125,1542,1586,81,measured\r
rcdi:128,RCDI,0.3582089552,0.1704545455,1545,1558,81,measured\r
rcdi:129,RCDI,0.3611940299,0.1542207792,1547,1568,81,measured\r
rcdi:130,RCDI,0.3641791045,0.1038961039,1549,1599,81,measured\r
rcdi:131,RCDI,0.3701492537,-0.06331168831,1553,1702,81,measured\r
rcdi:132,RCDI,0.3746268657,0.07954545455,1556,1614,81,measured\r
rcdi:133,RCDI,0.3746268657,0.1704545455,1556,1558,81,measured\r
rcdi:134,RCDI,0.376119403,0.1217532468,1557,1588,36,measured\r
rcdi:135,RCDI,0.3820895522,0.1363636364,1561,1579,81,measured\r
rcdi:136,RCDI,0.3850746269,-0.08603896104,1563,1716,81,measured\r
rcdi:137,RCDI,0.3940298507,0.05681818182,1569,1628,80,measured\r
rcdi:138,RCDI,0.3955223881,0.01623376623,1570,1653,81,measured\r
rcdi:139,RCDI,0.3985074627,-0.1136363636,1572,1733,81,measured\r
rcdi:140,RCDI,0.4,0.07142857143,1573,1619,81,measured\r
rcdi:141,RCDI,0.4194029851,-0.08279220779,1586,1714,81,measured\r
rcdi:142,RCDI,0.4268656716,0.04383116883,1591,1636,66,measured\r
rcdi:143,RCDI,0.4313432836,0.02435064935,1594,1648,74,measured\r
rcdi:144,RCDI,0.4343283582,-0.1396103896,1596,1749,81,measured\r
rcdi:145,RCDI,0.4343283582,-0.1103896104,1596,1731,81,measured\r
rcdi:146,RCDI,0.4373134328,0.08603896104,1598,1610,81,measured\r
rcdi:147,RCDI,0.4402985075,0.03733766234,1600,1640,81,measured\r
rcdi:148,RCDI,0.4417910448,0.05357142857,1601,1630,81,measured\r
rcdi:149,RCDI,0.4462686567,-0.1201298701,1604,1737,81,measured\r
rcdi:150,RCDI,0.4462686567,-0.1006493506,1604,1725,81,measured\r
rcdi:151,RCDI,0.447761194,0.07467532468,1605,1617,81,measured\r
rcdi:152,RCDI,0.4507462687,-0.07954545455,1607,1712,52,measured\r
rcdi:153,RCDI,0.4537313433,0.04383116883,1609,1636,81,measured\r
rcdi:154,RCDI,0.4611940299,-0.06818181818,1614,1705,79,measured\r
rcdi:155,RCDI,0.4626865672,-0.1038961039,1615,1727,81,measured\r
rcdi:156,RCDI,0.4626865672,-0.02272727273,1615,1677,81,measured\r
rcdi:157,RCDI,0.4641791045,-0.08603896104,1616,1716,81,measured\r
rcdi:158,RCDI,0.4641791045,0.0211038961,1616,1650,81,measured\r
rcdi:159,RCDI,0.4656716418,-0.1704545455,1617,1768,81,measured\r
rcdi:160,RCDI,0.4656716418,-0.1412337662,1617,1750,31,measured\r
rcdi:161,RCDI,0.4731343284,-0.1558441558,1622,1759,81,measured\r
rcdi:162,RCDI,0.4746268657,-0.07467532468,1623,1709,81,measured\r
rcdi:163,RCDI,0.476119403,-0.01298701299,1624,1671,81,measured\r
rcdi:164,RCDI,0.4776119403,-0.1168831169,1625,1735,81,measured\r
rcdi:165,RCDI,0.4791044776,-0.1331168831,1626,1745,81,measured\r
rcdi:166,RCDI,0.4791044776,0.01785714286,1626,1652,81,measured\r
rcdi:167,RCDI,0.4805970149,-0.1704545455,1627,1768,39,measured\r
rcdi:168,RCDI,0.4805970149,-0.05681818182,1627,1698,81,measured\r
rcdi:169,RCDI,0.4820895522,-0.0974025974,1628,1723,61,measured\r
rcdi:170,RCDI,0.4880597015,-0.1493506494,1632,1755,32,measured\r
rcdi:171,RCDI,0.4880597015,-0.08116883117,1632,1713,81,measured\r
rcdi:172,RCDI,0.4910447761,-0.1103896104,1634,1731,81,measured\r
rcdi:173,RCDI,0.4925373134,-0.01623376623,1635,1673,81,measured\r
rcdi:174,RCDI,0.4940298507,-0.163961039,1636,1764,81,measured\r
rcdi:175,RCDI,0.4970149254,-0.1347402597,1638,1746,81,measured\r
rcdi:176,RCDI,0.4970149254,0.00487012987,1638,1660,81,measured\r
rcdi:177,RCDI,0.5014925373,-0.06168831169,1641,1701,81,measured\r
rcdi:178,RCDI,0.5029850746,-0.07792207792,1642,1711,81,measured\r
rcdi:179,RCDI,0.5044776119,-0.09415584416,1643,1721,81,measured\r
rcdi:180,RCDI,0.5059701493,-0.1737012987,1644,1770,35,measured\r
rcdi:181,RCDI,0.5074626866,-0.1574675325,1645,1760,81,measured\r
rcdi:182,RCDI,0.5089552239,-0.04058441558,1646,1688,41,measured\r
rcdi:183,RCDI,0.5164179104,-0.1396103896,1651,1749,81,measured\r
rcdi:184,RCDI,0.5164179104,-0.07142857143,1651,1707,81,measured\r
rcdi:185,RCDI,0.5179104478,-0.08766233766,1652,1717,81,measured\r
rcdi:186,RCDI,0.5179104478,-0.0275974026,1652,1680,81,measured\r
rcdi:187,RCDI,0.5223880597,-0.1542207792,1655,1758,81,measured\r
rcdi:188,RCDI,0.523880597,-0.04545454545,1656,1691,76,measured\r
rcdi:189,RCDI,0.528358209,-0.1282467532,1659,1742,81,measured\r
rcdi:190,RCDI,0.528358209,-0.09902597403,1659,1724,81,measured\r
rcdi:191,RCDI,0.528358209,-0.06168831169,1659,1701,81,measured\r
rcdi:192,RCDI,0.5313432836,-0.07792207792,1661,1711,81,measured\r
rcdi:193,RCDI,0.5343283582,-0.1428571429,1663,1751,81,measured\r
rcdi:194,RCDI,0.5343283582,-0.1136363636,1663,1733,81,measured\r
rcdi:195,RCDI,0.5417910448,-0.08928571429,1668,1718,81,measured\r
rcdi:196,RCDI,0.5447761194,-0.125,1670,1740,81,measured\r
rcdi:197,RCDI,0.547761194,-0.1038961039,1672,1727,81,measured\r
rcdi:198,RCDI,0.5582089552,-0.1152597403,1679,1734,81,measured\r
non-premix-donor:001,Non-PREMIX Donor,-0.3373134328,-0.2337662338,1079,1807,75,measured\r
non-premix-donor:002,Non-PREMIX Donor,-0.3298507463,-0.1850649351,1084,1777,78,measured\r
non-premix-donor:003,Non-PREMIX Donor,-0.3253731343,-0.2435064935,1087,1813,64,measured\r
non-premix-donor:004,Non-PREMIX Donor,-0.3253731343,-0.02435064935,1087,1678,74,measured\r
non-premix-donor:005,Non-PREMIX Donor,-0.3179104478,-0.137987013,1092,1748,81,measured\r
non-premix-donor:006,Non-PREMIX Donor,-0.3044776119,-0.2061688312,1101,1790,78,measured\r
non-premix-donor:007,Non-PREMIX Donor,-0.2880597015,0.06655844156,1112,1622,46,measured\r
non-premix-donor:008,Non-PREMIX Donor,-0.2835820896,0.1396103896,1115,1577,55,measured\r
non-premix-donor:009,Non-PREMIX Donor,-0.2820895522,0.0211038961,1116,1650,78,measured\r
non-premix-donor:010,Non-PREMIX Donor,-0.2671641791,0.112012987,1126,1594,81,measured\r
non-premix-donor:011,Non-PREMIX Donor,-0.2402985075,0.1866883117,1144,1548,70,measured\r
non-premix-donor:012,Non-PREMIX Donor,-0.1611940299,0.1461038961,1197,1573,46,measured\r
non-premix-donor:013,Non-PREMIX Donor,-0.1507462687,-0.2321428571,1204,1806,64,measured\r
non-premix-donor:014,Non-PREMIX Donor,-0.1492537313,0.03733766234,1205,1640,81,measured\r
non-premix-donor:015,Non-PREMIX Donor,-0.1417910448,0.1363636364,1210,1579,33,measured\r
non-premix-donor:016,Non-PREMIX Donor,-0.1358208955,-0.2305194805,1214,1805,81,measured\r
non-premix-donor:017,Non-PREMIX Donor,-0.09701492537,0.006493506494,1240,1659,81,measured\r
non-premix-donor:018,Non-PREMIX Donor,-0.06119402985,-0.04220779221,1264,1689,81,measured\r
non-premix-donor:019,Non-PREMIX Donor,-0.04626865672,0.1314935065,1274,1582,67,measured\r
non-premix-donor:020,Non-PREMIX Donor,-0.01343283582,0.211038961,1296,1533,81,measured\r
non-premix-donor:021,Non-PREMIX Donor,-0.01194029851,0.1266233766,1297,1585,58,measured\r
non-premix-donor:022,Non-PREMIX Donor,0.06119402985,0.1785714286,1346,1553,81,measured\r
non-premix-donor:023,Non-PREMIX Donor,0.176119403,0.2402597403,1423,1515,81,measured\r
non-premix-donor:024,Non-PREMIX Donor,0.2985074627,0.08766233766,1505,1609,81,measured\r
non-premix-donor:025,Non-PREMIX Donor,0.3492537313,0.03896103896,1539,1639,67,measured\r
hmp-hhs:001,HMP HHS,-0.3611940299,-0.2142857143,1063,1795,81,measured\r
hmp-hhs:002,HMP HHS,-0.3582089552,-0.150974026,1065,1756,40,measured\r
hmp-hhs:003,HMP HHS,-0.3567164179,-0.1055194805,1066,1728,36,measured\r
hmp-hhs:004,HMP HHS,-0.3537313433,-0.2353896104,1068,1808,77,measured\r
hmp-hhs:005,HMP HHS,-0.3507462687,-0.08116883117,1070,1713,81,measured\r
hmp-hhs:006,HMP HHS,-0.347761194,-0.0487012987,1072,1693,31,measured\r
hmp-hhs:007,HMP HHS,-0.3447761194,-0.09577922078,1074,1722,81,measured\r
hmp-hhs:008,HMP HHS,-0.3447761194,-0.06493506494,1074,1703,81,measured\r
hmp-hhs:009,HMP HHS,-0.3432835821,-0.1493506494,1075,1755,81,measured\r
hmp-hhs:010,HMP HHS,-0.3432835821,-0.112012987,1075,1732,49,measured\r
hmp-hhs:011,HMP HHS,-0.3402985075,-0.2418831169,1077,1812,34,measured\r
hmp-hhs:012,HMP HHS,-0.3388059701,-0.03571428571,1078,1685,80,measured\r
hmp-hhs:013,HMP HHS,-0.3358208955,-0.163961039,1080,1764,66,measured\r
hmp-hhs:014,HMP HHS,-0.3343283582,-0.3506493506,1081,1879,81,measured\r
hmp-hhs:015,HMP HHS,-0.3343283582,-0.2564935065,1081,1821,72,measured\r
hmp-hhs:016,HMP HHS,-0.3328358209,-0.2126623377,1082,1794,81,measured\r
hmp-hhs:017,HMP HHS,-0.3328358209,-0.05032467532,1082,1694,81,measured\r
hmp-hhs:018,HMP HHS,-0.3328358209,-0.00487012987,1082,1666,76,measured\r
hmp-hhs:019,HMP HHS,-0.3313432836,-0.2288961039,1083,1804,44,measured\r
hmp-hhs:020,HMP HHS,-0.3313432836,-0.1022727273,1083,1726,81,measured\r
hmp-hhs:021,HMP HHS,-0.3313432836,-0.08441558442,1083,1715,81,measured\r
hmp-hhs:022,HMP HHS,-0.3298507463,-0.1185064935,1084,1736,81,measured\r
hmp-hhs:023,HMP HHS,-0.328358209,-0.2711038961,1085,1830,81,measured\r
hmp-hhs:024,HMP HHS,-0.328358209,0.0275974026,1085,1646,58,measured\r
hmp-hhs:025,HMP HHS,-0.3268656716,-0.3262987013,1086,1864,63,measured\r
hmp-hhs:026,HMP HHS,-0.3268656716,-0.3035714286,1086,1850,65,measured\r
hmp-hhs:027,HMP HHS,-0.323880597,-0.2873376623,1088,1840,81,measured\r
hmp-hhs:028,HMP HHS,-0.3223880597,-0.06655844156,1089,1704,81,measured\r
hmp-hhs:029,HMP HHS,-0.3208955224,-0.3441558442,1090,1875,81,measured\r
hmp-hhs:030,HMP HHS,-0.3208955224,-0.2029220779,1090,1788,77,measured\r
hmp-hhs:031,HMP HHS,-0.3194029851,-0.2191558442,1091,1798,81,measured\r
hmp-hhs:032,HMP HHS,-0.3194029851,0.08279220779,1091,1612,81,measured\r
hmp-hhs:033,HMP HHS,-0.3179104478,-0.001623376623,1092,1664,79,measured\r
hmp-hhs:034,HMP HHS,-0.3179104478,0.05519480519,1092,1629,80,measured\r
hmp-hhs:035,HMP HHS,-0.3149253731,-0.3133116883,1094,1856,81,measured\r
hmp-hhs:036,HMP HHS,-0.3149253731,0.01785714286,1094,1652,72,measured\r
hmp-hhs:037,HMP HHS,-0.3134328358,-0.275974026,1095,1833,81,measured\r
hmp-hhs:038,HMP HHS,-0.3134328358,-0.2337662338,1095,1807,81,measured\r
hmp-hhs:039,HMP HHS,-0.3134328358,-0.03896103896,1095,1687,74,measured\r
hmp-hhs:040,HMP HHS,-0.3119402985,-0.3295454545,1096,1866,81,measured\r
hmp-hhs:041,HMP HHS,-0.3119402985,0.03409090909,1096,1642,59,measured\r
hmp-hhs:042,HMP HHS,-0.3119402985,0.1038961039,1096,1599,67,measured\r
hmp-hhs:043,HMP HHS,-0.3104477612,-0.2938311688,1097,1844,81,measured\r
hmp-hhs:044,HMP HHS,-0.3104477612,-0.1915584416,1097,1781,59,measured\r
hmp-hhs:045,HMP HHS,-0.3089552239,0.06818181818,1098,1621,81,measured\r
hmp-hhs:046,HMP HHS,-0.3074626866,-0.2581168831,1099,1822,81,measured\r
hmp-hhs:047,HMP HHS,-0.3074626866,-0.06818181818,1099,1705,81,measured\r
hmp-hhs:048,HMP HHS,-0.3044776119,-0.05194805195,1101,1695,35,measured\r
hmp-hhs:049,HMP HHS,-0.3014925373,-0.3068181818,1103,1852,81,measured\r
hmp-hhs:050,HMP HHS,-0.3,-0.3474025974,1104,1877,81,measured\r
hmp-hhs:051,HMP HHS,-0.3,-0.2824675325,1104,1837,81,measured\r
hmp-hhs:052,HMP HHS,-0.2970149254,-0.3230519481,1106,1862,81,measured\r
hmp-hhs:053,HMP HHS,-0.2955223881,0.125,1107,1586,31,measured\r
hmp-hhs:054,HMP HHS,-0.2925373134,-0.09577922078,1109,1722,59,measured\r
hmp-hhs:055,HMP HHS,-0.2910447761,0.0487012987,1110,1633,77,measured\r
hmp-hhs:056,HMP HHS,-0.2895522388,-0.2711038961,1111,1830,81,measured\r
hmp-hhs:057,HMP HHS,-0.2895522388,-0.25,1111,1817,66,measured\r
hmp-hhs:058,HMP HHS,-0.2880597015,0.1022727273,1112,1600,70,measured\r
hmp-hhs:059,HMP HHS,-0.2835820896,-0.3814935065,1115,1898,39,measured\r
hmp-hhs:060,HMP HHS,-0.2820895522,-0.1201298701,1116,1737,81,measured\r
hmp-hhs:061,HMP HHS,-0.2805970149,-0.137987013,1117,1748,81,measured\r
hmp-hhs:062,HMP HHS,-0.2805970149,-0.03246753247,1117,1683,81,measured\r
hmp-hhs:063,HMP HHS,-0.2805970149,0.125,1117,1586,78,measured\r
hmp-hhs:064,HMP HHS,-0.2791044776,-0.3506493506,1118,1879,81,measured\r
hmp-hhs:065,HMP HHS,-0.2776119403,-0.3961038961,1119,1907,81,measured\r
hmp-hhs:066,HMP HHS,-0.2776119403,-0.2402597403,1119,1811,81,measured\r
hmp-hhs:067,HMP HHS,-0.2776119403,-0.09577922078,1119,1722,81,measured\r
hmp-hhs:068,HMP HHS,-0.2776119403,0.04220779221,1119,1637,81,measured\r
hmp-hhs:069,HMP HHS,-0.2731343284,0.1607142857,1122,1564,73,measured\r
hmp-hhs:070,HMP HHS,-0.271641791,0.1769480519,1123,1554,40,measured\r
hmp-hhs:071,HMP HHS,-0.2701492537,-0.2987012987,1124,1847,81,measured\r
hmp-hhs:072,HMP HHS,-0.2686567164,-0.3831168831,1125,1899,81,measured\r
hmp-hhs:073,HMP HHS,-0.2686567164,-0.2824675325,1125,1837,50,measured\r
hmp-hhs:074,HMP HHS,-0.2656716418,-0.03246753247,1127,1683,81,measured\r
hmp-hhs:075,HMP HHS,-0.2656716418,0.02597402597,1127,1647,74,measured\r
hmp-hhs:076,HMP HHS,-0.2641791045,-0.1542207792,1128,1758,81,measured\r
hmp-hhs:077,HMP HHS,-0.2626865672,-0.3522727273,1129,1880,43,measured\r
hmp-hhs:078,HMP HHS,-0.2626865672,-0.3165584416,1129,1858,58,measured\r
hmp-hhs:079,HMP HHS,-0.2611940299,-0.3685064935,1130,1890,81,measured\r
hmp-hhs:080,HMP HHS,-0.2611940299,-0.08116883117,1130,1713,80,measured\r
hmp-hhs:081,HMP HHS,-0.2582089552,-0.2711038961,1132,1830,81,measured\r
hmp-hhs:082,HMP HHS,-0.2567164179,-0.2922077922,1133,1843,81,measured\r
hmp-hhs:083,HMP HHS,-0.2567164179,0.2045454545,1133,1537,35,measured\r
hmp-hhs:084,HMP HHS,-0.2552238806,-0.06655844156,1134,1704,38,measured\r
hmp-hhs:085,HMP HHS,-0.2537313433,-0.1428571429,1135,1751,81,measured\r
hmp-hhs:086,HMP HHS,-0.2507462687,0.1753246753,1137,1555,74,measured\r
hmp-hhs:087,HMP HHS,-0.2492537313,-0.3587662338,1138,1884,81,measured\r
hmp-hhs:088,HMP HHS,-0.247761194,-0.375,1139,1894,81,measured\r
hmp-hhs:089,HMP HHS,-0.247761194,-0.3165584416,1139,1858,81,measured\r
hmp-hhs:090,HMP HHS,-0.2462686567,-0.2126623377,1140,1794,80,measured\r
hmp-hhs:091,HMP HHS,-0.2447761194,-0.400974026,1141,1910,81,measured\r
hmp-hhs:092,HMP HHS,-0.2388059701,0.2256493506,1145,1524,60,measured\r
hmp-hhs:093,HMP HHS,-0.2358208955,-0.2012987013,1147,1787,81,measured\r
hmp-hhs:094,HMP HHS,-0.2343283582,-0.125,1148,1740,81,measured\r
hmp-hhs:095,HMP HHS,-0.2313432836,0.1769480519,1150,1554,54,measured\r
hmp-hhs:096,HMP HHS,-0.228358209,-0.3701298701,1152,1891,81,measured\r
hmp-hhs:097,HMP HHS,-0.2268656716,-0.3928571429,1153,1905,81,measured\r
hmp-hhs:098,HMP HHS,-0.2253731343,-0.1396103896,1154,1749,40,measured\r
hmp-hhs:099,HMP HHS,-0.2253731343,-0.1103896104,1154,1731,40,measured\r
hmp-hhs:100,HMP HHS,-0.2194029851,-0.125,1158,1740,81,measured\r
hmp-hhs:101,HMP HHS,-0.2149253731,-0.3766233766,1161,1895,81,measured\r
hmp-hhs:102,HMP HHS,-0.2134328358,-0.349025974,1162,1878,81,measured\r
hmp-hhs:103,HMP HHS,-0.2119402985,-0.2012987013,1163,1787,81,measured\r
hmp-hhs:104,HMP HHS,-0.2119402985,0.07142857143,1163,1619,81,measured\r
hmp-hhs:105,HMP HHS,-0.2044776119,-0.2353896104,1168,1808,81,measured\r
hmp-hhs:106,HMP HHS,-0.2029850746,-0.06006493506,1169,1700,78,measured\r
hmp-hhs:107,HMP HHS,-0.1970149254,-0.3035714286,1173,1850,81,measured\r
hmp-hhs:108,HMP HHS,-0.1970149254,0.1672077922,1173,1560,49,measured\r
hmp-hhs:109,HMP HHS,-0.1865671642,0.1883116883,1180,1547,67,measured\r
hmp-hhs:110,HMP HHS,-0.1835820896,-0.3896103896,1182,1903,81,measured\r
hmp-hhs:111,HMP HHS,-0.176119403,-0.375,1187,1894,49,measured\r
hmp-hhs:112,HMP HHS,-0.1731343284,0.1055194805,1189,1598,68,measured\r
hmp-hhs:113,HMP HHS,-0.1686567164,-0.3896103896,1192,1903,81,measured\r
hmp-hhs:114,HMP HHS,-0.1671641791,-0.112012987,1193,1732,77,measured\r
hmp-hhs:115,HMP HHS,-0.1671641791,0.3003246753,1193,1478,37,measured\r
hmp-hhs:116,HMP HHS,-0.1626865672,-0.3441558442,1196,1875,81,measured\r
hmp-hhs:117,HMP HHS,-0.1597014925,-0.1525974026,1198,1757,81,measured\r
hmp-hhs:118,HMP HHS,-0.1567164179,0.336038961,1200,1456,50,measured\r
hmp-hhs:119,HMP HHS,-0.1328358209,-0.2987012987,1216,1847,81,measured\r
hmp-hhs:120,HMP HHS,-0.128358209,-0.2564935065,1219,1821,36,measured\r
hmp-hhs:121,HMP HHS,-0.1223880597,-0.2711038961,1223,1830,81,measured\r
hmp-hhs:122,HMP HHS,-0.1134328358,-0.3084415584,1229,1853,81,measured\r
hmp-hhs:123,HMP HHS,-0.1119402985,-0.1980519481,1230,1785,81,measured\r
hmp-hhs:124,HMP HHS,-0.1089552239,0.3133116883,1232,1470,30,measured\r
hmp-hhs:125,HMP HHS,-0.1029850746,-0.2516233766,1236,1818,81,measured\r
hmp-hhs:126,HMP HHS,-0.09402985075,-0.1298701299,1242,1743,81,measured\r
hmp-hhs:127,HMP HHS,-0.09104477612,-0.2857142857,1244,1839,81,measured\r
hmp-hhs:128,HMP HHS,-0.08805970149,-0.1753246753,1246,1771,81,measured\r
hmp-hhs:129,HMP HHS,-0.08805970149,0.1801948052,1246,1552,76,measured\r
hmp-hhs:130,HMP HHS,-0.08059701493,0.2077922078,1251,1535,81,measured\r
hmp-hhs:131,HMP HHS,-0.05671641791,0.3035714286,1267,1476,38,measured\r
hmp-hhs:132,HMP HHS,-0.0552238806,-0.05844155844,1268,1699,55,measured\r
hmp-hhs:133,HMP HHS,-0.0447761194,0.3603896104,1275,1441,81,measured\r
hmp-hhs:134,HMP HHS,-0.0328358209,0.375,1283,1432,81,measured\r
hmp-hhs:135,HMP HHS,-0.02089552239,0.3506493506,1291,1447,81,measured\r
hmp-hhs:136,HMP HHS,-0.01194029851,0.3701298701,1297,1435,81,measured\r
hmp-hhs:137,HMP HHS,0.02835820896,0.3603896104,1324,1441,81,measured\r
hmp-hhs:138,HMP HHS,0.04328358209,0.211038961,1334,1533,67,measured\r
hmp-hhs:139,HMP HHS,0.1059701493,0.3344155844,1376,1457,81,measured\r
hmp-hhs:140,HMP HHS,0.2447761194,-0.1185064935,1469,1736,81,measured\r
hmp-hhs:141,HMP HHS,0.2701492537,-0.1103896104,1486,1731,81,measured\r
`, v0 = `sample,id,cycle,day,visit,group,exposure,mdro_status,fmt_dose,selected_screen,biosample_accessions,run_accessions,source_class\r
PM01.C1D01,PM01,C1,D01,C1D01,FMT,Prep,Positive,,no,SAMN19760871,SRR14868472,true\r
PM01.C1D02,PM01,C1,D02,C1D02,FMT,FMT,Positive,818001,no,SAMN19760872,SRR14868471,true\r
PM01.C1D15,PM01,C1,D15,C1D15,FMT,FMT,Positive,818001,no,SAMN19760873,SRR14868467,true\r
PM01.C1D36,PM01,C1,D36,C1D36,FMT,FMT,Negative,818001,no,SAMN19760874,SRR14868466,true\r
PM01.S1,PM01,S,1,S1,Screen,None,Positive,,no,SAMN19760875,SRR14868465,true\r
PM01.S2,PM01,S,2,S2,Screen,None,Positive,,no,SAMN19760876,SRR14868464,true\r
PM01.S3,PM01,S,3,S3,Screen,None,Positive,,yes,SAMN19760877,SRR14868463,true\r
PM02.C1D01,PM02,C1,D01,C1D01,FMT,Prep,Positive,,no,SAMN19760878,SRR14868398|SRR14871952,true\r
PM02.C1D02,PM02,C1,D02,C1D02,FMT,FMT,Negative,818002,no,SAMN19760879,SRR14868397|SRR14871951,true\r
PM02.C1D15,PM02,C1,D15,C1D15,FMT,FMT,Negative,818002,no,SAMN19760880,SRR14868381|SRR14871940,true\r
PM02.C1D36,PM02,C1,D36,C1D36,FMT,FMT,Negative,818002,no,SAMN19760881,SRR14868370|SRR14871929,true\r
PM02.S1,PM02,S,1,S1,Screen,None,Negative,,yes,SAMN19760882,SRR14868367|SRR14871918,true\r
PM03.C0D01,PM03,C0,D01,C0D01,Control,Prep,Positive,,no,SAMN19760883,SRR14868462,true\r
PM03.C0D02,PM03,C0,D02,C0D02,Control,None,Positive,,no,SAMN19760884,SRR14868461,true\r
PM03.C0D15,PM03,C0,D15,C0D15,Control,None,Positive,,no,SAMN19760885,SRR14868460,true\r
PM03.C0D36,PM03,C0,D36,C0D36,Control,None,Positive,,no,SAMN19760886,SRR14868470,true\r
PM03.C1D01,PM03,C1,D01,C1D01,FMT,Prep,Positive,,no,SAMN19760887,SRR14868395|SRR14871907,true\r
PM03.C1D02,PM03,C1,D02,C1D02,FMT,FMT,Positive,818002,no,SAMN19760888,SRR14868394|SRR14871896,true\r
PM03.C1D15,PM03,C1,D15,C1D15,FMT,FMT,Positive,818002,no,SAMN19760889,SRR14868393|SRR14871885,true\r
PM03.C1D36,PM03,C1,D36,C1D36,FMT,FMT,Positive,818002,no,SAMN19760890,SRR14868392|SRR14871874,true\r
PM03.C2D01,PM03,C2,D01,C2D01,FMT,Prep,Negative,,no,SAMN19760891,SRR14868391|SRR14871871,true\r
PM03.C2D02,PM03,C2,D02,C2D02,FMT,FMT,Negative,718001,no,SAMN19760892,SRR14868396|SRR14871950,true\r
PM03.C2D15,PM03,C2,D15,C2D15,FMT,FMT,Negative,718001,no,SAMN19760893,SRR14868390|SRR14871949,true\r
PM03.C2D36,PM03,C2,D36,C2D36,FMT,FMT,Negative,718001,no,SAMN19760894,SRR14868389|SRR14871948,true\r
PM03.S1,PM03,S,1,S1,Screen,None,Positive,,yes,SAMN19760895,SRR14868469,true\r
PM04.C1D01,PM04,C1,D01,C1D01,FMT,Prep,Positive,,no,SAMN19760896,SRR14868388|SRR14871947,true\r
PM04.C1D02,PM04,C1,D02,C1D02,FMT,FMT,Negative,818002,no,SAMN19760897,SRR14868387|SRR14871946,true\r
PM04.C1D15,PM04,C1,D15,C1D15,FMT,FMT,Positive,818002,no,SAMN19760898,SRR14868386|SRR14871945,true\r
PM04.C1D36,PM04,C1,D36,C1D36,FMT,FMT,Positive,818002,no,SAMN19760899,SRR14868385|SRR14871944,true\r
PM04.C2D01,PM04,C2,D01,C2D01,FMT,Prep,Positive,,no,SAMN19760900,SRR14868384|SRR14871943,true\r
PM04.C2D02,PM04,C2,D02,C2D02,FMT,FMT,Positive,718001,no,SAMN19760901,SRR14868383|SRR14871942,true\r
PM04.C2D15,PM04,C2,D15,C2D15,FMT,FMT,Negative,718001,no,SAMN19760902,SRR14868382|SRR14871941,true\r
PM04.C2D36,PM04,C2,D36,C2D36,FMT,FMT,Negative,718001,no,SAMN19760903,SRR14868380|SRR14871939,true\r
PM04.S1,PM04,S,1,S1,Screen,None,Positive,,yes,SAMN19760904,SRR14868379|SRR14871938,true\r
PM05.C0D01,PM05,C0,D01,C0D01,Control,Prep,Positive,,no,SAMN19760905,SRR14871937,true\r
PM05.C0D02,PM05,C0,D02,C0D02,Control,None,Positive,,no,SAMN19760906,SRR14871936,true\r
PM05.C0D15,PM05,C0,D15,C0D15,Control,None,Positive,,no,SAMN19760907,SRR14871935,true\r
PM05.C0D36,PM05,C0,D36,C0D36,Control,None,Positive,,no,SAMN19760908,SRR14871934,true\r
PM05.C1D01,PM05,C1,D01,C1D01,FMT,Prep,Positive,,no,SAMN19760909,SRR14871933,true\r
PM05.C1D02,PM05,C1,D02,C1D02,FMT,FMT,Positive,419002,no,SAMN19760910,SRR14871932,true\r
PM05.C1D15,PM05,C1,D15,C1D15,FMT,FMT,Negative,419002,no,SAMN19760911,SRR14871931,true\r
PM05.C1D36,PM05,C1,D36,C1D36,FMT,FMT,Negative,419002,no,SAMN19760912,SRR14871930,true\r
PM05.S1,PM05,S,1,S1,Screen,None,Positive,,yes,SAMN19760913,SRR14871928,true\r
PM06.C1D01,PM06,C1,D01,C1D01,FMT,Prep,Positive,,no,SAMN19760914,SRR14868378|SRR14871927,true\r
PM06.C1D02,PM06,C1,D02,C1D02,FMT,FMT,Positive,718001,no,SAMN19760915,SRR14868377|SRR14871926,true\r
PM06.C1D15,PM06,C1,D15,C1D15,FMT,FMT,Positive,718001,no,SAMN19760916,SRR14868376|SRR14871925,true\r
PM06.C1D36,PM06,C1,D36,C1D36,FMT,FMT,Negative,718001,no,SAMN19760917,SRR14868375|SRR14871924,true\r
PM06.S1,PM06,S,1,S1,Screen,None,Positive,,yes,SAMN19760918,SRR14868374|SRR14871923,true\r
PM07.C0D01,PM07,C0,D01,C0D01,Control,Prep,Positive,,no,SAMN19760919,SRR14868373|SRR14871922,true\r
PM07.C0D02,PM07,C0,D02,C0D02,Control,None,Positive,,no,SAMN19760920,SRR14868372|SRR14871921,true\r
PM07.C0D15,PM07,C0,D15,C0D15,Control,None,Positive,,no,SAMN19760921,SRR14868371|SRR14871920,true\r
PM07.C0D36,PM07,C0,D36,C0D36,Control,None,Positive,,no,SAMN19760922,SRR14868369|SRR14871919,true\r
PM07.C1D01,PM07,C1,D01,C1D01,FMT,Prep,Positive,,no,SAMN19760923,SRR14871917,true\r
PM07.C1D02,PM07,C1,D02,C1D02,FMT,FMT,Positive,818002,no,SAMN19760924,SRR14871916,true\r
PM07.C1D15,PM07,C1,D15,C1D15,FMT,FMT,Positive,818002,no,SAMN19760925,SRR14871915,true\r
PM07.C1D36,PM07,C1,D36,C1D36,FMT,FMT,Positive,818002,no,SAMN19760926,SRR14871914,true\r
PM07.C2D01,PM07,C2,D01,C2D01,FMT,FMT,Positive,,no,SAMN19760927,SRR14871913,true\r
PM07.C2D02,PM07,C2,D02,C2D02,FMT,FMT,Positive,419001,no,SAMN19760928,SRR14871912,true\r
PM07.C2D15,PM07,C2,D15,C2D15,FMT,FMT,Positive,419001,no,SAMN19760929,SRR14871911,true\r
PM07.C2D36,PM07,C2,D36,C2D36,FMT,FMT,Positive,419001,no,SAMN19760930,SRR14871910,true\r
PM07.S1,PM07,S,1,S1,Screen,None,Positive,,no,SAMN19760931,SRR14868368|SRR14871909,true\r
PM07.S2,PM07,S,2,S2,Screen,None,Positive,,yes,SAMN19760932,SRR14871908,true\r
PM08.C0D01,PM08,C0,D01,C0D01,Control,Prep,Positive,,no,SAMN19760933,SRR14871906,true\r
PM08.C0D02,PM08,C0,D02,C0D02,Control,None,Positive,,no,SAMN19760934,SRR14871905,true\r
PM08.C0D15,PM08,C0,D15,C0D15,Control,None,Positive,,no,SAMN19760935,SRR14871904,true\r
PM08.C0D36,PM08,C0,D36,C0D36,Control,None,Positive,,no,SAMN19760936,SRR14871903,true\r
PM08.C1D01,PM08,C1,D01,C1D01,FMT,Prep,Positive,,no,SAMN19760937,SRR14871902,true\r
PM08.C1D02,PM08,C1,D02,C1D02,FMT,FMT,Positive,419001,no,SAMN19760938,SRR14871901,true\r
PM08.C1D15,PM08,C1,D15,C1D15,FMT,FMT,Positive,419001,no,SAMN19760939,SRR14871900,true\r
PM08.C1D36,PM08,C1,D36,C1D36,FMT,FMT,Negative,419001,no,SAMN19760940,SRR14871899,true\r
PM08.S1,PM08,S,1,S1,Screen,None,Negative,,no,SAMN19760941,SRR14871898,true\r
PM08.S2,PM08,S,2,S2,Screen,None,Positive,,no,SAMN19760942,SRR14871897,true\r
PM08.S3,PM08,S,3,S3,Screen,None,Positive,,yes,SAMN19760943,SRR14871895,true\r
PM09.C1D01,PM09,C1,D01,C1D01,FMT,Prep,Negative,,no,SAMN19760944,SRR14871894,true\r
PM09.C1D15,PM09,C1,D15,C1D15,FMT,FMT,Positive,419002,no,SAMN19760945,SRR14871893,true\r
PM09.C1D36,PM09,C1,D36,C1D36,FMT,FMT,Negative,419002,no,SAMN19760946,SRR14871892,true\r
PM09.S1,PM09,S,1,S1,Screen,None,Positive,,no,SAMN19760947,SRR14871891,true\r
PM09.S2,PM09,S,2,S2,Screen,None,Positive,,no,SAMN19760948,SRR14871890,true\r
PM09.S3,PM09,S,3,S3,Screen,None,Positive,,yes,SAMN19760949,SRR14871889,true\r
PM12.C0D01,PM12,C0,D01,C0D01,Control,Prep,Negative,,no,SAMN19760950,SRR14871888,true\r
PM12.C0D02,PM12,C0,D02,C0D02,Control,None,Negative,,no,SAMN19760951,SRR14871887,true\r
PM12.C0D15,PM12,C0,D15,C0D15,Control,None,Positive,,no,SAMN19760952,SRR14871886,true\r
PM12.C0D36,PM12,C0,D36,C0D36,Control,None,Positive,,no,SAMN19760953,SRR14871884,true\r
PM12.S1,PM12,S,1,S1,Screen,None,Positive,,yes,SAMN19760954,SRR14871883,true\r
PM13.C1D01,PM13,C1,D01,C1D01,FMT,Prep,Positive,,no,SAMN19760955,SRR14871882,true\r
PM13.C1D02,PM13,C1,D02,C1D02,FMT,FMT,Positive,419003,no,SAMN19760956,SRR14871881,true\r
PM13.C1D15,PM13,C1,D15,C1D15,FMT,FMT,Positive,419003,no,SAMN19760957,SRR14871880,true\r
PM13.C1D36,PM13,C1,D36,C1D36,FMT,FMT,Positive,419003,no,SAMN19760958,SRR14871879,true\r
PM13.S1,PM13,S,1,S1,Screen,None,Positive,,yes,SAMN19760959,SRR14871878,true\r
SD01.0419001,SD01,D,D,419001,Donor,Donor,Negative,419001,no,SAMN19760960,SRR14871877,true\r
SD01.0419002,SD01,D,D,419002,Donor,Donor,Negative,419002,no,SAMN19760961,SRR14871876,true\r
SD01.0419003,SD01,D,D,419003,Donor,Donor,Negative,419003,no,SAMN19760962,SRR14871875,true\r
SD01.0718001,SD01,D,D,718001,Donor,Donor,Negative,718001,no,SAMN19760963,SRR14871873,true\r
SD01.0818001,SD01,D,D,818001,Donor,Donor,Negative,818001,no,SAMN19760964,SRR14868468,true\r
SD01.0818002,SD01,D,D,818002,Donor,Donor,Negative,818002,no,SAMN19760965,SRR14871872,true\r
`;
y(f0).map((e) => ({
  sample: e.sample,
  id: e.id,
  visit: e.visit,
  visitSlot: Number(e.visit_slot),
  stackOrder: Number(e.stack_order),
  taxon: e.taxon,
  relativeAbundance: Number(e.relative_abundance),
  sourceClass: e.source_class
}));
y(H0).map((e) => ({
  sample: e.sample,
  id: e.id,
  cycle: e.cycle,
  cycleLabel: e.cycle_label,
  day: e.day,
  inverseSimpson: Number(e.inverse_simpson),
  sourceClass: e.source_class
}));
y(x0).map((e) => ({
  sample: e.sample,
  id: e.id,
  sampleType: e.sample_type,
  rpkgSum: Number(e.rpkg_sum),
  sourceClass: e.source_class
}));
const A = y(F0).map((e) => ({
  sample: e.sample,
  id: e.id,
  cluster: e.cluster,
  exposure: e.exposure,
  relativeDay: Number(e.relative_day),
  axis1: Number(e.axis1),
  axis2: Number(e.axis2),
  sourceClass: e.source_class
})), Y = y(A0).map((e) => ({
  pointKey: e.point_key,
  cohort: e.cohort,
  axis1: Number(e.axis1),
  axis2: Number(e.axis2),
  pixelX: Number(e.pixel_x),
  pixelY: Number(e.pixel_y),
  segmentationScore: Number(e.segmentation_score),
  sourceClass: e.source_class
}));
y(v0).map((e) => ({
  sample: e.sample,
  id: e.id,
  cycle: e.cycle,
  day: e.day,
  visit: e.visit,
  group: e.group,
  exposure: e.exposure,
  mdroStatus: e.mdro_status,
  fmtDose: e.fmt_dose,
  selectedScreen: e.selected_screen === "yes",
  biosampleAccessions: e.biosample_accessions,
  runAccessions: e.run_accessions,
  sourceClass: e.source_class
}));
const h = {
  "More Extreme": "#ffae1e",
  "Less Extreme": "#653980",
  "PREMIX Donor": "#318fb9",
  "Non-PREMIX MDRO": "#f23497",
  RCDI: "#973739",
  "Non-PREMIX Donor": "#b8e3e4",
  "HMP HHS": "#b6b6b6"
}, c = { x0: 89, x1: 787, y0: 1360, y1: 1965 }, i = { x0: 1019, x1: 1718, y0: 1360, y1: 1965 };
function v(e) {
  return 293 + 760 * e;
}
function g(e) {
  return 1703 - 805 * e;
}
function k(e) {
  return 1305 + 670 * e;
}
function N(e) {
  return 1663 - 616 * e;
}
const f = "#3c3c3c", _ = "#ebebeb";
function b(e, r, n, t, P, M = {}) {
  e.appendChild(s("text", { x: r, y: n, class: P, ...M }, t));
}
function E(e, r, n, t, P, M = {}) {
  e.appendChild(s("line", { x1: r, y1: n, x2: t, y2: P, stroke: f, "stroke-width": 1.6, ...M }));
}
function g0(e, r, n = {}) {
  e.appendChild(s("path", { d: r, ...n }));
}
function y0(e, r, n) {
  const t = r.map((S) => [v(S.axis1), g(S.axis2)]);
  if (t.length < 3) return;
  const P = t.reduce((S, p) => S + p[0], 0) / t.length, M = t.reduce((S, p) => S + p[1], 0) / t.length, D = t.reduce((S, p) => S + (p[0] - P) ** 2, 0) / (t.length - 1), u = t.reduce((S, p) => S + (p[1] - M) ** 2, 0) / (t.length - 1), a = t.reduce((S, p) => S + (p[0] - P) * (p[1] - M), 0) / (t.length - 1), C = D + u, o = Math.sqrt(Math.max(0, ((D - u) / 2) ** 2 + a ** 2)), l = C / 2 + o, m = C / 2 - o, R = 0.5 * Math.atan2(2 * a, D - u) * 180 / Math.PI;
  e.appendChild(s("ellipse", {
    cx: P,
    cy: M,
    rx: Math.sqrt(l) * 2.05,
    ry: Math.sqrt(Math.max(m, 1)) * 2.05,
    fill: "none",
    stroke: n,
    "stroke-width": 4.5,
    opacity: 0.95,
    transform: `rotate(${R} ${P} ${M})`,
    "data-layer": "under",
    "data-guide": "PREMIX donor covariance ellipse"
  }));
}
function T0(e, r, n, t, P) {
  const M = {
    fill: P,
    stroke: P,
    "stroke-width": 1.3,
    opacity: 0.84,
    "data-mark": "ordination sample",
    "data-key": r.sample,
    "data-source": r.sourceClass,
    "data-exposure": r.exposure,
    "data-cohort-class": r.cluster,
    "data-record-key-kind": "sample-id"
  };
  r.exposure === "Donor" ? e.appendChild(s("circle", { cx: n, cy: t, r: 5.2, ...M })) : r.exposure === "FMT" ? e.appendChild(s("polygon", { points: `${n},${t - 7} ${n - 6.5},${t + 5.5} ${n + 6.5},${t + 5.5}`, ...M })) : r.exposure === "None" ? e.appendChild(s("rect", { x: n - 5.2, y: t - 5.2, width: 10.4, height: 10.4, ...M })) : e.appendChild(s("path", {
    d: `M${n - 7},${t}H${n + 7}M${n},${t - 7}V${t + 7}`,
    fill: "none",
    stroke: P,
    "stroke-width": 1.8,
    opacity: 0.9,
    "data-mark": "ordination sample",
    "data-key": r.sample,
    "data-source": r.sourceClass,
    "data-exposure": r.exposure
  }));
}
function I0(e, r, n, t) {
  const P = { fill: "#6b6b6b", stroke: "#6b6b6b", "stroke-width": 1.3 };
  r === "Donor" ? e.appendChild(s("circle", { cx: n, cy: t, r: 5.2, ...P })) : r === "FMT" ? e.appendChild(s("polygon", { points: `${n},${t - 7} ${n - 6.5},${t + 5.5} ${n + 6.5},${t + 5.5}`, ...P })) : r === "None" ? e.appendChild(s("rect", { x: n - 5.2, y: t - 5.2, width: 10.4, height: 10.4, ...P })) : e.appendChild(s("path", {
    d: `M${n - 7},${t}H${n + 7}M${n},${t - 7}V${t + 7}`,
    fill: "none",
    stroke: "#6b6b6b",
    "stroke-width": 1.8
  }));
}
function j(e) {
  const r = s("g", {
    "data-panel": "D",
    "data-coordinate-space": "premix-only-pcoa",
    "data-record-count": A.length
  }), n = s("g", { "data-layer": "under" });
  y0(n, A.filter((a) => a.id === "SD01"), h["PREMIX Donor"]), r.appendChild(n);
  const t = s("g", { "data-guide": "panel D axes" });
  for (let a = -0.2; a <= 0.6001; a += 0.1) {
    const C = v(Number(a.toFixed(1)));
    E(t, C, c.y0, C, c.y1, { stroke: _, "stroke-width": 1.5 });
  }
  for (let a = -0.3; a <= 0.4001; a += 0.1) {
    const C = g(Number(a.toFixed(1)));
    E(t, c.x0, C, c.x1, C, { stroke: _, "stroke-width": 1.5 });
  }
  E(t, c.x0, c.y0, c.x0, c.y1, { stroke: f, "stroke-width": 1.6 }), E(t, c.x0, c.y1, c.x1, c.y1, { stroke: f, "stroke-width": 1.6 });
  for (const a of [-0.2, 0, 0.2, 0.4, 0.6]) {
    const C = v(a);
    E(t, C, c.y1, C, c.y1 + 7, { stroke: f }), b(t, C, c.y1 + 28, a.toFixed(1), "cl07-axis", { "text-anchor": "middle" });
  }
  for (const a of [-0.2, 0, 0.2, 0.4]) {
    const C = g(a);
    E(t, c.x0 - 7, C, c.x0, C, { stroke: f }), b(t, c.x0 - 11, C + 6, a.toFixed(1), "cl07-axis", { "text-anchor": "end" });
  }
  b(t, (c.x0 + c.x1) / 2, 2017, "Axis 1 [21.5 %]", "cl07-axis-title", { "text-anchor": "middle" }), b(t, 27, (c.y0 + c.y1) / 2, "Axis 2 [16.2 %]", "cl07-axis-title", {
    "text-anchor": "middle",
    transform: `rotate(-90 27 ${(c.y0 + c.y1) / 2})`
  }), r.appendChild(t), [...new Set(A.map((a) => a.id))].forEach((a) => {
    const C = A.filter((m) => m.id === a).sort((m, R) => m.relativeDay - R.relativeDay), o = h[C[0].cluster], l = s("g", { "data-scope": a, "data-cohort-class": C[0].cluster });
    C.length > 1 && g0(l, C.map((m, R) => `${R ? "L" : "M"}${v(m.axis1)},${g(m.axis2)}`).join(""), {
      fill: "none",
      stroke: o,
      "stroke-width": 3.2,
      opacity: 0.8,
      "data-mark": "ordination trajectory",
      "data-key": a,
      "data-source": "derived-from-true"
    }), C.forEach((m) => T0(l, m, v(m.axis1), g(m.axis2), o)), r.appendChild(l);
  });
  const M = s("g", { "data-guide": "panel D legends" });
  b(M, 815, 1370, "ID", "cl07-title"), ["PM05", "PM06", "PM09", "PM01", "PM02", "PM03", "PM04", "PM07", "PM08", "PM12", "PM13", "SD01"].forEach((a, C) => {
    const o = A.find((R) => R.id === a);
    if (!o) return;
    const l = 1400 + C * 29, m = h[o.cluster];
    E(M, 821, l - 5, 849, l - 5, { stroke: m, "stroke-width": 3 }), M.appendChild(s("circle", { cx: 835, cy: l - 5, r: 5.3, fill: m })), b(M, 860, l, a, "cl07-id-legend");
  }), b(M, 815, 1773, "Exposure", "cl07-title"), ["Donor", "FMT", "None", "Prep"].forEach((a, C) => {
    const o = 1811 + C * 42;
    I0(M, a, 834, o - 6), b(M, 860, o, a, "cl07-id-legend");
  }), r.appendChild(M), e.appendChild(r);
}
function V(e) {
  const r = s("g", {
    "data-panel": "E",
    "data-coordinate-space": "cross-cohort-pcoa",
    "data-record-count": Y.length,
    "data-record-scope": "visible-centres-only"
  }), n = s("g", { "data-layer": "under", "data-guide": "published cohort envelopes" });
  n.appendChild(s("ellipse", {
    cx: 1165,
    cy: 1515,
    rx: 128,
    ry: 42,
    fill: "none",
    stroke: h["Non-PREMIX Donor"],
    "stroke-width": 4.5,
    transform: "rotate(-55 1165 1515)",
    opacity: 0.95
  })), n.appendChild(s("ellipse", {
    cx: 1195,
    cy: 1510,
    rx: 105,
    ry: 35,
    fill: "none",
    stroke: h["PREMIX Donor"],
    "stroke-width": 4.5,
    transform: "rotate(-48 1195 1510)",
    opacity: 0.95
  })), r.appendChild(n);
  const t = s("g", { "data-guide": "panel E axes" });
  for (let M = -0.4; M <= 0.6001; M += 0.1) {
    const D = k(Number(M.toFixed(1)));
    E(t, D, i.y0, D, i.y1, { stroke: _, "stroke-width": 1.5 });
  }
  for (let M = -0.4; M <= 0.4001; M += 0.1) {
    const D = N(Number(M.toFixed(1)));
    E(t, i.x0, D, i.x1, D, { stroke: _, "stroke-width": 1.5 });
  }
  E(t, i.x0, i.y0, i.x0, i.y1, { stroke: f, "stroke-width": 1.6 }), E(t, i.x0, i.y1, i.x1, i.y1, { stroke: f, "stroke-width": 1.6 });
  for (const M of [-0.4, -0.2, 0, 0.2, 0.4, 0.6]) {
    const D = k(M);
    E(t, D, i.y1, D, i.y1 + 7, { stroke: f }), b(t, D, i.y1 + 28, M.toFixed(1), "cl07-axis", { "text-anchor": "middle" });
  }
  for (const M of [-0.25, 0, 0.25]) {
    const D = N(M);
    E(t, i.x0 - 7, D, i.x0, D, { stroke: f }), b(t, i.x0 - 11, D + 6, M.toFixed(2), "cl07-axis", { "text-anchor": "end" });
  }
  b(t, (i.x0 + i.x1) / 2, 2017, "Axis 1, [27.1%]", "cl07-axis-title", { "text-anchor": "middle" }), b(t, 961, (i.y0 + i.y1) / 2, "Axis 2, [9.9%]", "cl07-axis-title", {
    "text-anchor": "middle",
    transform: `rotate(-90 961 ${(i.y0 + i.y1) / 2})`
  }), r.appendChild(t), ["HMP HHS", "Non-PREMIX Donor", "RCDI", "Non-PREMIX MDRO", "More Extreme", "Less Extreme", "PREMIX Donor"].forEach((M) => {
    const D = s("g", { "data-scope": M, "data-cohort-class": M });
    Y.filter((u) => u.cohort === M).forEach((u) => {
      D.appendChild(s("circle", {
        cx: k(u.axis1),
        cy: N(u.axis2),
        r: 5.8,
        fill: h[M],
        stroke: h[M],
        "stroke-width": 1.1,
        opacity: 0.82,
        "data-mark": "external ordination sample",
        "data-key": u.pointKey,
        "data-source": u.sourceClass,
        "data-segmentation-score": u.segmentationScore,
        "data-cohort-class": M,
        "data-record-key-kind": "digitized-visible-centre"
      }));
    }), r.appendChild(D);
  }), e.appendChild(r);
}
function Q(e) {
  const r = s("g", { "data-guide": "panel E cohort legend" });
  [
    { label: `More
Extreme`, x: 629, y: 2054, color: h["More Extreme"] },
    { label: `Less
Extreme`, x: 629, y: 2088, color: h["Less Extreme"] },
    { label: `PREMIX
Donor`, x: 748, y: 2054, color: h["PREMIX Donor"] },
    { label: `Non-PREMIX
MDRO`, x: 748, y: 2088, color: h["Non-PREMIX MDRO"] },
    { label: "RCDI", x: 910, y: 2054, color: h.RCDI },
    { label: `Non-PREMIX
Donor`, x: 910, y: 2088, color: h["Non-PREMIX Donor"] },
    { label: "HMP HHS", x: 1071, y: 2054, color: h["HMP HHS"] }
  ].forEach((t) => {
    r.appendChild(s("circle", { cx: t.x, cy: t.y - 7, r: 6.2, fill: t.color })), t.label.split(`
`).forEach((M, D) => b(r, t.x + 22, t.y - 5 + D * 17, M, "cl07-small"));
  }), e.appendChild(r);
}
const O = 1920, L = 1080, w = [
  { index: 0, kind: "panel-i", label: "Panel scatter (d) · complete PREMIX-only PCoA" },
  { index: 1, kind: "panel-i-joint", label: "scatter (d) · World YZ carrier with cohort hinge ports" },
  { index: 2, kind: "lcm", label: "LCM · orthogonal PCoA planes on one World XYZ cohort spine" },
  { index: 3, kind: "panel-j-joint", label: "scatter (e) · World XY carrier with cohort hinge ports" },
  { index: 4, kind: "panel-j-released", label: "scatter (e) · released from the shared cohort spine" },
  { index: 5, kind: "panel-j", label: "Panel scatter (e) · complete cross-cohort PCoA" }
], e0 = "http://www.w3.org/2000/svg", T = ["Less Extreme", "More Extreme", "PREMIX Donor"], k0 = ["RCDI", "HMP HHS", "Non-PREMIX Donor", "Non-PREMIX MDRO"], N0 = { x: 286, y: 82, width: 1348, height: 916, viewBox: [0, 1335, 995, 765] }, O0 = { x: 270, y: 82, width: 1380, height: 916, viewBox: [610, 1335, 1142, 765] }, r0 = [0, 1335, 810, 700], t0 = [840, 1335, 910, 700], q = { a: 455 / 810, b: -160 / 810, c: 0, d: 620 / 700, e: 445, f: 347 - 620 / 700 * 1335 }, W = { a: 747 / 810, b: 150 / 810, c: 0, d: 735 / 700, e: 900 - 747 / 810 * 840, f: 115 - 150 / 810 * 840 - 735 / 700 * 1335 }, n0 = new Map(T.map((e, r) => [e, [334, 518, 702][r]]));
function d(e, r = {}) {
  const n = document.createElementNS(e0, e);
  return Object.entries(r).forEach(([t, P]) => n.setAttribute(t, String(P))), n;
}
function $(e, r, n, t, P = {}) {
  const M = d("text", { x: r, y: n, ...P });
  M.textContent = t, e.appendChild(M);
}
function L0(e, r) {
  e.replaceChildren(), e.setAttribute("xmlns", e0), e.setAttribute("width", String(O)), e.setAttribute("height", String(L)), e.setAttribute("viewBox", `0 0 ${O} ${L}`), e.setAttribute("data-keyframe-index", String(r)), e.setAttribute("data-keyframe-kind", w[r].kind), e.setAttribute("data-scene-id", "frame-viewport"), e.style.background = "#fff", e.style.fontFamily = "Arial, Helvetica, sans-serif", e.appendChild(d("rect", { width: O, height: L, fill: "#fff" }));
}
function _0(e) {
  return `matrix(${e.a} ${e.b} ${e.c} ${e.d} ${e.e} ${e.f})`;
}
function $0(e, r, n) {
  return { x: e.a * r + e.c * n + e.e, y: e.b * r + e.d * n + e.f };
}
function M0(e, r, n) {
  const t = e === "D" ? q : W, P = P0(e, r), M = $0(t, P.x, P.y), D = n0.get(r);
  if (D === void 0) throw new Error(`No shared anchor for ${r}`);
  const u = (900 - M.x) * n, a = (D - M.y) * n, C = u / t.a, o = (a - t.b * C) / t.d;
  return { dx: C, dy: o, point: { x: M.x + u, y: M.y + a } };
}
function P0(e, r) {
  const n = e === "D" ? A.filter((t) => t.cluster === r).map((t) => ({ x: v(t.axis1), y: g(t.axis2) })) : Y.filter((t) => t.cohort === r).map((t) => ({ x: k(t.axis1), y: N(t.axis2) }));
  if (!n.length) throw new Error(`No ${e} records for ${r}`);
  return { x: n.reduce((t, P) => t + P.x, 0) / n.length, y: n.reduce((t, P) => t + P.y, 0) / n.length };
}
function a0(e, r) {
  const n = e.querySelector(`[data-panel="${r}"]`);
  if (!n) throw new Error(`Panel ${r} source renderer did not produce its panel group`);
  n.setAttribute("data-parent-id", `panel-plane:${r}`), n.setAttribute("data-structural-host", "panel-plane"), n.querySelectorAll("[data-mark][data-key]").forEach((P) => {
    P.setAttribute("data-source-system", r), P.setAttribute("data-record-identity", `${r}:${P.getAttribute("data-key")}`);
  }), n.querySelectorAll("[data-scope][data-cohort-class]").forEach((P) => {
    const M = P.getAttribute("data-cohort-class") ?? "";
    P.setAttribute(r === "D" ? "data-scene-member-of" : "data-scene-id", `group:${r}:${M}`), P.setAttribute("data-parent-id", `panel-plane:${r}`), P.setAttribute("data-structural-host", "panel-plane");
  });
  const t = r === "D" ? ['[data-guide="panel D axes"]'] : ['[data-guide="published cohort envelopes"]', '[data-guide="panel E axes"]'];
  t.forEach((P, M) => {
    const D = e.querySelector(P);
    D && (D.setAttribute(M === t.length - 1 ? "data-scene-id" : "data-scene-member-of", `guide:${r}`), D.setAttribute("data-parent-id", `panel-plane:${r}`));
  }), r === "D" && n.appendChild(d("g", {
    "data-scene-id": "D-context:trajectories-and-exposure",
    "data-parent-id": "panel-plane:D",
    "data-semantic-proxy": "source-rendered trajectories and exposure encodings"
  }));
}
function D0(e, r) {
  const n = e.querySelector('[data-panel="D"]');
  n && T.forEach((t) => {
    const P = P0("D", t), M = d("g", {
      "data-scene-id": `group:D:${t}`,
      "data-parent-id": "panel-plane:D",
      "data-structural-host": "panel-plane",
      "data-cohort-class": t,
      "data-correspondence-level": "group-only",
      opacity: r
    });
    M.appendChild(d("circle", {
      cx: P.x,
      cy: P.y,
      r: t === "PREMIX Donor" ? 34 : 45,
      fill: h[t],
      "fill-opacity": 0.07,
      stroke: h[t],
      "stroke-width": 3,
      "stroke-dasharray": "9 7",
      "data-guide": `${t} D group port`
    })), n.appendChild(M);
  });
}
function B0(e, r, n) {
  r === "D" ? (e.querySelectorAll('[data-panel="D"] [data-mark="ordination trajectory"]').forEach((t) => t.setAttribute("opacity", n ? "0.14" : "0.18")), D0(e, 1)) : (k0.forEach((t) => {
    var P;
    return (P = e.querySelector(`[data-panel="E"] [data-scope="${t}"]`)) == null ? void 0 : P.setAttribute("opacity", n ? "0.2927" : "0.3902");
  }), T.forEach((t) => {
    var P;
    return (P = e.querySelector(`[data-panel="E"] [data-scope="${t}"]`)) == null ? void 0 : P.querySelectorAll("circle").forEach((M) => {
      M.setAttribute("stroke", "#fff"), M.setAttribute("stroke-width", "2.5"), M.setAttribute("opacity", "0.97");
    });
  }));
}
function w0(e, r, n) {
  T.forEach((t) => {
    const { dx: P, dy: M } = M0(r, t, n), D = n === 0 ? null : `translate(${P} ${M})`;
    if ((r === "D" ? [`[data-panel="D"] [data-scope][data-cohort-class="${t}"]`, `[data-scene-id="group:D:${t}"]`] : [`[data-panel="E"] [data-scope="${t}"]`]).forEach((a) => e.querySelectorAll(a).forEach((C) => {
      C.setAttribute("data-group-transform", "cohort-center-to-shared-anchor"), C.setAttribute("data-group-transform-cohort", t), C.setAttribute("data-group-transform-fraction", String(n)), D ? C.setAttribute("transform", D) : C.removeAttribute("transform");
    })), r === "E" && t === "PREMIX Donor") {
      const a = e.querySelector('[data-guide="published cohort envelopes"] ellipse:nth-of-type(2)');
      if (a) {
        const C = a.getAttribute("transform") ?? "";
        a.setAttribute("data-group-transform", "cohort-center-to-shared-anchor"), a.setAttribute("data-group-transform-cohort", t), a.setAttribute("data-group-transform-fraction", String(n)), a.setAttribute("transform", D ? `${D} ${C}` : C);
      }
    }
  });
}
function G(e, r) {
  const n = r === "D" ? N0 : O0, t = d("svg", {
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height,
    viewBox: n.viewBox.join(" "),
    preserveAspectRatio: "xMidYMid meet",
    "data-scene-id": `panel-plane:${r}`,
    "data-parent-id": "world-xyz",
    "data-structural-host": "world",
    "data-record-count": r === "D" ? 95 : 464,
    "data-visible-record-count": r === "D" ? 95 : 464
  });
  r === "D" ? (j(t), D0(t, 0)) : (V(t), Q(t)), a0(t, r);
  const P = t.querySelector(r === "D" ? '[data-guide="panel D legends"]' : '[data-guide="panel E cohort legend"]');
  P && (P.setAttribute("data-scene-member-of", `guide:${r}`), P.setAttribute("data-parent-id", `panel-plane:${r}`)), e.appendChild(t);
}
function X0(e, r, n) {
  const t = (r - e.e) / e.a;
  return { x: t, y: (n - e.b * t - e.f) / e.d };
}
function K0(e, r) {
  const n = r === "D" ? r0 : t0, [t, P, M, D] = n, u = `${t},${P} ${t + M},${P} ${t + M},${P + D} ${t},${P + D}`, a = r === "D" ? "#65758b" : "#4c78a8", o = X0(r === "D" ? q : W, r === "D" ? 490 : 1515, r === "D" ? 402 : 245), l = d("g", {
    "data-plane-surface": r,
    "data-parent-id": `panel-plane:${r}`,
    "data-derived-guide": "true",
    "data-record-count": 0
  });
  l.appendChild(d("polygon", { points: u, fill: a, "fill-opacity": 0.035, stroke: a, "stroke-width": 2.5 })), $(l, o.x, o.y, `${r} · ${r === "D" ? "YZ" : "XY"}`, { fill: a, "font-size": 22, "font-weight": 700, "text-anchor": "middle" }), e.appendChild(l);
}
function Y0(e, r) {
  const n = d("svg");
  r === "D" ? j(n) : Q(n);
  const t = n.querySelector(r === "D" ? '[data-guide="panel D legends"]' : '[data-guide="panel E cohort legend"]');
  if (!t) return;
  const P = d("svg", r === "D" ? { x: 72, y: 178, width: 260, height: 690, viewBox: "795 1335 200 700", preserveAspectRatio: "xMidYMid meet" } : { x: 990, y: 950, width: 760, height: 75, viewBox: "610 2025 650 75", preserveAspectRatio: "xMidYMid meet" });
  t.setAttribute("data-scene-member-of", `guide:${r}`), t.setAttribute("data-parent-id", `panel-plane:${r}`), t.setAttribute("data-structural-host", "viewport"), P.appendChild(t), e.appendChild(P);
}
function z(e, r, n, t) {
  var a;
  const P = r === "D" ? r0 : t0, D = d("g", {
    transform: _0(r === "D" ? q : W),
    "data-scene-id": `panel-plane:${r}`,
    "data-parent-id": "world-xyz",
    "data-structural-host": "world",
    "data-world-plane": r === "D" ? "YZ" : "XY",
    "data-camera": "orthographic-azimuth-34-depth-0.78",
    "data-record-count": r === "D" ? 95 : 464,
    "data-visible-record-count": r === "D" ? 95 : 464
  }), u = d("svg", { x: P[0], y: P[1], width: P[2], height: P[3], viewBox: P.join(" "), overflow: "visible" });
  K0(u, r), r === "D" ? j(u) : V(u), r === "D" && ((a = u.querySelector('[data-guide="panel D legends"]')) == null || a.remove()), a0(u, r), B0(u, r, n), w0(u, r, t), D.appendChild(u), e.appendChild(D), Y0(e, r);
}
function z0(e) {
  const r = d("g", {
    "data-scene-id": "world-xyz",
    "data-structural-host": "world",
    "data-space-mode": "world-3d",
    "data-camera-projection": "orthographic",
    "data-camera-angle-deg": 34,
    "data-depth-compression": 0.78
  });
  r.appendChild(d("line", { x1: 900, y1: 92, x2: 900, y2: 875, stroke: "#202834", "stroke-width": 4 })), r.appendChild(d("path", { d: "M900 92 l-8 18 h16 z", fill: "#202834" })), $(r, 900, 68, "World Y · shared cohort spine", { "font-size": 22, "font-weight": 700, "text-anchor": "middle", fill: "#202834" }), $(r, 92, 68, "Single World XYZ · orthographic camera 34°", { "font-size": 20, "font-weight": 700, fill: "#52606d" }), e.appendChild(r);
}
function j0(e, r, n, t, P) {
  const M = d("g", { "data-scene-id": "branches:D", "data-parent-id": "world-xyz", "data-record-count": 0, "data-derived-guide": "true" }), D = d("g", { "data-scene-id": "branches:E", "data-parent-id": "world-xyz", "data-record-count": 0, "data-derived-guide": "true" });
  T.forEach((u, a) => {
    const C = h[u], o = n0.get(u);
    if (o === void 0) throw new Error(`No shared anchor for ${u}`);
    const l = Math.max(t, P), m = d("g", {
      "data-scene-id": `anchor:${u}`,
      "data-parent-id": "world-xyz",
      "data-cohort-class": u,
      "data-correspondence-level": "group-only",
      "data-record-count": 0,
      "data-derived-guide": "true",
      "data-anchor-emphasis": l
    });
    m.appendChild(d("circle", {
      cx: 900,
      cy: o,
      r: 13 + l * 12,
      fill: "#fff",
      stroke: C,
      "stroke-width": 5 + l * 4
    }));
    const R = n ? 1110 + a * 190 : 912, S = n ? 82 : o - 17;
    m.appendChild(d("rect", { x: R, y: S, width: 170, height: 34, rx: 17, fill: "#fff", "fill-opacity": 0.96, stroke: C, "stroke-width": 2 })), $(m, R + 85, S + 23, u, { fill: C, "font-size": 16, "font-weight": 700, "text-anchor": "middle" }), e.appendChild(m);
    const p = (I, Z, X) => {
      const H = M0(I, u, X).point, o0 = `M${H.x},${H.y} C${I === "D" ? H.x + 80 : H.x - 80},${H.y} ${I === "D" ? 850 : 950},${o} 900,${o}`;
      Z.appendChild(d("path", {
        d: o0,
        fill: "none",
        stroke: C,
        "stroke-width": 3.5 + X * 2,
        "stroke-linecap": "round",
        opacity: 0.84,
        "data-guide": `${I} ${u} group branch`,
        "data-group-transform-fraction": X
      })), Z.appendChild(d("circle", { cx: H.x, cy: H.y, r: 7, fill: "#fff", stroke: C, "stroke-width": 3 }));
    };
    r && p("D", M, t), n && p("E", D, P);
  }), r && e.appendChild(M), n && e.appendChild(D);
}
function K(e, r, n, t, P) {
  z0(e), n && z(e, "E", r, P), r && z(e, "D", n, t), j0(e, r, n, t, P);
}
function q0(e) {
  z(e, "E", !1, 0);
}
function C0(e, r) {
  if (!Number.isInteger(r) || r < 0 || r >= w.length) throw new Error(`Unknown clin07 D→E keyframe ${r}`);
  L0(e, r), r === 0 ? G(e, "D") : r === 1 ? K(e, !0, !1, 0.22, 0) : r === 2 ? K(e, !0, !0, 0.36, 0.36) : r === 3 ? K(e, !1, !0, 0, 0.18) : r === 4 ? q0(e) : G(e, "E");
}
const F = [0, 0.275, 0.475, 0.725, 0.8375, 1], x = Object.freeze({
  segmentIndex: 2,
  seconds: 0.6,
  localEnd: 0.3,
  progressStart: F[2],
  progressEnd: F[2] + (F[3] - F[2]) * 0.3
}), B = (e) => Array.from(e.children);
function W0(e, r) {
  return B(e).find((n) => n.getAttribute("data-scene-id") === `panel-plane:${r}`) ?? null;
}
function u0(e) {
  if (!e) return null;
  const r = /^matrix\(([^)]+)\)$/.exec(e.trim());
  if (!r) throw new Error(`clin07 carrier transform is not a matrix: ${e}`);
  const n = r[1].trim().split(/[ ,]+/).map(Number);
  if (n.length !== 6 || n.some((o) => !Number.isFinite(o)))
    throw new Error(`clin07 carrier matrix is invalid: ${e}`);
  const [t, P, M, D, u, a] = n, C = t * D - P * M;
  if (Math.abs(C) < 1e-12) throw new Error(`clin07 carrier matrix is singular: ${e}`);
  return `matrix(${D / C} ${-P / C} ${-M / C} ${t / C} ${(M * a - D * u) / C} ${(P * u - t * a) / C})`;
}
function Z0(e, r, n, t) {
  const P = B(n).find((a) => a.getAttribute("data-plane-surface") === t), M = P ?? B(e).find((a) => a.getAttribute("data-plane-surface") === t);
  if (!M) return;
  const D = document.createElementNS("http://www.w3.org/2000/svg", "g"), u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  if (!P) {
    const a = u0(r.getAttribute("transform"));
    a && u.setAttribute("transform", a);
  }
  D.setAttribute("data-transition-key", `plane-surface:${t}`), D.setAttribute("data-parent-id", `panel-plane:${t}`), D.setAttribute("data-parent-chain-motion", "carrier-surface"), u.setAttribute("data-transition-key", `plane-surface-compensation:${t}`), M.setAttribute("data-transition-key", `plane-surface-content:${t}`), u.appendChild(M), D.appendChild(u), n.insertBefore(D, n.firstChild);
}
function G0(e, r, n, t) {
  const P = t === "D" ? "panel D legends" : "panel E cohort legend", M = e.querySelector(`[data-guide="${P}"]`);
  if (!M) throw new Error(`clin07 ${t} keyframe has no legend guide`);
  const D = M.closest("svg");
  if (!D) throw new Error(`clin07 ${t} legend has no authored viewport`);
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = document.createElementNS("http://www.w3.org/2000/svg", "g");
  let C;
  if (D === n)
    C = document.createElementNS("http://www.w3.org/2000/svg", "svg"), ["x", "y", "width", "height", "viewBox", "preserveAspectRatio", "overflow"].forEach((o) => {
      const l = n.getAttribute(o);
      l !== null && C.setAttribute(o, l);
    }), C.appendChild(M);
  else {
    C = D;
    const o = u0(r.getAttribute("transform"));
    o && a.setAttribute("transform", o);
  }
  u.setAttribute("data-transition-key", `legend:${t}`), u.setAttribute("data-parent-id", `panel-plane:${t}`), u.setAttribute("data-parent-chain-motion", "carrier-guide"), a.setAttribute("data-transition-key", `legend-compensation:${t}`), C.setAttribute("data-transition-key", `legend-viewport:${t}`), M.setAttribute("data-transition-key", `legend-content:${t}`), a.appendChild(C), u.appendChild(a), r.appendChild(u);
}
function J0(e) {
  ["D", "E"].forEach((r) => {
    let n = W0(e, r);
    if (!n) return;
    if (n.tagName.toLowerCase() === "svg") {
      const M = n, D = document.createElementNS("http://www.w3.org/2000/svg", "g");
      e.insertBefore(D, M), D.appendChild(M), M.removeAttribute("data-scene-id"), D.setAttribute("data-scene-id", `panel-plane:${r}`), D.setAttribute("data-parent-id", "world-xyz"), D.setAttribute("data-structural-host", "world"), n = D;
    }
    n.setAttribute("data-transition-key", `carrier:${r}`);
    const t = B(n).find((M) => M.tagName.toLowerCase() === "svg");
    if (!t) throw new Error(`clin07 ${r} carrier has no Stage 8 viewport`);
    t.setAttribute("data-transition-key", `viewport:${r}`), t.setAttribute("overflow", "visible");
    const P = t.querySelector(`[data-panel="${r}"]`);
    if (!P) throw new Error(`clin07 ${r} Stage 8 viewport has no panel group`);
    P.setAttribute("data-transition-key", `panel:${r}`), P.querySelectorAll("[data-scope]").forEach((M) => {
      M.setAttribute("data-transition-key", `scope:${r}:${M.getAttribute("data-scope") ?? ""}`);
    }), Z0(e, n, t, r), G0(e, n, t, r);
  });
}
function U0(e) {
  const r = e.getAttribute("data-transition-key");
  if (r) return r;
  const n = e.getAttribute("data-scene-id");
  return n ? `scene:${n}` : null;
}
function V0(e) {
  var n;
  if ((n = e.identity) != null && n.includes("carrier:")) {
    e.work.setAttribute("data-parent-chain-motion", "carrier-root");
    return;
  }
  const r = e.work.getAttribute("data-group-transform-cohort") ?? e.source.getAttribute("data-group-transform-cohort") ?? e.target.getAttribute("data-group-transform-cohort");
  if (r) {
    const t = Number(e.source.getAttribute("data-group-transform-fraction") ?? 0), P = Number(e.target.getAttribute("data-group-transform-fraction") ?? 0), M = t + (P - t) * e.progress;
    e.work.setAttribute("data-group-transform", "cohort-center-to-shared-anchor"), e.work.setAttribute("data-group-transform-cohort", r), e.work.setAttribute("data-group-transform-fraction", Number(M.toFixed(4)).toString()), e.work.setAttribute("data-parent-chain-motion", "declared-cohort-group"), e.work.setAttribute("data-correspondence-level", "group-only");
  }
}
let J = null;
function Q0() {
  return J ?? (J = i0(C0, w.length, J0)), J;
}
function e1(e) {
  const r = U(Number.isFinite(e) ? e : 0), n = F[x.segmentIndex], t = F[x.segmentIndex + 1];
  if (r <= n || r >= t) return r;
  const P = (r - n) / (t - n);
  if (P <= x.localEnd) return n;
  const M = (P - x.localEnd) / (1 - x.localEnd);
  return n + M * (t - n);
}
function r1(e, r) {
  const n = U(Number.isFinite(r) ? r : 0), t = e1(n);
  c0(e, Q0(), F, t, {
    identity: U0,
    motion: V0,
    pairSemanticContainers: !0
  }), e.setAttribute("data-timeline-progress", n.toFixed(6)), e.setAttribute("data-mapped-progress", t.toFixed(6)), e.setAttribute("data-lcm-plateau", `${x.progressStart}-${x.progressEnd}`), e.setAttribute("data-transition-id", "scatter-d-to-scatter-e"), e.setAttribute("data-correspondence", "cohort_class-group-only"), e.setAttribute("data-record-morph", "none-across-source-systems");
}
const a1 = s0(
  R0,
  {
    frame: Object.freeze({ width: O, height: L }),
    keyframes: w,
    renderKeyframe: C0,
    renderAnimation: r1
  }
);
export {
  L as KEYFRAME_HEIGHT,
  F as KEYFRAME_PROGRESS,
  O as KEYFRAME_WIDTH,
  x as LCM_PLATEAU,
  w as keyframeMetadata,
  e1 as mapTimelineProgress,
  r1 as renderAnimation,
  C0 as renderKeyframe,
  a1 as scatterDToScatterETransitionSpace
};
