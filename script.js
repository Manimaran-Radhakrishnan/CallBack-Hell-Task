function ten(callback) {
  change("10");
  setTimeout(callback, 1000);
}
function nine(callback) {
 change("9");
  setTimeout(callback, 1000);
}
function eight(callback) {
  change("8");
  setTimeout(callback, 1000);
}
function seven(callback) {
  change("7");
  setTimeout(callback, 1000);
}
function six(callback) {
  change("6");
  setTimeout(callback, 1000);
}
function five(callback) {
  change("5");
  setTimeout(callback, 1000);
}
function four(callback) {
  change("4");
  setTimeout(callback, 1000);
}
function three(callback) {
  change("3");
  setTimeout(callback, 1000);
}
function two(callback) {
  change("2");
  setTimeout(callback, 1000);
}
function one(callback) {
  change("1");
  setTimeout(callback, 1000);
}
function display(callback) {
  change("✌️HAPPY INDEPENDENCE DAY✌️🫡");
  setTimeout(callback, 1000);
}

function change(value) {
  const wish = document.getElementById("wish");
  wish.innerText = value;
}

ten(() => {
  nine(() => {
    eight(() => {
      seven(() => {
        six(() => {
          five(() => {
            four(() => {
              three(() => {
                two(() => {
                  one(() => {
                    display();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
