// written by Sam Winkler, 2020
// www.samwinkler.com

//Replace Syntheyes path below if installed elsewhere:
if (system.osName == "MacOS"){
    synthPath = "/Applications/SynthEyes/SynthEyes.app" ;
    } else {
        synthPath = "C:\\Program Files\\Andersson Technologies LLC\\SynthEyes\\SynthEyes64.exe";
        }

if (app.settings.haveSetting("sendToSyntheyes", "savedFolder") == true){
    savedFolder = app.settings.getSetting("sendToSyntheyes", "savedFolder");
    } else {savedFolder = "";}
    
if (app.settings.haveSetting("sendToSyntheyes", "blurInput") == true){
    blurInputVal = app.settings.getSetting("sendToSyntheyes","blurInput");
    } else { blurInputVal = 1; }
if (app.settings.haveSetting("sendToSyntheyes", "hiPassInput") == true){
    hiPassInputVal = app.settings.getSetting("sendToSyntheyes","hiPassInput");
    } else { hiPassInputVal = 11; }
if (app.settings.haveSetting("sendToSyntheyes", "highInput") == true){
    highInputVal = app.settings.getSetting("sendToSyntheyes","highInput");
    } else { highInputVal = .53; }
if (app.settings.haveSetting("sendToSyntheyes", "midInput") == true){
    midInputVal = app.settings.getSetting("sendToSyntheyes","midInput");
    } else { midInputVal = .50; }
