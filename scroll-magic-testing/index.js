

		var controller = new ScrollMagic.Controller({container: 'body'});

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
				$("#pin p").text("Pinned.");
				console.log($(window).scrollTop())
			} else {
				$("#pin p").text("Unpinned.");
				console.log($(window).scrollTop());
			}
		}

function farp (e) {
		$(window).scroll(function(){
		 $('.pin-test').css('transform', `translate(0, ${ $(window).scrollTop() *1 }px)`);
	 }).scroll();
	 console.log($(this));
};

		// build scenes
	var blarp =	new ScrollMagic.Scene({
      triggerElement: "#trigger",
       duration: 150,
			 offset: 100,
       triggerHook: .5
    })
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", farp)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

var start = blarp.scrollOffset();
var end = blarp.scrollOffset() + blarp.duration();
console.log("the scene starts at", start, "and ends at", end);


// blarp.on("enter", function (event) {
// 	$(window).scroll(function(){
// 	 $('.pin-test').css('transform', `translate(0, ${$(this).scrollTop()*-2}px)`);
//  }).scroll();
// });

// blarp.on('leave', function(event) {
// 	clearInterval(interv);
// });






		new ScrollMagic.Scene({
      triggerElement: "#trigger",
       duration: 150,
        offset: 400,
        triggerHook: .5
     })
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		new ScrollMagic.Scene({
      triggerElement: "#trigger",
       duration: 150,
        offset: 700,
        triggerHook: .5
     })
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
