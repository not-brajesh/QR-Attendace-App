import QRCode from "qrcode";

export const generateQRCode = async (data) => {
  try {
    const qrImage = await QRCode.toDataURL(data);

    return qrImage;
  } catch (error) {
    throw new Error(error.message);
  }
};