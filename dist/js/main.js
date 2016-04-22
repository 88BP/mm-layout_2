$(function () {


// VERSION 2
	// TweenMax.set(".st1", {opacity: 0})
	// TweenMax.set("#logoLockup", {opacity: 0})
	
TweenMax.set(".st1", {scaleY: 0})
TweenMax.set("#logoLockup", {scaleY: 0})


	console.log ("hey girl heyyyyyyyy it's your javascript file here to make shit interesting");

	$('body').show();

// VERSION 1

TweenMax.set(".st1", {scaleY: 0})
TweenMax.set("#logoLockup", {scaleY: 0})






var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});


var bgTween1 = TweenMax.to('#homeOverlay', .5, {opacity:1, backgroundColor:'#2d9598', ease: Linear.easeNone});  

	new ScrollMagic.Scene({triggerElement: "#logoLockup", duration: 500})
					.setTween(bgTween1)
					.addIndicators({name: "bgTrigger1"})
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#datacontainer"})
					.setPin("#menuContents")
					.addIndicators({name: "menuuuuuu"})
					.addTo(controller);
	// new ScrollMagic.Scene({triggerElement: "#logoLockup", duration: 300})
	// 				.setPin("#exactlySvg")
	// 				.addIndicators({name: "logoPin"})
	// 				.addTo(controller);



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

	// var $word = $("path#word");
	// var $dot = $("path#dot");
	var $verbatim = $("path#verbatim");

	var $title1 = $("#nothingTitle1")
	var $title2 = $("#nothingTitle2")
	var $title3 = $("#nothingTitle3")
	var $title4 = $("#nothingTitle4")
	var $title5 = $("#nothingTitle5")
	var $title6 = $("#nothingTitle6")
	var $title7 = $("#nothingTitle7")
	var $title8 = $("#nothingTitle8")
	var $title9 = $("#nothingTitle9")
	var $title10 = $("#nothingTitle10")
	var $title11 = $("#nothingTitle11")
	var $title12 = $("#nothingTitle12")
	var $title13 = $("#nothingTitle13")
	var $title14 = $("#nothingTitle14")
	var $title15 = $("#nothingTitle15")
	var $title16 = $("#nothingTitle16")
	var $title17 = $("#nothingTitle17")
	var $title18 = $("#nothingTitle18")
	var $title19 = $("#nothingTitle19")
	var $title20 = $("#nothingTitle20")


	// prepare SVG
	// pathPrepare($word);
	// pathPrepare($dot);
	pathPrepare($verbatim);
	pathPrepare($title1);
	pathPrepare($title2);
	pathPrepare($title3);
	pathPrepare($title4);
	pathPrepare($title5);
	pathPrepare($title6);
	pathPrepare($title7);
	pathPrepare($title8);
	pathPrepare($title9);
	pathPrepare($title10);
	pathPrepare($title11);
	pathPrepare($title12);
	pathPrepare($title13);
	pathPrepare($title14);
	pathPrepare($title15);
	pathPrepare($title16);
	pathPrepare($title17);
	pathPrepare($title18);
	pathPrepare($title19);
	pathPrepare($title20);



	new TimelineMax()
		.add(TweenMax.to($title1, 1, {strokeDashoffset: 0, delay:0.2,ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title2, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title3, 1.5, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone}))
		new TimelineMax() 
		.add(TweenMax.to($title4, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone}))
		new TimelineMax() 
		.add(TweenMax.to($title5, 2, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title6, 1.5, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title7, .5, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title8, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title9, 1, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title10, 1.5, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title11, 2, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title12, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone}))
		new TimelineMax() 
		.add(TweenMax.to($title13, 1.8, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title14, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title15, 2, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title16, 1.1, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title17, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title18, 1.3, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 
		new TimelineMax()
		.add(TweenMax.to($title19, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})) 

		// VERSION 1
		new TimelineMax()
		.add(TweenMax.to($title20, 2.0, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to(".nothing", .3, {scaleY:0, delay:0.3, ease: Power3.easeOut})) 
		.add(TweenMax.to(".st1", .5, {scaleY:1, ease:Power3.easeOut})) 
		new TimelineMax()
		.add(TweenMax.to ("#homeOverlay", .5, {opacity: 0, delay:2.6}))
		new TimelineMax()
		.add(TweenMax.to("#logoLockup", .5, {scaleY:1, ease:Power3.easeOut, delay: 2.6}))

		// VERSION 2

		// new TimelineMax()
		// .add(TweenMax.to($title20, 2.0, {strokeDashoffset: 0, ease:Linear.easeNone}))
		// .add(TweenMax.to(".nothing", .3, {opacity:0, delay:0.5, ease: Power3.easeOut})) 
		// new TimelineMax()
		// .add(TweenMax.to(".st1", 3, {opacity:1, delay: 2.5, ease:Power3.easeOut})) 
		// new TimelineMax()
		// .add(TweenMax.to ("#homeOverlay", 3, {opacity: 0, delay:2.5}))
		// new TimelineMax()
		// .add(TweenMax.to("#logoLockup", 3, {opacity:1, ease:Power3.easeOut, delay: 2.5}))
		// new TimelineMax()
		// .add(TweenMax.to(".scrolldown-btn", 1, {opacity: 1, delay: 4}))




	// build tween
	// var tween = new TimelineMax()
	// 	.add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	// 	.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
	// 	// .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

	var quote = new TimelineMax()
		.add(TweenMax.to($verbatim, 0.5, {strokeDashoffset: 0, ease: Linear.easeNone}))

	// // build scene
	// var scene = new ScrollMagic.Scene({triggerElement: "#sec4", duration: 300, tweenChanges: true})
	// 				.setTween(tween)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller)

	var quoteBox = new ScrollMagic.Scene({triggerElement: "#datacontainer", duration: 300, tweenChanges: true})
					.setTween(quote)
					.addIndicators()
					.addTo(controller)

	var quotePin = new ScrollMagic.Scene({triggerElement: "#vBox1", duration: 500})
					.setPin("#vBox1")
					.addIndicators({name: "verbatim pin"})
					.addTo(controller)


});


