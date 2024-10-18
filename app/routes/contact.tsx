import { Button } from "~/components/button";
import { Input } from "~/components/input";
import { InputLabelWrapper } from "~/components/input-label-wrapper";
import { PageHeader } from "~/components/page-header";
import { strs } from "~/content/strings";

export default function () {
  return (
    <>
      <PageHeader>{strs.GET_IN_TOUCH}</PageHeader>
      <p className="mb-8">{strs.CONTACT_FORM_DESCRIPTION}</p>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputLabelWrapper label="Name">
            <Input placeholder="Your name" />
          </InputLabelWrapper>
          <InputLabelWrapper label="Email">
            <Input placeholder="your.email@example.com" />
          </InputLabelWrapper>
        </div>
        <InputLabelWrapper label="Message">
          <Input
            as="textarea"
            placeholder="Type your message here..."
            rows={6}
          />
        </InputLabelWrapper>
        <Button className="self-start" size="large">
          Send message
        </Button>
      </form>
    </>
  );
}
