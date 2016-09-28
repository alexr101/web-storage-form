//Check if localstorage is supported by the browser
if(localStorage !== null){
    //Init
    var storage = (function(){
         //cacheDOM
        var $container = $(".container");
        var $clickMe = $container.find("#clickMe");
        var $instructions = $container.find("#instructions");
        var $form = $("#storage-form");
        var txtName = $form.find("#name");
        var txtEmail = $form.find("#email");
        var txtIdea = $form.find("#idea");
        
        //RENDER
        function render(){
            //Retrieve localStorage and apply it to the input values
            txtName.val(localStorage.getItem('name'));
            txtEmail.val(localStorage.getItem('email'));
            txtIdea.val(localStorage.getItem('idea'));
        }
        render();
        
        //BIND ELEMENTS TO EVENTS
        $clickMe.click(toggleInstructions);
        txtName.change(updateLocalStorage);
        txtEmail.change(updateLocalStorage);
        txtIdea.change(updateLocalStorage);
        
        //FUNCTIONS
        function toggleInstructions(){
            $instructions.toggle(400);
        }
    
        function updateLocalStorage(){
            //make sure to match the storage and html attribute name, otherwise this won't work
            var storageName = this.name;
            var value = $(this).val();
            console.log(storageName);
            localStorage.setItem(storageName, value);
        }
        
        //PUBLIC APIs
        return {
            toggleInstructions: toggleInstructions
        }
    })()
} else {
    console.log("Sorry, your browser doesn't support local storage.");
}