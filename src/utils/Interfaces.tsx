import React, { MouseEventHandler } from 'react';


export interface IProps {
    text: string | undefined, color: string, font: string
}


export interface IPropswSetState {
    props: IProps;
    setProps: React.Dispatch<React.SetStateAction<IProps>>;
    onSubmit: MouseEventHandler<HTMLButtonElement>
}
