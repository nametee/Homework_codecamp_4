# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]
### HOMEWORK WEEK 3
**Week 3 Database Part 2** 

**1.  Callback** 
1. ใช้ setTimeout เพื่อให้ console.log(‘a’) เมื่อเวลาผ่านไป 1 วินาที
2. (ต่อจากข้อ 1) เมื่อ console.log(‘a’) เสร็จ ให้ทำการ console.log(‘b’) เมื่อเวลาผ่านไป 1 วินาที
3.  (ต่อจากข้อ 2) เมื่อ console.log(‘b’) เสร็จ ให้ทำการ console.log(‘c’) เมื่อเวลาผ่านไป 1 วินาที
4.  (ต่อจากข้อ 3) เมื่อ console.log(‘c’) เสร็จ ให้ทำการ console.log(‘d’) เมื่อเวลาผ่านไป 1 วินาที

**2.  การทำ function ให้เป็น Promise** 
1.  ทำ ใช้ setTimeout เพื่อให้ console.log(input) เมื่อเวลาผ่านไป 1 วินาที เป็น Promise ที่ชื่อ function ว่า setTimeoutAndLog(input) แล้วลองเรียกใช้ดู 
2.  ใช้ Promise จากข้อที่ 1 แล้วทำให้สามารถได้ผลลัพท์แบบเดียวกันกับ Lab ก่อนหน้า  
	1. ผ่านไป 1 วินาทีแล้ว console.log(‘a’) 
	2. ผ่านไป 1 วินาทีแล้ว console.log(‘b’) 
	3. ผ่านไป 1 วินาทีแล้ว console.log(‘c’) 
	4. ผ่านไป 1 วินาทีแล้ว console.log(‘d’)

**3.  ใช้ async/await แล้วทำให้สามารถได้ผลลัพท์แบบด้านล่าง** 
1.  ผ่านไป 1 วินาทีแล้ว console.log(‘a’) 
2.  ผ่านไป 1 วินาทีแล้ว console.log(‘b’) 
3.  ผ่านไป 1 วินาทีแล้ว console.log(‘c’) 
4.  ผ่านไป 1 วินาทีแล้ว console.log(‘d’)

**4.  Weather App**

**5.  สร้างตาราง** 
1.  เพิ่มเติมจากตาราง user 
2.  สร้างตารางชื่อว่า todo ให้มี column ดังนี้ 
	1.  id 
	2.  task 
	3.  date 
3.  sync database ให้สร้าง table ขึ้นมา 
4.  สร้างตารางชื่อว่า user_todo ให้มี column ดังนี้ 
		1.  id
		2.  user_id 
		3.  todo_id 
5.  sync database ให้สร้าง table ขึ้นมา

**6.  Homework- Sequelize** 
1.  สร้าง Model จาก Database Schema อันนี้ 
![](https://lh4.googleusercontent.com/eOvv4lIBJc2UGsXrtWDW0C91TDS0vwVDbyQp31rwjXiaeEFvedDJ8t8HUoYccvNzHz1FCa46bwnW6n3hriA9Y67zNy2ADjz0Tcdn6iAbeZK5pncx4UwBkgQjcRAbdl-7G6mcJegd)
2.  Insert ข้อมูลของ Instructor อย่างน้อย 5 คน ด้วย Sequelize แบบ ORM 
3.  Select ค่าข้อมูลของ Instructor ทั้งหมดที่พึ่ง insert เข้าไป 
4.  ลบข้อมูลของ Instructor อย่างน้อย 1 คน 
5.  แก้ไขค่าของ Instructor อย่างน้อย 1 คน