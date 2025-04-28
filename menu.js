// Toggle mobile menu
$(function() {
    $('#mobile-menu-button').on('click', function() {
      $('#mobile-menu').slideToggle(200);
    });

    // Delay hide for desktop submenu (3 levels)
    // Applies to: .group, .group-submenu, .group-subsubmenu
    function addSubmenuDelay(selector, submenuSelector) {
      let timeout;
      $(document).on('mouseenter', selector, function() {
        clearTimeout(timeout);
        $(this).children(submenuSelector).stop(true, true).fadeIn(120);
      });
      $(document).on('mouseleave', selector, function() {
        const $submenu = $(this).children(submenuSelector);
        timeout = setTimeout(function() {
          $submenu.stop(true, true).fadeOut(120);
        }, 300); // 220ms delay before hiding
      });
    }
    addSubmenuDelay('.group', '.absolute');
    addSubmenuDelay('.group-submenu', '.absolute');
    addSubmenuDelay('.group-subsubmenu', '.absolute');
  });