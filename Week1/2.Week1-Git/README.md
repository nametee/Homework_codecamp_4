# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]

**Week 1 - Git ([Link](https://drive.google.com/open?id=1-4vBTew5HNz3zoyQK2qwhTMyiVMPBNIz))**

**Git workflow และ Branching models**
**1. หน้าที่ของ Branch คืออะไร**
```
แตกชุดของ source code ออก สำหรับการทำหลายๆคนที่ต้องทำงานใน projectเดียวกันแต่ทำงานกันคนละส่วน 
ป้องกันการแก้ไข source code แล้วไปกระทบกับของคนอื่นๆ 
และสำหรับการทำงานในด้านการจัดการพัฒนา software 
แบ่งเป็น ระดับความสำคัญ และทำให้การจัดการ source code ไม่สับสน  
และจัดการ version ของ source code ได้อย่างมีประสิทธิภาพ
 -Production (Master branch) 
 -Develop
 -Release
 -Feature
 -Hotfix
```

**2. ในการพัฒนาตามหลัก Git-flow โดยมีทีม 2 คน ช่วยกันเขียนโค้ด โดยคนนึงเขียน API และอีกคนเขียน Frontend เราจะแบ่ง Branch ออกเป็นแบบไหน**
```
API Branch : feature/api
Frontend Branch : feature/frontend
```

**3. หากเกิดบัคขึ้นที่ระบบ Production ซึ่งจะต้องแก้โค้ดใหม่ เราจะต้องแก้จาก Branch ไหน และสร้างเป็น Branch ประเภทไหน และจะต้อง Merge ไปที่ไหนเมื่อแก้ไขเสร็จ**
```
นำ code มาจาก Production (Master) มาสร้าง Branch Hotfix-xxxx 
พอทำการปรับแก้ไขเสร็จนำกลับไป Merge ที่ Production (Master) และ Develop 
```

**4.สร้าง Git Repository ชื่อ MyWebProject พร้อมสร้างไฟล์ index.html ไว้ด้วย 
4.สร้าง Repository และทดลองสร้างไฟล์ README.md ในโปรเจคของเราโดยเขียนรายละเอียดเกี่ยวกับโปรเจคดังตัวอย่าง**

![](https://lh4.googleusercontent.com/wLs9_MHMQ7sW4HyBaMcNTpnZwPYVF_iF-7Hyy5AQ4YB7fw7UyUr-8piZjEGpNS-kye8yDCnqY6TxVVF_IdgjPLvVLerRtRm8kq1S2KRExaq-3853sD9QYN9PPeZkhhNTwdvexTD0)
>**Step**
>
>1. Create new repository 'MyWebProject' ([URL_GIT](https://github.com/nametee/MyWebProject.git))
>2. Create working folder and create file 'index.html','README.md'
 >>File index.html is empty
>3. Command Git at working folder
```
>git init
>git remote add origin https://github.com/nametee/MyWebProject.git
>git add index.html
>git commit -m "commit files"
>git push -u origin master
>git add README.md
>git commit -m "commit files"
>git push -u origin master
```

**5. สร้างไฟล์ about.html พร้อมใส่ชื่อของตัวเองลงไปในไฟล์นั้นแล้ว Add file ที่เพิ่มเข้ามาใหม่และ Commit การแก้ไขที่ทําไป โดยต้องยังอยู่ใน Branch master**
```
>git add about.html
>git commit -m "commit files" 
```

**6. สร้างไฟล์ใหม่ชื่อ App.html แล้วทําการ Commit และ Push ไฟล์ไปยัง Master Branch**
```
>git add App.html
>git commit -m "commit files"
>git push -u origin master
```

**7. ให้สร้าง Branch ชื่อ develop แล้ว Checkout ไปทํางานใน Branch develop จากนั้นให้แก้ไขไฟล์ index.html และ commit change**
```
>git branch develop
>git checkout develop
>git add index.html
>git commit -m "commit edit develop"
>git push -u origin develop

or

>git checkout -b develop
>git add index.html
>git commit -m "commit edit develop"
>git push -u origin develop
```

**8. สร้างไฟล์ .gitignore โดยให้ ignore ไฟล์ทั้งหมดที่ลงท้ายด้วยนามสกุล .log และ .env และให้ Add file ใหม่**
```
-create File .gitignore  
-key text '.log' , '.env'  to file .gitignore 
-save file 
-create file testLog.log , .env
-command 
    >git add .
    >git commit -m "commit files"
    >git push -u origin master
```

**9. ให้ Commit และ Push การแก้ไขโดยใช้ Feature Branch แล้วสร้าง Pull request**
```
>git checkout -b feature/test1

    - Edit file index.html

>git add . 
>git commit -m "commit files"
>git push -u origin feature/test1

    -At Github craete pull request feature branch to develop 
    -Commit pull request 

>git checkout develop 
>git pull origin develop    
```

**10. ให้สร้าง Tag และ Release ของโปรเจคเวอร์ชั่น 1.0**
```
-Github at repository 'MyWebProject' (https://github.com/nametee/MyWebProject) 
-Create New release version and tag 

```