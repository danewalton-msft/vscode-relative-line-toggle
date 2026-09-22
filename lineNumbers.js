function getNextLineNumberMode(currentMode) {
  return currentMode === 'relative' ? 'on' : 'relative';
}

module.exports = {
  getNextLineNumberMode
};
