//C to f
function cal(){
    let c = parseInt(document.getElementById('cellc').value);
    let f = (c * 9/5) + 32;
    document.getElementById('calculate').innerHTML ="C = " + f + "°F"   
}
//f to C
function calOppsite(){
    let f = parseInt(document.getElementById('ferren').value);
    let c = (f - 32) * 5/9;
    document.getElementById('calculate2').innerHTML ="F =" + c.toFixed(1) + "°C"   
}