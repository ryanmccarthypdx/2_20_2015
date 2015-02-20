var Pizza = {
  diameter: 0,
  // topped: false,
  slices: function(){
    var area = Math.round(Math.PI * Math.pow(this.diameter / 2, 2));
    var minSlices = 4;
    if (area < 100) {
      return minSlices;
    } else {
      return Math.floor(area / 25);
    }
  }
};
