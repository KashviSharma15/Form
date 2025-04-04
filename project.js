
console.log(document.head.childNodes[0]);
function submitProjectDetails() {
    let PName = document.getElementById("PName").value
    let assigned = document.getElementById("assigned").value
    let st_date = document.getElementById("st_date").value
    let end_date = document.getElementById("end_date").value
    let Priority = document.querySelector('input[name="priority"]').value
    let Description = document.getElementById("description").value
    if (PName.value.trim() === "null") {
        alert('Invalid Project Name');
    }    
}
let sub = document.querySelector("#sub");
sub.onclick = () => {
    submitProjectDetails();
}
let n = ()=>{
    window.close();
}
