function closeWindow() {
    window.location.href = '/'
}

function goToIndex() {
    window.location.href = 'registration'
}

function validate(id, name, qualification, salary) {
    const id_e = document.getElementById("id_error");
    const name_e = document.getElementById("name_error");
    const qualification_e = document.getElementById("qualification_error");
    const salary_e = document.getElementById("salary_error");

    const id_field = document.getElementById("employee_id");
    const name_field = document.getElementById("name");
    const qualification_field = document.getElementById("qualification");
    const salary_field = document.getElementById("salary");

    let valid = true
    //id
    if (id === '') {
        id_e.innerHTML = "Enter Employee ID"
        id_field.style.border = "1.5px solid red";
        id_field.style.backgroundColor = "rgb(255, 227, 227)"
        valid = false
    }
    else if (id.length < 3) {
        id_e.innerHTML = "Length should be atleast 3 characters"
        id_field.style.border = "1.5px solid red";
        id_field.style.backgroundColor = "rgb(255, 227, 227)"
        valid = false
    }
    else {
        id_e.innerHTML = ''
        id_field.style.border = "none";
        id_field.style.backgroundColor = "white"
    }

    //name
    if (name === '') {
        name_e.innerHTML = "Enter Employee Name"
        name_field.style.border = "1.5px solid red";
        name_field.style.backgroundColor = "rgb(255, 227, 227)"
        valid = false
    }
    else if (name.length < 3) {
        name_e.innerHTML = "Length should be atleast 3 characters"
        name_field.style.border = "1.5px solid red";
        name_field.style.backgroundColor = "rgb(255, 227, 227)"
        valid = false
    }
    else if (/\d/.test(name)) {
        name_e.innerHTML = "No numbers allowed in name"
        name_field.style.border = "1.5px solid red";
        name_field.style.backgroundColor = "rgb(255, 227, 227)"
        valid = false
    }
    else {
        name_e.innerHTML = ''
        name_field.style.border = "none";
        name_field.style.backgroundColor = "white"
    }

    //qualification
    if (qualification === '') {
        qualification_e.innerHTML = "Enter Qualification"
        qualification_field.style.border = "1.5px solid red";
        qualification_field.style.backgroundColor = "rgb(255, 227, 227)"
        valid = false
    }
    else if (qualification.length < 3) {
        qualification_e.innerHTML = "Length should be atleast 3 characters"
        qualification_field.style.border = "1.5px solid red";
        qualification_field.style.backgroundColor = "rgb(255, 227, 227)"
        valid = false
    }
    else if (/\d/.test(qualification)) {
        qualification_e.innerHTML = "No numbers allowed in qualification"
        qualification_field.style.border = "1.5px solid red";
        qualification_field.style.backgroundColor = "rgb(255, 227, 227)"
        valid = false
    }
    else {
        qualification_e.innerHTML = ''
        qualification_field.style.border = "none";
        qualification_field.style.backgroundColor = "white"
    }

    //salary
    if (salary === '') {
        salary_e.innerHTML = "Enter Salary"
        salary_field.style.border = "1.5px solid red";
        salary_field.style.backgroundColor = "rgb(255, 227, 227)"
        valid = false
    }

    else {
        salary_e.innerHTML = ''
        salary_field.style.border = "none";
        salary_field.style.backgroundColor = "white"
    }

    return valid
}


function submitForm() {
    console.log("CALLED")
    const id = document.getElementById("employee_id").value;
    const name = document.getElementById("name").value;
    const qualification = document.getElementById("qualification").value;
    const designation = document.getElementById("desg").value;
    const salary = document.getElementById("salary").value;

    console.log(id, name, qualification, designation, salary);
    return validate(id, name, qualification, salary);


}
