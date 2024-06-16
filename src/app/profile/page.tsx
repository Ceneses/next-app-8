import {createClient} from "@/utils/supabase/server";

export default async function Profile() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser()
    return (
        <div className={"px-64"}>
            {user ? (<div>用户信息:{user.email}</div>) : (<div>用户未登录,无法获取信息!</div>)}
        </div>
    );
}