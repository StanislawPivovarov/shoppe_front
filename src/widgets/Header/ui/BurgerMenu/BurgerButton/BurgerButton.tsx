
import { Button, type ButtonProps } from 'antd'
import cls from './BurgerButton.module.scss'

import burger from '../../../../../shared/images/icons/burger.svg'

export const BurgerButton = (props: ButtonProps) => {
 return(
  <Button type='link' className={cls.button} {...props}>
   <img src={burger} alt="burger"/>
  </Button>
 )
}
