window.onload = function() {
    var show = document.getElementById('show');
    var quit = document.getElementById('quit');
    var mask = document.getElementById('mask');
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');

    // 侧边内容滑入
    show.onclick = function() {
        mask.style.display = 'block';
        sidebar.style.transform = 'translate(0, 0)';
        content.style.transform = 'translateX(80%)';
        quit.style.left = '102%';
    }

    // 侧边内容滑出
    quit.onclick = function() {
        mask.style.display = 'none';
        sidebar.style.transform = 'translateX(-100%)';
        content.style.transform = 'translateX(0)';
        quit.style.left = '0';
    }

    //朋友圈/附近tab切换
    var friend = document.getElementById('friend');
    var around = document.getElementById('around');
    var f_tab = document.getElementById('f-tab');
    var a_tab = document.getElementById('a-tab');
    
    tabCard();

    function tabCard(argument) {
        f_tab.onclick = function() {
            around.style.display = 'none';
            friend.style.display = 'block';
            f_tab.className = 'open';
            a_tab.className = 'none';
        }
        a_tab.onclick = function() {
            around.style.display = 'block';
            friend.style.display = 'none';
            a_tab.className = 'open';
            f_tab.className = 'none';
        }
    }

    //点赞like(形参和实参分布执行)
    function likeFunc(like, thumb) {
        var oLike = document.getElementById(like);
        var oThumb = document.getElementById(thumb);
        var off = true;
        oLike.onclick = function() {
            //加开关，点赞只能点击一次
            if (off) {
                var count = Math.ceil(Math.random() * 20); //生成1-20随机数
                // alert(count);
                oLike.innerText = ++count;
                oThumb.style.color = '#FF7F66';
                off = false; //关闭开关，禁止下次点击
            }
        }
    }

    likeFunc('like1', 'thumb1');
    likeFunc('like2', 'thumb2');
    likeFunc('like3', 'thumb3');

    //评论
    function commentFunc(com) {
        var oComment = document.getElementById(com);
        oComment.onclick = function() {
            alert('暂时无法评论');
        }
    }
    commentFunc("comment1");
    commentFunc("comment2");
    commentFunc("comment3");

    // 分享share
    $('#share1').click(function() {
        window.sharetitle = $('#tit1').html();
        // window.shareUrl = $('#img').attr('src');
        share();
    });
    $('#share2').click(function() {
        window.sharetitle = $('#tit2').html();
        // window.shareUrl = $('#img').attr('src');
        share();
    });
    $('#share3').click(function() {
        window.sharetitle = $('#tit3').html();
        // window.shareUrl = $('#img').attr('src');
        share();
    });

    function share() {
        //d指的是window
        (function(s, d, e) {
            try {} catch (e) {}
            var f = 'http://v.t.sina.com.cn/share/share.php?',
                u = d.location.href,
                p = ['url=', e(u), '&title=', e(window.sharetitle), '&appkey=2924220432', '&pic=', e(window.shareUrl)].join('');

            function a() {
                if (!window.open([f, p].join(''), 'mb', ['toolbar=0,status=0,resizable=1,width=620,height=450,left=', (s.width - 620) / 2, ',top=', (s.height - 450) / 2].join(''))) u.href = [f, p].join('');
            };
            if (/Firefox/.test(navigator.userAgent)) {
                setTimeout(a, 0)
            } else {
                a()
            }
        })(screen, document, encodeURIComponent);
    }


}