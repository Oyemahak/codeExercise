document.getElementById('startButton').addEventListener('click', function() {
    var doors = [1, 2, 3]; // Door numbers: 1, 2, 3
    var prizeDoor = Math.floor(Math.random() * 3) + 1; // Randomly choose the prize door
    var chosenDoor = Math.floor(Math.random() * 3) + 1; // User randomly chooses a door
    var revealedDoor = doors.filter(function(door) {
        return door !== prizeDoor && door !== chosenDoor;
    })[Math.floor(Math.random() * 2)];
    
    var switchDoor = doors.filter(function(door) {
        return door !== chosenDoor && door !== revealedDoor;
    })[0];
    
    var winWithoutSwitch = chosenDoor === prizeDoor;
    var winWithSwitch = switchDoor === prizeDoor;
    
    document.getElementById('result').innerHTML = 'You chose door ' + chosenDoor + '. The prize was behind door ' + prizeDoor + '.<br>' + 
    (winWithoutSwitch ? 'You won without switching!' : 'You lost without switching.') + '<br>' +
    (winWithSwitch ? 'You would have won by switching!' : 'You would have lost by switching.');
});