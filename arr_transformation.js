// Функция должна принимать массив целых чисел в качестве аргумента и преобразовывать каждый элемент в его квадрат, прежде чем возвращать преобразованный массив. 
// Однако, если какой-либо элемент массива уже является идеальным квадратом, этот элемент должен оставаться нетронутым.

function transformArray(arr) {
    let out = [];
    for (let i = 0; i< arr.length; i++){
        if (Number.isInteger(Math.sqrt(arr[i]))){
            out.push(arr[i])
        }else out.push(Math.pow(arr[i],2))
    }
    return out;
}