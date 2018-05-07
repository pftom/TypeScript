// async function foo() {
//   try {
//     // Any async code
//     var val = await getMeAPromise();
//     console.log(val);
//   } catch (err) {
//     console.log('Error:', err.message);
//   }
// }

function delay(milliseconds: number, count: number): Promise<number> {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(count);
    }, milliseconds);
  });
}

async function dramaticWelcome(): Promise<void> {
  console.log('Hello');

  for (let i = 0; i < 5; i++) {
    const count: number = await delay(500, i);
    console.log(count);
  }

  console.log('World2');
}

dramaticWelcome();