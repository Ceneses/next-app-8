"use client";
import {useState} from "react";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

export default function AuthPage() {
    const [login, setLogin] = useState<boolean>(true);

    const handleSwitchMode = () => {
        setLogin(!login);
    }

    return (
        <div className={"w-full h-[calc(100vh - 64px)]"}>
            {/* Container */}
            <div className="grid md:h-screen md:grid-cols-2">
                {/* Component */}
                <div className="flex flex-col items-center justify-center bg-[#f2f2f7]">
                    {/* Wrapper */}
                    <div className="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
                        <div
                            className="mb-6 ml-2 flex h-14 w-14 items-center justify-center bg-[#276ef1] [box-shadow:rgb(171,_196,_245)_-8px_8px]">
                            <img
                                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                                alt="" className="inline-block"/>
                        </div>
                        <p className="mb-8 text-[#647084] md:mb-12 lg:mb-16">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                            porttitor rhoncus dolor purus non enim.</p>
                        <p className="font-bold">John Robert</p>
                        <p className="text-sm">Senior Webflow Developer</p>
                    </div>
                </div>
                {/* Component */}
                <div className="flex flex-col items-center justify-center bg-white">
                    {
                        login ? (
                            <SignIn handleSwitchMode={handleSwitchMode}/>
                        ):(
                            <SignUp handleSwitchMode={handleSwitchMode}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}