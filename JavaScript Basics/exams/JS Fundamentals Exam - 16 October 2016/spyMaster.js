"use strict"
function solve(arrOfStrings) {
    let specialKey = arrOfStrings.shift();
    let messagePattern = "((?: |^)";
    for(let i = 0; i < specialKey.length; i++){
        messagePattern += "[" + specialKey[i].toLowerCase() + specialKey.toUpperCase() + "]";
    }

    messagePattern += "[ ]+)([!#$%A-Z]{8,})( |\\.|,|$)";
    let messageRegex = new RegExp(messagePattern,'g');


    for(let i = 0; i < arrOfStrings.length; i++){
        let line = arrOfStrings[i].replace(messageRegex,replacer);
        console.log(line);
    }


    function replacer(match,group1,group2,group3){
        group2 = group2.replace(/!/g,'1')
            .replace(/%/g, '2')
            .replace(/\#/g,'3')
            .replace(/\$/g,'4')
            .replace(/[A-Z]/g,x=>x.toLowerCase());
        return group1 + group2 + group3;
    }

}

let input = [
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'

]
solve(input)