import { useState } from "react";
import "./Popup.css"

export default function Popup() {
    const [popupWindowStyle, setPopupWindowStyle] = useState("popup-close");
    const [giftButtonStyle, setGiftButtonStyle] = useState("popup-open");
    const [closeButtonStyle, setCloseButtonStyle] = useState("popup-close");

    const openForm = async (e: any) => {
        if (popupWindowStyle === "popup-close") {
            setPopupWindowStyle("popup-open");
            setGiftButtonStyle("popup-close");
            setCloseButtonStyle("popup-open");
        }
        else {
            setPopupWindowStyle("popup-close");
            setGiftButtonStyle("popup-open");
            setCloseButtonStyle("popup-close");
        }
    }
    let popupBoxStyle = popupWindowStyle + " position-relative bottom-0 end-0";
    return (
        <div className="popup position-fixed bottom-0 end-0">

            <div className={popupBoxStyle} id="myForm" style={{ marginBottom: "35px"}}>
                <form className="form-container">
                    <div className="pretext" style={{ marginLeft: "15px" }}>
                        <span>👋 Hi, Name</span>
                    </div>
                    <div>
                        <div
                            className="ant-card"
                            style={{
                                minHeight: '10%',
                                margin: '5px 15px',
                                borderRadius: 6,
                                border: '1px solid rgb(221, 221, 221)',
                                boxShadow: 'rgba(0, 0, 0, 0.2) 3px 5px 30px -10px',
                            }}
                        >
                            <div className="ant-card-body" style={{ padding: 0 }}>
                                <div>
                                    <div className="nector-hover" style={{ padding: 15 }}>
                                        <div
                                            className="nector-center nector-text nector-cursor-pointer"
                                            style={{ gap: 10, fontWeight: 600 }}
                                        >
                                            <div style={{ flex: '1 1 0%' }}>
                                                <span
                                                    className="nector-title"
                                                    style={{ fontWeight: 'normal' }}
                                                >
                                                    0
                                                </span>
                                                <span
                                                    className="ant-typography nector-subtext"
                                                    style={{ marginLeft: 6 }}
                                                >
                                                    Points
                                                </span>
                                            </div>
                                            <span className="nector-text">
                                                <span className="nector-subtext" style={{ marginRight: 5 }}>
                                                    History
                                                </span>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 1024 1024"
                                                    className="nector-text"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                        color: 'rgb(68, 68, 68)',
                                                        display: 'inline-block',
                                                        marginLeft: 'auto',
                                                    }}
                                                >
                                                    <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="nector-hover"
                                        style={{
                                            padding: 15,
                                            borderBottom: '1px solid rgb(221, 221, 221)',
                                        }}
                                    >
                                        <div
                                            className="nector-center nector-text nector-cursor-pointer nector-hover"
                                            style={{
                                                justifyContent: 'flex-start',
                                                gap: 10,
                                                color: 'rgb(7, 38, 82)',
                                                fontWeight: 600,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >

                                            </div>
                                            <span
                                                className="nector-text"
                                                style={{ fontWeight: 'normal', color: 'rgb(0, 0, 0)' }}
                                            >
                                                Your Rewards
                                            </span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="nector-hover"
                                        style={{
                                            padding: 15,
                                            borderBottom: '1px solid rgb(221, 221, 221)',
                                        }}
                                    >
                                        <div
                                            className="nector-center nector-text nector-cursor-pointer nector-hover"
                                            style={{
                                                justifyContent: 'flex-start',
                                                gap: 10,
                                                color: 'rgb(7, 38, 82)',
                                                fontWeight: 600,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                            </div>
                                            <span
                                                className="nector-text"
                                                style={{ fontWeight: 'normal' }}
                                            >
                                                How To Earn
                                            </span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="nector-hover" style={{ padding: 15 }}>
                                        <div
                                            className="nector-center nector-text nector-cursor-pointer"
                                            style={{
                                                justifyContent: 'flex-start',
                                                gap: 10,
                                                color: 'rgb(7, 38, 82)',
                                                fontWeight: 600,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                            </div>
                                            <span
                                                className="nector-text"
                                                style={{ fontWeight: 'normal' }}
                                            >
                                                How To Redeem
                                            </span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
            <br />
            <button className="open-button position-absolute bottom-0 end-0" onClick={openForm}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={giftButtonStyle} viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={closeButtonStyle} viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </button>
        </div >

    )
}