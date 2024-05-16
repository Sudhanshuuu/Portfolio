import Image from "next/image";

export default function Header() {
    return(
    <div className="flex justify-center h-[90vh] sm:h-[80vh] md:px-[5%] lg:px-[10%]">
        <div className=" w-[80%] flex justify-center flex-col md:w-[50%]">
            <div>WEB DEVELOPER</div>
            <div className=" text-6xl font-bold my-[3%]">Hello, my name is <br /><span className="text-5xl">Sudhanshu Singh</span> </div>
            <div className="my-[3%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam quibusdam dolor provident omnis temporibus ducimus deleniti, nisi earum molestias nulla dolores tenetur repellat, ea non iure! Fugit, animi quis?</div>
            <div className="flex">
                <button className="mx-2 text-sm border border-black px-4 py-3 rounded-3xl transition duration-200 hover:bg-black hover:text-white sm:text-base">Contact Me</button>
                <button className="mx-2 text-sm bg-black text-white px-4 py-3 rounded-3xl border border-black transition duration-200 hover:bg-white hover:text-black">Download CV</button>
            </div>
        </div>
        <div className="hidden w-[50%] md:block my-auto">
            <Image src="/Home/Profile.png" width={500} height={500} alt="pp" className="mx-auto" />
        </div>
    </div>)
}