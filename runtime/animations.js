const t = {
  "urb301-fig7": async () => (await import("./index-BUP6H8HE.js")).sharedFieldCrimeTransitionSpace,
  "net07-fig1": async () => (await import("./index-DTlF3Aj8.js")).popularityHistogramToBubbleScatterTransitionSpace,
  "net203-fig3": async () => (await import("./index-Cx9ysx_x.js")).histogramAToNetworkATransitionSpace,
  "schmitt2022-fig1": async () => (await import("./index-BQ98jl5d.js")).mapToBar15TransitionSpace,
  "ecol07-fig5": async () => {
    const a = await import("./index-BzwNvjb_.js");
    return { ...a.scatterToTotalHistogramTransitionSpace, renderHost: a.renderCanvasAnimation };
  },
  "lin2025-fig1": async () => (await import("./index-BQpL-7IF.js")).mapAToTreeBTransitionSpace,
  "zemp2025-fig1": async () => (await import("./index-BeBcuh6h.js")).pieCentralEuropeToHeatmapCentralEuropeTransitionSpace,
  "clin06-fig1": async () => (await import("./index-Cy8MGuCI.js")).barToStackedTransitionSpace,
  "clin07-fig2": async () => (await import("./index-DY9bmBlz.js")).scatterDToScatterETransitionSpace,
  "ener02-fig3": async () => (await import("./index-D2NO6aE7.js")).barCToBarDTransitionSpace,
  "gap03-fig5": async () => (await import("./index-Cb5XjxAm.js")).barAToTreemapBTransitionSpace,
  "gap01-fig5": async () => (await import("./index-Dr_0FZ_B.js")).heatmapGaToAnnualBarGaTransitionSpace,
  "schmid2023-fig1": async () => (await import("./index-6NiV_2MI.js")).mapAToScatterBTransitionSpace,
  "gen06-fig3": async () => (await import("./index-Bdj90nZx.js")).chronologyAToAncestryBarsBTransitionSpace,
  "gephart2024-fig1": async () => (await import("./index-CWcHXNCU.js")).stackedAreaAToLineBTransitionSpace,
  "soc05-fig1": async () => (await import("./index-BdmP2qiV.js")).heatmapAToScatterATransitionSpace
};
async function r(a) {
  if (!t[a]) throw new Error(`No animation registered for ${a}`);
  return t[a]();
}
export {
  r as loadAnimation
};
