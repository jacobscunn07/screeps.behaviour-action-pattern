var setup = new MODULES.creep.Setup();

setup.type = 'claimer';
setup.multiBody = [CLAIM,CLAIM, MOVE, MOVE];
setup.minAbsEnergyAvailable = 650;
setup.maxMulti = 2;
setup.minControllerLevel = 5;
setup.globalMeasurement = true;

setup.minEnergyAvailable = function(){
    return 0.9;
}
setup.maxCount = function(spawn){
    return _.filter(Game.flags, {'color': FLAG_COLOR.claim }).length;
}
setup.maxWeight = function(spawn){
    return null;//1300;
}
module.exports = setup;
