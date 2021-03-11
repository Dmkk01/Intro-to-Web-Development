/*

  You should write your functions and other code in this file.

  You are not allowed to modify the recorder.html

  You are given a partial playNote function, that works as an event handler,
  and by default plyas sounds when the function is attached to the buttons.

  You will need to write the rest of the code (whatever functions and variables that you need)
  and attach the event handlers were necessary.
*/

let synth;
let notes_played = [];
let check = false;
let keyboardDiv = document.getElementById('simple-keyboard');
let start_button = document.getElementById('start-recording');
let list_ul = document.getElementById('notes-recorded');
let stop_button = document.getElementById('stop-recording');

stop_button.addEventListener('click', stop);
start_button.addEventListener('click', start);
keyboardDiv.addEventListener('click', playNote);

function playNote(evt) {
  // These lines are given
  let note = evt.target.dataset.note;
  synth = synth || new Tone.Synth().toMaster()
  synth.triggerAttackRelease(note, '8n');
  console.log(note);
  if (check == true) {
	notes_played.push(note);
  }
  //You need to complete this function here, to record the played notes to an array
  
}



function start(evt) {
	while (list_ul.firstChild) {
		list_ul.removeChild(list_ul.firstChild);
	}
	notes_played.splice(0, notes_played.length)
	check = true;
	// start_button.classList.add('recording');
	// document.getElementById('recording').style.color = 'red';

}



function stop(evt) {
	// start_button.classList.remove('recording');
	console.log(notes_played);
	check = false;
	for (let i = 0; i < notes_played.length; i++) {
		if (typeof notes_played[i] != "undefined") {
			let each_note = document.createElement('li');
		
			each_note.innerText = notes_played[i];
			list_ul.append(each_note);
		}
	}

	
	
}
