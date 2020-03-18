$(document).ready(function(){
    load_json_data('entreprise');
    function load_json_data(id, parent_id){
        var html_code = '';
        $.getJSON('test.json', function(data){
            html_code += '<option value="">Selectionner un '+id+'</option>';
            $.each(data, function(key, value){
                if(id == 'entreprise'){
                    if(value.parent_id == '0'){
                        html_code += '<option value="'+ value.id +'">'+value.name+'</option>';
                    }
                }else{
                    if(value.parent_id == parent_id){
                        html_code += '<option value="">'+value.name+'</option>';
                    }
                }
            });
            $('#'+id).html(html_code);
        }); 
    }
    $(document).on('change', '#entreprise', function(){
        var country_id = $(this).val();
        if(country_id != ''){
            load_json_data('departement', country_id);
        }else{
            $('#departement').html('<option value=""> Selectionner un Departement</option>');
        }
    });
});

// add new entreprise or departement
function addOption(){
    optionValue = $('#add').val();
    $('#entreprise').append('<option>' +optionValue+ '</option>');
}

function addDepa(){
	option = $('#depa').val();
	$('#departement').append('<option>' +option+ '</option>');
}