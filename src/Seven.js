export default function Sevev(){
    return(
<div>
 <div className="last-content">
    
 <div className="text-center">
        <h2 className="h2">تواصل معنا الان</h2>
        <p> هل تريد اي استفسار؟ لا تتردد بالتواصل معنا</p>
         <div class="name-number">
           <input type="number" id="phone_number" className="first-input" required placeholder="رقم الهاتف" name="number" dir="rtl" />
          <input type="name"  id="full_name" className="sec2" placeholder="الاسم" name="fullname" dir="rtl" />
          <input type="email"  id="email"  className="email" required placeholder="البريد الالكتروني" name="email" dir="rtl" />
          <input type="text" id="message" className="detailes" placeholder="تفاصيل الرساله" name="detailes" dir="rtl" />
                <div className="send">
                     <button type="submit"> ارسل الان </button>
                </div>
        </div>
      
    </div>
 </div>
          
</div>
    );
}