import { Resend } from "resend";
import { Result } from "~/types";

export const sendEmail = async (args: {
  name: string;
  email: string;
  message: string;
}): Promise<Result> => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: `${args.name} <contact@jonathanchaffer.com>`,
    subject: "New message via Contact Form",
    to: "jonathanchaffer@gmail.com",
    replyTo: args.email,
    text: args.message,
  });
  if (error) {
    console.error(error);
    return {
      status: "failure",
      message: "Failed to send email. Please try again.",
    };
  } else {
    return {
      status: "success",
      data: undefined,
    };
  }
};
