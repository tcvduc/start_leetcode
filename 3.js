let flag = false;

for (let i = 1; i <= 10; ++i) {
  if (i === 6) {
    console.log("i = 6");
  }

  if (i === 5) {
    console.log("at i = 5");
    if (flag === false) {
      console.log("flag = false");
      flag = true;
      continue;
    }

    if (flag === true) {
      console.log("flag = true");
    }
  }
}
