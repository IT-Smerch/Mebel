/* / * глобальный jQuery * /
/ * jshint multistr: true browser: true * /
/ *!
* FitVids 1.0
*
* Авторское право 2011, Крис Койер - http://css-tricks.com + Дэйв Руперт - http://daverupert.com
* Кредит Тьерри Кобленцу - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Выпущено по лицензии WTFPL - http://sam.zoy.org/wtfpl/
*
* Дата: 01 сентября, 18:00:00 2011 -0500
* / */

(функция($) {

    "использовать строго";

    $.fn.fitVids = function(options) {
        var settings = {
            customSelector: нуль
        };

        var div = document.createElement('div'),
            ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('сценарий')[0];

        div.className = 'fit-vids-style';
        div.innerHTML = '& застенчивый; <стиль> \
      .fluid-width-video-wrapper {\
         ширина: 100%; \
         положение: относительное; \
         отступ: 0; \
      } \
                                          \
      .fluid-width-video-wrapper iframe, \
      .fluid-width-video-wrapper объект, \
      .fluid-width-video-wrapper вставлять {\
         позиция: абсолютная; \
         верх: 0; \
         слева: 0; \
         ширина: 100%; \
         высота: 100%; \
      } \
    </style> ';

        ref.parentNode.insertBefore(div, ref);

        if (options) {
            $.extend(настройки, опции);
        }

        return this.each(function() {
            селекторы
            var = [
                "iframe [src * = 'player.vimeo.com']",
                "iframe [src * = 'www.youtube.com']",
                "iframe [src * = 'www.kickstarter.com']",
                "объект",
                "вставлять"
            ];

            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }

            var $ allVideos = $(this).find(selectors.join(','));

            $ allVideos.each(function() {
                var $ this = $(это);
                if (this.tagName.toLowerCase() === 'embed' && $ this.parent('object').length || $ this.parent('. fluid-width-video-wrapper').length) { return; }
                var height = (this.tagName.toLowerCase() === 'объект' || ($ this.attr('height') && !isNaN(parseInt($ this.attr('height'), 10)))) ? parseInt($ this.attr('height'), 10) : $ this.height(),
                    ширина = !isNaN(parseInt($ this.attr('width'), 10)) ? parseInt($ this.attr('width'), 10) : $ this.width(),
                    аспектRatio = высота / ширина;
                if (!$ this.attr('id')) {
                    var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
                    $ this.attr('идентификатор', videoID);
                }
                $ this.wrap('<div class = "fluid-width-video-wrapper"> </div>').parent('. fluid-width-video-wrapper').css('padding-top', (аспектRatio * 100) + "%");
                $ this.removeAttr('высота').removeAttr('ширина');
            });
        });
    };
})(jQuery);