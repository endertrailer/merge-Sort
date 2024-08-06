function mergeSort(array) {
  if (!array) {
    return;
  }
  function divide(arr) {
    if (arr.length === 1) {
      return arr;
    }
    let halfLength = arr.length / 2;
    let leftSide = arr.slice(0, halfLength);
    let rightSide = arr.slice(halfLength);
    return mergeArray(divide(leftSide), divide(rightSide));
  }

  function mergeArray(array1, array2) {
    let newArray = [];
    let ptn1 = 0;
    let ptn2 = 0;

    while (ptn1 < array1.length && ptn2 < array2.length) {
      if (array1[ptn1] <= array2[ptn2]) {
        newArray.push(array1[ptn1]);
        ptn1++;
      } else {
        newArray.push(array2[ptn2]);
        ptn2++;
      }
    }

    if (ptn1 < array1.length) {
      newArray = newArray.concat(array1.slice(ptn1));
    }

    if (ptn2 < array2.length) {
      newArray = newArray.concat(array2.slice(ptn2));
    }
    return newArray;
  }
  let halfLength = array.length / 2;
  let leftSide = array.slice(0, halfLength);
  let rightSide = array.slice(halfLength);
  return mergeArray(divide(leftSide), divide(rightSide));
}

function checkSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(mergeSort([12, 13, 1, 3, 5, 323, 7, 3, 2, 4, 99, 1]));
