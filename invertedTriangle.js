/*
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
 
Tugas kamu adalah:
Write a program to use for loop to print the following reverse number pattern

*/


const invertedTriangle = () => {
  const rows = 5;
  for (let i = rows; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

invertedTriangle();
