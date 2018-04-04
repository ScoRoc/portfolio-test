
$(window).scroll(function(){
   let sunDown = $('.sun-move-down');
	 sunDown.top = (window.pageYOffset / 4) + 'px';
	 // sunDown.css('background', 'green');
}).scroll();

function parallax() {
	let blueBlock = $('.sun-move-down');
  let xBlock = $('.x-block-scroll');
	$('#scroll-p').text('y scroll: ' + window.pageYOffset)
	blueBlock.css('transform', 'translate(0, ' + (window.pageYOffset - 463) * 1.5 + 'px)');
  xBlock.css('transform', `translate(${ (window.pageYOffset - 463) * 1.2 }px, ${(window.pageYOffset - 463) / 1.05}px)`);
}

window.addEventListener('scroll', parallax, false);

// init controller
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
new ScrollMagic.Scene({triggerElement: "#trigger", duration: 100})
	.setPin("#pin")
	.setClassToggle("#pin", "green")
	.on("enter leave", updateBox)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 150})
	// .setPin("#pin")
	.setClassToggle("#pin", "sun-move-down")
  // .setClassToggle('#x-block', 'x-block-scroll')
	.on("enter leave", updateBox)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 150})
  	// .setPin("#pin")
  	// .setClassToggle("#pin", "sun-move-down")
    .setClassToggle('#x-block', 'x-block-scroll')
  	.on("enter leave", updateBox)
  	.addIndicators() // add indicators (requires plugin)
  	.addTo(controller);
