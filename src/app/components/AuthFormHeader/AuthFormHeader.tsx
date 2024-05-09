import Image from 'next/image'
import React from 'react'
interface AuthFormHeaderProps {
    logoImg?: string,
    title?: string,
    subTitle?: string,
    desc?: string,
    marginClass?: string,
}
const AuthFormHeader:React.FC<AuthFormHeaderProps> = ({
    logoImg,
    title,
    subTitle,
    desc,
    marginClass = 'mb-37px'
}) => {
    return (
        <div className={`text-center ${marginClass}`}>
            {logoImg && (<div className="mb-18px"> <Image alt="Logo" width={88} height={88} src={logoImg} className="" /> </div>)}
            {title && (<h1 className="heading fs20 fw-bolder text-light lh30 mb-3"> {title} </h1> )}
            {subTitle && (<h2 className='fs16 fw-600 lh25 text-light mb-4'> {subTitle} </h2> )}
            {desc && ( <div className="sub_text fs16 fw-medium color-light lh25"> {desc} </div> )}
        </div>
    )
}
export default AuthFormHeader