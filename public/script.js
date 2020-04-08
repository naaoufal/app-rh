$(document).ready(()=>{

//     // // send the request in the express server and save it in regitre.json
    $('#form').on('click',(e)=>{
        e.preventDefault();
        $.ajax({
          url : '/contact',
          type : 'post',
          contentType : 'application/json',
          data : JSON.stringify($('#form').serializeArray()),
          success : (response)=>{
            console.log(response);
            // $("#opt1").append("<option>"+ response.name +"</option>");
          }
        });
    });
//     // send the request in the express server and save it in login.json
    $('#form_login').submit(()=>{
        $.ajax({
          url : '/connexion',
          type : 'post',
          contentType : 'application/json',
          data : JSON.stringify($('#form_login').serializeArray()),
          success : (response)=>{
            console.log(response);
          }
        });
    });
//     // send the request in the express server and save it in regitre.json
    $('#form_registre').submit((e)=>{
        e.preventDefault();
        $.ajax({
          url : '/inscription',
          type : 'post',
          contentType : 'application/json',
          data : JSON.stringify($('#form_registre').serializeArray()),
          success : (response)=>{
            console.log(response);
          }
        });
    });

//     // button requests
    $("#logout").click(function(){
        $.ajax({url : "/sedeconnecter",
        type : 'GET',
        dataType : 'html',
        success : function(result){
            window.location = '/accueil';
        }});
    });
    $("#connexion").click(function(){
        $.ajax({url : "/accueil",
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
    $("#contact_test").click(function(){
        $.ajax({
        // url : "/entreprises",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/contact';
        }});
    });
    $("#shared_key").click(function(){
        $.ajax({url : "/inscription",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/accueil';
        }});
    });
    $("#shared_key_1").click(function(){
        $.ajax({url : "/inscription",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/accueil';
        }});
    });
    // $("#depa").click(function(){
    //     $.ajax({url : "/contact",
    //     type : 'GET',
    //     dataType : 'html',
    //     success : function(){
    //         window.location = '/entreprises';
    //     }});
    // });
    $("#shared_key_2").click(function(){
        $.ajax({url : "/connexion",
        type : 'GET',
        dataType : 'html',
        success : function(){
            window.location = '/accueil';
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
    const URI = '/api/entreprises';
  
    // GET PRODUCTS
    $('#getProducts').on('click', () => {
      $.ajax({
        url: URI,
        success: function (entreprises) {
          let tbody = $('tbody');
          tbody.html('');
          entreprises.forEach(product => {
            tbody.append(`
                <tr>
                  <td class="id">${product.id}</td>
                  <td>
                    <input type="text" class="name" value="${product.name}"/>
                  </td>
                  <td><input type="text" class="local" value="${product.local}"/></td>
                  <td>
                    <select>
                        <option class="departements">Selectionne vorte departements</option>
                        <option class="departements">${product.departements}</option>
                    </select>
                  </td>
                  <td>
                    <button class="update-button">&#9851;</button>
                    <button class="delete-button">&#10006;</button>
                  </td>
                </tr>
            `)
          })
        }
      });
    });
        // POST PRODUCTS
        $('#productForm').on('submit', (e) => {
          e.preventDefault();
          let newEntr = $('#newEntr');
          let newLocal = $('#newlocal');
      
          $.ajax({
            url: URI,
            method: 'POST',
            data: {
              name: newEntr.val(),
              local : newLocal.val(),
            },
            success: function(response) {
                newEntr.val('')
                newLocal.val('')
             $('#getProducts').click();
            },
            error: function (err) {
              console.log(err);
            }
          });
        });
        
        $('table').on('click', '.update-button', function() {
          let row = $(this).closest('tr');
          let id = row.find('.id').text();
          let name = row.find('.name').val();
          let local = row.find('.local').val();
      
          $.ajax({
            url: `${URI}/${id}`,
            method: 'PUT',
            data: {
              name: name,
              local : local
            },
            success: function(response) {
              console.log(response);
              $('#getProducts').click();
            }
          });
        });
      
        $('table').on('click', '.delete-button', function() {
          let row = $(this).closest('tr');
          let id = row.find('.id').text();
      
          $.ajax({
            url: `${URI}/${id}`,
            method: 'DELETE',
            success: function (response) {
             $('#getProducts').click();
            }
          });
        });
});

// fonction d'affichage et ajouter

// $(function () {

//     const URI = '/api/entreprises';
  
//     // GET PRODUCTS
//     $('#getProducts').on('click', () => {
//       $.ajax({
//         url: URI,
//         success: function (entreprises) {
//           let tbody = $('tbody');
//           tbody.html('');
//           entreprises.forEach(product => {
//             tbody.append(`
//                 <tr>
//                   <td class="id">${product.id}</td>
//                   <td>
//                     <input type="text" class="name" value="${product.name}"/>
//                   </td>
//                   <td><input type="text" class="local" value="${product.local}"/></td>
//                   <td>
//                     <select>
//                         <option class="departements">Selectionne vorte departements</option>
//                         <option class="departements">${product.departements}</option>
//                     </select>
//                   </td>
//                   <td>
//                     <button class="update-button">&#9851;</button>
//                     <button class="delete-button">&#10006;</button>
//                   </td>
//                 </tr>
//             `)
//           })
//         }
//       });
//     });
  
//     // POST PRODUCTS
//     $('#productForm').on('submit', (e) => {
//       e.preventDefault();
//       let newEntr = $('#newEntr');
//       let newLocal = $('#newlocal');
  
//       $.ajax({
//         url: URI,
//         method: 'POST',
//         data: {
//           name: newEntr.val(),
//           local : newLocal.val(),
//         },
//         success: function(response) {
//             newEntr.val('')
//             newLocal.val('')
//          $('#getProducts').click();
//         },
//         error: function (err) {
//           console.log(err);
//         }
//       });
//     });
    
//     $('table').on('click', '.update-button', function() {
//       let row = $(this).closest('tr');
//       let id = row.find('.id').text();
//       let name = row.find('.name').val();
//       let local = row.find('.local').val();
  
//       $.ajax({
//         url: `${URI}/${id}`,
//         method: 'PUT',
//         data: {
//           name: name,
//           local : local
//         },
//         success: function(response) {
//           console.log(response);
//           $('#getProducts').click();
//         }
//       });
//     });
  
//     $('table').on('click', '.delete-button', function() {
//       let row = $(this).closest('tr');
//       let id = row.find('.id').text();
  
//       $.ajax({
//         url: `${URI}/${id}`,
//         method: 'DELETE',
//         success: function (response) {
//          $('#getProducts').click();
//         }
//       });
//     });
// });
  