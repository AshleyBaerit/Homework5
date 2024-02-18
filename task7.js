let circle1 = {
  radius: 5,
  getArea: function() {
    return Math.PI * Math.pow(this.radius, 2);
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};
let circle2 = {
  radius: 8,
  getArea: function() {
    return Math.PI * Math.pow(this.radius, 2);
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};
console.log("Площадь круга circle1: " + circle1.getArea());
console.log("Периметр окружности circle2: " + circle2.getPerimeter());