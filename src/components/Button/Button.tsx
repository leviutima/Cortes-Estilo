import React, { ButtonHTMLAttributes, FormEvent } from "react"
import style from '../Button/Button.module.css'

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement>{ 
    children?: React.ReactNode;
    onClick?: (event: FormEvent<HTMLButtonElement>) => void;
}

const Button= ({children, onClick}: PropsButton) => {
    return(
        <>
            <button onClick={onClick} className={style.buttonStyle}>
                {children}
            </button>
        </>
    )
}

export default Button 