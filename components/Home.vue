<template>
<div class="leading-normal tracking-normal text-gray-900" style="font-family: 'Source Sans Pro', sans-serif;">

    <div class="pb-14 bg-right bg-cover" style="background-image:url('../assets/img/bg.svg');">

        <!--Main-->
        <div class="md:m-4 pt-20 md:pt-36 px-2 flex flex-wrap flex-col md:flex-row items-center">

            <!--Left Col-->
            <div class="flex flex-col w-full px-auto xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1 class="my-4 text-3xl md:text-4xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Quét bình luận</h1>
                <p class="leading-normal text-base md:text-2xl mb-8 md:text-left slide-in-bottom-subtitle">Một công cụ miễn phí, được tạo ra nhắm hỗ trợ viêc quản lý comment khi live stream, giúp bạn dễ dàng chốt đơn, lọc số điện thoại, tên khách hàng và nội dung đơn hàng. Ngoài ra hệ thống còn giúp quét bình luận của 1 hoặc nhiều bài viết bất kỳ trên facebook.</p>
                <p class="font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
                    Sử dụng phiên bản web giới hạn chức năng <a class="text-blue-400" href="https://app.quetbinhluan.com/">tại đây</a><br>
                    Hoặc tải phiên bản đầy đủ:
                </p>
                <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                    <button onClick="download('https://api.quetbinhluan.com/download/fake-app.win.zip')" class="download-mac-btn font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Tải xuống cho Windows</span>
                    </button>
                    <button onClick="download('https://api.quetbinhluan.com/download/fake-app.dmg.zip')" class="download-win-btn font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Tải Xuống cho macOs</span>
                    </button>
                </div>
            </div>

            <!--Right Col-->
            <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
                <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="../assets/img/devices.svg">
            </div>

            <section class="bg-white border-b w-full">
                <div class="container mx-auto flex flex-wrap items-center justify-between pb-12">
                    <h2 class="w-full my-2 text-3xl font-black leading-tight text-center text-blue-800 lg:mt-8">
                        Chức năng chính
                    </h2>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>

                    <div class="flex flex-1 flex-wrap max-w-4xl mx-auto items-center justify-between text-xl text-gray-500 font-bold opacity-75">
                        <span class="w-1/2 p-4 md:w-auto flex items-center">
                            <svg class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Nuôi nick</span>

                        <span class="w-1/2 p-4 md:w-auto flex items-center">
                            <svg class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            Quét bài viết</span>

                        <span class="w-1/2 p-4 md:w-auto flex items-center">
                            <svg class="h-10 w-10 mr-4 fill-current text-gray-500 opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                            Tăng truy cập website</span>
                    </div>
                </div>
            </section>

            <section class="bg-gray-100 border-b w-full">
                <div class="container max-w-5xl mx-auto">
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t">
                        </div>
                    </div>

                    <div class="flex flex-wrap mt-8">
                        <div class="w-5/6 sm:w-1/2 p-6 ">
                            <h3 class="text-3xl text-blue-500 font-bold leading-none mb-3">
                                Quét bình luận nhiều bài viết cùng lúc
                            </h3>
                            <p class="text-gray-600 mb-8">
                                Bạn có thể quét bình luận nhiều bài viết cùng lúc, lọc số điện thoại, email, tên người bình luận, UID ...
                            </p>
                        </div>
                        <div class="w-full sm:w-1/2 p-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wthkGjw4W2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="flex flex-wrap flex-col-reverse sm:flex-row mt-8">
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <img src="../assets/img/action.png" alt="">
                        </div>
                        <div class="w-full sm:w-1/2 p-6 mt-6">
                            <div class="align-middle">
                                <h3 class="text-3xl text-blue-500 font-bold leading-none mb-3">
                                    Nuôi nick tự động tương tác
                                </h3>
                                <p class="text-gray-600 mb-8">
                                    Bạn có thể nuôi hàng trăm nick trên phần mêm, mỗi nick sẽ là 1 trình duyệt riêng biệt giúp bạn quản lý dễ dàng
                                </p>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Vy4Mh8i2KvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap mt-8">
                        <div class="w-5/6 sm:w-1/2 p-6">
                            <h3 class="text-3xl text-blue-500 font-bold leading-none mb-3">
                                Tăng lượng truy cập website
                            </h3>
                            <p class="text-gray-600 mb-8">
                                Ngoài ra bạn cũng có thể chạy tự động tăng lượng truy cập website, nhằm mục đích seo website của bạn trên hệ thống google
                            </p>
                        </div>
                        <div class="w-full sm:w-1/2 p-6">
                            <img src="../assets/img/seo-google.jpeg" alt="">
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>

    <!-- jQuery if you need it -->
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    function download(link) {
        window.location.href = link
    }
</script>
</div>

</template>

<!-- Animation CSS-->

