

    $('#tab-tit-50 p').click(function(e){
    var id = $(this).attr("data-id"); 
    $("#tab-tit-50 p").removeClass("wushiActive").addClass("wushiNoActive");
    $(this).removeClass("wushiNoActive").addClass("wushiActive");
    
    $(".tab-50-box").css({"display":"none"});
    document.getElementById(id).style.display="block";
});
$('.tab-tit-50 li').click(function(e){
    var id = $(this).attr("data-id"),name = $(this).attr("data-class"); 
    $("#"+ id + " .tab-tit-50 li").removeClass("active");
    $(this).addClass("active");
    
    $("#" + id + " .tab-tit-50-cont div").css({"display":"none"});
    $("#" + id + " ." + name).css({"display":"block"});
});
    var wsyObj={
        "qingyin": {
            "ping": [
                ["あ", "い", "う", "え", "お"],
                ["か", "き", "く", "け", "こ"],
                ["さ", "し", "す", "せ", "そ"],
                ["た", "ち", "つ", "て", "と"],
                ["な", "に", "ぬ", "ね", "の"],
                ["は", "ひ", "ふ", "へ", "ほ"],
                ["ま", "み", "む", "め", "も"],
                ["や", "い", "ゆ", "え", "よ"],
                ["ら", "り", "る", "れ", "ろ"],
                ["わ", "い", "う", "え", "を"],
                ["ん"]],
            "pian": [
                ["ア", "イ", "ウ", "エ", "オ"],
                ["カ", "キ", "ク", "ケ", "コ"],
                ["サ", "シ", "ス", "セ", "ソ"],
                ["タ", "チ", "ツ", "テ", "ト"],
                ["ナ", "ニ", "ヌ", "ネ", "ノ"],
                ["ハ", "ヒ", "フ", "ヘ", "ホ"],
                ["マ", "ミ", "ム", "メ", "モ"],
                ["ヤ", "イ", "ユ", "エ", "ヨ"],
                ["ラ", "リ", "ル", "レ", "ロ"],
                ["ワ", "イ", "ウ", "エ", "ヲ"],
                ["ン"]],
            "luoma": [
                ["a", "i", "u", "e", "o"],
                ["ka", "ki", "ku", "ke", "ko"],
                ["sa", "shi", "su", "se", "so"],
                ["ta", "chi", "tsu", "te", "to"],
                ["na", "ni", "nu", "ne", "no"],
                ["ha", "hi", "fu", "he", "ho"],
                ["ma", "mi", "mu", "me", "mo"],
                ["ya", "i", "yu", "e", "yo"],
                ["ra", "ri", "ru", "re", "ro"],
                ["wa", "i", "u", "e", "wo"],
                ["n"]],
            "gifping": [
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/87e12fc54273507116fe9e6729d5eaf8.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/1b18254d3b85f4844cd21dcf9f458c1d.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/7219d899f652f6f5333a8507c22a6baf.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/0175803fde5fb39d50493228d4baaf95.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/a1954f3492a68fa6576eb1722024b124.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/0233eb82fd25095ac3f34a968e5a022b.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/e86b8824bb35308d29706aa3bfbe742b.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/b8c1d506c424d6382faf10eaf8a444f6.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/2bb95b3944669a23e05dc3ca206766c8.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/0a93ebc5df9acd70a5d5ee3c1db3251c.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/9cd12a8553e86379f7b84df88c6e96b5.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/6e17dbdce27d92e2b143adead1da046e.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/c01c3d79ffbc5c6908ed71b7ced0d12e.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/866bccee85c6b338124174bd8b18dcd8.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/fc5b258917c9597a5d23cad2fa159b5e.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/a330c6f1fcde3eec49af78acd116843f.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/7e9193c74c4481c0449734013901e7d1.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/94fb633204b11e857753e265190b757c.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/dd580ab7ff94cd3da1d21205871c69ff.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/7d0f42524885503abdbc561dd6d5367f.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/c15fb93be8debe3da1f428ddcac1648c.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/93fa712a0e3a68268ed69593d420f5fd.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/2e5465f1298d9c89cc1879661c0f6722.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/188b6fe8f3a01c4eeeb573954b5a424e.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/ddc92c256b014507d62a1b2bd1c929e9.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/30a49d46af80eda71ea1c269f568a5b0.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/42fe893a42f1ffcefe4e6b60d0628965.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/82b763a9129a2316304348c412b5d326.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/6b82ba80a1f7b6e00b6831e432a6d3f6.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/243196755acfca8485416f3cae838adf.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/e31e70df8a733fbbbc226fc96f1f6978.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/865b36496e9f7c25940bbfd730292d5a.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/c88b0309e69b770f8f48a9c3f2044abd.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/a1bf0b248bac35573156c5a6d40df7e0.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/5019bfcb5d48f70d0cd430d02f92ce34.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/03aba17d78e30e6ab53a61eb1c4ba620.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/1b18254d3b85f4844cd21dcf9f458c1d.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/205380212f3e68e4fadf795757bd1d4e.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/0175803fde5fb39d50493228d4baaf95.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/32b687361444929a97c2c8cefed5bcec.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/35656bd756eeaa624db9b75bcbcdc8c2.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/846a1f95ee4150ba607b5da7818c87dd.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/26f4c71df94647364697c633762be9a2.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/af2c21617b974d57bf1d1d189bdf2ac6.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/87d2a9dcb480ac6d9ae17157bf48e540.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/3b92dbb776a07344889690f29205e60d.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/1b18254d3b85f4844cd21dcf9f458c1d.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/7219d899f652f6f5333a8507c22a6baf.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/0175803fde5fb39d50493228d4baaf95.gif",
                    "foo.ibianma.com/jingying/word/2018/06/14/61b3117414ac6cd64480df8219e39dc9.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/14/8ebe601acaf303aba7e9dd6efd282e2a.gif"
                ]
            ],
            "gifpian": [
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/e47bbcc54183da8f0370b6f729602c70.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/da0c0d166da57c6d0817a3f034f81e2e.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/f20be768ed57c61971d1a1be68211ceb.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/14248b926260732c9e94e7f4ea0535d3.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/a35f9bf2d343d74f9972ceb37188ea7f.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/b0e6fd2d850eb5074aec25c0f466d3b1.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/f86a54e2653b1fee36d81f7e274ee975.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/1e89525ff9f9c17857c05dd7457bf062.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/615a71d4b41e2796639fb28ce6988384.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/e8f79a1cbda2e8e2ed916f20fb225776.gif"
                ],
                [

                    "foo.ibianma.com/jingying/word/2018/06/29/d59202b80aff3de45a828d870b0f8bc7.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/c3d0075764907a81d23b1a17d3fadf59.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/56a6ece914c8c3d4c165eddfff76fcf9.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/61f742b55d563deef994454acd603dbf.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/d95ec0e573b5c65d46ecf23ca3975ee0.gif"
                ],
                [

                    "foo.ibianma.com/jingying/word/2018/06/29/5df282113828a2de7bb66bff8abe89ff.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/b8ea4c35c998426ee2b7555957f7195f.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/1a0f0e706302cbd228a0901ae9dbe492.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/d84c294b2a757dcf0c115bc8b15fc868.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/fc5133c3e1651d07942027e43ee746d1.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/345a4e9dae70a33f6a6d232718ea14c5.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/93ffc0a972f14109b513fae5846c42c1.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/6558022bdf07f9f7c685656056ca414e.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/2bc37735e4caf4f3ebc3c78975ba5600.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/d297619527330c9ea4c3d8e52d2b1cc1.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/bc9a40c78942bacd1efe9ecb4a36287d.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/f562a12f361372b1099c434cf69852e2.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/eece561f518f2ebfd66081071824ceb9.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/b3f2913311a5515de596c4d7a8e5d1a6.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/6866b26f54faf8bbd9c1d2c9793f9eda.gif"
                ],
                [

                    "foo.ibianma.com/jingying/word/2018/06/29/2168286607cdea1cd52bb7ea6587d228.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/ce7d9befaf92fffebfe63e7b417897ab.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/52ea63bb0945ce6cad8bce6954310d5b.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/129d624ad74cc0916c57b49d817d6555.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/8bba6ee0b866d0fefac8bea3957e2b45.gif"
                ],
                [

                    "foo.ibianma.com/jingying/word/2018/06/29/3279ae81e0a7244e651ac6a0841bc222.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/da0c0d166da57c6d0817a3f034f81e2e.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/533561be1e637d7b3e1fb8a64bc3cead.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/14248b926260732c9e94e7f4ea0535d3.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/87eb1b826783337222868f82f431c7ed.gif",

                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/86ccf2c454255e24ff4847c021c8653c.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/88327a7f949f6d8ca68e3fd45fa57776.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/0556fd03ab1d78ae55a86f163e9f97f4.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/faed426b7ef378b03d0ff8172eccce31.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/3e744c769a6c06c5447b461fcf09e1a4.gif"
                ],
                [

                    "foo.ibianma.com/jingying/word/2018/06/29/e41104a8bc24ec4e64c5aab6c2f90a47.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/da0c0d166da57c6d0817a3f034f81e2e.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/f20be768ed57c61971d1a1be68211ceb.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/14248b926260732c9e94e7f4ea0535d3.gif",
                    "foo.ibianma.com/jingying/word/2018/06/29/c1c696bc6dcb210eaa8860a5044c458b.gif"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/31ad32da050211f2e695f2d2fdf78845.gif"
                ]
            ],
                    "mp3": [
                        ["foo.ibianma.com/jingying/word/2018/07/02/be7b8280a8a49c960d925d516997aba5.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/b007adc855211a197947bee83c88ec06.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/4409e5926c760b856bb6e89b4a225c30.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/4d4e0e22777db90baaa2ecdd172bf475.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/e0488217415a1f167d586817dc2473cf.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/5b245a6ca933177f0d48eed093091a60.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/30f59391e96b46547fc585f66406f098.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/069249d5033720181ed3d0949977117a.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/60245aa1e2cbf22eb9652f7625514fa9.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/c632048f59c140ae2b829434c6251c69.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/1c6ba764f4aa2e8c2c2b551ee5d251b3.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/f18615f9786178fe4bbfa891736e912d.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/8d69a23c26cfd8ca80bb8e4dfaba5aeb.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/93d6cd44045a342733d191443241de12.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/b6492115f0597c84a75cf256e652ad0e.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/d5b66351c3ba74120dbd05c5d05faa26.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/e454fd286ce50b3975642dc90a722a3b.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/ef791984b7b8ff173909c5415abd6d77.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/17a28a06d114902acf3d55cf7b277c2c.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/650cfd47fc9d2a61759e13f66ce03a0a.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/968ea0d3be2c414793b9b4c085c9dc20.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/834fd4572d6e9dd34d86f83ffe4b279d.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/bd4e3bc003263e3bd02701c4dbe1fda3.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/14e917596a541cfee73b28756b7c0646.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/20bba752dd123bf8b16adfc085514b1f.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/c6c8140414e705ee644cd7246f49db91.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/84c615ae9db4bc536f7497d99a966379.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/94d89735eae980df60e7bbaab127c13a.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/72e071e5424056922e12c1308de1f60d.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/41d740c9878ad3794e3e19471a6e72cb.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/b96fbdc6b5267d7546d6558bd2fb8c91.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/b007adc855211a197947bee83c88ec06.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/e59637361f1760db79867da370ae94fa.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/4d4e0e22777db90baaa2ecdd172bf475.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/4ffa00b530ea1b755330382f5b2c3fba.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/df54fc401dc50c3a03977d93ace552c0.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/d6814764810151fad60eeeb57b88a76f.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/38c8910a8e24cf7b37bff1ef1b8ddc41.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/df54fc401dc50c3a03977d93ace552c0.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/b889cae23bbcd4a5acde05aec9a3d830.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/df54fc401dc50c3a03977d93ace552c0.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/d6814764810151fad60eeeb57b88a76f.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/38c8910a8e24cf7b37bff1ef1b8ddc41.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/df54fc401dc50c3a03977d93ace552c0.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/b889cae23bbcd4a5acde05aec9a3d830.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/d5e5bea6568cbab88b775f5f0f8c3206.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/b007adc855211a197947bee83c88ec06.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/4409e5926c760b856bb6e89b4a225c30.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/4d4e0e22777db90baaa2ecdd172bf475.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/4d4e0e22777db90baaa2ecdd172bf475.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/05a857dbdbf7ef2c07910756ad1a90b3.mp3"]
                    ],
            "mp4": [
                ["foo.ibianma.com/jingying/word/2017/07/31/c19d3f2b11703d7d03438cc9dbddb187.mp4",
                    "foo.ibianma.com/jingying/word/2017/07/31/86aff55e740eb2d4d70a87d43cec429e.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/aaede9d9fbf0fe689066ed18ee78e056.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/3e156aca7d96b748bc73bd40ac303035.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/341c554f7af07d4fba460a37185ab10c.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/5913ded9d9daf934b9e381f7e5426668.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/f977d93902de766cc0bf317f8985c295.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/27944e545e92eab09ba7c574b3efd0f3.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/a443f1ab2c7c500bd12da4be95a6ef4d.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/8b1a3a2b528b46493f9bffb80f9cb3a8.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/d7bdc3fa75b72cea3866568591fa2fbc.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/b905ffd06653461b000598dce5686e5c.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/9a373eed1cc57144c5407523cb4b9425.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/5ecdf7b0ba1533a16c951356c571bda2.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/47be0f89f4f67980c9df758cc959482d.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/c44a01c56e94934dfc4a7ebd408a1135.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/617844c5d7c50672e77d01e701e2f069.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/29c318849ae820016e9a431020f9ef1d.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/ae32f6a66c402fb06d1fb74b06208c6b.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/604395be7f882232ce67e9d6c14d343b.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/90a31a246568bbba49a60260a9768251.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/6d68a3d20cbe8225b72fb8d55767ed82.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/c81a6313c3689f5fb9133e94d3981d1a.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/b455040e943d67422ab6df7571ece3aa.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/721c83a4054c0262ab8c948ef4b1a65a.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/c8a7cf265bc26ec3d8f912033a7d779f.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/502629d2831441449b870c7aed1c1374.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/dbf9f3c0b38cf818aa417ff47bf82d2f.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/3f466a4572436a7a14f8dcc857c3772d.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/e6d54fa40e0b1e8c390ae6528291be3f.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/e0b4e86adb21600374d362ff8037d3be.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/9f152f7d3e4d0415c42eba5db972c11c.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/ade8e6feb393a59c0e63774870aa2a40.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/93249eb9d186d52597a65d7e77fd1070.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/b0e12dd64db97f196815622fbfc40ff8.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/5fa00664dc9b3cd40fea3f26f480dc47.mp4",
                    "foo.ibianma.com/jingying/word/2017/07/31/86aff55e740eb2d4d70a87d43cec429e.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/8bfea6b16f88e80c05b48b0521ec41ec.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/3e156aca7d96b748bc73bd40ac303035.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/0117f6522d41d1aaffc741581118aa5b.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/615ef4d4364b5700d62390ba5ec0f16d.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/20876b2cb910ccc3fafa44bcf8aa32bd.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/a6e066412003a096c49d2127ba0c97ce.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/eeb8befd6dd1a67ba3fed0540ef7eadd.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/46fb51b0fed3948564dec159dcbcf4f1.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/1186f9956f42af9f3aa3932f2784af95.mp4",
                    "foo.ibianma.com/jingying/word/2017/07/31/86aff55e740eb2d4d70a87d43cec429e.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/aaede9d9fbf0fe689066ed18ee78e056.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/3e156aca7d96b748bc73bd40ac303035.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/a1596bb1c2cfa3fa73aed0adc278ae4c.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/04/4f208731033d84202259fba6d01d9ae3.mp4"]

            ]
        },
        "zhuoyin": {
            "ping": [
                ["が", "ぎ", "ぐ", "げ", "ご"],
                ["ざ", "じ", "ず", "ぜ", "ぞ"],
                ["だ", "ぢ", "づ", "で", "ど"],
                ["ば", "び", "ぶ", "べ", "ぼ"],
                ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"]],
            "pian": [
                ["ガ", "ギ", "グ", "ゲ", "ゴ"],
                ["ザ", "ジ", "ズ", "ゼ", "ゾ"],
                ["ダ", "ヂ", "ヅ", "デ", "ド"],
                ["バ", "ビ", "ブ", "ベ", "ボ"],
                ["パ", "ピ", "プ", "ペ", "ポ"]],
            "luoma": [
                ["ga", "gi", "gu", "ge", "go"],
                ["za", "ji", "zu", "ze", "zo"],
                ["da", "di", "du", "de", "do"],
                ["ba", "bi", "bu", "be", "bo"],
                ["pa", "pi", "pu", "pe", "po"]],
            "gifping": [
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/0dfb59bd07af855cbf776f4b91c99fe0.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/16de8edc55edff624e384f359b7aa0b6.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/ad8aa2032544b8406499b0c5e1c470a5.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/5c8d7c453d39cebe6b0e648a9151c5b6.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/3eba1ef356d4ac0fb74a05cac3601ec5.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/d0ea5fd24197face551ff4e5ba7d2e93.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/6bf3ceb03fac7bf126daea041db6cb3d.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/57686bc741a92ef6ce10498ba33fe45b.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/d2b3b973421e40519f3f87276d06e9e5.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/3d73b42f13c7a4a6fe06c783ee7df1a2.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/d130c61d69c5e6785b3d8544687cb75c.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/4d2a261d113356023341ef0de30e7513.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/4f77b7f6efd570919b589410bda1710e.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/1454e10f84c1d97fd2bfb0dd8ae5d0db.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/04fc26fe17aa457e6c1d331d2ccc9d3d.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/e78ac18e4e020b7804d43eb30ea1cc16.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/8dea8183f3a34c13e399185406090abf.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/ca0e954d8e15817ac56d7114839140e8.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/aab82497903022ea7c24c3e4ec60cc19.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/b891a96e7f1ff65dad92fad37d2138ce.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/4f788cbe469e1c3e925427341aefb7e7.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/5fe9f5c1b49ffa1cdf0ccf2098354243.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/4e6436f912ae084941c5dede73a86f4f.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/642400515dca5d8bcd95196f73bdabc7.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/12395ba50552d50721167f2e669801e3.png"
                ]],
            "gifpian": [
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/9a9e956fbdc1c02022d79e21f05afc53.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/56433af36397933057939a3239a7c7c1.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/d55cd00f830c8ae12147fbab8a9017de.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/1f785f615b8ff9bcb032a328313d640f.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/07d5cb2dd2647f68ec0c5951b921a536.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/abf27f67438fe7258ed1f11fdfa16422.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/f875d182db9756b48b874b3a0fecf4a2.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/53b5afcba8733d727acdee7a0318bbc1.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/dbe99c16d4dbedce0ced7ee4eb4a4783.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/229e18be11e34d8eb301999f95688a6f.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/0db57c1424388a2427f85f249d9fd668.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/c636124db50edb8b11e94c4cbda8d52a.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/a73168efdc38ad9797963999e59b5228.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/0c5db791f2e00998d814a2ab2b35e430.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/426a3c2f2eaafa676a75263a5c629b54.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/6f243a3d05234cbc932334851a249c5b.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/d868b5ab81c68eb9ec9f801eb8954d61.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/430702d1bc425b0c5294309e97716e47.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/a9c415af06aaeeb7f886f5aaa1c3b085.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/5059ac5cb06d31d9bce785e502f0f46d.png"
                ],
                [
                "foo.ibianma.com/jingying/word/2018/06/29/e44cd64f074faff60ae386b6373b90be.png",
                "foo.ibianma.com/jingying/word/2018/06/29/10234245247329dc27c02867e194f3b0.png",
                "foo.ibianma.com/jingying/word/2018/06/29/754929a6f3b5989d67365ebaaa68b51b.png",
                "foo.ibianma.com/jingying/word/2018/06/29/d1bb49ea297e8b65cd6dfe2ce6b8bcf5.png",
                "foo.ibianma.com/jingying/word/2018/06/29/95e0b48a16772e5a62ff448db4f12cb4.png"
                ]
            ],
            "mp3": [
                        ["foo.ibianma.com/jingying/word/2018/07/02/bf7f2dc0d6d9f15ab0c466502f6b7ce7.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/a5e0f569328244c3bb6f63e68ddc96a0.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/4b8f62815c0a1eade36f1214f1e8ff5b.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/0fa702d8040481258fb68d0c985c2876.mp3", 
                            "foo.ibianma.com/jingying/word/2018/07/02/0e3792aba90c22c28388c9bb581250d2.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/39fcad11786598e9b21f52d030e4aa3b.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/6ee2ab28a8d1927dbeabab1b6a39f571.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/bed6dcbaac53b375929e2fa91ba40fd1.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/e3ee723b9450e6580a6d98f3c4208bf1.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/61c52e5f1db3dc4ddde347aa5847c35b.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/aa89339178e28f719d48e24f8117fb77.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/82707b0afe307137268cd2590de2abb1.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/326f99a28355dcc43c911f0bec37b800.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/0bbb58fa5e686ddd6510e15be3ee1d39.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/f418e80600d6021a636e985cf59fe488.mp3"],
                        [
                            "foo.ibianma.com/jingying/word/2018/07/02/cb46cb2a8a3e9ae92af8500792fb8136.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/889eabd344e0ba9abcc2832d1536accd.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/8c2303b6434ea350c1df6874a7c740a9.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/958e8b9f046d67e7ee6e76ddd9cf22b2.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/d52770bbbae4546df08a9832a72e7d20.mp3"],
                        ["foo.ibianma.com/jingying/word/2018/07/02/af4a70ce70a8e1b23901198690ea86b8.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/bee7e838ca482091a4c77357e7869a96.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/a6c3c00102e260f35dda1b4a0a765789.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/e73e29d5272704c4117b6346072d263c.mp3",
                            "foo.ibianma.com/jingying/word/2018/07/02/0ac9f45a79d84c4acf8c612799dd0eda.mp3"]
                    ],
            "mp4": [

                ["foo.ibianma.com/jingying/word/2017/08/01/d27c7c434a967a7315aeec6a6afa6e0e.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/eeb64656039d0848f0b3399719e36531.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/8b3d75834db35ff516cab1677ca95bf3.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/5195b0953f1256067e78323c2582d176.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/373c840bd5d6ccd4ab3108811a3a20d8.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/0c984200cc898c50bf656c37a3ac8b01.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/7106122480ffa1f4357551a0b8fe7f65.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/0c7995991b5cee5979f3c0664f387cda.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/9a1b36cc5584876e1d10dcc0c80b52e6.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/84c398d71d49ba497eeb805f24a7f7bf.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/8dbf0d6e5760da05f4a736a74c3f127a.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/538c39be5fff483cf4c1ae8f9d48df8e.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/ca04a5d22a892f4a7b6b2abd3e673f9e.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/3fa6ee661f1fae540c84371787e6298e.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/2e999dfa12580391d9e04ad67d64ea5c.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/d0f75ea5df18c412d797413c8e7f98d0.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/ac33fbfed67941a262831b501f00b77d.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/629c7e8140cf9c4cc6301f2e5881354c.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/5989c682ca8dc4e073ba4fc368eb4094.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/ca501abceea87e0ddb631bbd720d831d.mp4" ],
                ["foo.ibianma.com/jingying/word/2017/08/01/c5decd849ff3e7ecb796070076792a6c.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/7855afd1165cf7656771324df7748533.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/6939161ecec8e58ea18129054a58b927.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/1dcc70150f181d28507ce27d8696f24b.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/1de004441eb6672344d8f7deda0fcd4d.mp4"]
            ]
        },
        "aoyin": {
            "ping": [
                ["きゃ", "きゅ", "きょ"],
                ["しゃ", "しゅ", "しょ"],
                ["ちゃ", "ちゅ", "ちょ"],
                ["にゃ", "にゅ", "にょ"],
                ["ひゃ", "ひゅ", "ひょ"],
                ["みゃ", "みゅ", "みょ"],
                ["りゃ", "りゅ", "りょ"],
                ["ぎゃ", "ぎゅ", "ぎょ"],
                ["じゃ", "じゅ", "じょ"],
                ["びゃ", "びゅ", "びょ"],
                ["ぴゃ", "ぴゅ", "ぴょ"]],
            "pian": [
                ["キャ", "キュ", "キョ"],
                ["シャ", "シュ", "ショ"],
                ["チャ", "チュ", "チョ"],
                ["ニャ", "ニュ", "ニョ"],
                ["ヒャ", "ヒュ", "ヒョ"],
                ["ミャ", "ミュ", "ミョ"],
                ["リャ", "リュ", "リョ"],
                ["ギャ", "ギュ", "ギョ"],
                ["ジャ", "ジュ", "ジョ"],
                ["ビャ", "ビュ", "ビョ"],
                ["ピャ", "ピュ", "ピョ"]],
            "luoma": [
                ["kya", "kyu", "kyo"],
                ["sya", "syu", "syo"],
                ["tya", "tyu", "tyo"],
                ["nya", "nyu", "nyo"],
                ["hya", "hyu", "hyo"],
                ["mya", "myu", "myo"],
                ["rya", "ryu", "ryo"],
                ["gya", "gyu", "gyo"],
                ["jya", "jyu", "jyo"],
                ["bya", "byu", "byo"],
                ["pya", "pyu", "pyo"]
            ],
            "gifping": [
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/a470402a5ac1fc2db4e8fc529f2a09ab.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/58f5ede4d4ed8edef106c3016123b510.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/48f7dcb0f0347af42a5a882c302bdbcb.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/db5d570f89a3f22f59bd75b67ad291dd.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/20f777ecadae559bf76667818692e8d8.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/e4a2e19825b06e13817404930189f942.png"

                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/3826f7e095740df95454a2dadff07f14.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/3acc2c361efd26f11e89561028a8779e.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/bcbfc428aa96a5b633a41a8fe7585041.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/3831569107a2a713c93c95dcd47ea3c4.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/e23d2298971cd9d4883d0f0d0bb31751.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/1eecc368617035ecdcc64ddabab1d7f7.png"

                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/04d2855389d7b11bfbddbd68dc820396.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/e542dd175943ee6b765eb6ff0f87c841.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/81b7dea7de83c2cadbd0ae83fe33be4e.png"

                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/20fa642e72b4b85857f0d26c9ed19c57.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/7f49753763c81a9a7fa19c782b1c393f.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/af101e61356fea4e41ed069a1e4def4a.png"

                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/ab5148caa4a314ed3f3194ec4adbf9c9.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/03bea82cbbd4d3ee9cb578f92f27dc4a.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/6e7e6a5f9a7f509062ff305cae712000.png"

                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/3892f9cfff579bddc3ff6a64c5765526.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/c2acfa6361463bcfd3b0398ec1f3953a.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/11e416e1f9b1f776ce0730fa7948828f.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/b0cf273b77b58015cfd30862528cf37b.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/c5f39713158a5cbec86b19aa2b2bfa9d.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/7c9c74b0b50cb69a45a90cc4b80b09d6.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/9c6a51e022342a82a880bad1e7c29325.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/2b822f83e7fcec296d46c21fe6091883.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/c5f03fb0e03a46ab8a25ea6f518b653f.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/e264bbd811618be03eb51ae198157cea.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/4bff8b61e3c6889f9acdc6fdea711d17.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/d938634cf7879f4a5c9a66df95fcc279.png"
                ]
            ],
            "gifpian": [
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/753153f32b063714614c72b204d10e0b.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/5c43390fc079ea42239b30e99d4ac3a9.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/5700579493a6c7599e3ccedbc3515a03.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/4bba4abbeeae4fbc3a6541559f59f355.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/0b09fdd5269af1f418857496a8fd6bd0.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/f07625467f0208f777b186392d803cef.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/7da784608af43dfd49ca0b2ac0476c9e.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/f3f46a2176d7677e0130cc6cde7261fc.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/10bb9f87862da8b3dbf1d6729727052a.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/56d149dc95ec25e80eea2767f690de59.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/62f828e43a1e396a6ed19544bd9f472d.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/f0c6ea534dbf3ea2f104b658927fe605.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/5625fbf4d1e3e355863395562b65bdaf.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/80739a5abc2395e37a07ac2b808ae6e9.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/3455f227a9aad06cb8fb04fe6eb6967f.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/8e481579a0d2a505cf24ca8bc5abba82.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/3f9dad9a7ac814038ec582e180eb3ad1.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/98c8bca002a7b9a6c7f6aa0bc533f3ea.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/d8f7ef9948c70a3d2b649584ecced898.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/761ff08dce629f8297a1f79aa4576e45.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/729ea34e1d8104a06df5a0292e85769b.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/d09e510f594a90bb13ff2374abe0e8c4.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/6e2764b8d9a1c38ac40e2820c70f4afa.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/26cd9a05086cb41c6512206ec7d3002e.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/56940f6e41b754ac2dbff9c9d676ea60.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/1bf546744cd7de076094d3d112d0b979.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/7d91bc9a318f3f2c556ac503a63198f0.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/c463f82c8637449c5c965fd3dae781b0.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/38d39c91b36c8a7e1281bbf0e31b0a8a.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/558323de34af776bdf896dc14b279979.png"
                ],
                [
                    "foo.ibianma.com/jingying/word/2018/06/29/4da5165b6b38c7fbf6ca077a7c4dbe2c.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/116dd9165547883ec072ae6ca654df7b.png",
                    "foo.ibianma.com/jingying/word/2018/06/29/1e38625b45e9d9a0a6622135540590dc.png"
                ]],
            "mp3": [
                    ["foo.ibianma.com/jingying/word/2018/07/02/4fa9c6edec1f950fa34aabefcc02bba7.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/5836bb77a374e8b33f8b1b2152c7607c.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/b5cbd8f46da1e5d3bac91f37a11a9ec7.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/a418c86dca11632760f8bde042996f38.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/5e826a9f95e0ef050860f3e2f8c59a31.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/e6487ac6616629ea173ad2c102535c43.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/f85e968c4d88ef2e252865e0b1cb1bab.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/13ee0a295360f6fc3f09115bfde0ed32.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/40c76a9dfdf702eec0a12c83eb8ca4d3.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/6b8c06aca47543d5c6b285fbecf17059.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/72b98d936be1ff54b79ed28045e4d511.mp3", 
                        "foo.ibianma.com/jingying/word/2018/07/02/222246aa658e7542e1f225c802915502.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/6702db579c0c8f06aea1a6441bfd585a.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/568959962db6ca10e6788619d38f8655.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/56f5b637497155343d63cf31343f59f5.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/424e96340115a832786192a74f35b209.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/246816c773b973a59ec9ab542ca88984.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/f99f994d51826cc6f60c83f63703fcab.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/0b6bb15e75bb8047467c65ac82506b2d.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/d327f8fd23f2621619806180af76a87f.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/d8600067905606a39465b8533be1f642.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/bd8f3f558eca8d91c6b7b2eb0d9c4c10.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/b0e65b8e2fb756d4cc9cca780342def6.mp3",
                        "foo.ibianma.com/early_read/mpeg/D341812FB10613795BACA5A33AB15CC5.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/ac42c625a373d68613b6abf91fb2a752.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/d79c0635fd7ac9b386e5703572f03864.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/eb3c32c096093b4453c0d6208a1da654.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/19db3bc8eaf84407091ea384546dec7c.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/4055502d3cd3e7090cf86e11a5df54a2.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/8b34ff7839ee8217df4edf2212050a3d.mp3"],
                    ["foo.ibianma.com/jingying/word/2018/07/02/1f1ed69290884322be97084cb950916f.mp3",

                        "foo.ibianma.com/jingying/word/2018/07/02/7194ab8987b2e790c9492ff5a880ec7e.mp3",
                        "foo.ibianma.com/jingying/word/2018/07/02/4447231d5b7122572dd0f49dd8ec1dff.mp3"]
                    ],
            "mp4": [
                ["foo.ibianma.com/jingying/word/2017/08/01/1753c0b4da30f9064c4adec870223f4c.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/d4549661de62f0c798328c04e9a94e30.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/06ffd0696c2ced0860156e806ff7cc3f.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/c99165e7b7df33f80ebdc9799e7bc6e3.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/c3dc67040e2463a43b9070ba4d9843b5.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/481828d72c46d369c49dd66b7cc2d6b2.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/45aa9cc69b2417d262438b1e603e8e68.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/d194a5a2924d22d99dfb89360a0b7200.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/1e5db23fbe0b0a110867eecaebfb1413.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/e44bceca0e54e462ce01bf0e9575f3ec.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/90074c5cb6d0a0835e52bb515d652c54.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/5dd2740b17b2951e8c5264646a65eb3e.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/27f4693036b9c5cc1bbe4ebadcba1434.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/0249fea44aeab34384393bceb1fe9f04.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/11c0da6eb06e034f06a0cb1684502ed6.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/29543384c3770892cbcd69bee80caa63.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/f13ba14112a1cfc2c4afcf92914c20f8.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/92ba238bca6005b139d3602c50edf49c.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/cd119dcde13d9487712f8df9bedf6e12.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/405b92147815cb728b2f6910d62556ca.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/0884a7ed8628259213aa131351b179bc.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/381098166cfff743f62c1e2e3121c9a7.mp",
                    "foo.ibianma.com/jingying/word/2017/08/01/dff08444865978cee6af8985ee8684e6.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/6e056d91f2437585c6f5bb9349cbe7ea.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/ec39a685a91e33e0e12ffb4032d76d28.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/4af5e6d1ebc99fa0ef5cf1fee51f37ca.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/fd1ee318490b17a98aa80239f1a4679d.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/f2e2c60e1c86933a584b013393acb8d5.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/1f7e60f672e386a9c96ead9c2aed5742.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/8c4c1566e4341620a20292274af3adee.mp4"],
                ["foo.ibianma.com/jingying/word/2017/08/01/35dd81f2840035887d3ca4a7ed98590c.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/a8cfb57d7f85b6b43988fba16664b2cd.mp4",
                    "foo.ibianma.com/jingying/word/2017/08/01/93d1bb9487d115449afb35ba63f6bda3.mp4"]

            ]
        }
    }

