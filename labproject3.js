var form = document.getElementById("my-form"); // Returns the DOM element form
var count = 0;

form.addEventListener('submit', (e) => { // this function will activate when submit event happens
    var first_name = document.getElementById("firstname").value;
    var mid_name = document.getElementById("middlename").value;
    var last_name = document.getElementById("lastname").value;

    var sex = document.getElementsByName("gender");
    var sugg = document.getElementById("suggestions").value;

    var gender = "";
    for(let i=0; i<sex.length; i++) {
        if(sex[i].checked) {
            gender = sex[i].value;
        }
    }
    

    var out = document.getElementById("msg");
if(count < 5){
    if(gender == "male") {
        if(mid_name == "") {
            out.innerHTML += `<h3>Mr. ${first_name} ${last_name} says</h3>
                        <p>${sugg}</p>`;
        } else {
            out.innerHTML += `<h3>Mr. ${first_name} ${mid_name} ${last_name} says</h3>
                        <p>${sugg}</p>`;
        }
    } else {

        if(mid_name == "") {
            out.innerHTML += `<h2>Ms. ${first_name} ${last_name} says</h2>
                        <p>${sugg}</p>`;
        } else {
            out.innerHTML += `<h2>Ms. ${first_name} ${mid_name} ${last_name} says</h2>
                        <p>${sugg}</p>`;
        }
    }
    count++;
}else{
    alert("MAX LIMIT");
}

   e.preventDefault(); // prevents the default action. In a form default action is to reload once it is submitted.
})