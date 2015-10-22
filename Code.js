// This code is licensed from Open SUNY [State University of New York] on October 15, 2015
// The Open SUNY COTE Quality Review Process, Rubric, and Dashboard are protected under Creative Commons BY-NC-SA 4.0
// (which can be found at http://creativecommons.org/licenses/by-nc-sa/4.0/

// SUNY is the State University System of New York (http://open.suny.edu/)
// We are a friendly bunch, and encourage you to get involved with COTE, the Center for Online Teaching Excellence!
// You can become a member by enrolling in the Community of Practice at: http://commons.suny.edu/cote/community/

// All code in this software was written by Dave Ghidiu (daveghidiu@gmail.com)
// Every last bit. And yes, he knows it's a bit sloppy at some points

// The software is provided "as is", without warranty of any kind, express or implied. In no event shall the authors or copyright holders be liable for
// any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of, or in connection with the software
// or the use or other dealings in the software.


//            GNU LESSER GENERAL PUBLIC LICENSE
//                  Version 3, 29 June 2007
//  
//   Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
//   Everyone is permitted to copy and distribute verbatim copies
//   of this license document, but changing it is not allowed.
//  
//  
//    This version of the GNU Lesser General Public License incorporates
//  the terms and conditions of version 3 of the GNU General Public
//  License, supplemented by the additional permissions listed below.
//  
//    0. Additional Definitions.
//  
//    As used herein, "this License" refers to version 3 of the GNU Lesser
//  General Public License, and the "GNU GPL" refers to version 3 of the GNU
//  General Public License.
//  
//    "The Library" refers to a covered work governed by this License,
//  other than an Application or a Combined Work as defined below.
//  
//    An "Application" is any work that makes use of an interface provided
//  by the Library, but which is not otherwise based on the Library.
//  Defining a subclass of a class defined by the Library is deemed a mode
//  of using an interface provided by the Library.
//  
//    A "Combined Work" is a work produced by combining or linking an
//  Application with the Library.  The particular version of the Library
//  with which the Combined Work was made is also called the "Linked
//  Version".
//  
//    The "Minimal Corresponding Source" for a Combined Work means the
//  Corresponding Source for the Combined Work, excluding any source code
//  for portions of the Combined Work that, considered in isolation, are
//  based on the Application, and not on the Linked Version.
//  
//    The "Corresponding Application Code" for a Combined Work means the
//  object code and/or source code for the Application, including any data
//  and utility programs needed for reproducing the Combined Work from the
//  Application, but excluding the System Libraries of the Combined Work.
//  
//    1. Exception to Section 3 of the GNU GPL.
//  
//    You may convey a covered work under sections 3 and 4 of this License
//  without being bound by section 3 of the GNU GPL.
//  
//    2. Conveying Modified Versions.
//  
//    If you modify a copy of the Library, and, in your modifications, a
//  facility refers to a function or data to be supplied by an Application
//  that uses the facility (other than as an argument passed when the
//  facility is invoked), then you may convey a copy of the modified
//  version:
//  
//     a) under this License, provided that you make a good faith effort to
//     ensure that, in the event an Application does not supply the
//     function or data, the facility still operates, and performs
//     whatever part of its purpose remains meaningful, or
//  
//     b) under the GNU GPL, with none of the additional permissions of
//     this License applicable to that copy.
//  
//    3. Object Code Incorporating Material from Library Header Files.
//  
//    The object code form of an Application may incorporate material from
//  a header file that is part of the Library.  You may convey such object
//  code under terms of your choice, provided that, if the incorporated
//  material is not limited to numerical parameters, data structure
//  layouts and accessors, or small macros, inline functions and templates
//  (ten or fewer lines in length), you do both of the following:
//  
//     a) Give prominent notice with each copy of the object code that the
//     Library is used in it and that the Library and its use are
//     covered by this License.
//  
//     b) Accompany the object code with a copy of the GNU GPL and this license
//     document.
//  
//    4. Combined Works.
//  
//    You may convey a Combined Work under terms of your choice that,
//  taken together, effectively do not restrict modification of the
//  portions of the Library contained in the Combined Work and reverse
//  engineering for debugging such modifications, if you also do each of
//  the following:
//  
//     a) Give prominent notice with each copy of the Combined Work that
//     the Library is used in it and that the Library and its use are
//     covered by this License.
//  
//     b) Accompany the Combined Work with a copy of the GNU GPL and this license
//     document.
//  
//     c) For a Combined Work that displays copyright notices during
//     execution, include the copyright notice for the Library among
//     these notices, as well as a reference directing the user to the
//     copies of the GNU GPL and this license document.
//  
//     d) Do one of the following:
//  
//         0) Convey the Minimal Corresponding Source under the terms of this
//         License, and the Corresponding Application Code in a form
//         suitable for, and under terms that permit, the user to
//         recombine or relink the Application with a modified version of
//         the Linked Version to produce a modified Combined Work, in the
//         manner specified by section 6 of the GNU GPL for conveying
//         Corresponding Source.
//  
//         1) Use a suitable shared library mechanism for linking with the
//         Library.  A suitable mechanism is one that (a) uses at run time
//         a copy of the Library already present on the user's computer
//         system, and (b) will operate properly with a modified version
//         of the Library that is interface-compatible with the Linked
//         Version.
//  
//     e) Provide Installation Information, but only if you would otherwise
//     be required to provide such information under section 6 of the
//     GNU GPL, and only to the extent that such information is
//     necessary to install and execute a modified version of the
//     Combined Work produced by recombining or relinking the
//     Application with a modified version of the Linked Version. (If
//     you use option 4d0, the Installation Information must accompany
//     the Minimal Corresponding Source and Corresponding Application
//     Code. If you use option 4d1, you must provide the Installation
//     Information in the manner specified by section 6 of the GNU GPL
//     for conveying Corresponding Source.)
//  
//    5. Combined Libraries.
//  
//    You may place library facilities that are a work based on the
//  Library side by side in a single library together with other library
//  facilities that are not Applications and are not covered by this
//  License, and convey such a combined library under terms of your
//  choice, if you do both of the following:
//  
//     a) Accompany the combined library with a copy of the same work based
//     on the Library, uncombined with any other library facilities,
//     conveyed under the terms of this License.
//  
//     b) Give prominent notice with the combined library that part of it
//     is a work based on the Library, and explaining where to find the
//     accompanying uncombined form of the same work.
//  
//    6. Revised Versions of the GNU Lesser General Public License.
//  
//    The Free Software Foundation may publish revised and/or new versions
//  of the GNU Lesser General Public License from time to time. Such new
//  versions will be similar in spirit to the present version, but may
//  differ in detail to address new problems or concerns.
//  
//    Each version is given a distinguishing version number. If the
//  Library as you received it specifies that a certain numbered version
//  of the GNU Lesser General Public License "or any later version"
//  applies to it, you have the option of following the terms and
//  conditions either of that published version or of any later version
//  published by the Free Software Foundation. If the Library as you
//  received it does not specify a version number of the GNU Lesser
//  General Public License, you may choose any version of the GNU Lesser
//  General Public License ever published by the Free Software Foundation.
//  
//    If the Library as you received it specifies that a proxy can decide
//  whether future versions of the GNU Lesser General Public License shall
//  apply, that proxy's public statement of acceptance of any version is
//  permanent authorization for you to choose that version for the
//  Library.



// --------------------------------------------------------------------------------------------------------------------------------------------
// GLOBAL VARIABLES
var VERSION = '1.7.0';
var LOGO = 'https://bbsupport.sln.suny.edu/bbcswebdav/institution/OSCQR.png';
var ACTIVE = SpreadsheetApp.getActive().getSheetByName("Active");
var ARCHIVED = SpreadsheetApp.getActive().getSheetByName("Archived");
var OS_RUBRIC = '1ICwNCdRQTw7thRKCMLonrVaoyIin584gjUcu96YGzS8';
// --------------------------------------------------------------------------------------------------------------------------------------------



/**
 * @description Resides at the top of the list for easy access; used as a quick-draw testing ground
 * @type function
 */
