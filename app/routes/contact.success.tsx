import { $path } from "remix-routes";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import { strs } from "~/content/strings";

export default function () {
  return (
    <>
      <PageHeader>{strs.THANKS}</PageHeader>
      <p className="mb-8">{strs.CONTACT_SUCCESS_DESCRIPTION}</p>
      <Link to={$path("/")} direction="left">
        Go back home
      </Link>
    </>
  );
}
