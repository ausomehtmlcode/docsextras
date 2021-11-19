// Ui Menu
function onOpen() {
  let ui = DocumentApp.getUi();
  ui.createMenu('Extras')
  .addItem('About', 'aboutFunction')
  .addItem('Purge Document', 'myFunction')
  .addToUi();
};

function myFunction() {
    var ui = DocumentApp.getUi();
// Confirmation Message Box
  var result = ui.alert(
     'Purge?',
     'Are you sure you want to purge the document? It will delete EVERYTHING. This is irreversible.',
      ui.ButtonSet.YES_NO);

  // responses
  if (result == ui.Button.YES) {
    // Clicked Yes ^^^
    ui.alert('Purging...');
  purge()
  } else {

  }
}

function purge(){
  // Stuff to delete everything
    var doc = DocumentApp.getActiveDocument()
  try { doc.getBody().clear()   } catch(e) {}
  try { doc.getFooter().clear() } catch(e) {}
  try { doc.getHeader().clear() } catch(e) {}
     }

function aboutFunction() {
  var ui = DocumentApp.getUi();
  var result = ui.alert(
     'About',
     'The Extras page script was made by ausome. You can look at my github at ausomehtmlcode. (I know it says ausomeHTMLcode, but trust me, i do other code sometimes.) Please use the utilities responsibly.',
      ui.ButtonSet.OK);
}
