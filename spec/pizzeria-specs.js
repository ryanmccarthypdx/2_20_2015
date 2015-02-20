describe("Pizza", function() {
  describe("slices", function() {
    it("returns 4 slices minimum", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 2;
      expect(testPizza.slices()).to.equal(4);
    });
    it("returns lots of slices for very large pizzas", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 24;
      expect(testPizza.slices()).to.equal(18);
    });
  });
});
