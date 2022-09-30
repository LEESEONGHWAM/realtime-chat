import React, {useState} from 'react'

import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import ReportComponent from './ReportComponent'

import cl from '../styles/components/ModalWindow.module.css'
import background from '../styles/images/modalBackground_2.jpg'

const ModalWindow = ({vision, users, setModal, setActiveUser, createUser}) => {
    const [form, setForm] = useState(true)
    const [report, setReport] = useState(false)
    const [reportMessage, setReportMessage] = useState('')

    const createReport = (newReport) => {
        setReport(true)
        setReportMessage(newReport)
    }

    const redirectToRegistration = () => {
        setForm(false)
        setReport(false)
    }

    return (
        <div className={vision ? cl.modal : cl.nonActive}>
            <div className={cl.modalBox}>
                <h1 className={cl.modalTitle}>{form ? 'AIFIT에 오신걸 환영합니다' : '새로운 계정을 생성해주세요!'}</h1>
            </div>
            <div>
                <img src={background} className={cl.modalBackground} alt="" />
            </div>
            <div className={cl.formBox}>
                <LoginForm form={form} users={users} setModal={setModal} setActiveUser={setActiveUser} createReport={createReport} setReport={setReport} />
                <RegistrationForm form={form} setForm={setForm} createUser={createUser} createReport={createReport} setReport={setReport} />
            </div>
            <ReportComponent report={reportMessage} vision={report} />
            <div className={cl.modalBox}>
                <h1 className={form ? cl.modalSubTitle : cl.nonActive}>Don't have account already ? <span onClick={redirectToRegistration} className={cl.modalLink}>Click here</span>.</h1>
            </div>

        </div>
    )
}

export default ModalWindow