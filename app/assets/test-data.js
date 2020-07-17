const testData = [
    {
        "_id": "5f118e87751853940c11f21a",
        "index": 0,
        "guid": "0ce14d11-558a-4df2-b368-db2214503a88",
        "isActive": true,
        "balance": "$1,269.31",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "brown",
        "name": {
            "first": "Kayla",
            "last": "Middleton"
        },
        "company": "EXTREMO",
        "email": "kayla.middleton@extremo.tv",
        "phone": "+1 (853) 587-2547",
        "address": "884 Cameron Court, Verdi, Idaho, 9407",
        "about": "Ad labore qui non voluptate reprehenderit occaecat laboris pariatur. Nulla aute labore velit sunt amet consequat consectetur laboris consequat. Ex cillum adipisicing aliquip cillum non dolore adipisicing fugiat cupidatat culpa. Nostrud sunt proident reprehenderit magna excepteur cillum esse aute incididunt do. Ullamco sint laborum proident minim fugiat adipisicing cupidatat cupidatat consectetur incididunt reprehenderit culpa do consequat. Quis anim eu consequat fugiat laborum cupidatat ipsum magna nisi minim. Do magna consequat officia quis excepteur voluptate est cillum nostrud eu tempor aliquip pariatur.",
        "registered": "Friday, May 1, 2020 2:52 AM",
        "latitude": "5.149164",
        "longitude": "95.004963",
        "tags": [
            "excepteur",
            "culpa",
            "adipisicing",
            "cillum",
            "eiusmod"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Walter Goodman"
            },
            {
                "id": 1,
                "name": "Lourdes Clemons"
            },
            {
                "id": 2,
                "name": "Cochran Brock"
            }
        ],
        "greeting": "Hello, Kayla! You have 8 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5f118e87ff3314217378c087",
        "index": 1,
        "guid": "f8968d4a-f99d-4c58-8cfb-74377af8ef5b",
        "isActive": true,
        "balance": "$3,057.50",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "blue",
        "name": {
            "first": "Serrano",
            "last": "Gonzalez"
        },
        "company": "QUIZMO",
        "email": "serrano.gonzalez@quizmo.name",
        "phone": "+1 (939) 416-2418",
        "address": "595 Allen Avenue, Boykin, Louisiana, 7265",
        "about": "Duis labore ullamco officia proident eu id proident elit reprehenderit ex commodo exercitation. Exercitation nostrud excepteur ullamco esse voluptate nisi consequat. Cupidatat ex esse ullamco et occaecat non ipsum ut commodo ut do magna. Aute labore est officia voluptate. Exercitation sit occaecat nostrud magna commodo eu ea laborum laborum.",
        "registered": "Saturday, March 7, 2015 8:27 AM",
        "latitude": "15.234206",
        "longitude": "-158.846582",
        "tags": [
            "veniam",
            "minim",
            "anim",
            "exercitation",
            "sit"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Stuart Case"
            },
            {
                "id": 1,
                "name": "Clark Wilcox"
            },
            {
                "id": 2,
                "name": "Malinda Compton"
            }
        ],
        "greeting": "Hello, Serrano! You have 7 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5f118e87505577d95f54cdd1",
        "index": 2,
        "guid": "32e92ac8-7015-45f8-9fa1-1c7f39256542",
        "isActive": false,
        "balance": "$1,438.32",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "green",
        "name": {
            "first": "Adkins",
            "last": "Crawford"
        },
        "company": "EARTHWAX",
        "email": "adkins.crawford@earthwax.us",
        "phone": "+1 (886) 474-2244",
        "address": "446 Clymer Street, Oley, Virginia, 5041",
        "about": "Reprehenderit labore adipisicing ullamco fugiat eu magna nostrud anim. Ad ut esse in minim fugiat laboris ullamco exercitation officia ad reprehenderit eiusmod ad elit. Quis magna anim id commodo. Duis exercitation cupidatat fugiat consectetur magna nostrud nisi pariatur fugiat ex eu ullamco. Aute deserunt laboris incididunt anim cillum. Excepteur duis consectetur consequat elit do enim.",
        "registered": "Friday, July 15, 2016 1:41 PM",
        "latitude": "87.884012",
        "longitude": "12.65496",
        "tags": [
            "aliquip",
            "ut",
            "adipisicing",
            "laboris",
            "voluptate"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Moss Garza"
            },
            {
                "id": 1,
                "name": "Savage Norman"
            },
            {
                "id": 2,
                "name": "Cantu Cooley"
            }
        ],
        "greeting": "Hello, Adkins! You have 10 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5f118e87e8c05ba8e698f4fd",
        "index": 3,
        "guid": "76e99e5f-c242-45e6-bf71-4b915a8e53b1",
        "isActive": false,
        "balance": "$2,646.44",
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "eyeColor": "blue",
        "name": {
            "first": "Candace",
            "last": "Mckinney"
        },
        "company": "POOCHIES",
        "email": "candace.mckinney@poochies.io",
        "phone": "+1 (834) 426-2504",
        "address": "256 Meserole Avenue, Goodville, Michigan, 7863",
        "about": "Nisi voluptate ad cillum cillum laborum. Consectetur veniam nostrud sunt enim consectetur ea ullamco veniam consequat velit magna. Elit laborum proident cupidatat amet fugiat quis esse tempor ullamco reprehenderit sunt exercitation dolore.",
        "registered": "Wednesday, June 11, 2014 12:45 AM",
        "latitude": "43.405437",
        "longitude": "-30.939012",
        "tags": [
            "qui",
            "aliqua",
            "cupidatat",
            "veniam",
            "laborum"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mcdowell Wiley"
            },
            {
                "id": 1,
                "name": "Diann Cain"
            },
            {
                "id": 2,
                "name": "Aguirre Fields"
            }
        ],
        "greeting": "Hello, Candace! You have 9 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5f118e87d18ae7e4138bbe00",
        "index": 4,
        "guid": "f0d4a2e6-4599-4d87-b8cd-0f8973bd74c7",
        "isActive": true,
        "balance": "$2,721.53",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "brown",
        "name": {
            "first": "Herminia",
            "last": "Shields"
        },
        "company": "ZILLAR",
        "email": "herminia.shields@zillar.ca",
        "phone": "+1 (995) 473-2736",
        "address": "300 Nichols Avenue, Wintersburg, West Virginia, 4289",
        "about": "Do duis nisi pariatur duis in. Velit incididunt sint pariatur qui sint exercitation dolor magna ut eiusmod labore eiusmod reprehenderit ea. Id exercitation laboris duis eu cupidatat duis esse tempor nulla commodo. Sit ad mollit laboris nulla aute nisi ex excepteur excepteur deserunt nostrud enim non.",
        "registered": "Sunday, June 1, 2014 4:16 AM",
        "latitude": "86.472624",
        "longitude": "-89.6048",
        "tags": [
            "dolor",
            "duis",
            "exercitation",
            "deserunt",
            "proident"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Morrison Wong"
            },
            {
                "id": 1,
                "name": "Combs Joseph"
            },
            {
                "id": 2,
                "name": "Susanne Rosa"
            }
        ],
        "greeting": "Hello, Herminia! You have 5 unread messages.",
        "favoriteFruit": "strawberry"
    }
];

export default testData;
