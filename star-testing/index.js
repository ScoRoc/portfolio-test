// $('.js-tilt').tilt({
//   scale: 1.2,
//   speed: 1500,
//   perspective: 600
// });
//
// const tilt = $('.js-tilt').tilt();
// tilt.on('change', callback);  // parameters: event, transforms
// tilt.on('tilt.mouseLeave', function() {
//   $('.inner-test').css('transform', 'scale(1)');
// }); // parameters: event
// tilt.on('tilt.mouseEnter', function() {
//   $('.inner-test').css('transform', 'translateZ(30px) scale(1.2)');
// }); // parameters: event


// ~~~~~~~~~~~
// STARS BELOW
// ~~~~~~~~~~~

// var makeStars = function(n) {
//   let value = `${Math.floor(Math.random() * 401)}vw ${Math.floor(Math.random() * 401)}vh #fbfbdd`;
//   for (let i = 0; i < n; i++) {
//     value = `${value}, ${Math.floor(Math.random() * 401)}vw ${Math.floor(Math.random() * 401)}vh #fbfbdd`;
//   }
//   return value;
// }


// $('#stars').css('box-shadow', makeStars(2000))
// $('#stars2').css('box-shadow', makeStars(500))
// $('#stars2b').css('box-shadow', makeStars(500))
// $('#stars3').css('box-shadow', makeStars(250))
// $('#stars3b').css('box-shadow', makeStars(250))

var makeStars = function(n) {
  let value = `${Math.floor(Math.random() * 401)}vw ${Math.floor(Math.random() * 401)}vh #f9d9d3`;
  for (let i = 0; i < n; i++) {
    value = `${value}, ${Math.floor(Math.random() * 401)}vw ${Math.floor(Math.random() * 401)}vh #f9d9d3`;
  }
  return value;
}

var makeStars2 = function(n) {
  let value = `${Math.floor(Math.random() * 401)}vw ${Math.floor(Math.random() * 401)}vh #f9f0cc`;
  for (let i = 0; i < n; i++) {
    value = `${value}, ${Math.floor(Math.random() * 401)}vw ${Math.floor(Math.random() * 401)}vh #f9f0cc`;
  }
  return value;
}

var makeStars3 = function(n) {
  let value = `${Math.floor(Math.random() * 401)}vw ${Math.floor(Math.random() * 401)}vh #d0f0fc`;
  for (let i = 0; i < n; i++) {
    value = `${value}, ${Math.floor(Math.random() * 401)}vw ${Math.floor(Math.random() * 401)}vh #d0f0fc`;
  }
  return value;
}

$('#stars').css('box-shadow', makeStars(2000))
$('#stars2').css('box-shadow', makeStars2(500))
$('#stars2b').css('box-shadow', makeStars2(500))
$('#stars3').css('box-shadow', makeStars3(250))
$('#stars3b').css('box-shadow', makeStars3(250))


























//
