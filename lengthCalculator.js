function Calculate_Length() {
    let s1 = document.getElementById("s1").value;
    console.log(s1);
    let s2 = document.getElementById("s2").value;
    console.log(s2);
    let s3 = document.getElementById("s3").value;
    console.log(s3);
    let largest ='';
    if (s1.length > s2.length && s1.length > s3.length) {
        largest += s1;
    }
    else if (s2.length > s3.length && s2.length > s1.length) {
        largest += s2;
    }

    else {
        largest += s3;

    }
    console.log(largest);
    document.getElementById("solution").innerHTML = largest;

}