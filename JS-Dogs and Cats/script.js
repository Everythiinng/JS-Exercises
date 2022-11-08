// data 1 : julias [3,5,2,12,7] kates [4,1,15,8,3]
// data 2 : julias [9,16,6,8,3] kates [10,5,6,1,4]

const juliasArr = [3, 5, 2, 12, 7];
const juliasArr1 = [9, 16, 6, 8, 3];

const katesArr = [4, 1, 15, 8, 3];
const katesArr1 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKates) {
  const dogs = dogsJulia.slice(1, 3).concat(dogsKates);

  dogs.forEach(function (dog, i) {
    console.log(
      `Dog number ${i + 1} is ${dog > 3 ? `an adult , and is ${dog} years old.` : " still a puppy"}`
    );
  });
};

checkDogs(juliasArr, katesArr);
checkDogs(juliasArr1, katesArr1);
