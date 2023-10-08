import React, { useEffect, useRef, useState } from 'react'
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import NearMeIcon from '@mui/icons-material/NearMe';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { axiosRequest } from '../../utils/axiosRequest';
import { getToken } from '../../utils/token';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import FadeMenu from './FadeMenu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useParams } from 'react-router-dom';
import chatcss from './Chat.module.css'
import AddIcon from '@mui/icons-material/Add';
import FadeMenu from './FadeMenu';

import chatIcon from '../../assets/vaadin_chat.png'

const Chat = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    let {id} = useParams()

    const navigate = useNavigate()

    const myId = getToken()?.sid
    const [text, setText] = useState("")
    const [user, setUser] = useState([])
    const [post, setPost] = useState([])
    const [chat, setChat] = useState([])
    const [message, setMessage] = useState([])

    const [userX, setUserX] = useState({})

    const [chatID, setChatID] = useState(null)

    const [modalChat, setModalChat] = useState(false)
    const [deleteId, setdeleteId] = useState(null)

    const [modalAdd, setModalAdd] = useState(id != 0)
    const [searchText, setSearchText] = useState("")
    const [timeId, setTimeId] = useState(id)

    // console.log(username);

    // caht
    let chatContainerRef = useRef(null)

    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    };    

    // get User
    async function getUser(){
        try {
            let {data} = await axiosRequest.get('User/get-users')
            setUser(data.data)
            // console.log(data.data);
        } catch (error) {
            
        }
    }

    // get Chat
    async function getChat(){
        try {
            let {data} = await axiosRequest.get('Chat/get-chats')
            setChat(data.data)
            // console.log(data.data);
        } catch (error) {
            
        }
    }

    // delete Chat
    async function deleteChat(){
        try {
            let {data} = await axiosRequest.delete(`Chat/delete-chat?chatId=${deleteId}`)
            getChat()
            setModalChat(false)
            setChatID(null)
        } catch (error) {
            
        }
    }

    // get Message of Chat
    async function getMessage(id){
        try {
            let {data} = await axiosRequest.get(`Chat/get-chat-by-id?chatId=${id}`)
            setMessage(data.data.reverse())
            setChatID(id)
        } catch (error) {
            
        }
    }

    // send Message
    const sendMessage = async(event)=>{
        event.preventDefault()
            if(text){
                try {
                    let obj = {
                        "chatId": chatID,
                        "messageText": text
                    }
                    let {data} = await axiosRequest.put('Chat/send-message', obj)
                    getMessage(chatID)
                    setText("")
                } catch (error) {
                    
                }
            }
            else{
                getMessage(chatID)
                // alert("Plz type some text !")
            }
        // console.log(`chatId: ${chatID}, messageText: ${text}`);
    }

    // delete Message
    async function deleteMessage(id){
        try {
            let {data} = await axiosRequest.delete(`Chat/delete-message?massageId=${id}`)
            getMessage(chatID)
        } catch (error) {
            
        }
    }
    // create Chat
    async function createChat(id, user){
        if(!chat.find(e=>e.sendUserId == id || e.receiveUserId == id)){
            try {
                let {data} = await axiosRequest.post(`Chat/create-chat?resceiveUserId=${id}`)
                getChat()
                setModalAdd(false)    
                setSearchText("")
            } catch (error) {
            }
        }else{
            console.log(id, chat?.find((e)=> e.receiveUserId == id || e.sendUserId == id).chatId);
            setUserX(user)
            setChatID(chat?.find((e)=> e?.receiveUserId == id || e.sendUserId == id).chatId)
            getMessage(chat?.find((e)=> e?.receiveUserId == id || e.sendUserId == id).chatId)
            setModalAdd(false)    
            setSearchText("")
        }
    }
    // sendUserId
    // receiveUserId

    // useEffect(()=>{
    //   const initialTimeout = 1000; 

    //   const initialTimeoutId = setTimeout(() => {
        
    //   getMessage(chatID)
    //   }, initialTimeout);
  
    //   const interval = setInterval(() => {
        
    //   getMessage(chatID)
    //   }, 5000);
    //   return () => {
    //     clearTimeout(initialTimeoutId);
    //     clearInterval(interval);
    //   };
    // },[])

    useEffect(()=>{

      getUser()
      getChat()
    },[])

    useEffect(() => {
      scrollToBottom();
    }, [chatID, sendMessage]);

    return (
      <div className='ml-[0px] container1 flex justify-between items-center'>
          {/* sideBar */}
        <div className="w-[80px] h-[680px] mr-[10px] flex flex-wrap justify-center content-between rounded-[25px] bg-[#3797f0]">
          <div className="w flex flex-wrap justify-center content-between">
            <div className="w-[52px] h-[52px] mt-[24px] overflow-hidden rounded-[50%] border-[2px] bg-[gray] border-[#efefef] flex justify-center items-center">
              <AccountCircleIcon style={{fontSize:"80px", color:"#efefef", backgroundColor:"white"}}/>
            </div>
            <div onClick={()=>setChatID(null)} className={`${chatcss.hoverBtn} w-[65px] h-[65px] rounded-[10px] mt-[30px] text-[white] flex justify-center items-center`}><HomeOutlinedIcon style={{fontSize:"35px"}}/></div>
            <div className={`${chatcss.hoverBtn} w-[65px] h-[65px] rounded-[10px] mt-[15px] text-[white] flex justify-center items-center`}><ChatBubbleOutlineOutlinedIcon style={{fontSize:"30px"}}/></div>
            <div className={`${chatcss.hoverBtn} w-[65px] h-[65px] rounded-[10px] mt-[15px] text-[white] flex justify-center items-center`}><NotificationsNoneOutlinedIcon style={{fontSize:"35px"}}/></div>
            <div className={`${chatcss.hoverBtn} w-[65px] h-[65px] rounded-[10px] mt-[15px] text-[white] flex justify-center items-center`}><SettingsOutlinedIcon style={{fontSize:"30px"}}/></div>
          </div>
          <div className={`chatcss.hoverBtn w-[65px] h-[65px] rounded-[10px] mb-[15px] text-[white] flex justify-center items-center`}><LogoutOutlinedIcon style={{fontSize:"30px"}}/></div>
        </div>  
        <div className="w h-[710px]"></div>
        {/* chat */}
        <div className="w-[92%] h-[680px] overflow-hidden flex border-[1px] border-gray-300 rounded-[25px]">
            {/* users */}
            <div className="w-[29.2%] h-[100%] justify-center content-between flex flex-wrap border-r-[1px] border-r-gray-300">
                <div className="w-[90%] h-[5%] mt-[20px] flex justify-between items-center">
                    <p className='text-[20px] font-bold'>{getToken()?.name}</p>
                    <p className='text-[20px] font-bold'>{getToken()?.userName}</p>
                    <button onClick={()=>setModalAdd(true)} className='w-[40px] h-[100%] hover:text-gray-500'>
                        <AddIcon style={{fontSize:"30px"}}/>
                    </button>
                </div> 
                <div className="w-[100%] h-[90%] bg-[#e7e7e7] mt-[10px] overflow-y-scroll border-t-[1px] border-t-gray-300">
                    {
                      chat?.map((e,i)=>{        
                        let thisUser = user.find(a=> {
                                if(e.receiveUserId !== myId){
                                    return a.id == e.receiveUserId
                                }else{
                                    return a.id == e.sendUserId
                                }
                          })
                          return(
                            <div key={i} className="w-[100%] px-[10px] bg-[white] flex justify-between items-center py-[10px] h-[76px] border-b-[1px] border-b-gray-300">  
                                <div onClick={()=>{getMessage(e.chatId),setUserX(thisUser)}} className="w-[80%] cursor-pointer flex">
                                  <div className="w-[60px] h-[60px] overflow-hidden rounded-[50%] border-[2px] bg-[gray] border-[#efefef] flex justify-center items-center">
                                    {/* <AccountCircleIcon style={{fontSize:"80px", color:"#efefef", backgroundColor:"white"}}/> */}
                                    {   
                                      thisUser?.avatar?
                                      <img src={`${import.meta.env.VITE_APP_FILES_URL}${thisUser?.avatar}`}  className='w-[56px] h-[56px] object-cover' alt="" />:
                                      <AccountCircleIcon style={{fontSize:"80px", color:"#efefef", backgroundColor:"white"}}/>
                                    }
                                  </div>
                                  <div className="w-[40%]  ml-[24px] flex flex-wrap justify-start content-evenly">
                                    <p className='text-[14px] w-[100%]'>{thisUser?.userName}</p>
                                    <p className='text-[12px] text-[#737373]'>{thisUser?.email}</p>
                                  </div>
                                </div>
                                <button onClick={()=>{
                                  setdeleteId(e.chatId),
                                  setModalChat(true)
                                  }} className="w-[30px] h-[30px] flex justify-center cursor-pointer items-center text-[#737373] hover:text-[black] text-[25px]">
                                    <MoreVertIcon/>
                                </button>
                            </div>
                          )    
                      })
                    } 
                </div>
            </div>

            {/* message */}
            <div className="w-[71.5%] h-[100%] mr-[10px] mt-[1px]">
                  {
                    !chatID?
                    <div className="w-[100%] h-[100%] flex justify-center items-center">
                      <div className="w-[410px] text-center flex flex-wrap justify-center contents-start">
                          {/* <div className="w-[96px] h-[96px] rounded-[50px] flex justify-center items-center border-[3px] border-[black]">
                              <MessageOutlinedIcon style={{fontSize:"40px"}}/>
                          </div> */}
                              <img src={chatIcon} className='w-[200px] h-[200px]' alt="" />
                          <p className='text-[20px] w-[100%] my-[10px]'>Your messages</p>
                          <button onClick={()=>setModalAdd(true)} className='px-[40px] h-[35px] rounded-[12px] text-[15px] text-[white] font-bold bg-[#0095f6]'>Send Message</button>
                      </div>
                    </div>
                    :
                    <div className="w-[100%]  h-[100%]">
                        <div className="w-[100%] h-[10%] flex justify-between items-center border-b-[1px] border-b-gray-300">
                            <div className="w-[40%] flex my-[20px] h-[44px]">
                                <div className="w-[44px] h-[44px] border-[2px] border-[#efefef] flex justify-center items-center overflow-hidden rounded-[50%] ml-[20px]">
                                    {
                                        userX.avatar?
                                        <img src={`${import.meta.env.VITE_APP_FILES_URL}${userX?.avatar}`} className='h-[44px] object-cover' alt="" />:
                                        <AccountCircleIcon style={{fontSize:"70px", color:"#efefef"}}/>
                                    }
                                </div>
                                <div className="w-[200px] cursor-pointer ml-[10px] flex flex-wrap justify-start content-evenly">
                                    <p className='text-[16px] font-bold w-[100%]'>{userX?.userName}</p>
                                </div>
                            </div>
                            
                            <button onClick={()=>{
                            setdeleteId(chatID),
                            setModalChat(true)
                            }} className="w-[45px] h-[45px] mr-[5px] flex justify-center cursor-pointer items-center text-[#737373] hover:text-[black] text-[25px]">
                            <MoreVertIcon/>
                            </button>
                        </div>
                        <div className="w-[100%] h-[80%] flex flex-wrap justify-center content-start overflow-y-scroll " ref={chatContainerRef}>
                            <div className="w-[100%] py-[22px] text-center text-[12px] text-[#65676b]">
                                {/* <p>19 сен 2023 г., 16:43</p> */}
                            </div>
                            {/* start chat */}
                            {
                              message?.map((e)=>{
                              let logic = e.userId == myId
                              return(
                                logic?<div className="w-[100%] justify-end my-[2px] flex mr-[10px]">
                                        {logic?<FadeMenu deleteMessage = {deleteMessage} id= {e.messageId}/>:null}
                                        <p className='max-w-[654px] text-[white] bg-[#3797f0] overflow-hidden min-h-[34px]  text-[16px] py-[5px] px-[10px] rounded-t-lg rounded-l-lg'>{e?.messageText}</p>
                                </div>:
                                <div className="w-[100%] justify-start  my-[2px] flex ml-[10px]">
                                    <p className='max-w-[654px] bg-[#efefef] overflow-hidden min-h-[34px]  text-[16px] py-[5px] px-[10px] rounded-b-lg rounded-r-lg'>{e?.messageText}</p>
                                </div>        
                              )
                            })
                            }
                        </div>
                        <div className="w-[100%] h-[10%] flex justify-center items-center bg-[white] rounded-[25px]">
                            <div className="w-[95%] h-[45px] flex justify-center items-center rounded-[12px] border-[1px] border-gray-300">
                                <form onSubmit={sendMessage} action="" className='w-[98%] flex justify-evenly items-center'>
                                    <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder='Write a message' className='outline-none text-[15px] w-[80%] h-[40px]'/>
                                    {text?<button type='submit' className='w-[15%] text-end text-[14px] text-[#0095fe] hover:text-[#737373] font-bold'>Send</button>:
                                    <div className="w-[15%]"></div>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                  }
            </div>
        </div>

        {/* modal Delete */}
        {   
            modalChat?
            <div style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}} className="w-[100%] h-[110vh] top-0 left-0 fixed flex justify-center items-center">
            <div className="w-[200px] h-[110px] flex flex-wrap justify-center content-evenly  rounded-[12px] bg-[white]">
                <div onClick={()=>deleteChat()} className="w-[100%] h-[60px] cursor-pointer flex justify-center items-center border-b-[1px] border-b-gray-300 mt-[10px]">
                    <p className='text-[14px] text-[red] font-bold'>Delete Chat</p>
                </div>
                <div onClick={()=>setModalChat(false)} className="w-[100%] h-[60px] text-[#2196F3] cursor-pointer flex justify-center items-center">
                    <p className='text-[14px] font-bold'>Cancel</p>
                </div>
            </div>
            </div>:""
        }
        {
            modalAdd?
            <div style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}} className="w-[100%] h-[110vh] top-0 left-0 fixed flex justify-center items-center">
                <div className="w-[500px] h-[450px] rounded-[12px] bg-[white]">
                    <div className="w-[100%] h-[55px] flex justify-between items-center">
                        <div className='w-[55px] h-[55px]'></div>
                        <p className='text-[16px] font-bold'>New message</p>
                        <button onClick={()=>{setModalAdd(false),setSearchText(""),setTimeId(null)}} className='w-[55px] h-[55px]'><CloseIcon/></button>
                    </div>
                    <div className="w-[100%] h-[40px] flex justify-start items-center pl-[20px] border-[1px] border-gray-300">
                        <p className='text-[16px] font-bold'>To :</p>
                        <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="text" className='h-[38px] w-[75%] outline-none pl-[15px] text-[15px]' />
                    </div>
                    <div className="w-[100%] h-[310px] overflow-y-auto flex flex-wrap justify-start content-start">
                        {
                            user?.filter((e)=>e?.userName?.toLowerCase()?.includes(searchText?.toLowerCase() || e?.email?.toLowerCase()?.includes(searchText?.toLowerCase())) || e.id == timeId)
                            .map((e)=> {
                                return (
                                    <div className="w-[100%] hover:bg-[#efefef] px-[20px] flex justify-between items-center py-[10px] h-[76px]">
                                        <div className="w-[55px] h-[55px] overflow-hidden rounded-[50%] border-[2px] bg-[gray] border-[#efefef] flex justify-center items-center">
                                            {   
                                                e.avatar?
                                                <img src={`${import.meta.env.VITE_APP_FILES_URL}${e?.avatar}`}  className='w-[56px] h-[56px] object-cover' alt="" />:
                                                <AccountCircleIcon style={{fontSize:"80px", color:"#efefef", backgroundColor:"white"}}/>
                                            }
                                            {/* <AccountCircleIcon style={{fontSize:"80px", color:"#efefef", backgroundColor:"white"}}/> */}
                                        </div>
                                        <div className="w-[40%] mr-[90px] cursor-pointer ml-[10px] flex flex-wrap justify-start content-evenly">
                                            <p className='text-[14px] w-[100%]'>{e?.userName}</p>
                                            <p className='text-[12px] text-[#737373]'>{e?.email}</p>
                                        </div>
                                        <button onClick={()=>createChat(e.id, e)} className="w-[120px] h-[35px] flex justify-center cursor-pointer items-center rounded-[12px] bg-[gray] hover:bg-[#0095ee] font-bold text-[white] text-[12px]">
                                            Message
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button onClick={()=>{setModalAdd(false),setSearchText(""),setTimeId(null)}} className='w-[100%] h-[40px] text-[#0095ee]'>
                        <p className='text-[15px] font-bold text-[#0095ee]'>Cancel</p>
                    </button>
                </div>
            </div>:""
        }
      </div>
    )
  }

export default Chat