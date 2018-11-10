function singleStudent (student) {
  return ` 
    <div style= "${attendanceColor(student.isPresent)}; border: 1px solid #000; width: 180px; height: 70px;">
        <h3 style= "text-align: center;">${student.name}</h4>
        <h5 style= "font-weight: bold; text-align: center;">${attendance(student.isPresent)}</h5>
    </div>
    `
}

function attendance (value) {
  if (value === true) {
    return 'Present'
  } else if (value === false) {
    return 'Absent'
  }
}

function attendanceColor (value) {
  if (value === true) {
    return 'background-color: #99FF66'
  } else if (value === false) {
    return 'background-color: #CC3333'
  }
}

function renderStudents (students) { 
  return students.map(singleStudent).join('<br>')
}

/* <code>${JSON.stringify(students)}</code> LOOK THIS UP TO KNOW HOW IT WORKS */
function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = `<div style = 'border: 1px solid #000'><h1 style = 'text-align: center;'>Roll Call!</h1></div>` + renderStudents(studentsAbstraction);
}