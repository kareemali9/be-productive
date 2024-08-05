import Blog from './img/1234.png'; 
 export default function  Second() {
    return(
        <div>
                <div className="content2">
                   <div className="img">
                    <img src={Blog}  alt="kareem"/>
                   </div>
                        <div className="content-right">
                           <div className="content-center">
                             <h3 className="text4"> من نحن اذا ؟</h3>
                             <button className="click">اعرف المزيد </button>
                          </div>
                                <div className=" achievements">
                                     <h2> مصطفى جبر ھو مستشار انتاجیة في العدید من الشركات، ودرب فوق
                                    ال ٦٠ شخص على رحلة كن منتجا</h2>
                                      <p dir="rtl"> <i className="fas fa-check"></i>مستشار انتاجیة لاصحاب الشركات، ودرب مثل SUTRA, CURVA, GIB GAS.</p>
                                      <p dir="rtl"> <i className="fas fa-check"></i> مستشار تكنولوجیا المعلومات في مشروعPWMP ، بتمویل من الوكالة السویسریة
                                     للتنمیة والتعاون</p>
                                      <p dir="rtl"> <i className="fas fa-check"></i> مسؤول تكنولوجیا المعلومات في مشروع Conmigo ، بتمویل من السفارة
                                       الاسبانیة</p>
                                     <p>مسؤول تكنولوجیا المعلومات في شركة مستشارو التبادل بین الشمال والجنوب بعد رحلتھ الطویلة <i
                                     className="fas fa-check"></i></p>
                                 </div>
                         </div>

                 </div>
        </div>
    );
    
}