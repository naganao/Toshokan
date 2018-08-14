$(function () {

  // var calil = new Calil({
  //   'appkey' : '0d25423cc2aa9c31cdbe7c6675cc325b',
  //   'render': new CalilRender(),
  //   'isbn' : "4103534222",
  //   'systemid' : "Aomori_Pref"
  // });
  // console.log(calil.search());

  $.ajax({
    url: 'https://api.calil.jp/library',
    data:{
      'appkey': '0d25423cc2aa9c31cdbe7c6675cc325b',
      'callback': "",
      'pref': "和歌山県",
      'format': "json"
    }
  }).done(response => {
    console.log(response);

  })
});
