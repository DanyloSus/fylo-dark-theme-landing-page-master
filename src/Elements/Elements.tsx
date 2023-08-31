import Element from "./Element";

const Elements = () => {
  return (
    <section className="grid grid-cols-[repeat(2,_minmax(0,_400px))] grid-rows-2 mx-auto items-center justify-center gap-20">
      <Element
        img="icon-access-anywhere.svg"
        h2="Access your files, anywhere"
        p="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />
      <Element
        img="icon-security.svg"
        h2="Security you can trust"
        p="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />
      <Element
        img="icon-collaboration.svg"
        h2="Real-time collaboration"
        p="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      />
      <Element
        img="icon-any-file.svg"
        h2="Store any type of file"
        p="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
    </section>
  );
};

export default Elements;
