$(document).ready(()=>{
    // $("#new").click(function(){
    //   $.ajax({url: "/entreprises",
    //   type : 'GET',
    //   dataType : 'json',
    //   success: function(result){
    //       let result = {};
    //       data = JSON.stringify(result.name);
    //       $("#entreprise").append("<option>"+ data +"</option>");
    //   }});
    // });
    $('#form').submit((e)=>{
        e.preventDefault();
        $("#opt1").append("<option>"+ e.name +"</option>");
        $.ajax({
          url : '/contact',
          type : 'post',
          contentType : 'application/json',
          data : JSON.stringify($('#form').serializeArray()),
          success : (response)=>{
            console.log(response);
            $("#opt1").append("<option>"+ response.name +"</option>");
          }
        });
    });
    $('#form1').submit((e)=>{
        e.preventDefault();
        $.ajax({
          url : '/entreprises',
          type : 'post',
          contentType : 'application/json',
          data : JSON.stringify($('#form1').serializeArray()),
          success : (response)=>{
            console.log(response);

          }
        });
    });
    $("#logout").click(function(){
        $.ajax({url : "/sedeconnecter",
        type : 'GET',
        dataType : 'html',
        success : function(result){
            window.location = '/';
        }});
    });
    $("#connexion").click(function(){
        $.ajax({url : "/",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/connexion';
        }});
    });
    $("#regi-1").click(function(){
        $.ajax({url : "/connexion",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/inscription';
        }});
    });
    $("#regi-2").click(function(){
        $.ajax({url : "/inscription",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/connexion';
        }});
    });
    $("#shared_key").click(function(){
        $.ajax({url : "/inscription",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/';
        }});
    });
    $("#shared_key_1").click(function(){
        $.ajax({url : "/inscription",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/';
        }});
    });
    $("#depa").click(function(){
        $.ajax({url : "/contact",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/entreprises';
        }});
    });
    $("#shared_key_2").click(function(){
        $.ajax({url : "/connexion",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/';
        }});
    });
    $("#shared_key_3").click(function(){
        $.ajax({url : "/connexion",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/';
        }});
    });
    $("#conx").click(function(){
        var name = $("#name").val();
        var password = $("#password").val();
        if(name == "" && password == ""){
            alert("Le nom ou le mot de passe invalid");
            $.ajax({url : "/connexion",
            type : 'GET',
            dataType : 'html',
            success : function(){
                window.location = '/connexion';
            }});
        }else{
            $.ajax({url : "/connexion",
            type : 'GET',
            dataType : 'html',
            success : function(){
            window.location = '/entreprises';
        }});
        }
    });
    $("#inscri").click(function(){
        var first = $("#firstname").val();
        var password = $("#password").val();
        var confirm = $("#confirm_password").val();
        var last = $("#lastname").val();
        var email = $("#email").val();
        if(first == "" && password == "" && confirm == "" && last == "" && email == ""){
            alert("Le données sont invalid");
            $.ajax({url : "/inscription",
            type : 'GET',
            dataType : 'html',
            success : function(){
                window.location = '/inscription';
            }});
        }else{
            $.ajax({url : "/inscription",
            type : 'GET',
            dataType : 'html',
            success : function(){
            window.location = '/entreprises';
        }});
        }
    });
});