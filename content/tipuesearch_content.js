var tipuesearch = {"pages": [{'title': 'About', 'text': '組員 : 41023119 呂承劼 41023138 林敬燐 \n 倉儲 :  https://github.com/mdecd2023/2a-pj1ag10 \n 網站 :  https://mdecd2023.github.io/2a-pj1ag10/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'Progress', 'text': 'week 1 : \xa0 講解課程內容及評分標準 \n week 2 : \xa0 二二八放假 \n week 3 :  講解如何建立靜態網站 \n 分工進度 \n 41023119 建立靜態網站、編寫 dynamic stie、progress、tutorial 1 、專案規劃及修改note目錄 \n 41023138 過程發現問題，並且問老師、解決問題，編寫 note目錄 \n week 4 :  Bubblerub tutorial 製作過程與心得 \n 分工進度 \n 41023119 加入 tutorial .ttt 檔 wink 影片及 problem 、notestud2.cycu.org 及 add wink 筆記、新增 w4 目錄 \n 41023138 解決倉儲同步問題、加入同步倉儲筆記及 tutorial 簡報 \n week 5 :  建立 TCEXAM 帳號、添加 latex \n 分工進度 \n 41023119 克隆  2b-pj1bgz  至隨身碟，並將.github、images 及 latex 複製到個組倉儲、修改 latex 簡報 \n 41023138 解決倉儲問題 \n week 6 :  TCEXAM 小考、說明建立 pj1 統整協同作業 \n 分工進度 \n 41023119 解決同步倉儲及 acp 問題、完成 bubbleRob football 場地 \n 41023138 建立 pj1 統整協同作業 \n week 7 :  清明節放假 \n week 8 :  TCEXAM 小考、 製作 bubbleRob football \n 41023119 編譯 bubbleRob football 倒數計時器程式 \n 41023138 解決倉儲問題 \n', 'tags': '', 'url': 'Progress.html'}, {'title': 'note', 'text': '添加課程筆記 \n', 'tags': '', 'url': 'note.html'}, {'title': 'add wink', 'text': '將下面全選複製到 source code (也就是<>裡面)即可 \n <script>// <![CDATA[\nvar winkVideoData_w1_1 = {\n  dataVersion: 1,\n  frameRate: 10,\n  buttonFrameLength: 5,\n  buttonFrameOffset: 2,\n  frameStops: {\n  },\n};\n// ]]></script>\n<!-- 接下來將 mp4 檔案從 downloads 目錄取出 -->\n<div class="winkVideoContainerClass"><video width="800" height="600" autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="/cmsimde/static" data-varname="winkVideoData_w1_1" muted="true">\n<source src="./../downloads/xxxxxxxxx.mp4" type="video/mp4" /></video></div> \n \n', 'tags': '', 'url': 'add wink.html'}, {'title': 'stud2.cycu.org', 'text': '資料連結: team-cad2022-w5 \n step1. (登入 stud.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud.cycu.org:\xa0 在命令列視窗, 以 ssh cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統  step2. 請到 excel 檔案 查詢 stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用) 與遠端 (給 stud.cycu.org) 埠號  step3. (透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應)\xa0 開啟另一個命令列, 執行 sftp 帳號@stud.cycu.org\xa0\xa0 輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應.  step4. 與在近端(Windows)利用\xa0 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用 ssh-keygen 建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下.  step5. 利用 sftp\xa0 進入 stud.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至\xa0 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰.  step6. 接下來要下載\xa0 config 設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中.  step7. 上面的\xa0 config\xa0 主要設定 SSH 協定對\xa0 github.com\xa0 連線時的代理主機, 但取下\xa0 cmsimde\xa0 子模組使用的是\xa0 https,\xa0 因此執行下列\xa0 git clone 時將會同時用到\xa0\xa0 SSH\xa0 與 https\xa0 協定,\xa0 因此除了\xa0 .ssh\xa0 目錄下要有\xa0 config\xa0 設定檔案外, 也必須同時在\xa0 .gitconfig\xa0 檔案中設定\xa0 http.proxy,\xa0 也就是以 git config --global http.proxy http://p42.cycu.org:3128 設定供 https 連線使用的代理主機, 並且以\xa0 git config --global\xa0 user.name 以及\xa0 git config --global\xa0 user.email 設定提交用的身分註記.  step8. 在 stud.cycu.org 中, 以 git clone --recurse-submodules\xa0 git@github.com:mdecad2022/site-個人github帳號.git\xa0\xa0 取下個人倉儲.  step9. 假如先前使用\xa0 git clone 並沒有取下\xa0 cmsimde 子模組內容, 只要在設定 https 代理主機後, 進入倉儲根目錄執行\xa0 git submodule update --init\xa0 --recursive\xa0 即可取下子模組內容.  step10. 接著下載 server.py, 在 Windows 編輯 server.py, 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄.  step11. 在 stud.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行 python3 server.py, 就可啟用動態網站.  step12. 設定完成後, 各學員將會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站), https://stud.cycu.org:8xxxx\xa0\xa0 看到個人的動態網站.  step13. 動態網站改版後, 轉為靜態, 必須透過 source acp 以 SSH 將改版內容送回 github. (必須利用 chmod u+x acp 將 acp\xa0 檔案屬性改為對\xa0 user 可以 execute (也就是 x 屬性).  step14. 執行 source acp\xa0 "提交字串" 之前必須要 git config\xa0 --global user.name, git config\xa0 --global user.email, git config\xa0 --global http.proxy  step15. 上述採用指令模式對\xa0 server sftp 也可以利用\xa0 Filezilla portable, 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \n \n', 'tags': '', 'url': 'stud2.cycu.org.html'}, {'title': 'Synchronize', 'text': '如何同步倉儲步驟 \n step1. 輸入指令 git add . ，提交指紋碼的變更 \n step2. git commit -m "message" (message裡輸入提交的名稱) \n step3. 輸入指令 git pull 將倉儲與同組的隊員更新至最新版 \n step4. 打cms檢查是否同步 \n step5. 如果倉儲內容有變更，需再輸入指令 git push \n step6. 如果版本推上去之後有衝突，需仔細檢查哪裡出錯並修正 \n', 'tags': '', 'url': 'Synchronize.html'}, {'title': 'dynamic site', 'text': 'step1. 下載可攜 portable_python 後打開 start_ipv6 \n step2. 利用指令 git clone https://github.com/mdecd2023/2a-pj1agxxx.git ( xxx為自己組別代號) \n step3. 利用指令 git clone  https://github.com/mdecycu/cmsimde.git  將作為倉儲的 cmsimde 目錄克隆到倉儲裡 \n step4. 進入到 cmsimde 資料夾內把 up_dir 取出所有檔案放入倉儲的根目錄 \n step5. 利用指令 cd 2a-pj1agxxx 後，輸入指令 cms 即可打開 dynamic site \n step6. 將 token 放入 倉儲資料夾 > .git > config\xa0 中的url(記得要加@) \n step7. 以 generate_pages 轉為靜態後，就可以直接 acp 進行 git add,commit 與 push \n', 'tags': '', 'url': 'dynamic site.html'}, {'title': '專案規劃', 'text': '規劃專案的12個步驟 \n 如果我們有好多好多的事情要做，誰不愛擁有一個清單？告訴自己該做什麼，並且詳細的條列出來，下次只要依循這些清單上面的步驟，我們就可以完成一個專案，又不用害怕遺漏甚麼東西，那該有多好呢？當然身為負責這個專案的你，以下步驟可以幫助你更輕鬆有效的規劃專案。 \n 1.定義範疇 這是一個規劃專案的重要第一步，此專案要做甚麼、包含的範圍有多廣，必須在何時完成，你必須把這個大餅畫出來再做細分，才能夠掌握此專案的正確方向。 2.確定您的專案發起人 每一個專案都會有一個發起人或利益相關者，找出這些人都是誰。 \n 他們必定會對此專案有一定的影響力，以確保該專案向前推進時，該找誰來溝通，並且一同策劃專案的方向，有了這個專案發起人，可以讓專案經理更輕鬆的管理專案。 3.確定可用資源 當你在定義範疇的時候，你就必須清楚你需要多少的資源才得以完成此專案，他們是技術性質的嗎？他們需要一個特殊的技能或培訓嗎？他們是已經在公司裡面嗎？或他們需要被聘用或簽約。 \n 專案開始之前，你必須把資源分配好。 4.檢查時程 專案規劃最重要的部分就是專案時程，你必須要了解你有多少的事情要做，搭配上你的資源必須花費多少的時間，雖然我們的時間總是在變，我們有許多無法控制的因子，沒有辦法確定正確的時間。 \n 但是如果有一個完美的甘特圖，可以讓你更能夠掌握專案的進度。 5.建立WBS 將你的專案展開，越小的事越容易完成，所以把WBS展開的仔細點，會更有幫助。許多人都會選擇用心智圖的方式，能夠簡單明瞭的看到所有的任務項目，讓你在報告的時候也可以有漂亮且專業的圖來呈現。 6.切分成小步驟 如果接到手上的是一個很大的專案，你可能不知道該從何處下手，如果你把專案切得越細，你就可以更清楚，你所需要的資源和時間，也更能夠做細部的掌控，所以只要有一個好的觀念，相信再大的專案也難不倒你。 7.制定一個計劃草案 當你正在做一個專案時，你必須清楚到成本、時間、資源，大致上需要做些什麼。你可以把這些擬定成一個計畫草案，這是你第一次把所有的東西都整合在一起，也有可能會寫上專案開始的時間以及預計完成的時間，讓你的團隊們能夠知道整個計畫的概要。 8.草案檢討與反饋 當你完成了第七步驟的草案後，你就可以發佈給團隊成員們，大家找個時間做個會議，在會議當中，團隊成員們可以對草案提出反饋，在這樣的溝通與互動過程中，能夠將專案計畫導到更接近完美的專案計畫。 9.完成精確計畫 現在該計劃正在向前推進，透過反饋與檢討讓專案計畫逼近完美了，現在就開始把這些資訊整理、討論該如何去做執行，讓這個專案開始啟動吧！ 10.監測進展情況 開始做執行的階段，你必須不斷監測也許是每一周或是每一天，你必須要好好的規劃，在執行的過程中，難免會出現一些意料之外的事情，所以你必須要趕緊處理，也許是停止或者找解決的方法。 \n 身為一個專案經理人，在這個時候是非常重要的，如果搭配一個好的專案軟體，會讓你的專案更加順利。   11.保留所有文件 在執行一個專案時，我們無法確保此專案會一直照著我們的規劃走，如果有些突發狀況，雖然不是我們預期的，但我們還是要把他記錄下來。 \n 這樣的專案紀錄可以讓整個專案更逼近寫實，也可以讓之後的成員們，有一些資料能夠參考與學習。 12.專案結束仍要保持聯繫 最後，你已經完成專案了，但是你不能確保此專案之後不會有任何問題，有些地方還是需要專家的幫忙，如果你的技術部門是外包的，那你就必須要隨時與你的外包商聯繫，如果哪一天突然發生突發狀況，你才不會找不到人來幫你處理，隨時關心團隊成員，也可以建立良好的人脈關係唷！ \n 參考資料:\xa0 https://www.projectclub.com.tw/hard-power/pm-dictionary/754-12.html \xa0 \n', 'tags': '', 'url': '專案規劃.html'}, {'title': 'w3', 'text': 'w3 - 已完成分組網頁 透過 stud2.cycu.org 執行動態網站 w3 - 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. w3 開始執行  https://mde.tw/pjcopsim/content/bubbleRobTutorial.html   星期四補課時間, 要驗收 Tutorial1 (心得, 展示頁面說明各組員所完成項目, 說明該組的專案規劃) \n', 'tags': '', 'url': 'w3.html'}, {'title': 'check website building', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n', 'tags': '', 'url': 'check website building.html'}, {'title': '41023119 心得', 'text': '本學期課程為協同設計，主要有四點 \n 1.看參與協同者能否 同步並發 執行所被交付的內容 \n 2.能否保留每一個階段所從事的設計版 \n 3.能否確認哪一階段的哪一事項是由哪位成員所完成 (可居功而且無法諉過) \n 4.了解採用不同設計流程的原因, 目的與所可能遭遇的問題, 讓協同者可在逐步改版過程逼近預設目標 \n \n 第一次與同學合作維護倉儲及建立網站，過程中遇到了不少問題。 \n 1. 一開始要將倉儲克隆到隨身碟的可攜程式裡時，發現無法將其克隆下來 \n -> 因為使用學校的電腦及網路，會發現學校ipv6無法正常運作，將網路切至ipv4即可克隆倉儲 \n 2. 要將 dynamic site 做好的內容 acp 到 github 倉儲上時無法上傳成功 \n -> 與問題一相同的類型，將學校網路設置為ipv4即可acp \n', 'tags': '', 'url': '41023119 心得.html'}, {'title': '41023138 心得', 'text': '本課程為協同產品設計實習，每周上課時數為4小時，兩小惟教學時段，兩小時為實習，課程內容包刮Programming與Computer aided Design \n 我這是第一次跟同學一組搞倉儲，有遇到一些問題以下是問題: \n 1. 一開始要將倉儲克隆到隨身碟的可攜程式裡時，發現無法將其克隆下來 \n -> 因為使用學校的電腦及網路，會發現學校ipv6無法正常運作，將網路切至ipv4即可克隆倉儲 \n 2. 要將 dynamic site 做好的內容 acp 到 github 倉儲上時無法上傳成功 \n -> 與問題一相同的類型，將學校網路設置為ipv4即可acp \n 有問過老師之後，我們也分工合作，把這個禮拜的進度慢慢在做了。 \n', 'tags': '', 'url': '41023138 心得.html'}, {'title': 'w4', 'text': 'BubbleRub tutorial 製作結果與心得 presentation (以 Web-based 方式發表): \n https://mdecd2023.github.io/2a-pj1ag10/content/tutorial1.html Tutorial 議題: Why? How? What? (主題為何? 如何協同? 完成內容展示 - in person or in webpages) \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': 'bubbleRob football 檔案 :  newbing_bubbleRob_football \n 3/30 已完成場地 \n', 'tags': '', 'url': 'w5.html'}, {'title': 'pj1', 'text': '', 'tags': '', 'url': 'pj1.html'}, {'title': 'w6', 'text': '完成連線的分組 : ag1 : 41023143、41023147 ag2 : 41023146、41023148 ag5 : 41023121、41023134 ag6 : 41023104、41023112 ag7 : 41023103、41023106 ag8 : 41023102、41023107 ag9 : 41023130、41023142 ag10 : 41023119、41023138 ag11 : 41023122、41023124 ag12 : 41023114、41023126 ag13 : 41023133、41023140 ag14 : 41023113、41023153 ag15 : 41023135、41023154 ag16 : 41023132、41023151 ag17 : 41023118、41023120 ag18 : 41023131、41023148 ag21 : 41023116、41023137 未完成連線的分組組員學號 : ag3-\xa0\xa0\xa0 41023108\xa0 柯惠心、41023110 紀宜馨 ag4-\xa0\xa0\xa0 41023125\xa0 李學淵、41023128 林呈恩 ag19-\xa0 41023101\xa0 王怡婷、41023141 姜連安 ag20-\xa0 41023109\xa0 洪于芳、41023105 李宛妮', 'tags': '', 'url': 'w6.html'}, {'title': 'tutorial1', 'text': '球體碰撞模擬 \n bubbleRobTutorial 簡報：\xa0  BubbleRub作業.pptx \n bubbleRobTutorial 檔案： bubbleRobTutorial.ttt \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n bubbleRobTutorial wink \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n 成功將 vision sensor 的畫面顯示出來(參考  pj1ag2  vision sensor的做法) \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n 41023119 心得: 製作bubbleRobTutorial時遇到不少問題，如:軸在裝配時選轉方向設置顛倒，導致bubbleRobTutorial 模擬後變成倒著跑，也有遇到只會在原地轉的，還有名稱大小寫打錯導致程式無法運行，但後來都有順利解決。因為參考資料是英文，所以在製作過程中遇到英文單字看不懂或無法理解他的意思，需要上網參考資料才能理解。 \n 41023138心得: 製作bubbleRobTutoria作業，我們這組遇到的問題是會後退跑跟原地旋轉，一開始我們把座標多了一個負號就不是往後跑，我們以為我們就解決問題了，後續的東西加進去之後，也陸續出現問題，就從心重頭再做一次，一步一步慢慢做，到最後有順利完成。 \n', 'tags': '', 'url': 'tutorial1.html'}, {'title': 'problem', 'text': 'CoppeliaSim Edu use language \n CoppeliaSim（也稱作V-REP）是一個通用的機器人仿真軟件，支持多種編程語言，包括 C/C++、Python、Lua、Matlab 等等。您可以使用其中任何一種語言進行仿真場景的構建、機器人控制、物體偵測等等操作。CoppeliaSim提供了多種API函數供不同的編程語言使用，讓使用者能夠快速進行仿真操作。 \n Lua language \n Lua 是一種輕量級、高效、可擴展的腳本語言，被廣泛應用於遊戲開發、Web開發、嵌入式系統等領域。它是由巴西里約熱內盧天主教大學（Pontifical Catholic University of Rio de Janeiro）的一個小組在1993年開發的。Lua的設計目標是提供一種簡單、可靠、可擴展的腳本語言，它具有以下特點： \n 1. 簡潔易學：Lua語法簡潔明了，易於學習和使用。 2. 高效快速：Lua的運行速度非常快，並且具有極低的內存消耗。 3. 可擴展性強：Lua提供了豐富的 API 和庫，支持動態擴展，能夠方便地與 C/C++ 語言進行互操作。 4. 跨平台性強：Lua可以運行在多種操作系統上，包括 Windows、Linux、Mac OS 等等。 \n 由於它的高效性和易擴展性，Lua被廣泛用於遊戲開發中，如《魔獸世界》、《Minecraft》等遊戲就使用了Lua。 \n \n CoppeliaSim.ttt 檔案格式與 .simscene.xml 檔案格式有何不同? \n 1. 文件格式不同： CoppeliaSim.ttt文件是二進制文件格式，而.simscene.xml文件是XML文件格式。 2. 可讀性不同： CoppeliaSim.ttt文件是一個二進制文件，因此不易讀取和修改。而.simscene.xml文件是一個純文本文件，易於編輯和修改，也易於版本控制。 3. 儲存方式不同： CoppeliaSim.ttt文件可以通過點擊CoppeliaSim軟件的“保存”按鈕來保存。而.simscene.xml文件則可以通過使用CoppeliaSim軟件中的“導出場景”功能來生成，或者通過手動編輯XML文件來創建。 4. 功能不同： CoppeliaSim.ttt文件格式支援保存仿真場景中的所有物體、傳感器、控制器等等的信息，並且可以包含Lua代碼。.simscene.xml文件格式僅支援保存仿真場景中的物體、位置、大小、形狀等基本信息，不支援保存複雜的控制代碼。 總而言之，CoppeliaSim.ttt文件格式和.simscene.xml文件格式在文件格式、可讀性、儲存方式和功能等方面存在差異。使用者可以根據需要選擇不同的文件格式來保存仿真場景。 \n \n 在 coppeliasim 中, scene 與 model 有何不同? \n Scene 是 CoppeliaSim 中的基本單位，它包括所有的物體、傳感器、效果器和控制器等等。在 CoppeliaSim 中，使用者可以通過創建 Scene 來構建仿真場景，並在其中進行各種操作。 Model 則是 Scene 中的一個物體，它可以是機器人、傳感器、效果器等等。Model 有自己的位置、姿態、大小和形狀等屬性，可以被控制和操作。 簡而言之，Scene 是 CoppeliaSim 中的最基本單位，Model 是 Scene 中的物體。在 CoppeliaSim 中，使用者可以通過創建 Scene 來構建仿真場景，再在其中添加不同的 Model，通過控制和操作這些 Model 來實現所需的仿真功能。 \n 在 CoppeliaSim 中, 何謂 clean model? 在CoppeliaSim中，clean model是指一個簡化的物體模型，通常是由一個或多個基本形狀（例如球體、方體等）組成的，用於減少物體模型的複雜性和計算量，以提高仿真性能。clean model是在物體創建過程中自動生成的，可以在CoppeliaSim中的物體屬性面板中進行設置和調整。 使用clean model可以減少物體模型的三角面數量，提高仿真效率。在CoppeliaSim中，物體模型的三角面數量會直接影響仿真速度，因此使用clean model可以在保持物體外觀的前提下，大幅提高仿真速度。另外，clean model也可以用於減少物體模型的碰撞形狀，提高碰撞檢測效率。 需要注意的是，使用clean model可能會導致物體模型的外觀出現明顯的不同，因此需要根據實際需求和模擬效果來選擇是否使用clean model。如果需要高精度的物體模擬效果，則不建議使用clean model。 \n 在CoppeliaSim scene 中,如何利用 lua 以及 python 建立 primitive type object, 並利用程式設定物件位置? \n 在CoppeliaSim scene中，可以使用Lua或Python腳本來建立基本形狀物體（primitive type object），並利用程式設定物體位置。 以下是使用Lua腳本建立基本形狀物體並設定位置的示例： lua \n -- 創建一個球形物體 local radius = 0.1 local ballHandle = sim.createPureShape(0, 16, {radius, radius, radius}, 0.005, nil) -- 設定物體位置 local position = {0, 0, 0.5} sim.setObjectPosition(ballHandle, -1, position) 以上代碼首先創建了一個半徑為0.1的球形物體，並將其存儲在變量ballHandle中。然後，通過sim.setObjectPosition函數將球形物體放置在世界坐標系中的位置(0,0,0.5)。 以下是使用Python腳本建立基本形狀物體並設定位置的示例： python import sim # 創建一個球形物體 radius = 0.1 ballHandle = sim.simCreatePureShape(0, 16, [radius, radius, radius], 0.005, None) # 設定物體位置 position = [0, 0, 0.5] sim.simSetObjectPosition(ballHandle, -1, position) 以上代碼首先創建了一個半徑為0.1的球形物體，並將其存儲在變量ballHandle中。然後，通過sim.simSetObjectPosition函數將球形物體放置在世界坐標系中的位置(0,0,0.5)。 需要注意的是，以上代碼僅示範了如何創建基本形狀物體並設定位置。在實際應用中，可能需要對物體進行更多的設置，例如添加碰撞形狀、質量等等。使用者可以根據需要進一步設置物體屬性，以滿足自己的需求。 \n Coppeliasim 中graph 作用是什麼? \n Graph 是可以記錄和可視化模擬數據的場景對象。數據記錄在數據流中，數據流是與時間戳相關聯的值的順序列表，數據流可以直接可視化為時間圖。通過組合 2 或 3 個數據流，可以獲得場景中的 x/y 曲線或 3D 曲線。 \n 程式序與非程式序差異為何? \n 程式序列通常包括由程式語言編寫的指令，用於告訴計算機如何執行特定的任務。這些指令通常包括條件語句、迴圈、函數和變量等結構，並且是按照嚴格的語法規則編寫的。這些指令被編譯器或解釋器轉換為機器碼，這是計算機可以理解和執行的二進制指令。 非程式序列則是一系列指令或操作，用於執行某些特定的任務，但它們通常不是用程式語言編寫的。這些指令可能是人類可以直接理解和執行的，例如在工廠中製造產品時使用的操作序列。它們可能包括按照特定順序執行的一系列步驟，例如裝配零件或烹飪食物，或者可能包括從一個系統中提取信息並在另一個系統中輸入信息的一系列操作。', 'tags': '', 'url': 'problem.html'}]};