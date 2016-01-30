$(function () {
  Functions.Plugins.slider();
  Functions.CitySelect.setContent();
  Functions.SearchForm.setShow();
});

Functions = {
  Plugins: {
    slider: function () {
      var $slider = $('.slider');

      if ($slider.length > 0) {

        var $outBlock = $('#slide-out');
        if ($outBlock.length > 0) {

          $slider.on('init', function (event, slick, currentSlide, nextSlide) {
            var $currentSlideElem = $(slick.$slides[0]);
            var firstData = $currentSlideElem.data('first');
            var secondData = $currentSlideElem.data('second');
            var thirdData = $currentSlideElem.data('third');
            var htmlOut;

            htmlOut = '<span class="price">' + firstData.substring(0, firstData.indexOf('.'))
              + '<sup class="price__super">' + firstData.substring(firstData.indexOf('.') + 1) + '</sup>'
              + '</span>'
              + '<del class="price price_old">' + secondData.substring(0, secondData.indexOf('.'))
              + '<sup class="price__super">' + secondData.substring(secondData.indexOf('.') + 1) + '</sup>'
              + '</del>'
              + '<span class="price price_sale">' + thirdData + '</span>';

            $outBlock.html(htmlOut);
          });
        }

        $slider.slick({
          arrows: false,
          dots: true,
          adaptiveHeight: false
        });

        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

          var $currentSlideElem = $(slick.$slides[nextSlide]);
          var firstData = $currentSlideElem.data('first');
          var secondData = $currentSlideElem.data('second');
          var thirdData = $currentSlideElem.data('third');
          var htmlOut;

          htmlOut = '<span class="price">' + firstData.substring(0, firstData.indexOf('.'))
            + '<sup class="price__super">' + firstData.substring(firstData.indexOf('.') + 1) + '</sup>'
            + '</span>'
            + '<del class="price price_old">' + secondData.substring(0, secondData.indexOf('.'))
            + '<sup class="price__super">' + secondData.substring(secondData.indexOf('.') + 1) + '</sup>'
            + '</del>'
            + '<span class="price price_sale">' + thirdData + '</span>';

          $outBlock.html(htmlOut);
        });
      }
    }
  },
  CitySelect: {
    setContent: function () {
      var $select = $('.select-city__list'),
        $valueEl = $('.select-city__name');

      if ($select.length > 0) {
        setSelectValue();
        $select.on('change', function () {
          setSelectValue();
        });

        function setSelectValue() {
          $valueEl.html($select.val());
        }
      }
    }
  },
  SearchForm: {
    setShow: function () {
      var form = '.search-form';

      if ($(form).length > 0) {
        var $button = $(form).find('.search-button');
        var activeClass = 'search-form_shown';


        $button.on('click', function () {

          if (!$(form).hasClass(activeClass)) {

            $(form).addClass(activeClass);
            return false;
          }

          return true;
        });

        $(document).on('click', function (event) {
          var e = event || window.event;
          if ($(e.target).closest(form).length <= 0 && $(form).hasClass(activeClass)) {
            $(form).removeClass(activeClass);
          }
        })
      }
    }
  }
};