var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var all = [];
// I decided to use only string
var Locations = /** @class */ (function () {
    function Locations(city, zip, address, img) {
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
        all.push(this);
    }
    ;
    Locations.prototype.display = function () {
        return "\n\n      <img class=\"pic card-img-top\" src=\"" + this.img + "\">\n\n      <div class=\"text-center card-body\">\n\n        <h4 class=\"card-title\">" + this.city + "</h4>\n\n        <p class=\"card-text\">" + this.zip + " - " + this.address + "</p>\n\n       ";
    };
    ;
    return Locations;
}());
;
new Locations("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "img/Church.jpg");
new Locations("Zoo Vienna", "1130 Vienna", "Maxingstraße 13b", "img/Zoo.jpg");
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zip, address, img, number, cuisine, web) {
        var _this = _super.call(this, city, zip, address, img) || this;
        _this.number = number;
        _this.cuisine = cuisine;
        _this.web = web;
        return _this;
        // I also learned, that I don't need to push everything twice in an array.
    }
    ;
    Restaurant.prototype.display = function () {
        return "\n\n    " + _super.prototype.display.call(this) + "\n\n    <p>" + this.number + "<p>\n\n    <p>" + this.cuisine + "<p>\n\n    <p><a href=\"http://" + this.web + "/\">" + this.web + "</a><p>";
    };
    ;
    return Restaurant;
}(Locations));
;
new Restaurant("Lemon Leaf Thai Restaurant", "1050 Vienna", "Kettenbrückengasse 19", "img/Lemon.png", "+43(1) 58 12 308", "Thainess", "www.lemonleaf.at");
new Restaurant("SIXTA", "1050 Vienna", "Schönbrunner Straße 21", "img/Sixta.png", "+43 (1) 58 528 56l", "Viennese", "www.sixta-restaurant.at");
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(city, zip, address, img, date, time, price, page) {
        var _this = _super.call(this, city, zip, address, img) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        _this.page = page;
        return _this;
    }
    ;
    Event.prototype.display = function () {
        return "\n\n    " + _super.prototype.display.call(this) + "\n\n    <p>" + this.date + "<p>\n\n    <p>" + this.time + "<p>\n\n    <p>" + this.price + "<p>\n\n    <p><a href=\"http://" + this.page + "/\">" + this.page + "</a><p>\n    ";
    };
    ;
    return Event;
}(Locations));
;
new Event("Kris Kristofferson", "1150 Vienna", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/Kris.jpg", "Fr., 15.11.2021", "20:00", "58,50 EUR", "kriskristofferson.com");
new Event("Lenny Kravitz", "1150 Vienna", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/Lenny.jpg", "Sat., 09.12.2029", "19:30", "47,80 EUR", "www.lennykravitz.com");
$(document).ready(function () {
    //here I use bootstrap for the desgin
    for (i = 0; i < all.length; i++) {
        var x = all[i].display();
        $("#content").append("\n      <div class=\"mt-2 mb-2 col-md-6 lg-lp-1 col-lg-3\" id=\"" + i + "\">\n      <div class=\"card\">\n      " + x + "\n      </div>\n      </div>\n      ");
        console.table(all);
    }
    ;
    // this Part is for the Navbar
    $("[data-trigger]").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id = $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });
    $(".btn-close, .screen-overlay").click(function (e) {
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });
});
