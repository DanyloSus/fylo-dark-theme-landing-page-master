const ProductEl = () => {
  return (
    <section className="flex items-center justify-center my-[160px]">
      <img
        src="./illustration-stay-productive.png"
        alt="illustration stay productive"
      />
      <div className="w-[500px] flex flex-col gap-6">
        <h1>Stay productive, wherever you are</h1>
        <p className="text-base">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-base">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="text-cyan border-b border-b-cyan flex items-center gap-3 w-max hover:border-b-gray-300 hover:text-gray-300 transition-colors"
        >
          See how Fylo works{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className=""
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ProductEl;
