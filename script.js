function firstWord(s) {
  // your code here
	const index = s.indexOf(" ");
	return s.substring(0,index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
