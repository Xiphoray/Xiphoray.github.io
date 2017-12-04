(function() {

    fuckWeChat()


    function isWechat() { 
        var ua = navigator.userAgent;

        if (ua.indexOf('MicroMessenger') === -1) {
            return false; 
        }else{ 
            return true; 
        }
    }


    function fuckWeChat() {
        if (!isWechat()) {
            $('#fuckwechat')[0].style.display = 'block';
        }
    }

})();

