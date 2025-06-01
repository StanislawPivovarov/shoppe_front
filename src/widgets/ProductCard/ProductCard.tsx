import cls from './ProductCard.module.scss'

interface IProductCard {
 discount: number;
 oldPrice: number;
 newPrice: number;
 title: string;
 cover: string
}

export const ProductCard = (props: IProductCard) => {
 return(
  <div className={cls.product}>
   <div className={cls.img_wrapper}>

   </div>
   <div>
    <p></p>
    <p></p>
   </div>
  </div>
 )
}
