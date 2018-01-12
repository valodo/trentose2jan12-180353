function getArea(input){
    
    var area = -1;
    if(input.length == 2){
        var side1 = input[0];
        var side2 = input[1];

        if(side1 >= 0 && side2 >= 0){
            area = side1*side2;
        }
    }
    
    return area;
}

module.exports = getArea;