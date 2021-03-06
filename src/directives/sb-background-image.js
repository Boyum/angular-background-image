(function() {
  'use strict';
  /* global angular */

  angular
    .module('sb-background-image.directives')
    .directive('sbBackgroundImage', sbBackgroundImage);

  sbBackgroundImage.$inject = [];

    /**
     * Sets the element's `sb-background-image` attribute's value as the element's CSS background-image.
     * 
     * Usage: 
     *    <element sb-background-image="./cats.jpg"></element>
     * 
     * Result:
     *    <element style="background-image: url(./cats.jpg);"></element> 
     */
  function sbBackgroundImage() {
    return {
      link: link,
      restrict: 'A'
    };

    function link(scope, element, attrs) {
      attrs.$observe('sbBackgroundImage', function(value) {
        element.css({
          backgroundImage: 'url(' + value + ')'
        });
      });
    }
  }
})();