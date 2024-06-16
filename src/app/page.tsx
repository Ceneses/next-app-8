import Hero from "@/components/Hero";
import Feature from "@/components/Feature";

export default function Home() {
  return (
      <div className={"w-full h-[calc(100vh-64px)]"}>
        <div className={"px-64"}>
            <Hero/>
            <Feature/>
        </div>
      </div>
  );
}
