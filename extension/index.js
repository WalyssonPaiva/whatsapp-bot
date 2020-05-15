let initialMessage = '';

const eventFire = (el, etype) => {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(etype, true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(evt);
}
const interval = setInterval( async ()=>{
    const messageArea = document.querySelector('._9tCEa');

    if(messageArea){
        const messageCard = messageArea.lastElementChild;
        const message = messageCard.querySelector('._3zb-j > span > span');

        if(initialMessage != message.textContent){

            const command = message.textContent.slice(0,2);//pega o !@
            const content = await message.textContent.slice(2); //essa linha pega o que está dps do !@

           
            if(command == '!@'){
                const response = await fetch(`http://localhost:3333/filmes/${content}`);
                messageBox = document.querySelectorAll("[contenteditable='true']")[1];
                const responseJson = await response.json(); //transformando a resposta da api em json
                messageBox.innerHTML = `${responseJson}`.replace(/  /gm,'');
               // messageBox.innerHTML = message.replace(/  /gm,'');

		//Force refresh
		event = document.createEvent("UIEvents");
		event.initUIEvent("input", true, true, window, 1);
		messageBox.dispatchEvent(event);

		//Click at Send Button
        eventFire(document.querySelector('span[data-icon="send"]'), 'click');
        
                console.log(`${content} foi digitado`);
            }
            initialMessage = message.textContent;
        }
        
      
    }
        
}, 1000)

