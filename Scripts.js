// @link http://buzut.fr/2014/11/13/ajouter-bouton-lediteur-wysiwyg-wordpress/
// @link http://stackoverflow.com/questions/24871792/tinymce-api-v4-windowmanager-open-what-widgets-can-i-configure-for-the-body-op

( function() {
  tinymce.PluginManager.add( 'ScripturaShortcodeButtons', function( editor, url ) {

/*
  shortcodeButtons = [ 'message', 'message-info', 'message-success' ];
  titleButtons = [ 'Message', 'Message info', 'Message success' ];
  imageButtons = [ 'paperclip.svg', 'info.svg', 'checkmark.svg' ];

  for ( var i = 0; i < shortcodeButtons.length; i++ ) {

    editor.addButton( 'ScripturaButton' + i, { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtons[i],
      image: url + '/Images/' + imageButtons[i],
      onclick: function() {
        var content = [
          {
            type: 'textbox', // Type input
            name: 'content',
            label: 'Content',
            value: ''
          }
        ];
        editor.windowManager.open( { // Ouverture d'une fenêtre modale pour récupération des paramètres
          title: title,
          autoScroll: true, // @link http://stackoverflow.com/questions/24681575/tinymce-4-x-editor-windowmanager-open-autoscroll-and-overflow-issue
          classes: 'scriptura-panel', // prefix auto add : 'mce-scriptura-panel'
          body: content,
          onsubmit: function( e ) { // Action a effectuer lorsque l'utilisateur valide la modale
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_message]' + e.data.content + '[/_message]'
            );
          }
        } );
      }
    } );

  }
*/

    var titleButtons = 'Message';
    editor.addButton( 'ScripturaButton0', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtons,
      image: url + '/Images/paperclip.svg',
      onclick: function() {
        var content = [
          {
            type: 'textbox', // Type input
            name: 'content',
            label: 'Content',
            value: ''
          }
        ];
        editor.windowManager.open( { // Ouverture d'une fenêtre modale pour récupération des paramètres
          title: titleButtons,
          autoScroll: true, // @link http://stackoverflow.com/questions/24681575/tinymce-4-x-editor-windowmanager-open-autoscroll-and-overflow-issue
          classes: 'scriptura-panel', // prefix auto add : 'mce-scriptura-panel'
          body: content,
          onsubmit: function( e ) { // Action a effectuer lorsque l'utilisateur valide la modale
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_message]' + e.data.content + '[/_message]'
            );
          }
        } );
      }
    } );

    var titleButtonsInfo = 'Message Info';
    editor.addButton( 'ScripturaButton1', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsInfo,
      image: url + '/Images/info.svg',
      onclick: function() {
        var content = [
          {
            type: 'textbox', // Type input
            name: 'content',
            label: 'Content',
            value: ''
          }
        ];
        editor.windowManager.open( { // Ouverture d'une fenêtre modale pour récupération des paramètres
          title: titleButtonsInfo,
          autoScroll: true, // @link http://stackoverflow.com/questions/24681575/tinymce-4-x-editor-windowmanager-open-autoscroll-and-overflow-issue
          classes: 'scriptura-panel', // prefix auto add : 'mce-scriptura-panel'
          body: content,
          onsubmit: function( e ) { // Action a effectuer lorsque l'utilisateur valide la modale
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_message-info]' + e.data.content + '[/_message-info]'
            );
          }
        } );
      }
    } );

    var titleButtonsSuccess = 'Message Success';
    editor.addButton( 'ScripturaButton2', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsSuccess,
      image: url + '/Images/checkmark.svg',
      onclick: function() {
        var content = [
          {
            type: 'textbox', // Type input
            name: 'content',
            label: 'Content',
            value: ''
          }
        ];
        editor.windowManager.open( { // Ouverture d'une fenêtre modale pour récupération des paramètres
          title: titleButtonsSuccess,
          autoScroll: true, // @link http://stackoverflow.com/questions/24681575/tinymce-4-x-editor-windowmanager-open-autoscroll-and-overflow-issue
          classes: 'scriptura-panel', // prefix auto add : 'mce-scriptura-panel'
          body: content,
          onsubmit: function( e ) { // Action a effectuer lorsque l'utilisateur valide la modale
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_message-success]' + e.data.content + '[/_message-success]'
            );
          }
        } );
      }
    } );

    var titleButtonsError = 'Message Error';
    editor.addButton( 'ScripturaButton3', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsError,
      image: url + '/Images/mark.svg',
      onclick: function() {
        var content = [
          {
            type: 'textbox', // Type input
            name: 'content',
            label: 'Content',
            value: ''
          }
        ];
        editor.windowManager.open( { // Ouverture d'une fenêtre modale pour récupération des paramètres
          title: titleButtonsError,
          autoScroll: true, // @link http://stackoverflow.com/questions/24681575/tinymce-4-x-editor-windowmanager-open-autoscroll-and-overflow-issue
          classes: 'scriptura-panel', // prefix auto add : 'mce-scriptura-panel'
          body: content,
          onsubmit: function( e ) { // Action a effectuer lorsque l'utilisateur valide la modale
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_message-error]' + e.data.content + '[/_message-error]'
            );
          }
        } );
      }
    } );

    var titleButtonsWarning = 'Message Warning';
    editor.addButton( 'ScripturaButton4', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsWarning,
      image: url + '/Images/warning.svg',
      onclick: function() {
        var content = [
          {
            type: 'textbox', // Type input
            name: 'content',
            label: 'Content',
            value: ''
          }
        ];
        editor.windowManager.open( { // Ouverture d'une fenêtre modale pour récupération des paramètres
          title: titleButtonsWarning,
          autoScroll: true, // @link http://stackoverflow.com/questions/24681575/tinymce-4-x-editor-windowmanager-open-autoscroll-and-overflow-issue
          classes: 'scriptura-panel', // prefix auto add : 'mce-scriptura-panel'
          body: content,
          onsubmit: function( e ) { // Action a effectuer lorsque l'utilisateur valide la modale
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_message-warning]' + e.data.content + '[/_message-warning]'
            );
          }
        } );
      }
    } );

    var titleButtonsWarning = 'Tab';
    editor.addButton( 'ScripturaButton5', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsWarning,
      image: url + '/Images/tabs.svg',
      onclick: function() {
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_tabs][_div]Tab 1[/_div][_div]Content 1[/_div][_div]Tab 2[/_div][_div]Content 2[/_div][/_tabs]'
            );
      }
    } );

    var titleButtonsWarning = 'Accordion';
    editor.addButton( 'ScripturaButton6', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsWarning,
      image: url + '/Images/accordion.svg',
      onclick: function() {
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_accordion][_div]Tab 1[/_div][_div]Content 1[/_div][_div]Tab 2[/_div][_div]Content 2[/_div][/_accordion]'
            );
      }
    } );

    var titleButtonsWarning = 'Item List';
    editor.addButton( 'ScripturaButton7', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsWarning,
      image: url + '/Images/item-list.svg',
      onclick: function() {
        var content = [
          {
            type: 'textbox', // Type input
            name: 'tab',
            label: 'Tab',
            value: ''
          },
          {
            type: 'textbox', // Type input
            name: 'content',
            label: 'Content',
            value: ''
          }
        ];
        editor.windowManager.open( { // Ouverture d'une fenêtre modale pour récupération des paramètres
          title: titleButtonsWarning,
          autoScroll: true, // @link http://stackoverflow.com/questions/24681575/tinymce-4-x-editor-windowmanager-open-autoscroll-and-overflow-issue
          classes: 'scriptura-panel', // prefix auto add : 'mce-scriptura-panel'
          body: content,
          onsubmit: function( e ) { // Action a effectuer lorsque l'utilisateur valide la modale
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_div]' + e.data.tab + '[/_div][_div]' + e.data.content + '[/_div]'
            );
          }
        } );
      }
    } );

    var titleButtonsWarning = 'Columns';
    editor.addButton( 'ScripturaButton8', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsWarning,
      image: url + '/Images/columns.svg',
      onclick: function() {
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_columns][_c]Column content 1[/_c][_c]Column content 2[/_c][/_columns]'
            );
      }
    } );

    var titleButtonsWarning = 'Item Column';
    editor.addButton( 'ScripturaButton9', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsWarning,
      image: url + '/Images/item-column.svg',
      onclick: function() {
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_c][/_c]'
            );
      }
    } );

    var titleButtonsWarning = 'Table';
    editor.addButton( 'ScripturaButton10', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsWarning,
      image: url + '/Images/table.svg',
      onclick: function() {
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_table][_thead][_tr][_th]Header 1[/_th][_th]Header 2[/_th][_th]Header 3[/_th][/_tr][/_thead][_tfoot][_tr][_td]Footer 1[/_td][_td]Footer 2[/_td][_td]Footer 3[/_td][/_tr][/_tfoot][_tbody][_tr][_td data-thead="Header 1"]Content 1[/_td][_td data-thead="Header 2"]Content 2[/_td][_td data-thead="Header 3"]Content 3[/_td][/_tr][/_tbody][/_table]'
            );
      }
    } );




    var titleButtonsWarning = 'Grid Layout';
    editor.addButton( 'ScripturaButton11', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsWarning,
      image: url + '/Images/layout-grid.svg',
      onclick: function() {
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_grid][_m class="m6"]Layout content 1[/_m][_m class="m6"]Layout content 2[/_m][_m class="m6"]Layout content 3[/_m][/_grid]'
            );
      }
    } );

    var titleButtonsWarning = 'Module Layout';
    editor.addButton( 'ScripturaButton12', { // Ajoute un bouton à tinyMCE
      text: false,
      icon: false,
      title: titleButtonsWarning,
      image: url + '/Images/layout-module.svg',
      onclick: function() {
            editor.insertContent( // On insère le contenu à l'endroit du curseur
              '[_m class="m6"]Content grid[/_m]'
            );
      }
    } );




  } );
} )();

