import QRCode from "qrcode";

const generateQRCode = async (studentData) => {
  try {
    const qrData = JSON.stringify({
      studentId: studentData._id,
      rollNumber: studentData.rollNumber,
      name: studentData.name,
      department: studentData.department,
      batch: studentData.batch,
    });

    const qrImage = await QRCode.toDataURL(qrData);

    return qrImage;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default generateQRCode;