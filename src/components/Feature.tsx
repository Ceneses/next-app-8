import Drone from "@/icons/Drone";
import Phone from "@/icons/Phone";

export default function Brand() {
    return (
        <div className={"grid grid-rows-2 grid-cols-3 gap-4"}>
            <div className={"p-8 place-self-center"}>
                <Drone width={64} height={64}/>
            </div>
            <div className={"p-8 place-self-center"}>
                <Phone width={64} height={64}/>
            </div>
            <div className={"p-8 place-self-center"}>
                <Phone width={64} height={64}/>
            </div>
            <div className={"p-8 place-self-center"}>
                <Phone width={64} height={64}/>
            </div>
            <div className={"p-8 place-self-center"}>
                <Phone width={64} height={64}/>
            </div>
            <div className={"p-8 place-self-center"}>
                <Phone width={64} height={64}/>
            </div>
        </div>
    );
}