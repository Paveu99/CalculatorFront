import React, {ReactNode} from 'react';
import './Dialog.css'

interface Props {
    title?: string
    children: ReactNode
}


export const Dialog = (props: Props) => {

    return <div className="Dialog__Container">
        {props.title &&
            <div className="Dialog__title">
                {props.title}
            </div>
        }
        <div className="Dialog__content">
            {props.children}
        </div>
    </div>
}