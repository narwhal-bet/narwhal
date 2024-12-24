   // بررسی تعداد بازدیدها در Local Storage
   let viewCount = localStorage.getItem('viewCount');

   // اگر مقدار وجود نداشت، آن را 0 تنظیم کنید
   if (!viewCount) {
       viewCount = 0;
   }

   // افزایش تعداد بازدیدها
   viewCount++;

   // ذخیره تعداد جدید در Local Storage
   localStorage.setItem('viewCount', viewCount);

   // نمایش تعداد بازدیدها
   document.getElementById('viewCount').innerText = viewCount;