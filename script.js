function firstWord(s) {
  // your code here
	if(s==='' || !s.includes(' '))
		return s;
	const trimstr = s.trim();
	const index = trimstr.indexOf(' ');
	return trimstr.substring(0,index);
}

// Do not change the code below

const s = prompt("Enter String:"); 
alert(firstWord(s));
