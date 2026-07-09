const DashboardTable = ({ stats }) => {
  return (
    <table className="dashboard__table">
      <thead>
        <tr>
          <th>팀원</th>
          <th>콜 수</th>
          <th>유효</th>
          <th>대면</th>
          <th>비대면</th>
          <th>계약</th>
        </tr>
      </thead>

      <tbody>
        {stats.map((member) => (
          <tr key={member.name}>
            <td>{member.name}</td>
            <td>{member.calls}</td>
            <td>{member.valid}</td>
            <td>{member.offline}</td>
            <td>{member.online}</td>
            <td>{member.contract}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardTable;