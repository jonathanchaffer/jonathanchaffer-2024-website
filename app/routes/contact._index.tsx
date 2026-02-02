import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import { strs } from "~/content/strings";

export default function () {
  return (
    <>
      <PageHeader>{strs.GET_IN_TOUCH}</PageHeader>
      <p className="mb-8 max-w-prose">
        Have a project in mind or just want to say hi? Feel free to reach out to
        me via email at <Link to={`mailto:${strs.EMAIL}`}>{strs.EMAIL}</Link> or
        send me a message on{" "}
        <Link to={strs.LINKEDIN_URL} openInNewTab>
          LinkedIn
        </Link>
        .
      </p>
    </>
  );
}
