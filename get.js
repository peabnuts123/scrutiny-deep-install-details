// This function is dumb, and will just return `null` if you try too hard
module.exports = function get(object, path) {
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

