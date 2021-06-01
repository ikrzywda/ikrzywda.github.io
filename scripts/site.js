function mutate_navbar() 
{
    let x = document.getElementById("nav-bar");

    if(x.className === "nav-bar")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "nav-bar";
    }
}
