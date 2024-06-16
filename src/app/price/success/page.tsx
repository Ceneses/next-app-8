import PaySuccess from "@/icons/PaySuccess";

export default function Success() {
    return (
        <div className={"mx-auto px-64 py-12 flex flex-row items-center justify-center"}>
            <div className={"border-4 border-green-800/80 rounded-md p-8 flex flex-col items-center justify-center"}>
                <PaySuccess width={256} height={256}/>
                <div className={"text-3xl p-12"}>
                    Pay Success!
                </div>
            </div>
        </div>
    );
}