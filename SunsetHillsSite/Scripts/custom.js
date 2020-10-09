//// Custom JS

document.getElementById("submitBtn").addEventListener("click", function () {
    let buildingArray = [parseInt(document.getElementById("input1").value),
    parseInt(document.getElementById("input2").value),
    parseInt(document.getElementById("input3").value),
    parseInt(document.getElementById("input4").value),
    parseInt(document.getElementById("input5").value)];

    let currentTallest = buildingArray[0];
    var count = 1;
    let outputArr = [1]
    for (let loop = 1; loop < buildingArray.length; loop++) {

        if (buildingArray[loop] > currentTallest) {
            // removing visibility: hidden from building images
            //document.getElementById(`building ${count} Img`)
            //.classList.remove("building-hide");

            count++;
            outputArr.push(loop + 1);
            currentTallest = buildingArray[loop];
        }
    }
    document.getElementById("resultSpan").innerHTML =
        `${count} building(s) have sun cover. Building(s) ${outputArr} can see the sunset.`;
});
