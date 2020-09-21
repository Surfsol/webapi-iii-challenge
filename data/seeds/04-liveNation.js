exports.seed = function(knex, Promise){
    return knex('liveNation').insert(
        makeMulti()
    )
}

let show = [{cover: "https://static.maestro.io/media/5eb9a2f25216e3002c2b41c7/5f49bb7353bef000a4043b66.jpg",
date: "Default value",
definition: "HD",
description: "",
hour: "8pm PT",
id: 0,
length: "3h20m",
live: false,
name: "Ziggy Marley live from The Wiltern",
pageId: "5edc0d2cbc1a16a309e5d4fe",
performer: "Default value",
rated: "R",
sizzle: true,
sizzleSource: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
thumbnail: "https://static.maestro.io/media/5eb9a2f25216e3002c2b41c7/5f49bb7353bef000a4043b66.jpg",
venue: "Default value"
},
{cover: "https://static.maestro.io/media/5eb9a2f25216e3002c2b41c7/5efbc215b0535900a414c6c1.png",
date: "Default value",
definition: "HD",
description: "",
hour: "8pm PT",
id: 1,
length: "3h20m",
live: false,
name: "Lollapalooza Samsung Stage",
pageId: "5eb9a3f7363bcc8030d55f17",
performer: "Default value",
rated: "R",
sizzle: true,
sizzleSource: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
thumbnail: "https://static.maestro.io/media/5eb9a2f25216e3002c2b41c7/5efbc215b0535900a414c6c1.png",
venue: "Default value",
},
{cover: "https://static.maestro.io/media/5eb9a2f25216e3002c2b41c7/5f236a855c86f400a41dcad5.jpg",
date: "Default value",
definition: "HD",
description: "",
hour: "8pm PT",
id: 3,
length: "3h20m",
live: false,
name: "A-Ha Live from The Wiltern",
pageId: "5edc0d081d583a3d78583a10",
performer: "Default value",
rated: "R",
sizzle: true,
sizzleSource: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
thumbnail: "https://static.maestro.io/media/5eb9a2f25216e3002c2b41c7/5f236a855c86f400a41dcad5.jpg",
venue: "Default value"
},
{
cover: "https://static.maestro.io/media/5eb9a2f25216e3002c2b41c7/5f49b8f594c5f400a5b52ad2.png",
date: "Default value",
definition: "HD",
description: "",
hour: "8pm PT",
id: 1,
length: "3h20m",
live: false,
name: "Hannah Gadsby",
pageId: "5f49b8daee982d507e2a953a",
performer: "Default value",
rated: "R",
sizzle: true,
sizzleSource: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
thumbnail: "https://static.maestro.io/media/5eb9a2f25216e3002c2b41c7/5f49b8f594c5f400a5b52ad2.png",
venue: "Default value"
}
]



function makeMulti() {
    let arr = []
  for (let i = 0; i < 300; i++) {
    let num = i
    let obj = {
        array_id: i,
        kind: 'pagesRow',
        pages: show,
        title_text: 'UP NEXT'+' '+ num,
        typeSwimlane: 'featured_events',
      }
    arr.push(obj);
  }
  return arr;
}