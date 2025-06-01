import cls from './ProductCard.module.scss'

interface IProductCard {
 discount: number;
 oldPrice: number;
 newPrice: number;
 title: string;
 cover: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ProductCard = (_props: IProductCard) => {
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
