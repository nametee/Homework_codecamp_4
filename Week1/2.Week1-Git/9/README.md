# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]

**Week 1 - Git ([Link](https://drive.google.com/open?id=1-4vBTew5HNz3zoyQK2qwhTMyiVMPBNIz))**

**Git workflow และ Branching models**
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
>git checkout -b release/0.0.1
>git push -u origin release/0.0.1

    -At Github craete pull request release branch to master 
    -Commit pull request 
```