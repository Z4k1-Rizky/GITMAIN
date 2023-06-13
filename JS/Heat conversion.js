function fahrenheitToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}

function getTemperature() {
  return prompt("Enter the temperature in Fahrenheit:");
}

const temperature = getTemperature();
const celsius = fahrenheitToCelsius(temperature);

console.log(`${temperature}°F is equivalent to ${celsius}°C.`);

