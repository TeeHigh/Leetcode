var myNumber = 112;
function convert(num) {
    var units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var hunds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var thous = ["", "M", "MM", "MMM"];
    if (num >= 1 && num < 4000) {
        return (thous[Math.floor(num / 1000)] + hunds[(Math.floor(num / 100) % 10)] + tens[(Math.floor(num / 10) % 10)] + units[Math.floor(num % 10)]);
    }
    else {
        return "Number is out of range";
    }
}
console.log(convert(myNumber));
