// Size the grid to the window on load

document.ready = function() {
	var loadwidth = $(window).height();
	loadwidth *= 0.60;
	$('table').css({'width':loadwidth+'px'});
	$('table').css({'height':loadwidth+'px'});
}

// Resize grid if window is resized

window.onresize = function() {
	var dynwidth = $(window).height();
	dynwidth *= 0.60;
	$('table').css({'width':dynwidth+'px'});
	$('table').css({'height':dynwidth+'px'});
}

// Show and hide instructions when prompted

$('#info').click(function() {
	$('#instruct').css({'display':'block'});
});

$('#close').click(function() {
	$('#instruct').css({'display':'none'});
});

$('#resultclose').click(function() {
	$('#resultswindow').css({'display':'none'});
});

// Define letters audio

var letb = new Howl({
	urls: ['audio/b.mp3', 'audio/b.ogg', 'audio/b.wav']
});

var letf = new Howl({
	urls: ['audio/f.mp3', 'audio/f.ogg', 'audio/f.wav']
});

var letk = new Howl({
	urls: ['audio/k.mp3', 'audio/k.ogg', 'audio/k.wav']
});

var letn = new Howl({
	urls: ['audio/n.mp3', 'audio/n.ogg', 'audio/n.wav']
});

var letp = new Howl({
	urls: ['audio/p.mp3', 'audio/p.ogg', 'audio/p.wav']
});

var letq = new Howl({
	urls: ['audio/q.mp3', 'audio/q.ogg', 'audio/q.wav']
});

var letr = new Howl({
	urls: ['audio/r.mp3', 'audio/r.ogg', 'audio/r.wav']
});

var lett = new Howl({
	urls: ['audio/t.mp3', 'audio/t.ogg', 'audio/t.wav']
});

// VALUE OF N

var n = 2;

// PREPARE BLOCK FUNCTION

