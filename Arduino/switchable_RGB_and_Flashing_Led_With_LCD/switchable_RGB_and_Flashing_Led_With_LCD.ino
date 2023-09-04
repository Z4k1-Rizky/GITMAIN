#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

// declare pins location
#define button 13
#define speaker 4
#define flashLed 3
#define redLed 8
#define greenLed 9
#define blueLed 10
#define SCREEN_WIDTH 128  // OLED display width, in pixels
#define SCREEN_HEIGHT 64  // OLED display height, in pixels

// Declaration for an SSD1306 display connected to I2C (SDA, SCL pins)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

int buttonState = 0;
int oldButtonState = LOW;
int flashLedState = LOW;
int RGBLedState = LOW;

void setup() {
  // Address 0x3D for 128x64
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;)
      ;
  }
  delay(2000);

  // Begin Serial Monitor
  Serial.begin(9600);

  // Declare pins mode
  pinMode(button, INPUT);
  pinMode(speaker, OUTPUT);
  pinMode(flashLed, OUTPUT);
  pinMode(redLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  pinMode(blueLed, OUTPUT);

  // Configure Text to display
  display.setTextSize(2);
  display.setTextColor(WHITE);
}

void loop() {
  buttonState = digitalRead(button);

  if (buttonState != oldButtonState && buttonState == HIGH) {
    digitalWrite(speaker, HIGH);
    delay(100);
    digitalWrite(speaker, LOW);

    flashLedState = (flashLedState == LOW && RGBLedState == LOW ? HIGH : LOW);
    RGBLedState = (RGBLedState == LOW && flashLedState == LOW ? HIGH : LOW);

    inactive(flashLedState == 0 && RGBLedState == 0);
    flash(flashLedState);
    rgb(RGBLedState);

    delay(50);
  }

  oldButtonState = buttonState;
}

void inactive(int param) {
  if (param == 1) {
    display.clearDisplay();
    display.setTextSize(2);
    display.setCursor(0, 0);
    display.println("Mode :");
    display.setTextSize(3);
    display.setCursor(0, 20);
    display.println("OFF");
    display.display();
  } else {
    display.clearDisplay();
  }
}

void flash(int param) {
  if (param == 1) {
    digitalWrite(flashLed, HIGH);
    display.setTextSize(2);
    display.setCursor(0, 0);
    display.println("Mode :");
    display.setTextSize(3);
    display.setCursor(0, 20);
    display.println("Flash");
    display.display();
  } else {
    digitalWrite(flashLed, LOW);
    display.clearDisplay();
  }
}

void rgb(int param) {
  if (param == 1) {
    display.setTextSize(2);
    display.setCursor(0, 0);
    display.println("Mode :");
    display.setTextSize(3);
    display.setCursor(0, 20);
    display.println("RGB");
    display.setCursor(0, 48);
    display.setTextSize(1);
    display.println("Hold Button to Switch Mode");
    display.display();

    while (param == 1) {
      digitalWrite(redLed, RGBLedState);
      digitalWrite(greenLed, LOW);
      digitalWrite(blueLed, LOW);
      if (digitalRead(button) != 1) {
        break;
      }
      delay(1000);

      digitalWrite(redLed, LOW);
      digitalWrite(greenLed, RGBLedState);
      digitalWrite(blueLed, LOW);
      if (digitalRead(button) != 1) {
        break;
      }
      delay(1000);

      digitalWrite(redLed, LOW);
      digitalWrite(greenLed, LOW);
      digitalWrite(blueLed, RGBLedState);
      if (digitalRead(button) != 1) {
        break;
      }
      delay(1000);
    }
  } else {
    digitalWrite(redLed, LOW);
    digitalWrite(greenLed, LOW);
    digitalWrite(blueLed, LOW);
    display.clearDisplay();
  }
}