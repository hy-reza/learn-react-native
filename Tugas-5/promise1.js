//Soal 1
const myCountPromise = (input) => {
  return new Promise((resolve, reject) => {
      if (input !== undefined) {
          setTimeout(() => {
              resolve(input * 2);
          }, 2000);
      } else {
          reject("Maaf tidak ada nilai dalam parameter");
      }
  });
};

myCountPromise(2)
  .then((result) => {
      console.log(result);  // Output should be 4
  })
  .catch((error) => {
      console.log(error);
  });

//Soal 2

async function executeAll() {
    try {
        let books1 = await filterBooksPromise(true, 40);
        console.log(books1);
    } catch (error) {
        console.log(error);
    }

    try {
        let books2 = await filterBooksPromise(false, 250);
        console.log(books2);
    } catch (error) {
        console.log(error);
    }

    try {
        let books3 = await filterBooksPromise(true, 30);
        console.log(books3);
    } catch (error) {
        console.log(error);
    }
}

executeAll();
