import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
const quote:string ='Let\'s'
export default function FOOTER(){
    return (

 <section className="w-full bg-black">
        <div className="w-full p-10 flex  flex-col justify-center items-center">
        <p className="py-10">Project in mind?</p>
     <h2 className="text-5xl italic font-bold text-center "><span className="mont font-normal"> {quote} make your</span> <br />Website Shine </h2>
     <p className=" py-10"> Web Development, Web design and Graphic  design services.</p> 
<Link href={'/contact'}><Button>Get in touch</Button></Link>
     </div>
     <h2 className="w-full text-center text-3xl font-bold py-5">Follow me on</h2>
     <div className=" flex justify-center items-center gap-10 flex-wrap">
        <div className="flex flex-col justify-center items-center">
            <div ><Image src={'/linkedin.png'} alt="linkedin" width={70} height={100} /></div>
            <h2 className="text-2xl">Linkedin</h2>
            <Link href={'https://www.linkedin.com/in/dua-fatima-%E2%9C%A8%F0%9F%87%B5%F0%9F%87%B8-906208258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}> <Button>Follow</Button></Link>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div ><Image src={'/ig.png'} alt="intagram" width={70} height={100} /></div>
            <h2 className="text-2xl">Instagram</h2>
            <Link href={'https://www.instagram.com/fatima_bint__ahmed?igsh=MXV2eWpveWNrczN2bQ=='}> <Button>Follow</Button></Link>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div ><Image src={'/github.png'} alt="github" width={70} height={100} /></div>
            <h2 className="text-2xl">Github</h2>
            <Link href={'https://github.com/Dua-Fatima-khan/Dua-Fatima-khan/blob/main/README.md'}> <Button>Follow</Button></Link>
        </div>
     </div>
     <p className="w-full text-center py-10">&copy; 2024 <span className="playfair font-bold italic text-1xl">Dua Fatima.</span> All rights reserved.</p>
 </section>
    )
}