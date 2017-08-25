let x = new Promise((resolve) => {
  resolve(1);
}).then(() => {
  return new Promise((resolve) => {
    resolve(2);
  });
}).then(function(value) {
  console.log("Chained: " + value);
});

x.then(function(value) { 
  console.log("Resolved: " + value);
});