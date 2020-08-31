
/*
Create a function that returns the determinant of a given square matrix.

Examples
determinant([[3]]) ➞ 3

determinant([[1, 0], [5, 4]]) ➞ 4

determinant([[3, 0], [2, 2]]) ➞ 6

determinant([[4, 8, 6], [2, 4, 3], [6, 2, 1]]) ➞ 0
Notes
All inputs are square integer matrices.
*/

function determinant(A) {
	if (A.length === 1) return A[0][0];
	if (A.length === 2) return A[0][0] * A[1][1] - A[0][1] * A[1][0];
	return A.reduce((a, _, i) => a + A[0][i] * determinant(A.slice(1).map(v => v.filter((_, j) => i !== j))) * (-1) ** i, 0);
}

