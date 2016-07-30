var params = require('parameter');

var mod = {
    init: function(){
        var register = key => { global[key] = params[key]; };
        _.forEach(Object.keys(params), register);

        global.FLAG_COLOR = {
            invade: { // destroy everything enemy in the room
                color: COLOR_RED, 
                secondaryColor: COLOR_RED,
                filter: {'color': COLOR_RED, 'secondaryColor': COLOR_RED },                 
                exploit: { // send privateers to exploit sources
                    color: COLOR_RED, 
                    secondaryColor: COLOR_GREEN,
                    filter: {'color': COLOR_RED, 'secondaryColor': COLOR_GREEN }
                },  
            },
            //COLOR_PURPLE,
            //COLOR_BLUE,
            //COLOR_CYAN,
            idle: { // creeps go here to have a nice time (getting out of the way)
                color: COLOR_GREEN, 
                secondaryColor: COLOR_GREEN,
                filter: {'color': COLOR_GREEN, 'secondaryColor': COLOR_GREEN }
            },
            defense: { // point to gather troops
                color: COLOR_YELLOW, 
                secondaryColor: COLOR_YELLOW,
                filter: {'color': COLOR_YELLOW, 'secondaryColor': COLOR_YELLOW }
            },
            destroy: { // destroy whats standing here
                color: COLOR_ORANGE, 
                secondaryColor: COLOR_ORANGE,
                filter: {'color': COLOR_ORANGE, 'secondaryColor': COLOR_ORANGE }
            },
            //COLOR_BROWN,
            // COLOR_GREY,
            claim: { // claim this room
                color: COLOR_WHITE, 
                secondaryColor: COLOR_WHITE,
                filter: {'color': COLOR_WHITE, 'secondaryColor': COLOR_WHITE },
                spawn: { // send pioneers & build spawn here
                    color: COLOR_WHITE, 
                    secondaryColor: COLOR_GREEN,
                    filter: {'color': COLOR_WHITE, 'secondaryColor': COLOR_GREEN }
                },  
                pioneer: { // send additional pioneers
                    color: COLOR_WHITE, 
                    secondaryColor: COLOR_RED,
                    filter: {'color': COLOR_WHITE, 'secondaryColor': COLOR_RED }
                }
            }
        };
        global.PART_COSTS = {
            work: 100,
            carry: 50,
            move: 50, 
            attack: 80, 
            ranged_attack: 150, 
            heal: 250, 
            claim: 600, 
            tough: 10
        };
        global.ERROR_CODE = function(code){
            var codes = {
                0: 'OK',
                1: 'ERR_NOT_OWNER',
                2: 'ERR_NO_PATH',
                3: 'ERR_NAME_EXISTS',
                4: 'ERR_BUSY',
                5: 'ERR_NOT_FOUND',
                6: 'ERR_NOT_ENOUGH_RESOURCES',
                7: 'ERR_INVALID_TARGET',
                8: 'ERR_FULL',
                9: 'ERR_NOT_IN_RANGE',
                10: 'ERR_INVALID_ARGS',
                11: 'ERR_TIRED',
                12: 'ERR_NO_BODYPART',
                14: 'ERR_RCL_NOT_ENOUGH',
                15: 'ERR_GCL_NOT_ENOUGH'};
            return codes[code*-1];
        };
        global.DYE = function(color, text){
            if( color )
                return('<font style="color:' + color + ';">' + text + '</font>');
            else return text;
        };
        global.ERROR_LOG = function(creep, code) {
            if(creep) creep.say(ERROR_CODE(code));
            var message = ERROR_CODE(code) + '\ncreep: '  + creep.name + '\naction: ' + creep.memory.action + '\ntarget: ' + creep.memory.target ;
            console.log( message );
            Game.notify( message, 120 );
        };
        global.MODULES = {};    
        global.MODULES.extensions = require('extensions');
        global.MODULES.population = require('population');
        global.MODULES.room = require('room');
        global.MODULES.spawn = require('spawn'); 
        global.MODULES.tower = require('tower');
    }
}

module.exports = mod;