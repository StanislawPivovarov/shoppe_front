import { ProductCard } from '../ProductCard'
import cls from './ShopLatest.module.scss'
import { products } from '../../shared/mock'


export const ShopLatest = () => {
 return(
  <div className={cls.wrapper}>
   <div className={cls.title}>
    <h5 className={cls.title_text}>Shop The Latest</h5>
    <a className={cls.view_all} href="#">View all</a>
   </div>
   <div className={cls.grid}>
    {
     products.map((item) => {
      return(
       <ProductCard
       discount={item.discount}
       oldPrice={item.oldPrice}
       newPrice={item.newPrice}
       title={item.title}
       cover={item.cover}
       />
      )
     })
    }
   </div>
  </div>
 )
}
