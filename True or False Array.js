/*
I admit, this challenge is somehow strange. The objective is to find out if a given array is true or false. Here are some true arrays:

[12, 40, 4, 6420, 20, 24, 400, 24]
[12.3, 46, 4, 7383, 23, 27, 529, 27.6]
[14, 80, 6, 12840, 40, 46, 1600, 48]
And here some false arrays:

[18.1, 162, 9, 26091, 81, 90, 6561, 97]
[14.5, 90, 18, 14445, 18, 51, 2025, 54]
[19.2, 184, 9, 29592, 92, 101, 8464, 110.8]
All the 8 values in the arrays are connected in some way, you have to find out what the connection is. Go and play around with the 150 test cases and you'll figure it out.

Examples
tfArr([12, 40, 4, 6420, 20, 24, 400, 24]) ➞ true

tfArr([18.1, 162, 9, 26091, 81, 90, 6561, 97]) ➞ false

tfArr([14.7, 94, 6, 15087, 47, 53, 2209, 56.4]) ➞ true
Notes
All the inputs are valid arrays with 8 numbers.
For a small hint, look at the Comments tab.
*/

let tfArr = arr => {
	let e = arr[4],
			b = e * 2,
			h = +(e * 1.2).toFixed(2),
			c = Math.sqrt(e) | 0,
			a = e / 10 + 10,
			g = e * e,
			f = c + e,
			d = 321 * e;
	return [a, b, c, d, e, f, g, h].join`` == arr.join``;
}

