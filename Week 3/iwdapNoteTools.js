
	


var iwdapNoteTools = {
	
	TET12: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
	
	transposeNoteHalfStepDown: function transposeNoteHalfStepDown(note){
	if (note == 'C') {
		return 'B';
	}
	x = this.TET12.indexOf(note);
	return this.TET12[x - 1];
	},

	transposeNoteHalfStepUp: function transposeNoteHalfStepUp(note){
	if (note == 'B') {
		return 'C';
	}
	x = this.TET12.indexOf(note);
	return this.TET12[x + 1];

	},

	transposeNoteFullStepUp: function transposeNoteFullStepUp(note){
	if (note == 'A#') {
		return 'C';
	}
	if (note == 'B') {
		return 'C#';
	}
	x = this.TET12.indexOf(note);
	return this.TET12[x + 2];

	},

	transposeNoteFullStepDown:function transposeNoteFullStepDown(note){
	if (note == 'C#') {
		return 'B';
	}
	if (note == 'C') {
		return 'A#';
	}
	x = this.TET12.indexOf(note);
	return this.TET12[x - 2];

	},

	majorScale: function majorScale(note){
	let x = [note];
	
	let y = this.transposeNoteFullStepUp(note);
	x[1] = y;
	
	y = this.transposeNoteFullStepUp(y);
	x[2] = y;
	
	y = this.transposeNoteHalfStepUp(y);
	x[3] = y;
	
	y = this.transposeNoteFullStepUp(y);
	x[4] = y;
	
	y = this.transposeNoteFullStepUp(y);
	x[5] = y;
	
	y = this.transposeNoteFullStepUp(y);
	x[6] = y;
	
	y = this.transposeNoteHalfStepUp(y);
	x[7] = y;
	
	return x;
	
	},

	minorScale: function minorScale(note){
	let x = [note];
	
	let y = this.transposeNoteFullStepUp(note);
	x[1] = y;
	
	y = this.transposeNoteHalfStepUp(y);
	x[2] = y;
	
	y = this.transposeNoteFullStepUp(y);
	x[3] = y;
	
	y = this.transposeNoteFullStepUp(y);
	x[4] = y;
	
	y = this.transposeNoteHalfStepUp(y);
	x[5] = y;
	
	y = this.transposeNoteFullStepUp(y);
	x[6] = y;
	
	x[7] = note;
	return x;

	},

	majorTriad: function majorTriad(note){
	let x = [note];
	let y = this.transposeNoteFullStepUp(note);
	y = this.transposeNoteFullStepUp(y);
	x[1] = y;
	y = this.transposeNoteFullStepUp(y);
	y = this.transposeNoteHalfStepUp(y);
	x[2] = y;
	
	return x;

	},

	minorTriad: function minorTriad(note){
	let x = [note];
	let y = this.transposeNoteFullStepUp(note);
	y = this.transposeNoteHalfStepUp(y);
	x[1] = y;
	y = this.transposeNoteFullStepUp(y);
	y = this.transposeNoteFullStepUp(y);
	x[2] = y;
	
	return x;
	}

};



