import { Badge } from '../Badge';
import cls from './ProductCard.module.scss'
interface IProductCard {
 discount: number;
 oldPrice: number;
 newPrice: number;
 title: string;
 cover: string
}

export const ProductCard = (props: IProductCard) => {
 return (
  <div className={cls.product}>
   <div className={cls.img_wrapper}>
    {
     props.discount > 0 && <div className={cls.badge}>
      <Badge discount={props.discount} />
     </div>
    }
    <img className={cls.cover} src={props.cover} />

   </div>
   <div>
    <p className={cls.title}>{props.title}</p>
    {
     props.discount > 0 ?
      <div className={cls.discounted}>
       <p className={cls.old_price_discount}>$ {props.oldPrice.toFixed(2)}</p>
       <p className={cls.actual_price}>$ {props.newPrice.toFixed(2)}</p>
      </div>
      :
      <p className={cls.actual_price}>$ {props.newPrice.toFixed(2)}</p>
    }
   </div>
  </div>
 )
}
