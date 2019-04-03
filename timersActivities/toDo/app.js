$('button').click(addTask);

$(document).on('click', '#delete', removeTask);

$('input').keypress(function(event) {
    if (event.which === 13) {
            addTask();
    }
});

function addTask() {
    var task = $('#new-task').val();
    $('#tasks').append('<div>' + task + '<span id="delete">X</span></div>');
    $('#new-task').val();
}

function removeTask() {
    $(this).closest('div').remove();
}