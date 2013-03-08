//require.config({
//  paths: {
//    'jquery': 'jquery',
//    'spin'
//  }
//});
require(
  [
    'jquery',
    'jquery.spin'
  ], function ($) {

    $(function () {
      $('.spinDemo.one').spin({ bgColor: 'black', color: 'eee', opacity: 3 });
      $('.spinDemo.two').spin({
        lines: 13,
        length: 0,
        radius: 38,
        bgColor: 'yellow',
        color: 'purple',
        opacity: 4,
        speed: 0.8,
        corners: 1.0
      });
      $('.spinDemo.three').spin({
        lines: 17,
        bgColor: 'blue',
        color: 'green',
        opacity: 7,
        length: 30,
        width: 6,
        corners: 1.0,
        trail: 62,
        speed: 1.8,
        hwaccel: true
      });
    });
  }
);