export const Hero = () => {
  return (
    <div className="w-[1440px] h-[556px] flex justify-between py-[96px] px-[80px]">
      <div className="w-[1280px] h-[364px] px-[32px] flex gap-[48px]">
        <div className="w-[600px] h-[364px] flex gap-[48px] flex-col">
          <div className="w-[600px] h-[176px] flex gap-2 flex-col">
            <div className="w-[376px] h-[72px] text-[60px] font-bold">
              Hi, I’m Tom 👋
            </div>
            <div className="w-[600px] h-[96px] text-[16px] leading-6 text-gray-600">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </div>
          </div>
          <div className="w-[600px] h-[56px] flex flex-col gap-2">
            <div className="w-[600px] h-[24px] gap-2 flex">
              <img src="./Icon.png" alt="" />
              <p className="text-[16px] leading-6 text-gray-600">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="w-[600px] h-[24px]  gap-4 pl-1 flex items-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full "></div>

              <p className="text-[16px] leading-6 text-gray-600">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="w-[600px] h-[36px] flex gap-[16px]">
            <img src="./icon1.png" alt="" />
            <img src="./icon2.png" alt="" />
            <img src="./icon3.png" alt="" />
          </div>
        </div>
        <div className="w-[568px] h-[364px] flex flex-end">
          <div className=" relative w-[320px] h-[360px] border border-8 border-white">
            <img className="absolute" src="./pic.png" alt="" />
            <div className="w-[280px] h-[320px] bg-gray-200 mt-10 ml-10 border border-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
