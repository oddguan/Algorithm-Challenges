class Solution {
  findMedianSortedArrays(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    if (len1 > len2) {
      return findMedianSortedArrays(nums2, nums1);
    }

    const len = len1 + len2;
    if (!(len & 0x01)) { // even
      return (this.findKth(nums1, 0, nums2, 0, len1, len2, parseInt(len/2)) + 
      this.findKth(nums1, 0, nums2, 0, len1, len2, parseInt(len/2)+1)) / 2;
    } else {
      return this.findKth(nums1, 0, nums2, 0, len1, len2, parseInt(len/2)+1);
    }
  };

  findKth(nums1, start1, nums2, start2, len1, len2, k) {
    if (len1 === 0) {
      return nums2[start2 + k - 1];
    }
    if (len2 === 0) {
      return nums1[start1 + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[start1], nums2[start2]);
    }
    const p = Math.min(Math.max(1, parseInt(k / 2)), len1);
    const q = k - p;
    if (nums1[start1 + p - 1] === nums2[start2 + q - 1]) {
      return nums1[start1 + p - 1];
    } else if (nums1[start1 + p - 1] > nums2[start2 + q - 1]) {
      return this.findKth(nums1, start1, nums2, start2 + q, len1, len2 - q, k - q); 
    } else {
      return this.findKth(nums1, start1 + p, nums2, start2, len1 - p, len2, k - p);
    }
  };
}

s1 = new Solution();
console.log(s1.findMedianSortedArrays([10001, 10002, 10007], [10000, 10004, 10006]));
