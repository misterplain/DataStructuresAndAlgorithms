function binary(array, target) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);

    if (target < array[mid]) {
      max = mid - 1;
    } else if (target > array[mid]) {
      min = mid + 1;
    } else {
      console.log(mid);
      console.log(array[mid]);
      return mid;
    }
  }

  return -1;
}
console.log(
  binary(
    [
      1, 3, 5, 6, 7, 9, 11, 45, 56, 78, 89, 102, 103, 234, 256, 277, 465, 676,
      878, 899, 901, 903, 999,
    ],
    5
  )
);
