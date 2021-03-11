let octave = 5;
const defaultSynth = new Tone.Synth().toMaster();
const form = document.getElementById('note-form'); 
const play = document.getElementById('play');
play.addEventListener('click', playSound);



function playSound(event) {

  const noteInput = form.elements['note-select'].value;
  const octaveInput = form.elements['octave'].value;
  
  let note = getPitchedNote(noteInput, octaveInput)

  defaultSynth.triggerAttackRelease(note, "8n");
  
  event.preventDefault();
}