<style>
.download-mac-btn {
    background-image: linear-gradient(to bottom, #8241f9, #4e277b);
    border-color: #150a27;
    color: #fff;
}
.download-win-btn {
    background-image: linear-gradient(to bottom, #41f9f0, #277b7b);
    border-color: #150a27;
    color: #fff;
    margin-left: 10px;
}
/* ----------------------------------------------
* Generated by Animista
* w: http://animista.net, t: @cssanimista
* ---------------------------------------------- */

.slide-in-bottom {

    -webkit-animation: slide-in-bottom .5s cubic-bezier(.25, .46, .45, .94) both;

    animation: slide-in-bottom .5s cubic-bezier(.25, .46, .45, .94) both

}

.slide-in-bottom-h1 {

    -webkit-animation: slide-in-bottom .5s cubic-bezier(.25, .46, .45, .94) .5s both;

    animation: slide-in-bottom .5s cubic-bezier(.25, .46, .45, .94) .5s both

}

.slide-in-bottom-subtitle {

    -webkit-animation: slide-in-bottom .5s cubic-bezier(.25, .46, .45, .94) .75s both;

    animation: slide-in-bottom .5s cubic-bezier(.25, .46, .45, .94) .75s both

}

.fade-in {

    -webkit-animation: fade-in 1.2s cubic-bezier(.39, .575, .565, 1.000) 1s both;

    animation: fade-in 1.2s cubic-bezier(.39, .575, .565, 1.000) 1s both

}

.bounce-top-icons {

    -webkit-animation: bounce-top .9s 1s both;

    animation: bounce-top .9s 1s both

}

@-webkit-keyframes slide-in-bottom {

    0% {

        -webkit-transform: translateY(1000px);

        transform: translateY(1000px);

        opacity: 0

    }

    100% {

        -webkit-transform: translateY(0);

        transform: translateY(0);

        opacity: 1

    }

}

@keyframes slide-in-bottom {

    0% {

        -webkit-transform: translateY(1000px);

        transform: translateY(1000px);

        opacity: 0

    }

    100% {

        -webkit-transform: translateY(0);

        transform: translateY(0);

        opacity: 1

    }

}

@-webkit-keyframes bounce-top {

    0% {

        -webkit-transform: translateY(-45px);

        transform: translateY(-45px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in;

        opacity: 1

    }

    24% {

        opacity: 1

    }

    40% {

        -webkit-transform: translateY(-24px);

        transform: translateY(-24px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in

    }

    65% {

        -webkit-transform: translateY(-12px);

        transform: translateY(-12px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in

    }

    82% {

        -webkit-transform: translateY(-6px);

        transform: translateY(-6px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in

    }

    93% {

        -webkit-transform: translateY(-4px);

        transform: translateY(-4px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in

    }

    25%,

    55%,

    75%,

    87% {

        -webkit-transform: translateY(0);

        transform: translateY(0);

        -webkit-animation-timing-function: ease-out;

        animation-timing-function: ease-out

    }

    100% {

        -webkit-transform: translateY(0);

        transform: translateY(0);

        -webkit-animation-timing-function: ease-out;

        animation-timing-function: ease-out;

        opacity: 1

    }

}

@keyframes bounce-top {

    0% {

        -webkit-transform: translateY(-45px);

        transform: translateY(-45px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in;

        opacity: 1

    }

    24% {

        opacity: 1

    }

    40% {

        -webkit-transform: translateY(-24px);

        transform: translateY(-24px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in

    }

    65% {

        -webkit-transform: translateY(-12px);

        transform: translateY(-12px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in

    }

    82% {

        -webkit-transform: translateY(-6px);

        transform: translateY(-6px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in

    }

    93% {

        -webkit-transform: translateY(-4px);

        transform: translateY(-4px);

        -webkit-animation-timing-function: ease-in;

        animation-timing-function: ease-in

    }

    25%,

    55%,

    75%,

    87% {

        -webkit-transform: translateY(0);

        transform: translateY(0);

        -webkit-animation-timing-function: ease-out;

        animation-timing-function: ease-out

    }

    100% {

        -webkit-transform: translateY(0);

        transform: translateY(0);

        -webkit-animation-timing-function: ease-out;

        animation-timing-function: ease-out;

        opacity: 1

    }

}

@-webkit-keyframes fade-in {

    0% {

        opacity: 0

    }

    100% {

        opacity: 1

    }

}

@keyframes fade-in {

    0% {

        opacity: 0

    }

    100% {

        opacity: 1

    }

}

.wrapper .btns {

    display: flex;

    margin: 30px 0 20px 0;

}

.btns a {

    text-align: center;

    position: relative;

    margin: 0 20px;

    height: 60px;

    width: 200px;

    display: block;

    line-height: 60px;

    border-radius: 30px;

    text-decoration: none;

    color: #fff;

    font-size: 18px;

    font-weight: 500;

    text-transform: uppercase;

    letter-spacing: 1px;

    overflow: hidden;

    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

}

.btns a:first-child {

    background: linear-gradient(-90deg, #f5ce62, #e85a19);

}

.btns a:last-child {

    background: linear-gradient(90deg, #0162c8, #55e7fc);

}

.btns a>span {

    position: absolute;

    background: #fff;

    transform: translate(-50%, -50%);

    border-radius: 50%;

    pointer-events: none;

    animation: ripples 0.6s linear infinite;

}

@keyframes ripples {

    0% {

        width: 0px;

        height: 0px;

        opacity: 0.5;

    }

    100% {

        width: 500px;

        height: 500px;

        opacity: 0;

    }

}
</style>
