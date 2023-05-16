import "./hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer'
import { useState } from "react";
const Hotel = () => {

  const [slideNumber,setSlideNumber] = useState(0)
  const [open,setOpen] = useState(false)
  const handleOpen =(index)=>{
    setSlideNumber(index)
    setOpen(true)
  }
  const handleChange=(direction)=>{
    let newSlideNumber;

    if(direction==='l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }
  const photos = [
    {
      src: "https://www.omeruzun.com/assets/images/blog/otel-oda-fotograf-cekimi.jpg",
    },
    {
      src: "https://yasammobilya.com.tr/wp-content/uploads/2016/12/fourway01.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/08/79/dd/45/eski-dedeman-bina-ici.jpg",
    },
    {
      src: "https://cdn.ecctur.com/uploads/lamos-hotel/lamos-hotel-fotograflari-J6BDk.jpg",
    },
    {
      src: "https://cms.booklogic.net/media/10/447/deluxeoda1_3ajfvbemuig4o1.jpg",
    },
    {
      src: "https://goldencarpet.com.tr/uploads/2022/06/otel-dekorasyon-onerileri-724x394.webp",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon onClick={()=>setOpen(false)} icon={faCircleXmark} className="closeIcon"/>
          <FontAwesomeIcon onClick={()=>handleChange('l')} icon={faCircleArrowLeft} className="arrowIcon"/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt=""/>
          </div>
          <FontAwesomeIcon onClick={()=>handleChange('r')} icon={faCircleArrowRight} className="arrowIcon"/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,index) => (
              <div className="hotelImgWrapper" key={index} >
                <img onClick={()=>handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                necessitatibus accusamus ipsa suscipit. A officia tempora
                explicabo rem voluptate alias quia vel, illo quidem maxime
                soluta ex sapiente quisquam similique. Necessitatibus, ut iure
                est et id recusandae modi aut aliquid impedit, obcaecati
                pariatur ducimus! Voluptatibus sequi id nostrum labore quidem!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
