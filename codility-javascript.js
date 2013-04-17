function absDistinct ( A ) {
	var check = {},
		count = 0;
   
	for (var i = 0, l = A.length; i < l; i++) {
		var abs = Math.abs(A[i]);

		if (check[abs] !== true) {
		   count++;
		   check[abs] = true;
		}
	}
	
	return count;
}

function hex_bitcount ( S ) {	
	var bin = parseInt(S, 16).toString(2),
		out;

	if ( bin.search(/^(0|1)*$/) !== -1 ) {
		out = bin.replace('0', '').length
	}

	return out;
}

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

function treeHeight ( T ) {
	var check = function(node) {
		return node && node.x ? true : false;
	};
	
	if (check(T) === false) {
		return undefined;
	}
	
	var height = 0,
		children = [T],
		newChildren = [];

	while (true) {
		for (var i = 0, l = children.length; i < l; i++) {
			if ( check( children[i].l ) === true ) {
				newChildren.push(children[i].l);
			}

			if ( check( children[i].r ) === true ) {
				newChildren.push(children[i].r);
			}
		}
		
		children = newChildren;
		newChildren = [];					
		
		if (children.length === 0) {
			break;
		}

		height++;
	}
	
	return height;
}