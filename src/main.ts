const sketch = (p5: p5) => {
	
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth * 0.8, p5.windowHeight * 0.8);
  };

  p5.draw = () => {
    p5.background(230);
    p5.fill(255);
    p5.rect(100, 100, 50, 50);
  };
};

new p5(sketch);