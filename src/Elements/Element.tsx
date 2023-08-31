interface ElementProps {
  img: string;
  p: string;
  h2: string;
}

const Element = ({ img, p, h2 }: ElementProps) => {
  return (
    <div className="w-[400px] flex flex-col items-center text-center gap-3">
      <img src={`./${img}`} alt={img} />
      <h2 className="text-xl">{h2}</h2>
      <p className="text-base">{p}</p>
    </div>
  );
};

export default Element;
