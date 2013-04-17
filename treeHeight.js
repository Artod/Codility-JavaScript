/**
	Need to count the height of the binary tree T.
	T = {
		x: number,
		l: T,
		r: T
	}
*/

function treeHeight ( T ) {
	var check = function(node) {
		return node && node.x ? true : false;
	};
	
	if (check(T) === false) {
		return;
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