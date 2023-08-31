// Вычислить сумму элементов массива

function sumArray(arr) {
    let out = 0;
    if(arr.length > 0){
        for (let i = 0; i< arr.length; i++){
            out+= arr[i];
        }
    }else return 0
  return out;
}