import React, { useState } from "react";
import ChatBot from "react-simple-chatbot"
import { FaRobot } from "react-icons/fa";

function Chat(){

const [modalOpen, setModalOpen] = useState(false)
const toggleModalClick = () => {
  setModalOpen(!modalOpen);
}
  const steps = [
    {
      id: "0",
      message: "Hello🖐️! I'm Priti Bot🤖, here to assist with any questions about Priti's work.",
      trigger: "1",
    },
    {
      id: "1",
      message: "What is your name🤨❓",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}😁, Please select your issue🧐",
      trigger: "4",
    },
    {
      id: "4",
 options:[
  {value: "Just saying Hello!🖐️", label: "Just saying Hello!🖐️", trigger: "5"},
  {value: "How can I reach out to you🤔?", label: "How can I reach out to you🤔?", trigger: "6"},
  {value: "Daily Reminder⌛", label: "Daily Reminder⌛", trigger: "7"},
 ]
    },
    {
      id: "5",
      message: "Hello!",
      trigger: "8",
    },
    {
      id: "8",
      message: "Thanks for saying hi 😆",
      trigger: "9",
    },
    {
      id: "9",
      message: "I hope you enjoyed looking at my work😊.",
      trigger: "10",
    },
    {
      id: "10",
      message: "Can I help you with anything else❓",
      trigger: "4",
    },
    {
      id: "6",
      message: "For quickly response, hit me up on LinkedIn or Instagram 🚀",
      trigger: "11",
    },
    {
      id: "11",
      message: "Go to Home page for the links.",
      trigger: "12",
    },
    {
      id: "12",
      message: "I'll try my best to get back to you👍.",
      trigger: "13",
    },
    {
      id: "13",
      message: "Anything else❓",
      trigger: "4",
    },
    {
      id: "7",
      message: "The best time for a new beginning is now 🌱",
      trigger: "14",
    },
    {
      id: "14",
      message: "I hope this daily reminder makes you feel happier and more positive✨.",
      trigger: "15",
    },
    {
      id: "15",
      message: "Is there more on your mind❓",
      trigger: "4",
    },
  ];

return(
  <div className="w-full h-screen  flex justify-center items-center bg-purple-200">


<div className="flex flex-col gap-4 justify-center items-center">
<div className="bg-purple-600 absolute rounded-full py-2 px-4 text-center cursor-pointer top-[7%] left-[32%] sm:left-[40%]" onClick={toggleModalClick}><p className="text-2xl text-white"><FaRobot size={25}/></p></div>
{modalOpen && <div>
<ChatBot steps={steps}/>
</div>}
</div>  


 
  </div>
)
}

export default Chat