AFRAME.registerComponent('novol-click', {
    init: function () {
      this.el.addEventListener('mousedown', function (evt) {
        window.open("https://n.novol.com/karty/tech/NO-21-22%20Dart%20Clear%208500.pdf");
      });
    }
  }
);

AFRAME.registerComponent('novol-cobra-click', {
    init: function () {
      this.el.addEventListener('mousedown', function (evt) {
        window.open("https://cobra.novol.com/karty/tech/pl_TDS_COBRA.pdf");
      });
    }
  }
);

AFRAME.registerComponent('novol-spectral-click', {
    init: function () {
      this.el.addEventListener('mousedown', function (evt) {
        window.open("https://spectral.pl/karty_t/ST_UNDER_00-RACE.pdf");
      });
    }
  }
);

AFRAME.registerComponent('novol-ultra-click', {
    init: function () {
      this.el.addEventListener('mousedown', function (evt) {
        window.open("https://ultra.novol.com/karty/tech/UT_03_04%20LA%20KLARLACK%20410%20GLOSS.pdf");
      });
    }
  }
);

