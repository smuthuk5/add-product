// Mobile nav
(function () {
	const navToggle = document.getElementById('navToggle');
	const siteNav = document.getElementById('siteNav');
	if (navToggle && siteNav) {
		navToggle.addEventListener('click', function () {
			siteNav.classList.toggle('open');
		});
	}
})();

// Image loader that tries multiple extensions
(function () {
	function tryLoad(img, basePath) {
		const exts = ['.png', '.jpg', '.jpeg', '.webp'];
		let idx = 0;
		function setSrc() {
			if (idx >= exts.length) return;
			const src = basePath + exts[idx++];
			const test = new Image();
			test.onload = function () { img.src = src; };
			test.onerror = setSrc;
			test.src = src;
		}
		setSrc();
	}
	const imgs = document.querySelectorAll('img[data-img-base]');
	imgs.forEach(function (img) {
		const base = img.getAttribute('data-img-base');
		if (!base) return;
		tryLoad(img, base);
	});
})();

// Footer year
(function () {
	const y = document.getElementById('year');
	if (y) y.textContent = String(new Date().getFullYear());
})();

// Simple contact form validation (client only)
(function () {
	const form = document.getElementById('contactForm');
	if (!form) return;
	form.addEventListener('submit', function (e) {
		const formEl = e.target;
		const name = formEl.querySelector('input[name="name"]');
		const email = formEl.querySelector('input[name="email"]');
		const message = formEl.querySelector('textarea[name="message"]');
		if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
			e.preventDefault();
			alert('Please fill in Name, Email, and Message.');
		} else {
			e.preventDefault();
			alert('Thanks! Your message has been recorded. We will contact you shortly.');
			formEl.reset();
		}
	});
})();

// Home carousel auto-scroll
(function () {
	const carousel = document.getElementById('homeCarousel');
	if (!carousel) return;
	const track = carousel.querySelector('.carousel-track');
	const items = Array.from(track.children);
	const prevBtn = document.getElementById('carouselPrev');
	const nextBtn = document.getElementById('carouselNext');
	let index = 0;
	let timerId = null;

	function update() {
		const itemWidth = items[0].getBoundingClientRect().width + 16; // width + gap
		track.style.transform = `translateX(${-index * itemWidth}px)`;
	}

	function next() {
		index = (index + 1) % items.length;
		update();
	}
	function prev() {
		index = (index - 1 + items.length) % items.length;
		update();
	}
	function start() {
		stop();
		timerId = setInterval(next, 3000);
	}
	function stop() {
		if (timerId) clearInterval(timerId);
		timerId = null;
	}

	window.addEventListener('resize', update);
	update();
	start(); // auto-scroll

	if (nextBtn) {
		nextBtn.addEventListener('click', function () {
			next();
			start();
		});
	}
	if (prevBtn) {
		prevBtn.addEventListener('click', function () {
			prev();
			start();
		});
	}
})();


