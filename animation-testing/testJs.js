
CustomEase.create("hop", "M0,0 C0.196,0.222 0.046,0.912 0.286,1.08 0.49,1.106 0.43,0.841 0.598,0.918 0.615,0.925 0.718,0.971 0.754,0.98 0.803,0.992 0.909,1 1,1")

document.querySelector('.logo').addEventListener('mouseleave', function() {
  TweenLite.from(".logo", 3, {left:"542px",
  ease:"hop", borderRadius:"0", delay:"0",
                       backgroundColor:"black"});
});
