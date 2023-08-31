import Comment from "./Comment";

const Comments = () => {
  return (
    <section className="relative flex gap-10 w-[1162px] mx-auto mb-[160px]">
      <img
        src="./bg-quotes.png"
        alt="bg quotes"
        className="absolute z-10 -top-8 -left-3"
      />
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
    </section>
  );
};

export default Comments;
