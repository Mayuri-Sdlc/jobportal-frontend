
import ReactModal from "react-modal";
import React from "react";
import { CgCloseO } from "react-icons/cg";
import sendMessageIcon from "../../assets/sendMessageIcon.svg"
import { apiGET, apiPOST } from "../../utils/apiHelper";
import { useRef, useState } from "react";
import { useEffect } from "react";


const CommentModal=({showCommentModal,closeCommentModal,docURL , userId}) => {
  
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(9, 30, 66, 0.5)",
    },
  };


  const [allComment, setAllComment] = useState([])
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(true)
  const scrollContainerRef = useRef(null);
  const getCommentByDocs = async () => {
    const response = await apiGET(`document/comment/${userId}/${docURL}`
    )
    if (response.data.status === 201) {
      setAllComment(response.data.data)
      setLoading(true)
    }
  }

  const handleMsgInput =(e)=>{
    setMsg(e.target.value)
  }

  const handleSendMsg= async()=>{
   console.log("Send msg",msg)
   if(msg===""){
    console.log("please enter msg")
   }else{
    const payLoad = {
      "adminComment":msg,
      "documentURL":docURL,
      "userId":userId,
      "recentComment":msg
     }
     try {
      setLoading(false)
      const response = await apiPOST('/document/addComment',payLoad);
      console.log("responseData",response.data.status)
      if(response.data.status===201){
        console.log("Msg Send Successfully")
        getCommentByDocs();
        scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
      }else{
        console.log("Something went wrong!!")
      }
     } catch (error) {
      console.log(error)
     }
   }
   
   setMsg("")
  }

  useEffect(() => {
    if (showCommentModal) {
      getCommentByDocs();
    }
  }, [showCommentModal])



  return (
    <ReactModal
      isOpen={showCommentModal}
      onRequestClose={closeCommentModal}
      contentLabel="Example Modal"
      className="bg-white mx-2 overflow-hidden fixed inset-0 lg:mx-[10%] xl:mx-[20%] h-[85vh] min-h-[600px] mt-24 rounded-2xl "
      style={customStyles}
    >
      <div className=" w-full overflow-y-auto hideScrollbar   pt-8   pb-8 px-8 ">
        <div className=" flex justify-center">
          <div className="  ml-auto font-bold text-[30px]  ">
            Write Your Comment
          </div>
          <button
            onClick={(e) => {
              closeCommentModal();
            }}
            className="ml-auto mr-3  -mt-5 "
          >
            <CgCloseO size="24px" />
          </button>
        </div>


        <ul ref={scrollContainerRef} className="w-full grid grid-cols-2   justify-between   m-0 mb-4 h-[430px] overflow-y-auto hideScrollbar ">
          <div className="flex-col flex items-start ">
            {allComment.map((item ,index) => (
              //left side

              item?.userComment ?
                <li key ={index}className="flex px-6 border rounded-lg w-fit    bg-[#F5F6F7]  py-2 ml-6 mt-10">
                  {item?.userComment}
                </li>
                :
                <li key={index} className=" py-2 ml-6 mt-10">
                  {""}
                </li>



            ))}
          </div>
          <div className="flex-col flex items-end ">
            {allComment.map((item,index) => (
              //right side

              item?.adminComment ?
                <li key={index} className="flex  bg-[#C2C7D0] px-6 border rounded-lg w-fit py-2 ml-6 mt-10  ">
                  {item?.adminComment}
                </li>
                :
                <li key={index} className=" py-2 ml-6 mt-10">
                  {""}
                </li>


            ))}
          </div>
        </ul>

        <div className="relative bottom-0 w-full">
          <input 
          required
          value={msg}
          onChange={handleMsgInput}
          placeholder="Type your message" 
          className="block rounded-[6px] px-2.5 pb-2.5 pt-3 w-full h-[65px] bg-[#F5F6F7] text-txt text-gray-900 border border-inputBorder appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"/>
          {loading && msg!==""?
          <img src={sendMessageIcon} onClick={handleSendMsg} className="absolute top-2 cursor-pointer right-2" alt="messageIcon"/>:""
        }
        {loading?"":
        <div className="absolute top-4 right-2">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
        </div>
        }
          
        </div>
      </div>
      

    </ReactModal>
  );
}

export default CommentModal;
