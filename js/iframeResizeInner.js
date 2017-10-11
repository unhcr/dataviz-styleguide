// This script is to be loaded at the end of the <body>
// inside the page that will be embedded within another page
// using an iframe.
// This script will communicate the required height to the parent page,
// so it can set the height of the iframe accordingly,
// such that all the content is visible.
(function (){
  var height = 0;
  var targetOrigin = "*"; // See https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

  // If we are inside an iframe...
  if (window.parent) {

    // Check twice a second for resizes.
    setInterval(function () {
      if (height !== window.innerWidth) {
        height = window.innerWidth;
        window.parent.postMessage(height, targetOrigin);
      }
    }, 500);
  }
}());
