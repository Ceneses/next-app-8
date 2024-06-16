import Logo from "@/icons/Logo";

export default function footer() {
    return (
        <div className={"w-full px-64 pt-24 pb-8 bg-slate-200/20"}>
            <div className={"grid grid-cols-4 grid-rows-1 gap-8"}>
                <div className={"col-span-1 flex flex-col items-center justify-center gap-y-4"}>
                    <Logo width={128} height={128}/>
                    <div>
                        <h1 className={"text-3xl font-bold font-mono"}>GitHub Connector</h1>
                        <p className={"mt-4"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate numquam quia quo veniam.
                            Aliquid atque consequuntur dolor excepturi expedita id molestias nam nihil obcaecati
                            praesentium, quia quibusdam recusandae rerum sequi?</p>
                    </div>
                </div>
                <div className={"col-span-1"}>
                    <h1 className={"text-3xl font-mono leading-64 text-center pb-16"}>
                        Product
                    </h1>
                    <ul className={"flex flex-col gap-y-12"}>
                        <li>✨ 功能1</li>
                        <li>✨ 功能2</li>
                        <li>✨ 功能3</li>
                        <li>✨ 功能4</li>
                    </ul>
                </div>
                <div className={"col-span-1"}>
                    <h1 className={"text-3xl font-mono leading-64 text-center pb-16"}>
                        About
                    </h1>
                    <ul className={"flex flex-col gap-y-12"}>
                        <li>✨ 功能1</li>
                        <li>✨ 功能2</li>
                        <li>✨ 功能3</li>
                        <li>✨ 功能4</li>
                    </ul>
                </div>
                <div className={"col-span-1"}>
                    <h1 className={"text-3xl font-mono leading-64 text-center pb-16"}>
                        Contact
                    </h1>
                    <ul className={"flex flex-col gap-y-4"}>
                        <li className={"flex flex-col gap-y-4"}>
                            <input className={"w-full outline-none p-4 outline-indigo-200 outline-4 rounded-md"} placeholder={"Please Input Your Email"}/>
                            <button className={"font-mono w-full p-4 hover:bg-indigo-200/80 hover:ring-bg-indigo-800 hover:ring-4 bg-indigo-200/20 rounded-md"}>Subscribe</button>
                        </li>
                        <li className={"font-serif"}>if you want to try more advanced features, please subscribe us via email!</li>
                        <li className={"font-serif"}>we will notify you in time via email!</li>
                    </ul>
                </div>
            </div>
            <hr className={"m-10 w-full mx-auto"}/>
            <div className={"flex flex-row items-center justify-between"}>
                <span>2020-{new Date().getFullYear()} HCY.Inc CopyRights All Reserved</span>
                <span>Privacy and Police</span>
            </div>
        </div>
    );
}