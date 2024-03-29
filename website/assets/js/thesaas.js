/*
  Parallax, animations, fade, and contact us form initiialization.
*/

"use strict"; + function(a, b) {
    var c = {
        name: "Lynchpin Studio",
        version: "1.4.0"
    };
    c.defaults = {
        googleApiKey: null,
        googleAnalyticsId: null,
        smoothScroll: !0
    }, c.breakpoint = {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200
    }, c.config = function(d) {
        if ("string" == typeof d) return c.defaults[d];
        a.extend(!0, c.defaults, d), c.defaults.smoothScroll || SmoothScroll.destroy(), a('[data-provide~="map"]').length && void 0 === b["google.maps.Map"] && a.getScript("https://maps.googleapis.com/maps/api/js?key=" + c.defaults.googleApiKey + "&callback=thesaas.map"), c.defaults.googleAnalyticsId && (! function(a, b, c, d, e, f, g) {
            a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
                (a[e].q = a[e].q || []).push(arguments)
            }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = "", g.parentNode.insertBefore(f, g)
        }(b, document, "script", 0, "ga"), ga("create", c.defaults.googleAnalyticsId, "auto"), ga("send", "pageview"))
    }, c.init = function() {
        c.topbar(), c.parallax(), c.carousel(), c.scrolling(), c.counter(), c.aos(), c.typed(), c.contact(), c.mailer(), c.constellation(), c.shuffle(), a(document).on("click", '[data-provide~="lightbox"]', lity), a(document).on("click", ".video-wrapper .btn", function() {
            var b = a(this).closest(".video-wrapper");
            if (b.addClass("reveal"), b.find("video").length && b.find("video").get(0).play(), b.find("iframe").length) {
                var c = b.find("iframe");
                c.attr("src").indexOf("?") > 0 ? c.get(0).src += "&autoplay=1" : c.get(0).src += "?autoplay=1"
            }
        }), a(document).on("click", ".file-browser", function() {
            var b = a(this),
                c = b.closest(".file-group").find('[type="file"]');
            b.hasClass("form-control") ? setTimeout(function() {
                c.trigger("click")
            }, 300) : c.trigger("click")
        }), a(document).on("change", '.file-group [type="file"]', function() {
            var b = a(this),
                c = b.val().split("\\").pop();
            b.closest(".file-group").find(".file-value").val(c).text(c).focus()
        }), a(b).on("scroll", function() {
            var c = a(this).scrollTop() - 200;
            a(".header.fadeout").css("opacity", 1 - c / b.innerHeight)
        }), a(document).on("click", ".drawer-toggler, .drawer-close, .drawer-backdrop", function() {
            a("body").toggleClass("drawer-open")
        })
    }, c.parallax = function() {
        a("[data-parallax]").each(function() {
            var b = a(this),
                d = {
                    imageSrc: b.data("parallax"),
                    speed: .3,
                    bleed: 50
                };
            a(this).hasClass("header") && (d.speed = .6), d = a.extend(d, c.getDataOptions(b)), b.parallax(d)
        })
    }, c.map = function() {
        a('[data-provide~="map"]').each(function() {
            var b = {
                lat: "",
                lng: "",
                zoom: 13,
                markerLat: "",
                markerLng: "",
                markerIcon: "",
                style: ""
            };
            b = a.extend(b, c.getDataOptions(a(this)));
            var d = new google.maps.Map(a(this)[0], {
                    center: {
                        lat: Number(b.lat),
                        lng: Number(b.lng)
                    },
                    zoom: Number(b.zoom)
                }),
                e = new google.maps.Marker({
                    position: {
                        lat: Number(b.markerLat),
                        lng: Number(b.markerLng)
                    },
                    map: d,
                    animation: google.maps.Animation.DROP,
                    icon: b.markerIcon
                }),
                f = new google.maps.InfoWindow({
                    content: a(this).dataAttr("info", "")
                });
            switch (e.addListener("click", function() {
                f.open(d, e)
            }), b.style) {
                case "light":
                    d.set("styles", [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#e9e9e9"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                            color: "#dedede"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#333333"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f2f2f2"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }]);
                    break;
                case "dark":
                    d.set("styles", [{
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }]);
                    break;
                default:
                    Array.isArray(b.style) && d.set("styles", b.style)
            }
        })
    }, c.carousel = function() {
        a(".swiper-container").each(function() {
            var b = {
                    autoplay: 3e3,
                    speed: 1e3,
                    loop: !0,
                    breakpoints: {
                        480: {
                            slidesPerView: 1
                        }
                    }
                },
                d = a(this);
            d.find(".swiper-button-next").length && (b.nextButton = ".swiper-button-next"), d.find(".swiper-button-prev").length && (b.prevButton = ".swiper-button-prev"), d.find(".swiper-pagination").length && (b.pagination = ".swiper-pagination", b.paginationClickable = !0), b = a.extend(b, c.getDataOptions(d)), new Swiper(d, b)
        })
    }, c.scrolling = function() {
        var b = a("html, body");
        a(document).on("click", ".scroll-top", function() {
            return b.animate({
                scrollTop: 0
            }, 600), a(this).blur(), !1
        }), a(document).on("click", "[data-scrollto]", function() {
            var c = "#" + a(this).data("scrollto");
            if (a(c).length > 0) {
                var d = 0;
                a(".topbar.topbar-sticky").length && (d = 60), b.animate({
                    scrollTop: a(c).offset().top - d
                }, 1e3)
            }
            return !1
        });
        var c = location.hash.replace("#", "");
        "" != c && a("#" + c).length > 0 && b.animate({
            scrollTop: a("#" + c).offset().top - 60
        }, 1e3)
    }, c.counter = function() {
        a('[data-provide~="counter"]:not(.counted)').waypoint({
            handler: function(b) {
                a(this.element).countTo().addClass("counted")
            },
            offset: "100%"
        });
        a("[data-countdown]").each(function() {
            var b = "";
            b += '<div class="row gap-items-3">', b += '<div class="col"><h5>%D</h5><small>Day%!D</small></div>', b += '<div class="col"><h5>%H</h5><small>Hour%!H</small></div>', b += '<div class="col"><h5>%M</h5><small>Minute%!M</small></div>', b += '<div class="col"><h5>%S</h5><small>Second%!S</small></div>', b += "</div>", a(this).hasDataAttr("format") && (b = a(this).data("format")), a(this).countdown(a(this).data("countdown"), function(c) {
                a(this).html(c.strftime(b))
            })
        })
    }, c.aos = function() {
        AOS.init({
            offset: 220,
            duration: 1500,
            disable: "mobile"
        })
    }, c.topbar = function() {
        var c = a("body");
        a(b).on("scroll", function() {
            a(document).scrollTop() > 10 ? c.addClass("body-scrolled") : c.removeClass("body-scrolled")
        }), a(document).on("click", ".nav-toggle-click .nav-link", function(b) {
            var c = a(this),
                d = c.closest(".nav-item"),
                e = d.siblings(".nav-item");
            "#" == c.attr("href") && b.preventDefault(), e.removeClass("show"), e.find(".nav-item.show").removeClass("show"), d.toggleClass("show")
        }), a(document).on("click", ".topbar-toggler", function() {
            c.toggleClass("topbar-reveal"), a(this).closest(".topbar").prepend('<div class="topbar-backdrop"></div>')
        }), a(document).on("click", ".topbar-backdrop", function() {
            c.toggleClass("topbar-reveal"), a(this).remove()
        }), a(document).on("click", ".topbar-reveal .topbar-nav .nav-item > .nav-link", function() {
            var b = a(this),
                c = b.next(".nav-submenu"),
                d = b.closest(".nav-submenu");
            b.closest(".topbar-nav").find(".nav-submenu").not(c).not(d).slideUp(), c.slideToggle()
        }), a(document).on("click", ".topbar-reveal .topbar-nav .nav-link", function() {
            a(this).hasDataAttr("scrollto") && (c.removeClass("topbar-reveal"), a(".topbar-backdrop").remove())
        })
    }, c.typed = function() {
        a("[data-type]").each(function() {
            var b = a(this),
                d = b.data("type").split(","),
                e = {
                    strings: d,
                    typeSpeed: 50,
                    backDelay: 800,
                    loop: !0
                };
            e = a.extend(e, c.getDataOptions(b)), b.typed(e)
        })
    }, c.contact = function() {
        a(document).on("click", "#contact-send", function() {
            var b = a("#contact-name").val(),
                c = a("#contact-email").val(),
                d = a("#contact-message").val(),
                e = "name=" + b + "&email=" + c + "&message=" + d,
                f = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                g = a("#contact-error");
            return c.length < 1 ? void g.html("Please enter your email address.").fadeIn(500) : f.test(c) ? void a.ajax({
                type: "POST",
                url: "assets/php/sendmail_depricated.php",
                data: e,
                success: function() {
                    g.fadeOut(400), a("#contact-success").fadeIn(1e3), a("#contact-name, #contact-email, #contact-message").val("")
                },
                error: function() {
                    g.html("There is a problem in our email service. Please try again later.").fadeIn(500)
                }
            }) : void g.html("Please enter a valid email address.").fadeIn(500)
        })
    }, c.mailer = function() {
        var b = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        a('[data-form="mailer"]').each(function() {
            var c = a(this),
                d = c.find('[name="email"]'),
                e = c.find('[name="message"]'),
                f = d.closest(".form-group"),
                g = e.closest(".form-group");
            c.on("submit", function() {
                return c.children(".alert-danger").remove(), d.length && (d.val().length < 1 || !b.test(d.val())) ? (f.addClass("has-danger"), !1) : e.length && e.val().length < 1 ? (g.addClass("has-danger"), !1) : (a.ajax({
                    type: "POST",
                    url: c.attr("action"),
                    data: c.serializeArray()
                }).done(function(b) {
                    var d = a.parseJSON(b);
                    "success" == d.status ? (c.find(".alert-success").fadeIn(1e3), c.find(":input").val("")) : (c.prepend('<div class="alert alert-danger">' + d.message + "</div>"), console.log(d.reason))
                }), !1)
            }), d.on("focus", function() {
                f.removeClass("has-danger")
            }), e.on("focus", function() {
                g.removeClass("has-danger")
            })
        })
    }, c.constellation = function() {
        var c = "rgba(255, 255, 255, .8)",
            d = 120;
        a(b).width() < 700 && (d = 25), a(".constellation").each(function() {
            "dark" == a(this).data("color") && (c = "rgba(0, 0, 0, .5)"), a(this).constellation({
                distance: d,
                star: {
                    color: c,
                    width: 1
                },
                line: {
                    color: c,
                    width: .2
                }
            })
        })
    }, c.shuffle = function() {
        if (void 0 !== b.shuffle && 0 !== a('[data-provide="shuffle"]').length) {
            var c = b.shuffle;
            c.options.itemSelector = '[data-shuffle="item"]', c.options.sizer = '[data-shuffle="sizer"]', c.options.delimeter = ",", c.options.speed = 500, a('[data-provide="shuffle"]').each(function() {
                var b = a(this).find('[data-shuffle="list"]'),
                    d = a(this).find('[data-shuffle="filter"]'),
                    e = new c(b);
                d.length && a(d).find('[data-shuffle="button"]').each(function() {
                    a(this).on("click", function() {
                        var b = a(this),
                            d = b.hasClass("active"),
                            f = b.data("group");
                        a(this).closest('[data-shuffle="filter"]').find('[data-shuffle="button"].active').removeClass("active");
                        var g;
                        d ? (b.removeClass("active"), g = c.ALL_ITEMS) : (b.addClass("active"), g = f), e.filter(g)
                    })
                }), a(this).imagesLoaded(function() {
                    e.layout()
                })
            })
        }
    }, c.getDataOptions = function(b, d) {
        var e = {};
        return a.each(a(b).data(), function(a, b) {
            if ("provide" != (a = c.dataToOption(a))) {
                if (void 0 != d) {
                    switch (d[a]) {
                        case "bool":
                            b = Boolean(b);
                            break;
                        case "num":
                            b = Number(b);
                            break;
                        case "array":
                            b = b.split(",")
                    }
                }
                e[a] = b
            }
        }), e
    }, c.optionToData = function(a) {
        return a.replace(/([A-Z])/g, "-$1").toLowerCase()
    }, c.dataToOption = function(a) {
        return a.replace(/-([a-z])/g, function(a) {
            return a[1].toUpperCase()
        })
    }, b.thesaas = c
}(jQuery, window), $(function() {
    thesaas.init()
}), jQuery.fn.hasDataAttr = function(a) {
    return $(this)[0].hasAttribute("data-" + a)
}, jQuery.fn.dataAttr = function(a, b) {
    return $(this)[0].getAttribute("data-" + a) || b
}, jQuery.expr[":"].search = function(a, b, c) {
    return $(a).html().toUpperCase().indexOf(c[3].toUpperCase()) >= 0
};
