import USER_ROLES from '../constants/userRoles';

const TEST_USERS = [
  {
    id: 'root',
    password: '1234',
    role: USER_ROLES.ROOT,
    name: 'Root Admin',
  },
  {
    id: 'lsh1',
    password: '1234',
    role: USER_ROLES.SM,
    name: '이서후1',
  },
];

export default TEST_USERS;