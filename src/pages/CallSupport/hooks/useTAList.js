import { useState } from 'react';

const DEFAULT_CUSTOMERS = [
  {
    id: 1,
    name: '홍길동',
    ageGender: '20남',
    taRound: 1,
    phone: '0000-0000',
    memo: '부재',
    result: 'X',
  },
];

const useTAList = () => {
  const [customers, setCustomers] = useState(DEFAULT_CUSTOMERS);

  const addCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => {
      const nextNo = prevCustomers.length + 1;
      const nextTaRound = prevCustomers.length + 1;

      return [
        ...prevCustomers,
        {
          id: nextNo,
          name: newCustomer.name,
          ageGender: newCustomer.ageGender,
          taRound: nextTaRound,
          phone: newCustomer.phone,
          memo: newCustomer.memo,
          result: newCustomer.result,
        },
      ];
    });
  };

  return {
    customers,
    addCustomer,
  };
};

export default useTAList;