$("#wushiyin li[data-m]").click(function(){
    $("#wushiyinword").text("");
    var gif = $(this).attr("data-gif"),m = $(this).attr("data-m"),v = $(this).attr("data-v"),h = $(this).attr("data-h"); 
    var gifArr=wsyObj[m]['gif'+gif],mp4Arr=wsyObj[m]['mp4'],mp3Arr=wsyObj[m]['mp3'];
    $('#wushiyinGIF').attr({'src':'http://'+gifArr[h][v]});
    $('#wushiyinMP4').attr({'src':'http://'+mp4Arr[h][v]});
    my_jPlayer.jPlayer("setMedia", {
        mp3: 'http://' + mp3Arr[h][v]
            });
    
    my_jPlayer.jPlayer("play");	
});
//jplayer
var my_jPlayer = $('#wushiyinJplay');
$('#wushiyinJplay').jPlayer({
        swfPath: "http://foo.ibianma.com/jingying/word/2018/07/04/afc3359503960bea5d3a476e21c72b42.swf",
        supplied: "mp3",
        wmode: "transparent"
});

        
$('#className li').click(function(e){
    var id = $(this).attr("data-id"); 
    $("#className li").removeClass("active");
    $(this).addClass("active");
    
    $("#classList .conitem").css({"display":"none"});
    document.getElementById(id).style.display="block";
});

