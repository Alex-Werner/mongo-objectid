const generateUniqueBuffer = (machineId) => {
  const buffer = Buffer.alloc(5);
  buffer[0] = machineId[0]
  buffer[1] = machineId[1]
  buffer[2] = machineId[2]
  buffer[3] = machineId[3]
  buffer[4] = machineId[4]
  return buffer;
}
module.exports = generateUniqueBuffer;
