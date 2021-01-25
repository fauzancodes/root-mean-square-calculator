//for input file
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//declaring variable
var input, extension, inputArray, length, square, sum, mean, root;

//get the input file data
function init() {
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
};

function handleFileSelect(event) {
  const reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
};

function handleFileLoad(event){
  console.log(event);
  input = event.target.result;
};

//calculating the rms 
function calculation() {
  //get the file input extension
  extension = document.getElementById("fileInput").value.split(".").pop();
  console.log(extension);

  if (extension == "dat") {
    inputing();
    if (length > 1) {
      calculating();
      showResult();
    }
    else {
      warning();
    }
  }
  else {
    if (extension == "txt") {
      inputing();
      if (length > 1) {
        calculating();
        showResult();
      }
      else {
      warning();
      }
    }
    else {
      warning();
    }
  }
};

//inputing
function inputing() {
  //converting input data from string to array
  inputArray = input.split("\n");

  //determining input data length
  length = inputArray.length;
};

//calculating
function calculating() {
  //calculating square of each input data
  square = [];
  for (i = 0; i < length; i++) {
    square[i] = Math.pow(inputArray[i],2);
  };

  //calculating sum of square of input data
  sum = eval(square.join("+"));

  //calculating the mean square of input data
  mean = sum/length;

  //calculating the root mean square of input data
  root = Math.sqrt(mean);
};

//warning that the data doesn't meet the requierments
function warning() {
  console.log("Your data doesn't meet requierments");
  $("#fileLabel").removeClass("border-primary");
  $("#fileLabel").addClass("border-danger");
  $("#dataReq").removeClass("text-secondary");
  $("#dataReq").addClass("text-danger font-weight-bold");
  $("#details").addClass("d-none");
  $("#result").hide();
  $("#details-show").addClass("d-none");
  $("#warning").removeClass("d-none").show();
};

//showing the data result
function showResult() {
  $("#warning").hide();
  $("#details").hide();
  $("#result").show();
  $("#details-show").removeClass("d-none").show();
  console.log(inputArray);
  document.getElementById("input").innerHTML = inputArray.join("<p></p>");
  console.log(square);
  document.getElementById("square").innerHTML = square.join("<p></p>");
  console.log(length);
  document.getElementById("length").innerHTML = length;
  console.log(sum);
  document.getElementById("sum").innerHTML = sum;
  console.log(mean);
  document.getElementById("mean").innerHTML = mean;
  console.log(root);
  document.getElementById("root").innerHTML = root;
  document.getElementById("root-big").innerHTML = root;
  $("#fileLabel").removeClass("border-danger text-danger");
  $("#fileLabel").addClass("border-primary");
  $("#dataReq").removeClass("text-danger font-weight-bold");
  $("#dataReq").addClass("text-secondary");
};

//copy to clipboard
function copy(selector){
  var $temp = $("<div>");
  $("body").append($temp);
  $temp.attr("contenteditable", true)
       .html($(selector).html()).select()
       .on("focus", function() { document.execCommand('selectAll',false,null); })
       .focus();
  document.execCommand("copy");
  $temp.remove();
};

//details button
$("#details-show").click(function() {
  $("#result").hide();
  $("#details").removeClass("d-none").show();
  $("#details-show").hide();
});
$("#details-hide").click(function() {
  $("#details").hide();
  $("#result").show();
  $("#details-show").show();
});
