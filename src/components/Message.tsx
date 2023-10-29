import { useState } from "react"

interface Props {
    message: string,
    date: string,
    sender: string
}
export const Message: React.FC<Props> = ({ message, date, sender }) => {
    const [showDate, setShowDate] = useState(false)
    return (
        <>
            {showDate ? <p className={`${sender === "me" ? 'text-right' : 'text-left'} mx-2 text-xs text-gray-600 mb-1`}>{sender} - {date}</p> : <p className="mb-2"></p>}

            {sender !== "me" &&
                <div className="chat-message mb-2" onClick={() => setShowDate(!showDate)}>
                    <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 items-start  order-2">
                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-700 text-left">{message}</span></div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 ml-2 rounded-full order-1"></img>
                    </div>
                </div>
            }
            {sender === "me" &&
                <div className="chat-message" onClick={() => setShowDate(!showDate)}>
                    <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 items-end">
                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white text-left">{message}</span></div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}