// Function to make an element draggable and manage z-index
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var zIndex = 0; // variable to keep track of the current z-index

  if (document.getElementById(elmnt.id + "header")) {
      // If there's a header, you can handle it here
  } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;

      // Increment z-index to bring the dragged element to the top
      zIndex = parseInt(elmnt.style.zIndex) || 0;
      zIndex += 1;
      elmnt.style.zIndex = zIndex;

      // Set lower z-index for other tabs
      var allDraggableIds = [
          "tab1", "tab2", "tab3", "tab4", "tab5", 
          "tab6", "tab7", "tab8", "tab9", "tab10", 
          "tab11", "tab12", "tab13", "tab14", 
          "tab15", "tab16"
      ];

      allDraggableIds.forEach(function(id) {
          if (id !== elmnt.id) {
              var otherTab = document.getElementById(id);
              var otherZIndex = parseInt(otherTab.style.zIndex) || 0;
              otherTab.style.zIndex = Math.max(0, otherZIndex - 1);
          }
      });

      // Unmute only the video within the dragged tab
      var video = elmnt.querySelector("video");
      if (video) {
          video.muted = false;
          video.play(); // Ensure the video starts playing after being unmuted
      }
  }

  function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
  }
}

// Apply dragElement function to each draggable element
dragElement(document.getElementById("tab1"));
dragElement(document.getElementById("tab2"));
dragElement(document.getElementById("tab3"));
dragElement(document.getElementById("tab4"));
dragElement(document.getElementById("tab5"));
dragElement(document.getElementById("tab6"));
dragElement(document.getElementById("tab7"));
dragElement(document.getElementById("tab8"));
dragElement(document.getElementById("tab9"));
dragElement(document.getElementById("tab10"));
dragElement(document.getElementById("tab11"));
dragElement(document.getElementById("tab12"));
dragElement(document.getElementById("tab13"));
dragElement(document.getElementById("tab14"));
dragElement(document.getElementById("tab15"));
dragElement(document.getElementById("tab16"));


// 1970
function toggle1970lements() {
    var tab1 = document.getElementById('tab1');
    var tab2 = document.getElementById('tab2');

    // Check if tab1 and tab2 are currently visible or not
    if (tab1.style.display === 'none' && tab2.style.display === 'none') {
        // Show tab1 and tab2
        tab1.style.display = 'block';
        tab2.style.display = 'block';
    } else {
        // Hide tab1 and tab2
        tab1.style.display = 'none';
        tab2.style.display = 'none';
    }
}

// 1980
function toggle1980Elements() {
    var tab3 = document.getElementById('tab3');
    var tab4 = document.getElementById('tab4');

    // Check if tab3 and tab4 are currently visible or not
    if (tab3.style.display === 'none' && tab4.style.display === 'none') {
        // Show tab3 and tab4
        tab3.style.display = 'block';
        tab4.style.display = 'block';
    } else {
        // Hide tab3 and tab4
        tab3.style.display = 'none';
        tab4.style.display = 'none';
    }
}

// 1990
function toggle1990Elements() {
    var tab5 = document.getElementById('tab5');
    var tab6 = document.getElementById('tab6');
    var tab10 = document.getElementById('tab10');
    


    if (tab5.style.display === 'none' && tab6.style.display === 'none' && tab10.style.display === 'none'){

        tab5.style.display = 'block';
        tab6.style.display = 'block';
        tab10.style.display = 'block';
    } else {
  
        tab5.style.display = 'none';
        tab6.style.display = 'none';
        tab10.style.display = 'none';
}
}

// 2000
function toggle2000Elements() {
    var tab7 = document.getElementById('tab7');
    var tab8 = document.getElementById('tab8');
    var tab9 = document.getElementById('tab9');
    


    if (tab7.style.display === 'none' && tab8.style.display === 'none' && tab9.style.display === 'none'){

        tab7.style.display = 'block';
        tab8.style.display = 'block';
        tab9.style.display = 'block';
    } else {
  
        tab7.style.display = 'none';
        tab8.style.display = 'none';
        tab9.style.display = 'none';
}
}

// 2010
function toggle2010Elements() {
    var tab11 = document.getElementById('tab11');
    var tab12 = document.getElementById('tab12');
    var tab13 = document.getElementById('tab13');

    if (tab11.style.display === 'none' && tab12.style.display === 'none' && tab13.style.display === 'none'){

        tab11.style.display = 'block';
        tab12.style.display = 'block';
        tab13.style.display = 'block';


    } else {
  
        tab11.style.display = 'none';
        tab12.style.display = 'none';
        tab13.style.display = 'none';

        

}
}

// 2020
function toggle2020Elements() {
    var tab14 = document.getElementById('tab14');


    if (tab14.style.display === 'none'){

        tab14.style.display = 'block';



    } else {
  
        tab14.style.display = 'none';


        

}
}





//  "ALL" element is clicked
function toggleAllTabs() {
    var tabs = document.querySelectorAll('[id^="tab"]');
    tabs.forEach(function(tab) {
        // Check if tab is currently visible or not
        if (tab.style.display === 'none') {
            // Show tab
            tab.style.display = 'block';
        } else {
            // Hide tab
            tab.style.display = 'none';
        }
    });
}


function unmuteVideo(container) {
    var video = container.querySelector('video');
    video.muted = false; // Unmute the video while hovering
}

function muteVideo(container) {
    var video = container.querySelector('video');
    video.muted = true; // Mute the video when the hover ends
}