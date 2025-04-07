import React, { useState } from 'react';
import bgImage from '../assets/images/backdrop.png';
import CollegeSelector from '../components/CollegeSelector';
import ProgramSelector from '../components/ProgramSelector';
import YearSelector from '../components/YearSelector';
import SemesterSelector from '../components/SemesterSelector';
import CoursesDisplay from '../components/CoursesDisplay';
import programsData from '../programsdata.json';

const Placeholder = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [grades, setGrades] = useState({});


  const maxElectives = 2;


  
  const handleCollegeChange = (e) => {
    const college = programsData.find((c) => c.college === e.target.value) || null; 
    setSelectedCollege(college);
    setSelectedProgram(null);
    setSelectedYear(null);
    setSelectedSemester(null);
  };

  const handleProgramChange = (e) => {
    const program = selectedCollege?.programs.find((p) => p.program === e.target.value) || null; 
    setSelectedProgram(program);
    setSelectedYear(null);
    setSelectedSemester(null);
  };

  const handleYearChange = (e) => {
    const year = selectedProgram?.years.find((y) => y.year === e.target.value) || null; 
    setSelectedYear(year);
    setSelectedSemester(null);
  };

  const handleSemesterChange = (e) => {
    const semester = selectedYear?.semesters.find((s) => s.semester === e.target.value) || null; 
    setSelectedSemester(semester);
  };

  const levelToNumber = (level) => parseInt(level.split(" ")[0]) || 0; 

  const getCoursesUpUntil = () => {
    let coursesBySemester = [];
    if (!selectedProgram || !selectedYear || !selectedSemester) return coursesBySemester;
    
    let stopAtYear = levelToNumber(selectedYear.year);
    let stopAtSemester = selectedSemester.semester;

    for (const year of selectedProgram.years) {
      if (levelToNumber(year.year) > stopAtYear) break;

      const YEAR = year.year;
      for (const semester of year.semesters) {
        const coursesWithSemester = semester.courses.map(course => ({
          ...course,
          semester: semester.semester,
          year: YEAR
        }));
        
        const electiveCoursesInSemester = semester.electives?.map(elective => ({
          ...elective,
          semester: semester.semester,
          year:YEAR
        })) || []; 

        coursesBySemester.push({
          year: YEAR,
          semester: semester.semester,
          courses: coursesWithSemester,
          electives: electiveCoursesInSemester,
          elective_number : semester.elective_number
        });

        if (levelToNumber(year.year) === stopAtYear && semester.semester === stopAtSemester) {
          break;
        }
      }
    }
    return coursesBySemester;
  };

  const semesters = getCoursesUpUntil();

  const handleGradeChange = (course, grade, isElective = false, semester) => {
    setGrades((prevGrades) => {
      const newGrades = { ...prevGrades, [course]: grade };
  
      if (isElective) {
        const currentSemester = semesters.find((sem) => sem.semester === semester);
        const maxElectives = currentSemester.elective_number || 2; 
  
        const electivesInCurrentSemester = currentSemester.electives;
  
        const gradedElectivesCount = electivesInCurrentSemester.filter(
          (elective) => newGrades[elective.courseName] !== ''
        ).length;
  
        if (gradedElectivesCount > maxElectives) {
          alert(`You can only assign grades to up to ${maxElectives} electives in this semester.`);
          return prevGrades;  
        }
      }
  
      return newGrades;
    });
  };
  
  

  const calculateGPA = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;
    const semesters = getCoursesUpUntil();
    
    semesters.forEach(({ courses, electives }) => {
      courses.forEach((course) => {
        const grade = grades[course.courseName];
        let gradePoints = { 'A': 5, 'B': 4, 'C': 3, 'D': 2, 'F': 0 }[grade] || 0; 
        totalGradePoints += gradePoints * course.credits;
        totalCredits += course.credits;
      });

      electives
      .filter((elective) => grades[elective.courseName])
      .forEach((elective) =>{
        const grade = grades[elective.courseName];
        let gradePoints = { 'A': 5, 'B': 4, 'C': 3, 'D': 2, 'F': 0 }[grade] || 0; 
        totalGradePoints += gradePoints * elective.credits;
        totalCredits += elective.credits;
      });
    });

    return totalCredits > 0 ? parseFloat((totalGradePoints / totalCredits).toFixed(2)) : 0; 
  };

  const determineClass = () => {
    const gpa = calculateGPA();
    if (gpa >= 4.50) return "First Class";
    if (gpa >= 3.50) return "Second Class Upper";
    if (gpa >= 2.40) return "Second Class Lower";
    return "Third Class";
  };
  
  return (
    <div>
      <div className= "bg-gray-900 rounded-lg p-6 mt-5 items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4 rounded-lg">
          <div className = "rounded-lg shadow-md p-6">
            <CollegeSelector programsData={programsData} handleCollegeChange={handleCollegeChange} />
            {selectedCollege && (
              <div>
                <ProgramSelector selectedCollege={selectedCollege} handleProgramChange={handleProgramChange} />
                {selectedProgram && (
                  <div>
                    <YearSelector selectedProgram={selectedProgram} handleYearChange={handleYearChange} />
                    {selectedYear && (
                      <div className = "items-center md:items stretch">
                        <SemesterSelector selectedYear={selectedYear} handleSemesterChange={handleSemesterChange} />
                        {selectedSemester && (
                          <CoursesDisplay
                            getCoursesUpUntil={getCoursesUpUntil}
                            handleGradeChange={handleGradeChange}
                            calculateGPA={calculateGPA}
                            determineClass={determineClass}
                            grades={grades}
                          />
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;