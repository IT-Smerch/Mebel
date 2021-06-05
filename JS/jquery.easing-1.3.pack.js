/ * *
jQuery Easing v1 .3 - http: //gsgd.co.uk/sandbox/jquery/easing/
    *
    *
    Использует встроенные возможности ослабления, добавленные в jQuery 1.1.*чтобы предложить несколько вариантов ослабления *
    *
    УСЛОВИЯ ИСПОЛЬЗОВАНИЯ - jQuery Easing *
    *
    Открытый исходный код под лицензией BSD.*
    *
    Авторское право© 2008 Джордж МакГинли Смит *
    Все права защищены.*
    *
    Распространение и использование в исходной и двоичной формах, с модификациями или без них, *
    разрешены при соблюдении следующих условий:
    *
    *
    При повторном распространении исходного кода должно сохраняться указанное выше уведомление об авторских правах, этот список *
    условия и следующий отказ от ответственности.*Распространение в двоичной форме должно воспроизводить указанное выше уведомление об авторских правах, этот список *
    условий и следующего отказа от ответственности в документации и / или других материалах *
    входит в комплект поставки.*
    *
    Ни имя автора, ни имена участников не могут быть использованы для поддержки *
    или продвигать продукты, созданные на основе этого программного обеспечения, без специального предварительного письменного разрешения.*
    *
    ДАННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ ОБЛАДАТЕЛЯМИ АВТОРСКИХ ПРАВ И СОСТАВЛЯМИ« КАК ЕСТЬ» *
    ЯВНЫЕ ИЛИ ПОДРАЗУМЕВАЕМЫЕ ГАРАНТИИ, ВКЛЮЧАЯ, НЕ ОГРАНИЧИВАясь, ПОДРАЗУМЕВАЕМЫЕ ГАРАНТИИ *
    КОММЕРЧЕСКАЯ ЦЕННОСТЬ И ПРИГОДНОСТЬ ДЛЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ ОТКАЗЫВАЕТСЯ.НИ В КОЕМ СЛУЧАЕ *
    ВЛАДЕЛЕЦ АВТОРСКИХ ПРАВ ИЛИ СОСТАВНИКИ НЕСЕТ ОТВЕТСТВЕННОСТЬ ЗА ЛЮБЫЕ ПРЯМЫЕ, КОСВЕННЫЕ, СЛУЧАЙНЫЕ, ОСОБЫЕ, *
    ОБЯЗАТЕЛЬНЫЕ ИЛИ КОСВЕННЫЕ УБЫТКИ(ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ЗАКУПКИ ЗАМЕНЫ *
        ТОВАРЫ ИЛИ УСЛУГИ; ПОТЕРЯ ИСПОЛЬЗОВАНИЯ, ДАННЫХ ИЛИ ПРИБЫЛИ; ИЛИ ПЕРЕРЫВ В ДЕЯТЕЛЬНОСТИ) ОДИН ПРИЧИН *
    И ПО ЛЮБОЙ ТЕОРИИ ОТВЕТСТВЕННОСТИ, ЛИБО В КОНТРАКТЕ, СТРОГОЙ ОТВЕТСТВЕННОСТИ ИЛИ ПЕРЕДАЧИ(ВКЛЮЧАЯ *
        НЕБРЕЖНОСТЬ ИЛИ ИНАЧЕ), ВОЗНИКАЮЩИЕ В РЕЗУЛЬТАТЕ ИСПОЛЬЗОВАНИЯ ДАННОГО ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ, ДАЖЕ В СЛУЧАЕ СОВЕТА *
    О ВОЗМОЖНОСТИ ТАКОГО ПОВРЕЖДЕНИЯ.*
    *
    /

