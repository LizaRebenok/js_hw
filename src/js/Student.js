function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.age = new Date().getFullYear() - birthYear;

  this.currentLesson = 0;
  this.attendance = new Array(10);
  this.grades = new Array(10);
  this.attendanceIndex = 0;
  this.gradesIndex = 0;
}

Student.prototype.present = function () {
  if (this.currentLesson < 10) {
    this.attendance[this.currentLesson] = true;
    this.currentLesson++;
  } else {
    throw new Error('All attendance data is already recorded');
  }
};

Student.prototype.absent = function () {
  if (this.currentLesson < 10) {
    this.attendance[this.currentLesson] = false;
    this.currentLesson++;
  } else {
    throw new Error('All attendance data is already recorded');
  }
};

Student.prototype.mark = function (grade) {
  if (typeof grade !== 'number') throw new Error('The grade should be a number.');

  const currentLessonIndex = this.currentLesson - 1;

  if (!this.attendance[currentLessonIndex]) {
    throw new Error('Unable to grade a missed lesson.');
  }

  if (grade >= 0 && grade <= 10) {
    this.grades[currentLessonIndex] = grade;
  } else {
    throw new Error('The grade is invalid.');
  }
};

Student.prototype._calcAverageMark = function () {
  if (this.grades.every((mark) => typeof mark !== 'number')) {
    return 'Unable to calculate grade point average due to lack of grades.';
  }

  let marksSum = 0;
  let marksCount = 0;

  this.grades.forEach((mark) => {
    if (mark !== undefined) {
      marksSum += mark;
      marksCount++;
    }
  });

  return marksCount > 0 ? marksSum / marksCount : 0;
};

Student.prototype._calcAverageAttendance = function () {
  if (typeof this.attendance[0] !== 'boolean') {
    return 'It is not possible to calculate average attendance due to lack of classes.';
  }

  const visitedLessonsCount = this.attendance.filter(Boolean).length;
  return visitedLessonsCount / this.currentLesson;
};

Student.prototype.summary = function () {
  return {
    averageMark: Number(this._calcAverageMark().toFixed(1)),
    averageAttendance: Number(this._calcAverageAttendance().toFixed(1)),
  };
};

export default Student;
