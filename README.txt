# 🔐 نظام المصادقة (Authentication System)

## 📌 الوصف

نظام Backend للمصادقة باستخدام Node.js و Express، mongoDB يتيح إنشاء حسابات وتسجيل الدخول بشكل آمن باستخدام JWT.

---

## 🚀 المميزات

- تسجيل مستخدم جديد (Register)  
- تسجيل دخول (Login)  
- حماية المسارات باستخدام JWT  
- تشفير كلمات المرور باستخدام bcrypt  
- Validation للمدخلات (email / password)  
- رسائل خطأ واضحة  
- كود منظم وقابل للتطوير  

---

## 🛠️ التقنيات المستخدمة

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT  
- bcrypt  
- express-validator

---

## ⚙️ طريقة التشغيل

1.  قم بتحميل المشروع وفك الضغط\
2.  افتح المشروع باستخدام VS Code\
3.  افتح Terminal داخل المشروع\
4.  ثبت الحزم:

    npm install

    npm start     

---

## 📡 الـ API Endpoints

### 🔐 Auth

-   تسجيل حساب:

    POST /api/auth/register

-   تسجيل دخول:

    POST /api/auth/login

---

## 📬 تجربة الـ API

يمكنك تجربة جميع الـ API من خلال Postman:

🔗https://documenter.getpostman.com/view/49409127/2sBXqDtNzY

---

## 📌 ملاحظات

-   تأكد من تشغيل MongoDB قبل تشغيل المشروع\
-   لا تشارك ملف `.env`\
-   الكود قابل للتطوير بسهولة