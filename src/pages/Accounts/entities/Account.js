import * as Immutable from 'immutable';

const Account = Immutable.Record({
  id: null,
  name: '',
  type: '',
  balance: 0.00,
  currency: '',
  status: '',
  createdTime: null,
  updatedTime: null
});

export default Account;