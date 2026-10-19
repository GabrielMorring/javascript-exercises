const findTheOldest = function (array) {
  let year = new Date().getFullYear();
  return array.reduce((oldest, person) => {
    let oldestAge =
      ("yearOfDeath" in oldest ? oldest.yearOfDeath : year) -
      oldest.yearOfBirth;
    let personAge =
      ("yearOfDeath" in person ? person.yearOfDeath : year) -
      person.yearOfBirth;
    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
