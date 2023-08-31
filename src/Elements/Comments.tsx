import Comment from "./Comment";

const Comments = () => {
  return (
    <section className="relative flex gap-10 max-w-[1162px] mx-auto mb-[160px] items-center justify-center flex-wrap h-auto lg:w-auto lg:px-12">
      <img
        src="./bg-quotes.png"
        alt="bg quotes"
        className="absolute z-10 -top-8 -left-3 lg:left-14 lg:-top-10"
      />
      <div className="relative flex gap-10 items-center justify-center flex-wrap h-auto lg:flex-col lg:w-auto">
        <Comment
          p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Satish Patel"
          img="profile-1.jpg"
        />
        <Comment
          p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Iva Boyd"
          img="profile-2.jpg"
        />
        <Comment
          p="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Bruce McKenzie"
          img="profile-3.jpg"
        />
      </div>
    </section>
  );
};

export default Comments;
