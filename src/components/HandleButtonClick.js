import React,{useState} from 'react'

function HandleButtonClick()
{
    const [edit, setEdit] = useState(false);

    const handleClick = () =>{
        setEdit(!edit)
    }
    return (
        <button onClick ={()=> handleClick(id)}>
            {props.children}
        </button>
    )
}

export default HandleButtonClick
