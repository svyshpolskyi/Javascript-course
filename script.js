window.onload = function() {
    var input = document.getElementsByTagName("input")[0];
    function addItem() {
    var list = document.getElementsByTagName("ul")[0];
    if (input.value) {
            var item = document.createElement("li");
        item.appendChild(document.createTextNode(input.value));
        var closeButton = document.createElement("span");
        closeButton.style.color = "red";
        closeButton.style.marginLeft = "20px";
        closeButton.style.cursor = "pointer";
        var closeButtonContent = document.createTextNode("X");
        closeButton.appendChild(closeButtonContent);
        item.appendChild(closeButton);
        list.appendChild(item);
        closeButton.addEventListener("click", function(){list.removeChild(this.parentNode)});
        }
    }
    document.getElementById("submit").addEventListener("click", addItem);
    input.addEventListener("keypress", function(e) {
        var key = e.which || e.keyCode;
      if (key === 13) addItem();
    });
}