import React from 'react'
import './typography.css'
interface TypographyProps{
    variant:string,
    content:string,
    styles?:React.CSSProperties
}
export default function Typographys(props:TypographyProps) {
    return (
        <div className={props.variant} style={props.styles}>{props.content}</div>
    )
}
