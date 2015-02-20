describe("Pizza", function() {
  describe("area", function() {
    it("calculates the area of the pizza to the nearest square inch", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 20;
      expect(testPizza.area()).to.equal(314);
    });
  });
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
  describe("pepperoni", function() {
    it("returns zero if pizza is just a plain cheese", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 20;
      testPizza.topped = false;
      expect(testPizza.pepperoni()).to.equal(0);
    });
    it("calculates the number of pepperonis based on the number of slices", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 20;
      testPizza.topped = true;
      expect(testPizza.pepperoni()).to.equal(22);
    });
  });
  describe("cheese", function() {
    it("returns one gram of cheese per square inch for a cheese pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 20;
      testPizza.topped = false;
      expect(testPizza.cheese()).to.equal(314);
    });
    it("returns 850 milligrams of cheese per square inch for a pepperoni pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 20;
      testPizza.topped = true;
      expect(testPizza.cheese()).to.equal(267);
    });
  });
});
