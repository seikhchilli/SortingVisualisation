function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let arr = []

var size = 299;
let arrX = [];


function populate(){
    var calar = document.getElementById("colorselect").value;
    arrX = [];
    while (arrX.length < size) {
        const r = getRndInteger(1, c.width)
        if (arrX.indexOf(r) === -1) {
          arrX.push(r);
        }
    }
    arr = [];
    let i = 0;
    while(i < size){
        let x = arrX[i];
        let y = getRndInteger(0, c.height)
        arr[x] = y;
        ctx.fillStyle = calar;
        ctx.fillRect(x,y,1,1);
        i++;
    }

}

populate();

function run(){
    var sortingAlgo = document.getElementById("algos");
    var algo = sortingAlgo.value

    switch(algo){
        case "Selection Sort":
            selectionSort(arr);
            break;
        case "Bubble Sort":
            bubbleSort(arr);
            break;
        case "Insertion Sort":
            insertionSort(arr);
            break;
        default:
            alert("Sorry! This algorithm is currently not available.")

    }
    document.getElementById("run").disabled = true;
}

function reset(){
    ctx.clearRect(0, 0, c.width, c.height)
    populate();
    document.getElementById("run").disabled = false;
}

function swap(arrt,xp, yp)
{
    ctx.clearRect(xp, arrt[xp], 1, 1);
    ctx.clearRect(yp, arrt[yp], 1, 1);
    ctx.fillRect(xp, arrt[yp], 1, 1);
    ctx.fillRect(yp, arr[xp], 1, 1);
    var temp = arrt[xp];
    arrt[xp] = arrt[yp];
    arrt[yp] = temp;

}
 
async function selectionSort(arrt)
{
    var i, j, min_idx;
    var n = arrt.length;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arrt[j] < arrt[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(arrt,min_idx, i);
        await sleep(100);
    }
}

async function bubbleSort( arrt)
{
var i, j;
var n = arrt.length;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arrt[j] > arrt[j+1])
        {
        swap(arrt,j,j+1);
        await sleep(1);
        }
        
        
    }
}
}

async function insertionSort(arrt) 
{ 
    let i, key, j;
    var n = arrt.length; 
    for (i = 1; i < n; i++)
    { 
        key = arrt[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arrt[j] > key)
        { 
            
            ctx.clearRect(j+1, arrt[j+1], 1,1);
            ctx.fillRect(j+1, arrt[j], 1, 1);
            arrt[j + 1] = arrt[j]; 
            j = j - 1; 
            await sleep(1);
        } 
        
        ctx.clearRect(j+1, arrt[j+1], 1, 1);
        ctx.fillRect(j+1, key, 1, 1);
        arrt[j + 1] = key; 
        await sleep(1);
    } 
} 