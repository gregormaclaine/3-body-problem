var sketch = function (p5) {
    p5.setup = function () {
        p5.createCanvas(p5.windowWidth * 0.8, p5.windowHeight * 0.8);
    };
    p5.draw = function () {
        p5.background(230);
        p5.fill(255);
        p5.rect(100, 100, 50, 50);
    };
};
new p5(sketch);
//# sourceMappingURL=../src/src/bundle.js.map