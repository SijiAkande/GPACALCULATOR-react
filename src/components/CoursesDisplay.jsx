import React from 'react';

const CoursesDisplay = ({
  getCoursesUpUntil,
  handleGradeChange,
  calculateGPA,
  grades,
  determineClass,
}) => {
  const getGradePoints = (grade) => {
    switch (grade) {
      case 'A': return 5;
      case 'B': return 4;
      case 'C': return 3;
      case 'D': return 2;
      case 'F': return 0;
      default: return 0;
    }
  };

  const calculateSemesterGPA = (courses, electives) => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const grade = grades[course.courseName] || 'F';
      const gradePoints = getGradePoints(grade);
      totalGradePoints += gradePoints * course.credits;
      totalCredits += course.credits;
    });

    electives
      .filter((elective) => grades[elective.courseName])
      .forEach((elective) => {
        const grade = grades[elective.courseName] || 'F';
        const gradePoints = getGradePoints(grade);
        totalGradePoints += gradePoints * elective.credits;
        totalCredits += elective.credits;
      });

    return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : '0.00';
  };

  const showElectives = electives => electives.length > 0;

  const validGrades = ['A', 'B', 'C', 'D', 'F'];

  const countGradedElectives = (electives, grades, semester) => {
    return electives.filter(
      (elective) =>
        elective.semester === semester &&
        validGrades.includes(grades[elective.courseName])
    ).length;
  };

  const semesters = getCoursesUpUntil();

  return (
    <div>
      <section className="items-center rounded-lg py-20 text-blue-200">
        <h3 className="text-center text-blue-200 lg:text-2xl md:text-3xl sm:text-4xl font-bold">
          Course List
        </h3>

        {semesters.map(({ year, semester, courses, electives, elective_number }) => (

          <div className="text-center mt-4" key={`${year}-${semester}`}>
            <h4 className="text-xl font-bold mt-4">{`${year} - ${semester}`}</h4>

            {courses.map((course) => (
              <div key={course.courseName} className="mt-4">
                <label className="mt-4 flex flex-col">
                  {course.courseName} ({course.credits} units):
                </label>
                  <select
                    value={grades[course.courseName] || ''}
                    onChange={(e) => handleGradeChange(course.courseName, e.target.value, false)}
                    className="group border border-gray-300 bg-gray-100 text-gray-700 text-lg px-3 py-1 rounded"
                  >
                    <option value=''>Select Grade</option>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                    <option value='F'>F</option>
                  </select>
              </div>
            ))}

            {showElectives(electives) && (
              <>
                <h3 className="mt-4 font-semibold">Electives for {semester}</h3>
                <h3 className="mt-4 font-semibold">Provide Grades for {elective_number} electives</h3>
                {electives.map((elective) => {
                  const gradedElectivesCount = countGradedElectives(electives, grades, semester);
                  return (
                    <div key={elective.courseName} className="mt-4">
                      <label className="mt-4 flex flex-col">
                        {elective.courseName} ({elective.credits} units):
                      </label>
                        <select
                          value={grades[elective.courseName] || ''}
                          onChange={(e) =>
                            handleGradeChange(elective.courseName, e.target.value, true, semester)
                          }
                          className="group border border-gray-300 bg-gray-100 text-gray-700 text-lg px-3 py-1 rounded"
                          disabled={
                            gradedElectivesCount >= elective_number &&
                            !grades[elective.courseName]
                          }
                        >
                          <option value=''>Select Grade</option>
                          <option value='A'>A</option>
                          <option value='B'>B</option>
                          <option value='C'>C</option>
                          <option value='D'>D</option>
                          <option value='F'>F</option>
                        </select>
                    </div>
                  );
                })}
              </>
            )}

            <h4 className="mt-2 text-lg font-bold">
              GPA: {calculateSemesterGPA(courses, electives)}
            </h4>
          </div>
        ))}

        <h3 className="mt-4 text-xl font-bold">CGPA: {calculateGPA()}</h3>
        <h3 className="text-lg font-semibold">Current Class: {determineClass()}</h3>
      </section>
    </div>
  );
};

export default CoursesDisplay;
