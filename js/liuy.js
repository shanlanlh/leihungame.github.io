function addMessage() {
      var messageInput = document.getElementById('messageInput');
      var message = messageInput.value;
      if (message) {
        var messageContainer = document.getElementById('messageContainer');
        var newMessage = document.createElement('div');
        newMessage.innerHTML = message;
        messageContainer.appendChild(newMessage);
        messageInput.value = '';
        alert('还没接入后端，你留了我也看不到，别问我，我也不知道');
      } else {
        alert('你还没输入！！！');
      }
    }
