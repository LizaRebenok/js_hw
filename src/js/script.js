import Student from './Student.js';

const student = new Student('Lisa', 'Rebenok', 2001);
student.present();
student.present();
student.absent();
student.present();
student.mark(4);
student.present();
student.present();
student.mark(8);
student.present();
student.absent();
student.absent();
student.present();
student.mark(7);

console.log(student);
console.log(student.summary());
