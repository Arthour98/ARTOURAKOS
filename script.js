$("ul li:eq(0)").on("click",function()
{
window.location="index.html";
})
$("ul li:eq(1)").on("click",function()
{
window.location="drag-drop.html";
})
$("ul li:eq(2)").on("click",function()
{
window.location="testings.html";
})

$("button#show-display").on("click",function()
{
$("p#hidden-text").slideToggle();
})

let click_more_button=$("button#show-display");
click_more_button.on("mouseover",function()
{
$(this).css(
    {
    "background-color":"green"
    }
)
}).delay(2000).on("mouseleave",function()
{
$(this).css(
    {
    "background-color":"coral"
    }
)
})
console.log("SHENI DEDA MOTHAN");

