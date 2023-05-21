const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return oldestAge < personAge ? person : oldest;
    });
};

const getAge = function(yearOfBirth, yearOfDeath) {
    if(!yearOfDeath) {
        return new Date().getFullYear() - yearOfBirth;
    }
    return yearOfDeath - yearOfBirth;
};
// Do not edit below this line
module.exports = findTheOldest;