function test() {
  
  // This space reserved for experimentation
  
  try {
    
  
  } catch (error) {
  
    Browser.msgBox("The function \"testThis()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("testThis() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




// --------------------------------------------------------------------------------------------------------------------------------------------
//    __  ____  ____  __ _ 
//   /  \(  _ \(  __)(  ( \
//  (  O )) __/ ) _) /    /
//   \__/(__)  (____)\_)__)
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Event-driven: Will always run when spreadsheet is opened. Generates the appropriate menu based on status of "config" and "debug"
 * @type function
 */
function onOpen() {

  // Invokes the method generateMenu() which will add the "OSCQR" menu tab
  generateMenu();
  
  try {
    
    // Cleanup the analytics pages
    hide('ACCESSIBILITY');
    hide('DESIGN');
    hide('leftColumn-ACC');
    hide('leftColumn-DES');    
    findAndDelete('Analytics - Accessibility');
    findAndDelete('Analytics - Design');
      
  } catch (error) {
  
    Browser.msgBox("The function \"onOpen()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("onOpen() has failed: " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Deletes a sheet (if it exists)
 * @param {string} sheetName: The name of the sheet to be deleted
 * @type function
 */
function findAndDelete(sheetName) {

  try {
    
    // A crummy way of deleting the sheet
    SpreadsheetApp.getActive().deleteSheet(SpreadsheetApp.getActive().getSheetByName(sheetName));
  
  } catch (error) {
    
    Logger.log('The sheet ' + sheetName + ' could not be deleted because it does not exist.');
  
  }
}




/**
 * @description Hides a sheet (if it exists)
 * @param {string} sheetName: The name of the sheet to be deleted
 * @type function
 */
function hide(sheetName) {

  try {
  
    SpreadsheetApp.getActive().getSheetByName(sheetName).hideSheet();
  
  } catch (error) {
    
    Logger.log('The sheet ' + sheetName + ' could not be hidden because it does not exist.');
  
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//  ___  __   __ _  ____  __  ___  _  _  ____  ____ 
// / __)/  \ (  ( \(  __)(  )/ __)/ )( \(  _ \(  __)
//( (__(  O )/    / ) _)  )(( (_ \) \/ ( )   / ) _) 
// \___)\__/ \_)__)(__)  (__)\___/\____/(__\_)(____)
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Will call config.html and initiate the configuration process
 * @type function
 */
function configure() {
    
  try {
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('config').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Initial Configuration');
  
  } catch (error) {
  
    Browser.msgBox("The function \"configure()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("configure() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Called from config.html, this will pass in the name of the campus and the CSC's email address and set all the necessary script properties and create folders
 * @type function
 * @param {string, string} campus, cscEmail - The name of the campus and the email address for the CSC
 */
function configureDashboard(campus, cscEmail) {
  // DELEGATES: installAutoTriggers(), generateMenu(), generateHeader(), getProperties, resizeColumnsWithHeaderFormat(), resizeColumnsSheet()
  
  try {
   
    // Check to see that information was entered for 'campus' and 'cscEmail' - if the info is invalid, abort process
    if ('' === campus || '' === cscEmail) {
      Browser.msgBox('No values were entered. The configuration did not process.');
      return;
    }
    
    // Breathe life into the two variables necessary for the Dashboard to function
    var thisCampus = campus || 'nul';
    var thisEmail = cscEmail || 'nul';
    
    // Sanitize the campus name (make sure there are 3 letters)
    thisCampus = cleanName(thisCampus).toUpperCase();
    
    // Get the variables (from the master OS Rubric - CONFIG) needed for establishing the script properties
    var tempRange = SpreadsheetApp.openById(OS_RUBRIC).getRange('CONFIG!L2:L6').getValues();
    var rubricToCopy = tempRange[0][0];
    var logoURL = tempRange[1][0];
    var osDataSheet = tempRange[2][0];
    var dataSkeleton = tempRange[3][0];
    
    // Get the ID for the campus folder in Google Drive
    var thisFolder = DriveApp.getFileById(SpreadsheetApp.getActive().getId()).getParents().next();
    var thisFolderID = thisFolder.getId();
    
    // If the intial configuration has not already happened, do the following (note that this cannot be executed twice, lest duplicate hierarchies will be established):
    if (null === PropertiesService.getScriptProperties().getProperty('initialFolderSetup')) {    
    
      // Create (and store as script property!) the ARCHIVED folder
      var archivedFolder = DriveApp.createFolder('ARCHIVED');
      var archivedFolderKey = archivedFolder.getId();
      DriveApp.getFolderById(thisFolderID).addFolder(archivedFolder);
      DriveApp.getRootFolder().removeFolder(archivedFolder);
      
      // Create (and store as script property!) the ACTIVE folder
      var activeFolder = DriveApp.createFolder('ACTIVE');
      var activeFolderKey = activeFolder.getId();
      DriveApp.getFolderById(thisFolderID).addFolder(activeFolder);
      DriveApp.getRootFolder().removeFolder(activeFolder);
      
      // Create (and store as script property!) the RUBRICS folder
      var rubricFolder = DriveApp.createFolder('RUBRICS');
      var rubricFolderKey = rubricFolder.getId();
      DriveApp.getFolderById(thisFolderID).addFolder(rubricFolder);
      DriveApp.getRootFolder().removeFolder(rubricFolder);

      // Copy the master Open SUNY Rubric into the RUBRICS folder
      var masterRubric = DriveApp.getFileById(rubricToCopy).makeCopy(rubricFolder).setName("Open SUNY Rubric");
      
      // Store the folder keys into script properties
      PropertiesService.getScriptProperties().setProperties({'debug': 'false', 'campusFolderArchivedKey': archivedFolderKey, 'campusFolderInProgressKey': activeFolderKey, 'rubricFolderKey': rubricFolderKey});
      
      // Install the trigger (which will automatically update the data from each rubric once a day)
      installAutoTriggers();
            
      // Sets the script property for the initial folder setup to be true
      PropertiesService.getScriptProperties().setProperty('initialFolderSetup', true);

      // Used in debugging
      if (debug()) {
        Browser.msgBox("Initial folder configuration is complete.");
        getProperties();        
      }
      
    }
 
    // Store all sorts of good information into the script properties
    PropertiesService.getScriptProperties().setProperties({'campus': thisCampus, 'cscEmail': thisEmail, 'configured': true});
    PropertiesService.getScriptProperties().setProperties({'logoURL': logoURL, 'rubricToCopy': masterRubric.getId(), 'osDataSheet': osDataSheet});
    PropertiesService.getScriptProperties().setProperties({'campusFolderKEY': thisFolderID, 'version': VERSION, 'alphaOrder':7});    
    
    // Redraw the menu (since the options are different for configured Dashboards)
    generateMenu();
    
    // Housekeeping - Set the Dashboard up for both ACTIVE and ARCHIVED tabs.
    generateHeader();
    
    // Housekeeping - Resize the headers
    resizeColumnsWithHeaderFormat();
    formatTable();
    
  } catch (error) {
  
    Browser.msgBox("The function \"configDashboard(course, cscEmail)\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("configDashboard(course, cscEmail) terminated unexpectedly:   " + error  + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Creates a trigger to run getDesignData() every morning at 6:00am and 'updatePercentages()' every time the Spreadsheet is opened
 * @type function
 */
function installAutoTriggers() {
  // HELPER: configureDashboard()
  
  try {
  
    installPercentageTrigger();
    installDataTrigger();
      
  } catch (error) {
    
    Browser.msgBox("The function \"installAutoTriggers()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("installAutoTriggers() terminated unexpectedly:   " + error  + " - Line " + error.lineNumber);
  
  }
}




/**
 * @description Returns the users email address as a String (if known, based on session)
 * @type function
 * @return {string} - The users's email address (if known)
 */
function getUserNameEmail() {
 
  return Session.getActiveUser().getEmail();

}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//   ____   __   ____  _  _  ____   __    __   ____  ____ 
//  (    \ / _\ / ___)/ )( \(  _ \ /  \  / _\ (  _ \(    \
//   ) D (/    \\___ \) __ ( ) _ ((  O )/    \ )   / ) D (
//  (____/\_/\_/(____/\_)(_/(____/ \__/ \_/\_/(__\_)(____/
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Serves an HTML page that displays information about the OSCQR Dashboard
 * @type function
 */
function about() {
  // DELEGATES: Implicitly calls include(), getVersion(), and getLogo() from HTML UI 
  
  try {
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('about').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: About this software');
  
  } catch (error) {
  
    Browser.msgBox("The function \"about()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("about() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Returns 'true' if there is a sheet named 'Dashboard'
 * @type function
 * @return {boolean}
 */
function isDashboard() {

  try {
  
    // Get the all the sheets in the Spreadsheet
    var sheets = SpreadsheetApp.getActive().getSheets();
     
    // Walk through the array holding the sheets and compare 'Dashboard' to each name - return 'true' if found
    var returnValue = false;
    
    for (var i = 0; i < sheets.length; i++) {
      if ('Dashboard' === sheets[i].getName()) {
        returnValue = true;
      }
    }

    return returnValue;

  } catch (error) {
    
    Browser.msgBox("The function \"isDashboard()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("isDashboard() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}



/**
 * @description Looks at cells in columns N:Q and copys the information from that cell into the respective "CONFIG" tab (based on the key in column F.
 * @type function
 */
function copySheetRemarksToRubric() {
  
  try {
    
    copySheetRemarksToRubricSheetActive();
    copySheetRemarksToRubricSheetArchived();
    
  } catch (e) {
    Browser.msgBox("The function \"copySheetRemarksToRubric()\" did not run. Please contact technical support.");
    Logger.log("copySheetRemarksToRubric() terminated unexpectedly:   " + e + " - Line " + e.lineNumber);
  }
}




/**
 * @description Rebuilds the ACTIVE and ARCHIVED tabs - note that this function makes a call to copySheetRemarksToRubric() before deleting any information.
 * @type function
 */
function reconstructTree() {
  // DELEGATES: copySheetRemarksToRubricSheetActive()/Archived(), fillSheet(), updateStatus(), formatTable()
  
  try {
   
    // copySheetRemarkstoRubricSheetActive()/Archived() takes any information the CSC has put in the row for each rubric and inserts it into the "CONFIG" sheet on the appropriate rubric
    copySheetRemarksToRubricSheetActive();
    copySheetRemarksToRubricSheetArchived();
        
    // fillSheet() will clearAndFormat() the sheet, as well as walk through and populate columns B-G with information based on any sheet that resides in the appropriate folder
    fillSheet();
        
    // updateStatus() walks through each row of the sheet and (based on the key in column F) populates the remaining cells in each row with information from the respective "CONFIG" tab
    updateStatus();
        
    // formatTable() makes things look pretty
    formatTable();
        
  } catch (error) {
    
    Browser.msgBox("The function \"reconstructTree()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("reconstructTree() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Walks through all files in the folder and inserts them into the "Dashboard" - his function makes calls to fillSheet(), updateStatus(), and formatTable() as helper methods for populating the sheet. Note that this function makes a call to copySheetRemarksToRubric() before deleting any information.
 * @type function
 */
function copySheetRemarksToRubricSheetActive() {
  // HELPER: reconstructTree()
  
  try {  
        
    // If there is more than 1 row in ACTIVE, start copying data!
    if (ACTIVE.getMaxRows() > 1) {
    
      var rangeToCopy;
      var fileID;
        
      // For every row (other than row number 1), get the values of certain cells in each row and copy to CONFIG tab on appropriate rubric
      for (var i = 2; i <= ACTIVE.getLastRow(); i++) {
      
        rangeToCopy = ACTIVE.getRange(i,14,1,4).getValues();
        SpreadsheetApp.openById(ACTIVE.getRange(i, 6).getValue()).getRange("CONFIG!T30:W30").setValues(rangeToCopy);
        
      }
    }
    
  } catch (error) {
  
    Browser.msgBox("The function \"copySheetRemarksToRubricSheetActive()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("copySheetRemarksToRubricSheetActive() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Walks through all files in the folder and inserts them into the "Archived" - this function makes calls to fillSheet(), updateStatus(), and formatTable() as helper methods for populating the sheet. Note that this function makes a call to copySheetRemarksToRubric() before deleting any information.
 * @type function
 */
function copySheetRemarksToRubricSheetArchived() {
  
  try {  
    
    // If there is more than 1 row in ARCHIVED, start copying data!
    if (ARCHIVED.getMaxRows() > 1) {

      var rangeToCopy;
      var fileID;
        
      // For every row (other than row number 1), get the values of certain cells in each row and copy to CONFIG tab on appropriate rubric
      for (var i = 2; i <= ARCHIVED.getLastRow(); i++) {
      
        rangeToCopy = ARCHIVED.getRange(i,14,1,4).getValues();
        SpreadsheetApp.openById(ARCHIVED.getRange(i, 6).getValue()).getRange("CONFIG!T30:W30").setValues(rangeToCopy);
        
      }
    }
    
  } catch (error) {
  
    Browser.msgBox("The function \"copySheetRemarksToRubricSheetArchived()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("copySheetRemarksToRubricSheetArchived() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Invokes the help of fillSheetWithCourses(sheet) to add courses in the folders to their respective ACTIVE and ARCHIVED sheets
 * @type function
 */
function fillSheet() {
  // HELPER - reconstructTree()
  // DELEGATES - fillSheetWithCourses(sheet)
  
  try {
  
    fillSheetWithCourses(ACTIVE);
    fillSheetWithCourses(ARCHIVED);
    
  } catch (error) {
  
    Browser.msgBox("The function \"fillSheet()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("fillSheet() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Walks through all the files in the respective folder and inserts them into the appropriate tab (if they are Spreadsheets)
 * @type function
 */
function fillSheetWithCourses(sheet) {
  
  try {
      
    var sheetName = sheet.getName();
    clearAndFormatSheet(sheet);
    
    var folder;

    if ('Active' === sheetName) {
      
      folder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderInProgressKey'));
      
    } else if ('Archived' === sheetName) {
      
      folder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderArchivedKey'));
      
    }
    
    var files = folder.getFilesByType('application/vnd.google-apps.spreadsheet');
    
    // Walk through each file in the folder (that is a spreadsheet) and parse the name
    while (files.hasNext()) {
      
      // Gather proper information for the row by parsing from the name of the file
      var tempFile = files.next();
      var tempName = tempFile.getName();
      var workingName = tempName.substring(tempName.indexOf(':')+2);
      var campus = workingName.substring(0,3);
      var dept = workingName.substring(4,7);
      var course = workingName.substring(8,11);
      var section = workingName.substring(12,15);
      var courseConcat = campus + workingName.substring(3,4) + dept + workingName.substring(7,8) + course + workingName.substring(11,12) + section;
      var space = "";
      
      // Add the information for each course to the bottom of the document
      sheet.appendRow([space,campus,dept,course,section,tempFile.getId(),'=hyperlink(\"' + tempFile.getUrl() + '\";\"' + courseConcat + '\")']);
      
    }
    
    // Format the header row
    var rangeToPutData = "A1:Q1";
    var range = sheet.getRange(rangeToPutData);
    sheet.getRange(rangeToPutData).setFontWeight("bold");
    
    // Freeze rows (if there are multiple rows)
    if (sheet.getLastRow() > 1) {
      sheet.setFrozenRows(1);
    }
    
  } catch (error) {
    
    Browser.msgBox("The function \"fillSheetWithCourses(" + sheet.getName() + ")\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("fillSheetWithCourses(" + sheet.getName() + ") terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Updates percentages and all remarks on the Dashboard
 * @type function
 */
function updateAllInformation() {
  // DELEGATES: copySheetRemarksToRubric(), updateStatus()
  
  try {
    
    copySheetRemarksToRubric();
    updateStatus(); // updates percentages as well
    
  } catch (error) {
    
    Browser.msgBox("The function \"updateALlInformation() did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("updateAllInformation() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Delegates updating the status of each course
 * @type function
 */
function updateStatus() {
  // HELPER - reconstructTree(), updateAllInformation()
  // DELEGATES - updateStatusSheet(sheetName)
  
  try {
  
    updateStatusSheet(ACTIVE);
    updateStatusSheet(ARCHIVED);
    
  } catch (error) {
    
    Browser.msgBox("The function \"updateStatus()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("updateStatus() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}  




/**
 * @description Takes the key from column F for each rubric in the sheet and retrieves information from the CONFIG tab for each respective rubric
 * @param {string} sheetName: The name of the sheet being passed in 
 * @type function
 */
function updateStatusSheet(sheet) { 
  /*
   * !!!!!!!!!!!!!!!!! Relies on EXPLICIT DATA and locations !!!!!!!!!!!!!!!!!
   */
  
  try {
  
    // Walk through the list of items in the spreadsheet, grab the KEY from column E, and put data accordingly
    
    var place;
    var thisPlaceTotal; 
    var rangeTEST;
    
    // This for loop is where all the magic happens! Grabs the key from column F and then grabs the information from each rubric (via the CONFIG tab)
    // Since it is possible for other documents to exist in the folder and not be rubrics, it is important to try/catch this oepration.
    try {
    
      for (var i = 2; i <= sheet.getLastRow(); i++) {
      
        place = "F" + i;
        thisPlaceTotal = "H" + i + ":Q" + i;
        sheet.getRange(thisPlaceTotal).setValues(SpreadsheetApp.openById(sheet.getRange(place).getValue()).getSheetByName("CONFIG").getRange("N30:W30").getValues());
      
      }
    
    } catch (error) {
    
      if (debug()) {
      
        Browser.msgBox("The file at row " + i + " is not valid!\\n" + error.lineNumber + ": " + error);
        
      }
    }
  
    // Housekeeping - Resize the first column to be 32 (as a left border)
    sheet.setColumnWidth(1, 32);
    
    // Housekeeping - Walk through the sheet (except the first and last column) and autoresize each column
    for (var i = 2; i < sheet.getLastColumn(); i++) {
      sheet.autoResizeColumn(i);
    }
    
    // Housekeeping - Sets the "NOTES" column to be 250 wide
    sheet.setColumnWidth(sheet.getLastColumn(), 450);
    
    // Housekeeping - Sets the right column to be 32 wide, which provides a border
    sheet.setColumnWidth(sheet.getLastColumn()+1, 32)
    
    // Housekeeping - Format the appropriate cells to be "%"
    sheet.getRange("O2:O").setNumberFormat("0%");
    
    // Housekeeping - Format the appropriate cels to be centered
    sheet.getRange("I:P").setHorizontalAlignment("center");
    
  } catch (error) {
  
    Browser.msgBox("The function \"updateStatusSheet()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("updateStatusSheet() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Delegates percentage updates
 * @type function
 */
function updatePercentages() {
  // HELPER: updateAllInformation
  // DELEGATES: updatePercentage(sheet)

  try {
  
    updatePercentage(ACTIVE);
    updatePercentage(ARCHIVED);
  
  } catch (error) {
  
    Browser.msgBox("The function \"updatePercentages()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("updatePercentages() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
  
  }
}




/**
 * @description Takes the key from column F for each rubric in the sheet and retrieves information from the CONFIG tab for each respective rubric
 * @param {string} sheetName: The name of the sheet being passed in 
 * @type function
 */
function updatePercentage(sheet) { 
  /* 
   * !!!!!!!!!!!!!!!!! Relies on EXPLICIT DATA and locations !!!!!!!!!!!!!!!!!
   */
  
  try {
  
    // Walk through the list of items in the spreadsheet, grab the KEY from column E, and put data accordingly
    
    var place;
    var thisPlaceTotal; 
    
    var rangeTEST;
    
    // This for loop is where all the magic happens! Grabs the key from column F and then grabs the information from each prespective rubric (via the CONFIG tab)
    for (var i = 2; i <= sheet.getLastRow(); i++) {
    
      place = "F" + i;
      thisPlaceTotal = "H" + i + ":L" + i;
      sheet.getRange(thisPlaceTotal).setValues(SpreadsheetApp.openById(sheet.getRange(place).getValue()).getSheetByName("CONFIG").getRange("N30:R30").getValues());
      
      var tempKey = sheet.getRange("F" + i).getValue();
      var tempURL = 'https://docs.google.com/spreadsheets/d/' + tempKey;
      sheet.getRange("G" + i).setValue('=hyperlink(\"' + tempURL + '\";\"' + SpreadsheetApp.openById(sheet.getRange(place).getValue()).getRange("CONFIG!E3").getValue() + '\")');
    
    }
  
    // Housekeeping - Resize the first column to be 32 (as a left border)
    sheet.setColumnWidth(1, 32);
    
    // Housekeeping - Walk through the sheet (except the first and last column) and autoresize each column
    for (var i = 2; i < sheet.getLastColumn(); i++) {
      sheet.autoResizeColumn(i);
    }
    
    // Housekeeping - Sets the "NOTES" column to be 250 wide
    sheet.setColumnWidth(sheet.getLastColumn(), 250);
    
    // Housekeeping - Sets the right column to be 32 wide, which provides a border
    sheet.setColumnWidth(sheet.getLastColumn()+1, 32)
    
    // Housekeeping - Format the appropriate cells to be "%"
    sheet.getRange("O2:O").setNumberFormat("0%");
    
    // Housekeeping - Format the appropriate cels to be centered
    sheet.getRange("I:P").setHorizontalAlignment("center");
    
  } catch (error) {
  
    Browser.msgBox("The function \"updatePercentage(sheet)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("updatePercentage(sheet) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
  
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//   ____  ____  ____  _  _   ___ 
//  (    \(  __)(  _ \/ )( \ / __)
//   ) D ( ) _)  ) _ () \/ (( (_ \
//  (____/(____)(____/\____/ \___/
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Used to query if debug mode is turned on or off. Typically, if debug() returns true, console messages are displayed.
 * @type function
 * @return {boolean}
 */
function debug() {
  // HELPER: Many functions
  // FLAG for methods that display data when in debug mode
  // If 'debug' is 'true', there will be many popups during use
  
  try {
  
    // Check script properties to see if 'debug' is true; if it is, 'true' is returned
    if (PropertiesService.getScriptProperties().getProperty('debug') == "true") {
      return true;
    }
    
    // Otherwise, return 'false'
    return false;
    
  } catch (error) {
  
    Browser.msgBox("The function \"debug()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("debug() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Checks the state of the Debug Script Property. Returns ON or OFF [used for "OPTIONS"]
 * @type function
 * @return {string} State of Debug Script Property
 */
function checkDebugTrigger() {
  try {
  
    if (debug()) {
      return 'ON';
    } else {
      return 'OFF';
    }
  
  } catch (error) {

    Browser.msgBox("The function \"checkDebutTrigger()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("checkDebugTrigger() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}



/**
 * @description Turns off debug mode (sets the script property 'debug' to 'false'
 * @type function
 */
function turnDebugOff() {
  // DELEGATES: generateMenu()
  
  try {
    
    // Unequivocally sets 'debug' to 'false'
    PropertiesService.getScriptProperties().setProperty('debug', 'false');
    
    // Since the context of the OSCQR menu has changed, run generateMenu() to refresh it
    generateMenu();
    
  } catch (error) {
  
    Browser.msgBox("The function \"turnDebugOff()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("turnDebugOff() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}



/**
 * @description Turns on debug mode (sets the script property 'debug' to true
 * @type function
 */
function turnDebugOn() {
//  DELEGATES: generateMenu()

  try {
  
    // Unequivocally sets 'debug' to 'true'
    PropertiesService.getScriptProperties().setProperty('debug', 'true');
    
    // Since the context of the OSCQR menu has changed, run generateMenu() to refresh it
    generateMenu();
    
  } catch (error) {
  
    Browser.msgBox("The function \"turnDebugOn()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("turnDebugOn() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);

  }
}




/**
 * @description Completely clears all formatting from the "Dashboard" and calls resetConfig() and turnDebugOff(). Colloquially known as "Super Delete!"
 * @type function
 */
function resetALLSheet(sheet) {
  try {
    
    // Unfreeze rows (rows that are frozen cannot be deleted)
    sheet.setFrozenRows(0);
    
    // If there is more than one row, delete all the others
    if (sheet.getMaxRows() > 1) {
      sheet.deleteRows(1, sheet.getMaxRows() - 1);
    }
    
    // If there is more than one column, delete all the others
    if (sheet.getMaxColumns() > 1) {
      sheet.deleteColumns(1, sheet.getMaxColumns() - 1);
    }
    
    // Housekeeping - Populate the one remaining cell with a message to run the CONFIGURATION
    sheet.getRange("A1").setValue("Please run the \"Configuration\" under the OSCQR Menu").setBackground('white').setFontColor('black');
    sheet.autoResizeColumn(1);
    sheet.setRowHeight(1, 21);
    
  } catch (error) {
  
    Browser.msgBox("The function \"resetAll()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("resetAll() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }   
}




/**
 * @description Returns 'true' if the script property associated with the key 'configured' is true; 'false' otherwise.
 * @type function
 * @return {boolean}
 */
function getConfig() {
  // HELPER - generateMenu()
  // Returns TRUE if the script property 'configured' is true; FALSE otherwise
 
  try {
  
    // Checks to see if 'configured' is 'true'
    if (PropertiesService.getScriptProperties().getProperty('configured') == "true") {
      return true;
    }
    
    // Returns 'false' if the value of 'configured' is 'false'
    return false;
    
  } catch (error) {
  
    Browser.msgBox("The function \"getConfig()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("getConfig() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Resets the script properties: 'configured' = 'false'; 'campus' = ''; 'cscEmail' = '' and then runs getProperties() and generateMenu()
 * @type function
 */
function resetConfig() {
  // DELEGATES: getProperties(), generateMenu()
  
  // Used in debugging to reset the "initialized" script property
  // After resetting configuration, this will display the script properties and generate the menu appropriately
  // This does NOT reset folder/document keys
  
  try {
    
    // Reset defining script properties to an uninitialized state
    PropertiesService.getScriptProperties().setProperty('configured', 'false');
    PropertiesService.getScriptProperties().setProperty('campus', '');
    PropertiesService.getScriptProperties().setProperty('cscEmail', '');
    
    // Display the script properties so the debugger can verify the state of each
    getProperties();
    
    // Since the context of the OSCQR menu has changed, run generateMenu() to refresh it
    generateMenu();
    
  } catch (error) { 
  
    Browser.msgBox("The function \"resetConfig()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("resetConfig() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Completely clears all formatting from the "Dashboard" and calls resetConfig() and turnDebugOff(). Colloquially known as "Super Delete!". Delegates to resetALLSheet()
 * @type function
 */
function resetALL() {
  // DELEGATES - resetALLSheet(), resetConfig(), turnDebugOff(), isDashboard()
  
  try {
  
    // Reset both ACTIVE and ARCHIVED
    resetALLSheet(ACTIVE);
    resetALLSheet(ARCHIVED);
    
    // Checks to see if Dashboard is present - if so, it is deleted
    if (isDashboard()) {
      SpreadsheetApp.getActive().deleteSheet(SpreadsheetApp.getActive().getSheetByName("Dashboard"));
    }
   
    // Reset the script property for 'configured'
    resetConfig();
    
    // Turn debug off
    turnDebugOff();
    
  } catch (error) {
    
    Browser.msgBox("The function \"resetALL()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("resetALL() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//   _  _  ____  __  __   ____  __  ____  ____ 
//  / )( \(_  _)(  )(  ) (_  _)(  )(  __)/ ___)
//  ) \/ (  )(   )( / (_/\ )(   )(  ) _) \___ \
//  \____/ (__) (__)\____/(__) (__)(____)(____/
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Displays a Browser message box with the status of all the script properties
 * @type function
 */
function getProperties() {
  // HELPER: Many functions
  // Displays all configuration states in a pop-up
  
  try {
  
    var campus = PropertiesService.getScriptProperties().getProperty('campus');
    var configured = PropertiesService.getScriptProperties().getProperty('configured');
    var version = PropertiesService.getScriptProperties().getProperty('version') || VERSION;
    var thisDebug = PropertiesService.getScriptProperties().getProperty('debug');
    var csc = PropertiesService.getScriptProperties().getProperty('cscEmail');
    var rubricToCopy = PropertiesService.getScriptProperties().getProperty('rubricToCopy');
    var campusProgress = PropertiesService.getScriptProperties().getProperty('campusFolderInProgressKey');
    var campusArchived = PropertiesService.getScriptProperties().getProperty('campusFolderArchivedKey');
    var rubricFolderKey = PropertiesService.getScriptProperties().getProperty('rubricFolderKey');
    var logo = PropertiesService.getScriptProperties().getProperty('logoURL');
    var osData = PropertiesService.getScriptProperties().getProperty('osDataSheet');
    var initialFolder = PropertiesService.getScriptProperties().getProperty('initialFolderSetup');
    var campusFolderKEY = PropertiesService.getScriptProperties().getProperty('campusFolderKEY');
    var alphaOrder = PropertiesService.getScriptProperties().getProperty('alphaOrder');
    
    
    if (debug()) {
      Browser.msgBox("DEBUG:\\n'campus' = " + campus + "\\n'configured' = " + configured + "\\n'version' = " 
      + version + "\\n'debug' = " + thisDebug + "\\n'cscEmail' = " + csc + "\\n'rubricToCopy' = " 
      + rubricToCopy + "\\n'campusFolderInProgressKey' = " + campusProgress + "\\n'campusFolderArchivedKey' = " + campusArchived + "\\n'logoURL' = "
      + logo + "\\n'osDataSheet' = " + osData + "\\n'initialFolderSetup' = " 
      + initialFolder + "\\n'campusFolderKEY' = " + campusFolderKEY + "\\n'rubricFolderKey' = " + rubricFolderKey + "\\n'alphaOrder' = " + alphaOrder);
    }
    
  } catch (error) {
  
    Browser.msgBox("The function \"getProperties()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("getProperties() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}



/**
 * @description This function delegates the relevant sheets to formatTableSheet()
 * @type function
 */
function formatTable() {
  // DELEGATES - formatTableSheet(sheet)
  
  try {  
    
    formatTableSheet(ACTIVE);
    formatTableSheet(ARCHIVED);  
    
  } catch (error) {
    
    Browser.msgBox("The function \"formatTable()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("formatTable() has failed: " + error + " - Line " + error.lineNumber);
    
  }
}




function alphabetize(sheet) {
  
  try {
    
    if (sheet.getMaxRows() > 2) {
      var tempRange = sheet.getRange(2,1,sheet.getMaxRows()-1, sheet.getMaxColumns());
  //    tempRange.sort(PropertiesService.getScriptProperties().getProperty('alphaOrder'));
  //    var sortOrder = 1*PropertiesService.getScriptProperties().getProperty('alphaOrder');
      tempRange.sort(1*PropertiesService.getScriptProperties().getProperty('alphaOrder'));
    }
  } catch (error) {
    
    Browser.msgBox("The function \"alphabetize()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("alphabetize() has failed: " + error + " - Line " + error.lineNumber);

  }

}




/**
 * @description This function first formats the header (black background with white text), and then serves different formatting for each row (alternating levels of gray background)
 * @type function
 * @param {string} sheetName - The name of the sheet being passed in
 */
function formatTableSheet(sheet) {
  // HELPER: formatTable()
  
  try {
  
    alphabetize(sheet);
  
    // Code to format the header
    sheet.getRange("1:1").setBackground("black").setFontColor("white");
    
    // Code to format the rest of the sheet
    for (var i = 2; i <= sheet.getMaxRows(); i++) {
      sheet.setRowHeight(i, 30);
        if (i % 2 > 0) {
          sheet.getRange(i + ":" + i).setBackground("#CCCCCC").setVerticalAlignment("middle").setFontColor('black').setFontWeight('normal');
      } else {
          sheet.getRange(i + ":" + i).setBackground("#F0F0F0").setVerticalAlignment("middle").setFontColor('black').setFontWeight('normal');
      }
    }
    
    if (sheet.getMaxRows() > 1) {
    
      sheet.setFrozenRows(1);
    
    }
    
    sheet.hideColumns(14, 3);
    sheet.hideColumns(12,1);
    sheet.setColumnWidth(17, 450)
    
  } catch (error) {
  
    Browser.msgBox("The function \"formatTableSheet()\" did not run. Please contact technical support. It failed because of (" + sheet.getName() + ")\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("formatTableSheet() terminated unexpectedly [" + sheet.getName() + "]:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Called by fillSheet(), this function delegates sheets to clearAndFormat(sheet)
 * @type function
 */
function clearAndFormat() {
  // HELPER - fillSheet()
  // DELEGATES - clearAndFormatSheet(sheet)
  
  try {

    clearAndFormatSheet(ACTIVE);
    clearAndFormatSheet(ARCHIVED);
   
  } catch (error) {
  
    Browser.msgBox("The function \"clearAndFormat()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("clearAndFormat() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Called by clearAndFormat(), this function deletes columns and rows, clears the sheet, freezes the first row, calls generateHeader(), and hides some columns
 * @type function
 * @param {string} sheetName - The name of the sheet being passed in
 */
function clearAndFormatSheet(sheet) {
  // HELPER: clearAndFormat()
  
  sheet = sheet || ACTIVE;
  
  try {
    
    // Clear the sheet by chaining clear methods
    // Remove any frozen row settings
    sheet.clearContents().clearFormats().clearNotes().setFrozenRows(0);
  
    // To ensure sheet is the proper size, delete all columns and rows
    var numOfColumns = sheet.getMaxColumns();
    if (numOfColumns > 1) {
      sheet.deleteColumns(1, numOfColumns-1);
    } 
  
    var numOfRows = sheet.getMaxRows();
    if (numOfRows > 1) {
      sheet.deleteRows(1, numOfRows-1);
    }
    
    // Use the generateHeader() function to put the column headers at the top
    generateHeader();  
    
    // Hide some of the columns that are not needed
    sheet.hideColumns(2,5); // Campus | Course | Number | Section
    
  } catch (error) {
  
    Browser.msgBox("The function \"clearAndFormatSheet()\" did not run. Please contact technical support. It failed because of (" + sheet.getName() + ")\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("clearAndFormatSheet() terminated unexpectedly: [" + sheet.getName() + "]:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Called by clearAndFormat(), this function delegates sheets to generateHeaderSheet(sheet)
 * @type function
 */
function generateHeader() {
  // HELPER - clearAndFormat()
  // DELEGATES - generateHeaderSheet(string)
  
  try {
  
    generateHeaderSheet(ACTIVE);
    generateHeaderSheet(ARCHIVED);
    
  } catch (error) {
  
    Browser.msgBox("The function \"generateHeader()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("generateHeader() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Called by generateHeader(), this function creates the header of the Dashboard. This function will overwrite any content in row 1. The header is not formatted - only the data is installed
 * @type function
 * @param {string} sheetName - The name of the sheet being passed in
 */
function generateHeaderSheet(sheet) {
  // HELPER: generateHeader()
  
  try {
    
    var header = [
      ["", "CAMPUS", "DEPT", "NUM", "SEC", "SHEET ID", "LINK", "COURSE NAME", "ID", "Faculty",
       "Reviewer", "% Complete", "TIME TO REFRESH", "Action Plan?", "Progress of Refresh?", "Learning Review?", "NOTES", ""]
    ];
    
    sheet.getRange("A1:R1").setValues(header);
    
  } catch (error) {
  
    Browser.msgBox("The function \"generateHeaderSheet()\" did not run. Please contact technical support. It failed because of (" + sheet.getName() + ")\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("generateHeaderSheet() terminated unexpectedly: [" + sheet.getName() + "]:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Delegates resizing to different sheets
 * @type function
 */
function resizeColumns() {
  // DELEGATES: resizeColumnsSheet(sheet)
  
  try {
    
    // Housekeeping - Call resizeColumnsSheet for both ACTIVE and ARCHIVED 
    resizeColumnsSheet(ACTIVE);
    resizeColumnsSheet(ARCHIVED);
    
  } catch (error) {
  
    Browser.msgBox("The function \"resizeColumns()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("resizeColumns() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
    
  }
}




/**
 * @description Function that resizes all the columns to autoresize. Note that this is contingent on the first and last column being "border columns"
 * @param {string} sheetName: The name of the sheet being passed in
 * @type function
 */
function resizeColumnsSheet(sheet) {
  // HELPER: resizeColumns()
  
  try {
  
    // Housekeeping - Set the first column of the sheet to be 32 pixels wide
    sheet.setColumnWidth(1,32);
    
    // Housekeeping - Walk through every column and auto-resize it
    for (var i = 2; i < sheet.getLastColumn(); i++) {
      sheet.autoResizeColumn(i);
    }

    // Housekeeping - Set the last column of the sheet to be 32 pixels wide
    sheet.setColumnWidth(sheet.getMaxColumns(), 32);
    
  } catch (error) {
  
    Browser.msgBox("The function \"resizeColumnsSheet(" + sheet.getName() + ")\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("resizeColumnsSheet(" + sheet.getName() + ") terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
    
  }
}




/**
 * @description Delegates the resizing of the columns of sheets, and formats the headings
 * @type function
 */
function resizeColumnsWithHeaderFormat() {
  //DELEGATES: resizeColumnsWithHeaderFormatSheet(sheet)
  
  try {
  
    // Housekeeping - Call resizeColumnsWithHeaderFormatSheet for both ACTIVE and ARCHIVED 
    resizeColumnsWithHeaderFormatSheet(ACTIVE);
    resizeColumnsWithHeaderFormatSheet(ARCHIVED);
    
  } catch (error) {
  
    Browser.msgBox("The function \"resizeColumnsWithHeaderFormat()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("resizeColumnsWithHeaderFormat() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Resizes the columns of sheets, and formats the headings
 * @param {string} sheetName: The name of the sheet being passed in
 * @type function
 */
function resizeColumnsWithHeaderFormatSheet(sheet) {
  // HELPER: resizeColumnsWithHeaderFormat()

  try {

    // Housekeeping - Sets the first row to be bold
    sheet.getRange(1, 1, 1, sheet.getMaxColumns()).setFontWeight("bold");
    
    // Housekeeping - Set the first column to be 32 pixels (left border)
    sheet.setColumnWidth(1,32);
    
    // Housekeeping - Walk through the sheet and resize every column (autoresize)
    for (var i = 2; i < sheet.getLastColumn(); i++) {
      sheet.autoResizeColumn(i);
    }
    
    // Housekeeping - Resize column Q
    sheet.setColumnWidth(17, 400);
    
    // Housekeeping - Add one last row under the previous ones and remove formatting
    sheet.appendRow([""]);
    sheet.getRange(2, 1, 1, sheet.getMaxColumns()).setFontWeight("normal");
    
    // Housekeeping - Set the last column to be 32 pixels wide (the right border)
    sheet.setColumnWidth(sheet.getMaxColumns(), 32);

    // Housekeeping - Hide the non-pertinent columns
    sheet.hideColumns(2,5);
    
  } catch (error) {
  
    Browser.msgBox("The function \"resizeColumnsWithHeaderFormatSheet()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("resizeColumnsWithHeaderFormatSheet() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}




/**
 * @description Uses the Date class to appropriately concatenate the current date and time
 * @type function
 * @param {string} currentTime - The current time in HH:MM:SS
 */
function getCurrentTime() {
  // HELPER - createCourse(e)
  
  try {
  
    var d = new Date();
    var currentHour = d.getHours();
    var currentMin = d.getMinutes();
    var currentSec = d.getSeconds();
    
    var currentMinString = currentMin;
    var currentHourString = currentHour;
    var currentSecString = currentSec;
  
    if (currentMin < 10) {
      currentMinString = "0" + currentMin;
    }
    
    if (currentHour < 10) {
      currentHourString = "0" + currentHour;
    }
    
    if (currentSec < 10) {
      currentSecString = "0" + currentSec;
    }
  
    var currentTime = "" + currentHourString + ":" + currentMinString + ":" + currentSecString;
  
    return currentTime;
    
  } catch (error) {
    
    Browser.msgBox("The function \"getCurrentTime()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getCurrentTime() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
  
  }
}




/**
 * @description Uses the Date class to appropriately concatenate the current date
 * @type function
 * @return {string} currentDate - The current date formatted in YYYY-MM-DD
 */
function getCurrentDate() {
  // HELPER - createCourse(e)

  try {
  
    var d = new Date();
    var currentYear = d.getYear();
    var currentMonth = d.getMonth()+1;
    var currentDate = d.getDate();
   
    if (currentDate < 10) {
      currentDate = "0" + currentDate;
    }
   
    if (currentMonth < 10) {
      currentMonth = "0" + currentMonth;
    }
  
    return (currentYear + "-" + currentMonth + "-" + currentDate);
    
  } catch (error) {
    
    Browser.msgBox("The function \"getCurrentDate()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getCurrentDate() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
  
  }
}




/**
 * @description Helper code to get an array of all the rubrics
 * @type function
 * @return rubricList.sort(): A sorted array that contains all the rubrics associated with the Dashboard
 */
function getRubrics() {
  
  try {
    
    var listOfFiles = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('rubricFolderKey')).getFiles();
    var rubricList = [];
    while (listOfFiles.hasNext()) {
      rubricList.push(listOfFiles.next().getName());
    }
  
    return rubricList.sort();
    
  } catch (error) {

    Browser.msgBox("The function \"getRubrics()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getRubrics() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
    
  }

}




/**
 * @description Gets a list of all the courses (both active and archived)
 * @type function
 * @return total.sort(): A sorted array of all the courses associated with the Dashboard
 */ 
function getAllCourses() {

  try {
  
    var active = getActiveCourses();
    var archived = getArchivedCourses();
    var total = active.concat(archived);
    
    return total.sort();
  
  } catch (error) {

    Browser.msgBox("The function \"getAllCourses()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getAllCourses() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
    
  }
}




/**
 * @description Gets a list of all the ACTIVE courses associated with the Dashboard
 * @type function
 * @return courseList.sort(): A sorted array of all the ACTIVE courses associated with the Dashboard
 */
function getActiveCourses() {
  
  try {
  
    var listOfFiles = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderInProgressKey')).getFiles();
    var courseList = [];
    while (listOfFiles.hasNext()) {
      courseList.push(listOfFiles.next().getName());
    }
  
    return courseList.sort();
  
  } catch (error) {

    Browser.msgBox("The function \"getActiveCourses()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getActiveCourses() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
    
  }
}




/**
 * @description Gets a list of all the ARCHIVED courses associated with the Dashboard
 * @type function
 * @return courseList.sort(): A sorted array of all the ARCHIVED courses associated with the Dashboard
 */
function getArchivedCourses() {
  
  try {
    
    var listOfFiles = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderArchivedKey')).getFiles();
    var courseList = [];
    while (listOfFiles.hasNext()) {
      courseList.push(listOfFiles.next().getName());
    }
  
    return courseList.sort();
  
  } catch (error) {

    Browser.msgBox("The function \"getArchivedCourses()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getArchivedCourses() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
    
  }
}




/**
 * @description Helper code for HTML templates to include files such as Stylesheet and JavaScript
 * @type function
 * @param filename - The HTML file being passed in that needs to be included
 * @return Returns content from the HTMLOutput
 */
function include(filename) {
  // HELPER: Is called from any HTML file that requires extraneous files to be called
  // Code to include files such as Stylesheet and JavaScript

  try {
    
    return HtmlService.createHtmlOutputFromFile(filename)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .getContent();
  
  } catch (error) {

    Browser.msgBox("The function \"include()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("include() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      

  }
}




/**
 * @description Helper code for about() that returns the current version of the Dashboard
 * @type function
 * @return version - The current version of the Dashboard
 */
function getVersion() {
  // HELPER: Called from about.html
  
  try {
  
    var version = VERSION || PropertiesService.getScriptProperties().getProperty('version');
    return version;
  
  } catch (error) {

    Browser.msgBox("The function \"getVersion()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getVersion() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      

  }
}




/**
 * @description Helper code for any method that needs the URL of the logo
 * @type function
 * @return LOGO - The URL of the logo
 */
function getLogo() {
  // HELPER: any function that requires the URL of the logo to be accessed (such as about.html, addRubric.html, ...)
  
  try {
  
    return LOGO;
    
  } catch (error) {
  
    Browser.msgBox("The function \"getLogo()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getLogo() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




//    __   ____  ____     ___  __   _  _  ____  ____  ____ 
//   / _\ (    \(    \   / __)/  \ / )( \(  _ \/ ___)(  __)
//  /    \ ) D ( ) D (  ( (__(  O )) \/ ( )   /\___ \ ) _) 
//  \_/\_/(____/(____/   \___)\__/ \____/(__\_)(____/(____)


function addCourse() {

 try {
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('addCourse').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Generate a Rubric for a course');
  
  } catch (error) {
  
    Browser.msgBox("The function \"addCourse()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("addCourse() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}


/**
 * @description Get a list of the current rubrics
 * @type function
 * @return array of rubric names
 */
function rubricsForDropDown() {

  var rubrics = getRubrics();
  var rubricListHTML = '';
  
  for (var i = 0; i < rubrics.length; i++) {
    rubricListHTML += "<option value='" + rubrics[i] + "'>" + rubrics[i] + "</option>\\n";
  }

  return(rubricListHTML);

}

/**
 * @description Handles the button click "OK" and creates a new rubric as well as adds an entry to the "Dashboard"
 * @type function
 * @param {string} rubric: The name of the Rubric to duplicate and assign to this course
 * @param {string} dept: The 3 letter department for the course
 * @param {string} course: The 3 letter course ID (could be numbers)
 * @param {string} section: The 3 letter section ID (could be numbers)
 * @param {string} nameOfCourse: The namae of the course
 */
function createCourse(rubric, dept, course, section, nameOfCourse) {
  
  try {
    
    var blank = "";
    
    var tempRubricFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('rubricFolderKey'));
    var tempRubricList = tempRubricFolder.getFiles();
    var tempRubricID = '';
    
    var rubricFileID = '';
    
    while (tempRubricList.hasNext()) {
      var file = tempRubricList.next();
      
      if (file.getName() == rubric) {
        tempRubricID = file.getId();
        rubricFileID = tempRubricID;
      }
    }
    
    dept = cleanName(dept).toUpperCase();
    course = cleanName(course).toUpperCase();
    section = cleanName(section).toUpperCase();
    
    // Get the "Dashboard" sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    ss.setActiveSheet(ACTIVE);
    
    // Get the campus (from script properties)
    var campus = PropertiesService.getScriptProperties().getProperty('campus') || '000';
    
    // Concatenate info into one string (for file naming)
    var fullName = campus + '-' + dept + '-' + course + '-' + section;
    
    if (debug()) {
      Browser.msgBox("DEBUG: Concatenated name: " + fullName);
    }
          
    // Get the folder key that the rubric will be stored in    
    var targetFolderID = PropertiesService.getScriptProperties().getProperty('campusFolderInProgressKey');
    var targetFolder = DriveApp.getFolderById(targetFolderID);
    
    // Gather all the information that will be inserted into the CONFIG tab on the new rubric and send it
//    var tempFileName = "OS - Rubric: " + fullName;
    var tempFileName = rubric + ': ' + fullName;
    var tempFileID = DriveApp.getFileById(rubricFileID).makeCopy(tempFileName, targetFolder).getId();
    var dateTime = getCurrentDate() + " at " + getCurrentTime();
    var email = PropertiesService.getScriptProperties().getProperty('cscEmail');
    
    var tempRubric = SpreadsheetApp.openById(tempFileID);
    tempRubric.getRange("CONFIG!B2").setValue(nameOfCourse);
    tempRubric.getRange("CONFIG!B3").setValue(campus + "-" + dept + "-" + course + "-" + section);
    tempRubric.getRange("CONFIG!B8").setValue(dateTime);
    tempRubric.getRange("CONFIG!B9").setValue(email);
    tempRubric.getRange("CONFIG!E6").setValue(rubric);
    tempRubric.getRange("CONFIG!F2").setValue(VERSION);    
    
    ss.appendRow([blank, campus, dept, course, section, tempFileID, '=hyperlink(\"' + DriveApp.getFileById(tempFileID).getUrl() + '\";\"' + fullName + '\")', nameOfCourse,]);
    
    var tempPercentages = SpreadsheetApp.openById(tempFileID).getSheetByName("CONFIG").getRange("O30:R30");
    var lastRow = ACTIVE.getLastRow();
    ACTIVE.getRange("I" + lastRow + ":L" + lastRow).setValues(tempPercentages.getValues());
    
    formatTable();
      
    // Clean up the sheet by formatting the newest row and resizing all the columns
    formatNewRow();
    resizeColumns();
    
    // Confirmation message
    if (debug()) {
      Browser.msgBox("DEBUG: A new rubric has been created successfully!");
    }
    
    SpreadsheetApp.getActive().setActiveSheet(ACTIVE);
        
  } catch (error) {
  
    Browser.msgBox("The function \"createCourse(e)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Browser.msgBox("createCourse(e) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);    
  
  }
}




/**
 * @description Ensures that the string passed in is precisely three characters long (note the precondition that nameData is < 3 when passed in)
 * @type function
 * @param {string} numData: The 3 (or less) character string to be "cleaned"
 * @return {string} nameData: A sanitized version of the parameter that was passed in
 */
function cleanName(nameData) {
  
  try {
    
    // Ensure that the nameData is no more than 3 characters
    if (nameData.length > 3) {
      nameData = nameData.substring(0,3);
    }
    
    // In the event nameData is less than 3 characters in length, prepend "0"s
    while (nameData.length < 3) {
      nameData = "0" + nameData;
    }
  
    return nameData;
  
  } catch (error) {
  
    Browser.msgBox("The function \"cleanName(nameData)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Browser.msgBox("cleanName(nameData) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Formats the last row (typically a course that has just been added)
 * @type function
 */
function formatNewRow() {
  
  try {
    
    var sheet = ACTIVE;
    var lastRow = sheet.getLastRow();
    
    // Conditional to determine if the row is even or odd
    if (lastRow % 2 > 0) {
      sheet.getRange(lastRow + ":" + lastRow).setBackground("#CCCCCC").setVerticalAlignment("middle");
    } else {
      sheet.getRange(lastRow + ":" + lastRow).setBackground("#F0F0F0").setVerticalAlignment("middle");
    }
    
  } catch (error) {
  
    Browser.msgBox("The function \"formatNewRow()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("formatNewRow() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);    
    
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//   _  _   __  ____  __  ____  _  _     ___  __   _  _  ____  ____  ____ 
//  ( \/ ) /  \(    \(  )(  __)( \/ )   / __)/  \ / )( \(  _ \/ ___)(  __)
//  / \/ \(  O )) D ( )(  ) _)  )  /   ( (__(  O )) \/ ( )   /\___ \ ) _) 
//  \_)(_/ \__/(____/(__)(__)  (__/     \___)\__/ \____/(__\_)(____/(____)
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Launches interface for Dashboard user to modify properties of a course
 * @type function
 */
function modifyCourse() {

   try {
    
    // Check to see if there are any courses to modify - if not, display message and terminate function
    if (getActiveCourses().length + getArchivedCourses().length == 0 ) {
      Browser.msgBox("There are no courses to modify.");
      return;
    }
    
    // Otherwise launch HTML modal
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('modCourse').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Modify a Course');
  
  
  } catch (error) {
  
    Browser.msgBox("The function \"modifyCourse()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("modifyCourse() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Generates a list of all courses associated with the Dashboard (ACTIVE and ARCHIVED)
 * @type function
 * @return {string} courseListHTML: An HTML formatted list of all courses associated with the Dashboard
 */
function getAllCoursesForDropDown() {

  try {
  
    var coursesList = [];
    var tempActiveIterator = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderInProgressKey')).getFiles();
    var tempArchivedIterator = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderArchivedKey')).getFiles();
    var courseListHTML = '';
    
    
    while (tempActiveIterator.hasNext()) {
      coursesList.push(tempActiveIterator.next());
    }
    
    while (tempArchivedIterator.hasNext()) {
      coursesList.push(tempArchivedIterator.next());
    }
    
    coursesList = coursesList.sort();
 
    for (var i = 0; i < coursesList.length; i++) {
      courseListHTML += "<option value='" + coursesList[i].getId() + "'>" + coursesList[i].getName() + "</option>\\n";
    
    }
    
    return courseListHTML;
  
  } catch (error) {

    Browser.msgBox("The function \"getAllCoursesForDropDown()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getAllCoursesForDropDown() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      

  }
}




/**
 * @description Supports the  modal by retrieving the properties of the selected course and isnerting into the window
 * @param {string} courseID: The ID of the course whose properties should be returned
 * @type function
 * @return {object} An object of four fields to populate the modal
 */
function getInfoForModify(courseID) {
  
  try {

      // A lousy way to return empty strings if the courseID is invalid
      try { 
        
        var tempFile = SpreadsheetApp.openById(courseID);
      
      } catch (error) {
          return {
            field1: ' ',
            field2: ' ',
            field3: ' ',
            field4: ' '
          };
      }
      
      var tempRange = tempFile.getRange('CONFIG!B2:B7');
      var tempValues = tempRange.getValues();
      
        return {
          field1: tempValues[0],
          field2: tempValues[3],
          field3: tempValues[4],
          field4: tempValues[5]
        };
 
    } catch (error) {
    
    Browser.msgBox("The function \"getInfoForModify()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getInfoForModify() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Handles the course modifications by correcting them in the Dashboard and the proper rubric
 * @param {string} courseID: The ID of the course to be modified
 * @param {string} name: The name of the course to be modified
 * @param {string} dept: The department of the course to be modified (3 characters)
 * @param {string} number: The course number of the course to be modified (3 characters)
 * @param {string} section: The section number of the course to be modified (3 characters)
 * @type function
 */
function modifyCourseHandler(courseID, name, dept, number, section) {

  try {

    if (debug()) {
      Browser.msgBox(courseID + " " + name + " " + dept + " " + number + " " + section);
    }
    
    // If the attempt to openById fails, terminate this process
    try {
      
      var tempRubric = SpreadsheetApp.openById(courseID);
      
    } catch (err) {
      
      Logger.log('An attempt was made to open a file with a bad ID. Line - ' + err.lineNumber + ' ' + err.message);
      Browser.msgBox('An attempt was made to open a file with a bad ID. Line - ' + err.lineNumber + ' ' + err.message);
      return;
      
    }
    
    var tempRange = tempRubric.getRange("CONFIG!B2:B7").getValues();
    
    dept = cleanName(dept).toUpperCase();
    number = cleanName(number).toUpperCase();
    section = cleanName(section).toUpperCase();
    
    var campus = tempRange[2][0];
    var concatName = campus + "-" + dept + "-" + number + "-" + section;
    
    tempRubric.getRange("CONFIG!B2:B7").setValues([[name],[concatName],[campus],[dept],[number],[section]]);
  
    var courseLocale = findCourseStatus(courseID);
    
    var tab = courseLocale[0];
    var row = courseLocale[1];
   
    var thisSheet = SpreadsheetApp.getActive().getSheetByName(tab);
    var rubricDescriptionRange = thisSheet.getRange(row, 2, 1, 4);
    thisSheet.getRange(row, 8, 1, 1).setValue(name);
    rubricDescriptionRange.setValues([[campus, dept, number, section]]);
    
    var tempLinkString = 'https://docs.google.com/open?id=' + courseID;
    
    thisSheet.getRange(row, 7, 1, 1).setValue('=hyperlink(\"' + tempLinkString + '\";\"' + concatName + '\")');
    
    renameCourse(courseID, concatName);

  } catch (error) {
  
    Browser.msgBox("The function \"modifyCourseHandler()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("modifyCourseHandler() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  }
}




/**
 * @description Renames a course (given the ID of the course and the new name)
 * @param {string} courseID: The ID of the course to be modified
 * @param {string} concatName: The name of the course to be modified
 * @type function
 */

function renameCourse(courseID, concatName) {

  try {
    
    var tempFile = DriveApp.getFileById(courseID);
    var tempFileName = tempFile.getName();
    tempFileName = tempFileName.substring(0, tempFileName.length-15);
    tempFileName += concatName;
    tempFile.setName(tempFileName);
  
  } catch (error) {
  
    Browser.msgBox("The function \"renameCourse()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("renameCourse() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);     
    
  }
}




/**
 * @description Handles the course modifications by correcting them in the Dashboard and the proper rubric
 * @param {string} key: The ID of the course to be modified
 * @type function
 * @return {array} A string saying 'Not in database'
 */
function findCourseStatus(key) {
  
  try {
    var sheets = SpreadsheetApp.getActive().getSheets();
    var tempRange = '';
    var tempRangeValues = '';
    
    for (var i = 0; i < sheets.length; i++) {
  
      tempRangeValues = sheets[i].getRange("F:F").getValues();  
      
      while (tempRangeValues.length > 0) {
        if (tempRangeValues.pop() == key) {
          return ([sheets[i].getName(), tempRangeValues.length+1]);
        }
      }
    }
  
    return ['Not in database', 0];
  
  } catch (error) {

    Browser.msgBox("The function \"findCourseStatus(key)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("findCourseStatus(key) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);     
    
  }
  
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//   ____  ____  __    ____  ____  ____     ___  __   _  _  ____  ____  ____ 
//  (    \(  __)(  )  (  __)(_  _)(  __)   / __)/  \ / )( \(  _ \/ ___)(  __)
//   ) D ( ) _) / (_/\ ) _)   )(   ) _)   ( (__(  O )) \/ ( )   /\___ \ ) _) 
//  (____/(____)\____/(____) (__) (____)   \___)\__/ \____/(__\_)(____/(____)
//
// --------------------------------------------------------------------------------------------------------------------------------------------//

/**
 * @description Checks to see if there are courses to delete, then serves an HTML page for the user to select a course
 * @type function
 */
function deleteCourse() {
  
   try {
    
    // Check to see if there are any courses to delete - if not, display message and terminate function
    if (getActiveCourses().length == 0 ) {
      Browser.msgBox("There are no courses to delete.");
      return;
    }
    
    Browser.msgBox("WARNING: This operation cannot be undone!");
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('delCourse').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Delete a course');
  
  } catch (error) {
  
    Browser.msgBox("The function \"deleteCourse()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("deleteCourse() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
  
}




/**
 * @description Gets a list of all the ACTIVE courses for a dropdown in a modal
 * @type function
 * @return {string} courseListHMTL: An HTML formatted list of all ACTIVE courses associated with the Dashboard
 */
function getActiveCoursesForDropDown() {

  try {
  
    var coursesList = [];
    var tempActiveIterator = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderInProgressKey')).getFiles();
    var courseListHTML = '';
    
    
    while (tempActiveIterator.hasNext()) {
      coursesList.push(tempActiveIterator.next());
    }
    
    coursesList = coursesList.sort();
 
    for (var i = 0; i < coursesList.length; i++) {
    
      courseListHTML += "<option value='" + coursesList[i].getId() + "'>" + coursesList[i].getName() + "</option>\\n";
    
    }
    
    return courseListHTML;
  
  } catch (error) {

    Browser.msgBox("The function \"getAllCoursesForDropDown()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getAllCoursesForDropDown() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      

  }
}




/**
 * @description Handles the result from the modal for deleting a course
 * @param {string} courseID: The ID of the course to be deleted
 * @type function
 */
function deleteCourseHandler(courseID) {
  
  try {
  
    if (debug()) {
      Browser.msgBox(courseID);
    }
    
    if (getActiveCourses().length == 1 ) {
      ACTIVE.setFrozenRows(0);
    }
    
    var parentFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderInProgressKey'))
    parentFolder.removeFile(DriveApp.getFileById(courseID));
    
    removeRow(courseID);
    
  } catch (error) {

    Browser.msgBox("The function \"deleteCourseHandler()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("deleteCourseHandler() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      

  }
}




/**
 * @description Removes the row of data from the ACTIVE sheet and then reformats the page
 * @param {string} courseID: The ID of the course to be deleted
 * @type function
 */
function removeRow(courseID) {
  
  try {
    
    var listOfIDs = [];
    listOfIDs = ACTIVE.getRange('F2:F').getValues();

    for (var i = 0; i < listOfIDs.length; i++) {

      if (listOfIDs[i].toString() == courseID) {

        // +2 because the range is 0-indexed, but starts on the second row of the sheet
        // Forget the +2, and the wrong row is deleted!
        ACTIVE.deleteRow(i+2);
      
      }
    }
    
    formatTable();
    
    
  } catch (error) {
    
    Browser.msgBox("The function \"removeRow(courseName)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("removeRow(courseName) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
    
  }  
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//    __   ____   ___  _  _  __  _  _  ____     ___  __   _  _  ____  ____  ____ 
//   / _\ (  _ \ / __)/ )( \(  )/ )( \(  __)   / __)/  \ / )( \(  _ \/ ___)(  __)
//  /    \ )   /( (__ ) __ ( )( \ \/ / ) _)   ( (__(  O )) \/ ( )   /\___ \ ) _) 
//  \_/\_/(__\_) \___)\_)(_/(__) \__/ (____)   \___)\__/ \____/(__\_)(____/(____)
//
// --------------------------------------------------------------------------------------------------------------------------------------------

function archiveCourse() {
  // DELEGATES: Implicitly calls include(), getVersion(), and getLogo() from HTML UI 
  
  try {
    
    // Check to see if there are any courses to archive - if not, display message and terminate function
    if (getActiveCourses().length == 0 ) {
      Browser.msgBox("There are no courses to archive.");
      return;
    }    
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('archive').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Archive a Course');
  
  } catch (error) {
  
    Browser.msgBox("The function \"archiveCourse()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("archiveCourse() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Gets a list of all the ACTIVE courses for a dropdown
 * @type function
 * @return {string} activeCourseListHTML: An HTML formatted list of all ACTIVE courses associated with this Dashboard
 */
function activeCoursesForDropDown() {

  try {
    
    var activeCourses = getActiveCourses();
    var activeCourseListHTML = '';
    
    for (var i = 0; i < activeCourses.length; i++) {
      activeCourseListHTML += "<option value='" + activeCourses[i] + "'>" + activeCourses[i] + "</option>\\n";
    }
  
    return activeCourseListHTML;
  
  } catch (error) {

    Browser.msgBox("The function \"activeCoursesForDropDown()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("activeCoursesForDropDown() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
    
  }
}




/**
 * @description Archives the course (passed in by ID) by removing it from ACTIVE and putting it in ARCHIVED
 * @type function
 */
function archiveCourseHandler(courseID) {

  try {
   
    // Check to see that there is more than one row of data - Sheets cannot freeze only one row
    if (getActiveCourses().length == 1 ) {
      ACTIVE.setFrozenRows(0);
    }
   
    // Get the files in the ACTIVE folder and in the ARCHIVED folder
    var activeFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderInProgressKey'))
    var archivedFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderArchivedKey'));
    var tempFile = DriveApp.getFileById(courseID);
    
    archivedFolder.addFile(tempFile);
    activeFolder.removeFile(tempFile);
    removeRowAndArchive(tempFile.getName());
    
    cleanUpSheet(ARCHIVED);
    cleanUpSheet(ACTIVE);
       
  } catch (error) {

    Browser.msgBox("The function \"archiveCourseHandler(courseName)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("archiveCourseHandler(courseName) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
    
  }
}




/**
 * @description Cleans up the sheet (margins, column widths, etc.)
 * @param {sheet} sheet: The sheet that needs to be cleaned up
 * @type function
 */
function cleanUpSheet(sheet) {
  
  sheet = sheet || ARCHIVED;
  
  try {

    // Housekeeping - Sets the first row to be bold
    sheet.getRange(1, 1, 1, sheet.getMaxColumns()).setFontWeight("bold");
    
    // Housekeeping - Set the first column to be 32 pixels (left border)
    sheet.setColumnWidth(1,32);
    
    // Housekeeping - Walk through the sheet and resize every column (autoresize)
    for (var i = 2; i < sheet.getLastColumn(); i++) {
      sheet.autoResizeColumn(i);
    }
    
    // Housekeeping - Resize column Q
    sheet.setColumnWidth(17, 400);
        
    // Housekeeping - Set the last column to be 32 pixels wide (the right border)
    sheet.setColumnWidth(sheet.getMaxColumns(), 32);

    // Housekeeping - Hide the non-pertinent columns
    sheet.hideColumns(2,5);
    
    // Housekeeping - Set columns I, J, K, and L to be percents
    sheet.getRange("I2:L" + sheet.getMaxRows()).setNumberFormat("0%")
  
  } catch (error) {

    Browser.msgBox("The function \"cleanUpSheet(" + sheet.getName() + ")\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("cleanUpSheet(" + sheet.getName() + ") terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
    
  }
}




/**
 * @description Removes the course from ACTIVE and puts it into ARCHIVED
 * @param {string} courseName: Name of the course to be moved to ARCHIVED
 * @type function
 */
function removeRowAndArchive(courseName) {
  
  try {
    
    if (debug()) {
      Browser.msgBox('Course name to archive: ' + courseName);
    }
    
    // Parse courseName so that the characters before (and including) the ":" are lopped off (and the space after the colon)
    var courseName = courseName.substring(courseName.indexOf(':') + 2);
        
    var listOfNames = [];
    var tempRowOfData = [];
    var tempName = '';
    
    listOfNames = ACTIVE.getRange('G2:G').getValues();
    
    for (var i = 0; i < listOfNames.length; i++) {
    
      tempName = '' + listOfNames[i];
        
      if (tempName == courseName) {
        
        tempRowOfData = ACTIVE.getRange(i+2, 1, 1, ACTIVE.getMaxColumns());
                
        ARCHIVED.appendRow(['']);
        ARCHIVED.getRange(ARCHIVED.getMaxRows(), 1, 1, ARCHIVED.getMaxColumns()).setValues(tempRowOfData.getValues());
        
        var courseID = ACTIVE.getRange('F' + (i+2)).getValue();
        var courseHandle = ACTIVE.getRange('G' + (i+2)).getValue();
       
        var tempLinkString = 'https://docs.google.com/open?id=' + courseID;
        ARCHIVED.getRange(ARCHIVED.getLastRow(), 7, 1, 1).setValue('=hyperlink(\"' + tempLinkString + '\";\"' + courseHandle + '\")');
        
        ACTIVE.deleteRow(i+2);
        
        break;
        
      }
    }
    
    resizeColumnsWithHeaderFormat();
    formatTable();    
    
  } catch (error) {
    
    Browser.msgBox("The function \"removeRowAndArchive(courseName)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("removeRowAndArchive(courseName) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
    
  }  
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//   ____  ____  ____  ____  __  ____  ____     ___  __   _  _  ____  ____  ____ 
//  (  _ \(  __)/ ___)(_  _)/  \(  _ \(  __)   / __)/  \ / )( \(  _ \/ ___)(  __)
//   )   / ) _) \___ \  )( (  O ))   / ) _)   ( (__(  O )) \/ ( )   /\___ \ ) _) 
//  (__\_)(____)(____/ (__) \__/(__\_)(____)   \___)\__/ \____/(__\_)(____/(____)
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Launches modal for user to choose a course to unarchive
 * @type function
 */
function restoreArchive() {
 // DELEGATES: Implicitly calls include(), getVersion(), and getLogo() from HTML UI 
  
  try {
    
    // Check to see if there are any courses to restore - if not, display message and terminate function
    if (getArchivedCourses().length == 0 ) {
      Browser.msgBox("There are no courses to restore.");
      return;
    }    
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('restoreArchive').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Restore a Course');
  
  } catch (error) {
  
    Browser.msgBox("The function \"restoreArchive()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("restoreArchive() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Gets a list of all the ARDHIVED courses associated with this Dashboard
 * @type function
 * @return {string} courseListHTML: An HTML formatted list of all courses that are in ARCHIVED
 */
function getArchivedCoursesForDropDown() {

  try {
  
    var coursesList = [];
    var tempArchivedIterator = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderArchivedKey')).getFiles();
    var courseListHTML = '';
    
    while (tempArchivedIterator.hasNext()) {
      coursesList.push(tempArchivedIterator.next());
    }
    
    coursesList = coursesList.sort();
 
    for (var i = 0; i < coursesList.length; i++) {
    
      courseListHTML += "<option value='" + coursesList[i].getId() + "'>" + coursesList[i].getName() + "</option>\\n";
    
    }
    
    return courseListHTML;
  
  } catch (error) {

    Browser.msgBox("The function \"getAllCoursesForDropDown()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getAllCoursesForDropDown() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      

  }
}




/**
 * @description Takes the course (passed in by ID) and moves it from ARCHIVED to ACTIVE
 * @param {string} courseID: The ID of the course to be unarchived
 * @type function
 */
function restoreCourseHandler(courseID) {

  try {
   
   // Check to see that there is more than one row of data - Sheets cannot freeze only one row
   if (getArchivedCourses().length == 1 ) {
      ARCHIVED.setFrozenRows(0);
    }
    
    // Get the files in the ACTIVE folder and in the ARCHIVED folder
    var archivedFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderArchivedKey'))
    var activeFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('campusFolderInProgressKey'));
    var tempFile = DriveApp.getFileById(courseID);
    
    activeFolder.addFile(tempFile);
    archivedFolder.removeFile(tempFile);
    removeRowAndRestore(tempFile.getName())
    
    cleanUpSheet(ARCHIVED);
    cleanUpSheet(ACTIVE);
        
  } catch (error) {

    Browser.msgBox("The function \"archiveCourseHandler(courseName)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("archiveCourseHandler(courseName) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
    
  } 
}




/**
 * @description Physically removes the row of data corresponding to the name of the course and moves it to ACTIVE
 * @param {string} courseName: Name of the course to be moved back to ACTIVE
 * @type function
 */
function removeRowAndRestore(courseName) {

  try {
    
    // Parse courseName so that the characters before (and including) the ":" are lopped off (and the space after the colon)
    var courseName = courseName.substring(courseName.indexOf(':') + 2);
        
    var listOfNames = [];
    var tempRowOfData = [];
    var tempName = "";
    
    listOfNames = ARCHIVED.getRange('G2:G').getValues();
    
    for (var i = 0; i < listOfNames.length; i++) {
    
      tempName = "" + listOfNames[i];
        
      if (tempName == courseName) {
        
        tempRowOfData = ARCHIVED.getRange(i+2, 1, 1, ARCHIVED.getMaxColumns());
                
        ACTIVE.appendRow([""]);
        ACTIVE.getRange(ACTIVE.getMaxRows(), 1, 1, ACTIVE.getMaxColumns()).setValues(tempRowOfData.getValues());
        
        var courseID = ARCHIVED.getRange("F" + (i+2)).getValue();
        var courseHandle = ARCHIVED.getRange("G" + (i+2)).getValue();
       
        var tempLinkString = 'https://docs.google.com/open?id=' + courseID;
        ACTIVE.getRange(ACTIVE.getLastRow(), 7, 1, 1).setValue('=hyperlink(\"' + tempLinkString + '\";\"' + courseHandle + '\")');
        
        ARCHIVED.deleteRow(i+2);
        
        break;
        
      }
    }
    
    resizeColumnsWithHeaderFormat();
    formatTable();    
    
  } catch (error) {
    
    Browser.msgBox("The function \"removeRowAndRestore(courseName)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("removeRowAndRestore(courseName) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
    
  }  
}

// --------------------------------------------------------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------------------------------------------------------------------
//    __   ____  ____    ____  _  _  ____  ____  __  ___ 
//   / _\ (    \(    \  (  _ \/ )( \(  _ \(  _ \(  )/ __)
//  /    \ ) D ( ) D (   )   /) \/ ( ) _ ( )   / )(( (__ 
//  \_/\_/(____/(____/  (__\_)\____/(____/(__\_)(__)\___)
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Serves an HTML page that asks the user for the name of a rubric and then invokes addRubric(name) function
 * @type function
 */
function createNewRubric() {
  // DELEGATES: Calls addRubric(name) from the HTML UI
  
  try {
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('addRubric').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Add a new Rubric');
  
  } catch (error) {
  
    Browser.msgBox("The function \"createNewRubric()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("createNewRubric() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Creates a copy of the master rubric with the name that is passed in
 * @type function
 * @param name - The name, as a String, of the new rubric
 */
function addRubric(name) {
  // HELPER: Called from addRubric.html
  
  try {

    var rubricName = name;
    var rubricToCopy = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty('rubricToCopy'));
    var rubricFolderKey = PropertiesService.getScriptProperties().getProperty('rubricFolderKey');
    
    var tempRubric = rubricToCopy.makeCopy(rubricFolderKey);
    tempRubric.setName(rubricName);
    var tempRubricSheet = SpreadsheetApp.open(tempRubric);
    
    var tempSheet = tempRubricSheet.getSheetByName('Instructional Designer');
    var tempRange = tempSheet.getRange(67, 1, 35);
    tempSheet.hideRows(6, 61);
    tempSheet.unhideRow(tempRange);
    
    tempSheet = tempRubricSheet.getSheetByName('Faculty');
    tempRange = tempSheet.getRange(67, 1, 35);
    tempSheet.hideRows(6, 61);
    tempSheet.unhideRow(tempRange);
    
    tempSheet = tempRubricSheet.getSheetByName('Reviewer');
    tempRange = tempSheet.getRange(67, 1, 35);
    tempSheet.hideRows(6, 61);
    tempSheet.unhideRow(tempRange);
    
    tempSheet = tempRubricSheet.getSheetByName('ACTION PLAN');
    tempRange = tempSheet.getRange(86, 1, 63);
    tempSheet.hideRows(6, 82);
    tempSheet.unhideRow(tempRange);
    
  } catch (error) {
  
    Browser.msgBox("The function \"addRubric(name)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Browser.msgBox("addRubric(name) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);    
    
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------------------------------------------------------------------
//   _  _   __  ____  __  ____  _  _    ____  _  _  ____  ____  __  ___ 
//  ( \/ ) /  \(    \(  )(  __)( \/ )  (  _ \/ )( \(  _ \(  _ \(  )/ __)
//  / \/ \(  O )) D ( )(  ) _)  )  /    )   /) \/ ( ) _ ( )   / )(( (__ 
//  \_)(_/ \__/(____/(__)(__)  (__/    (__\_)\____/(____/(__\_)(__)\___)
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Serves an HTML page that asks provides a hyperlinked list of rubrics to open/modify
 * @type function
 */
function modifyRubric() {
  
  try {
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('modRubric').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Modify existing Rubrics');
  
  } catch (error) {
  
    Browser.msgBox("The function \"modifyRubric()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("modifyRubric() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description returns an HTML parsed list of hyperlinked rubrics
 * @type function
 * @return string - an HTML formatted list of rubrics
 */
function rubricsForModifying() {

  try {
  
    var listOfFiles = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('rubricFolderKey')).getFiles();
    var tempRubric;
    var tempList = [];
    var returnList = '';
    
    while (listOfFiles.hasNext()) {
      
      tempList.push(listOfFiles.next());
           
    }

    tempList = tempList.sort(function(lhs, rhs) {
      return lhs.getName().localeCompare(rhs.getName());
    });

    for (var i = 0; i < tempList.length; i++) {
    
      returnList += '<li><a href="' + tempList[i].getUrl() + '" target="_blank">' + tempList[i].getName() + '</a></li>';
    
    }

    return returnList;
    
  } catch (error) {

    Browser.msgBox("The function \"rubricsForModifying()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("rubricsForModifying() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//   ____  ____  __    ____  ____  ____    ____  _  _  ____  ____  __  ___ 
//  (    \(  __)(  )  (  __)(_  _)(  __)  (  _ \/ )( \(  _ \(  _ \(  )/ __)
//   ) D ( ) _) / (_/\ ) _)   )(   ) _)    )   /) \/ ( ) _ ( )   / )(( (__ 
//  (____/(____)\____/(____) (__) (____)  (__\_)\____/(____/(__\_)(__)\___)
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Serves an HTML page that asks provides a hyperlinked list of rubrics to open/modify
 * @type function
 */
function deleteRubric() {
  
   try {
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('delRubric').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Delete a Rubric');
  
  } catch (error) {
  
    Browser.msgBox("The function \"deleteRubric()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("deleteRubric() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Gets a list of all Rubrics associated with this Dashboard
 * @type function
 * @return {string} rubricsListHTML: An HTML formatted list of all Rubrics associated with this Dashboard
 */
function getRubricsForDropDown() {

  try {
  
   var rubricsList = [];
   var tempRubricIterator = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('rubricFolderKey')).getFiles();
   var rubricsListHTML = '';
    
   
   while (tempRubricIterator.hasNext()) {
     rubricsList.push(tempRubricIterator.next());
   }
    
   rubricsList = rubricsList.sort();
 
   for (var i = 0; i < rubricsList.length; i++) {
  
     rubricsListHTML += "<option value='" + rubricsList[i].getId() + "'>" + rubricsList[i].getName() + "</option>\\n";
    
   }
    
   return rubricsListHTML;
  
  } catch (error) {
    
    Browser.msgBox("The function \"getRubricsForDropDown()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getRubricsForDropDown() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
    
  }
}


/**
 * @description Deletes the rubric with the given name
 * @param {string} rubricID: The ID of the Rubric to delete
 * @type function
 */
function deleteRubricHandler(rubricID) {

try {
        
    var tempRubricFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('rubricFolderKey'));
    var rubricToDelete = DriveApp.getFileById(rubricID);
    tempRubricFolder.removeFile(rubricToDelete);
    
  } catch (error) {
  
    Browser.msgBox("The function \"deleteRubricSheet(rubricID)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Browser.msgBox("deleteRubricSheet(rubricID) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);    
    
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//   _  _  __  ____  ____  __     ____  _  _  ____  __  ____  __   __   __    ____ 
//  / )( \(  )(    \(  __)/  \   (_  _)/ )( \(_  _)/  \(  _ \(  ) / _\ (  )  / ___)
//  \ \/ / )(  ) D ( ) _)(  O )    )(  ) \/ (  )( (  O ))   / )( /    \/ (_/\\___ \
//   \__/ (__)(____/(____)\__/    (__) \____/ (__) \__/(__\_)(__)\_/\_/\____/(____/
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Serves an HTML page that asks provides a hyperlinked list of video tutorials to open/modify
 * @type function
 */
function videoTutorials() {
  
  try {
    
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('tutorials').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Video Tutorials');
  
  } catch (error) {
  
    Browser.msgBox("The function \"videoTutorials()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("videoTutorials() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}



/**
 * @description Pops up the video tutorial introduction
 * @type function
 */
function VTVideoTutorial() {
  
  try {
  
    var app = UiApp.createApplication().setTitle("OSCQR: About this software");
    var html = HtmlService.createHtmlOutputFromFile('videoTutorial').setHeight(400).setWidth(600).setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Getting Started with the Dashboard');
    
  } catch (error) {
  
    Browser.msgBox("The function \"VTVideoTutorial()\" did not run. Please contact technical support.");
    Logger.log("VTVideoTutorial() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);
    
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




//--------------------------------------------------------------------------------------------------------------------------------------------
//  __  ____  ____  __  __   __ _  ____ 
// /  \(  _ \(_  _)(  )/  \ (  ( \/ ___)
//(  O )) __/  )(   )((  O )/    /\___ \
// \__/(__)   (__) (__)\__/ \_)__)(____/
// 
//--------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Will call options.html and open the modal dialogue for setting options
 * @type function
 */
function optionMenu() {
  
  try {
  
    var ui = SpreadsheetApp.getUi();
    var html = HtmlService.createTemplateFromFile('options').evaluate().setHeight(500).setWidth(600);
    SpreadsheetApp.getUi().showModalDialog(html, 'OSCQR: Options');
  
  } catch (error) {
  
    Browser.msgBox("The function \"optionMenu()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("optionMenu() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);        
    
  }
}




/**
 * @description Will call options.html and open the modal dialogue for setting options
 * @param {string} gatherData: Value of the gatherData trigger (YES/NO)
 * @param {string} updatePercentages: Value of updatePercentages trigger (YES/NO)
 * @type function
 */
function optionMenuHandler(gatherData, updatePercentages, debug) {
  
  try {
  
    // ------------------------------------------------------------- Handle the 'getDesignData' trigger - 
    //  1. Destroy all triggers that retrieve data
    //  2. If desired, install the triggers
    
    destroyTrigger('getDesignData');
    destroyTrigger('getAccessibilityData');
    
    if (gatherData.equals('ON')) {
    
      installDataTrigger();
      
    }
    
    
    // ------------------------------------------------------------- Handle the 'updatePercentages' trigger - 
    //  1. Destroy all 'updatePercentages' triggers
    //  2. If desired, install the 'updatePercentages' trigger
    
    destroyTrigger('updatePercentages');
    
    if (updatePercentages.equals('ON')) {
      
      installPercentageTrigger();
      
    }    


    // ------------------------------------------------------------- Handle the 'debug' Script Property - 
    //  1. Toggle 'debug' Script Property
    
    Logger.log('debug = ' + debug);
    
    if (debug == 'ON') {
      PropertiesService.getScriptProperties().setProperty('debug', 'true');
    } else {
      PropertiesService.getScriptProperties().setProperty('debug', 'false');
    }
    
    generateMenu();


    // ------------------------------------------------------------- Future options go here 
    
    
    
    
  } catch (error) {

    Browser.msgBox("The function \"optionMenuHandler()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("optionMenuHandler() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);        
    
  } 
}




/**
 * @description Checks to see if specified trigger exists
 * @param {string} triggerName: Name of the trigger to look for
 * @type function
 * @return {string} YES or NO value (corresponding to existence of trigger)
 */
function checkTrigger(triggerName) {
  
  try {
    
    // Loop over all triggers
    
    var allTriggers = ScriptApp.getProjectTriggers();
    
    for (var i = 0; i < allTriggers.length; i++) {
    
      // If the current trigger is what we are looking for, return 'ON'
      if (allTriggers[i].getHandlerFunction().equals(triggerName)) {
        
        return 'ON';
      
      }
    }
    
    // Otherwise, return 'OFF'
    return 'OFF';
  
    } catch (error) {

      Browser.msgBox("The function \"checkTrigger()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
      Logger.log("checkTrigger() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);        
    
  }
}




/**
 * @description Installs a trigger to update the percentages whenever the Dashboard is opened (per user)
 * @type function
 */
function installPercentageTrigger() {

  try {
  
   // Get the current Spreadsheet
    var ss = SpreadsheetApp.getActive();    
    
    // Create a trigger to call updatePercentages() every time the Spreadsheet is opened
    ScriptApp.newTrigger('updatePercentages')
      .forSpreadsheet(ss)
      .onOpen()
      .create();
      
  } catch (error) {

    Browser.msgBox("The function \"installPercentageTrigger()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("installPercentageTrigger() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);        
    
  }
}




/**
 * @description Installs a trigger to update all data every morning at 6AM (per user)
 * @type function
 */
function installDataTrigger() {

  try {

   // Create a trigger to call getDesignData() every day between 6am and 7am
    ScriptApp.newTrigger('getDesignData')
      .timeBased()
      .atHour(2)
      .everyDays(1)
      .create();
    
    ScriptApp.newTrigger('getAccessibilityData')
      .timeBased()
      .atHour(2)
      .everyDays(1)
      .create();
            
  } catch (error) {

    Browser.msgBox("The function \"installDataTrigger()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("installDataTrigger() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);        
    
  }
}




/**
 * @description Destroys all instances of a trigger with the specified name
 * @param {string} triggerName: Name of the trigger to eliminate
 * @type function
 */
function destroyTrigger(triggerName) {

  // Loop over all triggers.
  var allTriggers = ScriptApp.getProjectTriggers();
  
  for (var i = 0; i < allTriggers.length; i++) {
    
    // If the current trigger is the correct one, delete it.
    if (allTriggers[i].getHandlerFunction().equals(triggerName)) {
      ScriptApp.deleteTrigger(allTriggers[i]);
    }
    
  } 
}




// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//     __   __ _   __   _  _  __   ____  __  ___  ____        __    ___  ___  ____  ____  ____  __  ____  __  __    __  ____  _  _ 
//    / _\ (  ( \ / _\ ( \/ )(  ) (_  _)(  )/ __)/ ___) ___  / _\  / __)/ __)(  __)/ ___)/ ___)(  )(  _ \(  )(  )  (  )(_  _)( \/ )
//   /    \/    //    \ )  / / (_/\ )(   )(( (__ \___ \(___)/    \( (__( (__  ) _) \___ \\___ \ )(  ) _ ( )( / (_/\ )(   )(   )  / 
//   \_/\_/\_)__)\_/\_/(__/  \____/(__) (__)\___)(____/     \_/\_/ \___)\___)(____)(____/(____/(__)(____/(__)\____/(__) (__) (__/  
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Resets Accessibility Analytics sheet, gathers data, and counts up values for each standard
 * @type function
 */
function getAccessibilityData() {
  
  try {
 
    resetAccessibilitySheet();
    gatherAccessibilityMetrics();
    analyzeAccessibilityMetrics();
  
  } catch (error) {
  
    Browser.msgBox("The function \"getAccessibilityData()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("getAccessibilityData() has failed: " + error + " - Line " + error.lineNumber);  
  
  }
}




/**
 * @description Graphs the Accessibility Analytics by calling graphAccessibilityMetrics()
 * @type function
 */
function getAccessibilityGraphs() {
  
  try {
    
    graphAccessibilityMetrics();
    
  } catch (error) {
  
    Browser.msgBox("The function \"getAccessibilityGraphs()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("getAccessibilityGraphs() has failed: " + error + " - Line " + error.lineNumber);  
    
  }
}




/**
 * @description Creates a copy of 'leftColumn-ACC' and calls it 'ACCESSIBILITY' - this is where the Accessibility data will be stored
 * @type function
 */
function resetAccessibilitySheet() {

  try {
    
    var ss = SpreadsheetApp.getActive();
    var sheets = ss.getSheets();
    
      for (var i = 0; i < sheets.length; i++) {
        if (sheets[i].getName() == "ACCESSIBILITY") {
          ss.deleteSheet(sheets[i]);  
        }
      }
    
    ss.getSheetByName('leftColumn-ACC').copyTo(SpreadsheetApp.openById(ss.getId())).setName('ACCESSIBILITY').hideSheet();
    
  } catch (error) {
      
    Browser.msgBox("The function \"resetAccessibilitySheet()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("resetAccessibilitySheet() has failed: " + error + " - Line " + error.lineNumber);
      
  }
}




/**
 * @description Guarantees the existence a sheet with the name 'sheetName' and preps it for use
 * @param {string} sheetName: The name of the sheet to prep
 * @type function
 */
function prepAnalyticsSheet(sheetName) {
  
  try {
  
    var ss = SpreadsheetApp.getActive();
    var sheets = ss.getSheets();
    
    // If the sheet exists, delete it
    for (var i = 0; i < sheets.length; i++) {
      if (sheetName === sheets[i].getName()) {
        ss.deleteSheet(sheets[i]);
      }
    }
    
    // Create the sheet
    var sheet = ss.insertSheet(sheetName,ss.getSheets().length);
    
    // Delete extra columns    
    sheet.deleteColumns(5, sheet.getMaxColumns() - 5);
    
    // Set background to black
    sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).setBackground('black');
    
    // Set row height for title row
    sheet.setRowHeight(1, 50);
    
    // Adjust the title
    sheet.getRange(1, 1, 1, sheet.getMaxColumns())
      .mergeAcross()
      .setFontColor('white')
      .setFontSize(20)
      .setValue(sheetName)
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle')
      .setFontWeight('bold');
        
  } catch (error) {
  
      Browser.msgBox("The function \"prepAnalyticsSheet(" + sheet.getName() + ")\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
      Logger.log("prepAnalyticsSheet(" + sheet.getName() + ") has failed: " + error + " - Line " + error.lineNumber);

  }
}




/**
 * @description Grabs the Accessibility analytics from each of the rubrics in the Dashboard
 * @type function
 */
function gatherAccessibilityMetrics() {

  try {
  
    // Populate "keys" with the IDs from all the courses in ACTIVE
    var keys = [];
    if (ACTIVE.getLastRow() > 1) {
      keys = ACTIVE.getRange(2,6,ACTIVE.getLastRow(),1).getValues();
    }
    
    // Populate "archived" with the IDs from all the courses in ARCHIVED
    var archived = [];
    if (ARCHIVED.getLastRow() > 1) {
      archived = ARCHIVED.getRange(2,6,ARCHIVED.getLastRow(),1).getValues();
    }
    
    // Add the IDs from "archived" into "keys"
    keys = keys.concat(archived);
      
    // Sanitize "keys" to remove any blank entries
    for (var j = 0; j < keys.length; j++) {
      if (keys[j].toString().equals('')) {
        keys.splice(j, 1);
        j--;      
      }
    }
    
    // Grab the sheet "ACCESSIBILITY"
    var accSheet = SpreadsheetApp.getActive().getSheetByName('ACCESSIBILITY');
    
    // Walk through the "keys" array, grab all the metrics for each standard
    for (var i = 0; i < keys.length; i++) {
       
      // Get the Spreadsheet ID from current row, open the Spreadsheet, grab accessibility metrics from "CONFIG" tab
      var tempRange = SpreadsheetApp.openById(keys[i]).getRange('CONFIG!C147:C207').getValues();
       
      // Set the column header to be the name of the course (note that the name is the last element in the array)
      accSheet.getRange(1, i+9).setValue(tempRange[tempRange.length-1]);
       
      // Use prepArray() to strip out data not needed for metrics
      var preppedMetricsArray = prepArray(tempRange);
      
      // Put data from the prepped array and put it into the current column
      var rangeToPutData = accSheet.getRange(2,i+9, preppedMetricsArray.length, 1);
      rangeToPutData.setValues(preppedMetricsArray);
      
    }
    
    // HOUSEKEEPING - Format the headers
    for (var i = 4; i <= accSheet.getMaxColumns(); i++) {
      accSheet.setColumnWidth(i, 32);
    }
  
  } catch (error) {
    
    Browser.msgBox("The function \"gatherAccessibilityMetrics()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("gatherAccessibilityMetrics() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Slices the array so it can be brought into the ACCESSIBILITY sheet
 * @type function
 */
function prepArray(tempRange) {

  try {
    
    // Copy values from the passed in parameter into an array
    var tempArray = tempRange;
    
    // Splice out the non-pertinent cells
    tempArray.splice(46,1);
    tempArray.splice(43,1);
    tempArray.splice(36,1);
    tempArray.splice(31,1);
    tempArray.splice(21,1);
    tempArray.splice(17,1);
    tempArray.splice(13,1);
    tempArray.splice(9,1);
    tempArray.splice(3,1);
    tempArray.splice(0,1);
    
    // Splice out the last cell, which is the name
    tempArray.splice(tempArray.length-1, 1);
    
    // Return the array (all cleaned up!)
    return tempArray;
    
  } catch (error) {
    
    Browser.msgBox("The function \"prepArray()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("prepArray() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Scrubs through data from each rubric and totals up the marks for each standard
 * @type function
 */
function analyzeAccessibilityMetrics() {

  try {
    
    // Get the 'ACCESSIBILITY' sheet
    var sheet = SpreadsheetApp.getActive().getSheetByName('ACCESSIBILITY');
    
    // Set the number of standards (default is 50 -> 37 from Open SUNY, plus 13 more customizeable)
    var numOfAccessibilityStandards = 50;
    
    // Figure out how many courses there are by counting the number of columns in the sheet and subtracting 8
    var numOfCourses = sheet.getMaxColumns() - 8;
    
    // Put the number of courses into cell A53 for subtraction purposes (NA + NR)
    sheet.getRange('A53').setValue(numOfCourses);
    
    //Walk through each row and compute the average for each row by calling coputeAverage()
    for (var i = 2; i < numOfAccessibilityStandards+2; i++) {
      
      sheet.getRange(i,3,1,1).setValue(getCount('SP', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,4,1,1).setValue(getCount('MI', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,5,1,1).setValue(getCount('MO', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,6,1,1).setValue(getCount('MA', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,7,1,1).setValue(getCount('NA', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,8,1,1).setValue(getCount('NR', sheet.getRange(i,9,1,numOfCourses).getValues()));
      
    }
    
    // Update date of last data pull
    PropertiesService.getScriptProperties().setProperty('lastAccessibilityPull', getDayDate())
    
    // generateMenu() because it will show the new date of the pull
    generateMenu();

  } catch (error) {
    
    Browser.msgBox("The function \"analyzeAccessibilityMetrics()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("analyzeAccessibilityMetrics() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Tallies up each ranking for each standard
 * @param {string} category: The category/ranking (SP, MI, MO, MA, NA, NR)
 * @param {range} tempRange: The range of values to scrub through
 * @return {number} count: The number of times the given value exists in the range
 * @type function
 */
function getCount(category, tempRange) {

  try {
  
    var count = 0;
    
    for (var i = 0; i < tempRange[0].length; i++) {
      if (tempRange[0][i] == category) {
        count++;
      }
    }
    
    return count;
  
  } catch (error) {

    Browser.msgBox("The function \"getCount(" + category + ", " + range + ")\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getCount(" + category + ", " + range + ") terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Gets the current month and day
 * @return {string} The current date in MM/DD form
 * @type function
 */
function getDayDate() {

  try {
  
    var d = new Date();
    var currentYear = d.getYear();
    var currentMonth = d.getMonth()+1;
    var currentDate = d.getDate();
   
    
    return (currentMonth + "/" + currentDate);
    
  } catch (error) {
    
    Browser.msgBox("The function \"getDayDate()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getDayDate() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
  
  } 
}




/**
 * @description Gets the 'lastAccessibilityPull' from the Script Properties
 * @return {string} The date of the last Accessibility Analytics data pull
 * @type function
 */
function getLastAccessibilityDate() {
  
  try {
  
    return PropertiesService.getScriptProperties().getProperty('lastAccessibilityPull');
  
  } catch (error) {

    Browser.msgBox("The function \"getLastAccessibilityDate()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getLastAccessibilityDate() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
    
  }
}




/**
 * @description Stages the Accessibility Analytics and calls 'drawAccessibilityGraph' for each graph
 * @type function
 */
function graphAccessibilityMetrics() {

  try {
  
    prepAnalyticsSheet('Analytics - Accessibility');  
      
    var ss = SpreadsheetApp.getActive();
    var sheet = ss.getSheetByName('Analytics - Accessibility');
    
    sheet.setColumnWidth(5, 750);
    sheet.deleteRows(200, sheet.getMaxRows()-200)
    sheet.setColumnWidth(1, 10);
    sheet.setColumnWidth(2, 10);
    sheet.setColumnWidth(3, 10);    
    sheet.setColumnWidth(4, 10);
    
    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B53:G55', 5, "1. Courses should follow a simple and consistent design.");  
    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B57:G62', 23, "2. Courses should be designed for ease of use.");
    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B64:G67', 41, "3. The course menu should be organized and up-to-date.");
    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B69:G72', 59, "4. Overview information about the layout and functionality of the course should be available.");
    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B74:G77', 77, "5. The color scheme for the course should be simple and carefully chosen.");
    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B79:G88', 95, "6. Text content should ensure readability.");
    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B90:G94', 113, "7. A text equivalent for every non-text element should be provided.");
    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B96:G102', 131, "8. PowerPoint presentations should be accessible to all learners.");
    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B104:G106', 149, "9. When a timed response is required, there should be a means for requesting additional time.");  
//    drawAccessibilityGraph(sheet, 'ACCESSIBILITY!B108:G121', 157, "10. CAMPUS STANDARDS");  

  } catch (error) {

    Browser.msgBox("The function \"graphAccessibilityMetrics()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("graphAccessibilityMetrics() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  

  }
}




/**
 * @description Graphs the Accessibility Analytics
 * @param {sheet} sheet: The sheet where the graph should go
 * @param {string} data: The sheet and range from where the graph data will be pulled
 * @param {number} location: The row the graph will start on
 * @param {string} title: The title of the graph 
 * @type function
 */
function drawAccessibilityGraph(sheet, data, location, title) {
  
  try {

    var numberOfCourses = SpreadsheetApp.getActive().getSheetByName('ACCESSIBILITY').getRange('A53').getValue();
    var colNumber = 5;
    var range = sheet.getRange(data);
    var chartBuilder = sheet.newChart();
    
    chartBuilder.addRange(range)
      .asBarChart()
      .setStacked()
      .setLegendPosition(Charts.Position.BOTTOM)
      .setPosition(location, colNumber, 0, 0)
      .setOption('width', 700)
      .setOption("title", title)
      .setOption(
        "titleTextStyle", {
           "color": "black",
           "fontSize": 20,
        })
      .setOption('vAxis.title', 'Standards')
      .setOption('hAxis.maxValue', numberOfCourses)

     sheet.insertChart(chartBuilder.build());
    
  } catch (error) {

    Browser.msgBox("The function \"drawAccessibilityGraph(sheet, data, title, location)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("drawAccessibilityGraph(sheet, data, title, location) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);        
    
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//    __   __ _   __   __    _  _  ____  __  ___  ____           ____  ____  ____  __  ___  __ _ 
//   / _\ (  ( \ / _\ (  )  ( \/ )(_  _)(  )/ __)/ ___)   ___   (    \(  __)/ ___)(  )/ __)(  ( \
//  /    \/    //    \/ (_/\ )  /   )(   )(( (__ \___ \  (___)   ) D ( ) _) \___ \ )(( (_ \/    /
//  \_/\_/\_)__)\_/\_/\____/(__/   (__) (__)\___)(____/         (____/(____)(____/(__)\___/\_)__)
//
// --------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @description Manages the Design analytics - the data collection, not the graphing
 * @type function
 */
function getDesignData() {
  
  try {
 
    resetDesignSheet();
    gatherDesignMetrics();
    analyzeDesignMetrics();
  
  } catch (error) {
  
    Browser.msgBox("The function \"getDesignData()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("getDesignData() has failed: " + error + " - Line " + error.lineNumber);  
  
  }
}




/**
 * @description Graphs the Data Analytics by calling graphDataMetrics()
 * @type function
 */
function getDesignGraphs() {
  
  try {
    
    graphDesignMetrics();
    
  } catch (error) {
  
    Browser.msgBox("The function \"getDesignGraphs()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("getDesignGraphs() has failed: " + error + " - Line " + error.lineNumber);  
    
  }
}




/**
 * @description Creates a copy of 'leftColumn-DES' and calls it 'DESIGN' - this is where the Design data will be stored
 * @type function
 */
function resetDesignSheet() {

  try {
    
    var ss = SpreadsheetApp.getActive();
    var sheets = ss.getSheets();
    
      for (var i = 0; i < sheets.length; i++) {
        if (sheets[i].getName() == "DESIGN") {
          ss.deleteSheet(sheets[i]);  
        }
      }
    
    ss.getSheetByName('leftColumn-DES').copyTo(SpreadsheetApp.openById(ss.getId())).setName('DESIGN').hideSheet();
    
  } catch (error) {
      
    Browser.msgBox("The function \"resetDesignSheet()\" did not run. Please contact technical support.\\nError Code " + error.lineNumber + ": " + error);
    Logger.log("resetDesignSheet() has failed: " + error + " - Line " + error.lineNumber);
      
  }
}




/**
 * @description Grabs the Design analytics from each of the rubrics in the Dashboard
 * @type function
 */
function gatherDesignMetrics() {

  try {
  
    // Populate "keys" with the IDs from all the courses in ACTIVE
    var keys = [];
    if (ACTIVE.getLastRow() > 1) {
      keys = ACTIVE.getRange(2,6,ACTIVE.getLastRow(),1).getValues();
    }
    
    // Populate "archived" with the IDs from all the courses in ARCHIVED
    var archived = [];
    if (ARCHIVED.getLastRow() > 1) {
      archived = ARCHIVED.getRange(2,6,ARCHIVED.getLastRow(),1).getValues();
    }
    
    // Add the IDs from "archived" into "keys"
    keys = keys.concat(archived);
      
    // Sanitize "keys" to remove any blank entries
    for (var j = 0; j < keys.length; j++) {
      if (keys[j].toString().equals('')) {
        keys.splice(j, 1);
        j--;      
      }
    }
    
    // Grab the sheet "DESIGN"
    var desSheet = SpreadsheetApp.getActive().getSheetByName('DESIGN');
    
    // Walk through the "keys" array, grab all the metrics for each standard
    for (var i = 0; i < keys.length; i++) {
       
      // Get the Spreadsheet ID from current row, open the Spreadsheet, grab accessibility metrics from "CONFIG" tab
      var tempRange = SpreadsheetApp.openById(keys[i]).getRange('CONFIG!I126:I327').getValues();
       
      // Set the column header to be the name of the course (note that the name is the last element in the array)
      desSheet.getRange(1, i+9).setValue(tempRange[tempRange.length-1]);
             
      // Put data from the tempRange array and put it into the current column
      tempRange.splice(tempRange.length-1,1);
      var rangeToPutData = desSheet.getRange(2,i+9, tempRange.length, 1);
      rangeToPutData.setValues(tempRange);
     
    }
      
    // HOUSEKEEPING - Format the headers
    for (var i = 4; i <= desSheet.getMaxColumns(); i++) {
        desSheet.setColumnWidth(i, 32);
      }
  
  } catch (error) {
    
    Browser.msgBox("The function \"gatherDesignMetrics()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("gatherDesignMetrics() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Scrubs through data from each rubric and totals up the marks for each standard
 * @type function
 */
function analyzeDesignMetrics() {

  try {
    
    // Get the 'DESIGN' sheet
    var sheet = SpreadsheetApp.getActive().getSheetByName('DESIGN');
    
    // Set the number of design standards (default is 67 -> 37 from Open SUNY, plus 30 more customizeable)
    var numOfDesignStandards = 67;
    
    // Figure out how many courses there are by counting the number of columns in the sheet and subtracting 8
    var numOfCourses = sheet.getMaxColumns() - 8;
    
    // Put the number of courses (and multiply by 3 because there are 3 reviewers) into cell A53 for subtraction purposes (NA + NR)
    sheet.getRange('A204').setValue(numOfCourses*3);
    
    //Walk through each row and compute the average for each row by calling coputeAverage()
    for (var i = 2; i < 3*numOfDesignStandards+2; i++) {
      
      sheet.getRange(i,3,1,1).setValue(getCount('SP', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,4,1,1).setValue(getCount('MI', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,5,1,1).setValue(getCount('MO', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,6,1,1).setValue(getCount('MA', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,7,1,1).setValue(getCount('NA', sheet.getRange(i,9,1,numOfCourses).getValues()));
      sheet.getRange(i,8,1,1).setValue(getCount('NR', sheet.getRange(i,9,1,numOfCourses).getValues()));
      
    }
    
    // Update date of last data pull
    PropertiesService.getScriptProperties().setProperty('lastDesignPull', getDayDate())
    
    // generateMenu() because it will show the new date of the pull
    generateMenu();

  } catch (error) {
    
    Browser.msgBox("The function \"analyzeDesignMetrics()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("analyzeDesignMetrics() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);      
  
  }
}




/**
 * @description Gets the 'lastDesignPull' from the Script Properties
 * @return {string} The date of the last Design Analytics data pull
 * @type function
 */
function getLastDesignDate() {

  try {
  
    return PropertiesService.getScriptProperties().getProperty('lastDesignPull');
    
  } catch (error) {

    Browser.msgBox("The function \"getLastDesignDate()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("getLastDesignDate() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  
    
  }
}




/**
 * @description Stages the Design Analytics and calls 'drawDesignGraph' for each graph
 * @type function
 */
function graphDesignMetrics() {

  try {
  
    prepAnalyticsSheet('Analytics - Design');  
      
    var ss = SpreadsheetApp.getActive();
    var sheet = ss.getSheetByName('Analytics - Design');
    
    sheet.setColumnWidth(5, 750);
    sheet.deleteRows(100, sheet.getMaxRows()-100)
    sheet.setColumnWidth(1, 10);
    sheet.setColumnWidth(2, 10);
    sheet.setColumnWidth(3, 10);    
    sheet.setColumnWidth(4, 10);
    
    drawDesignGraphHeight(sheet, 850, 'DESIGN!B204:G227', 5, "Content & Presentation");    
    drawDesignGraph(sheet, 'DESIGN!B229:G237', 46, "Interaction & Collaboration");
    drawDesignGraph(sheet, 'DESIGN!B239:G245', 64, "Evaluation & Assessment");

  } catch (error) {

    Browser.msgBox("The function \"graphDesignMetrics()\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("graphDesignMetrics() terminated unexpectedly:   " + error + " - Line " + error.lineNumber);  

  }
}




/**
 * @description Graphs the Design Analytics
 * @param {sheet} sheet: The sheet where the graph should go
 * @param {string} data: The sheet and range from where the graph data will be pulled
 * @param {number} location: The row the graph will start on
 * @param {string} title: The title of the graph 
 * @type function
 */
function drawDesignGraph(sheet, data, location, title) {
  
  try {

    var numberOfCourses = SpreadsheetApp.getActive().getSheetByName('DESIGN').getRange('A204').getValue();
    var colNumber = 5;
    var range = sheet.getRange(data);
    var chartBuilder = sheet.newChart();
    
    chartBuilder.addRange(range)
      .asBarChart()
      .setStacked()
      .setLegendPosition(Charts.Position.BOTTOM)
      .setPosition(location, colNumber, 0, 0)
      .setOption('width', 700)
      .setOption("title", title)
      .setOption(
        "titleTextStyle", {
           "color": "black",
           "fontSize": 20,
        })
      .setOption('vAxis.title', 'Standards')
      .setOption('hAxis.maxValue', numberOfCourses)

     sheet.insertChart(chartBuilder.build());
    
  } catch (error) {

    Browser.msgBox("The function \"drawDesignGraph(sheet, data, title, location)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("drawDesignGraph(sheet, data, title, location) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);        
    
  }
}




/**
 * @description Graphs the Design Analytics (with the added parameter of the height)
 * @param {sheet} sheet: The sheet where the graph should go
 * @param {number} height: The height of the graph
 * @param {string} data: The sheet and range from where the graph data will be pulled
 * @param {number} location: The row the graph will start on
 * @param {string} title: The title of the graph 
 * @type function
 */
function drawDesignGraphHeight(sheet, height, data, location, title) {

  try {

    var numberOfCourses = SpreadsheetApp.getActive().getSheetByName('DESIGN').getRange('A204').getValue();
    var colNumber = 5;
    var range = sheet.getRange(data);
    var chartBuilder = sheet.newChart();
    
    chartBuilder.addRange(range)
      .asBarChart()
      .setStacked()
      .setLegendPosition(Charts.Position.BOTTOM)
      .setPosition(location, colNumber, 0, 0)
      .setOption('width', 700)
      .setOption('height', height)
      .setOption("title", title)
      .setOption(
        "titleTextStyle", {
           "color": "black",
           "fontSize": 20,
        })
      .setOption('vAxis.title', 'Standards')
      .setOption('hAxis.maxValue', numberOfCourses)

     sheet.insertChart(chartBuilder.build());
    
  } catch (error) {

    Browser.msgBox("The function \"drawDesignGraphHeight(sheet, height, data, title, location)\" did not run. Please contact technical support.\\n\\n" + error.lineNumber + " " + error);
    Logger.log("drawDesignGraphHeight(sheet, height, data, title, location) terminated unexpectedly:   " + error + " - Line " + error.lineNumber);        
    
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------




// --------------------------------------------------------------------------------------------------------------------------------------------
//   _  _  ____  __ _  _  _ 
//  ( \/ )(  __)(  ( \/ )( \
//  / \/ \ ) _) /    /) \/ (
//  \_)(_/(____)\_)__)\____/
//
// --------------------------------------------------------------------------------------------------------------------------------------------

function generateMenu() {
  if (debug()) {
    if (getConfig()) {
      // This menu for users who have DEBUG and CONFIGURED    
      SpreadsheetApp.getUi()
        .createMenu('OSCQR')
        .addSubMenu(SpreadsheetApp.getUi().createMenu('DEBUGGING')
          .addItem('Clear and Format', 'clearAndFormat')
          .addItem('Configure the Dashboard', 'configure')
          .addItem('Copy remarks to rubrics', 'copySheetRemarksToRubric')          
          .addItem('Fill Sheet', 'fillSheet')
          .addItem('Format as Table', 'formatTable')
          .addItem('Generate Header', 'generateHeader')
          .addItem('Generate Menu', 'generateMenu')
          .addItem('Get Properties', 'getProperties')
          .addItem('Hard Pull of Data', 'hardPullOfData')
          .addItem('onOpen', 'onOpen')
          .addItem('Refresh file list', 'reconstructTree')
          .addItem('RESET ALL', 'resetALL')
          .addItem('Reset Configuration', 'resetConfig')
          .addItem('Test Function', 'testMe')
          .addItem('Update Status', 'updateStatus')
          .addSeparator()
          .addItem('Turn DEBUG off', 'turnDebugOff'))
        .addItem('Add a course', 'addCourse')
        .addSeparator()    
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Dashboard')
          .addItem('Add a course', 'addCourse')
          .addItem('Delete a course', 'deleteCourse')
          .addItem('Modify properties for a specific course', 'modifyCourse')
          .addSeparator()          
          .addItem('Update percentages/comments for all courses ', 'updateAllInformation')
          .addItem('Refresh file list', 'reconstructTree'))
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Archiving')
          .addItem('Archive a course', 'archiveCourse')
          .addItem('Restore an archived course', 'restoreArchive'))
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Analytics')
          .addItem('Update Design Analytics - ' + getLastDesignDate(), 'getDesignData')
          .addItem('Graph Design Analytics', 'getDesignGraphs')
          .addSeparator()
          .addItem('Update Accessibility Analytics - ' + getLastAccessibilityDate(), 'getAccessibilityData')
          .addItem('Graph Accessibility Analytics', 'getAccessibilityGraphs'))
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Rubric')
          .addItem('Create new rubric', 'createNewRubric')
          .addItem('Delete a rubric', 'deleteRubric')
          .addItem('Modify a rubric', 'modifyRubric'))
        .addSeparator()
        .addItem('Video Tutorials', 'videoTutorials')        
        .addSeparator()
        .addItem('Options', 'optionMenu')        
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Help')
          .addItem('About', 'about')
          .addItem('Video Tutorials', 'videoTutorials'))        
        .addToUi();
    } else {
      // This menu is for users who have have DEBUG but have NOT CONFIGURED
       SpreadsheetApp.getUi().createMenu('OSCQR')
        .addItem('Configure', 'configure')
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Help')
          .addItem('About', 'about')
          .addItem('Turn DEBUG off', 'turnDebugOff'))
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Debugging Normal Functions')
          .addItem('Add a course', 'addCourse')
          .addItem('Delete a course', 'deleteCourse')
          .addItem('Modify properties for a specific course', 'modifyCourse')          
          .addItem('Update status for all courses ', 'updateAllInformation')
          .addItem('Refresh data for all courses', 'reconstructTree')
          .addItem('Copy remarks to rubrics', 'copySheetRemarksToRubric')          
          .addSeparator()
          .addItem('Archive a course', 'archiveCourse')
          .addItem('Restore an archived course', 'restoreArchive')
          .addSeparator()
          .addItem('Update analytics', 'graphData')
          .addSeparator()
          .addItem('Video Tutorials', 'videoTutorials')
          .addSeparator()
          .addItem('About', 'about')
          .addSeparator()
          .addItem('Turn DEBUG off', 'turnDebugOff'))
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Debugging Diagnostic Functions')
          .addItem('Clear and Format', 'clearAndFormat')
          .addItem('Configure', 'configure')
          .addItem('Copy remarks to rubrics', 'copySheetRemarksToRubric')    
          .addItem('Fill Sheet', 'fillSheet')
          .addItem('Format as Table', 'formatTable')
          .addItem('Generate Header', 'generateHeader')
          .addItem('Generate Menu', 'generateMenu')
          .addItem('Get Properties', 'getProperties')
          .addItem('Hard Pull of Data', 'hardPullOfData')
//          .addItem('List Actives', 'listActiveCourses')
          .addItem('onOpen', 'onOpen')
          .addItem('Refresh file list', 'reconstructTree')
          .addItem('RESET ALL', 'resetALL')          
          .addItem('Reset Configuration', 'resetConfig')
          .addItem('Test Function', 'testMe')
          .addItem('Update Status', 'updateStatus')
          .addSeparator()
          .addItem('Turn DEBUG off', 'turnDebugOff'))
        .addToUi();
    } 
  } else {
    if (getConfig()) {
      // This menu is for users who have NO DEBUG and have CONFIGURED
      SpreadsheetApp.getUi().createMenu('OSCQR')
        .addItem('Add a course', 'addCourse')
        .addSeparator()    
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Dashboard')
          .addItem('Add a course', 'addCourse')
          .addItem('Delete a course', 'deleteCourse')
          .addItem('Modify properties for a specific course', 'modifyCourse')
          .addSeparator()          
          .addItem('Update percentages/comments for all courses ', 'updateAllInformation')
          .addItem('Refresh file list', 'reconstructTree'))
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Archiving')
          .addItem('Archive a course', 'archiveCourse')
          .addItem('Restore an archived course', 'restoreArchive'))
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Analytics')
          .addItem('Update Design Analytics - ' + getLastDesignDate(), 'getDesignData')
          .addItem('Graph Design Analytics', 'getDesignGraphs')
          .addSeparator()
          .addItem('Update Accessibility Analytics - ' + getLastAccessibilityDate(), 'getAccessibilityData')
          .addItem('Graph Accessibility Analytics', 'getAccessibilityGraphs'))
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Rubric')
          .addItem('Create new rubric', 'createNewRubric')
          .addItem('Delete a rubric', 'deleteRubric')
          .addItem('Modify a rubric', 'modifyRubric'))
        .addSeparator()
        .addItem('Options', 'optionMenu')        
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Help')
          .addItem('About', 'about')
          .addItem('Video Tutorials', 'videoTutorials'))
        .addToUi();      
    } else {
      // NO DEBUG and NO CONFIG
      SpreadsheetApp.getUi().createMenu('OSCQR')
        .addItem('Configure the Dashboard', 'configure')
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Help')
          .addItem('About OSCQR', 'about')
          .addItem('Video: Getting Started!', 'VTVideoTutorial'))
        .addToUi();
    }
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------
