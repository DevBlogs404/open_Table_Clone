export default function Header({ title }: { title: string }) {
  const renderTitle = () => {
    let titleArray = title.split("-");
    titleArray[titleArray.length - 1] = `(${
      titleArray[titleArray.length - 1]
    })`;

    return titleArray.join(" ");
  };

  const newTitle = renderTitle();

  return (
    <header className=" h-96 overflow-hidden ">
      <div className=" bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex items-center justify-center">
        <h3 className="text-7xl text-white capitalize text-shadow text-center">
          {newTitle}
        </h3>
      </div>
    </header>
  );
}
