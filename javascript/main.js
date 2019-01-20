$(document).ready(function ()
{
    $(".button-section-0").click(function()
    {
        $('html, body').animate(
            {
                scrollTop: $("header").offset().top - 70
            }, 1000);
    });
    $(".button-section-1").click(function()
    {
        $('html, body').animate(
        {
            scrollTop: $("#TheShop").offset().top - 70
        }, 1000);
    });
    $(".button-section-2").click(function()
    {
        $('html, body').animate(
            {
                scrollTop: $("#History").offset().top - 70
            }, 1000);
    });
    $(".button-section-3").click(function()
    {
        $('html, body').animate(
            {
                scrollTop: $("#Awards").offset().top - 70
            }, 1000);
    });
    $(".button-section-4").click(function()
    {
        $('html, body').animate(
            {
                scrollTop: $("footer").offset().top - 70
            }, 1000);
    });
    $(".button-prices").click(function()
    {
        $(".prices-background").show(1000);
        $("body").click(function (e)
        {
            if(($(e.target).is("a.nav-link.btn.btn-md.bg-dark")) == false && $(e.target).is(".button-prices") == false)
            {
                $(".prices-background").hide(500);
            }
            console.log($(e.target));
        });
    });
    $(".button-prices-navbar").click(function()
    {
        $(".prices-background").show(1000);
        $("body").click(function (e)
        {
            if(($(e.target).is("a.nav-link.btn.btn-md.bg-dark")) == false && $(e.target).is(".button-prices") == false)
            {
                $(".prices-background").hide(500);
            }
            console.log($(e.target));
        });
    });


    $(document).click(function(e) {
        if (($(e.target).is('body')) == false)
        {
            $('.collapse').collapse('hide');
        }
    });

    $(window).scroll(function ()
    {
        var windowWidth = $(window).width();
        if($(this).scrollTop() > 120)
        {
            $(".button-prices").fadeIn().addClass("d-lg-block").addClass("d-none");
        }
        else
        {
            if(windowWidth > 992)
            {
                $(".button-prices").fadeOut().removeClass("d-lg-block d-none");
            }
        }
        if($(this).scrollTop() > 0 && $(this).scrollTop() < 250 && $(this).width() > 992)
        {
            $(".prices-background").hide(500);
        }
    });
});