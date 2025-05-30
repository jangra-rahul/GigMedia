import Image from 'next/image';



export default function ResponsiveGrid({title,mapdataAll}) {
    return (
        <div className='bg-white py-14 md:py-16 lg:py-20 xl:pb-[94px]'>
            <div className="max-w-[1310px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between pb-12 gap-3 md:gap-10 md:pb-14 lg:pb-16 xl:pb-[68px]">
                    <p className='text-black max-sm:order-2 text-base max-w-[540px] md:text-lg leading-[140%] ff_n'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <h3 className='max-w-[280px] max-md:order-1 text-nowrap text-2xl md:text-3xl lg:text-[37px] font-bold capitalize'>
                        {title}
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px] lg:auto-rows-[250px]">
                    {mapdataAll.map((person, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden duration-300 group rounded-xl ${person.className || ''}`}
                        >
                            <Image
                                src={person.image}
                                alt={person.name || `Person ${index + 1}`}
                                fill
                                className="object-cover w-full h-full object-top"
                            />
                            <span className='ab absolute top-0 w-full h-full scale-0 duration-300 z-10 group-hover:scale-100'></span>

                            <div
                                className={`absolute z-30 scale-0 group-hover:scale-100 duration-300 bottom-0 w-full p-3 text-white `}
                            >
                                <p className="text-lg md:text-xl lg:text-2xl font-extrabold leading-[140%]">{person.name}</p>
                                <p className="text-base text-white leading-[190%] ff_i">{person.role}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
