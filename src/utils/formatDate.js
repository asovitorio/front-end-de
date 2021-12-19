const formatDate = (date) => {
  let data = new Date(date);
  let dataFormatada =
    data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  return dataFormatada;
};


module.exports = {formatDate}