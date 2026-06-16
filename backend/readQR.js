import { Jimp } from "jimp";
import QrCode from "qrcode-reader";

const image = await Jimp.read(
  "./uploads/qrcodes/1_Aakanksha_Patange.png"
);

const qr = new QrCode();

qr.callback = (err, value) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("\nQR CONTENT:");
  console.log(value.result);
};

qr.decode(image.bitmap);