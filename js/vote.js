
var token;
var userkey;
var Agree = document.getElementById("agree")
var DisAgree = document.getElementById("opposite")

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
        userkey=data.data.address

        $.ajax({
                       url: 'https://api.luniverse.io/tx/v1.1/wallets/' + userkey + '/FT9754/GD/balance',
                       type: "GET",
                       crossDomain: true,
                       dataType: "json",
                       headers: {
                           "api-key" : "RoXdrfUGRaMQKLXy6GhwpNwd1Y6FCA6ikRSpQRN5yvSAJrg9DjRnEZfr6qjRFEhD"
                       },
                       success: (result) => {
                           token = result.data.balance
                           alert(token)
                       },
                       error: (request, status, error) => {
                           console.log('fail to get balance')

                       }
                   })

      },
      error: function (data) {
        alert('지갑생성에 실패했습니다')

      }
    });
}

 Agree.onclick = async function () {
   alert(userkey);
  if(token==0){
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
            "candidatenum":"0"
          }
      },
      success: function (data) {
        alert(`투표를 완료했습니다`)
        $.ajax({
          url: 'https://api.luniverse.io/tx/v1.1/transactions/Reward',
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
        alert('투표에 실패했습니다')

      }
    });
  }else{
    alert("이미 투표하셨습니다")
  }
}
DisAgree.onclick = async function () {
  if (token==0){
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
            "candidatenum":"1"
          }
      },
      success: function (data) {
        alert(`투표를 완료했습니다`)
        $.ajax({
          url: 'https://api.luniverse.io/tx/v1.1/transactions/Reward',
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
        alert('투표에 실패했습니다')

      }
    });
  }else{
    alert("이미 투표하셨습니다")
  }
}