// t: текущее время, b: начальное значение, c: изменение значения, d: продолжительность
eval(function(p, a, c, k, e, r) { e = function(c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/ ^ /, String)) { while (c - ) r[e(c)] = k[c] || e(c);
        k = [function(e) { return r[e] }];
        e = function() { return '\\ w +' };
        c = 1 };
    в то время как(c - ) if (k[c]) p = p.replace(new RegExp('\\ b' + e(c) + '\\ b', 'g'), k[c]); return p }('привет [\' 1a \ '] = привет[\' z \ ']; hO(привет, { y: \ ' D \ ', z: 9(x, t, b, c, d) { 6 привет[привет](x, t, b, c, d) }, 17: 9(x, t, b, c, d) { 6 c * (t / = d) * t + b }, D: 9(x, t, b, c, d) { 6 - c * (t / = d) * (t - 2) + b }, 13: 9(x, t, b, c, d) { e((t / = d / 2) < 1) 6 c / 2 * t * t + b;
        6 - c / 2 * ((-t) * (t - 2) - 1) + b }, X: 9(x, t, b, c, d) { 6 c * (t / = d) * t * t + b }, U: 9(x, t, b, c, d) { 6 c * ((t = t / d - 1) * t * t + 1) + b }, R: 9(x, t, b, c, d) { e((t / = d / 2) < 1) 6 c / 2 * t * t * t + b;
        6 c / 2 * ((t - = 2) * t * t + 2) + b }, N: 9(x, t, b, c, d) { 6 c * (t / = d) * t * t * t + b }, M: 9(x, t, b, c, d) { 6 - c * ((t = t / d - 1) * t * t * t - 1) + b }, L: 9(x, t, b, c, г) { е((t / = d / 2) < 1) 6 c / 2 * t * t * t * t + b;
        6 - c / 2 * ((t - = 2) * t * t * t - 2) + b }, K: 9(x, t, b, c, d) { 6 c * (t / = d) * t * t * t * t + b }, J: 9(x, t, b, c, d) { 6 c * ((t = t / d - 1) * t * t * t * t + 1) + b }, I: 9(x, t, b, c, d) { e((t / = d / 2) < 1) 6 c / 2 * t * t * t * t * t + b;
        6 c / 2 * ((t - = 2) * t * t * t * t + 2) + b }, G: 9(x, t, b, c, d) { 6 - c * 8. C(t / d * (8. g / 2)) + c + b }, 15: 9(x, t, b, c, d) { 6 c * 8. n(t / d * (8. g / 2)) + b }, 12: 9(x, t, b, c, d) { 6 - c / 2 * (8. C(8. g * t / d) - 1) + b }, Z: 9(x, t, b, c, d) { 6(t == 0) ? b : c * 8. j(2, 10 * (t / d - 1)) + b }, Y: 9(x, t, b, c, d) { 6(t == d) ? b + c : c * (-8. j(2, -10 * t / d) + 1) + b }, W: 9(x, t, b, c, d) { e(t == 0) 6 b;
        e(t == d) 6 b + c;
        e((t / = d / 2) < 1) 6 c / 2 * 8. j(2, 10 * (t - 1)) + b;
        6 c / 2 * (-8. j(2, -10 * --t) + 2) + b }, V: 9(x, t, b, c, d) { 6 - c * (8. o(1 - (t / = d) * t) - 1) + b }, S: 9(x, t, b, c, d) { 6 c * 8. o(1 - (t = t / d - 1) * t) + b }, Q: 9(x, t, b, c, d) { e((t / = d / 2) < 1) 6 - c / 2 * (8. o(1 - t * t) - 1) + b;
        6 c / 2 * (8. o(1 - (t - = 2) * t) + 1) + b }, P: 9(x, t, b, c, d) { fs = 1. l;
        fp = 0;
        fa = c;
        e(t == 0) 6 b;
        e((t / = d) == 1) 6 b + c;
        e(!p) p = d * .3;
        e(a < 8. w(c)) { a = c;
            fs = p / 4 }
        mfs = p / (2 * 8. g) * 8. r(c / a);
        6 - (а * 8. j(2, 10 * (t - = 1)) * 8. n((t * ds) * (2 * 8. g) / p)) + b }, H: 9(x, t, b, c, d) { fs = 1. l;
        fp = 0;
        fa = c;
        e(t == 0) 6 b;
        e((t / = d) == 1) 6 b + c;
        e(!p) p = d * .3;
        e(a < 8. w(c)) { a = c;
            fs = p / 4 }
        mfs = p / (2 * 8. g) * 8. r(c / a);
        6 a * 8.j(2, -10 * t) * 8. n((t * ds) * (2 * 8. g) / p) + c + b }, T: 9(x, t, b, c, d).) { fs = 1. l;
        fp = 0;
        fa = c;
        e(t == 0) 6 b;
        e((t / = d / 2) == 2) 6 b + c;
        e(!p) p = d * (.3 * 1.5);
        e(a < 8. w(c)) { a = c;
            fs = p / 4 }
        mfs = p / (2 * 8. g) * 8. r(c / a);
        e(t < 1) 6 - .5 * (a * 8. j(2, 10 * (t -= 1)) * 8. n((t * ds) * (2 * 8. g) / p)) + b;
        6 a * 8. j(2, -10 * (t - = 1)) * 8. n((t * ds) * (2 * 8. g) / p) * .5 + c + b }, F: 9(x, t, b, c, d, s) { e(s == u) s = 1. l;
        6 c * (t / = d) * t * ((s + 1) * ts) + b }, E: 9(x, t, b, c, d, s) { e(s == u) s = 1. l;
        6 c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b }, 16: 9(x, t, b, c, d, s) { e(s == u) s = 1. l;
        e((t / = d / 2) < 1) 6 c / 2 * (t * t * (((s * = (1. B)) + 1) * ts)) + b;
        6 c / 2 * ((t - = 2) * t * (((s * = (1. B)) + 1) * t + s) + 2) + b }, A: 9(x, t, b, c, d) { 6 ch.iv(x, dt, 0, c, d) + b }, v: 9(x, t, b, c, d) { e((t / = d) < (1 / 2. k)) { 6 c * (7. q * t * t) + b }
        me(t < (2 / 2. k)) { 6 c * (7. q * (t - = (1.5 / 2. k)) * t + .k) + b }
        me(t < (2.5 / 2. k)) { 6 c * (7. q * (t - = (2.14 / 2. k)) * t + .11) + b }
        m { 6 c * (7. q * (t - = (2, 18 / 2. k)) * t + .19) + b } }, 1 b: 9(x, t, b, c, d) { e(t < d / 2) 6 hiA(x, t * 2, 0, c, d) * .5 + b;
        6 hiv(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b }
});
', 62,74, ' || || ||
return ||Math | function || || |
    if |
