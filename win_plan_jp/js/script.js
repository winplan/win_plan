$(document).ready(function(){
    const tit = $(".cont_area .top");
    const tabMenu = $(".menu_list .tab");
    const btnNext = $(".icon_wrap .next")
    const btnPrev = $(".icon_wrap .prev")
    const imgWrap = $(".cont .img_wrap")
    const imgWrapOn = $(".cont .img_wrap.On")
    // $(".cont").load("/inc/contents0.html");
    tit.children('h1').text(tabMenu.eq(0).text());

    tabMenu.click(function(){

        let idx = $(this).index()
        imgWrap.removeClass('On')

        tabMenu.removeClass('On');

        tit.children('h1').text(tabMenu.eq(idx).text());
        tabMenu.eq(idx).addClass('On')
        $('.tab.On').focus();
        imgWrap.eq(idx).addClass('On')

    })

    btnNext.click(function(){
        let i =$(".menu_list .tab.On").index();
        i++
        
        if(i > $(".menu_list .tab").length - 1){ i = 0;}

        console.log(i)

        imgWrap.removeClass('On')
        tabMenu.removeClass('On');
        tit.children('h1').text(tabMenu.eq(i).text());
        tabMenu.eq(i).addClass('On')
        imgWrap.eq(i).addClass('On')

            if(i > 4){
                $('.menu_list').animate({scrollTop : (i - 4) * 80}, 400);
            }
            else if (i < 1){
                $('.menu_list').animate({scrollTop : 0}, 400);
            }
	        



    })
    btnPrev.click(function(){
        let i = $(".menu_list .tab.On").index();
        i--;
        if(i < 0){ i = $(".menu_list .tab").length - 1;}

        console.log(i)

        imgWrap.removeClass('On')

        tabMenu.removeClass('On');
        tit.children('h1').text(tabMenu.eq(i).text());
        tabMenu.eq(i).addClass('On')
        imgWrap.eq(i).addClass('On')
        if(i > 4){
            $('.menu_list').animate({scrollTop : (i - 4) * 80}, 400);
        }
        else if (i < 1){
            $('.menu_list').animate({scrollTop : 0}, 400);
        }


    })




})