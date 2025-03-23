// Create the student object with a getKeys method
const myObj = {
  name: "John",
  age: 20,
  city: "New York",
  getKeys: function () {
    return Object.keys(this);
  }
};

// Example Test Cases
console.log(myObj.getKeys()); // Output: ["name", "age", "city"]

// Single property test
const singleProperty = {
  hobby: "Reading",
  getKeys: function () {
    return Object.keys(this);
  }
};
console.log(singleProperty.getKeys()); // Output: ["hobby"]

// Empty object test
const emptyObject = {
  getKeys: function () {
    return Object.keys(this);
  }
};
console.log(emptyObject.getKeys()); // Output: []