var | PI | jQuery | easing | pow | 75 | 70158 |
    else |sin | sqrt || 5625 | asin || | undefined | easyOutBounce | abs || def | swing | easyInBounce | 525 | cos | easyOutQuad | easyOutBack | easyInBack | easyInSine | easyOutElastic | EasyInOutQuint | easyOutQuint | easyInQuint | easyInOutQuart | easyOutQuart | easyInQuart | extend | easyInElastic | easyInElastic | easyInElastic easyInCirc | easyInOutExpo | easyInCubic | easyOutExpo | easyInExpo || 9375 | easyInOutSine | easyInOutQuad | 25 | easyOutSine | easyInOutBack | easyInQuad | 625 | 984375 | jswing | easyInOutBounce '.split (' | '})1b: 9 (x, t, b, c, d) {e (t <d / 2) 6 hiA (x, t * 2,0, c, d) *. 5 + b; 6 hiv (x, t * 2-d, 0, c, d) *. 5 + c * .5 + b}}); ', 62, 74, ' |||||| return || Math | function ||||| if | var | PI | jQuery | easing | pow | 75 | 70158 | else | sin | sqrt || 5625 | asin ||| undefined | easyOutBounce | abs || def | swing | easyInBounce | 525 | cos | easyOutQuad | easyOutBack | easyInBack | easeInSine | easeOutElastic | easeInOutQuint | easeOutQuint | easeInQuint | easeInOutQuart | easeOutQuart | easeInQuart | расширить | easeInElastic | easeInOutCirc | easeInOutCubic | easeOutCirc | easeInOutElastic | easeOutCubic | easeInCirc | easeInOutExpo | easeInCubic | easeOutExpo | easeInExpo || 9375 | easeInOutSine | easeInOutQuad | 25 | easyOutSine | easyInOutBack | easyInQuad | 625 | 984375 | jswing | easyInOutBounce'.split('|'), 0, {})) 1 b: 9(x, t, b, c, d) { e(t < d / 2) 6 hiA(x, t * 2, 0, c, d) * .5 + b;
6 hiv(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b }
});
', 62,74,' || || ||
return ||Math | function || || |
    if |
