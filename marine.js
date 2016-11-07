

/*document.getElementById("shootButton").onclick = function()
    {
    searchMap("1");
    var shotChance = Math.floor((Math.random() * 100) + 1);
    var alienLocation, var alien;
    var count = 0;
    
 
    //checks column of current trooper
    //checks for aliens in that column
    
    var result;
for( var i = 0, len = map.length; i < len; i++ ) {
    if( map[i][0] === class ) {
        result = map[i];
        break;
    }
    
    if(alien)
        {
        document.getElementById("console").innerHTML = "TARGET LOCKED";    
        }
    else
        {
         document.getElementById("console").innerHTML = "NO AVAILABLE TARGET";   
        }
    
    if(shotChance >= 60)
        {
        document.getElementById("console").innerHTML = "DIRECT HIT - ALIEN DOWN";
        map[alienLocation] = -1;
        }
    else
        {
        document.getElementById("console").innerHTML = "MISS";
        }
    
    init();
    }

document.getElementById("moveButton").onclick = function()
    {
    searchMap(1);
    var coordX, coordY;
    
    map[coordX][coordY] = 1;
    map[location] = 0;
     
    init();
    }*/

document.getElementById("endTurnButton").onclick = function()
    {
    alert("hi");

    /*searchMap(1);*/
    
    var currentMarineR = Math.floor(resultR);
    var currentMarineC = Math.floor(resultC);
    
    
    /*searchMap(2);*/
    
    map[currentMarineR][currentMarineC] = 2;
    map[Math.floor(resultR)][Math.floor(resultC)] = 1;
    
    init();
    }

function searchMap(class)
    {
    var extension;
    for(var i = 0; i < map.length; i++)
        {
        extension = map[i];
        for(var j = 0; j < extension.length; j++)
            {
            if( extension[j] == class ) 
                {
                Math.floor(resultR) = i;
                Math.floor(resultC) = j;
                i = map.length;
                j = extension.length;
                }
            }
        }
    }