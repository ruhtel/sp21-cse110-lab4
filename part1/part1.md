1a
1.) 20
2.) 20
3.) 20
4.) Error: result is defined in the function block, so line 13 does not have access to it.
5.) Error: we tried to assign a const, program will exit
6.) ^^ Above
------------------------------------------------------------------------------------------
1b
1.) 3 will print because the i in the for loop is declared as var, and has no scope
2.) 150 will print because discountedPrice is declared as var
3.) 150 will print because finalPrice is in same scope (and is var, anyways)
4.) [50, 100, 150] as it just multiplies the input by the discount, 0.5.
5.) program will error and exit, because i is not defined in this scope.
6.) program will error and exit, because discountedPrice is not defined in this scope.
7.) 150 will print because finalPrice is within the scope
8.) [50, 100, 150] 
9.) program will error and exit because i is not defined in this scope
10.) 3 will print because length is equal to length of input array [100, 200, 300]
11.) it will return [50, 100, 150] for the same reason as the previous 2 questions
------------------------------------------------------------------------------------------
2
A.) student.name
B.) student["grad year"]
C.) student.greeting();
D.) student["Favorite Teacher"].name;
E.) student.courseLoad[0]
------------------------------------------------------------------------------------------
3
A.) '32', 2 is mapped to a string then appended
B.) 1, '3' is converted to int and subtracted
C.) 3, null is likely just converted to 0 and added. or the addition isn't even executed with null.
D.) '3null', null is converted to a string and appended
E.) 4, true is converted to 1 and added
F.) 0, false is 0 and null is 0 then added
G.) '3undefined', undefined is converted to string then appended
H.) NaN, 3 is converted to int then subtraction is attempted w/ undefined which throws error.
------------------------------------------------------------------------------------------
4
A.) true, '2' is converted to 2 and compared to 1
B.) false, js will compare first char to first char and 2 > 1.
C.) true, '2' is converted to 2 and compared to 2
D.) false, === is a strict comparison and an int is not equal to a string
E.) false, true is converted to 1 and is not equal to 2
F.) true, Boolean(2) = true which is same type and value as true.
------------------------------------------------------------------------------------------
5
=== is a strict comparison, and will always consider values of different types different.
in other words, no conversions are made with ===. ==, however, will convert for convenience.
------------------------------------------------------------------------------------------
6
see part1b-question16.js
------------------------------------------------------------------------------------------
7
[2,4,6]. The input array is iterated over and each value is passed to the function 'doSomething,' which is
going to multiply the input by 2 and return. This new, doubled value is then pushed to 'newArr.'
------------------------------------------------------------------------------------------
8
see part1b-question18.js
------------------------------------------------------------------------------------------
9
it will be:
1
4
3
2
javascript doesn't wait on one line to finish, so they are essentially all executed at the same time.