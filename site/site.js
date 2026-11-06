// Drey Browser 소개 페이지의 단계 설명. 외부 요청 없음. 스크립트가 없어도 그림과 단계 목록은 그대로 읽힌다.
// 각 .tour: 그림 위 강조 상자를 단계(<li data-box="x,y,w,h"> — 그림 대비 %)마다 옮긴다. 재생/일시정지·이전/다음·단계 클릭·←/→ 키.
// 움직임 줄이기(prefers-reduced-motion)면 자동 재생하지 않고 옮김 효과도 끈다(CSS).
(() => {
  document.documentElement.classList.remove('nojs');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const L = document.documentElement.lang === 'ko'
    ? { play: '재생', pause: '일시정지', prev: '이전', next: '다음', step: (i, n) => `${n}단계 중 ${i}단계` }
    : { play: 'Play', pause: 'Pause', prev: 'Previous', next: 'Next', step: (i, n) => `Step ${i} of ${n}` };
  for (const tour of document.querySelectorAll('.tour')) {
    const box = tour.querySelector('.box');
    const items = [...tour.querySelectorAll('.steps li')];
    const status = tour.querySelector('.status');
    const [prev, play, next] = tour.querySelectorAll('.controls button');
    let i = 0, timer = null;
    const show = (k, focus) => {
      i = (k + items.length) % items.length;
      items.forEach((li, j) => { li.classList.toggle('on', j === i); li.setAttribute('aria-current', j === i ? 'step' : 'false'); });
      const [x, y, w, h] = items[i].dataset.box.split(',').map(Number);
      Object.assign(box.style, { left: x + '%', top: y + '%', width: w + '%', height: h + '%' });
      box.hidden = false;
      status.textContent = L.step(i + 1, items.length);
      if (focus) items[i].focus();
    };
    const stop = () => { clearInterval(timer); timer = null; play.textContent = L.play; play.setAttribute('aria-pressed', 'false'); };
    const start = () => { stop(); timer = setInterval(() => show(i + 1), 3800); play.textContent = L.pause; play.setAttribute('aria-pressed', 'true'); };
    prev.textContent = L.prev; next.textContent = L.next;
    prev.addEventListener('click', () => { stop(); show(i - 1); });
    next.addEventListener('click', () => { stop(); show(i + 1); });
    play.addEventListener('click', () => (timer ? stop() : start()));
    items.forEach((li, j) => {
      li.tabIndex = 0;
      li.addEventListener('click', () => { stop(); show(j); });
      li.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); stop(); show(i + 1, true); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); stop(); show(i - 1, true); }
      });
    });
    show(0);
    if (!reduce.matches) start(); else stop();
    // 화면 밖이면 멈춤 (불필요한 움직임·연산 없음)
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => { if (!e.isIntersecting) stop(); }).observe(tour);
    }
  }
})();
