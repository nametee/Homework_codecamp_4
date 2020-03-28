# CodeCamp 4

### นาย ภคิน พีรธนวณิช  [ *nametee@gmail.com* ]
### HOMEWORK WEEK 2

**1. แยกโค๊ดนี้ ให้เป็นหลายไฟล์ ตามโครงสร้างของ MVC (+router)**

![](https://lh6.googleusercontent.com/lFubindWsnHK9__5HZro8eBGRyiZCtfHbd8Vg6d4vj2NEM7yyEGF8VLpwWELQAdqpYjK1jis9Asud8X0psjwNXEYRL0Q-htQK3Qd_1grbHBMLQfffe8MuVg5HEl5AER5FQ-Ca0vu)

**2. Making the API endpoints as follows by using Postman**

1.  GET /static -> return “Hello World”
2.  GET /staticJSON -> return JSON of {text:”Hello World”}
3.  GET /echo?text=Heyyyy -> return any string in text variable, i.e., “Heyyyy”
4.  GET /plus?a=3&b=5 -> return the sum of a + b, i.e., 8
5.  GET /plusByJSON?jsonText={a:3,b:5} -> return the sum of a+b, parsed the json object from jsonText variable, thus, it should be answer 8
6.  GET /plus/6/7 -> return the sum of 6+7, which is 13
7.  GET /checkEvenNumber/3
8. Return the Bad input (400) response code if the input number is not even. (in this case, it is 3) thus it is return 400 response code.
9. Return the Success (200) response code if the input number is a even.
10. POST /number/1 for saving a input number, return the all saved numbers as a JSON array. For example
11. POST /number/1 -> [1]
12. POST /number/2 -> [1,2]
13. POST /number/5 -> [1,2,5]
14. DELETE /number/1, remove the number in the array
15. DELETE /number/1 -> [2,5]
16. DELETE /number/2 → [5]
17. PUT /number/5/10, change the number in the array
18. PUT /number/5/10 -> [10]
19. POST /countFields for counting the number of fields that submit via req.body (raw as the JSON object) for example,
20. POST /countFields BODY {“a”:1,”b”:2,”c”:3} -> 3
21. POST /countFields BODY {“a”:1,”b”:2,”c”:3,”d”:5} -> 4

**3. ทำโจทย์ให้หมดด้วย JavaScript**

1. [https://programming.in.th/task/rev2_problem.php?pid=0001](https://programming.in.th/task/rev2_problem.php?pid=0001)
2. [https://programming.in.th/task/rev2_problem.php?pid=0002](https://programming.in.th/task/rev2_problem.php?pid=0002)
3. [https://programming.in.th/task/rev2_problem.php?pid=0003](https://programming.in.th/task/rev2_problem.php?pid=0003)
4. [https://programming.in.th/task/rev2_problem.php?pid=0004](https://programming.in.th/task/rev2_problem.php?pid=0004)
5. [https://programming.in.th/task/rev2_problem.php?pid=0005](https://programming.in.th/task/rev2_problem.php?pid=0005)
6. [https://programming.in.th/task/rev2_problem.php?pid=0006](https://programming.in.th/task/rev2_problem.php?pid=0006)
7. [https://programming.in.th/task/rev2_problem.php?pid=0007](https://programming.in.th/task/rev2_problem.php?pid=0007)
8. [https://programming.in.th/task/rev2_problem.php?pid=0008](https://programming.in.th/task/rev2_problem.php?pid=0008)
9. [https://programming.in.th/task/rev2_problem.php?pid=0009](https://programming.in.th/task/rev2_problem.php?pid=0009)
10. [https://programming.in.th/task/rev2_problem.php?pid=0010](https://programming.in.th/task/rev2_problem.php?pid=0010)