const calculateGrade=()=>{
    let sub1 = parseInt(document.getElementById("eng_input").value);
    let sub2 = parseInt(document.getElementById("math_input").value);
    let sub3 = parseInt(document.getElementById("phy_input").value);
    let sub4 = parseInt(document.getElementById("chem_input").value);
    let sub5 = parseInt(document.getElementById("comp_input").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter a valid number");
    }
    else{
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total_output").innerHTML = `Total marks: ${total}`
    }
}

const getAverage=()=>{
    let sub1 = parseInt(document.getElementById("eng_input").value);
    let sub2 = parseInt(document.getElementById("math_input").value);
    let sub3 = parseInt(document.getElementById("phy_input").value);
    let sub4 = parseInt(document.getElementById("chem_input").value);
    let sub5 = parseInt(document.getElementById("comp_input").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter a valid number");
    }
    else{
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        let avg = total/5;
        document.getElementById("avg_output").innerHTML = `Your Total average is: ${avg}%`
    }
}

const getGrade=()=>{
    let sub1 = parseInt(document.getElementById("eng_input").value);
    let sub2 = parseInt(document.getElementById("math_input").value);
    let sub3 = parseInt(document.getElementById("phy_input").value);
    let sub4 = parseInt(document.getElementById("chem_input").value);
    let sub5 = parseInt(document.getElementById("comp_input").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter a valid number");
    }
    else{
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        let avg = total/5;

        if(avg >= 90 && avg <= 100){
            document.getElementById("grade_output").innerHTML = `You got A grade`;
        }
        else if(avg >= 80 && avg <= 89){
            document.getElementById("grade_output").innerHTML = `You got B grade`;

        }
        else if(avg >= 70 && avg <= 79){
            document.getElementById("grade_output").innerHTML = `You got C grade`;

        }
        
        else{
            document.getElementById("grade_output").innerHTML = `You got F grade`;

        }
    }

}

document.getElementById("calculate_btn").addEventListener("click",(()=>{
    calculateGrade();
    getAverage();
    getGrade();
}))