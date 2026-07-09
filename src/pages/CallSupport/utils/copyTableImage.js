import html2canvas from 'html2canvas';

const copyTableImage = async (targetElement) => {
  if (!targetElement) {
    return;
  }

  const canvas = await html2canvas(targetElement, {
    backgroundColor: '#ffffff',
    scale: 2,
  });

  canvas.toBlob(async (blob) => {
    if (!blob) {
      return;
    }

    await navigator.clipboard.write([
      new ClipboardItem({
        'image/png': blob,
      }),
    ]);
  });
};

export default copyTableImage;