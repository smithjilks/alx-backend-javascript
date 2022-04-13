function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const filtered = students.filter((item) => item.location === city);

  return filtered;
}

export default getStudentsByLocation;
