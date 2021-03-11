let playMelodyButton = document.getElementById('play-melody');
let notesToEditInput = document.getElementById('notes-to-edit');
let editButton = document.getElementById('edit-button');
let editorArea = document.getElementById('editor-area');

playMelodyButton.addEventListener('click', startPlaying);
editButton.addEventListener('click', createNotesToEdit);

// Start here, fill in the function so that it empties out '#editor-area'
function clearEditorArea() {
	while (editorArea.firstChild) {
		editorArea.removeChild(editorArea.firstChild);
	}
	
}

function splitNotes(element) {	
	deomm = element.value.split(' ');
	return deomm;
}

function createNoteToEdit(note) {
	let cont = document.createElement('div');
	cont.setAttribute('class', 'note-container');
	
	let trans_up = document.createElement('button');
	trans_up.setAttribute('class', 'transpose-up');
	trans_up.innerText = '^';
	cont.appendChild(trans_up);
	
	let space1 = document.createElement('br');
	cont.appendChild(space1);	
	
	let input_text = document.createElement('input');
	input_text.setAttribute('type', 'text');
	input_text.setAttribute('class', 'note');
	input_text.setAttribute('size', '2');
	input_text.setAttribute('value', note);
	cont.appendChild(input_text);
	
	let selecting = document.createElement('select');
	selecting.setAttribute('class', 'note-length');
	cont.appendChild(selecting);
	
	let eight = document.createElement('option');
	eight.setAttribute('value', '8');
	eight.innerText = 'eight note';
	selecting.appendChild(eight);
	
	let four = document.createElement('option');
	four.setAttribute('value', '4');
	four.innerText = 'quarter note';
	selecting.appendChild(four);
	
	let two = document.createElement('option');
	two.setAttribute('value', '2');
	two.innerText = 'half note';
	selecting.appendChild(two);
	
	let one = document.createElement('option');
	one.setAttribute('value', '1');
	one.innerText = 'whole note';
	selecting.appendChild(one);
	
	let space2 = document.createElement('br');
	cont.appendChild(space2);		
	
	let trans_down = document.createElement('button');
	trans_down.setAttribute('class', 'transpose-down');
	trans_down.innerText = 'v';
	cont.appendChild(trans_down);
	return cont;
}

function createNotesToEdit() {
	clearEditorArea();
	//let loopi = notesToEditInput.value;
	let big_loop = splitNotes(notesToEditInput);
	for (let a = 0; a < big_loop.length; a++) {
		let kai = createNoteToEdit(big_loop[a])
		editorArea.appendChild(kai);
		kai.addEventListener('click', handleNoteContainerEvent);
	}
	
}

function handleNoteContainerEvent(evt) {
	clickable = evt.target;
	if ( clickable.classList.contains('transpose-up') || clickable.classList.contains('transpose-down')) {
		inpucik = clickable.parentNode.querySelector('input.note');
		numerek = inpucik.value;
		lista_numer = getNoteParts(numerek);
		if (clickable.classList.contains('transpose-up') ) {
			nowy_numerek = transposeNoteHalfStepUp(lista_numer[0]);
			koniec = nowy_numerek + lista_numer[1];
			inpucik.value = koniec
		}
		if (clickable.classList.contains('transpose-down') ) {
			nowy_numerek = transposeNoteHalfStepDown(lista_numer[0]);
			koniec = nowy_numerek + lista_numer[1];
			inpucik.value = koniec
		}		
		
	}

}

// This function has been completed, you do not need to edit it
function getMelodyString(containers) {
  let melodyString = ''

  for (var i = 0; i < containers.length; i++) {
    melodyString += containers[i].querySelector('.note').value;
    melodyString += '/';
    melodyString += containers[i].querySelector('.note-length').value;
    melodyString += ' ';
  }

  return melodyString;
}

// This function has been completed, you do not need to edit it
function startPlaying() {
  let noteContainers = document.querySelectorAll('#editor-area .note-container');
  let melody = getMelodyString(noteContainers);
  const player = new SimplePlayer();
  const sequenceParser = new SequenceParser(128, [2, 4]);
  player.play(sequenceParser.parse([
      melody
  ]));
}

clearEditorArea();
