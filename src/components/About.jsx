export const About = () => {
  return (
    <div className="w-[1440px] h-[826px] px-20 py-24  bg-gray-50">
      <div className="w-[1280px] h-[634px] border flex flex-col items-center px-5 py-1 gap-12">
        <div className="text-gray-600 w-[105px] h-[28px] rounded-xl bg-gray-200 flex justify-center">
          About me
        </div>
        <div className="w-[1286px] h-[558px] flex px-8 gap-[54px] relative">
          <div className="w-[584px] h-[558px] flex">
            <img
              className="absolute w-[400px] h-[480px] ml-10"
              src="./pic 2.png"
              alt=""
            />
            <div className="w-[400px] h-[480px] bg-gray-200 border border-8 mt-10"></div>
          </div>
          <div className="w-[584px] h-[558px]">
            <p className="mb-6 text-3xl">Curious about me? Here you have it:</p>
            <div className="">
              <p className="mb-4">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p className="mb-4">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p className="mb-4">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p className="mb-4">Finally, some quick bits about me.</p>
              <ul className=" w-[584px] h-[58px] flex gap-[10px] list-disc">
                <div className="px-[16px]">
                  <li> B.E. in Computer Engineering </li>
                  <li>Avid learner</li>
                </div>
                <li className="ml-16">Full time freelancer</li>
              </ul>

              <p className="mt-4">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
