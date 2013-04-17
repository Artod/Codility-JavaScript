/**
	Need to count the quantity of absolute values of array A
*/

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