module.exports = function get(object, path) {
  if (typeof path !== 'string') {
    throw new Error("path must be a string");
  } else if(path.trim().length === 0) {
    throw new Error("path must be non-empty");
  } else if (typeof object !== 'object' && typeof object !== 'undefined') {
    throw new Error("object must be an object");
  }
  let isValid = false;
  let currentValue = object;
  try {
    // Iterate the path through the object
    path.split(/\./g).forEach((token) => {
      currentValue = currentValue[token];
    });
    // We finished iterating with no errors
    isValid = true;
  } catch (e) {
    // NO-OP
  }

  if (isValid === true) {
    return currentValue;
  } else {
    return null;
  }
};

