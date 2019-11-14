const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");
const coverDate = document.querySelector(".cover-date");

// activate pointer-events when nav is open

//  GSAP animating
// (the ting you are animating, the time, diffrent properties {colors, positon etc})
// const tween = TweenLite.to(".cover", 2, {
// 	width: "60%"
// });

const tweenTimelineL = new TimelineLite({ paused: true, reversed: true }); //accept objects

tweenTimelineL
	.to(".cover", 1, {
		width: "60%",
		ease: Power2.easeOut
	})
	// sequense the next
	.to(
		"nav",
		1,
		{
			height: "100%",
			ease: Power2.easeOut
		},
		"-= 0.5"
	)
	.fromTo(
		".nav-open",
		0.5,
		{
			opacity: 0,
			x: 50,
			ease: Power2.easeOut
		},
		{
			opacity: 1,
			x: 0,
			onComplete: function () {
				navOpen.style.pointerEvents = "auto";
				coverDate.style.left = "90%";
				console.log("done");
			}
		}
	);

navButton.addEventListener("click", (e) => {
	if (tweenTimelineL.isActive()) {
		e.preventDefault();
		e.stopImmediatePropagation();
		return false;
	}
	toogleTween(tweenTimelineL);
});
// todo: fix so that animation goes in as well
// toogle
function toogleTween (tween) {
	tween.reversed() ? tween.play() : tween.reversed();
}
