const fs = require('fs');

fs.readFile('./inputs/5.txt', (err,data) => {
//    let dataString = data.toString()
//     findMySeat(dataString)

})

function findMySeat(input) {
    // console.log(input)
    let inputArray =input.split(/\r\n/)
    

    let emptyPlane = [];

    for (let i = 0; i < 128; i++){
        emptyPlane.push([])
        for(let j = 0; j <8; j++){
            emptyPlane[i].push(0)
        }
    }

    for (let k =0; k < inputArray.length; k++){
            let seat = findSeat(inputArray[k])
            console.log(seat)
            emptyPlane[seat[0]][seat[1]]=1

    }

    // console.log(emptyPlane)
    // return 'done'
}

function findSeat(pass) {
    let rowPartOfPass = pass.match(/[FB]{7}/)[0]
    let colPartOfPass = pass.match(/[RL]{3}/)[0]
    console.log(colPartOfPass)

    

    let rowObject = {
        rowPartOfPass,
        min: 0,
        max: 127,
        count: 7
    }

    let colObject = {
        colPartOfPass,
        min: 0,
        max: 7,
        count: 3
    }

    // console.log(colObject, rowObject)

    column = findCol(rowObject)
    console.log('column: ', column)
    row = findRow(colObject)
    console.log('row: ', row)

    return [column, row]
  
}

function findRow(rowObject){

    console.log(rowObject)

    if (rowObject.rowPartOfPass[0] == 'F'){
        rowObject.max = Math.floor((rowObject.max + rowObject.min)/2)
    }

    if (rowObject.rowPartOfPass[0] == 'B'){
        rowObject.min = Math.ceil((rowObject.max + rowObject.min)/2)
    }

    if(rowObject.count > 1){
        // console.log(rowObject.min)
        rowObject.rowPartOfPass = rowObject.rowPartOfPass.substring(1,)
        rowObject.count -=1;
        return findRow(rowObject)
        
    } else {
        return rowObject.min
    }
}

function findCol(colObject){
    console.log(colObject)
    if (colObject.colPartOfPass[0] == 'L'){
        colObject.max = Math.floor((colObject.max + colObject.min)/2)
    }

    if (colObject.colPartOfPass[0] == 'R'){
        colObject.min = Math.ceil((colObject.max + colObject.min)/2)
    }

    if(colObject.count > 1){
        colObject.colPartOfPass = colObject.colPartOfPass.substring(1,)
        colObject.count -= 1;
        return findRow(colObject)
    } else {
        console.log(colObject.min)
        return colObject.min
    }
}
console.log('test: ',findSeat('FBFBBFFRLR'))
