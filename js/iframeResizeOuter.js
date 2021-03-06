// This script is to be loaded at the end of the <body>
// inside the outer page, which embeds
// another page using an iframe.
//
// This script will receive the communicated height from the embedded page,
// and set the height of the iframe accordingly,
// such that all the content in the embedded page is visible.
(function (){

  // Get a reference to the iframe.
  // This code assumes there is only a single iframe on the page.
  var iframe = document.querySelector("iframe");

  // Sets the corrected height of the iframe.
  function resizeIframe (height){

    // Compute the correction for the iframe border.
    var border = parseFloat(getComputedStyle(iframe).borderWidth);
    var borderCorrection = isNaN(border) ? 0 : border * 2;
    height = height + borderCorrection;

    // Set the iframe height to the height from the message.
    iframe.setAttribute("height", height);
  }

  // If an iframe is there...
  if (iframe) {

    // Listen for messages from the inner iframe.
    // See https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
    window.addEventListener("message", function (event) {
      if (event.data.type === 'iFrameResizeHeight') {
        resizeIframe(event.data.height);
      }
    }, false);
  }
}());
