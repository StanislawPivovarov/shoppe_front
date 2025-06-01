import { Input, type InputProps } from "antd"
import cls from './SearchInput.module.scss'
import searchIcon from '../../../../shared/images/icons/search.svg'

export const SearchInput = (props: InputProps) => {
 return(
  <Input
   prefix={
    <img className={cls.prefix} src={searchIcon} alt="search"/>
   }
   placeholder="Search"
   className={cls.input}
   {...props}/>
 )
}
