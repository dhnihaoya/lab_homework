    const works = [
        { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
        { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
        { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
        { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
    ];

    function display(number) {
        var frame = document.createElement("div");//大的紫色框
        frame.className="item";
        var Genre = document.createElement("p");
        Genre.innerText = "Genre:" + works[number].tips;
        Genre.style.padding = "0 0 10px 0"; //调整与下面板块的间距
        frame.appendChild(Genre);


        var nameBox = document.createElement("div");//框内的第一个框
        nameBox.className = "inner-box";
        var Author = document.createElement("h3");
        Author.innerText = works[number].author;
        Author.style.display = "inline";
        Author.style.padding = "0 10px 0 0";
        nameBox.appendChild(Author);
        var Lifetime = document.createElement("h4");
        Lifetime.innerText = "lifetime:" + works[number].lifetime;
        Lifetime.style.display = "inline";
        //调整字的各种区别
        nameBox.appendChild(Lifetime);
        frame.appendChild(nameBox);

        var photoBox = document.createElement("div");
        photoBox.className = "inner-box";
        frame.appendChild(photoBox);

        var PopularPhotos = document.createElement("h3"); //第二个框中的字
        PopularPhotos.innerText="Popular Photos";
        photoBox.appendChild(PopularPhotos);

        for(let j = 0 ;j < works[number].photos.length;j++){
            var img = document.createElement("img");        //图
            img.src = works[number].photos[j];
            img.className = "photo";
            photoBox.appendChild(img);                              //加进第二个框
        }

        var visit = document.createElement("button");//按钮
        visit.textContent = "visit";
        frame.appendChild(visit);

        document.body.appendChild(frame);
    }
    for( let k in works) {
        display( k );
    }