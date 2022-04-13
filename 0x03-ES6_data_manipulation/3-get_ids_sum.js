function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const reducer = (acc, item) => acc + item.id;

  const sum = students.reduce(reducer, 0);

  return sum;
}

export default getStudentIdsSum;
