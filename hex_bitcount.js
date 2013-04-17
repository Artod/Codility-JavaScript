/**
	Need to convert a hexadecimal number S (string) 
	to binary and count the quantity of 1 in it. 
*/

function hex_bitcount ( S ) {	
	var bin = parseInt(S, 16).toString(2),
		out;

	if ( bin.search(/^(0|1)*$/) !== -1 ) {
		out = bin.replace('0', '').length
	}

	return out;
}