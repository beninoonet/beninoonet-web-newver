import Image from "next/image";


export default function ShizukaPage() {
    return (
        <div className="min-h-screen flex  py-25 justify-center bg-linear-to-br from-[#0f056b]/85 to-[#130c4d]/70">
            <div className="flex flex-col items-center  gap-4">
            <Image src="/img/Shizuka_3.gif" alt="Shizuka Logo" width={300} height={300} className="rounded-3xl shadow-lg" />
            <h1 className="font-bold text-2xl text-gray-200">Shizuka</h1>
            </div>
        </div>
    )
}