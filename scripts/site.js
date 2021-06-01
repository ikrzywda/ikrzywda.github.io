function mutate_navbar() 
{
    let x = document.getElementById("nav-header");

    if(x.className === "nav-header")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "nav-header";
    }
}
