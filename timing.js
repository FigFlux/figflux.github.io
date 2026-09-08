export function progressToSeconds(progress, positions, durations) {
  let elapsed = 0;
  for (let i = 0; i < durations.length; i++) {
    if (progress <= positions[i + 1]) {
      return elapsed + durations[i] * Math.max(0, (progress - positions[i]) / (positions[i + 1] - positions[i]));
    }
    elapsed += durations[i];
  }
  return elapsed;
}

export function secondsToProgress(seconds, positions, durations) {
  let elapsed = 0;
  for (let i = 0; i < durations.length; i++) {
    if (seconds <= elapsed + durations[i]) {
      return positions[i] + Math.max(0, (seconds - elapsed) / durations[i]) * (positions[i + 1] - positions[i]);
    }
    elapsed += durations[i];
  }
  return positions[positions.length - 1];
}
// Gallery nodes may omit internal motion stages without changing renderer timing.
export function selectGalleryKeyframes(frames, indices = frames.map(frame => frame.index)) {
  const selected = indices.map(index => frames.find(frame => frame.index === index));
  if (selected.length < 2 || selected.some(frame => !frame)
    || selected[0] !== frames[0] || selected.at(-1) !== frames.at(-1)
    || selected.some((frame, i) => i > 0 && frame.progress <= selected[i - 1].progress)) {
    throw new Error('Gallery keyframes must be ordered, unique, and include both endpoints');
  }
  return selected;
}
