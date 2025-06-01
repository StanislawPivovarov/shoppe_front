import cls from './Badge.module.scss'

export const Badge = (props: {discount: number}) => {
 return(
  <div className={cls.badge}>
    <p>-%{props.discount}</p>
  </div>
 )
}