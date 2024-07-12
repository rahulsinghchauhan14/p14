function showAlert(alertId) {
    const bootstrapAlert = document.querySelector("#" + alertId);
    bootstrapAlert.style.display = "";
    const collapse = new bootstrap.Collapse(bootstrapAlert); 
    collapse.show();
 }
 
 const modalYesBtn = document.querySelector("#send-message");
 modalYesBtn.addEventListener("click", function () {    
    const sendBtn = document.querySelector("#send-message-btn");
    sendBtn.style.display = "none";
    showAlert("conf-alert");
 });