import PROJECT from "@/components/PROJECTCARD"
export default function work(){
    return(
        <section className=" flex  flex-col items-center justify-center bg-black overflow-x-hidden">

<div className="flex justify-center items-center flex-col p-10 gap-5 pt-20">
<h2 className="  text-6xl  italic
       
      "> My Porjects</h2>
       <p> Some  of My latest projects</p>
</div>

<PROJECT/>


        </section>
    )
}