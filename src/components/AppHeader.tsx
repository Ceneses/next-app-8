import Link from "next/link";
import Logo from "@/icons/Logo";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

export default async function AppHeader() {
    const supabase = createClient();
    const {data: {user}} = await supabase.auth.getUser();

    const handleLogout = async () => {
        "use server";
        const supabase = createClient();
        await supabase.auth.signOut();
        redirect("/auth");
    }

    return (
        <div className={"h-[64px] w-full shadow-sm"}>
            <div className={"px-64 mx-auto flex flex-row items-center justify-center gap-x-4"}>
                <div>
                    <Logo width={64} height={64}/>
                </div>
                <div className={"flex flex-row items-center justify-center gap-x-4"}>
                    <Link href={"/#"} className={"cursor-pointer px-2 py-1 rounded-md focus:text-sky-800"}>主页</Link>
                    <Link href={"/price"}
                          className={"cursor-pointer px-2 py-1 rounded-md focus:text-sky-800"}>价格</Link>
                </div>
                <div className={"flex-1"}></div>
                <div>
                    {
                        user ? (
                            <div>
                                <div className={"flex flex-row items-center justify-center gap-x-2"}>
                                    <Link href={"/profile"}>个人中心</Link>
                                    <form>
                                        <button
                                            className={"hover:text-red-60 cursor-pointer px-4 py-2 bg-slate-200 rounded-md"}
                                            formAction={handleLogout}>退出
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <Link href={"/auth"}>登录/注册</Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
}