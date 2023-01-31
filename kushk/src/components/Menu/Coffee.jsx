import MenuSummary from "./MenuSummary";
import AvailableMenu from "./AvailableMenu";
import { Fragment } from "react";

const Coffee = () => {
  return (
    <Fragment>
      <MenuSummary />
      <AvailableMenu />
    </Fragment>
  );
};

export default Coffee;
