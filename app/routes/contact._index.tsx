import { ActionFunction, redirect } from "@remix-run/node";
import { $path } from "remix-routes";
import { z } from "zod";
import { Button } from "~/components/button";
import { Input } from "~/components/input";
import { InputLabelWrapper } from "~/components/input-label-wrapper";
import { PageHeader } from "~/components/page-header";
import { strs } from "~/content/strings";
import { sendEmail } from "~/services/email";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { name, email, message } = contactFormSchema.parse(data);
  const result = await sendEmail({ name, email, message });
  if (result.status === "success") {
    return redirect($path("/contact/success"));
  }
};

export default function () {
  return (
    <>
      <PageHeader>{strs.GET_IN_TOUCH}</PageHeader>
      <p className="mb-8">{strs.CONTACT_FORM_DESCRIPTION}</p>
      <form className="flex flex-col gap-8" method="POST">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputLabelWrapper label="Name">
            <Input placeholder="Your name" name="name" required />
          </InputLabelWrapper>
          <InputLabelWrapper label="Email">
            <Input
              placeholder="your.email@example.com"
              name="email"
              required
              type="email"
            />
          </InputLabelWrapper>
        </div>
        <InputLabelWrapper label="Message">
          <Input
            as="textarea"
            placeholder="Type your message here..."
            rows={6}
            required
            name="message"
          />
        </InputLabelWrapper>
        <Button
          className="self-start g-recaptcha"
          size="large"
          data-sitekey="6LeYl6IqAAAAAGlebK2GJe4rQpgQmOx08_Ak1uu5"
          data-callback="onSubmit"
          data-action="submit"
        >
          Send message
        </Button>
      </form>
    </>
  );
}
