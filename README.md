
# ❔Quizzi 

Quizzi (ควิซซิ้) คือ Web Application ในการเล่นเกมตอบคำถามให้ถูกต้องเพื่อทดสอบความรู้รอบตัวของผู้เล่น โดยผู้เล่นสามารถเลือกหมวดหมู่ที่ต้องการเล่นได้ โดยจะมีทั้งหมด 5 หมวดหมู่ให้เล่นก็คือ

- Movies คือ หมวดหมู่เกี่ยวกับหนัง
- Games คือ หมวดหมู่เกี่ยวกับเกม
- Sports คือ หมวดหมู่เกี่ยวกับกีฬา
- Books คือ หมวดหมู่เกี่ยวกับหนังสือ
- Animals คือ หมวดหมู่เกี่ยวกับสัตว์

## 🗒️ Instructions
ใน Quizzi จะมีการแบ่งการใช้งานออกเป็น 2 ส่วน คือ 
1. โหมด Play คือ ส่วนของการเล่น Quiz ตามหมวดหมู่ที่ได้เลือก โดยจะมีการสุ่มชุดคำถามขึ้นมาไม่ซ้ำข้อกัน และมีการเก็บคะแนนสะสมในการตอบคำถามที่ถูกต้อง
2. โหมด Manage คือ ส่วนของการจัดการ CRUD ของ Quiz โดยสามารถ เพิ่ม, ลบ, แก้ไข คำถาม/คำตอบ ได้

## 🕹️ How to Play
1. ผู้เล่นกด start เพื่อเริ่ม จะเข้าสู่หน้า Home 

