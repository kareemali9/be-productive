import Blog2 from './img/12345.png';
import Blog3 from './img/12345.png';
import Blog4 from './img/12345.png';
import Blog5 from './img/12345.png';
import Blog6 from './img/12345.png';
export default function Four(){
    return(
<div className="ContentFour">
                                      
    <div className="card-container">
                    <div className="card1">
                         <div className="card-image">
                           <img src={Blog2}alt="Course Thumbnail"/>
                             <div className="play-button">&#9658;</div>
                             <div className="badge">Free</div>

                         </div>
                               <div className="card-content">
                                 <h3 className="title">lorem ipsume</h3>
                                 <p className="description">some detailed lorem ipsume</p>
                                <div className="card-footer">
                                       <span className="students">Students<br/>4.4k</span>
                                      <span className="likes">Likes<br/>79</span>
                                 </div>
                               </div>
                    </div>
                                    <div className="card2">
                                        <div className="card-image">
                                         <img src={Blog3} alt="Course Thumbnail"/> 
                                          <div className="play-button">&#9658;</div>
                                         </div>
                                             <div className="card-content">
                                                <h3 className="title">lorem ipsume</h3>
                                                <p className="description">some detailed lorem ipsume</p>
                                                 <div className="card-footer">
                                                     <span className="students">Students<br/>4.4k</span>
                                                     <span className="likes">Likes<br/>79</span>
                                                 </div>
                                             </div>
                                    </div>
      <div className="card3">
        <div className="card-image">
           <img src={Blog4} alt="Course Thumbnail"/>
          <div className="play-button">&#9658;</div>

        </div>
        <div className="card-content">
          <h3 className="title">lorem ipsume</h3>
          <p className="description">some detailed lorem ipsume</p>
          <div className="card-footer">
            <span className="students">Students<br/>4.4k</span>
            <span className="likes">Likes<br/>79</span>
          </div>
        </div>

      </div>
      <div className="card4">
        <div className="card-image">
         <img src={Blog5} alt="Course Thumbnail"/>
          <div className="play-button">&#9658;</div>
        </div>
        <div className="card-content">
          <h3 className="title">lorem ipsume</h3>
          <p className="description">some detailed lorem ipsume</p>
          <div className="card-footer">
            <span className="students">Students<br/>4.4k</span>
            <span className="likes">Likes<br/>79</span>
          </div>
        </div>
      </div>
                        <div className="card5">
                             <div className="card-image">
                             <img src={Blog6} alt="Course Thumbnail"/>
                               <div className="play-button">&#9658;</div>
                             </div>
                                   <div className="card-content">
                                       <h3 className="title">lorem ipsume</h3>
                                       <p className="description">some detailed lorem ipsume</p>
                                             <div className="card-footer">
                                                 <span className="students">Students<br/>4.4k</span>
                                                 <span className="likes">Likes<br/>79</span>
                                             </div>
                                    </div>
                        </div>



    </div> 
</div>




    );
}