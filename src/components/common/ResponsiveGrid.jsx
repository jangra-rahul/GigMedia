import Image from 'next/image';

const people = [
    {
        name: 'Sapna Choudhary',
        role: 'Haryanvi Singer and Dancer',
        image: '/images/webp/creative/spana.webp',
        className: 'row-span-2',
    },
    {
        name: 'Dhanda Noyiwal',
        role: 'Haryanvi Singer',
        image: '/images/webp/creative/noyiwala.webp',
    },
    {
        name: 'Pranjal Dhaiya',
        role: 'Haryanvi Singer and Dancer',
        image: '/images/webp/creative/pranjal.webp',
    },
    {
        name: '',
        role: 'Haryanvi Singer',
        image: '/images/webp/creative/model.webp',
    },
    {
        name: 'Surishty Maan',
        role: 'Punjabi Model and Dancer',
        image: '/images/webp/creative/maan.webp',
        className: 'lg:row-span-2 lg:col-span-2',
    },
    {
        name: 'kd',
        role: 'Haryanvi Singer',
        image: '/images/webp/creative/kd.webp',
    },


];

export default function ResponsiveGrid() {
    return (
        <div className='bg-white py-14 md:py-16 lg:py-20 xl:pb-[94px]'>
            <div className="max-w-[1310px] mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
                    {people.map((person, index) => (
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
