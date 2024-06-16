import Link from "next/link";
import Logo from "@/icons/Logo";

export default function AppHeader() {
    return (
        <div className={"h-[64px] w-full shadow-sm"}>
            <div className={"px-64 mx-auto flex flex-row items-center justify-center gap-x-4"}>
                <div>
                    <Logo width={64} height={64}/>
                </div>
                <div className={"flex flex-row items-center justify-center gap-x-4"}>
                    <Link href={"/#"} className={"cursor-pointer px-2 py-1 rounded-md focus:text-sky-800"}>主页</Link>
                    <Link href={"/price"} className={"cursor-pointer px-2 py-1 rounded-md focus:text-sky-800"}>价格</Link>
                </div>
                <div className={"flex-1"}></div>
                <div>
                    <Link href={"/auth"}>登录/注册</Link>
                </div>
            </div>
        </div>
    );
}