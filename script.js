// Define conversion rates for different units
const conversionRates = {
    length: {
      m: 1,
      km: 0.001,
      mi: 0.000621371,
      ft: 3.28084,
    },
    weight: {
      kg: 1,
      g: 1000,
      lb: 2.20462,
      oz: 35.274,
    },
    temperature: {
      celsius: {
        fahrenheit: function (value) {
          return (value * 9 / 5) + 32;
        },
        kelvin: function (value) {
          return value + 273.15;
        }
      },
      fahrenheit: {
        celsius: function (value) {
          return (value - 32) * 5 / 9;
        },
        kelvin: function (value) {
          return (value + 459.67) * 5 / 9;
        }
      },
      kelvin: {
        celsius: function (value) {
          return value - 273.15;
        },
        fahrenheit: function (value) {
          return (value * 9 / 5) - 459.67;
        }
      }
    }
  };
  
  // Populate the unit options based on the selected category
  function populateUnitOptions(category) {
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';
  
    const units = Object.keys(conversionRates[category]);
  
    for (let i = 0; i < units.length; i++) {
      const option = document.createElement('option');
      option.value = units[i];
      option.textContent = units[i];
      fromUnitSelect.appendChild(option.cloneNode(true));
      toUnitSelect.appendChild(option);
    }
  }
  
  // Perform the conversion based on selected units
  function convertUnits() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
