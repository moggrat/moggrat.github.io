var yearFull = new Date().getFullYear();
document.getElementById("copyright").innerHTML = isYear2019(yearFull);

//document.getElementById("contents").insertAdjacentHTML('beforeend', '<ol><li>html data</li></ol>') ;

//"&copy;" 2019 -

function isYear2019(yearQ)
{
    if (yearQ = 2019)
        return "Copyright &copy 2019 Luke Ray Scott";
    else
        return "Copyright &copy 2019 - " + yearQ + " Luke Ray Scott";

}
