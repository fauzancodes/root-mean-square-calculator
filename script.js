//for input file
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//declaring variable
var input, inputArray, length, square, sum, mean, root;

//get the input file data
function init(){
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event){
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){
  console.log(event);
  input = event.target.result;
}

//calculating the rms 
function calculation() {
    //converting input data from string to array
    inputArray = input.split("\n");
    document.getElementById("input").innerHTML = inputArray.join(" | ");
    
    //determining input data length
    length = inputArray.length;
    document.getElementById("length").innerHTML = length;

    //calculating square of each input data
    square = "";
    for (i = 0; i < length; i++) {
        square += Math.pow(inputArray[i],2) + ",";
    };
    square = square.split(",");
    square.pop();
    document.getElementById("square").innerHTML = square.join(" | ");

    //calculating sum of square of input data
    sum = eval(square.join("+"));
    document.getElementById("sum").innerHTML = sum;

    //calculating the mean square of input data
    mean = sum/length;
    document.getElementById("mean").innerHTML = mean;

    //calculating the root mean square of input data
    root = Math.sqrt(mean);
    document.getElementById("root").innerHTML = root;
};