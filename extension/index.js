let initialMessage = '';

const eventFire = (el, etype) => {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(etype, true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(evt);
}
const apiQuery = async (content) =>{
    const response = await fetch(`http://localhost:3333/filmes/${content}`);
    const responseJson = await response.json();
    return responseJson;
}

const interval = setInterval( async ()=>{
    const messageArea = document.querySelector('._9tCEa');
    if(messageArea){
        const messageCard = messageArea.lastElementChild;
        const message = messageCard.querySelector('._3zb-j > span > span');
        
        //entra neste if se tiver uma nova mensagem (mensagem nova != mensagem antiga)
        if(initialMessage != message.textContent){
            const command = message.textContent.slice(0,2);//pega o !@
            const content = message.textContent.slice(2); //essa linha pega o que está dps do !
            if(command == '!@'){
                messageBox = document.querySelectorAll("[contenteditable='true']")[1];
                const response = await apiQuery(content);
                messageBox.innerHTML = `${response}`.replace(/  /gm,'');

		        //Force refresh
		        event = document.createEvent("UIEvents");
		        event.initUIEvent("input", true, true, window, 1);
		        messageBox.dispatchEvent(event);

		        //Click at Send Button
                eventFire(document.querySelector('span[data-icon="send"]'), 'click');
            }
            initialMessage = message.textContent;
        }
        
      
    }
        
}, 1000)

