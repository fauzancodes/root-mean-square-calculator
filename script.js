//for input file
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//declaring variable
var input, inputArray, length, square, sum, mean, root;

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
  //converting input data from string to array
  inputArray = input.split("\n");
  console.log(inputArray);

  //determining input data length
  length = inputArray.length;
  console.log(length);

  //calculating square of each input data
  square = [];
  for (i = 0; i < length; i++) {
    square[i] = Math.pow(inputArray[i],2);
  };
  console.log(square);

  //calculating sum of square of input data
  sum = eval(square.join("+"));
  console.log(sum);

  //calculating the mean square of input data
  mean = sum/length;
  console.log(mean);

  //calculating the root mean square of input data
  root = Math.sqrt(mean);
  console.log(root);

  //get the file input extension
  var extension = document.getElementById("fileInput").value.split(".")[1];
  console.log(extension);

  //deciding either the data is correct or wrong
  if (extension == "dat" && length > 1)  {
    //showing the data result
    document.getElementById("input").innerHTML = inputArray.join("<p></p>");
    document.getElementById("square").innerHTML = square.join("<p></p>");
    document.getElementById("length").innerHTML = length;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("mean").innerHTML = mean;
    document.getElementById("root").innerHTML = root;
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").removeClass("border-danger text-danger");
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").addClass("border-primary");
    $("#dataReq").removeClass("text-danger font-weight-bold");
    $("#dataReq").addClass("text-secondary");
  }
  else if (extension == "txt" && length > 1)  {
    //showing the data result
    document.getElementById("input").innerHTML = inputArray.join("<p></p>");
    document.getElementById("square").innerHTML = square.join("<p></p>");
    document.getElementById("length").innerHTML = length;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("mean").innerHTML = mean;
    document.getElementById("root").innerHTML = root;
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").removeClass("border-danger text-danger");
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").addClass("border-primary");
    $("#dataReq").removeClass("text-danger font-weight-bold");
    $("#dataReq").addClass("text-secondary");
  }
  else {
    //warning that the data doesn't meet the requierments
    console.log("Your data doesn't meet the requierments");
    document.getElementById("input").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("square").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("length").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("sum").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("mean").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("root").innerHTML = "Your data doesn't meet the requierments";
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").removeClass("border-primary");
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").addClass("border-danger");
    $("#dataReq").removeClass("text-secondary");
    $("#dataReq").addClass("text-danger font-weight-bold");
    $("#input, #square, #length, #sum, #mean, #root").addClass("text-danger");
  };
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
}
