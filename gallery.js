import { progressToSeconds, secondsToProgress } from './timing.js';

const players = [];
let active = null;
let activation = 0;
const clamp = value => Math.max(0, Math.min(1, value));

for (const card of document.querySelectorAll('.case')) {
  const stage = card.querySelector('.animation-stage');
  const poster = stage.querySelector('img');
  const play = card.querySelector('.play');
  const replay = card.querySelector('.replay');
  const slider = card.querySelector('input[type="range"]');
  const time = card.querySelector('output');
  const error = card.querySelector('.animation-error');
  const keyframes = [...card.querySelectorAll('.keyframe')];
  const segments = [...card.querySelectorAll('.segment-play')];
  const track = card.querySelector('.keyframes');
  const duration = Number(card.dataset.duration);
  const durations = JSON.parse(card.dataset.segmentDurations);
  const positions = JSON.parse(card.dataset.timingPositions);
  const visiblePositions = keyframes.map(button => Number(button.dataset.progress));
  const displaySpans = keyframes.slice(0, -1).map((button, index) => Number(keyframes[index + 1].dataset.displayProgress) - Number(button.dataset.displayProgress));
  const player = { card, progress: 0, playing: false, frame: 0, svg: null, host: null, renderer: null };
  players.push(player);

  function fitHost() {
    if (!player.host) return;
    const { width, height } = player.renderer.frame;
    const scale = Math.min(stage.clientWidth / width, stage.clientHeight / height);
    player.host.style.transform = `translate(${(stage.clientWidth - width * scale) / 2}px, ${(stage.clientHeight - height * scale) / 2}px) scale(${scale})`;
  }
  new ResizeObserver(fitHost).observe(stage);

  function update() {
    const displayProgress = progressToSeconds(player.progress, visiblePositions, displaySpans);
    slider.value = displayProgress;
    track.style.setProperty('--progress', `${displayProgress * 100}%`);
    const elapsed = progressToSeconds(player.progress, positions, durations);
    slider.setAttribute('aria-valuetext', `${elapsed.toFixed(1)} of ${duration.toFixed(1)} seconds`);
    time.value = `${elapsed.toFixed(1)}s / ${duration.toFixed(1)}s`;
    play.textContent = player.playing ? 'Ⅱ Pause' : '▶ Play';
    play.setAttribute('aria-label', `${player.playing ? 'Pause' : 'Play'} ${card.querySelector('h2').textContent}`);
    card.dataset.playing = String(player.playing);
    for (const button of keyframes) {
      button.setAttribute('aria-pressed', String(Boolean(player.svg) && Math.abs(Number(button.dataset.progress) - player.progress) < 1e-6));
    }
    for (const button of segments) {
      const playing = player.playing && player.progress >= Number(button.dataset.start) && player.progress < Number(button.dataset.end);
      button.textContent = playing ? 'Ⅱ' : '▶';
      button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${button.dataset.label}`);
      button.classList.toggle('is-playing', playing);
    }
  }

  player.pause = () => {
    player.playing = false;
    cancelAnimationFrame(player.frame);
    update();
  };
  player.release = () => {
    player.pause();
    player.svg?.remove();
    player.host?.remove();
    player.svg = null;
    player.host = null;
    player.renderer = null;
    poster.hidden = false;
    update();
  };
  function render() {
    // Dense cases use the same combined Canvas/SVG renderer as the prototype.
    if (player.host) {
      player.renderer.renderHost(player.host, player.progress);
      player.svg = player.host.querySelector('svg');
      fitHost();
      return;
    }
    const keyframe = keyframes.find(button => Math.abs(Number(button.dataset.progress) - player.progress) < 1e-6);
    if (keyframe) player.renderer.renderKeyframe(player.svg, Number(keyframe.dataset.index));
    else player.renderer.renderAnimation(player.svg, player.progress);
  }
  function fail(reason) {
    console.error('Gallery animation failed', card.id, reason);
    player.release();
    error.hidden = false;
  }
  async function activate() {
    if (active === player && player.svg) return true;
    const ticket = ++activation;
    active?.release();
    active = player;
    stage.setAttribute('aria-busy', 'true');
    play.textContent = 'Loading…';
    error.hidden = true;
    try {
      const { loadAnimation } = await import('./runtime/animations.js');
      const renderer = await loadAnimation(card.id);
      if (ticket !== activation) return false;
      player.renderer = renderer;
      if (renderer.renderHost) {
        player.host = document.createElement('div');
        player.host.className = 'animation-host';
        stage.appendChild(player.host);
      } else {
        player.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        player.svg.setAttribute('role', 'img');
        player.svg.setAttribute('aria-label', `${card.querySelector('h2').textContent} animated transition`);
        stage.appendChild(player.svg);
      }
      render();
      poster.hidden = true;
      return true;
    } catch (reason) {
      if (ticket === activation) fail(reason);
      return false;
    } finally {
      stage.setAttribute('aria-busy', 'false');
      update();
    }
  }
  async function start(boundary = 1) {
    if (!await activate()) return;
    if (document.hidden) return;
    if (player.progress >= boundary) player.progress = 0;
    player.pause();
    player.playing = true;
    const started = performance.now() - progressToSeconds(player.progress, positions, durations) * 1000;
    function tick(now) {
      if (!player.playing) return;
      player.progress = Math.min(boundary, secondsToProgress((now - started) / 1000, positions, durations));
      try { render(); } catch (reason) { fail(reason); return; }
      if (player.progress >= boundary) player.pause();
      else player.frame = requestAnimationFrame(tick);
      update();
    }
    player.frame = requestAnimationFrame(tick);
    update();
  }
  play.addEventListener('click', () => {
    if (player.playing) player.pause();
    else void start();
  });
  replay.addEventListener('click', () => {
    player.pause();
    player.progress = 0;
    void start();
  });
  async function seek(progress) {
    player.progress = clamp(progress);
    player.pause();
    if (await activate()) {
      try { render(); update(); } catch (reason) { fail(reason); }
    }
  }
  slider.addEventListener('input', () => void seek(secondsToProgress(Number(slider.value), visiblePositions, displaySpans)));
  for (const button of keyframes) button.addEventListener('click', () => void seek(Number(button.dataset.progress)));
  for (const button of segments) button.addEventListener('click', () => {
    const from = Number(button.dataset.start);
    const to = Number(button.dataset.end);
    if (player.playing && player.progress >= from && player.progress < to) {
      player.pause();
      return;
    }
    player.pause();
    player.progress = from;
    void start(to);
  });
  update();
}

// One mounted scene at a time; offscreen and background scenes stop their clocks.
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting && active?.card === entry.target) {
      ++activation;
      active.release();
      active = null;
    }
  }
});
for (const player of players) observer.observe(player.card);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    ++activation;
    active?.release();
    active = null;
  }
});
