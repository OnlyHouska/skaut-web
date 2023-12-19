function openGallery(id) {
  let driveLinks = ["https://drive.google.com/drive/folders/1Q8JeZ4HapgxeZB1oH7b8TdklDbFTjDtN?usp=drive_link", "https://drive.google.com/drive/folders/11Vtv0s2rGTOSDXwmruV2ioKdKMXoF1Xb?usp=drive_link", "https://drive.google.com/drive/folders/10ECPdXOpcRPAPmroTWrLQewr7vqJ6SLy?usp=drive_link"];
  page = driveLinks[id];
  window.open(page);
}
