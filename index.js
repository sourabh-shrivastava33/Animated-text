"use strict";
const circle = document.getElementById("circle");
const frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

frames.forEach((frame) => {
	frame.addEventListener("mousemove", function (e) {
		console.log(e.clientX);
		const dims = frame.getBoundingClientRect();
		const xStart = dims.x;
		const xEnd = dims.x + dims.width;
		const zeroOne = gsap.utils.mapRange(xStart, xEnd, 0, 1, e.clientX);

		gsap.to(circle, {
			scale: 8,
			duration: 0.3,
			ease: Expo,
		});

		gsap.to(frame.children, {
			color: "#fff",
			y: "-5vw",
			duration: 0.3,
			ease: Expo,
		});

		gsap.to(frame.children, {
			x: lerp(-50, 50, zeroOne),
			duration: 0.3,
		});
	});

	frame.addEventListener("mouseleave", function () {
		gsap.to(circle, {
			scale: 1,
			duration: 0.3,
			ease: Expo,
		});
		gsap.to(frame.children, {
			color: "#000",
			y: "0",
			duration: 0.3,
			ease: Expo,
		});
		gsap.to(frame.children, {
			x: 0,
			duration: 0.3,
		});
	});
});

window.addEventListener("mousemove", function (e) {
	gsap.to(circle, {
		x: e.clientX,
		y: e.clientY,
		duration: 0.4,
		ease: Expo,
	});
});
