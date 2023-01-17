
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let event = [];
  for (let i = 0; i < matrix.length; i++) {
    i % 2 === 0 ? event.push(...matrix[i]) : event.push(...matrix[i].reverse());
  }
    
  return event;
};
