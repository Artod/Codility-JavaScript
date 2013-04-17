/**
	Need to check the validity of the string S.
	'' or '()' or '()()' or '(())' and etc. = 1
	')' or '))' or '())' and etc. = 0
*/

function nesting ( S ) {
	if (typeof S !== 'string') {
		return;
	}
	
	S = S.replace(' ', '');

	while (S.search(/\(\)/) !== -1) {
		S = S.replace(/\(\)/g, '');
	}

	return S.length ? 0 : 1;
}