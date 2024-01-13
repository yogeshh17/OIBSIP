function convertTemperature() {
    // Get input values
    var degreesInput = document.getElementById('degrees');
    var typeSelect = document.getElementById('type');
    var resultOutput = document.getElementById('result');

    // Parse input values
    var degrees = parseFloat(degreesInput.value);
    var type = typeSelect.value;

    // Perform conversion
    var convertedValue;
    if (type === 'celsius') {
      convertedValue = (degrees * 9/5) + 32;
    } else {
      convertedValue = (degrees - 32) * 5/9;
    }

    // Display result
    resultOutput.value = convertedValue.toFixed(2);
  }