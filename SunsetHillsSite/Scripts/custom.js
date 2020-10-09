// Custom JS

document.getElementById("submitBtn").addEventListener("click", function () {
    let inputArr = [parseInt(document.getElementById("input1").value),
        parseInt(document.getElementById("input2").value),
        parseInt(document.getElementById("input3").value),
        parseInt(document.getElementById("input4").value),
        parseInt(document.getElementById("input5").value)];

    let outputArr = [];
    let sunnyBuildings = 1;
    let currentTallest = inputArr[0];
    outputArr.push(currentTallest);

    for (let loop = 0; loop < inputArr.length; loop++) {
        if (inputArr[loop] > currentTallest) {
            sunnyBuildings++;
            outputArr += inputArr[loop];
            currentTallest = inputArr[loop];
            document.getElementById("building" + outputArr[loop] + "Img").style.visibility = "visible";
        }
        document.getElementById("resultSpan").innerHTML = `${sunnyBuildings} buildings have sun cover. <br /> The buildings that have sun cover are: ${outputArr.join("")}.`;
    }
});
