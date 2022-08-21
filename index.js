

// showing preview

$("#todo").keyup(function (key) {
    if(key.keyCode==13){
        $('#add_todo_btn').click()
    }
    $("#typing").text($(this).val());
    if ($(this).val()) {
        $("#typing").prepend("Typing: ");

    }
});

// add todo

$('#add_todo_btn').bind("click", function () {
    if ($('#todo').val() != "") {
        $('tbody').append(` <tr>
    
        
        <td >
        <input type="checkbox" class="form-check-input"  onclick="todoStatus($(this))" >
    
        </td>
        <td >
        <p class="fw-bold px-2 " style="letter-spacing:2px"  >${$('#todo').val()}</p>
    
        </td>
    
        <td>
            <button type="button" onclick="$(this).parent().parent().remove()" class="btn btn-link btn-sm btn-rounded">
                Del
            </button>
        </td>
    </tr>`)
    $('#todo').val('');
    $('#typing').text('');

    } else {
        $('#modal_button').click();
    }

})

// delete selected 
const deleteSelected=()=>{
    $('input[type=checkbox]').each(function () {
        if(this.checked){
            $(this).parent().parent().remove();
        }
    })

}


const todoStatus=(e)=>{

    if(e.is(":checked")){
        $(e).parent().next().children().addClass('checked');
    }else{
        $(e).parent().next().children().removeClass('checked');

        
    }

}

