$(document).ready(function(){
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    var token = "29fdeb5bce498ac75239948506f5b6ba3fb621fb";
    var query;
    var box = [];

    $('input').keyup(function(e){
        query = String(e.target.value);

        var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

        box.length=0;
      
        fetch(url, options)
        .then(response => response.json())
        .then(result => {for (var i = 0; i < result.suggestions.length; i++){
                            box.push(result.suggestions[i].value)
        }; box.length=8}) /* Показывает первые 8*/
        .catch(error => console.log("error", error));
        
        
        $('#input').autocomplete({
            appendTo: ".box",
            source: box,
            maxHeight: 100,
            minChars: 1,
            delay: 0,
            
        });
        
        $('.ui-helper-hidden-accessible').empty();
    })
    
    
});
