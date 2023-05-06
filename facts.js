function factsList(){
    var facts =[
        {id: 1, dataPercent: 76.9, strokeValue: "227.093, 999", value: "76,9", desc: "des testeurs trouvent leurs barbes visiblement plus comblées"},
        {id: 2, dataPercent: 84.6, strokeValue: "249.832, 999", value: "84,6", desc: "des testeurs trouvent que le produit aide la barbe à pousser"},
        {id: 3, dataPercent: 92.3, strokeValue: "272.571, 999", value: "92,3", desc: "des testeurs trouvent leur barbe plus brillante"},
        {id: 4, dataPercent: 88.5, strokeValue: "261.349, 999", value: "88,5", desc: "des testeurs trouvent leurs poils de barbe plus nourris"},
        {id: 5, dataPercent: 88.5, strokeValue: "261.349, 999", value: "88,5", desc: "des testeurs trouvent leurs poils de barbe plus doux au toucher"},
        {id: 6, dataPercent: 84.6, strokeValue: "249.832, 999", value: "84,6", desc: "des testeurs trouvent leurs poils de barbe plus forts"},
        {id: 7, dataPercent: 100, strokeValue: "295.31, 999", value: "100", desc: "des testeurs trouvent leur barbe subtilement parfumée"},
        {id: 8, dataPercent: 92.3, strokeValue: "272.571, 999", value: "92,3", desc: "des testeurs trouvent que le produit ne laisse pas de résidus sur la barbe"},
        {id: 9, dataPercent: 100, strokeValue: "295.31, 999", value: "100", desc: "des testeurs trouvent que le produit n’irrite pas la peau"},
    ]

    var html=""
    
    for(var i=0; i<facts.length; i++){
        html+="<div class='fact'>";
        html+="<div class='point'>";
        html+="<svg class='rond-percent' viewBox='0 0 100 100' width='90' height='90' data-percent='"+facts[i].dataPercent+"' style='stroke-dasharray: "+facts[i].strokeValue+";'><circle class='circle' cx='50' cy='50' r='47'></circle></svg>";
        html+="<span class='value'>"+facts[i].value+"%*</span>";
        html+="<svg class='rond-background' viewBox='0 0 100 100' width='90' height='90'><circle cx='50' cy='50' r='47'></circle></svg>"
        html+="</div>";
        html+="<p class='desc'>"+facts[i].desc+"</p>";
        html+="</div>";
    }

    document.getElementById("facts").innerHTML = html
}

factsList()