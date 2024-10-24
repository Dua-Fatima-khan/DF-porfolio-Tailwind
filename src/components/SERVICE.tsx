
import CARD from "./CARD"
export default function  SERVICE(){
    return(
    <section className=" pb-10 w-full flex-wrap flex flex-col  bg-black gap-5">

<h2 className="text-5xl font-bold text-center">Services</h2>
<div className="w-full flex flex-wrap gap-5 justify-center"><CARD/></div>
    </section>
    )
}