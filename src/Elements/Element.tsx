interface ElementProps {
  img: string;
  p: string;
  h2: string;
}

const Element = ({ img, p, h2 }: ElementProps) => {
  return (
    <div className="w-[400px] flex flex-col items-center text-center gap-3 lg:w-auto lg:px-5 reveal">
      <img src={`./${img}`} alt={img} />
      <h2 className="text-xl">{h2}</h2>
      <p className="">{p}</p>
    </div>
  );
};

export default Element;
