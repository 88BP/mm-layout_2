$(function () {

console.log ("hey girl heyyyyyyyy it's your javascript file here to make shit interesting");

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});



// MENU TRIGGERS //

new ScrollMagic.Scene({triggerElement: "#sec1", duration: 1000})
					.setClassToggle("#high1", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec2", duration: 1000})
					.setClassToggle("#high2", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec3", duration: 1000})
					.setClassToggle("#high3", "active") // add class toggl
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec4", duration: 1000})
					.setClassToggle("#high4", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec5", duration: 1000})
					.setClassToggle("#high5", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);


// SVG DRAWING 

function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $word = $("path#word");
	var $dot = $("path#dot");
	var $verbatim = $("path#verbatim")

	// prepare SVG
	pathPrepare($word);
	pathPrepare($dot);
	pathPrepare($verbatim);


	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
		// .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

	var quote = new TimelineMax()
		.add(TweenMax.to($verbatim, 0.5, {strokeDashoffset: 0, ease: Linear.easeNone}))

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#sec4", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	var quoteBox = new ScrollMagic.Scene({triggerElement: "#sec5", duration: 300, tweenChanges: true})
					.setTween(quote)
					.addIndicators()
					.addTo(controller)

	var quotePin = new ScrollMagic.Scene({triggerElement: "#vBox1", duration: 500})
					.setPin("#vBox1")
					.addIndicators({name: "verbatim pin"})
					.addTo(controller)


});


