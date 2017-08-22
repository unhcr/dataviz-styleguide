// Use immediately invoked function expression
// to eliminate global variables.
(function () {
  var dataColoursContainer = d3.select('#data-colours');

  var colours = {
    blueLightest: '#CCE3F2',
    blueLighter: '#99C7E4',
    blueLight: '#66AAD7',
    blue: '#338EC9',
    blueDark: '#0072BC',
    blueDarker: '#00568D',
    blueDarkest: '#18375F',
    redLightest: '#FCDBDF',
    redLighter: '#F9B7BF',
    redLight: '#F592A0',
    red: '#F26E80',
    redDark: '#EF4A60',
    redDarker: '#B33848',
    green: '#00B398',
    yellow: '#F5C300',
    white: '#FFFFFF',
    grayLight: '#ECECEC',
    gray: '#AFAFAF',
    black: '#000000',
    bluegrayLight: '#E2E7EB',
    bluegray: '#93A3AB',
    bluegrayDark: '#72879D'
  };

  var colourBoxWidth = 100;
  var colourBoxHeight = 100;

  dataColoursContainer.selectAll('svg').data(Object.values(colours))
    .enter().append('svg')
      .attr('width', colourBoxWidth)
      .attr('height', colourBoxHeight)
      .style('background-color', function (d) { return d; });
}());
