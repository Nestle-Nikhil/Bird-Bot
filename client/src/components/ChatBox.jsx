import React, { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Message from './Message.jsx'
import { useReducer } from 'react'
import toast from 'react-hot-toast'
const ChatBox = () => {

    const containerRef = useRef(null)

   const{selectedChat,theme,user,axios,token,setUser} = useAppContext()

const[messages,setMessages]=useState([])
const[loading,setLoading]=useState(false)
const[prompt,setPrompt] = useState('')
const[mode,setMode] = useState('text')
const[isPublished,setIsPublished] = useState(false)

const onSubmit= async(e)=>{
     try{   
       e.preventDefault()
       if(!user) return toast('Login to send message')
         setLoading(true)
      const promptCopy = prompt
      setPrompt('')
      setMessages(prev=>[...prev,{role:'user',content:prompt,timestamp:Date.now(),isImage:false}])

      const {data} = await axios.post(`/api/message/${mode}`,{chatId:selectedChat._id,prompt,isPublished},{headers: {Authorization: token}})

        if(data.success) {
            setMessages(prev=>[...prev,data.reply])
            
        } else {
            toast.error(data.message)
            setPrompt(promptCopy)
        }
     }catch(err){
          toast.error(err.message)
     }finally{
         setPrompt('')
         setLoading(false)
     }
}

useEffect(()=>{
    if(selectedChat) {
       setMessages(selectedChat.messages)
    }
},[selectedChat])

useEffect(()=>{
    if(containerRef.current){
        containerRef.current.scrollTo({
          top:containerRef.current.scrollHeight,
          behavior:"smooth",
        })
          }
},[messages])

  return (
    <div className='flex-1 flex flex-col justify-between m-5
    md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40'>
      
      {/* Chat Message */}
       <div ref={containerRef} className='flex-1 mb-5 overflow-y-scroll'>
           {messages.length === 0 &&(
               <div>
                   <img src={assets.logo_full} alt=""
                   className='w-full max-w-48 sm:max-w-56 rounded-2xl  border border-black' />
                 <p className='mt-5 text-4xl sm:text-6xl text-center
                 text-gray-400 dark:text-white'>What can i help you?</p>
               </div>
           )}
               
            {messages.map((message,index)=> <Message key={index}
            message={message} />)}

            {/* Three Dots Loading */}
             {
                loading && <div className='loader flex items-center gap-1.5'>
                   <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white
                   animate-bounce'></div>
                   <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white
                   animate-bounce'></div>
                   <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white
                   animate-bounce'></div>
                </div>
             }
       </div>
          {mode === 'Image' && (
             <label className='inline-flex items-center gap-2 mb-3 text-sm mx-auto'>
              <p className='text-xs'>Publish Generated Image to Community</p>
              <input type="checkbox" className='cursor-pointer' checked={isPublished} 
              onChange={(e)=>setIsPublished(e.target.checked)} />
             </label>
          )}
       {/* Prompt Input Box */}
         <form onSubmit={onSubmit} className='bg-primary/10 dark:bg-[#583C79]/30 border border-primary
         dark:border-[#80609F]/30 rounded-full w-full max-w-2xl
         p-3 pl-4 mx-auto flex gap-4 items-center' >
            <select onChange={(e)=>setMode(e.target.value)} value={mode}
              className='text-sm pl-3 pr-2 outline-none'>
                <option className='dark:bg-purple-900' value="text">Text</option>
                <option className='dark:bg-purple-900' value="Image">Image</option>
            </select>
            <input onChange={(e)=>setPrompt(e.target.value)} value={prompt} type="text"
            placeholder='Type your prompt here...' className='flex-1
             w-full text-sm outline-none' />
            <button disabled={loading}>
               <img src={loading ? assets.stop_icon : assets.send_icon} className='w-8 cursor-pointer dark:invert' alt="" />
            </button>
         </form>
    </div>
  )
}

export default ChatBox