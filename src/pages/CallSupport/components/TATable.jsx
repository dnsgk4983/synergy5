const TATable = ({ customers }) => {
  return (
    <table className="ta-table">
      <thead>
        <tr>
          <th>NO</th>
          <th>고객명</th>
          <th>나이/성별</th>
          <th>TA차수</th>
          <th>전화번호</th>
          <th>메모</th>
          <th>결과</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer, index) => (
          <tr key={customer.id}>
            <td>{index + 1}</td>
            <td>{customer.name}</td>
            <td>{customer.ageGender}</td>
            <td>{customer.taRound}</td>
            <td>{customer.phone}</td>
            <td>{customer.memo}</td>
            <td>{customer.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TATable;