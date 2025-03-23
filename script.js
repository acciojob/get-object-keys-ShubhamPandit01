// Create the student object
const student = {
  name: "John",
  getKeys: function () {
    return Object.keys(this);
  }
};

// Example Test Cases
console.log(student.getKeys()); // Output: ["name"]

const studentWithMoreProps = {
  name: "John",
  age: 20,
  city: "New York",
  getKeys: function () {
    return Object.keys(this);
  }
};
console.log(studentWithMoreProps.getKeys()); // Output: ["name", "age", "city"]

const emptyObject = {
  getKeys: function () {
    return Object.keys(this);
  }
};
console.log(emptyObject.getKeys()); // Output: []

const singleProperty = {
  hobby: "Reading",
  getKeys: function () {
    return Object.keys(this);
  }
};
console.log(singleProperty.getKeys()); // Output: ["hobby"]
