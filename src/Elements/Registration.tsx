import * as Form from "@radix-ui/react-form";

const Registration = () => {
  return (
    <div className="w-[863px] px-[76px] bg-intro-and-email-sign-up-background rounded-xl py-20 pt-10 mx-auto flex flex-col items-center text-center gap-10 relative top-[116px] shadow-2xl">
      <h1>Get early access today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <Form.Root className="flex items-start gap-10">
        <Form.Field name="email">
          <Form.Control
            className="w-[480px] rounded-full h-12 text-black px-9"
            required
            type="email"
          />
          <div className="relative text-left px-9 pt-2 text-sm text-error">
            <Form.Message className="absolute" match="valueMissing">
              Please enter your address
            </Form.Message>
            <Form.Message className="absolute" match="typeMismatch">
              Please provide a valid address
            </Form.Message>
          </div>
        </Form.Field>

        <Form.Submit asChild>
          <button className="bg-gradient-to-r from-cyan to-blue rounded-full font-bold hover:opacity-50 transition-opacity w-[200px] h-12 text-sm">
            Get Started For Free
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default Registration;
