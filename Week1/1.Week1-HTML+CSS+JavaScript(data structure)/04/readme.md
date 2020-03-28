# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]

**Week 1 - HTML+CSS+JavaScript(data structure)** 
**4.  สร้าง HTML Form ตามโจทย์ดังนี้ [(Link](https://docs.google.com/presentation/d/15itXNyf0WZzVfch8-nvnNMjdFSqx0kcoZXYEUP1J3VM/edit#slide=id.g640c0252c5_4_20))**
-  ทั้งหมดอยู่ภายในแท็ก form
```
<form>
    ...
</form>
```
    
-  สร้างแท็ก form ขอ action เป็น something.php
```
<form action="something.php">
    ...
</form>
```
    
-  มี text input
```
<input type="text" placeholder="Input text" name="input" />
```
    
-  มีปุ่ม submit
```
<button type="submit">Submit</button>
```
    
-  มี text input เป็น required ฟิลด์
```
<input type="text" placeholder="Input text" name="input" required />
```
    
-  อยากได้ปุ่ม Radio 3 ปุ่ม Joyful, Interested และ Proud
```
<input type="radio" name="radio1" > Joyful
<input type="radio" name="radio1" > Interested 
<input type="radio" name="radio1" > Proud 
```
    
-  อยากได้ปุ่ม Checkboxes 3 ปุ่ม Amused, Confident และ Fulfilled
```
<input type="checkbox" name="checkbox1" > Amused
<input type="checkbox" name="checkbox1" > Confident
<input type="checkbox" name="checkbox1" > Fulfilled
```
    
-  ใส่ attribute value เข้าไปในปุ่ม Checkboxes และ Radio
```
<input type="radio" name="radio1" value="Joyful" > Joyful
<input type="radio" name="radio1" value="Interested" > Interested 
<input type="radio" name="radio1" value="Proud" > Proud 
<input type="checkbox" name="checkbox1" value="Amused" > Amused
<input type="checkbox" name="checkbox1" value="Confident" > Confident
<input type="checkbox" name="checkbox1" value="Fulfilled"  > Fulfilled
```
    
-  ตั้งค่าเริ่มต้นของ Checkboxes และ Radio
```
<input type="radio" name="radio1" value="Joyful" checked> Joyful
<input type="radio" name="radio1" value="Interested" > Interested 
<input type="radio" name="radio1" value="Proud" > Proud  
<input type="checkbox" name="checkbox1" value="Amused" > Amused
<input type="checkbox" name="checkbox1" value="Confident" checked> Confident
<input type="checkbox" name="checkbox1" value="Fulfilled" checked > Fulfilled
```