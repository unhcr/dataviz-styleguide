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

  // Gets the current height of the stuff on the page.
  function getHeight() {

    // Inspired by https://github.com/davidjbradshaw/iframe-resizer/blob/master/src/iframeResizer.contentWindow.js#L777
    var offsetHeight = document.body.offsetHeight;
    var style = getComputedStyle(document.body);
    var marginTop = parseInt(style.marginTop);
    var marginBottom = parseInt(style.marginBottom);
    var height = offsetHeight + marginTop + marginBottom;

    console.log('height: ' + height);
    console.log('document.height: ' + document.documentElement.scrollHeight);
    console.log('scrollHeight: ' + document.body.scrollHeight);
    console.log('offsetHeight: ' + document.body.offsetHeight);
    console.log('clientHeight: ' + document.body.clientHeight);
    console.log('boundingClientRect height: ' + document.body.getBoundingClientRect().height);

    return height;
  }

  // If we are inside an iframe...
  if (window.parent) {

    // Check twice a second for resizes.
    setInterval(function () {
      var currentHeight = getHeight();

      // If the height changed,
      if (height !== currentHeight) {

        // store the new height for future comparisons,
        height = currentHeight;

        // pass a message with the height to the parent window.
        window.parent.postMessage({
          type: 'iFrameResizeHeight', // Include for filtering.
          height: height
        }, "*");
      }
    }, 500);
  }
}());
