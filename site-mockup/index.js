
const testScroll = $('.test-scroll');
const cloudDiv = $('.cloud-div');

$(window).scroll(function(e) {
  if (window.scrollY > 750) {
    // testScroll.addClass('test-scroll-move');
    cloudDiv.addClass('cloud-float');
  } else {
    // testScroll.removeClass('test-scroll-move');
    cloudDiv.removeClass('cloud-float');
  }
})

// testing jQuery scrollTo()
$(window).scrollTo($('.test-bottom-page-scroll-point'), 1500, {
  interrupt: true,
  offset: -100
  // margin: true
});


  ///////////////////////////////////
 //    TESTING SCROLL MAGIC       //
///////////////////////////////////



		var controller = new ScrollMagic.Controller();

		// show pin state
		function updateBox (e) {
			if (e.type == "enter") {
				$("#pin p").text("Pinned.");
			} else {
				$("#pin p").text("Unpinned.");
			}
		}

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150, offset: 300})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#trigger", duration: 150, offset: 600})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
