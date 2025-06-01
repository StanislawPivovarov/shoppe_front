import cls from './ShopLatest.module.scss'


export const ShopLatest = () => {
 return(
  <div className={cls.wrapper}>
   <div className={cls.title}>
    <h5 className={cls.title_text}>Shop The Latest</h5>
    <a className={cls.view_all} href="#">View all</a>
   </div>
   <div className={cls.grid}>

   </div>
  </div>
 )
}
