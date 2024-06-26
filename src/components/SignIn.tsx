import {redirect} from "next/navigation";
import {createClient} from "@/utils/supabase/server";
import Link from "next/link";

export default function SignIn() {
    const handleLogin = async () => {
        "use server";
        const supabase = createClient();
        const {data, error} = await supabase.auth.signInWithPassword({
            email: "wo51study@163.com",
            password: "wo51study@163.com"
        })
        console.log("data = ", data);
        if (error) {
            throw new Error("账号或密码错误,登录失败!")
        }
        return redirect("/#");
    }
    return (
        <div className="max-w-lg px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
            {/* Title */}
            <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">See You Again!</h2>
            {/* Form */}
            <form className="mx-auto mb-4 max-w-sm pb-4" name="wf-form-password" method="get">
                <div className="relative">
                    <img alt=""
                         src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                         className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"/>
                    <input type="email"
                           className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                           maxLength={256} name="name" placeholder={"Email Address"} required={false}/>
                </div>
                <div className="relative mb-4">
                    <img alt=""
                         src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                         className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"/>
                    <input type="password"
                           className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                           placeholder={"Password (min 8 characters)"} required={false}/>
                </div>
                {/* Сheckbox */}
                <label className="mb-6 flex items-center pb-12 font-medium lg:mb-1">
                    <input type="checkbox" name="checkbox"/>
                    <span className="ml-4 inline-block cursor-pointer text-sm">I agree with the <a
                        href="#" className="font-bold text-[#0b0b1f]">Terms &amp; Conditions</a> </span>
                </label>
                {/* Button */}
                <button formAction={handleLogin}
                        className="w-full flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                    <p className="mr-6 font-bold">Sign In</p>
                    <svg className="h-4 w-4 flex-none" fill="currentColor" viewBox="0 0 20 21"
                         xmlns="http://www.w3.org/2000/svg">
                        <title>Arrow Right</title>
                        <polygon
                            points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                    </svg>
                </button>
            </form>
            <p className="text-sm text-[#636262]">Don't have an account?
                <Link href={"/signUp"}
                        className="text-sm font-bold text-black">
                    SignUp Now
                </Link>
            </p>
        </div>
    );
}