function prepareBlock(n) {

	// Empty block array

	var thisBlock = [];

	// Populate thisBlock with [0, 0] pairs

	for(var i = 0; i < 20 + n; i++) {
		thisBlock.push([0, 0]);
	}

	// Get the length of the block

	var blockLength = thisBlock.length;

	// Create 4 visual targets in empty spots

	var visuals = 0;
	while(visuals < 4) {
		var visTarg = Math.floor(Math.random() * blockLength);
		if(thisBlock[visTarg + n]) {
			if(thisBlock[visTarg][0] == 0 && thisBlock[visTarg][1] == 0 && thisBlock[visTarg + n][0] == 0 && thisBlock[visTarg + n][1] == 0) {
				thisBlock[visTarg][0] = 1 + Math.floor(Math.random() * 8);
				thisBlock[visTarg + n][0] = thisBlock[visTarg][0];
				visuals++;
			}
			else if(thisBlock[visTarg][0] !== 0 && thisBlock[visTarg][1] == 0 && thisBlock[visTarg + n][0] == 0 && thisBlock[visTarg + n][1] == 0) {
				thisBlock[visTarg + n][0] = thisBlock[visTarg][0];
				visuals++;
			}
			else if(thisBlock[visTarg][0] == 0 && thisBlock[visTarg][1] == 0 && thisBlock[visTarg + n][0] !== 0 && thisBlock[visTarg + n][1] == 0) {
				thisBlock[visTarg][0] = thisBlock[visTarg + n][0];
				visuals++;
			}
			else{
				continue;
			}
		}
		else {
			continue;
			}
	}

	// Create 4 audio targets in empty spots

	var audios = 0;
	audioRuns = 0;
	while(audios < 4) {
		var audTarg = Math.floor(Math.random() * blockLength);
		audioRuns++;
		if(thisBlock[audTarg + n]) {
			if(thisBlock[audTarg][0] == 0 && thisBlock[audTarg][1] == 0 && thisBlock[audTarg + n][0] == 0 && thisBlock[audTarg + n][1] == 0) {
				thisBlock[audTarg][1] = 1 + Math.floor(Math.random() * 8);
				thisBlock[audTarg + n][1] = thisBlock[audTarg][1];
				audios++;
			}
			else if(thisBlock[audTarg][0] == 0 && thisBlock[audTarg][1] !== 0 && thisBlock[audTarg + n][0] == 0 && thisBlock[audTarg + n][1] == 0) {
				thisBlock[audTarg + n][1] = thisBlock[audTarg][1];
				audios++;
			}
			else if(thisBlock[audTarg][0] == 0 && thisBlock[audTarg][1] == 0 && thisBlock[audTarg + n][0] == 0 && thisBlock[audTarg + n][1] !== 0) {
				thisBlock[audTarg][1] = thisBlock[audTarg + n][1];
				audios++;
			}
			else {
				if(audioRuns>1000) {
					break;
				}
				else {
					continue;
				}
			}
		}
		else {
			continue;
		}
	}

	// Create 2 dual targets in empty spots

	var doubles = 0;
	var visualRuns = 0;
	while(doubles < 2) {
		var dualTarg = Math.floor(Math.random() * blockLength);
		visualRuns++;
		if(thisBlock[dualTarg + n]) {
			if(thisBlock[dualTarg][0] == 0 && thisBlock[dualTarg][1] == 0 && thisBlock[dualTarg + n][0] == 0 && thisBlock[dualTarg + n][1] == 0) {
				thisBlock[dualTarg][0] = 1 + Math.floor(Math.random() * 8);
				thisBlock[dualTarg][1] = 1 + Math.floor(Math.random() * 8);
				thisBlock[dualTarg + n] = thisBlock[dualTarg];
				doubles++;
			}
			else {
				if(visualRuns>1000) {
					break;
				}
				else {
					continue;
				}
			}
		}
		else {
			continue;
		}
	}

	// Fill other values with random, non-matching values

	for(var x = 0; x < blockLength; x++) {
		if(thisBlock[x][0] == 0) {
			thisBlock[x][0] = 1 + Math.floor(Math.random() * 8);
			if(thisBlock[x - n] && thisBlock[x][0] === thisBlock [x - n][0] && thisBlock[x] !== thisBlock[x - n]) {
				if(thisBlock[x][0] < 8) {
					thisBlock[x][0] += 1;
				} else {
					thisBlock[x][0] -= 1;
				}
			}
			else if(thisBlock[x + n] && thisBlock[x][0] === thisBlock [x + n][0] && thisBlock[x] !== thisBlock[x + n]) {
				if(thisBlock[x][0] < 8) {
					thisBlock[x][0] += 1;
				} else {
					thisBlock[x][0] -= 1;
				}
			}
		}
		if(thisBlock[x][1] == 0) {
			thisBlock[x][1] = 1 + Math.floor(Math.random() * 8);
			if(thisBlock[x - n] && thisBlock[x][1] === thisBlock [x - n][1] && thisBlock[x] !== thisBlock[x - n]) {
				if(thisBlock[x][1] < 8) {
					thisBlock[x][1] += 1;
				} else {
					thisBlock[x][1] -= 1;
				}
			}
			else if(thisBlock[x + n] && thisBlock[x][1] === thisBlock [x + n][1] && thisBlock[x] !== thisBlock[x + n]) {
				if(thisBlock[x][1] < 8) {
					thisBlock[x][1] += 1;
				} else {
					thisBlock[x][1] -= 1;
				}
			}
		}
	}

	return thisBlock;

};
// END PREPARE BLOCK FUNCTION

// EVALUATE BLOCK FUNCTION

function evaluateBlock(block) {
	var vTargCount = 0;
	var aTargCount = 0;
	for(var i=0; i<block.length; i++) {
		if(block[i - n]) {
			if(block[i][0] == block[i - n][0]) {
				vTargCount += 1;
			}
			if(block[i][1] == block[i - n][1]) {
				aTargCount += 1;
			}
		}
	}
	return [vTargCount, aTargCount];
}

// Function to light up specified square

