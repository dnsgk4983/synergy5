const DashboardReport = ({
  totalCalls,
  totalValid,
  totalOffline,
  totalOnline,
  totalContract,
  onCopy,
}) => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(
    today.getMonth() + 1
  ).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  const reportText = `📆 ${formattedDate}

총 콜 수는 ${totalCalls}건입니다.
유효 콜은 ${totalValid}건입니다.
대면 진행은 ${totalOffline}건입니다.
비대면 진행은 ${totalOnline}건입니다.
계약 체결은 ${totalContract}건입니다.`;

  const handleCopyReport = async () => {
    await navigator.clipboard.writeText(reportText);
    onCopy();
  };

  return (
    <div className="dashboard-report">
      <p>📆 {formattedDate}</p>
      <p>총 콜 수는 {totalCalls}건입니다.</p>
      <p>유효 콜은 {totalValid}건입니다.</p>
      <p>대면 진행은 {totalOffline}건입니다.</p>
      <p>비대면 진행은 {totalOnline}건입니다.</p>
      <p>계약 체결은 {totalContract}건입니다.</p>

      <button
        className="btn btn-primary"
        type="button"
        onClick={handleCopyReport}
      >
        리포트 복사
      </button>
    </div>
  );
};

export default DashboardReport;