var | PI | jQuery | easing | pow | 75 | 70158 |
    else |sin | sqrt || 5625 | asin || | undefined | easyOutBounce | abs || def | swing | easyInBounce | 525 | cos | easyOutQuad | easyOutBack | easyInBack | easeInSine | easeOutElastic | easeInOutQuint | easeOutQuint | easeInQuint | easeInOutQuart | easeOutQuart | easeInQuart | расширить | easeInElastic | easeInOutCirc | easeInOutCubic | easeOutCirc | easeInOutElastic | easeOutCubic | easeInCirc | easeInOutExpo | easeInCubic | easeOutExpo | easeInExpo || 9375 | easeInOutSine | easeInOutQuad | 25 | easyOutSine | easyInOutBack | easyInQuad | 625 | 984375 | jswing | easyInOutBounce '.split (' | '), 0, {}))|||||| return || Math | function ||||| if | var | PI | jQuery | easing | pow | 75 | 70158 | else | sin | sqrt || 5625 | asin ||| undefined | easyOutBounce | abs || def | swing | easyInBounce | 525 | cos | easyOutQuad | easyOutBack | easyInBack | easyInSine | easyOutElastic | easyInOutQuint | easyOutQuint | easyInQuint | easyInOutQuart | easyOutQuart | easyInQuart | extend | sizes | easyInElastic | | easyInOutExpo | easyInCubic | easyOutExpo | easyInExpo || 9375 | easyInOutSine | easyInOutQuad | 25 | easyOutSine | easyInOutBack | easyInQuad | 625 | 984375 | jswing | easyInOutBounce'.split('|'), 0, { || || ||
            return ||Math | function || || |
                if |
            var | PI | jQuery | easing | pow | 75 | 70158 |
            else |sin | sqrt || 5625 | asin || | undefined | easyOutBounce | abs || def | Swing | easyInBounce | 525 | cos | easyOutQuad | easyOutBack | easyInBack | easyInSine | easyOutElastic | easyInOutQuint | easyOutQuint | easyInQuint | easyInOutQuart | easyOutQuart | easyInQuart | extend | easycutCutic | ... | easyInOutExpo | easyInCubic | easyOutExpo | easyInExpo || 9375 | easyInOutSine | easyInOutQuad | 25 | easyOutSine | easyInOutBack | easyInQuad | 625 | 984375 | jswing | easyInOutBounce '.split (' | '), 0, {{})){}))

            /
            *
            *
            *
            УСЛОВИЯ ИСПОЛЬЗОВАНИЯ - УРАВНЕНИЯ УПРАВЛЕНИЯ *
            *
            Открытый исходный код под лицензией BSD.*
            *
            Авторские права© 2001 Роберт Пеннер *
            Все права защищены.*
            *
            Распространение и использование в исходной и двоичной формах,
            с модификациями или без них,
            * разрешены при соблюдении следующих условий:
                *
                *
                При повторном распространении исходного кода должно сохраняться указанное выше уведомление об авторских правах,
            этот список *
            условия и следующий отказ от ответственности.*Распространение в двоичной форме должно воспроизводить указанное выше уведомление об авторских правах,
            этот список *
            условий и следующего отказа от ответственности в документации и / или других материалах *
            входит в комплект поставки.*
            *
            Ни имя автора,
            ни имена участников не могут быть использованы для поддержки *
            или продвигать продукты,
            созданные на основе этого программного обеспечения,
            без специального предварительного письменного разрешения.*
            *
            ДАННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ ОБЛАДАТЕЛЯМИ АВТОРСКИХ ПРАВ И СОСТАВЛЯМИ« КАК ЕСТЬ» *
            ЯВНЫЕ ИЛИ ПОДРАЗУМЕВАЕМЫЕ ГАРАНТИИ,
            ВКЛЮЧАЯ,
            НЕ ОГРАНИЧИВАясь,
            ПОДРАЗУМЕВАЕМЫЕ ГАРАНТИИ *
            КОММЕРЧЕСКАЯ ЦЕННОСТЬ И ПРИГОДНОСТЬ ДЛЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ ОТКАЗЫВАЕТСЯ.НИ В КОЕМ СЛУЧАЕ *
            ВЛАДЕЛЕЦ АВТОРСКИХ ПРАВ ИЛИ СОСТАВНИКИ НЕСЕТ ОТВЕТСТВЕННОСТЬ ЗА ЛЮБЫЕ ПРЯМЫЕ,
            КОСВЕННЫЕ,
            СЛУЧАЙНЫЕ,
            ОСОБЫЕ,
            * ОБЯЗАТЕЛЬНЫЕ ИЛИ КОСВЕННЫЕ УБЫТКИ(ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ЗАКУПКИ ЗАМЕНЫ *
                ТОВАРЫ ИЛИ УСЛУГИ; ПОТЕРЯ ИСПОЛЬЗОВАНИЯ, ДАННЫХ ИЛИ ПРИБЫЛИ; ИЛИ ПЕРЕРЫВ В ДЕЯТЕЛЬНОСТИ) ОДИН ПРИЧИН *
            И ПО ЛЮБОЙ ТЕОРИИ ОТВЕТСТВЕННОСТИ,
            ЛИБО В КОНТРАКТЕ,
            СТРОГОЙ ОТВЕТСТВЕННОСТИ ИЛИ ПЕРЕДАЧИ(ВКЛЮЧАЯ *
                НЕБРЕЖНОСТЬ ИЛИ ИНАЧЕ),
            ВОЗНИКАЮЩИЕ В РЕЗУЛЬТАТЕ ИСПОЛЬЗОВАНИЯ ДАННОГО ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ,
            ДАЖЕ В СЛУЧАЕ СОВЕТА *
            О ВОЗМОЖНОСТИ ТАКОГО ПОВРЕЖДЕНИЯ.*
            *
            /