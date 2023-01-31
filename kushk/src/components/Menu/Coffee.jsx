import MenuSummary from './MenuSummary';
import AvailableMenu from './AvailableMenu';
import { Fragment } from 'react';
import MenuList from '../admin/MenuList';

const Coffee = () => {
  return (
    <Fragment>
      <MenuSummary />
      <MenuList />
    </Fragment>
  );
};

export default Coffee;
