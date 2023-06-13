import React from 'react'
import "./Service.css"
import vector1 from "../../assets/vector1.png"
import vector2 from "../../assets/vector2.png"
import vector3 from "../../assets/vector3.png"

export default function Service() {
  return (
    <div className="Service">
        <div className="Service-inner">
            <div className="up">
                <div className="up-header">My Service</div>
                <div className="up-text">There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some form, by injected humour</div>
            </div>
            <div className="down">
                <div className="skill">
                    <img src={vector1} alt="vector-sticker" className="skill-pic" />
                    <div className="skill-header">Digital Marketing</div>
                    <p className="skill-text">There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some </p>
                </div>
                <div className="skill">
                    <img src={vector2} alt="vector-sticker" className="skill-pic" />
                    <div className="skill-header">Web Devlopment </div>
                    <p className="skill-text">There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some </p>
                </div>
                <div className="skill">
                    <img src={vector3} alt="vector-sticker" className="skill-pic" />
                    <div className="skill-header">Creative Graphic Design</div>
                    <p className="skill-text">There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some </p>
                </div>
            </div>
        </div>
    </div>
  )
}
