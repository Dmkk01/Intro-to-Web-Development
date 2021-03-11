function melodyReverser(element) {
	let lis = element.split(' ');
	let leng = lis.length;
	let new_lis = [];
	for (let i=leng; i > 0; i--) {
		new_lis.push(lis[i-1]);
	}
	let koniec = new_lis.join(' ');
	return koniec;
}
