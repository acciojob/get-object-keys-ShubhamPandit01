// Create the student object
const student = {
  name: "John",
  age: 20,
  city: "New York"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Attach the function to myObj for Cypress
const myObj = {
  ...student,
  getKeys: function () {
    return getKeys(this);
  }
};

// Example Test Cases
console.log(myObj.getKeys()); // Output: ["name", "age", "city"]

const singleProperty = {
  hobby: "Reading",
  getKeys: function () {
    return getKeys(this);
  }
};
console.log(singleProperty.getKeys()); // Output: ["hobby"]

const emptyObject = {
  getKeys: function () {
    return getKeys(this);
  }
};
console.log(emptyObject.getKeys()); // Output: []
