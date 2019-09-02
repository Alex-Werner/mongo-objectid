const generateTimeBuffer = (time) => {
  const buffer = Buffer.alloc(4);
  buffer[3] = time & 0xff;
  buffer[2] = (time >> 8) & 0xff;
  buffer[1] = (time >> 16) & 0xff;
  buffer[0] = (time >> 24) & 0xff;
  return buffer;
}
module.exports = generateTimeBuffer;
