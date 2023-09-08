//Now let's add some complexity to the previous question. Write another function in JavaScript named transformNestedArray. This function should take a nested array of integers as argument and transform every element into its square, before returning the transformed array. 
//However, if any element in the array is already a perfect square, that element should remain untouched. 
//For your solution, assume the nested array can be of any depth.


let arr1 =[[1,2],3,[4,[5]]]; 
function transformNestedArray(arr) {
    function isPerfectSquare(num) {
      return Number.isInteger(Math.sqrt(num));
    }
  
    function transformElement(element) {
      if (isPerfectSquare(element)) {
        return element;
      } else {
        return element ** 2;
      }
    }
  
    function transformNestedElements(nestedElements) {
      return nestedElements.map(nestedElement => {
        if (Array.isArray(nestedElement)) {
          return nestedElement.map(transformElement);
        } else {
          return transformElement(nestedElement);
        }
      });
    }
  
    return transformNestedElements(arr);
  }
console.log(transformNestedArray(arr1));  ``