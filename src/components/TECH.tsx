import Image from "next/image"
export default function Tech(){
    return(
        <section className="w-full p-10 flex  flex-col justify-center items-center bg-black">
            <h2 className="text-5xl italic font-bold text-center p-10" >Explore my Tech Arsenal</h2>
            <p>Softwares that powers my work</p>
            <div className="flex flex-wrap  py-5 gap-4 justify-center lg:p-20">
            <Image src={'/vs.png'} alt="" width={100} height={100} className="border bg-div border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/next.png'} alt="" width={100} height={100} className="  bg-div border border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/tailwind.png'} alt="" width={100} height={100} className="border  bg-div border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/html.png'} alt="" width={100} height={100} className="border bg-div border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/css.png'} alt="" width={100} height={100} className=" border bg-div  border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/ts.png'} alt="" width={100} height={100} className="border bg-div border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/node.png'} alt="" width={100} height={100} className="border bg-div  border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/framer.png'} alt="" width={100} height={100} className=" bg-div  border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/figma.png'} alt="" width={100} height={100} className="border bg-div  border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>       
            <Image src={'/ms.png'} alt="" width={100} height={100} className="border bg-div  border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/adobe.png'} alt="" width={100} height={100} className=" border bg-div  border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/canva.png'} alt="" width={100} height={100} className=" border bg-div  border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            <Image src={'/ai.png'} alt="" width={100} height={100} className="grayscale border border-white rounded-xl bg-div  hover:grayscale-0 shadow-md"/>
<Image src={'/yt.png'} alt="" width={100} height={100} className=" border bg-div  border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
<Image src={'/google.png'} alt="" width={100} height={100} className="border bg-div  border-white rounded-xl grayscale hover:grayscale-0 shadow-md"/>
            </div>
        </section>
    )
}