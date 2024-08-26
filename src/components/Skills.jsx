export const Skills = () => {
  return (
    <div className="w-[1440px] h-[560px] flex justify-center  py-[96px] border">
      <div className="w-[1216px] h-[368px] flex flex-col gap-12 border">
        <div className="max-w-[1216px] h-[72px] flex flex-col items-center gap-4">
          <div className="w-[75px] h-[28px] rounded-2xl bg-slate-200 justify-center items-center flex py-[4px] font-inter text-gray-600">
            Skills
          </div>
          <div className="text-gray-600 font-inter">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="max-w-[1216px] h-[248px] flex flex-col gap-12">
          <div className="max-w-[1216px] h-[100px]">
            <div className="text-gray-600 flex flex-col">
              <img width={80} src="./icon-javscript.png" alt="" />
              Javascript
            </div>
          </div>
          <div className="max-w-[1216px] h-[100px]">2</div>
        </div>
      </div>
    </div>
  );
};
