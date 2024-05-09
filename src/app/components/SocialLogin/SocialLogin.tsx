import React from "react";
import GoogleBtn from "@/app/assets/media/auth/google_btn.png";
import "./SocialLogin.scss"
import { signIn } from "next-auth/react";
import Image from "next/image";


const SocialLogin = () => {
	
	return (
		<div className="g-3 justify-content-center">
			<div className={`social_login ms-auto me-auto`}>
				<button
					type="button"
					className={`google_btn btn d-flex justify-content-between gap-5 text-nowrap w-100 rounded-24 flex-center pt-1 ps-1 pb-1 pe-8 btnSecondary`}
					onClick={() => signIn('google', { callbackUrl: '/processing' })}
				>
					<Image alt="Logo" src={GoogleBtn.src} width={40} height={40} />
					<span className="fs16 fw-bolder lh30">
						Continue with Google
					</span>
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
