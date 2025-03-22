// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
const myObj = {
  getKeys: function(obj) {
    return Object.keys(obj);
  }
};

// Example Test Cases
console.log(myObj.getKeys(student)); // Output: ["name"]

// Additional Test Cases
const studentWithMoreProps = {
  name: "John",
  age: 20,
  city: "New York"
};
console.log(myObj.getKeys(studentWithMoreProps)); // Output: ["name", "age", "city"]

const emptyObject = {};
console.log(myObj.getKeys(emptyObject)); // Output: []

const singleProperty = { hobby: "Reading" };
console.log(myObj.getKeys(singleProperty)); // Output: ["hobby"]
