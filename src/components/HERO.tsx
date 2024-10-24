export default function Hero(){
    return (
     <section className="w-full h-[100vh] bg-black flex flex-col justify-center items-center 
    ">
        <h1 className=" 
       text-center text-5xl font-black
        sm:text-5xl
        md:text-7xl
        lg:text-8xl 
        ">Web Developer & </h1>
        <h2 className=" text-5xl
         sm:text-5xl
        md:text-7xl
        lg:text-9xl">Designer</h2>
        <p className="w-[80vw] text-center py-10  leading-loose ">
            {` I'm a Pakistan-based web developer and designer, building websites that don’t just work—they slap! Whether it’s front-end magic or designs that make you go ‘damn!’, I’ve got the skills to bring your ideas to life. Let’s create something so epic, your browser will do a double take!`}
        </p>
     </section>
    )
}