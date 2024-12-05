const dogs = [
    { weight: 10, curFood: 70, owners: ['Nessrine', 'Sarah'] },
    { weight: 16, curFood: 50, owners: ['Hamdi'] },
    { weight: 26, curFood: 300, owners: ['Sana', 'Sami'] },
    { weight: 5, curFood: 30, owners: ['Mohamed'] },
  ];
  
  // 1
  dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
  
  // 2
  const dogNess = dogs.find(dog => dog.owners.includes('Nessrine'));
  console.log(dogNess);
  console.log(
    ` Nessrine's dog is eating too ${
        dogNess.curFood > dogNess.recFood ? 'much' : 'little'
    } `
  );
  
  // 3
  const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);

  console.log(" owners of dogs who eat too much :",ownersEatTooMuch);
  
  const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
  console.log(" owners of dogs who eat too little :",ownersEatTooLittle);
  
  // 4

  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // 5
  console.log("eating exactly :",dogs.some(dog => dog.curFood === dog.recFood));
  
  // 6
  const checkEating = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
  
  console.log("any dog eating an okay amount of food :",dogs.some(checkEating));
  
  // 7
  const dogsEatingOk= dogs.filter(checkEating);
  console.log("eating ok dogs array ",dogsEatingOk);
  
  // 8
  const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
  console.log("dogs sorted array :",dogsSorted);
