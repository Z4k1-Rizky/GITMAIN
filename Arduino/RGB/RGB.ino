#define redPin 10
#define greenPin 9
#define bluePin 8

void setup() {
  // put your setup code here, to run once:
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
  Serial.begin(750);
}

void loop() {
  
  for (int i = 0; i <= 3; i++) {
    if (i == 1) {
      Serial.println("RED");
      digitalWrite(redPin, 255);
      digitalWrite(greenPin, 0);
      digitalWrite(bluePin, 0);
      delay(1000);
    }
    if (i == 2) {
      Serial.println("GREEN");
      digitalWrite(redPin, 0);
      digitalWrite(greenPin, 255);
      digitalWrite(bluePin, 0);
      delay(2000);
    }
    if (i == 3) {
      Serial.println("BLUE");
      digitalWrite(redPin, 0);
      digitalWrite(greenPin, 0);
      digitalWrite(bluePin, 255);
      delay(3000);
    }
  }
}
