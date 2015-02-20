var Pizza = {
  diameter: 0,
  topped: false,
  area: function() {
    return Math.round(Math.PI * Math.pow(this.diameter / 2, 2));
  },
  slices: function() {
    var minSlices = 4;
    if (this.area() < 100) {
      return minSlices;
    } else {
      return Math.floor(this.area() / 25);
    }
  },
  pepperoni: function() {
    if (this.topped) {
      return Math.floor(this.slices() * 1.85);
    } else {
      return 0;
    }
  },
  cheese: function() {
    if (this.topped) {
      return Math.round(this.area() * 0.85);
    } else {
      return Math.round(this.area() * 1);
    }
  }
};

$(function() {

  $("form#input").submit(function(event) {
    var newPizza = Object.create(Pizza);
    var selectedTopping = $("select#topping").val()
    if (selectedTopping === "pepperoni") {
      newPizza.topped = true;
    }
    newPizza.diameter = parseInt($("input#diameter").val());

    $(".slices").text(newPizza.slices());
    $(".pepperoni").text(newPizza.pepperoni());
    $(".cheese").text(newPizza.cheese());
    $(".pizza-description").text(newPizza.diameter + "-inch " + selectedTopping)
    var cheeseCalculator = (0.09 * newPizza.cheese() / 454);
    var cost = ((newPizza.slices() * 1.5) + (newPizza.pepperoni() * 0.25) + (newPizza.cheese() * cheeseCalculator)).toFixed(2);

    $(".cost").text("$" + cost)

    $("input#diameter").val("");

    $("#result").show();

    event.preventDefault();
  });
});
