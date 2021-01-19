class Form{
    constructor(){}
    //Document Object Model Method for HTML(Hyprttext Markup Language)

    display(){
        var title=createElement('h2')
        title.html('Car Racing Game')
        title.position(160,0)

        var input=createInput('name')
        var button=createButton('Enter')
        input.position(120,5);
        button.position(100,10);

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value();

            playerCount=playerCount++;

           
            player.updateCount(playerCount)
             player.update(name)
            var greeting=createElement('h3')
            greeting.html('hello '+name)
            greeting.position(160,30);
        })
    }
}