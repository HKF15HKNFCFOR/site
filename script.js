function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let length=getRndInteger(2106, 10207);
        let rs = "";
        while (rs.length < length) {
            rs += String.fromCharCode(getRndInteger(192,255));
        }
document.getElementById("outing").innerHTML = rs;
document.getElementById("length").innerHTML = "Code length: " + length;
