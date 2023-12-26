function firstWord(s) {
  // your code here
	if(s==='' || !s.includes(' '))
		return s;
	const index = s.trim().indexOf(' ');
	return s.substring(0,index+1);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
