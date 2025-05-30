import NavBar from "../common/NavBar";

const Hero = () => {
    return (
        <div className="bg-[#FFE0E1]">
            <NavBar />
            <div className="pt-16 md:pt-20 lg:pt-24 xl:pt-[106px] max-w-[1310px] mx-auto px-4">
                <h1 className="pb-2 text-2xl md:text-3xl lg:text-[37px] font-bold max-w-[606px] leading-[122%] text-black">
                    Creative Connect: Revolutionizing Talent Discovery
                </h1>
                <p className="text-base md:text-lg text-black leading-[140%] max-w-[540px] font-normal ff_n">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
        </div>
    );
};

export default Hero;
