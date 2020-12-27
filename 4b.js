const fs = require('fs');

fs.readFile('./inputs/4.txt', (err,data) => {
   console.log(checkAllPassports(data.toString()))
})


function checkAllPassports(input){
    let organizedInput = input.split("\r\n\r\n")
    // console.log('length: ',organizedInput.length)\
    // console.log('length: ', organizedInput.length)
    let count = 0;

    for (let i = 0; i < organizedInput.length; i++){
        if(checkOnePassport(organizedInput[i])){
            count++
        }
    }
    return count
}

function checkOnePassport(passport){

    console.log(passport)
    let byr = passport.match('byr:')
    let iyr = passport.match('iyr:')
    let eyr = passport.match('eyr')
    let hgt = passport.match('hgt:')
    let hcl = passport.match('hcl:')
    let ecl = passport.match('ecl:')
    let pid = passport.match('pid:')
    if(byr && iyr && hgt && hcl && ecl && pid &&eyr){
           
        } else {
            return false
        }
    let byrValue = passport.match(/(?<=byr:)\d{4}/gmi)[0];
    let iyrValue = passport.match(/(?<=iyr:)\d{4}/gmi)[0];
    let eyrValue = passport.match(/(?<=eyr:)\d{4}/gmi)[0];
    let hgtValue = passport.match(/(?<=hgt:)\d{2,3}(in|cm)/);
    let hclValue = passport.match(/(?<=hcl:)#\w{6}/);
    let eclValue = passport.match(/(?<=ecl:)(amb|blu|brn|gry|grn|hzl|oth)/);
    let pidValue = passport.match(/(?<=pid:)\d{9}\s/);

// next 4 if statements check to see if there is a value, and if there is give the new value value[0]

    if(!hgtValue ){
        hgtValue = null
    } else {
        hgtValue = hgtValue[0]
    }

    
    // console.log('hclValue: ', hclValue)
    if(!hclValue ){
        hclValue = null
    } else {
        hclValue = hclValue[0]
    }

    
    if(!eclValue ){
        eclValue = null
    } else {
        eclValue = eclValue[0]
    }
    

    if(!pidValue ){
        pidValue = null
    } else {
        pidValue = pidValue[0]
    }

    let validByr = (1920<=byrValue && 2002>=byrValue)
    let validIyr = (2010<=iyrValue && 2020>=iyrValue)
    let validEyr = (2020<=eyrValue && 2030>=eyrValue)
    
    if(hgtValue){
        let cmRegex = new RegExp(/cm/);
        let inRegex = new RegExp(/in/);
        if(cmRegex.test(hgtValue)){
         
            let heightNumber = hgtValue.match(/(?<=cm)\d{3}/)
            if(150<= heightNumber <=193){
                var validHgt = true;
            } else {
                var validHgt = false;
            }
        }
        else if(inRegex.test(hgtValue)){
            let heightNumber = hgtValue.match(/(?<=cm)\d{2}/)
            if(59<= heightNumber <=76){
                var validHgt = true;
            } else {
                var validHgt= false;
            }
        } 
    
    } else {
        var validHgt= false
    }
    if(validByr && validEyr && validIyr && validHgt && hclValue && eclValue && pidValue){
        var isValid = true;
    }else {
        isValid = false
    }
   
    // var testObject = {
    //     validByr, 
    //     validEyr,
    //     validIyr,
    //     validHgt,
    //     hclValue,
    //     eclValue,
    //     pidValue
    // }
    console.log(testObject)
    console.log('is valid: ',isValid)
    return isValid
}

