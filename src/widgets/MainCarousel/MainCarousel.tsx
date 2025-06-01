import { Carousel } from "antd"
import { carouselItems } from "../../shared/mock"
import cls from './MainCarousel.module.scss'
import { GhostButton } from "../GhostButton/GhostButton"

export const MainCarousel = () => {
 console.log(carouselItems)
 return (
  <Carousel className={cls.carousel}>
   {
    carouselItems.map((item) => {
     return (
      <div className={cls.carousel_img}>
       <div className={cls.carousel_img_wrapper}>
        <div className={cls.info}>
         <h4>{item.title}</h4>
         <p>$ {item.price.toFixed(2)}</p>
         <GhostButton>View Product</GhostButton>
        </div>
        <img className={cls.cover} src={item.cover} alt="cover" />
       </div>
      </div>
     )
    })
   }
  </Carousel>
 )
}
