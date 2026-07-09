const createTAReportText = (customers, userName) => {
  const today = new Date();

  const formattedDate =
    `${today.getFullYear()}.` +
    `${String(today.getMonth() + 1).padStart(2, '0')}.` +
    `${String(today.getDate()).padStart(2, '0')}`;

  const total = customers.length;

  const validCount = customers.filter(
    (customer) => customer.result === 'O'
  ).length;

  const absentCount = customers.filter(
    (customer) => customer.result === '△'
  ).length;

  const rejectCount = customers.filter(
    (customer) => customer.result === 'X'
  ).length;

  const faceToFaceCount = customers.filter(
    (customer) =>
      customer.result === 'O' &&
      customer.memo.includes('대면')
  ).length;

  const nonFaceToFaceCount = customers.filter(
    (customer) =>
      customer.result === 'O' &&
      customer.memo.includes('비대면')
  ).length;

  return `📆 ${formattedDate}
🔥 일일 TA 🔥
${userName}

📞 총 ${total}

유효 ${validCount}
부재 ${absentCount}
거절 ${rejectCount}

👍 상담잡기
대면 ${faceToFaceCount}
비대면 ${nonFaceToFaceCount}`;
};

export default createTAReportText;