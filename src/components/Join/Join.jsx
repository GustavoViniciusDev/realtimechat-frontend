import React,{useRef} from 'react'
import io from 'socket.io-client'
import style from './Join.module.css'
import {Input, Button} from '@mui/material'

export default function Join({setChatVisibility, setSocket}) {

    const usernameRef = useRef()

    const handleSubmit = async () => {
        const username = usernameRef.current.value
        if(!username.trim()) return 
        const socket = await io.connect(process.env.REACT_APP_API_URL)
        socket.emit('set_username', username)
        setSocket(socket)
        setChatVisibility(true)
    }

    return(
        <div className={style['join-container']}>
            <h1>Coloque seu nome</h1>
            <Input inputRef={usernameRef} placeholder='Nome de usuário'/>
            <Button sx={{mt:2}} onClick={()=>handleSubmit()} >Entrar</Button>
        </div>
    )
}