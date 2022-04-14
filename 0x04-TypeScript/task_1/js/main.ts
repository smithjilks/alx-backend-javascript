interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	location: string;
	yearsOfExperience?: number;
	[propName: string]: any;
};


interface Directors extends Teacher {
	numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string =>`${firstName.charAt(0)}. ${lastName}`;


interface StudentConstructor {
  new (firstName: string, lastName: string): Student
}


interface Student {
  firstName: string
  lastName: string
  displayName(): string
  workOnHomework(): string
}


export const StudentClass: StudentConstructor = class StudentClass
  implements Student
{
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  workOnHomework() {
    return "Currently working"
  }

  displayName() {
    return this.firstName
  }
}
