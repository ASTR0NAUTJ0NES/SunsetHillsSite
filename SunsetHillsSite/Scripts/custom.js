// Custom JS

document.getElementById("submitBtn").addEventListener("click", function () {
    let inputArr = [parseInt(document.getElementById("input1").value),
        parseInt(document.getElementById("input2").value),
        parseInt(document.getElementById("input3").value),
        parseInt(document.getElementById("input4").value),
        parseInt(document.getElementById("input5").value)];

    let outputArr = ["sunny"];

    for (let loop = 1; loop < inputArr.length; loop++) {
        let taller = false;

        for (let innerLoop = 0; innerLoop < loop; innerLoop++) {
            if (inputArr[innerLoop] >= inputArr[loop]) {
                taller = true;
                break;
            } else {
                continue;
            }
        }
        if (taller) {
            outputArr.push("shady");
        } else {
            outputArr.push("sunny");
        }

        document.getElementById("resultSpan").innerHTML = `${outputArr.length} building(s) are touched by the sun. The building(s) in order that can see the sun are: ${outputArr.join(", ")}`;
    }

    //for (let loop = 0; loop < outputArr.length; loop++) {
    //    if (outputArr[loop] === "sunny") {
    //        document.getElementById(`building ${loop} Img`).classList.remove("building-hide");
    //    }
    //}
});
