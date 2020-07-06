function lstOfMultiples(seedCount) {
    var multiples = []
    for(var i=0; i < seedCount; i++) {
        if (seedCount % i === 0 && i != 1) {
            multiples.push(i)
        }
    }
    return multiples
}

function grid(seedCount) {
    var lstOfMults = lstOfMultiples(seedCount)
    halfOfLst = lstOfMults.length / 2
    startOfLst = 0
    endOfLst = lstOfMults.length - 1
    
    lstOfLst = []

    for(var i=0; i<halfOfLst; i++) {

        tempMultLst = []    
        firstMult = lstOfMults[startOfLst]
        secondMult = lstOfMults[endOfLst]
        if(startOfLst < endOfLst) {
            tempMultLst.push(firstMult)
            tempMultLst.push(secondMult)
            lstOfLst.push(tempMultLst)
        }
        startOfLst += 1
        endOfLst -= 1
        
    }
    return lstOfLst
}

//console.log(lstOfMultiples(30))
console.log(grid(30))