import React from 'react'

const Button = () => {

    const buttonlist=['name','all','news','games','soccer','cricket','movies','rock','surya','tvshows','pockyman','powerrangers','books','stories']
  return (
   
   <div>{
    
    buttonlist.map((data,index)=>{
        return  <button key={index} className='m-2 p-2 bg-gray-200 rounded-lg '>{data}</button>
           

        
    })
    }


    </div>
  )
}

export default Button;