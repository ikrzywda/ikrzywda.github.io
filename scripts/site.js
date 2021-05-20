
function mutate_navbar() 
{
    let x = document.getElementById("navi");

    if(x.className === "nav_header")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "nav_header";
    }
}
