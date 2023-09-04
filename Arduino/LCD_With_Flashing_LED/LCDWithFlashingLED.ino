#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
#define led 10 // led pin location

// Declaration for an SSD1306 display connected to I2C (SDA, SCL pins)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  Serial.begin(115200);
  pinMode(led, OUTPUT);

  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { // Address 0x3D for 128x64
    Serial.println(F("SSD1306 allocation failed"));
    for(;;);
  }
  delay(2000);
}

void loop() {
  display.setTextSize(2);
  display.setTextColor(WHITE);
  
  for (int i = 0; i <= 5; i++) {
    if (i % 2 != 1) {
      digitalWrite(led, HIGH);
      Serial.println("Led is turned On");
      display.setCursor(0, 0);
      display.println("Led is On");
      display.display();
      delay(5000);
      display.clearDisplay();
      display.display();
    } else {
      digitalWrite(led, LOW);
      Serial.println("Led is turned Off");
      display.setCursor(0, 0);
      display.println("Led is Off");
      display.display();
      delay(3000);
      display.clearDisplay();
      display.display();
    }
  }
}