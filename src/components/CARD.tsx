import { serviceDetails } from "@/app/data/details"
import { Button } from "./ui/button"
export default function CARD(){
    return (
        serviceDetails.map((service) => (
            <div key={service.id} className="font-playfair flex flex-col items-start  justify-between h-[300px] w-[400px] bg-carddd flex-wrap p-5 rounded border border-div">
            <p>{service.id}</p>
            <h2 className="text-2xl playfair ">{service.title}</h2>
            <p className="mont">{service.description}</p>
            <Button className="out">CONTACT ME</Button>
        </div>
        )))}

    

