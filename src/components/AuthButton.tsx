import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import Link from "next/link";

export default async function AuthButton() {

    const supabase = createClient();

    const {data: {user}} = await supabase.auth.getUser();

    const handleLogout = async () => {
        "use server";

        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/signIn");
    }

    return user ? (
        <div className={"flex flex-row items-center justify-end gap-x-4 h-full"}>
            <Link href={"/profile"}>个人中心@{user.email}</Link>
            <form>
                <button formAction={handleLogout}>退出</button>
            </form>
        </div>
    ) : (
        <div className={"flex flex-row items-center justify-end gap-x-4 h-full"}>
            <Link href={"/signIn"}>登录</Link>/<Link href={"/signUp"}>注册</Link>
        </div>
    );
}