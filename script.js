var picks=[
    {
        name:'The Plan - Single',
        image:"https://upload.wikimedia.org/wikipedia/en/6/62/Travis_Scott_-_The_Plan.png",
        artist:'Travis Scott',
        year:2020,
    },
    {
        name:'350',
        image:"https://upload.wikimedia.org/wikipedia/en/6/66/%C2%A5%24_-_Vultures_2.png",
        artist:'¥$',
        year:2024,
    },
    {
        name:'Self Care',
        image:"https://cdns-images.dzcdn.net/images/cover/5c5774a43a421d37f58ae170df87b9e8/500x500.jpg",
        artist:'Mac Miller',
        year:2016,
    },
    {
        name:'Moon River',
        image:"https://preview.redd.it/v2ycc7xwxgg01.jpg?width=640&crop=smart&auto=webp&s=d7d67ce21c99403b7d6dc89d1d0f9305f4dfa7f0",
        artist:'Frank Ocean',
        year:2018,
    },
    {
        name:'Snooze',
        image:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
        artist:'SZA',
        year:2021,
    }

]

var recents=[
    {
        name:'Not Like Us-Single',
        image:'https://cdns-images.dzcdn.net/images/cover/84345d29bc2ed8e713112425f8417e97/1900x1900-000000-80-0-0.jpg',
        artist:'Kendric Lamar',
    },
    {
        name:'Flower Boy',
        image:'https://m.media-amazon.com/images/I/814AZHWxf0L._UF1000,1000_QL80_.jpg',
        artist:'Tyler, The Creator',
    },
    {
        name:'Search & Rescue-Single',
        image:'https://upload.wikimedia.org/wikipedia/en/5/58/Drake_-_Search_%26_Rescue.png',
        artist:'Drake',
    },
    {
        name:'Nectar',
        image:'https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png',
        artist:'Joji',
    },
    {
        name:'As It Was-Single',
        image:'https://media.architecturaldigest.com/photos/623e05e0b06d6c32457e4358/1:1/w_3000,h_3000,c_limit/FINAL%20%20PFHH-notextwlogo.jpg',
        artist:'Harry Styles',
    },
    {
        name:'Blond',
        image:'https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg',
        artist:'Frank Ocean',
    }
]

function addRecents(){
    var reclutter=" ";
    recents.forEach(function(rec){
        reclutter+=`<div class="recent-card w-[15rem] h-[100%]">
            <div class="recent-image w-[100%] h-[80%] rounded-[10px] overflow-hidden border-[1px] border-zinc-700">
                <img src="${rec.image}">
            </div>
            <div class="recent-caption leading-[18px] py-[3px]">
                <div class="recent-name font-semibold text-[var(--text)] text-[13px]">
                    <p>${rec.name}</p>
                </div>
                <div class="recent-artist font-semibold text-[var(--subtext)] text-[12px]">
                    <p>${rec.artist}</p>
                </div>
            </div>
        </div>`
    })
    document.querySelector('.recentMarquee').innerHTML=reclutter;
}


function addpicks(){
    var clutter=" ";
    picks.forEach(function(pick){
        clutter+=`<div class="card">

                    <div class="image">
                        <img src="${pick.image}" alt="${pick.name}" crossorigin='anonymous'>

                    </div>
                    <div class="caption ">
                        <div class="pick-name text-[14px] font-semibold pt-[12px] mb-[2px]">
                            <p>${pick.name}</p>

                        </div>
                        <div class="pick-artist text-[13px]">
                            <p>${pick.artist}</p>

                        </div>
                        <div class="pick-year text-[13px]">
                            <p>${pick.year}</p>
                        </div>
                    </div>
                </div>
        `
    })
    document.querySelector('.picks').innerHTML=clutter;
}


addpicks();
addRecents();