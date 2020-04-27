AFRAME.registerComponent('novol-cursor-listener', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var x = document.querySelectorAll(".plane");
        for (i = 0; i < x.length; i++) {
          x[i].setAttribute('mixin','board unhinge');
        }
    });
  }
});

AFRAME.registerComponent('cobra-cursor-listener', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var x = this.querySelectorAll(".plane-cobra");
        for (i = 0; i < x.length; i++) {
          x[i].setAttribute('mixin','board unhinge');
        }
    });
  }
});

AFRAME.registerComponent('spectral-cursor-listener', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var x = this.querySelectorAll(".plane-spectral");
        for (i = 0; i < x.length; i++) {
          x[i].setAttribute('mixin','board unhinge');
        }
    });
  }
});

AFRAME.registerComponent('ultra-cursor-listener', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var x = this.querySelectorAll(".plane-ultra");
        for (i = 0; i < x.length; i++) {
          x[i].setAttribute('mixin','board unhinge');
        }
    });
  }
});