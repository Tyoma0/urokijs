// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.


function findLargest(num1, num2, num3) {
    let largest = num1; 
    if (num2 > largest) {
      largest = num2; 
    }
    if (num3 > largest) {
      largest = num3; 
    }
    return largest; }
    findLargest(2 ,4, 6)
