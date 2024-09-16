class Course {
  constructor(ctitle, clength, cprice) {
    this.title = ctitle;
    this.course_length = clength;
    this._price = cprice;
  }

  calculate() {
    return this.course_length / this._price;
  }

  showSummary() {
    console.log(`Title: ${this.title}, Length: ${this.course_length}, Price: ${this.cprice}`);
  }
}

class PracticalCourse extends Course {
  constructor(ctitle, clength, cprice, exerciseCount) {
    super(ctitle, clength, cprice);
    this.numOfExercise = exerciseCount;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('Print something');
  }
}

const course1 = new Course('HTML', 40, 100);
const course2 = new Course('JAVASCRIPT', 60, 200);

const practicalCourse = new PracticalCourse('REACT', 80, 300, 20);

const theoreticalCourse = new TheoreticalCourse('NEXTJS', 100, -499);

console.log(course1);
console.log(course2);

console.log(practicalCourse);
console.log(theoreticalCourse);

console.log(course1.calculate());
console.log(course2.calculate());

course1.showSummary();
course2.showSummary();
practicalCourse.showSummary();
theoreticalCourse.showSummary();
theoreticalCourse.publish();

theoreticalCourse._price = 2;
theoreticalCourse.showSummary();



