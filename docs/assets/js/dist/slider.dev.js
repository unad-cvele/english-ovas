"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var slider_class =
/*#__PURE__*/
function () {
  function slider_class(sliderUniqueClass) {
    _classCallCheck(this, slider_class);

    console.log("".concat(sliderUniqueClass, " __ DEFINE"));
    this.sliderUniqueClass = sliderUniqueClass;
    this.sliderId = document.querySelectorAll(".".concat(this.sliderUniqueClass))[0];
    console.log(this.sliderId);
    this.buttonLeft = this.sliderId.querySelectorAll(".section-general__button-left")[0];
    this.buttonRight = this.sliderId.querySelectorAll(".section-general__button-right")[0];
    this.sliderContainer = this.sliderId.querySelectorAll(".".concat(this.sliderUniqueClass, "__slider"))[0];
    this.sliderElements = this.sliderContainer.querySelectorAll(".".concat(this.sliderUniqueClass, "__card"));
    this.sliderIndicatorContainer = this.sliderId.querySelectorAll(".".concat(this.sliderUniqueClass, "__indicators"))[0];
    this.sliderIndicators = this.sliderId.querySelectorAll(".".concat(this.sliderUniqueClass, "__indicator"));
    this.currentElement = 0;
    this.listenerButtonsAssing();
    console.log("".concat(sliderUniqueClass, " __ X2"));
  }

  _createClass(slider_class, [{
    key: "listenerButtonsAssing",
    value: function listenerButtonsAssing() {
      var these = this;
      this.buttonLeft.addEventListener('click', function () {
        these.goLeft();
      });
      this.buttonRight.addEventListener('click', function () {
        these.goRight();
      });
    }
  }, {
    key: "goLeft",
    value: function goLeft() {
      if (this.currentElement > 0) {
        this.sliderElements[this.currentElement].classList.add("".concat(this.sliderUniqueClass, "__card--hide-right"));
        this.currentElement--;
        this.sliderElements[this.currentElement].classList.remove("".concat(this.sliderUniqueClass, "__card--hide-left"));
        this.moveIndicators();
      }
    }
  }, {
    key: "goRight",
    value: function goRight() {
      var maxElements = this.sliderElements.length - 1;

      if (this.currentElement < maxElements) {
        this.sliderElements[this.currentElement].classList.add("".concat(this.sliderUniqueClass, "__card--hide-left"));
        this.currentElement++;
        this.sliderElements[this.currentElement].classList.remove("".concat(this.sliderUniqueClass, "__card--hide-right"));
        this.moveIndicators();
      }
    }
  }, {
    key: "moveIndicators",
    value: function moveIndicators() {
      if (this.sliderIndicatorContainer) {
        for (var index = 0; index < this.sliderIndicators.length; index++) {
          this.sliderIndicators[index].classList.remove("".concat(this.sliderUniqueClass, "__indicator--active"));
        }

        this.sliderIndicators[this.currentElement].classList.add("".concat(this.sliderUniqueClass, "__indicator--active"));
      }
    }
  }]);

  return slider_class;
}();

var slider__ovas = new slider_class('section-ovas');
var slider__docentes = new slider_class('section-docentes');