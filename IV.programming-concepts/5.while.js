console.log("Onboard While");

const object = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

let nextLoop = object;

function f1() {
  while (true) {
    if (nextLoop !== null) {
      const value = nextLoop.value;
      console.log(value);
      console.log(nextLoop);
      nextLoop = nextLoop.next;
    }

    break;
  }
}

function f2() {
  while (nextLoop !== null) {
    const value = nextLoop.value;
    console.log(value);
    nextLoop = nextLoop.next;
  }
}

{
  //   f1();
  f2();
}
