export default function Reviews() {
  return (
    <div>
      <h1 className="mt-10 mb-7 font-bold  text-3xl border-b pb-5">
        what 100 people are saying
      </h1>

      <div>
        {/* review card */}
        <div className="border-b mb-7 pb-7">
          <div className="flex">
            <div className=" w-1/6 flex flex-col items-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-400">
                <h2 className="text-white text-2xl">MJ</h2>
              </div>
              <p className="text-center">Micheal Jordan</p>
            </div>
            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="flex mr-5">*****</div>
              </div>
              <div className="mt-5">
                <p className="text-lg font-light">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae, quam.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* review card */}
      </div>
    </div>
  );
}
