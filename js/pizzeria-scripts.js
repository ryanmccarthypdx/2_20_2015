var Pizza = {
  diameter: 0,
  // topped: false,
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
  }
};
