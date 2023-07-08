//              Parent Class: School
//                      name: string;
//                      level: 'primary' | 'middle' | 'high'
//                      numberOfStudents: number;
//                      getters: all properties have
//                      setters: numberOfStudents
//                      methods: .quickFacts,
//                                pickSubstitueTeacher(static)

//              extends Primary
//                      pickupPolicy: string;

//              extends Middle

//              extends High
//              sportsTeams: string[]

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(num) {
    if (typeof num !== "number") {
      console.log("Invalid input: numberOfStudents has to be a Number");
    } else {
      this._numberOfstudents = num;
    }
  }

  quickFacts () {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
  static pickSubstituteTeacher (substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length - 1))]
  }
}

class PrimarySchool extends School {
  constructor (name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents );

      this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy () {
    return this._pickupPolicy
  }
}

class HighSchool extends School {
  constructor (name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams () {
    console.log(this._sportsTeams);
  }
}

const elementary = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

elementary.quickFacts()
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

const highschool = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])



highschool.sportsTeams

class SchoolCatalog {
  constructor() {
    this._schools = [];
  }

  addSchool(school) {
    this._schools.push(school);
  }

  get schools() {
    return this._schools;
  }
}