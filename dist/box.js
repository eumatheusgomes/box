(function ($) {
  'use strict';

  var defaults = {};

  function Box (element, options) {
    this.$el = $(element);
    this.opt = $.extend(true, {}, defaults, options);

    this.init(this);
  }

  Box.prototype = {
    init: function (self) {
      self.$el.find('[data-box-collapse-toggle]').on('click', function () {
        self.toggle();
      });

      if (self.$el.hasClass('box--collapse')) {
        self.toggle(false);
      }
    },

    toggle: function (toggleClass) {
      if (toggleClass === undefined) {
        toggleClass = true;
      }
      if (toggleClass) {
        this.$el.toggleClass('box--collapse');
      }

      this.$el
        .find('[data-box-collapse-content]')
        .slideToggle('fast');

      this.$el
        .find('[data-box-collapse-icon]')
        .toggleClass('show');
    }
  };

  $.fn.box = function (options) {
    return this.each(function() {
      if (!$.data(this, 'box')) {
        $.data(this, 'box', new Box(this, options));
      }
    });
  };
})(window.jQuery);
