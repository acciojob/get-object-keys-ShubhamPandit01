// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Example Test Cases
console.log(getKeys(student)); // Output: ["name"]

// Additional Test Cases
const studentWithMoreProps = {
  name: "John",
  age: 20,
  city: "New York"
};
console.log(getKeys(studentWithMoreProps)); // Output: ["name", "age", "city"]

const emptyObject = {};
console.log(getKeys(emptyObject)); // Output: []

const singleProperty = { hobby: "Reading" };
console.log(getKeys(singleProperty)); // Output: ["hobby"]
