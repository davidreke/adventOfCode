const fs = require('fs');

fs.readFile('./inputs/3.txt', (err,data) => {
    console.log(
        howManyTreesDoIHit(data.toString(),1,1)*
        howManyTreesDoIHit(data.toString(),3,1)*
        howManyTreesDoIHit(data.toString(),5,1)*
        howManyTreesDoIHit(data.toString(),7,1)*
        howManyTreesDoIHit(data.toString(),1,2)
    )

    // console.log(howManyTreesDoIHit(data.toString(),3,1))
    
})

function howManyTreesDoIHit(input, slope, down) {
    var SkinnyarrayOfTrees = input.split("\r\n")

    var numberOfRepetitions = Math.ceil((SkinnyarrayOfTrees.length *slope) / SkinnyarrayOfTrees[0].length)

    var fatArrayOfTrees = []

    for (let i=0; i <SkinnyarrayOfTrees.length; i++){
        for(let k=0; k <numberOfRepetitions; k++){
            if(fatArrayOfTrees[i] == null){
                fatArrayOfTrees[i] = SkinnyarrayOfTrees[i]
            } else {
                fatArrayOfTrees[i] = fatArrayOfTrees[i]+SkinnyarrayOfTrees[i] || SkinnyarrayOfTrees[i]
            }
            
        }
    }

    // console.log(fatArrayOfTrees)
    var countHospitalVisits = 0;
    for(let j=0; (j *down) <fatArrayOfTrees.length; j++){
        if(fatArrayOfTrees[j*down][(j*slope)] == '#'){
            countHospitalVisits++
        }
        
        // console.log(
        //     {
        //         tier: j*down,
        //         index: j*slope,
        //         row: fatArrayOfTrees[j],
        //         count: countHospitalVisits,
        //         'hit?':(fatArrayOfTrees[j*down][(j*slope)] == '#')
        //     }
        // )
    }

    console.log('number of trees hit: ', countHospitalVisits)
    return countHospitalVisits
}