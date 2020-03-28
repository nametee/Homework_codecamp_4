# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]

**Week 1 - HTML+CSS+JavaScript(data structure)** 
**11.สร้าง array [0,9,1,8,2,7,3,6,4,5] แล้ว sort เรียงจากน้อยไปมาก (ห้ามใช้ function sort() )**
```
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}
let a = quick_Sort([0,9,1,8,2,7,3,6,4,5])
```