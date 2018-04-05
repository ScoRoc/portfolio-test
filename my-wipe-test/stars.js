var makeStars1 = function(n) {
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

$('#star1').css('box-shadow', makeStars1(2000))
$('#star2').css('box-shadow', makeStars2(500))
$('#star2b').css('box-shadow', makeStars2(500))
$('#star3').css('box-shadow', makeStars3(250))
$('#star3b').css('box-shadow', makeStars3(250))
