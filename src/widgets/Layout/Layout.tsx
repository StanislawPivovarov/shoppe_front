import type {ReactElement} from "react";
import {Header} from "../Header";

import cls from './Layout.module.scss'

const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <div className={cls.layout}>
            <Header/>
            {children}
        </div>
    )
}

export  default  Layout;
