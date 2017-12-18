var EditMarks;
var EditCounts;
var OpenMark;
var CloseMark;
var ShowModel;
var CloseModel;
var OpenEdit;
var CloseEdit;
  
  OpenMark = function(){
  	$('#id01').css('display', 'block');
  }
 CloseMark = function(){
 	$('#id01').css('display', 'none');
 }

  $('#add').click(function(){

  	$('#Ul1').append('<li class="Find"><p class="ModelCar" onclick="OpenModel()">' + $('#MarkOfCar').val() + '</p>' + '</li>' +
  	'<button id="delete">X</button>'+ 	'<button id="edit" onclick="OpenEdit()">Edit</button>' + '<p class="Count" style="display:none;">' + $('.country').val() + '</p>');
  });
 $('#Ul1').on('click', '#delete', function(){
 	$(this).parent().remove();
 })

 OpenModel = function(){
  	$('#id02').css('display', 'block');
  }
 CloseModel = function(){
 	$('#id02').css('display', 'none');
 	$('#TitleOf').text('');
 	$('#ShowCount').text('');
 }

 $('#Ul1').on('click', '.ModelCar', function(){
 	$('#TitleOf').append($(this).text());
 	$('#ShowCount').append('Country: ' + $('.country').val())
 })

 $('#add').click(function(){
 	$(this).after('<br><div class="w3-gray ModelDiv"><h4>Add a model</h4><input type="text" class="ModInp">Add new model</button></div>')
 })

 OpenEdit = function(){
  	$('#ModalEdit').css('display', 'block');
  }
 CloseEdit = function(){
 	$('#ModalEdit').css('display', 'none');
 }

 $('#Ul1').on('click', '#edit', function(){
 	   EditMarks = $(this).prev().prev();
       EditCounts = $(this).next();
        $('.InpEdit').val(EditMarks.html());
        $('.EditCount').val(EditCounts.html());
        $('#Save').click(function(){
        EditMarks.html($('.InpEdit').val());
      EditCounts.html($('.EditCount').val())
 })
 })
 