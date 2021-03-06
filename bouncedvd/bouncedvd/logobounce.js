
float x;
float y;

int xspeed;
int yspeed;

PImage dvd;

float r, g, b;

void setup() {
  fullScreen();  
  dvd = loadImage("dvd_logo.png");
  x = random(width);
  y = random(height);
  xspeed = 10;
  yspeed = 10;
  pickColor();
}

void pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

void draw() {
  background(0);
  
  tint(r, g, b);
  image(dvd, x, y);


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}
