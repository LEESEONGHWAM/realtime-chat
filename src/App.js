import React, { useState, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './context/index';
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
/* Router */
import AppRouter from './router/AppRouter';
/* Styles */
import './styles/App.css'

function App() {
    const [isAuth, setAuth]= useState(false);
    const [users, setUsers] = useState([
        {id: 1, name: 'Admin', password: '1234'},
        {id: 2, name: 'Lee', password: '1'},
        {id: 3, name: 'Choi', password: '1'},
        {id: 4, name: 'test_user', password: '1'},
        {id: 5, name: '이성환', password: '1'},
        {id: 6, name: '생기원', password: '1'},
        {id: 7, name: '김창룡', password: '1'},
        {id: 8, name: 'kim', password: '1'},
        {id: 9, name: 'KHT', password: '1'},
    ]);
    const [activeUser, setActiveUser] = useState({})
    const [chat, setChat] = useState([
        activeUser,
    ])
    const [modal, setModal] = useState(isAuth ? false : true);
    const [placeholder, setPlaceholder] = useState('내용을 입력해주세요..')
    const [search, setSearch] = useState('')

    const friendSearcher = useMemo(() => {
        return users.filter(user => user.name.includes(search))
    }, [search, users])

    const createUser = (newUser) => {
        setUsers([...users, newUser])
    }

    const startChatting = (receiver) => {
        if (chat.length > 1) {
            chat.splice(chat.length - 1, 1)
        }
        setChat([...chat, receiver])
    }

    console.log(chat)
    
    const firebaseConfig = {
        apiKey: "AIzaSyAxLhxb028PiDKMZU76BNl5aiXwA7X6dGg",
        authDomain: "aifit-chatbot.firebaseapp.com",
        projectId: "aifit-chatbot",
        storageBucket: "aifit-chatbot.appspot.com",
        messagingSenderId: "203979072509",
        appId: "1:203979072509:web:c3c11691bfb4fd8b3daf94",
        measurementId: "G-1C9T3M0CCP"
    }
    
    const app = initializeApp(firebaseConfig)
    const firestore = getFirestore(app)

    console.log(`${activeUser.name} chats with ${chat.length === 2 ? chat[1].name : 'nobody :('}`)

    return (
        <AuthContext.Provider value={{
            isAuth,
            setAuth,
            app,
            firestore
        }}>
            <BrowserRouter>
                <div className='App'>
                    <AppRouter
                        isAuth={isAuth}
                        setAuth={setAuth}
                        modal={modal}
                        activeUser={activeUser}
                        setActiveUser={setActiveUser}
                        setModal={setModal}
                        users={friendSearcher}
                        placeholder={placeholder}
                        setPlaceholder={setPlaceholder}
                        createUser={createUser}
                        start={startChatting}
                        chat={chat}
                        search={search}
                        setSearch={setSearch}
                    />
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;