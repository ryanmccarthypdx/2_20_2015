describe("Pizza", function() {
  describe("slices", function() {
    it("returns 4 slices minimum", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 2;
      expect(testPizza.slices()).to.equal(4);
    });
  });
});
