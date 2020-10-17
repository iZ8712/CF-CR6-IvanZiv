var all = [];
// I decided to use only string
class Locations {
    city: string;
    zip: string;
    address: string;
    img: string;
    constructor(city, zip, address, img) {
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
        all.push(this);
    };

    display(){
      return  `

      <img class="pic card-img-top" src="${this.img}">

      <div class="text-center card-body">

        <h4 class="card-title">${this.city}</h4>

        <p class="card-text">${this.zip} - ${this.address}</p>

       `};

};

new Locations("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "img/Church.jpg");
new Locations("Zoo Vienna", "1130 Vienna", "Maxingstraße 13b", "img/Zoo.jpg");

class Restaurant extends Locations {
  number: string;
  cuisine: string;
  web: string;
  constructor(city, zip, address, img, number, cuisine, web) {
    super(city, zip, address, img);
    this.number = number;
    this.cuisine  = cuisine;
    this.web = web; 
    // I also learned, that I don't need to push everything twice in an array.
  };

  display() {
    return `

    ${super.display()}

    <p>${this.number}<p>

    <p>${this.cuisine}<p>

    <p><a href="http://${this.web}/">${this.web}</a><p>`
  };
};

new Restaurant("Lemon Leaf Thai Restaurant", "1050 Vienna", "Kettenbrückengasse 19", "img/Lemon.png", "+43(1) 58 12 308", "Thainess", "www.lemonleaf.at");
new Restaurant("SIXTA", "1050 Vienna", "Schönbrunner Straße 21", "img/Sixta.png", "+43 (1) 58 528 56l", "Viennese", "www.sixta-restaurant.at");

class Event extends Locations {
  date: string;
  time: string;
  price: string;
  page: string;

  constructor(city, zip, address, img, date, time, price, page) {
    super(city, zip, address, img);
    this.date = date;
    this.time  = time;
    this.price = price;
    this.page = page; 
  };

  display() {
    return `

    ${super.display()}

    <p>${this.date}<p>

    <p>${this.time}<p>

    <p>${this.price}<p>

    <p><a href="http://${this.page}/">${this.page}</a><p>
    `
  };
};

new Event("Kris Kristofferson", "1150 Vienna", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/Kris.jpg", "Fr., 15.11.2021", "20:00", "58,50 EUR", "kriskristofferson.com");
new Event("Lenny Kravitz", "1150 Vienna", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/Lenny.jpg", "Sat., 09.12.2029", "19:30" "47,80 EUR", "www.lennykravitz.com");

$(document).ready(function () {

  //here I use bootstrap for the desgin

  for (i = 0; i < all.length; i++) {
    let x = all[i].display();
      $("#content").append(`
      <div class="mt-2 mb-2 col-md-6 lg-lp-1 col-lg-3" id="${i}">
      <div class="card">
      ${x}
      </div>
      </div>
      `); 
      console.table(all);
  };

  // this Part is for the Navbar
  $("[data-trigger]").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id =  $(this).attr('data-trigger');
    $(offcanvas_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
  }); 

  $(".btn-close, .screen-overlay").click(function(e){
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
  }); 
});