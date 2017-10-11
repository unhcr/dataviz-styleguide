// This script is to be loaded at the end of the <body>
// inside the inner page that will be embedded
// within another page using an iframe.
//
// This script will communicate the required height to the parent page,
// so it can set the height of the iframe accordingly,
// such that all the content is visible.
// See https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
(function (){

  // This variable stores the last known height.
  var height = 0;

  // If we are inside an iframe...
  if (window.parent) {

    // Check twice a second for resizes.
    setInterval(function () {

      // If the height changed,
      if (height !== window.innerHeight) {

        // store the new height for future comparisons,
        height = window.innerHeight;

        // pass a message with the height to the parent window.
        window.parent.postMessage(height, "*");
      }
    }, 500);
  }
}());
