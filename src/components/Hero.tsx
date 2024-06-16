import Image from "next/image";

export default function Hero() {
    return (
        <div className={"w-full px-8 py-6 grid grid-cols-12 grid-row-1 gap-4 bg-slate-200/20"}>
            <div className={"col-span-7 p-8 bg-slate-200/80 rounded-md"}>
                <h1 className={"text-3xl"}>Github连接器</h1>
                <p className={"mt-8 text-2xl font-serif"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam animi at cumque ea
                    et ex facere illum libero officiis quod ratione, repellat repudiandae rerum sunt veniam, voluptas
                    voluptates.
                </p>
                <div className={"mt-8 flex flex-row gap-x-4"}>
                    <button className={"w-32 h-9 rounded-md bg-sky-200"}>开始上手</button>
                    <button className={"w-32 h-9 rounded-md bg-blue-800/20"}>联系销售</button>
                </div>
            </div>
            <div className={"col-span-5 place-self-center backdrop-blur-3xl"}>
                <Image src={"/hero.png"} alt={"Not Found"} width={400} height={300}
                       className={"hover:scale-150 transition ease-in-out"}/>
            </div>
        </div>
    );
}