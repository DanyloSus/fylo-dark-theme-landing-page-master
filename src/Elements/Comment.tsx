interface CommentProps {
  p: string;
  name: string;
  img: string;
}

const Comment = ({ p, name, img }: CommentProps) => {
  return (
    <div className="px-[26px] py-11 bg-testimonials-background flex flex-col gap-3 relative z-10 rounded-lg w-[360px] lg:w-auto reveal">
      <p className="text-[15px]">{p}</p>
      <div className="flex items-center gap-3">
        <img src={`./${img}`} alt={img} className="w-6 h-6 rounded-full" />
        <div>
          <h2 className="text-sm tracking-widest">{name}</h2>
          <p className="text-xs">Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
