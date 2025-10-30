import ChatWindow from "../../components/ChatWindow/ChatWindow";
import Sidebar from "../../components/Sidebar/Sidebar";


const Chat: React.FC = () => {

    return <>
        <div className="min-h-screen flex bg-gray-100">
            <div className="w-full sm:block sm:w-1/3 sm:max-w-[456px] min-h-screen">
                <Sidebar />
            </div>
            <div className="sm:flex flex-1 min-h-screen">
                <ChatWindow />
            </div>
        </div>
    </>
}

export default Chat;