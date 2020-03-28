# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]

**Week 1 - HTML+CSS+JavaScript(data structure)** 
**9.สร้าง array [0,1,2,3,4,5,6,7,8,9,10] แล้วเอาเลขคู่ออกทั้งหมด โดยการใช้ loop for  หรือ while**
```
let a = [0,1,2,3,4,5,6,7,8,9,10]
let b = []
for (i in a ) {
    if(i % 2 !== 0 ) b.push(+i)
}
```