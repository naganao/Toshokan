$(function () {
  $("#get_library").on('click',function(){
    var datainfo = setInfo();
    $.ajax({
      url: 'https://api.calil.jp/library',
      data: datainfo,
      dataType: 'jsonp',
      jsonp: 'callback',//コールバックパラメータ名の指定
      //jsonpCallback: 'testCallback',//callback関数名を自分で指名した場合
    }).done(response => {
      console.log(response);

      if(response.length === 0){
        $("#library_list").html('<p>図書館が見つかりません</p>');
        return;
      }

      var lib_list = [];
      for (var i=0; i<response.length;i++){
        //$("#library_list").html('<li><a href="' + response[i].url_pc + '">' + response[i].formal + '</li></a>');
        lib_list.push('<li><a href="' + response[i].url_pc + '">' + response[i].formal + '</li></a>');
      }
      $("#library_list").html(lib_list);
    })
  });

});

function setInfo(){
  var dataObj = {
    'appkey': '0d25423cc2aa9c31cdbe7c6675cc325b',
    format:'json'
  };

  if($("#input_pref").val() !== ""){
    dataObj.pref = $("#input_pref").val();
  }else {
    delete dataObj.pref;
  }

  if($("#input_city").val() !== ""){
    dataObj.city = $("#input_city").val();
  }else {
    delete dataObj.city;
  }

  return dataObj;

}
