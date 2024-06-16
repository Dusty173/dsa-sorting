function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDig = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDig = Math.max(maxDig, digitCount(nums[i]));
  }
  return maxDig;
}

function radixSort(nums) {
  let maxDigCount = mostDigits(nums);
  for (let i = 0; i < maxDigCount; i++) {
    let digBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let num = nums[j];
      let dig = getDigit(num, i);
      digBuckets[dig].push(num);
    }
    nums = [].concat(...digBuckets);
  }
  return nums;
}

module.exports = {mostDigits, getDigit, digitCount, radixSort};
