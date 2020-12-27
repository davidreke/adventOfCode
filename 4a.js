const fs = require('fs');

fs.readFile('./inputs/4.txt', (err,data) => {
   console.log(checkAllPassports(data.toString()))
})


function checkAllPassports(input){
    let organizedInput = input.split("\r\n\r\n")
    // console.log('length: ',organizedInput.length)\
    console.log('length: ', organizedInput.length)
    let count = 0;

    for (let i = 0; i < organizedInput.length; i++){
        if(checkOnePassport(organizedInput[i])){
            count++
        }
    }
    return count
}

function checkOnePassport(passport){
    let byr = passport.match('byr:')
    let iyr = passport.match('iyr:')
    let eyr = passport.match('eyr')
    let hgt = passport.match('hgt:')
    let hcl = passport.match('hcl:')
    let ecl = passport.match('ecl:')
    let pid = passport.match('pid:')
    if(byr && iyr && hgt && hcl && ecl && pid &&eyr){
           return true
        } else {
            return false
        }
}

console.log('test one: ', checkOnePassport('hcl:#6b5442 ecl:brn iyr:2019 pid:637485594 hgt:171cm eyr:2021 byr:1986'))
console.log('test two: ', checkOnePassport('eyr:2025 iyr:1938 byr:2014 hcl:#341e13 hgt:66cm pid:70195175'))
// console.log('test three: ', checkOnePassport(''))
// console.log('test four: ', checkOnePassport(''))