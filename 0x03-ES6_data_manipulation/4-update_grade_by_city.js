function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }

  const filteredCity = students.filter((student) => student.location === city);

  const gradedStudents = filteredCity.map((student) => {
    const filteredGrade = newGrades.filter(
      (newGrade) => newGrade.studentId === student.id,
    );

    let grade;

    if (filteredGrade[0]) {
      grade = filteredGrade[0].grade;
    } else {
      grade = 'N/A';
    }

    return {
      ...student,
      grade,
    };
  });

  return gradedStudents;
}

export default updateStudentGradeByCity;
