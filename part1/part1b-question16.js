let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const x in statistics) {
    
    if(x.charAt(0) == 'r') {
        console.log(x + ' = ' + statistics[x]);
    }
    else if((statistics[x] % 2) != 0) {
        console.log(x + ' = ' + statistics[x]);
    }
}