# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]
### HOMEWORK WEEK 3
**Week 3 Database Part 1**
>โจทย์: จะออกแบบระบบให้มหาวิทยาลัย CodeCamp XI
>โดยคำนึงถึง : ข้อมูลของ นิสิต อาจารย์ วิชา คณะ มาเกี่ยวข้องไม่สนใจข้อมูล อื่นๆ เช่น ค่าเล่าเรียน เจ้าหน้าที่ สถานที่ อาคาร เป็นต้น
>
>ข้อกำหนดดังนี้ 
>- ข้อมูลนิสิต “STUDENT” จะมีเก็บข้อมูล รหัส ชื่อ-นามสกุล ภาษาไทย/ภาษาอังกฤษ ที่อยู่ เบอร์โทร อีเมล์ LineID โดย รหัส ชื่อ-นามสกุล จะเป็น unique ส่วน ที่อยู่ เบอร์โทร และอีเมล์สามารถมีได้หลายค่า 
>- ข้อมูลอาจารย์ “INSTRUCTOR” จะมีเก็บข้อมูล ชื่อ-นามสกุล ภาษาไทย/อังกฤษ ตำแหน่งทางวิชาการ วุฒิการศึกษา ความเชี่ยวชาญ วิชาที่สอน 
>- อาจารย์แต่ละคนจะเป็นที่ปรึกษานิสิตไม่เกิน 40 คน และนิสิตแต่ละคนมีอาจารย์ที่ปรึกษาได้ที่ละ 1 คน (อาจจะเปลี่ยนอาจารย์ที่ปรึกษาในภายหลังได้) 
>- นิสิตไม่สามารถลงทะเบียนเกิน 21 หน่วยกิตได้ นิสิตไม่สามารถลงวิชาของหลักสูตรคณะอื่นได้
**1.  ออกแบบ Conceptual Data Model ของ มหาวิทยาลัย Codecamp XI ตาม 5 ขั้นตอน ([link](https://docs.google.com/presentation/d/1xP-jRml2ppYgZD1Ur5qmP8VZOaIrzPcSbw1dpc-qYlw/edit#slide=id.g6fbf43425a_0_147))**
	1.  Entities and Simple Attributes
	2.  Multi-Valued Attributes 
	3.  1:1 Relationships 
	4.  1:N Relationships 
	5.  N:N Relationships 
	>	เสร็จแล้วสรุปผลลออกมาเป็น Data Model 
**2.  ออกแบบ Logical Data Model ของ มหาวิทยาลัย Codecamp XI ([link](https://docs.google.com/presentation/d/1xP-jRml2ppYgZD1Ur5qmP8VZOaIrzPcSbw1dpc-qYlw/edit#slide=id.g6fbf43425a_0_169))** 

**3.  ([link](https://docs.google.com/presentation/d/1xP-jRml2ppYgZD1Ur5qmP8VZOaIrzPcSbw1dpc-qYlw/edit#slide=id.g6fbf43425a_0_520))**

	1.  Install MySQL 
	2.  Add executable to PATH environment 
	3.  Start the service 
	4.  Check whether or not the service has been started  

**4.  จาก 2 ตารางนี้ ([link](https://docs.google.com/presentation/d/1xP-jRml2ppYgZD1Ur5qmP8VZOaIrzPcSbw1dpc-qYlw/edit#slide=id.g73d2c0c7e5_68_24))** 

![](https://lh3.googleusercontent.com/MUjzh3knkHyjx0Ig3sJ8IxPMx_ukL8ODq10HoW1FqjWbfnsxGDTWS9-xM1rc3dscrbMeYKIslOLJIGPalvQcO4IsGfa45dOdsKd4ZbMfOKxYhoHXkdeGKlHAqjysbIH1sBNEHxok)


	- Join โดยเอาตารางซ้ายเป็นหลัก 
	- Join โดยเอาตารางขวาเป็นหลัก 
	- เอาตารางซ้ายและตารางขวามันต่อกัน (Union) 
	- ให้นำเฉพาะแถวที่มีสมาชิกเหมือนกัน