# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]

**Week 1 - Git ([Link](https://drive.google.com/open?id=1-4vBTew5HNz3zoyQK2qwhTMyiVMPBNIz))**

**Git workflow และ Branching models**
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