![start](https://i.imgur.com/ziho3KM.jpg)

2. ผู้เล่นเลือกหมวดหมู่ของ Quiz ที่ต้องการจะเล่น เมื่อเลือกเสร็จแล้วทำการกดปุ่ม Let's Quiz เพื่อเริ่มเล่น Quiz ของหมวดหมู่นั้นๆ
	- มุมขวาบนจะมีช่อง Search ที่ผู้เล่นสามารถกดค้นหาหมวดหมู่ที่ต้องการได้

![title](https://i.imgur.com/1R99RJv.png)

3. ระบบจะมีขึ้นมาให้ผู้เล่นเลือกว่าจะ Back หรือ Start หากเลือก Back จะเป็นการย้อนกลับไปยังหน้าเลือกหมวดหมู่ของ Quiz อีกครั้ง แต่ถ้าเลือก Start จะเป็นการเริ่มเล่น Quiz

![back/start](https://i.imgur.com/DKUOPuX.png)

4. เมื่อเริ่มเล่นจะแสดงคำถามและคำตอบที่ถูกสุ่มขึ้นมาให้ไม่ซ้ำข้อกันในแต่ละครั้ง เมื่อผู้เล่นทำการเลือกคำตอบที่ถูกต้องเสร็จแล้วระบบจะแสดงปุ่ม Next ขึ้นมาเพื่อไปยังข้อถัดไป และจะทำการตรวจคำตอบเพื่อสะสมคะแนนของผู้เล่น (สามารถดูคะแนนสะสมได้ที่มุมขวา Ex. score: 0/3)

![quiz1](https://i.imgur.com/VGzdSOR.png)

5. หากผู้เล่นทำการเล่นมาถึงข้อสุดท้ายระบบจะเปลี่ยนจาก Next เป็น Finish เพื่อเป็นการจบการเล่น Quiz ในรอบนั้นๆ

![quiz2](https://i.imgur.com/8eQTqJf.png)


6. เมื่อกดปุ่ม Finish จะแสดงข้อความว่าผู้เล่นได้ทำการเล่น Quiz จบแล้ว, คะแนนสะสมทั้งหมดที่ผู้เล่นตอบถูก และ จะมีปุ่ม Back เพื่อให้ผู้เล่นกลับไปเลือกหมวดหมู่ในการเล่น Quiz ใหม่อีกครั้ง

![finish](https://i.imgur.com/xvMGXcW.png)

## ⚙️ How to Manage
1. กด start เพื่อเริ่ม จะเข้าสู่หน้า Home 
2. แถบบนให้เลือกหัวข้อ Manage 

   ![manage](https://i.imgur.com/TNxxdoA.png)

3. เมื่อเลือกหัวข้อ Manage ในแต่หมวดหมู่จะเปลี่ยนจาก Let's Quiz เป็น Manage เพื่อเตรียมเข้าสู่โหมดการจัดการคำถาม

  
![finish](https://i.imgur.com/MPwoWHg.png)

4. เลือกหมวดหมู่ที่ต้องการเพิ่ม, แก้ไข, ลบ คำถาม/คำตอบ เมื่อได้แล้วให้กด Manage 

5. จะแสดงรายการคำถามทั้งหมดขึ้นมา โดยจะมีปุ่ม Edit เพื่อแก้ไขชุดคำถามที่มีอยู่, Delete เพื่อลบชุดคำถาม และมีปุ่ม Create Quiz เพื่อสร้างชุดคำถามใหม่ขึ้นมาอยู่ด้านบน  (3 ข้อแรกจะไม่สามารถลบได้เนื่องจากเป็น Quiz ตั้งต้นในการเล่นเกม แต่สามารถแก้ไขได้)

![manage2](https://i.imgur.com/ZsKyQ7q.png)

6. ถ้าหากเลือก Edit/Create จะแสดง Modal สำหรับใส่ข้อมูลขึ้นมา

![edit/create](https://i.imgur.com/XNJJkDE.png)

![edit/create2](https://i.imgur.com/UyriVAn.png)

7. ถ้าหากเลือก Delete ระบบจะแจ้งเตือนให้ยืนยันว่าต้องการลบชุดคำถามนี้หรือไม่

![delete](https://i.imgur.com/9UhFCdn.png)

8. กด Back เพื่อย้อนกลับไปหน้า Home 

## 🗂 Components
จำนวน Component มีทั้งหมด 7 component
- Bar -> component สำหรับแสดงผล navbar ด้านบนในการ router-link ไปแต่ละโหมด (quizList จะแสดงผลหมวดหมู่คำถามสำหรับการเล่น, manageList จะแสดงผลหมวดหมู่คำถามสำหรับการ manage )
- Form -> component สำหรับแสดงผล modal การสร้าง form รับข้อมูลที่จะทำการ create และ edit 
- QuizList -> component สำหรับแสดงผลหมวดหมู่คำถาม ให้ผู้เล่นเลือกว่าจะเล่นหมวดหมู่ไหน โดยจะมี router-link ส่ง value ของ title ไป เพื่อระบุว่ากำลัง Quiz ในหมวดหมู่ไหนอยู่
- QuizPlay -> component สำหรับการเล่น Quiz โดยให้ผู้เล่นเลือกคำตอบ และสะสมคะแนนคำตอบที่ตอบถูก
- Show -> component สำหรับแสดงชุดคำถามในโหมด manage เพื่อทำการ create, edit, delete 
- Delete -> component สำหรับแสดง modal ในการ confirm delete
- Search -> component สำหรับช่องการค้นหาหมวดหมู่คำถาม

### Sec 2 Group 8 
| No. | Name              | Student ID   |
|:---:|-------------------|--------------|
|  1  | นาย นิติภูมิ สุทธไชย    | 63130500071  |
|  2  | นาย ภาณุพงศ์ นาคมณี    | 63130500092  |
|  3  | นาย รพีพัฒน์ คล้ำจีน     | 63130500099 |
|  4  | นาย รัญชน์ เลิศจิตธำรง    | 63130500101  |
|  5  | นาย วศิน สุขีทรัพย์   | 63130500104 |

Project นี้เป็นส่วนหนึ่งของรายวิชา INT203 Client-side Web Programming II อาจารย์ผู้สอน : ผศ.ดร อุมาพร สุภสิทธิเมธี