var sqrMaker = function(randSqr) {
	switch(randSqr) {
		case 1:
			$('#uno').toggleClass('on');
			setTimeout(function(){$('#uno').toggleClass('on')}, 500);
			break;
		case 2:
			$('#dos').toggleClass('on');
			setTimeout(function(){$('#dos').toggleClass('on')}, 500);
			break;
		case 3:
			$('#tres').toggleClass('on');
			setTimeout(function(){$('#tres').toggleClass('on')}, 500);
			break;
		case 4:
			$('#cuatro').toggleClass('on');
			setTimeout(function(){$('#cuatro').toggleClass('on')}, 500);
			break;
		case 5:
			$('#seis').toggleClass('on');
			setTimeout(function(){$('#seis').toggleClass('on')}, 500);
			break;
		case 6:
			$('#siete').toggleClass('on');
			setTimeout(function(){$('#siete').toggleClass('on')}, 500);
			break;
		case 7:
			$('#ocho').toggleClass('on');
			setTimeout(function(){$('#ocho').toggleClass('on')}, 500);
			break;
		case 8:
			$('#nueve').toggleClass('on');
			setTimeout(function(){$('#nueve').toggleClass('on')}, 500);
			break;
	}
};

// Function to trigger specified consonant

var letters = function(randLet) {
	switch(randLet) {
		case 1:
			letb.play();
			break;
		case 2:
			letf.play();
			break;
		case 3:
			letk.play();
			break;
		case 4:
			letn.play();
			break;
		case 5:
			letp.play();
			break;
		case 6:
			letq.play();
			break;
		case 7:
			letr.play();
			break;
		case 8:
			lett.play();
			break;
	}
};

// Global variable for user score

var userScore = [0, 0, 0, 0]; // Visual correct, audio correct, visual mistakes, audio mistakes

// MAIN GAME FUNCTION

function playBlock() {
	var currentBlock = prepareBlock(n);
	var blockEval = evaluateBlock(currentBlock);
	while(blockEval[0] != 6 && blockEval[1] != 6) {
		currentBlock = prepareBlock(n);
		blockEval = evaluateBlock(currentBlock);
	}
	var blockCounter = -1;
	var thisBlockLength = currentBlock.length;
	var hitsThisValue = [0, 0];
	playValue();
	function playValue() {
		$('html').on('keydown', function(event) {
		if(event.which == 65) {
			hitsThisValue[0] = 1;
		} else if(event.which == 76) {
			hitsThisValue[1] = 1;
		}
	});
		if(++blockCounter < thisBlockLength) {
			if(blockCounter > n && currentBlock[blockCounter]) {
				if(currentBlock[blockCounter - 1][0] == currentBlock[blockCounter - n - 1][0]) {
					console.log('visual n back');
					if(hitsThisValue[0] > 0) {
						userScore[0] += 1;
					}
					else {
						userScore[2] += 1;
					}
				}
				else {
					if(hitsThisValue[0] > 0) {
						userScore[2] += 1;
					}
				}
				if(currentBlock[blockCounter - 1][1] == currentBlock[blockCounter - n - 1][1]) {
					console.log('audio n back');
					if(hitsThisValue[1] > 0) {
						userScore[1] += 1;
					}
					else {
						userScore[3] += 1;
					}
				}
				else {
					if(hitsThisValue[1] > 0) {
						userScore[3] += 1;
					}
				}
			}
			if(currentBlock[blockCounter]) {
			sqrMaker(currentBlock[blockCounter][0]);
			letters(currentBlock[blockCounter][1]);
			}
			console.log('this block: ' + currentBlock[blockCounter])
			console.log('keypresses: ' + hitsThisValue);
			console.log('current score: ' + userScore);
			setTimeout(playValue, 3000);
			hitsThisValue = [0, 0];
		}
		else {
			$('#resultswindow').css({'display':'block'});
			$('#results').html('You got ' + userScore[0] + ' of 6 visual cues and ' + userScore[1] + ' of 6 audio cues.');
			if(userScore[2] < 3 && userScore[3] < 3) {
				n += 1;
				$('#resultstwo').html('Great job! You made fewer than three mistakes per modality. N has been increased to ' + n);
				$('#nvalue').html('n = ' + n);
			}
			else if((userScore[2] + userScore[3]) > 6) {
				if(n > 1) {
					n -= 1;
				}
				$('#resultstwo').html('You made more than five mistakes. N is now ' + n + '.');
				$('#nvalue').html('n = ' + n);
			}
			else {
				$('#resultstwo').html('N will remain ' + n);
			}
			userScore = [0, 0, 0, 0];
		}
	}
}

// When the button is clicked, run a block

var blockRunning = false;

$('#begin').click(function() {
	if(blockRunning === false) {
		playBlock();
	}
	blockRunning = true;
	setTimeout(function() {blockRunning = false;}, 20000)
});

