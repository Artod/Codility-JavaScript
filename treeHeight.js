/**
	Need to count the height of the binary tree T.
	T = {
		x: number,
		l: T,
		r: T
	}
*/

/** Good when there are not too much nodes on the same level (~267000 nodes) */
function treeHeight1 ( T ) {
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

/** Good when tree has not too much nesting (~7000 height), faster than treeHeight3 */
function treeHeight2 ( T ) {
	if (!T || !T.x) {
		return;
	}
	
	var counted = [],
		count = 0;
	
	var walk = function(node, deep) {
		if (node && node.x) {
			if(!counted[deep]) {
				counted[deep] = true;
				count++;
			}

			dive(node, deep);
		}
	}
	
	var dive = function(node, deep) {
		
		deep++;
		
		walk(node.l, deep);
		walk(node.r, deep);
	};
	
	dive(T, 0);
	
	return count;
}

/** Good when tree has not too much nesting (~13000 height) and children */
function treeHeight3 ( node ) {
	if (node) {					
		return Math.max( arguments.callee(node.l), arguments.callee(node.r) ) + 1;
	}
	
	return -1;
}


/** Test */
var getTree = function(mode) {
	var i = 0,
		tree = null,
		max;
		
	switch (mode) {
		case 'tooMuchHeight':
			max = 17000;
			break;
		case 'muchHeight':
			max = 7000;
			break;
		case 'tooMuchChildren':
			max = 20;
			break;
		case 'mix':
			max = 40;
			break;
	}
		
	while (i < max) {
		var prev = tree
		tree = {
			x: i + 1
		}
		
		var rand = Math.random();
		
		switch (mode) {
			case 'tooMuchHeight': case 'muchHeight':
				tree.l = prev;
				break;
			case 'tooMuchChildren':
				tree.l = prev;
				tree.r = prev;
				break;
			case 'mix':
				tree.l = rand <= 0.3 || (rand > 0.6) ? prev : null;
				tree.r = (rand > 0.3 && rand <= 0.6) || (rand > 0.6) ? prev : null;
				break;
		}
		
		i++;
	}
	
	return tree;
};

var modes = ['tooMuchHeight', 'muchHeight', 'tooMuchChildren', 'mix']
for (var i = 0; i < modes.length; i++) {				
	console.group(modes[i])
	try {
		var tree = getTree(modes[i]);
		
		console.time('treeHeight1');
		var res = treeHeight1(tree);
		console.timeEnd('treeHeight1');
		
		console.time('treeHeight3');
		treeHeight3(tree);
		console.timeEnd('treeHeight3');

		console.time('treeHeight2');
		treeHeight2(tree);
		console.timeEnd('treeHeight2');	
		
	} catch(e) {}
	
	console.log( 'height = ' + res );
	
	console.groupEnd(modes[i]);
}