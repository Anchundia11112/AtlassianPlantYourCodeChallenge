function grid(seedCount) {

    if(seedCount === 0) {
        return[0,0]
    }
    
    if(seedCount === 1) {
        return [1,1]
    }

    if(Math.sqrt(seedCount) % 1 === 0) {
        return [Math.sqrt(seedCount), Math.sqrt(seedCount)]
    }
    
    var multiples = []

    //Creating the array from 1 to seedCount 
    for(var i=0; i <= seedCount; i++) {
        if (seedCount % i === 0) {
            multiples.push(i)
        }
    }
        
    halfOfLst = multiples.length / 2
    
    startOfLst = 0
    endOfLst = multiples.length - 1
    console.log(endOfLst)
    
    //Will have a list of list of multiples 
    // eg 15 
    // gives [ [1,15], [3,5] ]
    lstOfLst = []

    for(var i=0; i<halfOfLst; i++) {

        tempMultLst = []    
        firstMult = multiples[startOfLst]
        secondMult = multiples[endOfLst]
        if(startOfLst < endOfLst) {
            tempMultLst.push(firstMult)
            tempMultLst.push(secondMult)
            lstOfLst.push(tempMultLst)
        }
        startOfLst += 1
        endOfLst -= 1    
    }
    
    locationDiffDict = {}
    for(var i=0; i<lstOfLst .length; i++) {
        multiples = lstOfLst [i]
      
        arrayDiff = multiples.reduce(function(leftFactor, rightFactor) {
            return Math.abs(leftFactor - rightFactor)
        });
        
        tempMin = seedCount
        
        if(arrayDiff < tempMin) {
            locationDiffDict = {}
            tempMin = arrayDiff
            
            locationDiffDict[i] = multiples
          
        }
    }
    //There should always be one pair in the list 
    var value = Object.keys(locationDiffDict).map(function(key){
        return locationDiffDict[key];
    });

    return value[0]
}