if (app.settings.haveSetting("sendToSyntheyes", "lowInput") == true){
    lowInputVal = app.settings.getSetting("sendToSyntheyes","lowInput");
    } else { lowInputVal = .47; }
        
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":2,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"synth","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":true,"minimizeButton":true,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"Send to Syntheyes","preferredSize":[400,300],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"panel_01","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Project Name","preferredSize":[360,0],"margins":15,"orientation":"column","spacing":10,"alignChildren":["center","top"],"alignment":null}},"item-2":{"id":2,"type":"EditText","parentId":1,"style":{"enabled":true,"varName":"synthPrjName","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[320,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Button","parentId":5,"style":{"enabled":true,"varName":"setToFootageButton","text":"Set to Footage Name","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":""}},"item-4":{"id":4,"type":"Button","parentId":5,"style":{"enabled":true,"varName":"setToCompButton","text":"Set to Comp Name","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"grp_01","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-6":{"id":6,"type":"Button","parentId":7,"style":{"enabled":true,"varName":"versionButton","text":"Add Version","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"grp_02","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-8":{"id":8,"type":"EditText","parentId":7,"style":{"enabled":true,"varName":"version","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"01","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"EditText","parentId":13,"style":{"enabled":true,"varName":"synthFolder","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[320,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Button","parentId":13,"style":{"enabled":true,"varName":"folderButton","text":"Select  Folder","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"panel_02","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Project Folder","preferredSize":[360,0],"margins":15,"orientation":"column","spacing":10,"alignChildren":["center","top"],"alignment":null}},"item-14":{"id":14,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"panel_03","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Export","preferredSize":[360,0],"margins":15,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-15":{"id":15,"type":"Button","parentId":14,"style":{"enabled":true,"varName":"sendButton","text":"Send to Syntheyes!","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Checkbox","parentId":14,"style":{"enabled":true,"varName":"hiPassButton","text":"Apply Hi-Pass","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-17":{"id":17,"type":"Button","parentId":14,"style":{"enabled":true,"varName":"helpButton","text":"?","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,5,3,4,7,6,8,13,10,12,14,15,16,17],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// SYNTH
// =====
var synth = new Window("palette", undefined, undefined, {maximizeButton: true, minimizeButton: true, resizeable: true}); 
    synth.text = "Send to Syntheyes"; 
    synth.preferredSize.width = 400; 
    synth.preferredSize.height = 300; 
    synth.orientation = "column"; 
    synth.alignChildren = ["center","top"]; 
    synth.spacing = 10; 
    synth.margins = 16; 

// PANEL_01
// ========
var panel_01 = synth.add("panel", undefined, undefined, {name: "panel_01"}); 
    panel_01.text = "Project Name"; 
    panel_01.preferredSize.width = 360; 
    panel_01.orientation = "column"; 
    panel_01.alignChildren = ["center","top"]; 
    panel_01.spacing = 10; 
    panel_01.margins = 15; 

var synthPrjName = panel_01.add('edittext {properties: {name: "synthPrjName"}}');
    synthPrjName.preferredSize.width = 320; 
    synthPrjName.enabled = false; 

// GRP_01
// ======
var grp_01 = panel_01.add("group", undefined, {name: "grp_01"}); 
    grp_01.orientation = "row"; 
    grp_01.alignChildren = ["center","center"]; 
    grp_01.spacing = 10; 
    grp_01.margins = 0; 

var setToFootageButton = grp_01.add("button", undefined, undefined, {name: "setToFootageButton"}); 
    setToFootageButton.text = "Set to Footage Name"; 
    setToFootageButton.enabled = false; 

var setToCompButton = grp_01.add("button", undefined, undefined, {name: "setToCompButton"}); 
    setToCompButton.text = "Set to Comp Name";
    setToCompButton.enabled = false; 

// GRP_02
// ======
var grp_02 = panel_01.add("group", undefined, {name: "grp_02"}); 
    grp_02.orientation = "row"; 
    grp_02.alignChildren = ["center","center"]; 
    grp_02.spacing = 10; 
    grp_02.margins = 0; 

var versionButton = grp_02.add("button", undefined, undefined, {name: "versionButton"}); 
    versionButton.text = "Add Version"; 
    versionButton.enabled = false; 

var version = grp_02.add('edittext {justify: "center", properties: {name: "version"}}'); 
    version.text = "01"; 
    version.preferredSize.width = 50; 
    version.enabled = false; 

// PANEL_02
// ========
var panel_02 = synth.add("panel", undefined, undefined, {name: "panel_02"}); 
    panel_02.text = "Project Folder"; 
    panel_02.preferredSize.width = 360; 
    panel_02.orientation = "column"; 
    panel_02.alignChildren = ["center","top"]; 
    panel_02.spacing = 10; 
    panel_02.margins = 15; 

var synthFolder = panel_02.add('edittext {properties: {name: "synthFolder"}}'); 
    synthFolder.text = savedFolder;
    synthFolder.preferredSize.width = 320;
    synthFolder.enabled = false; 

var folderButton = panel_02.add("button", undefined, undefined, {name: "folderButton"}); 
    folderButton.text = "Select  Folder"; 
    folderButton.enabled = false; 

// PANEL_03
// ========
var panel_03 = synth.add("panel", undefined, undefined, {name: "panel_03"}); 
    panel_03.text = "Export"; 
    panel_03.preferredSize.width = 360; 
    panel_03.orientation = "column"; 
    panel_03.alignChildren = ["center","center"]; 
    panel_03.spacing = 20; 
    panel_03.margins = 15; 

// GROUP1
// ======
var group1 = panel_03.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var hiPassCheckbox = group1.add("checkbox", undefined, undefined, {name: "hiPassCheckbox"}); 
    hiPassCheckbox.text = "Apply Hi-Pass"; 
    hiPassCheckbox.alignment = ["left","bottom"]; 

var hiPassButton = group1.add("button", undefined, undefined, {name: "hiPassButton"}); 
    hiPassButton.text = "Hi-Pass Settings"; 

// PANEL_04
// ========
var group2 = panel_03.add("group", undefined, {name: "group1"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var sendButton =  group2.add("button", undefined, undefined, {name: "sendButton"}); 
    sendButton.text = "Send to Syntheyes!"; 

synth.show();


/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":23,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"hiPassSettings","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Hi-Pass Settings","preferredSize":[240,200],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","center"]}},"item-1":{"id":1,"type":"StaticText","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Blur:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"Group","parentId":16,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-3":{"id":3,"type":"EditText","parentId":2,"style":{"enabled":true,"varName":"blurInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":16,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-5":{"id":5,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Hi-Pass:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"hiPassInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"Group","parentId":17,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"High:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"EditText","parentId":7,"style":{"enabled":true,"varName":"highInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Group","parentId":17,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-11":{"id":11,"type":"StaticText","parentId":10,"style":{"enabled":true,"varName":"","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Mid:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"EditText","parentId":10,"style":{"enabled":true,"varName":"midInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Group","parentId":17,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-14":{"id":14,"type":"StaticText","parentId":13,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Low:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"EditText","parentId":13,"style":{"enabled":true,"varName":"lowInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[40,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Group","parentId":19,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-17":{"id":17,"type":"Group","parentId":19,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-18":{"id":18,"type":"Divider","parentId":19,"style":{"enabled":true,"varName":null}},"item-19":{"id":19,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-20":{"id":20,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-21":{"id":21,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":15,"orientation":"row","spacing":10,"alignChildren":["center","bottom"],"alignment":null}},"item-22":{"id":22,"type":"Button","parentId":21,"style":{"enabled":true,"varName":"hiPassSaveButton","text":"Save & Close","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-23":{"id":23,"type":"Button","parentId":21,"style":{"enabled":true,"varName":"hiPassDefaultButton","text":"Restore Default","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,19,16,2,1,3,4,5,6,18,17,7,8,9,10,11,12,13,14,15,20,21,22,23],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// HIPASSSETTINGS
// ==============
var hiPassSettings = new Window("palette"); 
    hiPassSettings.text = "Hi-Pass Settings"; 
    hiPassSettings.preferredSize.width = 240; 
    hiPassSettings.preferredSize.height = 200; 
    hiPassSettings.orientation = "column"; 
    hiPassSettings.alignChildren = ["center","center"]; 
    hiPassSettings.spacing = 10; 
    hiPassSettings.margins = 16; 

// GROUP1
// ======
var group1 = hiPassSettings.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["center","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

// GROUP2
// ======
var group2 = group1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "column"; 
    group2.alignChildren = ["right","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

// GROUP3
// ======
var group3 = group2.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["right","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var statictext1 = group3.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "Blur:"; 

var blurInput = group3.add('edittext {properties: {name: "blurInput"}}'); 
    blurInput.preferredSize.width = 40; 
    blurInput.text = blurInputVal;

// GROUP4
// ======
var group4 = group2.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["right","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var statictext2 = group4.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "Hi-Pass:"; 

var hiPassInput = group4.add('edittext {properties: {name: "hiPassInput"}}'); 
    hiPassInput.preferredSize.width = 40; 
    hiPassInput.text = hiPassInputVal;

// GROUP1
// ======
var divider1 = group1.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// GROUP5
// ======
var group5 = group1.add("group", undefined, {name: "group5"}); 
    group5.orientation = "column"; 
    group5.alignChildren = ["right","center"]; 
    group5.spacing = 10; 
    group5.margins = 0; 

// GROUP6
// ======
var group6 = group5.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = 0; 

var statictext3 = group6.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "High:"; 

var highInput = group6.add('edittext {properties: {name: "highInput"}}'); 
    highInput.preferredSize.width = 40; 
    highInput.text = highInputVal;

// GROUP7
// ======
var group7 = group5.add("group", undefined, {name: "group7"}); 
    group7.orientation = "row"; 
    group7.alignChildren = ["left","center"]; 
    group7.spacing = 10; 
    group7.margins = 0; 

var statictext4 = group7.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "Mid:"; 

var midInput = group7.add('edittext {properties: {name: "midInput"}}'); 
    midInput.preferredSize.width = 40; 
    midInput.text = midInputVal;

// GROUP8
// ======
var group8 = group5.add("group", undefined, {name: "group8"}); 
    group8.orientation = "row"; 
    group8.alignChildren = ["left","center"]; 
    group8.spacing = 10; 
    group8.margins = 0; 

var statictext5 = group8.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "Low:"; 

var lowInput = group8.add('edittext {properties: {name: "lowInput"}}'); 
    lowInput.preferredSize.width = 40; 
    lowInput.text = lowInputVal

// HIPASSSETTINGS
// ==============
var divider2 = hiPassSettings.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

// GROUP9
// ======
var group9 = hiPassSettings.add("group", undefined, {name: "group9"}); 
    group9.orientation = "row"; 
    group9.alignChildren = ["center","bottom"]; 
    group9.spacing = 10; 
    group9.margins = 15; 

var hiPassSaveButton = group9.add("button", undefined, undefined, {name: "hiPassSaveButton"}); 
    hiPassSaveButton.text = "Save & Close"; 

var hiPassDefaultButton = group9.add("button", undefined, undefined, {name: "hiPassDefaultButton"}); 
    hiPassDefaultButton.text = "Restore Default"; 



setToFootageButton.onClick =  function setToFootageClick(){
    if (app.project.activeItem && app.project.activeItem instanceof FootageItem){
        myShot = app.project.activeItem.name;
        myShot = myShot.slice(0, myShot.indexOf('['));
        myShot = myShot.slice(0, -1);
        synthPrjName.text = myShot;
        } else { alert("No footage selected!")}
    }

setToCompButton.onClick =  function setToCompClick(){
    if (app.project.activeItem && app.project.activeItem instanceof CompItem){
        myShot = app.project.activeItem.name;
        synthPrjName.text = myShot;
        } else { alert("No comp selected!")}
    }

versionButton.onClick =  function versionClick(){
    if (version.text != ""){
        synthPrjName.text += "_v" + version.text;
        } else { synthPrjName.text += "_v01"}
    }

folderButton.onClick = function synthSelectFolder(){
   folderObj = new Folder 
   folderPath = folderObj.selectDlg("sway");
   synthFolder.text = folderPath.fsName;
   app.settings.saveSetting("sendToSyntheyes", "savedFolder", folderPath.fsName)
   }

sendButton.onClick =  function sendButtonClick(){
    if (app.project.activeItem && app.project.activeItem instanceof FootageItem){
        footage = app.project.activeItem.file.fsName;
        //footage = footage.replace(/\\/g, "\\\\");
        fps = app.project.activeItem.frameRate;
        aspectRatio = app.project.activeItem.pixelAspect * (app.project.activeItem.width / app.project.activeItem.height);
        scriptFolderPath = File($.fileName).path;

        sendCommand = "\"" + synthPath  + "\"" + " -run OpenFileFromComp +file \"" + footage + "\" +rate " + fps + " +aspect " + aspectRatio;
        if (hiPassCheckbox.value == true){
            //levels = [lowInputVal, midInputVal, highInputVal];
            sendCommand += " +blur " +  blurInputVal + " +hipass " + hiPassInputVal + " +low " + lowInputVal + " +mid " + midInputVal + " +high " + highInputVal;
            }
        
        if (system.osName == "MacOS"){
            sendCommand = "open " + sendCommand;
            sendSynth = new File(scriptFolderPath + encodeURI("/sendSynth.command"));
            sendSynth.open("w");
            sendSynth.write(sendCommand);
            sendSynth.close();
            system.callSystem("chmod +x " + "\"" + sendSynth.fsName + "\"");
            sendSynth.execute();
            } else {
                sendSynth = new File(scriptFolderPath + encodeURI("/sendSynth.bat"));
                sendSynth.open("w");
                sendSynth.write(sendCommand);
                sendSynth.close();
                sendSynth.execute();
                //$.sleep(1000); // delay script, and then...
                //lsendSynth.remove();    
                }

        } else { alert("No footage selected!")}
    }

hiPassButton.onClick =  function hiPassButtonClick(){    
    hiPassSettings.center();
    hiPassSettings.show();  
    }

hiPassDefaultButton.onClick = function hiPassDefaultButtonclick(){
    blurInput.text = 1;
    hiPassInput.text= 11;
    highInput.text = .53;
    midInput.text = .50;
    lowInput.text = .47;
    }

hiPassSaveButton.onClick =  function hiPassSaveButtonClick(){
    blurInputVal = blurInput.text;
    hiPassInputVal = hiPassInput.text;
    highInputVal = highInput.text;
    midInputVal = midInput.text;
    lowInputVal = lowInput.text;
    
    app.settings.saveSetting("sendToSyntheyes", "blurInput", blurInputVal);
    app.settings.saveSetting("sendToSyntheyes", "hiPassInput", hiPassInputVal);
    app.settings.saveSetting("sendToSyntheyes", "highInput", highInputVal);
    app.settings.saveSetting("sendToSyntheyes", "midInput", midInputVal);
    app.settings.saveSetting("sendToSyntheyes", "lowInput", lowInputVal);
    hiPassSettings.hide();
    }

