# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]

**Week 1 - Git ([Link](https://drive.google.com/open?id=1-4vBTew5HNz3zoyQK2qwhTMyiVMPBNIz))**

**Git workflow และ Branching models**
**3. หากเกิดบัคขึ้นที่ระบบ Production ซึ่งจะต้องแก้โค้ดใหม่ เราจะต้องแก้จาก Branch ไหน และสร้างเป็น Branch ประเภทไหน และจะต้อง Merge ไปที่ไหนเมื่อแก้ไขเสร็จ**
```
นำ code มาจาก Production (Master) มาสร้าง Branch Hotfix-xxxx 
พอทำการปรับแก้ไขเสร็จนำกลับไป Merge ที่ Production (Master) และ Develop 
```