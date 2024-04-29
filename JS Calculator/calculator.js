function addToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  // Add keyboard event listeners
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9\.\+\-\*\/]/.test(key)) {
      addToDisplay(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });