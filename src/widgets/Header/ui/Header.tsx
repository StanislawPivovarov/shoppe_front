import cls from './Header.module.scss'
import logo from '../../../shared/images/SHOPPE.svg'
import CartButton from "./CartButton/CartButton.tsx";
import { BurgerButton } from './BurgerMenu/BurgerButton/BurgerButton.tsx';

export const Header = () => {
    return(
        <div className={cls.header}>
            <img className={cls.logo} src={logo} alt={'logo'}/>
            <div className={cls.functional_block}>
                <CartButton/>
                <BurgerButton/>
            </div>
        </div>
    )
}
