export const Header = () => {
  return (
    <div className="w-[1440px] h-[68px] flex justify-between py-[18px] px-[80px]">
      <p className="text-2xl font-extrabold ">TOM</p>
      <div className="flex gap-12 items-center">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
        <img src="./divider.png" alt="" />
        <img src="./icon button.png" alt="" />
        <button className="w-[130px] h-[40px] bg-black rounded-full text-white">
          Download CV
        </button>
      </div>
    </div>
  );
};
