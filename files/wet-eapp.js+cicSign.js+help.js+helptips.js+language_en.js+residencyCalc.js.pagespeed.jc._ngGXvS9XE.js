var mod_pagespeed_pVyHXzY0x5 = "$(document).ready(function(){updateClassGeIE10();if(typeof eappAddIcons==='function'){eappAddIcons();}\nupdateErrorAttributesFields(\"question-label\");updateErrorAttributesFields(\"question-description\");});function updateErrorAttributesFields(questionDescClass){\"use strict\";var len,field,fields,$fields,questionClass,questionErrorClass,$questionDescs,questionDescriptionId;if(ltIE8())\nreturn;if(questionDescClass!==\"question-label\"&&questionDescClass!==\"question-description\")\nreturn;questionErrorClass=questionDescClass+\"-error\";$questionDescs=$(\".\"+questionDescClass+\", .\"+questionErrorClass);len=$questionDescs.length;if(!len)\nreturn;for(var i=0;i<len;i++){questionClass=\"\";if(($questionDescs[i].className).indexOf(questionErrorClass)!==-1){questionClass=questionErrorClass;}else if(($questionDescs[i].className).indexOf(questionDescClass)!==-1){questionClass=questionDescClass;}\nif(questionDescClass===\"question-label\"){field=$questionDescs[i].getAttribute(\"for\");if(field!=null)\nsetAriaInvalid(field,questionClass,questionDescClass,questionErrorClass);}else{questionDescriptionId=$questionDescs[i].id;if(questionDescriptionId==null)\ncontinue;if(questionDescriptionId.length>0){fields=\"div[aria-describedby='\"+questionDescriptionId+\"'] .form-control\";fields+=\", \"+\"div[aria-describedby='\"+questionDescriptionId+\"'] input[type='radio']\";$fields=$(fields);if($fields.length){var lenFields=$fields.length;for(var j=0;j<lenFields;j++){field=$fields[j].id;if(field!=null){setAriaInvalid(field,questionClass,questionDescClass,questionErrorClass);}}}}}}}\nfunction setAriaInvalid(field,questionClass,questionDescClass,questionErrorClass){if(field==null)\nreturn;if(field.length!==0){var el=document.getElementById(field);if(el){if(questionClass===questionErrorClass){el.setAttribute('aria-invalid','true');}else if(questionClass===questionDescClass){el.setAttribute('aria-invalid','false');}}}}\nfunction ltIE8(){return(document.getElementsByTagName('html')[0].className.indexOf('lt-ie8')!==-1);}\nfunction updateClassGeIE10(){var isGeIE10=window.navigator.msPointerEnabled;if(isGeIE10)\n$(\"html\").addClass(\"ge-ie10\");}\n$(function(){$(\"#_next\").click(function(){$(this).click(function(){$(this).after(\"<img src='/mycic/resource/images/spinner_squares_circle.gif' alt='loading' />\").fadeIn();return false;});});});function charEntitiesToUnicode(s){var entities={'&nbsp;':'\\u00a0','&sect;':'\\u00a7','&copy;':'\\u00a9','&laquo;':'\\u00ab','&reg;':'\\u00ae','&deg;':'\\u00b0','&acute;':'\\u00b4','&raquo;':'\\u00bb','&frac14;':'\\u00bc','&frac12;':'\\u00bd','&Agrave;':'\\u00c0','&Aacute;':'\\u00c1','&Acirc;':'\\u00c2','&Atilde;':'\\u00c3','&Auml;':'\\u00c4','&Aring;':'\\u00c5','&AElig;':'\\u00c6','&Ccedil;':'\\u00c7','&Egrave;':'\\u00c8','&Eacute;':'\\u00c9','&Ecirc;':'\\u00ca','&Euml;':'\\u00cb','&Igrave;':'\\u00cc','&Iacute;':'\\u00cd','&Icirc;':'\\u00ce','&Iuml;':'\\u00cf','&Ntilde;':'\\u00d1','&Ograve;':'\\u00d2','&Oacute;':'\\u00d3','&Ocirc;':'\\u00d4','&Otilde;':'\\u00d5','&Ouml;':'\\u00d6','&times;':'\\u00d7','&Oslash;':'\\u00d8','&Ugrave;':'\\u00d9','&Uacute;':'\\u00da','&Ucirc;':'\\u00db','&Uuml;':'\\u00dc','&Yacute;':'\\u00dd','&agrave;':'\\u00e0','&aacute;':'\\u00e1','&acirc;':'\\u00e2','&atilde;':'\\u00e3','&auml;':'\\u00e4','&aring;':'\\u00e5','&aelig;':'\\u00e6','&ccedil;':'\\u00e7','&egrave;':'\\u00e8','&eacute;':'\\u00e9','&ecirc;':'\\u00ea','&euml;':'\\u00eb','&igrave;':'\\u00ec','&iacute;':'\\u00ed','&icirc;':'\\u00ee','&iuml;':'\\u00ef','&ntilde;':'\\u00f1','&ograve;':'\\u00f2','&oacute;':'\\u00f3','&ocirc;':'\\u00f4','&otilde;':'\\u00f5','&ouml;':'\\u00f6','&divide;':'\\u00f7','&oslash;':'\\u00f8','&ugrave;':'\\u00f9','&uacute;':'\\u00fa','&ucirc;':'\\u00fb','&uuml;':'\\u00fc','&yacute;':'\\u00fd','&yuml;':'\\u00ff','&amp;':'\\u0026','&lt;':'\\u003c','&gt;':'\\u003e','&ndash;':'\\u2013','&mdash;':'\\u2014','&lsquo;':'\\u2018','&rsquo;':'\\u2019','&ldquo;':'\\u201c','&rdquo;':'\\u201d','&bull;':'\\u2022','&trade;':'\\u2122'};var c,filteredText=s;for(c in entities){if(entities.hasOwnProperty(c)){filteredText=filteredText.replace(new RegExp(c,\"g\"),entities[c]);}}\nreturn filteredText;}";
var mod_pagespeed_acoo6OQFG3 = "function formatRequest(divID)\n{var payload=document.getElementById(divID).innerHTML;return payload;}\nfunction setHiddenContent()\n{var innerHtml=document.getElementById(\"questionAnswersTable\").innerHTML;document.PERSONAL_INFO_FORM.payload.value=innerHtml;}\nfunction signSubmit()\n{setHiddenContent();document.PERSONAL_INFO_FORM.submit();return false;}\nfunction signSubmitToCallCentre()\n{setHiddenContent();var commentsValue=document.getElementById(\"clientCommentsToCallCentre\").value;document.PERSONAL_INFO_FORM.clientComments.value=commentsValue;document.PERSONAL_INFO_FORM.submit();return false;}";
var mod_pagespeed_nO1WrcDqtV = "function displayDocumentHelp(documentTypeCode,helpTextKeyArray,language)\n{if(language==null)\n{language=\"en\";}\nvar idPostFix=\"English\";if(language==\"fr\")\n{idPostFix=\"French\";}\nvar documentElementId=\"trHelpDisplay\"+idPostFix+documentTypeCode;var showHelp=false;if(document.getElementById(documentElementId).style.display==\"\")\n{showHelp=false;}\nelse\n{showHelp=true;}\ncloseAllDocuments(helpTextKeyArray);if(showHelp==true)\n{document.getElementById(documentElementId).style.display=\"\";incrementHelpCount();window.location=\"#start_help\";}}\nfunction closeAllDocuments(helpTextKeyArray)\n{if(helpTextKeyArray.length>0)\n{var arrayLength=helpTextKeyArray.length;for(var i=0;i<arrayLength;i++)\n{if(document.getElementById(\"trHelpDisplayEnglish\"+helpTextKeyArray[i])!=null)\ndocument.getElementById(\"trHelpDisplayEnglish\"+helpTextKeyArray[i]).style.display=\"none\";if(document.getElementById(\"trHelpDisplayFrench\"+helpTextKeyArray[i]))\ndocument.getElementById(\"trHelpDisplayFrench\"+helpTextKeyArray[i]).style.display=\"none\";}}}\nfunction incrementHelpCount()\n{var helpCount=document.getElementById(\"helpCount\");if(helpCount!=null)\n{var helpCountValue=parseInt(helpCount.value);newHelpCount=1;helpCount.value=newHelpCount;}}\nfunction incrementGlossaryItemCount(glossaryItem)\n{var glossaryCountId=\"glossaryCounter\"+glossaryItem;var glossaryCount=document.getElementById(glossaryCountId);if(glossaryCount!=null)\n{var glossaryCountValue=parseInt(glossaryCount.value);var newGlossaryCount=1;glossaryCount.value=newGlossaryCount;}}\nfunction closeAllGlossaryItems()\n{var glossaryIDList=document.getElementById(\"glossaryIDList\").value;if(glossaryIDList!=null&&glossaryIDList!=\"\")\n{var glossaryArray=glossaryIDList.split(\",\");if(glossaryArray!=null)\n{var arrayLength=glossaryArray.length;for(var i=0;i<arrayLength;i++)\n{document.getElementById(\"trGlossaryDisplay\"+glossaryArray[i]).style.display=\"none\";}}}}\nfunction displayHelpOnly()\n{if(document.getElementById(\"trHelpDisplay2\").style.display==\"\")\n{document.getElementById(\"trHelpDisplay2\").style.display=\"none\";}\nelse\n{document.getElementById(\"trHelpDisplay2\").style.display=\"\";incrementHelpCount();window.location=\"#start_help\";}}\nfunction closeAllHelp()\n{document.getElementById(\"trHelpDisplayFrench\").style.display=\"none\";document.getElementById(\"trHelpDisplayEnglish\").style.display=\"none\";if(document.getElementById(\"helpImage\")!=null)\ndocument.getElementById(\"helpImage\").style.display=\"\";if(document.getElementById(\"helpImageRed\")!=null)\ndocument.getElementById(\"helpImageRed\").style.display=\"none\";}\nfunction closeAllHelp2(divId,lang)\n{document.getElementById(divId+lang).style.display=\"none\";document.getElementById(divId+\"B\").style.display=\"\";document.getElementById(divId+\"R\").style.display=\"none\";}\nfunction displayHelp()\n{closeAllGlossaryItems();var helpLang=document.getElementById(\"helpLang\").value;if(helpLang==\"fr\")\n{toggleHelp(\"trHelpDisplayFrench\");}\nelse\n{toggleHelp(\"trHelpDisplayEnglish\");}}\nfunction displayHelp2(divId)\n{closeAllGlossaryItems();var helpLang=document.getElementById(\"helpLang\").value;if(helpLang==\"fr\")\n{toggleHelp2(divId,'-f');}\nelse\n{toggleHelp2(divId,'-e');}}\nfunction toggleHelp(languageHelpElementId)\n{if(document.getElementById(languageHelpElementId).style.display==\"\")\n{document.getElementById(languageHelpElementId).style.display=\"none\";document.getElementById(\"helpImage\").style.display=\"\";document.getElementById(\"helpImageRed\").style.display=\"none\";}\nelse\n{document.getElementById(languageHelpElementId).style.display=\"\";document.getElementById(\"helpImage\").style.display=\"none\";document.getElementById(\"helpImageRed\").style.display=\"\";incrementHelpCount();window.location=\"#start_help\";}}\nfunction toggleHelp2(languageHelpElementId,lang)\n{if(document.getElementById(languageHelpElementId+lang).style.display==\"\")\n{document.getElementById(languageHelpElementId+lang).style.display=\"none\";document.getElementById(languageHelpElementId+\"B\").style.display=\"\";document.getElementById(languageHelpElementId+\"R\").style.display=\"none\";}\nelse\n{document.getElementById(languageHelpElementId+lang).style.display=\"\";document.getElementById(languageHelpElementId+\"B\").style.display=\"none\";document.getElementById(languageHelpElementId+\"R\").style.display=\"\";incrementHelpCount();}}\nfunction changeHelpLanguage()\n{var helpLang=document.getElementById(\"helpLang\").value;if(helpLang==\"fr\")\n{document.getElementById(\"helpLang\").value=\"en\";}\nelse\n{document.getElementById(\"helpLang\").value=\"fr\";}\ncloseAllHelp();displayHelp();}\nfunction changeHelpLanguage2(divId)\n{var helpLang=document.getElementById(\"helpLang\").value;if(helpLang==\"fr\")\n{document.getElementById(\"helpLang\").value=\"en\";closeAllHelp2(divId,'-f');}\nelse\n{document.getElementById(\"helpLang\").value=\"fr\";closeAllHelp2(divId,'-e');}\ndisplayHelp2(divId);}\nfunction displayGlossary_deprecated(glossaryId)\n{closeAllHelp();var glossaryDocumentId=\"trGlossaryDisplay\"+glossaryId;var showHelp=false;if(document.getElementById(glossaryDocumentId).style.display==\"\")\n{showHelp=false;}\nelse\n{showHelp=true;}\ncloseAllGlossaryItems();if(showHelp==true)\n{document.getElementById(glossaryDocumentId).style.display=\"\";incrementGlossaryItemCount(glossaryId);window.location=\"#\"+glossaryDocumentId;}}\nfunction displayGlossary_deprecated_too(glossaryId,title,desc)\n{var glossaryId='GlossaryAnswer'+glossaryId;toggleGlossaryHelpTip('glossaryhelptip',title,desc);}\nfunction displayGlossary2(glossaryId)\n{closeAllHelp();var glossaryDocumentId=\"trGlossaryDisplay\"+glossaryId;var showHelp=false;if(document.getElementById(glossaryDocumentId).style.display==\"\")\n{showHelp=false;}\nelse\n{showHelp=true;}\ncloseAllGlossaryItems();if(showHelp==true)\n{document.getElementById(glossaryDocumentId).style.display=\"\";incrementGlossaryItemCount(glossaryId);}}\nfunction newStaticWindow(lang)\n{if(document.getElementById(\"identifierTypeHelp\")!=null)\n{switch(document.forms[0].identifierType.selectedIndex)\n{case 1:document.getElementById(\"identifierTypeHelp\").href=\"../gol_static/shared/help/client_no_\"+lang+\".shtml\";break;case 2:document.getElementById(\"identifierTypeHelp\").href=\"../gol_static/shared/help/file_no_\"+lang+\".shtml\";break;case 3:document.getElementById(\"identifierTypeHelp\").href=\"../gol_static/shared/help/filecrs_no_\"+lang+\".shtml\";break;case 4:document.getElementById(\"identifierTypeHelp\").href=\"../gol_static/shared/help/prc_no_\"+lang+\".shtml\";break;case 5:document.getElementById(\"identifierTypeHelp\").href=\"../gol_static/shared/help/receipt_no_\"+lang+\".shtml\";break;case 6:document.getElementById(\"identifierTypeHelp\").href=\"../gol_static/shared/help/rec5401_no_\"+lang+\".shtml\";break;case 7:document.getElementById(\"identifierTypeHelp\").href=\"../gol_static/shared/help/recland_no_\"+lang+\".shtml\";break;case 8:document.getElementById(\"identifierTypeHelp\").href=\"../gol_static/shared/help/recland_no_\"+lang+\".shtml\";break;default:document.getElementById(\"identifierTypeHelp\").href=\"../gol_static/shared/help/identifier_type_\"+lang+\".shtml\";break;}}\nvar windowProperties='toolbar=no,'+'status,'+'resizable,'+'scrollbars,'+'width=500,'+'height=550,'+'top=0,'+'left=0';winContent=window.open(\"\",'myWin',windowProperties);winContent.focus();}\nfunction destroyHelpTip(htmlNode){document.getElementById(htmlNode).style.display='none';}\nfunction showHelpTip(htmlNode,title,desc,buttonAlt){document.getElementById(htmlNode).style.position='absolute';document.getElementById(htmlNode).style.display='block';document.getElementById(htmlNode).style.border='outset 1px #003381';document.getElementById(htmlNode).style.color='white';document.getElementById(htmlNode).style.backgroundColor='#3777C4';document.getElementById(htmlNode).innerHTML='<strong><p>'+title+'</p><span class=\"float-right\"\"><a href=\"javascript:hideHelpTip(\\''+htmlNode+'\\')\"><img class=\"eapp-close-button image-actual\" src=\"/eapp/resource/images/close-button.gif\" width=\"15\" height=\"15\" alt=\"'+'Close'+'\"></a></span>'+'</strong>'+desc;}\nfunction hideHelpTip(htmlNode){if(htmlNode instanceof HTMLCollection){for(var idx=0;idx<htmlNode.length;idx++){htmlNode[idx].style.display='none';}}else{document.getElementById(htmlNode).style.display='none';}}\nfunction toggleHelpTip(htmlNode,title,desc,buttonAlt){if(document.getElementById(htmlNode).style.display=='block'){destroyHelpTip(htmlNode);}else{showHelpTip(htmlNode,title,desc,buttonAlt);}}\nfunction toggleGlossaryHelpTip(htmlNode,title,desc){if(document.getElementById(htmlNode).style.display=='block'){destroyHelpTip(htmlNode);}else{showGlossaryHelpTip(htmlNode,title,desc);}}\nfunction showGlossaryHelpTip(htmlNode,title,desc){document.getElementById(htmlNode).style.position='absolute';document.getElementById(htmlNode).style.display='block';document.getElementById(htmlNode).style.border='outset 1px #003381';document.getElementById(htmlNode).style.color='white';document.getElementById(htmlNode).style.backgroundColor='#3777C4';desc=replaceAll(desc,\"+++++++\",\"\\'\");document.getElementById(htmlNode).innerHTML='<strong><p>'+title+'</p><span class=\"float-right\"\"><a href=\"javascript:hideHelpTip(\\''+htmlNode+'\\')\"><img class=\"eapp-close-button image-actual\" src=\"/eapp/resource/images/close-button.gif\" width=\"15\" height=\"15\" alt=\"'+'Close'+'\"></a></span>'+'</strong>'+desc;}\nfunction replaceAll(string,token,newtoken){if(token!=newtoken)\nwhile(string.indexOf(token)>-1){string=string.replace(token,newtoken);}\nreturn string;}";
var mod_pagespeed_xFuSURx5VV = "function helptip(helptipLink){this.link=helptipLink;this.linkId=helptipLink.id;this.type='';this.className='';this.Id='';this.headerId='';this.contentId='';this.containerId='';this.fieldId='';this.posTop=0;this.initialized=false;this.helptipType=function(){if(this.linkId.indexOf('glossary-link')===0){return'glossary';}else if(this.linkId.indexOf('help-link')===0){return'help';}else{return'';}};this.helptipContainer=function(){var ID_CONTAINERS=['eapp-question-and-answer-alpha','eapp-main-content','body','wb-body'];var helptipContainerId=this.linkId.replace(this.type+'-link','eapp-question-and-answer');if(helptipContainerId.indexOf(']')!==-1&&helptipContainerId.indexOf('eapp-question-and-answer')===0){helptipContainerId=helptipContainerId.slice(0,helptipContainerId.indexOf(']')+1);if(document.getElementById(helptipContainerId)){return helptipContainerId;}}\nvar i=0,len;for(len=ID_CONTAINERS.length;i<len;i++){if(document.getElementById(ID_CONTAINERS[i])){return ID_CONTAINERS[i];}}\nreturn'';};this.helptipTop=function(){var body=document.getElementById('body');if(body==null){body=document.getElementById('wb-body');}\nvar bodyRect=body.getBoundingClientRect();var linkRect=this.link.getBoundingClientRect();return linkRect.top-bodyRect.top;};this.helptipField=function(){if(typeof this.linkId!=='string'||this.linkId.length<11||this.linkId.indexOf(this.type+'-link-')!==0){return'';}else{var helptipFieldId=this.linkId.replace(this.type+'-link-','');if(helptipFieldId.indexOf(']')!==-1){helptipFieldId=helptipFieldId.slice(0,helptipFieldId.indexOf(']')+1);}else{helptipFieldId=helptipFieldId.replace(/^\\s+|\\s+$/gm,'');}\nreturn helptipFieldId;}};this.init();};helptip.prototype.init=function(){var helptipIdRoot='';this.type=this.helptipType();if(this.type!=''){helptipIdRoot=this.linkId.replace(this.type+'-link','');this.className=this.type+'-helptip '+this.type+'-helptip-content';this.Id=this.className+helptipIdRoot;this.closeId=this.className+'-close'+helptipIdRoot;this.imageId=this.className+'-image'+helptipIdRoot;this.headerId=this.className+'-header'+helptipIdRoot;this.contentId=this.className+'-content'+helptipIdRoot;this.containerId=this.helptipContainer();this.fieldId=this.helptipField();this.posTop=this.helptipTop();this.initialized=true;}else{this.initialized=false;}};helptip.prototype.display=function(title,desc,closeLabel,language){if(!document.getElementById(this.Id)&&this.containerId!==''){var activeHelptip=document.createElement('div');activeHelptip.className=this.className;activeHelptip.id=this.Id;activeHelptip.setAttribute('role','dialog');activeHelptip.setAttribute('aria-labelledby',this.headerId);activeHelptip.setAttribute('aria-describedby',this.contentId);var helptipInnerHTML='<a id=\"'+this.closeId+'\" href=\"javascript:void(0);\">';if(browserVersion()==='lt-ie9'||browserVersion()==='ie9'){helptipInnerHTML+='<img id=\"'+this.imageId+'\"'+'onload=\"setFocusIE('+\"'\"+this.closeId+\"'\"+');\"'+' tabindex=\"0\" class=\"'+this.className+'-close-button\" src=\"/eapp/resource/images/icon-close-fermer-bl-40x40.png\" alt=\"'+closeLabel+'\" />';}else{helptipInnerHTML+='<span class=\"icon icon-close float-right\" aria-label=\"'+closeLabel+'\"'+' aria-hidden=\"true\"></span>';}\nhelptipInnerHTML+='</a><h3 id=\"'+this.headerId+'\" class=\"'+this.className+'-header\">'+title+'</h3>';helptipInnerHTML+='<div id=\"'+this.contentId+'\" class=\"'+this.className+'-content\">'+desc+'</div>';activeHelptip.innerHTML=helptipInnerHTML;activeHelptip.style.display='block';activeHelptip.style.top=this.posTop.toString()+'px';document.getElementById(this.containerId).appendChild(activeHelptip);toggleHelptipClass('open');if(this.type==='glossary'){addAriaDescribedby(this.linkId,this.Id,'add');}else if(this.type==='help'){addAriaDescribedby(this.fieldId,this.Id,'add');}\naddScrollBar(this.contentId);addOpensNewWindowMessage(this.contentId,language,getApp());document.getElementById(this.closeId).onclick=closeHelptip;document.getElementById(this.closeId).onkeydown=closeHelptip;document.getElementById(this.closeId).focus();}};helptip.prototype.remove=function(){if(this.type==='glossary'){addAriaDescribedby(this.linkId,this.Id,'subtract');}else if(this.type==='help'){if(this.fieldId!==''){addAriaDescribedby(this.fieldId,this.Id,'subtract');}}\nvar activeHelptip=document.getElementById(this.Id);activeHelptip.parentNode.removeChild(activeHelptip);document.getElementById(this.linkId).focus();toggleHelptipClass('close');this.initialized=false;};function displayTip(helptipNumber,title,desc,language,id){if(desc.length===0||title.length===0)\nreturn false;if(typeof theHelptip!=='undefined'&&theHelptip.initialized){theHelptip.remove();}\ntheHelptip=new helptip(id);if(!theHelptip.initialized||theHelptip.containerId===''){return false;}\nvar closeLabel='Close';if(language==='fr'){closeLabel='Fermer';}\ndesc=desc.replace(/\\x2b\\x2b\\x2b\\x2b\\x2b\\x2b\\x2b/g,'&#8217;');theHelptip.display(title,desc,closeLabel,language);return false;}\nfunction displayGlossary(helptipNumber,title,desc,language,id){displayTip(helptipNumber,title,desc,language,id);return false;}\nfunction closeHelptip(e){var KEY_ESC=27;var helptipClose;if(!e){var e=window.event;}\nif(e.currentTarget){helptipClose=e.currentTarget;}else if(e.srcElement){helptipClose=e.srcElement;}else{return true;}\nif(helptipClose.id.indexOf('glossary-helptip-image')!==-1||helptipClose.id.indexOf('help-helptip-image')!==-1){helptipClose=helptipClose.parentNode;}\nvar activeHelptip=helptipClose.parentNode;if(theHelptip.type===''){return true;}else{}\nif(activeHelptip){if(e.keyCode===KEY_ESC||e.type==='click'){theHelptip.remove();if(e.stopPropagation){e.stopPropagation();}else{e.cancelBubble=true;}\nreturn false;}}\nreturn true;}\nfunction addAriaDescribedby(elementId,descriptionId,addOrSubtract){var ariaDescribedbyIdList='';if(elementId===''||descriptionId===''||(addOrSubtract!=='add'&&addOrSubtract!=='subtract')){return;}\nif(!document.getElementById(elementId)||!document.getElementById(descriptionId)){return;}\nariaDescribedbyIdList=document.getElementById(elementId).getAttribute('aria-describedby');if(!ariaDescribedbyIdList){if(addOrSubtract==='add'){document.getElementById(elementId).setAttribute('aria-describedby',descriptionId);}}else{if(addOrSubtract==='add'&&ariaDescribedbyIdList.indexOf(descriptionId)===-1){ariaDescribedbyIdList+=' '+descriptionId;document.getElementById(elementId).setAttribute('aria-describedby',ariaDescribedbyIdList);}else if(addOrSubtract==='subtract'&&ariaDescribedbyIdList.indexOf(descriptionId)!==-1){ariaDescribedbyIdList=ariaDescribedbyIdList.replace(' '+descriptionId,'');ariaDescribedbyIdList=ariaDescribedbyIdList.replace(descriptionId+' ','');ariaDescribedbyIdList=ariaDescribedbyIdList.replace(descriptionId,'');if(ariaDescribedbyIdList===''){document.getElementById(elementId).removeAttribute('aria-describedby');}else{document.getElementById(elementId).setAttribute('aria-describedby',ariaDescribedbyIdList);}}}}\nfunction toggleHelptipClass(openOrClose){var el=document.getElementsByTagName('html')[0],htmlClasses=el.className,hasHelptipClass=htmlClasses.indexOf('helptip-active')!==-1;if(openOrClose==='open'){if(!hasHelptipClass)\nel.setAttribute('class',htmlClasses+' helptip-active');}else if(openOrClose==='close'){if(hasHelptipClass)\nhtmlClasses=htmlClasses.replace('helptip-active','');htmlClasses=htmlClasses.replace(/^\\s+|\\s+$/gm,'');el.setAttribute('class',htmlClasses);}}\nfunction browserVersion(){var htmlClasses=document.getElementsByTagName('html')[0].className;if(htmlClasses.indexOf('ie7')!==-1||htmlClasses.indexOf('ie8')!==-1||htmlClasses.indexOf('lt-ie9')!==-1){return'lt-ie9';}else if(htmlClasses.indexOf('ie9')!==-1){return'ie9';}else{return'';}}\nfunction getApp(){var htmlClasses=document.getElementsByTagName('html')[0].className;if(htmlClasses.indexOf('eapp')!==-1){return'eapp';}else if(htmlClasses.indexOf('mycic')!==-1){return'mycic';}else{return'eapp';}}\nfunction setFocusIE(id){document.getElementById(id).focus();}\nfunction addScrollBar(contentId){var MAX_CONTENT_HEIGHT=350;var el=document.getElementById(contentId);var contentHeight=el.offsetHeight;if(contentHeight>=MAX_CONTENT_HEIGHT){el.className+=' has-scroll-bar';if(browserVersion()==='lt-ie9'){el.style.overflow='scroll';}else{el.style.overflowX='visible';el.style.overflowY='scroll';}}else{el.removeAttribute('class','has-scroll-bar');el.style.overflow='visible';}}\nfunction addLogoutLink(url,app){var LOGOUT_URL={eapp:'/eapp/exit.do?logout=true&uri=',mycic:'/mycic/exit?logout=true&uri='};if((app==='eapp'||app==='mycic')&&(url.indexOf(LOGOUT_URL[app])===-1)&&(url.indexOf('http://')===0||url.indexOf('https://')===0)){url=LOGOUT_URL[app]+url;}\nreturn url;}\nfunction addOpensNewWindowMessage(contentId,language,app){var OPENS_NEW_WINDOW={en:'Opens a new window',fr:'Ouvre une nouvelle fen\\u00eatre'};app=(app==='eapp'||app==='mycic')?app:'eapp';language=(language==='en'||language==='fr')?language:'en';var el=document.getElementById(contentId);var links=el.getElementsByTagName('a');var i;for(i=0;i<links.length;i++){links[i].href=addLogoutLink(links[i].href,app);var s=document.createElement('span');s.setAttribute('class','eapp-new-window');s.appendChild(document.createTextNode(OPENS_NEW_WINDOW[language]));links[i].appendChild(s);links[i].target='_blank';links[i].setAttribute('class','confirm');}}";
var mod_pagespeed_PZsAWvb3Rr = "function changeLang(myUrl)\n{if(document.forms.length>=1)\n{if(document.forms[0].lang!=null)\n{document.forms[0].lang.value='fr';document.forms[0].submit();}\nelse\n{document.location=myUrl+\"?lang=fr\";}}\nelse\n{document.location=myUrl+\"?lang=fr\";}}";
var mod_pagespeed_ermFmgBPdC = "function initializePrisonDetailsGrid(data){debugger;$('#tblAppendGrid_prisonDetailsList').appendGrid({initRows:1,hideRowNumColumn:true,caption:eapp.webforms.locale.residencyCalc.captionPrison,hideButtons:{insert:true,removeLast:true,moveUp:true,moveDown:true},columns:[{name:'fromDate',display:eapp.webforms.locale.residencyCalc.from,type:'ui-datepicker',ctrlAttr:{maxlength:100},ctrlCss:{width:'100px'},uiOption:{},onChange:function(evt,rowIndex){var value=$('#tblAppendGrid_prisonDetailsList').appendGrid('getCtrlValue','fromDate',rowIndex);if(value!=null&&value!=\"\"){$('#nextAction').val(\"calculationTotals\");showNextDiv(\"calculationTotals\");}}},{name:'toDate',display:eapp.webforms.locale.residencyCalc.to,type:'ui-datepicker',ctrlAttr:{maxlength:100},ctrlCss:{width:'100px'},uiOption:{},onChange:function(evt,rowIndex){var value=$('#tblAppendGrid_prisonDetailsList').appendGrid('getCtrlValue','toDate',rowIndex);if(value!=null&&value!=\"\"){$('#nextAction').val(\"calculationTotals\");showNextDiv(\"calculationTotals\");}}},{name:'activityKind',display:eapp.webforms.locale.residencyCalc.type,type:'select',ctrlOptions:{0:'Type',1:'Probation',2:'Parole',4:'Imprisonment',3:'Other'}},{name:'activityType',type:'hidden',value:'sentence'},{name:'otherDetails',display:eapp.webforms.locale.residencyCalc.otherDetails,type:'text',ctrlAttr:{maxlength:500}}],afterRowRemoved:function(caller,rowIndex){$('#nextAction').val(\"calculationTotals\");showNextDiv(\"calculationTotals\");},i18n:{append:eapp.webforms.locale.residencyCalc.addEntry}});swapTdOnHeaders(\"tblAppendGrid_prisonDetailsList\");}\nfunction initializeAbsenceDetailsGrid(data){debugger;$('#tblAppendGrid_absenceDetailsList').appendGrid({caption:eapp.webforms.locale.residencyCalc.captionAbs,initRows:1,hideRowNumColumn:true,hideButtons:{insert:true,removeLast:true,moveUp:true,moveDown:true},columns:[{name:'fromDate',display:eapp.webforms.locale.residencyCalc.from,type:'ui-datepicker',ctrlAttr:{maxlength:200},ctrlCss:{width:'100px'},uiOption:{},onChange:function(evt,rowIndex){var fromDateValue=$('#tblAppendGrid_absenceDetailsList').appendGrid('getCtrlValue','fromDate',rowIndex);var toDateValue=$('#tblAppendGrid_absenceDetailsList').appendGrid('getCtrlValue','toDate',rowIndex);debugger;if(fromDateValue!=null&&fromDateValue!=\"\"&&toDateValue!=null&&toDateValue!=\"\"){$('#nextAction').val(\"calculationTotals\");showNextDiv(\"calculationTotals\");}}},{name:'toDate',display:eapp.webforms.locale.residencyCalc.to,type:'ui-datepicker',ctrlAttr:{maxlength:200},ctrlCss:{width:'100px'},uiOption:{},onChange:function(evt,rowIndex){var fromDateValue=$('#tblAppendGrid_absenceDetailsList').appendGrid('getCtrlValue','fromDate',rowIndex);var toDateValue=$('#tblAppendGrid_absenceDetailsList').appendGrid('getCtrlValue','toDate',rowIndex);debugger;if(fromDateValue!=null&&fromDateValue!=\"\"&&toDateValue!=null&&toDateValue!=\"\"){$('#nextAction').val(\"calculationTotals\");showNextDiv(\"calculationTotals\");}}},{name:'activityKind',display:eapp.webforms.locale.residencyCalc.reason,type:'select',ctrlOptions:{0:eapp.webforms.locale.residencyCalc.reason,1:'Business',2:'Employed with CDN institution',3:'Occupation- transport industry',4:'Studies',5:'Tourism',6:'Visit To Family Member',7:'Accompanying CDN spouse',8:'Other'}},{name:'country',display:'Country',type:'select',ctrlOptions:countries},{name:'countryIndex',type:'hidden'},{name:'activityType',type:'hidden',value:'absence'},{name:'travelWithFamilyMembers',display:eapp.webforms.locale.residencyCalc.travelWithFamilyMembers,type:'checkbox',value:false},{name:'otherDetails',display:eapp.webforms.locale.residencyCalc.otherDetails,type:'text',ctrlAttr:{maxlength:200}}],afterRowRemoved:function(caller,rowIndex){debugger;$('#nextAction').val(\"calculationTotals\");showNextDiv(\"calculationTotals\");},afterRowAppended:function(caller,parentRowIndex,addedRowIndex){$(caller).appendGrid('setCtrlValue','countryIndex',addedRowIndex,$(\"#country\").val());}});swapTdOnHeaders(\"tblAppendGrid_absenceDetailsList\");}\nfunction getNonPersonalActivityDetails(){debugger;var allGrids=[];allGrids[0]=$('#tblAppendGrid_prisonDetailsList').appendGrid('getAllValue');allGrids[1]=$('#tblAppendGrid_absenceDetailsList').appendGrid('getAllValue');var activityDetailsList=[];var indexDeduction=0;$.each(allGrids,function(index,values){debugger;if(values!=null){$.each(values,function(index1,value){var country={};country[value.countryIndex]=\"true\";var activityDetails={fromDate:value.fromDate,toDate:value.toDate,activityType:value.activityType,country:country,activityKind:value.activityKind,travelWithFamilyMembers:value.travelWithFamilyMembers,otherDetails:value.otherDetails};activityDetailsList[indexDeduction]=activityDetails;indexDeduction=indexDeduction+1;});}});return activityDetailsList;}\nfunction clearGrid(id){if($('#'+id).length==1){var rowCount=$('#'+id).appendGrid('getRowCount');for(var i=0;i<rowCount;i++){$('#'+id).appendGrid('removeRow',i);}}}";
