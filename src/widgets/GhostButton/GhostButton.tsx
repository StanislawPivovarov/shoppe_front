import { Button, type ButtonProps } from "antd";

import cls from './GhostButton.module.scss'

export const GhostButton = (props: ButtonProps) => {
 return(
  <Button className={cls.button} type="link" {...props}>
   {props.children}
  </Button>
 )
}