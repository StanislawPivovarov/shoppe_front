import { Button, type ButtonProps } from "antd";
import cart from '../../../../shared/images/icons/shopping-cart.svg'
import cls from './CartButton.module.scss'

const CartButton = (props: ButtonProps) => {
    return (
        <Button className={cls.button} type={"link"} {...props}>
            <div className={cls.badge}>
                <span className={cls.badge_counter}>1</span>
            </div>
            <img className={cls.cart_icon} src={cart} alt={'cart'} />

        </Button>
    )
}

export default CartButton;
