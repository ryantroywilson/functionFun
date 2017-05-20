/*Coding Challenges for myself to help myself STUDY*/

//A function that returns an array with all the numbers from 1 to 255 
function get_array(){
	var arr = [];
	for (var i = 1; i <= 255; i++) {
		arr.push(i);
	}
	return arr;
}

// write a function that would get the sum of all the even numbers from 1 to 1000 ** I would recommend using a modulus operator for this exercise
function sum_even_numbers(){
	var sum;
	for(var i = 1; i<=1000; i++){
		if(i % 2 ===0){
			sum += i;
		}
	}
	return sum;
}



/* Write a function that returns the sum of all the odd numbers from 1 to 5000*/
function sum_odd_5000(){
	var sum = 0;
	for(var i = 1; i <=5000; i ++){
		if(i % 2 === 1){
			sum = sum + i;
		}
	}
	return sum;	
}

// Write a function that returns the sum of all the values within an array (e.g. [1,2,5] returns 8)

function iterArr(arr){
	var sum = 0;
	for(var i = 0; i <arr.length; i ++){
		sum = sum + arr[i];
	}
	return sum;
}
// FINDING THE AVERAGE OF AN ARRAY::: Given an array with multiple values, write a function that returns the average of the values in the array

function findAvg(arr){
	var sum = 0;

	for(var i = 0; i < arr.length; i ++){
		sum = sum + arr[i];
	}
	return sum/arr.length;
}


// FIND MAX: Given an array with multiple values, write a function that returns the maximum number in the array!

function findMax(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i ++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
}
/* FIND AVERAGE*/ // Given an array with multiple values, write a function that returns the average of the values in an array.
function findAvg(arr){

	return avg;
}
// ARRAY ODD::  Write a function that would return an array of all the odd numbers between 1 to 50 (using the 'push' method)
function oddNumbers(){
	var arr = [];
	for (var i = 0; i <=50; i ++){
		if (i % 2 !==0){
			arr.push(i);
		}
	}
	return arr;
}

function greaterY(arr, Y){
	var count = 0;
	for (var i = 0; i < arr.length; i++){
		if(arr[i]> Y){
			count = count + 1; //which also could be written as count++;
		}
	}
	return count;
}

// SQUARED!!!!! Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself.

function squareVal(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i]*arr[i];
	}
	return arr;
}

/*NEGITIVES

Given an array with multiple values, write a function that replaces any negative numbers within the array with the
value of 0. When the program is done the array should contain no negative values

*/
function noNeg(arr){
	for(var i = 0; i < arr.length; i ++){
		if(arr[i] < 0 ){
			arr[i] = 0;
		}
	}
	return arr;
}

/*MAX/MIN/AVG ORRRRR [MAX,MIN,AVG]

Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum
and average values of the orignal array!
*/
function maxMinAvg(arr){
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];

	for(var i = 1; i < arr.length; i ++){
		if(arr[i]>max){
			max = arr[i];
		}
		if (arr[i] < min){
			min = arr[i];
		}
		sum = sum + arr[i]
	}
	var avg = sum / arr.length;
	var arrnew = [max, min, avg];
	return arrnew;
}

/* SWAPPING VALUES
Write a function that will swap the first and last values of any given array. 
*/
function swap(arr){
	var temp = arr[0]
	arr[0] = arr[arr.length - 1]
	arr[arr.length - 1] = temp;

	return arr;
}

/* NUMBER TO STRING 
Write a function that takes an array of numbera nd replaces any negative values withini the array with the string 'dojo'
*/
function numToStr(arr){
	for(var i = 0; i <arr.length; i++){
		if (arr[i]<0){
			arr[i] = 'Dojo';
		}
	}

	return arr;
}


