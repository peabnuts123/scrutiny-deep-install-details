export default function get(object: any, path: string) {
  if (path.trim().length === 0) {
    throw new Error("path must be non-empty");
  } else if (typeof object !== 'object' && typeof object !== 'undefined') {
    throw new Error("object must be an object");
  }

  let isValid;
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
    isValid = false;
  }

  if (isValid === true) {
    return currentValue;
  } else {
    return null;
  }
}

