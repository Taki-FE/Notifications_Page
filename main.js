document.addEventListener('DOMContentLoaded', () => {

  const unread = document.querySelectorAll('.unread');
  const markAsRead = document.querySelector('.read-message');
  const notificationCount = document.querySelector('.count');

  let unreadCount = unread.length;

  unread.forEach(element => {
    element.addEventListener('click', () => {
      const indicator = element.querySelector('.indicator');
      if (indicator && element.style.backgroundColor !== 'transparent') {
        element.style.backgroundColor = 'transparent';
        indicator.style.display = 'none';
        if (unreadCount >= 1) {
          unreadCount--;
          updateNotificationCount();
        }
      }
    });
  });

  markAsRead.addEventListener('click', () => {
    unread.forEach(element => {
      element.style.backgroundColor = 'transparent';
      const indicator = element.querySelector('.indicator');
      if (indicator) {
        indicator.style.display = 'none';
      }
    });
    unreadCount = 0;
    updateNotificationCount();
  });

  function updateNotificationCount() {
    notificationCount.textContent = unreadCount;
  }
});
