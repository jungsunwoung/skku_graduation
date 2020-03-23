

function generate_wallet() {
  var id=document.getElementById("userkey").value;
    $.ajax({
      url: 'https://api.luniverse.io/tx/v1.1/wallets',
      type: 'POST',
      crossDomain: true,
      dataType: 'json',
      headers: {
        'api-key': "RoXdrfUGRaMQKLXy6GhwpNwd1Y6FCA6ikRSpQRN5yvSAJrg9DjRnEZfr6qjRFEhD",
      },
      data:{
          'walletType':"LUNIVERSE",
          "userKey":id
      },
      success: function (data) {
        alert(`지갑생성에 성공하였습니다`)
        var userkey=data.data.address
        alert(data.data.address)

      },
      error: function (data) {
        alert('지갑생성에 실패했습니다')

      }
    });
}

function first(){
$.ajax({
      url: 'https://api.luniverse.io/tx/v1.1/transactions/vote',
      type: 'POST',
      crossDomain: true,
      dataType: 'json',
      headers: {
        'api-key': "RoXdrfUGRaMQKLXy6GhwpNwd1Y6FCA6ikRSpQRN5yvSAJrg9DjRnEZfr6qjRFEhD",
      },
      data:{
          "from":userkey,
          "inputs":{
            "candidate":"0"
          }
      },
      success: function (data) {
        alert(`후보자 투표를 완료했습니다`)
        $.ajax({
          url: 'https://api.luniverse.io/tx/v1.1/transactions/Rewarding',
          type: 'POST',
          crossDomain: true,
          dataType: 'json',
          headers: {
            'api-key': "RoXdrfUGRaMQKLXy6GhwpNwd1Y6FCA6ikRSpQRN5yvSAJrg9DjRnEZfr6qjRFEhD",
          },
          data:{
              "inputs":{
                "receiverAddress":userkey,
                "valueAmount":"1"
              }
          },
          success: function (data) {
            alert(`토큰발급했습니다`)

          
          },
          error: function (data) {
            alert('토큰을 발급하지 못했습니다')

          }
        });
    },
      error: function (data) {
        alert('후보자 투표에 실패했습니다')

      }
    });
}
function second(){
$.ajax({
      url: 'https://api.luniverse.io/tx/v1.1/transactions/FINALVOTE',
      type: 'POST',
      crossDomain: true,
      dataType: 'json',
      headers: {
        'api-key': "RoXdrfUGRaMQKLXy6GhwpNwd1Y6FCA6ikRSpQRN5yvSAJrg9DjRnEZfr6qjRFEhD",
      },
      data:{
          "from":userkey,
          "inputs":{
            "candidate":"1"
          }
      },
      success: function (data) {
        alert(`후보자 투표를 완료했습니다`)
        $.ajax({
          url: 'https://api.luniverse.io/tx/v1.1/transactions/Rewarding',
          type: 'POST',
          crossDomain: true,
          dataType: 'json',
          headers: {
            'api-key': "RoXdrfUGRaMQKLXy6GhwpNwd1Y6FCA6ikRSpQRN5yvSAJrg9DjRnEZfr6qjRFEhD",
          },
          data:{
              "inputs":{
                "receiverAddress":userkey,
                "valueAmount":"1"
              }
          },
          success: function (data) {
            alert(`토큰발급했습니다`)


          },
          error: function (data) {
            alert('토큰을 발급하지 못했습니다')

          }
        });
      },
      error: function (data) {
        alert('후보자 투표에 실패했습니다')

      }
    });
}
