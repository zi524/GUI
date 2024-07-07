document.addEventListener('DOMContentLoaded', function() {
    
    let student = {
        student_name: "",
        student_age: 0
    };        
    let students = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Michael Johnson', age: 21 }
    ];

    const form = document.getElementById("create-student-form");
    const submitButton=document.getElementById("submit")
    const studentsList = document.getElementById('students-list');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents form submission
        student.student_name= document.getElementById("student-name").value;
        student.student_age = document.getElementById("student-age").value;
        // Check if submit button was clicked
        if (event.submitter === submitButton) {
            saver();
            get_out();
        } else {
            console.log('Form submitted via other means.');
        }
    }); 
    
    function saver(){
        let stepn={
            id:students.length+1,
            name:student.student_name,
            age:student.student_age
        };
        students.push(stepn);
        console.log('we add ${stepn.name} with ${stepn.age} years and id = ${stepn.id}');
        displayAllStudents();
    }

    function get_out(){
    console.log(`Student Name: ${student.student_name}`);
    console.log(`Student Age: ${student.student_age}`);
    students.forEach(student => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`);
    
});}  
//call table using chatgpt    
            function displayAllStudents() {
                studentsList.innerHTML = ''; // Clear previous content
                students.forEach(student => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.age}</td>
                    `;
                    studentsList.appendChild(row);
                });
            }

            // Call the displayAllStudents function when DOM content is loaded
            displayAllStudents();
        });
    